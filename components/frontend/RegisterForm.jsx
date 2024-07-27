"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";

export default function RegisterForm({ role = 'KIRANA' }) {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  async function onSubmit(data) {
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, role }),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData)
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        // if role = KIRANA => home page 
        // if role = WHOLESALER => Onboarding
        role === "KIRANA" ? router.push(`/`) : router.push(`/verify-email`);
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          console.error("Server Error:", responseData.error);
          toast.error("Oops, Something went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something went wrong, Please try again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput 
        label=""
        name="role"
        register={register}
        errors={errors}
        type="hidden"
        defaultValue={role}
        className="sm:col-span-2 mb-3"
      />
      <TextInput 
        label="Full Name" 
        name="name"
        register={register}
        errors={errors}
        type="text"
        className="sm:col-span-2 mb-3"
      />
      <TextInput 
        label="Email Address" 
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2 mb-3"
      />
      <TextInput 
        label="GST Number" 
        name="gstNumber"
        register={register}
        errors={errors}
        type="text"
        className="sm:col-span-2 mb-3"
      />
      {emailErr && <small className="text-red-600 -mt-2 mb-2">{emailErr}</small>}
      <TextInput 
        label="Password" 
        name="password"
        register={register}
        errors={errors}
        type="password"
        className="sm:col-span-2 mb-3"
      />
      <SubmitButton 
        isLoading={loading} 
        buttonTitle="Register" 
        LoadingButtonTitle="Registering, Please wait..."
      />
      <div className="flex items-center">
        <div className="w-full bg-slate-500 h-[1px]"></div>
        <span className="mx-2">or</span>
        <div className="w-full bg-slate-500 h-[1px]"></div>
      </div>
      {/* Uncomment if you want to add social login buttons
      <div>
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full text-slate-950 bg-white hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center flex items-center dark:focus:ring-slate-100 mb-4 border border-slate-200"
        >
          <FaGoogle className="mr-2 text-red-600 w-4 h-4" />
          Sign up with Google
        </button>
      </div>
      */}
      <p className="text-sm font-light text-gray-700 dark:text-gray-400 py-2">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-purple-600 hover:underline dark:text-purple-500"
        >
          Login
        </Link>
      </p>
      {role === "KIRANA" ? (
        <p className="text-sm font-light text-gray-900 dark:text-gray-400 py-2">
      Are you Wholesaler?{" "}
      <Link
        href="/register-wholesaller"
        className="font-medium text-green-600 hover:underline dark:text-green-500"
      >
        Register Here
      </Link>
    </p>):<p className="text-sm font-light text-gray-900 dark:text-gray-400 py-2">
      Are you Retailer ?{" "}
      <Link
        href="/register"
        className="font-medium text-green-600 hover:underline dark:text-green-500"
      >
        Register Here
      </Link>
    </p>}
    </form>
  );
}
