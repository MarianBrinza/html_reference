import { graphql, useStaticQuery } from 'gatsby';

const GetAllHtmlElements = () => {
  const data = useStaticQuery(
    graphql`
        query {
            allMarkdownRemark (sort: {fields: frontmatter___name}) {
                edges {
                    node{
                        frontmatter{
                            name
                            inline
                            block
                            html5
                            selfClosing
                            test
                        }
                        html
                    }
                }
            }
        }
    `
  );
  const arr = data.allMarkdownRemark.edges;
  return arr.map(item => {
    let a = item.node.frontmatter;
    a.html = item.node.html;
    return a;
  });
};

export default GetAllHtmlElements;
