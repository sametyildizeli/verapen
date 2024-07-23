import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiOutlineX } from "react-icons/hi";

import OffCanvasMenu from "./OffCanvasMenu";
import dynamic from "next/dynamic";
import { FaGlobe } from "react-icons/fa";

const Navbar = ({ navDark, insurance, classOption }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${
        navDark ? "position-absolute" : ""
      } w-100 ${classOption} ${
        insurance && "ins-header main-header w-100 z-10"
      }`}
    >
      <nav
        className={`navbar navbar-expand-xl z-50 ${"navbar-dark"} sticky-header ${
          scroll > headerTop ? "affix" : "affix"
        }`}
        style={
          scroll > headerTop
            ? { paddingTop: "1.5rem", paddingBottom: "2rem" }
            : { paddingTop: "5rem", paddingBottom: "2rem" }
        }
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href={"/"}>
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {/* {scroll > headerTop || !navDark ? ( */}
                <Image
                  width={270}
                  height={69.64}
                  src="/_images/verapen-logo.png"
                  alt="logo"
                  className="img-fluid logo-color"
                />
              {/* ) : (
                <Image
                  width={270}
                  height={69.64}
                  src="/_images/verapen-logo.png"
                  alt="logo"
                  className="img-fluid logo-white"
                />
              )} */}
            </a>
          </Link>
          <button
            className="navbar-toggler position-absolute right-0 border-0"
            id="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </button>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li style={{margin:'0rem 1rem'}}>
                <Link href="/">
                  <a className="nav-link">
                    {" "}
                    <b>Anasayfa</b>
                  </a>
                </Link>
              </li>

              <li style={{margin:'0rem 1rem'}}>
                <Link href={"/about-us"}>
                  <a className="nav-link">
                    <b>Kurumsal</b>
                  </a>
                </Link>
              </li>

              <li className="nav-item dropdown"  style={{margin:'0rem 1rem'}}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Ürünler</b>
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-half">
                    <div className="dropdown-grid-item">
                      <div>
                        <Link href={"/1"}>
                          <a className="dropdown-link px-0">
                            {/* <span className="me-2">{navLink.icon}</span> */}
                            <span className="drop-title mb-0">
                              {"Bakış İç Oda Kapısı"}
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link href={"/2"}>
                          <a className="dropdown-link px-0">
                            {/* <span className="me-2">{navLink.icon}</span> */}
                            <span className="drop-title mb-0">
                              {"Alber Genau Cam Balkon"}
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link href={"/3"}>
                          <a className="dropdown-link px-0">
                            {/* <span className="me-2">{navLink.icon}</span> */}
                            <span className="drop-title mb-0">
                              {"Egepen PVC Sistemleri"}
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link href={"/2"}>
                          <a className="dropdown-link px-0">
                            {/* <span className="me-2">{navLink.icon}</span> */}
                            <span className="drop-title mb-0">
                              {"Aliminyum Sistemleri"}
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li  style={{margin:'0rem 1rem'}}>
                <Link href="/gallery">
                  <a className="nav-link">
                    {" "}
                    <b>Galeri</b>
                  </a>
                </Link>
              </li>

              <li  style={{margin:'0rem 1rem'}}>
                <Link href={"/contact-us"}>
                  <a className="nav-link">
                    <b>İletişim</b>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className=" collapse navbar-collapse  action-btns header-right-btns justify-content-start">
            <li
              className="nav-item dropdown"
              style={
                scroll > headerTop
                  ? {
                      listStyleType: "none",
                      marginRight: "1rem",
                      color: "black",
                    }
                  : {
                      listStyleType: "none",
                      marginRight: "1rem",
                      color: "white",
                    }
              }
            >
              {/* {scroll > headerTop ? (
                <a
                  className="nav-link dropdown-toggle btn-icon"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i style={{ display: "flex" }}>
                    <FaGlobe color="black" />
                  </i>
                  <span
                    style={{ marginLeft: "0.5rem", color: "black" }}
                    className="nav-link"
                  >
                    Dil
                  </span>
                </a>
              ) :
               (
                <a
                  className="nav-link dropdown-toggle btn-icon"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i style={{ display: "flex" }}>
                    <FaGlobe color="white" />
                  </i>
                  <span
                    style={{ marginLeft: "0.5rem", color: "white" }}
                    className="nav-link"
                  >
                    Dil
                  </span>
                </a>
              )} */}
              <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                <div className="dropdown-grid rounded-custom width-half">
                  <div className="dropdown-grid-item">
                    <div>
                      <Link href={"#"}>
                        <a className="dropdown-link px-0">
                          {/* <span className="me-2">{navLink.icon}</span> */}
                          <span className="drop-title mb-0">{"Türkçe"}</span>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href={"#"}>
                        <a className="dropdown-link px-0">
                          <span className="drop-title mb-0">{"İngilizce"}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <Link href="/test.pdf">
              <a
                // className={"btn btn-primary header-catalog-btn"}
                target="_blank"
                className={
                  // scroll > headerTop
                    // ? "btn btn-primary"
                    // : 
                    "btn btn-primary header-catalog-btn"
                }
              >
                E-KATALOG
              </a>
            </Link>
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href={"/"}>
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <img
                    width={150}
                    // height={36}
                    src="/logo-web.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
