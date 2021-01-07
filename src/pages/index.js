import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import Table from '../components/table/table';
import Search from '../components/search/search';
import Filter from '../components/filter/filter';
import GetAllHtmlElements from '../hooks/GetAllHtmlElements';
import SelectionDetails from '../components/selectionDetails/selectionDetails';
import ContextWrapper from '../components/contextWrapper/contextWrapper';
import styles from '../styles/index.module.scss';
import SelectedElementProvider from '../context/SelectedElementContext';
import { graphql } from 'gatsby';
import { tags } from '../resources/tags';
import { element } from 'prop-types';
import GetAllHtmlElements2 from '../hooks/GetAllHtmlElements2';

const IndexPage = () => {

  // const htmlElementsToDisplay = GetAllHtmlElements(); // 117 elements
  const htmlElementsToDisplay = GetAllHtmlElements2(); // 107 elements

  return (
    <Layout>
      <SEO title='Home' />

      <ContextWrapper>
        {/*todo: rename the id bellow*/}
        <div id='searchWrapper'>
          <Search placeholder='Search HTML element' />
          <Filter />
        </div>


        <SelectedElementProvider>
          <div className={styles.mainContentWrapper}>
            <Table htmlElementsToDisplay={htmlElementsToDisplay} />
            <SelectionDetails />
          </div>
        </SelectedElementProvider>

      </ContextWrapper>
    </Layout>

  );
};

export default IndexPage;