import TitlePage from "@/pages/Title/Title"
import Main from "@/pages/Main/Main"

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

export default function Home() {
  const isSignedIn = true

  return (
    <main className="flex flex-col h-screen sm:w-96">
      <NavBar />
      <h1 className="text-2xl text-center">Title</h1>
      {!isSignedIn && <TitlePage />}
      {isSignedIn && <Main />}
    </main >
  )
}
