import bio from '../text/bio.json';
import '../styles/bio.css';
import Image from 'next/image';
import { Halant, Montserrat } from 'next/font/google'

const halantFont = Halant({ subsets: ['latin'], weight: '400' });
const montserratFont = Montserrat({ subsets: ['latin'], weight: '300' });

const Menu = () => {
  return (
    <div
      className={montserratFont.className + " dark"}
      style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        fontSize: '40px',
        lineHeight: '72px',
        textAlign: 'right',
      }}>
      Contact<br />
      <a href="./mediation">
      Mediation<br />
      </a>
      <a href="#about">
        About<br />
      </a>
    </div>
  );
}

const CompanyName = ({ dark }) => {
  return (
    <div className={halantFont.className} >
      <div style={{ fontSize: '80px', lineHeight: '96px' }}>
        <span className={dark ? 'light' : 'dark'}>Horgan</span><br />
        <span className='medium'>Mediation</span><br />
        <span className={dark ? 'light' : 'dark'}>Solutions</span><br />
      </div>
    </div>
  );
}

const BioSection1 = () => {
  return (
    <div
      id="about"
      style={{
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
      <BlankDivider height='50' />
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

const BlankDivider = ({ height }) => {
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      minWidth: '100%',
      minHeight: height + 'px',
    }} />
  );
}

const Bio = () => {
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
          transform: 'translate(-200px, 0)',
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
        <BlankDivider height='100' />
        <BioSection2 />
        <BlankDivider height='50' />
        <BioSection3 />
        <BlankDivider height='150' />
      </div>
      <Menu />
    </div>
  );
}

export default Bio;