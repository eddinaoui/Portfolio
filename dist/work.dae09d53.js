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
})({"js/work.js":[function(require,module,exports) {
function cls(f, s, t, d, r) {
  var lines = document.querySelectorAll('#line');
  var nav = document.querySelector('.ii a');

  for (var i = 0; i < lines.length; i++) {
    lines[i].classList.remove(f, s, t, r);
    lines[i].classList.add(d);
  }

  nav.classList.remove(r);
  nav.classList.add(d);
  var l1 = document.querySelector(".l1");
  l1.classList.add(f);
  var l2 = document.querySelector(".l2");
  l2.classList.add(s);
  var l3 = document.querySelector(".l3");
  l3.classList.add(t);
}

window.addEventListener('scroll', function () {
  var w = this.pageYOffset;
  console.log('Yoffset: ' + w);

  if (w < 200) {
    var fe = 'up';
    var se = 'down';
    var te = 'down';
    var ad = 'white';
    var re = 'black';
    window.localStorage.setItem('o1', ad);
    window.localStorage.setItem('o2', re);
    window.localStorage.setItem('pr', fe);
    window.localStorage.setItem('se', se);
    window.localStorage.setItem('te', te);
  } else if (w > 200 && w < 900) {
    var fe = 'down';
    var se = 'up';
    var te = 'down';
    var ad = 'black';
    var re = 'white';
    window.localStorage.setItem('o1', ad);
    window.localStorage.setItem('o2', re);
    window.localStorage.setItem('pr', fe);
    window.localStorage.setItem('se', se);
    window.localStorage.setItem('te', te);
  } else {
    var fe = 'down';
    var se = 'down';
    var te = 'up';
    var ad = 'black';
    var re = 'white';
    window.localStorage.setItem('o1', ad);
    window.localStorage.setItem('o2', re);
    window.localStorage.setItem('pr', fe);
    window.localStorage.setItem('se', se);
    window.localStorage.setItem('te', te);
  }

  var ad = localStorage.getItem('o1');
  var re = localStorage.getItem('o2');
  var pr = localStorage.getItem('pr');
  var sr = localStorage.getItem('se');
  var tr = localStorage.getItem('te');
  cls(pr, sr, tr, ad, re);
});
var projects = [{
  left: '0%',
  width: '3vw',
  title: 'Linear',
  info: 'Communicated with key stakeholders throughout the project; trained staff across departments once the project was complete',
  img: './imgs/projects/project11.png',
  img2: './imgs/projects/project12.png',
  img3: './imgs/projects/project13.png'
}, {
  left: '20%',
  width: '6vw',
  title: 'Mtravelers',
  info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tenetur dignissimos quia fuga doloremque rem nam numquam adipisci perspiciatis, ad optio dicta quasi cumque illo voluptatum expedita laudantium. Labore, sed earum laborum cum sapiente nihil sit facere temporibus magnam atque ab libero eum nesciunt. Ad nulla recusandae officiis voluptatum aut.',
  img: './imgs/projects/project21.png',
  img2: './imgs/projects/project22.png',
  img3: './imgs/projects/project23.png'
}, {
  left: '40%',
  width: '9vw',
  title: 'Crown',
  info: 'Communicated with key stakeholders throughout the project; trained staff across departments once the project was complete',
  img: './imgs/projects/project31.png',
  img2: './imgs/projects/project32.png',
  img3: './imgs/projects/project23.png'
}, {
  left: '60%',
  width: '12vw',
  title: 'Project-4',
  info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tenetur dignissimos quia fuga doloremque rem nam numquam adipisci perspiciatis, ad optio dicta quasi cumque illo voluptatum expedita laudantium. Labore, sed earum laborum cum sapiente nihil sit facere temporibus magnam atque ab libero eum nesciunt. Ad nulla recusandae officiis voluptatum aut.',
  img: './imgs/scott-webb-2aoVQXwLf3g-unsplash.jpg',
  img2: './imgs/bigwave_japan-new1.png',
  img3: './imgs/sergei-a-xdj_w3w6dMU-unsplash.jpg'
}, {
  left: '80%',
  width: '15vw',
  title: 'Project-5',
  info: 'Communicated with key stakeholders throughout the project; trained staff across departments once the project was complete',
  img: './imgs/sergei-a-xdj_w3w6dMU-unsplash.jpg',
  img2: './imgs/bigwave_japan-new1.png',
  img3: './imgs/scott-webb-2aoVQXwLf3g-unsplash.jpg'
}]; // var fhrStyle= getComputedStyle(fhr);
// var fhrStyleNum=parseFloat(fhrStyle.width)
// let sN=fhrStyleNum/projects.length;
// let currentImgD=0;
// function val(){
//     var Lalbum=[{a:'block',b:'none',c:'none',},{a:'none',b:'block',c:'none',},{a:'none',b:'none',c:'block',}];
//     var disimag=Lalbum[currentImgD];
//     currentImgD++;
//     if(currentImgD>Lalbum.length-1){
//         currentImgD=0
//     }
//     document.getElementById('mg').style.display=disimag.a;
//     document.getElementById('mg2').style.display=disimag.b;
//     document.getElementById('mg3').style.display=disimag.c;
//     //$('#mg').delay(3500)+disimag.aa;
//     // var imgp=document.querySelectorAll('.imgsw');
//     // for(let i=0;i<imgp.length;i++){
//     //     $(imgp[i]).ready(function(){
//     //     })
//     //     imgp[i].animate([
//     //         {opacity:0},
//     //         {opacity:1}
//     //     ],{
//     //         duration:500,
//     //         iterations:easeInOut
//     //     })
//     //};
//     // document.getElementById('mg').classList.add(disimag.aa);
//     // document.getElementById('mg2').classList.add(disimag.ba);
//     // document.getElementById('mg3').classList.add(disimag.ca);
// }
// function yeeeah(){
//     var nterval;
//     nterval=setInterval(val,6000)
//     document.querySelector('.imgHW').addEventListener('mouseover',function(){
//         clearInterval(nterval)
//     })
//     document.querySelector('.imgHW').addEventListener('mouseleave',function(){
//         nterval=setInterval(val,6000)
//     })
// }
// window.addEventListener('load',yeeeah())

var currentPro = 0;

function pro() {
  var cur = projects[currentPro];
  document.getElementById('ttl').textContent = cur.title;
  document.getElementById('txt').textContent = cur.info;
  document.getElementById('mg').src = cur.img;
  console.log("src :" + document.getElementById('mg').src); // document.getElementById('mg2').src=cur.img2;
  // document.getElementById('mg3').src=cur.img3;

  document.getElementById('sHr').style.width = cur.width; //yeeeah()
}

function plus() {
  currentPro++;

  if (currentPro > projects.length - 1) {
    currentPro = 0;
  }

  pro();
}

function mins() {
  currentPro--;

  if (currentPro < 0) {
    currentPro = 4;
  }

  pro();
}

function arrow(target) {
  target.animate([{
    transform: 'scale(0.7) translate(-40%,-50%)'
  }, {
    transform: 'scale(1.2)  translate(-30%,-40%)'
  }, {
    opacity: '40%'
  }, {
    transform: 'scale(1.5)  translate(-20%,-25%)'
  }, {
    opacity: '20%'
  }, {
    transform: 'scale(2)  translate(-20%,-20%)'
  }, {
    opacity: '0%'
  }], {
    duration: 400
  });
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    mins();
    arrow(document.getElementById('prev'));
  } else if (e.keyCode == '39') {
    plus();
    arrow(document.getElementById('next'));
  }
} // function imgOH(target,dur){
//     target.animate([
//         {background:'rgba(255,255,255,.1)',backdropFilter:'blur(4px)',color:'var(--color-2)'},
//         {background:'transparent',backdropFilter:'none',color:'transparent'},
//     ],{
//         duration:dur
//     })
// }
// var picContainer=document.getElementById('imgHW');
// picContainer.addEventListener('mouseover',function(){
//     picContainer.style.transform=' scale(1.5) translateX(-20%)';
//     imgOH(document.getElementById('prevImg'),1000)
//     imgOH(document.getElementById('nextImg'),1000)
// })
// picContainer.addEventListener('mouseleave',function(){
//     picContainer.style.transform='translate(-2%,-2%)';
// })
// const albume=[
//     {
//         lefte:'-200%',
//     },
//     {
//         lefte:'-100%'
//     },
//     {
//         lefte:'0%'
//     }
// ]
// let currentLeft=1;
// function lefts(){
//     var left=albume[currentLeft]
//     document.getElementById('imgsF').style.transitionDuration=".5s"
//     document.getElementById('imgsF').style.left=left.lefte
// }
// document.getElementById('nextImg').addEventListener('click',function(){
//     currentLeft++;
//     if(currentLeft>albume.length-1){
//         currentLeft=0
//     }
//     lefts()
// })
// document.getElementById('prevImg').addEventListener('click',function(){
//     currentLeft--;
//     if(currentLeft<0){
//         currentLeft=2
//     }
//     lefts()
// })


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

var thumb = document.getElementById('sHr');
window.addEventListener('scroll', function () {
  if (isElementInViewport(thumb)) {
    $(thumb).css('width', '3vw');
  } else {
    $(thumb).css('width', '15vw');
  }
});
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61767" + '/');

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
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/work.js"], null)
//# sourceMappingURL=/work.dae09d53.js.map