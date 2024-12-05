import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CaseStudies from "@/components/Resources/CaseStudies";
import RBanner from "@/components/Resources/RBanner";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-white text-black">
      <Header />
      <RBanner />
      <CaseStudies />
      <Clients />
      <Footer />
    </div>
  );
}
