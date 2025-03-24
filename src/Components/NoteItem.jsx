import React, { useContext } from "react";
import noteContext from "../Context/Notes/noteContext";
import { Link } from "react-router-dom";

function NoteItem(props) {
  const context = useContext(noteContext);
  const { mode } = context;
  const style = {
    color: mode === "light" ? "black" : "white",
    backgroundColor: mode === "light" ? "white" : "#393A3A",
  };
  const titleFixer = (title) => {
    if (title.length >= 53) {
      return title.slice(0, 51) + "...";
    } else {
      // let ltitle = title + " ";
      // for (let i = 0; i < 52 - title.length; i++) {
      //   ltitle += "\u00A0";
      // }
      return title;
    }
  };
  const contentFixer = (content) => {
    if (content.length >= 103) {
      return content.slice(0, 101) + "...";
    } else {
      // let lcontent = content + " ";
      // for (let i = 0; i < 102 - content.length; i++) {
      //   lcontent += "\u00A0";
      // }
      return content;
    }
  };
  return (
    <>
      <div className="card" style={style}>
        {props.note.tag && props.note.tag !== "" && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge  bg-primary">
              {props.note.tag.length > 15
                ? props.note.tag.slice(0, 15) + "..."
                : props.note.tag}
            </span>
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{titleFixer(props.note.title)}</h5>
          <p className="card-text">{contentFixer(props.note.content)}</p>
          <div className="d-flex" style={{ flexWrap: "wrap" }}>
            <div style={{ paddingRight: "5px" }}>
              <div
                className="btn btn-sm btn-primary"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.viewNote(props.note);
                }}
              >
                View
              </div>
            </div>
            <div style={{ paddingRight: "5px" }}>
              <div
                className="btn btn-sm btn-success"
                onClick={() => {
                  props.updateNote(props.note);
                }}
              >
                Update
              </div>
            </div>

            <div
              className="btn btn-sm btn-danger"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.deleteNote(props.note);
              }}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteItem;
