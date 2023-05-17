import NewIdea from "../../components/IdeaBoxes/NewIdea"
import NewListIdea from "@/components/List/NewListIdea";
import Idea from "../../components/IdeaBoxes/Idea"
import ListIdea from "@/components/List/ListIdea";
import Link from "next/link"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database";
import { cookies, headers } from "next/headers";
import ListOptions from "@/components/ListOptions/ListOptions";

export const revalidate = 0;

interface Idea {
  id: string,
  title: string,
  content: string,
  created_at: string,
  user_id: string
}


export default async function Main() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: { user } } = await supabase.auth.getUser()
  const { data } = await supabase.from("ideas").select("*").eq("user_id", user?.id).order("created_at", { ascending: false });

  return (
    <>
      <div className="p-2">
        <input className="w-full bg-zinc-900 h-12 rounded-xl text-center" type="search" placeholder="Search" />
      </div>
      <ListOptions />
      <div className="h-full overflow-y-scroll ff-scroll ">

        {/* <div className="grid grid-cols-1 gap-4 mt-4">
          <Link href={"/main/add"}>
            <NewListIdea />
          </Link>
          {data && data.map((idea: any) => {
            return (
              <Link href={`/main/${idea.id}`} key={idea.id}>
                <ListIdea idea={idea} />
              </Link>
            )
          })}
        </div> */}
        <div className="grid grid-cols-2 gap-4 p-4 relative">
          <Link href={"/main/add"}>
            <NewIdea />
          </Link>
          {data && data.map((idea: any) => {
            return (
              <Link href={`/main/${idea.id}`} key={idea.id}>
                <Idea idea={idea} />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
