import './globals.css'
import NavBar from './NavBar'
import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: 'Brain Box',
  description: `What's on your mind?`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen sm:w-96'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
