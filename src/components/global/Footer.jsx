import { headerData } from "@/helpers/mockData/headerMock";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent_color h-[40vh] flex justify-center items-center flex-col">
      {headerData?.map((header_links) => {
        return (
          <Link
            href={header_links.link}
            key={header_links.title}
            className={`  p-2  `}
          >
            <span className="text-white font-poppins text-xl">
              {header_links.title}
            </span>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
