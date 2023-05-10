import './globals.css'

export const metadata = {
  title: 'Crate Brain',
  description: 'Crate your brain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
