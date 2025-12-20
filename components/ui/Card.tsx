'use client'

import { useState } from 'react'

interface CardProps {
  icon: React.ReactNode
  text: string
  description: string
}

export default function Card({ icon, text, description }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className='flex-1 w-full h-full bg-transparent cursor-pointer perspective-[1000px]'
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-3d shadow-md rounded-4xl sm:rounded-[2.5rem] md:rounded-[3.5rem] ${
          isFlipped ? 'transform-[rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of the card */}
        <div className='absolute w-full h-full bg-gray-100 rounded-4xl sm:rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col items-center justify-center p-4 backface-hidden'>
          {icon}
          <p className='mt-2 text-lg font-semibold text-neutral-700'>{text}</p>
        </div>

        {/* Back of the card */}
        <div className='absolute w-full h-full bg-gray-100 rounded-4xl sm:rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center p-6 backface-hidden transform-[rotateY(180deg)]'>
          <p className='text-center text-neutral-700'>{description}</p>
        </div>
      </div>
    </div>
  )
}
