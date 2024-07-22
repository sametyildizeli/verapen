import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import CustomPageHeader from "@components/common/custom/CustomPageHeader";

const AboutUs = () => {
  return (
    <Layout title="Hakkımızda" desc="this is about us page">
      <Navbar  navDark/>
      <CustomPageHeader title="Hakkımızda" />
      <TestimonialOne />
      <Footer footerLight />
    </Layout>
  );
};

export default AboutUs;
