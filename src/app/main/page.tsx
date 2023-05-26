import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database";
import { cookies, headers } from "next/headers";
import Ideas from "@/components/Ideas";

export default async function Main() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: { user } } = await supabase.auth.getUser()

  const { data } = await supabase
    .from("ideas")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false })

  let settings = await supabase
    .from("settings")
    .select("*")
    .eq("user_id", user?.id)

  if (!settings?.data?.length) {
    settings = await supabase.rpc("create_settings", {
      view: true,
      theme: true
    })
  }
  return (
    <>
      <div className="p-2">
        <div className="flex items-center justify-center w-full bg-zinc-900 h-12 rounded-xl text-center">BrainBox</div>
      </div>
      <Ideas data={data} settings={settings.data} />
    </>
  )
}
