import React from "react";

function UpdateModal(props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={props.ref}
      ></button>

      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#44C187" }}
            >
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update your note
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
                  <label htmlFor="utitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="utitle"
                    name="utitle"
                    onChange={props.handleChange}
                    value={props.lNote.utitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ucontent" className="form-label">
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
                    id="ucontent"
                    name="ucontent"
                    onChange={props.handleChange}
                    value={props.lNote.ucontent}
                    rows="10"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="utag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="utag"
                    name="utag"
                    onChange={props.handleChange}
                    value={props.lNote.utag}
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
                className="btn btn-sm btn-success"
                onClick={props.handleClick}
                disabled={
                  props.lNote.utitle.length < 5 ||
                  props.lNote.ucontent.length < 5
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateModal;
