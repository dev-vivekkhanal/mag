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
import goldLogo from "../../assets/global/gold_logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useRouter();
  // const whiteLinks = ["/", "/services"];
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <header className="pt-5 z-10  fixed top-0  left-0 right-0 ">
      <div
        className={`${
          toggleSidebar ? "bg-opacity-75" : "bg-opacity-20"
        } bg-white  w-[90%] mx-auto p-3 px-10 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30`}
      >
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className=" flex-1 md:flex-[0.2]">
            <Link href="/">
              <Image src={goldLogo} alt="logo" className="w-[5rem]" />
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
            {/* <div className="">
              <Image src={menu_icon} alt="menu" className="w-10" />
            </div> */}
            <button
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className="w-[35px] aspect-video flex flex-col gap-2"
            >
              <div
                className={`h-[3px] bg-[#242a32] shrink-0 transition-all ${
                  toggleSidebar
                    ? "w-[90%] rotate-45 translate-y-2.5 translate-x-0.5"
                    : "w-1/2"
                }`}
              ></div>
              <div
                className={`h-[3px] bg-[#242a32] w-full shrink-0 transition-all ${
                  toggleSidebar ? "hidden" : ""
                }`}
              ></div>
              <div
                className={`h-[3px] bg-[#242a32] shrink-0 ml-auto transition-all ${
                  toggleSidebar
                    ? "w-[90%] -rotate-45 -translate-y-0 -translate-x-0.5"
                    : "w-1/2"
                }`}
              ></div>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden  h-full overflow-hidden transition-all ${
            !toggleSidebar ? "max-h-0" : "max-h-[999px]"
          }`}
        >
          <nav className=" justify-between items-center gap-5 flex flex-col py-5 h-max  w-full">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
