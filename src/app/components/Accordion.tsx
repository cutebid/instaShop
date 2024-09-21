import React from "react";
import { GoChevronDown } from "react-icons/go";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-y border-gray-200 pt-6 pb-4 px-4 ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="font-medium text-sm">{title}</h3>
        <div> <GoChevronDown size={24} color="gray" /></div>
      </div>
      {isOpen && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
