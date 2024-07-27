import React from 'react';
import LoginForm from '@/components/frontend/LoginForm';

export default function Login() {
  return (
    <section className=" dark:bg-gray-900 flex flex-col items-center justify-center py-8">
      <div className="flex flex-col items-center justify-center px-6 mx-auto sm:max-w-md lg:max-w-lg">
        
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-10 space-y-6 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white text-center">
              Login to Account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
