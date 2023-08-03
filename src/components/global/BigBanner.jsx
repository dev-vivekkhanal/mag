import Image from "next/image";
import React from "react";

const BigBanner = (props) => {
  return (
    <section className="w-full  relative">
      <Image
        fill
        className={`  object-bottom object-cover pointer-events-none z-[-10]  transition-all duration-1000`}
        src={props?.img?.src}
        alt="bg image"
        priority
      />
      <h1 className="text-5xl text-center py-32 pb-96 pt-64 font-semibold font-playfair text-white">
        {props?.pageName}
      </h1>
    </section>
  );
};

export default BigBanner;
