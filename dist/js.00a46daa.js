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
})({"js/index.js":[function(require,module,exports) {
var _EditorJS;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * To initialize the Editor, create a new instance with configuration object
 * @see docs/installation.md for mode details
 */
var editor = new EditorJS((_EditorJS = {
  readOnly: false,
  holder: "editorjs",

  /**
   * Common Inline Toolbar settings
   * - if true (or not specified), the order from 'tool' property will be used
   * - if an array of tool names, this order will be used
   */
  inlineToolbar: ["link", "marker", "bold", "italic"]
}, _defineProperty(_EditorJS, "inlineToolbar", true), _defineProperty(_EditorJS, "tools", {
  /**
   * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
    image: {
      class: ImageTool,
      config: {
          endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          }
      }
  },   */
  image: SimpleImage,
  templatedparagraph: {
    class: TemplatedParagraph,
    config: {}
  },
  attaches: {
    class: AttachesTool,
    config: {
      endpoint: "http://localhost:8008/uploadFile"
    }
  }
}), _defineProperty(_EditorJS, "data", {
  blocks: [{
    type: "paragraph",
    data: {
      text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
    }
  }, {
    type: "paragraph",
    data: {
      text: "Another Paragraph"
    }
  }]
}), _defineProperty(_EditorJS, "onReady", function onReady() {
  saveButton.click();
}), _defineProperty(_EditorJS, "onChange", function onChange(api, block) {
  console.log("something changed", block);
}), _EditorJS));
/**
 * Saving button
 */

var saveButton = document.getElementById("saveButton");
var blockButton = document.getElementById("blockButton");
var imageButton = document.getElementById("imageButton");
var paraButton = document.getElementById("paraButton");
var fileButton = document.getElementById("fileButton");
/**
 * Toggle read-only button
 */

var toggleReadOnlyButton = document.getElementById("toggleReadOnlyButton");
var readOnlyIndicator = document.getElementById("readonly-state");
/**
 * Saving example
 */

saveButton.addEventListener("click", function () {
  editor.save().then(function (savedData) {
    //   cPreview.show(savedData, document.getElementById("output"));
    console.log(savedData);
    blockdata = JSON.stringify(savedData, null, 4);
    document.getElementById("jsonData").innerHTML = blockdata; // Native("saveCallback", savedData);
  }).catch(function (error) {
    console.error("Saving error", error);
  });
});
var templatedata = {
  text: " some text"
};
/*templatedata.text = `
                <div class="ce-example-border">
                    <free-text>this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. t
his is a large block of editable text. this is a large block of editable text. this is a large block of editable text.
this is a large block of editable text. </free-text>
                    <m-select id="aaa" choices='aaa|bbb|ccc' multiple >multiple choice field </m-select>
                    fixed text
                    <m-select id="bbb" onclick='msel_clicked(this)' choices='aaa|bbb|ccc'>choice field </m-select>
                    <m-select id="ccc" onclick='msel_clicked(this)' choices='aaa|bbb|ccc'>choice field</m-select>
                    postfix
                    <p><deletable-span id=d1>
                        this is a deletable paragraph with some editable text and some fixed text and a deletable word inside the deletable paragraph
                          <free-text  placeholder='type something here placeholder'></free-text>
                        more   deleteable fixed text
                            <deletable-span id=d2>A deleteable word</deletable-span>
                   some extra words here</deletable-span></p>
                   </br><m-datenow id="ddd">Date field</m-datenow></br>
                   </br><m-date id="ddd">Date field</m-date>
                   <m-time id="time">
                   <input type="text"  id="timepicker" value="" />
                    </m-time>
                           
        <dom-bind>
          <template is="dom-bind">
            <datetime-picker
              datetime="{{datetime}}"
              date="{{date}}"
              default="2021-08-12"
            ></datetime-picker>
          </template>
        </dom-bind></br></br>

</br><choose-date> </choose-date/> <choose-person/></choose-person><choose-vehicle></choose-vehicle>
<choose-officer></choose-officer/> <choose-location></choose-location/>
<p>was clothing removed <m-select id="q1" choices='Yes|No'>Yes/No</m-select>
<p><show-if  triggervalue='Yes' triggeron='q1'>What items were removed? <free-text style='width:100px'>type here</free-text></show-if></p>
<p>Type Yes here to trigger a new field ->   <free-text id='q2'>Test</free-text>
<p><show-if  triggervalue='Yes' triggeron='q2'>Type more data here <free-text style='width:100px' placeholder='type something here placeholder'></free-text></show-if></p>
             </div>
`;*/

var templateHTMLData = "";
templateHTMLData += "<div class='ce-example-border'>";
templateHTMLData += "<free-text id='text-free'>this is a large block of editable text</free-text></br></br>";
templateHTMLData += "<m-select id='person' choices='Usman|Ian|Mark' multiple >multiple choice field </m-select>";
templateHTMLData += "<m-select id='bbb' onclick='msel_clicked(this)' choices='aaa|bbb|ccc'>choice field </m-select>";
templateHTMLData += "<m-select id='ccc' onclick='msel_clicked(this)' choices='aaa|bbb|ccc'>choice field</m-select>";
templateHTMLData += "<m-number class='textbox' id='number' type='number' min='2' max='5'></m-number></br></br>";
templateHTMLData += "<p><deletable-span id=d1>this is a deletable paragraph with some editable text and some fixed text and a deletable word inside the deletable paragraph";
templateHTMLData += "<free-text  placeholder='type something here placeholder'></free-text> more   deleteable fixed text"; //templateHTMLData += "<deletable-span id=d2>A deleteable word</deletable-span>some extra words here</deletable-span></p>";

templateHTMLData += "</deletable-span><deletable-span id=d2>A deleteable word</deletable-span></p>";
templateHTMLData += "<m-datenow id='m_datenow_field'>Date field</m-datenow></br></br>";
templateHTMLData += "<m-date id='m_date_field'>Date field</m-date>";
templateHTMLData += "<m-time id='time'>";
templateHTMLData += "<input type='text' id='timepicker' value='' />";
templateHTMLData += "</m-time>";
templateHTMLData += "<dom-bind>";
templateHTMLData += "<template is='dom-bind'>"; //templateHTMLData += "<datetime-picker id='datetime_field' datetime='{{datetime}}' date='{{date}}' default='2021-08-12'></datetime-picker>";

templateHTMLData += "</template>";
templateHTMLData += "</dom-bind>";
templateHTMLData += "<choose-date> </choose-date/>";
templateHTMLData += "</br></br>";
templateHTMLData += "<choose-person onclick='choose_person(this)' id='choose_person'/></choose-person>";
templateHTMLData += "<choose-vehicle onclick='choose_vehicle(this)' id='choose_vehicle'></choose-vehicle>";
templateHTMLData += "<choose-officer onclick='choose_officer(this)' id='choose_officer'></choose-officer/>";
templateHTMLData += "<choose-location onclick='choose_location(this)' id='choose_location'></choose-location/>";
templateHTMLData += "<p>Was clothing removed <m-select id='q1' choices='Yes|No'>Yes/No</m-select></p>";
templateHTMLData += "<p class='showif_parent_p triggeron_q1'><show-if triggervalue='Yes' id='q2' triggeron='q1'>What items were removed? <free-text style='width:100px'>type here</free-text></show-if></p>";
templateHTMLData += "<p>Type Yes here to trigger a new field ->   <free-text id='q3'>Test</free-text>";
templateHTMLData += "<p class='showif_parent_p triggeron_q3'><show-if  triggervalue='Yes' triggeron='q3' id='q4'>Type more data here <free-text style='width:100px' placeholder='type something here placeholder'></free-text></show-if></p>";
templateHTMLData += "</div>";
templatedata.text = templateHTMLData;
blockButton.addEventListener("click", function () {
  //window.alert( editor.blocks, data);
  var index = editor.blocks.getBlocksCount();
  editor.blocks.insert("templatedparagraph", templatedata, null, index, true); // attach time picker loading

  tp.attach({
    target: "timepicker"
  });
});
paraButton.addEventListener("click", function () {
  //window.alert( editor.blocks, data);
  var index = editor.blocks.getBlocksCount();
  var text = {
    text: "new paragraph"
  };
  editor.blocks.insert("paragraph", text, null, index, true);
});
imageButton.addEventListener("click", function () {
  //window.alert( editor.blocks, data);
  // Native("addAttachment");
  var index = editor.blocks.getBlocksCount();
  var text = {
    caption: "caption",
    url: "http://ianb.ca/Photos/P1000615.JPG"
  };
  console.log("Imgtext", text);
  editor.blocks.insert("image", text, null, index, true);
});
fileButton.addEventListener("click", function () {
  //window.alert( editor.blocks, data);
  // Native("addAttachment");
  console.log("clicked");
  var fileupload = document.getElementById("FileUpload1");
  var filePath = document.getElementById("spnFilePath");

  fileupload.onchange = function () {
    var fileName = fileupload.value.split("\\")[fileupload.value.split("\\").length - 1];
    filePath.innerHTML = "<b>Selected File: </b>" + fileName;
  };
});

function addBlock(type, data) {
  var index = editor.blocks.getBlocksCount(); // console("index",editor.blocks.getBlocksCount())

  editor.blocks.insert(type, data, null, index, true);
}
/**
 * Toggle read-only example
 */


toggleReadOnlyButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var readOnlyState;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return editor.readOnly.toggle();

        case 2:
          readOnlyState = _context.sent;
          readOnlyIndicator.textContent = readOnlyState ? "On" : "Off";

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

function hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
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
},{}]},{},["C:/Users/Usman-417/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map