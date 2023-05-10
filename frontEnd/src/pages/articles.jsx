import { useParams } from "react-router-dom";
import articles from "./articles-content";
import Page404 from "./404-page"
import React from "react";

const Articles = () => {
  const { articlesId } = useParams();
  const article = articles.find((data) => data.name === articlesId);

  if (!article){
    return (<Page404 />)
  }

  return ( 
  <div className="articleBody">
    <div className="article">
      <h2>{article.title}</h2>
      {article.content.map((paraghraph) => (
      <p key={paraghraph}>{paraghraph}</p>
      ))}
    </div>
    </div>
  );
};

export default Articles;
