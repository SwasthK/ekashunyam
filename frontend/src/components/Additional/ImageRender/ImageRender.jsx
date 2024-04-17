import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";
import "./ImageRender.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(scrollTrigger);

const ImgRender = () => {
  const box = useRef();

  useGSAP(
    () => {
      let tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          start: "50% 50%",
          end: "500% 50%",
          pin: true,
          // markers: true,
          scrub: 1,
        },
      });

      tl7.to("#demo", {
        bottom: "7%",
      });

      tl7.to(
        ".our-work-txt-div",
        {
          height: "60vh",
        },
        "height"
      );
      tl7.to(
        ".our-work-txt",
        {
          height: "60vh",
        },
        "height"
      );
      tl7.to(
        "#our",
        {
          left: "0%",
        },
        "height"
      );
      tl7.to(
        "#work",
        {
          right: "0%",
        },
        "height"
      );
      tl7.to(".scroll-img", {
        marginTop: "-300%",
      });
    },
    { scope: box }
  );

  return (
    <>
      <div id="main" ref={box}>
        <div className="part-7 ">
          <div className="our-work-txt rounded-3xl font-megatron ">
            <h1 id="our" className="">
              Rules
            </h1>
            {/* <h1 id="work">Dont's</h1> */}
          </div>
          <div className="our-work-txt-div rounded-3xl">
            <div className="scroll-work bg-blue-600">
              <div className="scroll-img ">
                <div className="w-full bg-center bg-cover bg-blue-700  p-12 text-white pt-28 font-gilroy-light flex flex-col gap-10">
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="bg-gray-100 w-full h-full">
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>

                {/* <div className="w-full bg-center bg-cover bg-red-700 "></div>
                <div className="w-full bg-center bg-cover bg-green-700  "></div>
                <div className="w-full bg-center bg-cover bg-purple-100  "></div> */}
                {/* <div className="w-full h-screen bg-center  bg-cover bg-[url('/src/Public/7.jpg')]"></div> */}
              </div>
            </div>
          </div>
          {/* <button id="demo">Book a demo</button> */}
        </div>
      </div>
    </>
  );
};

export default ImgRender;
