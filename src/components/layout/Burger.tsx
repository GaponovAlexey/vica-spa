import { FC, useState } from 'react'
import { useAppSelector } from '../../redux'
import { cl } from '../utils/cl'
import s from '../../../styles/css/Home.module.css'

interface IBurger {
  click: boolean
  setClick: (click: boolean) => void
}

export const Burger: FC<IBurger> = ({ click, setClick }) => {
  const lang = useAppSelector((state) => state.lang.language)

  return (
    <div className={s.burger}>
      <li>
        <a
          onClick={() => {
            setClick(!click)
          }}
          href='#home'
        >
          {lang ? 'Home' : 'Главная'}
        </a>
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
