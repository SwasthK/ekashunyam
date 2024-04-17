import { MouseParallax, ScrollParallax } from "react-just-parallax";

const MyComponent = () => (
  <>
    <div className="hover:cursor-pointer bg-slate-800 overflow-hidden  relative">
      <div className="absolute top-0 left-0 bg-slate-600 h-screen w-screen bg-center bg-cover bg-[url('/src/Public/Images/collections/1.jpg')] "></div>
      <MouseParallax>
        <p className=" h-screen text-9xl flex justify-center items-center font-megatron">
          EKashunyam
        </p>
      </MouseParallax>
    </div>

    <ScrollParallax strength={0.1}>
      {/* <p className="bg-yellow-500 h-96 absolute">I'm reacting to scroll</p> */}
    </ScrollParallax>
  </>
);

export default MyComponent;
