import LoginButtons from "./Buttons/LoginButtons"
import Image from "next/image"


export default function Login() {

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col justify-around  items-center relative flex-1">
        <p className=" text-7xl p-4 bg-black/30">
          <span className="">Brain</span>
          <span className="">Box</span>
        </p>
        <section className="flex-auto">
          <Image
            src="/boxbox.svg"
            fill
            alt="Brain Box"
            className="-z-10"
          />
        </section>
        {/* <section className=" grid grid-cols-1 text-stone-300 bg-black/30 self-center pb-10">
          <p className="">
            Had an idea that would <span className="italic">probably</span> change the world?
          </p>
          <p className=" pl-8">
            Convinced yourself you'd remember it later, no need to jot it down?
          </p>
          <p className=" pl-12">
            Next you know you're thinking <span className="text-cyan-300">{`"I should make soup.."`}</span> and <span className="text-red-300">{`poof`}</span>, idea gone.
          </p>
          <p className=" pl-16">
            World, unchanged.
          </p>
          <p className=" pl-20">
            Me too!
          </p>
          <p className="justify-self-center">
            So I built Brain Box. Check it out!
          </p>
        </section> */}
      </div >
      <div className="grid grid-cols-1 items-center justify-items-center flex-1">
        <LoginButtons />
      </div>
      {/* <Waves /> */}
    </div >
  )
}