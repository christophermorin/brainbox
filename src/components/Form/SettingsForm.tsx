"use client"
import { useSupabase } from '@/app/supabase-provider';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SettingsFormSchema = Yup.object().shape({
  view: Yup.string(),
});

export default function SettingsForm() {
  const { supabase } = useSupabase()
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
          }

        } catch (error) {
          console.log(error)
        }
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="view" value="list" />
              List
            </label>
            <label>
              <Field type="radio" name="view" value="box" />
              Box
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}