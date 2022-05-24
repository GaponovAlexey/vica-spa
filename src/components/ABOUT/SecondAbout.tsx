import { useAppSelector } from '../../redux'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
export const SecondAbout = () => {
  const lang = useAppSelector((state) => state.lang.language)
  return (
    <div className={s.about}>
      <div className={s.text}>
        <div>
          {lang ? (
            <p>
              In spite of that I'm not burnout emotionally because: I love what
              I'm doing, I always grow as a professional, I work in different
              areas. Now I'm getting my second high education in psychology. By
              the way, my first education is English teacher 🙃
            </p>
          ) : (
            <p>
              Не выгораю по трём причинам: <br />
              Очень люблю то, чем занимаюсь,
              <br /> Постоянно развиваюсь.
              <br /> Работаю в разных направлениях.
              <br /> Получаю второе высшее образование по специальности
              "психолог" По первому образованию "учитель английского" так что
              май инглиш из квайт вэл 
            </p>
          )}
        </div>
        <CustomIMAGE
          style={'object-cover object-[0%_35%] '}
          height={600}
          width={600}
          src={`/img/4.jpg`}
        />
      </div>
    </div>
  )
}
