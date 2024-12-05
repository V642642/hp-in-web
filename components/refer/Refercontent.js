"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePostForms } from "../Hooks/usePostForms";

export default function Refercontent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { status , mutateAsync } = usePostForms();
  const router = useRouter();


  useEffect(() => {
    if (errors.terms && Object.entries(errors).length === 1) {
      toast.warn("You must agree to the terms and conditions first.", {
        position: "top-center",
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.terms]);


  const onSubmit = (data) => {

    const postData = {
      CompanyName: data.CompanyName,
      FullName: data.FullName,
      Phone :  data.Phone,
      Email: data.Email,
      Message : data.Message,
      Ref_Source : 'na',
      ReferredBy_Name : data.ReferredBy_Name,
      ReferredBy_Phone : data.ReferredBy_Phone,
      ReferredBy_Email : data.ReferredBy_Email,
      ReferredBy_ContactTime : data.ReferredBy_ContactTime,
      Comments : '',
      Ipaddress : 'ip',
      Status : '',
      path : '/manage-web-service/v1/create-invite'

    }
    mutateAsync(postData).then(res => {
      if(res?.data.status){
        toast.success('Thank you');
        router.push('/thank-you-refer')
      }else{
        toast.warn('Something went wrong!')
      }
    })
   
  };

  return (
    <div
      className="flex w-11/12 lg:w-8/12 items-center justify-center flex-col font-primary text-black
    bg-white"
    >
      <p className="text-center text-[#00a63f] font-semibold text-[25px]">
        Client Referral Scheme (CRS)
      </p>
      <p className="text-[15px] border-t border-gray-300 py-3 leading-[35px]">
        <b>
          Is there someone you know who&apos;s actively hiring? Introduce them
          to us!
        </b>
        Not only will we help them
        <span className="text-[#00a63f]">hire5Xfaster</span>, but we&apos;ll
        also reward you handsomely! Begin by sharing details of your contact
        below, our team will get in touch with you and once they sign-up for
        free, your additional income begins.
      </p>
      <p className="text-[18px] w-full  text-left">
        <b>Reference Details</b>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center justify-center py-6 flex-col gap-6"
      >
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Company Name :
            </p>
            <input
              type="text"
              name="CompanyName"
              {...register("CompanyName", { required: true })}
              className="h-10 bg-white text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Contact Person Name :
            </p>
            <input
              type="text"
              name="FullName"
              {...register("FullName", { required: true })}
              className="h-10 bg-white text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Contact Email-ID :
            </p>
            <input
              type="email"
              name="Email"
              {...register("Email", { required: true })}
              className="h-10 bg-white  text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Contact Person Number :
            </p>
            <input
              type="number"
              name="Phone"
              {...register("Phone", { required: true })}
              className="h-10 bg-white text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Message :
            </p>
            <textarea
              placeholder=" (Please provide as much details as possible)"
              rows="5"
              name="Message"
              {...register("Message", { required: true })}
              className=" text-[14px] bg-white p-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <p className="text-[18px] w-full  text-left">
          <b>Your Details</b>
        </p>

        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Your Name :
            </p>
            <input
              type="text"
              name="ReferredBy_Name"
              {...register("ReferredBy_Name", { required: true })}
              className="h-10 bg-white text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Your Email-ID :
            </p>
            <input
              type="email"
              name="ReferredBy_Email"
              {...register("ReferredBy_Email", { required: true })}
              className="h-10 bg-white text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Your Phone Number :
            </p>
            <input
              type="text"
              name="ReferredBy_Phone"
              {...register("ReferredBy_Phone", { required: true })}
              className="h-10 bg-white text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Best time to call :
            </p>
            <input
              type="text"
              name="ReferredBy_ContactTime"
              {...register("ReferredBy_ContactTime", { required: true })}
              className="h-10 bg-white text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <label className="text-[14px] cursor-pointer flex items-center justify-start gap-2 flex-wrap w-full">
          <input
            type="checkbox"
            name="terms"
            {...register("terms", { required: true })}
            className="h-5 bg-white accent-green-800 w-5 cursor-pointer rounded-[3px]"
          />
          <span>I have read and fully agree to the terms below.</span>
        </label>
        <button
          type="submit"
          className="w-full bg-[#00a63f] h-10 text-white text-[15px] rounded-[4px]"
        >
          {status === "loading" ? "Please wait..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
