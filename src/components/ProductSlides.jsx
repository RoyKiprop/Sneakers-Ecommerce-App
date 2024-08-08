import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseTrending from "../customHooks/UseTrending";
import Slide from "./Slide";
import Button from "./Button";

function ProductSlides() {
    const [trending] = UseTrending();
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="p-28 bg-orangeCustom w-full  ">
            <div>
            <Slider {...settings}>
                {trending.map((product) => (
                    <Slide key={product.Id}>
                        <div className="flex flex-col md:flex-row items-center justify-evenly h-full p-5">
                            <div className="flex flex-col justify-center md:w-1/2">
                                <p className="text-7xl text-customWhite font-semibold">{product.name}</p>
                                <p className="text-5xl my-8 text-black font-medium">{product.price}</p>
                                <div><Button variant="buy">Buy Now</Button></div>
                            </div>
                            <div className="flex">
                                <img 
                                    src={product.imageUrl} 
                                    alt={product.name} 
                                    className="w-full h-80 sm:h-72 md:h-80 lg:h-100 object-cover" 
                                />
                            </div>
                        </div>
                    </Slide>
                ))}
            </Slider>
        </div>
        </div>
      
    );
}

export default ProductSlides;
