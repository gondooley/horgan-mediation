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
            <Link href={itemInfo.item.href}>
              {itemInfo.item.text}
            </Link>
            {index < menuInfo.length - 1 && currentPath != itemInfo.item.href ? " - ": null}
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
