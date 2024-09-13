import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "ionicons";
import burgerJpg from "../../assets/images/burger.jpg";
import pizzaJpg from "../../assets/images/pizza.jpg";
import healthyJpg from "../../assets/images/healthy.jpg";
import burger2Jpg from "../../assets/images/burger2.jpg";
import diabeteJpg from "../../assets/images/diabete.jpg";
import diabete2Jpg from "../../assets/images/diabete2.jpg";
import icecreamJpg from "../../assets/images/icecream.jpg";
import miamhealthyJpg from "../../assets/images/miamhealthy.jpg";
import paellaJpg from "../../assets/images/paella.jpg";
import sushiJpg from "../../assets/images/sushi.jpg";

const Carousel = () => {
  useEffect(() => {
    new Swiper(".tranding-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000, // Rotation automatique
        disableOnInteraction: false,
      },
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
      breakpoints: {
        // Breakpoints pour différentes tailles d'écran
        640: {
          slidesPerView: 1, // Pour les petits écrans (mobiles)
        },
        768: {
          slidesPerView: 2, // Pour les écrans de tablette
        },
        1024: {
          slidesPerView: 3, // Pour les écrans plus larges
        },
      },
    });
  }, []);

  return (
    <section id="tranding" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        {/*<h3 className="text-xl font-semibold text-gray-600">
          - Popular Delivery -
        </h3>
        <h1 className="text-4xl font-bold text-orange-500 py-4">
          Trending Food
        </h1>*/}
      </div>
      <div className="container mx-auto px-8">
        <div className="swiper tranding-slider relative py-8">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div
                className="swiper-slide tranding-slide w-full h-auto sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative flex flex-col items-center"
                key={index}
              >
                <div className="tranding-slide-img w-full h-full">
                  <img
                    src={slide.imgSrc}
                    alt="Trending Food"
                    className="w-full h-full object-cover rounded-lg brightness-100"
                  />
                </div>
                <div className="tranding-slide-content absolute inset-0 flex flex-col justify-between p-4 text-white bg-black bg-opacity-20 rounded-lg">
                  <h1 className="food-price text-2xl font-bold absolute top-4 right-4 bg-white text-black p-2 rounded">
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
                          .map((_, i) => {
                            const roundedRating = Math.floor(slide.rating);
                            const hasHalfStar =
                              slide.rating - roundedRating >= 0.5;

                            if (i < roundedRating) {
                              // Afficher une étoile pleine
                              return (
                                <ion-icon
                                  name="star"
                                  key={i}
                                  className="text-2xl z-10"
                                ></ion-icon>
                              );
                            } else if (i === roundedRating && hasHalfStar) {
                              // Afficher une demi-étoile
                              return (
                                <ion-icon
                                  name="star-half"
                                  key={i}
                                  className="text-2xl z-10"
                                ></ion-icon>
                              );
                            } else {
                              // Afficher une étoile vide
                              return (
                                <ion-icon
                                  name="star-outline"
                                  key={i}
                                  className="text-2xl z-10"
                                ></ion-icon>
                              );
                            }
                          })}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tranding-slider-control flex justify-center items-center absolute bottom-40 inset-x-0">
            <div className="swiper-button-prev slider-arrow bg-transparent rounded-full p-2 shadow-mn mx-4">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="swiper-button-next slider-arrow bg-transparent rounded-full p-2 shadow-mn mx-4">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

const slides = [
  {
    imgSrc: burgerJpg,
    price: "$20",
    name: "Special Burger",
    rating: 4.5,
  },
  {
    imgSrc: icecreamJpg,
    price: "$20",
    name: "Ice Cream",
    rating: 4.5,
  },
  {
    imgSrc: healthyJpg,
    price: "$18",
    name: "Healthy Food",
    rating: 4.5,
  },
  {
    imgSrc: burger2Jpg,
    price: "$15",
    name: "Burger Combo",
    rating: 3.4,
  },
  {
    imgSrc: miamhealthyJpg,
    price: "$25",
    name: "Healthy!",
    rating: 4.5,
  },
  {
    imgSrc: pizzaJpg,
    price: "$20",
    name: "Pizza",
    rating: 4.2,
  },
  {
    imgSrc: diabeteJpg,
    price: "$15",
    name: "Yummi!",
    rating: 4.5,
  },
  {
    imgSrc: paellaJpg,
    price: "$25",
    name: "Olé!",
    rating: 4.5,
  },
  {
    imgSrc: diabete2Jpg,
    price: "$16",
    name: "Sugar Crush",
    rating: 4.5,
  },
  {
    imgSrc: sushiJpg,
    price: "$12",
    name: "Nigiri",
    rating: 4.7,
  },
];

export default Carousel;
