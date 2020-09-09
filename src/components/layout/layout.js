import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import styles from './layout.module.scss';
import Footer from '../footer/footer';
import GetSiteMetadata from '../../hooks/GetSiteMetadata';

const Layout = ({ children }) => {
  const siteMetadata = GetSiteMetadata();

  return (
    <>
      <Header siteTitle={siteMetadata.title}/>
      <main className={styles.mainContent}>{children}</main>
      <Footer author={siteMetadata.author}/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
