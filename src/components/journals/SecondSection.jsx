import { mainEvents } from "@/helpers/mockData/journalData";
import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
      {mainEvents?.map((data) => {
        return (
          <div key={data?.id} className="flex-auto  ">
            <Image
              src={data?.image}
              alt={data?.title}
              className=" h-full object-cover  w-full"
            />
          </div>
        );
      })}
    </section>
  );
};

export default SecondSection;
