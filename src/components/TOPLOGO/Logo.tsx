import Link from 'next/link'
import { useRouter } from 'next/router'
import s from '../../../styles/css/Home.module.css'
import { useAppSelector } from '../../redux'
import { CustomIMAGE } from '../utils/CustomIMAGE'
import Toggle from '../utils/Toggle'

export const Logo = () => {
  const lang = useAppSelector((state) => state.lang.language)
  const router = useRouter()
  return (
    <div className={s.logoText}>
      <div>
        <div>
          <ul>
            {router?.locales?.map((locale: any) => (<li key={locale}>
                <Link href={router.asPath} locale={locale} ><a>{locale}</a></Link></li>))}
          </ul>
        </div>
        {lang ? (
          <h1>Podolog Viktorias Olegovna</h1>
        ) : (
          <h1>
            Подолог <br /> Виктория Ясная
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
        <div>
          <Toggle />
        </div>
        <CustomIMAGE
          style={'object-cover object-[0_45%]'}
          height={600}
          width={600}
          src={`/img/2.jpg`}
        />
      </div>
    </div>
  )
}
