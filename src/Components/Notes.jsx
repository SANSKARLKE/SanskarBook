import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/Notes/noteContext";
import NoteItem from "./NoteItem";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import NewModal from "./NewModal";
import ViewModal from "./ViewModal";
import Alert from "./Alert";

function Notes(props) {
  const navigate = useNavigate();
  const [lNote, setLNote] = useState({
    utitle: "",
    ucontent: "",
    utag: "",
    uid: "",
  });
  const [dNote, setDNote] = useState({
    dtitle: "",
    dcontent: "",
    did: "",
  });
  const [nNote, setNNote] = useState({
    ntitle: "",
    ncontent: "",
    ntag: "",
  });
  const [vNote, setVNote] = useState({
    vtitle: "",
    vcontent: "",
    vtag: "",
  });
  const context = useContext(noteContext);
  const {
    notes,
    getAllNotes,
    updateNote,
    deleteNote,
    addNote,
    user,
    alert,
    getUserInfo,
    mode,
    notesLoading,
  } = context;
  useEffect(() => {
    if (localStorage.getItem("SanskarBookToken")) {
      getAllNotes();
      getUserInfo();
    } else {
      navigate("/SanskarBook/login");
    }
  }, []);
  const localViewClick = (viewnote) => {
    viewRef.current.click();
    setVNote({
      vtitle: viewnote.title,
      vcontent: viewnote.content,
      vtag: viewnote.tag,
    });
  };
  const localUpdateNote = (currentnote) => {
    ref.current.click();
    setLNote({
      utitle: currentnote.title,
      ucontent: currentnote.content,
      utag: currentnote.tag,
      uid: currentnote._id,
    });
  };
  const localDeleteNote = (trignote) => {
    delRef.current.click();
    setDNote({
      did: trignote._id,
      dtitle: trignote.title,
      dcontent: trignote.content,
      dtag: trignote.tag,
    });
  };
  const localCreateNote = () => {
    newRef.current.click();
  };
  const ref = useRef(null);
  const ref2 = useRef(null);
  const delRef = useRef(null);
  const delRef2 = useRef(null);
  const newRef = useRef(null);
  const newRef2 = useRef(null);
  const viewRef = useRef(null);
  const viewRef2 = useRef(null);
  const handleCreateClick = () => {
    newRef2.current.click();
    addNote({
      title: nNote.ntitle,
      content: nNote.ncontent,
      tag: nNote.ntag,
    });
    setNNote({
      ntitle: "",
      ncontent: "",
      ntag: "",
    });
  };
  const handleDeleteClick = () => {
    delRef2.current.click();
    deleteNote(dNote.did);
  };
  const handleClick = () => {
    ref2.current.click();
    updateNote(lNote);
    setLNote({
      utitle: "",
      ucontent: "",
      utag: "",
      uid: "",
    });
  };
  const handleChange = (event) => {
    setLNote({ ...lNote, [event.target.name]: event.target.value });
  };
  const handleNewChange = (event) => {
    setNNote({ ...nNote, [event.target.name]: event.target.value });
  };
  const style = {
    color: mode === "light" ? "black" : "white",
    backgroundColor: mode === "light" ? "white" : "#282828",
  };
  return notesLoading ? (
    <div style={style}>
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
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <Alert alert={alert} />
      </div>
      <UpdateModal
        ref={ref}
        ref2={ref2}
        handleClick={handleClick}
        lNote={lNote}
        handleChange={handleChange}
      />
      <DeleteModal
        delRef={delRef}
        delRef2={delRef2}
        handleDeleteClick={handleDeleteClick}
        dNote={dNote}
      />
      <NewModal
        nNote={nNote}
        ref={newRef}
        ref2={newRef2}
        handleCreateClick={handleCreateClick}
        handleNewChange={handleNewChange}
      />
      <ViewModal ref={viewRef} ref2={viewRef2} vNote={vNote} />
      <div style={style}>
        <h3>Welcome, {user.name.at(0).toUpperCase() + user.name.slice(1)}</h3>
        <div
          className="d-flex my-3"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <h5>Your Notes</h5>
          <div className="btn btn-primary btn-sm" onClick={localCreateNote}>
            Add a note
          </div>
        </div>
        {notes.length === 0 && <div className="">No notes to display</div>}
        <div className="row">
          {notes.map((note) => {
            return (
              <div className="col-md-3 my-2">
                <NoteItem
                  updateNote={localUpdateNote}
                  deleteNote={localDeleteNote}
                  viewNote={localViewClick}
                  key={note._id}
                  note={note}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
