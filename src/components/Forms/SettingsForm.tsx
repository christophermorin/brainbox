"use client"
import { useSupabase } from '@/app/supabase-provider';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ToggleSettings from './Buttons/ToggleSettings';
import WorkingOnItButton from './Buttons/WorkingOnItButton';
import Socials from '../Socials';




interface settingsState {
  view: boolean
  theme: boolean,
}

export default function SettingsForm({ settings }: any) {
  const { supabase } = useSupabase()
  const [options, setOptions] = useState<settingsState>({
    view: settings[0].view,
    theme: settings[0].theme
  })

  const router = useRouter()
  const submitSettings = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      const { error, status } = await supabase.from("settings")
        .update({ view: options.view })
        .eq("user_id", user?.id)
      if (!error && status === 204) {
        router.push("/main")
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toggleView = () => {
    setOptions({
      ...options,
      view: !options.view
    })
  }

  return (
    <div className='flex flex-col flex-1 justify-center items-center'>
      <div className='flex flex-col flex-1 pt-10'>
        <section className='grid grid-cols-2 gap-10'>
          <p>Default View</p>
          <ToggleSettings
            buttonValue={options.view}
            toggleFunc={toggleView}
            leftOption={"Box"}
            rightOption={"List"}
          />
          <p className='text-slate-500 opacity-60'>Theme</p>
          <WorkingOnItButton
            leftOption={"Dark"}
            rightOption={"Light"}
          />
          <p className='text-slate-500 opacity-60'>Idea Order</p>
          <WorkingOnItButton
            leftOption={"New"}
            rightOption={"Old"}
          />
        </section>
      </div>
      <button
        onClick={submitSettings}
        className="bg-zinc-900 h-10 w-36 rounded-xl text-center uppercase font-bold text-stone-200 mb-20">
        Update
      </button>
      <Socials />
    </div>
  )
}