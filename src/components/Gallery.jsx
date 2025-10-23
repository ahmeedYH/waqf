import React from "react";
import "./../styles/Gallery.css";
import img1 from "../assets/bg_header.jpg";
import img2 from "../assets/delegations.png";
import img3 from "../assets/image-modawanat-awkaf.jpg";
import img4 from "../assets/logo-Habous-Ar.png";
import img5 from "../assets/texte-Ar.png";


const Gallery = () => {
  const images = [img3, img2, img5, img4];

  return (
    <div
      className="gallery-section"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
