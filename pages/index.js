import React, { useEffect, useState } from 'react';
import CompanyName from '@/components/branding/CompanyName';
import about from '../text/about.json'
import { PortraitView, LandscapeView, WideView, NarrowView, useViewportSize } from '@/utilities/viewportSizeHook';
import '../styles/index.css'
import { BrowserView, MobileView } from 'react-device-detect';
import MIIApprovedImage from '@/components/branding/MIIApproved';
import PageWithMenu from '@/components/menu/PageWithMenu';
import Navigation from '@/components/menu/Navigation';

const Desk = ({ style, textContainerWidth }) => {
  return (
    <div className='desk' style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
      paddingBottom: '16px',
      ...style
    }}>
      <DeskAboutContainer style={{
        maxWidth: textContainerWidth,
      }}/>
    </div>
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

const TadghImage = ({ style }) => {
  return (
    <img
      src="/images/Tadgh.png"
      alt="Tadgh Horgan"
      style={{
        width: '100%',
        height: '100%',
        ...style
      }}
    />
  )
}

const DeskAboutContainer = ({ style }) => {
  return (
    <p className='desk-about light' style={{
      ...style
    }}>
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
      <Navigation />
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


const HomePortrait = () => {
  return (
    <div className='home-page'>
      <Navigation />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          marginTop: '2vh',
          textAlign: 'center'
        }}>
          <CompanyName style={{
            fontSize: '48px',
            lineHeight: '64px'
          }} />
        </div>
      </div>
      <Desk />
      <TadghImagePortrait />
      <div style={{
        position: 'absolute',
        top: '35vh',
        left: '5vw',
        width: '180px',
        height: '180px',
      }}>
        <MIIApprovedImage />
      </div>
    </div>

  );
}

const HomeLandscape = () => {
  return (
    <div style={{
      height: '100%',
      overflowY: 'hidden',
    }}>
      <Navigation />
      <CompanyName style={{
        position: 'absolute',
        left: '5%',
        top: '5%',
        fontSize: '16vh',
        lineHeight: '18vh',
        
      }}/>
      <Desk 
      textContainerWidth='50%'
      style={{
        minHeight: '30%',
      }}/>
      <div style={{
        position: 'absolute',
        height: "70vh",
        width: "auto",
        top: "10%",
        left: "50vw"
      }}>
        <TadghImage />
      </div>
      <div style={{
        position: 'absolute',
        bottom: '5vh',
        right: '5vh',
        width: '50vh',
        height: '50vh',
      }}>
        <MIIApprovedImage />
      </div>
    </div>
  );
}

const HomeLayout = () => {

  return (
    <PageWithMenu>
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
          <HomePortrait />
        </NarrowView>
      </BrowserView>
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
  // console.log("Running getStaticProps at build time");

  return { props: {} };
}