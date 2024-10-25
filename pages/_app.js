import YourAppDotIeFooter from '@/components/YourAppDotIEFooter';
import '../app/globals.css';
import HoldingPage from '@/components/UnderConstruction';
import { useViewportSize } from '@/components/ViewportSizeHook';
import Head from 'next/head';


const Menu = () => {

  const { screenWidth } = useViewportSize();

  return (
    screenWidth > 800
      ? <div className='montserrat-font menu-wide'>
        <a href="./contact">
          Contact<br />
        </a>
        <a href="./mediation">
          Mediation<br />
        </a>
        <a href="./about">
          About<br />
        </a>
      </div>
      : <div className='montserrat-font menu-not-so-wide'>
        Menu
      </div>
  );
}



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
          <Menu />
          <YourAppDotIeFooter />
        </div>
      }
    </>);
}

export default MyApp;