import Waves from "@/components/Waves/Waves";

export default function Loading() {
  return (
    <>
      <div className="p-2">
        <div className="flex justify-between items-center w-full bg-zinc-900/50 h-12 rounded-xl text-center px-4">

        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 h-full p-4 ">
        <div className="flex justify-center items-center h-12 w-12 bg-zinc-900/50 rounded-md relative spinner shadow-sm shadow-white">
          <div className="h-12 w-full absolute border-l border-t  border-white ring-offset-8 bottom-1 right-1"></div>
          <div className="h-12 w-full absolute border-l border-t  border-white ring-offset-8 top-1 left-1"></div>
        </div>
      </div>
    </>
  )
}