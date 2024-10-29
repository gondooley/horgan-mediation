import Link from 'next/link';
import menuInfo from './menuInfo';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';


const FooterNavigation = () => {
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
            <Link href={itemInfo.item.href}>
              {itemInfo.item.text}
            </Link>
            {index < menuInfo.length - 1 && currentPath != itemInfo.item.href && menuInfo[0].item.href != currentPath ? " - ": null}
          </div>
        );
      })}
    </div>
  );
};

export default FooterNavigation;
