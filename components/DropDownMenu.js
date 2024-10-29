import { gsap } from "gsap/dist/gsap";
import { useLayoutEffect, useRef } from "react";
import menuInfo from "./menuInfo";
import MenuItem from './DropDownMenuItem';
import { useViewportSize } from "./ViewportSizeHook";
import { useRouter } from "next/router";


const Menu = ({ setMenuVisible }) => {

  const menuRef = useRef();
  const dimmerRef = useRef();
  const currentPath = useRouter().pathname;

  useLayoutEffect(() => {
    gsap.fromTo(
      menuRef.current, {
      scaleY: '0',
      transformOrigin: 'top',
    },
      {
        scaleY: '1',
        duration: 0.5,
      });
      gsap.fromTo(
        dimmerRef.current, {
        opacity: '0',
      },
        {
          opacity: '0.5',
          duration: 0.5,
        });
      
    // eslint-disable-next-line
  }, []);

  function remove() {
    gsap.to(
      menuRef.current, {
        scaleY: '0',
        duration: 0.5,
        transformOrigin: 'top',
      }
    );
    gsap.to(
      dimmerRef.current, {
        opacity: '0',
        duration: 0.5,
      }
    ).then(() => setMenuVisible(false));
  }

  return (
    <>
      <div
        className='wholeScreenDimmer'
        ref={dimmerRef}
        onClick={() => remove()}
        style={{
          minWidth: '100%',
          minHeight: '100%',
          position: 'fixed',
          top: '0px',
          left: '0px',
          backgroundColor: '#101010',
          fontColor: 'white',
        }} />
      <div className='menu'
        ref={menuRef}
        style={{
          position: 'fixed',
          width: '100%',
          top: '0px',
          left: '0px'
        }}>
        <div
          style={{
            width: '100%',
            backgroundColor: '#101010',
            top: '0px',
            left: '0px',
          }}>
          <img src='/images/logo/logo192.png' width='70px' alt='' style={{
            margin: '10px',
            top: '10px',
            marginLeft: useViewportSize().screenWidth / 2,
            transform: 'translate(-50%)',
          }} />
          <img src='/images/icons/icon-exit.png'
            alt=''
            onClick={() => remove()}
            style={{
            width: '24px',
            height: '24px',
            float: 'right',
            margin: '20px'
          }} />
        </div>
        <div
          style={{
            top: '100px',
            width: '100%',
            backgroundColor: '#101010',
          }}>
          {menuInfo
            ? menuInfo.map((itemInfo, index) => {
              if (currentPath === itemInfo.item.href) return null;
              return (
                <MenuItem key={index}
                  text={itemInfo.item.text}
                  href={itemInfo.item.href} />
              );
            })
            : null}
        </div>
      </div>
    </>
  );
}

export default Menu;