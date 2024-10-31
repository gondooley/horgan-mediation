import Link from 'next/link';
import '../styles/mediation.css';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { LandscapeView, NarrowView, PortraitView, WideView } from '@/utilities/viewportSizeHook';
import MIIApprovedImage from '@/components/branding/MIIApproved';
import PageWithMenu from '@/components/menu/PageWithMenu';
import Navigation from '@/components/menu/Navigation';
import {
  AgreementHeadingIcon, ConfidentialityProcessIcon,
  ImpartialProcessIcon, MediationHeadingIcon,
  ProcessHeadingIcon, SelfDeterminationProcessIcon,
  VoluntaryProcessIcon
} from '@/components/mediation/mediationIcons';
import CompanyName from '@/components/branding/CompanyName';
import CompanyDivider from '@/components/branding/CompanyDivider';

const ProcessElement = ({ image, heading, text, isNarrow }) => {

  const Heading = () => {
    return (<h3 className='halant-font'>{heading}</h3>);
  }

  const Text = () => { return (<p>{text}</p>); }

  const FloatingIcon = () => {
    return (
      <div style={{
        float: 'left',
        margin: '12px',
        width: '50px',
        height: '50px'
      }}>
        {image}
      </div>
    );
  }

  const BiggerIcon = () => {
    return (
      <div className='bigger-icon'
        style={{
          width: '100px',
          height: '100px',
          minWidth: '100px',
          minHeight: '100px',
          margin: '24px',
        }}>
        {image}
      </div>
    );
  }

  return (
    <div>
      <CompanyDivider />
      {isNarrow ? <Heading /> : null}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {isNarrow ? null : <BiggerIcon />}
        <div>
          {isNarrow ? <FloatingIcon /> : <Heading />}
          <Text />
        </div>
      </div>
    </div>
  );
}

const HeadingWithSymbol = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
      {children}
    </div>
  );
}

const SteppingStones = () => {
  return (
    <img src='/images/stones-1600x200-alpha.png' alt='stepping stones' style={{
      width: '100%',
      height: 'auto'
    }} />
  );
}

const CenteredWideCompanyName = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      margin: '48px 0 32px 0',
    }}>
      <div>
        <CompanyName wide />
      </div>
    </div>
  );
}

