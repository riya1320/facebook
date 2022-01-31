import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { HiHome } from "react-icons/hi";
import { TiFlag } from "react-icons/ti";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import { Avatar } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Header.css";
import { IconButton } from '@material-ui/core';

function Header() {
  return <div className="header">
      <div className="header__left">
          <div className="header__logo">
             <FaFacebook fontSize="xxx-large"/>
          </div>
          
          <div className="header__input">
              <GoSearch />
              <input placeholder='Search Facebook' type="text" />
          </div>
      </div>

      <div className="header__center">
          <div className="header__option header__option--active">
              <div className="homeIcon">
                <HiHome fontSize="x-large" />
              </div>
              
          </div>
          <div className="header__option">
              <TiFlag fontSize="x-large" />
          </div>
          <div className="header__option">
              <MdOutlineSubscriptions fontSize="x-large" />
          </div>
          <div className="header__option">
              <MdStorefront fontSize="x-large" />
          </div>
          <div className="header__option">
              <MdSupervisedUserCircle fontSize="x-large" />
          </div>
      </div>

      <div className="header__right">
          <div className="header__info">
              <Avatar />
              <h4>riya13</h4>
          </div>
          
          <IconButton>
              <AddIcon />
          </IconButton>
          <IconButton>
              <ForumIcon />
          </IconButton>
          <IconButton>
              <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
              <ExpandMoreIcon />
          </IconButton>
          
          
      </div>

  </div>;
}

export default Header;
