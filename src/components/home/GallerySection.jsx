import { galleryData } from "@/helpers/mockData/galleryData";
import Image from "next/image";
import React from "react";
// assets/img

const GallerySection = () => {
  return (
    <section className=" 0">
      <p className="font-lora font-medium  text-xl md:text-3xl w-[60%] mx-auto text-center py-32">
        We create brand action. From momentsto movements, our actions engageyour
        audience and drive your business.
      </p>
      <div className="grid grid-cols-2 w-[80%] mx-auto  place-items-end   ">
        {galleryData?.map((galleryImages, i) => {
          return (
            <div key={i}>
              <div
                className={` my-8   ${
                  galleryImages?.type === "small"
                    ? "flex justify-center items-center   "
                    : ""
                }
                
                ${i === 0 && "border-b-4 border-b-accent_color"}
                ${
                  i === galleryData?.length - 1 &&
                  "border-t-4 border-t-accent_color translate-y-1"
                }
                `}
              >
                <Image
                  src={galleryImages?.src}
                  alt={galleryImages?.alt}
                  className={`  ${
                    galleryImages?.type === "small"
                      ? "scale-[80%] w-full"
                      : "w-full"
                  } `}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;
