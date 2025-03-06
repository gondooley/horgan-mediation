import YourAppDotIeFooter from '@/components/footer/YourAppDotIEFooter';
import '../app/globals.css';
import HoldingPage from '@/utilities/UnderConstruction';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  // true stops all work being made public
  // useRouter().pathname != '/contact'; allows one page to be live
  // false allows the whole site to be live
  const underConstruction = false;

  return (
    <>
      {underConstruction
        ? <HoldingPage />
        : <div className="page-wrapper">
          <Head>
            <title>Horgan Mediation | Business, Workplace & Family Dispute Resolution in Cork</title>
            <meta name="description" content="Horgan Mediation provides expert business, commercial, workplace, and family dispute resolution in Cork. Avoid costly legal battles with professional mediation services." />
            <meta name="keywords" content="mediation Cork, dispute resolution Cork, business mediation, workplace mediation, family mediation, commercial mediation, conflict resolution Cork, Cork mediator, Cork mediators, arbitration Cork, workplace mediator" />
            <meta property="og:title" content="Horgan Mediation | Business, Workplace & Family Dispute Resolution in Cork" />
            <meta property="og:description" content="Expert mediation services for business, workplace, commercial, and family disputes in Cork. Resolve conflicts effectively with Horgan Mediation." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.horganmediation.ie" />
            <meta property="og:image" content="https://horganmediation.ie/images/med0-800x530.webp" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
          </Head>
          <Component {...pageProps} />
          {/* <YourAppDotIeFooter /> */}
        </div>
      }
    </>);
}


export default MyApp;