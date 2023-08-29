import Image from "next/image";
import Link from "next/link";
import l_img from "../../assets/home/img1.png";

const SecondSection = () => {
  return (
    <div className={``}>
      {/* 2nd section */}
      <section className="flex flex-col lg:flex-row  items-center justify-between py-32 gap-10 min-h-screen ">
        <div className="flex-1 w-full">
          <Image
            src={l_img}
            alt="left img"
            className="w-full lg:rounded-r-[5rem]"
          />
        </div>

        <div className="flex-1 px-16">
          <div className="">
            <h2 className="font-lora  text-lg md:text-2xl font-medium mb-10 text-accent_color">
              Our Story
            </h2>
            <h1 className="font-lora  text-xl md:text-3xl font-medium mb-10">
              Capturing the Elegance in Every Detail and the Depth in Every
              Emotion
            </h1>

            <div className="flex flex-col xl:flex-row justify-between items-center gap-10 text-[#4F4F4F] text-lg md:text-xl pb-20">
              <p>
                At our production house, we transform ideas into visual tales
                that captivate. Collaborating closely with you, we craft
                experiences that resonate. Each frame is meticulously designed
                to convey your message with impact. Step into our world, where
                stories come alive and creativity knows no bounds.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="bg-accent_color px-16 py-4 text-white font-lora text-xl md:text-3xl mt-16 inline-block"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
