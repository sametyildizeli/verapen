import React from "react";
import Image from "next/image";

import Rating from "../common/Rating";
import VideoModal from "../common/VideoModal";
import { testimonialAuthor, testimonialOne } from "../../utils/data";

const TestimonialOne = ({ darkBg }) => {
  return (
    <section
      className={`customer-review-tab ptb-120 ${
        darkBg ? "bg-gradient text-white" : "bg-light"
      } position-relative z-2`}
    >
      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h4 className="h5 text-warning text-primary">
                {/* Hakkımızda */}
              </h4>
              <h2>Kurumsal</h2>
              <p>Römork ve Treyler Ekipmanı</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="testimonial-tabContent">
              {testimonialOne.map((testimonial, i) => (
                <div
                  key={i + 1}
                  className={`tab-pane fade ${testimonial.active}`}
                  id={testimonial.target}
                  role="tabpanel"
                >
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6">
                      <div className="testimonial-tab-content mb-5 mb-lg-0 mb-md-0">
                        <Image
                          width={65}
                          height={51}
                          src="/testimonial/quotes-left.svg"
                          alt="testimonial quote"
                          className="img-fluid mb-32"
                        />
                        <blockquote className="blockquote">
                          <p>
                            Sedir Grup olarak 1999 yılında başladığımız yemek,
                            inşaat, tarım ve hayvancılık sektöründeki
                            yolculuğumuzda daima en iyiyi hedefledik.
                          </p>
                          <p>
                            Piyasadaki kaliteyi artırmak ve gelen talepleri
                            karşılamak üzere 2023 yılında Dağlar Makine markamız
                            ile tarım makineleri ve yedek parçaları üretimine
                            başladık.
                          </p>
                          <p>
                            Çeyrek asırlık tecrübemizden aldığımız güç ile
                            kaliteli işçiliği birleştirerek ürettiğimiz römork,
                            tanker ve yedek parçalarımızı gerekli tüm kontrol ve
                            testlerden başarıyla geçirerek müşterilerimizin
                            memnuniyetine sunuyoruz.{" "}
                          </p>
                          <p>
                            Sektörel, teknolojik, teknik gelişme ve ilerlemeleri
                            yakından takip ederek çiftçilerimize daha kaliteli
                            hizmet ve ürün vermek amacıyla çalışmaya, üretmeye
                            devam edeceğiz.{" "}
                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="author-img-wrap pt-5 ps-5">
                        <div className="testimonial-video-wrapper position-relative">
                          <Image
                            width={478}
                            height={382}
                            src={'/video-cover.png'}
                            className="img-fluid rounded-custom shadow-lg"
                            alt="testimonial author"
                          />
                          <div className="customer-info text-white d-flex align-items-center">
                            <VideoModal />
                          </div>
                          <div className="position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-12">
            <ul
              className="nav nav-pills testimonial-tab-menu mt-60"
              id="testimonial"
              role="tablist"
            >
              {testimonialAuthor.map((author, i) => (
                <li key={i + 1} className="nav-item" role="presentation">
                  <div
                    className="nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link"
                    data-bs-toggle="pill"
                    data-bs-target={author.target}
                    role="tab"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumb me-3">
                      <Image
                        width={50}
                        height={50}
                        src={author.image}
                        className="rounded-circle"
                        alt="testimonial thumb"
                      />
                    </div>
                    <div className="author-info">
                      <h6 className="mb-0">{author.name} </h6>
                      <span>{author.title} </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialOne;
