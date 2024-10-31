const { default: MIIApprovedImage } = require("../branding/MIIApproved");
const { default: Navigation } = require("../menu/Navigation");

const MIIWithNavFooter = ({ style }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '24px',
      ...style
    }}>
      <MIIApprovedImage style={{
        height: '150px',
        width: '150px',
      }} />
      <Navigation />
    </div>
  );
}

export default MIIWithNavFooter;