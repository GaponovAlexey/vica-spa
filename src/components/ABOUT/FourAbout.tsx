import { useAppSelector } from '../../redux'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
export const FourAbout = () => {
  const lang = useAppSelector((state) => state.lang.language)
  return (
    <div className={s.about}>
      <div className={s.text}>
        <div>
          {lang ? (
            <p>
              <br />
              Now {"I'm"} getting my second high education in psychology. By the
              way, my first education is English teacher 
            </p>
          ) : (
            <p>
              <br />
              Получаю второе высшее образование по специальности "психолог" По
              первому образованию "учитель английского" <br />
              так что май инглиш из квайт вэл
            </p>
          )}
        </div>
        <CustomIMAGE
          style={'object-cover object-[0%_37%] '}
          height={600}
          width={600}
          src={`/img/5.jpg`}
        />
      </div>
    </div>
  )
}
