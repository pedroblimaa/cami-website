import { FaClock, FaComments, FaHandHoldingHeart, FaLock } from 'react-icons/fa'
import Card from '../ui/Card'

export default function Highlights() {
  return (
    <div className='bg-gray-200 flex justify-center'>
      <div className='max-w-7xl w-full py-20 flex gap-20 h-160'>
        <div className='flex flex-col gap-10 flex-1'>
          <Card
            icon={<FaHandHoldingHeart size={52} className='text-neutral-600' />}
            text='Atendimento humanizado'
            description='Escuto sua história com empatia e respeito, colocando você no centro das decisões sobre sua saúde.'
          />
          <Card
            icon={<FaLock size={44} className='text-neutral-600' />}
            text='Confidencialidade'
            description='Seus dados e nossa conversa são protegidos com ética e sigilo absoluto, garantindo sua privacidade.'
          />
        </div>
        <div className='flex flex-col gap-10 flex-1'>
          <Card
            icon={<FaClock size={44} className='text-neutral-600' />}
            text='Pontualidade e Respeito'
            description='Seu tempo é valioso. Mantenho uma agenda organizada para minimizar sua espera.'
          />
          <Card
            icon={<FaComments size={52} className='text-neutral-600' />}
            text='Linguagem Acessível'
            description='Explico diagnósticos e tratamentos de forma clara, para você sair do consultório seguro e bem informado.'
          />
        </div>
      </div>
    </div>
  )
}
