interface FooterItemProps {
  Icon: React.ComponentType<{ size?: number; className?: string }>
  upperText: string
  lowerText: string
  link?: string
  size?: 'small' | 'big'
}

export default function FooterItem({ Icon, upperText, lowerText, link, size }: FooterItemProps) {
  const isBig = size === 'big'

  return (
    <a
      href={link || ''}
      className='group hover:brightness-110 hover:scale-105 transition-all duration-300'
      target='_blank'
    >
      <div className='flex items-center gap-4'>
        <div
          className={`flex-1 flex justify-center items-center rounded-full bg-brand ${
            isBig ? 'p-2 md:p-3' : 'p-3 md:p-4'
          }`}
        >
          <Icon
            size={60}
            className={`inline text-background ${
              isBig
                ? 'max-w-[32] max-h-[32] md:max-w-[52] md:max-h-[52]'
                : 'max-w-[24] max-h-[24] md:max-w-[44] md:max-h-[44]'
            } `}
          />
        </div>
        <div className='flex-col text-brand font-medium duration-300 group-hover:text-brand-dark group-hover:translate-x-1 text-md'>
          <p>{upperText}</p>
          <p>{lowerText}</p>
          <p></p>
        </div>
      </div>
    </a>
  )
}
