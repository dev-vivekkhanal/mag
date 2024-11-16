import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ThirdSection = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_pwrcd7i",
        "template_i7097af",
        form.current,
        "user_NNdYEC8w2bsbkaV2JXrD4"
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Success SVG Animation Component
  const SuccessIcon = () => (
    <svg
      className="w-6 h-6 inline-block mr-2 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
        className="animate-draw-check"
      />
    </svg>
  );

  // Error SVG Animation Component
  const ErrorIcon = () => (
    <svg
      className="w-6 h-6 inline-block mr-2 text-red-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
        className="animate-draw-x"
      />
    </svg>
  );

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-white inline-block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const StatusMessage = () => {
    if (status === "success") {
      return (
        <div className="flex items-center justify-center text-green-500 mt-4 animate-fade-in">
          <SuccessIcon />
          <span>Message sent successfully!</span>
        </div>
      );
    }
    if (status === "error") {
      return (
        <div className="flex items-center justify-center text-red-500 mt-4 animate-fade-in">
          <ErrorIcon />
          <span>Failed to send message. Please try again.</span>
        </div>
      );
    }
    return null;
  };

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

        <form
          ref={form}
          onSubmit={sendEmail}
          className=" text-[#4e4e4e] flex-1  mx-auto px-5 font-sans"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              name="first_name"
              className="outline-none border text-lg p-2 px-5 w-full bg-opacity-80"
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name"
              className="outline-none border text-lg p-2 px-5 w-full bg-opacity-80"
              placeholder="Last Name"
            />
          </div>

          <input
            type="email"
            name="email"
            className="outline-none border text-lg p-2 px-5 w-full mt-5 bg-opacity-80"
            placeholder="Email ID"
          />

          <textarea
            rows="5"
            name="message"
            className="outline-none border text-lg p-2 px-5 w-full mt-5 bg-opacity-80"
            placeholder="Message"
          ></textarea>

          <button
            type="submit"
            disabled={isLoading}
            className={`bg-accent_color px-12 py-3 text-white font-lora text-xl block mt-5 
            relative transition-all duration-300 ${
              isLoading ? "opacity-90" : "hover:opacity-90"
            }`}
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                <span className="ml-2">Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>

          <StatusMessage />
        </form>
      </div>
    </section>
  );
};

export default ThirdSection;
