import React from "react";
import "./BlogInfoPage.scss";
import { useParams } from "react-router-dom";
import blogData from "../../constants/blog";
import { useTranslation } from "react-i18next";

const BlogInfoPage = () => {
  const {i18n} = useTranslation()
  const params = +useParams()?.blogId;
  const blogInfo = i18n.language == "en" ? blogData?.en?.filter((elem) => elem?.id === params) : blogData?.ru?.filter((elem) => elem?.id === params);
  const { name, text, date, imgUrl, describtions, text2, city } = blogInfo[0];

  return (
    <div className="blog-info">
      <div className="container">
        <div className="blog-info-content">
          <h2 className="blog-info-title">{name}</h2>
          <p className="blog-info-text">{describtions}</p>
          <p className="blog-info-city">{city}</p>
          <img src={imgUrl} className="blog-info-image" alt="" />
          <p className="blog-info-subtext">{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogInfoPage;
