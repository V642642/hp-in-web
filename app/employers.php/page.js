import Clients from "@/components/Clients";
import Customers from "@/components/Employers/Customers";
import Ebanner from "@/components/Employers/Ebanner";
import EBenifits from "@/components/Employers/EBenifits";
import ENextSteps from "@/components/Employers/ENextSteps";
import EProductbanner from "@/components/Employers/EProductbanner";
import Request from "@/components/Employers/Request";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export const metadata = {
  title: "online recruitment platform for employers - hiringplug™ recruitment Marketplace",
  description:
    "Join as an employer partner with hiringplug AI marketplace of professional recruiters to acquire top talent faster ",
  Keywords: "online recruitment platform",
  openGraph: {
    title: "HiringPlug™",
    description:
      "HiringPlug™ is a Curated Marketplace of Recruiters, that enables Employers to hire quality candidates, faster!",
    url: "https://www.hiringplug.com/",
    siteName: "Next.js",
    images: [
      {
        url: "https://hiringplug.com/hiringpluglogo.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function New() {
  return (
    <>
      <Header />
      <Ebanner />
      <EProductbanner />
      <EBenifits />
      <Customers />
      <Clients />
      <ENextSteps />
      <Request />
      <Footer />
    </>
  );
}
