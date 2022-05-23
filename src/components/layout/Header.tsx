import React, { useState } from 'react'

export const Header = () => {
  const [LanguageENG, setLanguageENG] = useState(false)

  return (
    <header
      id='home'
      className='fixed h-1/1 w-full max-w-[1200px] left-auto top-auto z-10 '
    >
      <div
        className='
        flex flex-wrap justify-between px-4 py-4 cursor-pointer border-b-4   bg-white '
      >
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
