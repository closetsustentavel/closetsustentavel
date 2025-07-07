"use client"

export type CardFeedbacksType={
    color:string,
    text:string,
    name:string
}

export function CardFeedbacks({color,text,name}:CardFeedbacksType){
    return(
        <div>
            <div style={{backgroundColor:`${color}`}}className={`w-[350px] h-[250px] text-[#F3F1E0] p-5`}>
                <p>{text}</p>
                <span>{name}</span>
            </div>
        </div>
    )

}