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
    <section className="py-32">
      <h2 className=" text-lg md:text-2xl font-medium mb-10 text-accent_color text-center">
        Reservation
      </h2>
      <h1 className="  text-xl md:text-3xl font-medium mb-10 text-center">
        Please Tell Us About Your Attendancess
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-[#737373] w-full max-w-[700px] mx-auto px-5"
      >
        <div className="flex flex-col sm:flex-row gap-5">
          <input
            type="text"
            name="first_name"
            className="outline-none border text-lg p-2 px-5 w-full bg-opacity-80"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            className="outline-none border text-lg p-2 px-5 w-full bg-opacity-80"
            placeholder="Last Name"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          className="outline-none border text-lg p-2 px-5 w-full mt-5 bg-opacity-80"
          placeholder="Email ID"
          required
        />

        <textarea
          name="message"
          rows="5"
          className="outline-none border text-lg p-2 px-5 w-full mt-5 bg-opacity-80"
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className={`bg-accent_color px-12 py-3 text-white font-lora text-xl block mx-auto mt-10 
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
    </section>
  );
};

export default ThirdSection;
