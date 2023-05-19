"use client"
import { useSupabase } from '@/app/supabase-provider';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const IdeaFormSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
});

export default function IdeaForm() {
  const { supabase } = useSupabase()
  const router = useRouter()

  return (
    <Formik
      initialValues={{ title: '', content: '' }}
      validationSchema={IdeaFormSchema}
      onSubmit={async (values) => {
        try {
          const { error, status } = await supabase.rpc("create_idea", {
            content: values.content,
            title: values.title
          })
          if (!error && status === 200) {
            console.log("in post success")
            router.push("/main")
            router.refresh()
          }
        } catch (error) {
          console.log(error)
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex flex-col flex-1 gap-4 rounded-md bg-[rgba(0,0,0,0)] text-white p-4 '>
          <div>
            <Field name="title" placeholder="Title" className='w-full font-bold  bg-zinc-950  rounded-md p-4' />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
          </div>
          <div className='h-full'>
            <Field name="content" as="textarea" placeholder="What's on your mind?" className='h-full w-full  bg-zinc-950  rounded-md p-4' />
            {errors.content && touched.content ? (
              <div>{errors.content}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
