import Image from "next/image"
export default function Footer() {
  return (
    <footer className="flex justify-end items-center p-2 h-16 bg-zinc-900">
      <Image
        src="/gear-fine.svg"
        width={30}
        height={30}
        alt="Settings"
      />
    </footer>
  )
}