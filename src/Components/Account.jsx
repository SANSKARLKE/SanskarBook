import React, { useEffect, useContext, useState, useRef } from "react";
import noteContext from "../Context/Notes/noteContext";
import { useNavigate } from "react-router-dom";

function Account() {
  const [dataLoading, setDataLoading] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const handleDeleteClick = () => {
    ref.current.click();
  };
  const navigate = useNavigate();
  const [user, setUser] = useState({ _id: "", name: "", email: "", date: "" });
  const context = useContext(noteContext);
  const { base, authToken, showAlert, notes, getAllNotes, deleteNote, mode } =
    context;
  const style = {
    color: mode === "light" ? "black" : "white",
    backgroundColor: mode === "light" ? "white" : "#282828",
  };
  const style2 = {
    color: mode === "light" ? "black" : "white",
    backgroundColor: mode === "light" ? "white" : "#282828",
    paddingTop: "60px",
  };
  useEffect(() => {
    if (authToken) {
      handleGetData();
    }
    if (!localStorage.getItem("SanskarBookToken")) {
      navigate("/SanskarBook/login");
    }
  }, [authToken]);
  const handleGetData = async () => {
    setDataLoading(true);
    const response = await fetch(`${base}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    if (json.name) {
      setUser({
        _id: json._id,
        name: json.name,
        email: json.email,
        date: json.date,
      });
      await getAllNotes();
    } else {
      showAlert("warning", "Please login again");
    }
    setDataLoading(false);
  };
  const handleDeleteAccount = async () => {
    ref2.current.click();
    for (let i = 0; i < notes.length; i++) {
      await deleteNote(notes[i]._id);
    }
    const response = await fetch(`${base}/api/auth/deleteuser`, {
      method: "DELETE",
      headers: {
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    if (json.message === "user deleted") {
      showAlert("success", "Account Deleted Successfully");
      localStorage.removeItem("SanskarBookToken");
      navigate("/SanskarBook/login");
    } else {
      showAlert("warning", "Please login again");
    }
  };
  return dataLoading ? (
    <div style={style2}>
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
    <div className="container my-3" style={style2}>
      <div
        className="d-flex my-3"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "15px",
        }}
      >
        <h3>Your Account Details</h3>
        <div className="btn btn-danger" onClick={handleDeleteClick}>
          Delete Account
        </div>
      </div>
      <div className="d-flex" style={{ paddingTop: "15px" }}>
        <strong>
          <p>Id : </p>
        </strong>
        <p style={{ paddingLeft: "5px" }}>{user._id}</p>
      </div>
      <div className="d-flex">
        <strong>
          <p>Name : </p>
        </strong>
        <p style={{ paddingLeft: "5px" }}>{user.name}</p>
      </div>
      <div className="d-flex">
        <strong>
          <p>Email : </p>
        </strong>
        <p style={{ paddingLeft: "5px" }}>{user.email}</p>
      </div>
      <div className="d-flex">
        <strong>
          <p>Date Account Created : </p>
        </strong>
        <p style={{ paddingLeft: "5px" }}>
          {new Date(user.date).toGMTString()}
        </p>
      </div>
      <div className="d-flex">
        <strong>
          <p>Notes : </p>
        </strong>
        <p style={{ paddingLeft: "5px" }}>{notes.length}</p>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#deleteAccountModal"
        ref={ref}
        hidden
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="deleteAccountModal"
        tabIndex="-1"
        aria-labelledby="deleteAccountModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              backgroundColor: mode === "light" ? "white" : "#393A3A",
            }}
          >
            <div
              className="modal-header"
              style={{ backgroundColor: "#FF5D6D", color: "black" }}
            >
              <h1 className="modal-title fs-5" id="deleteAccountModalLabel">
                Delete Account
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete your account?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className={`btn btn-sm btn-outline-${
                  mode === "light" ? "secondary" : "light"
                }`}
                data-bs-dismiss="modal"
                ref={ref2}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
