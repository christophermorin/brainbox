"use client"
// This doesn't need to be client, only the buttons
import { useSupabase } from "@/app/supabase-provider"
import Image from "next/image"
import Waves from "../Waves"

export default function NavBar() {
  const { supabase } = useSupabase()
  async function signOut() {
    await supabase.auth.signOut()
    return
  }

  return (
    <div className="grid grid-cols-2 justify-between p-2">
      <Image
        src="/boxbox.svg"
        width={42}
        height={42}
        alt="Brain Box"
      />
      <Image
        src="/user-box.svg"
        width={30}
        height={30}
        alt="User options"
        onClick={() => signOut()}
        className="justify-self-end"
      />
    </div>
  )
}