import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import journalBanner from "../../assets/journal/journalBanner.png";
import FirstSection from "@/components/journals/FirstSection";
import SecondSection from "@/components/journals/SecondSection";

const Journals = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="Journals" img={journalBanner} />
        <FirstSection />
        <SecondSection />
      </div>
    </Layout>
  );
};

export default Journals;
