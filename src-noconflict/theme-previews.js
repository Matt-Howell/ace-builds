ace.define("ace/theme/preview",["require","exports","module","ace/lib/dom"], function(require, exports, module) {
exports.isDark = true;
exports.cssClass = "ace-preview";
exports.cssText = ".ace-preview .ace_gutter {background: #ffffff00;color: #8F938F}.ace-preview .ace_print-margin {width: 1px;background: #ffffff00}.ace-preview {background-color: #ffffff00;color: #8F938F}.ace-preview .ace_cursor {color: #A7A7A7}.ace-preview .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20)}.ace-preview.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #2C2828;}.ace-preview .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-preview .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}.ace-preview .ace_marker-layer .ace_active-line {background: rgba(255, 255, 255, 0.031)}.ace-preview .ace_gutter-active-line {background-color: rgba(255, 255, 255, 0.031)}.ace-preview .ace_marker-layer .ace_selected-word {border: 1px solid rgba(221, 240, 255, 0.20)}.ace-preview .ace_invisible {color: rgba(255, 255, 255, 0.25)}.ace-preview .ace_keyword,.ace-preview .ace_meta {color: #AEB2F8}.ace-preview .ace_constant,.ace-preview .ace_constant.ace_character,.ace-preview .ace_constant.ace_character.ace_escape,.ace-preview .ace_constant.ace_other {color: #4FB7C5}.ace-preview .ace_keyword.ace_operator {color: #e6dede}.ace-preview .ace_constant.ace_character {color: #AFA472}.ace-preview .ace_constant.ace_language {color: #DE8E30}.ace-preview .ace_constant.ace_numeric {color: #CCCCCC}.ace-preview .ace_invalid,.ace-preview .ace_invalid.ace_illegal {color: #F8F8F8;background-color: rgba(86, 45, 86, 0.75)}.ace-preview .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1}.ace-preview .ace_fold {background-color: #757aD8;border-color: #8F938F}.ace-preview .ace_support.ace_function {color: #AEB2F8}.ace-preview .ace_string {color: #66A968}.ace-preview .ace_string.ace_regexp {color: #E9C062}.ace-preview .ace_comment {color: #6A9955}.ace-preview .ace_variable {color: #BEBF55}.ace-preview .ace_function {color: #569CD7}.ace-preview ace_entity {color: #DBDB8F}.ace-preview .ace_variable.ace_language {color: #C586C0}.ace-preview .ace_endings.ace_language {color: #569CD7}.ace-preview .ace_iterator.ace_language {color: #C586C0}.ace-preview .ace_xml-pe {color: #494949}.ace-preview .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYIiPj/8PAARgAh2NTMh8AAAAAElFTkSuQmCC) right repeat-y}";
var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
(function() {
ace.require(["ace/theme/preview"], function(m) {
if (typeof module == "object" && typeof exports == "object" && module) {
module.exports = m;
}
});
})();