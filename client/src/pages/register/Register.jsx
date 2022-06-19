import { Button, Checkbox, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { Topbar } from "../../components/topbar/Topbar";

import "./register.css";
export const Register = () => {
  const [signup, setSignup] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };
  console.log(signup);
  useEffect(() => {});

  // const signupUser = () => {
  //   fetch("http://localhost:8000/api/userData/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(signup),
  //   })
  //     .then((res) => {
  //       console.log("userpostdat", res);
  //       return res.json();
  //     })
  //     .then((user) => {
  //       console.log(user);
  //       setSignup(user);
  //     }).catch(err=>{
  //       console.log(err)
  //   })
  // };
  return (
    <>
      <Topbar />
      <div className="register-admin">
        <div className="registerContainer">
          <div className="register-container">
            <div className="registerText">
              <h1 className="register-text">REGISTER</h1>
              <div>
                <select
                  className="registerLanguageSelect"
                  name="language"
                  id="language"
                >
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
              </div>
            </div>

            <form action="" className="register-form">
              <div className="register-bottom">
                <div className="registerInformation">
                  <div className="registerPrimaryContactInformation">
                    <h2 className="inputHeading">
                      Primary Contact Information
                    </h2>
                    <label className="required" htmlFor="">
                      Firstname
                    </label>
                    <input
                      variant="outlined"
                      // placeholder="Enter Firstname"
                      className="registerInput"
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                    />
                    
                    <label className="required" htmlFor="">
                      Lastname
                    </label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Lastname"
                      className="registerInput"
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                    />

                  <label className="required" htmlFor="">Email Address</label>
                    <input
                      variant="outlined"
                      // placeholder="Enter email"
                      className="registerInput"
                      type="email"
                      name="email"
                      onChange={handleChange}
                    />
                    <label htmlFor="">Phone</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Phone Number"
                      className="registerInput"
                      type="number"
                      name="phone"
                      onChange={handleChange}
                    />
                    <label htmlFor="">Website</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Website"
                      className="registerInput"
                      type="website"
                      name="website"
                      onChange={handleChange}
                    />
                    <label htmlFor="">Position</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Password"
                      className="registerInput"
                      type="text"
                      name="position"
                      onChange={handleChange}
                    />
                    <label className="required" htmlFor="">Password</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Password"
                      className="registerInput"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                    <label className="required" htmlFor="">Repeat Password</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Password"
                      className="registerInput"
                      type="password"
                      name="repeatPassword"
                      onChange={handleChange}
                    />
                    
                    
                  </div>

                  <div className="registerCompanyInformation">
                    <h2 className="inputHeading">Company Information</h2>
                    <label className="required" htmlFor="">Company</label>
                    <input
                      variant="outlined"
                      // placeholder="Enter Company"
                      className="registerInput"
                      type="text"
                      name="company"
                      onChange={handleChange}
                    />
                    
                    <label htmlFor="">VAT Number</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Password"
                      className="registerInput"
                      type="text"
                      name="vatno"
                      onChange={handleChange}
                    />

                    <label htmlFor="">Phone</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Password"
                      className="registerInput"
                      type="number"
                      name="phone"
                      onChange={handleChange}
                    />
                    
                    <label htmlFor="">Country</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Password"
                      className="registerInput"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                    <label htmlFor="">City</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter City"
                      className="registerInput"
                      type="text"
                      name="city"
                      onChange={handleChange}
                    />
                    <label htmlFor="">Address</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Address"
                      className="registerInput"
                      type="text"
                      name="address"
                      onChange={handleChange}
                    />
                    <label htmlFor="">Zip Code</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter Zip Code"
                      className="registerInput"
                      type="number"
                      maxLength={6}
                      minLength={6}
                      name="zipCode"
                      onChange={handleChange}
                    />
                    <label htmlFor="">State</label>

                    <input
                      variant="outlined"
                      // placeholder="Enter State"
                      className="registerInput"
                      type="text"
                      name="state"
                      onChange={handleChange}
                    />
                   
                    
                  </div>
                </div>
                <br />
                <ReCAPTCHA
                  className="registerCaptcha"
                  style={{ width: "400px" }}
                  sitekey="6Lc1-XAgAAAAAC8ir5Q-zx28DH4P4HC7VQCDIPzj"
                  onChange={handleChange}
                />
                <br />

                <Button
                  variant="contained"
                  style={{
                    height: "50px",
                    fontWeight: "600",
                  }}
                  // onClick={signinUser}
                  className="registerButton"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
