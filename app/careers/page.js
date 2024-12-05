import dynamic from "next/dynamic";
const Careerbanner = dynamic(() => import("@/components/Career/Careerbanner"));
const Careerform = dynamic(() => import("@/components/Career/Careerform"));
const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "Careers  hiringplug™ recruitment Marketplace",
  description:
    "Careers - apply to join our team at hiringplug AI marketplace of professional recruiters",
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
    <div className="w-full flex items-center justify-center bg-white text-black flex-col">
      <Header />
      <Careerbanner />
      <div className="w-full flex items-center mt-16 bg-white text-black justify-center flex-col">
        <p className="text-[#00a63f] text-[25px] font-semibold"> Careers</p>
        <p className="text-sm  md:w-6/12 text-center border-t border-gray-200 py-4">
          hiringplugTM is built on the pillars of innovation, integrity and
          relationships. As we shape the future of Talent acquisition industry
          by crafting a world-class product, we rely on People - our greatest
          asset in addressing arduous challenges to fulfil our Vision.If you
          believe to have the intelligence, loyalty and passion to write our
          next chapter, we’re ready to welcome you to our family. If this
          resonates with your aspirations, we’re eager to hear from you.
        </p>
      </div>
      <Careerform />
      <Footer />
    </div>
  );
}
