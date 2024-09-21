import React from "react";
import { useRouter } from "next/navigation";
import { BiArrowBack, BiDotsVerticalRounded } from "react-icons/bi";

interface HeaderProps {
  title?: string;
  verticalLine?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, verticalLine }) => {
  const router = useRouter();

  const handleBack= ()=> {
    router.back()
  }
  return (
    <div className="flex items-center my-6">
      <div className="flex items-center gap-x-2 flex-1 cursor-pointer" onClick={handleBack}>
        <BiArrowBack size={18} color="grey" />
        <h4 className="text-base font-medium">{title}</h4>
      </div>

      {verticalLine && <BiDotsVerticalRounded size={24} />}
    </div>
  );
};

export default Header;
