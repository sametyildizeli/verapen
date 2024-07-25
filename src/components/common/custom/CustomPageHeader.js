/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const CustomPageHeader = ({ title, desc, integration, blogtags }) => {
  return (
    <section
      className="page-header position-relative overflow-hidden ptb-150 bg-dark"
      style={{
        background: "url('/_images/banner.png')no-repeat center",
        backgroundSize: "cover",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row justify-content-between align-items-center">
          {/* {desc?.length > 0 ? (
            <div className="col-lg-12 col-12">
              <div className="company-info-wrap align-items-center">
                <div className="company-overview">
                  <h1 className="display-5 fw-bold">{title}</h1>
                  <p className="lead mb-0">{desc}</p>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="display-5 fw-bold">{title}</h1>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default CustomPageHeader;
