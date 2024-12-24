import React from "react";
import { arrov } from "../assets/images";

const ServicesCard = ({ imgURL, title, btn, colors, titleColor }) => {
  return (
    <div className={`${colors} w-full lg:w-[350px] h-[280px] rounded-[45px] p-[30px] flex flex-col justify-between`}>
        <div className='flex flex-col gap-5'>
            <div className='w-[60px] h-[60px]'>
                <img src={imgURL} alt="icon" className='w-full h-full' />
            </div>
            <h1 className={`text-${titleColor} text-[24px] font-bold`}>{title}</h1>
        </div>
        <div className='px-5 py-2 border rounded-lg ml-3 hover:bg-secondary hover:text-white duration-150'>
            <button>{btn}</button>
        </div>
    </div>
  );
};

export default ServicesCard;