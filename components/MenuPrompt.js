import { useViewportSize } from "./ViewportSizeHook";


const MenuPrompt = ({ setMenuVisible }) => {
  return (
    <div className='menuPrompt'
      onClick={() => setMenuVisible(true)}
      style={{
        position: 'absolute',
        top: '10px',
        left: useViewportSize().screenWidth / 20,
        opacity: '75%',
        cursor: 'pointer',
      }}>
      {useViewportSize().screenWidth > 600
        ? <div className='menuWord'
          style={{
            fontSize: '25px',
            color: 'white',
            padding: '4px 8px 4px 8px',
            backgroundColor: '#000000CC',
          }}>
          MENU
        </div>
        : <div className='dkkBurger'>
          <img src='/images/icons/burger.png' alt='burger icon'
            style={{ width: '40px', height: '40px' }} />
        </div>
      }
    </div>
  );
}

export default MenuPrompt;