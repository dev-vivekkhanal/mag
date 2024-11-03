// next js
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// mock data
import { headerData } from "@/helpers/mockData/headerMock";
// assets/images
import logo from "../../assets/global/company_logo.svg";
import search_icon from "../../assets/global/search.svg";
import menu_icon from "../../assets/global/menu.svg";
import { useEffect } from "react";

const Header = () => {
  const location = useRouter();
  // const whiteLinks = ["/", "/services"];

  return (
    <header className="pt-5 z-10  absolute top-0  left-0 right-0 ">
      <div className="flex justify-between w-[90%] mx-auto p-3 px-10 rounded-lg  items-center bg-white">
        {/* logo */}
        <div className=" flex-1 md:flex-[0.2]">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-[5rem]" />
          </Link>
        </div>
        {/* nav links */}
        <nav className=" justify-between items-center gap-5 flex-[0.8]  hidden md:flex  w-full">
          {headerData?.map((header_links) => {
            return (
              <Link
                href={header_links.link}
                key={header_links.title}
                className={` ${
                  location?.route === header_links.link
                    ? `border-b-accent_color`
                    : "border-b-transparent text-[#737373]"
                }  p-2  border-b-2 `}
              >
                <span className=" font-poppins text-xl">
                  {header_links.title}
                </span>
              </Link>
            );
          })}
        </nav>
        {/* search and menu */}
        <div className=" flex-1 flex items-center justify-end gap-5 md:hidden">
          {/* menu */}
          <div className="">
            <Image src={menu_icon} alt="menu" className="w-10" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
