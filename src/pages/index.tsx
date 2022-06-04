import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import s from '../../styles/css/Home.module.css'
import { About } from '../components/ABOUT'
import { Layout } from '../components/layout'
import { Logo } from '../components/TOPLOGO'
import { Tog } from '../components/utils/Tog'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      
      <title>Home</title>
    </Head>
      <div className='fixed top-20 right-0 '>
        <Tog  />
      </div>
      <Layout>
        <div className={s.container}>
          <div className={s.main}>
            <div className={s.layout}>
              <Logo />
            </div>
            <About />
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
    },
  }
}

export default Home
