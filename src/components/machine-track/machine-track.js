import React, { useEffect, useState } from "react";

const MachineTrack = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const images = [
    "/makine-parkuru1.png",
    "/makine-parkuru2.png",
    "/makine-parkuru3.png",
    "/makine-parkuru4.png",
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
    <section className="office-address-section ptb-120">
      <div className="container">
        <div className="row justify-content-center"></div>
        <div className="row">
          {[1, 2, 3, 4].map((index) => (
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0" key={index}>
              <div
                className="rounded-custom border d-block office-address overflow-hidden z-2"
                style={{
                  background: `url('/makine-parkuru${index}.png') no-repeat center center / cover`,
                  cursor: "pointer",
                }}
                onClick={() => handleOpenModal(index - 1)} // Open modal on click
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImageIndex !== null && (
        <div className="machine-track-modal">
          <div
            className="machine-track-modal-content"
            style={{ position: "relative" }}
          >
            <span className="machine-track-modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={images[modalImageIndex]} alt="modal" />
            <div className="machine-track-modal-navigation">
              <span className="machine-track-modal-prev-icon" onClick={handlePrevImage}>
                &#10094;
              </span>
              <span className="machine-track-modal-next-icon" onClick={handleNextImage}>
                &#10095;
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MachineTrack;
