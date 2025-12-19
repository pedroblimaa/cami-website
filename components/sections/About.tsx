'use client'
import Image from 'next/image'
import { BsFillTriangleFill } from 'react-icons/bs'
import { useState } from 'react'

export default function About() {
  const [isResumeVisible, setIsResumeVisible] = useState(false)

  return (
    <div id='about' className='flex px-30 justify-center bg-custom-pink-light scroll-mt-16'>
      <div className='max-w-7xl w-full flex flex-col gap-10 py-10'>
        <div className='flex gap-30 items-center justify-between'>
          <Image src='/images/img-about.png' height={700} width={500} alt='Sobre camila' />
          <div className='flex flex-col gap-10'>
            <h2 className='font-lora text-4xl text-custom-pink-dark font-medium'>
              Olá! Eu sou Camila Santos Castilho!
            </h2>
            <div className='flex flex-col gap-5 text-xl'>
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
            className='flex gap-4 bg-custom-pink-medium rounded-t-3xl px-8 py-3 text-custom-pink-light items-center cursor-pointer'
            onClick={() => setIsResumeVisible(!isResumeVisible)}
          >
            <BsFillTriangleFill
              size={24}
              className={`transform transition-transform duration-300 ${isResumeVisible ? 'rotate-0' : 'rotate-180'}`}
            />
            <p className='text-xl text-center'> Meu curriculo</p>
          </div>

          <div className={`w-full relative overflow-hidden duration-300 ${isResumeVisible ? 'max-h-1000' : 'max-h-0'}`}>
            <Image
              src='/images/Resume.jpg'
              alt='Resume'
              width={1920}
              height={1080}
              className={`duration-300 ease-in-out ${!isResumeVisible && '-translate-y-full'}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
