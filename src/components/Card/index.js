import React from "react";
import "./card.css";
import UserIcon from "../UserIcon";
import { getStatusIcon } from "../../utils/helper";

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }) {
  const priorityIcon = [
    "No-priority",
    "Img - Low Priority",
    "Img - Medium Priority",
    "Img - High Priority",
    "SVG - Urgent Priority grey",
  ];
  return (
    <div className="card">
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {hideProfileIcon ? null : (
          <UserIcon name={userData.name} available={userData.available} />
        )}
      </div>
      <div className="middle-container">
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="bottom-container">
        <div className="more-icon-container">
          <img
            src={`./icons_FEtask/${priorityIcon[ticket.priority]}.svg`}
            alt="Priority Icon"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
        {ticket.tag.map((t) => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
