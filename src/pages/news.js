import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import BlogFeature from '@components/blogs/BlogFeature';
import CustomPageHeader from '@components/common/custom/CustomPageHeader';

const News = () => {
  return (
    <Layout title="Blog" desc="This is blog page">
      <Navbar  navDark/>
      <CustomPageHeader
        title="Haberler ve Blog"
        // desc="Exercitation adipisicing sunt nostrud velit est fugiat."
      />
      {/* <BlogFeature /> */}
      <Footer footerLight />
    </Layout>
  );
};

export default News;
