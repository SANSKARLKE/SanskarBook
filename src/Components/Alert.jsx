import React from "react";

function Alert(props) {
  const caper = (s) => {
    let lower = s.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <center>
            <strong>{caper(props.alert.type)}</strong> : {props.alert.message}
          </center>
        </div>
      )}
    </>
  );
}

export default Alert;
