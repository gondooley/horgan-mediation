import bio from '../text/bio.json';
import '../styles/bio.css';
import Image from 'next/image';

const Bio = () => {
  console.log(JSON.stringify(bio));
  return (
    <>
      <p style={{ marginRight: '50%'}}>
        {bio.bio0}
      </p>
      <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
      <Image
        src="/images/Tadgh.png"
        alt="Tadgh Horgan"
        width={600} // Set the width of the image
        height={600} // Set the height of the image
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      />
    </div>
  );
    </>
  );
}

export default Bio;