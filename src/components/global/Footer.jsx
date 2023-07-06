import { quickLinks } from "@/helpers/mockData/footerData";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent_color  text-white font-poppins">
      <div className="flex flex-col lg:flex-row gap-5 items-start w-[80%] mx-auto py-20 ">
        <div className="flex flex-col sm:flex-row gap-5 justify-between flex-1  w-full ">
          {/* quick links */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold font-lora mb-10">
              QuickLinks
            </h1>
            <div>
              {quickLinks?.map((links) => {
                return (
                  <Link
                    href={links?.link}
                    key={links?.title}
                    className={`  p-2 block text-lg`}
                  >
                    <span className=" ">{links?.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* get in  touch */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold font-lora mb-10">
              Get In Touch
            </h1>
            <div className="text-lg">
              <h2 className="p-2">4908 Columbia Road, Bullard</h2>
              <h2 className="p-2">abc@gmail.com</h2>
              <h2 className="p-2">+91 9874561230</h2>
              <h2 className="p-2">6:00am to 7:00pm</h2>
            </div>
          </div>
        </div>

        <form className="flex-1 text-[#737373]  w-full">
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              className="outline-none border-0 text-lg p-2 px-5 w-full bg-white bg-opacity-80"
              placeholder="First Name"
            />
            <input
              type="text"
              className="outline-none border-0 text-lg p-2 px-5 w-full bg-white bg-opacity-80"
              placeholder="Last Name"
            />
          </div>

          <input
            type="email"
            className="outline-none border-0 text-lg p-2 px-5 w-full mt-5 bg-white bg-opacity-80"
            placeholder="Email ID"
          />

          <textarea
            rows="5"
            className="outline-none border-0 text-lg p-2 px-5 w-full mt-5 bg-white bg-opacity-80"
            placeholder="Message"
          ></textarea>

          <button className="outline-none border-0 text-lg p-2 mt-5 bg-[#242A32] px-8 active:scale-95 transition-all text-white text-opacity-80 ">
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
