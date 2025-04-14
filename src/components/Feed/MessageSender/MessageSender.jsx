import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import useStateValue from "../../../context/useStateValue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../../API/firebase";

export const MessageSender = () => {
  const { state, dispatch } = useStateValue();
  const { user } = state;
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input) {
      try {
        await addDoc(collection(db, "posts"), {
          image: imageUrl,
          message: input,
          name: user?.displayName || "Anonymous",
          profilePic: user?.photoURL || "",
          timestamp: serverTimestamp(),
        });

        setInput("");
        setImageUrl("");
      } catch (e) {
        console.log("error adding document", e);
      }
    }
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            placeholder="What's on your mind?"
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (optional)"
          />
          <button onClick={handleSubmit}>hide button</button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div>
          <VideocamIcon />
          Live Video
        </div>
        <div>
          <PhotoLibraryIcon />
          Photo/video
        </div>
        <div>
          <SentimentVerySatisfiedIcon />
          Feeling/Activity
        </div>
      </div>
    </div>
  );
};
