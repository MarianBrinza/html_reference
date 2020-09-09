import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import TagTable from '../components/tagTable/TagTable';
import Search from '../components/search/search';
import Filter from '../components/filter/filter';
import GetAllHtmlElements from '../hooks/GetAllHtmlElements';
import SelectionDetails from '../components/selectionDetails/SelectionDetails';
import ContextWrapper from '../components/contextComp/ContextWrapper';
import styles from '../styles/index.module.scss';
import SelectedElementProvider from '../context/SelectedElementContext';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {

  console.log('data index: ', data);

  const htmlElementsToDisplay = GetAllHtmlElements();
  return (
    <Layout>
      <SEO title="Home"/>
      <ContextWrapper>
        <div id='searchWrapper'>
          <Search placeholder='Search HTML element'/>
          <Filter/>
        </div>
        <div className={styles.mainContentWrapper}>

          <SelectedElementProvider>
            <TagTable htmlElementsToDisplay={htmlElementsToDisplay}/>
            <SelectionDetails/>
          </SelectedElementProvider>

        </div>
      </ContextWrapper>
    </Layout>

  );
};

export default IndexPage;

export const query = graphql`
    query test($name: String){
        markdownRemark(frontmatter: {name: {eq: $name}}) {
            frontmatter {
                name
                test
                inline
            }
        }
    }
`;
