import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import React from "react";

const Layout = (props) => {
  return (
    <div>
      <Header />

      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
