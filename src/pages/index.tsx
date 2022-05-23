import type { NextPage } from 'next'
import s from '../../styles/css/Home.module.css'
import { Logo } from '../components/TOPLOGO'

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <Logo />
      </div>
    </div>
  )
}

export default Home
