import CustomPageHeader from "@components/common/custom/CustomPageHeader";
import ProductGalleryTab from "@components/tabs/ProductGalleryTab";
import Footer from "@layout/Footer/Footer";
import NavbarOriginal from "@layout/Header/NavbarOriginal";
import Layout from "@layout/Layout";

export default function Products() {
  return (
    <Layout>
      <NavbarOriginal navDark />
      <CustomPageHeader title="ÜRÜNLER" />
      <ProductGalleryTab />
      <Footer footerDark />
    </Layout>
  );
}
