import Footer from "../../components/Footer"
import NavBar from "@/components/NavBar"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col max-w-sm h-screen">
      {/* <NavBar /> */}
      {children}
      <Footer />
    </div>
  )
}
