"use client";
import Image from "next/image";
export type CardProductType = {
  image: string;
  title: string;
  description: string;
};
export function CardProduct({ image, title, description }: CardProductType) {
  return (
    <div className="">
      <div className="w-full">
        <Image src={image} alt="image_product" />
      </div>
      <div className="bg-[#DC5812] h-23 p-2 md:h-25 lg:h-20">
        <h3 className="text-[#F3F1E0] text-[16px md:text-[18px]">{title}</h3>
        <p className="text-[#F3F1E0] text-[12px] md:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
}
