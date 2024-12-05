import ContactUsNewlayout from '@/components/ContactUs/ContactUsNewlayout'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react';

export const metadata = {
  title: "Contact - Us  hiringplug™ recruitment Marketplace",
  description:
    "Contact us - contact  hiringplug AI marketplace of professional recruiters to acquire talent faster  ",
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
    <>
    <Header />
    <ContactUsNewlayout />
    <Footer />
    </>
  )
}
