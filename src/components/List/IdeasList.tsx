"use client"

import Link from "next/link"
import ListOptions from "../ListOptions/ListOptions"
import NewListIdea from "./NewListIdea"
import ListIdea from "./ListIdea"
import { useState } from "react"
import NewIdea from "../IdeaBoxes/NewIdea"
import Idea from "../IdeaBoxes/Idea"



export default function IdeasList({ data, settings }: any) {
  const [view, setView] = useState<string>(settings[0].view)

  const changeView = (view: string) => {
    if (view === "box") {
      setView("box")
    } else {
      setView("list")
    }
    return
  }
  return (
    <>
      <ListOptions changeView={changeView} />
      <div className="h-full overflow-y-scroll ff-scroll ">
        {view === "list" || view === null ?
          <div className="grid grid-cols-1 gap-4 mt-2">
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
          </div>
          :
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
        }
      </div>
    </>
  )
}