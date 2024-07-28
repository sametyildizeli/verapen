/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <section
      className="our-story-section pt-60 pb-120"
      style={{
        background: "url('/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              {/* <h4 className="h5 text-primary">Hakkımızda</h4> */}
              <h2 className="text-primary">Hakkımızda</h2>
              <p>
                Verapen uzun bir geçmiş ve bu sürede kazanılmış tecrübe ve
                deneyimin verdiği güç ile geleceğe başarılı adımlarla, güven
                içinde ilerlemektedir. Üçler Elektrik adıyla ticari faaliyetine
                1987 yılında başlamış ve bu güne kadar büyük projelerde
                yüklenici konumlarında bulunmuştur.
              </p>
              <p>
                1995 yılında inşaat, 2000 yılında mobilya ve pvc kapı-pencere
                sistemleri sektöründe en iyi reklamın müşteri memnuniyeti olduğu
                bilinciyle 21. yılın sonunda da devam etmektedir.
              </p>
              <p>
                Güçlü ve yenilikçi hedefler kazandırılmış kurumsal yapıya sahip
                ve bu yapıyı geliştirmek için çalışan inançlı yönetimi ile daha
                büyük hedeflere ulaşmak için emin adımlarla ilerlemektedir.
              </p>
              <p>
                Firmamızın gücü, temelinde yatan tecrübeden kaynaklanmaktadır.
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              {/* <h4 className="h5 text-primary">Misyonumuz</h4> */}
              <h2 className="text-primary">Misyonumuz</h2>
              <p>
                Kaynakları en verimli şekilde kullanarak toplum ihtiyaçlarını
                önceden görüp karşılamaya odaklanmış, üstün hizmet ve ürün
                kalitesiyle güçlü bir marka imajına sahip, topluma çalışanlara
                ve doğaya karşı saygılı sorumluluklarını yerine getiren, saygın
                birçok konuda öncü, sattığı ürün ve hizmete satış sonrasında da
                sahip çıkarak, kurumsal ve uzun ömürlü bir kuruluş olmayı
                hedeflemektedir.
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              {/* <h4 className="h5 text-primary">Vizyonumuz</h4> */}
              <h2 className="text-primary">Vizyonumuz</h2>
              <p>
                Sektöründe önde gelen bir firma olarak; yeniliklere açık,
                ileriyi görebilen, ülkemizi yurt dışında başarılı bir şekilde
                temsil edebilen, geniş bir tabanın beklentilerini
                karşılayabilecek üretim hedefini ilke edinen, sürekli büyümeyi
                hedef alan, ülkemize katma değer ve istihdam sağlamayı amaç
                edinen, kısacası çağın yeniliklerini sektörün gelişimi ile
                bütünleştirerek hizmet eden bir firma olmayı hedefledik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
