"use client";
import { productData } from "@/utils/data/products-data";
import { CardProduct } from "@/components/atoms/CardProduct";
import Link from "next/link";
export function Products() {
  return (
    <div id="products" className="flex flex-col mt-12">
      <div className="m-auto p-5 lg:ml-40 xl:ml-56">
        <h3 className="text-2xl text-wrap md:text-5xl 3xl:text-[100px]">
          Conheça o Closet Sustentável
        </h3>
      </div>
      <div className="w-screen p-5 flex flex-col m-auto lg:px-20 lg:pt-20 sm:flex-row sm:flex-wrap">
        {productData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center p-5 sm:w-1/2 2xl:w-1/2"
              data-aos="fade-right"
            >
              <CardProduct
                image={item.image}
                title={item.title}
                description={item.description}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              ></CardProduct>
            </div>
          );
        })}
      </div>

      <Link
        href="https://wa.me/5571982302442?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20ter%20algumas%20informa%C3%A7%C3%B5es."
        target="_blank"
      >
        <div className="flex justify-center bg-[#DC5812] w-50 md:w-[250px] p-[25px] !m-auto text-[#F3F1E0]">
          <span>SAIBA MAIS</span>
        </div>
      </Link>
    </div>
  );
}
