import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/Notes/noteContext";
import Alert from "./Alert";
const Login = (props) => {
  const [loginLoading, setLoginLoading] = useState(false);
  const context = useContext(noteContext);
  const { showAlert, alert, base } = context;
  let navigate = useNavigate();
  const [lUser, setLUser] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setLUser({ ...lUser, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginLoading(true);
    const response = await fetch(`${base}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({
        email: lUser.email,
        password: lUser.password,
      }),
    });
    const json = await response.json();
    if (json.authToken) {
      localStorage.setItem("token", json.authToken);
      navigate("/SanskarBook/");
      showAlert("success", "Login Successfull");
    } else {
      showAlert("warning", "Invalid Credentials");
    }
    setLoginLoading(false);
  };

  return loginLoading ? (
    <>
      <div
        className="d-flex"
        style={{
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <div
          className="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div
        className="d-flex"
        style={{
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        Please wait. This can take upto 50 seconds.
      </div>
    </>
  ) : (
    <>
      <div className="d-flex">
        <div>Hii</div>
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={lUser.email}
                name="email"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={lUser.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
