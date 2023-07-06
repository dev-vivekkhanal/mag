import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import servicesBanner from "../../assets/services/servicesBanner.svg";
import FirstSection from "@/components/services/FirstSection";
import SecondSection from "@/components/services/SecondSection";

const Services = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="Our Services" img={servicesBanner} />

        <FirstSection />
        <SecondSection />
      </div>
    </Layout>
  );
};

export default Services;
