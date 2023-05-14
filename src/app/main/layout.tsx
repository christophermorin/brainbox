import Footer from "../../components/Footer/Footer"
import Waves from "@/components/Waves/Waves"
import Link from "next/link"
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from "@/lib/database"
import { cookies, headers } from "next/headers"


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session?.user) {
    return (
      <Link href={"/"}>
        <h1 className="text-2xl text-center">Brain Box</h1>
        <div className="flex flex-col justify-center items-center h-screen">
          Please sign in
        </div>
      </Link>
    )
  }

  return (
    <>
      {children}
      <Footer />
    </>
  )
}
