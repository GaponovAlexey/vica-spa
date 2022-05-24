import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from '../../redux'
import { isLanguage } from '../../redux/mainReducer'
import { HeaderImg } from './HeaderImg'

export const Logo = () => {
  const lang = useAppSelector((state) => state.lang.language)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex flex-wrap justify-between'>
        {lang ? (
          <h1 className=' font-bold text-left '>
            Podolog <br /> Viktoria <br /> Olegovna
          </h1>
        ) : (
          <h1 className=' font-bold text-left '>
            Подолог
            <br /> Виктория
            <br /> Ясная
          </h1>
        )}
        {lang ? (
          <div>
            Pedicure Professional <br /> in the profession since 2014,
            <br /> Komendantsky Prospekt (Saint Petersburg)
          </div>
        ) : (
          <div>
            Со мной не страшно <br /> В профессии с 2014 года
            <br /> Комендантский проспект <br /> (Санкт Петербург)
          </div>
        )}
        {lang ? <div>Price or Order</div> : <div>Записаться</div>}
      <button onClick={() => dispatch(isLanguage())}>rus|eng</button>
      </div>
      <HeaderImg />
    </div>
  )
}
