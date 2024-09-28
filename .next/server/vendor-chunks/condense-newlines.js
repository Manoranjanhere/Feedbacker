"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/condense-newlines";
exports.ids = ["vendor-chunks/condense-newlines"];
exports.modules = {

/***/ "(rsc)/./node_modules/condense-newlines/index.js":
/*!*************************************************!*\
  !*** ./node_modules/condense-newlines/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * condense-newlines <https://github.com/jonschlinkert/condense-newlines>\n *\n * Copyright (c) 2014 Jon Schlinkert, contributors.\n * Licensed under the MIT License\n */ \nvar isWhitespace = __webpack_require__(/*! is-whitespace */ \"(rsc)/./node_modules/is-whitespace/index.js\");\nvar extend = __webpack_require__(/*! extend-shallow */ \"(rsc)/./node_modules/extend-shallow/index.js\");\nvar typeOf = __webpack_require__(/*! kind-of */ \"(rsc)/./node_modules/kind-of/index.js\");\nmodule.exports = function(str, options) {\n    var opts = extend({}, options);\n    var sep = opts.sep || \"\\n\\n\";\n    var min = opts.min;\n    var re;\n    if (typeof min === \"number\" && min !== 2) {\n        re = new RegExp(\"(\\\\r\\\\n|\\\\n|\\\\u2424) {\" + min + \",}\");\n    }\n    if (typeof re === \"undefined\") {\n        re = opts.regex || /(\\r\\n|\\n|\\u2424){2,}/g;\n    }\n    // if a line is 100% whitespace it will be trimmed, so that\n    // later we can condense newlines correctly\n    if (opts.keepWhitespace !== true) {\n        str = str.split(\"\\n\").map(function(line) {\n            return isWhitespace(line) ? line.trim() : line;\n        }).join(\"\\n\");\n    }\n    str = trailingNewline(str, opts);\n    return str.replace(re, sep);\n};\nfunction trailingNewline(str, options) {\n    var val = options.trailingNewline;\n    if (val === false) {\n        return str;\n    }\n    switch(typeOf(val)){\n        case \"string\":\n            str = str.replace(/\\s+$/, options.trailingNewline);\n            break;\n        case \"function\":\n            str = options.trailingNewline(str);\n            break;\n        case \"undefined\":\n        case \"boolean\":\n        default:\n            {\n                str = str.replace(/\\s+$/, \"\\n\");\n                break;\n            }\n    }\n    return str;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY29uZGVuc2UtbmV3bGluZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0MsR0FFRDtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBQzNCLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBRXJCRyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsR0FBRyxFQUFFQyxPQUFPO0lBQ3BDLElBQUlDLE9BQU9OLE9BQU8sQ0FBQyxHQUFHSztJQUN0QixJQUFJRSxNQUFNRCxLQUFLQyxHQUFHLElBQUk7SUFDdEIsSUFBSUMsTUFBTUYsS0FBS0UsR0FBRztJQUNsQixJQUFJQztJQUVKLElBQUksT0FBT0QsUUFBUSxZQUFZQSxRQUFRLEdBQUc7UUFDeENDLEtBQUssSUFBSUMsT0FBTywyQkFBMkJGLE1BQU07SUFDbkQ7SUFDQSxJQUFJLE9BQU9DLE9BQU8sYUFBYTtRQUM3QkEsS0FBS0gsS0FBS0ssS0FBSyxJQUFJO0lBQ3JCO0lBRUEsMkRBQTJEO0lBQzNELDJDQUEyQztJQUMzQyxJQUFJTCxLQUFLTSxjQUFjLEtBQUssTUFBTTtRQUNoQ1IsTUFBTUEsSUFBSVMsS0FBSyxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxTQUFTQyxJQUFJO1lBQ3JDLE9BQU9qQixhQUFhaUIsUUFBUUEsS0FBS0MsSUFBSSxLQUFLRDtRQUM1QyxHQUFHRSxJQUFJLENBQUM7SUFDVjtJQUVBYixNQUFNYyxnQkFBZ0JkLEtBQUtFO0lBQzNCLE9BQU9GLElBQUllLE9BQU8sQ0FBQ1YsSUFBSUY7QUFDekI7QUFFQSxTQUFTVyxnQkFBZ0JkLEdBQUcsRUFBRUMsT0FBTztJQUNuQyxJQUFJZSxNQUFNZixRQUFRYSxlQUFlO0lBQ2pDLElBQUlFLFFBQVEsT0FBTztRQUNqQixPQUFPaEI7SUFDVDtJQUVBLE9BQVFILE9BQU9tQjtRQUNiLEtBQUs7WUFDSGhCLE1BQU1BLElBQUllLE9BQU8sQ0FBQyxRQUFRZCxRQUFRYSxlQUFlO1lBQ2pEO1FBQ0YsS0FBSztZQUNIZCxNQUFNQyxRQUFRYSxlQUFlLENBQUNkO1lBQzlCO1FBQ0YsS0FBSztRQUNMLEtBQUs7UUFDTDtZQUFTO2dCQUNQQSxNQUFNQSxJQUFJZSxPQUFPLENBQUMsUUFBUTtnQkFDMUI7WUFDRjtJQUNGO0lBQ0EsT0FBT2Y7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RlcnktbWVzc2FnZS8uL25vZGVfbW9kdWxlcy9jb25kZW5zZS1uZXdsaW5lcy9pbmRleC5qcz82ZGEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogY29uZGVuc2UtbmV3bGluZXMgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2NvbmRlbnNlLW5ld2xpbmVzPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBKb24gU2NobGlua2VydCwgY29udHJpYnV0b3JzLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNXaGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZScpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZC1zaGFsbG93Jyk7XG52YXIgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IGV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gIHZhciBzZXAgPSBvcHRzLnNlcCB8fCAnXFxuXFxuJztcbiAgdmFyIG1pbiA9IG9wdHMubWluO1xuICB2YXIgcmU7XG5cbiAgaWYgKHR5cGVvZiBtaW4gPT09ICdudW1iZXInICYmIG1pbiAhPT0gMikge1xuICAgIHJlID0gbmV3IFJlZ0V4cCgnKFxcXFxyXFxcXG58XFxcXG58XFxcXHUyNDI0KSB7JyArIG1pbiArICcsfScpO1xuICB9XG4gIGlmICh0eXBlb2YgcmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmUgPSBvcHRzLnJlZ2V4IHx8IC8oXFxyXFxufFxcbnxcXHUyNDI0KXsyLH0vZztcbiAgfVxuXG4gIC8vIGlmIGEgbGluZSBpcyAxMDAlIHdoaXRlc3BhY2UgaXQgd2lsbCBiZSB0cmltbWVkLCBzbyB0aGF0XG4gIC8vIGxhdGVyIHdlIGNhbiBjb25kZW5zZSBuZXdsaW5lcyBjb3JyZWN0bHlcbiAgaWYgKG9wdHMua2VlcFdoaXRlc3BhY2UgIT09IHRydWUpIHtcbiAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gaXNXaGl0ZXNwYWNlKGxpbmUpID8gbGluZS50cmltKCkgOiBsaW5lO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgc3RyID0gdHJhaWxpbmdOZXdsaW5lKHN0ciwgb3B0cyk7XG4gIHJldHVybiBzdHIucmVwbGFjZShyZSwgc2VwKTtcbn07XG5cbmZ1bmN0aW9uIHRyYWlsaW5nTmV3bGluZShzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHZhbCA9IG9wdGlvbnMudHJhaWxpbmdOZXdsaW5lO1xuICBpZiAodmFsID09PSBmYWxzZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVPZih2YWwpKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrJC8sIG9wdGlvbnMudHJhaWxpbmdOZXdsaW5lKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHN0ciA9IG9wdGlvbnMudHJhaWxpbmdOZXdsaW5lKHN0cik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrJC8sICdcXG4nKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufVxuIl0sIm5hbWVzIjpbImlzV2hpdGVzcGFjZSIsInJlcXVpcmUiLCJleHRlbmQiLCJ0eXBlT2YiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RyIiwib3B0aW9ucyIsIm9wdHMiLCJzZXAiLCJtaW4iLCJyZSIsIlJlZ0V4cCIsInJlZ2V4Iiwia2VlcFdoaXRlc3BhY2UiLCJzcGxpdCIsIm1hcCIsImxpbmUiLCJ0cmltIiwiam9pbiIsInRyYWlsaW5nTmV3bGluZSIsInJlcGxhY2UiLCJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/condense-newlines/index.js\n");

/***/ })

};
;