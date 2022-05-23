import React, { useState } from 'react'
import { HeaderImg } from './HeaderImg'

export const Header = () => {
  const [LanguageENG, setLanguageENG] = useState(true)

  return (
    <header id='home'>
      <div className='flex flex-wrap justify-between items-center px-4 py-2 cursor-pointer '>
        <li>
          <a href='#home' onClick={() => setLanguageENG(!LanguageENG)}>
            {LanguageENG ? 'Home' : 'Главная'}
          </a>
        </li>
        <li>
          <a onClick={() => setLanguageENG(!LanguageENG)} href='#about'>
            {LanguageENG ? 'About' : 'Обо мне'}
          </a>
        </li>
        <li>
          <a onClick={() => setLanguageENG(!LanguageENG)} href='#skills'>
            {LanguageENG ? 'Skills' : 'Услуги'}
          </a>
        </li>
        <li>
          <a onClick={() => setLanguageENG(!LanguageENG)} href='#comments'>
            {LanguageENG ? 'Comments' : 'Отзывы'}
          </a>
        </li>
        <li>
          <a onClick={() => setLanguageENG(!LanguageENG)} href='#certificates'>
            {LanguageENG ? 'Certificates' : 'Сертификаты'}
          </a>
        </li>
        <li>
          <a onClick={() => setLanguageENG(!LanguageENG)} href='#contacts'>
            {LanguageENG ? 'Contacts' : 'Контакты'}
          </a>
        </li>
        <li>
          <a onClick={() => setLanguageENG(!LanguageENG)}>
            {LanguageENG ? 'Map' : 'Как меня найти'}
          </a>
        </li>
      </div>
      <HeaderImg />
      {/* <div className='fixed top-[15px]'>
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='20' rx='8' />
          <rect y='30' width='100' height='20' rx='8' />
          <rect y='60' width='100' height='20' rx='8' />
        </svg>
      </div> */}
    </header>
  )
}
