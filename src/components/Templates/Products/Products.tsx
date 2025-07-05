"use client"
import { productData } from "@/utils/data/products-data"
import { CardProduct } from "@/components/atoms/CardProduct"
export function Products(){
    return(
        <div className="flex flex-col mt-50 !ml-0">
            <div>
                <h3 className="text-6xl">Conheça o Closet Sustentável</h3>
            </div>
                <div className="w-[1250px] flex flex-wrap">
                {productData.map((item,index)=>{
                    return(
                        <div key={index} className="flex-1/2 justify-center p-5">
                            <CardProduct image={item.image} title={item.title} description={item.description}></CardProduct>
                        </div>
                    )
                })}
            </div>
            
            <div className="flex justify-center bg-[#DC5812] w-[250px] p-[25px] !m-0">
                <span>Saiba Mais</span>
            </div>
            
        </div>
    )
}

//bg-[#DC5812]