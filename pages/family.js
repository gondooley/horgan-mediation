import about from '../text/about.json';
import { Montserrat } from 'next/font/google'
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { LandscapeView, NarrowView, PortraitView, WideView } from '@/utilities/viewportSizeHook';
import PageWithMenu from '@/components/menu/PageWithMenu';
import MIIWithNavFooter from '@/components/footer/MIIWIthNavFooter';
import Navigation from '@/components/menu/Navigation';
import CompanyName from '@/components/branding/CompanyName';

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

const FamilyBrowserLayout = () => {
  return (
    <div
      className={montserratFont.className}
      style={{
        position: 'absolute',
        backgroundColor: '#b3e5fc',
        top: '0px',
        minWidth: '100%',
        minHeight: '1700px',
        fontSize: '16px',
        lineHeight: '28px',
      }}>
      <div style={{
        position: 'absolute',
        top: '50px',
        marginLeft: '30%',
        marginRight: '30%',
        backgroundColor: '#1e1e1e',
        color: '#efe9e4',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 0 8px #1e1e1e',
      }}>
        <Heading />
        <p>
          {about.fam1}
        </p>
      </div>
      <img
        src="/images/HMS01-373x500.png"
        alt="Person on a little stone 1"
        width={187}
        height={250}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10%',
        }}
      />
      <img
        src="/images/HMS02-372x500.png"
        alt="Person on a little stone 2"
        width={187}
        height={250}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10%',
        }}
      />
      <img
        src="/images/arrow1-200x150.png"
        alt="arrow"
        width={100}
        height={75}
        style={{
          position: 'absolute',
          top: '280px',
          left: '20%',
        }}
      />
      <img
        src="/images/arrow2-200x150.png"
        alt="arrow"
        width={100}
        height={75}
        style={{
          position: 'absolute',
          top: '280px',
          right: '20%',
        }}
      />
      <img
        src="/images/HMS03-500x500.png"
        alt="Person on island 1"
        width={250}
        height={250}
        style={{
          position: 'absolute',
          top: '300px',
          left: '25%',
        }}
      />
      <img
        src="/images/HMS04-500x500.png"
        alt="Person on island 2"
        width={250}
        height={250}
        style={{
          position: 'absolute',
          top: '300px',
          right: '25%',
        }}
      />
      <p style={{
        position: 'absolute',
        top: '550px',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#1e1e1e',
        color: '#efe9e4',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 0 8px #1e1e1e',
      }}>
        {about.fam2}
      </p>
      <img
        src="/images/HMS05-500x450.png"
        alt="People on islands"
        width={250}
        height={250}
        style={{
          position: 'absolute',
          top: '800px',
          left: '20%',
        }}
      />
      <img
        src="/images/arrow3-500x228.png"
        alt="arrow"
        width={125}
        height={57}
        style={{
          position: 'absolute',
          top: '875px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <img
        src="/images/HMS06-500x460.png"
        alt="People on island"
        width={250}
        height={230}
        style={{
          position: 'absolute',
          top: '810px',
          right: '20%',
        }}
      />
      <p style={{
        position: 'absolute',
        top: '1100px',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#1e1e1e',
        color: '#efe9e4',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 0 8px #1e1e1e',
      }}>
        {about.fam3}
      </p>
      <img
        src="/images/HMS07-500x252.png"
        alt="People on island"
        width={500}
        height={252}
        style={{
          position: 'absolute',
          top: '1400px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />

    </div>
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