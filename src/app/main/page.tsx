
import NewIdea from "../../components/IdeaBoxes/NewIdea"
import Idea from "../../components/IdeaBoxes/Idea"
import Link from "next/link"

export default async function Main() {

  return (
    <>
      <div className="p-2">
        <input className="w-full bg-zinc-900 h-12 rounded-xl text-center" type="search" placeholder="Search" />
      </div>
      <div className="h-full overflow-y-scroll ff-scroll relative">
        <div className="grid grid-cols-2 gap-4 p-4">
          <Link href={"/main/add"}>
            <NewIdea />
          </Link>
          {[1, 2, 3, 4, , 6, 7].map(idx => {
            return (
              <Idea key={idx} />
            )
          })}
        </div>
      </div>
    </>
  )
}

