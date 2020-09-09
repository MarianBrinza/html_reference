import { graphql, useStaticQuery } from 'gatsby';

const GetHtmlElementByName = (name) => {

  const data = useStaticQuery(
    graphql`
        query MyQuery2($name: String) {
            markdownRemark(frontmatter: {name: {eq: $name}}) {
                frontmatter {
                    name
                    test
                    inline
                }
            }
  #            allMarkdownRemark(filter: {frontmatter: {name: {eq: $name }}}) {
  #                edges {
  #                    node {
  #                        frontmatter {
  #                            name
  #                        }
  #                    }
  #                }
  #            }
          }
    `
  );
  return data.markdownRemark.frontmatter.test;
};

export default GetHtmlElementByName;
