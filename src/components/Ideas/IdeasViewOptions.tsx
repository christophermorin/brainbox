"use client"
import Image from "next/image"

interface Props {
  changeView: (view: string) => void
}

export default function IdeasViewOptions({ changeView }: Props) {
  return (
    <div className="grid grid-cols-2 w-28 px-4 pt-4 items-center">
      <Image
        src="/grid-view.svg"
        width={24}
        height={24}
        alt="Box View"
        onClick={() => changeView("box")}
        className="cursor-pointer"
      />
      <Image
        src="/list-rounded.svg"
        width={24}
        height={24}
        alt="List View"
        onClick={() => changeView("list")}
        className="cursor-pointer"
      />
    </div>
  )
}