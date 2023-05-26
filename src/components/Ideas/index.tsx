"use client"

import { useState } from "react"
import Link from "next/link"
import IdeasViewOptions from "./IdeasViewOptions"
import ListCardNew from "./ListView/ListCardNew"
import ListCard from "./ListView/ListCard"
import BoxCardNew from "./BoxView/BoxCardNew"
import BoxCard from "./BoxView/BoxCard"



export default function Ideas({ data, settings }: any) {
  const [view, setView] = useState<boolean>(settings[0].view)

  const changeView = () => {
    setView(!view)
    return
  }
  return (
    <>
      <IdeasViewOptions changeView={changeView} view={view} />
      <div className="h-full overflow-y-scroll ff-scroll px-2 pb-2">
        {!view || view === null ?
          <div className="grid grid-cols-1 gap-4 mt-2">
            <Link href={"/main/add"}>
              <ListCardNew />
            </Link>
            {data && data.map((idea: any) => {
              return (
                <ListCard key={idea.id} idea={idea} />
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
                <BoxCard key={idea.id} idea={idea} />
              )
            })}
          </div>
        }
      </div>
    </>
  )
}