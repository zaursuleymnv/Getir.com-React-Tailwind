import Slider from "react-slick";
import Banners from 'api/banners.json';
import { useState } from "react";
import { useEffect } from "react";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ className, onClick }) {
  return (
    <button className={`!text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowForward size={22}/>
    </button>
  )
}

function PrevBtn({ className, onClick }) {
  return (
    <button className={`!text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowBack size={22}/>
    </button>
  )
}

export default function Campanies() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />
  };

  const [banners, setBanners] = useState([])

  useEffect(() => {
    setBanners(Banners)
  }, [])

  return (
    <div className="container mx-auto py-8">
      <Title>Campanies</Title>
      <Slider {...settings} className="-mx-2">
          {banners.length && banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block px-2">
                <img src={banner.image} className="rounded-lg" />
              </picture>
            </div>
          ))}
        </Slider>
    </div>
  )
}
