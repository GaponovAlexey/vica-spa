import { useTranslations } from 'next-intl'
import React from 'react'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'

export const Logo = () => {
  const t = useTranslations('logo')

  return (
    <div className={s.logoText}>
      <h1>{t('title')}</h1>
      <div>
        <div>
          <p>{t('subtitle')}</p>
          <a href='https://dikidi.net/141929?p=0.pi'>{t('price')}</a>
        </div>
          <CustomIMAGE
            style={'object-cover object-[0_55%]'}
            height={400}
            width={600}
            src={`/img/2.jpg`}
          />
      </div>
    </div>
  )
}
