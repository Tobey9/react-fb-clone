import { Avatar } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Post.css";

export const Post = ({ image, profilePic, name, message, timestamp }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} />
        <div className="post__infoTop">
          <h3>{name}</h3>
          <p>{timestamp?.toDate().toLocaleString() || "Just Now"}</p>
        </div>
      </div>

      <div className="post__center">
        <h3>{message}</h3>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__bottom">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post__option">
          <SupervisedUserCircleIcon />
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};
