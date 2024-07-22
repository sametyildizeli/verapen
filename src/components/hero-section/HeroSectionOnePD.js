/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { IoLogoYoutube, IoPlayCircleOutline } from "react-icons/io5";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const sliderProductData = [
  {
    key: 1,
    id: "1",
    title: `TANDEM \n DAMPERLİ RÖMORK \n ÇİFT DİNGİL`,
    videoLink: "",
    productImg: "/slider-product-1.png",
  },
  {
    key: 2,
    id: "2",
    title: `ÇİFT DİNGİL \n GERİYE DEVİRMELİ RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-1.png",
  },
  {
    key: 3,
    id: "3",
    title: `TANDEM DİNGİL \n GERİYE DEVİRMELİ RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-1.png",
  }
];

const HeroSectionOnePD = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeRow, setActiveRow] = useState(1); // State to track active row
  const [activeIndex, setActiveIndex] = useState(0); // State to track active index

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sliderProductData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === sliderProductData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to toggle between rows
  const toggleRow = (rowNumber) => {
    setActiveRow(rowNumber);
  };

  return (
    <section
      className="hero-section ptb-120 text-white bg-gradient-header"
      style={{
        background: "url('/hero-dot-bg.png')no-repeat center right",
        paddingBottom: "0px",
      }}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container" style={{ position: "relative" }}>
        {/* <FaChevronLeft
          style={{
            cursor: "pointer",
            position: "absolute",
            left: -50,
            top: "300px",
            border: "none",
            boxShadow: "none",
            color: "#3C3C3B",
            height: "50px",
            width: "50px",
            transform: "translateY(-50%)",
          }}
          className="fa-solid fa-chevron-left"
          onClick={handlePrev}
        />

        <FaChevronRight
          style={{
            cursor: "pointer",
            position: "absolute",
            right: -50,
            top: "300px",
            border: "none",
            boxShadow: "none",
            color: "#3C3C3B",
            height: "50px",
            width: "50px",
            transform: "translateY(-50%)",
          }}
          className="fa-solid fa-chevron-right"
          onClick={handleNext}
        /> */}

        {sliderProductData.map((item, index) => (
          <div
            key={item.key}
            className={`row align-items-center ${
              activeIndex === index ? "fade show active" : "fade"
            }`}
            style={{
              transition: "opacity 1.25s ease",
              position: "absolute",
              padding: "0 2rem",
            }}
          >
            <div className="col-lg-5 col-md-10 hero-section-container">
              <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 className="fw-bold display-5" style={{ color: "#ffffff" }}>
                  {item.title}
                </h1>
                <p className="lead">
                  {/* Proactively coordinate quality quality vectors vis-a-vis supply
                chains. Quickly engage client-centric web services. */}
                </p>
                {/* <div className="action-btns mt-5 align-items-center flex d-sm-flex d-lg-flex d-md-flex">
                  <Link href="/request-demo">
                    <a
                      className="btn btn-primary me-3  d-flex justify-content-between align-items-center"
                      style={{ backgroundColor: "#3C3C3B" }}
                    >
                      <span style={{ marginRight: "0.5rem" }}>
                        ÜRÜNÜ İNCELE
                      </span>
                      <img
                        src="/arrow-right.svg"
                        alt="arrow-right"
                        className="img-fluid"
                      />
                    </a>
                  </Link>
                  <div>
                    <a
                      href="#!"
                      onClick={() => setOpen(true)}
                      type="button"
                      className="text-white text-decoration-none d-flex align-items-center watch-now-btn"
                    >
                      <IoLogoYoutube className="me-2" /> Ürün Videosu
                    </a>
                  </div>
                </div> */}
                {/* <div className="row justify-content-lg-start mt-60">
                <h6 className="text-white-70 mb-2">Our Top Clients:</h6>
                <div className="col-4 col-sm-3 my-2 ps-lg-0">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-1.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-2.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-3.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
              </div> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-8 mt-10">
              <div className="hero-img position-relative circle-shape-images">
                <img
                  src={item.productImg}
                  alt="hero img"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSectionOnePD;
