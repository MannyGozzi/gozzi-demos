"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/menu/page",{

/***/ "(app-pages-browser)/./app/menu/page.tsx":
/*!***************************!*\
  !*** ./app/menu/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MenuItem */ \"(app-pages-browser)/./components/MenuItem.tsx\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items */ \"(app-pages-browser)/./app/menu/items.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction MenuScreen() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-24 px-8 w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold tracking-tight mb-4\",\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/manuelgozzi/dev/personal/gozzi-demos/app/menu/page.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold tracking-tight mb-4\",\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/manuelgozzi/dev/personal/gozzi-demos/app/menu/page.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 w-full gap-4 bg-red-300\",\n                children: _items__WEBPACK_IMPORTED_MODULE_2__.foodItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        menuItem: item\n                    }, item.title, false, {\n                        fileName: \"/Users/manuelgozzi/dev/personal/gozzi-demos/app/menu/page.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/manuelgozzi/dev/personal/gozzi-demos/app/menu/page.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manuelgozzi/dev/personal/gozzi-demos/app/menu/page.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuScreen;\nvar _c;\n$RefreshReg$(_c, \"MenuScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tZW51L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzRDO0FBQ1Q7QUFDcEIsU0FBU0U7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUM7Ozs7OzswQkFDdkQsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUF5Qzs7Ozs7OzBCQUN2RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQTRDSCw2Q0FBU0EsQ0FBQ0ssR0FBRyxDQUFDLENBQUNDLHFCQUN0RSw4REFBQ1AsNERBQVFBO3dCQUFrQlEsVUFBVUQ7dUJBQXRCQSxLQUFLRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXJDO0tBVndCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbWVudS9wYWdlLnRzeD9iYjcxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9NZW51SXRlbVwiXG5pbXBvcnQgeyBmb29kSXRlbXMgfSBmcm9tIFwiLi9pdGVtc1wiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51U2NyZWVuKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjQgcHgtOCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgbWItNFwiPkRhc2hib2FyZDwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgbWItNFwiPkRhc2hib2FyZDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyB3LWZ1bGwgZ2FwLTQgYmctcmVkLTMwMFwiPntmb29kSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpdGVtLnRpdGxlfSBtZW51SXRlbT17aXRlbX0gLz5cbiAgICAgICAgKSl9PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJNZW51SXRlbSIsImZvb2RJdGVtcyIsIk1lbnVTY3JlZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsIml0ZW0iLCJtZW51SXRlbSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/menu/page.tsx\n"));

/***/ })

});