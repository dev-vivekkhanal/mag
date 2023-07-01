import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import GallerySection from "@/components/home/GallerySection";
import HeroAndSecondSection from "@/components/home/HeroAndSecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Header />

      <HeroAndSecondSection />
      <ThirdSection />
      <GallerySection />

      <Footer />
    </main>
  );
}
