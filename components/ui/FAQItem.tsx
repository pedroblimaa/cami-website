'use client'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

export interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <li
      className='text-neutral-600 border-b-2 border-neutral-500 last:border-b-0 hover:bg-neutral-100 cursor-pointer transition-colors duration-200'
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className='flex items-center px-5 py-3'>
        <FaChevronRight
          className={`inline mr-2 text-gray-600 transition-transform duration-300 ${isClicked && 'rotate-90'}`}
        />
        <p className='font-semibold text-left'>{question}</p>
      </div>

      <div
        className={`overflow-hidden transition-all ease-in-out text-left
             ${isClicked ? `max-h-60 sm:max-h-40 md:max-h-30 pb-2 duration-300` : 'max-h-0 opacity-10 duration-300'}`}
      >
        <p className='flex ml-10'>{answer}</p>
      </div>
    </li>
  )
}
