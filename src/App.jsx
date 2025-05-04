import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg',
  'images/pic6.jpg',
  'images/pic7.jpeg',
  'images/pic8.jpeg',
];

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
