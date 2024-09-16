const wholeHtmlCode = document.body.outerHTML;
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
const getPlainText = stripHTMLTags(wholeHtmlCode);
    
console.log(getPlainText);
