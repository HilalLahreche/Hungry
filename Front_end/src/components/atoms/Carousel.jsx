import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Carousel = () => {
  useEffect(() => {
    new Swiper(".tranding-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <section id="tranding" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold text-gray-600">
          - popular Delivery -
        </h3>
        <h1 className="text-4xl font-bold text-orange-500 py-4">
          Tranding food
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="swiper tranding-slider relative h-96 py-8">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div
                className="swiper-slide tranding-slide w-80 h-96 relative"
                key={index}
              >
                <div className="tranding-slide-img">
                  <img
                    src={slide.imgSrc}
                    alt="Tranding"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="tranding-slide-content absolute inset-0 flex flex-col justify-between p-4 text-white">
                  <h1 className="food-price text-2xl font-bold absolute top-4 right-4">
                    {slide.price}
                  </h1>
                  <div className="tranding-slide-content-bottom absolute bottom-4 left-4">
                    <h2 className="food-name text-2xl font-bold">
                      {slide.name}
                    </h2>
                    <h3 className="food-rating flex items-center pt-2">
                      <span className="mr-2">{slide.rating}</span>
                      <div className="rating flex space-x-1 text-orange-500">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <ion-icon name="star" key={i}></ion-icon>
                          ))}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tranding-slider-control flex justify-center items-center absolute bottom-4 inset-x-0">
            <div className="swiper-button-prev slider-arrow bg-white rounded-full p-2 shadow-md mx-4">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next slider-arrow bg-white rounded-full p-2 shadow-md mx-4">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const slides = [
  {
    imgSrc: "assets/atoms/images/burger.png",
    price: "$20",
    name: "Special Burger",
    rating: 4.5,
  },
  {
    imgSrc: "assets/atoms/images/icecream.png",
    price: "$20",
    name: "Ice Cream",
    rating: 4.5,
  },
  {
    imgSrc: "assets/atoms/images/healthy.png",
    price: "$18",
    name: "Healthy Food",
    rating: 4.5,
  },
  {
    imgSrc: "assets/atoms/images/burger2.png",
    price: "$15",
    name: "Burger Combo",
    rating: 4.5,
  },
  {
    imgSrc: "assets/atoms/images/miamhealthy.png",
    price: "$25",
    name: "Healthy!",
    rating: 4.5,
  },
  {
    imgSrc: "assets/atoms/images/pizza.png",
    price: "$20",
    name: "Pizza",
    rating: 4.5,
  },
  {
    imgSrc: "assets/atoms/images/diabete.png",
    price: "$15",
    name: "Yummi!",
    rating: 4.5,
  },
  {
    imgSrc: "assets/atoms/images/paella.png",
    price: "$25",
    name: "Olé!",
    rating: 4.5,
  },
  {
    imgSrc: "assets/atoms/images/diabete2.png",
    price: "$16",
    name: "Sugar Crush",
    rating: 4.5,
  },
];

export default Carousel;
