import React, { forwardRef, useImperativeHandle } from "react";
import CustomInput from "./CustomInput";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAppDispatch } from "../store";
import { setEmail } from "../store";

export interface apiSignInDataType {
  email: string;
}

// Use forwardRef to expose the form submission method
const EmailForm = forwardRef((props, ref) => {
  const dispatch = useAppDispatch();

  const onSubmit = async (values: apiSignInDataType) => {
    console.log(values);  // Log form values upon submission
    dispatch(setEmail(values.email))
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik<apiSignInDataType>({
    initialValues: {
      email: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      email: Yup.string().required().email().label('Email'),
    }),
    onSubmit,
  });

  // Expose form submission method to parent
  useImperativeHandle(ref, () => ({
    submitForm() {
      handleSubmit(); // Trigger formik's handleSubmit
    }
  }));

  return (
    <div>
      <h1 className="text-2xl font-medium my-5">
        Enter your phone number or email to get started
      </h1>
      <p className="text-sm text-gray-500">
        We will send you a verification code for confirmation
      </p>
      <div className="mt-5">
        <form>
          <CustomInput
            placeholder="Enter phone number or email"
            className="w-full"
            onChange={handleChange('email')}
            errorVisible={touched['email']}
            errorMessage={errors['email']}
            onBlur={handleBlur('email')}
            value={values.email}
          />
        </form>
      </div>
    </div>
  );
});

EmailForm.displayName = 'EmailForm'

export default EmailForm;
