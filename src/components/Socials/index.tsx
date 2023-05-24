import Link from "next/link"
import Image from "next/image"

export default function Socials() {
  return (
    <section className='grid grid-cols-1 gap-4'>
      <p className='justify-self-center text-5xl self-center'>BrainBox</p>
      <section className='flex flex-col justify-center items-center gap-2'>
        <p>Chris Morin</p>
        <section className='flex items-center justify-center gap-4'>
          <Link href={"https://twitter.com/longhumans"} target='_blank'>
            <Image
              src="/twitter.svg"
              width={22}
              height={22}
              alt="Twitter Contact"
            />
          </Link>
          <Link href={"https://github.com/christophermorin/brainbox"} target='_blank'>
            <Image
              src="/github.svg"
              width={22}
              height={22}
              alt="Githb Contact"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/chrisjmorin/"} target='_blank'>
            <Image
              src="/linkedin.svg"
              width={22}
              height={22}
              alt="LinkedIn Contact"
            />
          </Link>
        </section>
      </section>
    </section>
  )
}