import Head from 'next/head'
import { FC } from 'react'
import s from '../../../styles/css/Home.module.css'
import { Header } from './Header'
import { HeaderImg } from '../TOPLOGO/HeaderImg'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap'
        />
      </Head>
      <div className={s.layout}>
        <Header />
        {children}
        <footer className={s.footer}>footer</footer>
      </div>
    </>
  )
}
