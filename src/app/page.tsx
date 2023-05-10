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
    <footer className=" h-12 border border-blue-300">

    </footer>
  )
}

function NewIdea() {
  return (
    <div className="flex justify-center items-center h-56 border border-white rounded-md">
      <span className="text-7xl">+</span>
    </div>
  )
}

function Idea() {
  return (
    <div className="flex flex-col justify-between items-center p-2 h-56 border border-red-300 rounded-md">
      <p>Date and time</p>
      <p>Title</p>
      <p>Pages</p>

    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col h-screen max-w-md">
      <NavBar />
      <h1 className="text-2xl text-center">Title</h1>
      <div className="p-2">
        <input className="w-full" type="search" placeholder="Search" />
      </div>
      <div className="h-full overflow-y-scroll">
        <div className="grid grid-cols-2 gap-4 p-4">
          <NewIdea />
          {[1, 2, 3, 4, , 6, 7].map(idx => {
            return (
              <Idea key={idx} />
            )
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}
