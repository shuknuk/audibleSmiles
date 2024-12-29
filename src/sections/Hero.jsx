import React, { useRef, useEffect } from "react";
import { heroImg } from "../assets/images";

// Optional: If you want to integrate Three.js, you could use this ref to mount a canvas
// and create a small 3D smile or similar animation. This is just a placeholder comment
// to show how you might structure that integration.

const Hero = () => {
  const smileCanvasRef = useRef(null);

  useEffect(() => {
    // Example placeholder for initializing a Three.js scene
    // if (smileCanvasRef.current) {
    //   const canvas = smileCanvasRef.current;
    //   // Three.js initialization code goes here
    // }
  }, []);

  return (
    <section className="flex lg:flex-row flex-col-reverse">
      <header className="lg:w-[50%] w-full">
        <div>
          <h1 className="lg:text-[60px] text-[48px] leading-[60px] font-bold text-primary">
            Audible
          </h1>
          <h2
            className="text-[48px] leading-[60px] font-bold text-yellow-500 mt-2"
            style={{
              textShadow: "3px -3px 10px rgba(255, 213, 79, 0.7)",
            }}
          >
            Smiles
          </h2>

          {/* Three.js Canvas (optional) */}
          {/* <div
            ref={smileCanvasRef}
            style={{ width: "300px", height: "200px", marginTop: "20px" }}
          /> */}

          <div className="break-words text-2xl mt-10 leading-6">
            <p className="text-text-dark">
              You can hear them a mile away, especially when you give back hearing
              to the one who's lost it. Join us on our mission to make the world a 
              better place for people with hearing loss—one machine at a time.
            </p>
          </div>

          <div className="mt-10 w-full">
            <button className="border-[1px] px-[32px] py-[24px] rounded-[25px] bg-secondary text-xl font-bold text-white hover:bg-primary hover:text-white hover:border-primary duration-150 lg:w-[auto] tracking-wide">
              Book a Consultation
            </button>
          </div>
        </div>
      </header>

      <div className="lg:w-[50%] w-full flex justify-center items-center">
        <img src={heroImg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
