"use client";
import dynamic from "next/dynamic";
import React  from "react";
const TextField = dynamic(() => import("@mui/material/TextField"));
const SendIcon = dynamic(() => import("@mui/icons-material/Send"));
import { Controller, useForm } from "react-hook-form";
import { useCreateCareer } from "../Hooks/useCreateCareer";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Careerform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm({ mode: "onChange" });
  const router = useRouter();
  const { status, mutateAsync } = useCreateCareer();
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("Email", data.email);
    formData.append("FirstName", data.firstname);
    formData.append("LastName", data.lastname);
    formData.append("Phone", data.phone);
    formData.append("Plan", data.plan);
    formData.append("Qualification", data.qualification);
    formData.append(
      "Resume",
      data.resume.hasOwnProperty(0) ? data?.resume[0] : ""
    );
    formData.append("path", "/manage-web-service/v1/create-career");
    mutateAsync(formData).then((res) => {
      if (res?.data.status) {
        toast.success(
          "Hey, Thanks for your interest in working with hiringplug™"
        );
        router.push('/thank-you-career.php')
      } else {
        toast.warn("Something went wrong!");
      }
    });
  };
 
  return (
    <div className="w-full flex items-center justify-center flex-col bg-white text-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={` w-full px-2 xl:w-5/12 lg:w-6/12 py-20 md:w-10/12 font-primary   items-center justify-center flex-col gap-2`}
      >
        {/* <CareerPopUp open={open} setOpen={setOpen} /> */}
        <div className="w-full font-primary gap-4 md:w-11/12 flex items-start justify-center flex-col">
          <label className="w-full relative flex items-start justify-center flex-col">
            <Controller
              name={"firstname"}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors["firstname"]}
                  helperText={
                    errors["firstname"] ? errors["firstname"].message : ""
                  }
                  label="First Name"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  className="w-full"
                />
              )}
            />
          </label>
          <label className="w-full flex items-start justify-center flex-col">
            <Controller
              name={"lastname"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors["lastname"]}
                  helperText={
                    errors["lastname"] ? errors["lastname"].message : ""
                  }
                  label="Last Name"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  className="w-full"
                />
              )}
            />
          </label>
          <label className="w-full relative flex items-start justify-center flex-col">
            <Controller
              name={"qualification"}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors["qualification"]}
                  helperText={
                    errors["qualification"]
                      ? errors["qualification"].message
                      : ""
                  }
                  label="What do you bring to the
                        table ?"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  multiline
                  rows={4}
                  className="w-full"
                />
              )}
            />
          </label>
          <label className="w-full flex items-start justify-center flex-col">
            <Controller
              name={"plan"}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors["plan"]}
                  helperText={errors["plan"] ? errors["plan"].message : ""}
                  label="How do you plan to
                        contribute ?"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  multiline
                  rows={4}
                  className="w-full"
                />
              )}
            />
          </label>
          <label className="w-full relative flex items-start justify-center flex-col">
            <Controller
              name={"email"}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors["email"]}
                  helperText={errors["email"] ? errors["email"].message : ""}
                  label="Email"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  className="w-full"
                />
              )}
            />
          </label>
          <label className="w-full relative flex items-start justify-center flex-col">
            <Controller
              name={"phone"}
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors["phone"]}
                  helperText={errors["phone"] ? errors["phone"].message : ""}
                  label="Contact Number"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  type="number"
                  className="w-full"
                />
              )}
            />
          </label>
          <label className="w-full flex items-center text-white justify-start flex-row">
            <label
              className={`${
                errors.resume ? "bg-red-500" : "bg-[#00a63f] "
              } text-white cursor-pointer  px-4 py-1 rounded-[5px]`}
            >
              {errors.resume ? "Resume is required" : "Upload your resume"}
              <input
                hidden
                name="resume"
                {...register("resume", { required: true })}
                type="file"
              />
            </label>
            <p className="ml-3 text-black">
              {watch("resume")?.hasOwnProperty(0)
                ? watch("resume")[0]?.name
                : ""}
            </p>
          </label>
          <button
            variant="contained"
            className="bg-[#00a63f]  py-2 rounded-md hover:bg-[#00a63f] text-white w-full"
            type="submit"
          >
            {status === "loading" ? (
              "Submitting...."
            ) : (
              <>
                Submit Application <SendIcon />
              </>
            )}
          </button>

          <p className="text-[10px] text-gray-700">
            By submitting your information, you agree to Hiringplug
            <a className="underline">Terms of Service</a> and
            <a className="underline">Privacy Policy</a>. You can opt out
            anytime.
          </p>
        </div>
      </form>

     
    </div>
  );
}
