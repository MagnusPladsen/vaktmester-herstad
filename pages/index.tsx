import AboutUs from "@/components/aboutUs/AboutUs.component";
import Footer from "@/components/footer/Footer.component";
import Hero from "@/components/hero/Hero.component";
import NavBar from "@/components/navigation/NavBar.component";
import SiteWrapper from "@/components/siteWrapper/SiteWrapper.component";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Herstad</title>
        <meta name="description" content="Vaktmestertjenester" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Magnus Pladsen" />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <NavBar />
      <SiteWrapper>
        <Hero />
        <AboutUs />
      </SiteWrapper>
      <Footer />
    </>
  );
}
