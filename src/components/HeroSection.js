import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export default function HeroSection() {

  const [selected, setSelected] = useState("PL");
  const phones = {
    'US': '+1',
    'DE': '+49',
    'GB': '+44',
    'FR': '+33',
    'IT': '+39',
    'PL': '+48',
    'AZ': '+994',
    'TR': '+90',
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="relative h-[500px] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:inset-0 before:z-10">
      <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="" />
          </div>
        </Slider>
        <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div>
            <img src="https://getir.com/_next/static/images/groceriesInMinutes-20f12c15098e8fd2bae874e2a40e343b.svg" alt="" />
            <h3 className="text-white text-4xl font-semibold mt-8">
              At your door in minutes
            </h3>
          </div>
          <div className="w-[400px] rounded-lg bg-gray-50 p-6">
            <h4 className="text-primary-brand-color font-semibold text-center">Login or register</h4>
            <div className="flex">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
              />
            </div>
          </div>
        </div>
    </div>
  )
}
