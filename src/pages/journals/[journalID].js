"use client";
import BigBanner from "@/components/global/BigBanner";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import bigJournalBanner from "../../assets/journal/bigJournalBanner.webp";
import Layout from "@/layouts/layout";
import FirstSection from "@/components/journals/specificJournal/FirstSection";
import { galleryPageData } from "@/helpers/mockData/galleryPageData";
import { mainEvents } from "@/helpers/mockData/journalData";
import Image from "next/image";
import YouTube from "react-youtube";

const JournalID = () => {
  const router = useRouter();
  const { journalID } = router.query; // Get the dynamic 'id' from URL params
  console.log(journalID);
  const [journalData, setJournalData] = useState(null);

  useEffect(() => {
    if (journalID) {
      // Filter the mainEvents array to find the journal with the matching ID
      const filteredData = mainEvents.find(
        (event) => event.id === Number(journalID)
      );
      setJournalData(filteredData);
    }
  }, [journalID]);

  const opts = {
    height: "600",
    width: "100%",
  };
  if (!journalData) return <p>Loading...</p>;
  return (
    <Layout>
      <BigBanner pageName={journalData?.title} img={journalData?.coverImg} />
      <div>
        <Image
          src={journalData?.contentImage}
          alt="gallery"
          className=" h-full object-cover  w-full my-4"
        ></Image>
      </div>
      {/* <FirstSection /> */}

      {/* <div className="flex flex-wrap gap-5 ">
        {galleryPageData?.map((data, index) => {
          if (index < 4)
            return (
              <div key={index} className="flex-auto  ">
                {data?.type === "youtube" ? (
                  <div className="flex-1 w-full">
                    <YouTube videoId={data?.link} opts={opts} />
                  </div>
                ) : (
                  <Image
                    src={data?.img}
                    alt={"img" + index}
                    className=" h-full object-cover  w-full"
                  />
                )}
              </div>
            );
        })}
      </div> */}
    </Layout>
  );
};

export default JournalID;
