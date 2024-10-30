import YourAppDotIeFooter from '@/components/YourAppDotIEFooter';
import '../app/globals.css';
import HoldingPage from '@/components/UnderConstruction';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  // true stops all work being made public
  // useRouter().pathname != '/contact'; allows one page to be live
  // false allows the whole site to be live
  const underConstruction = useRouter().pathname != '/contact';

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