"use client"
// This doesn't need to be client, only the buttons
import Link from "next/dist/client/link"
export default function NavBar() {

  return (
    <div className="flex p-2 justify-between">
      <span>Temp Signout</span>
      <Link href={"/"}>
        <span >Temp Back</span>
      </Link>
    </div>
  )
}