import React, { useState } from "react";

const MediaGallery = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const images = [
    "/gallery-list/1.webp",
    "/gallery-list/2.webp",
    "/gallery-list/3.webp",
    "/gallery-list/4.webp",
    "/gallery-list/5.webp",
    "/gallery-list/6.webp",
    "/gallery-list/7.webp",
    "/gallery-list/8.webp",
    "/gallery-list/9.webp",
    "/gallery-list/10.webp",
    "/gallery-list/11.webp",
    "/gallery-list/12.webp",
    "/gallery-list/13.webp",
    "/gallery-list/14.webp",
    "/gallery-list/15.webp",
    "/gallery-list/16.webp",
  ];

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
          {/* Iterate over your images */}
          {images.map((image, index) => (
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0 mb-5" key={index}>
              <div
                className="rounded-custom border d-block office-address overflow-hidden z-2"
                style={{
                  background: `url('${image}') no-repeat center center / cover`,
                }}
                onClick={() => handleOpenModal(index)}
              >
                <div className="office-content text-center p-4">
                  <span className="office-overlay"></span>
                  {/* Additional content if needed */}
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
            <span className="gallery-modal-prev-icon" onClick={handlePrevImage}>
              &#10094;
            </span>
            <span className="gallery-modal-next-icon" onClick={handleNextImage}>
              &#10095;
            </span>
          </div>
        </div>
      </div>
      )}
    </section>
  );
};

export default MediaGallery;
