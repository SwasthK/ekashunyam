import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Credentials = () => {
  const nav = useNavigate();
  const [reg, setreg] = useState({
    names: "",
    email: "",
    password: "",
  });

  const [log, setlog] = useState({
    emails: "",
    password: "",
  });

  axios.defaults.withCredentials = true;

  const handlereg = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        name: reg.names,
        email: reg.email,
        password: reg.password,
      })
      .then((res) => {
        nav("/");
      })
      .catch((err) => console.log(err));
  };

  const handlelog = (e) => {
    console.log(log.emails);
    console.log(log.password);
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email: log.emails,
        password: log.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.Login) {
          console.log(res.data);
          nav("/");
        } else {
          console.log(res.data);
          nav("/register");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const jwtToken = Cookies.get("access-token");
      if (jwtToken) {
        try {
          const response = await axios.post("/api/verifyToken", {
            token: jwtToken,
          });
          if (response.data.authorized) {
            nav("/");
            return;
          }
        } catch (error) {
          console.error("Error in authorizing:", error);
          nav("/");
        }
      }
    };
    checkAuthentication();
  }, [nav]);

  return (
    <>
      <div className="cred">Credentials</div>
      <form onSubmit={handlereg}>
        <p>Enter name</p>
        <input
          type="text"
          onChange={(e) => setreg({ ...reg, names: e.target.value })}
          name="names"
        />
        <p>Enter email</p>
        <input
          type="text"
          onChange={(e) => setreg({ ...reg, email: e.target.value })}
          name="email"
        />
        <p>Enter pasword</p>
        <input
          type="text"
          onChange={(e) => setreg({ ...reg, password: e.target.value })}
          name="password"
        />
        <button className="btn">Register</button>
      </form>

      <form onSubmit={handlelog}>
        <p>Enter email</p>
        <input
          type="text"
          onChange={(e) => setlog({ ...log, emails: e.target.value })}
          name="emails"
        />
        <p>Enter pasword</p>
        <input
          type="text"
          onChange={(e) => setlog({ ...log, password: e.target.value })}
          name="passwords"
        />
        <button className="btn">login</button>
      </form>
    </>
  );
};

export default Credentials;
