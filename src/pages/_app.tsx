import '../../styles/css/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import { Provider } from 'react-redux'
import { store } from '../redux'
import {NextIntlProvider} from 'next-intl';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextIntlProvider messages={pageProps.messages}>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      </NextIntlProvider>
    </Provider>
  )
}

export default MyApp
