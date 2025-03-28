import React, { useContext, useEffect } from "react";
import noteContext from "../Context/Notes/noteContext";
import AccordianFunctionalities from "./AccordianFunctionalities";
import Footer from "./Footer";
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
    paddingTop: "80px",
  };
  return (
    <>
      <div className="container" style={style2}>
        <center>
          <h3 style={{ paddingBottom: "10px" }}>
            SanskarBook - Your one stop solution for managing notes
          </h3>
        </center>
        <p style={{ paddingBottom: "10px" }}>
          Below is a brief overview of the functionalities available on this
          website
        </p>
        <AccordianFunctionalities style={style} />
        <p style={{ paddingTop: "20px" }}>
          Thanks for using my website. Have a great day.
        </p>
      </div>
      <div style={{ position: "fixed", bottom: "0", left: "0", right: "0" }}>
        <Footer />
      </div>
    </>
  );
}

export default About;
