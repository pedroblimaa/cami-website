interface HeaderMenuItemProps {
  text: string
  id: string
}

export default function HeaderMenuItem({ text, id }: HeaderMenuItemProps) {
  return (
    <li>
      <a
        href={`#${id}`}
        className=' text-gray-600 cursor-pointer bg-linear-to-r from-brand to-brand bg-no-repeat bg-bottom
            bg-size-[0%_2px] hover:bg-size-[100%_2px] transition-all ease-in-out duration-300'
      >
        {text}
      </a>
    </li>
  )
}
