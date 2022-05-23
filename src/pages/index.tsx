import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../../styles/css/Home.module.css'
import { Header } from '../components/layout/homePage/Header'
import { HeaderImg } from '../components/layout/homePage/HeaderImg'
import { HomepageTop } from '../components/layout/homePage/HomepageTop'
const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Podiatry</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='#!' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Macondo&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <HeaderImg />
      {/* <HomepageTop /> */}
      <main className={s.main}>
        <div className='text-3xl font-bold '>start
        
        </div>
      </main>

      <footer className={s.footer}>footer</footer>
    </div>
  )
}

export default Home
