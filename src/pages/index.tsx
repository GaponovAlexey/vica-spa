import type { GetStaticPropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import s from '../../styles/css/Home.module.css'
import { About } from '../components/ABOUT'
import { Logo } from '../components/TOPLOGO'

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../local/${locale}.json`)).default
    }
  };
}

const Home: NextPage = ({ greeting }: any) => {
  console.log(greeting)
  
  return (
    <div className={s.container}>
      <div className={s.main}>
        <h1>{greeting}</h1>
        <div className={s.layout}>
          <Logo />
        </div>
        <About />
      </div>
    </div>
  )
}

export default Home
