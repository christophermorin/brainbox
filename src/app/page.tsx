import NavBar from "@/pages/NavBar/NavBar"
import TitlePage from "@/pages/Title/Title"
import Main from "@/pages/Main/Main"

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
