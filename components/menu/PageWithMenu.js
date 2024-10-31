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
  const [firstLoad, setFirstLoad] = useState(true);
  const menuScrolledRef = useRef();
  const topRef = useRef();

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);


  useGSAP((context, contextSafe) => {

    console.log("When I'm fixing something with the scroll menu, I'll start here");

    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        // This only seems to run when the drop down menu is already visible
        // console.log("Scroll update");
        if (menuScrolledRef.current) {
          if ((topRef.current && topRef.current.getBoundingClientRect().top >= 0)
            || self.direction === -1) {
          contextSafe(() => {
            gsap.to(menuScrolledRef.current, {
              yPercent: -100,
              duration: 0.2,
            });
          })
          } else {
            // necessary so the scroll menu will not appear the moment you
            // return to a scrolled page
            if (!firstLoad) {

              console.log("MenuScroll should appear!")

              contextSafe(() => {
                gsap.to(menuScrolledRef.current, {
                  yPercent: 100,
                  duration: 0.2,
                });    
              })
            }
            setFirstLoad(false);
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