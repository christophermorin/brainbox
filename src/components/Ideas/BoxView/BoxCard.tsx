"use client"


interface Props {
  idea: {
    id: string,
    title: string,
    content: string,
    created_at: string,
    user_id: string
  }
}

interface RandomColor {
  color: string
}

const colors: RandomColor[] = [
  {
    color: "text-red-400"
  },
  {
    color: "text-blue-400"
  },
  {
    color: "text-amber-400"
  },
  {
    color: "text-green-400"
  },
  {
    color: "text-purple-400"
  },
]

export default function BoxCard({ idea }: Props) {
  const ideaCreatedAtString = new Date(idea.created_at).toDateString()
  const ideaCreatedAtDigits = new Date(idea.created_at).toLocaleDateString()

  const colorChoice = colors[Math.floor(Math.random() * 5)]


  const mytext = idea.content.trim().split("\n").map((line, i) => {
    return (
      <div key={i} className=''>
        <p className='my-2 line-clamp-3' >{line}</p>
      </div>

    )
  })

  return (
    <div className="grid grid-cols-1 p-2 h-56 shadow-sm shadow-stone-500 rounded-sm relative hover:-translate-y-1 hover:shadow-stone-200">
      {/* <div className="h-56 w-full absolute  border-b border-r border-amber-800 ring-offset-8 top-1 left-1"></div> */}
      <section className="text-center ">
        <p className="italic text-xs text-stone-500">{ideaCreatedAtString}</p>
        <p className={`font-bold text-2xl mt-2 line-clamp-2 text-stone-300`}>{idea.title}</p>
      </section>
      <div className=" overflow-hidden text-sm  text-stone-300">
        {mytext[0]}
        {mytext.length > 1 && <div>{`+ ${Math.floor((mytext.length - 1) / 2)} lines...`}</div>}
        {/* <textarea className="line-clamp-6 text-sm max-w-fit bg-transparent resize-none" readOnly value={idea.content} /> */}
      </div>
      <section className="flex justify-between items-end text-xs mt-1">
        <span className='text-cyan-300'>Star</span>
        <span className='text-red-400'>Delete?</span>

      </section>
    </div >
  )
}
