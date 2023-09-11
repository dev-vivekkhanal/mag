import Image from "next/image";
import React from "react";
import blurr from "../../assets/services/blurr_img.png";
const SecondSection = () => {
  return (
    <section className="py-32 font-playfair relative">
      <Image src={blurr} className="w-full" />

      <div className="text-[#0B041B]  font-semibold absolute inset-0 flex flex-col justify-center items-center gap-10 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          WE LOVE TO CAPTURE SMALL DETAILS AND DEEP FEELINGS
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  xl:text-5xl">
          ONLY YOU. AS YOU ARE.
        </h1>
      </div>
    </section>
  );
};

export default SecondSection;
