import { useTranslations } from 'next-intl'
import { useState } from 'react'
import s from '../../../styles/css/Home.module.css'
import { useAppSelector } from '../../redux'
import { Burger } from './Burger'

export const Header = () => {
  const t = useTranslations('home')
  const lang = useAppSelector((state) => state.lang.language)
  const [click, setClick] = useState(false)
  if (click) {
    return <Burger click={click} setClick={setClick} />
  }
  return (
    <header id='home' className={s.header}>
  
      <div>
        <li>
          <a href='#home'>{lang ? 'Home' : 'Главная'}</a>
        </li>
        <li>
          <a href='#about'>{lang ? 'About' : 'Обо мне'}</a>
        </li>
        <li>
          <a href='#skills'>{lang ? 'Skills' : 'Услуги'}</a>
        </li>
        <li>
          <a href='#comments'>{lang ? 'Comments' : 'Отзывы'}</a>
        </li>
        <li>
          <a href='#certificates'>{lang ? 'Certificates' : 'Сертификаты'}</a>
        </li>
        <li>
          <a href='#contacts'>{lang ? 'Contacts' : 'Контакты'}</a>
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
