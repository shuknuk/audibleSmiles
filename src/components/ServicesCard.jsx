import React from "react";

const ServicesCard = ({ title, description, btn, bgColor, textColor }) => {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div>
        <h2 className={`mb-4 text-2xl font-bold ${textColor}`}>
          {title}
        </h2>
        <p className="text-base text-gray-700 mb-6">
          {description}
        </p>
      </div>
      <button
        className={`${bgColor} ${textColor} px-6 py-2 mt-4 rounded-md font-medium hover:opacity-90 transition-opacity`}
      >
        {btn}
      </button>
    </div>
  );
};

export default ServicesCard;