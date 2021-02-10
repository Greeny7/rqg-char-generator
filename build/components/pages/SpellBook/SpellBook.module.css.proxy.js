
export let code = "._title_e0wol_1 {\n    text-align: center;\n}\n\n._filter_e0wol_5 {\n    margin: 10px 50px;\n}\n\n._container_e0wol_9 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 10px\n}\n\n._filters_e0wol_17 {\n    padding: 10px\n}\n\n._spellsContainer_e0wol_21 {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-around;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n}\n\n._filters_e0wol_17 {\n    /*width: 25%;*/\n}\n\n._spellsContainer_e0wol_21 {\n    /*width: 75%;*/\n}\n\n._subtitle_e0wol_38 {\n    text-align: center;\n}";
let json = {"title":"_title_e0wol_1","filter":"_filter_e0wol_5","container":"_container_e0wol_9","filters":"_filters_e0wol_17","spellsContainer":"_spellsContainer_e0wol_21","subtitle":"_subtitle_e0wol_38"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}