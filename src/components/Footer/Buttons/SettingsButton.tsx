import Link from "next/link"
import Image from "next/image"

export default function SettingsButton() {
  return (
    <Link href={"/main/settings"}>
      <Image
        src="/gear-fine.svg"
        width={30}
        height={30}
        alt="Settings"
      />
    </Link>
  )
}