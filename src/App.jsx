import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
 https://thekarancode0.github.io/react-slider/,
  `${process.env.PUBLIC_URL}/pic2.jpg`,
  `${process.env.PUBLIC_URL}/pic3.jpg`,
  `${process.env.PUBLIC_URL}/pic4.jpg`,
  `${process.env.PUBLIC_URL}/pic5.jpg`,
  `${process.env.PUBLIC_URL}/pic6.jpg`,
  `${process.env.PUBLIC_URL}/pic7.jpeg`,
  `${process.env.PUBLIC_URL}/pic8.jpeg`
];

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-white">Image Slider</h1>
      <div className="w-[80%] sm:w-[60%] md:w-[40%] px-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2"> {/* <-- adds spacing */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
