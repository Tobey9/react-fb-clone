import React from "react";
import { FaFacebook } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import useStateValue from "../../context/useStateValue";

export const Header = () => {
  const { state } = useStateValue();
  const { user } = state;
  return (
    <div className="navbar">
      <div className="navbar__left">
        <FaFacebook className="navbar__icon" />
        <div className="navbar__input">
          <SearchIcon />
          <input placeholder="Search Facebook" />
        </div>
      </div>

      <div className="navbar__center">
        <HomeIcon className="navbar__option navbar__option--active" />
        <PeopleIcon className="navbar__option" />
        <SubscriptionsIcon className="navbar__option" />
        <StorefrontIcon className="navbar__option" />
        <SupervisedUserCircleIcon className="navbar__option" />
      </div>

      <div className="navbar__right">
        <p>{user?.displayName}</p>
        <Avatar src={user?.photoUrl}></Avatar>
      </div>
    </div>
  );
};
