import { Switch } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { isLanguage } from '../../redux/mainReducer'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)
  const router = useRouter()

  const dispatch = useDispatch()
  const toggle = () => {
    setEnabled(!enabled)
    dispatch(isLanguage())
    router.locale === 'ru' ? router.back() : router.push('/ru')
    // {
    //   locales?.map((locale: any) => (
    //     <li key={locale}>
    //       <Link href={router.asPath} locale={locale}>
    //         <a>{locale}</a>
    //       </Link>
    //     </li>
    //   ))
    // }
  }

  return (
    <div>
      {enabled ? <div>rus</div> : <div>eng</div>}
      <Switch
        checked={enabled}
        onChange={toggle}
        className={`${enabled ? 'bg-sky-300' : 'bg-sky-700'}
      relative inline-flex h-[18px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className='sr-only'>Use setting</span>
        <span
          aria-hidden='true'
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
        pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
