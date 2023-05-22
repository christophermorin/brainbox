import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Login from "../components/Login";
import Launch from "@/components/Launch";
import { cookies, headers } from "next/headers";
import { Database } from "@/lib/database";
import NavBar from "@/components/NavBar";


export default async function Home() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: { session } } = await supabase.auth.getSession()
  // if (session?.user.aud === "authenticated") {
  //   redirect("/main")
  // }
  return (
    <main className="flex flex-col h-full">
      <NavBar />
      {/* <h1 className="text-2xl text-center">Brain Box</h1> */}
      {session?.user.aud === "authenticated" ?
        <Launch />
        :
        <Login />
      }
    </main >
  )
}