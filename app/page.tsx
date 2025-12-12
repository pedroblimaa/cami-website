import Hero from '@/components/sections/Hero'
import Header from '@/components/ui/Header'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center'>
      <Header />
      <div className='flex-1 w-full max-w-7xl px-10'>
        <Hero />
      </div>
    </div>
  )
}
