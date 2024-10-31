import CompanyName from '@/components/CompanyName';
import about from '../text/about.json'
import { LandscapeView, NarrowView, PortraitView, WideView } from '@/components/ViewportSizeHook';
import { BrowserView, MobileView } from 'react-device-detect';
import PageWithMenu from '@/components/PageWithMenu';
import Navigation from '@/components/Navigation';
import MIIWithNavFooter from '@/components/MIIWIthNavFooter';

const AboutText1 = () => {
  return (
    <div className='flex-normal padding-normal'>
      {about.about1}
    </div>
  );
}
const AboutText2 = () => {
  return (
    <p className='flex-normal padding-normal'>
      {about.about2}
    </p>
  );
}
const AboutText3 = () => {
  return (
    <p className='padding-normal'>
      {about.about3}
    </p>
  );
}

const BridgeImage = ({ style }) => {
  return (
    <div className='flex-normal background-image-bridge' style={{
      ...style
    }} />
  );
}

const ShakingHandsImage = ({ style }) => {
  return (
    <img
      src="/images/med2-1920x960.png"
      alt="shaking hands"
      className='margin-double'
      width='100%'
      height='100%'
      style={{
        ...style
      }}
    />
  );
}

const AboutSection1 = () => {
  return (
    <div className='flexbox-full-width' id="about">
      <AboutText1 />
      <BridgeImage />
    </div>
  );
}

const AboutSection2 = () => {
  return (
    <div className='flexbox-full-width' style={{
      alignItems: 'center',
    }}>
      <img
        src="/images/mii-approved-2024-outer-alpha.png"
        alt="MII approved mediator 2024"
        className='MII-approval'
        style={{
          height: '50vh',
          width: '50vh',
        }}
      />
      <AboutText2 />

    </div>
  );
}

const AboutSection3 = () => {
  return (
    <div className='flexbox-full-width' style={{
      alignItems: 'center'
    }}>
      <AboutText3 />
      <img
        src="/images/med2-1920x960.png"
        alt="shaking hands"
        width='40%'
        height='auto'
        style={{
          margin: "0 5vw 0 5vw"
        }}
      />
    </div>
  );
}

const BlankDivider = ({ minHeight }) => {
  return (
    <div className='blank-divider' style={{
      minHeight: minHeight
    }}>
      &nbsp;
    </div>
  );
}

const AboutPortraitLayout = () => {
  return (
    <div>
      <Navigation />
      <CompanyName style={{
        textAlign: 'center',
        fontSize: '16vw',
        lineHeight: '16vw',
        paddingTop: '32px'
      }} />
      <AboutText1 />

      <BridgeImage style={{
        minHeight: '140px',
        margin: '0 10vw 0 10vw',
      }} />
      <AboutText2 />
      <div style={{
        width: '80vw',
        height: 'auto',
      }}>
        <ShakingHandsImage style={{
          margin: '0 10vw 0 10vw'
        }} />
      </div>
      <AboutText3 />
      <MIIWithNavFooter />
    </div>
  );
}

const AboutWide = () => {
  return (
    <div>
      <Navigation />
      <CompanyName wide={true} />
      <BlankDivider />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <BlankDivider />
      <Navigation />
      <BlankDivider />
    </div>
  );
}

const AboutNarrow = () => {
  return (
    <>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />

      <BlankDivider />
      <BlankDivider />
      <BlankDivider />
      <Navigation />
      <BlankDivider />
      <BlankDivider />
    </>
  );
}

const AboutPage = () => {
  return (
    <PageWithMenu>
      <MobileView>
        <PortraitView>
          <AboutPortraitLayout />
        </PortraitView>
        <LandscapeView>
          <AboutWide />
        </LandscapeView>
      </MobileView>
      <BrowserView>
        <WideView>
          <AboutWide />
        </WideView>
        <NarrowView>
        <AboutPortraitLayout />
        </NarrowView>
      </BrowserView>
    </PageWithMenu>
  );
}

export default AboutPage;