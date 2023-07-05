import Layout from "@/layouts/layout";
import React from "react";
import aboutBanner from "../../assets/about/aboutBanner.svg";
import Banner from "@/components/global/Banner";

const About = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="About Us" img={aboutBanner} />

        <div className="min-h-screen"></div>
      </div>
    </Layout>
  );
};

export default About;
