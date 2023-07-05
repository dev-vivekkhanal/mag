import React from "react";

const Banner = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props?.img?.src})` }}
      className="w-full bg-bottom bg-cover"
    >
      <h1 className="text-5xl text-center py-32 pb-44 pt-64 font-semibold">
        {props?.pageName}
      </h1>
    </div>
  );
};

export default Banner;
