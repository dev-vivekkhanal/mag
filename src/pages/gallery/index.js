import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import servicesBanner from "../../assets/services/servicesBanner.svg";
import UnderContruction from "@/components/global/UnderContruction";

const Gallery = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="Gallery" img={servicesBanner} />

        <UnderContruction />
      </div>
    </Layout>
  );
};

export default Gallery;
