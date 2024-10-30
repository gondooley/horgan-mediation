import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import menuInfo from "./menuInfo";
import MenuItem from './DropDownMenuItem';
import { useRouter } from "next/router";
import Image from "next/image";


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
          left: '0px',
          overflowY: 'scroll',
        }}>
        <div className='halant-font'
          style={{
            width: '100%',
            backgroundColor: '#efe9e4',
            top: '0px',
            left: '0px',
            color: '#1e1e1e',
            textAlign: 'center',
            paddingTop: '12px',
            paddingBottom: '12px',
            fontSize: '7vw'
          }}>
          Horgan <span style={{ color: '#a17556' }}>Mediation</span> Solutions
          <div onClick={() => remove()}
            style={{
              position: 'relative',
              width: '24px',
              height: '24px',
              float: 'right',
              margin: '12px',
              cursor: 'pointer',
            }}>
            <Image
              src='/images/icons/icon-exit.png'
              alt='exit menu icon'
              fill={true} />
          </div>
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