import CustomPageHeader from "@components/common/custom/CustomPageHeader";
import PortfolioTab from "@components/tabs/PortfolioTab";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

export default function Products() {
  return (
    <Layout>
      <Navbar navDark />
      <CustomPageHeader title="ÜRÜNLER" />
      <PortfolioTab />
      <Footer footerLight />
    </Layout>
  );
}
