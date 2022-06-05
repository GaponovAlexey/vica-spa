import { useAppSelector } from '../../redux'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
import { SecondAbout } from './SecondAbout'
import { ThreeAbout } from './ThreeAbout'
import { FourAbout } from './FourAbout'
import { useTranslations } from 'next-intl'
export const About = () => {
  const lang = useAppSelector((state) => state.lang.language)
  const t = useTranslations('about')
  return (
    <div className={s.reaperAbout} >
      <div className={`${s.about} ${s.layout}`}>
        <h1>{t('title')}</h1>
        <div className={s.wrapperText}>
          <CustomIMAGE
            style={'object-cover object-[0_30%] '}
            height={600}
            width={600}
            src={`/img/6.jpg`}
          />
          <div className={s.textRight}>
            {t('topTitle')}
          </div>
        </div>
        <SecondAbout t={t}/>
        <ThreeAbout t={t} />
        <FourAbout t={t} />
      </div>
    </div>
  )
}
