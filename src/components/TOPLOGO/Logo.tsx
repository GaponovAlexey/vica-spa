import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux'
import { isLanguage } from '../../redux/mainReducer'
import { HeaderImg } from './HeaderImg'
import s from '../../../styles/css/Home.module.css'

export const Logo = () => {
  const lang = useAppSelector((state) => state.lang.language)
  const dispatch = useDispatch()

  return (
    <div className={s.logoText}>
      <div>
        {lang ? (
          <h1>Podolog Viktorias Olegovna</h1>
        ) : (
          <h1>Подолог Виктория Ясная</h1>
        )}
        {lang ? (
          <p>
            Pedicure Professional <br /> in the profession since 2014,
            <br /> Komendantsky Prospekt (Saint Petersburg)
          </p>
        ) : (
          <p>
            Со мной не страшно <br /> В профессии с 2014 года
            <br /> Комендантский проспект (Санкт Петербург)
          </p>
        )}
        <a href='https://dikidi.net/141929?p=0.pi'>
          {lang ? (
            <div className='bg-red-200'>Price or Order</div>
          ) : (
            <div className='bg-red-200'>Записаться</div>
          )}
          {lang ? (
            <div className='bg-red-200'>Price or Order</div>
          ) : (
            <div className='bg-red-200'>Узнать цену</div>
          )}
        </a>
      </div>

      <div className={s.lang}>
        <button onClick={() => dispatch(isLanguage())}>
          {lang ? <div>rus</div> : <div>eng</div>}
        </button>
        <HeaderImg />
      </div>
    </div>
  )
}
