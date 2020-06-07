import { graphql, useStaticQuery } from 'gatsby';

const GetAllHtmlElements = () => {
  const data = useStaticQuery(
    graphql`
        query {
            allMarkdownRemark {
                edges {
                    node{
                        frontmatter{
                            name
                            inline
                            block
                            html5
                            selfClosing
                        }
                    }
                }
            }
        }
    `
  );

  const arr = data.allMarkdownRemark.edges;
  return arr.map(item => item.node.frontmatter);
};

export default GetAllHtmlElements;
