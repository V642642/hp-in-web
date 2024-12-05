"use client"
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
const PhoneInput = dynamic(() => import("react-phone-number-input"));
import { toast } from "react-toastify";
import { usePostForms } from "../Hooks/usePostForms";

export default function RequestADemoNewLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useForm({ mode: "all" });

  let router = useRouter()

  const [cities, setCitis] = useState([]);
  const [ipaddress, setIpaddress] = useState("");
  const { status , mutateAsync } = usePostForms();
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.db-ip.com/v2/free/self`)
      .then((res) => setIpaddress(res?.data));

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setEmail(
      localStorage.getItem("email")
        ? JSON.parse(localStorage.getItem("email"))
        : ""
    );
    setValue(
      "country",
      ipaddress?.countryCode === "CA"
        ? "Canada"
        : ipaddress?.countryCode === "IN"
        ? "India"
        : ipaddress?.countryCode === "USA"
        ? "United States"
        : "Canada"
    );
    if (email) {
      setValue("email", email);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email,ipaddress?.countryCode]);

  useEffect(() => {
    if (errors.terms && Object.entries(errors).length === 1) {
      toast.warn("You must agree to the terms and conditions first.", {
        position: "top-center",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.terms]);


  const onSubmit = (data) => {
    let postData = {
      type: data.type === "Other" ? data.typeother : data.type,
      CompanyName: data.companyname ? data.companyname : "N/A",
      Enquiry: data.enquiry,
      Email: data.email,
      FullName: data.fullname,
      Phone: data.phone,
      Location: `${data.country}-${data.location}`,
      Source: "request a demo",
      IPAddress: ipaddress?.ipAddress,
      url: data.url,
      path : '/manage-web-service/v1/create-demo',
      FormType : 1
    };
 
 
    localStorage.setItem("demo", JSON.stringify(postData));

    mutateAsync(postData).then(res => {
      if(res?.data.status){
        router.push('/thankyou')
      }else{
        toast.warn('Something went wrong!')
      }
    })
  };

  useEffect(() => {
    if (watch("country")) {
      axios
        .get(
          `https://countriesnow.space/api/v0.1/countries/cities/q?country=${
            watch("country") ? watch("country") : ""
          }`
        )
        .then((res) => {
          setCitis(res.data.data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("country"), ipaddress?.countryCode]);



  return (
    <div className="bg-[#00a63f] md:py-2 mt-[90px]">
      <div className="relative w-full h-[120vh] lg:h-[100vh]  ">
      <div className="relative videocontainer  ">
        <video autoPlay loop muted id="myVideo">
          <source
            src={`/laptoporiginal.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className='left-0 w-full h-[120vh] lg:h-[100vh] bg-opacity-50 bg-[#000000] absolute top-0 '></div>
      </div>
        <div className="w-full font-primary  bg-no-repeat bg-cover flex min-h-[100vh] items-start  justify-between flex-row top-0 absolute">
          <div className="lg:w-[60%] min-h-[100vh]  lg:block hidden "></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex items-center gap-1 mt-[20px] justify-center flex-col lg:w-[40%]  "
          >
            <p className="sm:text-[40px] text-[25px] font-bold text-white  ">
              Request a Demo
            </p>
            <label className="w-full flex items-center gap-2 justify-center ">
              <select
                name="type"
                {...register("type", { required: true })}
                className={`h-[55px] text-black px-4 w-10/12 boxShadow text-[20px] accent-green-800 appearance-none bg-white  rounded-[12px]  border-[3px]  ${
                  errors.type ? "border-red-700 " : "border-green-700"
                }`}
              >
                <option value="" className="text-gray-600">
                  I am ...
                </option>
                <option value="Employer">An Employer</option>
                <option value="Recuritment">A Recruitment Firm</option>
                <option value="Independent Recuritement">
                  An Independent Recruiter
                </option>
                <option value="Seeking employment">Seeking employment</option>
                <option value="Business Collaboration">
                  Business Collaboration
                </option>
                <option value="Other">Other</option>
              </select>
              <p className="text-orange-400 text-[40px] font-bold">*</p>
            </label>

            {watch("type") === "Other" ? (
              <label className="w-full flex items-center gap-2 justify-center ">
                <input
                  type="text"
                  name="typeother"
                  {...register("typeother", { required: true })}
                  placeholder="Please specify"
                  className="h-[55px] px-4 text-black w-10/12 placeholder-gray-700 text-[20px] accent-green-800 appearance-none bg-white  rounded-[12px] border-[3px] border-[#00a63f] "
                />
                <p className="text-orange-400 text-[40px] font-bold">*</p>
              </label>
            ) : (
              <></>
            )}
            <label className="w-full flex items-center gap-2 justify-center ">
              <input
                name="fullname"
                {...register("fullname", {
                  required: "Please enter your name",
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: "Name should not contain numbers",
                  },
                })}
                placeholder="My name"
                type="text"
                className={`h-[55px] text-black px-4 w-10/12  placeholder-gray-700 text-[20px] accent-green-800 appearance-none bg-white  rounded-[12px]  border-[3px] border-[#00a63f] ${
                  errors.fullname ? "border-red-700 " : "border-green-700"
                }`}
              />
              <p className="text-orange-400 text-[40px] font-bold">*</p>
            </label>
            <label className="w-full gap-2 flex relative items-center justify-center ">
              <input
                name="email"
                {...register("email", {
                  required: "Email is requied",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                type="email"
                disabled={email ? true : false}
                placeholder="Your email"
                className={`h-[55px] text-black px-4 w-10/12  placeholder-gray-700 text-[20px] accent-green-800 appearance-none bg-white  rounded-[12px]  border-[3px] border-[#00a63f] ${
                  errors.email ? "border-red-700 " : "border-green-700"
                }`}
              />
              <p className="absolute md:top-auto top-[50px] md:left-auto left-10 md:right-[85px] text-orange-500">
                {errors.email ? errors.email.message : ""}
              </p>
              <p className="text-orange-400 text-[40px] font-bold">*</p>
            </label>
            <label className="w-full flex items-center gap-2 justify-center ">
              <input
                type="text"
                name="companyname"
                placeholder="Company's name"
                {...register("companyname",{ required: true })}
                className="h-[55px] text-black px-4 w-10/12  placeholder-gray-700 text-[20px] accent-green-800 appearance-none bg-white  rounded-[12px]  border-[3px] border-[#00a63f]"
              />
              <p className="text-orange-400 opacity-0 text-[40px] font-bold">
                *
              </p>
            </label>
            <label className="w-full flex items-center gap-2 justify-center ">
              <input
                type="text"
                name="url"
                placeholder="Website or Linkedin profile"
                {...register("url")}
                className="h-[55px] text-black px-4 w-10/12  placeholder-gray-700 text-[20px] accent-green-800 appearance-none bg-white rounded-[12px]  border-[3px] border-[#00a63f]"
              />
              <p className="text-orange-400 opacity-0 text-[40px] font-bold">
                *
              </p>
            </label>

            <label
              id="requestdemo"
              className="w-full gap-2 relative flex items-center justify-center "
            >
              {/* <Controller
              control={control}
              name="phone"
              rules={{
                required: "Phone number is required !",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 numbers !",
                },
                maxLength: {
                  value: 15,
                  message: "Not a valid phone number",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  className=" text-[20px] w-10/12"
                  containerClass=""
                  containerStyle={{
                    width: "83.33%",
                    border: "4px solid #00a63f",
                    borderRadius: "10000px",
                    background : "transparent"
                  }}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "10000px",
                    fontSize: "20px",
                  }}
                  dropdownStyle={{ borderRadius: "0" }}
                  buttonStyle={{
                    borderRadius: "10000px 0 0 10000px",
                    width: "20%",
                    marginRight: "20px",
                  }}
                  value={value}
                  onChange={onChange}
                  enableSearch={true}
                  searchStyle={{ borderRadius: "0" }}
                  countryCodeEditable={false}
                  country="ca"
                />
              )}
            /> */}
              <Controller
                control={control}
                name="phone"
                rules={{
                  required: "Phone number is required !",
                  minLength: {
                    value: 10,
                    message: "Not a valid phone number!",
                  },
                  maxLength: {
                    value: 15,
                    message: "Not a valid phone number",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    className=" text-[20px] text-black w-10/12"
                    containerClass=""
                    containerStyle={{
                      width: "83.33%",
                      border: "4px solid #00a63f",
                      borderRadius: "10000px",
                      background: "transparent",
                      color: "#000000",
                    }}
                    inputStyle={{
                      width: "100%",
                      borderRadius: "10000px",
                      fontSize: "20px",
                      color: "#000000",
                    }}
                    dropdownStyle={{ borderRadius: "0" }}
                    buttonStyle={{
                      borderRadius: "10000px 0 0 10000px",
                      width: "20%",
                      marginRight: "20px",
                      color: "#000000",
                    }}
                    value={value}
                    onChange={onChange}
                    enableSearch={true}
                    searchStyle={{ borderRadius: "0" }}
                    countryCodeEditable={false}
                    defaultCountry={
                      ipaddress?.countryCode ? ipaddress.countryCode : "CA"
                    }
                    international
                    countries={["IN", "CA", "US"]}
                  />
                )}
              />
              <p className="absolute md:top-auto top-[50px] md:left-auto left-10 md:right-[85px] text-orange-500">
                {errors.phone ? errors.phone.message : ""}
              </p>
              <p className="text-orange-400  text-[40px] font-bold">*</p>
            </label>

            <label className="w-full flex items-center  flex-row md:gap-3 gap-0 sm:gap-2 justify-center ">
              <select
                name="country"
                {...register("country", { required: true })}
                className="h-[45px] w-[30%] text-black lg:w-[24%] placeholder-gray-700 text-[20px] accent-green-800 appearance-none bg-white  sm:rounded-full  sm:border-[4px] border-[#00a63f] px-3 border-r-0 sm:border-r-[4px] sm:rounded-r-full rounded-r-[0px]  rounded-[10px] border-[3px]"
              >
                <option value="Canada">Canada 🇨🇦</option>
                <option value="India">India 🇮🇳</option>
                <option value="United States">United States 🇺🇸</option>
                {/* {option?.map((data) => (
                <option
                  key={data.name}
                  value={data.name}
                >{`${data.name} ${data.unicodeFlag} `}</option>
              ))} */}
              </select>
              <select
                name="location"
                {...register("location", { required: true })}
                className={`h-[45px] w-[54%] text-black lg:w-[57%] placeholder-gray-700 text-[20px] accent-green-800 appearance-none bg-white  sm:rounded-full  sm:border-[4px]  sm:px-3 px-0  ${
                  errors.location
                    ? "border-red-600 "
                    : "border-[#00a63f] border-l-0"
                } border-[3px]  rounded-[10px] sm:rounded-l-full rounded-l-[0px]`}
              >
                <option value="">City</option>
                {cities?.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
              <p className="text-orange-400 text-[40px] font-bold sm:ml-0 ml-2">
                *
              </p>
            </label>
            {/* <label className="w-full flex items-center justify-center ">
            <select
              name="location"
              {...register("location", { required: true })}
              className="h-10 px-2 w-10/12 text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]"
            >
              <option value="">--Select--</option>
              {cities?.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </label> */}

            <label className="w-full gap-2 flex items-center justify-center ">
              <textarea
                name="enquiry"
                {...register("enquiry", { required: true })}
                rows="4"
                placeholder="Briefly describe your interest to help us prepare  better."
                className={`w-10/12 text-[20px] placeholder-gray-700  accent-green-800 appearance-none
               bg-white  rounded-[10px] text-black border-[4px] border-[#00a63f] p-3 ${
                 errors.enquiry ? "border-red-700 " : "border-green-700"
               }`}
              />
              <p className="text-orange-400 text-[40px] font-bold">*</p>
            </label>

            <label className="w-10/12 mt-6 flex items-start  justify-start px-2 gap-2 ">
              <input
                id="termscheckbox"
                name="terms"
                {...register("terms", { required: true })}
                type="checkbox"
                className={` accent-black  border-white border cursor-pointer bg-black w-[25px] h-[25px]`}
              />

              <p className={` text-[20px]  text-white`}>
                I agree to the{" "}
                <a target="_blank" href="/terms-of-use.php">
                  <b>terms of use</b>
                </a>{" "}
                and to be contacted by the company.
              </p>
            </label>
            <button
              type="submit"
              className={`${
                status === "loading" ? "bg-green-400" : "bg-[#00a63f]"
              } font-semibold  h-[55px] text-white mt-6 px-10  text-[20px] rounded-full border-2 border-white `}
            >
              {status === "loading" ? "Please wait..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
