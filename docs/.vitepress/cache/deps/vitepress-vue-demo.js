import {
  Comment,
  Fragment,
  Teleport,
  Text,
  Transition,
  cloneVNode,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  inject,
  isRef,
  isVNode,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeMount,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onScopeDispose,
  openBlock,
  provide,
  readonly,
  ref,
  render,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReactive,
  shallowRef,
  toDisplayString,
  toRef,
  unref,
  vShow,
  warn,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-2H2ON2PG.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/.pnpm/vitepress-vue-demo@1.0.10_typescript@5.8.3/node_modules/vitepress-vue-demo/dist/index.js
var import_path = __toESM(require_path());
var import_fs = __toESM(require_fs());
function Kr(e, t, n) {
  function o(p) {
    return p.trim().split(" ", 2)[0] === t;
  }
  function r(p, g, v, c, h) {
    return p[g].nesting === 1 && p[g].attrJoin("class", t), h.renderToken(p, g, v, c, h);
  }
  n = n || {};
  const a = 3, s = n.marker || ":", i = s.charCodeAt(0), l = s.length, u = n.validate || o, m = n.render || r;
  function y(p, g, v, c) {
    let h, d = false, _ = p.bMarks[g] + p.tShift[g], C = p.eMarks[g];
    if (i !== p.src.charCodeAt(_))
      return false;
    for (h = _ + 1; h <= C && s[(h - _) % l] === p.src[h]; h++)
      ;
    const w = Math.floor((h - _) / l);
    if (w < a)
      return false;
    h -= (h - _) % l;
    const T = p.src.slice(_, h), S = p.src.slice(h, C);
    if (!u(S, T))
      return false;
    if (c)
      return true;
    let b = g;
    for (; b++, !(b >= v || (_ = p.bMarks[b] + p.tShift[b], C = p.eMarks[b], _ < C && p.sCount[b] < p.blkIndent)); )
      if (i === p.src.charCodeAt(_) && !(p.sCount[b] - p.blkIndent >= 4)) {
        for (h = _ + 1; h <= C && s[(h - _) % l] === p.src[h]; h++)
          ;
        if (!(Math.floor((h - _) / l) < w) && (h -= (h - _) % l, h = p.skipSpaces(h), !(h < C))) {
          d = true;
          break;
        }
      }
    const P = p.parentType, R = p.lineMax;
    p.parentType = "container", p.lineMax = b;
    const A = p.push("container_" + t + "_open", "div", 1);
    A.markup = T, A.block = true, A.info = S, A.map = [g, b], p.md.block.tokenize(p, g + 1, b);
    const F = p.push("container_" + t + "_close", "div", -1);
    return F.markup = p.src.slice(_, h), F.block = true, p.parentType = P, p.lineMax = R, p.line = b + (d ? 1 : 0), true;
  }
  e.block.ruler.before("fence", "container_" + t, y, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  }), e.renderer.rules["container_" + t + "_open"] = m, e.renderer.rules["container_" + t + "_close"] = m;
}
var Bc = (e, t) => {
  e.use(Kr, "demo", {
    validate: (n) => n.trim().match(/^demo\s*(.*)$/),
    render(n, o) {
      const r = n[o];
      if (r.nesting === 1) {
        const a = n[o + 2].content, s = import_path.default.resolve((t == null ? void 0 : t.root) || "docs", a), i = import_fs.default.readFileSync(s, "utf-8"), l = a.split(".")[0].replaceAll("/", "-"), u = a.split(".")[1];
        return `<DemoContainer code="${encodeURIComponent(
          e.render(`\`\`\` ${u}
${i}\`\`\``)
        )}" :expand="${r.info.includes(
          "expand"
        )}">
        <template #source><${l}/></template>`;
      } else
        return `</DemoContainer>
`;
    }
  });
};
var Co = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
var Ur = {};
var Vr = {
  t: "1725520199624",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3954"
};
function Wr(e, t) {
  return openBlock(), createElementBlock("svg", Vr, t[0] || (t[0] = [
    createBaseVNode("path", {
      d: "M300.224 224L32 525.76l268.224 301.76 71.776-63.776-211.552-237.984 211.552-237.984zM711.744 224L640 287.776l211.552 237.984L640 763.744l71.744 63.776 268.256-301.76z",
      "p-id": "3955",
      fill: "currentColor"
    }, null, -1)
  ]));
}
var qr = Co(Ur, [["render", Wr]]);
var Gr = {};
var Zr = {
  t: "1725520994395",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4929"
};
function Jr(e, t) {
  return openBlock(), createElementBlock("svg", Zr, t[0] || (t[0] = [
    createBaseVNode("path", {
      d: "M832 128c-12.8-76.8-76.8-128-160-128h-448C102.4 0 0 102.4 0 224v448c0 76.8 57.6 140.8 128 160 12.8 76.8 76.8 128 160 128h512c89.6 0 160-70.4 160-160v-512c0-76.8-57.6-140.8-128-160zM64 672v-448C64 134.4 134.4 64 224 64h448c44.8 0 76.8 25.6 89.6 64H288C198.4 128 128 198.4 128 288v473.6c-38.4-12.8-64-44.8-64-89.6z m832 128c0 51.2-44.8 96-96 96h-512c-51.2 0-96-44.8-96-96v-512C192 236.8 236.8 192 288 192h512c51.2 0 96 44.8 96 96v512z",
      fill: "currentColor",
      "p-id": "4930"
    }, null, -1)
  ]));
}
var Yr = Co(Gr, [["render", Jr]]);
var fe = (e, t, { checkForDefaultPrevented: n = true } = {}) => (r) => {
  const a = e == null ? void 0 : e(r);
  if (n === false || !a)
    return t == null ? void 0 : t(r);
};
var Nn;
var G = typeof window < "u";
var Qr = (e) => typeof e == "string";
var To = () => {
};
var Xr = G && ((Nn = window == null ? void 0 : window.navigator) == null ? void 0 : Nn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Zt(e) {
  return typeof e == "function" ? e() : unref(e);
}
function ea(e) {
  return e;
}
function Ct(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function ta(e, t = true) {
  getCurrentInstance() ? onMounted(e) : t ? e() : nextTick(e);
}
function na(e, t, n = {}) {
  const {
    immediate: o = true
  } = n, r = ref(false);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    r.value = false, s();
  }
  function l(...u) {
    s(), r.value = true, a = setTimeout(() => {
      r.value = false, a = null, e(...u);
    }, Zt(t));
  }
  return o && (r.value = true, G && l()), Ct(i), {
    isPending: readonly(r),
    start: l,
    stop: i
  };
}
function he(e) {
  var t;
  const n = Zt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
var Jt = G ? window : void 0;
function vt(...e) {
  let t, n, o, r;
  if (Qr(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Jt) : [t, n, o, r] = e, !t)
    return To;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((m) => m()), a.length = 0;
  }, i = (m, y, p, g) => (m.addEventListener(y, p, g), () => m.removeEventListener(y, p, g)), l = watch(() => [he(t), Zt(r)], ([m, y]) => {
    s(), m && a.push(...n.flatMap((p) => o.map((g) => i(m, p, g, y))));
  }, { immediate: true, flush: "post" }), u = () => {
    l(), s();
  };
  return Ct(u), u;
}
var $n = false;
function oa(e, t, n = {}) {
  const { window: o = Jt, ignore: r = [], capture: a = true, detectIframe: s = false } = n;
  if (!o)
    return;
  Xr && !$n && ($n = true, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", To)));
  let i = true;
  const l = (p) => r.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((v) => v === p.target || p.composedPath().includes(v));
    {
      const v = he(g);
      return v && (p.target === v || p.composedPath().includes(v));
    }
  }), m = [
    vt(o, "click", (p) => {
      const g = he(e);
      if (!(!g || g === p.target || p.composedPath().includes(g))) {
        if (p.detail === 0 && (i = !l(p)), !i) {
          i = true;
          return;
        }
        t(p);
      }
    }, { passive: true, capture: a }),
    vt(o, "pointerdown", (p) => {
      const g = he(e);
      g && (i = !p.composedPath().includes(g) && !l(p));
    }, { passive: true }),
    s && vt(o, "blur", (p) => {
      var g;
      const v = he(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => m.forEach((p) => p());
}
function ra(e, t = false) {
  const n = ref(), o = () => n.value = !!e();
  return o(), ta(o, t), n;
}
var Rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Fn = "__vueuse_ssr_handlers__";
Rn[Fn] = Rn[Fn] || {};
var Mn = Object.getOwnPropertySymbols;
var aa = Object.prototype.hasOwnProperty;
var sa = Object.prototype.propertyIsEnumerable;
var ia = (e, t) => {
  var n = {};
  for (var o in e)
    aa.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Mn)
    for (var o of Mn(e))
      t.indexOf(o) < 0 && sa.call(e, o) && (n[o] = e[o]);
  return n;
};
function la(e, t, n = {}) {
  const o = n, { window: r = Jt } = o, a = ia(o, ["window"]);
  let s;
  const i = ra(() => r && "ResizeObserver" in r), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = watch(() => he(e), (y) => {
    l(), i.value && r && y && (s = new ResizeObserver(t), s.observe(y, a));
  }, { immediate: true, flush: "post" }), m = () => {
    l(), u();
  };
  return Ct(m), {
    isSupported: i,
    stop: m
  };
}
var kn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(kn || (kn = {}));
var ua = Object.defineProperty;
var Ln = Object.getOwnPropertySymbols;
var ca = Object.prototype.hasOwnProperty;
var fa = Object.prototype.propertyIsEnumerable;
var Dn = (e, t, n) => t in e ? ua(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var da = (e, t) => {
  for (var n in t || (t = {}))
    ca.call(t, n) && Dn(e, n, t[n]);
  if (Ln)
    for (var n of Ln(t))
      fa.call(t, n) && Dn(e, n, t[n]);
  return e;
};
var pa = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
da({
  linear: ea
}, pa);
Object.freeze({});
Object.freeze([]);
var Bt = () => {
};
var va = Object.prototype.hasOwnProperty;
var Bn = (e, t) => va.call(e, t);
var ma = Array.isArray;
var ye = (e) => typeof e == "function";
var Le = (e) => typeof e == "string";
var Yt = (e) => e !== null && typeof e == "object";
var ga = typeof global == "object" && global && global.Object === Object && global;
var ha = typeof self == "object" && self && self.Object === Object && self;
var Qt = ga || ha || Function("return this")();
var _e = Qt.Symbol;
var So = Object.prototype;
var ya = So.hasOwnProperty;
var ba = So.toString;
var Ge = _e ? _e.toStringTag : void 0;
function _a(e) {
  var t = ya.call(e, Ge), n = e[Ge];
  try {
    e[Ge] = void 0;
    var o = true;
  } catch {
  }
  var r = ba.call(e);
  return o && (t ? e[Ge] = n : delete e[Ge]), r;
}
var wa = Object.prototype;
var Ea = wa.toString;
function Oa(e) {
  return Ea.call(e);
}
var Ca = "[object Null]";
var Ta = "[object Undefined]";
var jn = _e ? _e.toStringTag : void 0;
function Xt(e) {
  return e == null ? e === void 0 ? Ta : Ca : jn && jn in Object(e) ? _a(e) : Oa(e);
}
function en(e) {
  return e != null && typeof e == "object";
}
var Sa = "[object Symbol]";
function tn(e) {
  return typeof e == "symbol" || en(e) && Xt(e) == Sa;
}
function Pa(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var ot = Array.isArray;
var xa = 1 / 0;
var zn = _e ? _e.prototype : void 0;
var Hn = zn ? zn.toString : void 0;
function Po(e) {
  if (typeof e == "string")
    return e;
  if (ot(e))
    return Pa(e, Po) + "";
  if (tn(e))
    return Hn ? Hn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -xa ? "-0" : t;
}
function ht(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ia(e) {
  return e;
}
var Aa = "[object AsyncFunction]";
var Na = "[object Function]";
var $a = "[object GeneratorFunction]";
var Ra = "[object Proxy]";
function Fa(e) {
  if (!ht(e))
    return false;
  var t = Xt(e);
  return t == Na || t == $a || t == Aa || t == Ra;
}
var Ft = Qt["__core-js_shared__"];
var Kn = function() {
  var e = /[^.]+$/.exec(Ft && Ft.keys && Ft.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ma(e) {
  return !!Kn && Kn in e;
}
var ka = Function.prototype;
var La = ka.toString;
function Da(e) {
  if (e != null) {
    try {
      return La.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ba = /[\\^$.*+?()[\]{}|]/g;
var ja = /^\[object .+?Constructor\]$/;
var za = Function.prototype;
var Ha = Object.prototype;
var Ka = za.toString;
var Ua = Ha.hasOwnProperty;
var Va = RegExp(
  "^" + Ka.call(Ua).replace(Ba, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wa(e) {
  if (!ht(e) || Ma(e))
    return false;
  var t = Fa(e) ? Va : ja;
  return t.test(Da(e));
}
function qa(e, t) {
  return e == null ? void 0 : e[t];
}
function nn(e, t) {
  var n = qa(e, t);
  return Wa(n) ? n : void 0;
}
function Ga(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Za = 800;
var Ja = 16;
var Ya = Date.now;
function Qa(e) {
  var t = 0, n = 0;
  return function() {
    var o = Ya(), r = Ja - (o - n);
    if (n = o, r > 0) {
      if (++t >= Za)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Xa(e) {
  return function() {
    return e;
  };
}
var yt = function() {
  try {
    var e = nn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
var es = yt ? function(e, t) {
  return yt(e, "toString", {
    configurable: true,
    enumerable: false,
    value: Xa(t),
    writable: true
  });
} : Ia;
var ts = Qa(es);
var ns = 9007199254740991;
var os = /^(?:0|[1-9]\d*)$/;
function xo(e, t) {
  var n = typeof e;
  return t = t ?? ns, !!t && (n == "number" || n != "symbol" && os.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function rs(e, t, n) {
  t == "__proto__" && yt ? yt(e, t, {
    configurable: true,
    enumerable: true,
    value: n,
    writable: true
  }) : e[t] = n;
}
function Io(e, t) {
  return e === t || e !== e && t !== t;
}
var as = Object.prototype;
var ss = as.hasOwnProperty;
function is(e, t, n) {
  var o = e[t];
  (!(ss.call(e, t) && Io(o, n)) || n === void 0 && !(t in e)) && rs(e, t, n);
}
var Un = Math.max;
function ls(e, t, n) {
  return t = Un(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = Un(o.length - t, 0), s = Array(a); ++r < a; )
      s[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(s), Ga(e, this, i);
  };
}
var us = 9007199254740991;
function cs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= us;
}
var fs = "[object Arguments]";
function Vn(e) {
  return en(e) && Xt(e) == fs;
}
var Ao = Object.prototype;
var ds = Ao.hasOwnProperty;
var ps = Ao.propertyIsEnumerable;
var No = Vn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Vn : function(e) {
  return en(e) && ds.call(e, "callee") && !ps.call(e, "callee");
};
var vs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var ms = /^\w*$/;
function gs(e, t) {
  if (ot(e))
    return false;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || tn(e) ? true : ms.test(e) || !vs.test(e) || t != null && e in Object(t);
}
var Xe = nn(Object, "create");
function hs() {
  this.__data__ = Xe ? Xe(null) : {}, this.size = 0;
}
function ys(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var bs = "__lodash_hash_undefined__";
var _s = Object.prototype;
var ws = _s.hasOwnProperty;
function Es(e) {
  var t = this.__data__;
  if (Xe) {
    var n = t[e];
    return n === bs ? void 0 : n;
  }
  return ws.call(t, e) ? t[e] : void 0;
}
var Os = Object.prototype;
var Cs = Os.hasOwnProperty;
function Ts(e) {
  var t = this.__data__;
  return Xe ? t[e] !== void 0 : Cs.call(t, e);
}
var Ss = "__lodash_hash_undefined__";
function Ps(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Xe && t === void 0 ? Ss : t, this;
}
function Ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ae.prototype.clear = hs;
Ae.prototype.delete = ys;
Ae.prototype.get = Es;
Ae.prototype.has = Ts;
Ae.prototype.set = Ps;
function xs() {
  this.__data__ = [], this.size = 0;
}
function Tt(e, t) {
  for (var n = e.length; n--; )
    if (Io(e[n][0], t))
      return n;
  return -1;
}
var Is = Array.prototype;
var As = Is.splice;
function Ns(e) {
  var t = this.__data__, n = Tt(t, e);
  if (n < 0)
    return false;
  var o = t.length - 1;
  return n == o ? t.pop() : As.call(t, n, 1), --this.size, true;
}
function $s(e) {
  var t = this.__data__, n = Tt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Rs(e) {
  return Tt(this.__data__, e) > -1;
}
function Fs(e, t) {
  var n = this.__data__, o = Tt(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ue.prototype.clear = xs;
Ue.prototype.delete = Ns;
Ue.prototype.get = $s;
Ue.prototype.has = Rs;
Ue.prototype.set = Fs;
var Ms = nn(Qt, "Map");
function ks() {
  this.size = 0, this.__data__ = {
    hash: new Ae(),
    map: new (Ms || Ue)(),
    string: new Ae()
  };
}
function Ls(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function St(e, t) {
  var n = e.__data__;
  return Ls(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ds(e) {
  var t = St(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Bs(e) {
  return St(this, e).get(e);
}
function js(e) {
  return St(this, e).has(e);
}
function zs(e, t) {
  var n = St(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function $e(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
$e.prototype.clear = ks;
$e.prototype.delete = Ds;
$e.prototype.get = Bs;
$e.prototype.has = js;
$e.prototype.set = zs;
var Hs = "Expected a function";
function on(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Hs);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (on.Cache || $e)(), n;
}
on.Cache = $e;
var Ks = 500;
function Us(e) {
  var t = on(e, function(o) {
    return n.size === Ks && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Vs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var Ws = /\\(\\)?/g;
var qs = Us(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Vs, function(n, o, r, a) {
    t.push(r ? a.replace(Ws, "$1") : o || n);
  }), t;
});
function Gs(e) {
  return e == null ? "" : Po(e);
}
function Pt(e, t) {
  return ot(e) ? e : gs(e, t) ? [e] : qs(Gs(e));
}
var Zs = 1 / 0;
function rn(e) {
  if (typeof e == "string" || tn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Zs ? "-0" : t;
}
function $o(e, t) {
  t = Pt(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[rn(t[n++])];
  return n && n == o ? e : void 0;
}
function Js(e, t, n) {
  var o = e == null ? void 0 : $o(e, t);
  return o === void 0 ? n : o;
}
function Ys(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Wn = _e ? _e.isConcatSpreadable : void 0;
function Qs(e) {
  return ot(e) || No(e) || !!(Wn && e && e[Wn]);
}
function Xs(e, t, n, o, r) {
  var a = -1, s = e.length;
  for (n || (n = Qs), r || (r = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Ys(r, i) : r[r.length] = i;
  }
  return r;
}
function ei(e) {
  var t = e == null ? 0 : e.length;
  return t ? Xs(e) : [];
}
function ti(e) {
  return ts(ls(e, void 0, ei), e + "");
}
function ni(e, t) {
  return e != null && t in Object(e);
}
function oi(e, t, n) {
  t = Pt(t, e);
  for (var o = -1, r = t.length, a = false; ++o < r; ) {
    var s = rn(t[o]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && cs(r) && xo(s, r) && (ot(e) || No(e)));
}
function ri(e, t) {
  return e != null && oi(e, t, ni);
}
function jt(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function an(e) {
  return e == null;
}
function ai(e) {
  return e === void 0;
}
function si(e, t, n, o) {
  if (!ht(e))
    return e;
  t = Pt(t, e);
  for (var r = -1, a = t.length, s = a - 1, i = e; i != null && ++r < a; ) {
    var l = rn(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != s) {
      var m = i[l];
      u = void 0, u === void 0 && (u = ht(m) ? m : xo(t[r + 1]) ? [] : {});
    }
    is(i, l, u), i = i[l];
  }
  return e;
}
function ii(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var s = t[o], i = $o(e, s);
    n(i, s) && si(a, Pt(s, e), i);
  }
  return a;
}
function li(e, t) {
  return ii(e, t, function(n, o) {
    return ri(e, o);
  });
}
var ui = ti(function(e, t) {
  return e == null ? {} : li(e, t);
});
var ci = (e) => e === void 0;
var bt = (e) => typeof e == "boolean";
var le = (e) => typeof e == "number";
var ke = (e) => typeof Element > "u" ? false : e instanceof Element;
var fi = (e) => Le(e) ? !Number.isNaN(Number(e)) : false;
var qn = (e) => Object.keys(e);
var di = class extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
};
function Ne(e, t) {
  if (true) {
    const n = Le(e) ? new di(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
var pi = "utils/dom/style";
function zt(e, t = "px") {
  if (!e)
    return "";
  if (le(e) || fi(e))
    return `${e}${t}`;
  if (Le(e))
    return e;
  Ne(pi, "binding value must be a string or number");
}
var vi = defineComponent({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
});
var Ro = vi;
var mi = defineComponent({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
});
var gi = mi;
var hi = defineComponent({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
});
var Fo = hi;
var yi = defineComponent({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
});
var Mo = yi;
var bi = defineComponent({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
});
var ko = bi;
var Lo = "__epPropKey";
var x = (e) => e;
var _i = (e) => Yt(e) && !!e[Lo];
var xt = (e, t) => {
  if (!Yt(e) || _i(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: s } = e, l = {
    type: a,
    required: !!o,
    validator: n || s ? (u) => {
      let m = false, y = [];
      if (n && (y = Array.from(n), Bn(e, "default") && y.push(r), m || (m = y.includes(u))), s && (m || (m = s(u))), !m && y.length > 0) {
        const p = [...new Set(y)].map((g) => JSON.stringify(g)).join(", ");
        warn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return m;
    } : void 0,
    [Lo]: true
  };
  return Bn(e, "default") && (l.default = r), l;
};
var H = (e) => jt(Object.entries(e).map(([t, n]) => [
  t,
  xt(n, t)
]));
var wi = x([
  String,
  Object,
  Function
]);
var Ei = {
  Close: gi,
  SuccessFilled: Mo,
  InfoFilled: Fo,
  WarningFilled: ko,
  CircleCloseFilled: Ro
};
var Gn = {
  success: Mo,
  warning: ko,
  error: Ro,
  info: Fo
};
var Ve = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e);
var Oi = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e);
var et = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
var Ci = ["", "default", "small", "large"];
var Ti = (e) => e;
var Si = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
var Pi = (e) => (t, n) => xi(t, n, unref(e));
var xi = (e, t, n) => Js(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t == null ? void 0 : t[r]) != null ? a : `{${r}}`}`;
});
var Ii = (e) => {
  const t = computed(() => unref(e).name), n = isRef(e) ? e : ref(e);
  return {
    lang: t,
    locale: n,
    t: Pi(e)
  };
};
var Do = Symbol("localeContextKey");
var Ai = (e) => {
  const t = e || inject(Do, ref());
  return Ii(computed(() => t.value || Si));
};
var mt = "el";
var Ni = "is-";
var Pe = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
};
var Bo = Symbol("namespaceContextKey");
var sn = (e) => {
  const t = e || (getCurrentInstance() ? inject(Bo, ref(mt)) : ref(mt));
  return computed(() => unref(t) || mt);
};
var Ee = (e, t) => {
  const n = sn(t);
  return {
    namespace: n,
    b: (c = "") => Pe(n.value, e, c, "", ""),
    e: (c) => c ? Pe(n.value, e, "", c, "") : "",
    m: (c) => c ? Pe(n.value, e, "", "", c) : "",
    be: (c, h) => c && h ? Pe(n.value, e, c, h, "") : "",
    em: (c, h) => c && h ? Pe(n.value, e, "", c, h) : "",
    bm: (c, h) => c && h ? Pe(n.value, e, c, "", h) : "",
    bem: (c, h, d) => c && h && d ? Pe(n.value, e, c, h, d) : "",
    is: (c, ...h) => {
      const d = h.length >= 1 ? h[0] : true;
      return c && d ? `${Ni}${c}` : "";
    },
    cssVar: (c) => {
      const h = {};
      for (const d in c)
        c[d] && (h[`--${n.value}-${d}`] = c[d]);
      return h;
    },
    cssVarName: (c) => `--${n.value}-${c}`,
    cssVarBlock: (c) => {
      const h = {};
      for (const d in c)
        c[d] && (h[`--${n.value}-${e}-${d}`] = c[d]);
      return h;
    },
    cssVarBlockName: (c) => `--${n.value}-${e}-${c}`
  };
};
var $i = xt({
  type: x(Boolean),
  default: null
});
var Ri = xt({
  type: x(Function)
});
var jo = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: $i,
    [n]: Ri
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: m,
      onHide: y
    }) => {
      const p = getCurrentInstance(), { emit: g } = p, v = p.props, c = computed(() => ye(v[n])), h = computed(() => v[e] === null), d = (b) => {
        s.value !== true && (s.value = true, i && (i.value = b), ye(m) && m(b));
      }, _ = (b) => {
        s.value !== false && (s.value = false, i && (i.value = b), ye(y) && y(b));
      }, C = (b) => {
        if (v.disabled === true || ye(u) && !u())
          return;
        const P = c.value && G;
        P && g(t, true), (h.value || !P) && d(b);
      }, w = (b) => {
        if (v.disabled === true || !G)
          return;
        const P = c.value && G;
        P && g(t, false), (h.value || !P) && _(b);
      }, T = (b) => {
        bt(b) && (v.disabled && b ? c.value && g(t, false) : s.value !== b && (b ? d() : _()));
      }, S = () => {
        s.value ? w() : C();
      };
      return watch(() => v[e], T), l && p.appContext.config.globalProperties.$route !== void 0 && watch(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && s.value && w();
      }), onMounted(() => {
        T(v[e]);
      }), {
        hide: w,
        show: C,
        toggle: S,
        hasUpdateHandler: c
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
jo("modelValue");
var Z = "top";
var Q = "bottom";
var X = "right";
var J = "left";
var ln = "auto";
var rt = [Z, Q, X, J];
var De = "start";
var tt = "end";
var Fi = "clippingParents";
var zo = "viewport";
var Ze = "popper";
var Mi = "reference";
var Zn = rt.reduce(function(e, t) {
  return e.concat([t + "-" + De, t + "-" + tt]);
}, []);
var un = [].concat(rt, [ln]).reduce(function(e, t) {
  return e.concat([t, t + "-" + De, t + "-" + tt]);
}, []);
var ki = "beforeRead";
var Li = "read";
var Di = "afterRead";
var Bi = "beforeMain";
var ji = "main";
var zi = "afterMain";
var Hi = "beforeWrite";
var Ki = "write";
var Ui = "afterWrite";
var Vi = [ki, Li, Di, Bi, ji, zi, Hi, Ki, Ui];
function ue(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function oe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Be(e) {
  var t = oe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Y(e) {
  var t = oe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function cn(e) {
  if (typeof ShadowRoot > "u") return false;
  var t = oe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Wi(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !Y(a) || !ue(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(s) {
      var i = r[s];
      i === false ? a.removeAttribute(s) : a.setAttribute(s, i === true ? "" : i);
    }));
  });
}
function qi(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Y(r) || !ue(r) || (Object.assign(r.style, i), Object.keys(a).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Ho = { name: "applyStyles", enabled: true, phase: "write", fn: Wi, effect: qi, requires: ["computeStyles"] };
function ie(e) {
  return e.split("-")[0];
}
var xe = Math.max;
var _t = Math.min;
var je = Math.round;
function ze(e, t) {
  t === void 0 && (t = false);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (Y(e) && t) {
    var a = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (o = je(n.width) / s || 1), a > 0 && (r = je(n.height) / a || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function fn(e) {
  var t = ze(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ko(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return true;
  if (n && cn(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return true;
      o = o.parentNode || o.host;
    } while (o);
  }
  return false;
}
function ve(e) {
  return oe(e).getComputedStyle(e);
}
function Gi(e) {
  return ["table", "td", "th"].indexOf(ue(e)) >= 0;
}
function Oe(e) {
  return ((Be(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function It(e) {
  return ue(e) === "html" ? e : e.assignedSlot || e.parentNode || (cn(e) ? e.host : null) || Oe(e);
}
function Jn(e) {
  return !Y(e) || ve(e).position === "fixed" ? null : e.offsetParent;
}
function Zi(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Y(e)) {
    var o = ve(e);
    if (o.position === "fixed") return null;
  }
  var r = It(e);
  for (cn(r) && (r = r.host); Y(r) && ["html", "body"].indexOf(ue(r)) < 0; ) {
    var a = ve(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function at(e) {
  for (var t = oe(e), n = Jn(e); n && Gi(n) && ve(n).position === "static"; ) n = Jn(n);
  return n && (ue(n) === "html" || ue(n) === "body" && ve(n).position === "static") ? t : n || Zi(e) || t;
}
function dn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ye(e, t, n) {
  return xe(e, _t(t, n));
}
function Ji(e, t, n) {
  var o = Ye(e, t, n);
  return o > n ? n : o;
}
function Uo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Vo(e) {
  return Object.assign({}, Uo(), e);
}
function Wo(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Yi = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Vo(typeof e != "number" ? e : Wo(e, rt));
};
function Qi(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = ie(n.placement), l = dn(i), u = [J, X].indexOf(i) >= 0, m = u ? "height" : "width";
  if (!(!a || !s)) {
    var y = Yi(r.padding, n), p = fn(a), g = l === "y" ? Z : J, v = l === "y" ? Q : X, c = n.rects.reference[m] + n.rects.reference[l] - s[l] - n.rects.popper[m], h = s[l] - n.rects.reference[l], d = at(a), _ = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, C = c / 2 - h / 2, w = y[g], T = _ - p[m] - y[v], S = _ / 2 - p[m] / 2 + C, b = Ye(w, S, T), P = l;
    n.modifiersData[o] = (t = {}, t[P] = b, t.centerOffset = b - S, t);
  }
}
function Xi(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Ko(t.elements.popper, r) || (t.elements.arrow = r));
}
var el = { name: "arrow", enabled: true, phase: "main", fn: Qi, effect: Xi, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function He(e) {
  return e.split("-")[1];
}
var tl = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nl(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: je(t * r) / r || 0, y: je(n * r) / r || 0 };
}
function Yn(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, m = e.roundOffsets, y = e.isFixed, p = s.x, g = p === void 0 ? 0 : p, v = s.y, c = v === void 0 ? 0 : v, h = typeof m == "function" ? m({ x: g, y: c }) : { x: g, y: c };
  g = h.x, c = h.y;
  var d = s.hasOwnProperty("x"), _ = s.hasOwnProperty("y"), C = J, w = Z, T = window;
  if (u) {
    var S = at(n), b = "clientHeight", P = "clientWidth";
    if (S === oe(n) && (S = Oe(n), ve(S).position !== "static" && i === "absolute" && (b = "scrollHeight", P = "scrollWidth")), S = S, r === Z || (r === J || r === X) && a === tt) {
      w = Q;
      var R = y && S === T && T.visualViewport ? T.visualViewport.height : S[b];
      c -= R - o.height, c *= l ? 1 : -1;
    }
    if (r === J || (r === Z || r === Q) && a === tt) {
      C = X;
      var A = y && S === T && T.visualViewport ? T.visualViewport.width : S[P];
      g -= A - o.width, g *= l ? 1 : -1;
    }
  }
  var F = Object.assign({ position: i }, u && tl), M = m === true ? nl({ x: g, y: c }) : { x: g, y: c };
  if (g = M.x, c = M.y, l) {
    var k;
    return Object.assign({}, F, (k = {}, k[w] = _ ? "0" : "", k[C] = d ? "0" : "", k.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + c + "px)" : "translate3d(" + g + "px, " + c + "px, 0)", k));
  }
  return Object.assign({}, F, (t = {}, t[w] = _ ? c + "px" : "", t[C] = d ? g + "px" : "", t.transform = "", t));
}
function ol(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, a = n.adaptive, s = a === void 0 ? true : a, i = n.roundOffsets, l = i === void 0 ? true : i, u = { placement: ie(t.placement), variation: He(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Yn(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Yn(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var qo = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: ol, data: {} };
var ct = { passive: true };
function rl(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? true : r, s = o.resize, i = s === void 0 ? true : s, l = oe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(m) {
    m.addEventListener("scroll", n.update, ct);
  }), i && l.addEventListener("resize", n.update, ct), function() {
    a && u.forEach(function(m) {
      m.removeEventListener("scroll", n.update, ct);
    }), i && l.removeEventListener("resize", n.update, ct);
  };
}
var Go = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: rl, data: {} };
var al = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return al[t];
  });
}
var sl = { start: "end", end: "start" };
function Qn(e) {
  return e.replace(/start|end/g, function(t) {
    return sl[t];
  });
}
function pn(e) {
  var t = oe(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function vn(e) {
  return ze(Oe(e)).left + pn(e).scrollLeft;
}
function il(e) {
  var t = oe(e), n = Oe(e), o = t.visualViewport, r = n.clientWidth, a = n.clientHeight, s = 0, i = 0;
  return o && (r = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, i = o.offsetTop)), { width: r, height: a, x: s + vn(e), y: i };
}
function ll(e) {
  var t, n = Oe(e), o = pn(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = xe(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = xe(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + vn(e), l = -o.scrollTop;
  return ve(r || n).direction === "rtl" && (i += xe(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function mn(e) {
  var t = ve(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Zo(e) {
  return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : Y(e) && mn(e) ? e : Zo(It(e));
}
function Qe(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Zo(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = oe(o), s = r ? [a].concat(a.visualViewport || [], mn(o) ? o : []) : o, i = t.concat(s);
  return r ? i : i.concat(Qe(It(s)));
}
function Ht(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function ul(e) {
  var t = ze(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Xn(e, t) {
  return t === zo ? Ht(il(e)) : Be(t) ? ul(t) : Ht(ll(Oe(e)));
}
function cl(e) {
  var t = Qe(It(e)), n = ["absolute", "fixed"].indexOf(ve(e).position) >= 0, o = n && Y(e) ? at(e) : e;
  return Be(o) ? t.filter(function(r) {
    return Be(r) && Ko(r, o) && ue(r) !== "body";
  }) : [];
}
function fl(e, t, n) {
  var o = t === "clippingParents" ? cl(e) : [].concat(t), r = [].concat(o, [n]), a = r[0], s = r.reduce(function(i, l) {
    var u = Xn(e, l);
    return i.top = xe(u.top, i.top), i.right = _t(u.right, i.right), i.bottom = _t(u.bottom, i.bottom), i.left = xe(u.left, i.left), i;
  }, Xn(e, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Jo(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? ie(o) : null, a = o ? He(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case Z:
      l = { x: s, y: t.y - n.height };
      break;
    case Q:
      l = { x: s, y: t.y + t.height };
      break;
    case X:
      l = { x: t.x + t.width, y: i };
      break;
    case J:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? dn(r) : null;
  if (u != null) {
    var m = u === "y" ? "height" : "width";
    switch (a) {
      case De:
        l[u] = l[u] - (t[m] / 2 - n[m] / 2);
        break;
      case tt:
        l[u] = l[u] + (t[m] / 2 - n[m] / 2);
        break;
    }
  }
  return l;
}
function nt(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.boundary, s = a === void 0 ? Fi : a, i = n.rootBoundary, l = i === void 0 ? zo : i, u = n.elementContext, m = u === void 0 ? Ze : u, y = n.altBoundary, p = y === void 0 ? false : y, g = n.padding, v = g === void 0 ? 0 : g, c = Vo(typeof v != "number" ? v : Wo(v, rt)), h = m === Ze ? Mi : Ze, d = e.rects.popper, _ = e.elements[p ? h : m], C = fl(Be(_) ? _ : _.contextElement || Oe(e.elements.popper), s, l), w = ze(e.elements.reference), T = Jo({ reference: w, element: d, strategy: "absolute", placement: r }), S = Ht(Object.assign({}, d, T)), b = m === Ze ? S : w, P = { top: C.top - b.top + c.top, bottom: b.bottom - C.bottom + c.bottom, left: C.left - b.left + c.left, right: b.right - C.right + c.right }, R = e.modifiersData.offset;
  if (m === Ze && R) {
    var A = R[r];
    Object.keys(P).forEach(function(F) {
      var M = [X, Q].indexOf(F) >= 0 ? 1 : -1, k = [Z, Q].indexOf(F) >= 0 ? "y" : "x";
      P[F] += A[k] * M;
    });
  }
  return P;
}
function dl(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? un : l, m = He(o), y = m ? i ? Zn : Zn.filter(function(v) {
    return He(v) === m;
  }) : rt, p = y.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = y);
  var g = p.reduce(function(v, c) {
    return v[c] = nt(e, { placement: c, boundary: r, rootBoundary: a, padding: s })[ie(c)], v;
  }, {});
  return Object.keys(g).sort(function(v, c) {
    return g[v] - g[c];
  });
}
function pl(e) {
  if (ie(e) === ln) return [];
  var t = gt(e);
  return [Qn(e), t, Qn(t)];
}
function vl(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? true : r, s = n.altAxis, i = s === void 0 ? true : s, l = n.fallbackPlacements, u = n.padding, m = n.boundary, y = n.rootBoundary, p = n.altBoundary, g = n.flipVariations, v = g === void 0 ? true : g, c = n.allowedAutoPlacements, h = t.options.placement, d = ie(h), _ = d === h, C = l || (_ || !v ? [gt(h)] : pl(h)), w = [h].concat(C).reduce(function(Te, ce) {
      return Te.concat(ie(ce) === ln ? dl(t, { placement: ce, boundary: m, rootBoundary: y, padding: u, flipVariations: v, allowedAutoPlacements: c }) : ce);
    }, []), T = t.rects.reference, S = t.rects.popper, b = /* @__PURE__ */ new Map(), P = true, R = w[0], A = 0; A < w.length; A++) {
      var F = w[A], M = ie(F), k = He(F) === De, re = [Z, Q].indexOf(M) >= 0, j = re ? "width" : "height", O = nt(t, { placement: F, boundary: m, rootBoundary: y, altBoundary: p, padding: u }), L = re ? k ? X : J : k ? Q : Z;
      T[j] > S[j] && (L = gt(L));
      var Ce = gt(L), ae = [];
      if (a && ae.push(O[M] <= 0), i && ae.push(O[L] <= 0, O[Ce] <= 0), ae.every(function(Te) {
        return Te;
      })) {
        R = F, P = false;
        break;
      }
      b.set(F, ae);
    }
    if (P) for (var st = v ? 3 : 1, Nt = function(Te) {
      var ce = w.find(function(lt) {
        var qe = b.get(lt);
        if (qe) return qe.slice(0, Te).every(function(Re) {
          return Re;
        });
      });
      if (ce) return R = ce, "break";
    }, We = st; We > 0; We--) {
      var it = Nt(We);
      if (it === "break") break;
    }
    t.placement !== R && (t.modifiersData[o]._skip = true, t.placement = R, t.reset = true);
  }
}
var ml = { name: "flip", enabled: true, phase: "main", fn: vl, requiresIfExists: ["offset"], data: { _skip: false } };
function eo(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function to(e) {
  return [Z, X, Q, J].some(function(t) {
    return e[t] >= 0;
  });
}
function gl(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, s = nt(t, { elementContext: "reference" }), i = nt(t, { altBoundary: true }), l = eo(s, o), u = eo(i, r, a), m = to(l), y = to(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: m, hasPopperEscaped: y }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": m, "data-popper-escaped": y });
}
var hl = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: gl };
function yl(e, t, n) {
  var o = ie(e), r = [J, Z].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * r, [J, X].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function bl(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, s = un.reduce(function(m, y) {
    return m[y] = yl(y, t.rects, a), m;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var _l = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: bl };
function wl(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Jo({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Yo = { name: "popperOffsets", enabled: true, phase: "read", fn: wl, data: {} };
function El(e) {
  return e === "x" ? "y" : "x";
}
function Ol(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? true : r, s = n.altAxis, i = s === void 0 ? false : s, l = n.boundary, u = n.rootBoundary, m = n.altBoundary, y = n.padding, p = n.tether, g = p === void 0 ? true : p, v = n.tetherOffset, c = v === void 0 ? 0 : v, h = nt(t, { boundary: l, rootBoundary: u, padding: y, altBoundary: m }), d = ie(t.placement), _ = He(t.placement), C = !_, w = dn(d), T = El(w), S = t.modifiersData.popperOffsets, b = t.rects.reference, P = t.rects.popper, R = typeof c == "function" ? c(Object.assign({}, t.rects, { placement: t.placement })) : c, A = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var k, re = w === "y" ? Z : J, j = w === "y" ? Q : X, O = w === "y" ? "height" : "width", L = S[w], Ce = L + h[re], ae = L - h[j], st = g ? -P[O] / 2 : 0, Nt = _ === De ? b[O] : P[O], We = _ === De ? -P[O] : -b[O], it = t.elements.arrow, Te = g && it ? fn(it) : { width: 0, height: 0 }, ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Uo(), lt = ce[re], qe = ce[j], Re = Ye(0, b[O], Te[O]), br = C ? b[O] / 2 - st - Re - lt - A.mainAxis : Nt - Re - lt - A.mainAxis, _r = C ? -b[O] / 2 + st + Re + qe + A.mainAxis : We + Re + qe + A.mainAxis, $t = t.elements.arrow && at(t.elements.arrow), wr = $t ? w === "y" ? $t.clientTop || 0 : $t.clientLeft || 0 : 0, wn = (k = F == null ? void 0 : F[w]) != null ? k : 0, Er = L + br - wn - wr, Or = L + _r - wn, En = Ye(g ? _t(Ce, Er) : Ce, L, g ? xe(ae, Or) : ae);
      S[w] = En, M[w] = En - L;
    }
    if (i) {
      var On, Cr = w === "x" ? Z : J, Tr = w === "x" ? Q : X, Se = S[T], ut = T === "y" ? "height" : "width", Cn = Se + h[Cr], Tn = Se - h[Tr], Rt = [Z, J].indexOf(d) !== -1, Sn = (On = F == null ? void 0 : F[T]) != null ? On : 0, Pn = Rt ? Cn : Se - b[ut] - P[ut] - Sn + A.altAxis, xn = Rt ? Se + b[ut] + P[ut] - Sn - A.altAxis : Tn, In = g && Rt ? Ji(Pn, Se, xn) : Ye(g ? Pn : Cn, Se, g ? xn : Tn);
      S[T] = In, M[T] = In - Se;
    }
    t.modifiersData[o] = M;
  }
}
var Cl = { name: "preventOverflow", enabled: true, phase: "main", fn: Ol, requiresIfExists: ["offset"] };
function Tl(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Sl(e) {
  return e === oe(e) || !Y(e) ? pn(e) : Tl(e);
}
function Pl(e) {
  var t = e.getBoundingClientRect(), n = je(t.width) / e.offsetWidth || 1, o = je(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function xl(e, t, n) {
  n === void 0 && (n = false);
  var o = Y(t), r = Y(t) && Pl(t), a = Oe(t), s = ze(e, r), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((ue(t) !== "body" || mn(a)) && (i = Sl(t)), Y(t) ? (l = ze(t, true), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = vn(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function Il(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && r(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function Al(e) {
  var t = Il(e);
  return Vi.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Nl(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function $l(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var no = { placement: "bottom", modifiers: [], strategy: "absolute" };
function oo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function gn(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? no : r;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, no, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, m = [], y = false, p = { state: u, setOptions: function(c) {
      var h = typeof c == "function" ? c(u.options) : c;
      v(), u.options = Object.assign({}, a, u.options, h), u.scrollParents = { reference: Be(s) ? Qe(s) : s.contextElement ? Qe(s.contextElement) : [], popper: Qe(i) };
      var d = Al($l([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(_) {
        return _.enabled;
      }), g(), p.update();
    }, forceUpdate: function() {
      if (!y) {
        var c = u.elements, h = c.reference, d = c.popper;
        if (oo(h, d)) {
          u.rects = { reference: xl(h, at(d), u.options.strategy === "fixed"), popper: fn(d) }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(P) {
            return u.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var _ = 0; _ < u.orderedModifiers.length; _++) {
            if (u.reset === true) {
              u.reset = false, _ = -1;
              continue;
            }
            var C = u.orderedModifiers[_], w = C.fn, T = C.options, S = T === void 0 ? {} : T, b = C.name;
            typeof w == "function" && (u = w({ state: u, options: S, name: b, instance: p }) || u);
          }
        }
      }
    }, update: Nl(function() {
      return new Promise(function(c) {
        p.forceUpdate(), c(u);
      });
    }), destroy: function() {
      v(), y = true;
    } };
    if (!oo(s, i)) return p;
    p.setOptions(l).then(function(c) {
      !y && l.onFirstUpdate && l.onFirstUpdate(c);
    });
    function g() {
      u.orderedModifiers.forEach(function(c) {
        var h = c.name, d = c.options, _ = d === void 0 ? {} : d, C = c.effect;
        if (typeof C == "function") {
          var w = C({ state: u, name: h, instance: p, options: _ }), T = function() {
          };
          m.push(w || T);
        }
      });
    }
    function v() {
      m.forEach(function(c) {
        return c();
      }), m = [];
    }
    return p;
  };
}
gn();
var Rl = [Go, Yo, qo, Ho];
gn({ defaultModifiers: Rl });
var Fl = [Go, Yo, qo, Ho, _l, ml, Cl, el, hl];
var Ml = gn({ defaultModifiers: Fl });
var kl = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Ll(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = computed(() => {
    const { onFirstUpdate: l, placement: u, strategy: m, modifiers: y } = unref(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: m || "absolute",
      modifiers: [
        ...y || [],
        o,
        { name: "applyStyles", enabled: false }
      ]
    };
  }), a = shallowRef(), s = ref({
    styles: {
      popper: {
        position: unref(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return watch(r, (l) => {
    const u = unref(a);
    u && u.setOptions(l);
  }, {
    deep: true
  }), watch([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = Ml(l, u, unref(r)));
  }), onBeforeUnmount(() => {
    i();
  }), {
    state: computed(() => {
      var l;
      return { ...((l = unref(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: computed(() => unref(s).styles),
    attributes: computed(() => unref(s).attributes),
    update: () => {
      var l;
      return (l = unref(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = unref(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: computed(() => unref(a))
  };
};
function Ll(e) {
  const t = Object.keys(e.elements), n = jt(t.map((r) => [r, e.styles[r] || {}])), o = jt(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function ro() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Ct(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
var Kt = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
var Dl = Symbol("elIdInjection");
var Qo = () => getCurrentInstance() ? inject(Dl, Kt) : Kt;
var Bl = (e) => {
  const t = Qo();
  !G && t === Kt && Ne("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = sn();
  return computed(() => unref(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
var Me = [];
var ao = (e) => {
  const t = e;
  t.key === et.esc && Me.forEach((n) => n(t));
};
var jl = (e) => {
  onMounted(() => {
    Me.length === 0 && document.addEventListener("keydown", ao), G && Me.push(e);
  }), onBeforeUnmount(() => {
    Me = Me.filter((t) => t !== e), Me.length === 0 && G && document.removeEventListener("keydown", ao);
  });
};
var so;
var Xo = () => {
  const e = sn(), t = Qo(), n = computed(() => `${e.value}-popper-container-${t.prefix}`), o = computed(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
};
var zl = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
};
var Hl = () => {
  const { id: e, selector: t } = Xo();
  return onBeforeMount(() => {
    G && (!so || !document.body.querySelector(t.value)) && (so = zl(e.value));
  }), {
    id: e,
    selector: t
  };
};
var Kl = H({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
});
var Ul = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = ro(), {
    registerTimeout: s,
    cancelTimeout: i
  } = ro();
  return {
    onOpen: (m) => {
      a(() => {
        o(m);
        const y = unref(n);
        le(y) && y > 0 && s(() => {
          r(m);
        }, y);
      }, unref(e));
    },
    onClose: (m) => {
      i(), a(() => {
        r(m);
      }, unref(t));
    }
  };
};
var er = Symbol("elForwardRef");
var Vl = (e) => {
  provide(er, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
};
var Wl = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
});
var io = {
  current: 0
};
var lo = ref(0);
var tr = 2e3;
var uo = Symbol("elZIndexContextKey");
var nr = Symbol("zIndexContextKey");
var or = (e) => {
  const t = getCurrentInstance() ? inject(uo, io) : io, n = e || (getCurrentInstance() ? inject(nr, void 0) : void 0), o = computed(() => {
    const s = unref(n);
    return le(s) ? s : tr;
  }), r = computed(() => o.value + lo.value), a = () => (t.current++, lo.value = t.current, r.value);
  return !G && !inject(uo) && Ne("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: a
  };
};
var ql = xt({
  type: String,
  values: Ci,
  required: false
});
var Gl = Symbol("size");
var Zl = Symbol("emptyValuesContextKey");
var Jl = H({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => ye(e) ? !e() : !e
  }
});
var Yl = H({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
var rr = (e) => ui(Yl, e);
var ar = Symbol();
var wt = ref();
function sr(e, t = void 0) {
  return getCurrentInstance() ? inject(ar, wt) : wt;
}
function Ql(e, t) {
  const n = sr(), o = Ee(e, computed(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || mt;
  })), r = Ai(computed(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = or(computed(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || tr;
  })), s = computed(() => {
    var i;
    return unref(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return ir(computed(() => unref(n) || {})), {
    ns: o,
    locale: r,
    zIndex: a,
    size: s
  };
}
var ir = (e, t, n = false) => {
  var o;
  const r = !!getCurrentInstance(), a = r ? sr() : void 0, s = (o = void 0) != null ? o : r ? provide : void 0;
  if (!s) {
    Ne("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = computed(() => {
    const l = unref(e);
    return a != null && a.value ? Xl(a.value, l) : l;
  });
  return s(ar, i), s(Do, computed(() => i.value.locale)), s(Bo, computed(() => i.value.namespace)), s(nr, computed(() => i.value.zIndex)), s(Gl, {
    size: computed(() => i.value.size || "")
  }), s(Zl, computed(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !wt.value) && (wt.value = i.value), i;
};
var Xl = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...qn(e), ...qn(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
};
var eu = H({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: x(Object)
  },
  size: ql,
  button: {
    type: x(Object)
  },
  experimentalFeatures: {
    type: x(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: x(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Jl
});
var te = {};
var tu = defineComponent({
  name: "ElConfigProvider",
  props: eu,
  setup(e, { slots: t }) {
    watch(() => e.message, (o) => {
      Object.assign(te, o ?? {});
    }, { immediate: true, deep: true });
    const n = ir(e);
    return () => renderSlot(t, "default", { config: n == null ? void 0 : n.value });
  }
});
var nu = Ve(tu);
var ee = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
var ou = H({
  size: {
    type: x([Number, String])
  },
  color: {
    type: String
  }
});
var ru = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
var au = defineComponent({
  ...ru,
  props: ou,
  setup(e) {
    const t = e, n = Ee("icon"), o = computed(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: ci(r) ? void 0 : zt(r),
        "--color": a
      };
    });
    return (r, a) => (openBlock(), createElementBlock("i", mergeProps({
      class: unref(n).b(),
      style: unref(o)
    }, r.$attrs), [
      renderSlot(r.$slots, "default")
    ], 16));
  }
});
var su = ee(au, [["__file", "icon.vue"]]);
var co = Ve(su);
var fo = Symbol("formItemContextKey");
var hn = Symbol("popper");
var lr = Symbol("popperContent");
var iu = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
var ur = H({
  role: {
    type: String,
    values: iu,
    default: "tooltip"
  }
});
var lu = defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
var uu = defineComponent({
  ...lu,
  props: ur,
  setup(e, { expose: t }) {
    const n = e, o = ref(), r = ref(), a = ref(), s = ref(), i = computed(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), provide(hn, l), (u, m) => renderSlot(u.$slots, "default");
  }
});
var cu = ee(uu, [["__file", "popper.vue"]]);
var cr = H({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
var fu = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
var du = defineComponent({
  ...fu,
  props: cr,
  setup(e, { expose: t }) {
    const n = e, o = Ee("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: s } = inject(lr, void 0);
    return watch(() => n.arrowOffset, (i) => {
      r.value = i;
    }), onBeforeUnmount(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (openBlock(), createElementBlock("span", {
      ref_key: "arrowRef",
      ref: a,
      class: normalizeClass(unref(o).e("arrow")),
      style: normalizeStyle(unref(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var pu = ee(du, [["__file", "arrow.vue"]]);
var Mt = "ElOnlyChild";
var vu = defineComponent({
  name: Mt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = inject(er), a = Wl((o = r == null ? void 0 : r.setForwardRef) != null ? o : Bt);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Ne(Mt, "requires exact only one valid child."), null;
      const l = fr(i);
      return l ? withDirectives(cloneVNode(l, n), [[a]]) : (Ne(Mt, "no valid child node found"), null);
    };
  }
});
function fr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Yt(n))
      switch (n.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return po(n);
        case Fragment:
          return fr(n.children);
        default:
          return n;
      }
    return po(n);
  }
  return null;
}
function po(e) {
  const t = Ee("only-child");
  return createVNode("span", {
    class: t.e("content")
  }, [e]);
}
var dr = H({
  virtualRef: {
    type: x(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: x(Function)
  },
  onMouseleave: {
    type: x(Function)
  },
  onClick: {
    type: x(Function)
  },
  onKeydown: {
    type: x(Function)
  },
  onFocus: {
    type: x(Function)
  },
  onBlur: {
    type: x(Function)
  },
  onContextmenu: {
    type: x(Function)
  },
  id: String,
  open: Boolean
});
var mu = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
var gu = defineComponent({
  ...mu,
  props: dr,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = inject(hn, void 0);
    Vl(r);
    const a = computed(() => i.value ? n.id : void 0), s = computed(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = computed(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = computed(() => i.value ? `${n.open}` : void 0);
    let u;
    const m = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return onMounted(() => {
      watch(() => n.virtualRef, (y) => {
        y && (r.value = he(y));
      }, {
        immediate: true
      }), watch(r, (y, p) => {
        u == null || u(), u = void 0, ke(y) && (m.forEach((g) => {
          var v;
          const c = n[g];
          c && (y.addEventListener(g.slice(2).toLowerCase(), c), (v = p == null ? void 0 : p.removeEventListener) == null || v.call(p, g.slice(2).toLowerCase(), c));
        }), u = watch([a, s, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, c) => {
            an(g[c]) ? y.removeAttribute(v) : y.setAttribute(v, g[c]);
          });
        }, { immediate: true })), ke(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => p.removeAttribute(g));
      }, {
        immediate: true
      });
    }), onBeforeUnmount(() => {
      if (u == null || u(), u = void 0, r.value && ke(r.value)) {
        const y = r.value;
        m.forEach((p) => {
          const g = n[p];
          g && y.removeEventListener(p.slice(2).toLowerCase(), g);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (y, p) => y.virtualTriggering ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(vu), mergeProps({ key: 0 }, y.$attrs, {
      "aria-controls": unref(a),
      "aria-describedby": unref(s),
      "aria-expanded": unref(l),
      "aria-haspopup": unref(i)
    }), {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var hu = ee(gu, [["__file", "trigger.vue"]]);
var kt = "focus-trap.focus-after-trapped";
var Lt = "focus-trap.focus-after-released";
var yu = "focus-trap.focusout-prevented";
var vo = {
  cancelable: true,
  bubbles: false
};
var bu = {
  cancelable: true,
  bubbles: false
};
var mo = "focusAfterTrapped";
var go = "focusAfterReleased";
var _u = Symbol("elFocusTrap");
var yn = ref();
var At = ref(0);
var bn = ref(0);
var ft = 0;
var pr = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
};
var ho = (e, t) => {
  for (const n of e)
    if (!wu(n, t))
      return n;
};
var wu = (e, t) => {
  if (false)
    return false;
  if (getComputedStyle(e).visibility === "hidden")
    return true;
  for (; e; ) {
    if (t && e === t)
      return false;
    if (getComputedStyle(e).display === "none")
      return true;
    e = e.parentElement;
  }
  return false;
};
var Eu = (e) => {
  const t = pr(e), n = ho(t, e), o = ho(t.reverse(), e);
  return [n, o];
};
var Ou = (e) => e instanceof HTMLInputElement && "select" in e;
var ge = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: true }), bn.value = window.performance.now(), e !== n && Ou(e) && t && e.select();
  }
};
function yo(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
var Cu = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = yo(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = yo(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
};
var Tu = (e, t = false) => {
  const n = document.activeElement;
  for (const o of e)
    if (ge(o, t), document.activeElement !== n)
      return;
};
var bo = Cu();
var Su = () => At.value > bn.value;
var dt = () => {
  yn.value = "pointer", At.value = window.performance.now();
};
var _o = () => {
  yn.value = "keyboard", At.value = window.performance.now();
};
var Pu = () => (onMounted(() => {
  ft === 0 && (document.addEventListener("mousedown", dt), document.addEventListener("touchstart", dt), document.addEventListener("keydown", _o)), ft++;
}), onBeforeUnmount(() => {
  ft--, ft <= 0 && (document.removeEventListener("mousedown", dt), document.removeEventListener("touchstart", dt), document.removeEventListener("keydown", _o));
}), {
  focusReason: yn,
  lastUserFocusTimestamp: At,
  lastAutomatedFocusTimestamp: bn
});
var pt = (e) => new CustomEvent(yu, {
  ...bu,
  detail: e
});
var xu = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    mo,
    go,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = ref();
    let o, r;
    const { focusReason: a } = Pu();
    jl((v) => {
      e.trapped && !s.paused && t("release-requested", v);
    });
    const s = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }, i = (v) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: c, altKey: h, ctrlKey: d, metaKey: _, currentTarget: C, shiftKey: w } = v, { loop: T } = e, S = c === et.tab && !h && !d && !_, b = document.activeElement;
      if (S && b) {
        const P = C, [R, A] = Eu(P);
        if (R && A) {
          if (!w && b === A) {
            const M = pt({
              focusReason: a.value
            });
            t("focusout-prevented", M), M.defaultPrevented || (v.preventDefault(), T && ge(R, true));
          } else if (w && [R, P].includes(b)) {
            const M = pt({
              focusReason: a.value
            });
            t("focusout-prevented", M), M.defaultPrevented || (v.preventDefault(), T && ge(A, true));
          }
        } else if (b === P) {
          const M = pt({
            focusReason: a.value
          });
          t("focusout-prevented", M), M.defaultPrevented || v.preventDefault();
        }
      }
    };
    provide(_u, {
      focusTrapRef: n,
      onKeydown: i
    }), watch(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: true }), watch([n], ([v], [c]) => {
      v && (v.addEventListener("keydown", i), v.addEventListener("focusin", m), v.addEventListener("focusout", y)), c && (c.removeEventListener("keydown", i), c.removeEventListener("focusin", m), c.removeEventListener("focusout", y));
    });
    const l = (v) => {
      t(mo, v);
    }, u = (v) => t(go, v), m = (v) => {
      const c = unref(n);
      if (!c)
        return;
      const h = v.target, d = v.relatedTarget, _ = h && c.contains(h);
      e.trapped || d && c.contains(d) || (o = d), _ && t("focusin", v), !s.paused && e.trapped && (_ ? r = h : ge(r, true));
    }, y = (v) => {
      const c = unref(n);
      if (!(s.paused || !c))
        if (e.trapped) {
          const h = v.relatedTarget;
          !an(h) && !c.contains(h) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = pt({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || ge(r, true);
            }
          }, 0);
        } else {
          const h = v.target;
          h && c.contains(h) || t("focusout", v);
        }
    };
    async function p() {
      await nextTick();
      const v = unref(n);
      if (v) {
        bo.push(s);
        const c = v.contains(document.activeElement) ? o : document.activeElement;
        if (o = c, !v.contains(c)) {
          const d = new Event(kt, vo);
          v.addEventListener(kt, l), v.dispatchEvent(d), d.defaultPrevented || nextTick(() => {
            let _ = e.focusStartEl;
            Le(_) || (ge(_), document.activeElement !== _ && (_ = "first")), _ === "first" && Tu(pr(v), true), (document.activeElement === c || _ === "container") && ge(v);
          });
        }
      }
    }
    function g() {
      const v = unref(n);
      if (v) {
        v.removeEventListener(kt, l);
        const c = new CustomEvent(Lt, {
          ...vo,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(Lt, u), v.dispatchEvent(c), !c.defaultPrevented && (a.value == "keyboard" || !Su() || v.contains(document.activeElement)) && ge(o ?? document.body), v.removeEventListener(Lt, u), bo.remove(s);
      }
    }
    return onMounted(() => {
      e.trapped && p(), watch(() => e.trapped, (v) => {
        v ? p() : g();
      });
    }), onBeforeUnmount(() => {
      e.trapped && g(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", m), n.value.removeEventListener("focusout", y), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Iu(e, t, n, o, r, a) {
  return renderSlot(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Au = ee(xu, [["render", Iu], ["__file", "focus-trap.vue"]]);
var Nu = ["fixed", "absolute"];
var $u = H({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: x(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: un,
    default: "bottom"
  },
  popperOptions: {
    type: x(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Nu,
    default: "absolute"
  }
});
var vr = H({
  ...$u,
  id: String,
  style: {
    type: x([String, Array, Object])
  },
  className: {
    type: x([String, Array, Object])
  },
  effect: {
    type: x(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: x([String, Array, Object])
  },
  popperStyle: {
    type: x([String, Array, Object])
  },
  referenceEl: {
    type: x(Object)
  },
  triggerTargetEl: {
    type: x(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...rr(["ariaLabel"])
});
var Ru = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
var Fu = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...ku(e), ...t]
  };
  return Lu(a, r == null ? void 0 : r.modifiers), a;
};
var Mu = (e) => {
  if (G)
    return he(e);
};
function ku(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function Lu(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
var Du = 0;
var Bu = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = inject(hn, void 0), a = ref(), s = ref(), i = computed(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = computed(() => {
    var d;
    const _ = unref(a), C = (d = unref(s)) != null ? d : Du;
    return {
      name: "arrow",
      enabled: !ai(_),
      options: {
        element: _,
        padding: C
      }
    };
  }), u = computed(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...Fu(e, [
      unref(l),
      unref(i)
    ])
  })), m = computed(() => Mu(e.referenceEl) || unref(o)), { attributes: y, state: p, styles: g, update: v, forceUpdate: c, instanceRef: h } = kl(m, n, u);
  return watch(h, (d) => t.value = d), onMounted(() => {
    watch(() => {
      var d;
      return (d = unref(m)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: y,
    arrowRef: a,
    contentRef: n,
    instanceRef: h,
    state: p,
    styles: g,
    role: r,
    forceUpdate: c,
    update: v
  };
};
var ju = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = or(), a = Ee("popper"), s = computed(() => unref(t).popper), i = ref(le(e.zIndex) ? e.zIndex : r()), l = computed(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = computed(() => [
    { zIndex: unref(i) },
    unref(n).popper,
    e.popperStyle || {}
  ]), m = computed(() => o.value === "dialog" ? "false" : void 0), y = computed(() => unref(n).arrow || {});
  return {
    ariaModal: m,
    arrowStyle: y,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = le(e.zIndex) ? e.zIndex : r();
    }
  };
};
var zu = (e, t) => {
  const n = ref(false), o = ref();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var m;
      ((m = u.detail) == null ? void 0 : m.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = true);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = false);
    },
    onReleaseRequested: () => {
      n.value = false, t("close");
    }
  };
};
var Hu = defineComponent({
  name: "ElPopperContent"
});
var Ku = defineComponent({
  ...Hu,
  props: vr,
  emits: Ru,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: m
    } = zu(o, n), { attributes: y, arrowRef: p, contentRef: g, styles: v, instanceRef: c, role: h, update: d } = Bu(o), {
      ariaModal: _,
      arrowStyle: C,
      contentAttrs: w,
      contentClass: T,
      contentStyle: S,
      updateZIndex: b
    } = ju(o, {
      styles: v,
      attributes: y,
      role: h
    }), P = inject(fo, void 0), R = ref();
    provide(lr, {
      arrowStyle: C,
      arrowRef: p,
      arrowOffset: R
    }), P && provide(fo, {
      ...P,
      addInputId: Bt,
      removeInputId: Bt
    });
    let A;
    const F = (k = true) => {
      d(), k && b();
    }, M = () => {
      F(false), o.visible && o.focusOnShow ? a.value = true : o.visible === false && (a.value = false);
    };
    return onMounted(() => {
      watch(() => o.triggerTargetEl, (k, re) => {
        A == null || A(), A = void 0;
        const j = unref(k || g.value), O = unref(re || g.value);
        ke(j) && (A = watch([h, () => o.ariaLabel, _, () => o.id], (L) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((Ce, ae) => {
            an(L[ae]) ? j.removeAttribute(Ce) : j.setAttribute(Ce, L[ae]);
          });
        }, { immediate: true })), O !== j && ke(O) && ["role", "aria-label", "aria-modal", "id"].forEach((L) => {
          O.removeAttribute(L);
        });
      }, { immediate: true }), watch(() => o.visible, M, { immediate: true });
    }), onBeforeUnmount(() => {
      A == null || A(), A = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: c,
      updatePopper: F,
      contentStyle: S
    }), (k, re) => (openBlock(), createElementBlock("div", mergeProps({
      ref_key: "contentRef",
      ref: g
    }, unref(w), {
      style: unref(S),
      class: unref(T),
      tabindex: "-1",
      onMouseenter: (j) => k.$emit("mouseenter", j),
      onMouseleave: (j) => k.$emit("mouseleave", j)
    }), [
      createVNode(unref(Au), {
        trapped: unref(a),
        "trap-on-focus-in": true,
        "focus-trap-el": unref(g),
        "focus-start-el": unref(r),
        onFocusAfterTrapped: unref(i),
        onFocusAfterReleased: unref(s),
        onFocusin: unref(l),
        onFocusoutPrevented: unref(u),
        onReleaseRequested: unref(m)
      }, {
        default: withCtx(() => [
          renderSlot(k.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Uu = ee(Ku, [["__file", "content.vue"]]);
var Vu = Ve(cu);
var _n = Symbol("elTooltip");
var mr = H({
  ...Kl,
  ...vr,
  appendTo: {
    type: x([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: x(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  ...rr(["ariaLabel"])
});
var gr = H({
  ...dr,
  disabled: Boolean,
  trigger: {
    type: x([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: x(Array),
    default: () => [et.enter, et.space]
  }
});
var {
  useModelToggleProps: Wu,
  useModelToggleEmits: qu,
  useModelToggle: Gu
} = jo("visible");
var Zu = H({
  ...ur,
  ...Wu,
  ...mr,
  ...gr,
  ...cr,
  showArrow: {
    type: Boolean,
    default: true
  }
});
var Ju = [
  ...qu,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
var Yu = (e, t) => ma(e) ? e.includes(t) : e === t;
var Fe = (e, t, n) => (o) => {
  Yu(unref(e), t) && n(o);
};
var Qu = defineComponent({
  name: "ElTooltipTrigger"
});
var Xu = defineComponent({
  ...Qu,
  props: gr,
  setup(e, { expose: t }) {
    const n = e, o = Ee("tooltip"), { controlled: r, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = inject(_n, void 0), m = ref(null), y = () => {
      if (unref(r) || n.disabled)
        return true;
    }, p = toRef(n, "trigger"), g = fe(y, Fe(p, "hover", i)), v = fe(y, Fe(p, "hover", l)), c = fe(y, Fe(p, "click", (w) => {
      w.button === 0 && u(w);
    })), h = fe(y, Fe(p, "focus", i)), d = fe(y, Fe(p, "focus", l)), _ = fe(y, Fe(p, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), C = fe(y, (w) => {
      const { code: T } = w;
      n.triggerKeys.includes(T) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: m
    }), (w, T) => (openBlock(), createBlock(unref(hu), {
      id: unref(a),
      "virtual-ref": w.virtualRef,
      open: unref(s),
      "virtual-triggering": w.virtualTriggering,
      class: normalizeClass(unref(o).e("trigger")),
      onBlur: unref(d),
      onClick: unref(c),
      onContextmenu: unref(_),
      onFocus: unref(h),
      onMouseenter: unref(g),
      onMouseleave: unref(v),
      onKeydown: unref(C)
    }, {
      default: withCtx(() => [
        renderSlot(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var ec = ee(Xu, [["__file", "trigger.vue"]]);
var tc = H({
  to: {
    type: x([String, Object]),
    required: true
  },
  disabled: Boolean
});
var nc = defineComponent({
  __name: "teleport",
  props: tc,
  setup(e) {
    return (t, n) => t.disabled ? renderSlot(t.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Teleport, {
      key: 1,
      to: t.to
    }, [
      renderSlot(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var oc = ee(nc, [["__file", "teleport.vue"]]);
var rc = Ve(oc);
var ac = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
var sc = defineComponent({
  ...ac,
  props: mr,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Xo(), r = Ee("tooltip"), a = ref(null);
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: m,
      onClose: y,
      onOpen: p,
      onShow: g,
      onHide: v,
      onBeforeShow: c,
      onBeforeHide: h
    } = inject(_n, void 0), d = computed(() => n.transition || `${r.namespace.value}-fade-in-linear`), _ = computed(() => false ? true : n.persistent);
    onBeforeUnmount(() => {
      s == null || s();
    });
    const C = computed(() => unref(_) ? true : unref(u)), w = computed(() => n.disabled ? false : unref(u)), T = computed(() => n.appendTo || o.value), S = computed(() => {
      var O;
      return (O = n.style) != null ? O : {};
    }), b = ref(true), P = () => {
      v(), b.value = true;
    }, R = () => {
      if (unref(i))
        return true;
    }, A = fe(R, () => {
      n.enterable && unref(m) === "hover" && p();
    }), F = fe(R, () => {
      unref(m) === "hover" && y();
    }), M = () => {
      var O, L;
      (L = (O = a.value) == null ? void 0 : O.updatePopper) == null || L.call(O), c == null || c();
    }, k = () => {
      h == null || h();
    }, re = () => {
      g(), s = oa(computed(() => {
        var O;
        return (O = a.value) == null ? void 0 : O.popperContentRef;
      }), () => {
        if (unref(i))
          return;
        unref(m) !== "hover" && y();
      });
    }, j = () => {
      n.virtualTriggering || y();
    };
    return watch(() => unref(u), (O) => {
      O ? b.value = false : s == null || s();
    }, {
      flush: "post"
    }), watch(() => n.content, () => {
      var O, L;
      (L = (O = a.value) == null ? void 0 : O.updatePopper) == null || L.call(O);
    }), t({
      contentRef: a
    }), (O, L) => (openBlock(), createBlock(unref(rc), {
      disabled: !O.teleported,
      to: unref(T)
    }, {
      default: withCtx(() => [
        createVNode(Transition, {
          name: unref(d),
          onAfterLeave: P,
          onBeforeEnter: M,
          onAfterEnter: re,
          onBeforeLeave: k
        }, {
          default: withCtx(() => [
            unref(C) ? withDirectives((openBlock(), createBlock(unref(Uu), mergeProps({
              key: 0,
              id: unref(l),
              ref_key: "contentRef",
              ref: a
            }, O.$attrs, {
              "aria-label": O.ariaLabel,
              "aria-hidden": b.value,
              "boundaries-padding": O.boundariesPadding,
              "fallback-placements": O.fallbackPlacements,
              "gpu-acceleration": O.gpuAcceleration,
              offset: O.offset,
              placement: O.placement,
              "popper-options": O.popperOptions,
              strategy: O.strategy,
              effect: O.effect,
              enterable: O.enterable,
              pure: O.pure,
              "popper-class": O.popperClass,
              "popper-style": [O.popperStyle, unref(S)],
              "reference-el": O.referenceEl,
              "trigger-target-el": O.triggerTargetEl,
              visible: unref(w),
              "z-index": O.zIndex,
              onMouseenter: unref(A),
              onMouseleave: unref(F),
              onBlur: j,
              onClose: unref(y)
            }), {
              default: withCtx(() => [
                renderSlot(O.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [vShow, unref(w)]
            ]) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var ic = ee(sc, [["__file", "content.vue"]]);
var lc = defineComponent({
  name: "ElTooltip"
});
var uc = defineComponent({
  ...lc,
  props: Zu,
  emits: Ju,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Hl();
    const r = Bl(), a = ref(), s = ref(), i = () => {
      var d;
      const _ = unref(a);
      _ && ((d = _.popperInstanceRef) == null || d.update());
    }, l = ref(false), u = ref(), { show: m, hide: y, hasUpdateHandler: p } = Gu({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: v } = Ul({
      showAfter: toRef(o, "showAfter"),
      hideAfter: toRef(o, "hideAfter"),
      autoClose: toRef(o, "autoClose"),
      open: m,
      close: y
    }), c = computed(() => bt(o.visible) && !p.value);
    provide(_n, {
      controlled: c,
      id: r,
      open: readonly(l),
      trigger: toRef(o, "trigger"),
      onOpen: (d) => {
        g(d);
      },
      onClose: (d) => {
        v(d);
      },
      onToggle: (d) => {
        unref(l) ? v(d) : g(d);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: i
    }), watch(() => o.disabled, (d) => {
      d && l.value && (l.value = false);
    });
    const h = (d) => {
      var _, C;
      const w = (C = (_ = s.value) == null ? void 0 : _.contentRef) == null ? void 0 : C.popperContentRef, T = (d == null ? void 0 : d.relatedTarget) || document.activeElement;
      return w && w.contains(T);
    };
    return onDeactivated(() => l.value && y()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: h,
      updatePopper: i,
      onOpen: g,
      onClose: v,
      hide: y
    }), (d, _) => (openBlock(), createBlock(unref(Vu), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: withCtx(() => [
        createVNode(ec, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: withCtx(() => [
            d.$slots.default ? renderSlot(d.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        createVNode(ic, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": d.ariaLabel,
          "boundaries-padding": d.boundariesPadding,
          content: d.content,
          disabled: d.disabled,
          effect: d.effect,
          enterable: d.enterable,
          "fallback-placements": d.fallbackPlacements,
          "hide-after": d.hideAfter,
          "gpu-acceleration": d.gpuAcceleration,
          offset: d.offset,
          persistent: d.persistent,
          "popper-class": d.popperClass,
          "popper-style": d.popperStyle,
          placement: d.placement,
          "popper-options": d.popperOptions,
          pure: d.pure,
          "raw-content": d.rawContent,
          "reference-el": d.referenceEl,
          "trigger-target-el": d.triggerTargetEl,
          "show-after": d.showAfter,
          strategy: d.strategy,
          teleported: d.teleported,
          transition: d.transition,
          "virtual-triggering": d.virtualTriggering,
          "z-index": d.zIndex,
          "append-to": d.appendTo
        }, {
          default: withCtx(() => [
            renderSlot(d.$slots, "content", {}, () => [
              d.rawContent ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (openBlock(), createElementBlock("span", { key: 1 }, toDisplayString(d.content), 1))
            ]),
            d.showArrow ? (openBlock(), createBlock(unref(pu), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var cc = ee(uc, [["__file", "tooltip.vue"]]);
var fc = Ve(cc);
var dc = H({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: true
  },
  color: String,
  badgeStyle: {
    type: x([String, Object, Array])
  },
  offset: {
    type: x(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
});
var pc = defineComponent({
  name: "ElBadge"
});
var vc = defineComponent({
  ...pc,
  props: dc,
  setup(e, { expose: t }) {
    const n = e, o = Ee("badge"), r = computed(() => n.isDot ? "" : le(n.value) && le(n.max) ? n.max < n.value ? `${n.max}+` : n.value === 0 && !n.showZero ? "" : `${n.value}` : `${n.value}`), a = computed(() => {
      var s, i, l, u, m;
      return [
        {
          backgroundColor: n.color,
          marginRight: zt(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: zt((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (m = n.badgeStyle) != null ? m : {}
      ];
    });
    return t({
      content: r
    }), (s, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(o).b())
    }, [
      renderSlot(s.$slots, "default"),
      createVNode(Transition, {
        name: `${unref(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("sup", {
            class: normalizeClass([
              unref(o).e("content"),
              unref(o).em("content", s.type),
              unref(o).is("fixed", !!s.$slots.default),
              unref(o).is("dot", s.isDot),
              s.badgeClass
            ]),
            style: normalizeStyle(unref(a)),
            textContent: toDisplayString(unref(r))
          }, null, 14, ["textContent"]), [
            [vShow, !s.hidden && (unref(r) || s.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var mc = ee(vc, [["__file", "badge.vue"]]);
var gc = Ve(mc);
var hr = ["success", "info", "warning", "error"];
var z = Ti({
  customClass: "",
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  plain: false,
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: G ? document.body : void 0
});
var hc = H({
  customClass: {
    type: String,
    default: z.customClass
  },
  center: {
    type: Boolean,
    default: z.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: z.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: z.duration
  },
  icon: {
    type: wi,
    default: z.icon
  },
  id: {
    type: String,
    default: z.id
  },
  message: {
    type: x([
      String,
      Object,
      Function
    ]),
    default: z.message
  },
  onClose: {
    type: x(Function),
    default: z.onClose
  },
  showClose: {
    type: Boolean,
    default: z.showClose
  },
  type: {
    type: String,
    values: hr,
    default: z.type
  },
  plain: {
    type: Boolean,
    default: z.plain
  },
  offset: {
    type: Number,
    default: z.offset
  },
  zIndex: {
    type: Number,
    default: z.zIndex
  },
  grouping: {
    type: Boolean,
    default: z.grouping
  },
  repeatNum: {
    type: Number,
    default: z.repeatNum
  }
});
var yc = {
  destroy: () => true
};
var ne = shallowReactive([]);
var bc = (e) => {
  const t = ne.findIndex((r) => r.id === e), n = ne[t];
  let o;
  return t > 0 && (o = ne[t - 1]), { current: n, prev: o };
};
var _c = (e) => {
  const { prev: t } = bc(e);
  return t ? t.vm.exposed.bottom.value : 0;
};
var wc = (e, t) => ne.findIndex((o) => o.id === e) > 0 ? 16 : t;
var Ec = defineComponent({
  name: "ElMessage"
});
var Oc = defineComponent({
  ...Ec,
  props: hc,
  emits: yc,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Ei, { ns: r, zIndex: a } = Ql("message"), { currentZIndex: s, nextZIndex: i } = a, l = ref(), u = ref(false), m = ref(0);
    let y;
    const p = computed(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = computed(() => {
      const b = n.type;
      return { [r.bm("icon", b)]: b && Gn[b] };
    }), v = computed(() => n.icon || Gn[n.type] || ""), c = computed(() => _c(n.id)), h = computed(() => wc(n.id, n.offset) + c.value), d = computed(() => m.value + h.value), _ = computed(() => ({
      top: `${h.value}px`,
      zIndex: s.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: y } = na(() => {
        T();
      }, n.duration));
    }
    function w() {
      y == null || y();
    }
    function T() {
      u.value = false;
    }
    function S({ code: b }) {
      b === et.esc && T();
    }
    return onMounted(() => {
      C(), i(), u.value = true;
    }), watch(() => n.repeatNum, () => {
      w(), C();
    }), vt(document, "keydown", S), la(l, () => {
      m.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: T
    }), (b, P) => (openBlock(), createBlock(Transition, {
      name: unref(r).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (R) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          id: b.id,
          ref_key: "messageRef",
          ref: l,
          class: normalizeClass([
            unref(r).b(),
            { [unref(r).m(b.type)]: b.type },
            unref(r).is("center", b.center),
            unref(r).is("closable", b.showClose),
            unref(r).is("plain", b.plain),
            b.customClass
          ]),
          style: normalizeStyle(unref(_)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: C
        }, [
          b.repeatNum > 1 ? (openBlock(), createBlock(unref(gc), {
            key: 0,
            value: b.repeatNum,
            type: unref(p),
            class: normalizeClass(unref(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
          unref(v) ? (openBlock(), createBlock(unref(co), {
            key: 1,
            class: normalizeClass([unref(r).e("icon"), unref(g)])
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(unref(v))))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          renderSlot(b.$slots, "default", {}, () => [
            b.dangerouslyUseHTMLString ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
              createBaseVNode("p", {
                class: normalizeClass(unref(r).e("content")),
                innerHTML: b.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (openBlock(), createElementBlock("p", {
              key: 0,
              class: normalizeClass(unref(r).e("content"))
            }, toDisplayString(b.message), 3))
          ]),
          b.showClose ? (openBlock(), createBlock(unref(co), {
            key: 2,
            class: normalizeClass(unref(r).e("closeBtn")),
            onClick: withModifiers(T, ["stop"])
          }, {
            default: withCtx(() => [
              createVNode(unref(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
        ], 46, ["id"]), [
          [vShow, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Cc = ee(Oc, [["__file", "message.vue"]]);
var Tc = 1;
var yr = (e) => {
  const t = !e || Le(e) || isVNode(e) || ye(e) ? { message: e } : e, n = {
    ...z,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Le(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    ke(o) || (Ne("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return bt(te.grouping) && !n.grouping && (n.grouping = te.grouping), le(te.duration) && n.duration === 3e3 && (n.duration = te.duration), le(te.offset) && n.offset === 16 && (n.offset = te.offset), bt(te.showClose) && !n.showClose && (n.showClose = te.showClose), n;
};
var Sc = (e) => {
  const t = ne.indexOf(e);
  if (t === -1)
    return;
  ne.splice(t, 1);
  const { handler: n } = e;
  n.close();
};
var Pc = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Tc++}`, r = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r == null || r(), Sc(m);
    },
    onDestroy: () => {
      render(null, a);
    }
  }, i = createVNode(Cc, s, ye(s.message) || isVNode(s.message) ? {
    default: ye(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Ke._context, render(i, a), e.appendChild(a.firstElementChild);
  const l = i.component, m = {
    id: o,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = false;
      }
    },
    props: i.component.props
  };
  return m;
};
var Ke = (e = {}, t) => {
  if (!G)
    return { close: () => {
    } };
  const n = yr(e);
  if (n.grouping && ne.length) {
    const r = ne.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (le(te.max) && ne.length >= te.max)
    return { close: () => {
    } };
  const o = Pc(n, t);
  return ne.push(o), o.handler;
};
hr.forEach((e) => {
  Ke[e] = (t = {}, n) => {
    const o = yr(t);
    return Ke({ ...o, type: e }, n);
  };
});
function xc(e) {
  for (const t of ne)
    (!e || e === t.props.type) && t.handler.close();
}
Ke.closeAll = xc;
Ke._context = null;
var Ic = Oi(Ke, "$message");
var Ac = { id: "vp-demo" };
var Nc = { class: "vp-demo-source vp-raw" };
var $c = { class: "vp-demo-actions" };
var Rc = ["onClick"];
var Fc = ["innerHTML"];
var Mc = defineComponent({
  __name: "index",
  props: {
    code: {},
    expand: { type: Boolean }
  },
  setup(e) {
    const t = e, n = ref(false), o = computed(() => decodeURIComponent(t.code)), r = [
      {
        message: "复制代码",
        icon: Yr,
        onClick: () => {
          navigator.clipboard.writeText(o.value).then(() => {
            Ic.success("已复制！");
          });
        }
      },
      {
        message: "查看源代码",
        icon: qr,
        onClick: () => n.value = !n.value
      }
    ];
    return watchEffect(() => {
      n.value = t.expand;
    }), (a, s) => (openBlock(), createBlock(unref(nu), { namespace: "vd" }, {
      default: withCtx(() => [
        createBaseVNode("div", Ac, [
          createBaseVNode("div", Nc, [
            renderSlot(a.$slots, "source")
          ]),
          createBaseVNode("div", $c, [
            (openBlock(), createElementBlock(Fragment, null, renderList(r, ({ message: i, icon: l, onClick: u }) => createVNode(unref(fc), { content: i }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: "vp-demo-actions-icon",
                  onClick: u
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(l)))
                ], 8, Rc)
              ]),
              _: 2
            }, 1032, ["content"])), 64))
          ]),
          n.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            innerHTML: o.value
          }, null, 8, Fc)) : createCommentVNode("", true)
        ])
      ]),
      _: 3
    }));
  }
});
var jc = (e, t) => {
  const n = Object.entries(t.modules).map(([o, r]) => ({
    name: o.replaceAll("../", "").replaceAll("./", "").replaceAll("/", "-").replace(/\.\w+$/, ""),
    component: r
  }));
  e.component("DemoContainer", Mc), n.forEach(({ name: o, component: r }) => {
    e.component(o, r);
  });
};
export {
  jc as mdVueDemo,
  Bc as mdVueDemoPlugin
};
/*! Bundled license information:

vitepress-vue-demo/dist/index.js:
  (**
  * @vue/shared v3.5.5
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! Element Plus Icons Vue v2.3.1 *)
*/
//# sourceMappingURL=vitepress-vue-demo.js.map
