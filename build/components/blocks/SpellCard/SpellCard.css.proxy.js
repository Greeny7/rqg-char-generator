// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".container {\n    display: flex;\n    flex-direction: column;\n    width: 30%;\n    margin: 0 0 15px 0;\n    position: relative;\n    border: 2px solid black;\n    padding: 5px;\n    height: 300px;\n    overflow: hidden;\n    resize: vertical;\n}\n\n@media (max-width: 1024px) {\n    .container {\n        width: 47%;\n    }\n}\n\n@media (max-width: 700px) {\n    .container {\n        width: 97%;\n    }\n}\n\n.container.rolled {\n    resize: none;\n    height: 60px;\n}\n\n.container.bookmarked .buttonMark  {\n    background: gold;\n}\n\n.container p {\n    margin: 0 0 15px;\n}\n\n.buttonMark {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    height: 20px;\n    width: 20px;\n    /*position: absolute;*/\n    /*top: 20px;*/\n    /*right: 10px;*/\n}\n\n.title {\n    font-size: 25px;\n    font-weight: bold;\n    margin: 10px 0 20px;\n    padding-right: 50px;\n}\n\n.title span {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.text {\n    overflow: auto;\n}\n\n.text p {\n    line-height: 1.5;\n}\n\n.mpCost {\n    /*font-size: 15px;*/\n    font-weight: bold;\n    /*position: absolute;*/\n    /*top: 20px;*/\n    /*right: 10px;*/\n}\n\n.runes {\n    font-weight: bold;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}