import React, { useEffect, useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { FaCircle } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import Image from "next/image";

const sliderProductData = [
  {
    key: 0,
    id: "0",
    title: `İç Oda Kapısı, Cam Balkon Sistemleri, PVC Doğrama ve Aluminyum Sistemleri`,
    description: `İç Oda Kapısı, Cam Balkon Sistemleri, PVC Doğrama ve Aluminyum Sistemleri`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/_images/slider-products/p-0.png",
    productCategoryLink: "/products?category=Bakış İç Oda Kapısı",
  },
  {
    key: 1,
    id: "1",
    title: `Bakış Door \n Lake Kapak ve İç Oda Kapı Laquer Touch `,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/_images/slider-products/p-1.png",
    productCategoryLink: "/products?category=Albertgenau Balkon Sistemleri",
  },
  {
    key: 2,
    id: "2",
    title: `Albert Genau \nCam Balkon, Teras ve \nBahçe  Kapama \nSistemleri`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/_images/slider-products/p-2.png",
    productCategoryLink: "/products?category=Egepen PVC Sistemleri",
  },
  {
    key: 3,
    id: "3",
    title: `Egepen \nPVC Pencere ve Kapı Sistemleri`,
    videoLink: "https://www.youtube.com/watch?v=MPkfO8vMlIs",
    productImg: "/_images/slider-products/p-3.png",
    productCategoryLink: "/products?category=IQ Aluminyum Aluminyum Sistemleri",
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
    const imageLoader = new window.Image(); // Renamed the Image instance to imageLoader
    imageLoader.src = `/_images/sliders/slider-${id}.png`;
    imageLoader.onload = () => {
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
      className="hero-section ptb-120 text-white bg-gradient-header"
      // style={{ padding: "10rem !important" }}
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
        className="container "
        // hero-section-container-height
        style={{ position: "relative", height: "-webkit-fill-available" }}
      >
        {sliderProductData.map((item, index) => (
          <div
            key={index}
            className={`row ${
              activeIndex === index ? "fade show active" : "fade"
            }`}
            style={{
              transition: "opacity 0.5s ease",
              position: "absolute",
              height: "100%",
              // "-webkit-fill-available",
              zIndex: activeIndex === index ? "1" : "0",
            }}
          >
            <div className="col-lg-6 col-md-12 hero-section-container">
              <div
                className="hero-content-wrap mt-3 mt-lg-0 mt-xl-0"
                style={{
                  height: "100%",
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1
                  className="display-5 fw-bolder"
                  style={{ color: "#ffffff", whiteSpace: "pre-line" }}
                >
                  {item.title}
                </h1>
                <br />

                <div className="action-btns align-items-center flex d-sm-flex d-lg-flex d-md-flex">
                  <Link href={item.productCategoryLink}>
                    <a className="btn btn-primary me-3">Detaylı Bilgi</a>
                  </Link>
                  <div>
                    <a
                      href="#!"
                      // onClick={() => setOpen(true)}
                      type="button"
                      className="text-white text-decoration-none d-inline-flex align-items-center watch-now-btn"
                    >
                      <IoPlayCircleOutline className="me-2 text-white" />{" "}
                      Tanıtım Videosu
                    </a>
                  </div>
                </div>
                <div className="row justify-content-lg-start mt-40 mb-4">
                  <h6 className="text-white-70 mb-2">Bayiliklerimiz:</h6>
                  <div className="col-3 col-sm-3 d-flex alig-items-center justify-content-center my-2 pl-1 m-0">
                    <Image
                      width={85}
                      height={32}
                      src="/_images/brands/h-brand-1.png"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-3 col-sm-3 d-flex alig-items-center justify-content-center my-2 p-0 m-0">
                    <Image
                      width={53}
                      height={36}
                      src="/_images/brands/h-brand-2.png"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-3 col-sm-3 d-flex alig-items-center justify-content-center my-2 p-0 m-0">
                    <Image
                      width={89}
                      height={23}
                      src="/_images/brands/h-brand-3.png"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-3 col-sm-3 d-flex alig-items-center justify-content-center my-2 p-0 m-0">
                    <Image
                      width={85}
                      height={33}
                      src="/_images/brands/h-brand-4.png"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="hero-img position-relative circle-shape-images">
                <img
                  maxHeight="717px"
                  maxWidth="744px"
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
