import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import TagTable from '../components/tagTable/TagTable';
import Search from '../components/search/search';
import Filter from '../components/filter/filter';
import SearchContextProvider from '../context/SearchContext';
import GetAllHtmlElements from '../hooks/GetAllHtmlElements';
import FilterContextProvider from '../context/FilterContext';

const IndexPage = () => {
  const htmlElementsToDisplay = GetAllHtmlElements();

  return (
    <Layout>
      <SEO title="Home"/>

      <SearchContextProvider>
        <Search placeholder='Search HTML element'/>
        <FilterContextProvider>
          <Filter/>
          <TagTable htmlElementsToDisplay={htmlElementsToDisplay}/>
        </FilterContextProvider>
      </SearchContextProvider>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
