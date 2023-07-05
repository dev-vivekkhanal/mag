import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import journalBanner from "../../assets/journal/journalBanner.svg";

const Journals = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="Journals" img={journalBanner} />

        <div className="min-h-screen"></div>
      </div>
    </Layout>
  );
};

export default Journals;
