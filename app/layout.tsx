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
  title: 'Dra. Camila Santos Castilho - Médica Generalista',
  description: 'Consultas médicas de qualidade com Dra. Camila Santos Castilho, médica generalista especializada em cuidados abrangentes e humanizados.',
  icons: {
    icon: '/icons/logo.svg',
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
