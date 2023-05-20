import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Login from "../components/Login";
import { cookies, headers } from "next/headers";
import { Database } from "@/lib/database";
import { redirect } from "next/navigation";


export default async function Home() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user.aud === "authenticated") {
    redirect("/main")
  }
  return (
    <main className="flex flex-col flex-1">
      <h1 className="text-2xl text-center">Brain Box</h1>
      <Login />
    </main >
  )
}