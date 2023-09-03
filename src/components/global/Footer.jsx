import Link from "next/link";
import React from "react";
import logo from "../../assets/global/logo_white.svg";
import twitter from "../../assets/global/twitter.svg";
import insta from "../../assets/global/insta.svg";
import fb from "../../assets/global/facebook.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-accent_color  text-white font-poppins flex flex-col gap-10 justify-center items-center py-20 font-light">
      <div className="flex flex-col justify-center items-center gap-8 max-w-[400px]">
        <Image src={logo} alt="logo" className="" />
        <p className="">
          301, 3rd Floor, Anjanadhri Pavithra, Kashinagar, Yelachenahalli,
          Bengaluru, Karnataka 560078
        </p>
        <div className="flex gap-5 items-center justify-center">
          {/* <a href="/"> */}
          <Image src={twitter} alt="twitter" className="" />
          {/* </a> */}
          {/* <a href="/"> */}
          <Image src={fb} alt="facebook" className="" />
          {/* </a> */}
          {/* <a href="/"> */}
          <Image src={insta} alt="instagram" className="" />
          {/* </a> */}
        </div>
      </div>

      <div className="w-[80%] bg-[#ABABAB] h-[2px]"></div>

      <p>Copyright @Magproduction, 2023</p>
    </footer>
  );
};

export default Footer;
