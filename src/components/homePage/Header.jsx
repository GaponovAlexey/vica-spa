import React, { useState } from 'react'

export const Header = () => {
  const [Isactive, setIsactive] = useState(true)
  const [LanguageENG, setLanguageENG] = useState(true)

  return (
    <header id='home'>
      <div className='flex flex-wrap justify-between items-center px-4 py-2'>
        {!Isactive && <div>&#10060;</div>}
        <li>
          <a href='#home' onClick={() => setIsactive(!Isactive)}>
            {LanguageENG ? 'Home' : 'Главная'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#about'>
            {LanguageENG ? 'About' : 'Обо мне'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#skills'>
            {LanguageENG ? 'Skills' : 'Услуги'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#comments'>
            {LanguageENG ? 'Comments' : 'Отзывы'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#certificates'>
            {LanguageENG ? 'Certificates' : 'Сертификаты'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#contacts'>
            {LanguageENG ? 'Contacts' : 'Контакты'}
          </a>
        </li>
        <li>
          <a>{LanguageENG ? 'Map' : 'Как меня найти'}</a>
        </li>
      </div>
      {/* burger */}
      {/* <div onClick={() => setIsactive(!Isactive)} className='fixed top-[15px]'>
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='20' rx='8' />
          <rect y='30' width='100' height='20' rx='8' />
          <rect y='60' width='100' height='20' rx='8' />
        </svg>
      </div> */}
    </header>
  )
}
