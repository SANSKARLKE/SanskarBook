import React from "react";

function DeleteModal(props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
        ref={props.delRef}
      ></button>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#FF5D6D" }}
            >
              <h1 className="modal-title fs-5" id="deleteModalLabel">
                Delete this note?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>
                {props.dNote.dtitle
                  ? props.dNote.dtitle.length >= 53
                    ? props.dNote.dtitle.slice(0, 50) + "..."
                    : props.dNote.dtitle
                  : ""}
              </h5>
              <div>
                {props.dNote.dcontent
                  ? props.dNote.dcontent.length >= 103
                    ? props.dNote.dcontent.slice(0, 100) + "..."
                    : props.dNote.dcontent
                  : ""}
              </div>
              {props.dNote.dtag !== undefined ? (
                <div>
                  <br />
                  <div>It has this tag :</div>
                  <div>{props.dNote.dtag}</div>
                </div>
              ) : null}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                data-bs-dismiss="modal"
                ref={props.delRef2}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={props.handleDeleteClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
