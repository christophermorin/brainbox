import './globals.css'
import NavBar from '../components/NavBar'
import SupabaseProvider from './supabase-provider'

export const metadata = {
  title: 'Brain Box',
  description: `What's on your mind?`,
}

// Checks for user session, client or server?
// Redirects to /main if session, skipping /
// Session provider wrapper?

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
