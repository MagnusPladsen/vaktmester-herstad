import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY < 10) {
      setShow(true);
    } else {
      if (typeof window !== "undefined") {
        setShow(true);
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
          setdropdownOpen(false);
        } else {
          // if scroll up show the navbar
          setShow(true);
        }

        // remember current page location to use in the next move

        setLastScrollY(window.scrollY);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <AnimatePresence initial={false}>
      {show ? (
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -100 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.2 }}
          className="bg-primary w-screen p-[30px] xl:px-[10vw] fixed flex align-middle z-20 "
        >
          <div className="flex w-full justify-between items-center xl:items-baseline">
            <p className="text-2xl text-white font-header font-bold">HERSTAD</p>

            {/* MOBILE */}
            <div className="flex xl:hidden justify-center align-middle">
              <Image
                src="/icons/hamburger.svg"
                width={40}
                height={40}
                alt="hamburger-menu"
              />
            </div>

            {/* DESKTOP */}
            <div className="hidden xl:flex font-bold text-white justify-center align-middle gap-14">
              <p>Hjem</p>
              <p>Kontakt</p>
              <p>Om oss</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
