import React from "react";
import "./StoryReel.css";
import { Story } from "./Story";

export const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1742238861697-b54509120e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        profilePic="https://mighty.tools/mockmind-api/content/human/82.jpg"
        name="Alicia Adams"
      />
      <Story
        image="https://images.unsplash.com/photo-1742766246349-16e16c7c80ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        profilePic="https://mighty.tools/mockmind-api/content/human/115.jpg"
        name="Matthew Jacobs"
      />
      <Story
        image="https://images.unsplash.com/photo-1743069674654-b51ee5eea3be?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        profilePic="https://mighty.tools/mockmind-api/content/human/106.jpg"
        name="Azalea McKenzie"
      />
      <Story
        image="https://images.unsplash.com/photo-1742599968125-a790a680a605?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        profilePic="https://mighty.tools/mockmind-api/content/human/91.jpg"
        name="Ronald Wolf"
      />
      <Story
        image="https://images.unsplash.com/photo-1742904432916-e2eef013cdd3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        profilePic="https://mighty.tools/mockmind-api/content/human/80.jpg"
        name="Michael Wong"
      />
    </div>
  );
};
