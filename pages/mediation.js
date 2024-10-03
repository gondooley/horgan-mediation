import { Halant, Montserrat } from 'next/font/google'

const halantFont = Halant({ subsets: ['latin'], weight: '400' });
const montserratFont = Montserrat({ subsets: ['latin'], weight: '300' });

const symbolStyle = {
  width: '32px',
  height: '32px',
  marginRight: '32px',
}

const MediationImage = () => {
  return (
    <img alt='mediation' src='/images/process0a-mediation-400x400.png' style={{
      width: '64px',
      height: '64px',
      marginRight: '40px'
    }} />
  );
}

const ProcessImage = () => {
  return (
    <img alt='process' src='/images/process0b-process-400x400.png' style={symbolStyle} />
  );
}

const AgreementImage = () => {
  return (
    <img alt='agreement' src='/images/process0c-agreement-400x400.png' style={symbolStyle} />
  );
}

const ProcessElementImage = ({ alt, src }) => {
  return (
    <img alt={alt} src={src} width='100px' height='100px' />
  );
}

const ImpartialImage = () => {
  return (
    <ProcessElementImage alt='impartial' src='/images/process1-impartial-400x400.png' />
  );
}

const VoluntaryImage = () => {
  return (
    <ProcessElementImage alt='voluntary' src='/images/process2-voluntary-400x400.png' />
  );
}

const ConfidentialityImage = () => {
  return (
    <ProcessElementImage alt='confidentiality' src='/images/process3-confidentiality-400x400.png' />
  );
}

const SelfDeterminationImage = () => {
  return (
    <ProcessElementImage alt='self-determination' src='/images/process4-self-determination-400x400.png' />
  );
}

const ProcessElement = ({ image, children }) => {
  console.log('image', image);
  console.log('children', children);
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    }}>
      <div style={{
        margin: '24px'
      }}>
        {image}
      </div>
      <div style={{
        margin: '24px'
      }}>
        {children}
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
      marginTop: '48px',
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

const Mediation = () => {
  return (
    <div style={{
      backgroundColor: '#efe9e4',
      color: '#1e1e1e'
    }}>
    <SteppingStones />
    <div className={montserratFont.className}
      style={{
        fontSize: '16px',
        lineHeight: '28px',
        marginLeft: '20%',
        marginRight: '20%'
      }}>
      <HeadingWithSymbol>
        <MediationImage />
        <h1 className={halantFont.className}>
          What is Mediation?
        </h1>
      </HeadingWithSymbol>
      <p>
        Mediation is a voluntary and confidential process, designed to help people resolve their conflict through facilitated communication and compromise. As a neutral party, the Mediator works with all parties involved to identify key issues, clear up any misunderstandings and explore potential solutions that meet the needs of all parties. The role of Mediator is not to make decisions for the disputing parties, but to help them develop their own. Mediation facilitates both parties retaining control over the outcome, rather than leaving it to the courts to impose an expensive solution that may not meet all their needs.
      </p>
      <p style={{
        marginTop: '64px'
      }}>
        Engaging a professional Mediator ensures a more flexible and holistic approach to dispute resolution. It is a cost-effective alternative to litigation, saving both time and resources, while preserving important relationships between both parties. With the guidance of an experienced Mediator, parties can find solutions that work for everyone involved, keeping a focus on collaboration and respect. As awareness in society increases, the benefits of Mediation as a viable solution to resolve differences is gaining momentum. Consequently, the Mediation Act of 2017 enshrined into Irish Law the obligation to refer some disputes to Mediation before resorting to direct litigation. (Insert Link to Act).
      </p>
      <HeadingWithSymbol>
        <ProcessImage />
        <h2 className={halantFont.className}>The Mediation Process</h2>
      </HeadingWithSymbol>
      <p>
        The parties in conflict agree to engage directly with a Mediator themselves, or one that may be recommended through their respective solicitors.  Professional Mediation services are promoted by the Mediators Institute of Ireland (MII) which oversees the code of ethics and professional conduct for Mediation in Ireland. Once contact is made with a Mediator, preliminary individual meetings are arranged to explore the issues in confidence. Following these preliminary individual meetings, if both parties are happy to continue with the voluntary Mediation process, the Mediator will produce an agreement to mediate. This agreement is a document signed by all parties at the outset, outlining their obligations of respect and good faith. The following would be general principles that apply to the journey.
      </p>
      <ProcessElement image={<ImpartialImage />}>
        <h3 className={halantFont.className}>Impartial</h3>
        <p>
          The essence of building trust between parties in dispute, is that they rely on the impartiality of the Mediator as they begin some difficult conversations. A Mediator will not take sides, but work for both parties equally, to facilitate transition to a better place in their relationship.
        </p>
      </ProcessElement>
      <ProcessElement image={<VoluntaryImage />}>
        <h3 className={halantFont.className}>Voluntary</h3>
        <p>
          Mediation is entirely a voluntary process, and all parties engage with a Mediator because there is something they want to resolve. However, if they feel they would like to pause or even stop the Mediation conversation at any point, this is entirely within their control. This encourages a trust in the process and generally leads to a more focused conversation, towards understanding each other’s perspective.
        </p>
      </ProcessElement>
      <ProcessElement image={<ConfidentialityImage />}>
        <h3 className={halantFont.className}>Confidentiality</h3>
        <p>
          This is a key element of any mediation process. What comes into the room in confidence, stays between the parties only. The mediator will hold that confidence and not discuss it with anyone, save some legislative exceptions outlined in the agreement to Mediate. The mediation table becomes a safe space for both parties to discuss their difficulties in confidence.
        </p>
      </ProcessElement>
      <ProcessElement image={<SelfDeterminationImage />}>
        <h3 className={halantFont.className}>Self Determination</h3>
        <p>
          The discussion and suggestions put forward by both parties, will determine the outcome. While the Mediator will guide the process, any potential solution will be mutual and belong to both disputing parties.
        </p>
      </ProcessElement>
      <HeadingWithSymbol>
        <AgreementImage />
      <h2 className={halantFont.className}>Mediated Agreement</h2>
      </HeadingWithSymbol>
      <p style={{
        marginBottom: '24px',
      }}>
        Once both parties have arrived at agreement and are happy to conclude the process, the Mediator will summarise all the relevant components into a final Mediation Agreement. This will reflect the parties’ discussions and the compromises reached. Both parties are free to seek legal advice before signing the final Mediation agreement. As laid out in the Mediation Act of 2017, the default position of a signed mediated agreement, is that it becomes legally binding, unless the parties requested otherwise at the beginning of the Mediation process.
      </p>
    </div>
    <SteppingStones />
    </div>
  );
}

export default Mediation;
