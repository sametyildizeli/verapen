import React from "react";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";
import { RiStackLine } from "react-icons/ri";
import { BsCodeSlash, BsShieldCheck } from "react-icons/bs";

const FeatureOne = () => {
  return (
    <>
      <section className="feature-promo ptb-120 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                classNam="text-center"
                title="Aradığınız her şey burada"
                description="Cam balkon 🪟 İç oda kapısı 🚪PVC pencere sistemleri 🪟 bizimle iletişime geçebilir, showroom’umuzu ziyaret ederek satış temsilcilerimizden detaylı bilgi alabilirsiniz."
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-feature-promo p-lg-1 p-1 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-transparent">
                  <Image
                    width={64}
                    height={64}
                    src="/_images/features/feature-1.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5" style={{ color: "#E30613" }}>
                    Bakış İç Oda Kapısı
                  </h3>
                  <p>
                    Bakış Door’un Laquer Touch iç oda kapıları, şıklığı ve
                    modernliği bir arada sunuyor. Zarif tasarımı ve kaliteli
                    işçiliği ile yaşam alanlarınıza estetik bir dokunuş katıyor.
                    Laquer Touch, zarafetin yeni adı.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature-promo p-lg-1 p-1 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-transparent">
                  <Image
                    width={64}
                    height={64}
                    src="/_images/features/feature-2.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5" style={{ color: "#80163F" }}>
                    Alber Genau Cam Balkon
                  </h3>
                  <p>
                    Albert Genau cam balkon sistemleri, modern yaşam
                    alanlarınıza ferahlık ve zarafet katar. Dayanıklı
                    malzemelerden üretilen bu sistemler, her mevsim
                    kullanabileceğiniz fonksiyonel ve estetik çözümler sunar.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature-promo p-lg-1 p-1 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-transparent">
                  <Image
                    width={64}
                    height={64}
                    src="/_images/features/feature-3.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5" style={{ color: "#2658A5" }}>
                    Egepen PVC Sistemleri
                  </h3>
                  <p>
                    Egepen PVC sistemleri, evinize dayanıklılık ve estetik
                    katıyor. Yüksek yalıtım özellikleri ile enerji tasarrufu
                    sağlar, ses ve ısı yalıtımı ile konforlu bir yaşam sunar.
                    Modern tasarımları ile Egepen, mekanlarınıza şıklık ve uzun
                    ömürlü kullanım imkanı sağlar.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature-promo p-lg-1 p-1 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-transparent">
                  <Image
                    width={64}
                    height={64}
                    src="/_images/features/feature-4.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5" style={{ color: "#D31B5D" }}>
                    Egepen PVC Sistemleri
                  </h3>
                  <p>
                    IQ Alüminyum sistemleri, mekanlarınıza estetik ve
                    dayanıklılık katar. Yüksek kalite standartlarıyla üretilen
                    bu sistemler, uzun ömürlü ve modern çözümler sunar. Hem iç
                    hem de dış mekanlar için ideal olan IQ Alüminyum sistemleri
                    ile yaşam alanlarınıza şıklık ve fonksiyonellik kazandırın.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-lg-6 mt-4">
              <div
                className="position-relative d-flex flex-column h-100 flex-wrap p-5 rounded-custom"
                style={{ backgroundColor: "#234F37" }}
              >
                <div className="cta-left-info mb-2">
                  <h5 style={{ color: "white" }}>
                    Ürünlerimize buradan göz atabilirsiniz
                  </h5>
                  <p style={{ color: "white" }}>
                    Ürün kataloğumuza aşağıdaki buton aracılığıyla ulaşabilir,
                    ürünlerimiz hakkında detaylı bilgi alabilirsiniz.{" "}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="/request-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      Ürünlere Göz Atın{" "}
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    src="/_images/layer-ad-1.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div
                className="position-relative d-flex flex-column h-100 flex-wrap p-5 rounded-custom"
                style={{ backgroundColor: "#8CD25D" }}
              >
                <div className="cta-left-info mb-2">
                  <h5 style={{ color: "white" }}>
                    Ürünlerimiz hakkında detaylı bilgi almak için bize
                    ulaşabilirsiniz.
                  </h5>
                  <p style={{ color: "white" }}>
                    Ürünlerimiz hakkında daha fazla bilgi almak için bize
                    WhatsApp üzerinden ulaşabilirsiniz.{" "}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="/request-for-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      Bize WhatsApp'tan Ulaşın
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    layout="responsive"
                    src="/_images/layer-ad-2.png"
                    alt="cta img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureOne;
