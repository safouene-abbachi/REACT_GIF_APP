import React from "react";
import "./App.css";
import Random from "./components/Random-V2";
import Tag from "./components/Tag-V2";

const App = () => (
  <div>
    <h1>Random Gif Application</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
  </div>
);
export default App;
