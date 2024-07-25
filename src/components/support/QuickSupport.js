import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { BiCommentDetail, BiMailSend, BiMap, BiMapPin } from "react-icons/bi";
import SectionTitle from "../common/SectionTitle";
import ServiceForm from "../services/ServiceForm";

const QuickSupport = () => {
  return (
    <section
      className="contact-us ptb-120 position-relative overflow-hidden"
      style={{ paddingBottom: "12.5rem" }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-7 col-lg-7 col-md-12">
            <SectionTitle
              subtitle="Destek Hattı"
              title="Bizimle İletişime Geçin!"
              description="Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız."
            />
            <div className="row justify-content-between pb-5">
              <div className="col-sm-4">
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft">
                  <span className="fas fa-2x text-primary">
                    <BiMap />
                  </span>
                </div>
                <div className="contact-info">
                  <h5>Adres</h5>
                  <p>4 Eylül San. Sitesi Keresteciler 3. Blok No:12 Sivas</p>
                  <Link href="/contact-us">
                    <a className="read-more-link text-decoration-none">
                      <span className="far me-2">
                        <BiMapPin className="mb-1" />
                      </span>{" "}
                      Ofisimize Uğrayın
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft">
                  <span className="fas fa-2x text-primary">
                    <BiMailSend />
                  </span>
                </div>
                <div className="contact-info">
                  <h5>Email</h5>
                  <p>Bizimle email yoluyla iletişime geçin.</p>
                  <Link href="/contact-us">
                    <a className="read-more-link text-decoration-none">
                      <span className="far me-2">
                        <BiCommentDetail className="mb-1" />
                      </span>{" "}
                      info@verapen.com
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-sm-4 mb-4 mb-md-0 mb-lg-0">
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft">
                  <span className="fas fa-2x text-primary">
                    <FaPhoneAlt />
                  </span>
                </div>
                <div className="contact-info">
                  <h5>Telefon</h5>
                  <p>Bizi arayın. Size en kısa sürede yardımcı olacağız. </p>
                  <Link href="/contact-us">
                    <a className="read-more-link text-decoration-none">
                      <span className="far me-2">
                        <FaPhoneAlt className="mb-1" />
                      </span>{" "}
                      +90 346 223 73 32
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ServiceForm />
        </div>
      </div>
      <div
        className="bg-dark position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 py-5"
        style={{
          minHeight: "360px",
          background: "url('/_images/banner.png')no-repeat center",
        }}
      >
        {/* <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div> */}
        {/* <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div> */}
      </div>
    </section>
  );
};

export default QuickSupport;
