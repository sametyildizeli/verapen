import SectionTitle from '@components/common/SectionTitle';
import React from 'react';

const MediaProductGallery = () => {
  return (
    <section className="office-address-section ptb-60">
      <div className="container">
      <div className="row justify-content-center align-content-center">
          <div className="col-md-10 col-lg-6">
            <SectionTitle
              title="Galeri"
              centerAlign
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/office-img-1.jpg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5></h5>
                  <address>
                    Ürün Fotoğrafı <br /> Açıklama, <br />
                    Açıklama Detay 
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/office-img-2.jpg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5></h5>
                  <address>
                    Ürün Fotoğrafı <br /> Açıklama, <br />
                    Açıklama Detay 
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/office-img-3.jpg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5></h5>
                  <address>
                    Ürün Fotoğrafı <br /> Açıklama, <br />
                    Açıklama Detay 
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/office-img-5.jpg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5></h5>
                  <address>
                    Ürün Fotoğrafı <br /> Açıklama, <br />
                    Açıklama Detay 
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaProductGallery;
