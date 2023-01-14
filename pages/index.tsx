import Aboutus from "@/components/home/AboutUs.componen";
import Hero from "@/components/home/hero/Hero.component";
import NavBar from "@/components/navigation/NavBar.component";
import SiteWrapper from "@/components/siteWrapper/SiteWrapper.component";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vaktmester Herstad</title>
        <meta name="description" content="Vaktmestertjenester" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <NavBar />
        <Hero />
        <SiteWrapper>
          <Aboutus />
        </SiteWrapper>
      </>
    </>
  );
}
