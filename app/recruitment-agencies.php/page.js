import ABanner from "@/components/Agencies/ABanner";
import Abenifits from "@/components/Agencies/Abenifits";
import ANextSteps from "@/components/Agencies/ANextSteps";
import AProductBanner from "@/components/Agencies/AProductBanner";
import CustomerSpeak from "@/components/Agencies/CustomerSpeak";
import Agency from "@/components/Agency";
import Request from "@/components/Employers/Request";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export const metadata = {
  title: "Best Online Recruitment Marketplace for Recruitment Agencies – hiringplug™",
  description:
    "Best Online Recruitment Marketplace for Recruitment Agencies & corporate - Expand your business with hiringplug™.",
  Keywords: "Recruitment Agencies, Online Recruitment Marketplace",
  openGraph: {
    title: "HiringPlug™",
    description:
      "HiringPlug™ is a Curated Marketplace of Recruiters, that enables Employers to hire quality candidates, faster!",
    url: "https://www.hiringplug.com/",
    siteName: "Next.js",
    images: [
      {
        url: "/social-banner.jpg",
        width: 800,
        height: 600,
      },
      
    ],
    locale: "en-US",
    type: "website",
  },
};



export default function page() {
  return (
    <>
      <Header />
      <ABanner />
      <AProductBanner />
      <Abenifits />
      <CustomerSpeak />
      <Agency/>
      <ANextSteps />
      <Request />
      <Footer />
    </>
  );
}
