import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Dropdowns from '@/components/refer/Dropdowns'
import Referbanner from '@/components/refer/Referbanner'
import Refercontent from '@/components/refer/Refercontent'
import React from 'react'

export const metadata = {
  title: "Refer  hiringplug™ recruitment Marketplace",
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
    <div className='w-full bg-white text-black flex items-center justify-center flex-col'>
      <Header />
        <Referbanner />
        <Refercontent />
        <Dropdowns />
        <Footer />
    </div>
  )
}
