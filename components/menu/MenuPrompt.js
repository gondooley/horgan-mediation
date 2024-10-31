// import { useViewportSize } from "./ViewportSizeHook";


const MenuPrompt = ({ setMenuVisible }) => {
  return (
    <div className='menuPrompt'
      onClick={() => setMenuVisible(true)}
      style={{
        position: 'absolute',
        top: '5vh',
        right: '5vw',
        opacity: '75%',
        cursor: 'pointer',
      }}>
      {/* {useViewportSize().screenWidth > 600 ? */}
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
        {/* : <div className='dkkBurger'>
          <img src='/images/icons/burger.png' alt='burger icon'
            style={{ width: '40px', height: '40px' }} />
        </div>
      } */}
    </div>
  );
}

export default MenuPrompt;