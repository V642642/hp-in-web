import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SignupForm from "@/components/thankyou/SignupForm";
import ThankyouPageLayout from "@/components/thankyou/ThankyouPageLayout";

// export const metadata = {
//   title: "Request a Demo - hiringplug™ recruitment Marketplace",
//   description:
//     "Request a demo as an employer on hiringplug AI marketplace of professional recruiters to acquire talent faster ",
//   Keywords: "Recruitment Agencies, Online Recruitment Marketplace",
//   openGraph: {
//     title: "HiringPlug™",
//     description:
//       "HiringPlug™ is a Curated Marketplace of Recruiters, that enables Employers to hire quality candidates, faster!",
//     url: "https://www.hiringplug.com/",
//     siteName: "Next.js",
//     images: [
//       {
//         url: "/social-banner.jpg",
//         width: 800,
//         height: 600,
//       },
      
//     ],
//     locale: "en-US",
//     type: "website",
//   },
// };

export default function page() {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-white text-black">
      <Header />
      <div className="w-full flex items-start mt-[90px] pb-10 sm:pb-[60px] gap-10 sm:gap-20 justify-center flex-col sm:flex-row">
        <ThankyouPageLayout />
        <SignupForm />
      </div>

      <Clients />
      <Footer />
    </div>
  );
}
