import Image from 'next/image'

export default function Header() {
  return (
    <header className='flex items-center justify-between h-16 w-full max-w-7xl px-10'>
      <div className='flex gap-5 items-center'>
        <Image src={'/icons/logo.svg'} alt='Logo principal' width={45} height={45} />
        <span>Dra. Camila Santos Castilho</span>
      </div>
      <ul className='flex gap-10'>
        <li>
          <button>Início</button>
        </li>
        <li>
          <button>Sobre Mim</button>
        </li>
        <li>
          <button>Localização</button>
        </li>
        <li>
          <button>Contato</button>
        </li>
      </ul>
    </header>
  )
}
