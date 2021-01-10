import { graphql, useStaticQuery } from 'gatsby';

const GetAllHtmlElements2 = () => {
  const data = useStaticQuery(
    graphql`
        query MyQuery {
            allTags4Json {
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
                        name2
                        selfClosing
                        url
                        attributes {
                            description
                            name
                            value
                            url
                        }
                    }
                }
            }
        }
    `
  );
  const arr = data.allTags4Json.edges;
  return arr.map(item => {
    return item.node;
  });
};

export default GetAllHtmlElements2;