import { AppProps /* , AppContext */ } from 'next/app';
import { type AppType } from 'next/app';

import 'styles/globals.css';

import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const App: AppType<AppProps> = ({ Component, pageProps }) => (
  <>
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  </>
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
