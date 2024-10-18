import YourAppDotIeFooter from '@/components/YourAppDotIEFooter';
import '../app/globals.css';
import HoldingPage from '@/components/UnderConstruction';

function MyApp({ Component, pageProps }) {

  const underConstruction = false;

  return (
    <>
      {underConstruction
        ? <HoldingPage />
        : <div className="page-wrapper">
          <Component {...pageProps} />
          <YourAppDotIeFooter />
        </div>
      }
    </>);
}

export default MyApp;