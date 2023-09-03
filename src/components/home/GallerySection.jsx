import { galleryData } from "@/helpers/mockData/galleryData";
import Image from "next/image";
import React from "react";
// assets/img

const GallerySection = () => {
  return (
    <section className="">
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
