// This doesn't need to be client, only the buttons
"use client"
import { useSupabase } from "@/app/supabase-provider"
import Image from "next/image"

interface Props {
  avatar: string,
  username: string | null
}

export default function NavBar({ avatar, username }: Props) {
  const { supabase } = useSupabase()
  async function signOut() {
    await supabase.auth.signOut()
    return
  }

  return (
    <div className="grid grid-cols-2 justify-between p-2">
      <Image
        src="/boxbox.svg"
        width={32}
        height={32}
        alt="Brain Box"
      />
      <section className="grid grid-cols-2 gap-4 justify-self-end">
        <section>
          <Image
            src={avatar || "/guest.svg"}
            width={32}
            height={32}
            alt="User Avatar"
            className="rounded-full"
          />
        </section>
        <Image
          src="/sign-out.svg"
          width={32}
          height={32}
          alt="Sign Out"
          onClick={() => signOut()}
          className="justify-self-end cursor-pointer"
        />

      </section>
    </div>
  )
}