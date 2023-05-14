"use client"
// This doesn't need to be client, only the buttons
import { useSupabase } from "@/app/supabase-provider"

export default function NavBar() {
  const { supabase } = useSupabase()
  async function signOut() {
    await supabase.auth.signOut()
    return
  }

  return (
    <div className="flex p-2 justify-between">
      <span onClick={() => signOut()}>Temp Signout</span>
      <span >Temp Back</span>
    </div>
  )
}