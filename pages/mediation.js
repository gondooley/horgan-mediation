import { useEffect, useState } from 'react';
import { LandscapeView, PortraitView } from '@/utilities/viewportSizeHook';
import PageWithMenu from '@/components/menu/PageWithMenu';
import MIIWithNavFooter from '@/components/footer/MIIWIthNavFooter';
import Navigation from '@/components/menu/Navigation';
import text from '../text/businessAndCommercial.json'

const MainHeading = ({ headingText }) => {
  return (
    <h1 style={{
      margin: '56px 0 24px 0',
      textAlign: 'center'
    }}>
      {headingText}
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
    <div style={{ width: '100%', textAlign: 'center', marginBlock: '24px' }} >
      <Heading>
        {text.heading2}
      </Heading>
    </div>
  );
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
    <div style={{
      margin: '0 10vw 0 10vw',
    }}>
      <p style={{ marginBottom: '12px' }} >
        {text.wac02.intro}
      </p>
      <p style={{ paddingLeft: '24px' }}>
        <ul>
          {text.wac02.list.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
}

const Text3 = () => {
  return (
    <p style={{
      margin: '0 10vw 0 10vw',
    }}>
      <blockquote>
        {text.wac03.quote}
      </blockquote>
      <p style={{
        textAlign: 'right',
        marginTop: '16px'
      }} >
        - {text.wac03.credit}
      </p>
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

const WorkDisputeImage1 = () => {
  return (
    <ImageContainer>
      <img alt="silhouetted arguing" src="/images/work-dispute/work1.png" width="100%" height="auto" />
    </ImageContainer>
  );
}
const WorkDisputeImage2 = () => {
  return (
    <ImageContainer>
      <img alt="meeting disagreement" src="/images/work-dispute/work2.png" width="100%" height="auto" />
    </ImageContainer>
  );
}
const WorkDisputeImage3 = () => {
  return (
    <ImageContainer>
      <img alt="symbolic standoff" src="/images/work-dispute/work3.png" width="100%" height="auto" />
    </ImageContainer>
  );
}
const WorkDisputeImage4 = () => {
  return (
    <ImageContainer>
      <img alt="signing documents" src="/images/work-dispute/work4.png" width="100%" height="auto" />
    </ImageContainer>
  );
}

const TopSection = () => {
  return (
    <>
      <PortraitView>
        <Text1 />
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <WorkDisputeImage2 />
          <div style={{ margin: '16px 0 16px 0' }}>
            <Heading1 />
          </div>
          <Text2 />
          <WorkDisputeImage1 />
        </div>
      </PortraitView>
      <LandscapeView>
        <SideBySide
          left={<WorkDisputeImage2 />}
          right={<Text1 />} />
        <SideBySide
          left={<Text2 />}
          right={<WorkDisputeImage3 />} />
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
          <WorkDisputeImage3 />
        </div>
        <Heading2 />
        <Text4 />
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <WorkDisputeImage4 />
        </div>
      </PortraitView>
      <LandscapeView>
        <SideBySide
          left={<WorkDisputeImage1 />}
          right={<Text3 />} />
        <Heading2 />
        <SideBySide
          left={<Text4 />}
          right={<WorkDisputeImage4 />} />
      </LandscapeView>
    </>
  );
}

const MediationLayout = () => {
  return (
    <div>
      <Navigation />
      <MainHeading headingText={text.title} />
      <TopSection />
      <BottomSection />
      <MainHeading headingText={text.heading3} />
      <Text5 />
      <div style={{
        minHeight: '32px',
        width: '100%'
      }}>
        &nbsp;
      </div>
      {/* <CenteredWideCompanyName /> */}
    </div>
  );
}

const Mediation = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
      <PageWithMenu>
        <MediationLayout />
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

export default Mediation;