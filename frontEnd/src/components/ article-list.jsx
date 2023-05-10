import { Link } from "react-router-dom";
import React from 'react';


const ArticleList = ({articles}) => {
    return (
        <>
        {articles.map((data, i) => (
          <Link key={data.name} className="articleListItem" to={data.name}>
          <h3>{data.title}</h3>
          <p>{data.content[i].substring(0, 200)} ...</p>
          <hr />
          </Link>
        ))}
        </>
    );
}

export default ArticleList;
