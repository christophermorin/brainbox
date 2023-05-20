"use client"

import Link from "next/link"
import IdeasViewOptions from "./IdeasViewOptions"
import ListCardNew from "./ListView/ListCardNew"
import ListCard from "./ListView/ListCard"
import { useState } from "react"
import BoxCardNew from "./BoxView/BoxCardNew"
import BoxCard from "./BoxView/BoxCard"



export default function Ideas({ data, settings }: any) {
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
      <IdeasViewOptions changeView={changeView} />
      <div className="h-full overflow-y-scroll ff-scroll ">
        {view === "list" || view === null ?
          <div className="grid grid-cols-1 gap-4 mt-2">
            <Link href={"/main/add"}>
              <ListCardNew />
            </Link>
            {data && data.map((idea: any) => {
              return (
                <Link href={`/main/${idea.id}`} key={idea.id}>
                  <ListCard idea={idea} />
                </Link>
              )
            })}
          </div>
          :
          <div className="grid grid-cols-2 gap-4 p-4 relative">
            <Link href={"/main/add"}>
              <BoxCardNew />
            </Link>
            {data && data.map((idea: any) => {
              return (
                <Link href={`/main/${idea.id}`} key={idea.id}>
                  <BoxCard idea={idea} />
                </Link>
              )
            })}
          </div>
        }
      </div>
    </>
  )
}