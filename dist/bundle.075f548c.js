// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"tools/simple-image/dist/bundle.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["SimpleImage"] = factory();else root["SimpleImage"] = factory();
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }({
      /***/
      "./node_modules/css-loader/dist/cjs.js!./src/index.css": function node_modulesCssLoaderDistCjsJsSrcIndexCss(module, exports, __webpack_require__) {
        eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".cdx-simple-image {}\\n\\n.cdx-simple-image .cdx-loader {\\n  min-height: 200px;\\n}\\n\\n.cdx-simple-image .cdx-input {\\n  margin-top: 10px;\\n}\\n\\n.cdx-simple-image img {\\n  max-width: 100%;\\n  vertical-align: bottom;\\n}\\n\\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\\n  position: absolute;\\n  content: attr(data-placeholder);\\n  color: #707684;\\n  font-weight: normal;\\n  opacity: 0;\\n }\\n\\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\\n  opacity: 1;\\n}\\n\\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus::before {\\n  opacity: 0;\\n}\\n\\n\\n.cdx-simple-image__picture--with-background {\\n  background: #eff2f5;\\n  padding: 10px;\\n}\\n\\n.cdx-simple-image__picture--with-background img {\\n  display: block;\\n  max-width: 60%;\\n  margin: 0 auto;\\n}\\n\\n.cdx-simple-image__picture--annotate {\\n  border: 1px solid #e8e8eb;\\n  padding: 1px;\\n}\\n.cdx-simple-image__picture--annotate {\\n  border: 1px solid #e8e8eb;\\n  padding: 1px;\\n}\\n\\n.cdx-simple-image__picture--stretched img {\\n  max-width: none;\\n  width: 100%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://SimpleImage/./src/index.css?./node_modules/css-loader/dist/cjs.js");
        /***/
      },

      /***/
      "./node_modules/css-loader/dist/runtime/api.js": function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
        "use strict";

        eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://SimpleImage/./node_modules/css-loader/dist/runtime/api.js?");
        /***/
      },

      /***/
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
        "use strict";

        eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://SimpleImage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
        /***/
      },

      /***/
      "./src/index.css": function srcIndexCss(module, exports, __webpack_require__) {
        eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://SimpleImage/./src/index.css?");
        /***/
      },

      /***/
      "./src/index.js": function srcIndexJs(module, exports, __webpack_require__) {
        eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Build styles\n */\n__webpack_require__(/*! ./index.css */ \"./src/index.css\").toString();\n/**\n * SimpleImage Tool for the Editor.js\n * Works only with pasted image URLs and requires no server-side uploader.\n *\n * @typedef {object} SimpleImageData\n * @description Tool's input and output data format\n * @property {string} url — image URL\n * @property {string} caption — image caption\n * @property {boolean} withBorder - should image be rendered with border\n * @property {boolean} withBackground - should image be rendered with background\n * @property {boolean} stretched - should image be stretched to full width of container\n */\n\n\nvar SimpleImage = /*#__PURE__*/function () {\n  /**\n   * Render plugin`s main Element and fill it with saved data\n   *\n   * @param {{data: SimpleImageData, config: object, api: object}}\n   *   data — previously saved data\n   *   config - user config for Tool\n   *   api - Editor.js API\n   *   readOnly - read-only mode flag\n   */\n  function SimpleImage(_ref) {\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api,\n        readOnly = _ref.readOnly;\n\n    _classCallCheck(this, SimpleImage);\n\n    /**\n     * Editor.js API\n     */\n    this.api = api;\n    this.readOnly = readOnly;\n    /**\n     * When block is only constructing,\n     * current block points to previous block.\n     * So real block index will be +1 after rendering\n     *\n     * @todo place it at the `rendered` event hook to get real block index without +1;\n     * @type {number}\n     */\n\n    this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1;\n    /**\n     * Styles\n     */\n\n    this.CSS = {\n      baseClass: this.api.styles.block,\n      loading: this.api.styles.loader,\n      input: this.api.styles.input,\n      settingsButton: this.api.styles.settingsButton,\n      settingsButtonActive: this.api.styles.settingsButtonActive,\n\n      /**\n       * Tool's classes\n       */\n      wrapper: 'cdx-simple-image',\n      imageHolder: 'cdx-simple-image__picture',\n      caption: 'cdx-simple-image__caption'\n    };\n    this.maState = {};\n    /**\n     * Nodes cache\n     */\n\n    this.nodes = {\n      wrapper: null,\n      imageHolder: null,\n      image: null,\n      caption: null\n    };\n    /**\n     * Tool's initial data\n     */\n\n    this.data = {\n      url: data.url || '',\n      caption: data.caption || '',\n      withBorder: data.withBorder !== undefined ? data.withBorder : false,\n      withBackground: data.withBackground !== undefined ? data.withBackground : false,\n      stretched: data.stretched !== undefined ? data.stretched : false\n    };\n    this.maState = {};\n    /**\n     * Available Image settings\n     */\n\n    this.settings = [{\n      name: 'withBorder',\n      icon: \"<svg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z\\\"/></svg>\"\n    }, {\n      name: 'stretched',\n      icon: \"<svg width=\\\"17\\\" height=\\\"10\\\" viewBox=\\\"0 0 17 10\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z\\\"/></svg>\"\n    }, {\n      name: 'annotate',\n      icon: \"<svg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z\\\"/></svg>\"\n    }];\n  }\n  /**\n   * Creates a Block:\n   *  1) Show preloader\n   *  2) Start to load an image\n   *  3) After loading, append image and caption input\n   *\n   * @public\n   */\n\n\n  _createClass(SimpleImage, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var wrapper = this._make('div', [this.CSS.baseClass, this.CSS.wrapper]),\n          loader = this._make('div', this.CSS.loading),\n          imageHolder = this._make('div', this.CSS.imageHolder),\n          image = this._make('img'),\n          caption = this._make('div', [this.CSS.input, this.CSS.caption], {\n        contentEditable: !this.readOnly,\n        innerHTML: this.data.caption || ''\n      });\n\n      caption.dataset.placeholder = 'Enter a caption';\n      wrapper.appendChild(loader);\n\n      if (this.data.url) {\n        image.src = this.data.url;\n      }\n\n      image.onload = function () {\n        wrapper.classList.remove(_this.CSS.loading);\n        imageHolder.appendChild(image);\n        wrapper.appendChild(imageHolder);\n        wrapper.appendChild(caption);\n        loader.remove();\n\n        _this._acceptTuneView();\n      };\n\n      image.onerror = function (e) {\n        // @todo use api.Notifies.show() to show error notification\n        console.log('Failed to load an image', e);\n      };\n\n      this.nodes.imageHolder = imageHolder;\n      this.nodes.wrapper = wrapper;\n      this.nodes.image = image;\n      this.nodes.caption = caption;\n      return wrapper;\n    }\n    /**\n     * @public\n     * @param {Element} blockContent - Tool's wrapper\n     * @returns {SimpleImageData}\n     */\n\n  }, {\n    key: \"save\",\n    value: function save(blockContent) {\n      var image = blockContent.querySelector('img'),\n          caption = blockContent.querySelector('.' + this.CSS.input);\n\n      if (!image) {\n        return this.data;\n      }\n\n      return Object.assign(this.data, {\n        url: image.src,\n        caption: caption.innerHTML\n      });\n    }\n    /**\n     * Sanitizer rules\n     */\n\n  }, {\n    key: \"onDropHandler\",\n    value:\n    /**\n     * Read pasted image and convert it to base64\n     *\n     * @static\n     * @param {File} file\n     * @returns {Promise<SimpleImageData>}\n     */\n    function onDropHandler(file) {\n      var reader = new FileReader();\n      reader.readAsDataURL(file);\n      return new Promise(function (resolve) {\n        reader.onload = function (event) {\n          resolve({\n            url: event.target.result,\n            caption: file.name\n          });\n        };\n      });\n    }\n    /**\n     * On paste callback that is fired from Editor.\n     *\n     * @param {PasteEvent} event - event with pasted config\n     */\n\n  }, {\n    key: \"onPaste\",\n    value: function onPaste(event) {\n      var _this2 = this;\n\n      switch (event.type) {\n        case 'tag':\n          {\n            var img = event.detail.data;\n            this.data = {\n              url: img.src\n            };\n            break;\n          }\n\n        case 'pattern':\n          {\n            var text = event.detail.data;\n            this.data = {\n              url: text\n            };\n            break;\n          }\n\n        case 'file':\n          {\n            var file = event.detail.file;\n            this.onDropHandler(file).then(function (data) {\n              _this2.data = data;\n            });\n            break;\n          }\n      }\n    }\n    /**\n     * Returns image data\n     *\n     * @returns {SimpleImageData}\n     */\n\n  }, {\n    key: \"data\",\n    get: function get() {\n      return this._data;\n    }\n    /**\n     * Set image data and update the view\n     *\n     * @param {SimpleImageData} data\n     */\n    ,\n    set: function set(data) {\n      this._data = Object.assign({}, this.data, data);\n\n      if (this.nodes.image) {\n        this.nodes.image.src = this.data.url;\n      }\n\n      if (this.nodes.caption) {\n        this.nodes.caption.innerHTML = this.data.caption;\n      }\n    }\n    /**\n     * Specify paste substitutes\n     *\n     * @see {@link ../../../docs/tools.md#paste-handling}\n     * @public\n     */\n\n  }, {\n    key: \"renderSettings\",\n    value:\n    /**\n     * Makes buttons with tunes: add background, add border, stretch image\n     *\n     * @returns {HTMLDivElement}\n     */\n    function renderSettings() {\n      var _this3 = this;\n\n      var wrapper = document.createElement('div');\n      this.settings.forEach(function (tune) {\n        var el = document.createElement('div');\n        el.classList.add(_this3.CSS.settingsButton);\n        el.innerHTML = tune.icon;\n        el.addEventListener('click', function () {\n          _this3._toggleTune(tune.name);\n\n          el.classList.toggle(_this3.CSS.settingsButtonActive);\n        });\n        el.classList.toggle(_this3.CSS.settingsButtonActive, _this3.data[tune.name]);\n        wrapper.appendChild(el);\n      });\n      return wrapper;\n    }\n  }, {\n    key: \"_make\",\n    value:\n    /**\n     * Helper for making Elements with attributes\n     *\n     * @param  {string} tagName           - new Element tag name\n     * @param  {Array|string} classNames  - list or name of CSS classname(s)\n     * @param  {object} attributes        - any attributes\n     * @returns {Element}\n     */\n    function _make(tagName) {\n      var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var el = document.createElement(tagName);\n\n      if (Array.isArray(classNames)) {\n        var _el$classList;\n\n        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n      } else if (classNames) {\n        el.classList.add(classNames);\n      }\n\n      for (var attrName in attributes) {\n        el[attrName] = attributes[attrName];\n      }\n\n      return el;\n    }\n    /**\n     * Click on the Settings Button\n     *\n     * @private\n     * @param tune\n     */\n\n  }, {\n    key: \"_toggleTune\",\n    value: function _toggleTune(tune) {\n      this.data[tune] = !this.data[tune];\n\n      this._acceptTuneView();\n    }\n    /**\n     * Add specified class corresponds with activated tunes\n     *\n     * @private\n     */\n\n  }, {\n    key: \"_acceptTuneView\",\n    value: function _acceptTuneView() {\n      var _this4 = this;\n\n      this.settings.forEach(function (tune) {\n        _this4.nodes.imageHolder.classList.toggle(_this4.CSS.imageHolder + '--' + tune.name.replace(/([A-Z])/g, function (g) {\n          return \"-\".concat(g[0].toLowerCase());\n        }), !!_this4.data[tune.name]);\n\n        if (tune.name === 'stretched') {\n          _this4.api.blocks.stretchBlock(_this4.blockIndex, !!_this4.data.stretched);\n        }\n\n        if (tune.name === 'annotate') {\n          _this4.showMarkerArea(_this4.nodes.image);\n        }\n      });\n    }\n  }, {\n    key: \"showMarkerArea\",\n    value: function showMarkerArea(target) {\n      var _this5 = this;\n\n      var markerArea = new markerjs2.MarkerArea(target); // since the container div is set to position: relative it is now our positioning root\n      // end we have to let marker.js know that\n\n      markerArea.targetRoot = target.parentNode;\n      markerArea.addRenderEventListener(function (imgURL, state) {\n        target.src = imgURL; // save the state of MarkerArea\n\n        _this5.maState = state;\n      });\n      markerArea.show(); // if previous state is present - restore it\n\n      if (this.maState) {\n        try {\n          markerArea.restoreState(this.maState);\n        } catch (_unused) {}\n      }\n    }\n  }], [{\n    key: \"sanitize\",\n    get: function get() {\n      return {\n        url: {},\n        withBorder: {},\n        annotate: {},\n        stretched: {},\n        caption: {\n          br: true\n        }\n      };\n    }\n    /**\n     * Notify core that read-only mode is suppoorted\n     *\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"isReadOnlySupported\",\n    get: function get() {\n      return true;\n    }\n  }, {\n    key: \"pasteConfig\",\n    get: function get() {\n      return {\n        patterns: {\n          image: /https?:\\/\\/\\S+\\.(gif|jpe?g|tiff|png)$/i\n        },\n        tags: ['img'],\n        files: {\n          mimeTypes: ['image/*']\n        }\n      };\n    }\n  }]);\n\n  return SimpleImage;\n}();\n\nmodule.exports = SimpleImage;\n\n//# sourceURL=webpack://SimpleImage/./src/index.js?");
        /***/
      }
      /******/

    })
  );
});
},{}],"C:/Users/Usman-417/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53688" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Usman-417/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","tools/simple-image/dist/bundle.js"], null)
//# sourceMappingURL=/bundle.075f548c.js.map