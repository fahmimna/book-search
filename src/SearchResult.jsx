import React from "react";

function SearchResult({ result }) {
  return (
    <article className="search-result">
      <div className="image-container">
        <img alt="" src={result.coverSrc} />
      </div>
      <div className="description">
        <p className="name">{result.name}</p>
        <p className="author">
          By <b>{result.author}</b>
        </p>
        <p className="abstract">{result.abstract}</p>
      </div>
    </article>
  );
}

export default SearchResult;
