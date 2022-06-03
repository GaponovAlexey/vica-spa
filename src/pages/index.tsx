import type { GetStaticPropsContext, NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import s from '../../styles/css/Home.module.css'
import { About } from '../components/ABOUT'
import { Logo } from '../components/TOPLOGO'




const Home: NextPage = () => {
  const t = useTranslations('home')
  console.log(t)
  
  return (
    <div className={s.container}>
      <div className={s.main}>
      <h1>{t('welcome')}</h1>;
        <div className={s.layout}>
          <Logo />
        </div>
        <About />
      </div>
    </div>
  )
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default
    }
  };
}

export default Home
