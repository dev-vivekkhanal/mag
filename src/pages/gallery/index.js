import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import servicesBanner from "../../assets/services/servicesBanner.svg";

const Gallery = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="Gallery" img={servicesBanner} />

        <div className="min-h-screen"></div>
      </div>
    </Layout>
  );
};

export default Gallery;
