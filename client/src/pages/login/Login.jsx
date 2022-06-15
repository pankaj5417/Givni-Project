import { Button, Checkbox, TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

import { useEffect } from "react";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
export const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [userDetails, setUserDetails] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  console.log(login);
  useEffect(() => {}, []);
  // const signinUser = () => {
  //   fetch("http://localhost:8000/api/userData/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(login),
  //   })
  //     .then((res) => {
  //       console.log("userpostdata", res);
  //       return res.json();
  //     })
  //     .then((user) => {
  //       console.log(user);
  //       setUserDetails(user);
  //       localStorage.setItem("userData", JSON.stringify(user));
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //   })
  // };
  // const forgotPassword = () => {
  //   fetch("http://localhost:8000/api/userData/forgotPassword", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(login),
  //   })
  //     .then((res) => {
  //       console.log("userpostdata", res);
  //       return res.json();
  //     })
  //     .then((user) => {
  //         console.log(user)
  //     })
  //     .catch(err=>{
  //         console.log(err)
  //     })
  // };

  return (
    <>
      <div className="login-admin">
        <div className="container">
          <div className="login-container">
            <div className="-company-logo">
              <img
                className="image"
                src="https://perfexcrm.com/demo/uploads/company/logo.png"
                alt=""
              />
            </div>

            <div className="login-bottom">
              <h1 className="login-text">LOGIN</h1>
              <form action="" className="login-form">
                <label htmlFor="">Email Address</label>
                <input
                  variant="outlined"
                  // placeholder="Enter email"
                  className="inputBox"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="">Password</label>

                <input
                  variant="outlined"
                  // placeholder="Enter Password"
                  className="inputBox"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <br />
                <ReCAPTCHA
                  className="captcha"
                  style={{ width: "400px" }}
                  sitekey="6Lc1-XAgAAAAAC8ir5Q-zx28DH4P4HC7VQCDIPzj"
                  onChange={handleChange}
                />
                <div className="remember-me" >
                  <Checkbox />
                  &nbsp;
                  <span>Remember me</span>
                </div>

                <br />
                <Button
                  variant="contained"
                  style={{
                    height: "50px",
                    fontWeight: "600",
                  }}
                  // onClick={signinUser}
                  className="loginButton"
                >
                  Login
                </Button>
                <br />
                <Link
                  to=""
                  style={{ textDecoration: "none", color: "#337ab7" }}
                >
                  <p>Forgot password ?</p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
