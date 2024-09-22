import { AnimatePresence, motion } from "framer-motion";
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
      
        <AnimatePresence>
        {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 10}}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6 }} className="mt-4">
          {children}
        </motion.div>
      )}
        </AnimatePresence>
      </div>
     
    
  );
};

export default Accordion;
