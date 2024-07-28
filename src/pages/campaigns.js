import CustomPageHeader from "@components/common/custom/CustomPageHeader";
import InsuranceGallery from "@components/gallery/InsuranceGallery";
import MediaGallery from "@components/media-gallery/media-gallery";
import ProductList from "@components/product-list/product-list";
import GalleryTab from "@components/tabs/GalleryTab";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import NavbarOriginal from "@layout/Header/NavbarOriginal";
import Layout from "@layout/Layout";

export default function Gallery() {
  return (
    <Layout>
      <NavbarOriginal navDark />
      <CustomPageHeader title="Kampanyalar ve Duyurular" />
      <GalleryTab />
      {/* <MediaGallery /> */}
      <Footer footerDark />
    </Layout>
  );
}
