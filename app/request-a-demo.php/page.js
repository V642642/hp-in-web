import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RequestLayout from '@/components/RequestDemo/RequestLayout'
import React from 'react';

export const metadata = {
  title: "Request a Demo - hiringplug™ recruitment Marketplace",
  description:
    "Request a demo as an employer on hiringplug AI marketplace of professional recruiters to acquire talent faster ",
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
    <RequestLayout />
    <Footer />
    </>
  )
}
