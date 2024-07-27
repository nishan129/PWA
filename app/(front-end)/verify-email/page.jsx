import { Info } from 'lucide-react'
import React from 'react'

export default function VerifyMail() {
  return (
    <div id="alert-additional-content-1" className="p-6 mb-4 text-green-600 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <div className="flex items-center">
    <Info />
    <span className="sr-only">Info</span>
    <h3 className="text-lg mx-2 font-medium"> Email Sent-Verify your Account</h3>
  </div>
  <div className="mt-2 mb-4 text-sm">
    Thank you for creating an account with Us, 
    we have sent you an email, 
    check in your inbox and click on the link
    to complete your onboarding process.
  </div>
</div>
  )
}
