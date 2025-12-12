import Image from 'next/image'

export default function Hero() {
  return (
    <div className='h-[600px] w-full flex items-center justify-between px-20 overflow-hidden'>
      <div>
        <h2 className='font-semibold text-gray-500 text-xl'>Dra. Camila Santos Castilho</h2>
        <h1 className='text-4xl font-lora text-brand font-semibold'>Médica generalista</h1>
        <a href='https://paciente.amorsaude.com.br/amorsaude' target='_blank' rel='noopener noreferrer'>
          <button
            className='group relative bg-brand px-8 py-3 rounded-2xl text-gray-50 mt-5 transition-all duration-300 ease-in-out 
            transform hover:-translate-y-1 hover:shadow-lg hover:bg-brand-light active:scale-95 active:shadow-md
            cursor-pointer overflow-hidden'
          >
            <span
              className='absolute top-0 -left-4 w-1/2 h-full bg-white opacity-10 transform -skew-x-12 -translate-x-full
                group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out'
            ></span> 
            <span className='relative'>Agende sua consulta</span>
          </button>
        </a>
      </div>
      <div className='h-full flex items-end'>
        <Image src='/images/img-transparent.png' alt='Camila' height={400} width={400} className='-mb-10' />
      </div>
    </div>
  )
}
