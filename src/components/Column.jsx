// src/components/Column.js
import React from "react";
import Card from "./Card.jsx";

import "./Column.css";

const Column = ({ title, tickets }) => {
  const getIconPath = (title) => {
    switch (title) {
      // Statuses
      case "Backlog":
        return "./Backlog.svg";
      case "Canceled":
        return "./Cancelled.svg";
      case "Done":
        return "./Done.svg";
      case "In progress":
        return "./in-progress.svg";
      // Priorities
      case "No priority":
        return "./priority-0.svg";
      case "Low":
        return "./priority-1.svg";
      case "Medium":
        return "./priority-2.svg";
      case "High":
        return "./priority-3.svg";
      case "Urgent":
        return "./urgent.svg";
      case "Todo":
        return "./To-do.svg";

      // Names mapping
      case "Ramesh":
      case "Suresh":
      case "Shankar Kumar":
      case "Yogesh":
      case "Anoop sharma":
        return "./boy.svg"; // Assuming default profile icon

      default:
        return "./boy.svg"; // Default for unknown titles
    }
  };

  return (
    <div className="column">
      <h2>
        <span className="titleLeft">
          <img src={getIconPath(title)} alt="Icon" className="titleIcon" />
          <span>{title + " "}</span>
          <span className="ticketLength">{tickets.length}</span>
        </span>
        <span className="titleRight">
          <img src="add.svg" alt="add" />
          <img src="./3-dot-menu.svg" alt="menu" />
        </span>
      </h2>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
