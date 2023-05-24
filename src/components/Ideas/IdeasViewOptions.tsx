"use client"
import Image from "next/image"

interface Props {
  changeView: () => void,
  view: boolean
}

export default function IdeasViewOptions({ changeView, view }: Props) {
  return (
    <div className="grid grid-cols-2 w-28 px-4 pt-4 items-center">
      {!view ?
        <Image
          src="/grid-view.svg"
          width={24}
          height={24}
          alt="Box View"
          onClick={() => changeView()}
          className="cursor-pointer"
        />
        :
        <Image
          src="/list-rounded.svg"
          width={24}
          height={24}
          alt="List View"
          onClick={() => changeView()}
          className="cursor-pointer"
        />}
    </div>
  )
}