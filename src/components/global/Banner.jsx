import Image from "next/image";
import React from "react";

const Banner = (props) => {
  return (
    <div className="w-full  relative">
      <Image
        fill
        className={`  object-center object-cover pointer-events-none z-[-10]  transition-all duration-1000`}
        src={props?.img?.src}
        alt="bg image"
        priority
      />
      <h1 className="text-5xl text-center py-32 pb-44 pt-64 font-semibold font-playfair">
        {props?.pageName}
      </h1>
    </div>
  );
};

export default Banner;
