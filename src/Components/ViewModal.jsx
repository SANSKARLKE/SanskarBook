import React from "react";

function ViewModal(props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#viewModal"
        ref={props.ref}
      ></button>

      <div
        className="modal fade"
        id="viewModal"
        tabIndex="-1"
        aria-labelledby="viewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#70a7f9" }}
            >
              <h1 className="modal-title fs-5" id="viewModalLabel">
                <div>View your note</div>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>{props.vNote.vtitle}</h5>
              <h6>{props.vNote.vtag ? props.vNote.vtag : null}</h6>
              <p>{props.vNote.vcontent}</p>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                data-bs-dismiss="modal"
                ref={props.ref2}
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewModal;
