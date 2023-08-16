import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import galleryBanner from "../../assets/gallery/galleryBanner.webp";
import { galleryPageData } from "@/helpers/mockData/galleryPageData";
import Image from "next/image";
import YouTube from 'react-youtube';

const Gallery = () => {
  const opts = {
    height: '600',
    width: '100%',
 
  };
  return (
    <Layout>
      <div>
        <Banner pageName="Gallery" img={galleryBanner} />
        <div className="flex flex-wrap gap-5 my-5">
          {galleryPageData?.map((data, index) => {
            if (data?.type === "youtube")
            {return (
              <div key={index} className="flex-auto  ">
             <YouTube
  videoId={data?.link}  
  opts={opts}                
/>
              </div>
            )} else {
              return (
                <div key={index} className="flex-auto  ">
                  <Image
                    src={data?.img}
                    alt={"img" + index}
                    className=" h-full object-cover  w-full"
                  />
                </div>
              )
            }
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
