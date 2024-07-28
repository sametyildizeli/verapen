import React, { useState, useEffect } from "react";
import { productsGallery } from "@utils/data";
import LazyLoad from "react-lazyload";

const ProductGallery = ({ category, subCategory, images }) => {
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    if (images) {
      setGalleryImages(images);
    } else if (
      category &&
      subCategory &&
      productsGallery.categories[category] &&
      productsGallery.categories[category].subcategories[subCategory]
    ) {
      const subCategoryImages =
        productsGallery.categories[category].subcategories[subCategory];
      setGalleryImages(subCategoryImages);
    }
  }, [category, subCategory, images]);

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  const handlePrevImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="office-address-section ptb-30">
      <div className="container">
      <div className="row">
      {galleryImages.map((imageData, index) => {
        const imageName = imageData.url.split('/').pop().split('.')[0]; // image dosya adını alır

        return (
          <div
            className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0 mb-5"
            key={index}
          >
            <LazyLoad key={index} height={200} offset={100} once>
              <div
                className="rounded-custom border d-block office-address overflow-hidden z-2"
                style={{
                  background: `url('${imageData.url}') no-repeat center center / cover`,
                  height: "300px",
                }}
                onClick={() => handleOpenModal(index)}
              >
                <div className="office-content text-center p-4">
                  <span className="office-overlay"></span>
                </div>
              </div>
            </LazyLoad>
            <div className="image-name text-center mt-2" style={{ color: "black" }}>
              {imageData.name || imageName} {/* Dinamik olarak özel dosya adını yazdırır */}
            </div>
          </div>
        );
      })}
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
            <img src={galleryImages[modalImageIndex].url} alt="modal" />
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
