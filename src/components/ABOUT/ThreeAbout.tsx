import { useAppSelector } from '../../redux'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
export const ThreeAbout = ({t}: any) => {
  const lang = useAppSelector((state) => state.lang.language)
  return (
    <div className={s.about}>
      <div className={s.wrapperText}>
        <CustomIMAGE
          style={'object-cover object-[0_75%] '}
          height={600}
          width={600}
          src={`/img/1.jpg`}
        />
        <div className={s.textRight}>
          {t('threeTitle')}
        </div>
      </div>
    </div>
  )
}
