const MenuPrompt = ({ setMenuVisible }) => {
  return (
    <div className='menuPrompt'
      onClick={() => setMenuVisible(true)}
      style={{
        position: 'absolute',
        top: '7vh',
        right: '5vw',
        // float: 'right',
        opacity: '75%',
        cursor: 'pointer',
      }}>
      <div className='menuWord'
          style={{
            fontSize: '5vw',
            color: '#1e1e1e',
            padding: '4px 8px 4px 8px',
            backgroundColor: '#efe9e4cc',
            border: '2px solid #1e1e1e'
          }}>
          MENU
        </div>
    </div>
  );
}

export default MenuPrompt;