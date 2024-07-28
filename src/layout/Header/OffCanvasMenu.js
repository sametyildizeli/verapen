import React from "react";
import Link from "next/link";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "../../utils/data";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/">
            <a className="nav-link">Anasayfa</a>
          </Link>
        </li>

        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/about-us">
            <a className="nav-link">Kurumsal</a>
          </Link>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex justify-content-between"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ürünler
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-full">
              <span>
                <Link href={"/products?category=Bakış İç Oda Kapısı"}>
                  <a
                    className="dropdown-link px-0"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <span className="drop-title mb-0"> Bakış İç Oda Kapısı </span>
                  </a>
                </Link>
              </span>
            </div>
            <div className="dropdown-grid rounded-custom width-full">
              <span>
                <Link href={"/products?category=Albertgenau Balkon Sistemleri"}>
                  <a
                    className="dropdown-link px-0"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <span className="drop-title mb-0"> Albert Genau Cam Balkon </span>
                  </a>
                </Link>
              </span>
            </div>
            <div className="dropdown-grid rounded-custom width-full">
              <span>
                <Link href={"/products?category=Egepen PVC Sistemleri"}>
                  <a
                    className="dropdown-link px-0"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <span className="drop-title mb-0"> Egepen PVC Sistemleri </span>
                  </a>
                </Link>
              </span>
            </div>
            <div className="dropdown-grid rounded-custom width-full">
              <span>
                <Link
                  href={"/products?category=IQ Aluminyum Aluminyum Sistemleri"}
                >
                  <a
                    className="dropdown-link px-0"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <span className="drop-title mb-0"> Aluminyum Sistemleri </span>
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </li>

        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/products">
            <a className="nav-link">Kampanyalar</a>
          </Link>
        </li>

        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/contact-us">
            <a className="nav-link">İletişim</a>
          </Link>
        </li>
      </ul>
      <div className="action-btns mt-4 ps-3">
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/Ekatalog_Daglar.pdf">
            <a target="_blank" className="btn btn-primary">
              e-Katalog
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
