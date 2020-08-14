import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <h1>SLACK CLONE</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* router --> chat screen */}
      </div>
    </div>
  );
}

export default App;
