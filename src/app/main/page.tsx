import NewIdea from "../../components/IdeaBoxes/NewIdea"
import Idea from "../../components/IdeaBoxes/Idea"
import Link from "next/link"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database";
import { cookies, headers } from "next/headers";
import ListOptions from "@/components/ListOptions/ListOptions";

export const revalidate = 0;

export default async function Main() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: { user } } = await supabase.auth.getUser()
  const data = await supabase.from("ideas").select("*").eq("user_id", user?.id)
  console.log("In main", data.data)

  return (
    <>
      <div className="p-2">
        <input className="w-full bg-zinc-900 h-12 rounded-xl text-center" type="search" placeholder="Search" />
      </div>
      <ListOptions />
      <div className="h-full overflow-y-scroll ff-scroll relative">
        <div className="grid grid-cols-2 gap-4 p-4">
          <Link href={"/main/add"}>
            <NewIdea />
          </Link>
          {data.data && data.data.map(idea => {
            return (
              <Link href={`/main/${idea.id}`} key={idea.id}>
                <Idea title={idea.title} content={idea.content} />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
