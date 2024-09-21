import React from "react";
import { IoCloseOutline, IoEllipsisHorizontalSharp, IoAddOutline } from "react-icons/io5";

const InventoryVariation = () => {
  const variationDetails = [
    {
      id: 1,
      option: "option 1",
      title: "Color",
      variant: ["Red", "White", "Black"],
    },
    {
        id: 2,
        option: "option 2",
        title: "Size",
        variant: ["Large", "Small", "XL"],
      },
  ];
  return (
    <div>
      <div className=" mt-4">
        {variationDetails.map(({ option, title, variant, id }) => (
          <div key={id} className="mb-2 border border-gray-300 px-3 py-2 rounded-xl">
            <div className="border-b border-gray-100 pb-1 ">
              <div className="flex items-center justify-between">
                <p className="text-[10px]  text-gray-500">{option}</p>
                <IoEllipsisHorizontalSharp size={16} color="gray" />
              </div>
              <p className="text-sm font-medium text-gray-700">{title}</p>
            </div>

            <div className="mt-2 mb-4 flex gap-x-2">
              {variant.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-x-2 text-xs text-gray-700 bg-gray-100 rounded-[90px] px-2 py-1 cursor-pointer"
                >
                  {item} <IoCloseOutline size={20} color="gray" />
                </div>
              ))}
            </div>
            <p className="font-medium text-gray-500 text-xs">Enter values</p>
          </div>
        ))}
      </div>
      <div className="text-primary bg-gray-100 text-sm font-medium rounded-[90px] py-3 flex justify-center cursor-pointer mt-4 gap-x-2"><IoAddOutline size={20} /> Add new option</div>
    </div>
  );
};

export default InventoryVariation;
