import YourAppDotIeFooter from '@/components/YourAppDotIEFooter';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <Component {...pageProps} />
      <YourAppDotIeFooter />
    </div>
  );
}

export default MyApp;