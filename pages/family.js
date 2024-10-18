import Image from 'next/image';
import bio from '../text/bio.json';
import { Montserrat } from 'next/font/google'

const montserratFont = Montserrat({ subsets: ['latin'], weight: '300' });

const Family = () => {
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
        <h1 style={{
          marginTop: '0px',
          textAlign: 'center'
        }}>Family Mediation</h1>
        <p>
          {bio.fam1}
        </p>
      </div>
      <Image
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
      <Image
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
      <Image
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
      <Image
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
      <Image
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
      <Image
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
        {bio.fam2}
      </p>
      <Image
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
      <Image
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
      <Image
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
        {bio.fam3}
      </p>
      <Image
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

export default Family;