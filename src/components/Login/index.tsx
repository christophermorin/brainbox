import LoginButtons from "./Buttons/LoginButtons"


export default function Login() {

  return (
    <div className="grid h-full">
      <div className="flex justify-center items-center">
        <section className="grid grid-cols-1 justify-items-center gap-2 text-stone-300 ">
          <p className="w-80 text-center">
            Ever had a bunch of ideas that would <span className="italic">probably</span> change the world.
          </p>
          <p className="w-80 text-center">
            An idea you convinced yourself you'll remember later, no need to jot it down.
          </p>
          <p className="w-80 text-center">
            Next you know you're thinking <span className="text-cyan-300">{`"I should make soup.."`}</span> and <span className="text-red-300">{`poof`}</span>, idea gone.
          </p>
          <p className="w-80 text-center">
            World, unchanged.
          </p>
          <p className="w-80 text-center">
            Me too!
          </p>
          <p className="w-80 text-center">
            So I built Brain Box. Check it out!
          </p>
        </section>
      </div>
      <div className="grid grid-cols-1 items-center justify-items-center">
        <LoginButtons />
      </div>
      {/* <Waves /> */}
    </div >
  )
}