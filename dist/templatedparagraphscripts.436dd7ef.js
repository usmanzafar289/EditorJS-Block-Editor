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
})({"templatedparagraphscripts.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*//operation with editor'js.
mods to paragraph to allow custom editing of sections
clicking on an internal field choiceetc, will highlight it, show the menu.
clicking on a content editable will highlight it, no menu


*/
function msel_clicked(msel) {
  if (msel.getAttribute('data-showing') == 'true') {
    console.log('showed');
    return;
  }

  msel.setAttribute('data-showing', 'true');
  var attr = msel.getAttribute('choices');
  var attrs = attr.split("|");
  var myOptions = [];
  var i = 0;

  var _iterator = _createForOfIteratorHelper(attrs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var opt = _step.value;
      // set option text for the VirtualSelect dropdown component
      myOptions[i] = {
        label: opt,
        value: opt
      };
      i = i + 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  msel.style.display = 'inline-block'; // undo what we did in afterclose

  var placeholder = msel._placeholder;
  var selectedvalue;
  if (msel.innerHTML != placeholder) selectedvalue = msel.innerHTML;else selectedvalue = "";

  if (msel.hasAttribute('multiple')) {
    VirtualSelect.init({
      placeholder: placeholder,
      multiple: "",
      ele: '#' + msel.id,
      options: myOptions,
      allowNewOption: true,
      showDropboxAsPopup: true,
      selectedValue: selectedvalue
    });
  } else VirtualSelect.init({
    placeholder: placeholder,
    ele: '#' + msel.id,
    options: myOptions,
    allowNewOption: true,
    showDropboxAsPopup: true,
    selectedValue: selectedvalue
  });

  msel.addEventListener('afterClose', function () {
    // reset display to original
    msel.innerHTML = msel.getDisplayValue();
    msel.setAttribute('data-showing', 'false');
    msel.setAttribute('data-hasdata', 'true');
    this.style.backgroundColor = 'white'; //reset width

    msel.style.display = 'inline';
    console.log('not showed');
    msel.dispatchEvent(new Event("change")); //change event to trigger other controls
  });
} //do nothing if text edit enabled and showing the text normal mode


function hidespan(img) {
  event.stopPropagation();
  var contnr = img.parentNode;
  hidespan2(contnr);
}

function hidespan2(deleteable) {
  console.log('hidespan');
  console.log(deleteable.id);

  try {
    deleteable.style.textDecoration = 'line-through';
    deleteable.style.color = "gray";
    deleteable.style.backgroundcolor = "lightgray";
  } catch (_unused) {}

  deleteable.setAttribute('data-hidden', 'true'); // var children = deleteable.childNodes;

  deleteable.querySelectorAll('i').forEach(function (ele) {
    ele.style.display = 'none';
  });
  deleteable.querySelectorAll('span m-text deletable-span m-select').forEach(function (ele) {
    ele.style.textDecoration = 'line-through';
    ele.style.color = "gray";
  });
  /*  children.forEach(element => {
    };
        console.log(element);
        if (element.tagName !== "IMG") {
            //            console.log(element.tagName);
            try {
                element.style.textDecoration = 'line-through';
                element.style.color = "gray";
            } catch { }
        }
    });*/
  //   img.style.display = "none";

  var options = {
    once: true // run click handle ronce only no need to remove it

  }; //click on deleted text to show it again

  deleteable.addEventListener('click', function () {
    //       console.log('showspan click' + this.id + " " + contnr.id);
    event.stopPropagation();
    showspan(deleteable);
  }, options);
}

function showclickhandler(deletable) {}

function showspan(deletable) {
  try {
    deletable.style.backgroundcolor = "beige";
    deletable.style.textDecoration = 'none';
    deletable.style.color = "black";
  } catch (_unused2) {}

  deletable.setAttribute('data-hidden', 'false');
  deletable.querySelectorAll('i').forEach(function (ele) {
    ele.style.display = "inline-block";
  }); // anything inside a deletable-span must be handled according to the deletable properites

  deletable.querySelectorAll('span m-text m-select').forEach(function (ele) {
    try {
      ele.style.textDecoration = 'none';
      if (ele.contentEditable) ele.style.color = "blue";else ele.style.color = "black";
    } catch (_unused3) {}
  }); //fix up inside deleteable's contents if parent is not hidden and the inside one is,

  deletable.querySelectorAll('deletable-span').forEach(function (ele) {
    console.log(ele.id);

    if (ele.id !== deletable.id) {
      try {
        if (ele.getAttribute('data-hidden') === 'false') {// showspan(ele);
        } else hidespan2(ele);
      } catch (_unused4) {}
    }
  });
} //for testing only-->


function getdata(divid) {
  var ele = document.getElementById(divid);
  var data = [];
  data = getdata2(ele, data); // data = data.replace('\n', '').replace('\r', '');

  return data; //    console.log(data);
  //    document.getElementById('output').innerHTML = data;
}

function getdata2(root, data) {
  //    console.log("ele " + root.tagName);
  var eles = root.childNodes;

  if (eles == null) {
    return;
  } //  console.log("rtrt" + eles.length);


  for (var i = 0; i < eles.length; i++) {
    var ele = eles.item(i); //      console.log("rtrt" + ele);

    if (ele === null) {
      //          console.log("rtrt null");
      continue;
    }

    if (ele.tagName === 'deletable-span') {
      try {
        var attr = ele.getAttribute('data-hidden');

        if (attr === 'true') {
          // don't go inside deletable sections
          continue;
        }
      } catch (_unused5) {}
    }

    if (ele.tagName === 'free-text') {
      if (ele.contentEditable || ele.getAttribute('data-save') === 'true') {
        var itemdata = {
          id: ele.id,
          data: ele.innerHTML
        };
        data.push(itemdata);
      }
    } else if (ele.tagName == 'm-select' || ele.tagName === 'mfromapp') {
      var itemdata = {
        id: ele.id,
        data: ele.innerHTML
      };
      data.push(itemdata);
    } else if (ele.tagName.startsWith('chooser')) {
      var attr = ele.getAttribute('data-hasdata');

      if (attr === 'true') {
        var itemdata = {
          id: ele.id,
          data: ele.innerHTML
        };
        data.push(itemdata);
      }
    } else data = getdata2(ele, data);
  }

  return data;
}

var ShowIf = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ShowIf, _HTMLElement);

  var _super = _createSuper(ShowIf);

  function ShowIf() {
    var _this;

    _classCallCheck(this, ShowIf);

    _this = _super.call(this);

    _this.addEventListener("click", function () {
      this.checkShow();
    });

    return _this;
  }

  _createClass(ShowIf, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName == "triggeron") {
        var ele = this;
        this.setChangeListener(newVal, function () {
          ele.checkShow();
        });
      }
    }
  }, {
    key: "setChangeListener",
    value: function setChangeListener(divname, listener) {
      var _this2 = this;

      var div = document.getElementById(divname);

      if (div === null) {
        setTimeout(function () {
          _this2.setChangeListener(divname, listener);
        }, 100); //the element hasn't always been created when we get here first time so use timeout to wait for it
      } else {
        div.addEventListener("blur", listener);
        div.addEventListener("keyup", listener);
        div.addEventListener("paste", listener);
        div.addEventListener("copy", listener);
        div.addEventListener("cut", listener);
        div.addEventListener("delete", listener);
        div.addEventListener("mouseup", listener);
        div.addEventListener("input", listener);
        div.addEventListener("change", listener); //triggered m-select

        this.checkShow();
      }
    }
  }, {
    key: "checkShow",
    value: function checkShow() {
      var _triggeron = this.getAttribute('triggeron');

      var _triggervalue = this.getAttribute('triggervalue');

      var ele = document.getElementById(_triggeron);
      var val = ele.innerHTML;
      if (val === _triggervalue) this.style.display = "inline";else this.style.display = "none";
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['triggeron', 'triggervalue'];
    }
  }]);

  return ShowIf;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('show-if', ShowIf);

