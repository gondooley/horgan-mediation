import CompanyName from '@/components/branding/CompanyName';
import about from '../text/about.json'
import { LandscapeView, NarrowView, PortraitView, WideView } from '@/utilities/viewportSizeHook';
import { BrowserView, MobileView } from 'react-device-detect';
import PageWithMenu from '@/components/menu/PageWithMenu';
import Navigation from '@/components/menu/Navigation';
import MIIWithNavFooter from '@/components/footer/MIIWIthNavFooter';
import '../styles/about.css';

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
    <div className='flexbox-full-width' style={{
      alignItems: 'center'
    }}>
      <AboutText1 />
      <div>

      </div>
      <BridgeImage style={{
        minHeight: '300px',
        margin: '0 10vw 0 10vw',
      }} />
    </div>
  );
}

const AboutSection2 = () => {
  return (
    <div className='flexbox-full-width' style={{
      alignItems: 'center',
    }}>
      <img
        src="/images/mii-approved-2025-outer-alpha.png"
        alt="MII approved mediator 2025"
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
        minHeight: '300px',
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
      <CompanyName wide style={{
        marginLeft: '4vw',
        marginTop: '24px'
      }} />
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