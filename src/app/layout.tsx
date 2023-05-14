import './globals.css'
import NavBar from '../components/NavBar/NavBar'
import SupabaseProvider from './supabase-provider'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { Database } from '@/lib/database'

export const metadata = {
  title: 'Brain Box',
  description: `What's on your mind?`,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: { session } } = await supabase.auth.getSession()
  return (
    <html lang="en">
      <body className='flex flex-col h-screen sm:w-96'>
        <SupabaseProvider session={session}>
          <NavBar />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}
