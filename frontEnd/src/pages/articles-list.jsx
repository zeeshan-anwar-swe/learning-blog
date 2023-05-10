import ArticleList from "../components/ article-list";
import articles from "./articles-content";
import React from "react";

const ArticlesList = () => {
  return (
    <div className="articleBody">
      <div className="article">
        <h1>Articles</h1>
        <ArticleList articles={articles}/>        
      </div>
    </div>
  );
};

export default ArticlesList;
