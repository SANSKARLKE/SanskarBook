import React, { useContext, useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NoteState from "./Context/Notes/NoteState";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Account from "./Components/Account";
import Learner from "./Components/Learner.jsx";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/SanskarBook/" exact element={<Home />} />
            <Route path="/SanskarBook/about" exact element={<About />} />
            <Route path="/SanskarBook/login" exact element={<Login />} />
            <Route path="/SanskarBook/signup" exact element={<SignUp />} />
            <Route path="/SanskarBook/account" exact element={<Account />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
