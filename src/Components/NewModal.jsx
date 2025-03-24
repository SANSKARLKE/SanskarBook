import React from "react";

function NewModal(props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#newModal"
        ref={props.ref}
      ></button>

      <div
        className="modal fade"
        id="newModal"
        tabIndex="-1"
        aria-labelledby="newModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#70A7F9" }}
            >
              <h1 className="modal-title fs-5" id="newModalLabel">
                Create a new note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="ntitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ntitle"
                    name="ntitle"
                    onChange={props.handleNewChange}
                    value={props.nNote.ntitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ncontent" className="form-label">
                    Content
                  </label>
                  {/* <input
                    type="text"
                    className="form-control"
                    id="ucontent"
                    name="ucontent"
                    onChange={props.handleChange}
                    value={props.lNote.ucontent}
                  /> */}
                  <textarea
                    className="form-control"
                    id="ncontent"
                    name="ncontent"
                    onChange={props.handleNewChange}
                    value={props.nNote.ncontent}
                    rows="15"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="ntag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ntag"
                    name="ntag"
                    onChange={props.handleNewChange}
                    value={props.nNote.ntag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                data-bs-dismiss="modal"
                ref={props.ref2}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={props.handleCreateClick}
                disabled={
                  props.nNote.ntitle.length < 5 ||
                  props.nNote.ncontent.length < 5
                }
              >
                Create Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewModal;
