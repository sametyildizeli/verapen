import ProductGallery from "@components/custom/ProductGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductGalleryTab = () => {
  return (
    <section className="portfolio bg-light ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>Ürün Modelleri</h2>
              <p>
                Üretmiş olduğumuz ürünlerimize ve detaylara tıklayarak
                ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-6">
            <div className="tab-button mb-5">
              <ul
                className="nav nav-pills d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="damperli-romork-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#damperli-romork"
                    type="button"
                    role="tab"
                    aria-controls="damperli-romork"
                    aria-selected="true"
                  >
                    Bakış İç Oda Kapısı
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="tandem-dingil-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tandem-dingil"
                    type="button"
                    role="tab"
                    aria-controls="tandem-dingil"
                    aria-selected="false"
                  >
                    Albert Genau Balkon Sistemleri
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-design-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-design"
                    type="button"
                    role="tab"
                    aria-controls="pills-design"
                    aria-selected="false"
                  >
                    Egepen PVC Sistemleri
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="boru-romork-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#boru-romork"
                    type="button"
                    role="tab"
                    aria-controls="boru-romork"
                    aria-selected="false"
                  >
                    Aluminyum Sistemleri
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-6">
            <div className="tab-button mb-5">
              <ul
                className="nav nav-pills d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                {/* <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="damperli-romork-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#damperli-romork"
                    type="button"
                    role="tab"
                    aria-controls="damperli-romork"
                    aria-selected="true"
                  >
                    Tümü
                  </button>
                </li> */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="tandem-dingil-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tandem-dingil"
                    type="button"
                    role="tab"
                    aria-controls="tandem-dingil"
                    aria-selected="false"
                  >
                    SubCategory 1
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-design-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-design"
                    type="button"
                    role="tab"
                    aria-controls="pills-design"
                    aria-selected="false"
                  >
                    SubCategory 2
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="boru-romork-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#boru-romork"
                    type="button"
                    role="tab"
                    aria-controls="boru-romork"
                    aria-selected="false"
                  >
                    SubCategory 3
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="damperli-romork"
              role="tabpanel"
              aria-labelledby="damperli-romork-tab"
            >
              <ProductGallery />
            </div>

            <div
              className="tab-pane fade"
              id="tandem-dingil"
              role="tabpanel"
              aria-labelledby="tandem-dingil-tab"
            >
              <ProductGallery />
            </div>

            <div
              className="tab-pane fade"
              id="pills-design"
              role="tabpanel"
              aria-labelledby="pills-design-tab"
            >
              <ProductGallery />
            </div>

            <div
              className="tab-pane fade"
              id="boru-romork"
              role="tabpanel"
              aria-labelledby="boru-romork-tab"
            >
              <ProductGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGalleryTab;
