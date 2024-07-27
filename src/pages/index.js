import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import HeroSectionOne from "@components/hero-section/HeroSectionOne";
import QuickSupport from "@components/support/QuickSupport";
import FeatureOne from "@components/features/FeatureOne";
import TabOne from "@components/tabs/TabOne";
import CyberAbout from "@components/our-story/CyberAbout";
import CustomerLogoSlider from "@components/customer/CustomerLogoSlider";
import NavbarOriginal from "@layout/Header/NavbarOriginal";
import HeroSectionOneOriginal from "@components/hero-section/HeroSectionOneOriginal";

export default function Home() {
  return (
    <Layout>
      <Navbar navDark />
      {/* <NavbarOriginal navDark /> */}
      <HeroSectionOne />
      {/* <HeroSectionOneOriginal /> */}
      <CustomerLogoSlider />
      <CyberAbout />
      <FeatureOne />
      <TabOne />
      <QuickSupport />
      <Footer footerDark />
    </Layout>
  );
}
