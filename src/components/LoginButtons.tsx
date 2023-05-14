"use client"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON!
)

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}

// Again, only the  buttons need be client components for interactivity. If I can update session status for whole app from there.

export default function LoginButtons() {
  // const user = await supabase.auth.getUser()
  // console.log(user)
  const handleClick = async () => {
    const { data, error } = await supabase.rpc("create_idea", {
      content: "third test for auth",
      title: "third"
    })
    console.log(data)
    console.log(error)
    return
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="text-black font-bold">


      </div>

      <div className="flex justify-between">
        <p className="border-b border-black w-1/3 h-2"></p>
        <span className="text-black">OR</span>
        <p className="border-b border-black w-1/3 h-2"></p>
      </div>
      <div className="flex justify-between items-center">
        <button className="h-12 w-40 bg-zinc-900 p-2 rounded-md" onClick={() => signInWithGitHub()}>GITHUB</button>
        <button className="h-12 w-40 bg-zinc-900 p-2 rounded-md" onClick={handleClick}>Test post</button>
      </div>
      <div className="flex justify-between">
        <p className="border-b border-black w-1/3 h-2"></p>
        <span className="text-black">OR</span>
        <p className="border-b border-black w-1/3 h-2"></p>
      </div>
    </div>
  )
}