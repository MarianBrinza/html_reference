import { graphql, useStaticQuery } from 'gatsby';

const GetAllHtmlElements2 = () => {
  const data = useStaticQuery(
    graphql`
        query MyQuery {
            allTags3Json {
                edges {
                    node {
                        name
                        name2
                        inline
                        block
                        html5
                        selfClosing
                        defaultCssCode
                        defaultCssText
                        definition
                        exampleCode
                        exampleText
                        globalAttrib
                        globalEvents
                        url
                        attributes {
                            description
                            name
                            url
                            value
                        }
                    }
                }
            }
        }

    `
  );
  const arr = data.allTags3Json.edges;
  return arr.map(item => {
    return item.node;
  });
};

export default GetAllHtmlElements2;