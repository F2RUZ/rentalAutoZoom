import React from "react";
import './not-found.scss'
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div class="main">
      <div class="content">
        <div class="font-404">
          <h1>
            4<span>0</span>4
          </h1>
        </div>
        <p>
          The page you are looking for might have been removed, its URL changed
          or is temporarily unavailable.
        </p>
        <NavLink to="/">home page</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
