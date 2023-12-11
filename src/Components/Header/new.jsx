import "./Header.css";

// import Header books data-------------------
import { headerBooks } from "../../Data/data";

// Import Swiper React components Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

//React Arrow Icon -------------
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

//Shape svg img -------------
import headerShape from "../../assets/header-shape.svg";

function Header() {
  return (
    <Header>
      <div className="header-container">
        {/*-----------Header swiper Slider----------- */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
        >
          {headerBooks.map(({ img, title, info, btnLink }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="header-wrapper container">
                  {/*-----------Header Left----------- */}
                  <div className="header-left">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: info }}></p>
                    <a href={btnLink} className="btn btn-border">
                      Learn more
                    </a>
                  </div>
                  {/*-----------Header Right----------- */}
                  <div className="header-right">
                    <img src={img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/*-------------------Header Pagination------------ */}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <GoArrowLeft />
            </div>
            <div className="button-next-slide slidebutton">
              <GoArrowRight />
            </div>
          </div>
          {/*-------------------Header Pagination------------ */}
          <div className="container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        {/* -----------------Header Shape*/}
        <div className="header-shape">
          <img src={headerShape} className="header-s" />
        </div>
      </div>
    </Header>
  );
}
export default Header;
