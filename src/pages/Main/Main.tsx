"use client"
import NewIdea from "../NewIdea/NewIdea"
import Idea from "../Idea/Idea"
import Footer from "../Footer/Footer"
import { useState } from "react"

export default function Main() {
  const [tt, setTt] = useState<boolean>(false)

  const handleClick = () => {
    setTt(!tt)
  }

  return (
    <>
      {!tt ?
        // Viewing all Ideas
        <>
          <div className="p-2">
            <input className="w-full bg-zinc-900 h-12 rounded-xl text-center" type="search" placeholder="Search" disabled={tt} />
          </div>
          <div className="h-full overflow-y-scroll ff-scroll relative">
            <div className="grid grid-cols-2 gap-4 p-4">
              <NewIdea test={handleClick} />
              {[1, 2, 3, 4, , 6, 7].map(idx => {
                return (
                  <Idea key={idx} />
                )
              })}
            </div>
          </div>
        </>
        :
        // Creating a New Idea
        <>
          <div className="p-2">
            <div className="flex justify-between items-center w-full bg-zinc-900 h-12 rounded-xl text-center px-4">
              <button onClick={handleClick}>Back</button>
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
      }
      <Footer />
    </>
  )
}