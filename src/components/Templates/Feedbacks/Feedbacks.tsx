"use client";
import { CardFeedbacks } from "@/components/atoms/CardFeedbacks";
import { feedBacks } from "@/utils/data/feedbacks-data";
import rowColumn from "@/assets/columnFeedbacks.svg";
export function Feedbacks() {
  return (
    <div className="mt-30" data-aos="fade-right">
      <div className="m-auto p-5 lg:ml-40 xl:ml-56">
        <h3 className="text-3xl md:text-5xl 3xl:text-[100px]">Feedbacks</h3>
      </div>
      <div className="flex flex-wrap flex-row gap-5 justify-center mt-20">
        {feedBacks.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <CardFeedbacks
                color={item.color}
                text={item.text}
                name={item.name}
              />
            </div>
          );
        })}
      </div>
      <div
        className="w-screen mt-20 h-[50px] sm:h-[120px]"
        style={{
          backgroundImage: `url(${rowColumn.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
