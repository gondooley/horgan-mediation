import React, { useEffect, useState } from 'react';
import CompanyName from '@/components/CompanyName';
import about from '../text/about.json'
import { PortraitView, LandscapeView, WideView, NarrowView, useViewportSize } from '@/components/ViewportSizeHook';
import '../styles/index.css'
import { BrowserView, MobileView } from 'react-device-detect';
import MIIApprovedImage from '@/components/MIIApproved';
import PageWithMenu from '@/components/PageWithMenu';
import Navigation from '@/components/Navigation';

const Desk = () => {
  return (
    <div className='desk' />
  );
}

const TadghImageBrowser = () => {
  return (
    <img
      src="/images/Tadgh.png"
      alt="Tadgh Horgan"
      className='tadgh tadgh-browser'
    />
  );
}

const TadghImagePortrait = () => {
  return (
    <img
      src="/images/Tadgh.png"
      alt="Tadgh Horgan"
      className='tadgh tadgh-portrait'
    />
  )
}

const DeskAboutContainer = () => {
  return (
    <p className='desk-about'>
      {about.about0}
    </p>
  );
}

// const FloatingMenu = () => {
//   return (
//     <div 
//     className='montserrat-font'
//     style={{
//       position: 'absolute',
//       right: '5%',
//       top: '10%',
//       fontSize: '36px',
//       lineHeight: '48px'
//     }}>
//       About<br />
//       Mediation<br />
//       Family Mediation<br />
//       Contact<br />
//     </div>
//   );
// }

const HomeWide = () => {
  return (
    <div className='home-page'>
      <div className='float'>
        <CompanyName />
      </div>
      <Desk />
      <div className='on-desk'>
        <MIIApprovedImage />
      </div>
      <TadghImageBrowser />
      <DeskAboutContainer />
    </div>
  );
}

const HomeNarrow = () => {
  return (
    <>
      <Navigation />
      <CompanyName />
      <Desk />
      <TadghImageBrowser />
      <DeskAboutContainer />
      <MIIApprovedImage />
    </>
  );
}

const HomePortrait = () => {
  return (
    <>
      <Navigation />
      <div style={{
        marginTop: '3vh'
      }}>
        <CompanyName />
      </div>
      <Desk />
      <TadghImagePortrait />
      <DeskAboutContainer />
      <MIIApprovedImage />
    </>

  );
}

const HomeLandscape = () => {
  return (
    <>
      <CompanyName />
      <Desk />
      <TadghImageBrowser />
      <DeskAboutContainer />
      <MIIApprovedImage />
    </>
  );
}

const HomeLayout = () => {

  // const showFloatingMenu = useViewportSize().screenWidth > 800;

  return (
    <PageWithMenu
    // noMenu={showFloatingMenu}
    >
      <MobileView>
        <PortraitView>
          <HomePortrait />
        </PortraitView>
        <LandscapeView>
          <HomeLandscape />
        </LandscapeView>
      </MobileView>
      <BrowserView>
        <WideView>
          <HomeWide />
        </WideView>
        <NarrowView>
          <HomeNarrow />
        </NarrowView>
      </BrowserView>
      {/* {showFloatingMenu ? <FloatingMenu /> : null} */}
    </PageWithMenu>
  );
}

const Home = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
      <HomeLayout />
    );
  }, []);

  return (<>{clientSideLayout}</>);
}

export default Home;

// This runs at build time for the page
export async function getStaticProps() {
  console.log("Running getStaticProps at build time");

  return { props: {} };
}