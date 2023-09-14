import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import servicesBanner from "../../assets/services/servicesBanner.webp";
import FirstSection from "@/components/services/FirstSection";
import SecondSection from "@/components/services/SecondSection";
import ThirdSection from "@/components/services/ThirdSection";

const Services = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="Our Services" img={servicesBanner} />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </Layout>
  );
};

export default Services;
