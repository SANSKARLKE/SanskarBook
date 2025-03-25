import React, { useContext } from "react";
import Notes from "./Notes";
function Home(props) {
  return (
    <div className="container my-3" style={{ paddingTop: "60px" }}>
      <Notes />
    </div>
  );
}

export default Home;
