"use client"
import { useSupabase } from "@/app/supabase-provider"
import Image from "next/image"

export default function GuestButton() {
  const { supabase } = useSupabase()
  const email: string = process.env.NEXT_PUBLIC_GUEST_EMAIL!
  const pass: string = process.env.NEXT_PUBLIC_GUEST_PASS!

  async function signInWithProvider() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pass
    })
  }

  return (
    <div
      onClick={() => signInWithProvider()}
      className="flex rounded-md w-full h-16 bg-gradient-to-t from-zinc-950 shadow-md shadow-[rgba(255,23,211,1)] hover:shadow-stone-300 cursor-pointer col-span-2 transition-all duration-300 ease-in-out">
      <div className="grid grid-cols-2 items-center justify-items-center w-full pr-4">
        <Image
          src='/guest.svg'
          width={30}
          height={30}
          alt='Guest SignIn'
        />
        <span className="uppercase font-bold">
          Guest
        </span>
      </div>
    </div>
  )
}