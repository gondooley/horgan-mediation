const { default: CompanyName } = require("./CompanyName");

const CompanyDivider = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div>
        <CompanyName wide divider style={{
          fontSize: '10px',
          lineHeight: '10px',
          margin: '28px 0 28px 0',
        }} />
      </div>
    </div>
  );
}

export default CompanyDivider;