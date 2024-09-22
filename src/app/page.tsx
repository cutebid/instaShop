"use client";
import Image from "next/image";
import shoppingImage from "./public/shopping-sale-icon.png";
import { GoCheckCircle } from "react-icons/go";
import CustomeButton from "./components/CustomButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const features = [
    "Reach Millions of Shoppers",
    "Easy Product Listing",
    "Secure and Fast Payments",
    "Boost Your Visibility",
  ];
  return (
    <div className="px-8 pt-12 pb-10 h-full  ">
      <div className="">
        <div className="flex justify-center items-center">
        <Image
          src={shoppingImage}
          alt="shopping image"
          width={296}
          height={210}
          className="object-cover"
        />
        </div>
        <div className="text-center mt-6 ">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-sm mt-2">
            The safest platfrom to shop from social media vendors
          </p>
          <ul className="py-3 px-4 border-[0.5px] border-primary bg-light_pink rounded-xl mt-5">
            {features.map((feature, index) => (
              <li key={index} className={`flex items-center gap-x-2 text-sm font-medium ${index != features.length-1 && 'mb-3'}`}>
                <GoCheckCircle size={18} color="#8A226F" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-24">
      <CustomeButton btnTitle="Get started" onClick={() => router.push('/getStarted')} />
      </div>
      
    </div>
  );
}
