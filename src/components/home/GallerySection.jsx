import { galleryData } from "@/helpers/mockData/galleryData";
import Image from "next/image";
import React from "react";
// assets/img

const GallerySection = () => {
  return (
    <section className="">
      <p className="font-lora font-medium  text-xl md:text-3xl w-[60%] mx-auto text-center py-32">
        We initiate brand action. Our efforts transition from single moments to
        impactful movements, effectively engaging your audience and propelling
        your business forward
      </p>
      <div className="grid responsive-grid gap-5  w-full  p-5  ">
        {galleryData?.map((data, i) => {
          return (
            <div key={i} className="bg-gray-200">
              {data?.type === "image" ? (
                <Image src={data?.src} alt={data?.alt} className="w-full" />
              ) : (
                <p className=""></p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;
