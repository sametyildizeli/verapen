import React from "react";
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsFillPinMapFill,
  BsTelephoneInbound,
} from "react-icons/bs";

const ContactCard = () => {
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillPinMapFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Ofisimize Uğrayın</h5>
                <p>4 Eylül San. Sitesi Keresteciler 3. Blok No:12 Sivas</p>
              </div>
              <a
                href="https://maps.app.goo.gl/YJQJ4U89jtRfeXcc8"
                target="_blank"
                className="btn btn-link mt-auto"
              >
                Ofisimize Uğrayın
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Bize Mail Atın</h5>
                <p>
                  Bizimle email yoluyla iletişime geçin. Size en kısa sürede
                  geri dönüş yapacağız.
                </p>
              </div>
              <a
                href="mailto:info@verapen.com"
                className="btn btn-link mt-auto"
              >
                info@verapen.com
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Bizi Arayın</h5>
                <p>Bizi arayın. Size en kısa sürede yardımcı olacağız.</p>
              </div>
              <a href="tel:+90 346 502 51 5" className="btn btn-link mt-auto">
                +90 346 223 73 32
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
