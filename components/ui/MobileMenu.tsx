interface MobileMenuProps {
  isOpen: boolean
  closeMenu: () => void
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden bg-background w-full overflow-hidden transition-all duration-300 ease-in-out absolute top-0 left-0 z-40 shadow-md ${
        isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <ul className='flex flex-col items-center py-4 space-y-4'>
        <li>
          <a href='#hero' className='text-gray-600' onClick={closeMenu}>
            Início
          </a>
        </li>
        <li>
          <a href='#about' className='text-gray-600' onClick={closeMenu}>
            Sobre Mim
          </a>
        </li>
        <li>
          <a href='#location' className='text-gray-600' onClick={closeMenu}>
            Localização
          </a>
        </li>
        <li>
          <a href='#footer' className='text-gray-600' onClick={closeMenu}>
            Contato
          </a>
        </li>
      </ul>
    </div>
  )
}
