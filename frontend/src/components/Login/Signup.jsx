import useSignup from "@/Hooks/useSignup";
import React, { useState } from "react";
import Signin from "./Signin";

const colleges = [
  "College A",
  "College B",
  "College C",
  "College D",
  "College E",
];

const Signup = () => {
  const { loading, signupverify } = useSignup();
  const [loginmode, setloginmode] = useState(false);

  const [signupcontent, setsignupcontent] = useState({
    college: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handlesignup = async (e) => {
    e.preventDefault();
    await signupverify(signupcontent);
  };

  return (
    <>
      {!loginmode ? (
      <>
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="flex space-x-2 justify-center items-center bg-black p-6 rounded-lg shadow-lg">
              <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]  ease-in-out"></div>
              <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s] ease-in-out"></div>
              <div className="h-8 w-8 bg-white rounded-full animate-bounce ease-in-out "></div>
            </div>
          </div>
        ) : null}
        <div className="bg-black w-screen flex lg:justify-center lg:items-center lg:h-screen">
          <div className="flex flex-col lg:flex-row lg:items-center xl:w-3/4 lg:w-[90vw] lg:h-3/4 lg:rounded-xl w-screen">
            <div className="bg-gray-500 h-80 bg-bottom bg-cover bg-[url('/src/Public/4.jpeg')] lg:h-full lg:w-3/4 lg:rounded-xl animate-pulse duration-[4000]"></div>
            <div className="px-16 py-14 lg:h-screen lg:w-full lg:pt-16 sm:text-center">
            <h1 className="sm:text-3xl text-[4.99vw] text-yellow-500 font-megatron ">
                  Register with your e-mail
                </h1>
              <form
                onSubmit={handlesignup}
                className="max-w-sm mx-auto flex-cols text-left"
              >
               
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mt-8"
                  >
                    Your college name
                  </label>
                  <select
                    id="college"
                    value={signupcontent.college}
                    className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                    onChange={(e) =>
                      setsignupcontent({
                        ...signupcontent,
                        college: e.target.value,
                      })
                    }
                  >
                    <option value="" className="font-semibold text-[17px]">
                      Select your college
                    </option>
                    {colleges.map((college, index) => (
                      <option key={index} value={college} className="">
                        {college}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mt-8"
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                    placeholder="Enter your email"
                    value={signupcontent.email}
                    autoComplete="off"
                    //   required
                    onChange={(e) =>
                      setsignupcontent({
                        ...signupcontent,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white mt-8"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                    placeholder="Enter your password"
                    value={signupcontent.password}
                    //   required
                    onChange={(e) =>
                      setsignupcontent({
                        ...signupcontent,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="repeat-password"
                    className="block text-sm font-medium text-white mt-8"
                  >
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="repeat-password"
                    className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                    placeholder="Confirm password"
                    value={signupcontent.confirmpassword}
                    //   required
                    onChange={(e) =>
                      setsignupcontent({
                        ...signupcontent,
                        confirmpassword: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  // className="text-black bg-white  rounded-lg mt-6 hover:bg-slate-200 text-base font-semibold mb-6"
                  className="font-gilroy tracking-wider inline-flex h-12 w-full py-2.5 animate-shimmer items-center justify-center rounded-lg mb-6 mt-6 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50"
                >
                  Register now
                </button>
                <div className="flex items-center gap-1">
                  <p className="ms-2 text-sm font-medium text-white">
                    Already have an account ?{" "}
                  </p>
                  <p
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                    onClick={() => setloginmode(true)}
                  >
                    login here
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
      ) : (<Signin></Signin>
      )}
    </>
  );
};

export default Signup;
