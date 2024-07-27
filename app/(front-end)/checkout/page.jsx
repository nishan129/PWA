"use client";

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '@/redux/slices/checkoutSlice';
import CartBanner from '@/components/Checkout/CartBanner';
import OrderSummary from '@/components/Checkout/OrderSummary';
import PaymentMethod from '@/components/Checkout/PaymentMethod';
import CustomerList from '@/components/Checkout/StepForm';
import StepIndicator from '@/components/Checkout/Steps';
import React, { useEffect } from 'react';

export default function Page() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.checkout.currentStep);

  const handleSetCurrentStep = (step) => {
    dispatch(setCurrentStep(step));
  };

  useEffect(() => {
    // Ensure the current step is always valid
    if (![1, 2, 3].includes(currentStep)) {
      handleSetCurrentStep(1);
    }
  }, [currentStep]);

  return (
    <div className='dark:bg-slate-900 min-h-screen'>
      {/* STEPS */}
      <div className='bg-slate-50'>
        <StepIndicator currentStep={currentStep} setCurrentStep={handleSetCurrentStep} />
      </div>
      {/* BANNER */}
      {currentStep !== 1 && (
        <div className='w-full py-8 bg-white rounded-lg shadow sm:p-6 md:p-8'>
          <CartBanner />
        </div>
      )}
      {/* FORM */}
      {currentStep === 1 && (
        <div className='py-8'>
          <CustomerList />
        </div>
      )}
      {/* ORDER SUMMARY */}
      {currentStep === 2 && (
        <div className='py-8'>
          <OrderSummary setCurrentStep={handleSetCurrentStep} />
        </div>
      )}
      {/* PAYMENT METHOD */}
      {currentStep === 3 && (
        <div className='py-8'>
          <PaymentMethod />
        </div>
      )}
    </div>
  );
}
