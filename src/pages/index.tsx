import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import s from '../../styles/css/Home.module.css'
import { useMatchMedia } from '../hooks'
// const useMatchMedia  = dynamic(() => import('../hooks'), { ssr: false })

 interface typeMOB  {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}


const Home: NextPage = () => {
  const { isMobile, isDesktop, isTablet } = useMatchMedia() as typeMOB
  
  return (
    <div className={s.container}>
      <main className={s.main}>
        {isMobile && <div className='text-3xl font-bold '>mobile</div>}
        {isDesktop && <div className='text-3xl font-bold '>desktop</div>}
        {isTablet && <div className='text-3xl font-bold '>tablet</div>}
        <div className='text-3xl font-bold '>start</div>
      </main>
    </div>
  )
}

export default Home
