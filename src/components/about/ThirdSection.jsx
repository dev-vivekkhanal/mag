import React from "react";

const ThirdSection = () => {
  return (
    <section className="py-32">
      <h2 className=" text-lg md:text-2xl font-medium mb-10 text-accent_color text-center">
        Reservation
      </h2>
      <h1 className="  text-xl md:text-3xl font-medium mb-10 text-center">
        Please Tell Us About Your Attendance
      </h1>

      <form className=" text-[#737373]  w-full max-w-[700px] mx-auto px-5">
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

        <button className="bg-accent_color px-12 py-3 text-white font-lora text-xl   block mx-auto mt-10">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ThirdSection;
