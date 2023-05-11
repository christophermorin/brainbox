interface Props {
  test: () => void
}

export default function NewIdea({ test }: Props) {
  return (
    <>
      <div onClick={test} className="flex justify-center items-center h-56 bg-zinc-950 rounded-md">
        <span className="text-7xl">+</span>
      </div>
    </>
  )
}