import React from "react";
import left_img from "../../assets/home/left-img.webp";
import right_img from "../../assets/home/right-img.webp";
import Image from "next/image";
import Link from "next/link";

const ThirdSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-10 py-20">
      <div className="flex-1">
        <Image
          src={left_img}
          alt="left_img"
          className="w-full lg:rounded-tr-[5rem]"
        />
      </div>

      <div className="flex-1 flex flex-col gap-10 justify-between items-center pt-10">
        <h1 className="font-lora  text-xl md:text-3xl font-medium  w-[80%] mx-auto text-center">
          Ram & Janani
        </h1>

        <p className="text-[#4F4F4F] text-lg md:text-xl w-[80%] mx-auto text-center">
          The phrase 'together forever' feels just right, as it encapsulated not
          only our cherished memories but also the blend of scenic vistas and
          cultural motifs that enhanced the charm of our beautifully crafted
          day.
        </p>

        {/* CTA */}
        <Link
          href="/journals"
          className="bg-accent_color px-16 py-4 text-white font-lora text-xl md:text-3xl  inline-block"
        >
          Journals
        </Link>
      </div>
      <div className="flex-1">
        <Image
          src={right_img}
          alt="right_img"
          className="w-full lg:rounded-tl-[5rem]"
        />
      </div>
    </section>
  );
};

export default ThirdSection;
