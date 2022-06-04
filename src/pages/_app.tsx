import '../../styles/css/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import { Provider } from 'react-redux'
import { store } from '../redux'
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </NextIntlProvider>
  )
}

export default MyApp