var FreeText = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(FreeText, _HTMLElement2);

  var _super2 = _createSuper(FreeText);

  function FreeText() {
    var _this3;

    _classCallCheck(this, FreeText);

    _this3 = _super2.call(this); //this doesn't work  this.contenteditable = true;

    _defineProperty(_assertThisInitialized(_this3), "_placeholder", void 0);

    _defineProperty(_assertThisInitialized(_this3), "_typing", void 0);

    _this3.setAttribute("contenteditable", true);

    return _this3;
  }

  _createClass(FreeText, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName == "placeholder") {
        this._placeholder = newVal;

        if (this.innerHTML.trim() === "") {
          this.innerHTML = this._placeholder;
          this.style.textDecoration = 'underline';
          this.style.textDecorationColor = 'red';
        }
      }

      this.setChangeListener(function () {
        if (!this._typing && this.innerHTML.trim() === "") {
          this.innerHTML = this._placeholder;
          this.style.textDecoration = 'underline';
          this.style.textDecorationColor = 'red';
        } else if (this.innerHTML.trim() !== "") {
          this._typing = false;
          this.style.textDecoration = 'none';
          this.style.textDecorationColor = 'red';
        }
      });
    }
  }, {
    key: "setChangeListener",
    value: function setChangeListener(listener) {
      this.addEventListener("blur", function () {
        if (this.innerHTML.trim() === "") {
          this.innerHTML = this._placeholder;
          this.style.textDecoration = 'underline';
          this.style.textDecorationColor = 'red';
        }
      });
      this.addEventListener("keyup", listener);
      this.addEventListener("paste", listener);
      this.addEventListener("copy", listener);
      this.addEventListener("cut", listener);
      this.addEventListener("delete", listener);
      this.addEventListener("mouseup", listener);
      this.addEventListener("input", listener);
      this.addEventListener("change", listener); //triggered m-select

      this.addEventListener("focus", function () {
        this._typing = true;
        if (this.innerHTML === this._placeholder) this.innerHTML = "   ";
      }); //triggered m-select
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['placeholder'];
    }
  }]);

  return FreeText;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('free-text', FreeText);

