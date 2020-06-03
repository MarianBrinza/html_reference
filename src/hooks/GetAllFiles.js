import { graphql, useStaticQuery } from 'gatsby';

const GetAllFiles = () => {
  const data = useStaticQuery(
    graphql`
        query {
            allMarkdownRemark {
                edges {
                    node{
                        frontmatter{
                            name
                            type
                            html5
                        }
                    }
                }
            }
        }
    `,
  );

  return data.allMarkdownRemark.edges;
};

export default GetAllFiles;
