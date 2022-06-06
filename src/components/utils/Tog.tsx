import Link from 'next/link'
import { useRouter } from 'next/router'
import s from '../../../styles/css/Home.module.css'
export const Tog = () => {
  const { asPath, locales } = useRouter()

  return (
    <div className={s.toggle}>
      {locales &&
        locales?.map((locale) => (
          <li key={locale}>
            <Link href={asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
    </div>
  )
}
