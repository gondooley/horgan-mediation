import '../styles/index.css'

const CompanyName = ({ style }) => {
  return (
      <div className='halant-font company-name'
      style={{ ... style }}>
        <span>Horgan</span><br />
        <span className='medium'>Mediation</span><br />
        <span>Solutions</span><br />
      </div>
  );
}

export default CompanyName;