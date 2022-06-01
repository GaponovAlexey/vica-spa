import Head from 'next/head'
import { FC } from 'react'
import s from '../../../styles/css/Home.module.css'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <footer className={s.footer}>footer</footer>
    </>
  )
}
