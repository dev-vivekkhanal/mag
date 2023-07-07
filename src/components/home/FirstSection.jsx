import React, { useEffect, useLayoutEffect, useState } from "react";
// animation
import { AnimatePresence, motion } from "framer-motion";
// carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// assets
import bg1 from "../../assets/home/bg1.webp";
import bg2 from "../../assets/home/bg2.webp";
import bg3 from "../../assets/home/bg3.webp";
import Image from "next/image";
import Link from "next/link";

const FirstSection = () => {
  const [count, setCount] = useState(0);
  const [bgArr] = useState([bg1.src, bg2.src, bg3.src]);
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    const mapped = bgArr?.map((bgData, bgIndex) => {
      return (
        <div key={bgIndex} className="h-screen w-full relative">
          <Image
            fill
            className={`  object-center object-cover pointer-events-none z-[-10]  transition-all duration-1000`}
            src={bgData}
            alt="bg image"
            priority
          />
        </div>
      );
    });

    setItems(mapped);
  }, []);

  return (
    <div className="relative">
      <div className=" min-h-[100vh] relative font-lora text-center text-white ">
        <div className="h-screen flex flex-col justify-around py-10 pt-32">
          <div>
            <h1 className="text-3xl font-medium mb-10">
              We are set for the new adventure of life
            </h1>
            <h2 className="text-[#C7C7C7] text-lg ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam dolore illo maxime, veniam eius magnam nobis commodi.
            </h2>
          </div>

          <div>
            {/* CTA */}
            <Link
              href="/contact"
              className="bg-accent_color px-16 py-4 text-white font-lora text-xl md:text-3xl mt-16 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="transition-all duration-1000 absolute inset-0 z-[-10]">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={5000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
      </div>
    </div>
  );
};

export default FirstSection;
