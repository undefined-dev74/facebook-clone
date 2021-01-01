import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import {
  ExpandMoreOutlined,
  NotificationsActiveOutlined,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1312/1312139.svg"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook"></input>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Aman Jha</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveOutlined />
        </IconButton>
        <IconButton>
          <ExpandMoreOutlined />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
