import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative top-[100px] mt-[150px] bg-primary py-[50px]">
      <div className="mx-auto flex w-full flex-col justify-between px-[30px] xl:w-fit xl:flex-row xl:gap-[100px] gap-10 xl:p-0">
        <div className="flex items-center gap-[10px]">
          <Image src="/icons/logo.svg" width={40} height={40} alt="logo" />
          <p className="font-header text-2xl font-bold text-white">HERSTAD</p>
        </div>
        <div className="text-white">
          <p className="underline underline-offset-2">Kontaktinfo</p>
          <p>Tlf: 90 22 52 93</p>
          <a href="mailto:kontakt@eksempel.no">
            <p>Mail: kontakt@eksempel.no</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
