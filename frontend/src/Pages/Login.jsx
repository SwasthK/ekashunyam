import Signup from "@/components/Login/Signup";

const Login = () => {

  return (
    <>
      <div>
        <p className="text-4xl text-gray-900 dark:text-white text-center mb-8 capitalize font-semibold">
          Credentials
        </p>
        <Signup></Signup>
      </div>
    </>
  );
};

export default Login;
