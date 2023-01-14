import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="bg-primary w-screen p-[30px] xl:px-[10vw] flex align-middle z-20 ">
      <div className="flex w-full justify-between items-center">
        <p className="text-2xl text-white font-header font-bold">HERSTAD</p>
        <div className="flex xl:hidden justify-center align-middle">
          <Image
            src="/icons/hamburger.svg"
            width={40}
            height={40}
            alt="hamburger-menu"
          />
        </div>
        <div className="hidden xl:flex font-bold text-white justify-center align-middle gap-14">
          <p>Hjem</p>
          <p>Kontakt</p>
          <p>Om oss</p>
        </div>
      </div>
    </div>
  );
}
