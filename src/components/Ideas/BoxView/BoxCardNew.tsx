export default function BoxCardNew() {
  return (
    <>
      <div className="flex justify-center items-center h-56 bg-zinc-950 rounded-md relative hover:bg-zinc-900 hover:text-[rgba(255,23,211,0.7)] hover:shadow-sm hover:shadow-[rgba(255,23,211,1)]">
        <div className="h-56 w-full absolute border-l border-t border-dashed border-white ring-offset-8 bottom-1 right-1"></div>
        <span className="text-7xl ">+</span>
      </div>
    </>
  )
}