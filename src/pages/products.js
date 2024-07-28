import CustomPageHeader from "@components/common/custom/CustomPageHeader";
import PortfolioTab from "@components/tabs/PortfolioTab";
import ProductGalleryTab from "@components/tabs/ProductGalleryTab";
import ProductsTab from "@components/tabs/ProductsTab";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import NavbarOriginal from "@layout/Header/NavbarOriginal";
import Layout from "@layout/Layout";

export default function Products() {
  return (
    <Layout>
      <NavbarOriginal navDark />
      <CustomPageHeader title="ÜRÜNLER" />
      {/* <PortfolioTab /> */}
      <ProductGalleryTab />
      {/* <ProductsTab /> */}
      <Footer footerDark />
    </Layout>
  );
}
