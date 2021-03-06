import GetAllHtmlElements from '../hooks/GetAllHtmlElements';
import GetAllHtmlElements2 from '../hooks/GetAllHtmlElements2';
import { tags } from './tags';
import { aa } from './tagList';

/**
 *   Find out missing tags - 20 missing tags
 */

const a = () => {
  const htmlElementsToDisplay = GetAllHtmlElements(); // 117 elements
  const htmlElements2 = GetAllHtmlElements2(); // 107 elements
  const tagss = tags;

  const names1 = htmlElementsToDisplay.map(el => el.name);
  const names2 = htmlElements2.map(el => el.name);
  const missing = []; // 20
  names1.map(name => {
    if (!names2.includes(name)) {
      missing.push(name);
    }
  });

  for (let i = 0; i < htmlElements2.length; i++) {
    const el1 = htmlElements2[i];

    for (let j = 0; j < htmlElementsToDisplay.length; j++) {
      const el2 = htmlElementsToDisplay[j];

      if (el1.name === el2.name) {
        htmlElements2[i].name2 = el2.name;
        htmlElements2[i].inline = el2.inline;
        htmlElements2[i].block = el2.block;
        htmlElements2[i].html5 = el2.html5;
        htmlElements2[i].selfClosing = el2.selfClosing;
      }
    }
  }
  console.log(htmlElements2);
};

// missing tags
const missingTags = [
  '<code>',
  '<dfn>',
  '<em>',
  '<h1>',
  '<h2>',
  '<h3>',
  '<h4>',
  '<h5>',
  '<h6>',
  '<hgroup>',
  '<kbd>',
  '<math>',
  '<menu>',
  '<menuitem>',
  '<rb>',
  '<rtc>',
  '<samp>',
  '<slot>',
  '<strong>',
  '<var>',
  '<!--...-->',
  '<!DOCTYPE>',
  '<dfn> ',
  '<em> ',
  '<code> ',
  '<h1><h6>',
  '<kbd> ',
  '<strong> ',
  '<samp> ',
  '<var> '
];

export const MyHtmlTags = [
  {
    name: '<a>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<abbr>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<address>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<area>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<article>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<aside>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<audio>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<b>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<base>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<bdi>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<bdo>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<blockquote>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<body>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<br>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<button>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<canvas>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<caption>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<cite>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<code>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<col>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<colgroup>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<data>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<datalist>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<dd>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<del>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<details>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<dfn>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<dialog>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<div>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<dl>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<dt>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<em>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<embed>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'true'
  },
  {
    name: '<fieldset>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<figcaption>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<figure>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<footer>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<form>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<h1>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<h2>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<h3>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<h4>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<h5>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<h6>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<head>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<header>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<hgroup>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<hr>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<html>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<i>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<iframe>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<img>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<input>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<ins>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<kbd>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<label>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<legend>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<li>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<link>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<main>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<map>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<mark>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<math>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<menu>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<menuitem>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<meta>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<meter>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<nav>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<noscript>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<object>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<ol>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<optgroup>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<option>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<output>',
    inline: 'true',
    block: 'false',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<p>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<param>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<picture>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<pre>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<progress>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<q>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<rb>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<rp>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<rt>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<rtc>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<ruby>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<s>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<samp>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<script>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<section>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<select>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<slot>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<small>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<source>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'true'
  },
  {
    name: '<span>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<strong>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<style>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<sub>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<summary>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<sup>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<svg>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<table>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<tbody>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<td>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<template>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<textarea>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<tfoot>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<th>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<thead>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<time>',
    inline: 'true',
    block: 'false',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<title>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<tr>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<track>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'true'
  },
  {
    name: '<u>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<ul>',
    inline: 'false',
    block: 'true',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<var>',
    inline: 'true',
    block: 'false',
    html5: 'false',
    selfClosing: 'false'
  },
  {
    name: '<video>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'false'
  },
  {
    name: '<wbr>',
    inline: 'false',
    block: 'true',
    html5: 'true',
    selfClosing: 'true'
  }
];

function addDescriptionToTags(){
  const htmlElementsToDisplay = GetAllHtmlElements2(); // 107 elements
  const tagList = aa;

  console.log(htmlElementsToDisplay[1]);
  console.log(tagList[2]);

  for (let i = 0; i < htmlElementsToDisplay.length; i++) {
    const el1 = htmlElementsToDisplay[i];

    for (let j = 0; j < tagList.length; j++) {
      const el2 = tagList[j];

      if (el1.name === el2.name) {
        el1.description = el2.description;
        break;
      }
    }
  }
  console.log(htmlElementsToDisplay);
}