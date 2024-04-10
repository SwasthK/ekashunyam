import React from "react";
import { useState } from "react";
import useSignin from "@/Hooks/useSignin";
import Signup from "./Signup";

const Signin = () => {
  const { loading, signinverify } = useSignin();
  const [loginmode, setloginmode] = useState(true);
  const [signincontent, setsignincontent] = useState({
    email: "",
    password: "",
  });

  const handlesignin = async (e) => {
    e.preventDefault();
    await signinverify(signincontent);
  };

  return (
    <>
      {loginmode ? (
        <>
          {loading ? (
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div class="flex space-x-2 justify-center items-center bg-black p-6 rounded-lg shadow-lg">
                <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]  ease-in-out"></div>
                <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s] ease-in-out"></div>
                <div class="h-8 w-8 bg-white rounded-full animate-bounce ease-in-out "></div>
              </div>
            </div>
          ) : null}
          <div className="bg-black w-screen flex lg:justify-center lg:items-center lg:h-screen">
            <div className="flex flex-col lg:flex-row lg:items-center xl:w-3/4 lg:w-[90vw] lg:h-3/4 lg:rounded-xl w-screen ">
              <div className="bg-gray-500 h-80 bg-bottom bg-cover bg-[url('/src/Public/2.jpg')] lg:h-full lg:w-3/4 lg:rounded-xl "></div>
              <div className="px-16 py-14 lg:h-screen lg:w-full lg:pt-48 ">
                <form
                  onSubmit={handlesignin}
                  className="max-w-sm mx-auto flex-cols "
                >
                  <h1 className="text-2xl font-semibold text-gray-100">
                    Log in
                  </h1>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mt-8"
                    >
                      EMAIL OR USERNAME
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4 appearance-none"
                      autocomplete="off"
                      placeholder="Email or Username"
                      value={signincontent.email}
                      //   required
                      onChange={(e) =>
                        setsignincontent({
                          ...signincontent,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="mt-8 block mb-2 text-sm font-medium text-white"
                    >
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="shadow-sm px-6 bg-black mt-6 text-sm block w-full p-2.5 border-b-[1px] text-white outline-none pb-4"
                      placeholder="Password"
                      autocomplete="off"
                      value={signincontent.password}
                      //   required
                      onChange={(e) =>
                        setsignincontent({
                          ...signincontent,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-black bg-white w-full py-2.5 rounded-lg mt-6 hover:bg-slate-200 text-base font-semibold mb-6"
                  >
                    Log in now
                  </button>
                  <div className="flex items-center gap-1">
                    <p className="ms-2 text-sm font-medium text-white">
                      Don{"'"}t have an account yet ?{" "}
                    </p>
                    <p
                      className="text-blue-600 hover:underline hover:text-slate-500 hover:cursor-pointer dark:text-blue-500"
                      onClick={() => setloginmode(false)}
                    >
                      Register here
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default Signin;
