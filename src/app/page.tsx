import Login from "../components/Login/Login";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 relative">
      <h1 className="text-2xl text-center">Brain Box</h1>
      <Login />
    </main >
  )
}