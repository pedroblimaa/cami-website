import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa'
import FooterItem from '../ui/FooterItem'

export default function Footer() {
  const email = 'dracamilascastilho@gmail.com'
  const instagramUser = 'dracamilascastilho'

  return (
    <footer id='footer' className='bg-background scroll-mt-16'>
      <div className=' py-10 max-w-7xl mx-auto'>
        <div className='flex gap-20 justify-center'>
          <FooterItem
            Icon={FaInstagram}
            iconSize={52}
            padding='3'
            upperText='Me siga no instagram'
            lowerText={`@dracamilascastilho/${instagramUser}`}
            link={`https://www.instagram.com/${instagramUser}/`}
          />
          <FooterItem
            Icon={FaPhone}
            upperText='Agende sua consulta'
            lowerText='035 99999-9999'
            link='https://wa.me/035999999999'
          />
          <FooterItem
            Icon={FaEnvelope}
            upperText='Fale comigo pelo email'
            lowerText={email}
            link={`mailto:${email}?subject=Consulta&body=Olá Dra. Camila, gostaria de agendar uma consulta.`}
          />
        </div>
        <p className='w-full flex justify-center items-center mt-8'>
          &copy; 2025 - Desenvolvido por{' '}
          <a
            href='https://www.pedrobonfilio.com/'
            target='_blank'
            className='text-brand ml-2 bg-linear-to-r from-brand to-brand bg-no-repeat bg-bottom
            bg-size-[0%_2px] hover:bg-size-[100%_2px] transition-all ease-in-out duration-300'
          >
            Pedro Bonfilio Lima
          </a>
        </p>
      </div>
    </footer>
  )
}
