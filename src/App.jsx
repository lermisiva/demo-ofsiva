import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import About from "./components/About";
import "./Styles/main.css";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app">
      <Sidebar setActivePage={setActivePage} />

      <div className="content">
        {activePage === "home" && <Home />}
        {activePage === "tasks" && <Tasks />}
        {activePage === "about" && <About />}
      </div>
    </div>
  );
};

export default App;
