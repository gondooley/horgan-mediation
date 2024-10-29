import React, { useEffect, useState } from 'react';
import CompanyName from '@/components/CompanyName';
import bio from '../text/bio.json'
import { PortraitView, LandscapeView, WideView, NarrowView } from '@/components/ViewportSizeHook';
import '../styles/index.css'
import { BrowserView, MobileView } from 'react-device-detect';
import MIIApprovedImage from '@/components/MIIApproved';
import PageWithMenu from '@/components/PageWithMenu';

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

const DeskBioContainer = () => {
  return (
    <p className='desk-bio'>
      {bio.bio0}
    </p>
  );
}

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
      <DeskBioContainer />
    </div>
  );
}

const HomeNarrow = () => {
  return (
    <>
      <CompanyName />
      <Desk />
      <TadghImageBrowser />
      <DeskBioContainer />
      <MIIApprovedImage />
    </>
  );
}

const HomePortrait = () => {
  return (
    <>
      <CompanyName />
      <Desk />
      <TadghImagePortrait />
      <DeskBioContainer />
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
      <DeskBioContainer />
      <MIIApprovedImage />
    </>
  );
}

const Home = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
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
            <HomeNarrow />
          </NarrowView>
        </BrowserView>
      </PageWithMenu>
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