import React, { useState } from "react";

const Carousel = ({ images }) => {
  // const images = [
  //   "https://via.placeholder.com/800x400?text=Image+1",
  //   "https://via.placeholder.com/800x400?text=Image+2",
  //   "https://via.placeholder.com/800x400?text=Image+3",
  //   "https://via.placeholder.com/800x400?text=Image+4",
  // ];

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const imageList = images.map((image) => image.url);

  return (
    <div className="carousel mt-md-5 ">
      <img
        src={imageList[selectedImage]}
        alt="selected"
        className="img-fluid  border "
        style={{ maxHeight: "50vh" }}
      />

      {imageList.length > 1 && (
        <div className="thumbnails">
          {imageList.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`thumbnail-${index}`}
              className={index === selectedImage ? "selected" : ""}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
