import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const AboutusBanner = dynamic(() =>
  import("@/components/Aboutus/AboutusBaneer")
);
const AboutUsContent = dynamic(() =>
  import("@/components/Aboutus/AboutUsContent")
);
const MyGallery = dynamic(() => import("@/components/Aboutus/MyGallery"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "hiringplug™ recruitment Marketplace",
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

export default function page() {
  return (
    <div className="w-full flex items-center bg-white text-black justify-center flex-col">
      <Header />
      <div className="w-full flex items-center bg-white text-black justify-center flex-col"></div>
      <AboutusBanner />
      <AboutUsContent />
      <MyGallery />
      <Footer />
    </div>
  );
}
