import About from '@/components/sections/About'
import FAQ from '@/components/sections/FAQ'
import Hero from '@/components/sections/Hero'
import Highlights from '@/components/sections/Highlights'
import Location from '@/components/sections/Location'
import Header from '@/components/ui/Header'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center'>
      <Header />
      <div className='flex-1 w-full'>
        <Hero />
        <Highlights />
        <About />
        <Location />
        <FAQ />
      </div>
    </div>
  )
}
