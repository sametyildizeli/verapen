/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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
  FaCircle,
} from "react-icons/fa";

const sliderProductData = [
  {
    key: 0,
    id: "0",
    title: `ÇİFT DİNGİL \n GERİYE DEVİRMELİ RÖMORK`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/slider-product-2.png",
  },
  {
    key: 1,
    id: "1",
    title: `TANDEM DİNGİL \n GERİYE DEVİRMELİ RÖMORK`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/slider-product-3.png",
  },
  {
    key: 2,
    id: "2",
    title: `TEK DİNGİL \n GERİYE DEVİRMELİ RÖMORK`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/slider-product-4.png",
  },
  {
    key: 3,
    id: "3",
    title: `SANTRAFÜJ POMPALI GALVANİZ \n SU TANKERİ`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/slider-product-5.png",
  },
  // {
  //   key: 4,
  //   id: "4",
  //   title: `SIVI GÜBRE TAŞIMA VE DAĞITMA TANKERİ`,
  //   videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
  //   productImg: "/slider-product-6.png",
  // },
  {
    key: 4,
    id: "4",
    title: `TEK DiNGiL iKi LASTiK\nHAVUZ KASA DAMPERLi RÖMORK`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/slider-product-7.png",
  },
  {
    key: 5,
    id: "5",
    title: `TANDEM DiNGiL DÖRT LASTiK \n DAMPERLİ HAVUZ KASA RÖMORK`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/slider-product-8.png",
  },
  {
    key: 6,
    id: "6",
    title: `ÜÇ DiNGiL ALTI LASTiK \n TRİDEM DAMPERLi RÖMORK`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/slider-product-9.png",
  },
  {
    key: 7,
    id: "7",
    title: `BORU TAŞIMA RÖMORKU`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/slider-product-10.png",
  },
];

const HeroSectionOne = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // State to track active index
  const [selectedProduct, setSelectedProduct] = useState(0); // State to track selected product
  const [changeSlide, setChangeSlide] = useState(false); // State to track change slide

  const setSliderItem = (id) => {
    setChangeSlide(true);
    setActiveIndex(id);
    setSelectedProduct(id);
    setChangeSlide(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedProduct((prevIndex) =>
        prevIndex === sliderProductData.length - 1 ? 0 : prevIndex + 1
      );
      setActiveIndex((prevIndex) =>
        prevIndex === sliderProductData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      className="hero-section text-white bg-gradient-header"
      style={{
        // background: "url('/hero-dot-bg.png')no-repeat center right",
        paddingBottom: "0px",
      }}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="MPkfO8vMlIs"
        onClose={() => setOpen(false)}
      />
      <div
        className="container hero-section-container-height"
        style={{ position: "relative" }}
      >
        {sliderProductData.map((item, index) => (
          <div
            key={index}
            className={`row align-items-center ${
              activeIndex === index ? "fade show active" : "fade"
            }`}
            style={{
              // transition: "all 0.5s ease",
              transition: "opacity 0.5s ease",
              position: "absolute",
              // padding: "0 2rem",
              zIndex: activeIndex === index ? "1" : "0",
            }}
          >
            <div className="col-lg-5 col-md-12 hero-section-container">
              <div
                className="hero-content-wrap mt-0 mt-lg-0 mt-xl-0"
                style={{ height: "100%" }}
              >
                <h1
                  className="display-4 fw-bolder"
                  style={{ color: "#ffffff", whiteSpace: "pre-line" }}
                >
                  {item.title}
                </h1>
                <br />

                <div className="action-btns align-items-center flex d-sm-flex d-lg-flex d-md-flex">
                  <Link href={`/product/${item.key}`}>
                    <a
                      className="btn btn-primary me-3  d-flex justify-content-between align-items-center"
                      style={{ backgroundColor: "#3C3C3B" }}
                    >
                      <h6 style={{ color: "white", margin: "0 0.5rem 0 0 " }}>
                        ÜRÜNÜ İNCELE
                      </h6>
                      <img
                        src="/arrow-right.svg"
                        alt="arrow-right"
                        className="img-fluid"
                      />
                    </a>
                  </Link>

                  <div className="">
                    <a
                      onClick={() => setOpen(false)}
                      type="button"
                      className="text-white text-decoration-none d-flex align-items-center watch-now-btn"
                    >
                      <img
                        src={"/icon-yt.svg"}
                        alt="hero img"
                        className="me-2"
                      />
                      <span style={{ color: "#3C3C3B" }}>ÜRÜN VİDEOSU</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 mt-5">
              <div className="hero-img position-relative circle-shape-images">
                <img
                  // style={{ height: "460px" }}
                  src={item.productImg}
                  alt="hero img"
                  // height={460}
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        ))}

        <div
          className="circle-navigation d-flex justify-content-center pb-2"
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
          }}
        >
          {sliderProductData.map((item, index) => (
            <FaCircle
              color="gray"
              style={
                activeIndex === item.key ? { opacity: "1" } : { opacity: "0.5" }
              }
              key={index}
              onClick={() => setSliderItem(item.key)}
              className={index === activeIndex ? "active m-1 " : "m-1 "}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
