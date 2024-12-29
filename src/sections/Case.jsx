import React from "react";
import { caseStudies } from "../constants";

const Case = () => {
  return (
    <div className="w-full" id="cases">
      <header className="flex w-full lg:flex-row flex-col items-center gap-5">
        <h1 className="lg:text-[48px] text-[38px] font-bold bg-green px-4 text-kenit">
          Case Studies
        </h1>
        <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
          Explore how Audible Smiles has impacted lives by providing hearing aids 
          and support to underserved communities.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full h-full p-[50px] bg-dark mt-10 rounded-[30px]">
        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-bold mb-4 text-text-dark">
              {item.title}
            </h2>
            <div className="flex items-center mt-auto">
              <a href="#" className="text-secondary font-bold">
                {item.btnLabel}
              </a>
              <img
                src={item.icon}
                alt={item.btnLabel}
                className="ml-2 w-4 h-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Case;
