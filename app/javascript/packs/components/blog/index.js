import React, { useEffect, useState } from "react";

import BlogItem from "./blog-item";
import axios from 'axios'

const Blog = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/blog_items").then(response => setItems(response.data))
  }, [])

  return (
    <div className="blog-block">
      <div className="second-title">blog</div>
      <ul className="blog-list">
        {items.map((el) => (
          <li key={el.title}>
            <BlogItem {...el} date={el.created_at} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
