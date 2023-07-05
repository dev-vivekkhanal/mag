import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import FirstSection from "@/components/home/FirstSection";
import GallerySection from "@/components/home/GallerySection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import Layout from "@/layouts/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <GallerySection />
      </div>
    </Layout>
  );
}
