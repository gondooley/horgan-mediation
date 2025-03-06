import about from '../text/about.json';
import { Montserrat } from 'next/font/google'
import { useEffect, useState } from 'react';
import { LandscapeView, PortraitView } from '../utilities/viewportSizeHook';
import PageWithMenu from '@/components/menu/PageWithMenu';
import MIIWithNavFooter from '@/components/footer/MIIWIthNavFooter';
import Navigation from '@/components/menu/Navigation';

const montserratFont = Montserrat({ subsets: ['latin'], weight: '300' });

const Heading = () => {
  return (
    <h1 style={{
      margin: '56px 0 24px 0',
      textAlign: 'center'
    }}>
      Family Mediation
    </h1>
  );
}

const FamText0 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      {about.fam0}
    </p>
  );
}

const FamText1 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      {about.fam1}
    </p>
  );
}

const FamText2 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      {about.fam2}
    </p>
  );
}

const FamText3 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      {about.fam3}
    </p>
  );
}

const FamText4 = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <p style={{
        margin: '0 10vw 0 10vw',
        maxWidth: '650px',
      }}>
        {about.fam4}
      </p>
    </div>
  );
}

const ImageContainer = ({ children }) => {
  return (
    <div style={{
      width: '250px',
      margin: '24px'
    }}>
      {children}
    </div>
  );
}

const CoupleArguingImage = () => {
  return (
    <ImageContainer>
      <img alt="couple arguing" src="/images/family-stock/argue.png" width="100%" height="auto" />
    </ImageContainer>
  );
}
const WomanComfortingChildImage = () => {
  return (
    <ImageContainer>
      <img alt="woman comforting child" src="/images/family-stock/comfort.jpg" width="100%" height="auto" />
    </ImageContainer>
  );
}
const InFrontOfChildrenImage = () => {
  return (
    <ImageContainer>
      <img alt="couple arguing in front of children" src="/images/family-stock/four-family.png" width="100%" height="auto" />
    </ImageContainer>
  );
}
const TwoUpsetWomenImage = () => {
  return (
    <ImageContainer>
      <img alt="two upset women" src="/images/family-stock/upset.png" width="100%" height="auto" />
    </ImageContainer>
  );
}

const TopSection = () => {
  return (
    <>
      <PortraitView>
        <FamText0 />
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <InFrontOfChildrenImage />
        </div>
        <FamText1 />
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <CoupleArguingImage />
        </div>
      </PortraitView>
      <LandscapeView>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <div style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <InFrontOfChildrenImage />
          </div>
          <div style={{
            flex: '1',
          }}>
            <p>{about.fam0}</p>
            <p>&nbsp;</p>
            <p>{about.fam1}</p>
          </div>
          <div style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <WomanComfortingChildImage />
          </div>
        </div>
      </LandscapeView>
    </>
  );
}

const SideBySide = ({ left, right }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: '0 10vw 0 10vw'
    }}>
      <div>
        {left}
      </div>
      <div>
        {right}
      </div>
    </div>
  );
}

const BottomSection = () => {
  return (
    <>
      <PortraitView>
        <FamText2 />
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <TwoUpsetWomenImage />
        </div>
        <FamText3 />
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <WomanComfortingChildImage />
        </div>
      </PortraitView>
      <LandscapeView>
        <SideBySide
          left={<CoupleArguingImage />}
          right={about.fam2} />
        <SideBySide
          left={about.fam3}
          right={<TwoUpsetWomenImage />} />
      </LandscapeView>
    </>
  );
}

const FamilyLayout = () => {
  return (
    <div>
      <Navigation />
      <Heading />
      <TopSection />
      <BottomSection />
      <FamText4 />
      <div style={{
        minHeight: '32px',
        width: '100%'
      }}>
        &nbsp;
      </div>
    </div>
  );
}

const Family = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
      <PageWithMenu>
        <FamilyLayout />
        <MIIWithNavFooter />
        <div style={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow'
        }}>
        </div>
      </PageWithMenu>
    );
  }, []);

  return (<>{clientSideLayout}</>);
}

export default Family;