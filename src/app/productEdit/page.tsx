"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import { IoCheckmark } from "react-icons/io5";
import Accordion from "../components/Accordion";
import CustomInput from "../components/CustomInput";
import CustomTextArea from "../components/CustomTextArea";
import Image from "next/image";
import cameraIcon from "../public/camera-icon.png";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomeButton from "../components/CustomButton";
import { useRouter } from "next/navigation";
import withAuth from "../utils/withAuth";
import InventoryVariation from "../components/InventoryVariation";
import {IoEllipsisHorizontalSharp} from "react-icons/io5";
import Switch from "react-switch";


const ProductEdit: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showVariation, setShowVariation] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [checkedStates, setCheckedStates] = useState<boolean[]>([]);
  const router = useRouter();

  const handleChange = (index: number) => {
    setCheckedStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; 
      return newState;
    });
  };

  const onChange = (value: boolean) => {
    if (value) {
      setShowVariation(true);
    } else {
      setShowVariation(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files); // Convert FileList to array
      console.log(selectedImages);
      setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col h-screen pb-10">
      <div className="px-4">
        <Header title="Create a product" verticalLine />
        <div className="flex justify-between text-xs mb-2">
          <div className="flex items-center gap-x-1 border border-gray-300 rounded-[90px] py-1 px-2 text-gray-500">
            Draft <IoCheckmark size={16} color="grey" />
          </div>
          <div
            onClick={() => router.push("/productPreview")}
            className="text-primary font-medium"
          >
            Preview product
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Accordion
          title="Basic Details"
          isOpen={openIndex === 0}
          onClick={() => toggleAccordion(0)}
        >
          <CustomInput placeholder="Product Title" />
          <CustomTextArea placeholder="Product description" />
          <div className="flex gap-x-2">
            <div className="flex-1">
              <CustomInput placeholder="Price" />
            </div>
            <div className="flex-1">
              <CustomInput placeholder="Old price" />
            </div>
          </div>
          <CustomTextArea placeholder="Product collection" />
          <CustomInput placeholder="Inventory stocks" />
        </Accordion>
        <Accordion
          title="Product Images"
          isOpen={openIndex === 1}
          onClick={() => toggleAccordion(1)}
        >
          <div>
            {/* Preview selected images */}
            {selectedImages.length > 0 && (
              <div className="mt-4 ">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative flex items-center justify-between mb-4">
                    <div className="flex items-center gap-x-2">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Selected image ${index + 1}`}
                        className="w-[60px] h-[60px] rounded-lg object-cover"
                      />
                      <p>{image.name}</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <IoEllipsisHorizontalSharp  size={16} color="gray" />
                      <Switch
                      onChange={() => handleChange(index)}
                      checked={checkedStates[index] || false} // Check the state for each switch
                      onColor="#8A226F"
                      uncheckedIcon={false}
                      checkedIcon={false}
                    />
                     
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col items-center gap-x-2 rounded-[90px] bg-gray-100 p-3 justify-center cursor-pointer">
              <label
                htmlFor="fileInput"
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <p className="text-primary text-sm font-medium">Add image</p>
                <Image
                  src={cameraIcon}
                  alt="gallery icon"
                  width={20}
                  height={20}
                />
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </Accordion>
        <Accordion
          title="Inventory variations"
          isOpen={openIndex === 2}
          onClick={() => toggleAccordion(2)}
        >
          <div>
            <CustomCheckbox
              label="This product is variable; has different colors, sizes, weight, materials, etc."
              onChange={onChange}
            />
            {showVariation && <InventoryVariation />}
          </div>
        </Accordion>
        <Accordion
          title="Shipping"
          isOpen={openIndex === 3}
          onClick={() => toggleAccordion(3)}
        >
          <div>
            <div className="flex items-center justify-between">
              <p className="flex-grow text-xs">Self shipping 5 days</p>
              <div className="flex-shrink-0">
                <CustomCheckbox className="w-6 h-6" onChange={onChange} />
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <p className="flex-grow text-xs">InstaShop shipping</p>
              <div className="flex-shrink-0">
                <CustomCheckbox className="w-6 h-6" onChange={onChange} />
              </div>
            </div>

            <CustomInput placeholder="Inventory stocks" className="mt-3" />
          </div>
        </Accordion>
      </div>
      <div className="flex item-center gap-x-2 px-4">
        <div className="flex-1">
          <CustomeButton
            shadow={false}
            btnTitle="Cancel"
            className="bg-transparent border border-primary"
            color="#8A226F"
          />
        </div>

        <div className="flex-1">
          <CustomeButton btnTitle="Save" />
        </div>
      </div>
    </div>
  );
};

ProductEdit.displayName = "ProductEdit";

export default withAuth(ProductEdit);
