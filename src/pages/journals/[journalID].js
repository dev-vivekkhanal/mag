import BigBanner from "@/components/global/BigBanner";
import { useRouter } from "next/router";
import React from "react";
import bigJournalBanner from "../../assets/journal/bigJournalBanner.webp";
import Layout from "@/layouts/layout";
import FirstSection from "@/components/journals/specificJournal/FirstSection";
import { galleryPageData } from "@/helpers/mockData/galleryPageData";
import Image from "next/image";
import YouTube from "react-youtube";


const JournalID = () => {


  const opts = {
    height: "600",
    width: "100%",

  };

  return(
    <Layout>
      <BigBanner pageName="Our Never Ending Story" img={bigJournalBanner}/>
      <FirstSection/>

      <div className="flex flex-wrap gap-5 my-5">
          {galleryPageData?.map((data, index) => {
            if(index < 4)
            return (
              <div key={index} className="flex-auto  ">
              {data?.type === "youtube" ?  
            <div className="flex-1 w-full">
                <YouTube
                videoId={data?.link}
                opts={opts}
                
            
              /> 
            </div>
             :  <Image
                  src={data?.img}
                  alt={"img" + index}
                  className=" h-full object-cover  w-full"
                />}
              </div>
            );
          })}
        </div>
    </Layout>
    )

};

export default JournalID;
