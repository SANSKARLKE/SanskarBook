import React, { useContext } from "react";
import noteContext from "../Context/Notes/noteContext";

function UpdateModal(props) {
  const context = useContext(noteContext);
  const { mode } = context;
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
          <div
            className="modal-content"
            style={{
              backgroundColor: mode === "light" ? "white" : "#393A3A",
              color: mode === "light" ? "black" : "white",
            }}
          >
            <div
              className="modal-header"
              style={{ backgroundColor: "#44C187", color: "black" }}
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
                    style={{
                      backgroundColor: mode === "light" ? "white" : "#393A3A",
                      color: mode === "light" ? "black" : "white",
                    }}
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
                    rows="15"
                    style={{
                      backgroundColor: mode === "light" ? "white" : "#393A3A",
                      color: mode === "light" ? "black" : "white",
                    }}
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
                    style={{
                      backgroundColor: mode === "light" ? "white" : "#393A3A",
                      color: mode === "light" ? "black" : "white",
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className={`btn btn-outline-${
                  mode === "light" ? "secondary" : "light"
                } btn-sm`}
                data-bs-dismiss="modal"
                ref={props.ref2}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success"
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
