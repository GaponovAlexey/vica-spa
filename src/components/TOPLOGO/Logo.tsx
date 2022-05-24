import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux'
import { isLanguage } from '../../redux/mainReducer'
import { HeaderImg } from './HeaderImg'
import s from '../../../styles/css/Home.module.css'

export const Logo = () => {
  const lang = useAppSelector((state) => state.lang.language)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={s.logoText}>
        {lang ? (
          <h1>
            Podolog <br /> Viktoria <br /> Olegovna
          </h1>
        ) : (
          <h1>
            Подолог
            <br /> Виктория
            <br /> Ясная
          </h1>
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

        <button onClick={() => dispatch(isLanguage())}>
          {lang ? <div>Rus</div> : <div>ENG</div>}
        </button>
      </div>
      <HeaderImg />
      <div className='flex'>
        <a href='https://dikidi.net/141929?p=0.pi'>
          {lang ? (
            <div className='bg-red-200'>Price or Order</div>
          ) : (
            <div className='bg-red-200'>Записаться</div>
          )}
        </a>
      </div>
    </div>
  )
}
