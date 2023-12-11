import "./FeaturesBooks.css";
import TitileTypeOne from "../../UI/TitileTypeOne/TitileTypeOne";
import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { featuredBooksData } from "../../Data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const breakpoints = {
  1024: {
    slidesPerView: 2,
    spaceBetweenSlides: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetweenSlides: 20,
  },
  480: {
    slidesPerView: 2,
    spaceBetweenSlides: 10,
  },
  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 0,
  },
};

function FeaturesBooks() {
  return (
    <section className="Featured">
      <div className="container features-book-container">
        <TitileTypeOne
          TitleTop={"Some quality items"}
          Title={"Featured Books"}
        />

        {/* ------------FeaturedBooks Slider------------- */}
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          modules={[Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={breakpoints}
        >
          {featuredBooksData.map(
            ({ img, imgLlink, name, nameLink, writer, price }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="featurebook-box">
                    <Link to={imgLlink} className="featurebook">
                      <img src={img} alt="np" />
                    </Link>
                    <div className="featurebook-info">
                      <Link to={nameLink}>
                        <h4>{name}</h4>
                      </Link>
                      <div>
                        <small>{writer}</small>
                      </div>
                      <h5>
                        <span>{price}</span>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <div className="feature-border container"></div>
          {/* Swiper Pagination */}
          <div className="swiper-pagination"></div>
          {/* view All product button   */}
          <Link to="*" className="btn feature-btn">
            View All Product <BsArrowReturnRight />
          </Link>
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturesBooks;
