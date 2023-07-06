import Banner from "@/components/global/Banner";
import Layout from "@/layouts/layout";
import React from "react";
import journalBanner from "../../assets/journal/journalBanner.svg";
import UnderContruction from "@/components/global/UnderContruction";

const Journals = () => {
  return (
    <Layout>
      <div>
        <Banner pageName="Journals" img={journalBanner} />

        <UnderContruction />
      </div>
    </Layout>
  );
};

export default Journals;
