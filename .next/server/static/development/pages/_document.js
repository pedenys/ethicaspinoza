module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./src/components/AppHead.tsx":
/*!************************************!*\
  !*** ./src/components/AppHead.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/components/AppHead.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AppHead = ({
  description,
  title
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#EFEFEF",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "manifest",
  href: "/manifest.json",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}), description && __jsx("meta", {
  name: "description",
  content: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}, description), title && __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 15
  }
}, title));

/* harmony default export */ __webpack_exports__["default"] = (AppHead);

/***/ }),

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppHead */ "./src/components/AppHead.tsx");
var _jsxFileName = "/Users/pedenys/Sandbox/ethicaspinoza/src/pages/_document.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // Import styled components ServerStyleSheet



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheet"]();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(__jsx(App, _extends({}, props, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 33
          }
        })))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, initialProps.styles, sheet.getStyleElement())
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return __jsx("html", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, __jsx(_components_AppHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Ethicaspinoza",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.tsx */"./src/pages/_document.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwSGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwibWlkZGxld2FyZSIsIk5leHRTY3JpcHQiLCJNYWluIiwiSGVhZCIsIkh0bWwiLCJkZWZhdWx0IiwiX3Byb3BUeXBlcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfc2VydmVyIiwiX2NvbnN0YW50cyIsIl9kb2N1bWVudENvbnRleHQiLCJfdXRpbHMiLCJEb2N1bWVudENvbnRleHQiLCJEb2N1bWVudEluaXRpYWxQcm9wcyIsIkRvY3VtZW50UHJvcHMiLCJfdXRpbHMyIiwiX2h0bWxlc2NhcGUiLCJvYmoiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJyZXEiLCJyZXMiLCJkZWR1cGUiLCJidW5kbGVzIiwiZmlsZXMiLCJTZXQiLCJrZXB0IiwiYnVuZGxlIiwiZmlsZSIsImFkZCIsInB1c2giLCJnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQiLCJwYXRoIiwicHJvY2VzcyIsIkRvY3VtZW50IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZW5oYW5jZXJzIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVuaGFuY2VyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiaHRtbCIsImhlYWQiLCJyZW5kZXJQYWdlIiwic3R5bGVzIiwicmVuZGVyRG9jdW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiX2RvY3VtZW50UHJvcHMiLCJfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIiwiRGF0ZSIsIm5vdyIsInJlbmRlciIsImhlYWRUYWdzTWlkZGxld2FyZSIsIlByb21pc2UiLCJib2R5VGFnc01pZGRsZXdhcmUiLCJodG1sUHJvcHNNaWRkbGV3YXJlIiwiY29uc3RydWN0b3IiLCJhcmdzIiwiY29udGV4dCIsImluQW1wTW9kZSIsImh0bWxQcm9wcyIsImFzc2lnbiIsImFtcCIsInVuZGVmaW5lZCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJub2RlIiwiaXNSZXF1aXJlZCIsImdldENzc0xpbmtzIiwiYXNzZXRQcmVmaXgiLCJjc3NGaWxlcyIsImxlbmd0aCIsImZpbHRlciIsImYiLCJ0ZXN0IiwiY3NzTGlua0VsZW1lbnRzIiwiZm9yRWFjaCIsIm5vbmNlIiwicmVsIiwiaHJlZiIsImVuY29kZVVSSSIsImFzIiwiY3Jvc3NPcmlnaW4iLCJnZXRQcmVsb2FkRHluYW1pY0NodW5rcyIsImR5bmFtaWNJbXBvcnRzIiwibWFwIiwiZW5kc1dpdGgiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImFtcFBhdGgiLCJoeWJyaWRBbXAiLCJjYW5vbmljYWxCYXNlIiwiX19ORVhUX0RBVEFfXyIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInBhZ2UiLCJidWlsZElkIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9jaGlsZCRwcm9wcyIsImlzUmVhY3RIZWxtZXQiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsIm5hbWUiLCJzcmMiLCJpbmRleE9mIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJrZXlzIiwicHJvcCIsImN1clN0eWxlcyIsIkFycmF5IiwiaXNBcnJheSIsImhhc1N0eWxlcyIsImVsIiwiX2VsJHByb3BzIiwiX2VsJHByb3BzJGRhbmdlcm91c2x5IiwiX19odG1sIiwiaXNEZXZlbG9wbWVudCIsIkZyYWdtZW50IiwiY29udGVudCIsImNvdW50IiwidG9TdHJpbmciLCJjbGVhbkFtcFBhdGgiLCJzdHlsZSIsImpvaW4iLCJyZXBsYWNlIiwiYXN5bmMiLCJnZXRBbXBQYXRoIiwiZ2V0UGFnZUZpbGUiLCJpZCIsInN0cmluZyIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0RHluYW1pY0NodW5rcyIsIm1vZGVyblByb3BzIiwiaW5jbHVkZXMiLCJnZXRTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJub01vZHVsZSIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRvY3VtZW50UHJvcHMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWxFc2NhcGVKc29uU3RyaW5nIiwiZXJyIiwibWVzc2FnZSIsIkVycm9yIiwic3RhdGljTWFya3VwIiwiZGV2RmlsZXMiLCJib2R5VGFncyIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLIiwicGFnZVNjcmlwdCIsImFwcFNjcmlwdCIsIm1hdGNoIiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhc1BhdGgiLCJzdGFydGluZ1VybCIsIkFwcEhlYWQiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwiTXlEb2N1bWVudCIsInNoZWV0IiwiU2VydmVyU3R5bGVTaGVldCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsImNvbGxlY3RTdHlsZXMiLCJpbml0aWFsUHJvcHMiLCJnZXRTdHlsZUVsZW1lbnQiLCJzZWFsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJEQUFEO0FBQVMsV0FBSyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FGRixDQURGO0FBU0Q7O0FBckNtRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x0RCxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1pZGRsZXdhcmU9bWlkZGxld2FyZTtleHBvcnRzLk5leHRTY3JpcHQ9ZXhwb3J0cy5NYWluPWV4cG9ydHMuSGVhZD1leHBvcnRzLkh0bWw9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zZXJ2ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO3ZhciBfY29uc3RhbnRzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzXCIpO3ZhciBfZG9jdW1lbnRDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5Eb2N1bWVudENvbnRleHQ9X3V0aWxzLkRvY3VtZW50Q29udGV4dDtleHBvcnRzLkRvY3VtZW50SW5pdGlhbFByb3BzPV91dGlscy5Eb2N1bWVudEluaXRpYWxQcm9wcztleHBvcnRzLkRvY3VtZW50UHJvcHM9X3V0aWxzLkRvY3VtZW50UHJvcHM7dmFyIF91dGlsczI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci91dGlsc1wiKTt2YXIgX2h0bWxlc2NhcGU9cmVxdWlyZShcIi4uL3NlcnZlci9odG1sZXNjYXBlXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31hc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHtyZXEscmVzfSl7fWZ1bmN0aW9uIGRlZHVwZShidW5kbGVzKXtjb25zdCBmaWxlcz1uZXcgU2V0KCk7Y29uc3Qga2VwdD1bXTtmb3IoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpe2lmKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpY29udGludWU7ZmlsZXMuYWRkKGJ1bmRsZS5maWxlKTtrZXB0LnB1c2goYnVuZGxlKTt9cmV0dXJuIGtlcHQ7fWZ1bmN0aW9uIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChwYXRoKXtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCcubW9kdWxlLmpzJyk7fXJldHVybiBwYXRoO30vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9jbGFzcyBEb2N1bWVudCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7LyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpe2NvbnN0IGVuaGFuY2Vycz1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9hd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1lbmhhbmNlLWFwcC1zZXJ2ZXIhJykpKS50aGVuKG1vZD0+bW9kLmRlZmF1bHQoY3R4KSk6W107Y29uc3QgZW5oYW5jZUFwcD1BcHA9Pntmb3IoY29uc3QgZW5oYW5jZXIgb2YgZW5oYW5jZXJzKXtBcHA9ZW5oYW5jZXIoQXBwKTt9cmV0dXJuIHByb3BzPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHAscHJvcHMpO307Y29uc3R7aHRtbCxoZWFkfT1hd2FpdCBjdHgucmVuZGVyUGFnZSh7ZW5oYW5jZUFwcH0pO2NvbnN0IHN0eWxlcz1bLi4uKDAsX3NlcnZlci5kZWZhdWx0KSgpLC4uLihwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9hd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1nZXQtc3R5bGVzLXNlcnZlciEnKSkpLnRoZW4obW9kPT5tb2QuZGVmYXVsdChjdHgpKTpbXSldO3JldHVybntodG1sLGhlYWQsc3R5bGVzfTt9c3RhdGljIHJlbmRlckRvY3VtZW50KERvY3VtZW50LHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dC5Qcm92aWRlcix7dmFsdWU6e19kb2N1bWVudFByb3BzOnByb3BzLC8vIEluIGRldiB3ZSBpbnZhbGlkYXRlIHRoZSBjYWNoZSBieSBhcHBlbmRpbmcgYSB0aW1lc3RhbXAgdG8gdGhlIHJlc291cmNlIFVSTC5cbi8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGZpeCBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2lzc3Vlcy81ODYwXG4vLyBUT0RPOiByZW1vdmUgdGhpcyB3b3JrYXJvdW5kIHdoZW4gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4NzcyNiBpcyBmaXhlZC5cbl9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbic/Jz90cz0nK0RhdGUubm93KCk6Jyd9fSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChEb2N1bWVudCxwcm9wcykpO31yZW5kZXIoKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIdG1sLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCxudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1haW4sbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCxudWxsKSkpO319ZXhwb3J0cy5kZWZhdWx0PURvY3VtZW50O0RvY3VtZW50LmhlYWRUYWdzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyIScpKSk6KCk9PltdO0RvY3VtZW50LmJvZHlUYWdzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1ib2R5LXRhZ3Mtc2VydmVyIScpKSk6KCk9PltdO0RvY3VtZW50Lmh0bWxQcm9wc01pZGRsZXdhcmU9cHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlM/UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaHRtbC1wcm9wcy1zZXJ2ZXIhJykpKTooKT0+W107Y2xhc3MgSHRtbCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9cmVuZGVyKCl7Y29uc3R7aW5BbXBNb2RlLGh0bWxQcm9wc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLE9iamVjdC5hc3NpZ24oe30saHRtbFByb3BzLHRoaXMucHJvcHMse2FtcDppbkFtcE1vZGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlJiZwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nJzp1bmRlZmluZWR9KSk7fX1leHBvcnRzLkh0bWw9SHRtbDtIdG1sLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0h0bWwucHJvcFR5cGVzPXtjaGlsZHJlbjpfcHJvcFR5cGVzLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkfTtjbGFzcyBIZWFkIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXRDc3NMaW5rcygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IGNzc0ZpbGVzPWZpbGVzJiZmaWxlcy5sZW5ndGg/ZmlsZXMuZmlsdGVyKGY9Pi9cXC5jc3MkLy50ZXN0KGYpKTpbXTtjb25zdCBjc3NMaW5rRWxlbWVudHM9W107Y3NzRmlsZXMuZm9yRWFjaChmaWxlPT57Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpgJHtmaWxlfS1wcmVsb2FkYCxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxhczpcInN0eWxlXCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInN0eWxlc2hlZXRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpO30pO3JldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoPT09MD9udWxsOmNzc0xpbmtFbGVtZW50czt9Z2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKXtjb25zdHtkeW5hbWljSW1wb3J0cyxhc3NldFByZWZpeH09dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoYnVuZGxlPT57Ly8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW4gdGhlXG4vLyBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlIG1vZGVyblxuLy8gdmFyaWFudHMgb25seS5cbmlmKCFidW5kbGUuZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKSl7cmV0dXJuIG51bGw7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsa2V5OmJ1bmRsZS5maWxlLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGJ1bmRsZS5maWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pO30pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuLmZpbHRlcihCb29sZWFuKTt9Z2V0UHJlbG9hZE1haW5MaW5rcygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IHByZWxvYWRGaWxlcz1maWxlcyYmZmlsZXMubGVuZ3RoP2ZpbGVzLmZpbHRlcihmaWxlPT57Ly8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbi8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4vLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbnJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpO30pOltdO3JldHVybiFwcmVsb2FkRmlsZXMubGVuZ3RoP251bGw6cHJlbG9hZEZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpO31yZW5kZXIoKXtjb25zdHtzdHlsZXMsYW1wUGF0aCxpbkFtcE1vZGUsYXNzZXRQcmVmaXgsaHlicmlkQW1wLGNhbm9uaWNhbEJhc2UsX19ORVhUX0RBVEFfXyxkYW5nZXJvdXNBc1BhdGgsaGVhZFRhZ3MsdW5zdGFibGVfcnVudGltZUpTfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3QgZGlzYWJsZVJ1bnRpbWVKUz11bnN0YWJsZV9ydW50aW1lSlM9PT1mYWxzZTtjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3R7cGFnZSxidWlsZElkfT1fX05FWFRfREFUQV9fO2xldHtoZWFkfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7bGV0IGNoaWxkcmVuPXRoaXMucHJvcHMuY2hpbGRyZW47Ly8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbixjaGlsZD0+e3ZhciBfY2hpbGQkcHJvcHM7Y29uc3QgaXNSZWFjdEhlbG1ldD1jaGlsZD09PW51bGx8fGNoaWxkPT09dm9pZCAwP3ZvaWQgMDooX2NoaWxkJHByb3BzPWNoaWxkLnByb3BzKT09PW51bGx8fF9jaGlsZCRwcm9wcz09PXZvaWQgMD92b2lkIDA6X2NoaWxkJHByb3BzWydkYXRhLXJlYWN0LWhlbG1ldCddO2lmKChjaGlsZD09PW51bGx8fGNoaWxkPT09dm9pZCAwP3ZvaWQgMDpjaGlsZC50eXBlKT09PSd0aXRsZScmJiFpc1JlYWN0SGVsbWV0KXtjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIik7fXJldHVybiBjaGlsZDt9KTtpZih0aGlzLnByb3BzLmNyb3NzT3JpZ2luKWNvbnNvbGUud2FybignV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9bGV0IGhhc0FtcGh0bWxSZWw9ZmFsc2U7bGV0IGhhc0Nhbm9uaWNhbFJlbD1mYWxzZTsvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG5oZWFkPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChoZWFkfHxbXSxjaGlsZD0+e2lmKCFjaGlsZClyZXR1cm4gY2hpbGQ7Y29uc3R7dHlwZSxwcm9wc309Y2hpbGQ7aWYoaW5BbXBNb2RlKXtsZXQgYmFkUHJvcD0nJztpZih0eXBlPT09J21ldGEnJiZwcm9wcy5uYW1lPT09J3ZpZXdwb3J0Jyl7YmFkUHJvcD0nbmFtZT1cInZpZXdwb3J0XCInO31lbHNlIGlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdjYW5vbmljYWwnKXtoYXNDYW5vbmljYWxSZWw9dHJ1ZTt9ZWxzZSBpZih0eXBlPT09J3NjcmlwdCcpey8vIG9ubHkgYmxvY2sgaWZcbi8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3Jcbi8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbmlmKHByb3BzLnNyYyYmcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKTwtMXx8cHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJighcHJvcHMudHlwZXx8cHJvcHMudHlwZT09PSd0ZXh0L2phdmFzY3JpcHQnKSl7YmFkUHJvcD0nPHNjcmlwdCc7T2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcD0+e2JhZFByb3ArPWAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgO30pO2JhZFByb3ArPScvPic7fX1pZihiYWRQcm9wKXtjb25zb2xlLndhcm4oYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtyZXR1cm4gbnVsbDt9fWVsc2V7Ly8gbm9uLWFtcCBtb2RlXG5pZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nYW1waHRtbCcpe2hhc0FtcGh0bWxSZWw9dHJ1ZTt9fXJldHVybiBjaGlsZDt9KTsvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbmNvbnN0IGN1clN0eWxlcz1BcnJheS5pc0FycmF5KHN0eWxlcyk/c3R5bGVzOltdO2lmKGluQW1wTW9kZSYmc3R5bGVzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5BcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpe2NvbnN0IGhhc1N0eWxlcz1lbD0+e3ZhciBfZWwkcHJvcHMsX2VsJHByb3BzJGRhbmdlcm91c2x5O3JldHVybiBlbD09PW51bGx8fGVsPT09dm9pZCAwP3ZvaWQgMDooX2VsJHByb3BzPWVsLnByb3BzKT09PW51bGx8fF9lbCRwcm9wcz09PXZvaWQgMD92b2lkIDA6KF9lbCRwcm9wcyRkYW5nZXJvdXNseT1fZWwkcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpPT09bnVsbHx8X2VsJHByb3BzJGRhbmdlcm91c2x5PT09dm9pZCAwP3ZvaWQgMDpfZWwkcHJvcHMkZGFuZ2Vyb3VzbHkuX19odG1sO307Ly8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5zdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZD0+e2lmKEFycmF5LmlzQXJyYXkoY2hpbGQpKXtjaGlsZC5mb3JFYWNoKGVsPT5oYXNTdHlsZXMoZWwpJiZjdXJTdHlsZXMucHVzaChlbCkpO31lbHNlIGlmKGhhc1N0eWxlcyhjaGlsZCkpe2N1clN0eWxlcy5wdXNoKGNoaWxkKTt9fSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLHRoaXMucHJvcHMsdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWQsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5Om5vbmV9YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZH0sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5e2Rpc3BsYXk6YmxvY2t9YH19KSkpLGNoaWxkcmVuLGhlYWQsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWhlYWQtY291bnRcIixjb250ZW50Ol9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWR8fFtdKS50b1N0cmluZygpfSksaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIn0pLCFoYXNDYW5vbmljYWxSZWwmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJjYW5vbmljYWxcIixocmVmOmNhbm9uaWNhbEJhc2UrKDAsX3V0aWxzMi5jbGVhbkFtcFBhdGgpKGRhbmdlcm91c0FzUGF0aCl9KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGFzOlwic2NyaXB0XCIsaHJlZjpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSxzdHlsZXMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtY3VzdG9tXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmN1clN0eWxlcy5tYXAoc3R5bGU9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csJycpLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCcnKX19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YH19KSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxzcmM6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSkpLCFpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWhhc0FtcGh0bWxSZWwmJmh5YnJpZEFtcCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImFtcGh0bWxcIixocmVmOmNhbm9uaWNhbEJhc2UrZ2V0QW1wUGF0aChhbXBQYXRoLGRhbmdlcm91c0FzUGF0aCl9KSx0aGlzLmdldENzc0xpbmtzKCksIWRpc2FibGVSdW50aW1lSlMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsaHJlZjphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5qc2ApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksIWRpc2FibGVSdW50aW1lSlMmJnBhZ2UhPT0nL19lcnJvcicmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsaHJlZjphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSwhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKCksdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi8gLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4vLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtpZDpcIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wifSksc3R5bGVzfHxudWxsKSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihoZWFkVGFnc3x8W10pKSk7fX1leHBvcnRzLkhlYWQ9SGVhZDtIZWFkLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0hlYWQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O2NsYXNzIE1haW4gZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fXJlbmRlcigpe2NvbnN0e2luQW1wTW9kZSxodG1sfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7aWYoaW5BbXBNb2RlKXJldHVybiBfY29uc3RhbnRzLkFNUF9SRU5ERVJfVEFSR0VUO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOlwiX19uZXh0XCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpodG1sfX0pO319ZXhwb3J0cy5NYWluPU1haW47TWFpbi5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsZmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKGJ1bmRsZT0+e2xldCBtb2Rlcm5Qcm9wcz17fTtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXttb2Rlcm5Qcm9wcz0vXFwubW9kdWxlXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKT97dHlwZTonbW9kdWxlJ306e25vTW9kdWxlOnRydWV9O31pZighL1xcLmpzJC8udGVzdChidW5kbGUuZmlsZSl8fGZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSlyZXR1cm4gbnVsbDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsa2V5OmJ1bmRsZS5maWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoYnVuZGxlLmZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0sbW9kZXJuUHJvcHMpKTt9KTt9Z2V0U2NyaXB0cygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzLGxvd1ByaW9yaXR5RmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3Qgbm9ybWFsU2NyaXB0cz1maWxlcz09PW51bGx8fGZpbGVzPT09dm9pZCAwP3ZvaWQgMDpmaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO2NvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cz1sb3dQcmlvcml0eUZpbGVzPT09bnVsbHx8bG93UHJpb3JpdHlGaWxlcz09PXZvaWQgMD92b2lkIDA6bG93UHJpb3JpdHlGaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO3JldHVyblsuLi5ub3JtYWxTY3JpcHRzLC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKGZpbGU9PntsZXQgbW9kZXJuUHJvcHM9e307aWYocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCl7bW9kZXJuUHJvcHM9ZmlsZS5lbmRzV2l0aCgnLm1vZHVsZS5qcycpP3t0eXBlOidtb2R1bGUnfTp7bm9Nb2R1bGU6dHJ1ZX07fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGFzeW5jOnRydWUsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0sbW9kZXJuUHJvcHMpKTt9KTt9Z2V0UG9seWZpbGxTY3JpcHRzKCl7Ly8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4vLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbmNvbnN0e2Fzc2V0UHJlZml4LHBvbHlmaWxsRmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIHBvbHlmaWxsRmlsZXMuZmlsdGVyKHBvbHlmaWxsPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykmJiEvXFwubW9kdWxlXFwuanMkLy50ZXN0KHBvbHlmaWxsKSkubWFwKHBvbHlmaWxsPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6cG9seWZpbGwsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLG5vTW9kdWxlOnRydWUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfSkpO31zdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHMpe2NvbnN0e19fTkVYVF9EQVRBX199PWRvY3VtZW50UHJvcHM7dHJ5e2NvbnN0IGRhdGE9SlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7cmV0dXJuKDAsX2h0bWxlc2NhcGUuaHRtbEVzY2FwZUpzb25TdHJpbmcpKGRhdGEpO31jYXRjaChlcnIpe2lmKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKXt0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7c3RhdGljTWFya3VwLGFzc2V0UHJlZml4LGluQW1wTW9kZSxkZXZGaWxlcyxfX05FWFRfREFUQV9fLGJvZHlUYWdzLHVuc3RhYmxlX3J1bnRpbWVKU309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2lmKGluQW1wTW9kZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicpe3JldHVybiBudWxsO31jb25zdCBkZXZGaWxlcz1bX2NvbnN0YW50cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxfY29uc3RhbnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAsX2NvbnN0YW50cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDS107cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxzdGF0aWNNYXJrdXB8fGRpc2FibGVSdW50aW1lSlM/bnVsbDovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcyl9LFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pLGRldkZpbGVzP2RldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSkpOm51bGwsX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oYm9keVRhZ3N8fFtdKSkpO31jb25zdHtwYWdlLGJ1aWxkSWR9PV9fTkVYVF9EQVRBX187aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31jb25zdCBwYWdlU2NyaXB0PVsvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOnBhZ2Usa2V5OnBhZ2Usc3JjOmFzc2V0UHJlZml4K2VuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0scHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRD97bm9Nb2R1bGU6dHJ1ZX06e30pKSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpwYWdlLGtleTpgJHtwYWdlfS1tb2Rlcm5gLHNyYzphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbix0eXBlOlwibW9kdWxlXCJ9KV07Y29uc3QgYXBwU2NyaXB0PVsvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOlwiL19hcHBcIixzcmM6YXNzZXRQcmVmaXgrYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYCtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGtleTpcIl9hcHBcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQ/e25vTW9kdWxlOnRydWV9Ont9KSkscHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6XCIvX2FwcFwiLHNyYzphc3NldFByZWZpeCtgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAubW9kdWxlLmpzYCtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGtleTpcIl9hcHAtbW9kZXJuXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLHR5cGU6XCJtb2R1bGVcIn0pXTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLCFkaXNhYmxlUnVudGltZUpTJiZkZXZGaWxlcz9kZXZGaWxlcy5tYXAoZmlsZT0+IWZpbGUubWF0Y2goL1xcLmpzXFwubWFwLykmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpOm51bGwsc3RhdGljTWFya3VwfHxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMpfX0pLHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQmJiFkaXNhYmxlUnVudGltZUpTPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse25vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixub01vZHVsZTp0cnVlLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeH19KTpudWxsLCFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCFkaXNhYmxlUnVudGltZUpTJiZhcHBTY3JpcHQsIWRpc2FibGVSdW50aW1lSlMmJnBhZ2UhPT0nL19lcnJvcicmJnBhZ2VTY3JpcHQsZGlzYWJsZVJ1bnRpbWVKU3x8c3RhdGljTWFya3VwP251bGw6dGhpcy5nZXREeW5hbWljQ2h1bmtzKCksZGlzYWJsZVJ1bnRpbWVKU3x8c3RhdGljTWFya3VwP251bGw6dGhpcy5nZXRTY3JpcHRzKCksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oYm9keVRhZ3N8fFtdKSkpO319ZXhwb3J0cy5OZXh0U2NyaXB0PU5leHRTY3JpcHQ7TmV4dFNjcmlwdC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtOZXh0U2NyaXB0LnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4PSchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOyc7ZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoLGFzUGF0aCl7cmV0dXJuIGFtcFBhdGh8fGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpPycmJzonPyd9YW1wPTFgO31mdW5jdGlvbiBnZXRQYWdlRmlsZShwYWdlLGJ1aWxkSWQpe2NvbnN0IHN0YXJ0aW5nVXJsPXBhZ2U9PT0nLyc/Jy9pbmRleCc6cGFnZTtyZXR1cm4gYnVpbGRJZD9gJHtzdGFydGluZ1VybH0uJHtidWlsZElkfS5qc2A6YCR7c3RhcnRpbmdVcmx9LmpzYDt9IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcblxudHlwZSBBcHBIZWFkUHJvcHMgPSB7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmNvbnN0IEFwcEhlYWQ6IFJlYWN0LkZDPEFwcEhlYWRQcm9wcz4gPSAoeyBkZXNjcmlwdGlvbiwgdGl0bGUgfSkgPT4gKFxuICA8SGVhZD5cbiAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI0VGRUZFRlwiPjwvbWV0YT5cbiAgICB7LyogVE9ETyA6IGFkZCBmYXZpY29ucyAqL31cbiAgICB7LyogPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuL3NvbWV3aGVyZVwiIC8+ICovfVxuICAgIHsvKiA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi4vc29tZXdoZXJlXCIgLz4gKi99XG4gICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuICAgIHsvKiBUT0RPIDogdXBkYXRlIG1ldGEgZGVzY3JpcHRpb24gKi99XG4gICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9tZXRhPlxuICAgICl9XG4gICAge3RpdGxlICYmIDx0aXRsZT57dGl0bGV9PC90aXRsZT59XG4gIDwvSGVhZD5cbilcblxuZXhwb3J0IGRlZmF1bHQgQXBwSGVhZFxuIiwiaW1wb3J0IERvY3VtZW50LCB7IE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiXG4vLyBJbXBvcnQgc3R5bGVkIGNvbXBvbmVudHMgU2VydmVyU3R5bGVTaGVldFxuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgQXBwSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBIZWFkXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50PGFueT4ge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKVxuICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlXG5cbiAgICB0cnkge1xuICAgICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT5cbiAgICAgICAgICAgIHNoZWV0LmNvbGxlY3RTdHlsZXMoPEFwcCB7Li4ucHJvcHN9IC8+KSxcbiAgICAgICAgfSlcblxuICAgICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICAgICAgc3R5bGVzOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtpbml0aWFsUHJvcHMuc3R5bGVzfVxuICAgICAgICAgICAge3NoZWV0LmdldFN0eWxlRWxlbWVudCgpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApLFxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzaGVldC5zZWFsKClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sPlxuICAgICAgICA8QXBwSGVhZCB0aXRsZT1cIkV0aGljYXNwaW5vemFcIiAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=