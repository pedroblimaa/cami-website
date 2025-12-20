import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa'
import FooterItem from '../ui/FooterItem'

export default function Footer() {
  const email = 'dracamilascastilho@gmail.com'
  const instagramUser = 'dracamilascastilho'

  return (
    <footer id='footer' className='bg-background scroll-mt-16'>
      <div className='py-8 px-4 max-w-7xl mx-auto flex flex-col justify-center items-center'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 justify-center items-start lg:items-center'>
          <FooterItem
            Icon={FaInstagram}
            upperText='Me siga no instagram'
            lowerText={`@${instagramUser}`}
            link={`https://www.instagram.com/${instagramUser}/`}
            size='big'
          />
          <FooterItem
            Icon={FaPhone}
            upperText='Agende sua consulta'
            lowerText='35 98820-0255'
            link='https://wa.me/35988200255'
          />
          <FooterItem
            Icon={FaEnvelope}
            upperText='Fale comigo pelo email'
            lowerText={email}
            link={`mailto:${email}?subject=Consulta&body=Olá Dra. Camila, tenho uma duvida.`}
          />
        </div>
        <p className='w-full flex flex-col sm:flex-row justify-center items-center mt-8 text-sm'>
          &copy; 2025 - Desenvolvido por{' '}
          <a
            href='https://www.pedrobonfilio.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-brand ml-0 sm:ml-2 mt-1 sm:mt-0 bg-linear-to-r from-brand to-brand bg-no-repeat bg-bottom
            bg-size-[0%_2px] hover:bg-size-[100%_2px] transition-all ease-in-out duration-300 text-center sm:text-left'
          >
            Pedro Bonfilio Lima
          </a>
        </p>
      </div>
    </footer>
  )
}
