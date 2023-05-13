"use client"
import Link from "next/link"

export default function AddIdea() {

  return (
    <>
      <div className="p-2">
        <div className="flex justify-between items-center w-full bg-zinc-900 h-12 rounded-xl text-center px-4">
          <Link href={"/main"}>
            <button>Back</button>
          </Link>
          <button>Save</button>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full p-4 ">
        <div className="flex flex-col flex-1 gap-4 rounded-md bg-white text-black p-4">
          <input className="bg-transparent focus:outline-none font-bold" type="text" placeholder="Title" />
          <textarea className="bg-transparent h-full focus:outline-none" placeholder="Whats on your mind?" />
        </div>
      </div>
    </>
  )
}