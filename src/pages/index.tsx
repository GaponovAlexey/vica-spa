import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../../styles/css/Home.module.css'
import { Header } from '../components/layout/homePage/Header'
import { HeaderImg } from '../components/layout/homePage/HeaderImg'

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <div className='text-3xl font-bold '>start</div>
      </main>
    </div>
  )
}

export default Home
