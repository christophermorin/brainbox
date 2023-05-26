"use client"
import { useSupabase } from "@/app/supabase-provider"
import { Provider } from "@supabase/supabase-js"
import Image from "next/image"

interface Props {
  provider: Provider
}

export default function SignInButton({ provider }: Props) {
  const { supabase } = useSupabase()
  const signInProvider: string = provider

  async function signInWithProvider() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })
  }

  return (
    <div
      onClick={() => signInWithProvider()}
      className="flex rounded-md w-full h-16 bg-gradient-to-t from-zinc-950 shadow-sm shadow-cyan-300 hover:shadow-[rgba(255,23,211,1)] cursor-pointer transition-all duration-300 ease-in-outnpm r">
      <div className="grid grid-cols-2 items-center justify-items-center w-full pr-4">
        <Image
          src={`/${signInProvider}.svg`}
          width={30}
          height={30}
          alt={`${signInProvider} SignIn`}
        />
        <span className="uppercase font-bold">
          {signInProvider}
        </span>
      </div>
    </div>
  )
}