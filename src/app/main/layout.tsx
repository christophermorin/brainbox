import Footer from "@/components/Footer"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col max-w-sm h-screen">
      {children}
      <Footer />
    </div>
  )
}