const MediationLayout = ({ isNarrow }) => {
  return (
    <div style={{
      backgroundColor: '#efe9e4',
      color: '#1e1e1e'
    }}>
      <SteppingStones />
      <CenteredWideCompanyName />
      <div
        style={{
          fontSize: '16px',
          lineHeight: '28px',
          marginLeft: '15%',
          marginRight: '15%'
        }}>
        <HeadingWithSymbol>
          <MediationHeadingIcon />
          <h1 className='halant-font'>
            What is Mediation?
          </h1>
        </HeadingWithSymbol>
        <p>
          Mediation is a voluntary and confidential process, designed to help people resolve their conflict through facilitated communication and compromise. As a neutral party, the Mediator works with all parties involved to identify key issues, clear up any misunderstandings and explore potential solutions that meet the needs of all parties. The role of Mediator is not to make decisions for the disputing parties, but to help them develop their own.
        </p>
        <CompanyDivider />
        <p>
          Mediation facilitates both parties retaining control over the outcome, rather than leaving it to the courts to impose an expensive solution that may not meet all their needs. Engaging a professional Mediator ensures a more flexible and holistic approach to dispute resolution. It is a cost-effective alternative to litigation, saving both time and resources, while preserving important relationships between both parties. With the guidance of an experienced Mediator, parties can find solutions that work for everyone involved, keeping a focus on collaboration and respect.
        </p>
        <CompanyDivider />
        <p>
          As awareness in society increases, the benefits of Mediation as a viable solution to resolve differences is gaining momentum. Consequently,
          <Link href="https://www.irishstatutebook.ie/eli/2017/act/27/enacted/en/" target="_blank" rel="noopener noreferrer">
            the Mediation Act of 2017
          </Link>
          enshrined into Irish Law the obligation to refer some disputes to Mediation before resorting to direct litigation.
        </p>
        <CompanyDivider />
        <HeadingWithSymbol>
          <ProcessHeadingIcon />
          <h2 className='halant-font'>The Mediation Process</h2>
        </HeadingWithSymbol>
        <p>
          The parties in conflict agree to engage directly with a Mediator themselves, or one that may be recommended through their respective solicitors.  Professional Mediation services are promoted by the Mediators Institute of Ireland (MII) which oversees the code of ethics and professional conduct for Mediation in Ireland. Once contact is made with a Mediator, preliminary individual meetings are arranged to explore the issues in confidence.
        </p>
        <CompanyDivider />
        <p>
          Following these preliminary individual meetings, if both parties are happy to continue with the voluntary Mediation process, the Mediator will produce an agreement to mediate. This agreement is a document signed by all parties at the outset, outlining their obligations of respect and good faith. The following would be general principles that apply to the journey.
        </p>
        <ProcessElement
          image={<ImpartialProcessIcon />}
          heading='Impartial'
          text='The essence of building trust between parties in dispute, is that they rely on the impartiality of the Mediator as they begin some difficult conversations. A Mediator will not take sides, but work for both parties equally, to facilitate transition to a better place in their relationship.'
          isNarrow={isNarrow} />
        <ProcessElement
          image={<VoluntaryProcessIcon />}
          heading='Voluntary'
          text='Mediation is entirely a voluntary process, and all parties engage with a Mediator because there is something they want to resolve. However, if they feel they would like to pause or even stop the Mediation conversation at any point, this is entirely within their control. This encourages a trust in the process and generally leads to a more focused conversation, towards understanding each other’s perspective.'
          isNarrow={isNarrow} />
        <ProcessElement
          image={<ConfidentialityProcessIcon />}
          heading='Confidentiality'
          text='This is a key element of any mediation process. What comes into the room in confidence, stays between the parties only. The mediator will hold that confidence and not discuss it with anyone, save some legislative exceptions outlined in the agreement to Mediate. The mediation table becomes a safe space for both parties to discuss their difficulties in confidence.'
          isNarrow={isNarrow} />
        <ProcessElement
          image={<SelfDeterminationProcessIcon />}
          heading='Self Determination'
          text='The discussion and suggestions put forward by both parties, will determine the outcome. While the Mediator will guide the process, any potential solution will be mutual and belong to both disputing parties.'
          isNarrow={isNarrow} />
        <CompanyDivider />
        <HeadingWithSymbol>
          <AgreementHeadingIcon />
          <h2 className='halant-font'>Mediated Agreement</h2>
        </HeadingWithSymbol>
        <p style={{
          marginBottom: '24px',
        }}>
          Once both parties have arrived at agreement and are happy to conclude the process, the Mediator will summarise all the relevant components into a final Mediation Agreement. This will reflect the parties’ discussions and the compromises reached. Both parties are free to seek legal advice before signing the final Mediation agreement. As laid out in the Mediation Act of 2017, the default position of a signed mediated agreement, is that it becomes legally binding, unless the parties requested otherwise at the beginning of the Mediation process.
        </p>
      </div>
      <CenteredWideCompanyName />
    </div>
  );
}

const Mediation = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
      <PageWithMenu>
        <MobileView>
          <PortraitView>
            <MediationLayout isNarrow='true' />
          </PortraitView>
          <LandscapeView>
            <MediationLayout />
          </LandscapeView>
        </MobileView>
        <BrowserView>
          <WideView>
            <MediationLayout />
          </WideView>
          <NarrowView>
            <MediationLayout isNarrow='true' />
          </NarrowView>
        </BrowserView>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '5%',
          marginRight: '5%',
          marginBottom: '24px',
        }}>
          <MIIApprovedImage style={{
            height: '150px',
            width: '150px',
          }} />
          <Navigation />
        </div>
        <SteppingStones />
      </PageWithMenu>
    );
  }, []);

  return (<>{clientSideLayout}</>);
}

export default Mediation;
