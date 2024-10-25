import React, { useEffect, useState } from 'react';
import CompanyName from '@/components/CompanyName';
import bio from '../text/bio.json'
import { PortraitView, LandscapeView, WideView, NarrowView } from '@/components/ViewportSizeHook';
import '../styles/index.css'
import { BrowserView, MobileView } from 'react-device-detect';
import MIIApprovedImage from '@/components/MIIApproved';

const Desk = () => {
  return (
    <div className='desk' />
  );
}

const TadghImage = () => {
  return (
    <img
      src="/images/Tadgh.png"
      alt="Tadgh Horgan"
      className='tadgh'
    />
  );
}

const DeskBioContainer = () => {
  return (
    <p className='desk-bio'>
      {bio.bio0}
    </p>
  );
}

const HomeBrowserWideView = () => {
  return (
    <div className='home-page'>
      <div className='float'>
        <CompanyName />
      </div>
      <Desk />
      <div className='on-desk'>
        <MIIApprovedImage />
      </div>
      <TadghImage />
      <DeskBioContainer />
    </div>
  );
}

const HomeBrowserNarrowView = () => {
  return (
    <>
      <CompanyName />
      <Desk />
      <TadghImage />
      <DeskBioContainer />
      <MIIApprovedImage />
    </>
  );
}

const HomeMobilePortraitView = () => {
  return (
    <>
      <CompanyName />
      <Desk />
      <TadghImage />
      <DeskBioContainer />
      <MIIApprovedImage />
    </>

  );
}

const Home = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
      <>
        <MobileView>
          <PortraitView>
            <HomeMobilePortraitView />
          </PortraitView>
          <LandscapeView>
            Mobile landscape view
          </LandscapeView>
        </MobileView>
        <BrowserView>
          <WideView>
            <HomeBrowserWideView />
          </WideView>
          <NarrowView>
            <HomeBrowserNarrowView />
          </NarrowView>
        </BrowserView>
      </>
    );
  }, []);

  return (<>{clientSideLayout}</>);
}

export default Home;