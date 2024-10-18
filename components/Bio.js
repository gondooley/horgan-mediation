import CompanyName from '@/components/CompanyName';
import Image from 'next/image';
import bio from '../text/bio.json'

const BioSection1 = () => {
  return (
    <div className='flexbox-full-width' id="about">
      <div className='flex-normal padding-normal'>
        {bio.bio1}
      </div>
      <div className='flex-normal' style={{
        backgroundImage: "url('/images/med0-800x530.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100%'
        }}/>
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
        <CompanyName />
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
      <Image
        src="/images/mii-approved-2024-outer-alpha.png"
        alt="MII approved mediator 2024"
        width={200}
        height={200}
        style={{
          margin: '48px',
        }}
      />
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

const BioSections = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      minWidth: '100%'
    }}>
      <BioSection1 />
      <BlankDivider height='100' />
      <BioSection2 />
      <BlankDivider height='50' />
      <BioSection3 />
      <BlankDivider height='150' />
    </div>
  );
}

const Bio = () => {
  return (
    <div className='montserrat-font'
      style={{
        fontSize: '16px',
        lineHeight: '28px',
        height: '100%',
      }}>
      <BioSections />
    </div>
  );
}

export default Bio;