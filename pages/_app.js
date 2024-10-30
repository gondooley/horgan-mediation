import YourAppDotIeFooter from '@/components/YourAppDotIEFooter';
import '../app/globals.css';
import HoldingPage from '@/components/UnderConstruction';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  // true stops all work being made public
  const underConstruction = true;

  return (
    <>
      {underConstruction
        ? <HoldingPage />
        : <div className="page-wrapper">
            <Head>
              <title>Horgan Mediation Solutions</title>
              <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <Component {...pageProps} />
            {/* <YourAppDotIeFooter /> */}
        </div>
      }
    </>);
}


export default MyApp;