import { Button, Checkbox, TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

import { useEffect } from "react";
import { useState } from "react";
import "./login2.css";
import { Link } from "react-router-dom";
import { Topbar } from "../../components/topbar/Topbar";
export const Login2 = () => {
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
    <Topbar/>
      <div className="login2-admin">
        <div className="container2">
          <div className="login2-container">
            <div className="-company-logo2">
            <h1 className="login2-text">PLEASE LOGIN OR REGISTER</h1>
            </div>

            <div className="login2-bottom">
             
              <form action="" className="login2-form">
              <label htmlFor="">Language</label>
              <select className="languageSelect" name="language" id="language">
                <option value="">Hindi</option>
                <option value="">English</option>
                <option value="">French</option>
                <option value="">Chinese</option>
                <option value="">Russian</option>
                <option value="">Spanish</option>
                <option value="">Greek</option>
                <option value="">Italian</option>
                <option value="">Polish</option>
                <option value="">Dutch</option>
                <option value="">Portuguese</option>
                <option value="">Hindi</option>
                <option value="">Hindi</option>
                <option value="">Hindi</option>
                <option value="">Hindi</option>
                <option value="">Hindi</option>

              </select>

                <label htmlFor="">Email Address</label>
                <input
                  variant="outlined"
                  // placeholder="Enter email"
                  className="inputBox2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="">Password</label>

                <input
                  variant="outlined"
                  // placeholder="Enter Password"
                  className="inputBox2"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <br />
                <ReCAPTCHA
                  className="captcha2"
                  style={{ width: "400px" }}
                  sitekey="6Lc1-XAgAAAAAC8ir5Q-zx28DH4P4HC7VQCDIPzj"
                  onChange={handleChange}
                />
                <div className="remember-me2" >
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
                  className="loginButton2"
                >
                  Login
                </Button>

                <Button
                  variant="contained"
                  style={{
                    height: "50px",
                    fontWeight: "600",
                  }}
                  // onClick={signinUser}
                  className="registerButton2"
                >
                  Register
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
