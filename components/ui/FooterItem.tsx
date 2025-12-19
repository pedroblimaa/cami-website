interface FooterItemProps {
  Icon: React.ComponentType<{ size?: number; className?: string }>
  upperText: string
  lowerText: string
  iconSize?: number
  padding?: string
  link?: string
}

export default function FooterItem({ Icon, upperText, lowerText, iconSize, padding, link }: FooterItemProps) {
  return (
    <a href={link || ''} className='group hover:brightness-110 hover:scale-105 transition-all duration-300' target='_blank'>
      <div className='flex items-center gap-4'>
        <div
          className={`flex-1 flex justify-center items-center rounded-full bg-brand ${
            padding ? `p-${padding}` : 'p-4'
          } `}
        >
          <Icon size={iconSize || 44} className='inline text-background' />
        </div>
        <div className='flex-col text-brand font-medium duration-300 group-hover:text-brand-dark group-hover:translate-x-1'>
          <p>{upperText}</p>
          <p>{lowerText}</p>
          <p></p>
        </div>
      </div>
    </a>
  )
}
