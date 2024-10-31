import { useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";


const MenuItem = ({ href, text }) => {

  const [mouseHovering, setMouseHovering] = useState(false);

  const router = useRouter();

  return (
    <>
      <div
        onMouseOver={() => setMouseHovering(true)}
        onMouseLeave={() => setMouseHovering(false)}
        onClick={() => router.push(href)}
        style={{
          backgroundColor: mouseHovering ? '#303030' : '#101010',
          padding: '12px',
          paddingLeft: '48px',
          cursor: 'pointer',
        }}>
        <Link href={href}
        style={{
          fontSize: '24px',
          color: 'white',
          textDecorationLine: 'none' }}>
            {text}
        </Link>
      </div>
      <div style={{
        minHeight: '1px',
        backgroundColor: '#222222',
      }}></div>
    </>

  );
}

export default MenuItem;