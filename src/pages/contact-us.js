import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';
import CustomPageHeader from '@components/common/custom/CustomPageHeader';

const ContactUs = () => {
  return (
    <Layout title="İletişim" desc="This is contact us page">
      <Navbar  navDark/>
      <CustomPageHeader
        title="Bizimle İletişime Geçin"
        // desc="İletişim bilgilerimiz ve iletişim formu."
      />
      <ContactCard />
      <ContactForm />
      <Footer footerLight />
    </Layout>
  );
};

export default ContactUs;
