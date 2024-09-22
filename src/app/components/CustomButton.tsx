import React from "react";
import classNames from "classnames";
import ClipLoader from "react-spinners/ClipLoader";

interface ButtonProps {
  btnTitle: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  width?: string;
  shadow?: boolean;
  loading?: boolean;
  color?: string
}

const CustomeButton: React.FC<ButtonProps> = ({
  onClick,
  btnTitle,
  className,
  width,
  loading,
  color,
  shadow = true,
}) => {
  const btnClasses = classNames(
    `bg-primary font-medium text-sm p-[10px] rounded-[90px] hover:scale-110 ${
      shadow && "btnShadow"
    } `,
    className
  );

  return (
    <div className=" hover:sca">
      <button
        className={btnClasses}
        style={{ width: width || "100%" , color: color || 'white'}}
        onClick={onClick}
       
      >
        {loading ? (
          <ClipLoader
          color="white"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          btnTitle
        )}
      </button>
    </div>
  );
};

export default CustomeButton;
