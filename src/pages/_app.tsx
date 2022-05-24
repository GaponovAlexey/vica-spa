import '../../styles/css/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import { Provider } from 'react-redux'
import { store } from '../redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
