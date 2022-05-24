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
              <br /> In spite of that {"I'm"} not burnout emotionally because:
              <br /> 1. I love what {"I'm"} doing.
              <br /> 2. I always grow as a professional.
              <br /> 3. I work in different areas.
            </p>
          ) : (
            <p>
              <br /> Не выгораю по трём причинам
              <br /> 1. Очень люблю то, чем занимаюсь.
              <br /> 2. Постоянно развиваюсь.
              <br /> 3. Работаю в разных направлениях.
            </p>
          )}
        </div>
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
