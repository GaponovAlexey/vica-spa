import { useState } from 'react'
import { useSelector } from 'react-redux'
import { isLanguage } from '../../redux/mainReducer'
import { HeaderImg } from './HeaderImg'

export const Logo = () => {
  const { lang } = useSelector(state => state.lang.)
  const [LanguageENG, setLanguageENG] = useState(lang)

  return (
    <div>
      <div className='flex flex-wrap justify-between'>
        {LanguageENG ? (
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
        {LanguageENG ? (
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
      </div>
      <HeaderImg />
    </div>
  )
}
