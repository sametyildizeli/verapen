import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import CustomPageHeader from "@components/common/custom/CustomPageHeader";
import HeroSectionTwo from "@components/hero-section/HeroSectionTwo";
import Coorparation from "@components/custom/Coorparation";
import OurStory from "@components/our-story/OurStory";

const AboutUs = () => {
  return (
    <Layout title="Hakkımızda" desc="this is about us page">
      <Navbar  navDark/>
      <CustomPageHeader title="Hakkımızda" />
      {/* <TestimonialOne /> */}
      <Coorparation />
      <OurStory />
      <Footer footerDark />
    </Layout>
  );
};

export default AboutUs;
