import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserShield, FaUsers, FaAngleRight } from "react-icons/fa";

const CyberAbout = () => {
  return (
    <section className="counter-with-video pt-80 pb-120" id="cyber-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="cyber-about-img text-center mb-30 mb-lg-0">
              <Image
                src="/_images/about-us.png"
                width={514}
                height={503}
                alt="Verapen"
                className="img-fluid"
              />
              <div className="row g-0">
                <div className="col-lg-5">
                  <div className="sheild-img position-relative">
                    <div className="sheild img-fluid d-none d-lg-block">
                      <Image
                        src="/_images/about-us-layout.png"
                        alt="Verapen"
                        width={225}
                        height={233}
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="pe-2">
                    <div
                      className="cyber-about-count-box d-md-flex bg-white p-4 mt-3"
                      style={{ textAlign: "left" }}
                    >
                      <div>
                        <p className="mb-0">
                          37 Yıllık Tecrübe ile
                          <br />
                          Büyük Başarılar
                          <br />
                          Elde Ettik
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pt-5">
              <div className="section-heading mb-5">
                <h5 className="h6 text-primary">Hakkımızda </h5>
                <br />
                <p>
                  Verapen uzun bir geçmiş ve bu sürede kazanılmış tecrübe ve
                  deneyimin verdiği güç ile geleceğe başarılı adımlarla, güven
                  içinde ilerlemektedir. Üçler Elektrik adıyla ticari
                  faaliyetine 1987 yılında başlamış ve bu güne kadar büyük
                  projelerde yüklenici konumlarında bulunmuştur. 1995 yılında
                  inşaat, 2000 yılında mobilya ve pvc kapı-pencere sistemleri
                  sektöründe en iyi reklamın müşteri memnuniyeti olduğu
                  bilinciyle 21. yılın sonunda da devam etmektedir.
                </p>
                <p>
                  Güçlü ve yenilikçi hedefler kazandırılmış kurumsal yapıya
                  sahip ve bu yapıyı geliştirmek için çalışan inançlı yönetimi
                  ile daha büyük hedeflere ulaşmak için emin adımlarla
                  ilerlemektedir. Firmamızın gücü, temelinde yatan tecrübeden
                  kaynaklanmaktadır.
                </p>
              </div>
              {/* <div className="row">
                <div className="col-lg-6">
                  <div className="bg-white cyber-about-box mb-30 mb-lg-0">
                    <div className="cyber-about-icon">
                      <i className="fs-5">
                        <FaUserShield />
                      </i>
                    </div>
                    <h5 className="h-6">Success Project</h5>
                    <p>
                      If you use this is regularly keephosting bandwidth bill
                      Enthusiastically unleash extensible.
                    </p>
                    <Link href="/about-us">
                      <a className="text-decoration-none text-dark">
                        Explore more{" "}
                        <i>
                          <FaAngleRight />
                        </i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-white cyber-about-box">
                    <div className="cyber-about-icon">
                      <i className="fs-5">
                        {" "}
                        <FaUsers />
                      </i>
                    </div>
                    <h5 className="h-6">Team Consultancy</h5>
                    <p>
                      Dramatically deliver distributed e-business and one-to-one
                      and idea-sharing objectively.
                    </p>
                    <Link href="/about-us">
                      <a className="text-decoration-none text-dark">
                        Explore more{" "}
                        <i>
                          <FaAngleRight />
                        </i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberAbout;
