import React from "react";

const Logo = ({ darkMode }) => {
  return (
    <div className="flex items-center">
      <h1 className="text-2xl font-bold">
        <span className={darkMode ? "text-black" : "text-primary"}>Audible</span>
        <span className="text-yellow-500">Smiles</span>
      </h1>
    </div>
  );
};

export default Logo; 