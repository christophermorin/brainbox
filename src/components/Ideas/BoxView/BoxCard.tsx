"use client"
import Image from "next/image"
import Link from "next/link"
import { useSupabase } from "@/app/supabase-provider"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
  idea: {
    id: string,
    title: string,
    content: string,
    created_at: string,
    user_id: string
  }
}

export default function BoxCard({ idea }: Props) {
  const [confirmBox, setConfirmBox] = useState<boolean>(false)
  const { supabase } = useSupabase()
  const router = useRouter()

  const ideaCreatedAtString = new Date(idea.created_at).toDateString()

  const contentIntoParas = idea.content.trim().split("\n").map((line, i) => {
    return (
      <div key={i} className=''>
        <p className='my-2 line-clamp-3' >{line}</p>
      </div>
    )
  })

  const showConfirmBox = () => {
    setConfirmBox(!confirmBox)
  }

  const deleteIdeaAndRefresh = async (id: string) => {
    try {
      const { error, status } = await supabase
        .from("ideas")
        .delete()
        .eq("id", id)

      if (!error && status === 204) {
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className="flex flex-col p-2 h-56 shadow-sm hover:shadow-[rgba(255,23,211,1)] rounded-sm relative shadow-cyan-300 hover:bg-zinc-950 transition-all duration-500 ease-in-out">
      <Link href={`/main/${idea.id}`} className="flex-1 overflow-hidden">
        <section className="text-center ">
          <p className="text-xs text-stone-400">{ideaCreatedAtString}</p>
          <p className={`font-bold text-lg mt-2 break-words text-stone-200`}>{idea.title}</p>
        </section>
        <div className=" overflow-y-hidden break-words text-sm  text-stone-300">
          {contentIntoParas[0]}
        </div>
      </Link>
      <section className="flex justify-end items-end text-xs mt-1">
        <span className="text-red-300 cursor-pointer">
          <Image
            src="/x.svg"
            width={20}
            height={20}
            alt="Delete Idea"
            onClick={showConfirmBox}
          />
        </span>
        {confirmBox &&
          <div className="grid grid-cols-1 justify-items-center absolute h-full w-full top-0 left-0 bg-black py-2 items-center">
            <div>
              <p className="text-cyan-300 text-xl">Delete?</p>
            </div>
            <div className="grid grid-cols-2 items-between w-full px-4">
              <span className="text-green-400 cursor-pointer text-lg" onClick={() => deleteIdeaAndRefresh(idea.id)}>Yes</span>
              <span className="text-red-400 cursor-pointer text-lg justify-self-end" onClick={showConfirmBox} >No</span>
            </div>
          </div>
        }
      </section>
    </div >
  )
}
