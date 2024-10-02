import React from "react";
import "./BlogPage.scss";
import { NavLink } from "react-router-dom";
import blogData from "../../constants/blog";
import BlogCard from "./blogCard/BlogCard";
import { useTranslation } from "react-i18next";
import './BlogMedia.css'
const BlogPage = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-content">
          <div className="blog-top">
            <h2 className="blog-title">{t("header.blog")}</h2>
          </div>
          <div className="blog-bottom">
            {i18n.language == "en" ? blogData?.en?.map((elem) => (
              
              <BlogCard key={elem?.id} {...elem} />
            )) : blogData?.ru?.map((elem) => (
              <BlogCard key={elem?.id} {...elem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
