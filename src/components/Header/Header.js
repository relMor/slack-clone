import React from "react";

import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import "./Header.css";
import { useStateValue } from "../../logic/StateProvider";

import { Button } from "@material-ui/core";
import { auth } from "../../firebase";

function Header() {
  const [{ user }] = useStateValue();


  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
        {/* Time icon */}
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Fellow Programmer" type="text" />
      </div>
      <div className="header__right">
        <Button onClick={() => auth.signOut()}>LOGOUT</Button>
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
