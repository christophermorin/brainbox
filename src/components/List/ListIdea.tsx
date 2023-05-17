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

export default function ListIdea({ idea }: Props) {
  const ideaCreatedAtDigits = new Date(idea.created_at).toLocaleDateString()

  const mytext = idea.content.trim().split("\n").map((line, i) => {
    return (
      <div key={i} className=''>
        <p className='my-2 line-clamp-3' >{line}</p>
      </div>

    )
  })

  return (
    <div className="grid grid-cols-1 border border-red-300">
      <section>
        {/* {ideaCreatedAtDigits} */}
      </section>
      <div className="grid grid-cols-4">
        <section className="col-start-1 col-end-3">
          {idea.title}
        </section>

        <section className="col-start-4">
          <span>STAR</span>
          <span>DELETE</span>
        </section>
      </div>
    </div>
  )
}