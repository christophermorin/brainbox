export default function Buttons() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="border-b border-black w-1/3 h-2"></p>
        <span className="text-black">OR</span>
        <p className="border-b border-black w-1/3 h-2"></p>
      </div>
      <div className="flex justify-between items-center">
        <button className="h-12 w-40 bg-zinc-900 p-2 rounded-md">GITHUB</button>
        <button className="h-12 w-40 bg-zinc-900 p-2 rounded-md">GOOGLE</button>
      </div>
    </div>
  )
}