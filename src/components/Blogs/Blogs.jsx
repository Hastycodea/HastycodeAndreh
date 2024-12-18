import "./Blogs.css";
import blog from "../../assets/blog.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
  const settings = {
    dots: true,
    className: "center",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blogs">
      <p>
        I love documenting my work and teaching other developers as this is the
        way to learn, below are some of my articles on Medium
      </p>
      <div className="display-blogs">
        <Slider {...settings} className="slider-container">
          <div className="blog">
            <img src={blog1} alt="" />
            <p className="blog-title">
              Understanding Pattern and Matcher Classes in Java
            </p>
            <p className="blog-description">
              In this article, I will show you how to create migrations in
              Rails. Migrations are a very important concept in Rails and are
              used to create, modify, and delete tables in your database.
            </p>
            <a
              href="https://dev.to/hastycodea/understanding-pattern-and-matcher-classes-in-java-c8"
              target="_blank"
            >
              <button>READ MORE</button>
            </a>
          </div>
          <div className="blog">
            <img src={blog2} alt="" />
            <p className="blog-title">
              Fixing &apos;org.hibernate.dialect.MySQLDialect&apos; Error in
              Spring Boot
            </p>
            <p className="blog-description">
In this article, I will explain how to resolve the &quot;org.hibernate.dialect.MySQLDialect&quot; error in Spring Boot. This error occurs when Hibernate cannot find the specified dialect, and fixing it ensures proper database communication.</p>
            <a
              href="https://dev.to/hastycodea/resolving-the-unable-to-resolve-name-orghibernatedialectmysqldialect-error-in-spring-boot-17jj"
              target="_blank"
            >
              <button>READ MORE</button>
            </a>
          </div>
          <div className="blog">
            <img src={blog3} alt="" />
            <p className="blog-title">Mastering Surrounds in Vim</p>
            <p className="blog-description">In this article, I will walk you through mastering the Pattern and Matcher classes in Java. These classes are essential for working with regular expressions, allowing you to efficiently search, match, and manipulate text in your Java applications.</p>
            <a href="https://dev.to/hastycodea/mastering-surrounds-in-vim-add-remove-and-modify-like-a-pro-57fb" target="_blank">
              <button>READ MORE</button>
            </a>
          </div>
          <div className="blog">
            <img src={blog} alt="" />
            <p className="blog-title">pagination in phoenix live view</p>
            <p className="blog-description">
              In this article, I will show you how to create migrations in
              Rails. Migrations are a very important concept in Rails and are
              used to create, modify, and delete tables in your database.
            </p>
            <button>READ MORE</button>
          </div>
          <div className="blog">
            <img src={blog} alt="" />
            <p className="blog-title">pagination in phoenix live view</p>
            <p className="blog-description">
              In this article, I will show you how to create migrations in
              Rails. Migrations are a very important concept in Rails and are
              used to create, modify, and delete tables in your database.
            </p>
            <button>READ MORE</button>
          </div>
          <div className="blog">
            <img src={blog} alt="" />
            <p className="blog-title">pagination in phoenix live view</p>
            <p className="blog-description">
              In this article, I will show you how to create migrations in
              Rails. Migrations are a very important concept in Rails and are
              used to create, modify, and delete tables in your database.
            </p>
            <button>READ MORE</button>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
