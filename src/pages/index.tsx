import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import s from '../../styles/css/Home.module.css'
import { About } from '../components/ABOUT'
import { Layout } from '../components/layout'
import { Sertik } from '../components/SERTIFICATES'
import { Skills } from '../components/SKILLS'
import { Logo } from '../components/TOPLOGO'
import { Tog } from '../components/utils/Tog'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Tog />
        <div className={s.container}>
          <Logo />
          <About />
          <Skills />
          <Sertik />
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
