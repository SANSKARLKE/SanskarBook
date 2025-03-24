import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/Notes/noteContext";
import Alert from "./Alert";
import "./Login.css";
const Login = (props) => {
  const [loginLoading, setLoginLoading] = useState(false);
  const context = useContext(noteContext);
  const { showAlert, alert, base, mode } = context;
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
    <div
      style={{
        backgroundColor: mode === "light" ? "white" : "#282828",
        color: mode === "light" ? "black" : "white",
      }}
    >
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
    </div>
  ) : (
    <div style={{ height: "90vh" }}>
      <div
        className={`flex-container`}
        style={{
          "--background-color": mode === "light" ? "white" : "#282828",
          "--text-color": mode === "light" ? "black" : "white",
        }}
      >
        <div
          className={`flex-container-2`}
          // style={{
          //   alignItems: "center",
          //   justifyContent: "flex-start",
          //   flexDirection: "column",
          //   paddingLeft: "50px",
          //   paddingRight: "50px",
          // }}
        >
          <h3 style={{ paddingTop: "50px" }}>Welcome to SanskarBook</h3>
          <p
            style={{
              textAlign: "justify",
              paddingTop: "25px",
            }}
          >
            Welcome to SanskarBook, your one-stop solution for managing notes
            effortlessly online. This website is designed to make the process of
            creating, viewing, updating, and deleting your notes as simple and
            efficient as possible, all accessible from the web. With seamless
            backend database integration, SanskarBook ensures that you can log
            in to your account from any device, whether it's a laptop, tablet,
            or smartphone, and access your notes instantly without any hassle.
            <br /> <br />
            Once you log in, the Account page serves as a hub for your personal
            information. It displays all your details clearly, giving you the
            option to manage your account settings or even delete your account
            if needed. If you're curious about how SanskarBook works behind the
            scenes, the About page provides a detailed explanation of the
            website's functionality, ensuring you fully understand the features
            and the underlying technology.
            <br /> <br /> It's important to note that you can only access
            SanskarBook through the official{" "}
            <a href="https://sanskarlke.github.io/SanskarBook">base link</a>.
            After entering the website through this link, you can use the
            intuitive navigation buttons built into the site to seamlessly move
            between pages, explore its features, and make the most of your
            experience. Whether you're organizing your thoughts or jotting down
            important ideas, SanskarBook is here to simplify the way you handle
            your notes.
          </p>
        </div>
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
        <div
          className="d-flex"
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              paddingRight: "50px",
              paddingLeft: "50px",
              paddingBottom: "25px",
            }}
          >
            <center style={{ paddingTop: "10%" }}>
              <img
                src="logo.png"
                style={{
                  width: "30%",
                  height: "30%",
                  borderRadius: "20%",
                }}
              ></img>
              <h5 style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                Please login below to continue
              </h5>
            </center>
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
            <div style={{ paddingTop: "15px" }}>
              <button type="submit" className="btn btn-primary">
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
