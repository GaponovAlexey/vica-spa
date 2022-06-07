import Link from 'next/link'
import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
export const Skills = () => {
  return (
    <div className={`${s.layout} ${s.skills}`}>
      <h1>Что можно сделать</h1>
      <div className={s.wrapperSkills}>
        <div className={s.elementSkills}>
          <div className={s.img}>
            <CustomIMAGE
              src='/img/skills/2.jpg'
              style={'object-cover object-[0_45%] '}
              width={500}
              height={350}
            />
          </div>
          <div className={s.about}>
            <h2>Масаж</h2>
            <p>
              помогает снять напряжение мышц за счет увеличения уровня кислорода
              и улучшения циркуляции крови по всему телу
            </p>
          </div>
          <div className={s.link}>
            <Link href={'https://dikidi.net/141929?p=2.pi-po-ss&o=2'}>
              Записаться
            </Link>
          </div>
        </div>
        <div className={s.elementSkills}>
          <div className={s.img}>
            <CustomIMAGE
              src='/img/skills/4.jpg'
              style={'object-cover object-[0_45%] '}
              width={500}
              height={350}
            />
          </div>
          <div className={s.about}>
            <h2>Педикюр</h2>
            <p>Косметический, снятие, покрытие </p>
            <p>Херургический, натоптыши, мазоли</p>
            <p>Установка титановой нити</p>
          </div>
          <div className={s.link}>
            <Link href={'https://dikidi.net/141929?p=2.pi-po-ss&o=2'}>
              Записаться
            </Link>
          </div>
        </div>
        <div className={s.elementSkills}>
          <div className={s.img}>
            <CustomIMAGE
              src='/img/skills/3.jpg'
              style={'object-cover object-center '}
              width={500}
              height={350}
            />
          </div>
          
          <div className={s.about}>
            <h2>Косметология</h2>
            <p>Отбеливание зубов</p>
            <p>Cкульптурно буккальный массаж лица</p>
          </div>
          <div className={s.link}>
            <Link href={'https://dikidi.net/141929?p=2.pi-po-ss&o=2'}>
              Записаться
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
