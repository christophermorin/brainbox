"use client"
import { useState } from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import Buttons from "./Buttons"

export default function TitlePage() {
  const [ee, setee] = useState<Boolean>(false)
  console.log(ee)

  const handleClick = () => {
    setee(!ee)
  }

  return (
    <div className="flex flex-col justify-end h-full">
      <div>
        <div className="flex justify-around items-center ">
          <button onClick={handleClick} className="w-40 bg-zinc-900 p-2 rounded-lg">Login</button>
          <button onClick={handleClick} className="w-40 bg-zinc-900 p-2 rounded-lg">Sign up</button>
        </div>
        <div className="flex h-96 flex-col justify-between mt-2 bg-slate-300 p-4">
          {ee ? <Login /> : <SignUp />}
          <Buttons />
          {/* <input className="h-14 bg-white rounded-lg text-black p-2" type="text" placeholder="Username" />
          <input className="h-14 bg-white rounded-lg text-black p-2" type="password" placeholder="Password" />
          <div className="flex justify-between">
            <p className="border-b border-black w-1/3 h-2"></p>
            <span className="text-black">OR</span>
            <p className="border-b border-black w-1/3 h-2"></p>
          </div>
          <div className="flex justify-between items-center">
            <button className="h-14 w-40 bg-zinc-900 p-4 rounded-md">GITHUB</button>
            <button className="h-14 w-40 bg-zinc-900 p-4 rounded-md">GOOGLE</button>
          </div> */}
          {ee ?
            <button className="flex justify-center items-center h-12 bg-zinc-900 rounded-md">LOGIN</button>
            :
            <button className="flex justify-center items-center h-12 bg-zinc-900 rounded-md">SINGUP</button>
          }
        </div>
      </div>
    </div>
  )
}