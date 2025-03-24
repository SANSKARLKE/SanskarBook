import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../Context/Notes/noteContext";
function Navbar() {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { authToken, showAlert, mode, setMode } = context;
  document.body.style.backgroundColor = mode === "light" ? "white" : "#282828";
  const handleLogout = () => {
    localStorage.removeItem("token");
    showAlert("success", "Logout Successfull");
    navigate("/SanskarBook/login");
  };
  useEffect(() => {}, [authToken]);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${
          mode === "light" ? "light" : "dark"
        }`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              mode === "light" ? "dark" : "light"
            }`}
            to="/SanskarBook/"
          >
            SanskarBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/SanskarBook/" ? "active" : ""
                  } text-${mode === "light" ? "dark" : "light"}`}
                  aria-current="page"
                  to="/SanskarBook/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/SanskarBook/about" ? "active" : ""
                  } text-${mode === "light" ? "dark" : "light"}`}
                  to="/SanskarBook/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {localStorage.getItem("token") ? (
              <form
                className="d-flex"
                role="search"
                style={{ alignItems: "center" }}
              >
                <div
                  className="form-check form-switch space-side"
                  style={{ paddingRight: "10px" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setMode(mode === "light" ? "dark" : "light");
                    }}
                  />
                  <label
                    className={`form-check-label text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Dark Mode
                  </label>
                </div>
                <Link
                  className="btn btn-outline-primary mx-1"
                  role="button"
                  to="/SanskarBook/account"
                >
                  Account
                </Link>
                <div
                  className="btn btn-outline-danger mx-1"
                  role="button"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </form>
            ) : (
              <form
                className="d-flex"
                role="search"
                style={{ alignItems: "center" }}
              >
                <div
                  className="form-check form-switch space-side"
                  style={{ paddingRight: "10px" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setMode(mode === "light" ? "dark" : "light");
                    }}
                  />
                  <label
                    className={`form-check-label text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Dark Mode
                  </label>
                </div>
                <Link
                  className="btn btn-primary mx-1"
                  to="/SanskarBook/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/SanskarBook/signup"
                  role="button"
                >
                  SignUp
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
