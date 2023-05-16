"use client"
import Image from "next/image"

export default function ListOptions() {
  return (
    <div className="grid grid-cols-2 w-28 px-4 mt-2 items-center">
      <Image
        src="/grid-view.svg"
        width={24}
        height={24}
        alt="Box View"
        onClick={() => console.log("box")}
      />
      <Image
        src="/list-rounded.svg"
        width={24}
        height={24}
        alt="List View"
        onClick={() => console.log("list")}
      />
    </div>
  )
}