import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "../components/Search";
function Accueil() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    arrows:false
  };
  return (
    <div className="relative h-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover filter blur-sm z-0"
        style={{ backgroundImage: "url('bg-accueil.jpg')" }}
      ></div>
      <div className="relative z-10 p-4">
        <div className="flex pt-11  justify-end">
        {/* <input className="text-white rounded-l-md bg-zinc-700 " type="input" />
        <button className="bg-zinc-900 rounded-r-md px-2 hover:bg-gray-700">ok</button> */
        <SearchBar/>
        }
        
        </div>
        <div className="flex justify-center mt-[5%]">
          <div className="w-96 h-auto mt-[2%]">
          <Slider {...setting}>
          <div>
           <img
            src="/pexels-photo-116675-removebg-preview.png"   
            alt="image 1"
            className="mx-auto"
          />
        </div>
        <div>
          <img
            src="/photo-accueil-2.png"   
            alt="image 2"
            className="mx-auto"
          />
        </div>
        <img
              src="/pexels-photo-116675-removebg-preview.png"
              alt="image 3"
              className=" mx-auto"
            />
       </Slider>
          </div>
        </div>
        <p className="flex justify-center opacity-45">
          <span className="inline-block  text-white  bg-zinc-700 rounded-xl p-2">
            Velovo car la solution idéale
          </span>
        </p>
        <div className="flex justify-around items-center">
          <button className="bg-black bg-opacity-55 hover:bg-blue-700 text-white px-8 py-2 rounded-md mr-2">
            Achat
          </button>
          <button className="bg-black bg-opacity-55 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accueil;