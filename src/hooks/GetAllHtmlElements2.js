import { graphql, useStaticQuery } from 'gatsby';

const GetAllHtmlElements2 = () => {
  const data = useStaticQuery(
    graphql`
        query MyQuery {
            allTags5Json {
                edges {
                    node {
                        block
                        defaultCssCode
                        defaultCssText
                        definition
                        description
                        exampleCode
                        exampleText
                        globalAttrib
                        globalEvents
                        html5
                        inline
                        name
                        selfClosing
                        attributes {
                            description
                            name
                            value
                        }
                    }
                }
            }
        }
    `
  );
  const arr = data.allTags5Json.edges;
  return arr.map(item => {
    return item.node;
  });
};

export default GetAllHtmlElements2;