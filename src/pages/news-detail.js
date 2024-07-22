import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import NewsLetter from '@components/cta/NewsLetter';
import LatestBlog from '@components/blogs/LatestBlog';
import SupportOne from '@components/support/SupportOne';
import BlogSingleFeature from '@components/blogs/BlogSingleFeature';
import CustomPageHeader from '@components/common/custom/CustomPageHeader';


const NewsDetail = () => {
  return (
    <Layout title="Blog Single" desc="This is blog single page">
      <Navbar  navDark/>
      <CustomPageHeader title="Haber Detay" />
      <BlogSingleFeature />
      {/* <NewsLetter /> */}
      {/* <LatestBlog /> */}
      {/* <SupportOne className /> */}
      <Footer footerLight />
    </Layout>
  );
};

export default NewsDetail;
