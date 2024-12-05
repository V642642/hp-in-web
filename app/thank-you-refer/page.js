import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function page() {
  return (
    <div className='w-full flex items-center justify-center flex-col '>
      <Header />
      <div className={`  w-full px-2 xl:w-5/12 lg:w-6/12 py-20 md:w-10/12 font-primary flex mt-[90px]  items-center justify-center flex-col gap-2`}>
              <p className="text-[25px] text-gray-700">Thank <span className="font-medium text-[#00a63f]">You</span> </p>

              <FontAwesomeIcon icon={faThumbsUp}  className="text-[55px] sm:text-[65px] text-gray-500 my-10" />
              <p className="w-full text-center text-[15px]">Thanks... You&apos;re awesome! We&apos;ve sent you an email with details & the next steps</p>

<div className='w-full flex items-center justify-center flex-col my-12'>
<a href="blog.hiringplug.com" className='text-[#00a63f] text-[14px]'>Our HR Blog</a>
<a className='text-[#00a63f] text-[14px]' href="https://www.instagram.com/hiringplug/" target="_blank">https://www.instagram.com/hiringplug/</a>
<a className='text-[#00a63f] text-[14px]' href="https://www.linkedin.com/company/hiringplug" target="_blank">https://www.linkedin.com/company/hiringplug</a>
<a className='text-[#00a63f] text-[14px]' href="https://twitter.com/hiringplug" target="_blank">https://twitter.com/hiringplug</a>
<a className='text-[#00a63f] text-[14px]' href="https://www.facebook.com/hiringplugofficial" target="_blank">https://www.facebook.com/hiringplugofficial</a>
<a className='text-[#00a63f] text-[14px]' href="https://in.pinterest.com/hiringplug/" target="_blank">https://in.pinterest.com/hiringplug/</a>
</div>


<p className="text-[20px]"><b>Stay Plugged!</b></p>
      </div>
      <Footer />
    </div>
  )
}
