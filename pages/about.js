import CompanyName from '@/components/CompanyName';
import about from '../text/about.json'
import { LandscapeView, NarrowView, PortraitView, WideView } from '@/components/ViewportSizeHook';
import { BrowserView, MobileView } from 'react-device-detect';
import PageWithMenu from '@/components/PageWithMenu';
import Navigation from '@/components/Navigation';

const AboutSection1 = () => {
  return (
    <div className='flexbox-full-width' id="about">
      <div className='flex-normal padding-normal'>
        {about.about1}
      </div>
      <div className='flex-normal background-image-bridge' />
    </div>
  );
}

const AboutSection2 = () => {
  return (
    <div className='flexbox-full-width'>
      <p className='flex-normal padding-normal'>
        {about.about2}
      </p>
      <img
        src="/images/mii-approved-2024-outer-alpha.png"
        alt="MII approved mediator 2024"
        className='MII-approval margin-double'
      />
    </div>
  );
}

const AboutSection3 = () => {
  return (
    <div>
      <p className='padding-normal margin-double'>
        {about.about3}
      </p>
      <BlankDivider />
      <img
        src="/images/med2-1920x960.png"
        alt="shaking hands"
        className='margin-double'
        width='80%'
        height='auto'
      />
    </div>
  );
}

const BlankDivider = () => {
  return (
    <div className='blank-divider'>
      &nbsp;
    </div>
  );
}

const AboutPortraitLayout = () => {
  return (
    <div
      className='flex-normal'>
      <CompanyName style={{
        textAlign: 'center',
        fontSize: '16vw',
        lineHeight: '16vw',
        paddingTop: '32px' }} />
    </div>
  );
}

const AboutWide = () => {
  return (
    <div>
      <AboutSection1 />
      <BlankDivider />
      <BlankDivider />
      <AboutSection2 />
      <BlankDivider />
      <AboutSection3 />
      <BlankDivider />
      <BlankDivider />
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
          Mobile landscape view
        </LandscapeView>
      </MobileView>
      <BrowserView>
        <WideView>
          <AboutWide />
        </WideView>
        <NarrowView>
          <AboutNarrow />
        </NarrowView>
      </BrowserView>
    </PageWithMenu>
  );
}

export default AboutPage;