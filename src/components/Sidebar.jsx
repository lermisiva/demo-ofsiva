import React, { useState } from "react";
import "../Styles/main.css";

const Sidebar = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (page) => {
    setActivePage(page);
    setIsOpen(false); // Close sidebar after clicking a menu item
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => handleNavigation("home")}>Home</a>
        <a href="#tasks" onClick={() => handleNavigation("tasks")}>Tasks</a>
        <a href="#about" onClick={() => handleNavigation("about")}>About</a>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
