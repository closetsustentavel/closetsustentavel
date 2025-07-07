"use client"
import { CardFeedbacks } from "@/components/atoms/CardFeedbacks"
import { feedBacks } from "@/utils/data/feedbacks-data"
import rowColumn from "@/assets/columnFeedbacks.svg"
export function Feedbacks(){
    return(
        <div className="mt-50">
            <div className="ml-[355px]">
                <h3 className="text-6xl">Feedbacks</h3>
            </div>
            <div className="flex flex-wrap flex-row gap-5 justify-center mt-20">
                {feedBacks.map((item,index)=>{
                    return(
                        <div key={index} className="">
                        <CardFeedbacks color={item.color} text={item.text} name={item.name}/>
                        </div>
                    )
                })}
            </div>
            <div  className="w-screen mt-20"
                style={{
                    backgroundImage: `url(${rowColumn.src})`, 
                    backgroundRepeat: 'repeat-x', 
                    backgroundSize: 'auto', 
                    height: '200px',
                }}>
            </div>
        </div>
    )
}