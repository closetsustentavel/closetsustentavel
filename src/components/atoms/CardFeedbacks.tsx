"use client";

export type CardFeedbacksType = {
  color: string;
  text: string;
  name: string;
};

export function CardFeedbacks({ color, text, name }: CardFeedbacksType) {
  return (
    <div className="">
      <div
        style={{ backgroundColor: `${color}` }}
        className={`relative w-[350px] h-[250px] text-[#F3F1E0] p-5`}
      >
        <p>{text}</p>
        <div className="absolute bottom-20 w-[90%]">
          <div className="h-[1px] bg-[#1F1B1D] opacity-20"></div>
        </div>
        <div className="absolute bottom-10 w-[90%]">
          <span className="">{name}</span>
        </div>
      </div>
    </div>
  );
}
