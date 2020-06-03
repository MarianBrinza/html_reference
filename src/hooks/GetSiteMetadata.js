import { graphql, useStaticQuery } from 'gatsby';

const GetSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `,
  );

  const siteMetadata = data.site.siteMetadata;
  return siteMetadata;
};

export default GetSiteMetadata;
