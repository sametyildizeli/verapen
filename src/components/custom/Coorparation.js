import React from "react";
import Link from "next/link";

const Coorparation = () => {
  return (
    <section
      className="about-header-section ptb-150 position-relative overflow-hidden"
      style={{
        background: "url('/_images/header-banner.png') no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
              <div className="about-content-left">
                <div className="about-info mb-5">
                  <h1 className="fw-bold display-5" style={{ color: "white" }}>
                    Kurumsal
                  </h1>
                  <p className="lead" style={{ color: "white" }}>
                    Verapen uzun bir geçmiş ve bu sürede kazanılmış tecrübe ve
                    deneyimin verdiği güç ile geleceğe başarılı adımlarla, güven
                    içinde ilerlemektedir.
                  </p>
                  {/* <Link href="/career">
                    <a className="btn btn-primary mt-4 me-3">Open Positions</a>
                  </Link>
                  <Link href="/about-us">
                    <a className="btn btn-soft-primary mt-4">Meet Our Team</a>
                  </Link> */}
                </div>
                <img
                  src="/_images/tab-1.png"
                  alt="about"
                  className="img-fluid about-img-first mt-5 rounded-custom shadow"
                />
              </div>
              <div className="about-content-right">
                <img
                  src="/_images/tab-2.png"
                  alt="about"
                  className="img-fluid mb-5 rounded-custom shadow"
                />
                <img
                  src="/_images/tab-3.png"
                  alt="about"
                  className="rounded-custom about-img-last shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>
  );
};

export default Coorparation;
