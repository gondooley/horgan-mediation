import { Montserrat } from 'next/font/google'
import { useEffect, useState } from 'react';
import { LandscapeView, NarrowView, PortraitView, WideView } from '@/components/ViewportSizeHook';
import PageWithMenu from '@/components/PageWithMenu';
import MIIWithNavFooter from '@/components/MIIWIthNavFooter';
import Navigation from '@/components/Navigation';
import text from '../text/workplaceAndCommercial.json'

const MainHeading = () => {
  return (
    <h1 style={{
      margin: '56px 0 24px 0',
      textAlign: 'center'
    }}>
      {text.title}
    </h1>
  );
}

const Heading = ({ children }) => {
  return (
    <h2>{children}</h2>
  );
}

const Heading1 = () => {
  return (
    <Heading>
      {text.heading1}
    </Heading>
  );
}

const Heading2 = () => {
  return (
    <Heading>
      {text.heading2}
    </Heading>
  );
}

const Heading3 = () => {
  return (
    <Heading>
      {text.heading3}
    </Heading>
  )
}

const Text1 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      {text.wac01}
    </p>
  );
}

const Text2 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      {text.wac02.intro}
      <ul>
        {text.wac02.list.map((item, index) => {
          return (
            <li>
              {item}
            </li>
          );
        })}
      </ul>
    </p>
  );
}

const Text3 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      {text.wac03.quote}<br />
      - {text.wac03.credit}
    </p>
  );
}

const Text4 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      {text.wac04}
    </p>
  );
}

const Text5 = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <p style={{
        margin: '0 10vw 0 10vw',
        maxWidth: '650px',
      }}>
        {text.wac05}
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
        <Text1 />
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <InFrontOfChildrenImage />
        </div>
        <Heading1 />
        <Text2 />
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
            <Text1 />
            <Text2 />
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
        <Text3 />
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <TwoUpsetWomenImage />
        </div>
        <Text4 />
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
          right={<Text3 />} />
        <SideBySide
          left={<Text4 />}
          right={<TwoUpsetWomenImage />} />
      </LandscapeView>
    </>
  );
}

const FamilyLayout = () => {
  return (
    <div>
      <Navigation />
      <MainHeading />
      <TopSection />
      <BottomSection />
      <Text5 />
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