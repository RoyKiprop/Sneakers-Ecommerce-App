import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlides() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <CustomSlide index={1} />
          <CustomSlide index={2} />
          <CustomSlide index={3} />
          
        </Slider>
      </div>
    );
  }
  
  export default ProductSlides;
