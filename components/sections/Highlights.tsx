import { FaClock, FaComments, FaHandHoldingHeart, FaLock } from 'react-icons/fa'
import Card from '../ui/Card'

export default function Highlights() {
  return (
    <div id='highlights' className='bg-gray-200 flex justify-center'>
      <div className='max-w-7xl w-full py-10 sm:py-15 md:py-20 px-4 sm:px-6 h-160'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-full'>
          <Card
            icon={<FaHandHoldingHeart size={40} className='text-neutral-600' />}
            text='Atendimento humanizado'
            description='Escuto sua história com empatia e respeito, colocando você no centro das decisões sobre sua saúde.'
          />
          <Card
            icon={<FaLock size={40} className='text-neutral-600' />}
            text='Confidencialidade'
            description='Seus dados e nossa conversa são protegidos com ética e sigilo absoluto, garantindo sua privacidade.'
          />
          <Card
            icon={<FaClock size={40} className='text-neutral-600' />}
            text='Pontualidade e Respeito'
            description='Seu tempo é valioso. Mantenho uma agenda organizada para minimizar sua espera.'
          />
          <Card
            icon={<FaComments size={40} className='text-neutral-600' />}
            text='Linguagem Acessível'
            description='Explico diagnósticos e tratamentos de forma clara, para você sair do consultório seguro e bem informado.'
          />
        </div>
      </div>
    </div>
  )
}
