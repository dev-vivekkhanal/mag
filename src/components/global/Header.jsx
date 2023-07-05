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

const Header = () => {
  const location = useRouter();

  console.log(location);
  return (
    <header className="pt-5 z-10  absolute top-0  left-0 right-0 ">
      <div className="flex justify-between w-[90%] mx-auto py-5  items-center">
        {/* logo */}
        <div className=" flex-1 ">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-[5rem]" />
          </Link>
        </div>
        {/* nav links */}
        <nav className=" justify-between items-center gap-5 flex-1  hidden md:flex">
          {headerData?.map((header_links) => {
            return (
              <Link
                href={header_links.link}
                key={header_links.title}
                className={` ${
                  location?.route === header_links.link
                    ? "border-b-accent_color text-accent_color"
                    : location?.route === "/"
                    ? "border-b-transparent text-[#C7C7C7]"
                    : "border-b-transparent text-[#4F4F4F]"
                } p-2  border-b-2 border-b-accent_color `}
              >
                <span className=" font-poppins text-xl">
                  {header_links.title}
                </span>
              </Link>
            );
          })}
        </nav>
        {/* search and menu */}
        <div className=" flex-1 flex items-center justify-end gap-5">
          {/* search */}
          <div>
            <Image src={search_icon} alt="search" className="" />
          </div>
          {/* menu */}
          <div className="md:hidden">
            <Image src={menu_icon} alt="menu" className="w-10" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
