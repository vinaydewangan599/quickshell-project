import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="displaySettings tag feature-tag">
        <button className="display-btn" onClick={toggleDropdown}>
          <img src="./Display.svg" alt="Display" className="icon" />
          Display
          <img src="./down.svg" alt="Display" className="dropdown-arrow" />
        </button>

        {/* Dropdown content */}
        {isOpen && (
          <div className="dropdown-content">
            <div className="dropdown-row">
              <label>Grouping:</label>
              <select
                id="grouping"
                value={grouping}
                onChange={(e) => onGroupingChange(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-row">
              <label>Ordering:</label>
              <select
                id="sorting"
                value={sorting}
                onChange={(e) => onSortingChange(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
