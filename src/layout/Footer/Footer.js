import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  FaFacebook,
  FaGithub,
  FaDribbble,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import {
  footerPrimaryPages,
  footerPages,
  footerTemplate,
} from "../../utils/data";
import Rating from "../../components/common/Rating";

const Footer = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top ptb-120 ${
            footerLight ? "footer-light" : "bg-dark"
          } ${footerGradient ? "bg-gradient" : ""}  text-white`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    {footerLight ? (
                      <Image
                        width={201}
                        height={30}
                        src="/logo-web.png"
                        alt="logo"
                        className="img-fluid logo-white"
                      />
                    ) : (
                      <Image
                        width={201}
                        height={30}
                        src="/logo-web.png"
                        alt="logo"
                        className="img-fluid logo-color"
                      />
                    )}
                  </div>
                  <p>
                    En son haberlerimiz, makalelerimiz ve kaynaklarımız gelen
                    kutunuza gönderilecektir.
                  </p>

                  <form className="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                    <input
                      type="text"
                      className="input-newsletter form-control me-2"
                      placeholder="E-posta adresinizi girin"
                      name="email"
                      required
                      autoComplete="off"
                    />
                    <input
                      type="submit"
                      value="Kayıt Ol"
                      data-wait="Lütfen bekleyin..."
                      className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                    />
                  </form>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Sayfalar</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPages.map((page, i) => (
                          <li key={i + 1}>
                            <Link href={page.href}>
                              <a className="text-decoration-none">
                                {" "}
                                {page.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8 mt-8 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Ürünler</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPrimaryPages.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <Link href={primaryPage.href}>
                              <a className="text-decoration-none">
                                {" "}
                                {primaryPage.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`footer-bottom ${
            footerLight ? "footer-light" : "bg-dark"
          } ${footerGradient ? "bg-gradient" : ""} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  {/* <p className="mb-lg-0 mb-md-0">
                      &copy; 2022  Rights Reserved. Designed By{' '}
                      <a
                        href="/"
                        className="text-decoration-none"
                      >
                        ThemeTags
                      </a>
                    </p> */}
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <Link href="https://www.instagram.com/daglarmakine">
                        <a>
                          <FaInstagram />
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="https://www.facebook.com/daglarmakine">
                        <a>
                          <FaFacebook />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
