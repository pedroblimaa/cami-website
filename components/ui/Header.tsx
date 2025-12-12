import Image from 'next/image'
import HeaderMenuItem from './HeaderMenuItem'

export default function Header() {
  return (
    <header className='flex items-center justify-between h-16 w-full max-w-7xl px-10'>
      <div className='flex gap-3 items-center group cursor-pointer'>
        <Image
          src={'/icons/logo.svg'}
          alt='Logo principal'
          width={45}
          height={45}
          className='group-hover:rotate-360 duration-500 ease-in-out'
        />
        <span className='group-hover:translate-x-1 group-hover:text-brand duration-500 ease-in-out '>Dra. Camila Santos Castilho</span>
      </div>
      <ul className='flex gap-10'>
        <HeaderMenuItem text='Início' />
        <HeaderMenuItem text='Sobre Mim' />
        <HeaderMenuItem text='Localização' />
        <HeaderMenuItem text='Contato' />
      </ul>
    </header>
  )
}
