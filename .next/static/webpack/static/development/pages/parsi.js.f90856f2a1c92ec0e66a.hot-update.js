webpackHotUpdate("static/development/pages/parsi.js",{

/***/ "./src/components/text/Appendix.tsx":
/*!******************************************!*\
  !*** ./src/components/text/Appendix.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_Caput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @atoms/Caput */ \"./src/components/text/Caput.tsx\");\n/* harmony import */ var _context_VisibilityContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/VisibilityContext */ \"./src/context/VisibilityContext.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pedenys/Sandbox/ethicaspinoza/src/components/text/Appendix.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Appendix = function Appendix(_ref) {\n  _s();\n\n  var caputs = _ref.caputs,\n      pars = _ref.pars,\n      txt = _ref.txt;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_VisibilityContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      showAppendix = _useContext.showAppendix;\n\n  return showAppendix && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \"Appendice\"), __jsx(\"p\", {\n    id: \"pars\".concat(pars, \"-appendix\"),\n    dangerouslySetInnerHTML: {\n      __html: txt\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }), caputs && caputs.map(function (caput) {\n    return __jsx(_atoms_Caput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      index: Number(caput.caputIndex),\n      pars: pars,\n      txt: caput.txt,\n      key: caput.txt[0] + caput.caputIndex.toString(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_s(Appendix, \"jItA9E6jtcBMdqWOc0X9NSjtziM=\");\n\n_c = Appendix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Appendix);\n\nvar _c;\n\n$RefreshReg$(_c, \"Appendix\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0L0FwcGVuZGl4LnRzeD8xMTVkIl0sIm5hbWVzIjpbIkFwcGVuZGl4IiwiY2FwdXRzIiwicGFycyIsInR4dCIsInVzZUNvbnRleHQiLCJWaXNpYmlsaXR5Q29udGV4dCIsInNob3dBcHBlbmRpeCIsIl9faHRtbCIsIm1hcCIsImNhcHV0IiwiTnVtYmVyIiwiY2FwdXRJbmRleCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVOztBQUFBLG9CQUMxQ0Msd0RBQVUsQ0FBQ0Msa0VBQUQsQ0FEZ0M7QUFBQSxNQUMzREMsWUFEMkQsZUFDM0RBLFlBRDJEOztBQUVuRSxTQUNFQSxZQUFZLElBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUNFLE1BQUUsZ0JBQVNKLElBQVQsY0FESjtBQUVFLDJCQUF1QixFQUFFO0FBQUVLLFlBQU0sRUFBRUo7QUFBVixLQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFNR0YsTUFBTSxJQUNMQSxNQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsV0FDVCxNQUFDLG9EQUFEO0FBQ0UsV0FBSyxFQUFFQyxNQUFNLENBQUNELEtBQUssQ0FBQ0UsVUFBUCxDQURmO0FBRUUsVUFBSSxFQUFFVCxJQUZSO0FBR0UsU0FBRyxFQUFFTyxLQUFLLENBQUNOLEdBSGI7QUFJRSxTQUFHLEVBQUVNLEtBQUssQ0FBQ04sR0FBTixDQUFVLENBQVYsSUFBZU0sS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxRQUFqQixFQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFM7QUFBQSxHQUFYLENBUEosQ0FGSjtBQW9CRCxDQXRCRDs7R0FBTVosUTs7S0FBQUEsUTtBQXdCU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZXh0L0FwcGVuZGl4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXB1dCwgeyBDYXB1dFByb3BzIH0gZnJvbSBcIkBhdG9tcy9DYXB1dFwiXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBWaXNpYmlsaXR5Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9WaXNpYmlsaXR5Q29udGV4dFwiXG5cbmludGVyZmFjZSBBcHBlbmRpeFByb3BzIHtcbiAgY2FwdXRzPzogQXJyYXk8Q2FwdXRJbnRlcmZhY2U+XG4gIHBhcnM6IHN0cmluZ1xuICB0eHQ6IHN0cmluZ1xufVxuXG5jb25zdCBBcHBlbmRpeDogUmVhY3QuRkM8QXBwZW5kaXhQcm9wcz4gPSAoeyBjYXB1dHMsIHBhcnMsIHR4dCB9KSA9PiB7XG4gIGNvbnN0IHsgc2hvd0FwcGVuZGl4IH0gPSB1c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIHNob3dBcHBlbmRpeCAmJiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+QXBwZW5kaWNlPC9oMj5cbiAgICAgICAgPHBcbiAgICAgICAgICBpZD17YHBhcnMke3BhcnN9LWFwcGVuZGl4YH1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHR4dCB9fVxuICAgICAgICAvPlxuICAgICAgICB7Y2FwdXRzICYmXG4gICAgICAgICAgY2FwdXRzLm1hcCgoY2FwdXQpID0+IChcbiAgICAgICAgICAgIDxDYXB1dFxuICAgICAgICAgICAgICBpbmRleD17TnVtYmVyKGNhcHV0LmNhcHV0SW5kZXgpfVxuICAgICAgICAgICAgICBwYXJzPXtwYXJzfVxuICAgICAgICAgICAgICB0eHQ9e2NhcHV0LnR4dH1cbiAgICAgICAgICAgICAga2V5PXtjYXB1dC50eHRbMF0gKyBjYXB1dC5jYXB1dEluZGV4LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGVuZGl4XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/text/Appendix.tsx\n");

/***/ })

})