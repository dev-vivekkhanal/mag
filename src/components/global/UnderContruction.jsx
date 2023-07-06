import React from "react";
import under_construction from "../../assets/global/under_construction.svg";
import Image from "next/image";

const UnderContruction = () => {
  return (
    <div className="flex justify-center items-center py-32">
      <Image src={under_construction} className="" />
    </div>
  );
};

export default UnderContruction;
