// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       const jwtToken = Cookies.get("access-token");
//       if (jwtToken) {
//         try {
//           const response = await axios.post("/api/verifyToken", {
//             token: jwtToken,
//           });
//           setIsAuthenticated(response.data.authorized);
//         } catch (error) {
//           console.error("Error in authorizing:", error);
//           setIsAuthenticated(false);
//         }
//       } else {
//         setIsAuthenticated(false);
//       }
//     };
//     checkAuthentication();
//   }, []);

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {isAuthenticated ? (
//         <button>Edit</button>
//       ) : (
//         <button onClick={() => navigate("/register")}>Register</button>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@/components/HomePage/Buttons/Button";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await axios.get("/user/verifyToken", {
  //         validateStatus: function (status) {
  //           return status < 500;
  //         },
  //       });
  //       if (!response.data.authorized ) {
  //         console.log(response.data.message);
  //         setIsAuthenticated(false);
  //       } else {
  //         setIsAuthenticated(true);
  //       }
  //     } catch (error) {
  //       console.error("Error in authorizing:", error.message);
  //       setIsAuthenticated(false);
  //     } finally {
  //       setloading(false);
  //     }
  //   };
  //   checkAuthentication();
  // }, []);

  return (
    <>
      <div className="bg-sky-500 h-screen flex border-2 flex-col items-center gap-20 p-10 justify-center">
        <h1 className="text-8xl">Home Page</h1>

        {/* {loading ? (
          <p>Loading...</p>
        ) : isAuthenticated ? (
          <Button text={"Edit"} click={"/register"}></Button>
        ) : (
          <Button text={"Register"} click={"/login"}></Button>
        )} */}

        <Button text={"Register"} click={"/register"}></Button>
      </div>
    </>
  );
};

export default Home;
