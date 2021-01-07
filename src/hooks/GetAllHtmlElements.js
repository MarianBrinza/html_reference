import { graphql, useStaticQuery } from 'gatsby';

const GetAllHtmlElements = () => {
  const data = useStaticQuery(
    graphql`
        query getAll {
            allElementsJson {
                edges {
                    node {
                        block
                        html5
                        inline
                        name
                        selfClosing
                        title
                        description         
                    }
                }
            }
        }
    `
  );
  const arr = data.allElementsJson.edges;
  return arr.map(item => {
    return item.node;
  });
};

export default GetAllHtmlElements;
