"use client"
import Link from "next/link"
import Image from "next/image"
import IdeaForm from "@/components/Forms/IdeaForm"

export default function AddIdea() {

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
        <IdeaForm />
      </div>
    </>
  )
}