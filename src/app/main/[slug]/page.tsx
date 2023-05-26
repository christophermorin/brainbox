
import Link from "next/link"
import Image from "next/image"
import { cookies, headers } from "next/headers"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "@/lib/database"
import UpdateForm from "@/components/Forms/UpdateForm"

interface Props {
  params: {
    slug: string
  }
}

export default async function OneIdea({ params }: Props) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data } = await supabase.from("ideas").select("*").eq("id", params.slug)
  return (
    <>
      <div className="p-2">
        <div className="flex justify-between items-center w-full bg-zinc-900 h-12 rounded-xl text-center px-4">
          <Link href={"/main"}>
            <Image
              src="/back.svg"
              width={24}
              height={24}
              alt="Return to main"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full p-4 ">
        <UpdateForm data={data} />
      </div>
    </>
  )
}