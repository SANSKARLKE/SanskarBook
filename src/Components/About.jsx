import React, { useContext, useEffect } from "react";
import noteContext from "../Context/Notes/noteContext";
function About() {
  const context = useContext(noteContext);
  const { mode } = context;
  const style = {
    color: mode === "light" ? "black" : "white",
    backgroundColor: mode === "light" ? "white" : "#282828",
  };
  return <div style={style}>About Component</div>;
}

export default About;
