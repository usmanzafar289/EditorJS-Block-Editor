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
})({"dist/virtual-select.min.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Virtual Select v1.0.11
 * https://sa-si-dev.github.io/virtual-select
 * Licensed under MIT (https://github.com/sa-si-dev/virtual-select/blob/master/LICENSE)
 */
!function () {
  "use strict";

  function e(e) {
    return function (e) {
      if (Array.isArray(e)) return t(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, i) {
      if (!e) return;
      if ("string" == typeof e) return t(e, i);
      var s = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === s && e.constructor && (s = e.constructor.name);
      if ("Map" === s || "Set" === s) return Array.from(e);
      if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return t(e, i);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function t(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var i = 0, s = new Array(t); i < t; i++) {
      s[i] = e[i];
    }

    return s;
  }

  function i(e) {
    return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  function s(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  var o = function () {
    function t() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);
    }

    var o, n, l;
    return o = t, l = [{
      key: "getString",
      value: function value(e) {
        return e || 0 === e ? e.toString() : "";
      }
    }, {
      key: "convertToBoolean",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e = !0 === e || "true" === e || !1 !== e && "false" !== e && t;
      }
    }, {
      key: "isEmpty",
      value: function value(e) {
        var t = !1;
        return e ? Array.isArray(e) ? 0 === e.length && (t = !0) : "object" === i(e) && 0 === Object.keys(e).length && (t = !0) : t = !0, t;
      }
    }, {
      key: "isNotEmpty",
      value: function value(e) {
        return !this.isEmpty(e);
      }
    }, {
      key: "removeItemFromArray",
      value: function value(t, i, s) {
        if (!Array.isArray(t) || !t.length || !i) return t;
        s && (t = e(t));
        var o = t.indexOf(i);
        return -1 !== o && t.splice(o, 1), t;
      }
    }, {
      key: "removeArrayEmpty",
      value: function value(e) {
        return Array.isArray(e) && e.length ? e.filter(function (e) {
          return !!e;
        }) : [];
      }
    }], (n = null) && s(o.prototype, n), l && s(o, l), t;
  }();

  function n(e) {
    return function (e) {
      if (Array.isArray(e)) return l(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return l(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === i && e.constructor && (i = e.constructor.name);
      if ("Map" === i || "Set" === i) return Array.from(e);
      if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return l(e, t);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function l(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var i = 0, s = new Array(t); i < t; i++) {
      s[i] = e[i];
    }

    return s;
  }

  function a(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  var r = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
    }

    var t, i, s;
    return t = e, s = [{
      key: "addClass",
      value: function value(t, i) {
        t && (i = i.split(" "), e.getElements(t).forEach(function (e) {
          var t;
          (t = e.classList).add.apply(t, n(i));
        }));
      }
    }, {
      key: "removeClass",
      value: function value(t, i) {
        t && (i = i.split(" "), e.getElements(t).forEach(function (e) {
          var t;
          (t = e.classList).remove.apply(t, n(i));
        }));
      }
    }, {
      key: "toggleClass",
      value: function value(t, i, s) {
        var o;
        if (t) return void 0 !== s && (s = Boolean(s)), e.getElements(t).forEach(function (e) {
          o = e.classList.toggle(i, s);
        }), o;
      }
    }, {
      key: "hasClass",
      value: function value(e, t) {
        return !!e && e.classList.contains(t);
      }
    }, {
      key: "hasEllipsis",
      value: function value(e) {
        return !!e && e.scrollWidth > e.offsetWidth;
      }
    }, {
      key: "getMoreVisibleSides",
      value: function value(e) {
        if (!e) return {};
        var t = e.getBoundingClientRect(),
            i = window.innerWidth,
            s = window.innerHeight,
            o = t.left,
            n = t.top;
        return {
          horizontal: o > i - o - t.width ? "left" : "right",
          vertical: n > s - n - t.height ? "top" : "bottom"
        };
      }
    }, {
      key: "getData",
      value: function value(e, t, i) {
        if (e) {
          var s = e ? e.dataset[t] : "";
          return "number" === i ? s = parseFloat(s) || 0 : "true" === s ? s = !0 : "false" === s && (s = !1), s;
        }
      }
    }, {
      key: "setData",
      value: function value(e, t, i) {
        e && (e.dataset[t] = i);
      }
    }, {
      key: "setStyle",
      value: function value(e, t, i) {
        e && (e.style[t] = i);
      }
    }, {
      key: "getElements",
      value: function value(e) {
        if (e) return void 0 === e.forEach && (e = [e]), e;
      }
    }, {
      key: "addEvent",
      value: function value(t, i, s) {
        t && (i = o.removeArrayEmpty(i.split(" "))).forEach(function (i) {
          (t = e.getElements(t)).forEach(function (e) {
            e.addEventListener(i, s);
          });
        });
      }
    }, {
      key: "dispatchEvent",
      value: function value(t, i) {
        t && (t = e.getElements(t), setTimeout(function () {
          t.forEach(function (e) {
            e.dispatchEvent(new Event(i, {
              bubbles: !0
            }));
          });
        }, 0));
      }
    }, {
      key: "getStyleText",
      value: function value(e, t) {
        var i = "";

        for (var s in e) {
          i += "".concat(s, ": ").concat(e[s], ";");
        }

        return i && !t && (i = 'style="'.concat(i, '"')), i;
      }
    }, {
      key: "getAttributesText",
      value: function value(e) {
        var t = "";
        if (!e) return t;

        for (var i in e) {
          var s = e[i];
          void 0 !== s && (t += " ".concat(i, '="').concat(s, '" '));
        }

        return t;
      }
    }], (i = null) && a(t.prototype, i), s && a(t, s), e;
  }();

  function u(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  }

  function c(e, t) {
    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

    if (!i) {
      if (Array.isArray(e) || (i = p(e)) || t && e && "number" == typeof e.length) {
        i && (e = i);

        var s = 0,
            o = function o() {};

        return {
          s: o,
          n: function n() {
            return s >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[s++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: o
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var n,
        l = !0,
        a = !1;
    return {
      s: function s() {
        i = i.call(e);
      },
      n: function n() {
        var e = i.next();
        return l = e.done, e;
      },
      e: function e(_e2) {
        a = !0, n = _e2;
      },
      f: function f() {
        try {
          l || null == i.return || i.return();
        } finally {
          if (a) throw n;
        }
      }
    };
  }

  function h(e) {
    return function (e) {
      if (Array.isArray(e)) return d(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || p(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function p(e, t) {
    if (e) {
      if ("string" == typeof e) return d(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? d(e, t) : void 0;
    }
  }

  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var i = 0, s = new Array(t); i < t; i++) {
      s[i] = e[i];
    }

    return s;
  }

  function v(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  var f = {
    13: "onEnterPress",
    27: "onEscPress",
    38: "onUpArrowPress",
    40: "onDownArrowPress"
  },
      y = function () {
    function e(t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);

      try {
        this.setProps(t), this.setDisabledOptions(t.disabledOptions), this.setOptions(t.options), this.render();
      } catch (e) {
        console.warn("Couldn't initiate Virtual Select"), console.error(e);
      }
    }

    var t, i, s;
    return t = e, s = [{
      key: "init",
      value: function value(t) {
        var i = t.ele;

        if (i) {
          var s = !1;

          if ("string" != typeof i || (i = document.querySelector(i))) {
            void 0 === i.length && (i = [i], s = !0);
            var o = [];
            return i.forEach(function (i) {
              t.ele = i, o.push(new e(t));
            }), s ? o[0] : o;
          }
        }
      }
    }, {
      key: "resetForm",
      value: function value(e) {
        var t = e.target.closest("form");
        t && t.querySelectorAll(".vscomp-wrapper").forEach(function (e) {
          e.parentElement.virtualSelect.reset();
        });
      }
    }, {
      key: "reset",
      value: function value() {
        this.virtualSelect.reset();
      }
    }, {
      key: "setValueMethod",
      value: function value(e, t) {
        this.virtualSelect.setValueMethod(e, t);
      }
    }, {
      key: "setOptionsMethod",
      value: function value(e) {
        this.virtualSelect.setOptionsMethod(e);
      }
    }, {
      key: "setDisabledOptionsMethod",
      value: function value(e) {
        this.virtualSelect.setDisabledOptionsMethod(e);
      }
    }, {
      key: "toggleSelectAll",
      value: function value(e) {
        this.virtualSelect.toggleAllOptions(e);
      }
    }, {
      key: "isAllSelected",
      value: function value() {
        return this.virtualSelect.isAllSelected;
      }
    }, {
      key: "addOptionMethod",
      value: function value(e) {
        this.virtualSelect.addOption(e, !0);
      }
    }, {
      key: "getNewValueMethod",
      value: function value() {
        return this.virtualSelect.getNewValue();
      }
    }, {
      key: "version",
      value: function value() {
        return "v1.0.11";
      }
    }, {
      key: "getDisplayValueMethod",
      value: function value() {
        return this.virtualSelect.getDisplayValue();
      }
    }, {
      key: "getSelectedOptionsMethod",
      value: function value() {
        return this.virtualSelect.getSelectedOptions();
      }
    }, {
      key: "openMethod",
      value: function value() {
        return this.virtualSelect.openDropbox();
      }
    }, {
      key: "closeMethod",
      value: function value() {
        return this.virtualSelect.closeDropbox();
      }
    }, {
      key: "onResizeMethod",
      value: function value() {
        document.querySelectorAll(".vscomp-wrapper").forEach(function (e) {
          e.parentElement.virtualSelect.onResize();
        });
      }
    }], (i = [{
      key: "render",
      value: function value() {
        if (this.$ele) {
          var e = "vscomp-wrapper",
              t = this.getTooltipAttrText("", !this.multiple, !0),
              i = this.getTooltipAttrText(this.clearButtonText),
              s = {
            "z-index": this.zIndex
          };
          this.additionalClasses && (e += " " + this.additionalClasses), this.multiple && (e += " multiple", this.disableSelectAll || (e += " has-select-all")), "top" === this.position && (e += " position-top"), this.hideClearButton || (e += " has-clear-button"), this.keepAlwaysOpen ? e += " keep-always-open opened" : e += " closed", this.showAsPopup ? e += " show-as-popup" : this.dropboxWidth && (s.width = this.dropboxWidth), this.hasSearch && (e += " has-search-input");
          var o = '<div class="'.concat(e, '" tabindex="0">\n        <input type="hidden" name="').concat(this.name, '" class="vscomp-hidden-input">\n\n        <div class="vscomp-toggle-button">\n          <div class="vscomp-value" ').concat(t, ">\n            ").concat(this.placeholder, '\n          </div>\n\n          <div class="vscomp-arrow"></div>\n\n          <div class="vscomp-clear-button toggle-button-child" ').concat(i, '>\n            <i class="vscomp-clear-icon"></i>\n          </div>\n        </div>\n\n        <div class="vscomp-dropbox-container" ').concat(r.getStyleText(s), '>\n          <div class="vscomp-dropbox">\n            <div class="vscomp-search-wrapper"></div>\n\n            <div class="vscomp-options-container">\n              <div class="vscomp-options-loader"></div>\n\n              <div class="vscomp-options-list">\n                <div class="vscomp-options"></div>\n              </div>\n            </div>\n\n            <div class="vscomp-no-options">').concat(this.noOptionsText, '</div>\n            <div class="vscomp-no-search-results">').concat(this.noSearchResultsText, '</div>\n\n            <span class="vscomp-dropbox-close-button"><i class="vscomp-clear-icon"></i></span>\n          </div>\n        </div>\n      </div>');
          this.$ele.innerHTML = o, this.$body = document.querySelector("body"), this.$wrapper = this.$ele.querySelector(".vscomp-wrapper"), this.$toggleButton = this.$ele.querySelector(".vscomp-toggle-button"), this.$clearButton = this.$ele.querySelector(".vscomp-clear-button"), this.$dropboxContainer = this.$ele.querySelector(".vscomp-dropbox-container"), this.$dropboxCloseButton = this.$ele.querySelector(".vscomp-dropbox-close-button"), this.$search = this.$ele.querySelector(".vscomp-search-wrapper"), this.$optionsContainer = this.$ele.querySelector(".vscomp-options-container"), this.$optionsList = this.$ele.querySelector(".vscomp-options-list"), this.$options = this.$ele.querySelector(".vscomp-options"), this.$valueText = this.$ele.querySelector(".vscomp-value"), this.$hiddenInput = this.$ele.querySelector(".vscomp-hidden-input"), this.$noOptions = this.$ele.querySelector(".vscomp-no-options"), this.$noSearchResults = this.$ele.querySelector(".vscomp-no-search-results"), this.afterRenderWrapper();
        }
      }
    }, {
      key: "renderOptions",
      value: function value() {
        var e,
            t = this,
            i = "",
            s = this.getVisibleOptions(),
            o = "",
            n = "",
            l = !(!this.markSearchResults || !this.searchValue),
            a = this.labelRenderer,
            u = "function" == typeof a,
            c = r.getStyleText({
          height: this.optionHeight + "px"
        });

        if (l && (e = new RegExp("(".concat(this.searchValue, ")"), "gi")), this.multiple && (o = '<span class="checkbox-icon"></span>'), this.allowNewOption) {
          var h = this.getTooltipAttrText("New Option");
          n = '<span class="vscomp-new-option-icon" '.concat(h, "></span>");
        }

        s.forEach(function (s) {
          var r,
              h = "vscomp-option",
              p = t.getTooltipAttrText("", !0),
              d = o,
              v = "",
              f = "";
          s.isFocused && (h += " focused"), s.isDisabled && (h += " disabled"), s.isGroupTitle ? (h += " group-title", d = "") : s.isSelected && (h += " selected"), s.isGroupOption && (h += " group-option"), r = u ? a(s) : s.label, s.description && (f = '<div class="vscomp-option-description" '.concat(p, ">").concat(s.description, "</div>")), s.isCurrentNew ? (h += " current-new", v += n) : l && !s.isGroupTitle && (r = r.replace(e, "<mark>$1</mark>")), i += '<div class="'.concat(h, '" data-value="').concat(s.value, '" data-index="').concat(s.index, '" data-visible-index="').concat(s.visibleIndex, '" ').concat(c, ">\n          ").concat(d, '\n          <span class="vscomp-option-text" ').concat(p, ">\n            ").concat(r, "\n          </span>\n          ").concat(f, "\n          ").concat(v, "\n        </div>");
        }), this.$options.innerHTML = i;
        var p = !this.options.length && !this.hasServerSearch,
            d = !p && !s.length;
        (!this.allowNewOption || this.hasServerSearch || this.showOptionsOnlyOnSearch) && r.toggleClass(this.$wrapper, "has-no-search-results", d), r.toggleClass(this.$wrapper, "has-no-options", p), this.setOptionsPosition(), this.setOptionsTooltip();
      }
    }, {
      key: "renderSearch",
      value: function value() {
        if (this.hasSearchContainer) {
          var e = "",
              t = "";
          this.multiple && !this.disableSelectAll && (e = '<span class="vscomp-toggle-all-button">\n          <span class="checkbox-icon vscomp-toggle-all-checkbox"></span>\n          <span class="vscomp-toggle-all-label">'.concat(this.selectAllText, "</span>\n        </span>")), this.hasSearch && (t = '<input type="text" class="vscomp-search-input" placeholder="'.concat(this.searchPlaceholderText, '">\n      <span class="vscomp-search-clear">&times;</span>'));
          var i = '<div class="vscomp-search-container">\n        '.concat(e, "\n        ").concat(t, "\n      </div>");
          this.$search.innerHTML = i, this.$searchInput = this.$ele.querySelector(".vscomp-search-input"), this.$searchClear = this.$ele.querySelector(".vscomp-search-clear"), this.$toggleAllButton = this.$ele.querySelector(".vscomp-toggle-all-button"), this.$toggleAllCheckbox = this.$ele.querySelector(".vscomp-toggle-all-checkbox"), this.addEvent(this.$searchInput, "keyup change", "onSearch"), this.addEvent(this.$searchClear, "click", "onSearchClear"), this.addEvent(this.$toggleAllButton, "click", "onToggleAllOptions");
        }
      }
    }, {
      key: "addEvents",
      value: function value() {
        this.addEvent(document, "click", "onDocumentClick"), this.addEvent(this.$wrapper, "keydown", "onKeyDown"), this.addEvent(this.$toggleButton, "click", "onToggleButtonClick"), this.addEvent(this.$clearButton, "click", "onClearButtonClick"), this.addEvent(this.$dropboxContainer, "click", "onDropboxContainerClick"), this.addEvent(this.$dropboxCloseButton, "click", "onDropboxCloseButtonClick"), this.addEvent(this.$optionsContainer, "scroll", "onOptionsScroll"), this.addEvent(this.$options, "click", "onOptionsClick"), this.addEvent(this.$options, "mouseover", "onOptionsMouseOver"), this.addEvent(this.$options, "touchmove", "onOptionsTouchMove");
      }
    }, {
      key: "addEvent",
      value: function value(e, t, i) {
        var s = this;
        e && (t = o.removeArrayEmpty(t.split(" "))).forEach(function (t) {
          var o = "".concat(i, "-").concat(t),
              n = s.events[o];
          n || (n = s[i].bind(s), s.events[o] = n), r.addEvent(e, t, n);
        });
      }
    }, {
      key: "onDocumentClick",
      value: function value(e) {
        e.target.closest(".vscomp-wrapper") !== this.$wrapper && this.isOpened() && this.closeDropbox();
      }
    }, {
      key: "onKeyDown",
      value: function value(e) {
        var t = e.which || e.keyCode,
            i = f[t];
        i && this[i](e);
      }
    }, {
      key: "onEnterPress",
      value: function value() {
        this.isOpened() ? this.selectFocusedOption() : this.openDropbox();
      }
    }, {
      key: "onEscPress",
      value: function value() {
        this.isOpened() && this.closeDropbox();
      }
    }, {
      key: "onDownArrowPress",
      value: function value(e) {
        e.preventDefault(), this.isOpened() ? this.focusOption("next") : this.openDropbox();
      }
    }, {
      key: "onUpArrowPress",
      value: function value(e) {
        e.preventDefault(), this.isOpened() ? this.focusOption("previous") : this.openDropbox();
      }
    }, {
      key: "onToggleButtonClick",
      value: function value(e) {
        e.target.closest(".toggle-button-child") || this.toggleDropbox();
      }
    }, {
      key: "onClearButtonClick",
      value: function value() {
        this.reset();
      }
    }, {
      key: "onOptionsScroll",
      value: function value() {
        this.setVisibleOptions();
      }
    }, {
      key: "onOptionsClick",
      value: function value(e) {
        this.selectOption(e.target.closest(".vscomp-option:not(.disabled):not(.group-title)"));
      }
    }, {
      key: "onDropboxContainerClick",
      value: function value(e) {
        e.target.closest(".vscomp-dropbox") || this.closeDropbox();
      }
    }, {
      key: "onDropboxCloseButtonClick",
      value: function value() {
        this.closeDropbox();
      }
    }, {
      key: "onOptionsMouseOver",
      value: function value(e) {
        var t = e.target.closest(".vscomp-option:not(.disabled):not(.group-title)");
        t && this.isOpened() && this.focusOption(null, t);
      }
    }, {
      key: "onOptionsTouchMove",
      value: function value() {
        this.removeOptionFocus();
      }
    }, {
      key: "onSearch",
      value: function value(e) {
        e.stopPropagation(), this.setSearchValue(e.target.value, !0);
      }
    }, {
      key: "onSearchClear",
      value: function value() {
        this.setSearchValue(""), this.focusSearchInput();
      }
    }, {
      key: "onToggleAllOptions",
      value: function value() {
        this.toggleAllOptions();
      }
    }, {
      key: "onResize",
      value: function value() {
        this.setOptionsContainerHeight(!0);
      }
    }, {
      key: "beforeValueSet",
      value: function value(e) {
        this.toggleAllOptionsClass(!e && void 0);
      }
    }, {
      key: "beforeSelectNewValue",
      value: function value() {
        var e = this,
            t = this.getNewOption(),
            i = t.index;
        this.newValues.push(t.value), this.setOptionProp(i, "isCurrentNew", !1), this.setOptionProp(i, "isNew", !0), setTimeout(function () {
          e.setSearchValue(""), e.focusSearchInput();
        }, 0);
      }
    }, {
      key: "afterRenderWrapper",
      value: function value() {
        this.$ele.setAttribute("name", this.name), r.addClass(this.$ele, "vscomp-ele"), this.renderSearch(), this.setOptionsHeight(), this.setVisibleOptions(), this.setOptionsContainerHeight(), this.addEvents(), this.setMethods(), this.initialSelectedValue ? this.setValueMethod(this.initialSelectedValue, this.silentInitialValueSet) : this.autoSelectFirstOption && this.visibleOptions.length && this.setValueMethod(this.visibleOptions[0].value, this.silentInitialValueSet), this.showOptionsOnlyOnSearch && this.setSearchValue("", !1, !0);
      }
    }, {
      key: "afterSetOptionsContainerHeight",
      value: function value(e) {
        e && this.showAsPopup && this.setVisibleOptions();
      }
    }, {
      key: "afterSetSearchValue",
      value: function value() {
        this.hasServerSearch ? this.serverSearch() : this.setVisibleOptionsCount(), this.selectAllOnlyVisible && this.toggleAllOptionsClass();
      }
    }, {
      key: "afterSetVisibleOptionsCount",
      value: function value() {
        this.scrollToTop(), this.setOptionsHeight(), this.setVisibleOptions();
      }
    }, {
      key: "afterValueSet",
      value: function value() {
        this.scrollToTop(), this.setSearchValue(""), this.renderOptions();
      }
    }, {
      key: "afterSetOptions",
      value: function value(e) {
        e && this.setSelectedProp(), this.setOptionsHeight(), this.setVisibleOptions(), this.showOptionsOnlyOnSearch && this.setSearchValue("", !1, !0), e || this.reset();
      }
    }, {
      key: "setProps",
      value: function value(e) {
        e = this.setDefaultProps(e), this.setPropsFromElementAttr(e);
        var t = o.convertToBoolean;
        this.$ele = e.ele, this.valueKey = e.valueKey, this.labelKey = e.labelKey, this.descriptionKey = e.descriptionKey, this.aliasKey = e.aliasKey, this.optionHeightText = e.optionHeight, this.optionHeight = parseFloat(this.optionHeightText), this.multiple = t(e.multiple), this.hasSearch = t(e.search), this.hideClearButton = t(e.hideClearButton), this.autoSelectFirstOption = t(e.autoSelectFirstOption), this.hasOptionDescription = t(e.hasOptionDescription), this.silentInitialValueSet = t(e.silentInitialValueSet), this.allowNewOption = t(e.allowNewOption), this.markSearchResults = t(e.markSearchResults), this.showSelectedOptionsFirst = t(e.showSelectedOptionsFirst), this.disableSelectAll = t(e.disableSelectAll), this.keepAlwaysOpen = t(e.keepAlwaysOpen), this.showDropboxAsPopup = t(e.showDropboxAsPopup), this.hideValueTooltipOnSelectAll = t(e.hideValueTooltipOnSelectAll), this.showOptionsOnlyOnSearch = t(e.showOptionsOnlyOnSearch), this.selectAllOnlyVisible = t(e.selectAllOnlyVisible), this.noOptionsText = e.noOptionsText, this.noSearchResultsText = e.noSearchResultsText, this.selectAllText = e.selectAllText, this.searchPlaceholderText = e.searchPlaceholderText, this.clearButtonText = e.clearButtonText, this.placeholder = e.placeholder, this.position = e.position, this.dropboxWidth = e.dropboxWidth, this.tooltipFontSize = e.tooltipFontSize, this.tooltipAlignment = e.tooltipAlignment, this.tooltipMaxWidth = e.tooltipMaxWidth, this.noOfDisplayValues = parseInt(e.noOfDisplayValues), this.zIndex = parseInt(e.zIndex), this.maxValues = parseInt(e.maxValues), this.name = e.name, this.additionalClasses = e.additionalClasses, this.popupDropboxBreakpoint = e.popupDropboxBreakpoint, this.onServerSearch = e.onServerSearch, this.labelRenderer = e.labelRenderer, this.initialSelectedValue = 0 === e.selectedValue ? "0" : e.selectedValue, this.selectedValues = [], this.selectedOptions = [], this.newValues = [], this.events = {}, this.tooltipEnterDelay = 200, this.transitionDuration = 250, this.searchValue = "", this.searchValueOriginal = "", this.isAllSelected = !1, (void 0 === e.search && this.multiple || this.allowNewOption || this.showOptionsOnlyOnSearch) && (this.hasSearch = !0), this.hasServerSearch = "function" == typeof this.onServerSearch, (this.maxValues || this.hasServerSearch || this.showOptionsOnlyOnSearch) && (this.disableSelectAll = !0), this.showAsPopup = this.showDropboxAsPopup && !this.keepAlwaysOpen && window.innerWidth <= parseFloat(this.popupDropboxBreakpoint), this.hasSearchContainer = this.hasSearch || this.multiple && !this.disableSelectAll, this.optionsCount = this.getOptionsCount(e.optionsCount), this.halfOptionsCount = Math.ceil(this.optionsCount / 2), this.optionsHeight = this.getOptionsHeight();
      }
    }, {
      key: "setDefaultProps",
      value: function value(e) {
        var t = {
          valueKey: "value",
          labelKey: "label",
          descriptionKey: "description",
          aliasKey: "alias",
          optionsCount: 5,
          noOfDisplayValues: 50,
          optionHeight: "40px",
          multiple: !1,
          hideClearButton: !1,
          autoSelectFirstOption: !1,
          hasOptionDescription: !1,
          silentInitialValueSet: !1,
          disableSelectAll: !1,
          noOptionsText: "No options found",
          noSearchResultsText: "No results found",
          selectAllText: "Select All",
          searchPlaceholderText: "Search...",
          clearButtonText: "Clear",
          placeholder: "Select",
          position: "auto",
          zIndex: 1,
          allowNewOption: !1,
          markSearchResults: !1,
          tooltipFontSize: "14px",
          tooltipAlignment: "center",
          tooltipMaxWidth: "300px",
          showSelectedOptionsFirst: !1,
          name: "",
          additionalClasses: "",
          keepAlwaysOpen: !1,
          maxValues: 0,
          showDropboxAsPopup: !0,
          popupDropboxBreakpoint: "576px",
          hideValueTooltipOnSelectAll: !0,
          showOptionsOnlyOnSearch: !1,
          selectAllOnlyVisible: !1
        };
        return e.hasOptionDescription && (t.optionsCount = 4, t.optionHeight = "50px"), Object.assign(t, e);
      }
    }, {
      key: "setPropsFromElementAttr",
      value: function value(e) {
        var t = e.ele,
            i = {
          multiple: "multiple",
          placeholder: "placeholder",
          name: "name",
          "data-value-key": "valueKey",
          "data-label-key": "labelKey",
          "data-description-key": "descriptionKey",
          "data-alias-key": "aliasKey",
          "data-search": "search",
          "data-hide-clear-button": "hideClearButton",
          "data-auto-select-first-option": "autoSelectFirstOption",
          "data-has-option-description": "hasOptionDescription",
          "data-options-count": "optionsCount",
          "data-option-height": "optionHeight",
          "data-position": "position",
          "data-no-options-text": "noOptionsText",
          "data-no-search-results-text": "noSearchResultsText",
          "data-select-all-text": "selectAllText",
          "data-search-placeholder-text": "searchPlaceholderText",
          "data-clear-button-text": "clearButtonText",
          "data-silent-initial-value-set": "silentInitialValueSet",
          "data-dropbox-width": "dropboxWidth",
          "data-z-index": "zIndex",
          "data-no-of-display-values": "noOfDisplayValues",
          "data-allow-new-option": "allowNewOption",
          "data-mark-search-results": "markSearchResults",
          "data-tooltip-font-size": "tooltipFontSize",
          "data-tooltip-alignment": "tooltipAlignment",
          "data-tooltip-max-width": "tooltipMaxWidth",
          "data-show-selected-options-first": "showSelectedOptionsFirst",
          "data-disable-select-all": "disableSelectAll",
          "data-keep-always-open": "keepAlwaysOpen",
          "data-max-values": "maxValues",
          "data-additional-classes": "additionalClasses",
          "data-show-dropbox-as-popup": "showDropboxAsPopup",
          "data-popup-dropbox-breakpoint": "popupDropboxBreakpoint",
          "data-hide-value-tooltip-on-select-all": "hideValueTooltipOnSelectAll",
          "data-show-options-only-on-search": "showOptionsOnlyOnSearch",
          "data-select-all-only-visible": "selectAllOnlyVisible"
        };

        for (var s in i) {
          var o = t.getAttribute(s);
          "multiple" !== s || "" !== o && "true" !== o || (o = !0), o && (e[i[s]] = o);
        }
      }
    }, {
      key: "setMethods",
      value: function value() {
        var t = this.$ele;
        t.virtualSelect = this, t.value = this.multiple ? [] : "", t.reset = e.reset, t.setValue = e.setValueMethod, t.setOptions = e.setOptionsMethod, t.setDisabledOptions = e.setDisabledOptionsMethod, t.toggleSelectAll = e.toggleSelectAll, t.isAllSelected = e.isAllSelected, t.addOption = e.addOptionMethod, t.getNewValue = e.getNewValueMethod, t.getDisplayValue = e.getDisplayValueMethod, t.getSelectedOptions = e.getSelectedOptionsMethod, t.open = e.openMethod, t.close = e.closeMethod;
      }
    }, {
      key: "setValueMethod",
      value: function value(e, t) {
        Array.isArray(e) || (e = [e]), e = e.map(function (e) {
          return e || 0 == e ? e.toString() : "";
        });
        var i = [];
        this.allowNewOption && e && this.setNewOptionsFromValue(e), this.options.forEach(function (t) {
          -1 === e.indexOf(t.value) || t.isDisabled || t.isGroupTitle ? t.isSelected = !1 : (t.isSelected = !0, i.push(t.value));
        }), this.multiple || (i = i[0]), this.beforeValueSet(), this.setValue(i, !t), this.afterValueSet();
      }
    }, {
      key: "setOptionsMethod",
      value: function value(e, t) {
        this.setOptions(e), this.afterSetOptions(t);
      }
    }, {
      key: "setDisabledOptionsMethod",
      value: function value(e) {
        this.setDisabledOptions(e, !0), this.setValueMethod(null), this.setVisibleOptions();
      }
    }, {
      key: "setDisabledOptions",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e = e.map(function (e) {
          return e.toString();
        }), this.disabledOptions = e, t && e.length && this.options.forEach(function (t) {
          return t.isDisabled = -1 !== e.indexOf(t.value), t;
        });
      }
    }, {
      key: "setOptions",
      value: function value(e) {
        e || (e = []);
        var t = [],
            i = this.disabledOptions,
            s = i.length,
            n = this.valueKey,
            l = this.labelKey,
            a = this.descriptionKey,
            r = this.aliasKey,
            u = this.hasOptionDescription,
            c = o.getString,
            h = o.convertToBoolean,
            p = this.getAlias,
            d = 0,
            v = !1;
        e.forEach(function e(o) {
          var f = c(o[n]),
              y = o.options,
              g = !!y,
              O = {
            index: d,
            value: f,
            label: c(o[l]),
            alias: p(o[r]),
            isVisible: h(o.isVisible, !0),
            isNew: o.isNew || !1,
            isGroupTitle: g
          };

          if (s && (O.isDisabled = -1 !== i.indexOf(f)), o.isGroupOption && (O.isGroupOption = !0, O.groupIndex = o.groupIndex), u && (O.description = c(o[a])), t.push(O), d++, g) {
            var b = O.index;
            v = !0, y.forEach(function (t) {
              t.isGroupOption = !0, t.groupIndex = b, e(t);
            });
          }
        }), this.options = t, this.visibleOptionsCount = t.length, this.lastOptionIndex = this.options.length - 1, this.newValues = [], this.hasOptionGroup = v, this.setSortedOptions();
      }
    }, {
      key: "setServerOptions",
      value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.setOptionsMethod(t, !0);
        var i = this.selectedOptions,
            s = this.options,
            o = !1;

        if (i.length) {
          var n = s.map(function (e) {
            return e.value;
          });
          o = !0, i.forEach(function (e) {
            -1 === n.indexOf(e.value) && (e.isVisible = !1, s.push(e));
          }), this.setOptionsMethod(s, !0);
        }

        if (this.allowNewOption && this.searchValue) {
          var l = s.some(function (t) {
            return t.label.toLowerCase() === e.searchValue;
          });
          l || (o = !0, this.setNewOption());
        }

        o && (this.setVisibleOptionsCount(), this.multiple && this.toggleAllOptionsClass(), this.setValueText()), r.removeClass(this.$wrapper, "server-searching");
      }
    }, {
      key: "setSelectedOptions",
      value: function value() {
        var e = this.selectedValues;
        this.selectedOptions = this.options.filter(function (t) {
          return -1 !== e.indexOf(t.value);
        });
      }
    }, {
      key: "setSortedOptions",
      value: function value() {
        var e = h(this.options);
        this.showSelectedOptionsFirst && this.selectedValues.length && (e = this.hasOptionGroup ? this.sortOptionsGroup(e) : this.sortOptions(e)), this.sortedOptions = e;
      }
    }, {
      key: "setVisibleOptions",
      value: function value() {
        var e = h(this.sortedOptions),
            t = 2 * this.optionsCount,
            i = this.getVisibleStartIndex(),
            s = this.getNewOption(),
            o = i + t - 1,
            n = 0;
        s && (s.visibleIndex = n, n++), e = e.filter(function (e) {
          var t = !1;
          return e.isVisible && !e.isCurrentNew && (t = n >= i && n <= o, e.visibleIndex = n, n++), t;
        }), s && (e = [s].concat(h(e))), this.visibleOptions = e, this.renderOptions();
      }
    }, {
      key: "setOptionsPosition",
      value: function value(e) {
        void 0 === e && (e = this.getVisibleStartIndex());
        var t = e * this.optionHeight;
        this.$options.style.transform = "translate3d(0, ".concat(t, "px, 0)"), r.setData(this.$options, "top", t);
      }
    }, {
      key: "setOptionsTooltip",
      value: function value() {
        var e = this,
            t = this.getVisibleOptions(),
            i = this.hasOptionDescription;
        t.forEach(function (t) {
          var s = e.$dropboxContainer.querySelector('.vscomp-option[data-index="'.concat(t.index, '"]'));
          r.setData(s.querySelector(".vscomp-option-text"), "tooltip", t.label), i && r.setData(s.querySelector(".vscomp-option-description"), "tooltip", t.description);
        });
      }
    }, {
      key: "setValue",
      value: function value(e, t) {
        e ? Array.isArray(e) ? this.selectedValues = h(e) : this.selectedValues = [e] : this.selectedValues = [];
        var i = this.multiple ? this.selectedValues : this.selectedValues[0] || "";
        this.$ele.value = i, this.$hiddenInput.value = i, this.isMaxValuesSelected = !!(this.maxValues && this.maxValues <= this.selectedValues.length), this.setValueText(), r.toggleClass(this.$wrapper, "has-value", o.isNotEmpty(this.selectedValues)), r.toggleClass(this.$wrapper, "max-value-selected", this.isMaxValuesSelected), t && r.dispatchEvent(this.$ele, "change");
      }
    }, {
      key: "setValueText",
      value: function value() {
        var e = [],
            t = [],
            i = this.selectedValues,
            s = i.length,
            o = this.noOfDisplayValues,
            n = 0,
            l = this.isAllSelected && !this.hasServerSearch;
        if (l && this.hideValueTooltipOnSelectAll) this.$valueText.innerHTML = "All (".concat(s, ")");else {
          var a,
              u = c(this.options);

          try {
            for (u.s(); !(a = u.n()).done;) {
              var h = a.value;

              if (!h.isCurrentNew) {
                if (n > 50) break;
                var p = h.value;

                if (-1 !== i.indexOf(p)) {
                  var d = h.label;
                  e.push(d), ++n <= o && t.push('<span class="vscomp-value-tag">'.concat(d, "</span>"));
                }
              }
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }

          var v = s - o;
          v > 0 && t.push('<span class="vscomp-value-tag more-value-count">+ '.concat(v, " more...</span>"));
          var f = e.join(", ");
          if ("" === f) this.$valueText.innerHTML = this.placeholder;else if (this.$valueText.innerHTML = f, this.multiple) {
            var y = this.maxValues;

            if (r.hasEllipsis(this.$valueText) || y) {
              var g = "".concat(s);
              y && (g += " / ".concat(y)), this.$valueText.innerHTML = l ? "All (".concat(s, ")") : "".concat(g, " option").concat(1 === s ? "" : "s", " selected");
            } else t = [];
          }
        }
        r.setData(this.$valueText, "tooltip", t.join(", "));
      }
    }, {
      key: "setSearchValue",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

        if (e !== this.searchValueOriginal || i) {
          t || (this.$searchInput.value = e);
          var s = e.replace(/\\/g, "").toLowerCase().trim();
          this.searchValue = s, this.searchValueOriginal = e, r.toggleClass(this.$wrapper, "has-search-value", e), this.afterSetSearchValue();
        }
      }
    }, {
      key: "setVisibleOptionsCount",
      value: function value() {
        var e,
            t = 0,
            i = !1,
            s = this.searchValue,
            o = this.showOptionsOnlyOnSearch,
            n = this.isOptionVisible.bind(this);
        this.hasOptionGroup && (e = this.getVisibleOptionGroupsMapping(s)), this.options.forEach(function (l) {
          var a;
          l.isCurrentNew || (o && !s ? (l.isVisible = !1, a = {
            isVisible: !1,
            hasExactOption: !1
          }) : a = n(l, s, i, e), a.isVisible && t++, i || (i = a.hasExactOption));
        }), this.allowNewOption && (s && !i ? (this.setNewOption(), t++) : this.removeNewOption()), this.visibleOptionsCount = t, this.afterSetVisibleOptionsCount();
      }
    }, {
      key: "setOptionProp",
      value: function value(e, t, i) {
        this.options[e] && (this.options[e][t] = i);
      }
    }, {
      key: "setOptionsHeight",
      value: function value() {
        this.$optionsList.style.height = this.optionHeight * this.visibleOptionsCount + "px";
      }
    }, {
      key: "setOptionsContainerHeight",
      value: function value(e) {
        var t;
        e ? this.showAsPopup && (this.optionsCount = this.getOptionsCount(), t = this.getOptionsHeight(), this.optionsHeight = t) : (t = this.optionsHeight, this.keepAlwaysOpen && (r.setStyle(this.$noOptions, "height", t), r.setStyle(this.$noSearchResults, "height", t))), r.setStyle(this.$optionsContainer, "max-height", t), this.afterSetOptionsContainerHeight(e);
      }
    }, {
      key: "setDropboxPosition",
      value: function value() {
        if ("auto" === this.position) {
          var e = r.getMoreVisibleSides(this.$wrapper),
              t = !1;

          if (this.dropboxWidth) {
            var i = this.$toggleButton.getBoundingClientRect(),
                s = window.innerWidth,
                o = parseFloat(this.dropboxWidth),
                n = i.left + o > s,
                l = o > i.right;
            n && !l && (t = !0);
          }

          r.toggleClass(this.$wrapper, "position-top", "top" === e.vertical), r.toggleClass(this.$wrapper, "position-left", t);
        }
      }
    }, {
      key: "setNewOption",
      value: function value(e) {
        var t = e || this.searchValueOriginal.trim();

        if (t) {
          var i = this.getNewOption();

          if (i) {
            var s = i.index;
            this.setOptionProp(s, "value", t), this.setOptionProp(s, "label", t);
          } else {
            var o = {
              value: t,
              label: t
            };
            e ? (o.isNew = !0, this.newValues.push(t)) : o.isCurrentNew = !0, this.addOption(o);
          }
        }
      }
    }, {
      key: "setSelectedProp",
      value: function value() {
        var e = this.selectedValues;
        this.options.forEach(function (t) {
          -1 !== e.indexOf(t.value) && (t.isSelected = !0);
        });
      }
    }, {
      key: "setNewOptionsFromValue",
      value: function value(e) {
        if (e) {
          var t = this.options.map(function (e) {
            return e.value;
          }),
              i = this.setNewOption.bind(this);
          e.forEach(function (e) {
            e && -1 === t.indexOf(e) && i(e);
          });
        }
      }
    }, {
      key: "getVisibleOptions",
      value: function value() {
        return this.visibleOptions || [];
      }
    }, {
      key: "getValue",
      value: function value() {
        return this.multiple ? this.selectedValues : this.selectedValues[0];
      }
    }, {
      key: "getFirstVisibleOptionIndex",
      value: function value() {
        return Math.ceil(this.$optionsContainer.scrollTop / this.optionHeight);
      }
    }, {
      key: "getVisibleStartIndex",
      value: function value() {
        var e = this.getFirstVisibleOptionIndex() - this.halfOptionsCount;
        return e < 0 && (e = 0), e;
      }
    }, {
      key: "getTooltipAttrText",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = {
          "data-tooltip": e || "",
          "data-tooltip-enter-delay": this.tooltipEnterDelay,
          "data-tooltip-z-index": this.zIndex,
          "data-tooltip-font-size": this.tooltipFontSize,
          "data-tooltip-alignment": this.tooltipAlignment,
          "data-tooltip-max-width": this.tooltipMaxWidth,
          "data-tooltip-ellipsis-only": t,
          "data-tooltip-allow-html": i
        };
        return r.getAttributesText(s);
      }
    }, {
      key: "getOptionObj",
      value: function value(e) {
        if (e) {
          var t = o.getString;
          return {
            index: e.index,
            value: t(e.value),
            label: t(e.label),
            description: t(e.description),
            alias: this.getAlias(e.alias),
            isCurrentNew: e.isCurrentNew || !1,
            isNew: e.isNew || !1,
            isVisible: !0
          };
        }
      }
    }, {
      key: "getNewOption",
      value: function value() {
        var e = this.options[this.lastOptionIndex];
        if (e && e.isCurrentNew) return e;
      }
    }, {
      key: "getOptionIndex",
      value: function value(e) {
        var t;
        return e && this.options.some(function (i) {
          if (i.value == e) return t = i.index, !0;
        }), t;
      }
    }, {
      key: "getNewValue",
      value: function value() {
        var e = this.newValues,
            t = this.selectedValues.filter(function (t) {
          return -1 !== e.indexOf(t);
        });
        return this.multiple ? t : t[0];
      }
    }, {
      key: "getAlias",
      value: function value(e) {
        return e = e ? (e = Array.isArray(e) ? e.join(",") : e.toString().trim()).toLowerCase() : "";
      }
    }, {
      key: "getDisplayValue",
      value: function value() {
        var e,
            t = [],
            i = this.selectedValues,
            s = c(this.options);

        try {
          for (s.s(); !(e = s.n()).done;) {
            var o = e.value;
            -1 !== i.indexOf(o.value) && t.push(o.label);
          }
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }

        return this.multiple ? t : t[0] || "";
      }
    }, {
      key: "getSelectedOptions",
      value: function value() {
        var e = this.selectedValues,
            t = [],
            i = this.valueKey,
            s = this.labelKey;
        return this.options.forEach(function (o) {
          if (-1 !== e.indexOf(o.value)) {
            var n,
                l = (u(n = {}, i, o.value), u(n, s, o.label), n);
            o.isNew && (l.isNew = !0), t.push(l);
          }
        }), this.multiple ? t : t[0];
      }
    }, {
      key: "getVisibleOptionGroupsMapping",
      value: function value(e) {
        var t = this.options,
            i = {},
            s = this.isOptionVisible;
        return (t = this.structureOptionGroup(t)).forEach(function (t) {
          i[t.index] = t.options.some(function (t) {
            return s(t, e).isVisible;
          });
        }), i;
      }
    }, {
      key: "getOptionsCount",
      value: function value(e) {
        if (this.showAsPopup) {
          var t = 80 * window.innerHeight / 100 - 48;
          this.hasSearchContainer && (t -= 40), e = Math.floor(t / this.optionHeight);
        } else e = parseInt(e);

        return e;
      }
    }, {
      key: "getOptionsHeight",
      value: function value() {
        return this.optionsCount * this.optionHeight + "px";
      }
    }, {
      key: "getSibling",
      value: function value(e, t) {
        var i = "next" === t ? "nextElementSibling" : "previousElementSibling";

        do {
          e && (e = e[i]);
        } while (r.hasClass(e, "disabled") || r.hasClass(e, "group-title"));

        return e;
      }
    }, {
      key: "openDropbox",
      value: function value(e) {
        var t = this;
        e || r.dispatchEvent(this.$ele, "beforeOpen"), this.setDropboxPosition(), r.removeClass(this.$wrapper, "closed"), setTimeout(function () {
          r.addClass(t.$wrapper, "opened"), e || (t.moveSelectedOptionsFirst(), r.addClass(t.$wrapper, "focused"), t.showAsPopup ? (r.addClass(t.$body, "vscomp-popup-active"), t.isPopupActive = !0) : t.focusSearchInput(), r.dispatchEvent(t.$ele, "afterOpen"));
        }, 0);
      }
    }, {
      key: "closeDropbox",
      value: function value(e) {
        var t = this;
        if (this.keepAlwaysOpen) this.removeOptionFocus();else {
          e || r.dispatchEvent(this.$ele, "beforeClose");
          var i = e ? 0 : this.transitionDuration;
          setTimeout(function () {
            r.removeClass(t.$wrapper, "opened focused"), t.removeOptionFocus(), e || t.isPopupActive && (r.removeClass(t.$body, "vscomp-popup-active"), t.isPopupActive = !1);
          }, 0), setTimeout(function () {
            r.addClass(t.$wrapper, "closed"), e || r.dispatchEvent(t.$ele, "afterClose");
          }, i);
        }
      }
    }, {
      key: "moveSelectedOptionsFirst",
      value: function value() {
        this.showSelectedOptionsFirst && (this.setSortedOptions(), this.$optionsContainer.scrollTop && this.selectedValues.length ? this.scrollToTop() : this.setVisibleOptions());
      }
    }, {
      key: "toggleDropbox",
      value: function value() {
        this.isOpened() ? this.closeDropbox() : this.openDropbox();
      }
    }, {
      key: "isOpened",
      value: function value() {
        return r.hasClass(this.$wrapper, "opened");
      }
    }, {
      key: "focusSearchInput",
      value: function value() {
        var e = this.$searchInput;
        e && e.focus();
      }
    }, {
      key: "focusOption",
      value: function value(e, t) {
        var i,
            s = this.$dropboxContainer.querySelector(".vscomp-option.focused");
        if (t) i = t;else if (s) i = this.getSibling(s, e);else {
          var o = this.getFirstVisibleOptionIndex();
          i = this.$dropboxContainer.querySelector('.vscomp-option[data-visible-index="'.concat(o, '"]')), (r.hasClass(i, "disabled") || r.hasClass(i, "group-title")) && (i = this.getSibling(i, "next"));
        }
        i && i !== s && (s && r.removeClass(s, "focused"), r.addClass(i, "focused"), this.toggleFocusedProp(r.getData(i, "index"), !0), this.moveFocusedOptionToView(i));
      }
    }, {
      key: "moveFocusedOptionToView",
      value: function value(e) {
        if (e || (e = this.$dropboxContainer.querySelector(".vscomp-option.focused")), e) {
          var t,
              i = this.$optionsContainer.getBoundingClientRect(),
              s = e.getBoundingClientRect(),
              o = i.top,
              n = i.bottom,
              l = i.height,
              a = s.top,
              u = s.bottom,
              c = s.height,
              h = e.offsetTop,
              p = r.getData(this.$options, "top", "number");
          o > a ? t = h + p : n < u && (t = h - l + c + p), void 0 !== t && (this.$optionsContainer.scrollTop = t);
        }
      }
    }, {
      key: "removeOptionFocus",
      value: function value() {
        var e = this.$dropboxContainer.querySelector(".vscomp-option.focused");
        e && (r.removeClass(e, "focused"), this.toggleFocusedProp(null));
      }
    }, {
      key: "selectOption",
      value: function value(e) {
        if (e) {
          var t = !r.hasClass(e, "selected");

          if (t) {
            if (this.multiple && this.isMaxValuesSelected) return;
          } else if (!this.multiple) return void this.closeDropbox();

          var i = this.selectedValues,
              s = r.getData(e, "value"),
              n = r.getData(e, "index");

          if (this.toggleSelectedProp(n, t), t) {
            if (this.multiple) i.push(s), this.toggleAllOptionsClass();else {
              i.length && this.toggleSelectedProp(this.getOptionIndex(i[0]), !1), i = [s];
              var l = this.$ele.querySelector(".vscomp-option.selected");
              l && r.toggleClass(l, "selected", !1), this.closeDropbox();
            }
            r.toggleClass(e, "selected");
          } else this.multiple && (r.toggleClass(e, "selected"), o.removeItemFromArray(i, s), this.toggleAllOptionsClass(!1));

          r.hasClass(e, "current-new") && this.beforeSelectNewValue(), this.setValue(i, !0);
        }
      }
    }, {
      key: "selectFocusedOption",
      value: function value() {
        this.selectOption(this.$dropboxContainer.querySelector(".vscomp-option.focused"));
      }
    }, {
      key: "toggleAllOptions",
      value: function value(e) {
        if (this.multiple && !this.disableSelectAll) {
          "boolean" != typeof e && (e = !r.hasClass(this.$toggleAllCheckbox, "checked"));
          var t = [],
              i = this.selectAllOnlyVisible;
          this.options.forEach(function (s) {
            s.isDisabled || s.isCurrentNew || s.isGroupTitle || (!e || i && !s.isVisible ? s.isSelected = !1 : (s.isSelected = !0, t.push(s.value)));
          }), this.toggleAllOptionsClass(e), this.setValue(t, !0), this.renderOptions();
        }
      }
    }, {
      key: "toggleAllOptionsClass",
      value: function value(e) {
        if (this.multiple) {
          var t = "boolean" == typeof e;
          t || (e = this.isAllOptionsSelected()), r.toggleClass(this.$toggleAllCheckbox, "checked", e), this.selectAllOnlyVisible && t ? this.isAllSelected = this.isAllOptionsSelected() : this.isAllSelected = e;
        }
      }
    }, {
      key: "isAllOptionsSelected",
      value: function value() {
        var e = !1;
        return this.options.length && (e = !this.options.some(function (e) {
          return !e.isSelected && !e.isDisabled && !e.isGroupTitle;
        })), e;
      }
    }, {
      key: "toggleFocusedProp",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.focusedOptionIndex && this.setOptionProp(this.focusedOptionIndex, "isFocused", !1), this.setOptionProp(e, "isFocused", t), this.focusedOptionIndex = e;
      }
    }, {
      key: "toggleSelectedProp",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.setOptionProp(e, "isSelected", t);
      }
    }, {
      key: "scrollToTop",
      value: function value() {
        var e = !this.isOpened();
        e && this.openDropbox(!0), this.$optionsContainer.scrollTop > 0 && (this.$optionsContainer.scrollTop = 0), e && this.closeDropbox(!0);
      }
    }, {
      key: "reset",
      value: function value() {
        this.options.forEach(function (e) {
          e.isSelected = !1;
        }), this.beforeValueSet(!0), this.setValue(null, !0), this.afterValueSet();
      }
    }, {
      key: "addOption",
      value: function value(e, t) {
        if (e) {
          this.lastOptionIndex++, e.index = this.lastOptionIndex;
          var i = this.getOptionObj(e);
          this.options.push(i), this.sortedOptions.push(i), t && (this.visibleOptionsCount++, this.afterSetOptions());
        }
      }
    }, {
      key: "removeOption",
      value: function value(e) {
        (e || 0 == e) && (this.options.splice(e, 1), this.lastOptionIndex--);
      }
    }, {
      key: "removeNewOption",
      value: function value() {
        var e = this.getNewOption();
        e && this.removeOption(e.index);
      }
    }, {
      key: "sortOptions",
      value: function value(e) {
        return e.sort(function (e, t) {
          return e.isSelected || t.isSelected ? e.isSelected && (!t.isSelected || e.index < t.index) ? -1 : 1 : 0;
        });
      }
    }, {
      key: "sortOptionsGroup",
      value: function value(e) {
        var t = this.sortOptions;
        return (e = this.structureOptionGroup(e)).forEach(function (e) {
          var i = e.options;
          e.isSelected = i.some(function (e) {
            return e.isSelected;
          }), e.isSelected && t(i);
        }), t(e), this.destructureOptionGroup(e);
      }
    }, {
      key: "isOptionVisible",
      value: function value(e, t, i, s) {
        var o = e.label.toLowerCase(),
            n = e.description,
            l = e.alias,
            a = -1 !== o.indexOf(t);
        return e.isGroupTitle && (a = s[e.index]), l && !a && (a = -1 !== l.indexOf(t)), n && !a && (a = -1 !== n.toLowerCase().indexOf(t)), e.isVisible = a, i || (i = o === t), {
          isVisible: a,
          hasExactOption: i
        };
      }
    }, {
      key: "structureOptionGroup",
      value: function value(e) {
        var t = [],
            i = {};
        return e.forEach(function (e) {
          if (e.isGroupTitle) {
            var s = [];
            e.options = s, i[e.index] = s, t.push(e);
          }
        }), e.forEach(function (e) {
          e.isGroupOption && i[e.groupIndex].push(e);
        }), t;
      }
    }, {
      key: "destructureOptionGroup",
      value: function value(e) {
        var t = [];
        return e.forEach(function (e) {
          t.push(e), t = t.concat(e.options);
        }), t;
      }
    }, {
      key: "serverSearch",
      value: function value() {
        r.removeClass(this.$wrapper, "has-no-search-results"), r.addClass(this.$wrapper, "server-searching"), this.setSelectedOptions(), this.onServerSearch(this.searchValue, this);
      }
    }]) && v(t.prototype, i), s && v(t, s), e;
  }();

  document.addEventListener("reset", y.resetForm), window.addEventListener("resize", y.onResizeMethod), window.VirtualSelect = y;
}();
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
},{}]},{},["C:/Users/Usman-417/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/virtual-select.min.js"], null)
//# sourceMappingURL=/virtual-select.min.32adabba.js.map