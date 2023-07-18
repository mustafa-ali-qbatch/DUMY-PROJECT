import Image from 'next/image'
import Navbar from "../navbar"
export default function Mustafa() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <p>Mustafa Page</p>
     <div>Integrating Material UI In Next JS APP.</div>
    </main>
  )
}
