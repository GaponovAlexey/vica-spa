import { FC, useState } from 'react'
import { useAppSelector } from '../../redux'
import s from '../../../styles/css/Home.module.css'
import { useTranslations } from 'next-intl'

interface IBurger {
  click: boolean
  setClick: (click: boolean) => void
}

export const Burger: FC<IBurger> = ({ click, setClick }) => {
  const t = useTranslations('header')

  return (
    <div className={s.burger}>
      <li>
        <a
          onClick={() => {
            setClick(!click)
          }}
          href='#home'
        >
          {t('home')}
        </a>
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
  )
}
