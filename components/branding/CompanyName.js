import '../styles/index.css'

const CompanyName = ({ style, wide }) => {
  style = style ? style : {};
  if (wide) {
    style.fontSize = "6vw";
    style.width = "100%";
    style.marginLeft = "4vw";
    style.marginTop = "24px"
  }
  return (
      <div className='halant-font company-name'
      style={{ ... style }}>
        <span>Horgan</span>
        {wide ? " " : <br />}
        <span className='medium'>Mediation</span>
        {wide ? " " : <br />}
        <span>Solutions</span>
      </div>
  );
}

export default CompanyName;