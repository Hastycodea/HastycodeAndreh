import "./Blogs.css";
import blog from "../../assets/blog.png";
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
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
