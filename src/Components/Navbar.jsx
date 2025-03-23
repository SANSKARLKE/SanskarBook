import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../Context/Notes/noteContext";
function Navbar() {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { authToken, showAlert } = context;
  const handleLogout = () => {
    localStorage.removeItem("token");
    showAlert("success", "Logout Successfull");
    navigate("/login");
  };
  useEffect(() => {}, [authToken]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {localStorage.getItem("token") ? (
              <form className="d-flex" role="search">
                <Link
                  className="btn btn-primary mx-1"
                  role="button"
                  to="/account"
                >
                  Account
                </Link>
                <div
                  className="btn btn-danger mx-1"
                  role="button"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </form>
            ) : (
              <form className="d-flex" role="search">
                <Link
                  className="btn btn-primary mx-1"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/signup"
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
