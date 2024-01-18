import Slider from "react-slick";
import { FaFacebook } from "react-icons/fa";
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
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
            <h4 className="text-primary-brand-color font-semibold text-center mb-4">Login or register</h4>
            <div className="grid gap-y-3">
              <div className="flex gap-x-2">
                <ReactFlagsSelect
                  countries={Object.keys(phones)}
                  customLabels={phones}
                  onSelect={code => setSelected(code)}
                  selected={selected}
                  className="flag-select"
                />
                <label className="flex-1 relative block group cursor-pointer">
                  <input
                    required 
                    className="w-full h-14 px-4 border-2 border-gray-200 rounded outline-none group-hover:border-primary-brand-color focus:border-primary-brand-color transition-colors peer text-sm pt-2" />
                  <span className="absolute top-0 left-0 flex items-center h-full px-4 text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Mobile Phone</span>
                </label>
              </div>
              <button className="h-12 w-full bg-brand-yellow text-primary-brand-color text-sm font-semibold rounded-md flex items-center justify-center hover:bg-primary-brand-color hover:text-brand-yellow transition-colors">
                Continue with phone number
              </button>
              <hr className="h-[1px] bg-gray-300 my-2" />
              <button className="h-12 w-full bg-blue-700 bg-opacity-10 text-[#4267B2] px-4 text-sm font-semibold rounded-md flex items-center hover:bg-[#4267B2] hover:text-white transition-colors">
                <FaFacebook size={24} />
                <span className="mx-auto">Continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
