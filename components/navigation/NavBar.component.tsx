import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < 50) {
      setShow(true);
    } else {
      if (typeof window !== "undefined") {
        setShow(true);
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
          setDropDownOpen(false);
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

  const router = useRouter();

  return (
    <AnimatePresence initial={false}>
      {show ? (
        <motion.nav
          animate={{ y: 0 }}
          initial={{ y: -100 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.2 }}
          className="fixed z-20 flex w-screen bg-primary py-[30px] align-middle"
        >
          <div className="mx-auto flex w-full items-center justify-between xl:w-fit xl:gap-[80px]">
            <div className="hidden items-center gap-[10px] xl:flex">
              <Image src="/icons/logo.svg" width={40} height={40} alt="logo" />
              <p className="font-header text-2xl font-bold text-white">
                HERSTAD
              </p>
            </div>

            {/* MOBILE */}
            <div className="flex w-full items-center justify-between px-[30px] xl:hidden">
              <div className="flex justify-center align-middle hover:cursor-pointer">
                <Image
                  src="/icons/logo.svg"
                  width={40}
                  height={40}
                  alt="logo"
                />
              </div>
              <p className="font-header text-2xl font-bold text-white ">
                HERSTAD
              </p>
              <motion.div
                animate={{
                  rotate: dropDownOpen ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex justify-center align-middle hover:cursor-pointer "
                onClick={() => {
                  console.log("test");
                  setDropDownOpen(!dropDownOpen);
                }}
              >
                <Image
                  src="/icons/hamburger.svg"
                  width={40}
                  height={40}
                  alt="hamburger-menu"
                />
              </motion.div>
            </div>
            <AnimatePresence initial={false}>
              {dropDownOpen ? (
                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{ y: -500, opacity: 0 }}
                  exit={{ y: -500, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute z-10 top-[100px] h-[200px] w-full bg-primary text-lg font-bold text-white xl:flex"
                >
                  <div className="mx-auto flex w-fit flex-col gap-[20px] pt-[20px]">
                    <Link href="/">
                      <motion.p
                        className={`${
                          router.pathname === "/"
                            ? "underline underline-offset-4 !opacity-100"
                            : "opacity-60"
                        }`}
                        whileHover={{
                          scale: 1.1,
                          textDecoration: "underline",
                          textUnderlineOffset: "4px",
                          opacity: 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        Hjem
                      </motion.p>
                    </Link>
                    <Link href="/kontakt">
                      <motion.p
                        className={`${
                          router.pathname === "/om-oss"
                            ? "underline underline-offset-4 !opacity-100"
                            : "opacity-60"
                        }`}
                        whileHover={{
                          scale: 1.1,
                          textDecoration: "underline",
                          textUnderlineOffset: "4px",
                          opacity: 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        Om oss
                      </motion.p>
                    </Link>
                    <Link href="/om-oss">
                      <motion.p
                        className={`${
                          router.pathname === "/kontakt"
                            ? "underline underline-offset-4 !opacity-100"
                            : "opacity-60"
                        }`}
                        whileHover={{
                          scale: 1.1,
                          textDecoration: "underline",
                          textUnderlineOffset: "4px",
                          opacity: 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        Kontakt
                      </motion.p>
                    </Link>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* DESKTOP */}
            <div className="hidden justify-center gap-[30px] align-middle text-lg font-bold text-white xl:flex">
              <Link href="/">
                <motion.p
                  className={`${
                    router.pathname === "/"
                      ? "underline underline-offset-4 !opacity-100"
                      : "opacity-60"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    opacity: 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Hjem
                </motion.p>
              </Link>
              <Link href="/kontakt">
                <motion.p
                  className={`${
                    router.pathname === "/om-oss"
                      ? "underline underline-offset-4 !opacity-100"
                      : "opacity-60"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    opacity: 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Om oss
                </motion.p>
              </Link>
              <Link href="/om-oss">
                <motion.p
                  className={`${
                    router.pathname === "/kontakt"
                      ? "underline underline-offset-4 !opacity-100"
                      : "opacity-60"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    opacity: 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Kontakt
                </motion.p>
              </Link>
            </div>
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
