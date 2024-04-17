import React from "react";
import Marquee from "react-fast-marquee";

const coordinators = [
  {
    chief: [
      {
        name: "John Doe",
        position: "assistent professor of Bca",
        image: "/src/Public/images/management/chief/2.jpg",
      },
      {
        name: "Jane kane",
        position: "Chief",
        image: "/src/Public/6.png",
      },
      {
        name: "Rajesh",
        position: "Chief",
        image: "/src/Public/images/gradients/gradient-7.webp",
      },
    ],
  },
];

const Marquees = () => {
  return (
    <>
      <div className="w-screen bg-black py-10 flex justify-center items-center flex-col grid-bg " >
        <h1 className="font-megatron text-[8vw]  bg-gradient-to-tr from-purple-900 via-yellow-50 to-yellow-500 bg-clip-text text-transparent">
          Organizing commitee
        </h1>

        <div className="font-gilroy-light text-yellow-500 mt-7 mb-7">
          <p>chieft person</p>
        </div>

        <Marquee speed={80}>
          {coordinators[0].chief.map((coordinator, index) => {
            return (
              <div key={index}>
                <div className="w-48 h-56 ml-8 rounded-3xl flex flex-col gap-3">
                  <div
                    className="h-full w-full  border bg-center bg-cover rounded-3xl border-none"
                    style={{ backgroundImage: `url(${coordinator.image})` }}
                  ></div>
                  <div className="ml-2">
                    <p className="text-white font-bold">{coordinator.name}</p>
                    <p className="text-white font-gilroy-light text-sm">
                      {coordinator.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>

        <div className="font-gilroy-light text-yellow-500 mt-7 mb-7">
          <p>Staff coordinators</p>
        </div>

        <Marquee direction="right" speed={100}>
          {coordinators[0].chief.map((coordinator, index) => {
            return (
              <div
                key={index}
                className="w-52 h-56  ml-8 rounded-3xl flex flex-col gap-3"
              >
                <div
                  className="h-full w-full  border bg-center bg-cover rounded-3xl border-none"
                  style={{ backgroundImage: `url(${coordinator.image})` }}
                ></div>
                <div className="ml-2">
                  <p className="text-white font-bold">{coordinator.name}</p>
                  <p className="text-white font-gilroy-light text-sm">
                    {coordinator.position}
                  </p>
                </div>
              </div>
            );
          })}
        </Marquee>

        <div className="font-gilroy-light text-yellow-500 mt-7 mb-7">
          <p>Student coordinators</p>
        </div>

        <Marquee speed={80}>
          {" "}
          {coordinators[0].chief.map((coordinator, index) => {
            return (
              <div
                key={index}
                className="w-52 h-56  ml-8 rounded-3xl flex flex-col gap-3"
              >
                <div
                  className="h-full w-full  border bg-center bg-cover rounded-3xl border-none"
                  style={{ backgroundImage: `url(${coordinator.image})` }}
                ></div>
                <div className="ml-2">
                  <p className="text-white font-bold">{coordinator.name}</p>
                  <p className="text-white font-gilroy-light text-sm">
                    {coordinator.position}
                  </p>
                </div>
              </div>
            );
          })}
        </Marquee>
        
      </div>
    </>
  );
};

export default Marquees;
