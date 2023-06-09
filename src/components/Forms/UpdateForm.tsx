"use client"
import { useSupabase } from '@/app/supabase-provider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const IdeaFormSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
});

export default function UpdateForm({ data }: any) {
  const { supabase } = useSupabase()
  const router = useRouter()

  const [idea] = data

  return (
    <Formik
      initialValues={{ title: `${idea.title}`, content: `${idea.content}` }}
      validationSchema={IdeaFormSchema}
      onSubmit={async (values) => {
        try {
          const { error, status } = await supabase.from("ideas").update({
            title: values.title,
            content: values.content,
            created_at: new Date()
          })
            .eq("id", idea.id)
          if (!error && status === 204) {
            router.push("/main")
            router.refresh()
          }
        } catch (error) {
          console.log(error)
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex flex-col flex-1 gap-4 rounded-md bg-[rgba(0,0,0,0) p-4'>
          <div>
            <Field
              name="title"
              placeholder="Title"
              className='w-full text-xl font-bold  bg-zinc-800  rounded-md p-4 text-stone-200 outline-none focus:outline-cyan-800'
            />
            <ErrorMessage
              name="title"
              render={msg => <div className='text-red-400'>{msg}</div>}
            />
          </div>
          <div className='h-full'>
            <Field
              name="content"
              as="textarea"
              placeholder="What's on your mind?"
              className='h-full w-full text-lg  bg-zinc-800  rounded-md p-4 text-stone-300 outline-none focus:outline-cyan-800'
            />
            <ErrorMessage
              name="content"
              render={msg => <div className='text-red-400'>{msg}</div>}
            />
          </div>
          <div className='flex justify-center items-center'>
            <button
              type="submit"
              className="bg-zinc-900 h-10 w-36 rounded-xl text-center uppercase font-bold  text-stone-200">
              Update
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
