import CustomPageHeader from "@components/common/custom/CustomPageHeader";
import MachineTrack from "@components/machine-track/machine-track";
import ProductList from "@components/product-list/product-list";
import PortfolioTab from "@components/tabs/PortfolioTab";
import TechTab from "@components/tabs/TechTab";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

export default function Track() {
  return (
    <Layout>
      <Navbar navDark />
      <CustomPageHeader title="MAKİNE PARKURU" />
      {/* <TechTab /> */}
      <MachineTrack />
      <Footer footerLight />
    </Layout>
  );
}
