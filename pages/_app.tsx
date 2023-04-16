import { AppProps /* , AppContext */ } from 'next/app';
import { type AppType } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';

import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const App: AppType<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
    </Head>
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
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
