import { Switch } from '@headlessui/react'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'

export const Tog = () => {
  // if(typeof window === 'undefined') return {}
  const [enabled, setEnabled] = React.useState(false)
  const router = useRouter()

  const toggle = () => {
    setEnabled(!enabled)
    router.locale === 'ru' ? router.back() : router.push('/ru')
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
        <div className='sr-only'>Use setting</div>
        <div
          aria-hidden='true'
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
        pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
