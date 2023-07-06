import Layout from "@/layouts/layout";
import React from "react";
import aboutBanner from "../../assets/about/aboutBanner.svg";

import Banner from "@/components/global/Banner";
import SecondSection from "@/components/about/SecondSection";
import FirstSection from "@/components/about/FirstSection";
import ThirdSection from "@/components/about/ThirdSection";

const About = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="About Us" img={aboutBanner} />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </Layout>
  );
};

export default About;
