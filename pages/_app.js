import YourAppDotIeFooter from '@/components/YourAppDotIEFooter';
import '../app/globals.css';
import HoldingPage from '@/components/UnderConstruction';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  const underConstruction = false;

  return (
    <>
      {underConstruction
        ? <HoldingPage />
        : <div className="page-wrapper">
            <Head>
              <title>Horgan Mediation Solutions</title>
            </Head>
            <Component {...pageProps} />
            <YourAppDotIeFooter />
        </div>
      }
    </>);
}


export default MyApp;