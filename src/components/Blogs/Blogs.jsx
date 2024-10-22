import React from "react";
import "./Blogs.css";
import blog from "../../assets/blog.png";

const Blogs = () => {
  return (
    <div className="blogs">
      <p>
        I love documenting my work and teaching other developers as this is the
        way to learn, below are some of my articles on Medium
      </p>
      <div className="display-blogs">
      <div className="blog">
        <img src={blog} alt="" />
        <p className="blog-title">pagination in phoenix live view</p>
        <p className="blog-description">
          In this article, I will show you how to create migrations in Rails.
          Migrations are a very important concept in Rails and are used to
          create, modify, and delete tables in your database.
        </p>
        <button>READ MORE</button>
      </div>
      <div className="blog">
        <img src={blog} alt="" />
        <p className="blog-title">pagination in phoenix live view</p>
        <p className="blog-description">
          In this article, I will show you how to create migrations in Rails.
          Migrations are a very important concept in Rails and are used to
          create, modify, and delete tables in your database.
        </p>
        <button>READ MORE</button>
      </div>
      <div className="blog">
        <img src={blog} alt="" />
        <p className="blog-title">pagination in phoenix live view</p>
        <p className="blog-description">
          In this article, I will show you how to create migrations in Rails.
          Migrations are a very important concept in Rails and are used to
          create, modify, and delete tables in your database.
        </p>
        <button>READ MORE</button>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
