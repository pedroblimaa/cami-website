import Image from 'next/image'

export default function Hero() {
  return (
    <div className='h-[600px] w-full flex items-center justify-between px-20 overflow-hidden'>
      <div>
        <h2 className='font-semibold text-gray-500 text-xl'>Dra. Camila Santos Castilho</h2>
        <h1 className='text-4xl font-lora text-brand font-semibold'>Médica generalista</h1>
        <button
          className='bg-brand px-8 py-3 rounded-2xl text-gray-50 mt-5 hover:bg-brand-light
            hover:-translate-y-1.5 hover:shadow-md hover:shadow-gray-400 hover:text-white hover:scale-[1.01]
            transition-all duration-400 cursor-pointer active:scale-90 active:shadow-sm'
        >
          Agende sua consulta
        </button>
      </div>
      <div className='h-full flex items-end'>
        <Image src='/images/img-transparent.png' alt='Camila' height={400} width={400} className='-mb-10' />
      </div>
    </div>
  )
}
