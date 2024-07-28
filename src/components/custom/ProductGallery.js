import React, { useState, useEffect } from "react";
import { productsGallery } from "@utils/data";

const ProductGallery = ({ category, subCategory }) => {
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (category && subCategory && productsGallery.categories[category] && productsGallery.categories[category].subcategories[subCategory]) {
      setImages(productsGallery.categories[category].subcategories[subCategory]);
    }
  }, [category, subCategory]);

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  const handlePrevImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="office-address-section ptb-30">
      <div className="container">
        <div className="row">
          {images.map((image, index) => (
            <div
              className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0 mb-5"
              key={index}
            >
              <div
                className="rounded-custom border d-block office-address overflow-hidden z-2"
                style={{
                  background: `url('${image}') no-repeat center center / cover`,
                }}
                onClick={() => handleOpenModal(index)}
              >
                <div className="office-content text-center p-4">
                  <span className="office-overlay"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImageIndex !== null && (
        <div className="gallery-modal">
          <div
            className="gallery-modal-content"
            style={{ position: "relative" }}
          >
            <span className="gallery-modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={images[modalImageIndex]} alt="modal" />
            <div className="gallery-modal-navigation">
              <span
                className="gallery-modal-prev-icon"
                onClick={handlePrevImage}
              >
                &#10094;
              </span>
              <span
                className="gallery-modal-next-icon"
                onClick={handleNextImage}
              >
                &#10095;
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGallery;
