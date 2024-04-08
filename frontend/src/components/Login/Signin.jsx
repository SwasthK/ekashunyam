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
      {loading ? (
        <div>Loading...</div>
      ) : loginmode ? (
        <form onSubmit={handlesignin} className="max-w-sm mx-auto flex-col s">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="text"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter your email"
              value={signincontent.email}
              //   required
              onChange={(e) =>
                setsignincontent({ ...signincontent, email: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter your password"
              value={signincontent.password}
              //   required
              onChange={(e) =>
                setsignincontent({ ...signincontent, password: e.target.value })
              }
            />
          </div>
          <div className="flex mb-5 items-center gap-1">
            <p className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Don{"'"}t have an account ?{" "}
            </p>
            <p
              className="text-blue-600 hover:underline hover:cursor-pointer dark:text-blue-500"
              onClick={() => setloginmode(false)}
            >
              create one
            </p>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default Signin;
