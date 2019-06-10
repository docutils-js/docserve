require('@babel/polyfill');

const ReactDOM = require('react-dom');
const getComponentForXml = require('docutils-react/lib/getComponentForXmlSax').getComponentForXmlSync;

const re = /^\/xml\/(.*)$/;
let docName;
if (re.test(document.location.pathname)) {
  const result = re.exec(document.location.pathname);
  docName = result[1];
}

const xmlNode = document.getElementById('xml');
let comp = null;
if (xmlNode) {
  comp = getComponentForXml(xmlNode.innerText);
}

ReactDOM.hydrate(<App component={comp} baseHref={document.location.href} docName={docName} />, document.getElementById('root'));
