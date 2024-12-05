import Agency from "@/components/Agency";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KeyBenifits from "@/components/KeyBenifits";
import Parallex from "@/components/Parallex";
import Product from "@/components/ProductSlider";
import SidePopUp from "@/components/RequestDemo/SidePopUp";
import Social from "@/components/Social";

export const metadata = {
  title: "online recruitment platform - hiringplug™ recruitment Marketplace",
  description:
    "Best online recruitment platform to engage with multiple Recruiting agencies to fulfil job requirements- HiringPlug™",
  Keywords: "online recruitment platform",
  openGraph: {
    title: "HiringPlug™",
    description:
      "HiringPlug™ is a Curated Marketplace of Recruiters, that enables Employers to hire quality candidates, faster!",
    url: "https://www.hiringplug.com/",
    siteName: "hiringplug™",
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

export default function Home() {
  return (
    <>
      <Header />
      <SidePopUp />
      <Banner />
      <Clients />
      <Parallex />
      <Agency />
      <KeyBenifits />
      <Product />
      <Blog />
      <Social />
      <Footer />{" "}
    </>
  );
}
