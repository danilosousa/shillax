import './globals.css'
import { Inter } from 'next/font/google'
import  Header from "../components/Header";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shillax',
  description: 'Movie app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
     
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
