import type { Metadata } from 'next'
import { Lora, Nunito } from 'next/font/google'
import './globals.css'

const nunito  = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dracamilascastilho.com.br'),
  title: 'Dra. Camila Santos Castilho - Médica Generalista',
  description: 'Consultas médicas de qualidade com Dra. Camila Santos Castilho, médica generalista especializada em cuidados abrangentes e humanizados.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/icons/logo_180x180.png',
  },
  openGraph: {
    type: 'website',
    title: 'Dra. Camila Santos Castilho - Médica Generalista',
    description: 'Consultas médicas de qualidade com Dra. Camila Santos Castilho, médica generalista especializada em cuidados abrangentes e humanizados.',
    images: [
      {
        url: '/icons/logo.svg',
        width: 512,
        height: 512,
        alt: 'Dra. Camila Santos Castilho - Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.variable} ${lora.variable} antialiased`}>
        <div className='font-nunito'>{children}</div>
      </body>
    </html>
  )
}
