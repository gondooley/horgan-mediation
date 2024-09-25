import bio from '../text/bio.json';
import '../styles/bio.css';
import Image from 'next/image';
import { Halant, Montserrat } from 'next/font/google'

const halantFont = Halant({ subsets: ['latin'], weight: '400' });
const montserratFont = Montserrat({ subsets: ['latin'], weight: '300' });

const CompanyName = ({ dark }) => {

  return (
    <div className={halantFont.className} >
      <div style={{ fontSize: '80px', lineHeight: '96px' }}>
        <span className='company-name-outer' style={dark ? { color: '#efe9e4' } : {}}>Horgan</span><br />
        <span className='company-name-inner'>Mediation</span><br />
        <span className='company-name-outer' style={dark ? { color: '#efe9e4' } : {}}>Solutions</span><br />
      </div>
    </div>
  );
}

const BioSection1 = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%'
    }}>
      <div
        style={{
          flex: 1,
          overflow: 'hidden',
          backgroundColor: '#1e1e1e',
          color: '#efe9e4',
          padding: '24px',
        }}
      >
        {bio.bio1}
      </div>
      <div style={{
        position: 'relative',
        flex: 1,
        overflow: 'hidden'
      }}>
        <img
          src="/images/med0-800x530.png"
          alt="mediation symbol"
          style={{
            clipPath: 'inset(0 2px 2px 2px)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    </div>
  );
}

const BioSection2 = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
      backgroundColor: '#1e1e1e',
      alignItems: 'center',
    }}>
      <div style={{
        flex: 1,
        overflow: 'hidden'
      }}>
        <img
          src="/images/med1-500x460.png"
          alt="mediation symbol 2"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <div style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#1e1e1e',
        textAlign: 'center',
      }}>
        <CompanyName dark={true} />
      </div>
      <p style={{
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#1e1e1e',
        color: '#efe9e4',
        padding: '24px',
      }}>
        {bio.bio2}
      </p>
    </div>
  );
}

const BioSection3 = () => {
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
    }}>
      <p style={{
        marginLeft: '10%',
        marginRight: '10%',
        color: '#efe9e4',
        padding: '24px',
        flex: 1,
        color: '#efe9e4',
        padding: '24px',
      }}>
        {bio.bio3}
      </p>
      <BlankDivider />
      <img
        src="/images/med2-1920x960.png"
        alt="shaking hands"
        style={{
          marginLeft: '20%',
          marginRight: '20%',
          width: '60%',
          height: 'auto',
        }}
      />
    </div>
  );
}

const BlankDivider = () => {
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      minWidth: '100%',
      minHeight: '50px',
    }} />
  );
}

const Bio = () => {
  console.log(JSON.stringify(bio));
  return (
    <div className={montserratFont.className}
      style={{
        fontSize: '16px',
        lineHeight: '28px',
        backgroundColor: '#1e1e1e',

      }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%'
      }}>
        <CompanyName />
      </div>
      <div style={{
        position: 'absolute',
        backgroundColor: '#1e1e1e',
        top: '590px',
        minWidth: '100%',
        minHeight: '200px',
      }} />
      <Image
        src="/images/Tadgh.png"
        alt="Tadgh Horgan"
        width={600}
        height={600}
        style={{
          position: 'absolute',
          top: '100px',
          left: '50%',
          transform: 'translate(-300px, 0)',
        }}
      />
      <p style={{
        position: 'absolute',
        top: '600px',
        marginLeft: '60%',
        color: '#efe9e4',
        marginRight: '10%',
      }}>
        {bio.bio0}
      </p>
      <div style={{
        position: 'absolute',
        backgroundColor: '#1e1e1e',
        top: '790px',
        minWidth: '100%'
      }}>
        <BioSection1 />
        <BlankDivider />
        <BlankDivider />
        <BioSection2 />
        <BlankDivider />
        <BioSection3 />
        <BlankDivider />
        <BlankDivider />
        <BlankDivider />
      </div>
    </div>
  );
}

export default Bio;