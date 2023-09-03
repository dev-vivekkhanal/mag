import React from "react";
import waves from "../../assets/home/bg-waves.png";
import left_img from "../../assets/about/left_img.png";
import right_img from "../../assets/about/right_img.png";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="  font-playfair text-center reaative">
      {/* <Image
        src={waves}
        fill
        className="w-full opacity-30 hidden lg:block z-[-10]"
      /> */}
      <div
        className={`flex flex-col lg:flex-row gap-5 lg:px-[2.5%] xl:px-[5%]  mx-auto justify-between bg-bottom py-32 lg:bg-[url('/_next/static/media/bg-lines.0efc976a.svg')] bg-no-repeat bg-cover `}
      >
        <div className="flex-none hidden lg:block">
          <Image src={left_img} className="rounded-tl-[50rem]"></Image>
        </div>

        <div className="bg-white bg-opacity-60 white-bg-shadow px-[2.5%] lg:px-0 xl:w-[50%] mx-auto">
          <h1 className="  text-xl md:text-3xl font-medium mb-10">
            Start Your Planning With Us
          </h1>

          <div className="font-lora md:text-xl space-y-8">
            <p>
              Dedicated to crafting everlasting impressions, by catering all
              your weddings/Events needs as per your ritual, within your budget
              and quality, to create exceptional projects. From intimate moments
              to grand occasions, we refine them into lasting treasures. Our
              creative ventures adhere to global excellence standards, etching
              eternal memories with experience and passion. More than a company,
              we're a family that seeks meaning in every shot, focusing on
              elegance, class, and beauty. Framing your precious moments is our
              passion, from outdoors to weddings, fashion to family. Our hands
              create, our hearts dream. Let our work and passion speak volumes.
            </p>
          </div>
        </div>

        <div className="flex-none flex justify-between align-bottom gap-5 ">
          <Image
            src={right_img}
            className="rounded-tr-[50rem] w-full min-w-[50px] block"
          ></Image>
          <Image
            src={left_img}
            className="rounded-tl-[50rem] w-full min-w-[50px] lg:hidden block"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
