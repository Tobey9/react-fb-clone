import React, { useEffect, useState } from "react";
import "./Feed.css";
import { StoryReel } from "./StoryReel";
import { MessageSender } from "./MessageSender/MessageSender";
import { Post } from "./Post/Post";
import db from "../../API/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            timestamp={post.data.timestamp}
            image={post.data.image}
            name={post.data.name}
            message={post.data.message}
          />
        );
      })}
    </div>
  );
};
