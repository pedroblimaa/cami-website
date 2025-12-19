import { FaChevronRight } from 'react-icons/fa'
import FAQItem from '../ui/FAQItem'

export default function FAQ() {
  return (
    <div className='bg-gray-200 flex justify-center text-lg'>
      <div className='max-w-7xl w-full py-10 flex flex-col items-center gap-10'>
        <h2 className='text-5xl font-lora text-brand'>Dúvidas Frequentes</h2>
        <ul className='text-center w-full rounded-4xl border-gray-500 border-2 overflow-hidden'>
          <FAQItem
            question='Quais tipos de atendimentos você realiza e quais condições você acompanha?'
            answer='Atendo na área clínica, avaliando condições agudas (como dores, sintomas respiratórios, tonturas,
            alergias e queixas gastrointestinais) e crônicas (como hipertensão, diabetes, ansiedade leve e dores
            musculoesqueléticas). Solicito exames quando necessário e oriento condutas de forma prática e
            organizada.'
          />
          <FAQItem question='Atende quais idades?' answer='Atendo pacientes a partir de 6 anos de idade.' />
          <FAQItem
            question='Você realiza atestados e receitas controladas?'
            answer='Sim, dentro das normas e necessidades de cada caso.'
          />
          <FAQItem
            question='Após a consulta, posso tirar dúvidas?'
            answer='Sim. Dou orientações pós-consulta e esclareço dúvidas breves relacionadas ao atendimento realizado.'
          />
          <FAQItem
            question='Aceita convênio?'
            answer='Atualmente, atendimentos pelo plano Cartão de Todos e particular.'
          />
          <FAQItem
            question='Como agendo uma consulta?'
            answer='O agendamento pode ser feito diretamente pelo botão de agendamento disponível no site, pelo app do Cartão de Todos, ou pelo WhatsApp da Clínica.'
          />
        </ul>
      </div>
    </div>
  )
}
