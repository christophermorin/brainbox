"use client"
import Link from "next/link"
import Image from "next/image"
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

export default function ListCard({ idea }: Props) {
  const [confirmBox, setConfirmBox] = useState<boolean>(false)
  const { supabase } = useSupabase()
  const router = useRouter()

  const ideaCreatedAtDigits = new Date(idea.created_at).toLocaleDateString()

  const showConfirmBox = () => {
    setConfirmBox(!confirmBox)
  }

  const deleteIdeaAndRefresh = async (id: string) => {
    try {
      const { error, status } = await supabase.from("ideas").delete().eq("id", id)
      if (!error && status === 204) {
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="grid grid-cols-4 border border-stone-500/50 rounder-sm shadow-sm shadow-stone-500 bg-gradient-to-t from-zinc-950 hover:shadow-[rgba(255,23,211,1)] hover:bg-zinc-950 ">
      <div className="col-start-1 col-end-4">
        <Link href={`/main/${idea.id}`}>
          <section className="px-2">
            <span className="text-xs text-cyan-300">
              {ideaCreatedAtDigits}
            </span>
          </section>
          <div className=" p-2 font-bold text-xl">
            <section className="break-words text-stone-200">
              {idea.title}
            </section>
          </div>
        </Link>
      </div>
      <div className="col-start-4 grid grid-cols-1 justify-items-end items-end p-2 relative">
        <span className="text-red-300 ">
          <Image
            src="/x.svg"
            width={20}
            height={20}
            alt="Delete Idea"
            onClick={showConfirmBox}
          />
        </span>
        {confirmBox &&
          <div className="grid grid-cols-1 absolute w-full h-full bg-zinc-950 py-2 items-center">
            <div>
              <p className="text-cyan-300 text-center">Delete?</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <span className="text-green-400 cursor-pointer" onClick={() => deleteIdeaAndRefresh(idea.id)}>Yes</span>
              <span className="text-red-400 cursor-pointer" onClick={showConfirmBox} >No</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}