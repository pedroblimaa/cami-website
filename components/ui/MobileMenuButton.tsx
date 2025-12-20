interface MobileMenuButtonProps {
  isOpen: boolean
  toggleMenu: () => void
}

export default function MobileMenuButton({ isOpen, toggleMenu }: MobileMenuButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      className='focus:outline-none relative h-5 w-5 z-80'
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      <div
        className={`absolute left-0 h-0.5 w-full bg-gray-600 transition-all duration-200 ${
          isOpen ? 'top-1/2 rotate-45' : 'top-0'
        }`}
      ></div>
      <div
        className={`absolute left-0 h-0.5 w-full bg-gray-600 transition-all duration-100 ${
          isOpen ? 'opacity-0' : 'top-1/2 opacity-100 -translate-y-[50%]'
        }`}
      ></div>
      <div
        className={`absolute left-0 h-0.5 w-full bg-gray-600 transition-all duration-200 ${
          isOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
        }`}
      ></div>
    </button>
  )
}
