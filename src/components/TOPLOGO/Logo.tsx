import { Switch } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import React from 'react'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
import { Tog } from '../utils/Tog'

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
