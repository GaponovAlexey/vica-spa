import { useAppSelector } from '../../redux'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
import { SecondAbout } from './SecondAbout'
import { ThreeAbout } from './ThreeAbout'
export const About = () => {
  const lang = useAppSelector((state) => state.lang.language)
  return (
    <div className={s.about}>
      <h1>{lang ? `So, a little about me.` : `Немного обо мне`}</h1>
      <div className={s.text}>
        <CustomIMAGE
          style={'object-cover object-[0_25%] '}
          height={600}
          width={600}
          src={`/img/6.jpg`}
        />
        <div className={s.texts} >
          {lang ? (
            <p>
              My name is Victoria <br /> and I most of all I love to see the
              results of my work.
              <br /> I started in profession in 2014.
              <br /> Finished more than 20 courses.
              <br /> Did more than 6000 procedures
            </p>
          ) : (
            <p>
              Меня зовут Виктория <br /> и я обожаю видеть плоды своей работы.{' '}
              <br />
              В профессии с 2014 года.
              <br /> Прошла более 20 курсов <br /> Провела больше 6000 процедур
            </p>
          )}
        </div>
      </div>
      <SecondAbout />
      <ThreeAbout />
    </div>
  )
}
