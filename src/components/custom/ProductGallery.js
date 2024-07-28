import React, { useState } from "react";

const CampaignGallery = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const images = [
    "/_images/campaigns/campaign-1.png",
    "/_images/campaigns/campaign-2.png",
    "/_images/campaigns/campaign-3.png",
    "/_images/campaigns/campaign-4.png",
    "/_images/campaigns/campaign-5.png",
    "/_images/campaigns/campaign-6.png",
    "/_images/campaigns/campaign-7.png",
    "/_images/campaigns/campaign-8.png",
    "/_images/campaigns/campaign-9.png",
    "/_images/campaigns/campaign-10.png",
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

export default CampaignGallery;
