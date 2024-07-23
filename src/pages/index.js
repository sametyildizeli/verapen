import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import HeroSectionOne from "@components/hero-section/HeroSectionOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import QuickSupport from "@components/support/QuickSupport";
import LatestBlog from "@components/blogs/LatestBlog";
import PortfolioTab from "@components/tabs/PortfolioTab";

export default function Home() {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionOne />
      {/* <HeroSectionOneC /> */}
      {/* <CustomSlider /> */}
      {/* <CustomSlider2C /> */}
      <PortfolioTab />
      <TestimonialOne />
      <LatestBlog />
      <QuickSupport />
      <Footer footerDark />
    </Layout>
  );
}
