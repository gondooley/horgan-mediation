import Link from 'next/link';
import menuInfo from './menuInfo';
import { useRouter } from 'next/router';
import React from 'react';


const Navigation = () => {
  const currentPath = useRouter().pathname;

  return (
    <div style={{
      textAlign: 'center',
    }}>
      {menuInfo.map((itemInfo, index) => {
        if (currentPath === itemInfo.item.href) return null;
        return (
          <div style={{
            display: 'inline',
          }} key={index}>
            <Link href={itemInfo.item.href} style={{
              minHeight: '48px',
              fontSize: '20px',
            }}>
              {itemInfo.item.text}
            </Link>
            {index < menuInfo.length - 1
              && !(currentPath === menuInfo[menuInfo.length - 1].item.href
                && index == menuInfo.length - 2)
              ? " - "
              : null}
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
