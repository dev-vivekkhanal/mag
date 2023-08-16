import { typesOfServices } from "@/helpers/mockData/servicesData";
import React from "react";
import bg_art from "../../assets/home/bg-waves.png";

const FirstSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_art?.src})` }}
      className="bg-bottom py-32  bg-no-repeat bg-cover"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] mx-auto place-content-center items-center ">
        {typesOfServices?.map((data) => {
          return (
            <div key={data?.id} className="p-10  ">
              <h1 className=" font-lora text-xl md:text-3xl font-medium mb-10 text-accent_color text-center">
                {data?.title}
              </h1>

              <p className=" md:text-xl text-center max-w-[400px] mx-auto ">
                {data?.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FirstSection;
