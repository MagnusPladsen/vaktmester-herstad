import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="">
      <div className="w-fit mx-auto">
        <h1 className="text-primary py-[50px] font-medium text-4xl">
          Våre tjenester
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row h-fit ">
        <div className="hidden xl:block w-1/2 relative">
          <Image
            src="/images/heroServices.jpg"
            alt="Bildet av mann som holder en drill"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full xl:w-1/2 bg-darker p-[50px] text-white flex flex-col gap-[25px]">
          <div className="flex flex-col gap-1">
            <p>- Altmuligmann og vaktmestertjenester</p>
            <p>- Montering og vedlikehold</p>
            <p>- Tak- og snømåking</p>
            <p>- Grøfting og drenering</p>
            <p>- Gressklipping og graving</p>
            <p>- Hytteservice</p>
          </div>
          <div className="text-center xl:text-left">
            <p>
              {" "}
              Vi tilpasser oss etter <span className="underline">
                dine
              </span>{" "}
              behov.
            </p>
            <p>Send oss en uforpliktende forespørsel!</p>
          </div>
          <div className="w-fit mx-auto xl:w-full">
            <Link href="/kontakt">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white text-darker py-[10px] px-[20px] w-fit shadow"
              >
                Kontakt oss
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
