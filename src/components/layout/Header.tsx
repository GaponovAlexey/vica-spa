import { useTranslations } from 'next-intl'
import { useState } from 'react'
import s from '../../../styles/css/Home.module.css'
import { Burger } from './Burger'

export const Header = () => {
  const t = useTranslations('header')
  const [click, setClick] = useState(false)
  if (click) {
    return <Burger click={click} setClick={setClick} />
  }

  return (
    <header id='home' className={s.header}>
      
      <div>
        <li>
          <a href='#home'>{t('home')}</a>
        </li>
        <li>
          <a href='#about'>{t('about')}</a>
        </li>
        <li>
          <a href='#skills'>{t('skills')}</a>
        </li>
        <li>
          <a href='#comments'>{t('comments')}</a>
        </li>
        <li>
          <a href='#certificates'>{t('certificates')}</a>
        </li>
        <li>
          <a href='#contacts'>{t('contact')}</a>
        </li>
      </div>

      <p className='xl:hidden  lg:hidden '>
        <svg
          onClick={() => setClick(!click)}
          viewBox='0 0 100 80'
          width='40'
          height='40'
        >
          <rect width='100' height='20' rx='8' />
          <rect y='30' width='100' height='20' rx='8' />
          <rect y='60' width='100' height='20' rx='8' />
        </svg>
      </p>
      
    </header>
  )
}
