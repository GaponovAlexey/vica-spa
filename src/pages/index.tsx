import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../../styles/css/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
        />
      </Head>

      <div className={s.main}>
        <div className='text-3xl font-bold '>start</div>
      </div>
    </div>
  )
}

export default Home
