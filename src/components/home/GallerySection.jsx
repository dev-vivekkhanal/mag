import { galleryData } from "@/helpers/mockData/galleryData";
import Image from "next/image";
import React from "react";
// assets/img

const GallerySection = () => {
  return (
    <section className="">
      <p className="font-lora font-medium  text-xl md:text-3xl w-[60%] mx-auto text-center py-32">
        We create brand action. From momentsto movements, our actions engageyour
        audience and drive your business.
      </p>
      <div className="grid responsive-grid gap-5  w-full  p-5  ">
        {galleryData?.map((galleryImages, i) => {
          return (
            <div key={i}>
              <Image
                src={galleryImages?.src}
                alt={galleryImages?.alt}
                className="w-full"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;
