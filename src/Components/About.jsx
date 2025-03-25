import React, { useContext, useEffect } from "react";
import noteContext from "../Context/Notes/noteContext";
function About() {
  const context = useContext(noteContext);
  const { mode } = context;
  const style = {
    color: mode === "light" ? "black" : "white",
    backgroundColor: mode === "light" ? "white" : "#282828",
  };
  const style2 = {
    color: mode === "light" ? "black" : "white",
    backgroundColor: mode === "light" ? "white" : "#282828",
    paddingTop: "60px",
  };
  return <div style={style2}>About Component</div>;
}

export default About;
