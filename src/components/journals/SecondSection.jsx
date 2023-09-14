import { mainEvents } from "@/helpers/mockData/journalData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecondSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
      {mainEvents?.map((data) => {
        return (
          <div key={data?.id} className="flex-auto  ">
            <Link href={`/journals/${data?.id}`}>
              <Image
                src={data?.image}
                alt={data?.title}
                className=" h-full object-cover  w-full"
              />
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default SecondSection;
