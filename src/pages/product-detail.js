import CustomPageHeader from "@components/common/custom/CustomPageHeader";
import HeroSectionOnePD from "@components/hero-section/HeroSectionOnePD";
import PortfolioTab from "@components/tabs/PortfolioTab";
import TechTab from "@components/tabs/TechTab";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";
import MediaProductGallery from "@components/media-product-gallery/media-product-gallery";
import CustomDatatable from "@components/datatable/datatable";
import HeroSectionOne from "@components/hero-section/HeroSectionOne";
import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa";

export default function ProductDetail() {
  return (
    <Layout>
      <Navbar navDark />
      <CustomPageHeader title="ÜRÜN DETAY" />
      {/* <HeroSectionOnePD /> */}
      {/* <TechTab /> */}
      {/* <ProductList /> */}
      {/* <PortfolioTab /> */}

      <div className="container mt-5">
        <div className="row align-items-center">
          <h2 className="text-primary mb-3 text-lg-center">
            ÇİFT DİNGİL GERİYE DEVİRMELİ RÖMORK
          </h2>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-lg-12">
            <div className="about-left text-lg-center mb-32 mb-lg-0">
              <img
                src="/slider-product-2.png"
                height={460}
                style={{ height: "460px" }}
                alt="About"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <MediaProductGallery />
      <CustomDatatable />
      <Footer footerLight />
    </Layout>
  );
}
