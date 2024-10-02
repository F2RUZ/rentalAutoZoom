import React from "react";
import "../BlogPage.scss";
import { NavLink } from "react-router-dom";
const BlogCard = ({ name, text, date, imgUrl ,id }) => {
  return (
    <div className="blog-card">
      <div className="blog-cardleft">
        <img src={imgUrl} alt="" className="blog-img" />
      </div>
      <div className="blog-cardright">
        <h3 className="blog-cardtitle">{name}</h3>

        <p className="blog-cardtext">{text}</p>

        <div className="blog-cardbottom">
          <p className="blog-carddate">{date}</p>

          <NavLink className={"blog-cardlink"} to={`/blog_info/${id}`}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
                fill="white"
              ></path>
              <circle cx="16" cy="16" r="15.5" stroke="white"></circle>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
