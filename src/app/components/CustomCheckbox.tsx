'use client'
import React from "react";

interface CustomCheckboxProps {
  label?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  className?: string; // Optional class name for additional customization
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
  className = "",
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="w-6 h-6 accent-primary cursor-pointer"
      />
      <label className="cursor-pointer text-sm text-gray-500">{label && label}</label>
    </div>
  );
};

export default CustomCheckbox;
