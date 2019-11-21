const HyperDown = require('hyperdown');
const Prism = require('prismjs');

function markdownLoader(val) {
  let parser = new HyperDown();
  let html = parser.makeHtml(val);
  html = html.replace(/(?<=<pre><code[^>]*?>)[\s\S]*?(?=<\/code><\/pre>)/gi, v => {
    v = v.replace(/_&/g, ' ').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    return Prism.highlight(v, Prism.languages.javascript);
  });
  html = html.replace(/&lt;slot[\s\S]*?&gt;&lt;\/slot&gt;/gi, v => {
    v = v.replace(/_&/g, ' ').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    return v;
  });
  return (
    `<template><div class="markdown">${html}</div></template>`
  );
}

module.exports = markdownLoader;