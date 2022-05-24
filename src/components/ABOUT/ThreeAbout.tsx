import { useAppSelector } from '../../redux'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
export const ThreeAbout = () => {
  const lang = useAppSelector((state) => state.lang.language)
  return (
    <div className={s.about}>
      <div className={s.text}>
        <CustomIMAGE
          style={'object-cover object-[0_75%] '}
          height={600}
          width={600}
          src={`/img/1.jpg`}
        />
        <div className={s.texts}>
          {lang ? (
            <p>
              On this site you can find some information about my services and
              answers to your questions about particular problems. You can make
              an appointment here.
            </p>
          ) : (
            <p>
              На этом сайте вы сможете увидеть то, чем я могу быть вам полезна,
              и, возможно, найти некоторые ответы на свои вопросы по конкретным
              проблемам. Записаться на процедуру можно
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
