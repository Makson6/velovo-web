import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Location() {
  const renderImages = () => {
    const images = Array.from({ length: 30 }, (_, index) => index + 1);

    return images.map((image) => (
      <img
        key={`image-${image}`}
        src="telechargement.jpeg"
        alt={`Image ${image}`}
        className="w-full h-auto rounded-md"
      />
    ));
  };

  return (
    <>
    <div className="bg-black max-h-fit mt-4 ">
      <div className="grid grid-cols-5 mt-[3%] m-1 gap-1 cursor-pointer">
        {renderImages()}
      </div>
    </div>
    </>
  );
}

export default Location;