import { typesOfServices } from "@/helpers/mockData/servicesData";
import React from "react";
import bg_art from "../../assets/home/bg-waves.png";
import Image from "next/image";

import img1 from "../../assets/services/weddings.svg";
import img2 from "../../assets/services/festivals.svg";
import img3 from "../../assets/services/corporate.svg";
import img4 from "../../assets/services/birthdays.svg";
import img5 from "../../assets/services/nonprofit.svg";

const FirstSection = () => {
  const imgArr = [img1, img2, img3, img4, img5];
  return (
    <div className=" py-32 relative">
      <Image src={bg_art} fill className="w-full opacity-30 hidden lg:block" />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-20 w-[80%] mx-auto ">
        {typesOfServices?.map((data, index) => {
          return (
            <div key={data?.id} className="p-10 ">
              <Image src={imgArr[index]} alt=".." className="mx-auto" />
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
