import Buttons from "./Buttons"

export default function Login() {
  return (
    <div className="flex flex-col gap-2">
      <input className="h-14 bg-white rounded-lg text-black p-2" type="text" placeholder="Username" />
      <input className="h-14 bg-white rounded-lg text-black p-2" type="password" placeholder="Password" />
      {/* <Buttons /> */}
      {/* <div className="flex justify-between">
        <p className="border-b border-black w-1/3 h-2"></p>
        <span className="text-black">OR</span>
        <p className="border-b border-black w-1/3 h-2"></p>
      </div>

      <div className="flex justify-between items-center">
        <button className="h-12 w-40 bg-zinc-900 p-2 rounded-md">GITHUB</button>
        <button className="h-12 w-40 bg-zinc-900 p-2 rounded-md">GOOGLE</button>
      </div>
      <div className="mx-auto">
        <button className="h-12 w-72 bg-zinc-900 p-2 rounded-md">LOGIN</button>
      </div> */}
    </div>
  )
}