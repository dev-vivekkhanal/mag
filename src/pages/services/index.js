import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import servicesBanner from "../../assets/services/servicesBanner.svg";

const Services = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="Our Services" img={servicesBanner} />

        <div className="min-h-screen"></div>
      </div>
    </Layout>
  );
};

export default Services;
