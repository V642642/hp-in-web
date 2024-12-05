"use client"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import ContactUsMail from "../../mailer/contact-us-mail";
// import Demo from "../popups/Demo";
// import SignupPop from "../popups/SignupPop";

export default function SignupForm() {
  const [edit, setEdit] = useState(null);
  const handletoggle = (id) => {
    if (edit === id) {
      return setEdit(null);
    }
    setEdit(id);
  };
  let router = useRouter();
  const [ipaddress, setIpaddress] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`https://api.db-ip.com/v2/free/self`)
      .then((res) => setIpaddress(res?.data.ipAddress));
  }, []);

  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(false);
  const [name, setName] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    setValue
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    reset(
      localStorage.getItem("demo")
        ? JSON.parse(localStorage.getItem("demo"))
        : {}
    );
    setName(
      localStorage.getItem("demo")
        ? JSON.parse(localStorage.getItem("demo"))
        : {}
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setEdit(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  const  onSubmit =(data) => {

    ///manage-user-service/v1/users

    const postdata = {
      name: data.CompanyName,
      type: data.type === "Employer" ? 2 : data.type === "Recuritment" ? 3 : data.type === 'Independent Recuritement' ? 3 : '',
      firstName: data.FullName,
      company_name: data.CompanyName,
      agency_type: "type1",
      lastName: '',
      email: data.Email,
      prime: 1,
      phone: data.phone,
      contractagreed: data.contract,
      ccity: data.ccity,
      clientRoles: {
        "realm-management": ["manage-users"],
      },
      enabled: true,
      groups: ["admin"],
      realmRoles: ["admin"],
      panel_user: 1,
      is_default_panel_user: 1,
      allowed_post_job: 10,
      user_fee: 100,
      is_whatsapp_contact_verified: 1,
      whatsapp_notification: 1,
      hide_callout: 1,
      ipaddress: ipaddress,
    };

   if(postdata.type === 2 || postdata.type === 3){
    axios
    .post(
      `https://api-in.hiringplug.com/manage-user-service/v1/users`,
      postdata
    )
    .then((res) => {
      setIsLoading(false);
      if (res?.data?.status) {
        window.open(`https://my.hiringplug.com/registration-message`, '_blank');
      } else {
        toast.warn(res?.data?.message);
      }
    });
   }else {
    alert("Something went wrong");
   }
   

  }

  return (
    <div className="w-full font-primary mt-10 bg-white text-black flex items-start justify-center flex-col sm:w-5/12">
      <div className="w-full gap-6 mb-5 flex items-start  flex-col justify-start">
        <p
          className="text-[40px] gap-2 flex  bg-gradient-to-r bg-clip-text  
            animate-text"
        >
          <span className="text-center">
            Thanks {name.FullName ? name.FullName : <></>}, we&apos;ve received
            your request!
          </span>
        </p>
        <p className="text-center">
          While the team gets ready to schedule a call with you, Go ahead and
          explore the following resources.
        </p>
      </div>
      {/* <Demo open={demo} setOpen={setDemo} />
      <SignupPop open={open} setOpen={setOpen} /> */}
      <div className="w-full  flex items-center justify-center ">
        <div className="w-11/12  flex  flex-col items-center justify-start">
          <p className=" w-full text-left">
            <span className="inline-block w-4/12"> Full name :</span>
            <span>{name?.FullName}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">Email :</span>
            <span>{name?.Email}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">Phone No :</span>
            <span>{name?.Phone}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">You are a :</span>
            <span>{name?.type}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">Location :</span>
            <span>{name?.Location}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">Company&apos;s name : </span>
            {name?.CompanyName}
          </p>
          {
            ["Employer","Recuritment",'Independent Recuritement'].includes(name?.type) ?  <span
            onClick={() => handletoggle(1)}
            className="text-green-500 absolute  right-5 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPencilAlt} /> Edit Details
          </span> : ''
          }
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  flex  flex-col items-center justify-start"
      >
        <div className="w-full font-primary gap-4 md:w-11/12 flex items-start justify-center flex-col">
          <div
            className={`${
              edit === 1 ? "content show" : "content"
            }  w-full sm:px-0 px-3  gap-4  flex items-start justify-center flex-col`}
          >
            <p className="text-20px mt-10 w-full text-start">
              Signup as an Agency OR Employer
            </p>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800 ">*</span> Full Name :
              </p>
              <input
                name="FullName"
                disabled
                {...register("FullName", { required: true })}
                type="text"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800">*</span> Email :
              </p>
              <input
                name="Email"
                disabled
                {...register("Email", { required: true })}
                type="email"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800">*</span> Phone No :
              </p>
              <input
                name="Phone"
                disabled
                {...register("Phone", { required: true })}
                type="text"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800 ">
                <span className="text-red-800 ">*</span> I&apos;m :
              </p>
              {name.type !==
              ("Employer" ||
                "Recuritment" ||
                "Independent Recuritement" ||
                "Seeking employment" ||
                "Business colloboration") ? (
                <>
                  <input
                    name="type"
                    disabled
                    {...register("type")}
                    type="text"
                    className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
                  />
                </>
              ) : (
                <select
                  disabled
                  name="type"
                  {...register("type", { required: true })}
                  className="h-10 px-2 w-full text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]"
                >
                  <option value="">I&apos;m</option>
                  <option value="Employer">An Employer</option>
                  <option value="Recuritment">A Recruitment Firm</option>
                  <option value="Independent Recuritement">
                    An Independent Recruiter
                  </option>
                  <option value="Seeking employment">
                  Seeking employment
                  </option>
                  <option value="Business colloboration">
                    Business collaboration
                  </option>
                  <option value="Other">Other</option>
                </select>
              )}
            </label>

            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[15px] font-semibold text-gray-800 ">
                <span className="text-red-800 ">*</span> Location :
              </p>

              <input
                name="Location"
                disabled
                {...register("Location",)}
                className="h-10 px-2 w-full text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]"
              />
            </label>

            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800 ">*</span> Company/entity Name :
              </p>
              <input
                name="CompanyName"
                {...register("CompanyName", { required: true })}
                type="text"
                disabled
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-3 justify-center w-full">
            <Link
              href={"/request-a-demo.php"}
              className="rounded-md w-[50%] text-center  sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-gray-600 text-gray-600 "
            >
              <span className="absolute w-[290px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-24 bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-28 ease"></span>
              <span className="relative text-gray-600 transition duration-300 group-hover:text-white text-center ease">
              Start over
              </span>
            </Link>
            <p>OR</p>

            {["Employer","Recuritment",'Independent Recuritement'].includes(name?.type) ? <button
              type="submit"
              className="rounded-md w-[50%] sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium  text-white bg-green-500  border-green-500"
            >
              <span className="absolute w-[300px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-28 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-[122px] ease"></span>
              <span className="relative text-white transition duration-300 group-hover:text-green-500 ease">
                {isLoading ? "Please Wait...." : "Continue to signup"}
              </span>
            </button>  : <Link 
              href="/resources"
              className="rounded-md text-center w-[50%] sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium  text-white bg-green-500  border-green-500"
            >
              <span className="absolute w-[300px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-28 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-[122px] ease"></span>
              <span className="relative text-white transition duration-300 group-hover:text-green-500 ease">
               Testimonials
              </span>
            </Link> }
            
            
           
            
          </div>
          { ["Employer","Recuritment",'Independent Recuritement'].includes(name?.type) ?  <div className="flex items-center justify-center gap-2 sm:p-0 p-2">
            <input
              type="checkbox"
              name="contract"
              {...register("contract", { required: true })}
              className={` ${
                errors.contract ? "border outline-red-500" : ""
              } w-6 cursor-pointer accent-green-500 h-6`}
              value="1"
            />
            <p className={`${errors.contract ? "text-red-500" : "text-black"}`}>
              I have read and agree to the Terms of Use and Privacy Policy.
            </p>
          </div> : <></>}
          
     
        </div>
      </form>
    </div>
  );
}
