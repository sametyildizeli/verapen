/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import SectionTitle from "../common/SectionTitle";

const TabOne = () => {
  return (
    <section className="feature-tab-section ptb-120 bg-light">
      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-10 col-lg-6">
            <SectionTitle
              subtitle="Features"
              title="Powerful Advanced Features"
              description="Dynamically initiate market positioning total linkage with
                  clicks-and-mortar technology progressively procrastinate
                  compelling."
              centerAlign
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul
              className="nav justify-content-center feature-tab-list-2 mb-0"
              id="nav-tab"
              role="tablist"
            >
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link active"
                    to="#tab-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                    role="tab"
                    aria-selected="false"
                  >
                    İç Oda Kapısı
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link"
                    to="#tab-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                    role="tab"
                    aria-selected="false"
                  >
                    Cam Balkon
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link"
                    to="#tab-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                    role="tab"
                    aria-selected="false"
                  >
                    PVC Sistemler
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link"
                    to="#tab-4"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                    role="tab"
                    aria-selected="false"
                  >
                    Alüminyum Sistemler
                  </a>
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade pt-60 active show"
                id="tab-1"
                role="tabpanel"
              >
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-6">
                    <div className="feature-tab-info">
                      <h3>Laquer Touch İç Oda Kapısı</h3>
                      <p>
                        • Modern Tasarım: Minimalist ve şık çizgileriyle her
                        türlü dekorasyon tarzına uyum sağlar.{" "}
                      </p>
                      <p>
                        • Yüksek Kalite Malzeme: Dayanıklı ve uzun ömürlü
                        kullanıma uygun kaliteli malzemelerden üretilmiştir.
                      </p>
                      <p>
                        • Pürüzsüz Yüzey: Lake kaplama sayesinde pürüzsüz ve
                        parlak bir yüzeye sahiptir.{" "}
                      </p>
                      <p>
                        • Renk Seçenekleri: Çeşitli renk ve desen seçenekleriyle
                        kişisel zevklerinize ve dekorasyonunuza uygun seçimler
                        yapabilirsiniz.
                      </p>
                      <p>
                        • Kolay Temizlik: Leke tutmayan yüzeyi sayesinde
                        temizliği oldukça kolaydır.{" "}
                      </p>
                      <p>
                        • Ses Yalıtımı: Özel yapısı sayesinde ses yalıtımı
                        sağlar, odalar arası ses geçişini azaltır.
                      </p>
                      <p>
                        • Güvenlik: Sağlam yapısı ve kaliteli kilit sistemiyle
                        güvenli bir kullanım sunar.
                      </p>
                      <Link href="/about-us">
                        <a className="read-more-link text-decoration-none mt-4 d-block">
                          Ürünleri inceleyin
                          <span className="far ms-2 mb-1">
                            <FiArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      src="/_images/tab-1.png"
                      alt="feature tab"
                      className="img-fluid mt-4 mt-lg-0 mt-xl-0"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade pt-60" id="tab-2" role="tabpanel">
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-5">
                    <img
                      src="/_images/tab-2.png"
                      alt="feature tab"
                      className="img-fluid mb-4 mb-lg-0 mb-xl-0"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-tab-info">
                      <h3>Albert Genau Cam Balkon Isı Cam Sistemleri</h3>
                      <p>
                        • Yüksek Isı Yalıtımı: Özel ısı camları sayesinde, kış
                        aylarında soğuk hava girişini engelleyerek ısı kaybını
                        minimize eder ve enerji tasarrufu sağlar.
                      </p>
                      <p>
                        • Estetik Tasarım: Şeffaf ve modern cam panellerle
                        balkonlarınızın görünümünü güzelleştirir, geniş ve ferah
                        bir ortam sunar.
                      </p>
                      <p>
                        • Fonksiyonellik: Kolayca açılıp kapanabilen sürgülü ve
                        katlanabilir cam sistemleri, kullanım kolaylığı ve
                        esneklik sağlar.
                      </p>
                      <p>
                        • Dayanıklılık: Yüksek kaliteli malzemelerden üretilen
                        sistemler, uzun ömürlü kullanım sunar ve dış etkenlere
                        karşı dayanıklıdır.
                      </p>
                      <p>
                        • Ses Yalıtımı: Isı camları aynı zamanda ses yalıtımı
                        sağlayarak, gürültüyü önemli ölçüde azaltır ve daha
                        huzurlu bir ortam yaratır.
                      </p>
                      <p>
                        • Güvenlik: Güçlendirilmiş cam ve sağlam profiller,
                        güvenli bir kullanım sunar.
                      </p>
                      <p>
                        • Kolay Temizlik: Cam yüzeyler kolayca temizlenebilir,
                        düşük bakım gerektirir.
                      </p>
                      <p>
                        • Çok Yönlülük: Her türlü balkon yapısına ve boyutuna
                        uyum sağlayacak şekilde özelleştirilebilir.
                      </p>
                      <Link href="/about-us">
                        <a className="read-more-link text-decoration-none mt-4 d-block">
                          Ürünleri inceleyin
                          <span className="far ms-2 mb-1">
                            <FiArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade pt-60" id="tab-3" role="tabpanel">
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-6">
                    <div className="feature-tab-info">
                      <h3>PVC Cam ve Kapı Sistemleri</h3>
                      <p>
                        • Yüksek Enerji Verimliliği: PVC malzemeler, mükemmel
                        yalıtım özellikleri sayesinde ısı kaybını azaltır,
                        enerji tasarrufu sağlar ve yaşam alanlarınızı kışın
                        sıcak, yazın serin tutar.
                      </p>
                      <p>
                        • Dayanıklılık: PVC kapı ve pencereler, uzun ömürlü
                        kullanım sağlar ve dış etkenlere karşı dayanıklıdır.
                        Paslanma, çürüme veya deformasyon gibi sorunlarla
                        karşılaşmaz.
                      </p>
                      <p>
                        • Kolay Bakım: PVC sistemler, düşük bakım gerektirir.
                        Temizlenmesi kolaydır ve uzun yıllar boyunca yeni gibi
                        görünür.
                      </p>
                      <p>
                        {" "}
                        • Ses Yalıtımı: Yüksek kaliteli PVC pencereler ve
                        kapılar, dış ortamdan gelen gürültüyü önemli ölçüde
                        azaltır, daha sessiz ve huzurlu bir yaşam alanı sunar.
                      </p>
                      <p>
                        • Güvenlik: Güçlendirilmiş çelik profiller ve çok
                        noktadan kilitleme sistemleri ile yüksek güvenlik
                        sağlar.
                      </p>
                      <p>
                        {" "}
                        • Çevre Dostu: PVC malzemeler, geri dönüştürülebilir
                        özellikleri sayesinde çevre dostudur ve sürdürülebilir
                        bir çözüm sunar.
                      </p>
                      <p>
                        • Estetik Çeşitlilik: Farklı renk ve desen
                        seçenekleriyle, her türlü dekorasyon tarzına uyum sağlar
                        ve yaşam alanlarınıza estetik bir dokunuş katar.
                      </p>
                      <p>
                        {" "}
                        • Kolay Kurulum: Profesyonel ekipler tarafından hızlı ve
                        kolay bir şekilde monte edilebilir.
                      </p>

                      <Link href="/about-us">
                        <a className="read-more-link text-decoration-none mt-4 d-block">
                          Ürünleri inceleyin
                          <span className="far ms-2 mb-1">
                            <FiArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      src="/_images/tab-3.png"
                      alt="feature tab"
                      className="img-fluid mt-4 mt-lg-0 mt-xl-0"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade pt-60" id="tab-4" role="tabpanel">
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-5">
                    <img
                      src="/_images/tab-4.png"
                      alt="feature tab"
                      className="img-fluid mb-4 mb-lg-0 mb-xl-0"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-tab-info">
                      <h3>Alüminyum Sistemleri</h3>
                      <p>
                        • Dayanıklılık: Alüminyum, korozyona ve hava koşullarına
                        karşı son derece dayanıklıdır, bu nedenle uzun ömürlü
                        kullanım sunar.
                      </p>
                      <p>
                        • Hafiflik: Malzemenin hafifliği, montaj ve taşıma
                        süreçlerini kolaylaştırır, aynı zamanda yapının genel
                        ağırlığını azaltır.
                      </p>
                      <p>
                        • Estetik Tasarım: Modern ve şık görünümüyle estetik
                        açıdan göz alıcı çözümler sunar. Farklı renk ve kaplama
                        seçenekleri ile her türlü dekorasyon stiline uyum
                        sağlar.
                      </p>
                      <p>
                        • Enerji Verimliliği: Alüminyum profiller, termal
                        kırılma özelliği sayesinde ısı yalıtımı sağlar ve enerji
                        tasarrufuna katkıda bulunur.
                      </p>
                      <p>
                        • Geniş Uygulama Alanı: Pencerelerden kapılara, cephe
                        sistemlerinden kış bahçelerine kadar çok çeşitli
                        alanlarda kullanılabilir.
                      </p>
                      <p>
                        • Düşük Bakım: Alüminyum, bakım gerektirmeyen bir
                        malzemedir. Temizlenmesi kolaydır ve uzun yıllar boyunca
                        ilk günkü gibi kalır.
                      </p>
                      <p>
                        • Güvenlik: Güçlendirilmiş yapısı ve çok noktadan
                        kilitleme sistemleri ile yüksek güvenlik sağlar.
                      </p>
                      <p>
                        • Çevre Dostu: Alüminyum tamamen geri dönüştürülebilir
                        bir malzemedir, bu nedenle çevre dostudur ve
                        sürdürülebilir bir çözüm sunar
                      </p>
                      <Link href="/about-us">
                        <a className="read-more-link text-decoration-none mt-4 d-block">
                          Ürünleri inceleyin
                          <span className="far ms-2 mb-1">
                            <FiArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabOne;
