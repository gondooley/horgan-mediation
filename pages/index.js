import Bio from '../components/Bio';
import CompanyName from '@/components/CompanyName';
import bio from '../text/bio.json'
import useViewportSize from '@/components/ViewportSizeHook';
import '../styles/index.css'

const MIIApprovedImage = () => {
  return (
    <img
      src="/images/mii-approved-2024-outer-alpha.png"
      alt="MII approved mediator 2024"
      className='MII-approval'
    />
  );
}

const Desk = () => {
  return (
    <div className='desk'/>
  );
}

const TadghImage = () => {
  return (
    <img
      src="/images/Tadgh.png"
      alt="Tadgh Horgan"
      className='tadgh'
    />
  );
}

const DeskBioContainer = () => {
  return (
    <p className='desk-bio'>
      {bio.bio0}
    </p>
  );
}

const Menu = () => {

  const {screenWidth} =  useViewportSize();

  return (
    screenWidth > 800
    ? <div className='montserrat-font dark menu-wide'>
      Contact<br />
      <a href="./mediation">
        Mediation<br />
      </a>
      <a href="#about">
        About<br />
      </a>
    </div>
    : <div className='montserrat-font dark'
    style={{
      position: 'absolute',
      top: '10%',
      right: '10%',
      fontSize: '48px',
      lineHeight: '64px',
      textAlign: 'right',
    }}>
      Menu
    </div>
  );
}

const Home = () => {
  return (
    <div className='home-page'>
      <CompanyName />
      <Desk />
      <MIIApprovedImage />
      <TadghImage />
      <DeskBioContainer />
      <Menu />
      <Bio />
    </div>
  );
}

export default Home;