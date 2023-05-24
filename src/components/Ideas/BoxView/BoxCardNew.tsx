export default function BoxCardNew() {
  return (
    <>
      <div className="flex justify-center items-center h-56 bg-zinc-950 rounded-md relative text-stone-200 hover:bg-zinc-900 hover:text-[rgba(255,23,211,1)] hover:shadow-sm hover:shadow-[rgba(255,23,211,1)] transition-all duration-500 ease-in-out">
        <div className="h-56 w-full absolute border-l border-t border-dashed border-stone-200 ring-offset-8 bottom-1 right-1"></div>
        <span className="text-7xl ">+</span>
      </div>
    </>
  )
}