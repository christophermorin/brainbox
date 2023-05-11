export default function SignUp() {
  return (
    <div className="flex flex-col gap-2">
      <input className="h-14 bg-white rounded-lg text-black p-2" type="email" placeholder="Email" />
      <input className="h-14 bg-white rounded-lg text-black p-2" type="password" placeholder="Password" />
      <input className="h-14 bg-white rounded-lg text-black p-2" type="password" placeholder="Confirm Password" />
      {/* <div className="mx-auto">
        <button className="h-14 w-40 bg-zinc-900 p-4 rounded-md">SIGN UP</button>
      </div> */}
    </div>
  )

}