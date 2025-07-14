"use client";
import { productData } from "@/utils/data/products-data";
import { CardProduct } from "@/components/atoms/CardProduct";
export function Products() {
  return (
    <div id="products" className="flex flex-col mt-12">
      <div className="m-auto p-5 lg:ml-40 xl:ml-56">
        <h3 className="text-2xl text-wrap md:text-5xl 3xl:text-[100px]">
          Conheça o Closet Sustentável
        </h3>
      </div>
      <div className="w-screen p-5 flex flex-col m-auto lg:p-20 sm:flex-row sm:flex-wrap">
        {productData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center p-5 sm:w-1/2 2xl:w-1/2"
            >
              <CardProduct
                image={item.image}
                title={item.title}
                description={item.description}
              ></CardProduct>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center bg-[#DC5812] w-50 md:w-[250px] p-[25px] !m-auto text-[#F3F1E0]">
        <a href="">
          <span>Saiba Mais</span>
        </a>
      </div>
    </div>
  );
}
