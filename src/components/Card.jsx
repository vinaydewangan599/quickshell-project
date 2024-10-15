import React from "react";
// import { AlertTriangle } from "lucide-react";
import "./Card.css";

const Card = ({ ticket }) => {
  const ClipText = ({ text }) => {
    const clippedText = text.length > 60 ? `${text.slice(0, 60)}...` : text;
    return <span>{clippedText}</span>;
  };

  const imgUrl = "./priority-" + ticket.priority + ".svg";

  return (
    <div className="security-card">
      <div className="card-header">
        <div>
          <h2 className="card-id">{ticket.id}</h2>
          <h1 className="card-title">
            <ClipText text={ticket.title} />
          </h1>
        </div>
        <div className="profile-image">
          <img src="./boy.svg" alt="Profile" className="circleProfile" />
        </div>
      </div>
      <div className="card-tags">
        <span className="tag alert-tag">
          <img src={imgUrl} alt="priority" />
        </span>
        <span className="tag feature-tag">
          <img src="./fullcircle.svg" alt="fullcircle" height="15px" />
          {ticket.tag}
        </span>
      </div>
    </div>
  );
};

export default Card;
