import Link from "next/link"
import Image from "next/image"
export default function AddNewButton() {
  return (
    <Link href={"/main/add"}>
      <Image
        src="/add.svg"
        width={30}
        height={30}
        alt="Settings"
      />
    </Link>
  )
}