import { useState } from 'react'
import { useAppSelector } from '../../redux'
import { cl } from '../utils/cl'

export const Burger = () => {
  const lang = useAppSelector((state) => state.lang.language)
  const [click, setclick] = useState(false)

  

  return (
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
  )
}
