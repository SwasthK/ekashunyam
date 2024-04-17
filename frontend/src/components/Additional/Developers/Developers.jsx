import React, { useEffect, useRef } from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const Developers = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end center "],
  });

  // const scale = useTransform(scrollYProgress, [0, 1], [1.6, 0.56]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 1]);
  const left = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    // <motion.div className="bg-image dark-overlay bg-center bg-cover bg-no-repeat bg-[url('/src/Public/11.jpg')] h-[75vh] ">
    <motion.div className=" bg-center bg-cover bg-no-repeat bg-black sm:h-screen md:h-auto">
      <div className="flex justify-center items-center gap-4   ">
        <motion.h1
          className="text-center pt-10 pb-10  font-megatron text-6xl text-white  "
          style={{ opacity }}
          transition={{ duration: 4.5 }}
        >
          Developers
        </motion.h1>
        <motion.h1
          className="text-center  font-megatron text-6xl"
          style={{ opacity }}
          transition={{ duration: 4.5 }}
        >
          <CodeBracketIcon className="h-10 w-10 text-blue-400 " />
        </motion.h1>
      </div>

      <section
        className="flex flex-col gap-14 justify-center items-center md:flex-row md:gap-28  md:pb-4"
        ref={ref}
      >
        <motion.div style={{ opacity }} className=" ">
          <motion.div className="h-40 w-40 bg-blue-400 rounded-full  md:h-44 md:w-44 " ></motion.div>
          <h3 className="text-white mt-4 font-gilroy-light text-center md:text-2xl">
            Shainil P.S
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            II BCA
          </h3>
        </motion.div>

        <div className="mb-10 md:m-0 ">
          <motion.div
            style={{ opacity }}
            transition={{ duration: 1.5 }}
            // ref={ref}
            // style={{ scale, opacity, left }}
            className="h-40 w-40 bg-yellow-400 relative rounded-full  md:h-44 md:w-44 "
          ></motion.div>
          <h3 className="text-white mt-4 font-gilroy-light text-center md:text-2xl">
            Swasthik K
          </h3>
          <h3 className="text-white mt-0 font-gilroy-light text-center">
            II BCA
          </h3>
        </div>
      </section>
    </motion.div>
  );
};

export default Developers;
