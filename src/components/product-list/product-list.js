import React from 'react';

const ProductList = () => {
  return (
    <section className="office-address-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">{'Ürün Listesi'}</h4>
              <h2>Ürünler</h2>
              <p>
                Ürünlerin açıklanması gereken metin buraya yazılabilir.{' '}
              </p>
            </div>
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
                  <h5>Ürün 1</h5>
                  <address>
                    Ürün 1 <br /> Açıklama, <br />
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
                  <h5>Ürün 2</h5>
                  <address>
                    Ürün 2 <br /> Açıklama, <br />
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
                  <h5>Ürün 3</h5>
                  <address>
                    Ürün 3 <br /> Açıklama, <br />
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
                  <h5>Ürün 4</h5>
                  <address>
                    Ürün 4 <br /> Açıklama, <br />
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

export default ProductList;
