import React, { useState } from "react";
import "./Landing.css";
import Tilt from "react-parallax-tilt";
import { LogoIcon } from "@/Public/Svg/Svg";

const Landing = () => {
  const [scale, setScale] = useState(0.95);
  const defaultOptions = {};
  return (
    <div className="w-screen h-screen p-20 bg-black">
      {/* <video
        className="absolute left-0 top-0 w-screen h-screen object-cover object-center  animate-fadeIn"
        autoPlay
        loop
        muted
      >
        <source src="src/public/video/optimus prime_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* <div className="absolute left-0 top-0 w-screen h-screen object-cover object-center  animate-fadeIn bg-center bg-cover bg-[url('/src/Public/Images/collections/1.jpg')] bg-opacity-50"></div> */}

      <div className="w-full h-full flex justify-center items-center relative bg-center bg-cover animate-fadeIn rounded-xl bg-opacity-0 flex-col   backdrop-blur-[1px]">
        {/* <div className="w-full h-full border-2 flex justify-center items-center relative bg-center bg-cover bg-[url('/src/Public/Images/collections/3.jpg')] animate-fadeIn rounded-xl bg-opacity-0  shadow-2xl  backdrop-blur-xl hover:bg-[url('/src/Public/Images/collections/2.jpg')]"> */}
        {/* <h1 className="font-megatron text-[11vw] text-yellow-500 animate-fadeIn "> */}
        {/* <LogoIcon/> */}
        <h1 className="font-megatron text-[11vw]  bg-gradient-to-tr from-red-900 via-white to-blue-900 bg-clip-text text-transparent animate-fadeIn">
          Ekashunyam
        </h1>
        <h4 className="font-megatron text-2xl  bg-gradient-to-tr from-purple-900 via-yellow-900 to-yellow-400 bg-clip-text text-transparent animate-fadeIn">
          An Intercollegiate Fest
        </h4>
      </div>

      {/* <Tilt
        transitionSpeed={10000}
        perspective={5000}
        tiltMaxAngleX={100}
        tiltMaxAngleY={20}
        className="w-full h-full cursor-pointer "
      >
        <div className="w-full h-full  bg-opacity-0  shadow-2xl  backdrop-blur-xl border-t-[5px] border-opacity-20 rounded-lg">
          <nav className=" ">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About us</li>
            </ul>
          </nav>
          <h1 className="text-9xl text-white font-megatron">Ekashunyam</h1>
        </div>
      </Tilt> */}
    </div>
  );
};

export default Landing;
