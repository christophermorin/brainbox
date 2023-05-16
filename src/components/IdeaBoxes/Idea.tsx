interface Props {
  title: string,
  content: string
}

export default function Idea({ title, content }: Props) {
  return (
    <div className="grid grid-cols-1 p-2 h-56 bg-slate-300 rounded-md text-black text-center">
      <section className="grid grid-cols-1 gap-2 text-center">
        <p>Date and time</p>
        <p>{title}</p>
      </section>
      <p>{content}</p>
      <p className="self-end">Pages</p>
    </div>
  )
}
