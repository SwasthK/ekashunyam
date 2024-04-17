import React from "react";

const Brochure = () => {
  return (
    <>
      <div className="bg-[#FEB608] w-screen h-screen p-10 px-8 sm:px-10 xl:px-96 lg:px-80 bg-center bg-cover bg-[url('/src/Public/Images/collections/2.jpg')]">
        <div className="bg-black rounded-3xl xl:px-10 xl:py-14 px-6 py-14 flex flex-col gap-4 bg-center  bg-cover bg-[url('/src/Public/t2.jpg')]">
          <div className="">
            <h1 className="text-[#ffffff] text-6xl font-gilroy-light">
              Download .
            </h1>
            <p className="font-gilroy-light tracking-wider text-[#FEB608]">
              Fetch all the details at one shot
            </p>
          </div>
          <div className="">
            <button className="bg-white px-8 py-1 rounded-md animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 ">
              <a
                href="/src/Public/brochure_download/IT.pdf"
                download="Brochure"
              >
                GET HERE
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brochure;
