"use client"
import { useSupabase } from "@/app/supabase-provider"
import { Provider } from "@supabase/supabase-js"

interface Props {
  provider: Provider
}

export default function SignInButton({ provider }: Props) {
  const { supabase } = useSupabase()

  async function signInWithProvider() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })
  }
  return (
    <div
      onClick={() => signInWithProvider()}
      className="flex items-center justify-between h-12 p-2 rounded-md border-t border-amber-800">
      <span className="h-8 border border-amber-800"></span>
      <div className="uppercase underline decoration-amber-800 underline-offset-8">
        {provider}
      </div>
      <span className="h-8 border border-amber-800"></span>
    </div>
  )
}