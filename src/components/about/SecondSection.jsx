import React from "react";
import grid from "../../assets/about/grid.png";

import Image from "next/image";

const SecondSection = () => {
  return <Image src={grid} alt="grid" className="mx-auto py-20 w-[90%]" />;
};

export default SecondSection;
