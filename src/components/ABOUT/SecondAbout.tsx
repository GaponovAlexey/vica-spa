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
              the way, my first education is English teacher 🙃 On this site you
              can find some information about my services and answers to your
              questions about particular problems. You can make an appointment
              here.
            </p>
          ) : (
            <p>
              <p className='bold' > Не выгораю по трём причинам: </p> <br />
              Очень люблю то, чем занимаюсь,<br /> Постоянно развиваюсь.<br /> Работаю в
              разных направлениях.<br /> Получаю второе высшее образование по
              специальности "психолог" По первому образованию "учитель
              английского" так что май инглиш из квайт вэл🙃 На этом сайте вы
              сможете увидеть то, чем я могу быть вам полезна, и, возможно,
              найти некоторые ответы на свои вопросы по конкретным проблемам.
              Записаться на процедуру можно
            </p>
          )}
        </div>
        <CustomIMAGE
          style={'object-cover object-[0_35%] '}
          height={600}
          width={600}
          src={`/img/4.jpg`}
        />
      </div>
    </div>
  )
}
