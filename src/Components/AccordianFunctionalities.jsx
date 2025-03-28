import React from "react";
import "./css.css";

const AccordianFunctionalities = (props) => {
  return (
    <div>
      <div
        className="accordion"
        id="accordionPanelsStayOpenExample"
        style={props.style}
      >
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={props.style}
            >
              <strong>Notes Management</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              With SanskarBook, you can save your notes on the web at any time
              by logging into our website. This ensures that you have access to
              them at all times, no matter where you are. Also, you have full
              control over already created notes. You can choose to update or
              delete them at any time. Rest assured that any notes you delete
              will also promptly disappear from our database.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={props.style}
            >
              <strong>Secure Access</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Since you require a password to login to your account, no one else
              can see your notes. This website uses your local storage to store
              an "authorization token", which allows us to verify your real
              identity, without you needing to login every time you open this
              website. Once you click logout, this token is removed and you will
              need to login once you visit this site again.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={props.style}
            >
              <strong>Full Control</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              You are always in control of your data. If at any time you feel
              like you no longer want your data on our servers, you can delete
              all your notes or delete your account entirely. Please note that
              once you delete your notes or account, there is no possibility of
              restoring it.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordianFunctionalities;
