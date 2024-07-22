import React from "react";
import Image from "next/image";

import ProfileCard from "./ProfileCard";

const BlogSingleFeature = () => {
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="blog-details-wrap d-flex justify-content-center align-items-center row">
              <h1 className="h2 text-center text-primary">
                Kayseri Tarım Fuarı
              </h1>
              <p>
                22-26 Şubat 2024 tarihlerinde düzenlenen Kayseri Tarım Fuarı’nda
                Dağlar Makine olarak biz de vardık. Standımızı ziyaret eden,
                ürünlerimize ilgi gösteren tüm misafirlerimize teşekkür eder,
                yeniden buluşmayı temenni ederiz.
              </p>
              <Image
                width={820}
                height={500}
                src="/news-1.jpeg"
                className="img-fluid mt-4 rounded-custom text-center"
                alt="apply"
              />
              <br/>
              <br/>
              <Image
                width={820}
                height={500}
                src="/news-3.jpeg"
                className="img-fluid mt-4 rounded-custom text-center"
                alt="apply"
              />
              {/* <div className="job-details-info mt-5">
                <h3 className="h5">
                  Focus on increasing customer retention first
                </h3>
                <p>
                  Aliquip pariatur elit consequat velit id pariatur est. Ut
                  tempor ad pariatur amet dolor labore consectetur ad esse
                  adipisicing qui. Mollit tempor sunt sit culpa amet dolor irure
                  pariatur sit velit in. Tempor sint non dolore veniam ea
                  incididunt ea commodo. Mollit ut proident duis qui adipisicing
                  amet velit laborum commodo. Ex minim esse nisi in excepteur
                  nulla commodo non occaecat enim consectetur do. Officia ea
                  occaecat sint fugiat eu ea do deserunt et minim excepteur
                  cillum tempor.
                </p>
                <ul className="content-list list-unstyled">
                  <li>
                    Magna minim nostrud consequat aliquip nisi voluptate amet
                    excepteur aute voluptate labore proident.
                  </li>
                  <li>Amet exercitation commodo ut minim.</li>
                  <li>
                    Laborum sint minim id deserunt adipisicing consequat minim
                    enim adipisicing quis sint.
                  </li>
                </ul>
              </div> */}

              {/* <div className="blog-details-info mt-5">
                <h3 className="h5">Skill & Experience</h3>
                <ul className="content-list list-unstyled">
                  <li>
                    Magna minim nostrud consequat aliquip nisi voluptate amet
                    excepteur aute voluptate labore proident.
                  </li>
                  <li>Amet exercitation commodo ut minim.</li>
                  <li>
                    Laborum sint minim id deserunt adipisicing consequat minim
                    enim adipisicing quis sint.
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingleFeature;
