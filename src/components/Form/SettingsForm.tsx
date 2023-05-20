"use client"
import { useSupabase } from '@/app/supabase-provider';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const SettingsFormSchema = Yup.object().shape({
  view: Yup.string(),
});

interface settingsState {
  view: string
}

export default function SettingsForm({ settings }: any) {
  const { supabase } = useSupabase()
  const [options, setOptions] = useState<settingsState>({
    view: settings[0].view
  })

  const router = useRouter()
  // Big fat error here because this exposes user_id in a request


  const changeView = () => {
    if (options.view === "list") {
      setOptions({
        ...options,
        view: "box"
      })
    } else {
      setOptions({
        ...options,
        view: "list"
      })
    }
  }

  return (
    <Formik
      initialValues={{
        view: '',
      }}
      validationSchema={SettingsFormSchema}
      onSubmit={async (values) => {
        try {
          const { data: { user } } = await supabase.auth.getUser()
          const { error, status } = await supabase.from("settings")
            .update({ view: values.view })
            .eq("user_id", user?.id)
          if (!error && status === 204) {
            console.log("Update success")
            router.push("/main")
            router.refresh()
          }

        } catch (error) {
          console.log(error)
        }
      }}
    >
      {({ values }) => (
        <Form className='grid grid-cols-1 h-full'>
          <div className='grid grid-cols-2'>
            <div id="my-radio-group">View</div>
            <div role="group" aria-labelledby="my-radio-group" className='grid grid-cols-2'>
              <label className="justify-self-end">
                <Field type="radio" name="view" value="list" />
                List
              </label>
              <label className="justify-self-end">
                <Field type="radio" name="view" value="box" />
                Box
              </label>
            </div>
          </div>
          <div className="flex justify-end self-end">
            <button type="submit" className="bg-zinc-900 h-10 w-14 rounded-xl text-center uppercase font-bold">Save</button>
          </div>
          <div className='grid grid-cols-2 bg-zinc-900 w-12 h-4 rounded-lg relative'
            onClick={changeView}>
            <span
              className={`${options.view === "list" ? 'col-start-1' : 'col-start-2'} w-6 h-6 bg-red-300 rounded-full -translate-y-1`}
            >

            </span>
          </div>
        </Form>
      )}
    </Formik>
  )
}