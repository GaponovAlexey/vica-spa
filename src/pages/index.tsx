import type { GetStaticPropsContext, NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import s from '../../styles/css/Home.module.css'
import { About } from '../components/ABOUT'
import { Layout } from '../components/layout'
import { Logo } from '../components/TOPLOGO'

const Home: NextPage = () => {
  return (
    <>
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
