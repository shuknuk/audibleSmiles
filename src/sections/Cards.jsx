import React from "react";
import { initiatives } from "../constants";
import ServicesCard from "../components/ServicesCard";

const Cards = () => {
  return (
    <section className="flex w-full flex-col" id="initiatives">
      {/* Header */}
      <header className="flex flex-col lg:flex-row items-center gap-6 mt-8 mb-10 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-green-700 text-white px-4 py-2 rounded-md">
          Our Initiatives
        </h1>
        <p className="text-lg lg:max-w-[50%] text-gray-700 text-center lg:text-left">
          At Audible Smiles, our goal is to bring hope and the gift of hearing 
          to those who otherwise cannot afford it. Explore our initiatives below 
          to learn how you can get involved.
        </p>
      </header>

      {/* Card Grid */}
      <div className="flex flex-wrap gap-8 justify-center lg:justify-start px-4">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className={`group w-full sm:w-[320px] md:w-[400px] lg:w-[320px] xl:w-[360px] p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow ${item.bgColor}`}
          >
            <ServicesCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
