import React, { useEffect, useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { FaCircle } from "react-icons/fa";

const sliderProductData = [
  {
    key: 0,
    id: "0",
    title: `Verapen'e Hoşgeldiniz`,
    description: `İç Oda Kapısı, Cam Balkon Sistemleri, PVC Doğrama ve Aluminyum Sistemleri`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/_images/slider-products/p-0.png",
  },
  {
    key: 1,
    id: "1",
    title: `Bakış Door \n Lake Kapak ve İç Oda Kapı Laquer Touch `,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/_images/slider-products/p-1.png",
  },
  {
    key: 2,
    id: "2",
    title: `Albert Genau \nCam Balkon, Teras ve \nBahçe  Kapama \nSistemleri`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/_images/slider-products/p-2.png",
  },
  {
    key: 3,
    id: "3",
    title: `Egepen \nPVC Pencere ve Kapı Sistemleri`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/_images/slider-products/p-3.png",
  },
];

const HeroSectionOne = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeBg, setActiveBg] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [loading, setLoading] = useState(false);

  const setSliderItem = (id) => {
    setLoading(true);
    const img = new Image();
    img.src = `/_images/sliders/slider-${id}.png`;
    img.onload = () => {
      setActiveBg(id);
      setLoading(false);
      setTimeout(() => {
        setActiveIndex(id);
        setSelectedProduct(id);
      }, 50);
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % sliderProductData.length;
      setSliderItem(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      className="hero-section text-white bg-gradient-header"
      style={{ padding: "10rem !important" }}
    >
      <div
        className="hero-background"
        style={{
          transition: "background-image 0.1s ease-in-out",
          backgroundImage: `url('/_images/sliders/slider-${activeBg}.png')`,
        }}
      />
      <div
        className="hero-background-next"
        style={{
          backgroundImage: `url('/_images/sliders/slider-${
            (activeBg + 1) % sliderProductData.length
          }.png')`,
        }}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={sliderProductData[selectedProduct].videoLink.split("=")[1]}
        onClose={() => setOpen(false)}
      />
      <div
        className="container hero-section-container-height"
        style={{ position: "relative", marginTop: "2.5rem" }}
      >
        {sliderProductData.map((item, index) => (
          <div
            key={index}
            className={`row align-items-center ${
              activeIndex === index ? "fade show active" : "fade"
            }`}
            style={{
              transition: "opacity 0.5s ease",
              position: "absolute",
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
                      className="btn btn-primary me-3 d-flex justify-content-between align-items-center"
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
                      onClick={() => setOpen(true)}
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
                  src={item.productImg}
                  alt="hero img"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="circle-navigation d-flex justify-content-center pb-2"
        style={{
          position: "absolute",
          marginBottom: "3rem",
          top: "97.5%",
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
    </section>
  );
};

export default HeroSectionOne;
