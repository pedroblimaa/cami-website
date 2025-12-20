'use client'
import Image from 'next/image'
import { BsFillTriangleFill } from 'react-icons/bs'
import { useState } from 'react'

export default function About() {
  const [isResumeVisible, setIsResumeVisible] = useState(false)

  return (
    <div id='about' className='flex px-4 sm:px-6 md:px-10 lg:px-30 justify-center bg-custom-pink-light scroll-mt-16'>
      <div className='max-w-7xl w-full flex flex-col gap-8 py-10'>
        <div className='flex flex-col md:flex-row gap-8 items-center justify-between'>
          <Image src='/images/img-about.png' height={300} width={300} alt='Sobre camila' className='w-full md:w-auto max-w-[300px]' />
          <div className='flex flex-col gap-6 flex-1 w-full'>
            <h2 className='font-lora text-2xl sm:text-3xl md:text-4xl text-custom-pink-dark font-medium text-center md:text-left'>
              Olá! Eu sou Camila Santos Castilho!
            </h2>
            <div className='flex flex-col gap-4 text-base sm:text-lg'>
              <p>
                Sou médica formada pela Faculdade de Medicina de Itajubá. Atendo na área clínica, sempre com foco no
                lado humano da medicina: aquele que envolve ouvir com calma, acolher, conversar e realmente entender o
                que cada pessoa está sentindo.
              </p>
              <p>
                No meu dia a dia, sou atenciosa e acolhedora. Gosto de criar um ambiente leve, onde o paciente possa se
                sentir tranquilo e à vontade para falar abertamente sobre o que está vivendo.
              </p>
              <p>
                No meu tempo livre, sou a pessoa que gosta de maratonar séries, ver filmes e música. Esses momentos
                fazem parte de quem eu sou e ajudam a manter minha rotina mais leve, equilibrada e criativa.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className='flex gap-4 bg-custom-pink-medium rounded-t-3xl px-6 py-1 sm:py-2 md:py-3 text-custom-pink-light items-center cursor-pointer'
            onClick={() => setIsResumeVisible(!isResumeVisible)}
          >
            <BsFillTriangleFill
              size={20}
              className={`transform transition-transform duration-300 ${isResumeVisible ? 'rotate-0' : 'rotate-180'}`}
            />
            <p className='text-lg text-center'> Meu curriculo</p>
          </div>

          <div className={`w-full relative overflow-hidden duration-300 ${isResumeVisible ? 'max-h-1000' : 'max-h-0'}`}>
            <Image
              src='/images/Resume.jpg'
              alt='Resume'
              width={500}
              height={700}
              className={`w-full h-auto object-contain duration-300 ease-in-out ${!isResumeVisible && '-translate-y-full'}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
