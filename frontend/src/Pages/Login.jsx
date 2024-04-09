import Signin from "@/components/Login/Signin";

const Login = () => {
  return (
    <>
      <div>
        <p className="text-4xl text-gray-900 dark:text-white text-center mb-8 capitalize font-semibold">
          Credentials
        </p>
        <Signin></Signin>
      </div>
    </>
  );
};

export default Login;
