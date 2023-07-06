import { typesOfServices } from "@/helpers/mockData/servicesData";
import React from "react";

const FirstSection = () => {
  return (
    <div className="bg-bottom py-32 lg:bg-[url('/_next/static/media/bg-lines.0efc976a.svg')] bg-no-repeat bg-cover">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] mx-auto place-content-center items-center ">
        {typesOfServices?.map((data) => {
          return (
            <div
              key={data?.id}
              className="p-10 bg-white bg-opacity-60 white-bg-shadow"
            >
              <h1 className="  text-xl md:text-3xl font-medium mb-10 text-accent_color text-center">
                {data?.title}
              </h1>

              <p className="font-lora md:text-xl text-center max-w-[400px] mx-auto ">
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
