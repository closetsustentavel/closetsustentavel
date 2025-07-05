"use client"
import Image from "next/image"
export type CardProductType= {
    image: string,
    title: string,
    description: string
}
export function CardProduct({image,title,description}:CardProductType){
    return(
        <div className="w-full">
            <div className="w-full">
            <Image src={image} alt="image_product"/>

            </div>
            <div className="bg-[#DC5812] h-20 p-2">
                <h3 className="text-[#F3F1E0]">{title}</h3>
                <p className="text-[#F3F1E0]">{description}</p>
            </div>
        </div>
    )
}