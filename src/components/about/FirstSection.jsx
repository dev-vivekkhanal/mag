import React from "react";
import bg_lines from "../../assets/about/bg-lines.svg";
import left_img from "../../assets/about/left_img.svg";
import right_img from "../../assets/about/right_img.svg";
import Image from "next/image";

const FirstSection = () => {
  console.log(bg_lines?.src);
  return (
    <section className="  font-playfair text-center">
      <div
        className={`flex flex-col lg:flex-row gap-5 lg:px-[2.5%] xl:px-[5%]  mx-auto justify-between bg-bottom py-32 lg:bg-[url('/_next/static/media/bg-lines.0efc976a.svg')] bg-no-repeat bg-cover `}
      >
        <div className="flex-none hidden lg:block">
          <Image src={left_img} className="rounded-tl-[50rem]"></Image>
        </div>

        <div className="bg-white bg-opacity-60 white-bg-shadow px-[2.5%] lg:px-0 xl:w-[50%] mx-auto">
          <h2 className=" text-lg md:text-2xl font-medium mb-10 text-accent_color">
            Special Price
          </h2>
          <h1 className="  text-xl md:text-3xl font-medium mb-10">
            Start Your Planning With Us
          </h1>

          <div className="font-lora md:text-xl space-y-8">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ad
              a minus cumque ex minima velit explicabo nesciunt ea fuga soluta
              at dolor similique quo error, veniam quidem dolores pariatur
              suscipit
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ad
              a minus cumque ex minima velit explicabo nesciunt ea fuga soluta
              at dolor similique quo error, veniam quidem dolores pariatur
              suscipit
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
