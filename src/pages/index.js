import { Inter } from 'next/font/google'
import HomePage from './Layouts/HomePage'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
  <main className="w-full">
    <HomePage/>
  </main>
  )
}
