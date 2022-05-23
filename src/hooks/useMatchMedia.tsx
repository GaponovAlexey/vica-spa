import { useLayoutEffect, useState } from 'react'

const queries = [
  '(max-width: 766px)',
  '(min-width: 767px) and (max-width: 1199px)',
  '(min-width: 1200px)',
]

export const useMatchMedia = () => {
  if (typeof window === 'undefined') return {}

  const mediaQueryLists = queries.map((query) => window.matchMedia(query))
  const getValue = () => mediaQueryLists.map((mql) => mql.matches)
  const [value, setValue] = useState(getValue)

  useLayoutEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler))
    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener('change', handler)
      )
  }, [])
  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, i) => ({
      ...acc,
      [screen]: value[i],
    }),
    {}
  )
}
