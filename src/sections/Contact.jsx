import React from "react";
import { starts } from "../assets/images";

const Contact = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="bg-accent w-[180px] rounded-[10px] flex justify-center">
            <h1 className="text-[30px] max-sm:text-[28px] font-grotesk font-bold text-primary">
              Contact us
            </h1>
          </div>
          <p className="text-text-dark text-center mt-5 text-[18px] font-light">
            Connect with us to explore how we can help grow your business.
          </p>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[50%] w-full">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-text-dark">Name*</label>
                <input
                  type="text"
                  className="border border-primary rounded-[10px] py-3 px-5"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-text-dark">Email*</label>
                <input
                  type="email"
                  className="border border-primary rounded-[10px] py-3 px-5"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-text-dark">Message*</label>
                <textarea
                  className="border border-primary rounded-[10px] py-3 px-5 h-[150px]"
                  placeholder="Enter your message"
                />
              </div>
              <button className="bg-secondary text-white py-5 rounded-[10px] font-light hover:bg-primary transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:w-[50%] w-full">
            <img
              src={starts}
              alt="contact"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