var MSelect = /*#__PURE__*/function (_HTMLElement3) {
  _inherits(MSelect, _HTMLElement3);

  var _super3 = _createSuper(MSelect);

  function MSelect() {
    var _this4;

    _classCallCheck(this, MSelect);

    _this4 = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this4), "_placeholder", void 0);

    _this4.classList.add('chooserbutton');

    _this4.setAttribute("data-hasdata", "false");

    _this4.addEventListener('click', function () {
      msel_clicked(this);
    });

    _this4._placeholder = _this4.innerHTML;
    return _this4;
  }

  _createClass(MSelect, [{
    key: "rawvalue",
    value: function rawvalue() {
      if (this.innerHTML == this._placeholder) return "";else return this.innerHTML;
    }
  }]);

  return MSelect;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('m-select', MSelect);

var FixedText = /*#__PURE__*/function (_HTMLElement4) {
  _inherits(FixedText, _HTMLElement4);

  var _super4 = _createSuper(FixedText);

  function FixedText() {
    _classCallCheck(this, FixedText);

    return _super4.call(this);
  }

  _createClass(FixedText, [{
    key: "rawvalue",
    value: function rawvalue() {
      return this.innerHTML;
    }
  }]);

  return FixedText;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('fixed-text', FixedText);

var ChooseDate = /*#__PURE__*/function (_HTMLElement5) {
  _inherits(ChooseDate, _HTMLElement5);

  var _super5 = _createSuper(ChooseDate);

  function ChooseDate() {
    var _this5;

    _classCallCheck(this, ChooseDate);

    _this5 = _super5.call(this);

    _defineProperty(_assertThisInitialized(_this5), "_placeholder", void 0);

    if (_this5.innerHTML.trim() === "") {
      _this5._placeholder = 'Choose Date';
      _this5.innerHTML = 'Choose Date';
    } else {
      _this5._placeholder = _this5.innerHTML;
    }

    _this5.classList.add('chooserbutton');

    _this5.setAttribute("data-hasdata", "false");

    _this5.addEventListener('click', function () {
      window.alert('date chooser'); //   NativeFunction(this.tagName)

      this.setAttribute("data-hasdata", "true");
      this.style.backgroundColor = 'white';
    });

    return _this5;
  }

  _createClass(ChooseDate, [{
    key: "rawvalue",
    value: function rawvalue() {
      if (this.innerHTML == this._placeholder) return "";else return this.innerHTML;
    }
  }]);

  return ChooseDate;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('choose-date', ChooseDate);

var ChoosePerson = /*#__PURE__*/function (_HTMLElement6) {
  _inherits(ChoosePerson, _HTMLElement6);

  var _super6 = _createSuper(ChoosePerson);

  function ChoosePerson() {
    var _this6;

    _classCallCheck(this, ChoosePerson);

    _this6 = _super6.call(this);

    _defineProperty(_assertThisInitialized(_this6), "_placeholder", void 0);

    if (_this6.innerHTML.trim() === "") {
      _this6._placeholder = 'Choose Person';
      _this6.innerHTML = _this6._placeholder;
    } else {
      _this6._placeholder = _this6.innerHTML;
    }

    _this6.classList.add('chooserbutton');

    _this6.setAttribute("data-hasdata", "false");

    _this6.addEventListener('click', function () {
      window.alert('Person'); //   NativeFunction(this.tagName)

      this.setAttribute("data-hasdata", "true");
      this.innerHTML = "Ian bowles";
      this.style.backgroundColor = 'white';
    });

    return _this6;
  }

  _createClass(ChoosePerson, [{
    key: "rawvalue",
    value: function rawvalue() {
      if (this.innerHTML == this._placeholder) return "";else return this.innerHTML;
    }
  }]);

  return ChoosePerson;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('choose-person', ChoosePerson);

var ChooseVehicle = /*#__PURE__*/function (_HTMLElement7) {
  _inherits(ChooseVehicle, _HTMLElement7);

  var _super7 = _createSuper(ChooseVehicle);

  function ChooseVehicle() {
    var _this7;

    _classCallCheck(this, ChooseVehicle);

    _this7 = _super7.call(this);

    _defineProperty(_assertThisInitialized(_this7), "_placeholder", void 0);

    if (_this7.innerHTML.trim() === "") {
      _this7._placeholder = 'Choose Vehicle';
      _this7.innerHTML = _this7._placeholder;
    } else {
      _this7._placeholder = _this7.innerHTML;
    }

    _this7.classList.add('chooserbutton');

    _this7.setAttribute("data-hasdata", "false");

    _this7.addEventListener('click', function () {
      window.alert('Vehicle'); //   NativeFunction(this.tagName)

      this.setAttribute("data-hasdata", "true");
      this.innerHTML = "BASJ862 Volkwagen Jetta";
      this.style.backgroundColor = 'white';
    });

    return _this7;
  }

  _createClass(ChooseVehicle, [{
    key: "rawvalue",
    value: function rawvalue() {
      if (this.innerHTML == this._placeholder) return "";else return this.innerHTML;
    }
  }]);

  return ChooseVehicle;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('choose-vehicle', ChooseVehicle);

var ChooseOfficer = /*#__PURE__*/function (_HTMLElement8) {
  _inherits(ChooseOfficer, _HTMLElement8);

  var _super8 = _createSuper(ChooseOfficer);

  function ChooseOfficer() {
    var _this8;

    _classCallCheck(this, ChooseOfficer);

    _this8 = _super8.call(this);

    _defineProperty(_assertThisInitialized(_this8), "_placeholder", void 0);

    if (_this8.innerHTML.trim() === "") {
      _this8._placeholder = 'Choose Officer';
      _this8.innerHTML = _this8._placeholder;
    } else {
      _this8._placeholder = _this8.innerHTML;
    }

    _this8.classList.add('chooserbutton');

    _this8.setAttribute("data-hasdata", "false");

    _this8.addEventListener('click', function () {
      this.setAttribute("data-hasdata", "true");
      window.alert('Officer'); //   NativeFunction(this.tagName)

      this.innerHTML = "Officer Joe 1234";
      this.style.backgroundColor = 'white';
    });

    return _this8;
  }

  _createClass(ChooseOfficer, [{
    key: "rawvalue",
    value: function rawvalue() {
      if (this.innerHTML == this._placeholder) return "";else return this.innerHTML;
    }
  }]);

  return ChooseOfficer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('choose-officer', ChooseOfficer);

var ChooseLocation = /*#__PURE__*/function (_HTMLElement9) {
  _inherits(ChooseLocation, _HTMLElement9);

  var _super9 = _createSuper(ChooseLocation);

  function ChooseLocation() {
    var _this9;

    _classCallCheck(this, ChooseLocation);

    _this9 = _super9.call(this);

    _defineProperty(_assertThisInitialized(_this9), "_placeholder", void 0);

    if (_this9.innerHTML.trim() === "") {
      _this9._placeholder = 'Choose Location';
      _this9.innerHTML = _this9._placeholder;
    } else {
      _this9._placeholder = _this9.innerHTML;
    }

    _this9.classList.add('chooserbutton');

    _this9.setAttribute("data-hasdata", "false");

    _this9.addEventListener('click', function () {
      window.alert('Location'); //   NativeFunction(this.tagName)

      this.innerHTML = "123 Pineridge Rd, Carp, Ont K0A 1L0";
      this.style.backgroundColor = 'white';
    });

    return _this9;
  }

  _createClass(ChooseLocation, [{
    key: "rawvalue",
    value: function rawvalue() {
      if (this.innerHTML == this._placeholder) return "";else return this.innerHTML;
    }
  }]);

  return ChooseLocation;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('choose-location', ChooseLocation);

var DeletableSpan = /*#__PURE__*/function (_HTMLElement10) {
  _inherits(DeletableSpan, _HTMLElement10);

  var _super10 = _createSuper(DeletableSpan);

  function DeletableSpan() {
    var _this10;

    _classCallCheck(this, DeletableSpan);

    _this10 = _super10.call(this); //           this.contenteditable = false;

    _this10.setAttribute('data-hidden', 'false'); //    let img = document.createElement('img');
    //    img.src = "delete32.png";
    //    img.classList.add('deleteimg');


    var img = document.createElement('i');
    img.classList.add('fas');
    img.classList.add('fa-2x');
    img.classList.add('fa-backspace');
    img.style.color = 'red';
    img.style.verticalAlign = 'middle';

    _this10.appendChild(img);

    img.addEventListener('click', function () {
      hidespan(img);
    });
    return _this10;
  }

  _createClass(DeletableSpan, [{
    key: "rawvalue",
    value: function rawvalue() {
      if (this.innerHTML == this._placeholder) return "";else return this.innerHTML;
    }
  }]);

  return DeletableSpan;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('deletable-span', DeletableSpan);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54701" + '/');

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
},{}]},{},["C:/Users/Usman-417/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","templatedparagraphscripts.js"], null)
//# sourceMappingURL=/templatedparagraphscripts.436dd7ef.js.map