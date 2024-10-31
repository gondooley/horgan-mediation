import '../../styles/index.css'

const CompanyName = ({ wide, style, divider }) => {

  const wideStyle = {
    fontSize: '6vw',
    lineHeight: '6vw',
    width: '100%'
  };

  return (
      <div className='halant-font company-name'
      style={{ ... wideStyle, ... style }}>
        {divider ? "- ": ""}
        <span>Horgan</span>
        {wide ? " " : <br />}
        <span className='medium'>Mediation</span>
        {wide ? " " : <br />}
        <span>Solutions</span>
        {divider ? " -": ""}
      </div>
  );
}

export default CompanyName;