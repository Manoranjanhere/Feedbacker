"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/leac";
exports.ids = ["vendor-chunks/leac"];
exports.modules = {

/***/ "(rsc)/./node_modules/leac/lib/leac.cjs":
/*!****************************************!*\
  !*** ./node_modules/leac/lib/leac.cjs ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: !0\n}));\nconst e = /\\n/g;\nfunction t(t) {\n    const o = [\n        ...t.matchAll(e)\n    ].map((e)=>e.index || 0);\n    o.unshift(-1);\n    const s = n(o, 0, o.length);\n    return (e)=>r(s, e);\n}\nfunction n(e, t, r) {\n    if (r - t == 1) return {\n        offset: e[t],\n        index: t + 1\n    };\n    const o = Math.ceil((t + r) / 2), s = n(e, t, o), l = n(e, o, r);\n    return {\n        offset: s.offset,\n        low: s,\n        high: l\n    };\n}\nfunction r(e, t) {\n    return function(e) {\n        return Object.prototype.hasOwnProperty.call(e, \"index\");\n    }(e) ? {\n        line: e.index,\n        column: t - e.offset\n    } : r(e.high.offset < t ? e.high : e.low, t);\n}\nfunction o(e, t) {\n    return {\n        ...e,\n        regex: s(e, t)\n    };\n}\nfunction s(e, t) {\n    if (0 === e.name.length) throw new Error(`Rule #${t} has empty name, which is not allowed.`);\n    if (function(e) {\n        return Object.prototype.hasOwnProperty.call(e, \"regex\");\n    }(e)) return function(e) {\n        if (e.global) throw new Error(`Regular expression /${e.source}/${e.flags} contains the global flag, which is not allowed.`);\n        return e.sticky ? e : new RegExp(e.source, e.flags + \"y\");\n    }(e.regex);\n    if (function(e) {\n        return Object.prototype.hasOwnProperty.call(e, \"str\");\n    }(e)) {\n        if (0 === e.str.length) throw new Error(`Rule #${t} (\"${e.name}\") has empty \"str\" property, which is not allowed.`);\n        return new RegExp(l(e.str), \"y\");\n    }\n    return new RegExp(l(e.name), \"y\");\n}\nfunction l(e) {\n    return e.replace(/[-[\\]{}()*+!<=:?./\\\\^$|#\\s,]/g, \"\\\\$&\");\n}\nexports.createLexer = function(e, n = \"\", r = {}) {\n    const s = \"string\" != typeof n ? n : r, l = \"string\" == typeof n ? n : \"\", c = e.map(o), i = !!s.lineNumbers;\n    return function(e, n = 0) {\n        const r = i ? t(e) : ()=>({\n                line: 0,\n                column: 0\n            });\n        let o = n;\n        const s = [];\n        e: for(; o < e.length;){\n            let t = !1;\n            for (const n of c){\n                n.regex.lastIndex = o;\n                const c = n.regex.exec(e);\n                if (c && c[0].length > 0) {\n                    if (!n.discard) {\n                        const e = r(o), t = \"string\" == typeof n.replace ? c[0].replace(new RegExp(n.regex.source, n.regex.flags), n.replace) : c[0];\n                        s.push({\n                            state: l,\n                            name: n.name,\n                            text: t,\n                            offset: o,\n                            len: c[0].length,\n                            line: e.line,\n                            column: e.column\n                        });\n                    }\n                    if (o = n.regex.lastIndex, t = !0, n.push) {\n                        const t = n.push(e, o);\n                        s.push(...t.tokens), o = t.offset;\n                    }\n                    if (n.pop) break e;\n                    break;\n                }\n            }\n            if (!t) break;\n        }\n        return {\n            tokens: s,\n            offset: o,\n            complete: e.length <= o\n        };\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7d0JBQUMxQixFQUFFZ0MsSUFBSSxDQUFDOzRCQUFDQyxPQUFNMUI7NEJBQUVTLE1BQUtmLEVBQUVlLElBQUk7NEJBQUNrQixNQUFLeEM7NEJBQUVVLFFBQU9UOzRCQUFFd0MsS0FBSVQsQ0FBQyxDQUFDLEVBQUUsQ0FBQ3hCLE1BQU07NEJBQUNXLE1BQUtwQixFQUFFb0IsSUFBSTs0QkFBQ0MsUUFBT3JCLEVBQUVxQixNQUFNO3dCQUFBO29CQUFFO29CQUFDLElBQUduQixJQUFFTSxFQUFFYyxLQUFLLENBQUNjLFNBQVMsRUFBQ25DLElBQUUsQ0FBQyxHQUFFTyxFQUFFK0IsSUFBSSxFQUFDO3dCQUFDLE1BQU10QyxJQUFFTyxFQUFFK0IsSUFBSSxDQUFDdkMsR0FBRUU7d0JBQUdLLEVBQUVnQyxJQUFJLElBQUl0QyxFQUFFMEMsTUFBTSxHQUFFekMsSUFBRUQsRUFBRVUsTUFBTTtvQkFBQTtvQkFBQyxJQUFHSCxFQUFFb0MsR0FBRyxFQUFDLE1BQU01QztvQkFBRTtnQkFBSztZQUFDO1lBQUMsSUFBRyxDQUFDQyxHQUFFO1FBQUs7UUFBQyxPQUFNO1lBQUMwQyxRQUFPcEM7WUFBRUksUUFBT1Q7WUFBRTJDLFVBQVM3QyxFQUFFUyxNQUFNLElBQUVQO1FBQUM7SUFBQztBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlzdGVyeS1tZXNzYWdlLy4vbm9kZV9tb2R1bGVzL2xlYWMvbGliL2xlYWMuY2pzPzQ0ODkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3QgZT0vXFxuL2c7ZnVuY3Rpb24gdCh0KXtjb25zdCBvPVsuLi50Lm1hdGNoQWxsKGUpXS5tYXAoKGU9PmUuaW5kZXh8fDApKTtvLnVuc2hpZnQoLTEpO2NvbnN0IHM9bihvLDAsby5sZW5ndGgpO3JldHVybiBlPT5yKHMsZSl9ZnVuY3Rpb24gbihlLHQscil7aWYoci10PT0xKXJldHVybntvZmZzZXQ6ZVt0XSxpbmRleDp0KzF9O2NvbnN0IG89TWF0aC5jZWlsKCh0K3IpLzIpLHM9bihlLHQsbyksbD1uKGUsbyxyKTtyZXR1cm57b2Zmc2V0OnMub2Zmc2V0LGxvdzpzLGhpZ2g6bH19ZnVuY3Rpb24gcihlLHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsXCJpbmRleFwiKX0oZSk/e2xpbmU6ZS5pbmRleCxjb2x1bW46dC1lLm9mZnNldH06cihlLmhpZ2gub2Zmc2V0PHQ/ZS5oaWdoOmUubG93LHQpfWZ1bmN0aW9uIG8oZSx0KXtyZXR1cm57Li4uZSxyZWdleDpzKGUsdCl9fWZ1bmN0aW9uIHMoZSx0KXtpZigwPT09ZS5uYW1lLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoYFJ1bGUgIyR7dH0gaGFzIGVtcHR5IG5hbWUsIHdoaWNoIGlzIG5vdCBhbGxvd2VkLmApO2lmKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxcInJlZ2V4XCIpfShlKSlyZXR1cm4gZnVuY3Rpb24oZSl7aWYoZS5nbG9iYWwpdGhyb3cgbmV3IEVycm9yKGBSZWd1bGFyIGV4cHJlc3Npb24gLyR7ZS5zb3VyY2V9LyR7ZS5mbGFnc30gY29udGFpbnMgdGhlIGdsb2JhbCBmbGFnLCB3aGljaCBpcyBub3QgYWxsb3dlZC5gKTtyZXR1cm4gZS5zdGlja3k/ZTpuZXcgUmVnRXhwKGUuc291cmNlLGUuZmxhZ3MrXCJ5XCIpfShlLnJlZ2V4KTtpZihmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsXCJzdHJcIil9KGUpKXtpZigwPT09ZS5zdHIubGVuZ3RoKXRocm93IG5ldyBFcnJvcihgUnVsZSAjJHt0fSAoXCIke2UubmFtZX1cIikgaGFzIGVtcHR5IFwic3RyXCIgcHJvcGVydHksIHdoaWNoIGlzIG5vdCBhbGxvd2VkLmApO3JldHVybiBuZXcgUmVnRXhwKGwoZS5zdHIpLFwieVwiKX1yZXR1cm4gbmV3IFJlZ0V4cChsKGUubmFtZSksXCJ5XCIpfWZ1bmN0aW9uIGwoZSl7cmV0dXJuIGUucmVwbGFjZSgvWy1bXFxde30oKSorITw9Oj8uL1xcXFxeJHwjXFxzLF0vZyxcIlxcXFwkJlwiKX1leHBvcnRzLmNyZWF0ZUxleGVyPWZ1bmN0aW9uKGUsbj1cIlwiLHI9e30pe2NvbnN0IHM9XCJzdHJpbmdcIiE9dHlwZW9mIG4/bjpyLGw9XCJzdHJpbmdcIj09dHlwZW9mIG4/bjpcIlwiLGM9ZS5tYXAobyksaT0hIXMubGluZU51bWJlcnM7cmV0dXJuIGZ1bmN0aW9uKGUsbj0wKXtjb25zdCByPWk/dChlKTooKT0+KHtsaW5lOjAsY29sdW1uOjB9KTtsZXQgbz1uO2NvbnN0IHM9W107ZTpmb3IoO288ZS5sZW5ndGg7KXtsZXQgdD0hMTtmb3IoY29uc3QgbiBvZiBjKXtuLnJlZ2V4Lmxhc3RJbmRleD1vO2NvbnN0IGM9bi5yZWdleC5leGVjKGUpO2lmKGMmJmNbMF0ubGVuZ3RoPjApe2lmKCFuLmRpc2NhcmQpe2NvbnN0IGU9cihvKSx0PVwic3RyaW5nXCI9PXR5cGVvZiBuLnJlcGxhY2U/Y1swXS5yZXBsYWNlKG5ldyBSZWdFeHAobi5yZWdleC5zb3VyY2Usbi5yZWdleC5mbGFncyksbi5yZXBsYWNlKTpjWzBdO3MucHVzaCh7c3RhdGU6bCxuYW1lOm4ubmFtZSx0ZXh0OnQsb2Zmc2V0Om8sbGVuOmNbMF0ubGVuZ3RoLGxpbmU6ZS5saW5lLGNvbHVtbjplLmNvbHVtbn0pfWlmKG89bi5yZWdleC5sYXN0SW5kZXgsdD0hMCxuLnB1c2gpe2NvbnN0IHQ9bi5wdXNoKGUsbyk7cy5wdXNoKC4uLnQudG9rZW5zKSxvPXQub2Zmc2V0fWlmKG4ucG9wKWJyZWFrIGU7YnJlYWt9fWlmKCF0KWJyZWFrfXJldHVybnt0b2tlbnM6cyxvZmZzZXQ6byxjb21wbGV0ZTplLmxlbmd0aDw9b319fTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImUiLCJ0IiwibyIsIm1hdGNoQWxsIiwibWFwIiwiaW5kZXgiLCJ1bnNoaWZ0IiwicyIsIm4iLCJsZW5ndGgiLCJyIiwib2Zmc2V0IiwiTWF0aCIsImNlaWwiLCJsIiwibG93IiwiaGlnaCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImxpbmUiLCJjb2x1bW4iLCJyZWdleCIsIm5hbWUiLCJFcnJvciIsImdsb2JhbCIsInNvdXJjZSIsImZsYWdzIiwic3RpY2t5IiwiUmVnRXhwIiwic3RyIiwicmVwbGFjZSIsImNyZWF0ZUxleGVyIiwiYyIsImkiLCJsaW5lTnVtYmVycyIsImxhc3RJbmRleCIsImV4ZWMiLCJkaXNjYXJkIiwicHVzaCIsInN0YXRlIiwidGV4dCIsImxlbiIsInRva2VucyIsInBvcCIsImNvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/leac/lib/leac.cjs\n");

/***/ })

};
;