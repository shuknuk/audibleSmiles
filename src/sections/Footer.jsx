import React from "react";
import { Logo } from "../components";

export const Footer = () => {
  return (
    <footer className="w-full mt-10 max-sm:px-0 lg:px-[80px] md:px-[40px] px-[30px]">
      <div className="bg-primary rounded-t-[30px] flex-col max-md:p-[25px] h-full p-[50px]">
        <div className="flex flex-wrap flex-row max-md:flex-col justify-between items-center w-full">
          <div className="text-white">
            <Logo darkMode={true} />
          </div>

          <nav className="flex items-center max-md:w-full max-md:mt-3">
            <ul className="flex flex-col md:flex-row lg:justify-around w-full gap-5 max-md:gap-3 items-center">
              
            </ul>
          </nav>

          <div className="lg:flex hidden gap-3 ">
            <a href="https://www.linkedin.com/in/himanshu-tyd0072/" target="_blank" className="w-10 h-10 flex justify-center items-center bg-white rounded-full text-[20px] orgiin-center hover:-rotate-90 duration-150 cursor-pointer   ">
              <i class="ri-linkedin-fill"></i>
            </a>
            <a href="https://github.com/himanshu-tyd" target="_blank" className="w-10 h-10 flex justify-center items-center bg-white rounded-full text-[20px] orgiin-center hover:-rotate-90 duration-150 cursor-pointer  ">
              <i class="ri-github-fill"></i>
            </a>
            <a href="https://www.instagram.com/codebucketht" target="_blank" className="w-10 h-10 flex justify-center items-center bg-white rounded-full text-[20px] orgiin-center hover:-rotate-90 duration-150 cursor-pointer  ">
              <i class="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap max-lg:flex-col max-lg:gap-5 justify-between items-start mt-[50px]">
          <div className="lg:w-[50%]">
            <h1 className="text-[30px] text-light font-bold">
              Contact us for a free consultation
            </h1>
            <div className="text-light font-extralight mt-3">
              <p>
                We'd love to hear from you and discuss how we can help with your
                next project.
              </p>
            </div>
          </div>

          <div className="lg:w-[40%] w-full">
            <form className="w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent font-light py-[20px] input w-full border border-light text-light placeholder:text-light/70"
              />
              <button className="bg-secondary mt-3 w-full py-[12px] rounded-[10px] hover:bg-accent hover:text-primary font-light text-[18px] duration-150 text-white">
                Get in touch
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex border-t-2  border-white ">
          <div  className="text-light font-extralight gap-5 mt-5 flex max-sm:text-[14px] ">
            <h4 className=""> 2025 Audible Smiles | All Rights Reserved.</h4>
            
            <span>
              <a href="#">Privacy Policy</a>
            </span>
            <span>
              <a href="#">Terms of Service</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
