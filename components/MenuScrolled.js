import Link from 'next/link';
import menuInfo from './menuInfo';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';


const MenuScrolled = forwardRef(function MenuScrolled(props, ref) {
  const currentPath = useRouter().pathname;

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        backgroundColor: '#202020',
        paddingTop: '12px',
        paddingBottom: '12px',
        // hidden until scroll up
        transform: 'translate(0, -100%)',
        justifyContent: 'space-around',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      {menuInfo.map((itemInfo, index) => {
        if (currentPath === itemInfo.item.href) return null;
        return (
          <div key={index}>
            <Link
              href={itemInfo.item.href}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '16px',
              }}>
              {itemInfo.item.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
});

export default MenuScrolled;
