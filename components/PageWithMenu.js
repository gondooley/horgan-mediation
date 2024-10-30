import MenuPrompt from "./MenuPrompt";
import MenuScrolled from "./MenuScrolled";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useState } from "react";
import Menu from "./DropDownMenu";

const PageWithMenu = ({ children, noMenu }) => {

  const [menuVisible, setMenuVisible] = useState(false);
  const menuScrolledRef = useRef();
  const topRef = useRef();

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {

    console.log("When I'm fixing something with the scroll menu, I'll start here");

    var firstLoad = true;

    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        if (menuScrolledRef.current) {
          if ((topRef.current && topRef.current.getBoundingClientRect().top >= 0)
            || self.direction === -1) {
            gsap.to(menuScrolledRef.current, {
              yPercent: -100,
              duration: 0.2,
            });
          } else {
            // necessary so the scroll menu will not appear the moment you
            // return to a scrolled page
            if (!firstLoad) {

              console.log("MenuScroll should appear!")

              gsap.to(menuScrolledRef.current, {
                yPercent: 100,
                duration: 0.2,
              });  
            }
            firstLoad = false;
          }
        }
      }
    });
  });

  return (
      <div ref={topRef} className='top-ref-location' >
        {children}
        {noMenu ? null :
          <>
            <MenuPrompt setMenuVisible={setMenuVisible} />
            <MenuScrolled
              ref={menuScrolledRef} />
            {menuVisible
              ? <Menu setMenuVisible={setMenuVisible} />
              : null}
          </>
        }
      </div>
  );
}

export default PageWithMenu;