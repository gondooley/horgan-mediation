import CompanyName from '@/components/CompanyName';
import bio from '../text/bio.json'

const BioSection1 = () => {
  return (
    <div className='flexbox-full-width' id="about">
      <div className='flex-normal padding-normal'>
        {bio.bio1}
      </div>
      <div className='flex-normal background-image-bridge'/>
    </div>
  );
}

const BioSection2 = () => {
  return (
    <div className='flexbox-full-width'>
      <div className='flex-normal'>
      <CompanyName />
      </div>
      <p className='flex-normal padding-normal'>
        {bio.bio2}
      </p>
      <img
        src="/images/mii-approved-2024-outer-alpha.png"
        alt="MII approved mediator 2024"
        className='MII-approval margin-double'
      />
    </div>
  );
}

const BioSection3 = () => {
  return (
    <div>
      <p className='padding-normal margin-double'>
        {bio.bio3}
      </p>
      <BlankDivider />
      <img
        src="/images/med2-1920x960.png"
        alt="shaking hands"
        className='margin-double'
      />
    </div>
  );
}

const BlankDivider = () => {
  return (
    <div className='blank-divider'/>
  );
}

const BioSections = () => {
  return (
    <div className='position-bio'>
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
  );
}

const Bio = () => {
  return (
    <div className='montserrat-font'>
      <BioSections />
    </div>
  );
}

export default Bio;