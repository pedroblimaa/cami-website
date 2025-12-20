'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import HeaderMenuItem from './HeaderMenuItem'
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className='flex items-center justify-between h-16 w-full max-w-7xl px-4 sm:px-10 mx-auto'>
        <a className='z-80' href='#hero' onClick={() => setMobileMenuOpen(false)}>
          <div className='flex gap-3 items-center group cursor-pointer'>
            <Image
              src={'/icons/logo.svg'}
              alt='Logo principal'
              width={40}
              height={40}
              className='group-hover:rotate-360 duration-500 ease-in-out'
            />
            <span className='text-gray-600 group-hover:translate-x-1 group-hover:text-brand duration-500 ease-in-out hidden sm:block'>
              Dra. Camila Santos Castilho
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-6 lg:gap-10'>
          <HeaderMenuItem text='Início' id='hero' />
          <HeaderMenuItem text='Sobre Mim' id='about' />
          <HeaderMenuItem text='Localização' id='location' />
          <HeaderMenuItem text='Contato' id='footer' />
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <MobileMenuButton
            isOpen={mobileMenuOpen}
            toggleMenu={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        closeMenu={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}
