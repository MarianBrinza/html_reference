import React from 'react';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import style from './codeBlock.module.scss';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const CodeBlock = ({ customStyle, exampleCode, language }) => {

  return (<>

    <SyntaxHighlighter language={language} style={materialDark}
                       customStyle={customStyle}>
      {exampleCode}
    </SyntaxHighlighter>

  </>);
};

export default CodeBlock;