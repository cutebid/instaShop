import React, { forwardRef, useImperativeHandle } from "react";
import avatar from "../public/avatar.png";
import CustomInput from "./CustomInput";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "../store";
import { setConfirmDetails } from "../store";

export interface apiSignInDataType {
  storeName: string;
  storeTag: string;
  storePhone: string;
  storeEmail: string;
  category: string;
}

const ConfirmDetailsForm = forwardRef((props, ref) => {
  const dispatch = useAppDispatch();

  const onSubmit = async (values: apiSignInDataType) => {
    dispatch(setConfirmDetails(values));
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik<apiSignInDataType>({
      initialValues: {
        storeName: "",
        storeTag: "",
        storePhone: "",
        storeEmail: "",
        category: "",
      },
      validateOnChange: true,
      validationSchema: Yup.object().shape({
        storeName: Yup.string().required("Store name is required"),
        storeTag: Yup.string().required("Store tag is required"),
        storePhone: Yup.string().required("Store phone is required"),
        storeEmail: Yup.string()
          .required("Store email is required")
          .email("Invalid email"),
        category: Yup.string().required("username is required"),
      }),
      onSubmit,
    });

  // Expose form submission method to parent
  useImperativeHandle(ref, () => ({
    submitForm() {
      handleSubmit();
    },
  }));

  return (
    <div>
      <div className="border border-gray-200 rounded-xl px-1 py-4 flex flex-col justify-center items-center mt-5 cursor-pointer">
        <Image
          src={avatar}
          alt="social icons"
          width={80}
          height={80}
          className="object-cover"
        />
        <p className="text-xs text-gray-400 mt-2">Upload store logo</p>
      </div>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <CustomInput
            placeholder="Store name"
            onChange={handleChange("storeName")}
            errorVisible={touched["storeName"]}
            errorMessage={errors["storeName"]}
            onBlur={handleBlur("storeName")}
            value={values.storeName}
          />
          <CustomInput
            placeholder="Store tag name"
            onChange={handleChange("storeTag")}
            errorVisible={touched["storeTag"]}
            errorMessage={errors["storeTag"]}
            onBlur={handleBlur("storeTag")}
            value={values.storeTag}
          />
          <CustomInput
            placeholder="Store phone number"
            onChange={handleChange("storePhone")}
            errorVisible={touched["storePhone"]}
            errorMessage={errors["storePhone"]}
            onBlur={handleBlur("storePhone")}
            value={values.storePhone}
          />
          <CustomInput
            placeholder="Store email"
            type="email"
            onChange={handleChange("storeEmail")}
            errorVisible={touched["storeEmail"]}
            errorMessage={errors["storeEmail"]}
            onBlur={handleBlur("storeEmail")}
            value={values.storeEmail}
          />
          <CustomInput
            placeholder="Category"
            onChange={handleChange("category")}
            errorVisible={touched["category"]}
            errorMessage={errors["category"]}
            onBlur={handleBlur("category")}
            value={values.category}
          />
        </form>
      </div>
    </div>
  );
});

ConfirmDetailsForm.displayName = "confirmDetailsForm";
export default ConfirmDetailsForm;
