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
      className="flex rounded-md w-full h-16 bg-gradient-to-t from-zinc-950 shadow-sm shadow-stone-500 cursor-pointer">
      <div className="grid grid-cols-2 items-center justify-items-center w-full pr-4">
        <Image
          src={`/${signInProvider}.svg`}
          width={30}
          height={30}
          alt={`${signInProvider} SignIn`}
        />
        <span className="uppercase">
          {signInProvider}
        </span>
      </div>
    </div>
  )
}