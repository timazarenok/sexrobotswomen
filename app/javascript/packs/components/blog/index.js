import React from "react";

import BlogItem from "./blog-item";

const items = [{}, {}, {}];

const Blog = () => {
  return (
    <div className="blog-block">
      <div className="second-title">blog</div>
      <ul className="blog-list">
        {items.map((el) => (
          <li>
            <BlogItem {...el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
