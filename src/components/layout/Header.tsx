import { useState } from 'react'
import { useAppSelector } from '../../redux'
import { cl } from '../utils/cl'
import { Burger } from './Burger'

export const Header = () => {
  const lang = useAppSelector((state) => state.lang.language)
  const [click, setclick] = useState(false)
  console.log(click)

  {
    click && <Burger />
  }
  return (
    <header
      id='home'
      className={cl('fixed h-1/1 w-full max-w-[1080px] left-auto top-0 z-10')}
    >
      <div
        className='
        sm:hidden md:hidden lg:flex
        flex flex-wrap justify-between px-4 py-4 cursor-pointer border-b-2 border-sky-300'
      >
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

      <div className='xl:hidden  lg:hidden '>
        <svg
          onClick={() => setclick(!click)}
          viewBox='0 0 100 80'
          width='40'
          height='40'
        >
          <rect width='100' height='20' rx='8' />
          <rect y='30' width='100' height='20' rx='8' />
          <rect y='60' width='100' height='20' rx='8' />
        </svg>
      </div>
    </header>
  )
}
