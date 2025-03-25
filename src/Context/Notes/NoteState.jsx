import React, { useState, useRef, useEffect } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const [mode, setMode] = useState("");

  // Use useEffect to set the initial mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("SanskarBookMode");
    if (savedMode) {
      setMode(savedMode);
    } else {
      localStorage.setItem("SanskarBookMode", "light");
    }
  }, []);
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("SanskarBookMode", "dark");
    } else {
      setMode("light");
      localStorage.setItem("SanskarBookMode", "light");
    }
  };

  const [notesLoading, setNotesLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const base = "https://sanskarbookbackend.onrender.com";
  const authToken = localStorage.getItem("SanskarBookToken");
  const getAllNotes = async () => {
    setNotesLoading(true);
    const response = await fetch(`${base}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
    });
    const json = await response.json();
    if (json.message) {
      showAlert("warning", "Unable to fetch Notes");
    } else {
      setNotes(json);
    }
    setNotesLoading(false);
  };
  const [user, setUser] = useState({ name: "sanskar", email: "" });
  const getUserInfo = async () => {
    const response = await fetch(`${base}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "auth-token": `${authToken}`,
      },
    });
    const json = await response.json();
    if (json.message === "invalid token") {
      //error fix
    } else {
      setUser({ name: json.name, email: json.email });
    }
  };
  const [notes, setNotes] = useState([]);

  const deleteNote = async (lid) => {
    const response = await fetch(`${base}/api/notes/deletenote/${lid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
    });
    const json = await response.json();
    if (json.message != "deletion successfull") {
      showAlert("warning", "Deletion Unsuccessfull");
      //fix error
    } else {
      const newNotes = notes.filter((lnote) => {
        return lnote._id != lid;
      });
      setNotes(newNotes);
      showAlert("success", "Deletion Successfull");
    }
  };
  const addNote = async (passnote) => {
    // api call later
    const title = passnote.title;
    const content = passnote.content;
    const tag = passnote.tag && passnote.tag !== "" ? passnote.tag : null;
    let serviceNote = {};
    if (passnote.tag) {
      serviceNote = {
        title: passnote.title,
        content: passnote.content,
        tag: passnote.tag,
      };
    } else {
      serviceNote = {
        title: passnote.title,
        content: passnote.content,
      };
    }
    const response = await fetch(`${base}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
      body: JSON.stringify(serviceNote),
    });
    const json = await response.json();
    if (json.message) {
      showAlert("warning", "Note Creation Unsuccessfull");
    } else {
      setNotes(notes.concat(json));
      showAlert("success", "Note Creation Successfull");
    }
  };
  const updateNote = async (lnote) => {
    const response = await fetch(`${base}/api/notes/updatenote/${lnote.uid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
      body: JSON.stringify({
        title: lnote.utitle,
        content: lnote.ucontent,
        tag: lnote.utag,
      }),
    });
    const json = await response.json();
    if (json.message) {
      showAlert("warning", "Updation Unsuccessfull");
    } else {
      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let i = 0; i < newNotes.length; i++) {
        if (newNotes[i]._id == lnote.uid) {
          newNotes[i].title = lnote.utitle;
          newNotes[i].content = lnote.ucontent;
          newNotes[i].tag = lnote.utag;
          break;
        }
      }
      setNotes(newNotes);
      showAlert("success", "Updation Successfull");
    }
  };
  return (
    <noteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
        getAllNotes,
        user,
        setUser,
        getUserInfo,
        alert,
        setAlert,
        showAlert,
        base,
        authToken,
        notesLoading,
        mode,
        changeMode,
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
