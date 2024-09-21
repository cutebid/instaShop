import React, { forwardRef, useImperativeHandle } from "react";
import instagram from "../public/instagram.png";
import tiktok from "../public/tiktok.png";
import google from "../public/Google.png";
import Image from "next/image";
import CustomInput from "./CustomInput";
import * as Yup from "yup";
import { useFormik} from "formik";
import { useAppDispatch } from "../store";
import { setBasicInfo } from "../store";

export interface apiSignInDataType {
  fullName: string;
  userName: string;
  phoneNumber: string;
  email: string
}

const BasicInfoForm = forwardRef((props, ref) => {
  const socialIcons = [instagram, tiktok, google];

  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: apiSignInDataType,
  ) => {
    console.log(values); // Log form values upon submission
    dispatch(setBasicInfo(values));
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik<apiSignInDataType>({
      initialValues: {
        fullName: "",
        userName: "",
        phoneNumber: "",
        email: ""
      },
      validateOnChange: true,
      validationSchema: Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
      }),
      onSubmit,
    });

  // Expose form submission method to parent
  useImperativeHandle(ref, () => ({
    submitForm() {
      handleSubmit(); // Trigger formik's handleSubmit
    },
  }));
  return (
    <div>
      <h1 className="text-2xl font-medium my-5">Complete profile setup</h1>
      <div>
        <p className="text-sm text-gray-500">
          Connect your socials for quick setup
        </p>
        <div className="flex items-center gap-x-2 mt-4 mb-6">
          {socialIcons.map((icon, index) => (
            <div key={index} className="flex justify-center flex-1 py-3 px-10 rounded-xl bg-gray-100">
              <Image src={icon} alt="social icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-500 text-sm">Or enter manually</p>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <CustomInput
            placeholder="Full name"
            onChange={handleChange("fullName")}
            errorVisible={touched["fullName"]}
            errorMessage={errors["fullName"]}
            onBlur={handleBlur("fullName")}
            value={values.fullName}
          />
          <CustomInput
            placeholder="Username"
            onChange={handleChange("userName")}
            errorVisible={touched["userName"]}
            errorMessage={errors["userName"]}
            onBlur={handleBlur("userName")}
            value={values.userName}
          />
          <CustomInput
            placeholder="Phone number"
            onChange={handleChange("phoneNumber")}
            errorVisible={touched["phoneNumber"]}
            errorMessage={errors["phoneNumber"]}
            onBlur={handleBlur("phoneNumber")}
            value={values.phoneNumber}
            type="number"
            className="w-full"
          />
          <CustomInput placeholder="Email"
          onChange={handleChange('email')}
          errorVisible={touched['email']}
          errorMessage={errors['email']}
          onBlur={handleBlur('email')}
          value={values.email} type="email" />
        </form>
      </div>
    </div>
  );
});


BasicInfoForm.displayName='BasicInfoForm'

export default BasicInfoForm;
