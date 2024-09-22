import { ChangeEventHandler, FocusEventHandler } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { notificationVariant } from "../utils/helpers";

interface Props {
  errorMessage?: string;
  errorVisible?: boolean;
  className?: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  type?: string;
  label?: string;
  width?: string;
}

const CustomInput = ({
  name,
  errorMessage,
  errorVisible,
  onBlur,
  onChange,
  placeholder,
  disabled,
  value,
  type = "text",
  label,
  width,
  className,
  ...props
}: Props) => {
  const inputClasses = classNames(
    "py-3 px-2 mb-3 border border-gray rounded-xl outline-none input ",
    className,
    {
      "border-red-500": errorVisible,
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  return (
    <div>
      {label && (
        <label htmlFor={name} className="font-medium mb-[8px]">
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        style={{ width: width || "100%" }}
        {...props}
      />

      <AnimatePresence>
        {errorVisible && errorMessage && (
          <motion.div
            variants={notificationVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-red-500 text-xs mb-2"
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FormInput = CustomInput;
export default CustomInput;
