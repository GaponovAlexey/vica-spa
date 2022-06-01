import type { NextPage } from 'next'
import s from '../../styles/css/Home.module.css'
import { About } from '../components/ABOUT'
import { Logo } from '../components/TOPLOGO'

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <div className={s.layout}>
          <Logo />
        </div>
          <About />
      </div>
    </div>
  )
}

export default Home
