import React from "react";

interface TextAreaProps {
    placeholder: string;
 
  }

const CustomTextArea:React.FC<TextAreaProps> = ({placeholder}) => {
  return (
    <div>
      <textarea
        className="py-3 px-2 mb-2 border border-gray rounded-xl outline-none w-full input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomTextArea;
