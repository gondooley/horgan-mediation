import bio from '../text/bio.json';
import '../styles/bio.css';
import Image from 'next/image';
import { Halant, Montserrat } from 'next/font/google'

const halantFont = Halant({ subsets: ['latin'], weight: '400' });
const montserratFont = Montserrat({ subsets: ['latin'], weight: '300' });

const CompanyName = () => {

  return (
    <div className={halantFont.className} >
      <div style={{ fontSize: '80px', lineHeight: '96px' }}>
        <span className='company-name-outer'>Horgan</span><br />
        <span className='company-name-inner'>Mediation</span><br />
        <span className='company-name-outer'>Solutions</span><br />
      </div>
    </div>
  );
}
const Bio = () => {
  console.log(JSON.stringify(bio));
  return (
    <div className={montserratFont.className}
      style={{
        fontSize: '16px',
        lineHeight: '28px',

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
        width={600} // Set the width of the image
        height={600} // Set the height of the image
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
        top: '790px',
        minWidth: '100%',
        height: '5px',
        background: 'linear-gradient(to bottom, #1e1e1e, #b3e5fc)',
      }} />
      <div style={{
        position: 'absolute',
        backgroundColor: '#b3e5fc',
        top: '795px',
        minWidth: '100%',
        minHeight: '1700px',
      }}>
        <p style={{
          position: 'absolute',
          top: '0px',
          marginLeft: '30%',
          marginRight: '30%',
          backgroundColor: '#1e1e1e',
          color: '#efe9e4',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 0 8px #1e1e1e',
        }}>
          {bio.bio1}
        </p>
        <Image
          src="/images/HMS01-373x500.png"
          alt="Person on a little stone 1"
          width={187} // Set the width of the image
          height={250} // Set the height of the image
          style={{
            position: 'absolute',
            top: '10px',
            left: '10%',
          }}
        />
        <Image
          src="/images/HMS02-372x500.png"
          alt="Person on a little stone 2"
          width={187} // Set the width of the image
          height={250} // Set the height of the image
          style={{
            position: 'absolute',
            top: '10px',
            right: '10%',
          }}
        />
        <Image
          src="/images/arrow1-200x150.png"
          alt="arrow"
          width={100} // Set the width of the image
          height={75} // Set the height of the image
          style={{
            position: 'absolute',
            top: '280px',
            left: '20%',
          }}
        />
        <Image
          src="/images/arrow2-200x150.png"
          alt="arrow"
          width={100} // Set the width of the image
          height={75} // Set the height of the image
          style={{
            position: 'absolute',
            top: '280px',
            right: '20%',
          }}
        />
        <Image
          src="/images/HMS03-500x500.png"
          alt="Person on island 1"
          width={250} // Set the width of the image
          height={250} // Set the height of the image
          style={{
            position: 'absolute',
            top: '300px',
            left: '25%',
          }}
        />
        <Image
          src="/images/HMS04-500x500.png"
          alt="Person on island 2"
          width={250} // Set the width of the image
          height={250} // Set the height of the image
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
          {bio.bio2}
        </p>
        <Image
          src="/images/HMS05-500x450.png"
          alt="People on islands"
          width={250} // Set the width of the image
          height={250} // Set the height of the image
          style={{
            position: 'absolute',
            top: '800px',
            left: '20%',
          }}
        />
        <Image
          src="/images/arrow3-500x228.png"
          alt="arrow"
          width={125} // Set the width of the image
          height={57} // Set the height of the image
          style={{
            position: 'absolute',
            top: '875px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <Image
          src="/images/HMS06-500x460.png"
          alt="People on island"
          width={250} // Set the width of the image
          height={230} // Set the height of the image
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
          {bio.bio3}
        </p>
        <Image
          src="/images/HMS07-500x252.png"
          alt="People on island"
          width={500} // Set the width of the image
          height={252} // Set the height of the image
          style={{
            position: 'absolute',
            top: '1400px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />

      </div>
    </div>
  );
}

export default Bio;