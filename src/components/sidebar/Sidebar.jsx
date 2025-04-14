import React from "react";
import "./Sidebar.css";
import { SidebarRow } from "./SidebarRow";
import EmojiFlagsOutlinedIcon from "@mui/icons-material/EmojiFlagsOutlined";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://mighty.tools/mockmind-api/content/human/104.jpg"
        title="Toby"
      />
      <SidebarRow Icon={EmojiFlagsOutlinedIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={MessageIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
    </div>
  );
};
