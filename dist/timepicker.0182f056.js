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
})({"js/timepicker.js":[function(require,module,exports) {
var tp = {
  // (A) CREATE TIME PICKER
  instances: [],
  // All time picker instances
  init: function init(wrapper, target) {
    // wrapper - container to generate time picker into
    // target - optional, target input field for inline time pickers
    // (A1) CREATE NEW INSTANCE + "GET ID"
    var id = tp.instances.length;
    tp.instances.push({
      wrap: wrapper
    });
    var inst = tp.instances[id];

    if (target != undefined) {
      inst.target = target;
    } // (A2) TIME PICKER ITSELF


    var picker = document.createElement("div");
    picker.className = "tp";
    inst.wrap.appendChild(picker); // (A3) *THE* BUTTONATOR - HR + MIN + AM/PM

    var buttonator = function buttonator(segment) {
      // Button Container
      var box = document.createElement("div");
      box.className = "tp-box"; // Up Button

      var up = document.createElement("div");
      up.innerHTML = "&#65087;";
      up.className = "tp-up"; // Current Value

      var val = document.createElement("input");
      val.type = "text";
      val.disabled = true;
      val.className = "tp-val";

      if (segment == "hr") {
        val.value = "01";
      } else if (segment == "min") {
        val.value = "00";
      } else {
        val.value = "AM";
      }

      inst[segment] = val; // Down Button

      var down = document.createElement("div");
      down.innerHTML = "&#65088;";
      down.className = "tp-up"; // Button click handlers

      if (segment == "ap") {
        up.addEventListener("click", function () {
          tp.sap(id);
        });
        down.addEventListener("click", function () {
          tp.sap(id);
        });
      } else {
        up.addEventListener("mousedown", function () {
          tp.spin(id, segment, 1);
        });
        down.addEventListener("mousedown", function () {
          tp.spin(id, segment, 0);
        });
        up.addEventListener("mouseup", tp.sspin);
        up.addEventListener("mouseleave", tp.sspin);
        down.addEventListener("mouseup", tp.sspin);
        down.addEventListener("mouseleave", tp.sspin);
      } // Append all the buttons


      box.appendChild(up);
      box.appendChild(val);
      box.appendChild(down);
      picker.appendChild(box);
    };

    buttonator("hr");
    buttonator("min");
    buttonator("ap"); // (A4) OK BUTTON

    var ok = document.createElement("input");
    ok.type = "button";
    ok.value = "OK";
    ok.className = "tp-ok";
    ok.addEventListener("click", function () {
      tp.set(id);
    });
    picker.appendChild(ok);
  },
  // (B) "HOLD TO SPIN" FOR HOUR + MIN
  stimer: null,
  // Spin timer
  ssensitive: 100,
  // lower will spin faster
  spin: function spin(id, segment, direction) {
    if (tp.stimer == null) {
      tp.sid = id;
      tp.sseg = segment;
      tp.smax = segment == "hr" ? 12 : 59;
      tp.smin = segment == "hr" ? 1 : 0;
      tp.sdir = direction;
      tp.hmspin();
      tp.stimer = setInterval(tp.hmspin, tp.ssensitive);
    }
  },
  // (C) STOP HR/MIN SPIN
  sspin: function sspin() {
    if (tp.stimer != null) {
      clearInterval(tp.stimer);
      tp.stimer = null;
    }
  },
  // (D) SPIN HR OR MIN
  sid: null,
  // Instance ID
  sseg: null,
  // Segment to spin
  smax: null,
  // Maximum value (12 for hr, 59 for min)
  smin: null,
  // Minimum value (1 for hr, 0 for min)
  sdir: null,
  // Spin direction
  hmspin: function hmspin() {
    // (D1) CURRENT VALUE
    var box = tp.instances[tp.sid][tp.sseg],
        cv = parseInt(box.value); // (D2) SPIN!

    if (tp.sdir) {
      cv++;
    } else {
      cv--;
    }

    if (cv < tp.smin) {
      cv = tp.smin;
    }

    if (cv > tp.smax) {
      cv = tp.smax;
    }

    if (cv < 10) {
      cv = "0" + cv;
    } // (D3) UPDATE DISPLAY


    box.value = cv;
  },
  // (E) SPIN AM/PM
  sap: function sap(id) {
    // (E1) GET CURRENT VALUE
    var box = tp.instances[id]["ap"],
        cv = box.value; // (E2) SET VALUE

    box.value = cv == "AM" ? "PM" : "AM";
  },
  // (F) SET SELECTED TIME
  set: function set(id) {
    // (F1) GET + FORMAT HH:MM AM/PM
    var inst = tp.instances[id],
        timestamp = tp.instances[id]["hr"].value + ":" + tp.instances[id]["min"].value + " " + tp.instances[id]["ap"].value; // (F2) SET TIMESTAMP

    inst.target.value = timestamp; // (F3) CLOSE TIME PICKER (POPUP ONLY)

    if (id == 0) {
      inst.wrap.classList.remove("show");
    }
  },
  // (G) ATTACH TIME PICKER TO TARGET
  attach: function attach(opt) {
    // target - input field
    // wrap - optional, inline time picker
    // (G1) SET INPUT FIELD READONLY
    var target = document.getElementById(opt.target); //console.log("target",target);

    target.readOnly = true; // (G2) INLINE VERSION - GENERATE TIME PICKER HTML

    if (opt.wrap) {
      tp.init(document.getElementById(opt.wrap), target);
    } // (G3) POPUP VERSION - SHOW POPUP ON CLICK
    else {
      target.addEventListener("click", function () {
        // Get + set popup time
        var cv = this.value;

        if (cv == "") {
          tp.instances[0].hr.value = "01";
          tp.instances[0].min.value = "00";
          tp.instances[0].ap.value = "AM";
        } else {
          tp.instances[0].hr.value = cv.substring(0, 2);
          tp.instances[0].min.value = cv.substring(3, 5);
          tp.instances[0].ap.value = cv.substring(6, 8);
        } // Set target + show popup


        tp.instances[0].target = target;
        tp.instances[0].wrap.classList.add("show");
      });
    }
  }
}; // (H) CREATE "DEFAULT" POPUP TIME PICKER ON LOAD

window.addEventListener("DOMContentLoaded", function () {
  var pop = document.createElement("div");
  document.body.appendChild(pop);
  pop.id = "tp-pop";
  tp.init(pop);
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
},{}]},{},["C:/Users/Usman-417/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/timepicker.js"], null)
//# sourceMappingURL=/timepicker.0182f056.js.map