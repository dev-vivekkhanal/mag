import Image from "next/image";
import Link from "next/link";
import l_img from "../../assets/home/img1.webp";

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

export default SecondSection;