import React from 'react';
import RegisterForm from "@/components/frontend/RegisterForm";

export default function page() {
  return (
    <section className=" dark:bg-gray-900  flex flex-col items-center justify-center py-8">
      <div className="flex flex-col items-center justify-center px-6 mx-auto sm:max-w-md lg:max-w-lg">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          E-App
        </a>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white text-center">
              Create Wholesaler account
            </h1>
            <RegisterForm role="WHOLESALER" />
          </div>
        </div>
      </div>
    </section>
  );
}
