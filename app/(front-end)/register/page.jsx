import React from 'react';
import RegisterForm from "@/components/frontend/RegisterForm";

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center py-8">
      <div className="flex flex-col items-center justify-center px-6 mx-auto sm:max-w-md lg:max-w-lg">
        <div className="w-full bg-white rounded-lg shadow-2xl border dark:text-gray-900 md:mt-0 dark:bg-white dark:border-green-500">
          <div className="p-10 space-y-6  md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-900 text-center">
              Create a new account
            </h1>
            <RegisterForm role="KIRANA" />
          </div>
        </div>
      </div>
    </section>
  );
}
