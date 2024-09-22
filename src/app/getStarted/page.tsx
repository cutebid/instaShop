'use client'
import React, { useRef, useState } from "react";
import Header from "../components/Header";
import EmailForm from "../components/EmailForm";
import CustomeButton from "../components/CustomButton";
import BasicInfoForm from "../components/BasicInfoForm";
import ConfirmDetailsForm from "../components/ConfirmDetailsForm";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch, setLoading } from "../store";


interface FormRef {
  submitForm: () => void; 
}

const Page = () => {
  const [step, setStep] = useState(1);
  const emailFormRef = useRef<FormRef | null>(null);
  const basicInfoFormRef = useRef<FormRef | null>(null);
  const confirmDetailsFormRef = useRef<FormRef | null>(null);
  
  const router = useRouter();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);

  const handleSteps = () => {
    if (step === 1 && emailFormRef.current) {
      emailFormRef.current.submitForm(); 
      setStep(step + 1);
    } else if (step === 2 && basicInfoFormRef.current) {
      basicInfoFormRef.current.submitForm(); 
      setStep(step + 1);
    } else if (step === 3) {
      dispatch(setLoading(true)); 
      confirmDetailsFormRef.current?.submitForm();
      setTimeout(() => {
        dispatch(setLoading(false)); 
        router.push("/productEdit");
      }, 1000);
    }
  };

  return (
    <div className="px-5 pb-20 flex flex-col h-screen">
      <Header title="Get Started" />
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-x-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`h-1 w-full rounded-[15px] ${
                index + 1 <= step ? "bg-primary" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        {step === 1 && <EmailForm ref={emailFormRef} />}
        {step === 2 && <BasicInfoForm ref={basicInfoFormRef} />}
        {step === 3 && <ConfirmDetailsForm ref={confirmDetailsFormRef} />}
      </div>
      <CustomeButton btnTitle="Continue" onClick={handleSteps} loading={loading} />
    </div>
  );
};

export default Page;
