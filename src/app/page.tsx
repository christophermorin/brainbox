import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Login from "../components/Login";
import Launch from "@/components/Launch";
import { cookies, headers } from "next/headers";
import { Database } from "@/lib/database";
import Image from "next/image";

export default async function Home() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <main className="flex flex-col h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-around  items-center relative flex-1">
          <p className=" text-7xl p-4 bg-black shadow-sm shadow-cyan-300">
            Brain Box
          </p>
          <section className="flex-auto">
            <Image
              src="/boxbox.svg"
              fill
              alt="Brain Box"
              className="-z-10"
            />
          </section>
        </div >
        {
          session?.user.aud === "authenticated"
            ? <Launch />
            : <Login />
        }
      </div >
    </main >
  )
}