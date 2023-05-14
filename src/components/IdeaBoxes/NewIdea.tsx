"use client"
import { useSupabase } from "../../app/supabase-provider"
export default function NewIdea() {
  const { supabase } = useSupabase()

  const handleClick = async () => {
    // const { data, error } = await supabase.rpc("create_idea", {
    //   content: "third test for auth",
    //   title: "third"
    // })
    const data = await supabase.from("ideas").select("user_id")
    console.log(data)
    return
  }

  return (
    <>
      <div onClick={handleClick} className="flex justify-center items-center h-56 bg-zinc-950 rounded-md">
        <span className="text-7xl">+</span>
      </div>
    </>
  )
}