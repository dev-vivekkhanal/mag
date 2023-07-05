import React, { useEffect, useState } from "react";
// carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// assets
import bg1 from "../../assets/home/bg1.svg";
import bg2 from "../../assets/home/bg2.svg";
import bg3 from "../../assets/home/bg3.svg";
import Image from "next/image";
import Link from "next/link";

const FirstSection = () => {
  const [count, setCount] = useState(0);
  const bgArr = [bg1, bg2, bg3];

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (count > bgArr.length - 2) {
        setCount(0);
      } else setCount(count + 1);
    }, 5000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="h-[100vh] relative font-lora text-center text-white">
      <div
        style={{ backgroundImage: `url(${bgArr[count].src})` }}
        className={`absolute inset-0 z-[-10]   bg-center bg-cover duration-1000 transition-all `}
      ></div>
      <div className="h-screen flex flex-col justify-around py-10">
        <div>
          <h1 className="text-3xl font-medium mb-10">
            We are set for the new adventure of life
          </h1>
          <h2 className="text-[#C7C7C7] text-lg ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            dolore illo maxime, veniam eius magnam nobis commodi.
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
  );
};

export default FirstSection;
