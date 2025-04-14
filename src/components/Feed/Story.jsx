import React from "react";
import "./Story.css";
import { Avatar } from "@mui/material";

export const Story = ({ image, profilePic, name }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profilePic} />
      <p>{name}</p>
    </div>
  );
};
