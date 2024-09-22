"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import productImage from "../public/product-image.png";
import profileIcon from "../public/profile-icon.png";
import { IoArrowRedoOutline, IoHeartOutline } from "react-icons/io5";
import { RatingStar } from "react-ts-rating-star";
import Accordion from "../components/Accordion";
import CustomButton from "../components/CustomButton";
import { useRouter } from "next/navigation";

const ProductPreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const router = useRouter();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
 
  const fullText =
    "Wholesale and drop shipping are both welcomed. For wholesale, we will offer discount or free express shipping which only takes 3-7 days to arrive. For drop shipping, we could send the goods to your customers directly and won't leave information about us if you'd like to. How can track my parcel? You can track your parcel on the following website using your tracking number: www.17track.net/en (Copied to the browser to open). What can I do when purchase protection time is running out? If your purchase protection time is running out, please contact us and we can help you to extend it. So your money will not go to my account.";

  const maxLength = 150;

  const comments = [
    "Quality goods",
    "Nice designs",
    "Quality goods",
    "Nice designs",
    "Quality goods",
    "Nice designs",
  ];

  return (
    <div className="pb-8">
      <div className="px-4">
        <Header title="Product preview" verticalLine />
      </div>
      <div>
        <div className="flex items-center justify-center w-full">
          <Image
            src={productImage}
            alt="product image"
            width={360}
            height={360}
            className="object-cover w-full "
          />
        </div>

        <div className="px-4 mt-4">
          <div className="flex justify-between">
            <p className="text-sm font-medium w-4/5 ">
              Gucci bag – the epitome of luxury and sophistication
            </p>
            <div className="flex items-center gap-x-1 ">
              <span className="bg-gray-100 h-9 w-9 rounded-full flex items-center justify-center">
                <IoArrowRedoOutline size={20} color="gray" />
              </span>
              <span className="bg-gray-100 h-9 w-9 rounded-full flex items-center justify-center">
                <IoHeartOutline size={20} color="gray" />
              </span>
            </div>
          </div>
          <div className="flex justify-between my-3">
            <div className="flex items-center gap-x-1">
              <span className="text-xl font-medium">₦18.0</span>
              <span className="text-xs text-[#ACACAC]">₦28.0</span>
              <span className="py-[2px] px-2 bg-primary text-white rounded-3xl text-[10px]">
                25% OFF
              </span>
            </div>
            <div className="flex items-center text-sm text-[#ACACAC] gap-x-1">
              <RatingStar
                iconWidth="1.5em"
                averageRating={3.81}
                iconHoverEffect="scaling"
              />
              (5 sold)
            </div>
          </div>
        </div>
        <Accordion
          title="Select variants"
          isOpen={openIndex === 0}
          onClick={() => toggleAccordion(0)}
        >
          <div>
            <div className="text-[10px] font-medium text-gray-500">
              Size: SMALL
            </div>
            <div className="flex gap-x-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  onClick={() => setActiveFilter(index + 1)}
                  key={index}
                  className={` flex-1 flex justify-center bg-black py-1 px-2 rounded-[90px] text-xs cursor-pointer mt-2 mb-4 ${
                    activeFilter == index + 1
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  Filter
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-medium text-gray-500">
              Color: White
            </div>
            <div className="flex gap-x-3">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 py-1 px-2 rounded-[90px] text-xs cursor-pointer mt-2 mb-4"
                >
                  Filter
                </div>
              ))}
            </div>
          </div>
        </Accordion>
        <Accordion
          title="Product description"
          isOpen={openIndex === 1}
          onClick={() => toggleAccordion(1)}
        >
          <div className="text-xs">
            <p className="text-gray-600">
              {isExpanded ? fullText : `${fullText.substring(0, maxLength)}...`}
            </p>
            <span
              className="text-primary cursor-pointer mt-2"
              onClick={toggleReadMore}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </span>
          </div>
        </Accordion>
        <Accordion
          title="About this vendor"
          isOpen={openIndex === 2}
          onClick={() => toggleAccordion(2)}
        >
          <div>
            <div className="flex items-center gap-x-2">
              <Image
                src={productImage}
                alt="product image"
                width={52}
                height={52}
                className="rounded-full"
              />
              <div className="flex-1">
                <h4 className="text-xs text-gray-700">Gucci Store</h4>
                <div className="flex items-center gap-x-1 text-gray-400">
                  <span className="text-xs">Fashion</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center text-[10px]">
                    <RatingStar
                      iconWidth="1.5em"
                      numberOfStars={1}
                      iconHoverEffect="scaling"
                    />
                    5.4
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center text-[10px]">
                    <Image
                      src={profileIcon}
                      alt="profile image"
                      width={14}
                      height={14}
                    />
                    100k
                  </span>
                </div>
              </div>
              <div className="text-primary text-xs font-medium  cursor-pointer">
                Follow
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Vendor description: You can track your parcel on the following
              website using your tracking number: www.17track.net/en  (Copied to
              the browser to open)
            </p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-100 py-1 px-2 rounded-[90px] text-black text-xs cursor-pointer flex justify-center "
                >
                  {comment}
                </div>
              ))}
            </div>
          </div>
        </Accordion>
        <div className="mt-5 px-4">
          <CustomButton btnTitle="Publish" onClick={() => router.push("/")} />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
