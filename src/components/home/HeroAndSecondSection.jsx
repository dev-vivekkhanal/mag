import Image from "next/image";
import abstract_bg from "../../assets/home/hero_bg.svg";
import hero from "../../assets/home/hero_img.png";
import Link from "next/link";
import l_img from "../../assets/home/img1.svg";

const HeroAndSecondSection = () => {
  return (
    <div className={``}>
      {/* hero section */}
      <section className="relative min-h-[85vh] flex flex-col justify-between  ">
        <div className="py-16 pb-32 text-center w-[80%] mx-auto">
          <h1 className="font-lora  text-xl md:text-3xl font-medium mb-10">
            We are set for the new adventure of life{" "}
          </h1>
          <p className="text-[#4F4F4F] text-lg md:text-2xl pb-20 ">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus leo.
          </p>
          {/* CTA */}
          <Link
            href="/contact"
            className="bg-accent_color px-16 py-4 text-white font-lora text-xl md:text-3xl "
          >
            Contact Us
          </Link>
        </div>

        <div className="">
          <Image
            src={hero}
            alt="hero img"
            className="mx-auto w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]"
          />
        </div>

        <Image
          src={abstract_bg}
          alt="tribal_art"
          className="absolute top-0 -z-20 left-0 right-0 w-full "
        />
      </section>

      {/* 2nd section */}
      <section className="flex flex-col lg:flex-row  items-center justify-between py-32 gap-10 min-h-screen ">
        <div className="flex-1">
          <Image
            src={l_img}
            alt="left img"
            className="w-full md:rounded-r-[5rem]"
          />
        </div>

        <div className="flex-1 px-16">
          <div className="">
            <h2 className="font-lora  text-lg md:text-2xl font-medium mb-10 text-accent_color">
              Our Story
            </h2>
            <h1 className="font-lora  text-xl md:text-3xl font-medium mb-10">
              They said it’s ethereal, we say it’s eternal
            </h1>

            <div className="flex flex-col xl:flex-row justify-between items-center gap-10 text-[#4F4F4F] text-lg md:text-xl pb-20">
              <p>
                Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sed
                lacinia mollis magna eu condi mentum. Proin justo diam,
                tristique vitae viverra eu, facilisis a ex. Aliquam pharetra
                mauris ut sem.
              </p>

              <p>
                Aliquam pharetra mauris ut sem pretium. Proin iaculis velit ac
                diam feugiat, quis ultrices sem tristique. Donec pellentesque
                eros quis pharetra sollici tudin.
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

export default HeroAndSecondSection;
