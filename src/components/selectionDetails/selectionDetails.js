import React, { useContext } from 'react';
import styles from './selectionDetails.module.scss';
import { SelectedElementContext } from '../../context/SelectedElementContext';
import { toggle } from '../../resources/util';

//import the Prism package
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeBlock from '../codeBlock/codeBlock';
import Attributes from '../attributes/attributes';


SyntaxHighlighter.registerLanguage('jsx', jsx);

const SelectionDetails = () => {
  let { selectedElement } = useContext(SelectedElementContext);

  //todo: make a html API
  console.log(selectedElement);
  const {
    block,
    defaultCssCode,
    defaultCssText,
    definition,
    description,
    exampleCode,
    exampleText,
    globalAttrib,
    globalEvents,
    html5,
    inline,
    name,
    nameDescription,
    selfClosing,
    attributes
  } = selectedElement;

  let parentWidth = document.querySelector('#selection-details');
  if (parentWidth) {
    parentWidth = (parentWidth.clientWidth - 20) + 'px';
    console.log('selection-details width = ', parentWidth);
  }


  const htmlStyle = {
    margin: '0 0 20px 0',
    borderRadius: '5px',
    fontFamily: 'monospace !important',
    fontSize: '15px'
  };

  return (
    <div id='selection-details' className={styles.selectionDetailsComp}>
      {Object.keys(selectedElement).length > 0 && (
        <>
          {/* close button for mobile */}
          <button id={styles.toggleBtn}
                  onClick={() => {
                    toggle('#searchWrapper');
                    toggle('#elementsTable');
                    toggle('#selection-details');
                  }}
          >
            Close me!
          </button>

          <h1 className={styles.title}>The {name} tag</h1>
          <p>{description}</p>

          <h2>Example Code</h2>
          <p>{exampleText}</p>
          <CodeBlock customStyle={htmlStyle} exampleCode={exampleCode} language={'xml'} />

          <h2>Attributes</h2>
          {
            attributes.length > 0 ?
              <Attributes attributes={attributes} />
              :
              <p>Not applicable</p>
          }

          <h2>Default style</h2>
          {
            defaultCssCode ?
              <CodeBlock customStyle={htmlStyle} exampleCode={defaultCssCode} language={'css'} />
              :
              <p>Not applicable</p>
          }

          <h2>Definition and Usage</h2>
          <p>{definition}</p>

          <h2>Global attributes:</h2>
          <p>{globalAttrib}</p>

          <h2>Global events:</h2>
          <p>{globalEvents}</p>

          <table>
            <thead>
            <tr>
              <th>Inline</th>
              <th>Block</th>
              <th>Html5</th>
              <th>Self closing</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{inline}</td>
              <td>{block}</td>
              <td>{html5}</td>
              <td>{selfClosing}</td>
            </tr>
            </tbody>
          </table>

        </>
      )}

    </div>
  );
};

export default SelectionDetails;
