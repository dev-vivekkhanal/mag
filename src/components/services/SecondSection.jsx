import React from "react";

const SecondSection = () => {
  return (
    <section className="py-32 font-playfair">
      <div className="flex flex-col lg:flex-row gap-10 w-[90%] md:w-[80%] mx-auto">
        <div className="flex-1 flex flex-col justify-between gap-5">
          <div>
            <h2 className="  text-xl md:text-3xl font-medium mb-5 text-accent_color ">
              Our Contact
            </h2>
            <h1 className="text-5xl   font-semibold ">Get In Touch With Us</h1>
          </div>

          <p className="font-lora md:text-xl ">
            Aliquam pharetra mauris ut sem pretium. Proin iaculis velit ac diam
            feugiat, quis ultrices sem tristique. Donec pellentesque eros quis
            pharetra.
          </p>

          <div>
            <h2 className="  text-xl md:text-3xl font-medium mb-5 text-accent_color ">
              Texas
            </h2>
            <ul className="font-lora md:text-xl list-disc pl-5">
              <li>4908 Columbia Road, Bullard</li>
              <li>example@mail.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>

        <form className=" text-[#737373] flex-1  mx-auto px-5">
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              className="outline-none border text-lg p-2 px-5 w-full bg-opacity-80"
              placeholder="First Name"
            />
            <input
              type="text"
              className="outline-none border text-lg p-2 px-5 w-full bg-opacity-80"
              placeholder="Last Name"
            />
          </div>

          <input
            type="email"
            className="outline-none border text-lg p-2 px-5 w-full mt-5 bg-opacity-80"
            placeholder="Email ID"
          />

          <textarea
            rows="5"
            className="outline-none border text-lg p-2 px-5 w-full mt-5 bg-opacity-80"
            placeholder="Message"
          ></textarea>

          <button className="bg-accent_color px-12 py-3 text-white font-lora text-xl  mt-10">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default SecondSection;
