import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import TagTable from '../components/tagList/TagTable';
import Search from '../components/search/search';
import Filter from '../components/filter/filter';

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Search/>
    <Filter/>
    <TagTable/>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
