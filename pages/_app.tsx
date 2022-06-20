import { AppProps } from 'next/app'
import '../styles/globals.css'


type AppPropsWithLayout = AppProps & {
  Component: JSX.Element;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}

export default MyApp
