import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Tugas Next.js',
  description: 'Latihan App Router',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
