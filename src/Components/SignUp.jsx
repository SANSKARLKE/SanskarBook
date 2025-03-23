import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/Notes/noteContext";
import Alert from "./Alert";
const SignUp = (props) => {
  const [createLoading, setCreateLoading] = useState(false);
  const context = useContext(noteContext);
  const { showAlert, alert, base } = context;
  const navigate = useNavigate();
  const [lUser, setLUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (event) => {
    setLUser({ ...lUser, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setCreateLoading(true);
    if (lUser.password === lUser.cpassword) {
      const response = await fetch(`${base}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": `application/json`,
        },
        body: JSON.stringify({
          name: lUser.name,
          email: lUser.email,
          password: lUser.password,
        }),
      });
      const json = await response.json();
      if (json.authToken) {
        localStorage.setItem("token", json.authToken);
        navigate("/");
        showAlert("success", "Account Created Successfully");
      } else {
        showAlert("warning", "Please enter another email");
      }
    } else {
      showAlert("warning", "Passwords do not match");
    }
    setCreateLoading(false);
  };
  return createLoading ? (
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
  ) : (
    <div>
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
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={lUser.name}
              name="name"
              onChange={handleChange}
            />
          </div>
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
              minLength={5}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              value={lUser.cpassword}
              name="cpassword"
              onChange={handleChange}
              minLength={5}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
