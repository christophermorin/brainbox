import { Exo_2 } from 'next/font/google';
import './globals.css'
import SupabaseProvider from './supabase-provider'
import SupabaseListener from './supabase-listener'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { Database } from '@/lib/database'
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'Brain Box',
  description: `What's on your mind?`,
}


const exo = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo',
});

export const revalidate = 0;

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
  const avatar = session?.user.user_metadata.avatar_url


  return (
    <html lang="en" className={`${exo.variable}`} >
      <body className='flex flex-col h-screen'>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <NavBar avatar={avatar} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}
