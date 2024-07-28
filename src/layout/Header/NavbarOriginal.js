import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiOutlineX } from "react-icons/hi";

import OffCanvasMenu from "./OffCanvasMenu";
import {
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
} from "../../utils/data";
import dynamic from "next/dynamic";

const navProducts = [{}];

const NavbarOriginal = ({ navDark, insurance, classOption }) => {
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
        className={`navbar navbar-expand-xl z-50 ${
          navDark ? "navbar-dark" : "navbar-light"
        } sticky-header ${scroll > headerTop ? "affix" : ""}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                <Image
                  width={135}
                  height={35}
                  src="/_images/verapen-logo-dark.png"
                  alt="logo"
                  className="img-fluid logo-color"
                />
              ) : (
                <Image
                  width={135}
                  height={35}
                  src="/_images/verapen-logo.png"
                  alt="logo"
                  className="img-fluid logo-white"
                />
              )}
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
              <li>
                <Link href="/">
                  <a className="nav-link">
                    <b>Anasayfa</b>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="about-us">
                  <a className="nav-link">
                    <b>Kurumsal</b>
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown" style={{ margin: "0rem 1rem" }}>
                <a
                  className="nav-link dropdown-toggle"
                  href="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Ürünler</b>
                </a>

                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-half">
                    <div className="dropdown-grid-item">
                      {/* {navHomeOne.map((navH, i) => (
                        <span key={i + 1}>
                          <Link href={navH.href}>
                            <a className="dropdown-link">
                              <span className="demo-list bg-primary rounded text-white fw-bold">
                                {i + 1}
                              </span>
                              <span className="dropdown-info mb-0">
                                <span className="drop-title">{navH.title}</span>
                                <span>{navH.info}</span>
                              </span>
                            </a>
                          </Link>
                        </span>
                      ))} */}
                      <div>
                        <Link href={"/products?category=Bakış İç Oda Kapısı"}>
                          <a className="dropdown-link px-0">
                            <span className="me-2">
                              <img
                                src="/_images/p-icon-1.svg"
                                height={18}
                                width={18}
                                alt="logo"
                              />
                            </span>
                            <span className="drop-title mb-0">
                              {"Bakış İç Oda Kapısı"}
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link href={"/products?category=Albertgenau Balkon Sistemleri"}>
                          <a className="dropdown-link px-0">
                            <span className="me-2">
                              <img
                                src="/_images/p-icon-2.svg"
                                height={18}
                                width={18}
                                alt="logo"
                              />
                            </span>
                            <span className="drop-title mb-0">
                              {"Alber Genau Cam Balkon"}
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link href={"/products?category=Egepen PVC Sistemleri"}>
                          <a className="dropdown-link px-0">
                            <span className="me-2">
                              <img
                                src="/_images/p-icon-3.svg"
                                height={18}
                                width={18}
                                alt="logo"
                              />
                            </span>
                            <span className="drop-title mb-0">
                              {"Egepen PVC Sistemleri"}
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link href={"/products?category=IQ Aluminyum Aluminyum Sistemleri"}>
                          <a className="dropdown-link px-0">
                            <span className="me-2">
                              <img
                                src="/_images/p-icon-4.svg"
                                height={18}
                                width={18}
                                alt="logo"
                              />
                            </span>
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

              <li style={{ margin: "0rem 1rem" }}>
                <Link href="/campaigns">
                  <a className="nav-link">
                    <b>Kampanyalar</b>
                  </a>
                </Link>
              </li>

              <li style={{ margin: "0rem 1rem" }}>
                <Link href={"/contact-us"}>
                  <a className="nav-link">
                    <b>İletişim</b>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <Link href="request-demo">
              <a
                className={
                  scroll > headerTop
                    ? "btn btn-primary header-catalog-btn"
                    : "btn btn-primary header-catalog-btn"
                }
              >
                <b>E-KATALOG</b>
              </a>
            </Link>
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <img
                    width={150}
                    // height={36}
                    src="/_images/verapen-logo.png"
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

export default dynamic(() => Promise.resolve(NavbarOriginal), { ssr: false });
