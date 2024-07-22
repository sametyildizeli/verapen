import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("e : ", e);

    emailjs
      .sendForm("service_85wwghq", "template_aqrzoap", form.current, {
        publicKey: "Cnin9VP4s9pm0y-an",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={
        {
          // background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
        }
      }
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2>İletişim Formu</h2>
              <p>
                Sizlere en iyi hizmeti sunabilmemiz için lütfen aşağıdaki formu
                doldurunuz. 
              </p>
            </div>
            {submitted && (
              <h4>
                {" "}
                ✅ Mesajınız başarıyla iletilmiştir, en yakın sürede dönüş
                yapılacaktır.{" "}
              </h4>
            )}
            {!submitted && (
              <form ref={form} onSubmit={sendEmail} className="register-form">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="mb-1">
                      Adınız <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Adınız"
                        aria-label="Adınız"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <label htmlFor="lastName" className="mb-1">
                      Soyadınız
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Soyadınız"
                        aria-label="Soyadınız"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone" className="mb-1">
                      Telefon <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Telefon Numarası"
                        aria-label="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email" className="mb-1">
                      Email<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="mb-1">
                      Mesajınız <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        required
                        placeholder="Size nasıl yardımcı olabiliriz?"
                        style={{ height: "120px" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        required
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="flexCheckChecked"
                      >
                        <a href="#"> KVKK Açık Rıza Metni</a>ni okudum.
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        required
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="flexCheckChecked"
                      >
                        <a href="#"> E-Posta Kullanımı Açık Rıza Metni</a>ni
                        okudum ve kabul ediyorum.
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Gönder
                </button>
              </form>
            )}
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <Image
                width={612}
                height={406}
                src="/contact-us.png"
                alt="contact us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
