import React from "react";

const ThirdSection = () => {
  return (
    <section id="contact" className="py-32 font-playfair">
      <div className="flex flex-col lg:flex-row gap-10 w-[90%] md:w-[80%] mx-auto grid-flow-dense">
        <div className="flex-1 flex flex-col justify-between gap-5">
          <div>
            <h2 className="  text-xl md:text-3xl font-medium mb-5 text-accent_color ">
              Our Contact
            </h2>
            <h1 className="text-5xl   font-semibold ">Get In Touch With Us</h1>
          </div>

          <p className="font-lora md:text-xl ">
            We&apos;d love to hear from you! Whether you have questions,
            feedback, or inquiries about our flight passes, our dedicated team
            is here to assist you. Your satisfaction is our top priority, and
            we&apos;re committed to providing you with the best support
            possible.
          </p>

          <div>
            <h2 className="  text-xl md:text-3xl font-medium mb-5 text-accent_color ">
              Bengaluru
            </h2>
            <ul className="font-lora md:text-xl list-disc pl-5">
              <li>
                301, 3rd Floor ,Anjanadhri Pavithra ,Kashinagar, Yelachenahalli,
                Bengaluru, Karnataka 560078
              </li>
              <li>magproductionsinfo@gmail.com</li>
              <li>+91 9845253985</li>
              <li>+91 9035993712</li>
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

export default ThirdSection;
