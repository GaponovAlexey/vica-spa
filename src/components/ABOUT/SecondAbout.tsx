import { useAppSelector } from '../../redux'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
export const SecondAbout = ({ t }: any) => {
  return (
    <div className={s.about}>
      <div className={s.wrapperText}>
        <div className={s.textLeft}>{t('secondTitle')}</div>
        <CustomIMAGE
          style={'object-cover object-[0%_85%] '}
          height={600}
          width={600}
          src={`/img/4.jpg`}
        />
      </div>
    </div>
  )
}
