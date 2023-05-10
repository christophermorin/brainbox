function NavBar() {
  return (
    <div className="flex p-2 justify-between">
      <span>Logo</span>
      <span>User</span>
    </div>
  )
}

function Footer() {
  return (
    <footer className="flex justify-between items-center p-2 h-16 bg-zinc-900">
      <span>One</span>
      <span>Two</span>
      <span>Three</span>
    </footer>
  )
}

function NewIdea() {
  return (
    <div className="flex justify-center items-center h-56 bg-zinc-950 rounded-md">
      <span className="text-7xl">+</span>
    </div>
  )
}

function Idea() {
  return (
    <div className="flex flex-col justify-between items-center p-2 h-56 bg-slate-300 rounded-md text-black">
      <p>Date and time</p>
      <p>Title</p>
      <p>Pages</p>

    </div>
  )
}

function TitlePage() {
  return (
    <div className="flex flex-col justify-end h-full">
      <div>
        <div className="flex justify-around items-center ">
          <button className="w-40 bg-zinc-900 p-2 rounded-lg">Login</button>
          <button className="w-40 bg-zinc-900 p-2 rounded-lg">Sign up</button>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4 mt-2 bg-slate-300 p-4">
          <input className="h-14 bg-white rounded-lg text-black p-2" type="text" placeholder="Username" />
          <input className="h-14 bg-white rounded-lg text-black p-2" type="password" placeholder="Password" />
          <div className="flex justify-between">
            <p className="border-b border-black w-1/3 h-2"></p>
            <span className="text-black">OR</span>
            <p className="border-b border-black w-1/3 h-2"></p>
          </div>
          <div className="flex justify-between items-center">
            <button className="h-14 w-44 bg-zinc-900 p-4 rounded-md">GITHUB</button>
            <button className="h-14 w-44 bg-zinc-900 p-4 rounded-md">GOOGLE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {

  return (
    <main className="flex flex-col h-screen sm:w-96">
      <NavBar />
      <h1 className="text-2xl text-center">Title</h1>
      {true ? <TitlePage />
        :

        <>
          <div className="p-2">
            <input className="w-full bg-zinc-900 h-12 rounded-xl text-center" type="search" placeholder="Search" />
          </div>
          <div className="h-full overflow-y-scroll ff-scroll">
            <div className="grid grid-cols-2 gap-4 p-4">
              <NewIdea />
              {[1, 2, 3, 4, , 6, 7].map(idx => {
                return (
                  <Idea key={idx} />
                )
              })}
            </div>
          </div>
        </>
      }
      <Footer />
    </main >
  )
}
