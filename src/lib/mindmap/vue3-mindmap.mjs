import { ref as bA, computed as Dl, defineComponent as Wg, useCssModule as Jv, reactive as Yv, nextTick as Zv, withDirectives as $v, openBlock as ye, createElementBlock as Oe, normalizeClass as Ee, createElementVNode as Me, normalizeStyle as zv, Fragment as uh, renderList as ch, toDisplayString as qv, vShow as jv, watchEffect as hn, onMounted as Am, watch as mi, resolveComponent as em, createCommentVNode as Ei, createBlock as tm } from "vue";
const pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get asstSvg() {
    return Td;
  },
  get foreign() {
    return Sd;
  },
  get g() {
    return Af;
  },
  get svg() {
    return Kd;
  }
}, Symbol.toStringTag, { value: "Module" }));
function nm(A) {
  return { all: A = A || /* @__PURE__ */ new Map(), on: function(e, t) {
    var r = A.get(e);
    r ? r.push(t) : A.set(e, [t]);
  }, off: function(e, t) {
    var r = A.get(e);
    r && (t ? r.splice(r.indexOf(t) >>> 0, 1) : A.set(e, []));
  }, emit: function(e, t) {
    var r = A.get(e);
    r && r.slice().map(function(s) {
      s(t);
    }), (r = A.get("*")) && r.slice().map(function(s) {
      s(e, t);
    });
  } };
}
const TA = nm(), rm = "Mindmap_container_elmpj", im = "Mindmap_svg_elmpj", sm = "Mindmap_trigger_elmpj", om = "Mindmap_dragging_elmpj", am = "Mindmap_hidden_elmpj", um = "Mindmap_text_elmpj", cm = "Mindmap_selected_elmpj", lm = "Mindmap_content_elmpj", fm = "Mindmap_root_elmpj", Bm = "Mindmap_edited_elmpj", hm = "Mindmap_outline_elmpj", gm = "Mindmap_collapse_elmpj", wm = "Mindmap_disabled_elmpj", dm = "Mindmap_gps_elmpj", Qm = "Mindmap_fit_elmpj", pm = "Mindmap_download_elmpj", Cm = "Mindmap_prev_elmpj", Um = "Mindmap_next_elmpj", Fm = "Mindmap_close_elmpj", oA = {
  container: rm,
  "svg-wrapper": "Mindmap_svg-wrapper_elmpj",
  "asst-svg": "Mindmap_asst-svg_elmpj",
  svg: im,
  trigger: sm,
  dragging: om,
  "add-btn": "Mindmap_add-btn_elmpj",
  hidden: am,
  "expand-btn": "Mindmap_expand-btn_elmpj",
  text: um,
  selected: cm,
  content: lm,
  root: fm,
  edited: Bm,
  outline: hm,
  collapse: gm,
  "button-list": "Mindmap_button-list_elmpj",
  "right-bottom": "Mindmap_right-bottom_elmpj",
  "right-top": "Mindmap_right-top_elmpj",
  disabled: wm,
  gps: dm,
  fit: Qm,
  download: pm,
  prev: Cm,
  next: Um,
  close: Fm
};
function dn(A) {
  return function() {
    return A;
  };
}
const jc = Math.PI, Al = 2 * jc, Pn = 1e-6, vm = Al - Pn;
function Jg(A) {
  this._ += A[0];
  for (let e = 1, t = A.length; e < t; ++e)
    this._ += arguments[e] + A[e];
}
function mm(A) {
  let e = Math.floor(A);
  if (!(e >= 0)) throw new Error(`invalid digits: ${A}`);
  if (e > 15) return Jg;
  const t = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let s = 1, a = r.length; s < a; ++s)
      this._ += Math.round(arguments[s] * t) / t + r[s];
  };
}
class Em {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Jg : mm(e);
  }
  moveTo(e, t) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, t) {
    this._append`L${this._x1 = +e},${this._y1 = +t}`;
  }
  quadraticCurveTo(e, t, r, s) {
    this._append`Q${+e},${+t},${this._x1 = +r},${this._y1 = +s}`;
  }
  bezierCurveTo(e, t, r, s, a, u) {
    this._append`C${+e},${+t},${+r},${+s},${this._x1 = +a},${this._y1 = +u}`;
  }
  arcTo(e, t, r, s, a) {
    if (e = +e, t = +t, r = +r, s = +s, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let u = this._x1, f = this._y1, l = r - e, B = s - t, g = u - e, Q = f - t, C = g * g + Q * Q;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = t}`;
    else if (C > Pn) if (!(Math.abs(Q * l - B * g) > Pn) || !a)
      this._append`L${this._x1 = e},${this._y1 = t}`;
    else {
      let v = r - u, H = s - f, K = l * l + B * B, V = v * v + H * H, b = Math.sqrt(K), G = Math.sqrt(C), $ = a * Math.tan((jc - Math.acos((K + C - V) / (2 * b * G))) / 2), x = $ / G, N = $ / b;
      Math.abs(x - 1) > Pn && this._append`L${e + x * g},${t + x * Q}`, this._append`A${a},${a},0,0,${+(Q * v > g * H)},${this._x1 = e + N * l},${this._y1 = t + N * B}`;
    }
  }
  arc(e, t, r, s, a, u) {
    if (e = +e, t = +t, r = +r, u = !!u, r < 0) throw new Error(`negative radius: ${r}`);
    let f = r * Math.cos(s), l = r * Math.sin(s), B = e + f, g = t + l, Q = 1 ^ u, C = u ? s - a : a - s;
    this._x1 === null ? this._append`M${B},${g}` : (Math.abs(this._x1 - B) > Pn || Math.abs(this._y1 - g) > Pn) && this._append`L${B},${g}`, r && (C < 0 && (C = C % Al + Al), C > vm ? this._append`A${r},${r},0,1,${Q},${e - f},${t - l}A${r},${r},0,1,${Q},${this._x1 = B},${this._y1 = g}` : C > Pn && this._append`A${r},${r},0,${+(C >= jc)},${Q},${this._x1 = e + r * Math.cos(a)},${this._y1 = t + r * Math.sin(a)}`);
  }
  rect(e, t, r, s) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${r = +r}v${+s}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Yg(A) {
  let e = 3;
  return A.digits = function(t) {
    if (!arguments.length) return e;
    if (t == null)
      e = null;
    else {
      const r = Math.floor(t);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${t}`);
      e = r;
    }
    return A;
  }, () => new Em(e);
}
var ym = Array.prototype.slice;
function Hm(A) {
  return typeof A == "object" && "length" in A ? A : Array.from(A);
}
function Zg(A) {
  this._context = A;
}
Zg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(A, e) {
    switch (A = +A, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(A, e) : this._context.moveTo(A, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(A, e);
        break;
    }
  }
};
function Im(A) {
  return new Zg(A);
}
function $g(A) {
  return A[0];
}
function zg(A) {
  return A[1];
}
function _m(A, e) {
  var t = dn(!0), r = null, s = Im, a = null, u = Yg(f);
  A = typeof A == "function" ? A : A === void 0 ? $g : dn(A), e = typeof e == "function" ? e : e === void 0 ? zg : dn(e);
  function f(l) {
    var B, g = (l = Hm(l)).length, Q, C = !1, v;
    for (r == null && (a = s(v = u())), B = 0; B <= g; ++B)
      !(B < g && t(Q = l[B], B, l)) === C && ((C = !C) ? a.lineStart() : a.lineEnd()), C && a.point(+A(Q, B, l), +e(Q, B, l));
    if (v) return a = null, v + "" || null;
  }
  return f.x = function(l) {
    return arguments.length ? (A = typeof l == "function" ? l : dn(+l), f) : A;
  }, f.y = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : dn(+l), f) : e;
  }, f.defined = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : dn(!!l), f) : t;
  }, f.curve = function(l) {
    return arguments.length ? (s = l, r != null && (a = s(r)), f) : s;
  }, f.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = s(r = l), f) : r;
  }, f;
}
class xm {
  constructor(e, t) {
    this._context = e, this._x = t;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, t, e, t) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t) / 2, e, this._y0, e, t);
        break;
      }
    }
    this._x0 = e, this._y0 = t;
  }
}
function bm(A) {
  return new xm(A, !0);
}
function Lm(A) {
  return A.source;
}
function Km(A) {
  return A.target;
}
function Tm(A) {
  let e = Lm, t = Km, r = $g, s = zg, a = null, u = null, f = Yg(l);
  function l() {
    let B;
    const g = ym.call(arguments), Q = e.apply(this, g), C = t.apply(this, g);
    if (a == null && (u = A(B = f())), u.lineStart(), g[0] = Q, u.point(+r.apply(this, g), +s.apply(this, g)), g[0] = C, u.point(+r.apply(this, g), +s.apply(this, g)), u.lineEnd(), B) return u = null, B + "" || null;
  }
  return l.source = function(B) {
    return arguments.length ? (e = B, l) : e;
  }, l.target = function(B) {
    return arguments.length ? (t = B, l) : t;
  }, l.x = function(B) {
    return arguments.length ? (r = typeof B == "function" ? B : dn(+B), l) : r;
  }, l.y = function(B) {
    return arguments.length ? (s = typeof B == "function" ? B : dn(+B), l) : s;
  }, l.context = function(B) {
    return arguments.length ? (B == null ? a = u = null : u = A(a = B), l) : a;
  }, l;
}
function Sm() {
  return Tm(bm);
}
function qg(A, e) {
  this._context = A, this._t = e;
}
qg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(A, e) {
    switch (A = +A, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(A, e) : this._context.moveTo(A, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(A, e);
        else {
          var t = this._x * (1 - this._t) + A * this._t;
          this._context.lineTo(t, this._y), this._context.lineTo(t, e);
        }
        break;
      }
    }
    this._x = A, this._y = e;
  }
};
function Dm(A) {
  return new qg(A, 0.5);
}
function Mm(A) {
  return ((A *= 2) <= 1 ? A * A * A : (A -= 2) * A * A + 2) / 2;
}
var Ml = 3;
(function A(e) {
  e = +e;
  function t(r) {
    return Math.pow(r, e);
  }
  return t.exponent = A, t;
})(Ml);
var jg = function A(e) {
  e = +e;
  function t(r) {
    return 1 - Math.pow(1 - r, e);
  }
  return t.exponent = A, t;
}(Ml);
(function A(e) {
  e = +e;
  function t(r) {
    return ((r *= 2) <= 1 ? Math.pow(r, e) : 2 - Math.pow(2 - r, e)) / 2;
  }
  return t.exponent = A, t;
})(Ml);
var Om = { value: () => {
} };
function Ea() {
  for (var A = 0, e = arguments.length, t = {}, r; A < e; ++A) {
    if (!(r = arguments[A] + "") || r in t || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    t[r] = [];
  }
  return new ko(t);
}
function ko(A) {
  this._ = A;
}
function Rm(A, e) {
  return A.trim().split(/^|\s+/).map(function(t) {
    var r = "", s = t.indexOf(".");
    if (s >= 0 && (r = t.slice(s + 1), t = t.slice(0, s)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name: r };
  });
}
ko.prototype = Ea.prototype = {
  constructor: ko,
  on: function(A, e) {
    var t = this._, r = Rm(A + "", t), s, a = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++a < u; ) if ((s = (A = r[a]).type) && (s = Nm(t[s], A.name))) return s;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < u; )
      if (s = (A = r[a]).type) t[s] = lh(t[s], A.name, e);
      else if (e == null) for (s in t) t[s] = lh(t[s], A.name, null);
    return this;
  },
  copy: function() {
    var A = {}, e = this._;
    for (var t in e) A[t] = e[t].slice();
    return new ko(A);
  },
  call: function(A, e) {
    if ((s = arguments.length - 2) > 0) for (var t = new Array(s), r = 0, s, a; r < s; ++r) t[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(A)) throw new Error("unknown type: " + A);
    for (a = this._[A], r = 0, s = a.length; r < s; ++r) a[r].value.apply(e, t);
  },
  apply: function(A, e, t) {
    if (!this._.hasOwnProperty(A)) throw new Error("unknown type: " + A);
    for (var r = this._[A], s = 0, a = r.length; s < a; ++s) r[s].value.apply(e, t);
  }
};
function Nm(A, e) {
  for (var t = 0, r = A.length, s; t < r; ++t)
    if ((s = A[t]).name === e)
      return s.value;
}
function lh(A, e, t) {
  for (var r = 0, s = A.length; r < s; ++r)
    if (A[r].name === e) {
      A[r] = Om, A = A.slice(0, r).concat(A.slice(r + 1));
      break;
    }
  return t != null && A.push({ name: e, value: t }), A;
}
var el = "http://www.w3.org/1999/xhtml";
const fh = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: el,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ya(A) {
  var e = A += "", t = e.indexOf(":");
  return t >= 0 && (e = A.slice(0, t)) !== "xmlns" && (A = A.slice(t + 1)), fh.hasOwnProperty(e) ? { space: fh[e], local: A } : A;
}
function Gm(A) {
  return function() {
    var e = this.ownerDocument, t = this.namespaceURI;
    return t === el && e.documentElement.namespaceURI === el ? e.createElement(A) : e.createElementNS(t, A);
  };
}
function Vm(A) {
  return function() {
    return this.ownerDocument.createElementNS(A.space, A.local);
  };
}
function Aw(A) {
  var e = ya(A);
  return (e.local ? Vm : Gm)(e);
}
function Pm() {
}
function Ol(A) {
  return A == null ? Pm : function() {
    return this.querySelector(A);
  };
}
function km(A) {
  typeof A != "function" && (A = Ol(A));
  for (var e = this._groups, t = e.length, r = new Array(t), s = 0; s < t; ++s)
    for (var a = e[s], u = a.length, f = r[s] = new Array(u), l, B, g = 0; g < u; ++g)
      (l = a[g]) && (B = A.call(l, l.__data__, g, a)) && ("__data__" in l && (B.__data__ = l.__data__), f[g] = B);
  return new Re(r, this._parents);
}
function Xm(A) {
  return A == null ? [] : Array.isArray(A) ? A : Array.from(A);
}
function Wm() {
  return [];
}
function ew(A) {
  return A == null ? Wm : function() {
    return this.querySelectorAll(A);
  };
}
function Jm(A) {
  return function() {
    return Xm(A.apply(this, arguments));
  };
}
function Ym(A) {
  typeof A == "function" ? A = Jm(A) : A = ew(A);
  for (var e = this._groups, t = e.length, r = [], s = [], a = 0; a < t; ++a)
    for (var u = e[a], f = u.length, l, B = 0; B < f; ++B)
      (l = u[B]) && (r.push(A.call(l, l.__data__, B, u)), s.push(l));
  return new Re(r, s);
}
function tw(A) {
  return function() {
    return this.matches(A);
  };
}
function nw(A) {
  return function(e) {
    return e.matches(A);
  };
}
var Zm = Array.prototype.find;
function $m(A) {
  return function() {
    return Zm.call(this.children, A);
  };
}
function zm() {
  return this.firstElementChild;
}
function qm(A) {
  return this.select(A == null ? zm : $m(typeof A == "function" ? A : nw(A)));
}
var jm = Array.prototype.filter;
function AE() {
  return Array.from(this.children);
}
function eE(A) {
  return function() {
    return jm.call(this.children, A);
  };
}
function tE(A) {
  return this.selectAll(A == null ? AE : eE(typeof A == "function" ? A : nw(A)));
}
function nE(A) {
  typeof A != "function" && (A = tw(A));
  for (var e = this._groups, t = e.length, r = new Array(t), s = 0; s < t; ++s)
    for (var a = e[s], u = a.length, f = r[s] = [], l, B = 0; B < u; ++B)
      (l = a[B]) && A.call(l, l.__data__, B, a) && f.push(l);
  return new Re(r, this._parents);
}
function rw(A) {
  return new Array(A.length);
}
function rE() {
  return new Re(this._enter || this._groups.map(rw), this._parents);
}
function Aa(A, e) {
  this.ownerDocument = A.ownerDocument, this.namespaceURI = A.namespaceURI, this._next = null, this._parent = A, this.__data__ = e;
}
Aa.prototype = {
  constructor: Aa,
  appendChild: function(A) {
    return this._parent.insertBefore(A, this._next);
  },
  insertBefore: function(A, e) {
    return this._parent.insertBefore(A, e);
  },
  querySelector: function(A) {
    return this._parent.querySelector(A);
  },
  querySelectorAll: function(A) {
    return this._parent.querySelectorAll(A);
  }
};
function iE(A) {
  return function() {
    return A;
  };
}
function sE(A, e, t, r, s, a) {
  for (var u = 0, f, l = e.length, B = a.length; u < B; ++u)
    (f = e[u]) ? (f.__data__ = a[u], r[u] = f) : t[u] = new Aa(A, a[u]);
  for (; u < l; ++u)
    (f = e[u]) && (s[u] = f);
}
function oE(A, e, t, r, s, a, u) {
  var f, l, B = /* @__PURE__ */ new Map(), g = e.length, Q = a.length, C = new Array(g), v;
  for (f = 0; f < g; ++f)
    (l = e[f]) && (C[f] = v = u.call(l, l.__data__, f, e) + "", B.has(v) ? s[f] = l : B.set(v, l));
  for (f = 0; f < Q; ++f)
    v = u.call(A, a[f], f, a) + "", (l = B.get(v)) ? (r[f] = l, l.__data__ = a[f], B.delete(v)) : t[f] = new Aa(A, a[f]);
  for (f = 0; f < g; ++f)
    (l = e[f]) && B.get(C[f]) === l && (s[f] = l);
}
function aE(A) {
  return A.__data__;
}
function uE(A, e) {
  if (!arguments.length) return Array.from(this, aE);
  var t = e ? oE : sE, r = this._parents, s = this._groups;
  typeof A != "function" && (A = iE(A));
  for (var a = s.length, u = new Array(a), f = new Array(a), l = new Array(a), B = 0; B < a; ++B) {
    var g = r[B], Q = s[B], C = Q.length, v = cE(A.call(g, g && g.__data__, B, r)), H = v.length, K = f[B] = new Array(H), V = u[B] = new Array(H), b = l[B] = new Array(C);
    t(g, Q, K, V, b, v, e);
    for (var G = 0, $ = 0, x, N; G < H; ++G)
      if (x = K[G]) {
        for (G >= $ && ($ = G + 1); !(N = V[$]) && ++$ < H; ) ;
        x._next = N || null;
      }
  }
  return u = new Re(u, r), u._enter = f, u._exit = l, u;
}
function cE(A) {
  return typeof A == "object" && "length" in A ? A : Array.from(A);
}
function lE() {
  return new Re(this._exit || this._groups.map(rw), this._parents);
}
function fE(A, e, t) {
  var r = this.enter(), s = this, a = this.exit();
  return typeof A == "function" ? (r = A(r), r && (r = r.selection())) : r = r.append(A + ""), e != null && (s = e(s), s && (s = s.selection())), t == null ? a.remove() : t(a), r && s ? r.merge(s).order() : s;
}
function BE(A) {
  for (var e = A.selection ? A.selection() : A, t = this._groups, r = e._groups, s = t.length, a = r.length, u = Math.min(s, a), f = new Array(s), l = 0; l < u; ++l)
    for (var B = t[l], g = r[l], Q = B.length, C = f[l] = new Array(Q), v, H = 0; H < Q; ++H)
      (v = B[H] || g[H]) && (C[H] = v);
  for (; l < s; ++l)
    f[l] = t[l];
  return new Re(f, this._parents);
}
function hE() {
  for (var A = this._groups, e = -1, t = A.length; ++e < t; )
    for (var r = A[e], s = r.length - 1, a = r[s], u; --s >= 0; )
      (u = r[s]) && (a && u.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(u, a), a = u);
  return this;
}
function gE(A) {
  A || (A = wE);
  function e(Q, C) {
    return Q && C ? A(Q.__data__, C.__data__) : !Q - !C;
  }
  for (var t = this._groups, r = t.length, s = new Array(r), a = 0; a < r; ++a) {
    for (var u = t[a], f = u.length, l = s[a] = new Array(f), B, g = 0; g < f; ++g)
      (B = u[g]) && (l[g] = B);
    l.sort(e);
  }
  return new Re(s, this._parents).order();
}
function wE(A, e) {
  return A < e ? -1 : A > e ? 1 : A >= e ? 0 : NaN;
}
function dE() {
  var A = arguments[0];
  return arguments[0] = this, A.apply(null, arguments), this;
}
function QE() {
  return Array.from(this);
}
function pE() {
  for (var A = this._groups, e = 0, t = A.length; e < t; ++e)
    for (var r = A[e], s = 0, a = r.length; s < a; ++s) {
      var u = r[s];
      if (u) return u;
    }
  return null;
}
function CE() {
  let A = 0;
  for (const e of this) ++A;
  return A;
}
function UE() {
  return !this.node();
}
function FE(A) {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var s = e[t], a = 0, u = s.length, f; a < u; ++a)
      (f = s[a]) && A.call(f, f.__data__, a, s);
  return this;
}
function vE(A) {
  return function() {
    this.removeAttribute(A);
  };
}
function mE(A) {
  return function() {
    this.removeAttributeNS(A.space, A.local);
  };
}
function EE(A, e) {
  return function() {
    this.setAttribute(A, e);
  };
}
function yE(A, e) {
  return function() {
    this.setAttributeNS(A.space, A.local, e);
  };
}
function HE(A, e) {
  return function() {
    var t = e.apply(this, arguments);
    t == null ? this.removeAttribute(A) : this.setAttribute(A, t);
  };
}
function IE(A, e) {
  return function() {
    var t = e.apply(this, arguments);
    t == null ? this.removeAttributeNS(A.space, A.local) : this.setAttributeNS(A.space, A.local, t);
  };
}
function _E(A, e) {
  var t = ya(A);
  if (arguments.length < 2) {
    var r = this.node();
    return t.local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t);
  }
  return this.each((e == null ? t.local ? mE : vE : typeof e == "function" ? t.local ? IE : HE : t.local ? yE : EE)(t, e));
}
function iw(A) {
  return A.ownerDocument && A.ownerDocument.defaultView || A.document && A || A.defaultView;
}
function xE(A) {
  return function() {
    this.style.removeProperty(A);
  };
}
function bE(A, e, t) {
  return function() {
    this.style.setProperty(A, e, t);
  };
}
function LE(A, e, t) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(A) : this.style.setProperty(A, r, t);
  };
}
function KE(A, e, t) {
  return arguments.length > 1 ? this.each((e == null ? xE : typeof e == "function" ? LE : bE)(A, e, t ?? "")) : Or(this.node(), A);
}
function Or(A, e) {
  return A.style.getPropertyValue(e) || iw(A).getComputedStyle(A, null).getPropertyValue(e);
}
function TE(A) {
  return function() {
    delete this[A];
  };
}
function SE(A, e) {
  return function() {
    this[A] = e;
  };
}
function DE(A, e) {
  return function() {
    var t = e.apply(this, arguments);
    t == null ? delete this[A] : this[A] = t;
  };
}
function ME(A, e) {
  return arguments.length > 1 ? this.each((e == null ? TE : typeof e == "function" ? DE : SE)(A, e)) : this.node()[A];
}
function sw(A) {
  return A.trim().split(/^|\s+/);
}
function Rl(A) {
  return A.classList || new ow(A);
}
function ow(A) {
  this._node = A, this._names = sw(A.getAttribute("class") || "");
}
ow.prototype = {
  add: function(A) {
    var e = this._names.indexOf(A);
    e < 0 && (this._names.push(A), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(A) {
    var e = this._names.indexOf(A);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(A) {
    return this._names.indexOf(A) >= 0;
  }
};
function aw(A, e) {
  for (var t = Rl(A), r = -1, s = e.length; ++r < s; ) t.add(e[r]);
}
function uw(A, e) {
  for (var t = Rl(A), r = -1, s = e.length; ++r < s; ) t.remove(e[r]);
}
function OE(A) {
  return function() {
    aw(this, A);
  };
}
function RE(A) {
  return function() {
    uw(this, A);
  };
}
function NE(A, e) {
  return function() {
    (e.apply(this, arguments) ? aw : uw)(this, A);
  };
}
function GE(A, e) {
  var t = sw(A + "");
  if (arguments.length < 2) {
    for (var r = Rl(this.node()), s = -1, a = t.length; ++s < a; ) if (!r.contains(t[s])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? NE : e ? OE : RE)(t, e));
}
function VE() {
  this.textContent = "";
}
function PE(A) {
  return function() {
    this.textContent = A;
  };
}
function kE(A) {
  return function() {
    var e = A.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function XE(A) {
  return arguments.length ? this.each(A == null ? VE : (typeof A == "function" ? kE : PE)(A)) : this.node().textContent;
}
function WE() {
  this.innerHTML = "";
}
function JE(A) {
  return function() {
    this.innerHTML = A;
  };
}
function YE(A) {
  return function() {
    var e = A.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function ZE(A) {
  return arguments.length ? this.each(A == null ? WE : (typeof A == "function" ? YE : JE)(A)) : this.node().innerHTML;
}
function $E() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function zE() {
  return this.each($E);
}
function qE() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function jE() {
  return this.each(qE);
}
function Ay(A) {
  var e = typeof A == "function" ? A : Aw(A);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function ey() {
  return null;
}
function ty(A, e) {
  var t = typeof A == "function" ? A : Aw(A), r = e == null ? ey : typeof e == "function" ? e : Ol(e);
  return this.select(function() {
    return this.insertBefore(t.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ny() {
  var A = this.parentNode;
  A && A.removeChild(this);
}
function ry() {
  return this.each(ny);
}
function iy() {
  var A = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(A, this.nextSibling) : A;
}
function sy() {
  var A = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(A, this.nextSibling) : A;
}
function oy(A) {
  return this.select(A ? sy : iy);
}
function ay(A) {
  return arguments.length ? this.property("__data__", A) : this.node().__data__;
}
function uy(A) {
  return function(e) {
    A.call(this, e, this.__data__);
  };
}
function cy(A) {
  return A.trim().split(/^|\s+/).map(function(e) {
    var t = "", r = e.indexOf(".");
    return r >= 0 && (t = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: t };
  });
}
function ly(A) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var t = 0, r = -1, s = e.length, a; t < s; ++t)
        a = e[t], (!A.type || a.type === A.type) && a.name === A.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function fy(A, e, t) {
  return function() {
    var r = this.__on, s, a = uy(e);
    if (r) {
      for (var u = 0, f = r.length; u < f; ++u)
        if ((s = r[u]).type === A.type && s.name === A.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = a, s.options = t), s.value = e;
          return;
        }
    }
    this.addEventListener(A.type, a, t), s = { type: A.type, name: A.name, value: e, listener: a, options: t }, r ? r.push(s) : this.__on = [s];
  };
}
function By(A, e, t) {
  var r = cy(A + ""), s, a = r.length, u;
  if (arguments.length < 2) {
    var f = this.node().__on;
    if (f) {
      for (var l = 0, B = f.length, g; l < B; ++l)
        for (s = 0, g = f[l]; s < a; ++s)
          if ((u = r[s]).type === g.type && u.name === g.name)
            return g.value;
    }
    return;
  }
  for (f = e ? fy : ly, s = 0; s < a; ++s) this.each(f(r[s], e, t));
  return this;
}
function cw(A, e, t) {
  var r = iw(A), s = r.CustomEvent;
  typeof s == "function" ? s = new s(e, t) : (s = r.document.createEvent("Event"), t ? (s.initEvent(e, t.bubbles, t.cancelable), s.detail = t.detail) : s.initEvent(e, !1, !1)), A.dispatchEvent(s);
}
function hy(A, e) {
  return function() {
    return cw(this, A, e);
  };
}
function gy(A, e) {
  return function() {
    return cw(this, A, e.apply(this, arguments));
  };
}
function wy(A, e) {
  return this.each((typeof e == "function" ? gy : hy)(A, e));
}
function* dy() {
  for (var A = this._groups, e = 0, t = A.length; e < t; ++e)
    for (var r = A[e], s = 0, a = r.length, u; s < a; ++s)
      (u = r[s]) && (yield u);
}
var lw = [null];
function Re(A, e) {
  this._groups = A, this._parents = e;
}
function Pr() {
  return new Re([[document.documentElement]], lw);
}
function Qy() {
  return this;
}
Re.prototype = Pr.prototype = {
  constructor: Re,
  select: km,
  selectAll: Ym,
  selectChild: qm,
  selectChildren: tE,
  filter: nE,
  data: uE,
  enter: rE,
  exit: lE,
  join: fE,
  merge: BE,
  selection: Qy,
  order: hE,
  sort: gE,
  call: dE,
  nodes: QE,
  node: pE,
  size: CE,
  empty: UE,
  each: FE,
  attr: _E,
  style: KE,
  property: ME,
  classed: GE,
  text: XE,
  html: ZE,
  raise: zE,
  lower: jE,
  append: Ay,
  insert: ty,
  remove: ry,
  clone: oy,
  datum: ay,
  on: By,
  dispatch: wy,
  [Symbol.iterator]: dy
};
function ie(A) {
  return typeof A == "string" ? new Re([[document.querySelector(A)]], [document.documentElement]) : new Re([[A]], lw);
}
function py(A) {
  let e;
  for (; e = A.sourceEvent; ) A = e;
  return A;
}
function mt(A, e) {
  if (A = py(A), e === void 0 && (e = A.currentTarget), e) {
    var t = e.ownerSVGElement || e;
    if (t.createSVGPoint) {
      var r = t.createSVGPoint();
      return r.x = A.clientX, r.y = A.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var s = e.getBoundingClientRect();
      return [A.clientX - s.left - e.clientLeft, A.clientY - s.top - e.clientTop];
    }
  }
  return [A.pageX, A.pageY];
}
const Cy = { passive: !1 }, Ji = { capture: !0, passive: !1 };
function yc(A) {
  A.stopImmediatePropagation();
}
function Tr(A) {
  A.preventDefault(), A.stopImmediatePropagation();
}
function fw(A) {
  var e = A.document.documentElement, t = ie(A).on("dragstart.drag", Tr, Ji);
  "onselectstart" in e ? t.on("selectstart.drag", Tr, Ji) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Bw(A, e) {
  var t = A.document.documentElement, r = ie(A).on("dragstart.drag", null);
  e && (r.on("click.drag", Tr, Ji), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in t ? r.on("selectstart.drag", null) : (t.style.MozUserSelect = t.__noselect, delete t.__noselect);
}
const go = (A) => () => A;
function tl(A, {
  sourceEvent: e,
  subject: t,
  target: r,
  identifier: s,
  active: a,
  x: u,
  y: f,
  dx: l,
  dy: B,
  dispatch: g
}) {
  Object.defineProperties(this, {
    type: { value: A, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: t, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: u, enumerable: !0, configurable: !0 },
    y: { value: f, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: B, enumerable: !0, configurable: !0 },
    _: { value: g }
  });
}
tl.prototype.on = function() {
  var A = this._.on.apply(this._, arguments);
  return A === this._ ? this : A;
};
function Uy(A) {
  return !A.ctrlKey && !A.button;
}
function Fy() {
  return this.parentNode;
}
function vy(A, e) {
  return e ?? { x: A.x, y: A.y };
}
function my() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ey() {
  var A = Uy, e = Fy, t = vy, r = my, s = {}, a = Ea("start", "drag", "end"), u = 0, f, l, B, g, Q = 0;
  function C(x) {
    x.on("mousedown.drag", v).filter(r).on("touchstart.drag", V).on("touchmove.drag", b, Cy).on("touchend.drag touchcancel.drag", G).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(x, N) {
    if (!(g || !A.call(this, x, N))) {
      var D = $(this, e.call(this, x, N), x, N, "mouse");
      D && (ie(x.view).on("mousemove.drag", H, Ji).on("mouseup.drag", K, Ji), fw(x.view), yc(x), B = !1, f = x.clientX, l = x.clientY, D("start", x));
    }
  }
  function H(x) {
    if (Tr(x), !B) {
      var N = x.clientX - f, D = x.clientY - l;
      B = N * N + D * D > Q;
    }
    s.mouse("drag", x);
  }
  function K(x) {
    ie(x.view).on("mousemove.drag mouseup.drag", null), Bw(x.view, B), Tr(x), s.mouse("end", x);
  }
  function V(x, N) {
    if (A.call(this, x, N)) {
      var D = x.changedTouches, W = e.call(this, x, N), j = D.length, z, gA;
      for (z = 0; z < j; ++z)
        (gA = $(this, W, x, N, D[z].identifier, D[z])) && (yc(x), gA("start", x, D[z]));
    }
  }
  function b(x) {
    var N = x.changedTouches, D = N.length, W, j;
    for (W = 0; W < D; ++W)
      (j = s[N[W].identifier]) && (Tr(x), j("drag", x, N[W]));
  }
  function G(x) {
    var N = x.changedTouches, D = N.length, W, j;
    for (g && clearTimeout(g), g = setTimeout(function() {
      g = null;
    }, 500), W = 0; W < D; ++W)
      (j = s[N[W].identifier]) && (yc(x), j("end", x, N[W]));
  }
  function $(x, N, D, W, j, z) {
    var gA = a.copy(), UA = mt(z || D, N), RA, hA, y;
    if ((y = t.call(x, new tl("beforestart", {
      sourceEvent: D,
      target: C,
      identifier: j,
      active: u,
      x: UA[0],
      y: UA[1],
      dx: 0,
      dy: 0,
      dispatch: gA
    }), W)) != null)
      return RA = y.x - UA[0] || 0, hA = y.y - UA[1] || 0, function J(O, P, AA) {
        var nA = UA, k;
        switch (O) {
          case "start":
            s[j] = J, k = u++;
            break;
          case "end":
            delete s[j], --u;
          case "drag":
            UA = mt(AA || P, N), k = u;
            break;
        }
        gA.call(
          O,
          x,
          new tl(O, {
            sourceEvent: P,
            subject: y,
            target: C,
            identifier: j,
            active: k,
            x: UA[0] + RA,
            y: UA[1] + hA,
            dx: UA[0] - nA[0],
            dy: UA[1] - nA[1],
            dispatch: gA
          }),
          W
        );
      };
  }
  return C.filter = function(x) {
    return arguments.length ? (A = typeof x == "function" ? x : go(!!x), C) : A;
  }, C.container = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : go(x), C) : e;
  }, C.subject = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : go(x), C) : t;
  }, C.touchable = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : go(!!x), C) : r;
  }, C.on = function() {
    var x = a.on.apply(a, arguments);
    return x === a ? C : x;
  }, C.clickDistance = function(x) {
    return arguments.length ? (Q = (x = +x) * x, C) : Math.sqrt(Q);
  }, C;
}
function Nl(A, e, t) {
  A.prototype = e.prototype = t, t.constructor = A;
}
function hw(A, e) {
  var t = Object.create(A.prototype);
  for (var r in e) t[r] = e[r];
  return t;
}
function rs() {
}
var Yi = 0.7, ea = 1 / Yi, Sr = "\\s*([+-]?\\d+)\\s*", Zi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", yy = /^#([0-9a-f]{3,8})$/, Hy = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Iy = new RegExp(`^rgb\\(${yt},${yt},${yt}\\)$`), _y = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${Zi}\\)$`), xy = new RegExp(`^rgba\\(${yt},${yt},${yt},${Zi}\\)$`), by = new RegExp(`^hsl\\(${Zi},${yt},${yt}\\)$`), Ly = new RegExp(`^hsla\\(${Zi},${yt},${yt},${Zi}\\)$`), Bh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Nl(rs, jn, {
  copy(A) {
    return Object.assign(new this.constructor(), this, A);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hh,
  // Deprecated! Use color.formatHex.
  formatHex: hh,
  formatHex8: Ky,
  formatHsl: Ty,
  formatRgb: gh,
  toString: gh
});
function hh() {
  return this.rgb().formatHex();
}
function Ky() {
  return this.rgb().formatHex8();
}
function Ty() {
  return gw(this).formatHsl();
}
function gh() {
  return this.rgb().formatRgb();
}
function jn(A) {
  var e, t;
  return A = (A + "").trim().toLowerCase(), (e = yy.exec(A)) ? (t = e[1].length, e = parseInt(e[1], 16), t === 6 ? wh(e) : t === 3 ? new Ie(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : t === 8 ? wo(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : t === 4 ? wo(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Hy.exec(A)) ? new Ie(e[1], e[2], e[3], 1) : (e = Iy.exec(A)) ? new Ie(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = _y.exec(A)) ? wo(e[1], e[2], e[3], e[4]) : (e = xy.exec(A)) ? wo(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = by.exec(A)) ? ph(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ly.exec(A)) ? ph(e[1], e[2] / 100, e[3] / 100, e[4]) : Bh.hasOwnProperty(A) ? wh(Bh[A]) : A === "transparent" ? new Ie(NaN, NaN, NaN, 0) : null;
}
function wh(A) {
  return new Ie(A >> 16 & 255, A >> 8 & 255, A & 255, 1);
}
function wo(A, e, t, r) {
  return r <= 0 && (A = e = t = NaN), new Ie(A, e, t, r);
}
function Sy(A) {
  return A instanceof rs || (A = jn(A)), A ? (A = A.rgb(), new Ie(A.r, A.g, A.b, A.opacity)) : new Ie();
}
function nl(A, e, t, r) {
  return arguments.length === 1 ? Sy(A) : new Ie(A, e, t, r ?? 1);
}
function Ie(A, e, t, r) {
  this.r = +A, this.g = +e, this.b = +t, this.opacity = +r;
}
Nl(Ie, nl, hw(rs, {
  brighter(A) {
    return A = A == null ? ea : Math.pow(ea, A), new Ie(this.r * A, this.g * A, this.b * A, this.opacity);
  },
  darker(A) {
    return A = A == null ? Yi : Math.pow(Yi, A), new Ie(this.r * A, this.g * A, this.b * A, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ie($n(this.r), $n(this.g), $n(this.b), ta(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: dh,
  // Deprecated! Use color.formatHex.
  formatHex: dh,
  formatHex8: Dy,
  formatRgb: Qh,
  toString: Qh
}));
function dh() {
  return `#${Wn(this.r)}${Wn(this.g)}${Wn(this.b)}`;
}
function Dy() {
  return `#${Wn(this.r)}${Wn(this.g)}${Wn(this.b)}${Wn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Qh() {
  const A = ta(this.opacity);
  return `${A === 1 ? "rgb(" : "rgba("}${$n(this.r)}, ${$n(this.g)}, ${$n(this.b)}${A === 1 ? ")" : `, ${A})`}`;
}
function ta(A) {
  return isNaN(A) ? 1 : Math.max(0, Math.min(1, A));
}
function $n(A) {
  return Math.max(0, Math.min(255, Math.round(A) || 0));
}
function Wn(A) {
  return A = $n(A), (A < 16 ? "0" : "") + A.toString(16);
}
function ph(A, e, t, r) {
  return r <= 0 ? A = e = t = NaN : t <= 0 || t >= 1 ? A = e = NaN : e <= 0 && (A = NaN), new at(A, e, t, r);
}
function gw(A) {
  if (A instanceof at) return new at(A.h, A.s, A.l, A.opacity);
  if (A instanceof rs || (A = jn(A)), !A) return new at();
  if (A instanceof at) return A;
  A = A.rgb();
  var e = A.r / 255, t = A.g / 255, r = A.b / 255, s = Math.min(e, t, r), a = Math.max(e, t, r), u = NaN, f = a - s, l = (a + s) / 2;
  return f ? (e === a ? u = (t - r) / f + (t < r) * 6 : t === a ? u = (r - e) / f + 2 : u = (e - t) / f + 4, f /= l < 0.5 ? a + s : 2 - a - s, u *= 60) : f = l > 0 && l < 1 ? 0 : u, new at(u, f, l, A.opacity);
}
function My(A, e, t, r) {
  return arguments.length === 1 ? gw(A) : new at(A, e, t, r ?? 1);
}
function at(A, e, t, r) {
  this.h = +A, this.s = +e, this.l = +t, this.opacity = +r;
}
Nl(at, My, hw(rs, {
  brighter(A) {
    return A = A == null ? ea : Math.pow(ea, A), new at(this.h, this.s, this.l * A, this.opacity);
  },
  darker(A) {
    return A = A == null ? Yi : Math.pow(Yi, A), new at(this.h, this.s, this.l * A, this.opacity);
  },
  rgb() {
    var A = this.h % 360 + (this.h < 0) * 360, e = isNaN(A) || isNaN(this.s) ? 0 : this.s, t = this.l, r = t + (t < 0.5 ? t : 1 - t) * e, s = 2 * t - r;
    return new Ie(
      Hc(A >= 240 ? A - 240 : A + 120, s, r),
      Hc(A, s, r),
      Hc(A < 120 ? A + 240 : A - 120, s, r),
      this.opacity
    );
  },
  clamp() {
    return new at(Ch(this.h), Qo(this.s), Qo(this.l), ta(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const A = ta(this.opacity);
    return `${A === 1 ? "hsl(" : "hsla("}${Ch(this.h)}, ${Qo(this.s) * 100}%, ${Qo(this.l) * 100}%${A === 1 ? ")" : `, ${A})`}`;
  }
}));
function Ch(A) {
  return A = (A || 0) % 360, A < 0 ? A + 360 : A;
}
function Qo(A) {
  return Math.max(0, Math.min(1, A || 0));
}
function Hc(A, e, t) {
  return (A < 60 ? e + (t - e) * A / 60 : A < 180 ? t : A < 240 ? e + (t - e) * (240 - A) / 60 : e) * 255;
}
const Gl = (A) => () => A;
function Oy(A, e) {
  return function(t) {
    return A + t * e;
  };
}
function Ry(A, e, t) {
  return A = Math.pow(A, t), e = Math.pow(e, t) - A, t = 1 / t, function(r) {
    return Math.pow(A + r * e, t);
  };
}
function Ny(A) {
  return (A = +A) == 1 ? ww : function(e, t) {
    return t - e ? Ry(e, t, A) : Gl(isNaN(e) ? t : e);
  };
}
function ww(A, e) {
  var t = e - A;
  return t ? Oy(A, t) : Gl(isNaN(A) ? e : A);
}
const na = function A(e) {
  var t = Ny(e);
  function r(s, a) {
    var u = t((s = nl(s)).r, (a = nl(a)).r), f = t(s.g, a.g), l = t(s.b, a.b), B = ww(s.opacity, a.opacity);
    return function(g) {
      return s.r = u(g), s.g = f(g), s.b = l(g), s.opacity = B(g), s + "";
    };
  }
  return r.gamma = A, r;
}(1);
function Gy(A, e) {
  e || (e = []);
  var t = A ? Math.min(e.length, A.length) : 0, r = e.slice(), s;
  return function(a) {
    for (s = 0; s < t; ++s) r[s] = A[s] * (1 - a) + e[s] * a;
    return r;
  };
}
function Vy(A) {
  return ArrayBuffer.isView(A) && !(A instanceof DataView);
}
function Py(A, e) {
  var t = e ? e.length : 0, r = A ? Math.min(t, A.length) : 0, s = new Array(r), a = new Array(t), u;
  for (u = 0; u < r; ++u) s[u] = Vl(A[u], e[u]);
  for (; u < t; ++u) a[u] = e[u];
  return function(f) {
    for (u = 0; u < r; ++u) a[u] = s[u](f);
    return a;
  };
}
function ky(A, e) {
  var t = /* @__PURE__ */ new Date();
  return A = +A, e = +e, function(r) {
    return t.setTime(A * (1 - r) + e * r), t;
  };
}
function Et(A, e) {
  return A = +A, e = +e, function(t) {
    return A * (1 - t) + e * t;
  };
}
function Xy(A, e) {
  var t = {}, r = {}, s;
  (A === null || typeof A != "object") && (A = {}), (e === null || typeof e != "object") && (e = {});
  for (s in e)
    s in A ? t[s] = Vl(A[s], e[s]) : r[s] = e[s];
  return function(a) {
    for (s in t) r[s] = t[s](a);
    return r;
  };
}
var rl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ic = new RegExp(rl.source, "g");
function Wy(A) {
  return function() {
    return A;
  };
}
function Jy(A) {
  return function(e) {
    return A(e) + "";
  };
}
function dw(A, e) {
  var t = rl.lastIndex = Ic.lastIndex = 0, r, s, a, u = -1, f = [], l = [];
  for (A = A + "", e = e + ""; (r = rl.exec(A)) && (s = Ic.exec(e)); )
    (a = s.index) > t && (a = e.slice(t, a), f[u] ? f[u] += a : f[++u] = a), (r = r[0]) === (s = s[0]) ? f[u] ? f[u] += s : f[++u] = s : (f[++u] = null, l.push({ i: u, x: Et(r, s) })), t = Ic.lastIndex;
  return t < e.length && (a = e.slice(t), f[u] ? f[u] += a : f[++u] = a), f.length < 2 ? l[0] ? Jy(l[0].x) : Wy(e) : (e = l.length, function(B) {
    for (var g = 0, Q; g < e; ++g) f[(Q = l[g]).i] = Q.x(B);
    return f.join("");
  });
}
function Vl(A, e) {
  var t = typeof e, r;
  return e == null || t === "boolean" ? Gl(e) : (t === "number" ? Et : t === "string" ? (r = jn(e)) ? (e = r, na) : dw : e instanceof jn ? na : e instanceof Date ? ky : Vy(e) ? Gy : Array.isArray(e) ? Py : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Xy : Et)(A, e);
}
var Uh = 180 / Math.PI, il = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qw(A, e, t, r, s, a) {
  var u, f, l;
  return (u = Math.sqrt(A * A + e * e)) && (A /= u, e /= u), (l = A * t + e * r) && (t -= A * l, r -= e * l), (f = Math.sqrt(t * t + r * r)) && (t /= f, r /= f, l /= f), A * r < e * t && (A = -A, e = -e, l = -l, u = -u), {
    translateX: s,
    translateY: a,
    rotate: Math.atan2(e, A) * Uh,
    skewX: Math.atan(l) * Uh,
    scaleX: u,
    scaleY: f
  };
}
var po;
function Yy(A) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(A + "");
  return e.isIdentity ? il : Qw(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Zy(A) {
  return A == null || (po || (po = document.createElementNS("http://www.w3.org/2000/svg", "g")), po.setAttribute("transform", A), !(A = po.transform.baseVal.consolidate())) ? il : (A = A.matrix, Qw(A.a, A.b, A.c, A.d, A.e, A.f));
}
function pw(A, e, t, r) {
  function s(B) {
    return B.length ? B.pop() + " " : "";
  }
  function a(B, g, Q, C, v, H) {
    if (B !== Q || g !== C) {
      var K = v.push("translate(", null, e, null, t);
      H.push({ i: K - 4, x: Et(B, Q) }, { i: K - 2, x: Et(g, C) });
    } else (Q || C) && v.push("translate(" + Q + e + C + t);
  }
  function u(B, g, Q, C) {
    B !== g ? (B - g > 180 ? g += 360 : g - B > 180 && (B += 360), C.push({ i: Q.push(s(Q) + "rotate(", null, r) - 2, x: Et(B, g) })) : g && Q.push(s(Q) + "rotate(" + g + r);
  }
  function f(B, g, Q, C) {
    B !== g ? C.push({ i: Q.push(s(Q) + "skewX(", null, r) - 2, x: Et(B, g) }) : g && Q.push(s(Q) + "skewX(" + g + r);
  }
  function l(B, g, Q, C, v, H) {
    if (B !== Q || g !== C) {
      var K = v.push(s(v) + "scale(", null, ",", null, ")");
      H.push({ i: K - 4, x: Et(B, Q) }, { i: K - 2, x: Et(g, C) });
    } else (Q !== 1 || C !== 1) && v.push(s(v) + "scale(" + Q + "," + C + ")");
  }
  return function(B, g) {
    var Q = [], C = [];
    return B = A(B), g = A(g), a(B.translateX, B.translateY, g.translateX, g.translateY, Q, C), u(B.rotate, g.rotate, Q, C), f(B.skewX, g.skewX, Q, C), l(B.scaleX, B.scaleY, g.scaleX, g.scaleY, Q, C), B = g = null, function(v) {
      for (var H = -1, K = C.length, V; ++H < K; ) Q[(V = C[H]).i] = V.x(v);
      return Q.join("");
    };
  };
}
var $y = pw(Yy, "px, ", "px)", "deg)"), zy = pw(Zy, ", ", ")", ")"), qy = 1e-12;
function Fh(A) {
  return ((A = Math.exp(A)) + 1 / A) / 2;
}
function jy(A) {
  return ((A = Math.exp(A)) - 1 / A) / 2;
}
function AH(A) {
  return ((A = Math.exp(2 * A)) - 1) / (A + 1);
}
const eH = function A(e, t, r) {
  function s(a, u) {
    var f = a[0], l = a[1], B = a[2], g = u[0], Q = u[1], C = u[2], v = g - f, H = Q - l, K = v * v + H * H, V, b;
    if (K < qy)
      b = Math.log(C / B) / e, V = function(W) {
        return [
          f + W * v,
          l + W * H,
          B * Math.exp(e * W * b)
        ];
      };
    else {
      var G = Math.sqrt(K), $ = (C * C - B * B + r * K) / (2 * B * t * G), x = (C * C - B * B - r * K) / (2 * C * t * G), N = Math.log(Math.sqrt($ * $ + 1) - $), D = Math.log(Math.sqrt(x * x + 1) - x);
      b = (D - N) / e, V = function(W) {
        var j = W * b, z = Fh(N), gA = B / (t * G) * (z * AH(e * j + N) - jy(N));
        return [
          f + gA * v,
          l + gA * H,
          B * z / Fh(e * j + N)
        ];
      };
    }
    return V.duration = b * 1e3 * e / Math.SQRT2, V;
  }
  return s.rho = function(a) {
    var u = Math.max(1e-3, +a), f = u * u, l = f * f;
    return A(u, f, l);
  }, s;
}(Math.SQRT2, 2, 4);
var Rr = 0, Li = 0, yi = 0, Cw = 1e3, ra, Ki, ia = 0, Ar = 0, Ha = 0, $i = typeof performance == "object" && performance.now ? performance : Date, Uw = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(A) {
  setTimeout(A, 17);
};
function Pl() {
  return Ar || (Uw(tH), Ar = $i.now() + Ha);
}
function tH() {
  Ar = 0;
}
function sa() {
  this._call = this._time = this._next = null;
}
sa.prototype = Fw.prototype = {
  constructor: sa,
  restart: function(A, e, t) {
    if (typeof A != "function") throw new TypeError("callback is not a function");
    t = (t == null ? Pl() : +t) + (e == null ? 0 : +e), !this._next && Ki !== this && (Ki ? Ki._next = this : ra = this, Ki = this), this._call = A, this._time = t, sl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, sl());
  }
};
function Fw(A, e, t) {
  var r = new sa();
  return r.restart(A, e, t), r;
}
function nH() {
  Pl(), ++Rr;
  for (var A = ra, e; A; )
    (e = Ar - A._time) >= 0 && A._call.call(void 0, e), A = A._next;
  --Rr;
}
function vh() {
  Ar = (ia = $i.now()) + Ha, Rr = Li = 0;
  try {
    nH();
  } finally {
    Rr = 0, iH(), Ar = 0;
  }
}
function rH() {
  var A = $i.now(), e = A - ia;
  e > Cw && (Ha -= e, ia = A);
}
function iH() {
  for (var A, e = ra, t, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), A = e, e = e._next) : (t = e._next, e._next = null, e = A ? A._next = t : ra = t);
  Ki = A, sl(r);
}
function sl(A) {
  if (!Rr) {
    Li && (Li = clearTimeout(Li));
    var e = A - Ar;
    e > 24 ? (A < 1 / 0 && (Li = setTimeout(vh, A - $i.now() - Ha)), yi && (yi = clearInterval(yi))) : (yi || (ia = $i.now(), yi = setInterval(rH, Cw)), Rr = 1, Uw(vh));
  }
}
function mh(A, e, t) {
  var r = new sa();
  return e = e == null ? 0 : +e, r.restart((s) => {
    r.stop(), A(s + e);
  }, e, t), r;
}
var sH = Ea("start", "end", "cancel", "interrupt"), oH = [], vw = 0, Eh = 1, ol = 2, Xo = 3, yh = 4, al = 5, Wo = 6;
function Ia(A, e, t, r, s, a) {
  var u = A.__transition;
  if (!u) A.__transition = {};
  else if (t in u) return;
  aH(A, t, {
    name: e,
    index: r,
    // For context during callback.
    group: s,
    // For context during callback.
    on: sH,
    tween: oH,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: vw
  });
}
function kl(A, e) {
  var t = lt(A, e);
  if (t.state > vw) throw new Error("too late; already scheduled");
  return t;
}
function Ht(A, e) {
  var t = lt(A, e);
  if (t.state > Xo) throw new Error("too late; already running");
  return t;
}
function lt(A, e) {
  var t = A.__transition;
  if (!t || !(t = t[e])) throw new Error("transition not found");
  return t;
}
function aH(A, e, t) {
  var r = A.__transition, s;
  r[e] = t, t.timer = Fw(a, 0, t.time);
  function a(B) {
    t.state = Eh, t.timer.restart(u, t.delay, t.time), t.delay <= B && u(B - t.delay);
  }
  function u(B) {
    var g, Q, C, v;
    if (t.state !== Eh) return l();
    for (g in r)
      if (v = r[g], v.name === t.name) {
        if (v.state === Xo) return mh(u);
        v.state === yh ? (v.state = Wo, v.timer.stop(), v.on.call("interrupt", A, A.__data__, v.index, v.group), delete r[g]) : +g < e && (v.state = Wo, v.timer.stop(), v.on.call("cancel", A, A.__data__, v.index, v.group), delete r[g]);
      }
    if (mh(function() {
      t.state === Xo && (t.state = yh, t.timer.restart(f, t.delay, t.time), f(B));
    }), t.state = ol, t.on.call("start", A, A.__data__, t.index, t.group), t.state === ol) {
      for (t.state = Xo, s = new Array(C = t.tween.length), g = 0, Q = -1; g < C; ++g)
        (v = t.tween[g].value.call(A, A.__data__, t.index, t.group)) && (s[++Q] = v);
      s.length = Q + 1;
    }
  }
  function f(B) {
    for (var g = B < t.duration ? t.ease.call(null, B / t.duration) : (t.timer.restart(l), t.state = al, 1), Q = -1, C = s.length; ++Q < C; )
      s[Q].call(A, g);
    t.state === al && (t.on.call("end", A, A.__data__, t.index, t.group), l());
  }
  function l() {
    t.state = Wo, t.timer.stop(), delete r[e];
    for (var B in r) return;
    delete A.__transition;
  }
}
function Jo(A, e) {
  var t = A.__transition, r, s, a = !0, u;
  if (t) {
    e = e == null ? null : e + "";
    for (u in t) {
      if ((r = t[u]).name !== e) {
        a = !1;
        continue;
      }
      s = r.state > ol && r.state < al, r.state = Wo, r.timer.stop(), r.on.call(s ? "interrupt" : "cancel", A, A.__data__, r.index, r.group), delete t[u];
    }
    a && delete A.__transition;
  }
}
function uH(A) {
  return this.each(function() {
    Jo(this, A);
  });
}
function cH(A, e) {
  var t, r;
  return function() {
    var s = Ht(this, A), a = s.tween;
    if (a !== t) {
      r = t = a;
      for (var u = 0, f = r.length; u < f; ++u)
        if (r[u].name === e) {
          r = r.slice(), r.splice(u, 1);
          break;
        }
    }
    s.tween = r;
  };
}
function lH(A, e, t) {
  var r, s;
  if (typeof t != "function") throw new Error();
  return function() {
    var a = Ht(this, A), u = a.tween;
    if (u !== r) {
      s = (r = u).slice();
      for (var f = { name: e, value: t }, l = 0, B = s.length; l < B; ++l)
        if (s[l].name === e) {
          s[l] = f;
          break;
        }
      l === B && s.push(f);
    }
    a.tween = s;
  };
}
function fH(A, e) {
  var t = this._id;
  if (A += "", arguments.length < 2) {
    for (var r = lt(this.node(), t).tween, s = 0, a = r.length, u; s < a; ++s)
      if ((u = r[s]).name === A)
        return u.value;
    return null;
  }
  return this.each((e == null ? cH : lH)(t, A, e));
}
function Xl(A, e, t) {
  var r = A._id;
  return A.each(function() {
    var s = Ht(this, r);
    (s.value || (s.value = {}))[e] = t.apply(this, arguments);
  }), function(s) {
    return lt(s, r).value[e];
  };
}
function mw(A, e) {
  var t;
  return (typeof e == "number" ? Et : e instanceof jn ? na : (t = jn(e)) ? (e = t, na) : dw)(A, e);
}
function BH(A) {
  return function() {
    this.removeAttribute(A);
  };
}
function hH(A) {
  return function() {
    this.removeAttributeNS(A.space, A.local);
  };
}
function gH(A, e, t) {
  var r, s = t + "", a;
  return function() {
    var u = this.getAttribute(A);
    return u === s ? null : u === r ? a : a = e(r = u, t);
  };
}
function wH(A, e, t) {
  var r, s = t + "", a;
  return function() {
    var u = this.getAttributeNS(A.space, A.local);
    return u === s ? null : u === r ? a : a = e(r = u, t);
  };
}
function dH(A, e, t) {
  var r, s, a;
  return function() {
    var u, f = t(this), l;
    return f == null ? void this.removeAttribute(A) : (u = this.getAttribute(A), l = f + "", u === l ? null : u === r && l === s ? a : (s = l, a = e(r = u, f)));
  };
}
function QH(A, e, t) {
  var r, s, a;
  return function() {
    var u, f = t(this), l;
    return f == null ? void this.removeAttributeNS(A.space, A.local) : (u = this.getAttributeNS(A.space, A.local), l = f + "", u === l ? null : u === r && l === s ? a : (s = l, a = e(r = u, f)));
  };
}
function pH(A, e) {
  var t = ya(A), r = t === "transform" ? zy : mw;
  return this.attrTween(A, typeof e == "function" ? (t.local ? QH : dH)(t, r, Xl(this, "attr." + A, e)) : e == null ? (t.local ? hH : BH)(t) : (t.local ? wH : gH)(t, r, e));
}
function CH(A, e) {
  return function(t) {
    this.setAttribute(A, e.call(this, t));
  };
}
function UH(A, e) {
  return function(t) {
    this.setAttributeNS(A.space, A.local, e.call(this, t));
  };
}
function FH(A, e) {
  var t, r;
  function s() {
    var a = e.apply(this, arguments);
    return a !== r && (t = (r = a) && UH(A, a)), t;
  }
  return s._value = e, s;
}
function vH(A, e) {
  var t, r;
  function s() {
    var a = e.apply(this, arguments);
    return a !== r && (t = (r = a) && CH(A, a)), t;
  }
  return s._value = e, s;
}
function mH(A, e) {
  var t = "attr." + A;
  if (arguments.length < 2) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  var r = ya(A);
  return this.tween(t, (r.local ? FH : vH)(r, e));
}
function EH(A, e) {
  return function() {
    kl(this, A).delay = +e.apply(this, arguments);
  };
}
function yH(A, e) {
  return e = +e, function() {
    kl(this, A).delay = e;
  };
}
function HH(A) {
  var e = this._id;
  return arguments.length ? this.each((typeof A == "function" ? EH : yH)(e, A)) : lt(this.node(), e).delay;
}
function IH(A, e) {
  return function() {
    Ht(this, A).duration = +e.apply(this, arguments);
  };
}
function _H(A, e) {
  return e = +e, function() {
    Ht(this, A).duration = e;
  };
}
function xH(A) {
  var e = this._id;
  return arguments.length ? this.each((typeof A == "function" ? IH : _H)(e, A)) : lt(this.node(), e).duration;
}
function bH(A, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ht(this, A).ease = e;
  };
}
function LH(A) {
  var e = this._id;
  return arguments.length ? this.each(bH(e, A)) : lt(this.node(), e).ease;
}
function KH(A, e) {
  return function() {
    var t = e.apply(this, arguments);
    if (typeof t != "function") throw new Error();
    Ht(this, A).ease = t;
  };
}
function TH(A) {
  if (typeof A != "function") throw new Error();
  return this.each(KH(this._id, A));
}
function SH(A) {
  typeof A != "function" && (A = tw(A));
  for (var e = this._groups, t = e.length, r = new Array(t), s = 0; s < t; ++s)
    for (var a = e[s], u = a.length, f = r[s] = [], l, B = 0; B < u; ++B)
      (l = a[B]) && A.call(l, l.__data__, B, a) && f.push(l);
  return new $t(r, this._parents, this._name, this._id);
}
function DH(A) {
  if (A._id !== this._id) throw new Error();
  for (var e = this._groups, t = A._groups, r = e.length, s = t.length, a = Math.min(r, s), u = new Array(r), f = 0; f < a; ++f)
    for (var l = e[f], B = t[f], g = l.length, Q = u[f] = new Array(g), C, v = 0; v < g; ++v)
      (C = l[v] || B[v]) && (Q[v] = C);
  for (; f < r; ++f)
    u[f] = e[f];
  return new $t(u, this._parents, this._name, this._id);
}
function MH(A) {
  return (A + "").trim().split(/^|\s+/).every(function(e) {
    var t = e.indexOf(".");
    return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
  });
}
function OH(A, e, t) {
  var r, s, a = MH(e) ? kl : Ht;
  return function() {
    var u = a(this, A), f = u.on;
    f !== r && (s = (r = f).copy()).on(e, t), u.on = s;
  };
}
function RH(A, e) {
  var t = this._id;
  return arguments.length < 2 ? lt(this.node(), t).on.on(A) : this.each(OH(t, A, e));
}
function NH(A) {
  return function() {
    var e = this.parentNode;
    for (var t in this.__transition) if (+t !== A) return;
    e && e.removeChild(this);
  };
}
function GH() {
  return this.on("end.remove", NH(this._id));
}
function VH(A) {
  var e = this._name, t = this._id;
  typeof A != "function" && (A = Ol(A));
  for (var r = this._groups, s = r.length, a = new Array(s), u = 0; u < s; ++u)
    for (var f = r[u], l = f.length, B = a[u] = new Array(l), g, Q, C = 0; C < l; ++C)
      (g = f[C]) && (Q = A.call(g, g.__data__, C, f)) && ("__data__" in g && (Q.__data__ = g.__data__), B[C] = Q, Ia(B[C], e, t, C, B, lt(g, t)));
  return new $t(a, this._parents, e, t);
}
function PH(A) {
  var e = this._name, t = this._id;
  typeof A != "function" && (A = ew(A));
  for (var r = this._groups, s = r.length, a = [], u = [], f = 0; f < s; ++f)
    for (var l = r[f], B = l.length, g, Q = 0; Q < B; ++Q)
      if (g = l[Q]) {
        for (var C = A.call(g, g.__data__, Q, l), v, H = lt(g, t), K = 0, V = C.length; K < V; ++K)
          (v = C[K]) && Ia(v, e, t, K, C, H);
        a.push(C), u.push(g);
      }
  return new $t(a, u, e, t);
}
var kH = Pr.prototype.constructor;
function XH() {
  return new kH(this._groups, this._parents);
}
function WH(A, e) {
  var t, r, s;
  return function() {
    var a = Or(this, A), u = (this.style.removeProperty(A), Or(this, A));
    return a === u ? null : a === t && u === r ? s : s = e(t = a, r = u);
  };
}
function Ew(A) {
  return function() {
    this.style.removeProperty(A);
  };
}
function JH(A, e, t) {
  var r, s = t + "", a;
  return function() {
    var u = Or(this, A);
    return u === s ? null : u === r ? a : a = e(r = u, t);
  };
}
function YH(A, e, t) {
  var r, s, a;
  return function() {
    var u = Or(this, A), f = t(this), l = f + "";
    return f == null && (l = f = (this.style.removeProperty(A), Or(this, A))), u === l ? null : u === r && l === s ? a : (s = l, a = e(r = u, f));
  };
}
function ZH(A, e) {
  var t, r, s, a = "style." + e, u = "end." + a, f;
  return function() {
    var l = Ht(this, A), B = l.on, g = l.value[a] == null ? f || (f = Ew(e)) : void 0;
    (B !== t || s !== g) && (r = (t = B).copy()).on(u, s = g), l.on = r;
  };
}
function $H(A, e, t) {
  var r = (A += "") == "transform" ? $y : mw;
  return e == null ? this.styleTween(A, WH(A, r)).on("end.style." + A, Ew(A)) : typeof e == "function" ? this.styleTween(A, YH(A, r, Xl(this, "style." + A, e))).each(ZH(this._id, A)) : this.styleTween(A, JH(A, r, e), t).on("end.style." + A, null);
}
function zH(A, e, t) {
  return function(r) {
    this.style.setProperty(A, e.call(this, r), t);
  };
}
function qH(A, e, t) {
  var r, s;
  function a() {
    var u = e.apply(this, arguments);
    return u !== s && (r = (s = u) && zH(A, u, t)), r;
  }
  return a._value = e, a;
}
function jH(A, e, t) {
  var r = "style." + (A += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, qH(A, e, t ?? ""));
}
function A1(A) {
  return function() {
    this.textContent = A;
  };
}
function e1(A) {
  return function() {
    var e = A(this);
    this.textContent = e ?? "";
  };
}
function t1(A) {
  return this.tween("text", typeof A == "function" ? e1(Xl(this, "text", A)) : A1(A == null ? "" : A + ""));
}
function n1(A) {
  return function(e) {
    this.textContent = A.call(this, e);
  };
}
function r1(A) {
  var e, t;
  function r() {
    var s = A.apply(this, arguments);
    return s !== t && (e = (t = s) && n1(s)), e;
  }
  return r._value = A, r;
}
function i1(A) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (A == null) return this.tween(e, null);
  if (typeof A != "function") throw new Error();
  return this.tween(e, r1(A));
}
function s1() {
  for (var A = this._name, e = this._id, t = Hw(), r = this._groups, s = r.length, a = 0; a < s; ++a)
    for (var u = r[a], f = u.length, l, B = 0; B < f; ++B)
      if (l = u[B]) {
        var g = lt(l, e);
        Ia(l, A, t, B, u, {
          time: g.time + g.delay + g.duration,
          delay: 0,
          duration: g.duration,
          ease: g.ease
        });
      }
  return new $t(r, this._parents, A, t);
}
function o1() {
  var A, e, t = this, r = t._id, s = t.size();
  return new Promise(function(a, u) {
    var f = { value: u }, l = { value: function() {
      --s === 0 && a();
    } };
    t.each(function() {
      var B = Ht(this, r), g = B.on;
      g !== A && (e = (A = g).copy(), e._.cancel.push(f), e._.interrupt.push(f), e._.end.push(l)), B.on = e;
    }), s === 0 && a();
  });
}
var a1 = 0;
function $t(A, e, t, r) {
  this._groups = A, this._parents = e, this._name = t, this._id = r;
}
function yw(A) {
  return Pr().transition(A);
}
function Hw() {
  return ++a1;
}
var kt = Pr.prototype;
$t.prototype = yw.prototype = {
  constructor: $t,
  select: VH,
  selectAll: PH,
  selectChild: kt.selectChild,
  selectChildren: kt.selectChildren,
  filter: SH,
  merge: DH,
  selection: XH,
  transition: s1,
  call: kt.call,
  nodes: kt.nodes,
  node: kt.node,
  size: kt.size,
  empty: kt.empty,
  each: kt.each,
  on: RH,
  attr: pH,
  attrTween: mH,
  style: $H,
  styleTween: jH,
  text: t1,
  textTween: i1,
  remove: GH,
  tween: fH,
  delay: HH,
  duration: xH,
  ease: LH,
  easeVarying: TH,
  end: o1,
  [Symbol.iterator]: kt[Symbol.iterator]
};
var u1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Mm
};
function c1(A, e) {
  for (var t; !(t = A.__transition) || !(t = t[e]); )
    if (!(A = A.parentNode))
      throw new Error(`transition ${e} not found`);
  return t;
}
function l1(A) {
  var e, t;
  A instanceof $t ? (e = A._id, A = A._name) : (e = Hw(), (t = u1).time = Pl(), A = A == null ? null : A + "");
  for (var r = this._groups, s = r.length, a = 0; a < s; ++a)
    for (var u = r[a], f = u.length, l, B = 0; B < f; ++B)
      (l = u[B]) && Ia(l, A, e, B, u, t || c1(l, e));
  return new $t(r, this._parents, A, e);
}
Pr.prototype.interrupt = uH;
Pr.prototype.transition = l1;
const Co = (A) => () => A;
function f1(A, {
  sourceEvent: e,
  target: t,
  transform: r,
  dispatch: s
}) {
  Object.defineProperties(this, {
    type: { value: A, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: t, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: s }
  });
}
function Yt(A, e, t) {
  this.k = A, this.x = e, this.y = t;
}
Yt.prototype = {
  constructor: Yt,
  scale: function(A) {
    return A === 1 ? this : new Yt(this.k * A, this.x, this.y);
  },
  translate: function(A, e) {
    return A === 0 & e === 0 ? this : new Yt(this.k, this.x + this.k * A, this.y + this.k * e);
  },
  apply: function(A) {
    return [A[0] * this.k + this.x, A[1] * this.k + this.y];
  },
  applyX: function(A) {
    return A * this.k + this.x;
  },
  applyY: function(A) {
    return A * this.k + this.y;
  },
  invert: function(A) {
    return [(A[0] - this.x) / this.k, (A[1] - this.y) / this.k];
  },
  invertX: function(A) {
    return (A - this.x) / this.k;
  },
  invertY: function(A) {
    return (A - this.y) / this.k;
  },
  rescaleX: function(A) {
    return A.copy().domain(A.range().map(this.invertX, this).map(A.invert, A));
  },
  rescaleY: function(A) {
    return A.copy().domain(A.range().map(this.invertY, this).map(A.invert, A));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var _a = new Yt(1, 0, 0);
Yt.prototype;
function _c(A) {
  A.stopImmediatePropagation();
}
function Hi(A) {
  A.preventDefault(), A.stopImmediatePropagation();
}
function B1(A) {
  return (!A.ctrlKey || A.type === "wheel") && !A.button;
}
function h1() {
  var A = this;
  return A instanceof SVGElement ? (A = A.ownerSVGElement || A, A.hasAttribute("viewBox") ? (A = A.viewBox.baseVal, [[A.x, A.y], [A.x + A.width, A.y + A.height]]) : [[0, 0], [A.width.baseVal.value, A.height.baseVal.value]]) : [[0, 0], [A.clientWidth, A.clientHeight]];
}
function Hh() {
  return this.__zoom || _a;
}
function g1(A) {
  return -A.deltaY * (A.deltaMode === 1 ? 0.05 : A.deltaMode ? 1 : 2e-3) * (A.ctrlKey ? 10 : 1);
}
function w1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function d1(A, e, t) {
  var r = A.invertX(e[0][0]) - t[0][0], s = A.invertX(e[1][0]) - t[1][0], a = A.invertY(e[0][1]) - t[0][1], u = A.invertY(e[1][1]) - t[1][1];
  return A.translate(
    s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s),
    u > a ? (a + u) / 2 : Math.min(0, a) || Math.max(0, u)
  );
}
function Q1() {
  var A = B1, e = h1, t = d1, r = g1, s = w1, a = [0, 1 / 0], u = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], f = 250, l = eH, B = Ea("start", "zoom", "end"), g, Q, C, v = 500, H = 150, K = 0, V = 10;
  function b(y) {
    y.property("__zoom", Hh).on("wheel.zoom", j, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", gA).filter(s).on("touchstart.zoom", UA).on("touchmove.zoom", RA).on("touchend.zoom touchcancel.zoom", hA).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(y, J, O, P) {
    var AA = y.selection ? y.selection() : y;
    AA.property("__zoom", Hh), y !== AA ? N(y, J, O, P) : AA.interrupt().each(function() {
      D(this, arguments).event(P).start().zoom(null, typeof J == "function" ? J.apply(this, arguments) : J).end();
    });
  }, b.scaleBy = function(y, J, O, P) {
    b.scaleTo(y, function() {
      var AA = this.__zoom.k, nA = typeof J == "function" ? J.apply(this, arguments) : J;
      return AA * nA;
    }, O, P);
  }, b.scaleTo = function(y, J, O, P) {
    b.transform(y, function() {
      var AA = e.apply(this, arguments), nA = this.__zoom, k = O == null ? x(AA) : typeof O == "function" ? O.apply(this, arguments) : O, aA = nA.invert(k), CA = typeof J == "function" ? J.apply(this, arguments) : J;
      return t($(G(nA, CA), k, aA), AA, u);
    }, O, P);
  }, b.translateBy = function(y, J, O, P) {
    b.transform(y, function() {
      return t(this.__zoom.translate(
        typeof J == "function" ? J.apply(this, arguments) : J,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), e.apply(this, arguments), u);
    }, null, P);
  }, b.translateTo = function(y, J, O, P, AA) {
    b.transform(y, function() {
      var nA = e.apply(this, arguments), k = this.__zoom, aA = P == null ? x(nA) : typeof P == "function" ? P.apply(this, arguments) : P;
      return t(_a.translate(aA[0], aA[1]).scale(k.k).translate(
        typeof J == "function" ? -J.apply(this, arguments) : -J,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), nA, u);
    }, P, AA);
  };
  function G(y, J) {
    return J = Math.max(a[0], Math.min(a[1], J)), J === y.k ? y : new Yt(J, y.x, y.y);
  }
  function $(y, J, O) {
    var P = J[0] - O[0] * y.k, AA = J[1] - O[1] * y.k;
    return P === y.x && AA === y.y ? y : new Yt(y.k, P, AA);
  }
  function x(y) {
    return [(+y[0][0] + +y[1][0]) / 2, (+y[0][1] + +y[1][1]) / 2];
  }
  function N(y, J, O, P) {
    y.on("start.zoom", function() {
      D(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      D(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var AA = this, nA = arguments, k = D(AA, nA).event(P), aA = e.apply(AA, nA), CA = O == null ? x(aA) : typeof O == "function" ? O.apply(AA, nA) : O, FA = Math.max(aA[1][0] - aA[0][0], aA[1][1] - aA[0][1]), EA = AA.__zoom, vA = typeof J == "function" ? J.apply(AA, nA) : J, NA = l(EA.invert(CA).concat(FA / EA.k), vA.invert(CA).concat(FA / vA.k));
      return function(PA) {
        if (PA === 1) PA = vA;
        else {
          var te = NA(PA), At = FA / te[2];
          PA = new Yt(At, CA[0] - te[0] * At, CA[1] - te[1] * At);
        }
        k.zoom(null, PA);
      };
    });
  }
  function D(y, J, O) {
    return !O && y.__zooming || new W(y, J);
  }
  function W(y, J) {
    this.that = y, this.args = J, this.active = 0, this.sourceEvent = null, this.extent = e.apply(y, J), this.taps = 0;
  }
  W.prototype = {
    event: function(y) {
      return y && (this.sourceEvent = y), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(y, J) {
      return this.mouse && y !== "mouse" && (this.mouse[1] = J.invert(this.mouse[0])), this.touch0 && y !== "touch" && (this.touch0[1] = J.invert(this.touch0[0])), this.touch1 && y !== "touch" && (this.touch1[1] = J.invert(this.touch1[0])), this.that.__zoom = J, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(y) {
      var J = ie(this.that).datum();
      B.call(
        y,
        this.that,
        new f1(y, {
          sourceEvent: this.sourceEvent,
          target: b,
          type: y,
          transform: this.that.__zoom,
          dispatch: B
        }),
        J
      );
    }
  };
  function j(y, ...J) {
    if (!A.apply(this, arguments)) return;
    var O = D(this, J).event(y), P = this.__zoom, AA = Math.max(a[0], Math.min(a[1], P.k * Math.pow(2, r.apply(this, arguments)))), nA = mt(y);
    if (O.wheel)
      (O.mouse[0][0] !== nA[0] || O.mouse[0][1] !== nA[1]) && (O.mouse[1] = P.invert(O.mouse[0] = nA)), clearTimeout(O.wheel);
    else {
      if (P.k === AA) return;
      O.mouse = [nA, P.invert(nA)], Jo(this), O.start();
    }
    Hi(y), O.wheel = setTimeout(k, H), O.zoom("mouse", t($(G(P, AA), O.mouse[0], O.mouse[1]), O.extent, u));
    function k() {
      O.wheel = null, O.end();
    }
  }
  function z(y, ...J) {
    if (C || !A.apply(this, arguments)) return;
    var O = y.currentTarget, P = D(this, J, !0).event(y), AA = ie(y.view).on("mousemove.zoom", CA, !0).on("mouseup.zoom", FA, !0), nA = mt(y, O), k = y.clientX, aA = y.clientY;
    fw(y.view), _c(y), P.mouse = [nA, this.__zoom.invert(nA)], Jo(this), P.start();
    function CA(EA) {
      if (Hi(EA), !P.moved) {
        var vA = EA.clientX - k, NA = EA.clientY - aA;
        P.moved = vA * vA + NA * NA > K;
      }
      P.event(EA).zoom("mouse", t($(P.that.__zoom, P.mouse[0] = mt(EA, O), P.mouse[1]), P.extent, u));
    }
    function FA(EA) {
      AA.on("mousemove.zoom mouseup.zoom", null), Bw(EA.view, P.moved), Hi(EA), P.event(EA).end();
    }
  }
  function gA(y, ...J) {
    if (A.apply(this, arguments)) {
      var O = this.__zoom, P = mt(y.changedTouches ? y.changedTouches[0] : y, this), AA = O.invert(P), nA = O.k * (y.shiftKey ? 0.5 : 2), k = t($(G(O, nA), P, AA), e.apply(this, J), u);
      Hi(y), f > 0 ? ie(this).transition().duration(f).call(N, k, P, y) : ie(this).call(b.transform, k, P, y);
    }
  }
  function UA(y, ...J) {
    if (A.apply(this, arguments)) {
      var O = y.touches, P = O.length, AA = D(this, J, y.changedTouches.length === P).event(y), nA, k, aA, CA;
      for (_c(y), k = 0; k < P; ++k)
        aA = O[k], CA = mt(aA, this), CA = [CA, this.__zoom.invert(CA), aA.identifier], AA.touch0 ? !AA.touch1 && AA.touch0[2] !== CA[2] && (AA.touch1 = CA, AA.taps = 0) : (AA.touch0 = CA, nA = !0, AA.taps = 1 + !!g);
      g && (g = clearTimeout(g)), nA && (AA.taps < 2 && (Q = CA[0], g = setTimeout(function() {
        g = null;
      }, v)), Jo(this), AA.start());
    }
  }
  function RA(y, ...J) {
    if (this.__zooming) {
      var O = D(this, J).event(y), P = y.changedTouches, AA = P.length, nA, k, aA, CA;
      for (Hi(y), nA = 0; nA < AA; ++nA)
        k = P[nA], aA = mt(k, this), O.touch0 && O.touch0[2] === k.identifier ? O.touch0[0] = aA : O.touch1 && O.touch1[2] === k.identifier && (O.touch1[0] = aA);
      if (k = O.that.__zoom, O.touch1) {
        var FA = O.touch0[0], EA = O.touch0[1], vA = O.touch1[0], NA = O.touch1[1], PA = (PA = vA[0] - FA[0]) * PA + (PA = vA[1] - FA[1]) * PA, te = (te = NA[0] - EA[0]) * te + (te = NA[1] - EA[1]) * te;
        k = G(k, Math.sqrt(PA / te)), aA = [(FA[0] + vA[0]) / 2, (FA[1] + vA[1]) / 2], CA = [(EA[0] + NA[0]) / 2, (EA[1] + NA[1]) / 2];
      } else if (O.touch0) aA = O.touch0[0], CA = O.touch0[1];
      else return;
      O.zoom("touch", t($(k, aA, CA), O.extent, u));
    }
  }
  function hA(y, ...J) {
    if (this.__zooming) {
      var O = D(this, J).event(y), P = y.changedTouches, AA = P.length, nA, k;
      for (_c(y), C && clearTimeout(C), C = setTimeout(function() {
        C = null;
      }, v), nA = 0; nA < AA; ++nA)
        k = P[nA], O.touch0 && O.touch0[2] === k.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === k.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (k = mt(k, this), Math.hypot(Q[0] - k[0], Q[1] - k[1]) < V)) {
        var aA = ie(this).on("dblclick.zoom");
        aA && aA.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Co(+y), b) : r;
  }, b.filter = function(y) {
    return arguments.length ? (A = typeof y == "function" ? y : Co(!!y), b) : A;
  }, b.touchable = function(y) {
    return arguments.length ? (s = typeof y == "function" ? y : Co(!!y), b) : s;
  }, b.extent = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Co([[+y[0][0], +y[0][1]], [+y[1][0], +y[1][1]]]), b) : e;
  }, b.scaleExtent = function(y) {
    return arguments.length ? (a[0] = +y[0], a[1] = +y[1], b) : [a[0], a[1]];
  }, b.translateExtent = function(y) {
    return arguments.length ? (u[0][0] = +y[0][0], u[1][0] = +y[1][0], u[0][1] = +y[0][1], u[1][1] = +y[1][1], b) : [[u[0][0], u[0][1]], [u[1][0], u[1][1]]];
  }, b.constrain = function(y) {
    return arguments.length ? (t = y, b) : t;
  }, b.duration = function(y) {
    return arguments.length ? (f = +y, b) : f;
  }, b.interpolate = function(y) {
    return arguments.length ? (l = y, b) : l;
  }, b.on = function() {
    var y = B.on.apply(B, arguments);
    return y === B ? b : y;
  }, b.clickDistance = function(y) {
    return arguments.length ? (K = (y = +y) * y, b) : Math.sqrt(K);
  }, b.tapDistance = function(y) {
    return arguments.length ? (V = +y, b) : V;
  }, b;
}
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function p1(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var oa = { exports: {} };
oa.exports;
(function(A, e) {
  var t = 200, r = "__lodash_hash_undefined__", s = 9007199254740991, a = "[object Arguments]", u = "[object Array]", f = "[object Boolean]", l = "[object Date]", B = "[object Error]", g = "[object Function]", Q = "[object GeneratorFunction]", C = "[object Map]", v = "[object Number]", H = "[object Object]", K = "[object Promise]", V = "[object RegExp]", b = "[object Set]", G = "[object String]", $ = "[object Symbol]", x = "[object WeakMap]", N = "[object ArrayBuffer]", D = "[object DataView]", W = "[object Float32Array]", j = "[object Float64Array]", z = "[object Int8Array]", gA = "[object Int16Array]", UA = "[object Int32Array]", RA = "[object Uint8Array]", hA = "[object Uint8ClampedArray]", y = "[object Uint16Array]", J = "[object Uint32Array]", O = /[\\^$.*+?()[\]{}|]/g, P = /\w*$/, AA = /^\[object .+?Constructor\]$/, nA = /^(?:0|[1-9]\d*)$/, k = {};
  k[a] = k[u] = k[N] = k[D] = k[f] = k[l] = k[W] = k[j] = k[z] = k[gA] = k[UA] = k[C] = k[v] = k[H] = k[V] = k[b] = k[G] = k[$] = k[RA] = k[hA] = k[y] = k[J] = !0, k[B] = k[g] = k[x] = !1;
  var aA = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, CA = typeof self == "object" && self && self.Object === Object && self, FA = aA || CA || Function("return this")(), EA = e && !e.nodeType && e, vA = EA && !0 && A && !A.nodeType && A, NA = vA && vA.exports === EA;
  function PA(p, I) {
    return p.set(I[0], I[1]), p;
  }
  function te(p, I) {
    return p.add(I), p;
  }
  function At(p, I) {
    for (var M = -1, eA = p ? p.length : 0; ++M < eA && I(p[M], M, p) !== !1; )
      ;
    return p;
  }
  function Ga(p, I) {
    for (var M = -1, eA = I.length, $A = p.length; ++M < eA; )
      p[$A + M] = I[M];
    return p;
  }
  function yn(p, I, M, eA) {
    for (var $A = -1, oe = p ? p.length : 0; ++$A < oe; )
      M = I(M, p[$A], $A, p);
    return M;
  }
  function er(p, I) {
    for (var M = -1, eA = Array(p); ++M < p; )
      eA[M] = I(M);
    return eA;
  }
  function as(p, I) {
    return p == null ? void 0 : p[I];
  }
  function Ce(p) {
    var I = !1;
    if (p != null && typeof p.toString != "function")
      try {
        I = !!(p + "");
      } catch {
      }
    return I;
  }
  function qt(p) {
    var I = -1, M = Array(p.size);
    return p.forEach(function(eA, $A) {
      M[++I] = [$A, eA];
    }), M;
  }
  function Xr(p, I) {
    return function(M) {
      return p(I(M));
    };
  }
  function Ne(p) {
    var I = -1, M = Array(p.size);
    return p.forEach(function(eA) {
      M[++I] = eA;
    }), M;
  }
  var us = Array.prototype, Va = Function.prototype, Bt = Object.prototype, he = FA["__core-js_shared__"], jt = function() {
    var p = /[^.]+$/.exec(he && he.keys && he.keys.IE_PROTO || "");
    return p ? "Symbol(src)_1." + p : "";
  }(), Hn = Va.toString, ht = Bt.hasOwnProperty, gt = Bt.toString, Pa = RegExp(
    "^" + Hn.call(ht).replace(O, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), An = NA ? FA.Buffer : void 0, xt = FA.Symbol, tr = FA.Uint8Array, Wr = Xr(Object.getPrototypeOf, Object), Jr = Object.create, Yr = Bt.propertyIsEnumerable, Zr = us.splice, nr = Object.getOwnPropertySymbols, $r = An ? An.isBuffer : void 0, zr = Xr(Object.keys, Object), In = wt(FA, "DataView"), _n = wt(FA, "Map"), qr = wt(FA, "Promise"), jr = wt(FA, "Set"), rr = wt(FA, "WeakMap"), en = wt(Object, "create"), ka = Tt(In), Xa = Tt(_n), Wa = Tt(qr), Ja = Tt(jr), cs = Tt(rr), ls = xt ? xt.prototype : void 0, fs = ls ? ls.valueOf : void 0;
  function bt(p) {
    var I = -1, M = p ? p.length : 0;
    for (this.clear(); ++I < M; ) {
      var eA = p[I];
      this.set(eA[0], eA[1]);
    }
  }
  function Ai() {
    this.__data__ = en ? en(null) : {};
  }
  function Ya(p) {
    return this.has(p) && delete this.__data__[p];
  }
  function ei(p) {
    var I = this.__data__;
    if (en) {
      var M = I[p];
      return M === r ? void 0 : M;
    }
    return ht.call(I, p) ? I[p] : void 0;
  }
  function Za(p) {
    var I = this.__data__;
    return en ? I[p] !== void 0 : ht.call(I, p);
  }
  function $a(p, I) {
    var M = this.__data__;
    return M[p] = en && I === void 0 ? r : I, this;
  }
  bt.prototype.clear = Ai, bt.prototype.delete = Ya, bt.prototype.get = ei, bt.prototype.has = Za, bt.prototype.set = $a;
  function et(p) {
    var I = -1, M = p ? p.length : 0;
    for (this.clear(); ++I < M; ) {
      var eA = p[I];
      this.set(eA[0], eA[1]);
    }
  }
  function za() {
    this.__data__ = [];
  }
  function qa(p) {
    var I = this.__data__, M = xn(I, p);
    if (M < 0)
      return !1;
    var eA = I.length - 1;
    return M == eA ? I.pop() : Zr.call(I, M, 1), !0;
  }
  function ja(p) {
    var I = this.__data__, M = xn(I, p);
    return M < 0 ? void 0 : I[M][1];
  }
  function Au(p) {
    return xn(this.__data__, p) > -1;
  }
  function eu(p, I) {
    var M = this.__data__, eA = xn(M, p);
    return eA < 0 ? M.push([p, I]) : M[eA][1] = I, this;
  }
  et.prototype.clear = za, et.prototype.delete = qa, et.prototype.get = ja, et.prototype.has = Au, et.prototype.set = eu;
  function Lt(p) {
    var I = -1, M = p ? p.length : 0;
    for (this.clear(); ++I < M; ) {
      var eA = p[I];
      this.set(eA[0], eA[1]);
    }
  }
  function tu() {
    this.__data__ = {
      hash: new bt(),
      map: new (_n || et)(),
      string: new bt()
    };
  }
  function nu(p) {
    return nn(this, p).delete(p);
  }
  function ru(p) {
    return nn(this, p).get(p);
  }
  function iu(p) {
    return nn(this, p).has(p);
  }
  function su(p, I) {
    return nn(this, p).set(p, I), this;
  }
  Lt.prototype.clear = tu, Lt.prototype.delete = nu, Lt.prototype.get = ru, Lt.prototype.has = iu, Lt.prototype.set = su;
  function tn(p) {
    this.__data__ = new et(p);
  }
  function ir() {
    this.__data__ = new et();
  }
  function ou(p) {
    return this.__data__.delete(p);
  }
  function sr(p) {
    return this.__data__.get(p);
  }
  function au(p) {
    return this.__data__.has(p);
  }
  function uu(p, I) {
    var M = this.__data__;
    if (M instanceof et) {
      var eA = M.__data__;
      if (!_n || eA.length < t - 1)
        return eA.push([p, I]), this;
      M = this.__data__ = new Lt(eA);
    }
    return M.set(p, I), this;
  }
  tn.prototype.clear = ir, tn.prototype.delete = ou, tn.prototype.get = sr, tn.prototype.has = au, tn.prototype.set = uu;
  function cu(p, I) {
    var M = ii(p) || pu(p) ? er(p.length, String) : [], eA = M.length, $A = !!eA;
    for (var oe in p)
      ht.call(p, oe) && !($A && (oe == "length" || ms(oe, eA))) && M.push(oe);
    return M;
  }
  function ti(p, I, M) {
    var eA = p[I];
    (!(ht.call(p, I) && ri(eA, M)) || M === void 0 && !(I in p)) && (p[I] = M);
  }
  function xn(p, I) {
    for (var M = p.length; M--; )
      if (ri(p[M][0], I))
        return M;
    return -1;
  }
  function Bs(p, I) {
    return p && ar(I, oi(I), p);
  }
  function ni(p, I, M, eA, $A, oe, Ge) {
    var ae;
    if (eA && (ae = oe ? eA(p, $A, oe, Ge) : eA(p)), ae !== void 0)
      return ae;
    if (!ur(p))
      return p;
    var YA = ii(p);
    if (YA) {
      if (ae = Fs(p), !I)
        return Cs(p, ae);
    } else {
      var Qt = dt(p), pt = Qt == g || Qt == Q;
      if (si(p))
        return ws(p, I);
      if (Qt == H || Qt == a || pt && !oe) {
        if (Ce(p))
          return oe ? p : {};
        if (ae = du(pt ? {} : p), !I)
          return wu(p, Bs(ae, p));
      } else {
        if (!k[Qt])
          return oe ? p : {};
        ae = vs(p, Qt, ni, I);
      }
    }
    Ge || (Ge = new tn());
    var ai = Ge.get(p);
    if (ai)
      return ai;
    if (Ge.set(p, ae), !YA)
      var cr = M ? Us(p) : oi(p);
    return At(cr || p, function(ue, Ln) {
      cr && (Ln = ue, ue = p[Ln]), ti(ae, Ln, ni(ue, I, M, eA, Ln, p, Ge));
    }), ae;
  }
  function lu(p) {
    return ur(p) ? Jr(p) : {};
  }
  function fu(p, I, M) {
    var eA = I(p);
    return ii(p) ? eA : Ga(eA, M(p));
  }
  function Bu(p) {
    return gt.call(p);
  }
  function hs(p) {
    if (!ur(p) || ys(p))
      return !1;
    var I = _s(p) || Ce(p) ? Pa : AA;
    return I.test(Tt(p));
  }
  function gs(p) {
    if (!Hs(p))
      return zr(p);
    var I = [];
    for (var M in Object(p))
      ht.call(p, M) && M != "constructor" && I.push(M);
    return I;
  }
  function ws(p, I) {
    if (I)
      return p.slice();
    var M = new p.constructor(p.length);
    return p.copy(M), M;
  }
  function bn(p) {
    var I = new p.constructor(p.byteLength);
    return new tr(I).set(new tr(p)), I;
  }
  function hu(p, I) {
    var M = I ? bn(p.buffer) : p.buffer;
    return new p.constructor(M, p.byteOffset, p.byteLength);
  }
  function ds(p, I, M) {
    var eA = I ? M(qt(p), !0) : qt(p);
    return yn(eA, PA, new p.constructor());
  }
  function or(p) {
    var I = new p.constructor(p.source, P.exec(p));
    return I.lastIndex = p.lastIndex, I;
  }
  function Qs(p, I, M) {
    var eA = I ? M(Ne(p), !0) : Ne(p);
    return yn(eA, te, new p.constructor());
  }
  function gu(p) {
    return fs ? Object(fs.call(p)) : {};
  }
  function ps(p, I) {
    var M = I ? bn(p.buffer) : p.buffer;
    return new p.constructor(M, p.byteOffset, p.length);
  }
  function Cs(p, I) {
    var M = -1, eA = p.length;
    for (I || (I = Array(eA)); ++M < eA; )
      I[M] = p[M];
    return I;
  }
  function ar(p, I, M, eA) {
    M || (M = {});
    for (var $A = -1, oe = I.length; ++$A < oe; ) {
      var Ge = I[$A], ae = void 0;
      ti(M, Ge, ae === void 0 ? p[Ge] : ae);
    }
    return M;
  }
  function wu(p, I) {
    return ar(p, Kt(p), I);
  }
  function Us(p) {
    return fu(p, oi, Kt);
  }
  function nn(p, I) {
    var M = p.__data__;
    return Es(I) ? M[typeof I == "string" ? "string" : "hash"] : M.map;
  }
  function wt(p, I) {
    var M = as(p, I);
    return hs(M) ? M : void 0;
  }
  var Kt = nr ? Xr(nr, Object) : LA, dt = Bu;
  (In && dt(new In(new ArrayBuffer(1))) != D || _n && dt(new _n()) != C || qr && dt(qr.resolve()) != K || jr && dt(new jr()) != b || rr && dt(new rr()) != x) && (dt = function(p) {
    var I = gt.call(p), M = I == H ? p.constructor : void 0, eA = M ? Tt(M) : void 0;
    if (eA)
      switch (eA) {
        case ka:
          return D;
        case Xa:
          return C;
        case Wa:
          return K;
        case Ja:
          return b;
        case cs:
          return x;
      }
    return I;
  });
  function Fs(p) {
    var I = p.length, M = p.constructor(I);
    return I && typeof p[0] == "string" && ht.call(p, "index") && (M.index = p.index, M.input = p.input), M;
  }
  function du(p) {
    return typeof p.constructor == "function" && !Hs(p) ? lu(Wr(p)) : {};
  }
  function vs(p, I, M, eA) {
    var $A = p.constructor;
    switch (I) {
      case N:
        return bn(p);
      case f:
      case l:
        return new $A(+p);
      case D:
        return hu(p, eA);
      case W:
      case j:
      case z:
      case gA:
      case UA:
      case RA:
      case hA:
      case y:
      case J:
        return ps(p, eA);
      case C:
        return ds(p, eA, M);
      case v:
      case G:
        return new $A(p);
      case V:
        return or(p);
      case b:
        return Qs(p, eA, M);
      case $:
        return gu(p);
    }
  }
  function ms(p, I) {
    return I = I ?? s, !!I && (typeof p == "number" || nA.test(p)) && p > -1 && p % 1 == 0 && p < I;
  }
  function Es(p) {
    var I = typeof p;
    return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? p !== "__proto__" : p === null;
  }
  function ys(p) {
    return !!jt && jt in p;
  }
  function Hs(p) {
    var I = p && p.constructor, M = typeof I == "function" && I.prototype || Bt;
    return p === M;
  }
  function Tt(p) {
    if (p != null) {
      try {
        return Hn.call(p);
      } catch {
      }
      try {
        return p + "";
      } catch {
      }
    }
    return "";
  }
  function Qu(p) {
    return ni(p, !0, !0);
  }
  function ri(p, I) {
    return p === I || p !== p && I !== I;
  }
  function pu(p) {
    return Cu(p) && ht.call(p, "callee") && (!Yr.call(p, "callee") || gt.call(p) == a);
  }
  var ii = Array.isArray;
  function Is(p) {
    return p != null && Uu(p.length) && !_s(p);
  }
  function Cu(p) {
    return Fu(p) && Is(p);
  }
  var si = $r || _A;
  function _s(p) {
    var I = ur(p) ? gt.call(p) : "";
    return I == g || I == Q;
  }
  function Uu(p) {
    return typeof p == "number" && p > -1 && p % 1 == 0 && p <= s;
  }
  function ur(p) {
    var I = typeof p;
    return !!p && (I == "object" || I == "function");
  }
  function Fu(p) {
    return !!p && typeof p == "object";
  }
  function oi(p) {
    return Is(p) ? cu(p) : gs(p);
  }
  function LA() {
    return [];
  }
  function _A() {
    return !1;
  }
  A.exports = Qu;
})(oa, oa.exports);
var C1 = oa.exports;
const U1 = /* @__PURE__ */ p1(C1);
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var ul = function(A, e) {
  return ul = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
  }, ul(A, e);
};
function ft(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ul(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var cl = function() {
  return cl = Object.assign || function(e) {
    for (var t, r = 1, s = arguments.length; r < s; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, cl.apply(this, arguments);
};
function Qe(A, e, t, r) {
  function s(a) {
    return a instanceof t ? a : new t(function(u) {
      u(a);
    });
  }
  return new (t || (t = Promise))(function(a, u) {
    function f(g) {
      try {
        B(r.next(g));
      } catch (Q) {
        u(Q);
      }
    }
    function l(g) {
      try {
        B(r.throw(g));
      } catch (Q) {
        u(Q);
      }
    }
    function B(g) {
      g.done ? a(g.value) : s(g.value).then(f, l);
    }
    B((r = r.apply(A, [])).next());
  });
}
function fe(A, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, s, a, u;
  return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function f(B) {
    return function(g) {
      return l([B, g]);
    };
  }
  function l(B) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, s && (a = B[0] & 2 ? s.return : B[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, B[1])).done) return a;
      switch (s = 0, a && (B = [B[0] & 2, a.value]), B[0]) {
        case 0:
        case 1:
          a = B;
          break;
        case 4:
          return t.label++, { value: B[1], done: !1 };
        case 5:
          t.label++, s = B[1], B = [0];
          continue;
        case 7:
          B = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (B[0] === 6 || B[0] === 2)) {
            t = 0;
            continue;
          }
          if (B[0] === 3 && (!a || B[1] > a[0] && B[1] < a[3])) {
            t.label = B[1];
            break;
          }
          if (B[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = B;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(B);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      B = e.call(A, t);
    } catch (g) {
      B = [6, g], s = 0;
    } finally {
      r = a = 0;
    }
    if (B[0] & 5) throw B[1];
    return { value: B[0] ? B[1] : void 0, done: !0 };
  }
}
function Uo(A, e, t) {
  if (arguments.length === 2) for (var r = 0, s = e.length, a; r < s; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return A.concat(a || e);
}
var zt = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.left = e, this.top = t, this.width = r, this.height = s;
    }
    return A.prototype.add = function(e, t, r, s) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + s);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r = Array.from(t).find(function(s) {
        return s.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  }()
), xa = function(A, e) {
  return zt.fromClientRect(A, e.getBoundingClientRect());
}, F1 = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), s = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new zt(0, 0, r, s);
}, ba = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var s = A.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < r) {
      var a = A.charCodeAt(t++);
      (a & 64512) === 56320 ? e.push(((s & 1023) << 10) + (a & 1023) + 65536) : (e.push(s), t--);
    } else
      e.push(s);
  }
  return e;
}, JA = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], s = -1, a = ""; ++s < t; ) {
    var u = A[s];
    u <= 65535 ? r.push(u) : (u -= 65536, r.push((u >> 10) + 55296, u % 1024 + 56320)), (s + 1 === t || r.length > 16384) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, Ih = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", v1 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Fo = 0; Fo < Ih.length; Fo++)
  v1[Ih.charCodeAt(Fo)] = Fo;
var _h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ti = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var vo = 0; vo < _h.length; vo++)
  Ti[_h.charCodeAt(vo)] = vo;
var m1 = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, a, u, f, l;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var B = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), g = Array.isArray(B) ? B : new Uint8Array(B);
  for (r = 0; r < t; r += 4)
    a = Ti[A.charCodeAt(r)], u = Ti[A.charCodeAt(r + 1)], f = Ti[A.charCodeAt(r + 2)], l = Ti[A.charCodeAt(r + 3)], g[s++] = a << 2 | u >> 4, g[s++] = (u & 15) << 4 | f >> 2, g[s++] = (f & 3) << 6 | l & 63;
  return B;
}, E1 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, y1 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, zn = 5, Wl = 11, xc = 2, H1 = Wl - zn, Iw = 65536 >> zn, I1 = 1 << zn, bc = I1 - 1, _1 = 1024 >> zn, x1 = Iw + _1, b1 = x1, L1 = 32, K1 = b1 + L1, T1 = 65536 >> Wl, S1 = 1 << H1, D1 = S1 - 1, xh = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, M1 = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, O1 = function(A, e) {
  var t = m1(A), r = Array.isArray(t) ? y1(t) : new Uint32Array(t), s = Array.isArray(t) ? E1(t) : new Uint16Array(t), a = 24, u = xh(s, a / 2, r[4] / 2), f = r[5] === 2 ? xh(s, (a + r[4]) / 2) : M1(r, Math.ceil((a + r[4]) / 4));
  return new R1(r[0], r[1], r[2], r[3], u, f);
}, R1 = (
  /** @class */
  function() {
    function A(e, t, r, s, a, u) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = s, this.index = a, this.data = u;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> zn], t = (t << xc) + (e & bc), this.data[t];
        if (e <= 65535)
          return t = this.index[Iw + (e - 55296 >> zn)], t = (t << xc) + (e & bc), this.data[t];
        if (e < this.highStart)
          return t = K1 - T1 + (e >> Wl), t = this.index[t], t += e >> zn & D1, t = this.index[t], t = (t << xc) + (e & bc), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), bh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", N1 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var mo = 0; mo < bh.length; mo++)
  N1[bh.charCodeAt(mo)] = mo;
var G1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Lh = 50, V1 = 1, _w = 2, xw = 3, P1 = 4, k1 = 5, Kh = 7, bw = 8, Th = 9, pn = 10, ll = 11, Sh = 12, fl = 13, X1 = 14, Si = 15, Bl = 16, Eo = 17, Ii = 18, W1 = 19, Dh = 20, hl = 21, _i = 22, Lc = 23, mr = 24, De = 25, Di = 26, Mi = 27, Er = 28, J1 = 29, Xn = 30, Y1 = 31, yo = 32, Ho = 33, gl = 34, wl = 35, dl = 36, zi = 37, Ql = 38, Yo = 39, Zo = 40, Kc = 41, Lw = 42, Z1 = 43, $1 = [9001, 65288], Kw = "!", QA = "×", Io = "÷", pl = O1(G1), Xt = [Xn, dl], Cl = [V1, _w, xw, k1], Tw = [pn, bw], Mh = [Mi, Di], z1 = Cl.concat(Tw), Oh = [Ql, Yo, Zo, gl, wl], q1 = [Si, fl], j1 = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], s = [];
  return A.forEach(function(a, u) {
    var f = pl.get(a);
    if (f > Lh ? (s.push(!0), f -= Lh) : s.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(a) !== -1)
      return r.push(u), t.push(Bl);
    if (f === P1 || f === ll) {
      if (u === 0)
        return r.push(u), t.push(Xn);
      var l = t[u - 1];
      return z1.indexOf(l) === -1 ? (r.push(r[u - 1]), t.push(l)) : (r.push(u), t.push(Xn));
    }
    if (r.push(u), f === Y1)
      return t.push(e === "strict" ? hl : zi);
    if (f === Lw || f === J1)
      return t.push(Xn);
    if (f === Z1)
      return a >= 131072 && a <= 196605 || a >= 196608 && a <= 262141 ? t.push(zi) : t.push(Xn);
    t.push(f);
  }), [r, t, s];
}, Tc = function(A, e, t, r) {
  var s = r[t];
  if (Array.isArray(A) ? A.indexOf(s) !== -1 : A === s)
    for (var a = t; a <= r.length; ) {
      a++;
      var u = r[a];
      if (u === e)
        return !0;
      if (u !== pn)
        break;
    }
  if (s === pn)
    for (var a = t; a > 0; ) {
      a--;
      var f = r[a];
      if (Array.isArray(A) ? A.indexOf(f) !== -1 : A === f)
        for (var l = t; l <= r.length; ) {
          l++;
          var u = r[l];
          if (u === e)
            return !0;
          if (u !== pn)
            break;
        }
      if (f !== pn)
        break;
    }
  return !1;
}, Rh = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === pn)
      t--;
    else
      return r;
  }
  return 0;
}, AI = function(A, e, t, r, s) {
  if (t[r] === 0)
    return QA;
  var a = r - 1;
  if (Array.isArray(s) && s[a] === !0)
    return QA;
  var u = a - 1, f = a + 1, l = e[a], B = u >= 0 ? e[u] : 0, g = e[f];
  if (l === _w && g === xw)
    return QA;
  if (Cl.indexOf(l) !== -1)
    return Kw;
  if (Cl.indexOf(g) !== -1 || Tw.indexOf(g) !== -1)
    return QA;
  if (Rh(a, e) === bw)
    return Io;
  if (pl.get(A[a]) === ll || (l === yo || l === Ho) && pl.get(A[f]) === ll || l === Kh || g === Kh || l === Th || [pn, fl, Si].indexOf(l) === -1 && g === Th || [Eo, Ii, W1, mr, Er].indexOf(g) !== -1 || Rh(a, e) === _i || Tc(Lc, _i, a, e) || Tc([Eo, Ii], hl, a, e) || Tc(Sh, Sh, a, e))
    return QA;
  if (l === pn)
    return Io;
  if (l === Lc || g === Lc)
    return QA;
  if (g === Bl || l === Bl)
    return Io;
  if ([fl, Si, hl].indexOf(g) !== -1 || l === X1 || B === dl && q1.indexOf(l) !== -1 || l === Er && g === dl || g === Dh || Xt.indexOf(g) !== -1 && l === De || Xt.indexOf(l) !== -1 && g === De || l === Mi && [zi, yo, Ho].indexOf(g) !== -1 || [zi, yo, Ho].indexOf(l) !== -1 && g === Di || Xt.indexOf(l) !== -1 && Mh.indexOf(g) !== -1 || Mh.indexOf(l) !== -1 && Xt.indexOf(g) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Mi, Di].indexOf(l) !== -1 && (g === De || [_i, Si].indexOf(g) !== -1 && e[f + 1] === De) || // ( OP | HY ) × NU
  [_i, Si].indexOf(l) !== -1 && g === De || // NU ×	(NU | SY | IS)
  l === De && [De, Er, mr].indexOf(g) !== -1)
    return QA;
  if ([De, Er, mr, Eo, Ii].indexOf(g) !== -1)
    for (var Q = a; Q >= 0; ) {
      var C = e[Q];
      if (C === De)
        return QA;
      if ([Er, mr].indexOf(C) !== -1)
        Q--;
      else
        break;
    }
  if ([Mi, Di].indexOf(g) !== -1)
    for (var Q = [Eo, Ii].indexOf(l) !== -1 ? u : a; Q >= 0; ) {
      var C = e[Q];
      if (C === De)
        return QA;
      if ([Er, mr].indexOf(C) !== -1)
        Q--;
      else
        break;
    }
  if (Ql === l && [Ql, Yo, gl, wl].indexOf(g) !== -1 || [Yo, gl].indexOf(l) !== -1 && [Yo, Zo].indexOf(g) !== -1 || [Zo, wl].indexOf(l) !== -1 && g === Zo || Oh.indexOf(l) !== -1 && [Dh, Di].indexOf(g) !== -1 || Oh.indexOf(g) !== -1 && l === Mi || Xt.indexOf(l) !== -1 && Xt.indexOf(g) !== -1 || l === mr && Xt.indexOf(g) !== -1 || Xt.concat(De).indexOf(l) !== -1 && g === _i && $1.indexOf(A[f]) === -1 || Xt.concat(De).indexOf(g) !== -1 && l === Ii)
    return QA;
  if (l === Kc && g === Kc) {
    for (var v = t[a], H = 1; v > 0 && (v--, e[v] === Kc); )
      H++;
    if (H % 2 !== 0)
      return QA;
  }
  return l === yo && g === Ho ? QA : Io;
}, eI = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = j1(A, e.lineBreak), r = t[0], s = t[1], a = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (s = s.map(function(f) {
    return [De, Xn, Lw].indexOf(f) !== -1 ? zi : f;
  }));
  var u = e.wordBreak === "keep-all" ? a.map(function(f, l) {
    return f && A[l] >= 19968 && A[l] <= 40959;
  }) : void 0;
  return [r, s, u];
}, tI = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.codePoints = e, this.required = t === Kw, this.start = r, this.end = s;
    }
    return A.prototype.slice = function() {
      return JA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), nI = function(A, e) {
  var t = ba(A), r = eI(t, e), s = r[0], a = r[1], u = r[2], f = t.length, l = 0, B = 0;
  return {
    next: function() {
      if (B >= f)
        return { done: !0, value: null };
      for (var g = QA; B < f && (g = AI(t, a, s, ++B, u)) === QA; )
        ;
      if (g !== QA || B === f) {
        var Q = new tI(t, g, l, B);
        return l = B, { value: Q, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, rI = 1, iI = 2, is = 4, Nh = 8, aa = 10, Gh = 47, Gi = 92, sI = 9, oI = 32, _o = 34, xi = 61, aI = 35, uI = 36, cI = 37, xo = 39, bo = 40, bi = 41, lI = 95, He = 45, fI = 33, BI = 60, hI = 62, gI = 64, wI = 91, dI = 93, QI = 61, pI = 123, Lo = 63, CI = 125, Vh = 124, UI = 126, FI = 128, Ph = 65533, Sc = 42, Jn = 43, vI = 44, mI = 58, EI = 59, qi = 46, yI = 0, HI = 8, II = 11, _I = 14, xI = 31, bI = 127, vt = -1, Sw = 48, Dw = 97, Mw = 101, LI = 102, KI = 117, TI = 122, Ow = 65, Rw = 69, Nw = 70, SI = 85, DI = 90, Be = function(A) {
  return A >= Sw && A <= 57;
}, MI = function(A) {
  return A >= 55296 && A <= 57343;
}, yr = function(A) {
  return Be(A) || A >= Ow && A <= Nw || A >= Dw && A <= LI;
}, OI = function(A) {
  return A >= Dw && A <= TI;
}, RI = function(A) {
  return A >= Ow && A <= DI;
}, NI = function(A) {
  return OI(A) || RI(A);
}, GI = function(A) {
  return A >= FI;
}, Ko = function(A) {
  return A === aa || A === sI || A === oI;
}, ua = function(A) {
  return NI(A) || GI(A) || A === lI;
}, kh = function(A) {
  return ua(A) || Be(A) || A === He;
}, VI = function(A) {
  return A >= yI && A <= HI || A === II || A >= _I && A <= xI || A === bI;
}, Qn = function(A, e) {
  return A !== Gi ? !1 : e !== aa;
}, To = function(A, e, t) {
  return A === He ? ua(e) || Qn(e, t) : ua(A) ? !0 : !!(A === Gi && Qn(A, e));
}, Dc = function(A, e, t) {
  return A === Jn || A === He ? Be(e) ? !0 : e === qi && Be(t) : Be(A === qi ? e : A);
}, PI = function(A) {
  var e = 0, t = 1;
  (A[e] === Jn || A[e] === He) && (A[e] === He && (t = -1), e++);
  for (var r = []; Be(A[e]); )
    r.push(A[e++]);
  var s = r.length ? parseInt(JA.apply(void 0, r), 10) : 0;
  A[e] === qi && e++;
  for (var a = []; Be(A[e]); )
    a.push(A[e++]);
  var u = a.length, f = u ? parseInt(JA.apply(void 0, a), 10) : 0;
  (A[e] === Rw || A[e] === Mw) && e++;
  var l = 1;
  (A[e] === Jn || A[e] === He) && (A[e] === He && (l = -1), e++);
  for (var B = []; Be(A[e]); )
    B.push(A[e++]);
  var g = B.length ? parseInt(JA.apply(void 0, B), 10) : 0;
  return t * (s + f * Math.pow(10, -u)) * Math.pow(10, l * g);
}, kI = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, XI = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, WI = {
  type: 4
  /* COMMA_TOKEN */
}, JI = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, YI = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, ZI = {
  type: 21
  /* COLUMN_TOKEN */
}, $I = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, zI = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, qI = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, jI = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, A_ = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, So = {
  type: 23
  /* BAD_URL_TOKEN */
}, e_ = {
  type: 1
  /* BAD_STRING_TOKEN */
}, t_ = {
  type: 25
  /* CDO_TOKEN */
}, n_ = {
  type: 24
  /* CDC_TOKEN */
}, r_ = {
  type: 26
  /* COLON_TOKEN */
}, i_ = {
  type: 27
  /* SEMICOLON_TOKEN */
}, s_ = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, o_ = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, a_ = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Ul = {
  type: 32
  /* EOF_TOKEN */
}, Gw = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(ba(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Ul; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case _o:
          return this.consumeStringToken(_o);
        case aI:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), s = this.peekCodePoint(2);
          if (kh(t) || Qn(r, s)) {
            var a = To(t, r, s) ? iI : rI, u = this.consumeName();
            return { type: 5, value: u, flags: a };
          }
          break;
        case uI:
          if (this.peekCodePoint(0) === xi)
            return this.consumeCodePoint(), JI;
          break;
        case xo:
          return this.consumeStringToken(xo);
        case bo:
          return kI;
        case bi:
          return XI;
        case Sc:
          if (this.peekCodePoint(0) === xi)
            return this.consumeCodePoint(), A_;
          break;
        case Jn:
          if (Dc(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case vI:
          return WI;
        case He:
          var f = e, l = this.peekCodePoint(0), B = this.peekCodePoint(1);
          if (Dc(f, l, B))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (To(f, l, B))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (l === He && B === hI)
            return this.consumeCodePoint(), this.consumeCodePoint(), n_;
          break;
        case qi:
          if (Dc(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Gh:
          if (this.peekCodePoint(0) === Sc)
            for (this.consumeCodePoint(); ; ) {
              var g = this.consumeCodePoint();
              if (g === Sc && (g = this.consumeCodePoint(), g === Gh))
                return this.consumeToken();
              if (g === vt)
                return this.consumeToken();
            }
          break;
        case mI:
          return r_;
        case EI:
          return i_;
        case BI:
          if (this.peekCodePoint(0) === fI && this.peekCodePoint(1) === He && this.peekCodePoint(2) === He)
            return this.consumeCodePoint(), this.consumeCodePoint(), t_;
          break;
        case gI:
          var Q = this.peekCodePoint(0), C = this.peekCodePoint(1), v = this.peekCodePoint(2);
          if (To(Q, C, v)) {
            var u = this.consumeName();
            return { type: 7, value: u };
          }
          break;
        case wI:
          return s_;
        case Gi:
          if (Qn(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case dI:
          return o_;
        case QI:
          if (this.peekCodePoint(0) === xi)
            return this.consumeCodePoint(), YI;
          break;
        case pI:
          return qI;
        case CI:
          return jI;
        case KI:
        case SI:
          var H = this.peekCodePoint(0), K = this.peekCodePoint(1);
          return H === Jn && (yr(K) || K === Lo) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Vh:
          if (this.peekCodePoint(0) === xi)
            return this.consumeCodePoint(), $I;
          if (this.peekCodePoint(0) === Vh)
            return this.consumeCodePoint(), ZI;
          break;
        case UI:
          if (this.peekCodePoint(0) === xi)
            return this.consumeCodePoint(), zI;
          break;
        case vt:
          return Ul;
      }
      return Ko(e) ? (this.consumeWhiteSpace(), a_) : Be(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : ua(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: JA(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); yr(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Lo && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var s = parseInt(JA.apply(void 0, e.map(function(l) {
          return l === Lo ? Sw : l;
        })), 16), a = parseInt(JA.apply(void 0, e.map(function(l) {
          return l === Lo ? Nw : l;
        })), 16);
        return { type: 30, start: s, end: a };
      }
      var u = parseInt(JA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === He && yr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var f = []; yr(t) && f.length < 6; )
          f.push(t), t = this.consumeCodePoint();
        var a = parseInt(JA.apply(void 0, f), 16);
        return { type: 30, start: u, end: a };
      } else
        return { type: 30, start: u, end: u };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === bo ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === bo ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === vt)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === xo || t === _o) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === vt || this.peekCodePoint(0) === bi) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), So);
      }
      for (; ; ) {
        var s = this.consumeCodePoint();
        if (s === vt || s === bi)
          return { type: 22, value: JA.apply(void 0, e) };
        if (Ko(s))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === vt || this.peekCodePoint(0) === bi ? (this.consumeCodePoint(), { type: 22, value: JA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), So);
        if (s === _o || s === xo || s === bo || VI(s))
          return this.consumeBadUrlRemnants(), So;
        if (s === Gi)
          if (Qn(s, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), So;
        else
          e.push(s);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Ko(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === bi || e === vt)
          return;
        Qn(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var s = Math.min(t, e);
        r += JA.apply(void 0, this._value.splice(0, s)), e -= s;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var s = this._value[r];
        if (s === vt || s === void 0 || s === e)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (s === aa)
          return this._value.splice(0, r), e_;
        if (s === Gi) {
          var a = this._value[r + 1];
          a !== vt && a !== void 0 && (a === aa ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Qn(s, a) && (t += this.consumeStringSlice(r), t += JA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = is, r = this.peekCodePoint(0);
      for ((r === Jn || r === He) && e.push(this.consumeCodePoint()); Be(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var s = this.peekCodePoint(1);
      if (r === qi && Be(s))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Nh; Be(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), s = this.peekCodePoint(1);
      var a = this.peekCodePoint(2);
      if ((r === Rw || r === Mw) && ((s === Jn || s === He) && Be(a) || Be(s)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Nh; Be(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [PI(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], s = this.peekCodePoint(0), a = this.peekCodePoint(1), u = this.peekCodePoint(2);
      if (To(s, a, u)) {
        var f = this.consumeName();
        return { type: 15, number: t, flags: r, unit: f };
      }
      return s === cI ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (yr(e)) {
        for (var t = JA(e); yr(this.peekCodePoint(0)) && t.length < 6; )
          t += JA(this.consumeCodePoint());
        Ko(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || MI(r) || r > 1114111 ? Ph : r;
      }
      return e === vt ? Ph : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (kh(t))
          e += JA(t);
        else if (Qn(t, this.peekCodePoint(0)))
          e += JA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), Vw = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Gw();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; )
        e = this.consumeToken();
      if (e.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || c_(r, e))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? Ul : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), ss = function(A) {
  return A.type === 15;
}, kr = function(A) {
  return A.type === 17;
}, xA = function(A) {
  return A.type === 20;
}, u_ = function(A) {
  return A.type === 0;
}, Fl = function(A, e) {
  return xA(A) && A.value === e;
}, Pw = function(A) {
  return A.type !== 31;
}, Nr = function(A) {
  return A.type !== 31 && A.type !== 4;
}, It = function(A) {
  var e = [], t = [];
  return A.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && e.push(t), e;
}, c_ = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, En = function(A) {
  return A.type === 17 || A.type === 15;
}, ZA = function(A) {
  return A.type === 16 || En(A);
}, kw = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, se = {
  type: 17,
  number: 0,
  flags: is
}, Jl = {
  type: 16,
  number: 50,
  flags: is
}, Cn = {
  type: 16,
  number: 100,
  flags: is
}, Oi = function(A, e, t) {
  var r = A[0], s = A[1];
  return [SA(r, e), SA(typeof s < "u" ? s : r, t)];
}, SA = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (ss(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, Xw = "deg", Ww = "grad", Jw = "rad", Yw = "turn", La = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case Xw:
          return Math.PI * e.number / 180;
        case Ww:
          return Math.PI / 200 * e.number;
        case Jw:
          return e.number;
        case Yw:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Zw = function(A) {
  return A.type === 15 && (A.unit === Xw || A.unit === Ww || A.unit === Jw || A.unit === Yw);
}, $w = function(A) {
  var e = A.filter(xA).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [se, se];
    case "to top":
    case "bottom":
      return ze(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [se, Cn];
    case "to right":
    case "left":
      return ze(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Cn, Cn];
    case "to bottom":
    case "top":
      return ze(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Cn, se];
    case "to left":
    case "right":
      return ze(270);
  }
  return 0;
}, ze = function(A) {
  return Math.PI * A / 180;
}, Fn = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = l_[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var r = e.value.substring(0, 1), s = e.value.substring(1, 2), a = e.value.substring(2, 3);
        return Un(parseInt(r + r, 16), parseInt(s + s, 16), parseInt(a + a, 16), 1);
      }
      if (e.value.length === 4) {
        var r = e.value.substring(0, 1), s = e.value.substring(1, 2), a = e.value.substring(2, 3), u = e.value.substring(3, 4);
        return Un(parseInt(r + r, 16), parseInt(s + s, 16), parseInt(a + a, 16), parseInt(u + u, 16) / 255);
      }
      if (e.value.length === 6) {
        var r = e.value.substring(0, 2), s = e.value.substring(2, 4), a = e.value.substring(4, 6);
        return Un(parseInt(r, 16), parseInt(s, 16), parseInt(a, 16), 1);
      }
      if (e.value.length === 8) {
        var r = e.value.substring(0, 2), s = e.value.substring(2, 4), a = e.value.substring(4, 6), u = e.value.substring(6, 8);
        return Un(parseInt(r, 16), parseInt(s, 16), parseInt(a, 16), parseInt(u, 16) / 255);
      }
    }
    if (e.type === 20) {
      var f = Zt[e.value.toUpperCase()];
      if (typeof f < "u")
        return f;
    }
    return Zt.TRANSPARENT;
  }
}, vn = function(A) {
  return (255 & A) === 0;
}, ee = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, s = 255 & A >> 24;
  return e < 255 ? "rgba(" + s + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + s + "," + r + "," + t + ")";
}, Un = function(A, e, t, r) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Xh = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, Wh = function(A, e) {
  var t = e.filter(Nr);
  if (t.length === 3) {
    var r = t.map(Xh), s = r[0], a = r[1], u = r[2];
    return Un(s, a, u, 1);
  }
  if (t.length === 4) {
    var f = t.map(Xh), s = f[0], a = f[1], u = f[2], l = f[3];
    return Un(s, a, u, l);
  }
  return 0;
};
function Mc(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var Jh = function(A, e) {
  var t = e.filter(Nr), r = t[0], s = t[1], a = t[2], u = t[3], f = (r.type === 17 ? ze(r.number) : La.parse(A, r)) / (Math.PI * 2), l = ZA(s) ? s.number / 100 : 0, B = ZA(a) ? a.number / 100 : 0, g = typeof u < "u" && ZA(u) ? SA(u, 1) : 1;
  if (l === 0)
    return Un(B * 255, B * 255, B * 255, 1);
  var Q = B <= 0.5 ? B * (l + 1) : B + l - B * l, C = B * 2 - Q, v = Mc(C, Q, f + 1 / 3), H = Mc(C, Q, f), K = Mc(C, Q, f - 1 / 3);
  return Un(v * 255, H * 255, K * 255, g);
}, l_ = {
  hsl: Jh,
  hsla: Jh,
  rgb: Wh,
  rgba: Wh
}, Vi = function(A, e) {
  return Fn.parse(A, Vw.create(e).parseComponentValue());
}, Zt = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, f_ = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (xA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, B_ = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ka = function(A, e) {
  var t = Fn.parse(A, e[0]), r = e[1];
  return r && ZA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Yh = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = se), r.stop === null && (r.stop = Cn);
  for (var s = [], a = 0, u = 0; u < A.length; u++) {
    var f = A[u].stop;
    if (f !== null) {
      var l = SA(f, e);
      l > a ? s.push(l) : s.push(a), a = l;
    } else
      s.push(null);
  }
  for (var B = null, u = 0; u < s.length; u++) {
    var g = s[u];
    if (g === null)
      B === null && (B = u);
    else if (B !== null) {
      for (var Q = u - B, C = s[B - 1], v = (g - C) / (Q + 1), H = 1; H <= Q; H++)
        s[B + H - 1] = v * H;
      B = null;
    }
  }
  return A.map(function(K, V) {
    var b = K.color;
    return { color: b, stop: Math.max(Math.min(1, s[V] / e), 0) };
  });
}, h_ = function(A, e, t) {
  var r = e / 2, s = t / 2, a = SA(A[0], e) - r, u = s - SA(A[1], t);
  return (Math.atan2(u, a) + Math.PI * 2) % (Math.PI * 2);
}, g_ = function(A, e, t) {
  var r = typeof A == "number" ? A : h_(A, e, t), s = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), a = e / 2, u = t / 2, f = s / 2, l = Math.sin(r - Math.PI / 2) * f, B = Math.cos(r - Math.PI / 2) * f;
  return [s, a - B, a + B, u - l, u + l];
}, ot = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, Zh = function(A, e, t, r, s) {
  var a = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return a.reduce(function(u, f) {
    var l = f[0], B = f[1], g = ot(t - l, r - B);
    return (s ? g < u.optimumDistance : g > u.optimumDistance) ? {
      optimumCorner: f,
      optimumDistance: g
    } : u;
  }, {
    optimumDistance: s ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, w_ = function(A, e, t, r, s) {
  var a = 0, u = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? a = u = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - s)) : A.shape === 1 && (a = Math.min(Math.abs(e), Math.abs(e - r)), u = Math.min(Math.abs(t), Math.abs(t - s)));
      break;
    case 2:
      if (A.shape === 0)
        a = u = Math.min(ot(e, t), ot(e, t - s), ot(e - r, t), ot(e - r, t - s));
      else if (A.shape === 1) {
        var f = Math.min(Math.abs(t), Math.abs(t - s)) / Math.min(Math.abs(e), Math.abs(e - r)), l = Zh(r, s, e, t, !0), B = l[0], g = l[1];
        a = ot(B - e, (g - t) / f), u = f * a;
      }
      break;
    case 1:
      A.shape === 0 ? a = u = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - s)) : A.shape === 1 && (a = Math.max(Math.abs(e), Math.abs(e - r)), u = Math.max(Math.abs(t), Math.abs(t - s)));
      break;
    case 3:
      if (A.shape === 0)
        a = u = Math.max(ot(e, t), ot(e, t - s), ot(e - r, t), ot(e - r, t - s));
      else if (A.shape === 1) {
        var f = Math.max(Math.abs(t), Math.abs(t - s)) / Math.max(Math.abs(e), Math.abs(e - r)), Q = Zh(r, s, e, t, !1), B = Q[0], g = Q[1];
        a = ot(B - e, (g - t) / f), u = f * a;
      }
      break;
  }
  return Array.isArray(A.size) && (a = SA(A.size[0], r), u = A.size.length === 2 ? SA(A.size[1], s) : a), [a, u];
}, d_ = function(A, e) {
  var t = ze(180), r = [];
  return It(e).forEach(function(s, a) {
    if (a === 0) {
      var u = s[0];
      if (u.type === 20 && u.value === "to") {
        t = $w(s);
        return;
      } else if (Zw(u)) {
        t = La.parse(A, u);
        return;
      }
    }
    var f = Ka(A, s);
    r.push(f);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Do = function(A, e) {
  var t = ze(180), r = [];
  return It(e).forEach(function(s, a) {
    if (a === 0) {
      var u = s[0];
      if (u.type === 20 && ["top", "left", "right", "bottom"].indexOf(u.value) !== -1) {
        t = $w(s);
        return;
      } else if (Zw(u)) {
        t = (La.parse(A, u) + ze(270)) % ze(360);
        return;
      }
    }
    var f = Ka(A, s);
    r.push(f);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Q_ = function(A, e) {
  var t = ze(180), r = [], s = 1, a = 0, u = 3, f = [];
  return It(e).forEach(function(l, B) {
    var g = l[0];
    if (B === 0) {
      if (xA(g) && g.value === "linear") {
        s = 1;
        return;
      } else if (xA(g) && g.value === "radial") {
        s = 2;
        return;
      }
    }
    if (g.type === 18) {
      if (g.name === "from") {
        var Q = Fn.parse(A, g.values[0]);
        r.push({ stop: se, color: Q });
      } else if (g.name === "to") {
        var Q = Fn.parse(A, g.values[0]);
        r.push({ stop: Cn, color: Q });
      } else if (g.name === "color-stop") {
        var C = g.values.filter(Nr);
        if (C.length === 2) {
          var Q = Fn.parse(A, C[1]), v = C[0];
          kr(v) && r.push({
            stop: { type: 16, number: v.number * 100, flags: v.flags },
            color: Q
          });
        }
      }
    }
  }), s === 1 ? {
    angle: (t + ze(180)) % ze(360),
    stops: r,
    type: s
  } : { size: u, shape: a, stops: r, position: f, type: s };
}, zw = "closest-side", qw = "farthest-side", jw = "closest-corner", Ad = "farthest-corner", ed = "circle", td = "ellipse", nd = "cover", rd = "contain", p_ = function(A, e) {
  var t = 0, r = 3, s = [], a = [];
  return It(e).forEach(function(u, f) {
    var l = !0;
    if (f === 0) {
      var B = !1;
      l = u.reduce(function(Q, C) {
        if (B)
          if (xA(C))
            switch (C.value) {
              case "center":
                return a.push(Jl), Q;
              case "top":
              case "left":
                return a.push(se), Q;
              case "right":
              case "bottom":
                return a.push(Cn), Q;
            }
          else (ZA(C) || En(C)) && a.push(C);
        else if (xA(C))
          switch (C.value) {
            case ed:
              return t = 0, !1;
            case td:
              return t = 1, !1;
            case "at":
              return B = !0, !1;
            case zw:
              return r = 0, !1;
            case nd:
            case qw:
              return r = 1, !1;
            case rd:
            case jw:
              return r = 2, !1;
            case Ad:
              return r = 3, !1;
          }
        else if (En(C) || ZA(C))
          return Array.isArray(r) || (r = []), r.push(C), !1;
        return Q;
      }, l);
    }
    if (l) {
      var g = Ka(A, u);
      s.push(g);
    }
  }), {
    size: r,
    shape: t,
    stops: s,
    position: a,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Mo = function(A, e) {
  var t = 0, r = 3, s = [], a = [];
  return It(e).forEach(function(u, f) {
    var l = !0;
    if (f === 0 ? l = u.reduce(function(g, Q) {
      if (xA(Q))
        switch (Q.value) {
          case "center":
            return a.push(Jl), !1;
          case "top":
          case "left":
            return a.push(se), !1;
          case "right":
          case "bottom":
            return a.push(Cn), !1;
        }
      else if (ZA(Q) || En(Q))
        return a.push(Q), !1;
      return g;
    }, l) : f === 1 && (l = u.reduce(function(g, Q) {
      if (xA(Q))
        switch (Q.value) {
          case ed:
            return t = 0, !1;
          case td:
            return t = 1, !1;
          case rd:
          case zw:
            return r = 0, !1;
          case qw:
            return r = 1, !1;
          case jw:
            return r = 2, !1;
          case nd:
          case Ad:
            return r = 3, !1;
        }
      else if (En(Q) || ZA(Q))
        return Array.isArray(r) || (r = []), r.push(Q), !1;
      return g;
    }, l)), l) {
      var B = Ka(A, u);
      s.push(B);
    }
  }), {
    size: r,
    shape: t,
    stops: s,
    position: a,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, C_ = function(A) {
  return A.type === 1;
}, U_ = function(A) {
  return A.type === 2;
}, Yl = {
  name: "image",
  parse: function(A, e) {
    if (e.type === 22) {
      var t = {
        url: e.value,
        type: 0
        /* URL */
      };
      return A.cache.addImage(e.value), t;
    }
    if (e.type === 18) {
      var r = id[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function F_(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!id[A.name]);
}
var id = {
  "linear-gradient": d_,
  "-moz-linear-gradient": Do,
  "-ms-linear-gradient": Do,
  "-o-linear-gradient": Do,
  "-webkit-linear-gradient": Do,
  "radial-gradient": p_,
  "-moz-radial-gradient": Mo,
  "-ms-radial-gradient": Mo,
  "-o-radial-gradient": Mo,
  "-webkit-radial-gradient": Mo,
  "-webkit-gradient": Q_
}, v_ = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Nr(r) && F_(r);
    }).map(function(r) {
      return Yl.parse(A, r);
    });
  }
}, m_ = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (xA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, E_ = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return It(e).map(function(t) {
      return t.filter(ZA);
    }).map(kw);
  }
}, y_ = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return It(e).map(function(t) {
      return t.filter(xA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(H_);
  }
}, H_ = function(A) {
  switch (A) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, Dr;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(Dr || (Dr = {}));
var I_ = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return It(e).map(function(t) {
      return t.filter(__);
    });
  }
}, __ = function(A) {
  return xA(A) || ZA(A);
}, Ta = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, x_ = Ta("top"), b_ = Ta("right"), L_ = Ta("bottom"), K_ = Ta("left"), Sa = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return kw(t.filter(ZA));
    }
  };
}, T_ = Sa("top-left"), S_ = Sa("top-right"), D_ = Sa("bottom-right"), M_ = Sa("bottom-left"), Da = function(A) {
  return {
    name: "border-" + A + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(e, t) {
      switch (t) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, O_ = Da("top"), R_ = Da("right"), N_ = Da("bottom"), G_ = Da("left"), Ma = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return ss(t) ? t.number : 0;
    }
  };
}, V_ = Ma("top"), P_ = Ma("right"), k_ = Ma("bottom"), X_ = Ma("left"), W_ = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, J_ = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, Y_ = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(xA).reduce(
      function(t, r) {
        return t | Z_(r.value);
      },
      0
      /* NONE */
    );
  }
}, Z_ = function(A) {
  switch (A) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, $_ = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, z_ = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, ca;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(ca || (ca = {}));
var q_ = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return ca.STRICT;
      case "normal":
      default:
        return ca.NORMAL;
    }
  }
}, j_ = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, $h = function(A, e) {
  return xA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : ZA(A) ? SA(A, e) : e;
}, Ax = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : Yl.parse(A, e);
  }
}, ex = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, vl = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, Oa = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, tx = Oa("top"), nx = Oa("right"), rx = Oa("bottom"), ix = Oa("left"), sx = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(xA).map(function(t) {
      switch (t.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, ox = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Ra = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, ax = Ra("top"), ux = Ra("right"), cx = Ra("bottom"), lx = Ra("left"), fx = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, Bx = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, hx = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Fl(e[0], "none") ? [] : It(e).map(function(t) {
      for (var r = {
        color: Zt.TRANSPARENT,
        offsetX: se,
        offsetY: se,
        blur: se
      }, s = 0, a = 0; a < t.length; a++) {
        var u = t[a];
        En(u) ? (s === 0 ? r.offsetX = u : s === 1 ? r.offsetY = u : r.blur = u, s++) : r.color = Fn.parse(A, u);
      }
      return r;
    });
  }
}, gx = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, wx = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = px[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, dx = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, Qx = function(A) {
  var e = A.filter(function(l) {
    return l.type === 17;
  }).map(function(l) {
    return l.number;
  }), t = e[0], r = e[1];
  e[2], e[3];
  var s = e[4], a = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var u = e[12], f = e[13];
  return e[14], e[15], e.length === 16 ? [t, r, s, a, u, f] : null;
}, px = {
  matrix: dx,
  matrix3d: Qx
}, zh = {
  type: 16,
  number: 50,
  flags: is
}, Cx = [zh, zh], Ux = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(ZA);
    return t.length !== 2 ? Cx : [t[0], t[1]];
  }
}, Fx = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, Pi;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(Pi || (Pi = {}));
var vx = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return Pi.BREAK_ALL;
      case "keep-all":
        return Pi.KEEP_ALL;
      case "normal":
      default:
        return Pi.NORMAL;
    }
  }
}, mx = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (kr(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, sd = {
  name: "time",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
    throw new Error("Unsupported time type");
  }
}, Ex = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return kr(e) ? e.number : 1;
  }
}, yx = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Hx = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(xA).map(function(t) {
      switch (t.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, Ix = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [], r = [];
    return e.forEach(function(s) {
      switch (s.type) {
        case 20:
        case 0:
          t.push(s.value);
          break;
        case 17:
          t.push(s.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(s) {
      return s.indexOf(" ") === -1 ? s : "'" + s + "'";
    });
  }
}, _x = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, xx = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (kr(e))
      return e.number;
    if (xA(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, bx = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(xA).map(function(t) {
      return t.value;
    });
  }
}, Lx = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, jA = function(A, e) {
  return (A & e) !== 0;
}, Kx = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e;
  }
}, Tx = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], s = e.filter(Pw), a = 0; a < s.length; a++) {
      var u = s[a], f = s[a + 1];
      if (u.type === 20) {
        var l = f && kr(f) ? f.number : 1;
        r.push({ counter: u.value, increment: l });
      }
    }
    return r;
  }
}, Sx = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(Pw), s = 0; s < r.length; s++) {
      var a = r[s], u = r[s + 1];
      if (xA(a) && a.value !== "none") {
        var f = u && kr(u) ? u.number : 0;
        t.push({ counter: a.value, reset: f });
      }
    }
    return t;
  }
}, Dx = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(ss).map(function(t) {
      return sd.parse(A, t);
    });
  }
}, Mx = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], s = e.filter(u_);
    if (s.length % 2 !== 0)
      return null;
    for (var a = 0; a < s.length; a += 2) {
      var u = s[a].value, f = s[a + 1].value;
      r.push({ open: u, close: f });
    }
    return r;
  }
}, qh = function(A, e, t) {
  if (!A)
    return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Ox = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Fl(e[0], "none") ? [] : It(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: se,
        offsetY: se,
        blur: se,
        spread: se,
        inset: !1
      }, s = 0, a = 0; a < t.length; a++) {
        var u = t[a];
        Fl(u, "inset") ? r.inset = !0 : En(u) ? (s === 0 ? r.offsetX = u : s === 1 ? r.offsetY = u : s === 2 ? r.blur = u : r.spread = u, s++) : r.color = Fn.parse(A, u);
      }
      return r;
    });
  }
}, Rx = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return e.filter(xA).forEach(function(s) {
      switch (s.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(s) {
      r.indexOf(s) === -1 && r.push(s);
    }), r;
  }
}, Nx = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Gx = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return ss(e) ? e.number : 0;
  }
}, Vx = (
  /** @class */
  function() {
    function A(e, t) {
      var r, s;
      this.animationDuration = Z(e, Dx, t.animationDuration), this.backgroundClip = Z(e, f_, t.backgroundClip), this.backgroundColor = Z(e, B_, t.backgroundColor), this.backgroundImage = Z(e, v_, t.backgroundImage), this.backgroundOrigin = Z(e, m_, t.backgroundOrigin), this.backgroundPosition = Z(e, E_, t.backgroundPosition), this.backgroundRepeat = Z(e, y_, t.backgroundRepeat), this.backgroundSize = Z(e, I_, t.backgroundSize), this.borderTopColor = Z(e, x_, t.borderTopColor), this.borderRightColor = Z(e, b_, t.borderRightColor), this.borderBottomColor = Z(e, L_, t.borderBottomColor), this.borderLeftColor = Z(e, K_, t.borderLeftColor), this.borderTopLeftRadius = Z(e, T_, t.borderTopLeftRadius), this.borderTopRightRadius = Z(e, S_, t.borderTopRightRadius), this.borderBottomRightRadius = Z(e, D_, t.borderBottomRightRadius), this.borderBottomLeftRadius = Z(e, M_, t.borderBottomLeftRadius), this.borderTopStyle = Z(e, O_, t.borderTopStyle), this.borderRightStyle = Z(e, R_, t.borderRightStyle), this.borderBottomStyle = Z(e, N_, t.borderBottomStyle), this.borderLeftStyle = Z(e, G_, t.borderLeftStyle), this.borderTopWidth = Z(e, V_, t.borderTopWidth), this.borderRightWidth = Z(e, P_, t.borderRightWidth), this.borderBottomWidth = Z(e, k_, t.borderBottomWidth), this.borderLeftWidth = Z(e, X_, t.borderLeftWidth), this.boxShadow = Z(e, Ox, t.boxShadow), this.color = Z(e, W_, t.color), this.direction = Z(e, J_, t.direction), this.display = Z(e, Y_, t.display), this.float = Z(e, $_, t.cssFloat), this.fontFamily = Z(e, Ix, t.fontFamily), this.fontSize = Z(e, _x, t.fontSize), this.fontStyle = Z(e, Lx, t.fontStyle), this.fontVariant = Z(e, bx, t.fontVariant), this.fontWeight = Z(e, xx, t.fontWeight), this.letterSpacing = Z(e, z_, t.letterSpacing), this.lineBreak = Z(e, q_, t.lineBreak), this.lineHeight = Z(e, j_, t.lineHeight), this.listStyleImage = Z(e, Ax, t.listStyleImage), this.listStylePosition = Z(e, ex, t.listStylePosition), this.listStyleType = Z(e, vl, t.listStyleType), this.marginTop = Z(e, tx, t.marginTop), this.marginRight = Z(e, nx, t.marginRight), this.marginBottom = Z(e, rx, t.marginBottom), this.marginLeft = Z(e, ix, t.marginLeft), this.opacity = Z(e, Ex, t.opacity);
      var a = Z(e, sx, t.overflow);
      this.overflowX = a[0], this.overflowY = a[a.length > 1 ? 1 : 0], this.overflowWrap = Z(e, ox, t.overflowWrap), this.paddingTop = Z(e, ax, t.paddingTop), this.paddingRight = Z(e, ux, t.paddingRight), this.paddingBottom = Z(e, cx, t.paddingBottom), this.paddingLeft = Z(e, lx, t.paddingLeft), this.paintOrder = Z(e, Rx, t.paintOrder), this.position = Z(e, Bx, t.position), this.textAlign = Z(e, fx, t.textAlign), this.textDecorationColor = Z(e, yx, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = Z(e, Hx, (s = t.textDecorationLine) !== null && s !== void 0 ? s : t.textDecoration), this.textShadow = Z(e, hx, t.textShadow), this.textTransform = Z(e, gx, t.textTransform), this.transform = Z(e, wx, t.transform), this.transformOrigin = Z(e, Ux, t.transformOrigin), this.visibility = Z(e, Fx, t.visibility), this.webkitTextStrokeColor = Z(e, Nx, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = Z(e, Gx, t.webkitTextStrokeWidth), this.wordBreak = Z(e, vx, t.wordBreak), this.zIndex = Z(e, mx, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return vn(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return jA(
        this.display,
        4
        /* INLINE */
      ) || jA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || jA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || jA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || jA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || jA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), Px = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = Z(e, Kx, t.content), this.quotes = Z(e, Mx, t.quotes);
    }
    return A;
  }()
), jh = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = Z(e, Tx, t.counterIncrement), this.counterReset = Z(e, Sx, t.counterReset);
    }
    return A;
  }()
), Z = function(A, e, t) {
  var r = new Gw(), s = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(s);
  var a = new Vw(r.read());
  switch (e.type) {
    case 2:
      var u = a.parseComponentValue();
      return e.parse(A, xA(u) ? u.value : e.initialValue);
    case 0:
      return e.parse(A, a.parseComponentValue());
    case 1:
      return e.parse(A, a.parseComponentValues());
    case 4:
      return a.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return La.parse(A, a.parseComponentValue());
        case "color":
          return Fn.parse(A, a.parseComponentValue());
        case "image":
          return Yl.parse(A, a.parseComponentValue());
        case "length":
          var f = a.parseComponentValue();
          return En(f) ? f : se;
        case "length-percentage":
          var l = a.parseComponentValue();
          return ZA(l) ? l : se;
        case "time":
          return sd.parse(A, a.parseComponentValue());
      }
      break;
  }
}, kx = "data-html2canvas-debug", Xx = function(A) {
  var e = A.getAttribute(kx);
  switch (e) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, ml = function(A, e) {
  var t = Xx(A);
  return t === 1 || e === t;
}, _t = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, ml(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Vx(e, window.getComputedStyle(t, null)), Hl(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = xa(this.context, t), ml(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), Wx = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Ag = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ri = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Oo = 0; Oo < Ag.length; Oo++)
  Ri[Ag.charCodeAt(Oo)] = Oo;
var Jx = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, a, u, f, l;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var B = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), g = Array.isArray(B) ? B : new Uint8Array(B);
  for (r = 0; r < t; r += 4)
    a = Ri[A.charCodeAt(r)], u = Ri[A.charCodeAt(r + 1)], f = Ri[A.charCodeAt(r + 2)], l = Ri[A.charCodeAt(r + 3)], g[s++] = a << 2 | u >> 4, g[s++] = (u & 15) << 4 | f >> 2, g[s++] = (f & 3) << 6 | l & 63;
  return B;
}, Yx = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, Zx = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, qn = 5, Zl = 11, Oc = 2, $x = Zl - qn, od = 65536 >> qn, zx = 1 << qn, Rc = zx - 1, qx = 1024 >> qn, jx = od + qx, Ab = jx, eb = 32, tb = Ab + eb, nb = 65536 >> Zl, rb = 1 << $x, ib = rb - 1, eg = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, sb = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, ob = function(A, e) {
  var t = Jx(A), r = Array.isArray(t) ? Zx(t) : new Uint32Array(t), s = Array.isArray(t) ? Yx(t) : new Uint16Array(t), a = 24, u = eg(s, a / 2, r[4] / 2), f = r[5] === 2 ? eg(s, (a + r[4]) / 2) : sb(r, Math.ceil((a + r[4]) / 4));
  return new ab(r[0], r[1], r[2], r[3], u, f);
}, ab = (
  /** @class */
  function() {
    function A(e, t, r, s, a, u) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = s, this.index = a, this.data = u;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> qn], t = (t << Oc) + (e & Rc), this.data[t];
        if (e <= 65535)
          return t = this.index[od + (e - 55296 >> qn)], t = (t << Oc) + (e & Rc), this.data[t];
        if (e < this.highStart)
          return t = tb - nb + (e >> Zl), t = this.index[t], t += e >> qn & ib, t = this.index[t], t = (t << Oc) + (e & Rc), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), tg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ub = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ro = 0; Ro < tg.length; Ro++)
  ub[tg.charCodeAt(Ro)] = Ro;
var cb = 1, Nc = 2, Gc = 3, ng = 4, rg = 5, lb = 7, ig = 8, Vc = 9, Pc = 10, sg = 11, og = 12, ag = 13, ug = 14, kc = 15, fb = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var s = A.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < r) {
      var a = A.charCodeAt(t++);
      (a & 64512) === 56320 ? e.push(((s & 1023) << 10) + (a & 1023) + 65536) : (e.push(s), t--);
    } else
      e.push(s);
  }
  return e;
}, Bb = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], s = -1, a = ""; ++s < t; ) {
    var u = A[s];
    u <= 65535 ? r.push(u) : (u -= 65536, r.push((u >> 10) + 55296, u % 1024 + 56320)), (s + 1 === t || r.length > 16384) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, hb = ob(Wx), Ze = "×", Xc = "÷", gb = function(A) {
  return hb.get(A);
}, wb = function(A, e, t) {
  var r = t - 2, s = e[r], a = e[t - 1], u = e[t];
  if (a === Nc && u === Gc)
    return Ze;
  if (a === Nc || a === Gc || a === ng || u === Nc || u === Gc || u === ng)
    return Xc;
  if (a === ig && [ig, Vc, sg, og].indexOf(u) !== -1 || (a === sg || a === Vc) && (u === Vc || u === Pc) || (a === og || a === Pc) && u === Pc || u === ag || u === rg || u === lb || a === cb)
    return Ze;
  if (a === ag && u === ug) {
    for (; s === rg; )
      s = e[--r];
    if (s === ug)
      return Ze;
  }
  if (a === kc && u === kc) {
    for (var f = 0; s === kc; )
      f++, s = e[--r];
    if (f % 2 === 0)
      return Ze;
  }
  return Xc;
}, db = function(A) {
  var e = fb(A), t = e.length, r = 0, s = 0, a = e.map(gb);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var u = Ze; r < t && (u = wb(e, a, ++r)) === Ze; )
        ;
      if (u !== Ze || r === t) {
        var f = Bb.apply(null, e.slice(s, r));
        return s = r, { value: f, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Qb = function(A) {
  for (var e = db(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, pb = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var r = A.createElement("boundtest");
      r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
      var s = t.getBoundingClientRect(), a = Math.round(s.height);
      if (A.body.removeChild(r), a === e)
        return !0;
    }
  }
  return !1;
}, Cb = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, s = ba(r.data).map(function(l) {
    return JA(l);
  }), a = 0, u = {}, f = s.every(function(l, B) {
    t.setStart(r, a), t.setEnd(r, a + l.length);
    var g = t.getBoundingClientRect();
    a += l.length;
    var Q = g.x > u.x || g.y > u.y;
    return u = g, B === 0 ? !0 : Q;
  });
  return A.body.removeChild(e), f;
}, Ub = function() {
  return typeof new Image().crossOrigin < "u";
}, Fb = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, vb = function(A) {
  var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(e, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, cg = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, mb = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r = e.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var s = new Image(), a = e.toDataURL();
  s.src = a;
  var u = El(t, t, 0, 0, s);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), lg(u).then(function(f) {
    r.drawImage(f, 0, 0);
    var l = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var B = A.createElement("div");
    return B.style.backgroundImage = "url(" + a + ")", B.style.height = t + "px", cg(l) ? lg(El(t, t, 0, 0, B)) : Promise.reject(!1);
  }).then(function(f) {
    return r.drawImage(f, 0, 0), cg(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, El = function(A, e, t, r, s) {
  var a = "http://www.w3.org/2000/svg", u = document.createElementNS(a, "svg"), f = document.createElementNS(a, "foreignObject");
  return u.setAttributeNS(null, "width", A.toString()), u.setAttributeNS(null, "height", e.toString()), f.setAttributeNS(null, "width", "100%"), f.setAttributeNS(null, "height", "100%"), f.setAttributeNS(null, "x", t.toString()), f.setAttributeNS(null, "y", r.toString()), f.setAttributeNS(null, "externalResourcesRequired", "true"), u.appendChild(f), f.appendChild(s), u;
}, lg = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, re = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = pb(document);
    return Object.defineProperty(re, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = re.SUPPORT_RANGE_BOUNDS && Cb(document);
    return Object.defineProperty(re, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = vb(document);
    return Object.defineProperty(re, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? mb(document) : Promise.resolve(!1);
    return Object.defineProperty(re, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = Ub();
    return Object.defineProperty(re, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = Fb();
    return Object.defineProperty(re, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(re, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(re, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, ki = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), Eb = function(A, e, t, r) {
  var s = Ib(e, t), a = [], u = 0;
  return s.forEach(function(f) {
    if (t.textDecorationLine.length || f.trim().length > 0)
      if (re.SUPPORT_RANGE_BOUNDS) {
        var l = fg(r, u, f.length).getClientRects();
        if (l.length > 1) {
          var B = $l(f), g = 0;
          B.forEach(function(C) {
            a.push(new ki(C, zt.fromDOMRectList(A, fg(r, g + u, C.length).getClientRects()))), g += C.length;
          });
        } else
          a.push(new ki(f, zt.fromDOMRectList(A, l)));
      } else {
        var Q = r.splitText(f.length);
        a.push(new ki(f, yb(A, r))), r = Q;
      }
    else re.SUPPORT_RANGE_BOUNDS || (r = r.splitText(f.length));
    u += f.length;
  }), a;
}, yb = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var s = e.parentNode;
    if (s) {
      s.replaceChild(r, e);
      var a = xa(A, r);
      return r.firstChild && s.replaceChild(r.firstChild, r), a;
    }
  }
  return zt.EMPTY;
}, fg = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var s = r.createRange();
  return s.setStart(A, e), s.setEnd(A, e + t), s;
}, $l = function(A) {
  if (re.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return Qb(A);
}, Hb = function(A, e) {
  if (re.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return xb(A, e);
}, Ib = function(A, e) {
  return e.letterSpacing !== 0 ? $l(A) : Hb(A, e);
}, _b = [32, 160, 4961, 65792, 65793, 4153, 4241], xb = function(A, e) {
  for (var t = nI(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], s, a = function() {
    if (s.value) {
      var u = s.value.slice(), f = ba(u), l = "";
      f.forEach(function(B) {
        _b.indexOf(B) === -1 ? l += JA(B) : (l.length && r.push(l), r.push(JA(B)), l = "");
      }), l.length && r.push(l);
    }
  }; !(s = t.next()).done; )
    a();
  return r;
}, bb = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = Lb(t.data, r.textTransform), this.textBounds = Eb(e, this.text, r, t);
    }
    return A;
  }()
), Lb = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(Kb, Tb);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, Kb = /(^|\s|:|-|\(|\))([a-z])/g, Tb = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, ad = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.src = r.currentSrc || r.src, s.intrinsicWidth = r.naturalWidth, s.intrinsicHeight = r.naturalHeight, s.context.cache.addImage(s.src), s;
    }
    return e;
  }(_t)
), ud = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.canvas = r, s.intrinsicWidth = r.width, s.intrinsicHeight = r.height, s;
    }
    return e;
  }(_t)
), cd = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this, a = new XMLSerializer(), u = xa(t, r);
      return r.setAttribute("width", u.width + "px"), r.setAttribute("height", u.height + "px"), s.svg = "data:image/svg+xml," + encodeURIComponent(a.serializeToString(r)), s.intrinsicWidth = r.width.baseVal.value, s.intrinsicHeight = r.height.baseVal.value, s.context.cache.addImage(s.svg), s;
    }
    return e;
  }(_t)
), ld = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(_t)
), yl = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.start = r.start, s.reversed = typeof r.reversed == "boolean" && r.reversed === !0, s;
    }
    return e;
  }(_t)
), Sb = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Db = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Mb = function(A) {
  return A.width > A.height ? new zt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new zt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, Ob = function(A) {
  var e = A.type === Rb ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, la = "checkbox", fa = "radio", Rb = "password", Bg = 707406591, zl = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      switch (s.type = r.type.toLowerCase(), s.checked = r.checked, s.value = Ob(r), (s.type === la || s.type === fa) && (s.styles.backgroundColor = 3739148031, s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575, s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1, s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = 1, s.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], s.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], s.bounds = Mb(s.bounds)), s.type) {
        case la:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = Sb;
          break;
        case fa:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = Db;
          break;
      }
      return s;
    }
    return e;
  }(_t)
), fd = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this, a = r.options[r.selectedIndex || 0];
      return s.value = a && a.text || "", s;
    }
    return e;
  }(_t)
), Bd = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(_t)
), hd = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      s.src = r.src, s.width = parseInt(r.width, 10) || 0, s.height = parseInt(r.height, 10) || 0, s.backgroundColor = s.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          s.tree = wd(t, r.contentWindow.document.documentElement);
          var a = r.contentWindow.document.documentElement ? Vi(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Zt.TRANSPARENT, u = r.contentWindow.document.body ? Vi(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Zt.TRANSPARENT;
          s.backgroundColor = vn(a) ? vn(u) ? s.styles.backgroundColor : u : a;
        }
      } catch {
      }
      return s;
    }
    return e;
  }(_t)
), Nb = ["OL", "UL", "MENU"], $o = function(A, e, t, r) {
  for (var s = e.firstChild, a = void 0; s; s = a)
    if (a = s.nextSibling, dd(s) && s.data.trim().length > 0)
      t.textNodes.push(new bb(A, s, t.styles));
    else if (Lr(s))
      if (Ud(s) && s.assignedNodes)
        s.assignedNodes().forEach(function(f) {
          return $o(A, f, t, r);
        });
      else {
        var u = gd(A, s);
        u.styles.isVisible() && (Gb(s, u, r) ? u.flags |= 4 : Vb(u.styles) && (u.flags |= 2), Nb.indexOf(s.tagName) !== -1 && (u.flags |= 8), t.elements.push(u), s.slot, s.shadowRoot ? $o(A, s.shadowRoot, u, r) : !Ba(s) && !Qd(s) && !ha(s) && $o(A, s, u, r));
      }
}, gd = function(A, e) {
  return Il(e) ? new ad(A, e) : pd(e) ? new ud(A, e) : Qd(e) ? new cd(A, e) : Pb(e) ? new ld(A, e) : kb(e) ? new yl(A, e) : Xb(e) ? new zl(A, e) : ha(e) ? new fd(A, e) : Ba(e) ? new Bd(A, e) : Cd(e) ? new hd(A, e) : new _t(A, e);
}, wd = function(A, e) {
  var t = gd(A, e);
  return t.flags |= 4, $o(A, e, t, t), t;
}, Gb = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || ql(A) && t.styles.isTransparent();
}, Vb = function(A) {
  return A.isPositioned() || A.isFloating();
}, dd = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, Lr = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, Hl = function(A) {
  return Lr(A) && typeof A.style < "u" && !zo(A);
}, zo = function(A) {
  return typeof A.className == "object";
}, Pb = function(A) {
  return A.tagName === "LI";
}, kb = function(A) {
  return A.tagName === "OL";
}, Xb = function(A) {
  return A.tagName === "INPUT";
}, Wb = function(A) {
  return A.tagName === "HTML";
}, Qd = function(A) {
  return A.tagName === "svg";
}, ql = function(A) {
  return A.tagName === "BODY";
}, pd = function(A) {
  return A.tagName === "CANVAS";
}, hg = function(A) {
  return A.tagName === "VIDEO";
}, Il = function(A) {
  return A.tagName === "IMG";
}, Cd = function(A) {
  return A.tagName === "IFRAME";
}, gg = function(A) {
  return A.tagName === "STYLE";
}, Jb = function(A) {
  return A.tagName === "SCRIPT";
}, Ba = function(A) {
  return A.tagName === "TEXTAREA";
}, ha = function(A) {
  return A.tagName === "SELECT";
}, Ud = function(A) {
  return A.tagName === "SLOT";
}, wg = function(A) {
  return A.tagName.indexOf("-") > 0;
}, Yb = (
  /** @class */
  function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r = e.counterIncrement, s = e.counterReset, a = !0;
      r !== null && r.forEach(function(f) {
        var l = t.counters[f.counter];
        l && f.increment !== 0 && (a = !1, l.length || l.push(1), l[Math.max(0, l.length - 1)] += f.increment);
      });
      var u = [];
      return a && s.forEach(function(f) {
        var l = t.counters[f.counter];
        u.push(f.counter), l || (l = t.counters[f.counter] = []), l.push(f.reset);
      }), u;
    }, A;
  }()
), dg = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Qg = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, Zb = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, $b = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, Hr = function(A, e, t, r, s, a) {
  return A < e || A > t ? ji(A, s, a.length > 0) : r.integers.reduce(function(u, f, l) {
    for (; A >= f; )
      A -= f, u += r.values[l];
    return u;
  }, "") + a;
}, Fd = function(A, e, t, r) {
  var s = "";
  do
    t || A--, s = r(A) + s, A /= e;
  while (A * e >= e);
  return s;
}, WA = function(A, e, t, r, s) {
  var a = t - e + 1;
  return (A < 0 ? "-" : "") + (Fd(Math.abs(A), a, r, function(u) {
    return JA(Math.floor(u % a) + e);
  }) + s);
}, Gn = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return Fd(Math.abs(A), r, !1, function(s) {
    return e[Math.floor(s % r)];
  }) + t;
}, xr = 1, gn = 2, wn = 4, Ni = 8, Wt = function(A, e, t, r, s, a) {
  if (A < -9999 || A > 9999)
    return ji(A, 4, s.length > 0);
  var u = Math.abs(A), f = s;
  if (u === 0)
    return e[0] + f;
  for (var l = 0; u > 0 && l <= 4; l++) {
    var B = u % 10;
    B === 0 && jA(a, xr) && f !== "" ? f = e[B] + f : B > 1 || B === 1 && l === 0 || B === 1 && l === 1 && jA(a, gn) || B === 1 && l === 1 && jA(a, wn) && A > 100 || B === 1 && l > 1 && jA(a, Ni) ? f = e[B] + (l > 0 ? t[l - 1] : "") + f : B === 1 && l > 0 && (f = t[l - 1] + f), u = Math.floor(u / 10);
  }
  return (A < 0 ? r : "") + f;
}, pg = "十百千萬", Cg = "拾佰仟萬", Ug = "マイナス", Wc = "마이너스", ji = function(A, e, t) {
  var r = t ? ". " : "", s = t ? "、" : "", a = t ? ", " : "", u = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + u;
    case 1:
      return "◦" + u;
    case 2:
      return "◾" + u;
    case 5:
      var f = WA(A, 48, 57, !0, r);
      return f.length < 4 ? "0" + f : f;
    case 4:
      return Gn(A, "〇一二三四五六七八九", s);
    case 6:
      return Hr(A, 1, 3999, dg, 3, r).toLowerCase();
    case 7:
      return Hr(A, 1, 3999, dg, 3, r);
    case 8:
      return WA(A, 945, 969, !1, r);
    case 9:
      return WA(A, 97, 122, !1, r);
    case 10:
      return WA(A, 65, 90, !1, r);
    case 11:
      return WA(A, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Hr(A, 1, 9999, Qg, 3, r);
    case 35:
      return Hr(A, 1, 9999, Qg, 3, r).toLowerCase();
    case 13:
      return WA(A, 2534, 2543, !0, r);
    case 14:
    case 30:
      return WA(A, 6112, 6121, !0, r);
    case 15:
      return Gn(A, "子丑寅卯辰巳午未申酉戌亥", s);
    case 16:
      return Gn(A, "甲乙丙丁戊己庚辛壬癸", s);
    case 17:
    case 48:
      return Wt(A, "零一二三四五六七八九", pg, "負", s, gn | wn | Ni);
    case 47:
      return Wt(A, "零壹貳參肆伍陸柒捌玖", Cg, "負", s, xr | gn | wn | Ni);
    case 42:
      return Wt(A, "零一二三四五六七八九", pg, "负", s, gn | wn | Ni);
    case 41:
      return Wt(A, "零壹贰叁肆伍陆柒捌玖", Cg, "负", s, xr | gn | wn | Ni);
    case 26:
      return Wt(A, "〇一二三四五六七八九", "十百千万", Ug, s, 0);
    case 25:
      return Wt(A, "零壱弐参四伍六七八九", "拾百千万", Ug, s, xr | gn | wn);
    case 31:
      return Wt(A, "영일이삼사오육칠팔구", "십백천만", Wc, a, xr | gn | wn);
    case 33:
      return Wt(A, "零一二三四五六七八九", "十百千萬", Wc, a, 0);
    case 32:
      return Wt(A, "零壹貳參四五六七八九", "拾百千", Wc, a, xr | gn | wn);
    case 18:
      return WA(A, 2406, 2415, !0, r);
    case 20:
      return Hr(A, 1, 19999, $b, 3, r);
    case 21:
      return WA(A, 2790, 2799, !0, r);
    case 22:
      return WA(A, 2662, 2671, !0, r);
    case 22:
      return Hr(A, 1, 10999, Zb, 3, r);
    case 23:
      return Gn(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Gn(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return WA(A, 3302, 3311, !0, r);
    case 28:
      return Gn(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", s);
    case 29:
      return Gn(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", s);
    case 34:
      return WA(A, 3792, 3801, !0, r);
    case 37:
      return WA(A, 6160, 6169, !0, r);
    case 38:
      return WA(A, 4160, 4169, !0, r);
    case 39:
      return WA(A, 2918, 2927, !0, r);
    case 40:
      return WA(A, 1776, 1785, !0, r);
    case 43:
      return WA(A, 3046, 3055, !0, r);
    case 44:
      return WA(A, 3174, 3183, !0, r);
    case 45:
      return WA(A, 3664, 3673, !0, r);
    case 46:
      return WA(A, 3872, 3881, !0, r);
    case 3:
    default:
      return WA(A, 48, 57, !0, r);
  }
}, vd = "data-html2canvas-ignore", Fg = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Yb(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, s = zb(e, t);
      if (!s.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var a = e.defaultView.pageXOffset, u = e.defaultView.pageYOffset, f = s.contentWindow, l = f.document, B = A4(s).then(function() {
        return Qe(r, void 0, void 0, function() {
          var g, Q;
          return fe(this, function(C) {
            switch (C.label) {
              case 0:
                return this.scrolledElements.forEach(r4), f && (f.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (f.scrollY !== t.top || f.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(f.scrollX - t.left, f.scrollY - t.top, 0, 0))), g = this.options.onclone, Q = this.clonedReferenceElement, typeof Q > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : l.fonts && l.fonts.ready ? [4, l.fonts.ready] : [3, 2];
              case 1:
                C.sent(), C.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, jb(l)] : [3, 4];
              case 3:
                C.sent(), C.label = 4;
              case 4:
                return typeof g == "function" ? [2, Promise.resolve().then(function() {
                  return g(l, Q);
                }).then(function() {
                  return s;
                })] : [2, s];
            }
          });
        });
      });
      return l.open(), l.write(t4(document.doctype) + "<html></html>"), n4(this.referenceElement.ownerDocument, a, u), l.replaceChild(l.adoptNode(this.documentElement), l.documentElement), l.close(), B;
    }, A.prototype.createElementClone = function(e) {
      if (ml(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (pd(e))
        return this.createCanvasClone(e);
      if (hg(e))
        return this.createVideoClone(e);
      if (gg(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return Il(t) && (Il(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), wg(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Jc(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(a, u) {
            return u && typeof u.cssText == "string" ? a + u.cssText : a;
          }, ""), s = e.cloneNode(!1);
          return s.textContent = r, s;
        }
      } catch (a) {
        if (this.context.logger.error("Unable to access cssRules property", a), a.name !== "SecurityError")
          throw a;
      }
      return e.cloneNode(!1);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var s = e.cloneNode(!1);
      try {
        s.width = e.width, s.height = e.height;
        var a = e.getContext("2d"), u = s.getContext("2d");
        if (u)
          if (!this.options.allowTaint && a)
            u.putImageData(a.getImageData(0, 0, e.width, e.height), 0, 0);
          else {
            var f = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
            if (f) {
              var l = f.getContextAttributes();
              (l == null ? void 0 : l.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
            }
            u.drawImage(e, 0, 0);
          }
        return s;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return s;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var s = e.ownerDocument.createElement("canvas");
      return s.width = e.offsetWidth, s.height = e.offsetHeight, s;
    }, A.prototype.appendChildNode = function(e, t, r) {
      (!Lr(t) || !Jb(t) && !t.hasAttribute(vd) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Lr(t) || !gg(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var s = this, a = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; a; a = a.nextSibling)
        if (Lr(a) && Ud(a) && typeof a.assignedNodes == "function") {
          var u = a.assignedNodes();
          u.length && u.forEach(function(f) {
            return s.appendChildNode(t, f, r);
          });
        } else
          this.appendChildNode(t, a, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (dd(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && Lr(e) && (Hl(e) || zo(e))) {
        var s = this.createElementClone(e);
        s.style.transitionProperty = "none";
        var a = r.getComputedStyle(e), u = r.getComputedStyle(e, ":before"), f = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Hl(s) && (this.clonedReferenceElement = s), ql(s) && o4(s);
        var l = this.counters.parse(new jh(this.context, a)), B = this.resolvePseudoContent(e, s, u, Xi.BEFORE);
        wg(e) && (t = !0), hg(e) || this.cloneChildNodes(e, s, t), B && s.insertBefore(B, s.firstChild);
        var g = this.resolvePseudoContent(e, s, f, Xi.AFTER);
        return g && s.appendChild(g), this.counters.pop(l), (a && (this.options.copyStyles || zo(e)) && !Cd(e) || t) && Jc(a, s), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([s, e.scrollLeft, e.scrollTop]), (Ba(e) || ha(e)) && (Ba(s) || ha(s)) && (s.value = e.value), s;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, s) {
      var a = this;
      if (r) {
        var u = r.content, f = t.ownerDocument;
        if (!(!f || !u || u === "none" || u === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new jh(this.context, r));
          var l = new Px(this.context, r), B = f.createElement("html2canvaspseudoelement");
          Jc(r, B), l.content.forEach(function(Q) {
            if (Q.type === 0)
              B.appendChild(f.createTextNode(Q.value));
            else if (Q.type === 22) {
              var C = f.createElement("img");
              C.src = Q.value, C.style.opacity = "1", B.appendChild(C);
            } else if (Q.type === 18) {
              if (Q.name === "attr") {
                var v = Q.values.filter(xA);
                v.length && B.appendChild(f.createTextNode(e.getAttribute(v[0].value) || ""));
              } else if (Q.name === "counter") {
                var H = Q.values.filter(Nr), K = H[0], V = H[1];
                if (K && xA(K)) {
                  var b = a.counters.getCounterValue(K.value), G = V && xA(V) ? vl.parse(a.context, V.value) : 3;
                  B.appendChild(f.createTextNode(ji(b, G, !1)));
                }
              } else if (Q.name === "counters") {
                var $ = Q.values.filter(Nr), K = $[0], x = $[1], V = $[2];
                if (K && xA(K)) {
                  var N = a.counters.getCounterValues(K.value), D = V && xA(V) ? vl.parse(a.context, V.value) : 3, W = x && x.type === 0 ? x.value : "", j = N.map(function(UA) {
                    return ji(UA, D, !1);
                  }).join(W);
                  B.appendChild(f.createTextNode(j));
                }
              }
            } else if (Q.type === 20)
              switch (Q.value) {
                case "open-quote":
                  B.appendChild(f.createTextNode(qh(l.quotes, a.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  B.appendChild(f.createTextNode(qh(l.quotes, --a.quoteDepth, !1)));
                  break;
                default:
                  B.appendChild(f.createTextNode(Q.value));
              }
          }), B.className = _l + " " + xl;
          var g = s === Xi.BEFORE ? " " + _l : " " + xl;
          return zo(t) ? t.className.baseValue += g : t.className += g, B;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), Xi;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(Xi || (Xi = {}));
var zb = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(vd, "true"), A.body.appendChild(t), t;
}, qb = function(A) {
  return new Promise(function(e) {
    if (A.complete) {
      e();
      return;
    }
    if (!A.src) {
      e();
      return;
    }
    A.onload = e, A.onerror = e;
  });
}, jb = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(qb));
}, A4 = function(A) {
  return new Promise(function(e, t) {
    var r = A.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var s = r.document;
    r.onload = A.onload = function() {
      r.onload = A.onload = null;
      var a = setInterval(function() {
        s.body.childNodes.length > 0 && s.readyState === "complete" && (clearInterval(a), e(A));
      }, 50);
    };
  });
}, e4 = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Jc = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    e4.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, t4 = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, n4 = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, r4 = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, i4 = ":before", s4 = ":after", _l = "___html2canvas___pseudoelement_before", xl = "___html2canvas___pseudoelement_after", vg = `{
    content: "" !important;
    display: none !important;
}`, o4 = function(A) {
  a4(A, "." + _l + i4 + vg + `
         .` + xl + s4 + vg);
}, a4 = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, md = (
  /** @class */
  function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  }()
), u4 = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Zc(e) || B4(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return Qe(this, void 0, void 0, function() {
        var t, r, s, a, u = this;
        return fe(this, function(f) {
          switch (f.label) {
            case 0:
              return t = md.isSameOrigin(e), r = !Yc(e) && this._options.useCORS === !0 && re.SUPPORT_CORS_IMAGES && !t, s = !Yc(e) && !t && !Zc(e) && typeof this._options.proxy == "string" && re.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Yc(e) && !Zc(e) && !s && !r ? [
                2
                /*return*/
              ] : (a = e, s ? [4, this.proxy(a)] : [3, 2]);
            case 1:
              a = f.sent(), f.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(l, B) {
                var g = new Image();
                g.onload = function() {
                  return l(g);
                }, g.onerror = B, (h4(a) || r) && (g.crossOrigin = "anonymous"), g.src = a, g.complete === !0 && setTimeout(function() {
                  return l(g);
                }, 500), u._options.imageTimeout > 0 && setTimeout(function() {
                  return B("Timed out (" + u._options.imageTimeout + "ms) loading image");
                }, u._options.imageTimeout);
              })];
            case 3:
              return [2, f.sent()];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var s = e.substring(0, 256);
      return new Promise(function(a, u) {
        var f = re.SUPPORT_RESPONSE_TYPE ? "blob" : "text", l = new XMLHttpRequest();
        l.onload = function() {
          if (l.status === 200)
            if (f === "text")
              a(l.response);
            else {
              var Q = new FileReader();
              Q.addEventListener("load", function() {
                return a(Q.result);
              }, !1), Q.addEventListener("error", function(C) {
                return u(C);
              }, !1), Q.readAsDataURL(l.response);
            }
          else
            u("Failed to proxy resource " + s + " with status code " + l.status);
        }, l.onerror = u;
        var B = r.indexOf("?") > -1 ? "&" : "?";
        if (l.open("GET", "" + r + B + "url=" + encodeURIComponent(e) + "&responseType=" + f), f !== "text" && l instanceof XMLHttpRequest && (l.responseType = f), t._options.imageTimeout) {
          var g = t._options.imageTimeout;
          l.timeout = g, l.ontimeout = function() {
            return u("Timed out (" + g + "ms) proxying " + s);
          };
        }
        l.send();
      });
    }, A;
  }()
), c4 = /^data:image\/svg\+xml/i, l4 = /^data:image\/.*;base64,/i, f4 = /^data:image\/.*/i, B4 = function(A) {
  return re.SUPPORT_SVG_DRAWING || !g4(A);
}, Yc = function(A) {
  return f4.test(A);
}, h4 = function(A) {
  return l4.test(A);
}, Zc = function(A) {
  return A.substr(0, 4) === "blob";
}, g4 = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || c4.test(A);
}, Y = (
  /** @class */
  function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  }()
), Ir = function(A, e, t) {
  return new Y(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, No = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = s;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = Ir(this.start, this.startControl, e), s = Ir(this.startControl, this.endControl, e), a = Ir(this.endControl, this.end, e), u = Ir(r, s, e), f = Ir(s, a, e), l = Ir(u, f, e);
      return t ? new A(this.start, r, u, l) : new A(l, f, a, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), $e = function(A) {
  return A.type === 1;
}, w4 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, s = Oi(t.borderTopLeftRadius, r.width, r.height), a = s[0], u = s[1], f = Oi(t.borderTopRightRadius, r.width, r.height), l = f[0], B = f[1], g = Oi(t.borderBottomRightRadius, r.width, r.height), Q = g[0], C = g[1], v = Oi(t.borderBottomLeftRadius, r.width, r.height), H = v[0], K = v[1], V = [];
      V.push((a + l) / r.width), V.push((H + Q) / r.width), V.push((u + K) / r.height), V.push((B + C) / r.height);
      var b = Math.max.apply(Math, V);
      b > 1 && (a /= b, u /= b, l /= b, B /= b, Q /= b, C /= b, H /= b, K /= b);
      var G = r.width - l, $ = r.height - C, x = r.width - Q, N = r.height - K, D = t.borderTopWidth, W = t.borderRightWidth, j = t.borderBottomWidth, z = t.borderLeftWidth, gA = SA(t.paddingTop, e.bounds.width), UA = SA(t.paddingRight, e.bounds.width), RA = SA(t.paddingBottom, e.bounds.width), hA = SA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = a > 0 || u > 0 ? OA(r.left + z / 3, r.top + D / 3, a - z / 3, u - D / 3, HA.TOP_LEFT) : new Y(r.left + z / 3, r.top + D / 3), this.topRightBorderDoubleOuterBox = a > 0 || u > 0 ? OA(r.left + G, r.top + D / 3, l - W / 3, B - D / 3, HA.TOP_RIGHT) : new Y(r.left + r.width - W / 3, r.top + D / 3), this.bottomRightBorderDoubleOuterBox = Q > 0 || C > 0 ? OA(r.left + x, r.top + $, Q - W / 3, C - j / 3, HA.BOTTOM_RIGHT) : new Y(r.left + r.width - W / 3, r.top + r.height - j / 3), this.bottomLeftBorderDoubleOuterBox = H > 0 || K > 0 ? OA(r.left + z / 3, r.top + N, H - z / 3, K - j / 3, HA.BOTTOM_LEFT) : new Y(r.left + z / 3, r.top + r.height - j / 3), this.topLeftBorderDoubleInnerBox = a > 0 || u > 0 ? OA(r.left + z * 2 / 3, r.top + D * 2 / 3, a - z * 2 / 3, u - D * 2 / 3, HA.TOP_LEFT) : new Y(r.left + z * 2 / 3, r.top + D * 2 / 3), this.topRightBorderDoubleInnerBox = a > 0 || u > 0 ? OA(r.left + G, r.top + D * 2 / 3, l - W * 2 / 3, B - D * 2 / 3, HA.TOP_RIGHT) : new Y(r.left + r.width - W * 2 / 3, r.top + D * 2 / 3), this.bottomRightBorderDoubleInnerBox = Q > 0 || C > 0 ? OA(r.left + x, r.top + $, Q - W * 2 / 3, C - j * 2 / 3, HA.BOTTOM_RIGHT) : new Y(r.left + r.width - W * 2 / 3, r.top + r.height - j * 2 / 3), this.bottomLeftBorderDoubleInnerBox = H > 0 || K > 0 ? OA(r.left + z * 2 / 3, r.top + N, H - z * 2 / 3, K - j * 2 / 3, HA.BOTTOM_LEFT) : new Y(r.left + z * 2 / 3, r.top + r.height - j * 2 / 3), this.topLeftBorderStroke = a > 0 || u > 0 ? OA(r.left + z / 2, r.top + D / 2, a - z / 2, u - D / 2, HA.TOP_LEFT) : new Y(r.left + z / 2, r.top + D / 2), this.topRightBorderStroke = a > 0 || u > 0 ? OA(r.left + G, r.top + D / 2, l - W / 2, B - D / 2, HA.TOP_RIGHT) : new Y(r.left + r.width - W / 2, r.top + D / 2), this.bottomRightBorderStroke = Q > 0 || C > 0 ? OA(r.left + x, r.top + $, Q - W / 2, C - j / 2, HA.BOTTOM_RIGHT) : new Y(r.left + r.width - W / 2, r.top + r.height - j / 2), this.bottomLeftBorderStroke = H > 0 || K > 0 ? OA(r.left + z / 2, r.top + N, H - z / 2, K - j / 2, HA.BOTTOM_LEFT) : new Y(r.left + z / 2, r.top + r.height - j / 2), this.topLeftBorderBox = a > 0 || u > 0 ? OA(r.left, r.top, a, u, HA.TOP_LEFT) : new Y(r.left, r.top), this.topRightBorderBox = l > 0 || B > 0 ? OA(r.left + G, r.top, l, B, HA.TOP_RIGHT) : new Y(r.left + r.width, r.top), this.bottomRightBorderBox = Q > 0 || C > 0 ? OA(r.left + x, r.top + $, Q, C, HA.BOTTOM_RIGHT) : new Y(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = H > 0 || K > 0 ? OA(r.left, r.top + N, H, K, HA.BOTTOM_LEFT) : new Y(r.left, r.top + r.height), this.topLeftPaddingBox = a > 0 || u > 0 ? OA(r.left + z, r.top + D, Math.max(0, a - z), Math.max(0, u - D), HA.TOP_LEFT) : new Y(r.left + z, r.top + D), this.topRightPaddingBox = l > 0 || B > 0 ? OA(r.left + Math.min(G, r.width - W), r.top + D, G > r.width + W ? 0 : Math.max(0, l - W), Math.max(0, B - D), HA.TOP_RIGHT) : new Y(r.left + r.width - W, r.top + D), this.bottomRightPaddingBox = Q > 0 || C > 0 ? OA(r.left + Math.min(x, r.width - z), r.top + Math.min($, r.height - j), Math.max(0, Q - W), Math.max(0, C - j), HA.BOTTOM_RIGHT) : new Y(r.left + r.width - W, r.top + r.height - j), this.bottomLeftPaddingBox = H > 0 || K > 0 ? OA(r.left + z, r.top + Math.min(N, r.height - j), Math.max(0, H - z), Math.max(0, K - j), HA.BOTTOM_LEFT) : new Y(r.left + z, r.top + r.height - j), this.topLeftContentBox = a > 0 || u > 0 ? OA(r.left + z + hA, r.top + D + gA, Math.max(0, a - (z + hA)), Math.max(0, u - (D + gA)), HA.TOP_LEFT) : new Y(r.left + z + hA, r.top + D + gA), this.topRightContentBox = l > 0 || B > 0 ? OA(r.left + Math.min(G, r.width + z + hA), r.top + D + gA, G > r.width + z + hA ? 0 : l - z + hA, B - (D + gA), HA.TOP_RIGHT) : new Y(r.left + r.width - (W + UA), r.top + D + gA), this.bottomRightContentBox = Q > 0 || C > 0 ? OA(r.left + Math.min(x, r.width - (z + hA)), r.top + Math.min($, r.height + D + gA), Math.max(0, Q - (W + UA)), C - (j + RA), HA.BOTTOM_RIGHT) : new Y(r.left + r.width - (W + UA), r.top + r.height - (j + RA)), this.bottomLeftContentBox = H > 0 || K > 0 ? OA(r.left + z + hA, r.top + N, Math.max(0, H - (z + hA)), K - (j + RA), HA.BOTTOM_LEFT) : new Y(r.left + z + hA, r.top + r.height - (j + RA));
    }
    return A;
  }()
), HA;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(HA || (HA = {}));
var OA = function(A, e, t, r, s) {
  var a = 4 * ((Math.sqrt(2) - 1) / 3), u = t * a, f = r * a, l = A + t, B = e + r;
  switch (s) {
    case HA.TOP_LEFT:
      return new No(new Y(A, B), new Y(A, B - f), new Y(l - u, e), new Y(l, e));
    case HA.TOP_RIGHT:
      return new No(new Y(A, e), new Y(A + u, e), new Y(l, B - f), new Y(l, B));
    case HA.BOTTOM_RIGHT:
      return new No(new Y(l, e), new Y(l, e + f), new Y(A + u, B), new Y(A, B));
    case HA.BOTTOM_LEFT:
    default:
      return new No(new Y(l, B), new Y(l - u, B), new Y(A, e + f), new Y(A, e));
  }
}, ga = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, d4 = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, wa = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, Q4 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }()
), Go = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), p4 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), C4 = function(A) {
  return A.type === 0;
}, Ed = function(A) {
  return A.type === 1;
}, U4 = function(A) {
  return A.type === 2;
}, mg = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, F4 = function(A, e, t, r, s) {
  return A.map(function(a, u) {
    switch (u) {
      case 0:
        return a.add(e, t);
      case 1:
        return a.add(e + r, t);
      case 2:
        return a.add(e + r, t + s);
      case 3:
        return a.add(e, t + s);
    }
    return a;
  });
}, yd = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), Hd = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new w4(this.container), this.container.styles.opacity < 1 && this.effects.push(new p4(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, s = this.container.bounds.top + this.container.styles.transformOrigin[1].number, a = this.container.styles.transform;
        this.effects.push(new Q4(r, s, a));
      }
      if (this.container.styles.overflowX !== 0) {
        var u = ga(this.curves), f = wa(this.curves);
        mg(u, f) ? this.effects.push(new Go(
          u,
          6
          /* CONTENT */
        )) : (this.effects.push(new Go(
          u,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Go(
          f,
          4
          /* CONTENT */
        )));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, s = this.effects.slice(0); r; ) {
        var a = r.effects.filter(function(l) {
          return !Ed(l);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (s.unshift.apply(s, a), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var u = ga(r.curves), f = wa(r.curves);
            mg(u, f) || s.unshift(new Go(
              f,
              6
              /* CONTENT */
            ));
          }
        } else
          s.unshift.apply(s, a);
        r = r.parent;
      }
      return s.filter(function(l) {
        return jA(l.target, e);
      });
    }, A;
  }()
), bl = function(A, e, t, r) {
  A.container.elements.forEach(function(s) {
    var a = jA(
      s.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), u = jA(
      s.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), f = new Hd(s, A);
    jA(
      s.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(f);
    var l = jA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (a || u) {
      var B = a || s.styles.isPositioned() ? t : e, g = new yd(f);
      if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
        var Q = s.styles.zIndex.order;
        if (Q < 0) {
          var C = 0;
          B.negativeZIndex.some(function(H, K) {
            return Q > H.element.container.styles.zIndex.order ? (C = K, !1) : C > 0;
          }), B.negativeZIndex.splice(C, 0, g);
        } else if (Q > 0) {
          var v = 0;
          B.positiveZIndex.some(function(H, K) {
            return Q >= H.element.container.styles.zIndex.order ? (v = K + 1, !1) : v > 0;
          }), B.positiveZIndex.splice(v, 0, g);
        } else
          B.zeroOrAutoZIndexOrTransformedOrOpacity.push(g);
      } else
        s.styles.isFloating() ? B.nonPositionedFloats.push(g) : B.nonPositionedInlineLevel.push(g);
      bl(f, g, a ? g : t, l);
    } else
      s.styles.isInlineLevel() ? e.inlineLevel.push(f) : e.nonInlineLevel.push(f), bl(f, e, t, l);
    jA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) && Id(s, l);
  });
}, Id = function(A, e) {
  for (var t = A instanceof yl ? A.start : 1, r = A instanceof yl ? A.reversed : !1, s = 0; s < e.length; s++) {
    var a = e[s];
    a.container instanceof ld && typeof a.container.value == "number" && a.container.value !== 0 && (t = a.container.value), a.listValue = ji(t, a.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, v4 = function(A) {
  var e = new Hd(A, null), t = new yd(e), r = [];
  return bl(e, t, t, r), Id(e.container, r), t;
}, Eg = function(A, e) {
  switch (e) {
    case 0:
      return qe(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return qe(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return qe(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return qe(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, m4 = function(A, e) {
  switch (e) {
    case 0:
      return qe(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return qe(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return qe(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return qe(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, E4 = function(A, e) {
  switch (e) {
    case 0:
      return qe(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return qe(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return qe(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return qe(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, y4 = function(A, e) {
  switch (e) {
    case 0:
      return Vo(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return Vo(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return Vo(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return Vo(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, Vo = function(A, e) {
  var t = [];
  return $e(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), $e(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, qe = function(A, e, t, r) {
  var s = [];
  return $e(A) ? s.push(A.subdivide(0.5, !1)) : s.push(A), $e(t) ? s.push(t.subdivide(0.5, !0)) : s.push(t), $e(r) ? s.push(r.subdivide(0.5, !0).reverse()) : s.push(r), $e(e) ? s.push(e.subdivide(0.5, !1).reverse()) : s.push(e), s;
}, _d = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, da = function(A) {
  var e = A.styles, t = A.bounds, r = SA(e.paddingLeft, t.width), s = SA(e.paddingRight, t.width), a = SA(e.paddingTop, t.width), u = SA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, a + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + s), -(e.borderTopWidth + e.borderBottomWidth + a + u));
}, H4 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? da(e) : _d(e);
}, I4 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? da(e) : _d(e);
}, $c = function(A, e, t) {
  var r = H4(br(A.styles.backgroundOrigin, e), A), s = I4(br(A.styles.backgroundClip, e), A), a = _4(br(A.styles.backgroundSize, e), t, r), u = a[0], f = a[1], l = Oi(br(A.styles.backgroundPosition, e), r.width - u, r.height - f), B = x4(br(A.styles.backgroundRepeat, e), l, a, r, s), g = Math.round(r.left + l[0]), Q = Math.round(r.top + l[1]);
  return [B, g, Q, u, f];
}, _r = function(A) {
  return xA(A) && A.value === Dr.AUTO;
}, Po = function(A) {
  return typeof A == "number";
}, _4 = function(A, e, t) {
  var r = e[0], s = e[1], a = e[2], u = A[0], f = A[1];
  if (!u)
    return [0, 0];
  if (ZA(u) && f && ZA(f))
    return [SA(u, t.width), SA(f, t.height)];
  var l = Po(a);
  if (xA(u) && (u.value === Dr.CONTAIN || u.value === Dr.COVER)) {
    if (Po(a)) {
      var B = t.width / t.height;
      return B < a != (u.value === Dr.COVER) ? [t.width, t.width / a] : [t.height * a, t.height];
    }
    return [t.width, t.height];
  }
  var g = Po(r), Q = Po(s), C = g || Q;
  if (_r(u) && (!f || _r(f))) {
    if (g && Q)
      return [r, s];
    if (!l && !C)
      return [t.width, t.height];
    if (C && l) {
      var v = g ? r : s * a, H = Q ? s : r / a;
      return [v, H];
    }
    var K = g ? r : t.width, V = Q ? s : t.height;
    return [K, V];
  }
  if (l) {
    var b = 0, G = 0;
    return ZA(u) ? b = SA(u, t.width) : ZA(f) && (G = SA(f, t.height)), _r(u) ? b = G * a : (!f || _r(f)) && (G = b / a), [b, G];
  }
  var $ = null, x = null;
  if (ZA(u) ? $ = SA(u, t.width) : f && ZA(f) && (x = SA(f, t.height)), $ !== null && (!f || _r(f)) && (x = g && Q ? $ / r * s : t.height), x !== null && _r(u) && ($ = g && Q ? x / s * r : t.width), $ !== null && x !== null)
    return [$, x];
  throw new Error("Unable to calculate background-size for element");
}, br = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, x4 = function(A, e, t, r, s) {
  var a = e[0], u = e[1], f = t[0], l = t[1];
  switch (A) {
    case 2:
      return [
        new Y(Math.round(r.left), Math.round(r.top + u)),
        new Y(Math.round(r.left + r.width), Math.round(r.top + u)),
        new Y(Math.round(r.left + r.width), Math.round(l + r.top + u)),
        new Y(Math.round(r.left), Math.round(l + r.top + u))
      ];
    case 3:
      return [
        new Y(Math.round(r.left + a), Math.round(r.top)),
        new Y(Math.round(r.left + a + f), Math.round(r.top)),
        new Y(Math.round(r.left + a + f), Math.round(r.height + r.top)),
        new Y(Math.round(r.left + a), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new Y(Math.round(r.left + a), Math.round(r.top + u)),
        new Y(Math.round(r.left + a + f), Math.round(r.top + u)),
        new Y(Math.round(r.left + a + f), Math.round(r.top + u + l)),
        new Y(Math.round(r.left + a), Math.round(r.top + u + l))
      ];
    default:
      return [
        new Y(Math.round(s.left), Math.round(s.top)),
        new Y(Math.round(s.left + s.width), Math.round(s.top)),
        new Y(Math.round(s.left + s.width), Math.round(s.height + s.top)),
        new Y(Math.round(s.left), Math.round(s.height + s.top))
      ];
  }
}, b4 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", yg = "Hidden Text", L4 = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), s = this._document.createElement("img"), a = this._document.createElement("span"), u = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", u.appendChild(r), s.src = b4, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", a.style.fontFamily = e, a.style.fontSize = t, a.style.margin = "0", a.style.padding = "0", a.appendChild(this._document.createTextNode(yg)), r.appendChild(a), r.appendChild(s);
      var f = s.offsetTop - a.offsetTop + 2;
      r.removeChild(a), r.appendChild(this._document.createTextNode(yg)), r.style.lineHeight = "normal", s.style.verticalAlign = "super";
      var l = s.offsetTop - r.offsetTop + 2;
      return u.removeChild(r), { baseline: f, middle: l };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), xd = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), K4 = 1e4, T4 = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s._activeEffects = [], s.canvas = r.canvas ? r.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), r.canvas || (s.canvas.width = Math.floor(r.width * r.scale), s.canvas.height = Math.floor(r.height * r.scale), s.canvas.style.width = r.width + "px", s.canvas.style.height = r.height + "px"), s.fontMetrics = new L4(document), s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-r.x, -r.y), s.ctx.textBaseline = "bottom", s._activeEffects = [], s.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), s;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(s) {
        return r.applyEffect(s);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), U4(t) && (this.ctx.globalAlpha = t.opacity), C4(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Ed(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return Qe(this, void 0, void 0, function() {
        var r;
        return fe(this, function(s) {
          switch (s.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              s.sent(), s.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNode = function(t) {
      return Qe(this, void 0, void 0, function() {
        return fe(this, function(r) {
          switch (r.label) {
            case 0:
              if (jA(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function(t, r, s) {
      var a = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + s);
      else {
        var u = $l(t.text);
        u.reduce(function(f, l) {
          return a.ctx.fillText(l, f, t.bounds.top + s), f + a.ctx.measureText(l).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(u) {
        return u === "normal" || u === "small-caps";
      }).join(""), s = R4(t.fontFamily).join(", "), a = ss(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, a, s].join(" "),
        s,
        a
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return Qe(this, void 0, void 0, function() {
        var s, a, u, f, l, B, g, Q, C = this;
        return fe(this, function(v) {
          return s = this.createFontStyle(r), a = s[0], u = s[1], f = s[2], this.ctx.font = a, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", l = this.fontMetrics.getMetrics(u, f), B = l.baseline, g = l.middle, Q = r.paintOrder, t.textBounds.forEach(function(H) {
            Q.forEach(function(K) {
              switch (K) {
                case 0:
                  C.ctx.fillStyle = ee(r.color), C.renderTextWithLetterSpacing(H, r.letterSpacing, B);
                  var V = r.textShadow;
                  V.length && H.text.trim().length && (V.slice(0).reverse().forEach(function(b) {
                    C.ctx.shadowColor = ee(b.color), C.ctx.shadowOffsetX = b.offsetX.number * C.options.scale, C.ctx.shadowOffsetY = b.offsetY.number * C.options.scale, C.ctx.shadowBlur = b.blur.number, C.renderTextWithLetterSpacing(H, r.letterSpacing, B);
                  }), C.ctx.shadowColor = "", C.ctx.shadowOffsetX = 0, C.ctx.shadowOffsetY = 0, C.ctx.shadowBlur = 0), r.textDecorationLine.length && (C.ctx.fillStyle = ee(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(b) {
                    switch (b) {
                      case 1:
                        C.ctx.fillRect(H.bounds.left, Math.round(H.bounds.top + B), H.bounds.width, 1);
                        break;
                      case 2:
                        C.ctx.fillRect(H.bounds.left, Math.round(H.bounds.top), H.bounds.width, 1);
                        break;
                      case 3:
                        C.ctx.fillRect(H.bounds.left, Math.ceil(H.bounds.top + g), H.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && H.text.trim().length && (C.ctx.strokeStyle = ee(r.webkitTextStrokeColor), C.ctx.lineWidth = r.webkitTextStrokeWidth, C.ctx.lineJoin = window.chrome ? "miter" : "round", C.ctx.strokeText(H.text, H.bounds.left, H.bounds.top + B)), C.ctx.strokeStyle = "", C.ctx.lineWidth = 0, C.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r, s) {
      if (s && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var a = da(t), u = wa(r);
        this.path(u), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(s, 0, 0, t.intrinsicWidth, t.intrinsicHeight, a.left, a.top, a.width, a.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return Qe(this, void 0, void 0, function() {
        var r, s, a, u, f, l, G, G, B, g, Q, C, x, v, H, N, K, V, b, G, $, x, N;
        return fe(this, function(D) {
          switch (D.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, s = t.curves, a = r.styles, u = 0, f = r.textNodes, D.label = 1;
            case 1:
              return u < f.length ? (l = f[u], [4, this.renderTextNode(l, a)]) : [3, 4];
            case 2:
              D.sent(), D.label = 3;
            case 3:
              return u++, [3, 1];
            case 4:
              if (!(r instanceof ad)) return [3, 8];
              D.label = 5;
            case 5:
              return D.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return G = D.sent(), this.renderReplacedElement(r, s, G), [3, 8];
            case 7:
              return D.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof ud && this.renderReplacedElement(r, s, r.canvas), !(r instanceof cd)) return [3, 12];
              D.label = 9;
            case 9:
              return D.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return G = D.sent(), this.renderReplacedElement(r, s, G), [3, 12];
            case 11:
              return D.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof hd && r.tree ? (B = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, B.render(r.tree)]) : [3, 14];
            case 13:
              g = D.sent(), r.width && r.height && this.ctx.drawImage(g, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), D.label = 14;
            case 14:
              if (r instanceof zl && (Q = Math.min(r.bounds.width, r.bounds.height), r.type === la ? r.checked && (this.ctx.save(), this.path([
                new Y(r.bounds.left + Q * 0.39363, r.bounds.top + Q * 0.79),
                new Y(r.bounds.left + Q * 0.16, r.bounds.top + Q * 0.5549),
                new Y(r.bounds.left + Q * 0.27347, r.bounds.top + Q * 0.44071),
                new Y(r.bounds.left + Q * 0.39694, r.bounds.top + Q * 0.5649),
                new Y(r.bounds.left + Q * 0.72983, r.bounds.top + Q * 0.23),
                new Y(r.bounds.left + Q * 0.84, r.bounds.top + Q * 0.34085),
                new Y(r.bounds.left + Q * 0.39363, r.bounds.top + Q * 0.79)
              ]), this.ctx.fillStyle = ee(Bg), this.ctx.fill(), this.ctx.restore()) : r.type === fa && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + Q / 2, r.bounds.top + Q / 2, Q / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = ee(Bg), this.ctx.fill(), this.ctx.restore())), S4(r) && r.value.length) {
                switch (C = this.createFontStyle(a), x = C[0], v = C[1], H = this.fontMetrics.getMetrics(x, v).baseline, this.ctx.font = x, this.ctx.fillStyle = ee(a.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = M4(r.styles.textAlign), N = da(r), K = 0, r.styles.textAlign) {
                  case 1:
                    K += N.width / 2;
                    break;
                  case 2:
                    K += N.width;
                    break;
                }
                V = N.add(K, 0, 0, -N.height / 2 + 1), this.ctx.save(), this.path([
                  new Y(N.left, N.top),
                  new Y(N.left + N.width, N.top),
                  new Y(N.left + N.width, N.top + N.height),
                  new Y(N.left, N.top + N.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ki(r.value, V), a.letterSpacing, H), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!jA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (b = r.styles.listStyleImage, b.type !== 0) return [3, 18];
              G = void 0, $ = b.url, D.label = 15;
            case 15:
              return D.trys.push([15, 17, , 18]), [4, this.context.cache.match($)];
            case 16:
              return G = D.sent(), this.ctx.drawImage(G, r.bounds.left - (G.width + 10), r.bounds.top), [3, 18];
            case 17:
              return D.sent(), this.context.logger.error("Error loading list-style-image " + $), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (x = this.createFontStyle(a)[0], this.ctx.font = x, this.ctx.fillStyle = ee(a.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", N = new zt(r.bounds.left, r.bounds.top + SA(r.styles.paddingTop, r.bounds.width), r.bounds.width, $h(a.lineHeight, a.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ki(t.listValue, N), a.letterSpacing, $h(a.lineHeight, a.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), D.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return Qe(this, void 0, void 0, function() {
        var r, s, b, a, u, b, f, l, b, B, g, b, Q, C, b, v, H, b, K, V, b;
        return fe(this, function(G) {
          switch (G.label) {
            case 0:
              if (jA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              G.sent(), r = 0, s = t.negativeZIndex, G.label = 2;
            case 2:
              return r < s.length ? (b = s[r], [4, this.renderStack(b)]) : [3, 5];
            case 3:
              G.sent(), G.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              G.sent(), a = 0, u = t.nonInlineLevel, G.label = 7;
            case 7:
              return a < u.length ? (b = u[a], [4, this.renderNode(b)]) : [3, 10];
            case 8:
              G.sent(), G.label = 9;
            case 9:
              return a++, [3, 7];
            case 10:
              f = 0, l = t.nonPositionedFloats, G.label = 11;
            case 11:
              return f < l.length ? (b = l[f], [4, this.renderStack(b)]) : [3, 14];
            case 12:
              G.sent(), G.label = 13;
            case 13:
              return f++, [3, 11];
            case 14:
              B = 0, g = t.nonPositionedInlineLevel, G.label = 15;
            case 15:
              return B < g.length ? (b = g[B], [4, this.renderStack(b)]) : [3, 18];
            case 16:
              G.sent(), G.label = 17;
            case 17:
              return B++, [3, 15];
            case 18:
              Q = 0, C = t.inlineLevel, G.label = 19;
            case 19:
              return Q < C.length ? (b = C[Q], [4, this.renderNode(b)]) : [3, 22];
            case 20:
              G.sent(), G.label = 21;
            case 21:
              return Q++, [3, 19];
            case 22:
              v = 0, H = t.zeroOrAutoZIndexOrTransformedOrOpacity, G.label = 23;
            case 23:
              return v < H.length ? (b = H[v], [4, this.renderStack(b)]) : [3, 26];
            case 24:
              G.sent(), G.label = 25;
            case 25:
              return v++, [3, 23];
            case 26:
              K = 0, V = t.positiveZIndex, G.label = 27;
            case 27:
              return K < V.length ? (b = V[K], [4, this.renderStack(b)]) : [3, 30];
            case 28:
              G.sent(), G.label = 29;
            case 29:
              return K++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(s, a) {
        var u = $e(s) ? s.start : s;
        a === 0 ? r.ctx.moveTo(u.x, u.y) : r.ctx.lineTo(u.x, u.y), $e(s) && r.ctx.bezierCurveTo(s.startControl.x, s.startControl.y, s.endControl.x, s.endControl.y, s.end.x, s.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r, s, a) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(s, a), this.ctx.fill(), this.ctx.translate(-s, -a);
    }, e.prototype.resizeImage = function(t, r, s) {
      var a;
      if (t.width === r && t.height === s)
        return t;
      var u = (a = this.canvas.ownerDocument) !== null && a !== void 0 ? a : document, f = u.createElement("canvas");
      f.width = Math.max(1, r), f.height = Math.max(1, s);
      var l = f.getContext("2d");
      return l.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, s), f;
    }, e.prototype.renderBackgroundImage = function(t) {
      return Qe(this, void 0, void 0, function() {
        var r, s, a, u, f, l;
        return fe(this, function(B) {
          switch (B.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, s = function(g) {
                var Q, C, v, gA, O, P, hA, y, j, H, gA, O, P, hA, y, K, V, b, G, $, x, N, D, W, j, z, gA, UA, RA, hA, y, J, O, P, AA, nA, k, aA, CA, FA, EA, vA;
                return fe(this, function(NA) {
                  switch (NA.label) {
                    case 0:
                      if (g.type !== 0) return [3, 5];
                      Q = void 0, C = g.url, NA.label = 1;
                    case 1:
                      return NA.trys.push([1, 3, , 4]), [4, a.context.cache.match(C)];
                    case 2:
                      return Q = NA.sent(), [3, 4];
                    case 3:
                      return NA.sent(), a.context.logger.error("Error loading background-image " + C), [3, 4];
                    case 4:
                      return Q && (v = $c(t, r, [
                        Q.width,
                        Q.height,
                        Q.width / Q.height
                      ]), gA = v[0], O = v[1], P = v[2], hA = v[3], y = v[4], j = a.ctx.createPattern(a.resizeImage(Q, hA, y), "repeat"), a.renderRepeat(gA, j, O, P)), [3, 6];
                    case 5:
                      C_(g) ? (H = $c(t, r, [null, null, null]), gA = H[0], O = H[1], P = H[2], hA = H[3], y = H[4], K = g_(g.angle, hA, y), V = K[0], b = K[1], G = K[2], $ = K[3], x = K[4], N = document.createElement("canvas"), N.width = hA, N.height = y, D = N.getContext("2d"), W = D.createLinearGradient(b, $, G, x), Yh(g.stops, V).forEach(function(PA) {
                        return W.addColorStop(PA.stop, ee(PA.color));
                      }), D.fillStyle = W, D.fillRect(0, 0, hA, y), hA > 0 && y > 0 && (j = a.ctx.createPattern(N, "repeat"), a.renderRepeat(gA, j, O, P))) : U_(g) && (z = $c(t, r, [
                        null,
                        null,
                        null
                      ]), gA = z[0], UA = z[1], RA = z[2], hA = z[3], y = z[4], J = g.position.length === 0 ? [Jl] : g.position, O = SA(J[0], hA), P = SA(J[J.length - 1], y), AA = w_(g, O, P, hA, y), nA = AA[0], k = AA[1], nA > 0 && k > 0 && (aA = a.ctx.createRadialGradient(UA + O, RA + P, 0, UA + O, RA + P, nA), Yh(g.stops, nA * 2).forEach(function(PA) {
                        return aA.addColorStop(PA.stop, ee(PA.color));
                      }), a.path(gA), a.ctx.fillStyle = aA, nA !== k ? (CA = t.bounds.left + 0.5 * t.bounds.width, FA = t.bounds.top + 0.5 * t.bounds.height, EA = k / nA, vA = 1 / EA, a.ctx.save(), a.ctx.translate(CA, FA), a.ctx.transform(1, 0, 0, EA, 0, 0), a.ctx.translate(-CA, -FA), a.ctx.fillRect(UA, vA * (RA - FA) + FA, hA, y * vA), a.ctx.restore()) : a.ctx.fill())), NA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, a = this, u = 0, f = t.styles.backgroundImage.slice(0).reverse(), B.label = 1;
            case 1:
              return u < f.length ? (l = f[u], [5, s(l)]) : [3, 4];
            case 2:
              B.sent(), B.label = 3;
            case 3:
              return u++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, r, s) {
      return Qe(this, void 0, void 0, function() {
        return fe(this, function(a) {
          return this.path(Eg(s, r)), this.ctx.fillStyle = ee(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, s, a) {
      return Qe(this, void 0, void 0, function() {
        var u, f;
        return fe(this, function(l) {
          switch (l.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, s, a)] : [3, 2];
            case 1:
              return l.sent(), [
                2
                /*return*/
              ];
            case 2:
              return u = m4(a, s), this.path(u), this.ctx.fillStyle = ee(t), this.ctx.fill(), f = E4(a, s), this.path(f), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return Qe(this, void 0, void 0, function() {
        var r, s, a, u, f, l, B, g, Q = this;
        return fe(this, function(C) {
          switch (C.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, s = !vn(r.backgroundColor) || r.backgroundImage.length, a = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], u = D4(br(r.backgroundClip, 0), t.curves), s || r.boxShadow.length ? (this.ctx.save(), this.path(u), this.ctx.clip(), vn(r.backgroundColor) || (this.ctx.fillStyle = ee(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              C.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(v) {
                Q.ctx.save();
                var H = ga(t.curves), K = v.inset ? 0 : K4, V = F4(H, -K + (v.inset ? 1 : -1) * v.spread.number, (v.inset ? 1 : -1) * v.spread.number, v.spread.number * (v.inset ? -2 : 2), v.spread.number * (v.inset ? -2 : 2));
                v.inset ? (Q.path(H), Q.ctx.clip(), Q.mask(V)) : (Q.mask(H), Q.ctx.clip(), Q.path(V)), Q.ctx.shadowOffsetX = v.offsetX.number + K, Q.ctx.shadowOffsetY = v.offsetY.number, Q.ctx.shadowColor = ee(v.color), Q.ctx.shadowBlur = v.blur.number, Q.ctx.fillStyle = v.inset ? ee(v.color) : "rgba(0,0,0,1)", Q.ctx.fill(), Q.ctx.restore();
              }), C.label = 2;
            case 2:
              f = 0, l = 0, B = a, C.label = 3;
            case 3:
              return l < B.length ? (g = B[l], g.style !== 0 && !vn(g.color) && g.width > 0 ? g.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                g.color,
                g.width,
                f,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return C.sent(), [3, 11];
            case 5:
              return g.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                g.color,
                g.width,
                f,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return C.sent(), [3, 11];
            case 7:
              return g.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(g.color, g.width, f, t.curves)];
            case 8:
              return C.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(g.color, f, t.curves)];
            case 10:
              C.sent(), C.label = 11;
            case 11:
              f++, C.label = 12;
            case 12:
              return l++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, r, s, a, u) {
      return Qe(this, void 0, void 0, function() {
        var f, l, B, g, Q, C, v, H, K, V, b, G, $, x, N, D, N, D;
        return fe(this, function(W) {
          return this.ctx.save(), f = y4(a, s), l = Eg(a, s), u === 2 && (this.path(l), this.ctx.clip()), $e(l[0]) ? (B = l[0].start.x, g = l[0].start.y) : (B = l[0].x, g = l[0].y), $e(l[1]) ? (Q = l[1].end.x, C = l[1].end.y) : (Q = l[1].x, C = l[1].y), s === 0 || s === 2 ? v = Math.abs(B - Q) : v = Math.abs(g - C), this.ctx.beginPath(), u === 3 ? this.formatPath(f) : this.formatPath(l.slice(0, 2)), H = r < 3 ? r * 3 : r * 2, K = r < 3 ? r * 2 : r, u === 3 && (H = r, K = r), V = !0, v <= H * 2 ? V = !1 : v <= H * 2 + K ? (b = v / (2 * H + K), H *= b, K *= b) : (G = Math.floor((v + K) / (H + K)), $ = (v - G * H) / (G - 1), x = (v - (G + 1) * H) / G, K = x <= 0 || Math.abs(K - $) < Math.abs(K - x) ? $ : x), V && (u === 3 ? this.ctx.setLineDash([0, H + K]) : this.ctx.setLineDash([H, K])), u === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = ee(t), this.ctx.stroke(), this.ctx.setLineDash([]), u === 2 && ($e(l[0]) && (N = l[3], D = l[0], this.ctx.beginPath(), this.formatPath([new Y(N.end.x, N.end.y), new Y(D.start.x, D.start.y)]), this.ctx.stroke()), $e(l[1]) && (N = l[1], D = l[2], this.ctx.beginPath(), this.formatPath([new Y(N.end.x, N.end.y), new Y(D.start.x, D.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return Qe(this, void 0, void 0, function() {
        var r;
        return fe(this, function(s) {
          switch (s.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = ee(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = v4(t), [4, this.renderStack(r)];
            case 1:
              return s.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(xd)
), S4 = function(A) {
  return A instanceof Bd || A instanceof fd ? !0 : A instanceof zl && A.type !== fa && A.type !== la;
}, D4 = function(A, e) {
  switch (A) {
    case 0:
      return ga(e);
    case 2:
      return d4(e);
    case 1:
    default:
      return wa(e);
  }
}, M4 = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, O4 = ["-apple-system", "system-ui"], R4 = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return O4.indexOf(e) === -1;
  }) : A;
}, N4 = (
  /** @class */
  function(A) {
    ft(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.canvas = r.canvas ? r.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), s.options = r, s.canvas.width = Math.floor(r.width * r.scale), s.canvas.height = Math.floor(r.height * r.scale), s.canvas.style.width = r.width + "px", s.canvas.style.height = r.height + "px", s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-r.x, -r.y), s.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), s;
    }
    return e.prototype.render = function(t) {
      return Qe(this, void 0, void 0, function() {
        var r, s;
        return fe(this, function(a) {
          switch (a.label) {
            case 0:
              return r = El(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, G4(r)];
            case 1:
              return s = a.sent(), this.options.backgroundColor && (this.ctx.fillStyle = ee(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(xd)
), G4 = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, V4 = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Uo([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Uo([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Uo([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Uo([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), P4 = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new V4({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new u4(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), k4 = function(A, e) {
  return e === void 0 && (e = {}), X4(A, e);
};
typeof window < "u" && md.setContext(window);
var X4 = function(A, e) {
  return Qe(void 0, void 0, void 0, function() {
    var t, r, s, a, u, f, l, B, g, Q, C, v, H, K, V, b, G, $, x, N, W, D, W, j, z, gA, UA, RA, hA, y, J, O, P, AA, nA, k, aA, CA, FA, EA;
    return fe(this, function(vA) {
      switch (vA.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return s = {
            allowTaint: (j = e.allowTaint) !== null && j !== void 0 ? j : !1,
            imageTimeout: (z = e.imageTimeout) !== null && z !== void 0 ? z : 15e3,
            proxy: e.proxy,
            useCORS: (gA = e.useCORS) !== null && gA !== void 0 ? gA : !1
          }, a = cl({ logging: (UA = e.logging) !== null && UA !== void 0 ? UA : !0, cache: e.cache }, s), u = {
            windowWidth: (RA = e.windowWidth) !== null && RA !== void 0 ? RA : r.innerWidth,
            windowHeight: (hA = e.windowHeight) !== null && hA !== void 0 ? hA : r.innerHeight,
            scrollX: (y = e.scrollX) !== null && y !== void 0 ? y : r.pageXOffset,
            scrollY: (J = e.scrollY) !== null && J !== void 0 ? J : r.pageYOffset
          }, f = new zt(u.scrollX, u.scrollY, u.windowWidth, u.windowHeight), l = new P4(a, f), B = (O = e.foreignObjectRendering) !== null && O !== void 0 ? O : !1, g = {
            allowTaint: (P = e.allowTaint) !== null && P !== void 0 ? P : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: B,
            copyStyles: B
          }, l.logger.debug("Starting document clone with size " + f.width + "x" + f.height + " scrolled to " + -f.left + "," + -f.top), Q = new Fg(l, A, g), C = Q.clonedReferenceElement, C ? [4, Q.toIFrame(t, f)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return v = vA.sent(), H = ql(C) || Wb(C) ? F1(C.ownerDocument) : xa(l, C), K = H.width, V = H.height, b = H.left, G = H.top, $ = W4(l, C, e.backgroundColor), x = {
            canvas: e.canvas,
            backgroundColor: $,
            scale: (nA = (AA = e.scale) !== null && AA !== void 0 ? AA : r.devicePixelRatio) !== null && nA !== void 0 ? nA : 1,
            x: ((k = e.x) !== null && k !== void 0 ? k : 0) + b,
            y: ((aA = e.y) !== null && aA !== void 0 ? aA : 0) + G,
            width: (CA = e.width) !== null && CA !== void 0 ? CA : Math.ceil(K),
            height: (FA = e.height) !== null && FA !== void 0 ? FA : Math.ceil(V)
          }, B ? (l.logger.debug("Document cloned, using foreign object rendering"), W = new N4(l, x), [4, W.render(C)]) : [3, 3];
        case 2:
          return N = vA.sent(), [3, 5];
        case 3:
          return l.logger.debug("Document cloned, element located at " + b + "," + G + " with size " + K + "x" + V + " using computed rendering"), l.logger.debug("Starting DOM parsing"), D = wd(l, C), $ === D.styles.backgroundColor && (D.styles.backgroundColor = Zt.TRANSPARENT), l.logger.debug("Starting renderer for element at " + x.x + "," + x.y + " with size " + x.width + "x" + x.height), W = new T4(l, x), [4, W.render(D)];
        case 4:
          N = vA.sent(), vA.label = 5;
        case 5:
          return (!((EA = e.removeContainer) !== null && EA !== void 0) || EA) && (Fg.destroy(v) || l.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), l.logger.debug("Finished rendering"), [2, N];
      }
    });
  });
}, W4 = function(A, e, t) {
  var r = e.ownerDocument, s = r.documentElement ? Vi(A, getComputedStyle(r.documentElement).backgroundColor) : Zt.TRANSPARENT, a = r.body ? Vi(A, getComputedStyle(r.body).backgroundColor) : Zt.TRANSPARENT, u = typeof t == "string" ? Vi(A, t) : t === null ? Zt.TRANSPARENT : 4294967295;
  return e === r.documentElement ? vn(s) ? vn(a) ? u : a : s : u;
};
const mn = bA(), ct = bA(), Mr = bA(), zc = bA(), Yn = bA(), ut = bA();
function J4() {
  const A = this.querySelector(`g.${oA["add-btn"]}`);
  A && (A.style.opacity = "1");
}
function Y4() {
  const A = this.querySelector(`g.${oA["add-btn"]}`);
  A && (A.style.opacity = "0");
}
const Z4 = (A) => {
  const { g: e } = pe;
  e && (Fa.value = A.transform, e.attr("transform", A.transform.toString()));
}, bd = (A, e) => {
  A.stopPropagation(), e0(e);
};
function jl(A, e) {
  var s, a;
  const t = (s = this.parentNode) == null ? void 0 : s.parentNode, { foreign: r } = pe;
  if (Jd && r && ut.value) {
    t.classList.add(oA.edited), TA.emit("edit-flag", !1), r.attr("x", e.x - 2 - (e.left ? e.width : 0)).attr("y", e.y - DA.data.y - 2).attr("data-id", e.id).attr("data-name", e.name).style("display", "");
    const u = ut.value;
    u.textContent = e.name, u.focus(), (a = getSelection()) == null || a.selectAllChildren(u);
    const f = t.querySelector(`:scope > .${oA.content}`);
    f && n0(f);
  }
}
const $4 = () => {
  var A;
  if ((A = document.getElementsByClassName(oA.edited)[0]) == null || A.classList.remove(oA.edited, oA.selected), Yn.value && ut.value) {
    Yn.value.style.display = "none";
    const e = Yn.value.getAttribute("data-id"), t = Yn.value.getAttribute("data-name"), r = ut.value.textContent;
    e && r !== null && r !== t && fK(e, r);
  }
}, Hg = (A) => {
  if (A.preventDefault(), !mn.value)
    return;
  const e = QL(mn.value, A);
  Dd.value = e;
  const r = A.composedPath().find((s) => {
    var a;
    return (a = s.classList) == null ? void 0 : a.contains("node");
  });
  if (r) {
    const { classList: s } = r, a = s.contains(oA.root), u = s.contains(oA.collapse);
    s.contains(oA.selected) || e0(r), Rd.value.disabled = a, Pd.value.disabled = a, kd.value.disabled = a, Gd.value.disabled = a, Vd.value.disabled = a, Nd.value.disabled = a, Od.value.disabled = !u, Md.value.disabled = u || s.contains("leaf"), Ll.value = !1;
  } else
    Ll.value = !0;
  TA.emit("showContextmenu", !0);
}, z4 = (A) => {
  var e, t;
  switch (A) {
    case "zoomfit":
      Kl();
      break;
    case "zoomin":
      xg();
      break;
    case "zoomout":
      xg();
      break;
    case "add":
      Ld(new MouseEvent("click"), st());
      break;
    case "delete":
      kg(st().id);
      break;
    case "delete-one":
      hK(st().id);
      break;
    case "collapse":
      gK(st().id);
      break;
    case "expand":
      h0(st().id);
      break;
    case "add-sibling":
      {
        const r = st(), s = Xg(r.id, "");
        s && qo(s);
      }
      break;
    case "add-sibling-before":
      {
        const r = st(), s = Xg(r.id, "", !0);
        s && qo(s);
      }
      break;
    case "add-parent":
      {
        const r = st(), s = wK(r.id, "");
        s && qo(s);
      }
      break;
    case "cut":
      {
        const { id: r } = st(), s = (e = DA.find(r)) == null ? void 0 : e.rawData;
        s && navigator.clipboard.writeText(JSON.stringify(s)), kg(r);
      }
      break;
    case "copy":
      {
        const r = st(), s = (t = DA.find(r.id)) == null ? void 0 : t.rawData;
        s && navigator.clipboard.writeText(JSON.stringify(s));
      }
      break;
    case "paste":
      {
        const r = st();
        navigator.clipboard.readText().then((s) => {
          const a = yL(s) || { name: s };
          B0(r.id, a);
        });
      }
      break;
  }
}, Ld = (A, e) => {
  const t = B0(e.id, "");
  t && qo(t, A);
};
function qo(A, e = new MouseEvent("click")) {
  const { g: t } = pe;
  if (!t)
    return;
  const s = t.selectAll(`g[data-id='${Na(A)}'] > g.${oA.content} > g.${oA.text}`).node();
  s && (TA.emit("edit-flag", !0), jl.call(s, e, A));
}
const q4 = (A, e) => {
  h0(e.id);
};
function j4(A, e) {
  var l;
  const t = (l = this.parentNode) == null ? void 0 : l.parentNode;
  ct.value && ct.value.classList.add(oA.dragging);
  const { g: r } = pe;
  if (!r)
    return;
  t0(t, e, [A.x - e.x, A.y - e.y]);
  const s = mt(A, Mr.value);
  s[1] += DA.data.y;
  const a = r.selectAll("g.node").filter((B) => {
    if (B !== e && B !== e.parent && !B.id.startsWith(e.id)) {
      let g = je, Q = B.width + je;
      B.left && B.depth !== 0 && ([g, Q] = [Q, g]);
      const C = {
        x0: B.x - g,
        x1: B.x + Q,
        y0: B.y - je,
        y1: B.y + B.height + je
      };
      return s[0] > C.x0 && s[1] > C.y0 && s[0] < C.x1 && s[1] < C.y1;
    }
    return !1;
  }), u = Array.from(document.getElementsByClassName(oA.outline)), f = a.node();
  u.forEach((B) => {
    B !== f && B.classList.remove(oA.outline);
  }), f == null || f.classList.add(oA.outline);
}
function AL(A, e) {
  var C;
  const t = (C = this.parentNode) == null ? void 0 : C.parentNode;
  ct.value && ct.value.classList.remove(oA.dragging);
  const r = document.getElementsByClassName(oA.outline)[0];
  if (r) {
    r.classList.remove(oA.outline);
    const v = r.getAttribute("data-id");
    if (v)
      e.px = 0, e.py = 0, BK(v, e.id);
    else
      throw new Error("outline data-id null");
    return;
  }
  const s = e.x - DA.getRootWidth() / 2, a = e.depth === 1 && s * (s + e.px) < 0, u = a ? (v) => v.left !== e.left : (v) => v.left === e.left, f = t.parentNode;
  let l = a ? { y: 1 / 0, id: e.id } : e, B = a ? { y: -1 / 0, id: e.id } : e;
  const g = ie(f).selectAll(`g.${tf(e).join(".")}`).filter((v) => v !== e && u(v)), Q = e.y + e.py;
  g.each((v) => {
    (a || v.y > e.y) && v.y < Q && v.y > B.y && (B = v), (a || v.y < e.y) && v.y > Q && v.y < l.y && (l = v);
  }), l.id !== e.id ? (e.px = 0, e.py = 0, Pg(e.id, l.id)) : B.id !== e.id ? (e.px = 0, e.py = 0, Pg(e.id, B.id, 1)) : a ? (e.px = 0, e.py = 0, dK(e.id)) : t0(t, e, [0, 0], 500);
}
const Ig = (A) => {
  const { svg: e } = pe;
  e && (A ? (os(e), e.on("dblclick.zoom", null)) : e.on(".zoom", null));
}, eL = (A) => {
  const { g: e } = pe;
  if (!ut.value || !e)
    return;
  const t = e.selectAll(`g.${oA.text}`);
  A ? t.on("click", jl) : t.on("click", null);
}, tL = (A) => {
  const { g: e } = pe;
  if (!e)
    return;
  const t = e.selectAll(`g.${oA.text}`);
  A ? t.on("mousedown", bd) : t.on("mousedown", null);
}, _g = (A) => {
  mn.value && (A ? mn.value.addEventListener("contextmenu", Hg) : mn.value.removeEventListener("contextmenu", Hg));
}, nL = (A) => {
  const { g: e } = pe;
  if (!e)
    return;
  const t = e.selectAll(`g.node:not(.${oA.root}) > g > g.${oA.text}`);
  A ? Zd(t) : t.on(".drag", null);
};
let Kd, Af, Td, Sd;
TA.on("selection-svg", (A) => Kd = A);
TA.on("selection-g", (A) => Af = A);
TA.on("selection-asstSvg", (A) => Td = A);
TA.on("selection-foreign", (A) => Sd = A);
const Ll = bA(!0), Dd = bA({ left: 0, top: 0 }), Md = bA({ name: "折叠节点", disabled: !0 }), Od = bA({ name: "展开节点", disabled: !0 }), Rd = bA({ name: "删除节点", disabled: !1 }), rL = bA({ name: "新建子节点", disabled: !1 }), Nd = bA({ name: "新建父节点", disabled: !1 }), Gd = bA({ name: "新建兄弟节点", disabled: !1 }), Vd = bA({ name: "在此之前新建兄弟节点", disabled: !0 }), Pd = bA({ name: "剪切", disabled: !1 }), iL = bA({ name: "拷贝", disabled: !1 }), sL = bA({ name: "粘贴", disabled: !1 }), kd = bA({ name: "删除单个节点", disabled: !1 }), oL = Dl(() => [
  [rL.value, Nd.value, Gd.value, Vd.value],
  [Pd.value, iL.value, sL.value, Rd.value, kd.value],
  [{ name: "全选", disabled: !0 }],
  [Md.value, Od.value]
].filter((A, e) => e === 0 || e === 1 ? Zn.value.edit : !0)), aL = Dl(() => [
  [
    {
      name: "放大",
      disabled: Fa.value.k >= Gr[1]
    },
    {
      name: "缩小",
      disabled: Fa.value.k <= Gr[0]
    },
    { name: "缩放至合适大小", disabled: !1 }
  ],
  [
    { name: "全选", disabled: !0 }
  ]
]), uL = Dl(() => Ll.value ? aL.value : oL.value), Xd = Sm().source((A) => A.source).target((A) => A.target), cL = _m().curve(Dm), lL = ({ source: A, target: e }) => cL([A, e]);
let Qa = !1, Wd = Xd;
const pa = bA(!1);
TA.on("sharp-corner", (A) => {
  Qa !== A && (pa.value = !0), Qa = !!A, Wd = A ? lL : Xd;
});
let Ca = 4;
TA.on("branch", (A) => Ca = A || Ca);
let Gr = [0.1, 8];
TA.on("scale-extent", (A) => Gr = A || Gr);
let Jd = !1;
TA.on("edit-flag", (A) => Jd = !!A);
const fL = 6, Kr = 10;
let As = 18, Ua = 84, je = Math.min(As / 2 - 1, Kr);
TA.on("gap", (A) => {
  A && (Ua = A.xGap, As = A.yGap, je = Math.min(As / 2 - 1, Kr), je = Math.min(Ua / 2 - 1, je));
});
const BL = typeof ResizeObserver < "u" ? new ResizeObserver((A) => {
  const { foreign: e } = pe;
  if (!e)
    return;
  const t = A[0], r = t.target, { width: s, height: a } = t.contentRect, u = parseInt(getComputedStyle(r).paddingLeft || "0", 10), f = parseInt(getComputedStyle(r.parentNode).borderTopWidth || "0", 10), l = (u + f) * 2;
  e.attr("width", s + l).attr("height", a + l), e.style("display") !== "none" && n0(r);
}) : {}, Vr = { side: 12, padding: 2, margin: 8 }, Yd = Vr.side + Vr.padding * 2, kn = { width: 16, height: 4, radius: 2 }, Fa = bA(_a), os = Q1().on("zoom", Z4).scaleExtent(Gr), Zd = Ey().container(pL).on("drag", j4).on("end", AL), es = bA(!1);
let $d;
TA.on("mindmap-context", (A) => A ? $d = A : null);
const Zn = bA({
  drag: !1,
  edit: !1
});
var va = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
va.exports;
(function(A, e) {
  (function() {
    var t, r = "4.17.21", s = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", B = 500, g = "__lodash_placeholder__", Q = 1, C = 2, v = 4, H = 1, K = 2, V = 1, b = 2, G = 4, $ = 8, x = 16, N = 32, D = 64, W = 128, j = 256, z = 512, gA = 30, UA = "...", RA = 800, hA = 16, y = 1, J = 2, O = 3, P = 1 / 0, AA = 9007199254740991, nA = 17976931348623157e292, k = NaN, aA = 4294967295, CA = aA - 1, FA = aA >>> 1, EA = [
      ["ary", W],
      ["bind", V],
      ["bindKey", b],
      ["curry", $],
      ["curryRight", x],
      ["flip", z],
      ["partial", N],
      ["partialRight", D],
      ["rearg", j]
    ], vA = "[object Arguments]", NA = "[object Array]", PA = "[object AsyncFunction]", te = "[object Boolean]", At = "[object Date]", Ga = "[object DOMException]", yn = "[object Error]", er = "[object Function]", as = "[object GeneratorFunction]", Ce = "[object Map]", qt = "[object Number]", Xr = "[object Null]", Ne = "[object Object]", us = "[object Promise]", Va = "[object Proxy]", Bt = "[object RegExp]", he = "[object Set]", jt = "[object String]", Hn = "[object Symbol]", ht = "[object Undefined]", gt = "[object WeakMap]", Pa = "[object WeakSet]", An = "[object ArrayBuffer]", xt = "[object DataView]", tr = "[object Float32Array]", Wr = "[object Float64Array]", Jr = "[object Int8Array]", Yr = "[object Int16Array]", Zr = "[object Int32Array]", nr = "[object Uint8Array]", $r = "[object Uint8ClampedArray]", zr = "[object Uint16Array]", In = "[object Uint32Array]", _n = /\b__p \+= '';/g, qr = /\b(__p \+=) '' \+/g, jr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, rr = /&(?:amp|lt|gt|quot|#39);/g, en = /[&<>"']/g, ka = RegExp(rr.source), Xa = RegExp(en.source), Wa = /<%-([\s\S]+?)%>/g, Ja = /<%([\s\S]+?)%>/g, cs = /<%=([\s\S]+?)%>/g, ls = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fs = /^\w*$/, bt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ai = /[\\^$.*+?()[\]{}|]/g, Ya = RegExp(Ai.source), ei = /^\s+/, Za = /\s/, $a = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, et = /\{\n\/\* \[wrapped with (.+)\] \*/, za = /,? & /, qa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ja = /[()=,{}\[\]\/\s]/, Au = /\\(\\)?/g, eu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Lt = /\w*$/, tu = /^[-+]0x[0-9a-f]+$/i, nu = /^0b[01]+$/i, ru = /^\[object .+?Constructor\]$/, iu = /^0o[0-7]+$/i, su = /^(?:0|[1-9]\d*)$/, tn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ir = /($^)/, ou = /['\n\r\u2028\u2029\\]/g, sr = "\\ud800-\\udfff", au = "\\u0300-\\u036f", uu = "\\ufe20-\\ufe2f", cu = "\\u20d0-\\u20ff", ti = au + uu + cu, xn = "\\u2700-\\u27bf", Bs = "a-z\\xdf-\\xf6\\xf8-\\xff", ni = "\\xac\\xb1\\xd7\\xf7", lu = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fu = "\\u2000-\\u206f", Bu = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", hs = "A-Z\\xc0-\\xd6\\xd8-\\xde", gs = "\\ufe0e\\ufe0f", ws = ni + lu + fu + Bu, bn = "['’]", hu = "[" + sr + "]", ds = "[" + ws + "]", or = "[" + ti + "]", Qs = "\\d+", gu = "[" + xn + "]", ps = "[" + Bs + "]", Cs = "[^" + sr + ws + Qs + xn + Bs + hs + "]", ar = "\\ud83c[\\udffb-\\udfff]", wu = "(?:" + or + "|" + ar + ")", Us = "[^" + sr + "]", nn = "(?:\\ud83c[\\udde6-\\uddff]){2}", wt = "[\\ud800-\\udbff][\\udc00-\\udfff]", Kt = "[" + hs + "]", dt = "\\u200d", Fs = "(?:" + ps + "|" + Cs + ")", du = "(?:" + Kt + "|" + Cs + ")", vs = "(?:" + bn + "(?:d|ll|m|re|s|t|ve))?", ms = "(?:" + bn + "(?:D|LL|M|RE|S|T|VE))?", Es = wu + "?", ys = "[" + gs + "]?", Hs = "(?:" + dt + "(?:" + [Us, nn, wt].join("|") + ")" + ys + Es + ")*", Tt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Qu = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ri = ys + Es + Hs, pu = "(?:" + [gu, nn, wt].join("|") + ")" + ri, ii = "(?:" + [Us + or + "?", or, nn, wt, hu].join("|") + ")", Is = RegExp(bn, "g"), Cu = RegExp(or, "g"), si = RegExp(ar + "(?=" + ar + ")|" + ii + ri, "g"), _s = RegExp([
      Kt + "?" + ps + "+" + vs + "(?=" + [ds, Kt, "$"].join("|") + ")",
      du + "+" + ms + "(?=" + [ds, Kt + Fs, "$"].join("|") + ")",
      Kt + "?" + Fs + "+" + vs,
      Kt + "+" + ms,
      Qu,
      Tt,
      Qs,
      pu
    ].join("|"), "g"), Uu = RegExp("[" + dt + sr + ti + gs + "]"), ur = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fu = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], oi = -1, LA = {};
    LA[tr] = LA[Wr] = LA[Jr] = LA[Yr] = LA[Zr] = LA[nr] = LA[$r] = LA[zr] = LA[In] = !0, LA[vA] = LA[NA] = LA[An] = LA[te] = LA[xt] = LA[At] = LA[yn] = LA[er] = LA[Ce] = LA[qt] = LA[Ne] = LA[Bt] = LA[he] = LA[jt] = LA[gt] = !1;
    var _A = {};
    _A[vA] = _A[NA] = _A[An] = _A[xt] = _A[te] = _A[At] = _A[tr] = _A[Wr] = _A[Jr] = _A[Yr] = _A[Zr] = _A[Ce] = _A[qt] = _A[Ne] = _A[Bt] = _A[he] = _A[jt] = _A[Hn] = _A[nr] = _A[$r] = _A[zr] = _A[In] = !0, _A[yn] = _A[er] = _A[gt] = !1;
    var p = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, I = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, M = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, eA = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, $A = parseFloat, oe = parseInt, Ge = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, ae = typeof self == "object" && self && self.Object === Object && self, YA = Ge || ae || Function("return this")(), Qt = e && !e.nodeType && e, pt = Qt && !0 && A && !A.nodeType && A, ai = pt && pt.exports === Qt, cr = ai && Ge.process, ue = function() {
      try {
        var m = pt && pt.require && pt.require("util").types;
        return m || cr && cr.binding && cr.binding("util");
      } catch {
      }
    }(), Ln = ue && ue.isArrayBuffer, rf = ue && ue.isDate, sf = ue && ue.isMap, of = ue && ue.isRegExp, af = ue && ue.isSet, uf = ue && ue.isTypedArray;
    function xe(m, L, _) {
      switch (_.length) {
        case 0:
          return m.call(L);
        case 1:
          return m.call(L, _[0]);
        case 2:
          return m.call(L, _[0], _[1]);
        case 3:
          return m.call(L, _[0], _[1], _[2]);
      }
      return m.apply(L, _);
    }
    function w0(m, L, _, q) {
      for (var uA = -1, mA = m == null ? 0 : m.length; ++uA < mA; ) {
        var zA = m[uA];
        L(q, zA, _(zA), m);
      }
      return q;
    }
    function Ve(m, L) {
      for (var _ = -1, q = m == null ? 0 : m.length; ++_ < q && L(m[_], _, m) !== !1; )
        ;
      return m;
    }
    function d0(m, L) {
      for (var _ = m == null ? 0 : m.length; _-- && L(m[_], _, m) !== !1; )
        ;
      return m;
    }
    function cf(m, L) {
      for (var _ = -1, q = m == null ? 0 : m.length; ++_ < q; )
        if (!L(m[_], _, m))
          return !1;
      return !0;
    }
    function rn(m, L) {
      for (var _ = -1, q = m == null ? 0 : m.length, uA = 0, mA = []; ++_ < q; ) {
        var zA = m[_];
        L(zA, _, m) && (mA[uA++] = zA);
      }
      return mA;
    }
    function xs(m, L) {
      var _ = m == null ? 0 : m.length;
      return !!_ && lr(m, L, 0) > -1;
    }
    function vu(m, L, _) {
      for (var q = -1, uA = m == null ? 0 : m.length; ++q < uA; )
        if (_(L, m[q]))
          return !0;
      return !1;
    }
    function MA(m, L) {
      for (var _ = -1, q = m == null ? 0 : m.length, uA = Array(q); ++_ < q; )
        uA[_] = L(m[_], _, m);
      return uA;
    }
    function sn(m, L) {
      for (var _ = -1, q = L.length, uA = m.length; ++_ < q; )
        m[uA + _] = L[_];
      return m;
    }
    function mu(m, L, _, q) {
      var uA = -1, mA = m == null ? 0 : m.length;
      for (q && mA && (_ = m[++uA]); ++uA < mA; )
        _ = L(_, m[uA], uA, m);
      return _;
    }
    function Q0(m, L, _, q) {
      var uA = m == null ? 0 : m.length;
      for (q && uA && (_ = m[--uA]); uA--; )
        _ = L(_, m[uA], uA, m);
      return _;
    }
    function Eu(m, L) {
      for (var _ = -1, q = m == null ? 0 : m.length; ++_ < q; )
        if (L(m[_], _, m))
          return !0;
      return !1;
    }
    var p0 = yu("length");
    function C0(m) {
      return m.split("");
    }
    function U0(m) {
      return m.match(qa) || [];
    }
    function lf(m, L, _) {
      var q;
      return _(m, function(uA, mA, zA) {
        if (L(uA, mA, zA))
          return q = mA, !1;
      }), q;
    }
    function bs(m, L, _, q) {
      for (var uA = m.length, mA = _ + (q ? 1 : -1); q ? mA-- : ++mA < uA; )
        if (L(m[mA], mA, m))
          return mA;
      return -1;
    }
    function lr(m, L, _) {
      return L === L ? K0(m, L, _) : bs(m, ff, _);
    }
    function F0(m, L, _, q) {
      for (var uA = _ - 1, mA = m.length; ++uA < mA; )
        if (q(m[uA], L))
          return uA;
      return -1;
    }
    function ff(m) {
      return m !== m;
    }
    function Bf(m, L) {
      var _ = m == null ? 0 : m.length;
      return _ ? Iu(m, L) / _ : k;
    }
    function yu(m) {
      return function(L) {
        return L == null ? t : L[m];
      };
    }
    function Hu(m) {
      return function(L) {
        return m == null ? t : m[L];
      };
    }
    function hf(m, L, _, q, uA) {
      return uA(m, function(mA, zA, KA) {
        _ = q ? (q = !1, mA) : L(_, mA, zA, KA);
      }), _;
    }
    function v0(m, L) {
      var _ = m.length;
      for (m.sort(L); _--; )
        m[_] = m[_].value;
      return m;
    }
    function Iu(m, L) {
      for (var _, q = -1, uA = m.length; ++q < uA; ) {
        var mA = L(m[q]);
        mA !== t && (_ = _ === t ? mA : _ + mA);
      }
      return _;
    }
    function _u(m, L) {
      for (var _ = -1, q = Array(m); ++_ < m; )
        q[_] = L(_);
      return q;
    }
    function m0(m, L) {
      return MA(L, function(_) {
        return [_, m[_]];
      });
    }
    function gf(m) {
      return m && m.slice(0, pf(m) + 1).replace(ei, "");
    }
    function be(m) {
      return function(L) {
        return m(L);
      };
    }
    function xu(m, L) {
      return MA(L, function(_) {
        return m[_];
      });
    }
    function ui(m, L) {
      return m.has(L);
    }
    function wf(m, L) {
      for (var _ = -1, q = m.length; ++_ < q && lr(L, m[_], 0) > -1; )
        ;
      return _;
    }
    function df(m, L) {
      for (var _ = m.length; _-- && lr(L, m[_], 0) > -1; )
        ;
      return _;
    }
    function E0(m, L) {
      for (var _ = m.length, q = 0; _--; )
        m[_] === L && ++q;
      return q;
    }
    var y0 = Hu(p), H0 = Hu(I);
    function I0(m) {
      return "\\" + eA[m];
    }
    function _0(m, L) {
      return m == null ? t : m[L];
    }
    function fr(m) {
      return Uu.test(m);
    }
    function x0(m) {
      return ur.test(m);
    }
    function b0(m) {
      for (var L, _ = []; !(L = m.next()).done; )
        _.push(L.value);
      return _;
    }
    function bu(m) {
      var L = -1, _ = Array(m.size);
      return m.forEach(function(q, uA) {
        _[++L] = [uA, q];
      }), _;
    }
    function Qf(m, L) {
      return function(_) {
        return m(L(_));
      };
    }
    function on(m, L) {
      for (var _ = -1, q = m.length, uA = 0, mA = []; ++_ < q; ) {
        var zA = m[_];
        (zA === L || zA === g) && (m[_] = g, mA[uA++] = _);
      }
      return mA;
    }
    function Ls(m) {
      var L = -1, _ = Array(m.size);
      return m.forEach(function(q) {
        _[++L] = q;
      }), _;
    }
    function L0(m) {
      var L = -1, _ = Array(m.size);
      return m.forEach(function(q) {
        _[++L] = [q, q];
      }), _;
    }
    function K0(m, L, _) {
      for (var q = _ - 1, uA = m.length; ++q < uA; )
        if (m[q] === L)
          return q;
      return -1;
    }
    function T0(m, L, _) {
      for (var q = _ + 1; q--; )
        if (m[q] === L)
          return q;
      return q;
    }
    function Br(m) {
      return fr(m) ? D0(m) : p0(m);
    }
    function tt(m) {
      return fr(m) ? M0(m) : C0(m);
    }
    function pf(m) {
      for (var L = m.length; L-- && Za.test(m.charAt(L)); )
        ;
      return L;
    }
    var S0 = Hu(M);
    function D0(m) {
      for (var L = si.lastIndex = 0; si.test(m); )
        ++L;
      return L;
    }
    function M0(m) {
      return m.match(si) || [];
    }
    function O0(m) {
      return m.match(_s) || [];
    }
    var R0 = function m(L) {
      L = L == null ? YA : hr.defaults(YA.Object(), L, hr.pick(YA, Fu));
      var _ = L.Array, q = L.Date, uA = L.Error, mA = L.Function, zA = L.Math, KA = L.Object, Lu = L.RegExp, N0 = L.String, Pe = L.TypeError, Ks = _.prototype, G0 = mA.prototype, gr = KA.prototype, Ts = L["__core-js_shared__"], Ss = G0.toString, IA = gr.hasOwnProperty, V0 = 0, Cf = function() {
        var n = /[^.]+$/.exec(Ts && Ts.keys && Ts.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Ds = gr.toString, P0 = Ss.call(KA), k0 = YA._, X0 = Lu(
        "^" + Ss.call(IA).replace(Ai, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ms = ai ? L.Buffer : t, an = L.Symbol, Os = L.Uint8Array, Uf = Ms ? Ms.allocUnsafe : t, Rs = Qf(KA.getPrototypeOf, KA), Ff = KA.create, vf = gr.propertyIsEnumerable, Ns = Ks.splice, mf = an ? an.isConcatSpreadable : t, ci = an ? an.iterator : t, Kn = an ? an.toStringTag : t, Gs = function() {
        try {
          var n = On(KA, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), W0 = L.clearTimeout !== YA.clearTimeout && L.clearTimeout, J0 = q && q.now !== YA.Date.now && q.now, Y0 = L.setTimeout !== YA.setTimeout && L.setTimeout, Vs = zA.ceil, Ps = zA.floor, Ku = KA.getOwnPropertySymbols, Z0 = Ms ? Ms.isBuffer : t, Ef = L.isFinite, $0 = Ks.join, z0 = Qf(KA.keys, KA), qA = zA.max, ce = zA.min, q0 = q.now, j0 = L.parseInt, yf = zA.random, AQ = Ks.reverse, Tu = On(L, "DataView"), li = On(L, "Map"), Su = On(L, "Promise"), wr = On(L, "Set"), fi = On(L, "WeakMap"), Bi = On(KA, "create"), ks = fi && new fi(), dr = {}, eQ = Rn(Tu), tQ = Rn(li), nQ = Rn(Su), rQ = Rn(wr), iQ = Rn(fi), Xs = an ? an.prototype : t, hi = Xs ? Xs.valueOf : t, Hf = Xs ? Xs.toString : t;
      function w(n) {
        if (VA(n) && !cA(n) && !(n instanceof dA)) {
          if (n instanceof ke)
            return n;
          if (IA.call(n, "__wrapped__"))
            return IB(n);
        }
        return new ke(n);
      }
      var Qr = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!GA(i))
            return {};
          if (Ff)
            return Ff(i);
          n.prototype = i;
          var o = new n();
          return n.prototype = t, o;
        };
      }();
      function Ws() {
      }
      function ke(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = t;
      }
      w.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Wa,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ja,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: cs,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: w
        }
      }, w.prototype = Ws.prototype, w.prototype.constructor = w, ke.prototype = Qr(Ws.prototype), ke.prototype.constructor = ke;
      function dA(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = aA, this.__views__ = [];
      }
      function sQ() {
        var n = new dA(this.__wrapped__);
        return n.__actions__ = Ue(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Ue(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Ue(this.__views__), n;
      }
      function oQ() {
        if (this.__filtered__) {
          var n = new dA(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function aQ() {
        var n = this.__wrapped__.value(), i = this.__dir__, o = cA(n), c = i < 0, h = o ? n.length : 0, d = Cp(0, h, this.__views__), U = d.start, F = d.end, E = F - U, T = c ? F : U - 1, S = this.__iteratees__, R = S.length, X = 0, tA = ce(E, this.__takeCount__);
        if (!o || !c && h == E && tA == E)
          return zf(n, this.__actions__);
        var iA = [];
        A:
          for (; E-- && X < tA; ) {
            T += i;
            for (var fA = -1, sA = n[T]; ++fA < R; ) {
              var wA = S[fA], pA = wA.iteratee, Te = wA.type, de = pA(sA);
              if (Te == J)
                sA = de;
              else if (!de) {
                if (Te == y)
                  continue A;
                break A;
              }
            }
            iA[X++] = sA;
          }
        return iA;
      }
      dA.prototype = Qr(Ws.prototype), dA.prototype.constructor = dA;
      function Tn(n) {
        var i = -1, o = n == null ? 0 : n.length;
        for (this.clear(); ++i < o; ) {
          var c = n[i];
          this.set(c[0], c[1]);
        }
      }
      function uQ() {
        this.__data__ = Bi ? Bi(null) : {}, this.size = 0;
      }
      function cQ(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function lQ(n) {
        var i = this.__data__;
        if (Bi) {
          var o = i[n];
          return o === l ? t : o;
        }
        return IA.call(i, n) ? i[n] : t;
      }
      function fQ(n) {
        var i = this.__data__;
        return Bi ? i[n] !== t : IA.call(i, n);
      }
      function BQ(n, i) {
        var o = this.__data__;
        return this.size += this.has(n) ? 0 : 1, o[n] = Bi && i === t ? l : i, this;
      }
      Tn.prototype.clear = uQ, Tn.prototype.delete = cQ, Tn.prototype.get = lQ, Tn.prototype.has = fQ, Tn.prototype.set = BQ;
      function St(n) {
        var i = -1, o = n == null ? 0 : n.length;
        for (this.clear(); ++i < o; ) {
          var c = n[i];
          this.set(c[0], c[1]);
        }
      }
      function hQ() {
        this.__data__ = [], this.size = 0;
      }
      function gQ(n) {
        var i = this.__data__, o = Js(i, n);
        if (o < 0)
          return !1;
        var c = i.length - 1;
        return o == c ? i.pop() : Ns.call(i, o, 1), --this.size, !0;
      }
      function wQ(n) {
        var i = this.__data__, o = Js(i, n);
        return o < 0 ? t : i[o][1];
      }
      function dQ(n) {
        return Js(this.__data__, n) > -1;
      }
      function QQ(n, i) {
        var o = this.__data__, c = Js(o, n);
        return c < 0 ? (++this.size, o.push([n, i])) : o[c][1] = i, this;
      }
      St.prototype.clear = hQ, St.prototype.delete = gQ, St.prototype.get = wQ, St.prototype.has = dQ, St.prototype.set = QQ;
      function Dt(n) {
        var i = -1, o = n == null ? 0 : n.length;
        for (this.clear(); ++i < o; ) {
          var c = n[i];
          this.set(c[0], c[1]);
        }
      }
      function pQ() {
        this.size = 0, this.__data__ = {
          hash: new Tn(),
          map: new (li || St)(),
          string: new Tn()
        };
      }
      function CQ(n) {
        var i = io(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function UQ(n) {
        return io(this, n).get(n);
      }
      function FQ(n) {
        return io(this, n).has(n);
      }
      function vQ(n, i) {
        var o = io(this, n), c = o.size;
        return o.set(n, i), this.size += o.size == c ? 0 : 1, this;
      }
      Dt.prototype.clear = pQ, Dt.prototype.delete = CQ, Dt.prototype.get = UQ, Dt.prototype.has = FQ, Dt.prototype.set = vQ;
      function Sn(n) {
        var i = -1, o = n == null ? 0 : n.length;
        for (this.__data__ = new Dt(); ++i < o; )
          this.add(n[i]);
      }
      function mQ(n) {
        return this.__data__.set(n, l), this;
      }
      function EQ(n) {
        return this.__data__.has(n);
      }
      Sn.prototype.add = Sn.prototype.push = mQ, Sn.prototype.has = EQ;
      function nt(n) {
        var i = this.__data__ = new St(n);
        this.size = i.size;
      }
      function yQ() {
        this.__data__ = new St(), this.size = 0;
      }
      function HQ(n) {
        var i = this.__data__, o = i.delete(n);
        return this.size = i.size, o;
      }
      function IQ(n) {
        return this.__data__.get(n);
      }
      function _Q(n) {
        return this.__data__.has(n);
      }
      function xQ(n, i) {
        var o = this.__data__;
        if (o instanceof St) {
          var c = o.__data__;
          if (!li || c.length < s - 1)
            return c.push([n, i]), this.size = ++o.size, this;
          o = this.__data__ = new Dt(c);
        }
        return o.set(n, i), this.size = o.size, this;
      }
      nt.prototype.clear = yQ, nt.prototype.delete = HQ, nt.prototype.get = IQ, nt.prototype.has = _Q, nt.prototype.set = xQ;
      function If(n, i) {
        var o = cA(n), c = !o && Nn(n), h = !o && !c && Bn(n), d = !o && !c && !h && Fr(n), U = o || c || h || d, F = U ? _u(n.length, N0) : [], E = F.length;
        for (var T in n)
          (i || IA.call(n, T)) && !(U && // Safari 9 has enumerable `arguments.length` in strict mode.
          (T == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (T == "offset" || T == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          d && (T == "buffer" || T == "byteLength" || T == "byteOffset") || // Skip index properties.
          Nt(T, E))) && F.push(T);
        return F;
      }
      function _f(n) {
        var i = n.length;
        return i ? n[Wu(0, i - 1)] : t;
      }
      function bQ(n, i) {
        return so(Ue(n), Dn(i, 0, n.length));
      }
      function LQ(n) {
        return so(Ue(n));
      }
      function Du(n, i, o) {
        (o !== t && !rt(n[i], o) || o === t && !(i in n)) && Mt(n, i, o);
      }
      function gi(n, i, o) {
        var c = n[i];
        (!(IA.call(n, i) && rt(c, o)) || o === t && !(i in n)) && Mt(n, i, o);
      }
      function Js(n, i) {
        for (var o = n.length; o--; )
          if (rt(n[o][0], i))
            return o;
        return -1;
      }
      function KQ(n, i, o, c) {
        return un(n, function(h, d, U) {
          i(c, h, o(h), U);
        }), c;
      }
      function xf(n, i) {
        return n && Ut(i, Ae(i), n);
      }
      function TQ(n, i) {
        return n && Ut(i, ve(i), n);
      }
      function Mt(n, i, o) {
        i == "__proto__" && Gs ? Gs(n, i, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : n[i] = o;
      }
      function Mu(n, i) {
        for (var o = -1, c = i.length, h = _(c), d = n == null; ++o < c; )
          h[o] = d ? t : dc(n, i[o]);
        return h;
      }
      function Dn(n, i, o) {
        return n === n && (o !== t && (n = n <= o ? n : o), i !== t && (n = n >= i ? n : i)), n;
      }
      function Xe(n, i, o, c, h, d) {
        var U, F = i & Q, E = i & C, T = i & v;
        if (o && (U = h ? o(n, c, h, d) : o(n)), U !== t)
          return U;
        if (!GA(n))
          return n;
        var S = cA(n);
        if (S) {
          if (U = Fp(n), !F)
            return Ue(n, U);
        } else {
          var R = le(n), X = R == er || R == as;
          if (Bn(n))
            return AB(n, F);
          if (R == Ne || R == vA || X && !h) {
            if (U = E || X ? {} : pB(n), !F)
              return E ? lp(n, TQ(U, n)) : cp(n, xf(U, n));
          } else {
            if (!_A[R])
              return h ? n : {};
            U = vp(n, R, F);
          }
        }
        d || (d = new nt());
        var tA = d.get(n);
        if (tA)
          return tA;
        d.set(n, U), YB(n) ? n.forEach(function(sA) {
          U.add(Xe(sA, i, o, sA, n, d));
        }) : WB(n) && n.forEach(function(sA, wA) {
          U.set(wA, Xe(sA, i, o, wA, n, d));
        });
        var iA = T ? E ? nc : tc : E ? ve : Ae, fA = S ? t : iA(n);
        return Ve(fA || n, function(sA, wA) {
          fA && (wA = sA, sA = n[wA]), gi(U, wA, Xe(sA, i, o, wA, n, d));
        }), U;
      }
      function SQ(n) {
        var i = Ae(n);
        return function(o) {
          return bf(o, n, i);
        };
      }
      function bf(n, i, o) {
        var c = o.length;
        if (n == null)
          return !c;
        for (n = KA(n); c--; ) {
          var h = o[c], d = i[h], U = n[h];
          if (U === t && !(h in n) || !d(U))
            return !1;
        }
        return !0;
      }
      function Lf(n, i, o) {
        if (typeof n != "function")
          throw new Pe(u);
        return Fi(function() {
          n.apply(t, o);
        }, i);
      }
      function wi(n, i, o, c) {
        var h = -1, d = xs, U = !0, F = n.length, E = [], T = i.length;
        if (!F)
          return E;
        o && (i = MA(i, be(o))), c ? (d = vu, U = !1) : i.length >= s && (d = ui, U = !1, i = new Sn(i));
        A:
          for (; ++h < F; ) {
            var S = n[h], R = o == null ? S : o(S);
            if (S = c || S !== 0 ? S : 0, U && R === R) {
              for (var X = T; X--; )
                if (i[X] === R)
                  continue A;
              E.push(S);
            } else d(i, R, c) || E.push(S);
          }
        return E;
      }
      var un = iB(Ct), Kf = iB(Ru, !0);
      function DQ(n, i) {
        var o = !0;
        return un(n, function(c, h, d) {
          return o = !!i(c, h, d), o;
        }), o;
      }
      function Ys(n, i, o) {
        for (var c = -1, h = n.length; ++c < h; ) {
          var d = n[c], U = i(d);
          if (U != null && (F === t ? U === U && !Ke(U) : o(U, F)))
            var F = U, E = d;
        }
        return E;
      }
      function MQ(n, i, o, c) {
        var h = n.length;
        for (o = lA(o), o < 0 && (o = -o > h ? 0 : h + o), c = c === t || c > h ? h : lA(c), c < 0 && (c += h), c = o > c ? 0 : $B(c); o < c; )
          n[o++] = i;
        return n;
      }
      function Tf(n, i) {
        var o = [];
        return un(n, function(c, h, d) {
          i(c, h, d) && o.push(c);
        }), o;
      }
      function ne(n, i, o, c, h) {
        var d = -1, U = n.length;
        for (o || (o = Ep), h || (h = []); ++d < U; ) {
          var F = n[d];
          i > 0 && o(F) ? i > 1 ? ne(F, i - 1, o, c, h) : sn(h, F) : c || (h[h.length] = F);
        }
        return h;
      }
      var Ou = sB(), Sf = sB(!0);
      function Ct(n, i) {
        return n && Ou(n, i, Ae);
      }
      function Ru(n, i) {
        return n && Sf(n, i, Ae);
      }
      function Zs(n, i) {
        return rn(i, function(o) {
          return Gt(n[o]);
        });
      }
      function Mn(n, i) {
        i = ln(i, n);
        for (var o = 0, c = i.length; n != null && o < c; )
          n = n[Ft(i[o++])];
        return o && o == c ? n : t;
      }
      function Df(n, i, o) {
        var c = i(n);
        return cA(n) ? c : sn(c, o(n));
      }
      function ge(n) {
        return n == null ? n === t ? ht : Xr : Kn && Kn in KA(n) ? pp(n) : Lp(n);
      }
      function Nu(n, i) {
        return n > i;
      }
      function OQ(n, i) {
        return n != null && IA.call(n, i);
      }
      function RQ(n, i) {
        return n != null && i in KA(n);
      }
      function NQ(n, i, o) {
        return n >= ce(i, o) && n < qA(i, o);
      }
      function Gu(n, i, o) {
        for (var c = o ? vu : xs, h = n[0].length, d = n.length, U = d, F = _(d), E = 1 / 0, T = []; U--; ) {
          var S = n[U];
          U && i && (S = MA(S, be(i))), E = ce(S.length, E), F[U] = !o && (i || h >= 120 && S.length >= 120) ? new Sn(U && S) : t;
        }
        S = n[0];
        var R = -1, X = F[0];
        A:
          for (; ++R < h && T.length < E; ) {
            var tA = S[R], iA = i ? i(tA) : tA;
            if (tA = o || tA !== 0 ? tA : 0, !(X ? ui(X, iA) : c(T, iA, o))) {
              for (U = d; --U; ) {
                var fA = F[U];
                if (!(fA ? ui(fA, iA) : c(n[U], iA, o)))
                  continue A;
              }
              X && X.push(iA), T.push(tA);
            }
          }
        return T;
      }
      function GQ(n, i, o, c) {
        return Ct(n, function(h, d, U) {
          i(c, o(h), d, U);
        }), c;
      }
      function di(n, i, o) {
        i = ln(i, n), n = vB(n, i);
        var c = n == null ? n : n[Ft(Je(i))];
        return c == null ? t : xe(c, n, o);
      }
      function Mf(n) {
        return VA(n) && ge(n) == vA;
      }
      function VQ(n) {
        return VA(n) && ge(n) == An;
      }
      function PQ(n) {
        return VA(n) && ge(n) == At;
      }
      function Qi(n, i, o, c, h) {
        return n === i ? !0 : n == null || i == null || !VA(n) && !VA(i) ? n !== n && i !== i : kQ(n, i, o, c, Qi, h);
      }
      function kQ(n, i, o, c, h, d) {
        var U = cA(n), F = cA(i), E = U ? NA : le(n), T = F ? NA : le(i);
        E = E == vA ? Ne : E, T = T == vA ? Ne : T;
        var S = E == Ne, R = T == Ne, X = E == T;
        if (X && Bn(n)) {
          if (!Bn(i))
            return !1;
          U = !0, S = !1;
        }
        if (X && !S)
          return d || (d = new nt()), U || Fr(n) ? wB(n, i, o, c, h, d) : dp(n, i, E, o, c, h, d);
        if (!(o & H)) {
          var tA = S && IA.call(n, "__wrapped__"), iA = R && IA.call(i, "__wrapped__");
          if (tA || iA) {
            var fA = tA ? n.value() : n, sA = iA ? i.value() : i;
            return d || (d = new nt()), h(fA, sA, o, c, d);
          }
        }
        return X ? (d || (d = new nt()), Qp(n, i, o, c, h, d)) : !1;
      }
      function XQ(n) {
        return VA(n) && le(n) == Ce;
      }
      function Vu(n, i, o, c) {
        var h = o.length, d = h, U = !c;
        if (n == null)
          return !d;
        for (n = KA(n); h--; ) {
          var F = o[h];
          if (U && F[2] ? F[1] !== n[F[0]] : !(F[0] in n))
            return !1;
        }
        for (; ++h < d; ) {
          F = o[h];
          var E = F[0], T = n[E], S = F[1];
          if (U && F[2]) {
            if (T === t && !(E in n))
              return !1;
          } else {
            var R = new nt();
            if (c)
              var X = c(T, S, E, n, i, R);
            if (!(X === t ? Qi(S, T, H | K, c, R) : X))
              return !1;
          }
        }
        return !0;
      }
      function Of(n) {
        if (!GA(n) || Hp(n))
          return !1;
        var i = Gt(n) ? X0 : ru;
        return i.test(Rn(n));
      }
      function WQ(n) {
        return VA(n) && ge(n) == Bt;
      }
      function JQ(n) {
        return VA(n) && le(n) == he;
      }
      function YQ(n) {
        return VA(n) && fo(n.length) && !!LA[ge(n)];
      }
      function Rf(n) {
        return typeof n == "function" ? n : n == null ? me : typeof n == "object" ? cA(n) ? Vf(n[0], n[1]) : Gf(n) : oh(n);
      }
      function Pu(n) {
        if (!Ui(n))
          return z0(n);
        var i = [];
        for (var o in KA(n))
          IA.call(n, o) && o != "constructor" && i.push(o);
        return i;
      }
      function ZQ(n) {
        if (!GA(n))
          return bp(n);
        var i = Ui(n), o = [];
        for (var c in n)
          c == "constructor" && (i || !IA.call(n, c)) || o.push(c);
        return o;
      }
      function ku(n, i) {
        return n < i;
      }
      function Nf(n, i) {
        var o = -1, c = Fe(n) ? _(n.length) : [];
        return un(n, function(h, d, U) {
          c[++o] = i(h, d, U);
        }), c;
      }
      function Gf(n) {
        var i = ic(n);
        return i.length == 1 && i[0][2] ? UB(i[0][0], i[0][1]) : function(o) {
          return o === n || Vu(o, n, i);
        };
      }
      function Vf(n, i) {
        return oc(n) && CB(i) ? UB(Ft(n), i) : function(o) {
          var c = dc(o, n);
          return c === t && c === i ? Qc(o, n) : Qi(i, c, H | K);
        };
      }
      function $s(n, i, o, c, h) {
        n !== i && Ou(i, function(d, U) {
          if (h || (h = new nt()), GA(d))
            $Q(n, i, U, o, $s, c, h);
          else {
            var F = c ? c(uc(n, U), d, U + "", n, i, h) : t;
            F === t && (F = d), Du(n, U, F);
          }
        }, ve);
      }
      function $Q(n, i, o, c, h, d, U) {
        var F = uc(n, o), E = uc(i, o), T = U.get(E);
        if (T) {
          Du(n, o, T);
          return;
        }
        var S = d ? d(F, E, o + "", n, i, U) : t, R = S === t;
        if (R) {
          var X = cA(E), tA = !X && Bn(E), iA = !X && !tA && Fr(E);
          S = E, X || tA || iA ? cA(F) ? S = F : kA(F) ? S = Ue(F) : tA ? (R = !1, S = AB(E, !0)) : iA ? (R = !1, S = eB(E, !0)) : S = [] : vi(E) || Nn(E) ? (S = F, Nn(F) ? S = zB(F) : (!GA(F) || Gt(F)) && (S = pB(E))) : R = !1;
        }
        R && (U.set(E, S), h(S, E, c, d, U), U.delete(E)), Du(n, o, S);
      }
      function Pf(n, i) {
        var o = n.length;
        if (o)
          return i += i < 0 ? o : 0, Nt(i, o) ? n[i] : t;
      }
      function kf(n, i, o) {
        i.length ? i = MA(i, function(d) {
          return cA(d) ? function(U) {
            return Mn(U, d.length === 1 ? d[0] : d);
          } : d;
        }) : i = [me];
        var c = -1;
        i = MA(i, be(rA()));
        var h = Nf(n, function(d, U, F) {
          var E = MA(i, function(T) {
            return T(d);
          });
          return { criteria: E, index: ++c, value: d };
        });
        return v0(h, function(d, U) {
          return up(d, U, o);
        });
      }
      function zQ(n, i) {
        return Xf(n, i, function(o, c) {
          return Qc(n, c);
        });
      }
      function Xf(n, i, o) {
        for (var c = -1, h = i.length, d = {}; ++c < h; ) {
          var U = i[c], F = Mn(n, U);
          o(F, U) && pi(d, ln(U, n), F);
        }
        return d;
      }
      function qQ(n) {
        return function(i) {
          return Mn(i, n);
        };
      }
      function Xu(n, i, o, c) {
        var h = c ? F0 : lr, d = -1, U = i.length, F = n;
        for (n === i && (i = Ue(i)), o && (F = MA(n, be(o))); ++d < U; )
          for (var E = 0, T = i[d], S = o ? o(T) : T; (E = h(F, S, E, c)) > -1; )
            F !== n && Ns.call(F, E, 1), Ns.call(n, E, 1);
        return n;
      }
      function Wf(n, i) {
        for (var o = n ? i.length : 0, c = o - 1; o--; ) {
          var h = i[o];
          if (o == c || h !== d) {
            var d = h;
            Nt(h) ? Ns.call(n, h, 1) : Zu(n, h);
          }
        }
        return n;
      }
      function Wu(n, i) {
        return n + Ps(yf() * (i - n + 1));
      }
      function jQ(n, i, o, c) {
        for (var h = -1, d = qA(Vs((i - n) / (o || 1)), 0), U = _(d); d--; )
          U[c ? d : ++h] = n, n += o;
        return U;
      }
      function Ju(n, i) {
        var o = "";
        if (!n || i < 1 || i > AA)
          return o;
        do
          i % 2 && (o += n), i = Ps(i / 2), i && (n += n);
        while (i);
        return o;
      }
      function BA(n, i) {
        return cc(FB(n, i, me), n + "");
      }
      function Ap(n) {
        return _f(vr(n));
      }
      function ep(n, i) {
        var o = vr(n);
        return so(o, Dn(i, 0, o.length));
      }
      function pi(n, i, o, c) {
        if (!GA(n))
          return n;
        i = ln(i, n);
        for (var h = -1, d = i.length, U = d - 1, F = n; F != null && ++h < d; ) {
          var E = Ft(i[h]), T = o;
          if (E === "__proto__" || E === "constructor" || E === "prototype")
            return n;
          if (h != U) {
            var S = F[E];
            T = c ? c(S, E, F) : t, T === t && (T = GA(S) ? S : Nt(i[h + 1]) ? [] : {});
          }
          gi(F, E, T), F = F[E];
        }
        return n;
      }
      var Jf = ks ? function(n, i) {
        return ks.set(n, i), n;
      } : me, tp = Gs ? function(n, i) {
        return Gs(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Cc(i),
          writable: !0
        });
      } : me;
      function np(n) {
        return so(vr(n));
      }
      function We(n, i, o) {
        var c = -1, h = n.length;
        i < 0 && (i = -i > h ? 0 : h + i), o = o > h ? h : o, o < 0 && (o += h), h = i > o ? 0 : o - i >>> 0, i >>>= 0;
        for (var d = _(h); ++c < h; )
          d[c] = n[c + i];
        return d;
      }
      function rp(n, i) {
        var o;
        return un(n, function(c, h, d) {
          return o = i(c, h, d), !o;
        }), !!o;
      }
      function zs(n, i, o) {
        var c = 0, h = n == null ? c : n.length;
        if (typeof i == "number" && i === i && h <= FA) {
          for (; c < h; ) {
            var d = c + h >>> 1, U = n[d];
            U !== null && !Ke(U) && (o ? U <= i : U < i) ? c = d + 1 : h = d;
          }
          return h;
        }
        return Yu(n, i, me, o);
      }
      function Yu(n, i, o, c) {
        var h = 0, d = n == null ? 0 : n.length;
        if (d === 0)
          return 0;
        i = o(i);
        for (var U = i !== i, F = i === null, E = Ke(i), T = i === t; h < d; ) {
          var S = Ps((h + d) / 2), R = o(n[S]), X = R !== t, tA = R === null, iA = R === R, fA = Ke(R);
          if (U)
            var sA = c || iA;
          else T ? sA = iA && (c || X) : F ? sA = iA && X && (c || !tA) : E ? sA = iA && X && !tA && (c || !fA) : tA || fA ? sA = !1 : sA = c ? R <= i : R < i;
          sA ? h = S + 1 : d = S;
        }
        return ce(d, CA);
      }
      function Yf(n, i) {
        for (var o = -1, c = n.length, h = 0, d = []; ++o < c; ) {
          var U = n[o], F = i ? i(U) : U;
          if (!o || !rt(F, E)) {
            var E = F;
            d[h++] = U === 0 ? 0 : U;
          }
        }
        return d;
      }
      function Zf(n) {
        return typeof n == "number" ? n : Ke(n) ? k : +n;
      }
      function Le(n) {
        if (typeof n == "string")
          return n;
        if (cA(n))
          return MA(n, Le) + "";
        if (Ke(n))
          return Hf ? Hf.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -P ? "-0" : i;
      }
      function cn(n, i, o) {
        var c = -1, h = xs, d = n.length, U = !0, F = [], E = F;
        if (o)
          U = !1, h = vu;
        else if (d >= s) {
          var T = i ? null : gp(n);
          if (T)
            return Ls(T);
          U = !1, h = ui, E = new Sn();
        } else
          E = i ? [] : F;
        A:
          for (; ++c < d; ) {
            var S = n[c], R = i ? i(S) : S;
            if (S = o || S !== 0 ? S : 0, U && R === R) {
              for (var X = E.length; X--; )
                if (E[X] === R)
                  continue A;
              i && E.push(R), F.push(S);
            } else h(E, R, o) || (E !== F && E.push(R), F.push(S));
          }
        return F;
      }
      function Zu(n, i) {
        return i = ln(i, n), n = vB(n, i), n == null || delete n[Ft(Je(i))];
      }
      function $f(n, i, o, c) {
        return pi(n, i, o(Mn(n, i)), c);
      }
      function qs(n, i, o, c) {
        for (var h = n.length, d = c ? h : -1; (c ? d-- : ++d < h) && i(n[d], d, n); )
          ;
        return o ? We(n, c ? 0 : d, c ? d + 1 : h) : We(n, c ? d + 1 : 0, c ? h : d);
      }
      function zf(n, i) {
        var o = n;
        return o instanceof dA && (o = o.value()), mu(i, function(c, h) {
          return h.func.apply(h.thisArg, sn([c], h.args));
        }, o);
      }
      function $u(n, i, o) {
        var c = n.length;
        if (c < 2)
          return c ? cn(n[0]) : [];
        for (var h = -1, d = _(c); ++h < c; )
          for (var U = n[h], F = -1; ++F < c; )
            F != h && (d[h] = wi(d[h] || U, n[F], i, o));
        return cn(ne(d, 1), i, o);
      }
      function qf(n, i, o) {
        for (var c = -1, h = n.length, d = i.length, U = {}; ++c < h; ) {
          var F = c < d ? i[c] : t;
          o(U, n[c], F);
        }
        return U;
      }
      function zu(n) {
        return kA(n) ? n : [];
      }
      function qu(n) {
        return typeof n == "function" ? n : me;
      }
      function ln(n, i) {
        return cA(n) ? n : oc(n, i) ? [n] : HB(yA(n));
      }
      var ip = BA;
      function fn(n, i, o) {
        var c = n.length;
        return o = o === t ? c : o, !i && o >= c ? n : We(n, i, o);
      }
      var jf = W0 || function(n) {
        return YA.clearTimeout(n);
      };
      function AB(n, i) {
        if (i)
          return n.slice();
        var o = n.length, c = Uf ? Uf(o) : new n.constructor(o);
        return n.copy(c), c;
      }
      function ju(n) {
        var i = new n.constructor(n.byteLength);
        return new Os(i).set(new Os(n)), i;
      }
      function sp(n, i) {
        var o = i ? ju(n.buffer) : n.buffer;
        return new n.constructor(o, n.byteOffset, n.byteLength);
      }
      function op(n) {
        var i = new n.constructor(n.source, Lt.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function ap(n) {
        return hi ? KA(hi.call(n)) : {};
      }
      function eB(n, i) {
        var o = i ? ju(n.buffer) : n.buffer;
        return new n.constructor(o, n.byteOffset, n.length);
      }
      function tB(n, i) {
        if (n !== i) {
          var o = n !== t, c = n === null, h = n === n, d = Ke(n), U = i !== t, F = i === null, E = i === i, T = Ke(i);
          if (!F && !T && !d && n > i || d && U && E && !F && !T || c && U && E || !o && E || !h)
            return 1;
          if (!c && !d && !T && n < i || T && o && h && !c && !d || F && o && h || !U && h || !E)
            return -1;
        }
        return 0;
      }
      function up(n, i, o) {
        for (var c = -1, h = n.criteria, d = i.criteria, U = h.length, F = o.length; ++c < U; ) {
          var E = tB(h[c], d[c]);
          if (E) {
            if (c >= F)
              return E;
            var T = o[c];
            return E * (T == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function nB(n, i, o, c) {
        for (var h = -1, d = n.length, U = o.length, F = -1, E = i.length, T = qA(d - U, 0), S = _(E + T), R = !c; ++F < E; )
          S[F] = i[F];
        for (; ++h < U; )
          (R || h < d) && (S[o[h]] = n[h]);
        for (; T--; )
          S[F++] = n[h++];
        return S;
      }
      function rB(n, i, o, c) {
        for (var h = -1, d = n.length, U = -1, F = o.length, E = -1, T = i.length, S = qA(d - F, 0), R = _(S + T), X = !c; ++h < S; )
          R[h] = n[h];
        for (var tA = h; ++E < T; )
          R[tA + E] = i[E];
        for (; ++U < F; )
          (X || h < d) && (R[tA + o[U]] = n[h++]);
        return R;
      }
      function Ue(n, i) {
        var o = -1, c = n.length;
        for (i || (i = _(c)); ++o < c; )
          i[o] = n[o];
        return i;
      }
      function Ut(n, i, o, c) {
        var h = !o;
        o || (o = {});
        for (var d = -1, U = i.length; ++d < U; ) {
          var F = i[d], E = c ? c(o[F], n[F], F, o, n) : t;
          E === t && (E = n[F]), h ? Mt(o, F, E) : gi(o, F, E);
        }
        return o;
      }
      function cp(n, i) {
        return Ut(n, sc(n), i);
      }
      function lp(n, i) {
        return Ut(n, dB(n), i);
      }
      function js(n, i) {
        return function(o, c) {
          var h = cA(o) ? w0 : KQ, d = i ? i() : {};
          return h(o, n, rA(c, 2), d);
        };
      }
      function pr(n) {
        return BA(function(i, o) {
          var c = -1, h = o.length, d = h > 1 ? o[h - 1] : t, U = h > 2 ? o[2] : t;
          for (d = n.length > 3 && typeof d == "function" ? (h--, d) : t, U && we(o[0], o[1], U) && (d = h < 3 ? t : d, h = 1), i = KA(i); ++c < h; ) {
            var F = o[c];
            F && n(i, F, c, d);
          }
          return i;
        });
      }
      function iB(n, i) {
        return function(o, c) {
          if (o == null)
            return o;
          if (!Fe(o))
            return n(o, c);
          for (var h = o.length, d = i ? h : -1, U = KA(o); (i ? d-- : ++d < h) && c(U[d], d, U) !== !1; )
            ;
          return o;
        };
      }
      function sB(n) {
        return function(i, o, c) {
          for (var h = -1, d = KA(i), U = c(i), F = U.length; F--; ) {
            var E = U[n ? F : ++h];
            if (o(d[E], E, d) === !1)
              break;
          }
          return i;
        };
      }
      function fp(n, i, o) {
        var c = i & V, h = Ci(n);
        function d() {
          var U = this && this !== YA && this instanceof d ? h : n;
          return U.apply(c ? o : this, arguments);
        }
        return d;
      }
      function oB(n) {
        return function(i) {
          i = yA(i);
          var o = fr(i) ? tt(i) : t, c = o ? o[0] : i.charAt(0), h = o ? fn(o, 1).join("") : i.slice(1);
          return c[n]() + h;
        };
      }
      function Cr(n) {
        return function(i) {
          return mu(ih(rh(i).replace(Is, "")), n, "");
        };
      }
      function Ci(n) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new n();
            case 1:
              return new n(i[0]);
            case 2:
              return new n(i[0], i[1]);
            case 3:
              return new n(i[0], i[1], i[2]);
            case 4:
              return new n(i[0], i[1], i[2], i[3]);
            case 5:
              return new n(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var o = Qr(n.prototype), c = n.apply(o, i);
          return GA(c) ? c : o;
        };
      }
      function Bp(n, i, o) {
        var c = Ci(n);
        function h() {
          for (var d = arguments.length, U = _(d), F = d, E = Ur(h); F--; )
            U[F] = arguments[F];
          var T = d < 3 && U[0] !== E && U[d - 1] !== E ? [] : on(U, E);
          if (d -= T.length, d < o)
            return fB(
              n,
              i,
              Ao,
              h.placeholder,
              t,
              U,
              T,
              t,
              t,
              o - d
            );
          var S = this && this !== YA && this instanceof h ? c : n;
          return xe(S, this, U);
        }
        return h;
      }
      function aB(n) {
        return function(i, o, c) {
          var h = KA(i);
          if (!Fe(i)) {
            var d = rA(o, 3);
            i = Ae(i), o = function(F) {
              return d(h[F], F, h);
            };
          }
          var U = n(i, o, c);
          return U > -1 ? h[d ? i[U] : U] : t;
        };
      }
      function uB(n) {
        return Rt(function(i) {
          var o = i.length, c = o, h = ke.prototype.thru;
          for (n && i.reverse(); c--; ) {
            var d = i[c];
            if (typeof d != "function")
              throw new Pe(u);
            if (h && !U && ro(d) == "wrapper")
              var U = new ke([], !0);
          }
          for (c = U ? c : o; ++c < o; ) {
            d = i[c];
            var F = ro(d), E = F == "wrapper" ? rc(d) : t;
            E && ac(E[0]) && E[1] == (W | $ | N | j) && !E[4].length && E[9] == 1 ? U = U[ro(E[0])].apply(U, E[3]) : U = d.length == 1 && ac(d) ? U[F]() : U.thru(d);
          }
          return function() {
            var T = arguments, S = T[0];
            if (U && T.length == 1 && cA(S))
              return U.plant(S).value();
            for (var R = 0, X = o ? i[R].apply(this, T) : S; ++R < o; )
              X = i[R].call(this, X);
            return X;
          };
        });
      }
      function Ao(n, i, o, c, h, d, U, F, E, T) {
        var S = i & W, R = i & V, X = i & b, tA = i & ($ | x), iA = i & z, fA = X ? t : Ci(n);
        function sA() {
          for (var wA = arguments.length, pA = _(wA), Te = wA; Te--; )
            pA[Te] = arguments[Te];
          if (tA)
            var de = Ur(sA), Se = E0(pA, de);
          if (c && (pA = nB(pA, c, h, tA)), d && (pA = rB(pA, d, U, tA)), wA -= Se, tA && wA < T) {
            var XA = on(pA, de);
            return fB(
              n,
              i,
              Ao,
              sA.placeholder,
              o,
              pA,
              XA,
              F,
              E,
              T - wA
            );
          }
          var it = R ? o : this, Pt = X ? it[n] : n;
          return wA = pA.length, F ? pA = Kp(pA, F) : iA && wA > 1 && pA.reverse(), S && E < wA && (pA.length = E), this && this !== YA && this instanceof sA && (Pt = fA || Ci(Pt)), Pt.apply(it, pA);
        }
        return sA;
      }
      function cB(n, i) {
        return function(o, c) {
          return GQ(o, n, i(c), {});
        };
      }
      function eo(n, i) {
        return function(o, c) {
          var h;
          if (o === t && c === t)
            return i;
          if (o !== t && (h = o), c !== t) {
            if (h === t)
              return c;
            typeof o == "string" || typeof c == "string" ? (o = Le(o), c = Le(c)) : (o = Zf(o), c = Zf(c)), h = n(o, c);
          }
          return h;
        };
      }
      function Ac(n) {
        return Rt(function(i) {
          return i = MA(i, be(rA())), BA(function(o) {
            var c = this;
            return n(i, function(h) {
              return xe(h, c, o);
            });
          });
        });
      }
      function to(n, i) {
        i = i === t ? " " : Le(i);
        var o = i.length;
        if (o < 2)
          return o ? Ju(i, n) : i;
        var c = Ju(i, Vs(n / Br(i)));
        return fr(i) ? fn(tt(c), 0, n).join("") : c.slice(0, n);
      }
      function hp(n, i, o, c) {
        var h = i & V, d = Ci(n);
        function U() {
          for (var F = -1, E = arguments.length, T = -1, S = c.length, R = _(S + E), X = this && this !== YA && this instanceof U ? d : n; ++T < S; )
            R[T] = c[T];
          for (; E--; )
            R[T++] = arguments[++F];
          return xe(X, h ? o : this, R);
        }
        return U;
      }
      function lB(n) {
        return function(i, o, c) {
          return c && typeof c != "number" && we(i, o, c) && (o = c = t), i = Vt(i), o === t ? (o = i, i = 0) : o = Vt(o), c = c === t ? i < o ? 1 : -1 : Vt(c), jQ(i, o, c, n);
        };
      }
      function no(n) {
        return function(i, o) {
          return typeof i == "string" && typeof o == "string" || (i = Ye(i), o = Ye(o)), n(i, o);
        };
      }
      function fB(n, i, o, c, h, d, U, F, E, T) {
        var S = i & $, R = S ? U : t, X = S ? t : U, tA = S ? d : t, iA = S ? t : d;
        i |= S ? N : D, i &= ~(S ? D : N), i & G || (i &= ~(V | b));
        var fA = [
          n,
          i,
          h,
          tA,
          R,
          iA,
          X,
          F,
          E,
          T
        ], sA = o.apply(t, fA);
        return ac(n) && mB(sA, fA), sA.placeholder = c, EB(sA, n, i);
      }
      function ec(n) {
        var i = zA[n];
        return function(o, c) {
          if (o = Ye(o), c = c == null ? 0 : ce(lA(c), 292), c && Ef(o)) {
            var h = (yA(o) + "e").split("e"), d = i(h[0] + "e" + (+h[1] + c));
            return h = (yA(d) + "e").split("e"), +(h[0] + "e" + (+h[1] - c));
          }
          return i(o);
        };
      }
      var gp = wr && 1 / Ls(new wr([, -0]))[1] == P ? function(n) {
        return new wr(n);
      } : vc;
      function BB(n) {
        return function(i) {
          var o = le(i);
          return o == Ce ? bu(i) : o == he ? L0(i) : m0(i, n(i));
        };
      }
      function Ot(n, i, o, c, h, d, U, F) {
        var E = i & b;
        if (!E && typeof n != "function")
          throw new Pe(u);
        var T = c ? c.length : 0;
        if (T || (i &= ~(N | D), c = h = t), U = U === t ? U : qA(lA(U), 0), F = F === t ? F : lA(F), T -= h ? h.length : 0, i & D) {
          var S = c, R = h;
          c = h = t;
        }
        var X = E ? t : rc(n), tA = [
          n,
          i,
          o,
          c,
          h,
          S,
          R,
          d,
          U,
          F
        ];
        if (X && xp(tA, X), n = tA[0], i = tA[1], o = tA[2], c = tA[3], h = tA[4], F = tA[9] = tA[9] === t ? E ? 0 : n.length : qA(tA[9] - T, 0), !F && i & ($ | x) && (i &= ~($ | x)), !i || i == V)
          var iA = fp(n, i, o);
        else i == $ || i == x ? iA = Bp(n, i, F) : (i == N || i == (V | N)) && !h.length ? iA = hp(n, i, o, c) : iA = Ao.apply(t, tA);
        var fA = X ? Jf : mB;
        return EB(fA(iA, tA), n, i);
      }
      function hB(n, i, o, c) {
        return n === t || rt(n, gr[o]) && !IA.call(c, o) ? i : n;
      }
      function gB(n, i, o, c, h, d) {
        return GA(n) && GA(i) && (d.set(i, n), $s(n, i, t, gB, d), d.delete(i)), n;
      }
      function wp(n) {
        return vi(n) ? t : n;
      }
      function wB(n, i, o, c, h, d) {
        var U = o & H, F = n.length, E = i.length;
        if (F != E && !(U && E > F))
          return !1;
        var T = d.get(n), S = d.get(i);
        if (T && S)
          return T == i && S == n;
        var R = -1, X = !0, tA = o & K ? new Sn() : t;
        for (d.set(n, i), d.set(i, n); ++R < F; ) {
          var iA = n[R], fA = i[R];
          if (c)
            var sA = U ? c(fA, iA, R, i, n, d) : c(iA, fA, R, n, i, d);
          if (sA !== t) {
            if (sA)
              continue;
            X = !1;
            break;
          }
          if (tA) {
            if (!Eu(i, function(wA, pA) {
              if (!ui(tA, pA) && (iA === wA || h(iA, wA, o, c, d)))
                return tA.push(pA);
            })) {
              X = !1;
              break;
            }
          } else if (!(iA === fA || h(iA, fA, o, c, d))) {
            X = !1;
            break;
          }
        }
        return d.delete(n), d.delete(i), X;
      }
      function dp(n, i, o, c, h, d, U) {
        switch (o) {
          case xt:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case An:
            return !(n.byteLength != i.byteLength || !d(new Os(n), new Os(i)));
          case te:
          case At:
          case qt:
            return rt(+n, +i);
          case yn:
            return n.name == i.name && n.message == i.message;
          case Bt:
          case jt:
            return n == i + "";
          case Ce:
            var F = bu;
          case he:
            var E = c & H;
            if (F || (F = Ls), n.size != i.size && !E)
              return !1;
            var T = U.get(n);
            if (T)
              return T == i;
            c |= K, U.set(n, i);
            var S = wB(F(n), F(i), c, h, d, U);
            return U.delete(n), S;
          case Hn:
            if (hi)
              return hi.call(n) == hi.call(i);
        }
        return !1;
      }
      function Qp(n, i, o, c, h, d) {
        var U = o & H, F = tc(n), E = F.length, T = tc(i), S = T.length;
        if (E != S && !U)
          return !1;
        for (var R = E; R--; ) {
          var X = F[R];
          if (!(U ? X in i : IA.call(i, X)))
            return !1;
        }
        var tA = d.get(n), iA = d.get(i);
        if (tA && iA)
          return tA == i && iA == n;
        var fA = !0;
        d.set(n, i), d.set(i, n);
        for (var sA = U; ++R < E; ) {
          X = F[R];
          var wA = n[X], pA = i[X];
          if (c)
            var Te = U ? c(pA, wA, X, i, n, d) : c(wA, pA, X, n, i, d);
          if (!(Te === t ? wA === pA || h(wA, pA, o, c, d) : Te)) {
            fA = !1;
            break;
          }
          sA || (sA = X == "constructor");
        }
        if (fA && !sA) {
          var de = n.constructor, Se = i.constructor;
          de != Se && "constructor" in n && "constructor" in i && !(typeof de == "function" && de instanceof de && typeof Se == "function" && Se instanceof Se) && (fA = !1);
        }
        return d.delete(n), d.delete(i), fA;
      }
      function Rt(n) {
        return cc(FB(n, t, bB), n + "");
      }
      function tc(n) {
        return Df(n, Ae, sc);
      }
      function nc(n) {
        return Df(n, ve, dB);
      }
      var rc = ks ? function(n) {
        return ks.get(n);
      } : vc;
      function ro(n) {
        for (var i = n.name + "", o = dr[i], c = IA.call(dr, i) ? o.length : 0; c--; ) {
          var h = o[c], d = h.func;
          if (d == null || d == n)
            return h.name;
        }
        return i;
      }
      function Ur(n) {
        var i = IA.call(w, "placeholder") ? w : n;
        return i.placeholder;
      }
      function rA() {
        var n = w.iteratee || Uc;
        return n = n === Uc ? Rf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function io(n, i) {
        var o = n.__data__;
        return yp(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map;
      }
      function ic(n) {
        for (var i = Ae(n), o = i.length; o--; ) {
          var c = i[o], h = n[c];
          i[o] = [c, h, CB(h)];
        }
        return i;
      }
      function On(n, i) {
        var o = _0(n, i);
        return Of(o) ? o : t;
      }
      function pp(n) {
        var i = IA.call(n, Kn), o = n[Kn];
        try {
          n[Kn] = t;
          var c = !0;
        } catch {
        }
        var h = Ds.call(n);
        return c && (i ? n[Kn] = o : delete n[Kn]), h;
      }
      var sc = Ku ? function(n) {
        return n == null ? [] : (n = KA(n), rn(Ku(n), function(i) {
          return vf.call(n, i);
        }));
      } : mc, dB = Ku ? function(n) {
        for (var i = []; n; )
          sn(i, sc(n)), n = Rs(n);
        return i;
      } : mc, le = ge;
      (Tu && le(new Tu(new ArrayBuffer(1))) != xt || li && le(new li()) != Ce || Su && le(Su.resolve()) != us || wr && le(new wr()) != he || fi && le(new fi()) != gt) && (le = function(n) {
        var i = ge(n), o = i == Ne ? n.constructor : t, c = o ? Rn(o) : "";
        if (c)
          switch (c) {
            case eQ:
              return xt;
            case tQ:
              return Ce;
            case nQ:
              return us;
            case rQ:
              return he;
            case iQ:
              return gt;
          }
        return i;
      });
      function Cp(n, i, o) {
        for (var c = -1, h = o.length; ++c < h; ) {
          var d = o[c], U = d.size;
          switch (d.type) {
            case "drop":
              n += U;
              break;
            case "dropRight":
              i -= U;
              break;
            case "take":
              i = ce(i, n + U);
              break;
            case "takeRight":
              n = qA(n, i - U);
              break;
          }
        }
        return { start: n, end: i };
      }
      function Up(n) {
        var i = n.match(et);
        return i ? i[1].split(za) : [];
      }
      function QB(n, i, o) {
        i = ln(i, n);
        for (var c = -1, h = i.length, d = !1; ++c < h; ) {
          var U = Ft(i[c]);
          if (!(d = n != null && o(n, U)))
            break;
          n = n[U];
        }
        return d || ++c != h ? d : (h = n == null ? 0 : n.length, !!h && fo(h) && Nt(U, h) && (cA(n) || Nn(n)));
      }
      function Fp(n) {
        var i = n.length, o = new n.constructor(i);
        return i && typeof n[0] == "string" && IA.call(n, "index") && (o.index = n.index, o.input = n.input), o;
      }
      function pB(n) {
        return typeof n.constructor == "function" && !Ui(n) ? Qr(Rs(n)) : {};
      }
      function vp(n, i, o) {
        var c = n.constructor;
        switch (i) {
          case An:
            return ju(n);
          case te:
          case At:
            return new c(+n);
          case xt:
            return sp(n, o);
          case tr:
          case Wr:
          case Jr:
          case Yr:
          case Zr:
          case nr:
          case $r:
          case zr:
          case In:
            return eB(n, o);
          case Ce:
            return new c();
          case qt:
          case jt:
            return new c(n);
          case Bt:
            return op(n);
          case he:
            return new c();
          case Hn:
            return ap(n);
        }
      }
      function mp(n, i) {
        var o = i.length;
        if (!o)
          return n;
        var c = o - 1;
        return i[c] = (o > 1 ? "& " : "") + i[c], i = i.join(o > 2 ? ", " : " "), n.replace($a, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Ep(n) {
        return cA(n) || Nn(n) || !!(mf && n && n[mf]);
      }
      function Nt(n, i) {
        var o = typeof n;
        return i = i ?? AA, !!i && (o == "number" || o != "symbol" && su.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function we(n, i, o) {
        if (!GA(o))
          return !1;
        var c = typeof i;
        return (c == "number" ? Fe(o) && Nt(i, o.length) : c == "string" && i in o) ? rt(o[i], n) : !1;
      }
      function oc(n, i) {
        if (cA(n))
          return !1;
        var o = typeof n;
        return o == "number" || o == "symbol" || o == "boolean" || n == null || Ke(n) ? !0 : fs.test(n) || !ls.test(n) || i != null && n in KA(i);
      }
      function yp(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function ac(n) {
        var i = ro(n), o = w[i];
        if (typeof o != "function" || !(i in dA.prototype))
          return !1;
        if (n === o)
          return !0;
        var c = rc(o);
        return !!c && n === c[0];
      }
      function Hp(n) {
        return !!Cf && Cf in n;
      }
      var Ip = Ts ? Gt : Ec;
      function Ui(n) {
        var i = n && n.constructor, o = typeof i == "function" && i.prototype || gr;
        return n === o;
      }
      function CB(n) {
        return n === n && !GA(n);
      }
      function UB(n, i) {
        return function(o) {
          return o == null ? !1 : o[n] === i && (i !== t || n in KA(o));
        };
      }
      function _p(n) {
        var i = co(n, function(c) {
          return o.size === B && o.clear(), c;
        }), o = i.cache;
        return i;
      }
      function xp(n, i) {
        var o = n[1], c = i[1], h = o | c, d = h < (V | b | W), U = c == W && o == $ || c == W && o == j && n[7].length <= i[8] || c == (W | j) && i[7].length <= i[8] && o == $;
        if (!(d || U))
          return n;
        c & V && (n[2] = i[2], h |= o & V ? 0 : G);
        var F = i[3];
        if (F) {
          var E = n[3];
          n[3] = E ? nB(E, F, i[4]) : F, n[4] = E ? on(n[3], g) : i[4];
        }
        return F = i[5], F && (E = n[5], n[5] = E ? rB(E, F, i[6]) : F, n[6] = E ? on(n[5], g) : i[6]), F = i[7], F && (n[7] = F), c & W && (n[8] = n[8] == null ? i[8] : ce(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = h, n;
      }
      function bp(n) {
        var i = [];
        if (n != null)
          for (var o in KA(n))
            i.push(o);
        return i;
      }
      function Lp(n) {
        return Ds.call(n);
      }
      function FB(n, i, o) {
        return i = qA(i === t ? n.length - 1 : i, 0), function() {
          for (var c = arguments, h = -1, d = qA(c.length - i, 0), U = _(d); ++h < d; )
            U[h] = c[i + h];
          h = -1;
          for (var F = _(i + 1); ++h < i; )
            F[h] = c[h];
          return F[i] = o(U), xe(n, this, F);
        };
      }
      function vB(n, i) {
        return i.length < 2 ? n : Mn(n, We(i, 0, -1));
      }
      function Kp(n, i) {
        for (var o = n.length, c = ce(i.length, o), h = Ue(n); c--; ) {
          var d = i[c];
          n[c] = Nt(d, o) ? h[d] : t;
        }
        return n;
      }
      function uc(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var mB = yB(Jf), Fi = Y0 || function(n, i) {
        return YA.setTimeout(n, i);
      }, cc = yB(tp);
      function EB(n, i, o) {
        var c = i + "";
        return cc(n, mp(c, Tp(Up(c), o)));
      }
      function yB(n) {
        var i = 0, o = 0;
        return function() {
          var c = q0(), h = hA - (c - o);
          if (o = c, h > 0) {
            if (++i >= RA)
              return arguments[0];
          } else
            i = 0;
          return n.apply(t, arguments);
        };
      }
      function so(n, i) {
        var o = -1, c = n.length, h = c - 1;
        for (i = i === t ? c : i; ++o < i; ) {
          var d = Wu(o, h), U = n[d];
          n[d] = n[o], n[o] = U;
        }
        return n.length = i, n;
      }
      var HB = _p(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(bt, function(o, c, h, d) {
          i.push(h ? d.replace(Au, "$1") : c || o);
        }), i;
      });
      function Ft(n) {
        if (typeof n == "string" || Ke(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -P ? "-0" : i;
      }
      function Rn(n) {
        if (n != null) {
          try {
            return Ss.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Tp(n, i) {
        return Ve(EA, function(o) {
          var c = "_." + o[0];
          i & o[1] && !xs(n, c) && n.push(c);
        }), n.sort();
      }
      function IB(n) {
        if (n instanceof dA)
          return n.clone();
        var i = new ke(n.__wrapped__, n.__chain__);
        return i.__actions__ = Ue(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function Sp(n, i, o) {
        (o ? we(n, i, o) : i === t) ? i = 1 : i = qA(lA(i), 0);
        var c = n == null ? 0 : n.length;
        if (!c || i < 1)
          return [];
        for (var h = 0, d = 0, U = _(Vs(c / i)); h < c; )
          U[d++] = We(n, h, h += i);
        return U;
      }
      function Dp(n) {
        for (var i = -1, o = n == null ? 0 : n.length, c = 0, h = []; ++i < o; ) {
          var d = n[i];
          d && (h[c++] = d);
        }
        return h;
      }
      function Mp() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = _(n - 1), o = arguments[0], c = n; c--; )
          i[c - 1] = arguments[c];
        return sn(cA(o) ? Ue(o) : [o], ne(i, 1));
      }
      var Op = BA(function(n, i) {
        return kA(n) ? wi(n, ne(i, 1, kA, !0)) : [];
      }), Rp = BA(function(n, i) {
        var o = Je(i);
        return kA(o) && (o = t), kA(n) ? wi(n, ne(i, 1, kA, !0), rA(o, 2)) : [];
      }), Np = BA(function(n, i) {
        var o = Je(i);
        return kA(o) && (o = t), kA(n) ? wi(n, ne(i, 1, kA, !0), t, o) : [];
      });
      function Gp(n, i, o) {
        var c = n == null ? 0 : n.length;
        return c ? (i = o || i === t ? 1 : lA(i), We(n, i < 0 ? 0 : i, c)) : [];
      }
      function Vp(n, i, o) {
        var c = n == null ? 0 : n.length;
        return c ? (i = o || i === t ? 1 : lA(i), i = c - i, We(n, 0, i < 0 ? 0 : i)) : [];
      }
      function Pp(n, i) {
        return n && n.length ? qs(n, rA(i, 3), !0, !0) : [];
      }
      function kp(n, i) {
        return n && n.length ? qs(n, rA(i, 3), !0) : [];
      }
      function Xp(n, i, o, c) {
        var h = n == null ? 0 : n.length;
        return h ? (o && typeof o != "number" && we(n, i, o) && (o = 0, c = h), MQ(n, i, o, c)) : [];
      }
      function _B(n, i, o) {
        var c = n == null ? 0 : n.length;
        if (!c)
          return -1;
        var h = o == null ? 0 : lA(o);
        return h < 0 && (h = qA(c + h, 0)), bs(n, rA(i, 3), h);
      }
      function xB(n, i, o) {
        var c = n == null ? 0 : n.length;
        if (!c)
          return -1;
        var h = c - 1;
        return o !== t && (h = lA(o), h = o < 0 ? qA(c + h, 0) : ce(h, c - 1)), bs(n, rA(i, 3), h, !0);
      }
      function bB(n) {
        var i = n == null ? 0 : n.length;
        return i ? ne(n, 1) : [];
      }
      function Wp(n) {
        var i = n == null ? 0 : n.length;
        return i ? ne(n, P) : [];
      }
      function Jp(n, i) {
        var o = n == null ? 0 : n.length;
        return o ? (i = i === t ? 1 : lA(i), ne(n, i)) : [];
      }
      function Yp(n) {
        for (var i = -1, o = n == null ? 0 : n.length, c = {}; ++i < o; ) {
          var h = n[i];
          c[h[0]] = h[1];
        }
        return c;
      }
      function LB(n) {
        return n && n.length ? n[0] : t;
      }
      function Zp(n, i, o) {
        var c = n == null ? 0 : n.length;
        if (!c)
          return -1;
        var h = o == null ? 0 : lA(o);
        return h < 0 && (h = qA(c + h, 0)), lr(n, i, h);
      }
      function $p(n) {
        var i = n == null ? 0 : n.length;
        return i ? We(n, 0, -1) : [];
      }
      var zp = BA(function(n) {
        var i = MA(n, zu);
        return i.length && i[0] === n[0] ? Gu(i) : [];
      }), qp = BA(function(n) {
        var i = Je(n), o = MA(n, zu);
        return i === Je(o) ? i = t : o.pop(), o.length && o[0] === n[0] ? Gu(o, rA(i, 2)) : [];
      }), jp = BA(function(n) {
        var i = Je(n), o = MA(n, zu);
        return i = typeof i == "function" ? i : t, i && o.pop(), o.length && o[0] === n[0] ? Gu(o, t, i) : [];
      });
      function AC(n, i) {
        return n == null ? "" : $0.call(n, i);
      }
      function Je(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : t;
      }
      function eC(n, i, o) {
        var c = n == null ? 0 : n.length;
        if (!c)
          return -1;
        var h = c;
        return o !== t && (h = lA(o), h = h < 0 ? qA(c + h, 0) : ce(h, c - 1)), i === i ? T0(n, i, h) : bs(n, ff, h, !0);
      }
      function tC(n, i) {
        return n && n.length ? Pf(n, lA(i)) : t;
      }
      var nC = BA(KB);
      function KB(n, i) {
        return n && n.length && i && i.length ? Xu(n, i) : n;
      }
      function rC(n, i, o) {
        return n && n.length && i && i.length ? Xu(n, i, rA(o, 2)) : n;
      }
      function iC(n, i, o) {
        return n && n.length && i && i.length ? Xu(n, i, t, o) : n;
      }
      var sC = Rt(function(n, i) {
        var o = n == null ? 0 : n.length, c = Mu(n, i);
        return Wf(n, MA(i, function(h) {
          return Nt(h, o) ? +h : h;
        }).sort(tB)), c;
      });
      function oC(n, i) {
        var o = [];
        if (!(n && n.length))
          return o;
        var c = -1, h = [], d = n.length;
        for (i = rA(i, 3); ++c < d; ) {
          var U = n[c];
          i(U, c, n) && (o.push(U), h.push(c));
        }
        return Wf(n, h), o;
      }
      function lc(n) {
        return n == null ? n : AQ.call(n);
      }
      function aC(n, i, o) {
        var c = n == null ? 0 : n.length;
        return c ? (o && typeof o != "number" && we(n, i, o) ? (i = 0, o = c) : (i = i == null ? 0 : lA(i), o = o === t ? c : lA(o)), We(n, i, o)) : [];
      }
      function uC(n, i) {
        return zs(n, i);
      }
      function cC(n, i, o) {
        return Yu(n, i, rA(o, 2));
      }
      function lC(n, i) {
        var o = n == null ? 0 : n.length;
        if (o) {
          var c = zs(n, i);
          if (c < o && rt(n[c], i))
            return c;
        }
        return -1;
      }
      function fC(n, i) {
        return zs(n, i, !0);
      }
      function BC(n, i, o) {
        return Yu(n, i, rA(o, 2), !0);
      }
      function hC(n, i) {
        var o = n == null ? 0 : n.length;
        if (o) {
          var c = zs(n, i, !0) - 1;
          if (rt(n[c], i))
            return c;
        }
        return -1;
      }
      function gC(n) {
        return n && n.length ? Yf(n) : [];
      }
      function wC(n, i) {
        return n && n.length ? Yf(n, rA(i, 2)) : [];
      }
      function dC(n) {
        var i = n == null ? 0 : n.length;
        return i ? We(n, 1, i) : [];
      }
      function QC(n, i, o) {
        return n && n.length ? (i = o || i === t ? 1 : lA(i), We(n, 0, i < 0 ? 0 : i)) : [];
      }
      function pC(n, i, o) {
        var c = n == null ? 0 : n.length;
        return c ? (i = o || i === t ? 1 : lA(i), i = c - i, We(n, i < 0 ? 0 : i, c)) : [];
      }
      function CC(n, i) {
        return n && n.length ? qs(n, rA(i, 3), !1, !0) : [];
      }
      function UC(n, i) {
        return n && n.length ? qs(n, rA(i, 3)) : [];
      }
      var FC = BA(function(n) {
        return cn(ne(n, 1, kA, !0));
      }), vC = BA(function(n) {
        var i = Je(n);
        return kA(i) && (i = t), cn(ne(n, 1, kA, !0), rA(i, 2));
      }), mC = BA(function(n) {
        var i = Je(n);
        return i = typeof i == "function" ? i : t, cn(ne(n, 1, kA, !0), t, i);
      });
      function EC(n) {
        return n && n.length ? cn(n) : [];
      }
      function yC(n, i) {
        return n && n.length ? cn(n, rA(i, 2)) : [];
      }
      function HC(n, i) {
        return i = typeof i == "function" ? i : t, n && n.length ? cn(n, t, i) : [];
      }
      function fc(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = rn(n, function(o) {
          if (kA(o))
            return i = qA(o.length, i), !0;
        }), _u(i, function(o) {
          return MA(n, yu(o));
        });
      }
      function TB(n, i) {
        if (!(n && n.length))
          return [];
        var o = fc(n);
        return i == null ? o : MA(o, function(c) {
          return xe(i, t, c);
        });
      }
      var IC = BA(function(n, i) {
        return kA(n) ? wi(n, i) : [];
      }), _C = BA(function(n) {
        return $u(rn(n, kA));
      }), xC = BA(function(n) {
        var i = Je(n);
        return kA(i) && (i = t), $u(rn(n, kA), rA(i, 2));
      }), bC = BA(function(n) {
        var i = Je(n);
        return i = typeof i == "function" ? i : t, $u(rn(n, kA), t, i);
      }), LC = BA(fc);
      function KC(n, i) {
        return qf(n || [], i || [], gi);
      }
      function TC(n, i) {
        return qf(n || [], i || [], pi);
      }
      var SC = BA(function(n) {
        var i = n.length, o = i > 1 ? n[i - 1] : t;
        return o = typeof o == "function" ? (n.pop(), o) : t, TB(n, o);
      });
      function SB(n) {
        var i = w(n);
        return i.__chain__ = !0, i;
      }
      function DC(n, i) {
        return i(n), n;
      }
      function oo(n, i) {
        return i(n);
      }
      var MC = Rt(function(n) {
        var i = n.length, o = i ? n[0] : 0, c = this.__wrapped__, h = function(d) {
          return Mu(d, n);
        };
        return i > 1 || this.__actions__.length || !(c instanceof dA) || !Nt(o) ? this.thru(h) : (c = c.slice(o, +o + (i ? 1 : 0)), c.__actions__.push({
          func: oo,
          args: [h],
          thisArg: t
        }), new ke(c, this.__chain__).thru(function(d) {
          return i && !d.length && d.push(t), d;
        }));
      });
      function OC() {
        return SB(this);
      }
      function RC() {
        return new ke(this.value(), this.__chain__);
      }
      function NC() {
        this.__values__ === t && (this.__values__ = ZB(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? t : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function GC() {
        return this;
      }
      function VC(n) {
        for (var i, o = this; o instanceof Ws; ) {
          var c = IB(o);
          c.__index__ = 0, c.__values__ = t, i ? h.__wrapped__ = c : i = c;
          var h = c;
          o = o.__wrapped__;
        }
        return h.__wrapped__ = n, i;
      }
      function PC() {
        var n = this.__wrapped__;
        if (n instanceof dA) {
          var i = n;
          return this.__actions__.length && (i = new dA(this)), i = i.reverse(), i.__actions__.push({
            func: oo,
            args: [lc],
            thisArg: t
          }), new ke(i, this.__chain__);
        }
        return this.thru(lc);
      }
      function kC() {
        return zf(this.__wrapped__, this.__actions__);
      }
      var XC = js(function(n, i, o) {
        IA.call(n, o) ? ++n[o] : Mt(n, o, 1);
      });
      function WC(n, i, o) {
        var c = cA(n) ? cf : DQ;
        return o && we(n, i, o) && (i = t), c(n, rA(i, 3));
      }
      function JC(n, i) {
        var o = cA(n) ? rn : Tf;
        return o(n, rA(i, 3));
      }
      var YC = aB(_B), ZC = aB(xB);
      function $C(n, i) {
        return ne(ao(n, i), 1);
      }
      function zC(n, i) {
        return ne(ao(n, i), P);
      }
      function qC(n, i, o) {
        return o = o === t ? 1 : lA(o), ne(ao(n, i), o);
      }
      function DB(n, i) {
        var o = cA(n) ? Ve : un;
        return o(n, rA(i, 3));
      }
      function MB(n, i) {
        var o = cA(n) ? d0 : Kf;
        return o(n, rA(i, 3));
      }
      var jC = js(function(n, i, o) {
        IA.call(n, o) ? n[o].push(i) : Mt(n, o, [i]);
      });
      function AU(n, i, o, c) {
        n = Fe(n) ? n : vr(n), o = o && !c ? lA(o) : 0;
        var h = n.length;
        return o < 0 && (o = qA(h + o, 0)), Bo(n) ? o <= h && n.indexOf(i, o) > -1 : !!h && lr(n, i, o) > -1;
      }
      var eU = BA(function(n, i, o) {
        var c = -1, h = typeof i == "function", d = Fe(n) ? _(n.length) : [];
        return un(n, function(U) {
          d[++c] = h ? xe(i, U, o) : di(U, i, o);
        }), d;
      }), tU = js(function(n, i, o) {
        Mt(n, o, i);
      });
      function ao(n, i) {
        var o = cA(n) ? MA : Nf;
        return o(n, rA(i, 3));
      }
      function nU(n, i, o, c) {
        return n == null ? [] : (cA(i) || (i = i == null ? [] : [i]), o = c ? t : o, cA(o) || (o = o == null ? [] : [o]), kf(n, i, o));
      }
      var rU = js(function(n, i, o) {
        n[o ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function iU(n, i, o) {
        var c = cA(n) ? mu : hf, h = arguments.length < 3;
        return c(n, rA(i, 4), o, h, un);
      }
      function sU(n, i, o) {
        var c = cA(n) ? Q0 : hf, h = arguments.length < 3;
        return c(n, rA(i, 4), o, h, Kf);
      }
      function oU(n, i) {
        var o = cA(n) ? rn : Tf;
        return o(n, lo(rA(i, 3)));
      }
      function aU(n) {
        var i = cA(n) ? _f : Ap;
        return i(n);
      }
      function uU(n, i, o) {
        (o ? we(n, i, o) : i === t) ? i = 1 : i = lA(i);
        var c = cA(n) ? bQ : ep;
        return c(n, i);
      }
      function cU(n) {
        var i = cA(n) ? LQ : np;
        return i(n);
      }
      function lU(n) {
        if (n == null)
          return 0;
        if (Fe(n))
          return Bo(n) ? Br(n) : n.length;
        var i = le(n);
        return i == Ce || i == he ? n.size : Pu(n).length;
      }
      function fU(n, i, o) {
        var c = cA(n) ? Eu : rp;
        return o && we(n, i, o) && (i = t), c(n, rA(i, 3));
      }
      var BU = BA(function(n, i) {
        if (n == null)
          return [];
        var o = i.length;
        return o > 1 && we(n, i[0], i[1]) ? i = [] : o > 2 && we(i[0], i[1], i[2]) && (i = [i[0]]), kf(n, ne(i, 1), []);
      }), uo = J0 || function() {
        return YA.Date.now();
      };
      function hU(n, i) {
        if (typeof i != "function")
          throw new Pe(u);
        return n = lA(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function OB(n, i, o) {
        return i = o ? t : i, i = n && i == null ? n.length : i, Ot(n, W, t, t, t, t, i);
      }
      function RB(n, i) {
        var o;
        if (typeof i != "function")
          throw new Pe(u);
        return n = lA(n), function() {
          return --n > 0 && (o = i.apply(this, arguments)), n <= 1 && (i = t), o;
        };
      }
      var Bc = BA(function(n, i, o) {
        var c = V;
        if (o.length) {
          var h = on(o, Ur(Bc));
          c |= N;
        }
        return Ot(n, c, i, o, h);
      }), NB = BA(function(n, i, o) {
        var c = V | b;
        if (o.length) {
          var h = on(o, Ur(NB));
          c |= N;
        }
        return Ot(i, c, n, o, h);
      });
      function GB(n, i, o) {
        i = o ? t : i;
        var c = Ot(n, $, t, t, t, t, t, i);
        return c.placeholder = GB.placeholder, c;
      }
      function VB(n, i, o) {
        i = o ? t : i;
        var c = Ot(n, x, t, t, t, t, t, i);
        return c.placeholder = VB.placeholder, c;
      }
      function PB(n, i, o) {
        var c, h, d, U, F, E, T = 0, S = !1, R = !1, X = !0;
        if (typeof n != "function")
          throw new Pe(u);
        i = Ye(i) || 0, GA(o) && (S = !!o.leading, R = "maxWait" in o, d = R ? qA(Ye(o.maxWait) || 0, i) : d, X = "trailing" in o ? !!o.trailing : X);
        function tA(XA) {
          var it = c, Pt = h;
          return c = h = t, T = XA, U = n.apply(Pt, it), U;
        }
        function iA(XA) {
          return T = XA, F = Fi(wA, i), S ? tA(XA) : U;
        }
        function fA(XA) {
          var it = XA - E, Pt = XA - T, ah = i - it;
          return R ? ce(ah, d - Pt) : ah;
        }
        function sA(XA) {
          var it = XA - E, Pt = XA - T;
          return E === t || it >= i || it < 0 || R && Pt >= d;
        }
        function wA() {
          var XA = uo();
          if (sA(XA))
            return pA(XA);
          F = Fi(wA, fA(XA));
        }
        function pA(XA) {
          return F = t, X && c ? tA(XA) : (c = h = t, U);
        }
        function Te() {
          F !== t && jf(F), T = 0, c = E = h = F = t;
        }
        function de() {
          return F === t ? U : pA(uo());
        }
        function Se() {
          var XA = uo(), it = sA(XA);
          if (c = arguments, h = this, E = XA, it) {
            if (F === t)
              return iA(E);
            if (R)
              return jf(F), F = Fi(wA, i), tA(E);
          }
          return F === t && (F = Fi(wA, i)), U;
        }
        return Se.cancel = Te, Se.flush = de, Se;
      }
      var gU = BA(function(n, i) {
        return Lf(n, 1, i);
      }), wU = BA(function(n, i, o) {
        return Lf(n, Ye(i) || 0, o);
      });
      function dU(n) {
        return Ot(n, z);
      }
      function co(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new Pe(u);
        var o = function() {
          var c = arguments, h = i ? i.apply(this, c) : c[0], d = o.cache;
          if (d.has(h))
            return d.get(h);
          var U = n.apply(this, c);
          return o.cache = d.set(h, U) || d, U;
        };
        return o.cache = new (co.Cache || Dt)(), o;
      }
      co.Cache = Dt;
      function lo(n) {
        if (typeof n != "function")
          throw new Pe(u);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, i[0]);
            case 2:
              return !n.call(this, i[0], i[1]);
            case 3:
              return !n.call(this, i[0], i[1], i[2]);
          }
          return !n.apply(this, i);
        };
      }
      function QU(n) {
        return RB(2, n);
      }
      var pU = ip(function(n, i) {
        i = i.length == 1 && cA(i[0]) ? MA(i[0], be(rA())) : MA(ne(i, 1), be(rA()));
        var o = i.length;
        return BA(function(c) {
          for (var h = -1, d = ce(c.length, o); ++h < d; )
            c[h] = i[h].call(this, c[h]);
          return xe(n, this, c);
        });
      }), hc = BA(function(n, i) {
        var o = on(i, Ur(hc));
        return Ot(n, N, t, i, o);
      }), kB = BA(function(n, i) {
        var o = on(i, Ur(kB));
        return Ot(n, D, t, i, o);
      }), CU = Rt(function(n, i) {
        return Ot(n, j, t, t, t, i);
      });
      function UU(n, i) {
        if (typeof n != "function")
          throw new Pe(u);
        return i = i === t ? i : lA(i), BA(n, i);
      }
      function FU(n, i) {
        if (typeof n != "function")
          throw new Pe(u);
        return i = i == null ? 0 : qA(lA(i), 0), BA(function(o) {
          var c = o[i], h = fn(o, 0, i);
          return c && sn(h, c), xe(n, this, h);
        });
      }
      function vU(n, i, o) {
        var c = !0, h = !0;
        if (typeof n != "function")
          throw new Pe(u);
        return GA(o) && (c = "leading" in o ? !!o.leading : c, h = "trailing" in o ? !!o.trailing : h), PB(n, i, {
          leading: c,
          maxWait: i,
          trailing: h
        });
      }
      function mU(n) {
        return OB(n, 1);
      }
      function EU(n, i) {
        return hc(qu(i), n);
      }
      function yU() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return cA(n) ? n : [n];
      }
      function HU(n) {
        return Xe(n, v);
      }
      function IU(n, i) {
        return i = typeof i == "function" ? i : t, Xe(n, v, i);
      }
      function _U(n) {
        return Xe(n, Q | v);
      }
      function xU(n, i) {
        return i = typeof i == "function" ? i : t, Xe(n, Q | v, i);
      }
      function bU(n, i) {
        return i == null || bf(n, i, Ae(i));
      }
      function rt(n, i) {
        return n === i || n !== n && i !== i;
      }
      var LU = no(Nu), KU = no(function(n, i) {
        return n >= i;
      }), Nn = Mf(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Mf : function(n) {
        return VA(n) && IA.call(n, "callee") && !vf.call(n, "callee");
      }, cA = _.isArray, TU = Ln ? be(Ln) : VQ;
      function Fe(n) {
        return n != null && fo(n.length) && !Gt(n);
      }
      function kA(n) {
        return VA(n) && Fe(n);
      }
      function SU(n) {
        return n === !0 || n === !1 || VA(n) && ge(n) == te;
      }
      var Bn = Z0 || Ec, DU = rf ? be(rf) : PQ;
      function MU(n) {
        return VA(n) && n.nodeType === 1 && !vi(n);
      }
      function OU(n) {
        if (n == null)
          return !0;
        if (Fe(n) && (cA(n) || typeof n == "string" || typeof n.splice == "function" || Bn(n) || Fr(n) || Nn(n)))
          return !n.length;
        var i = le(n);
        if (i == Ce || i == he)
          return !n.size;
        if (Ui(n))
          return !Pu(n).length;
        for (var o in n)
          if (IA.call(n, o))
            return !1;
        return !0;
      }
      function RU(n, i) {
        return Qi(n, i);
      }
      function NU(n, i, o) {
        o = typeof o == "function" ? o : t;
        var c = o ? o(n, i) : t;
        return c === t ? Qi(n, i, t, o) : !!c;
      }
      function gc(n) {
        if (!VA(n))
          return !1;
        var i = ge(n);
        return i == yn || i == Ga || typeof n.message == "string" && typeof n.name == "string" && !vi(n);
      }
      function GU(n) {
        return typeof n == "number" && Ef(n);
      }
      function Gt(n) {
        if (!GA(n))
          return !1;
        var i = ge(n);
        return i == er || i == as || i == PA || i == Va;
      }
      function XB(n) {
        return typeof n == "number" && n == lA(n);
      }
      function fo(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= AA;
      }
      function GA(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function VA(n) {
        return n != null && typeof n == "object";
      }
      var WB = sf ? be(sf) : XQ;
      function VU(n, i) {
        return n === i || Vu(n, i, ic(i));
      }
      function PU(n, i, o) {
        return o = typeof o == "function" ? o : t, Vu(n, i, ic(i), o);
      }
      function kU(n) {
        return JB(n) && n != +n;
      }
      function XU(n) {
        if (Ip(n))
          throw new uA(a);
        return Of(n);
      }
      function WU(n) {
        return n === null;
      }
      function JU(n) {
        return n == null;
      }
      function JB(n) {
        return typeof n == "number" || VA(n) && ge(n) == qt;
      }
      function vi(n) {
        if (!VA(n) || ge(n) != Ne)
          return !1;
        var i = Rs(n);
        if (i === null)
          return !0;
        var o = IA.call(i, "constructor") && i.constructor;
        return typeof o == "function" && o instanceof o && Ss.call(o) == P0;
      }
      var wc = of ? be(of) : WQ;
      function YU(n) {
        return XB(n) && n >= -AA && n <= AA;
      }
      var YB = af ? be(af) : JQ;
      function Bo(n) {
        return typeof n == "string" || !cA(n) && VA(n) && ge(n) == jt;
      }
      function Ke(n) {
        return typeof n == "symbol" || VA(n) && ge(n) == Hn;
      }
      var Fr = uf ? be(uf) : YQ;
      function ZU(n) {
        return n === t;
      }
      function $U(n) {
        return VA(n) && le(n) == gt;
      }
      function zU(n) {
        return VA(n) && ge(n) == Pa;
      }
      var qU = no(ku), jU = no(function(n, i) {
        return n <= i;
      });
      function ZB(n) {
        if (!n)
          return [];
        if (Fe(n))
          return Bo(n) ? tt(n) : Ue(n);
        if (ci && n[ci])
          return b0(n[ci]());
        var i = le(n), o = i == Ce ? bu : i == he ? Ls : vr;
        return o(n);
      }
      function Vt(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Ye(n), n === P || n === -P) {
          var i = n < 0 ? -1 : 1;
          return i * nA;
        }
        return n === n ? n : 0;
      }
      function lA(n) {
        var i = Vt(n), o = i % 1;
        return i === i ? o ? i - o : i : 0;
      }
      function $B(n) {
        return n ? Dn(lA(n), 0, aA) : 0;
      }
      function Ye(n) {
        if (typeof n == "number")
          return n;
        if (Ke(n))
          return k;
        if (GA(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = GA(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = gf(n);
        var o = nu.test(n);
        return o || iu.test(n) ? oe(n.slice(2), o ? 2 : 8) : tu.test(n) ? k : +n;
      }
      function zB(n) {
        return Ut(n, ve(n));
      }
      function AF(n) {
        return n ? Dn(lA(n), -AA, AA) : n === 0 ? n : 0;
      }
      function yA(n) {
        return n == null ? "" : Le(n);
      }
      var eF = pr(function(n, i) {
        if (Ui(i) || Fe(i)) {
          Ut(i, Ae(i), n);
          return;
        }
        for (var o in i)
          IA.call(i, o) && gi(n, o, i[o]);
      }), qB = pr(function(n, i) {
        Ut(i, ve(i), n);
      }), ho = pr(function(n, i, o, c) {
        Ut(i, ve(i), n, c);
      }), tF = pr(function(n, i, o, c) {
        Ut(i, Ae(i), n, c);
      }), nF = Rt(Mu);
      function rF(n, i) {
        var o = Qr(n);
        return i == null ? o : xf(o, i);
      }
      var iF = BA(function(n, i) {
        n = KA(n);
        var o = -1, c = i.length, h = c > 2 ? i[2] : t;
        for (h && we(i[0], i[1], h) && (c = 1); ++o < c; )
          for (var d = i[o], U = ve(d), F = -1, E = U.length; ++F < E; ) {
            var T = U[F], S = n[T];
            (S === t || rt(S, gr[T]) && !IA.call(n, T)) && (n[T] = d[T]);
          }
        return n;
      }), sF = BA(function(n) {
        return n.push(t, gB), xe(jB, t, n);
      });
      function oF(n, i) {
        return lf(n, rA(i, 3), Ct);
      }
      function aF(n, i) {
        return lf(n, rA(i, 3), Ru);
      }
      function uF(n, i) {
        return n == null ? n : Ou(n, rA(i, 3), ve);
      }
      function cF(n, i) {
        return n == null ? n : Sf(n, rA(i, 3), ve);
      }
      function lF(n, i) {
        return n && Ct(n, rA(i, 3));
      }
      function fF(n, i) {
        return n && Ru(n, rA(i, 3));
      }
      function BF(n) {
        return n == null ? [] : Zs(n, Ae(n));
      }
      function hF(n) {
        return n == null ? [] : Zs(n, ve(n));
      }
      function dc(n, i, o) {
        var c = n == null ? t : Mn(n, i);
        return c === t ? o : c;
      }
      function gF(n, i) {
        return n != null && QB(n, i, OQ);
      }
      function Qc(n, i) {
        return n != null && QB(n, i, RQ);
      }
      var wF = cB(function(n, i, o) {
        i != null && typeof i.toString != "function" && (i = Ds.call(i)), n[i] = o;
      }, Cc(me)), dF = cB(function(n, i, o) {
        i != null && typeof i.toString != "function" && (i = Ds.call(i)), IA.call(n, i) ? n[i].push(o) : n[i] = [o];
      }, rA), QF = BA(di);
      function Ae(n) {
        return Fe(n) ? If(n) : Pu(n);
      }
      function ve(n) {
        return Fe(n) ? If(n, !0) : ZQ(n);
      }
      function pF(n, i) {
        var o = {};
        return i = rA(i, 3), Ct(n, function(c, h, d) {
          Mt(o, i(c, h, d), c);
        }), o;
      }
      function CF(n, i) {
        var o = {};
        return i = rA(i, 3), Ct(n, function(c, h, d) {
          Mt(o, h, i(c, h, d));
        }), o;
      }
      var UF = pr(function(n, i, o) {
        $s(n, i, o);
      }), jB = pr(function(n, i, o, c) {
        $s(n, i, o, c);
      }), FF = Rt(function(n, i) {
        var o = {};
        if (n == null)
          return o;
        var c = !1;
        i = MA(i, function(d) {
          return d = ln(d, n), c || (c = d.length > 1), d;
        }), Ut(n, nc(n), o), c && (o = Xe(o, Q | C | v, wp));
        for (var h = i.length; h--; )
          Zu(o, i[h]);
        return o;
      });
      function vF(n, i) {
        return Ah(n, lo(rA(i)));
      }
      var mF = Rt(function(n, i) {
        return n == null ? {} : zQ(n, i);
      });
      function Ah(n, i) {
        if (n == null)
          return {};
        var o = MA(nc(n), function(c) {
          return [c];
        });
        return i = rA(i), Xf(n, o, function(c, h) {
          return i(c, h[0]);
        });
      }
      function EF(n, i, o) {
        i = ln(i, n);
        var c = -1, h = i.length;
        for (h || (h = 1, n = t); ++c < h; ) {
          var d = n == null ? t : n[Ft(i[c])];
          d === t && (c = h, d = o), n = Gt(d) ? d.call(n) : d;
        }
        return n;
      }
      function yF(n, i, o) {
        return n == null ? n : pi(n, i, o);
      }
      function HF(n, i, o, c) {
        return c = typeof c == "function" ? c : t, n == null ? n : pi(n, i, o, c);
      }
      var eh = BB(Ae), th = BB(ve);
      function IF(n, i, o) {
        var c = cA(n), h = c || Bn(n) || Fr(n);
        if (i = rA(i, 4), o == null) {
          var d = n && n.constructor;
          h ? o = c ? new d() : [] : GA(n) ? o = Gt(d) ? Qr(Rs(n)) : {} : o = {};
        }
        return (h ? Ve : Ct)(n, function(U, F, E) {
          return i(o, U, F, E);
        }), o;
      }
      function _F(n, i) {
        return n == null ? !0 : Zu(n, i);
      }
      function xF(n, i, o) {
        return n == null ? n : $f(n, i, qu(o));
      }
      function bF(n, i, o, c) {
        return c = typeof c == "function" ? c : t, n == null ? n : $f(n, i, qu(o), c);
      }
      function vr(n) {
        return n == null ? [] : xu(n, Ae(n));
      }
      function LF(n) {
        return n == null ? [] : xu(n, ve(n));
      }
      function KF(n, i, o) {
        return o === t && (o = i, i = t), o !== t && (o = Ye(o), o = o === o ? o : 0), i !== t && (i = Ye(i), i = i === i ? i : 0), Dn(Ye(n), i, o);
      }
      function TF(n, i, o) {
        return i = Vt(i), o === t ? (o = i, i = 0) : o = Vt(o), n = Ye(n), NQ(n, i, o);
      }
      function SF(n, i, o) {
        if (o && typeof o != "boolean" && we(n, i, o) && (i = o = t), o === t && (typeof i == "boolean" ? (o = i, i = t) : typeof n == "boolean" && (o = n, n = t)), n === t && i === t ? (n = 0, i = 1) : (n = Vt(n), i === t ? (i = n, n = 0) : i = Vt(i)), n > i) {
          var c = n;
          n = i, i = c;
        }
        if (o || n % 1 || i % 1) {
          var h = yf();
          return ce(n + h * (i - n + $A("1e-" + ((h + "").length - 1))), i);
        }
        return Wu(n, i);
      }
      var DF = Cr(function(n, i, o) {
        return i = i.toLowerCase(), n + (o ? nh(i) : i);
      });
      function nh(n) {
        return pc(yA(n).toLowerCase());
      }
      function rh(n) {
        return n = yA(n), n && n.replace(tn, y0).replace(Cu, "");
      }
      function MF(n, i, o) {
        n = yA(n), i = Le(i);
        var c = n.length;
        o = o === t ? c : Dn(lA(o), 0, c);
        var h = o;
        return o -= i.length, o >= 0 && n.slice(o, h) == i;
      }
      function OF(n) {
        return n = yA(n), n && Xa.test(n) ? n.replace(en, H0) : n;
      }
      function RF(n) {
        return n = yA(n), n && Ya.test(n) ? n.replace(Ai, "\\$&") : n;
      }
      var NF = Cr(function(n, i, o) {
        return n + (o ? "-" : "") + i.toLowerCase();
      }), GF = Cr(function(n, i, o) {
        return n + (o ? " " : "") + i.toLowerCase();
      }), VF = oB("toLowerCase");
      function PF(n, i, o) {
        n = yA(n), i = lA(i);
        var c = i ? Br(n) : 0;
        if (!i || c >= i)
          return n;
        var h = (i - c) / 2;
        return to(Ps(h), o) + n + to(Vs(h), o);
      }
      function kF(n, i, o) {
        n = yA(n), i = lA(i);
        var c = i ? Br(n) : 0;
        return i && c < i ? n + to(i - c, o) : n;
      }
      function XF(n, i, o) {
        n = yA(n), i = lA(i);
        var c = i ? Br(n) : 0;
        return i && c < i ? to(i - c, o) + n : n;
      }
      function WF(n, i, o) {
        return o || i == null ? i = 0 : i && (i = +i), j0(yA(n).replace(ei, ""), i || 0);
      }
      function JF(n, i, o) {
        return (o ? we(n, i, o) : i === t) ? i = 1 : i = lA(i), Ju(yA(n), i);
      }
      function YF() {
        var n = arguments, i = yA(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var ZF = Cr(function(n, i, o) {
        return n + (o ? "_" : "") + i.toLowerCase();
      });
      function $F(n, i, o) {
        return o && typeof o != "number" && we(n, i, o) && (i = o = t), o = o === t ? aA : o >>> 0, o ? (n = yA(n), n && (typeof i == "string" || i != null && !wc(i)) && (i = Le(i), !i && fr(n)) ? fn(tt(n), 0, o) : n.split(i, o)) : [];
      }
      var zF = Cr(function(n, i, o) {
        return n + (o ? " " : "") + pc(i);
      });
      function qF(n, i, o) {
        return n = yA(n), o = o == null ? 0 : Dn(lA(o), 0, n.length), i = Le(i), n.slice(o, o + i.length) == i;
      }
      function jF(n, i, o) {
        var c = w.templateSettings;
        o && we(n, i, o) && (i = t), n = yA(n), i = ho({}, i, c, hB);
        var h = ho({}, i.imports, c.imports, hB), d = Ae(h), U = xu(h, d), F, E, T = 0, S = i.interpolate || ir, R = "__p += '", X = Lu(
          (i.escape || ir).source + "|" + S.source + "|" + (S === cs ? eu : ir).source + "|" + (i.evaluate || ir).source + "|$",
          "g"
        ), tA = "//# sourceURL=" + (IA.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++oi + "]") + `
`;
        n.replace(X, function(sA, wA, pA, Te, de, Se) {
          return pA || (pA = Te), R += n.slice(T, Se).replace(ou, I0), wA && (F = !0, R += `' +
__e(` + wA + `) +
'`), de && (E = !0, R += `';
` + de + `;
__p += '`), pA && (R += `' +
((__t = (` + pA + `)) == null ? '' : __t) +
'`), T = Se + sA.length, sA;
        }), R += `';
`;
        var iA = IA.call(i, "variable") && i.variable;
        if (!iA)
          R = `with (obj) {
` + R + `
}
`;
        else if (ja.test(iA))
          throw new uA(f);
        R = (E ? R.replace(_n, "") : R).replace(qr, "$1").replace(jr, "$1;"), R = "function(" + (iA || "obj") + `) {
` + (iA ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (F ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + R + `return __p
}`;
        var fA = sh(function() {
          return mA(d, tA + "return " + R).apply(t, U);
        });
        if (fA.source = R, gc(fA))
          throw fA;
        return fA;
      }
      function Av(n) {
        return yA(n).toLowerCase();
      }
      function ev(n) {
        return yA(n).toUpperCase();
      }
      function tv(n, i, o) {
        if (n = yA(n), n && (o || i === t))
          return gf(n);
        if (!n || !(i = Le(i)))
          return n;
        var c = tt(n), h = tt(i), d = wf(c, h), U = df(c, h) + 1;
        return fn(c, d, U).join("");
      }
      function nv(n, i, o) {
        if (n = yA(n), n && (o || i === t))
          return n.slice(0, pf(n) + 1);
        if (!n || !(i = Le(i)))
          return n;
        var c = tt(n), h = df(c, tt(i)) + 1;
        return fn(c, 0, h).join("");
      }
      function rv(n, i, o) {
        if (n = yA(n), n && (o || i === t))
          return n.replace(ei, "");
        if (!n || !(i = Le(i)))
          return n;
        var c = tt(n), h = wf(c, tt(i));
        return fn(c, h).join("");
      }
      function iv(n, i) {
        var o = gA, c = UA;
        if (GA(i)) {
          var h = "separator" in i ? i.separator : h;
          o = "length" in i ? lA(i.length) : o, c = "omission" in i ? Le(i.omission) : c;
        }
        n = yA(n);
        var d = n.length;
        if (fr(n)) {
          var U = tt(n);
          d = U.length;
        }
        if (o >= d)
          return n;
        var F = o - Br(c);
        if (F < 1)
          return c;
        var E = U ? fn(U, 0, F).join("") : n.slice(0, F);
        if (h === t)
          return E + c;
        if (U && (F += E.length - F), wc(h)) {
          if (n.slice(F).search(h)) {
            var T, S = E;
            for (h.global || (h = Lu(h.source, yA(Lt.exec(h)) + "g")), h.lastIndex = 0; T = h.exec(S); )
              var R = T.index;
            E = E.slice(0, R === t ? F : R);
          }
        } else if (n.indexOf(Le(h), F) != F) {
          var X = E.lastIndexOf(h);
          X > -1 && (E = E.slice(0, X));
        }
        return E + c;
      }
      function sv(n) {
        return n = yA(n), n && ka.test(n) ? n.replace(rr, S0) : n;
      }
      var ov = Cr(function(n, i, o) {
        return n + (o ? " " : "") + i.toUpperCase();
      }), pc = oB("toUpperCase");
      function ih(n, i, o) {
        return n = yA(n), i = o ? t : i, i === t ? x0(n) ? O0(n) : U0(n) : n.match(i) || [];
      }
      var sh = BA(function(n, i) {
        try {
          return xe(n, t, i);
        } catch (o) {
          return gc(o) ? o : new uA(o);
        }
      }), av = Rt(function(n, i) {
        return Ve(i, function(o) {
          o = Ft(o), Mt(n, o, Bc(n[o], n));
        }), n;
      });
      function uv(n) {
        var i = n == null ? 0 : n.length, o = rA();
        return n = i ? MA(n, function(c) {
          if (typeof c[1] != "function")
            throw new Pe(u);
          return [o(c[0]), c[1]];
        }) : [], BA(function(c) {
          for (var h = -1; ++h < i; ) {
            var d = n[h];
            if (xe(d[0], this, c))
              return xe(d[1], this, c);
          }
        });
      }
      function cv(n) {
        return SQ(Xe(n, Q));
      }
      function Cc(n) {
        return function() {
          return n;
        };
      }
      function lv(n, i) {
        return n == null || n !== n ? i : n;
      }
      var fv = uB(), Bv = uB(!0);
      function me(n) {
        return n;
      }
      function Uc(n) {
        return Rf(typeof n == "function" ? n : Xe(n, Q));
      }
      function hv(n) {
        return Gf(Xe(n, Q));
      }
      function gv(n, i) {
        return Vf(n, Xe(i, Q));
      }
      var wv = BA(function(n, i) {
        return function(o) {
          return di(o, n, i);
        };
      }), dv = BA(function(n, i) {
        return function(o) {
          return di(n, o, i);
        };
      });
      function Fc(n, i, o) {
        var c = Ae(i), h = Zs(i, c);
        o == null && !(GA(i) && (h.length || !c.length)) && (o = i, i = n, n = this, h = Zs(i, Ae(i)));
        var d = !(GA(o) && "chain" in o) || !!o.chain, U = Gt(n);
        return Ve(h, function(F) {
          var E = i[F];
          n[F] = E, U && (n.prototype[F] = function() {
            var T = this.__chain__;
            if (d || T) {
              var S = n(this.__wrapped__), R = S.__actions__ = Ue(this.__actions__);
              return R.push({ func: E, args: arguments, thisArg: n }), S.__chain__ = T, S;
            }
            return E.apply(n, sn([this.value()], arguments));
          });
        }), n;
      }
      function Qv() {
        return YA._ === this && (YA._ = k0), this;
      }
      function vc() {
      }
      function pv(n) {
        return n = lA(n), BA(function(i) {
          return Pf(i, n);
        });
      }
      var Cv = Ac(MA), Uv = Ac(cf), Fv = Ac(Eu);
      function oh(n) {
        return oc(n) ? yu(Ft(n)) : qQ(n);
      }
      function vv(n) {
        return function(i) {
          return n == null ? t : Mn(n, i);
        };
      }
      var mv = lB(), Ev = lB(!0);
      function mc() {
        return [];
      }
      function Ec() {
        return !1;
      }
      function yv() {
        return {};
      }
      function Hv() {
        return "";
      }
      function Iv() {
        return !0;
      }
      function _v(n, i) {
        if (n = lA(n), n < 1 || n > AA)
          return [];
        var o = aA, c = ce(n, aA);
        i = rA(i), n -= aA;
        for (var h = _u(c, i); ++o < n; )
          i(o);
        return h;
      }
      function xv(n) {
        return cA(n) ? MA(n, Ft) : Ke(n) ? [n] : Ue(HB(yA(n)));
      }
      function bv(n) {
        var i = ++V0;
        return yA(n) + i;
      }
      var Lv = eo(function(n, i) {
        return n + i;
      }, 0), Kv = ec("ceil"), Tv = eo(function(n, i) {
        return n / i;
      }, 1), Sv = ec("floor");
      function Dv(n) {
        return n && n.length ? Ys(n, me, Nu) : t;
      }
      function Mv(n, i) {
        return n && n.length ? Ys(n, rA(i, 2), Nu) : t;
      }
      function Ov(n) {
        return Bf(n, me);
      }
      function Rv(n, i) {
        return Bf(n, rA(i, 2));
      }
      function Nv(n) {
        return n && n.length ? Ys(n, me, ku) : t;
      }
      function Gv(n, i) {
        return n && n.length ? Ys(n, rA(i, 2), ku) : t;
      }
      var Vv = eo(function(n, i) {
        return n * i;
      }, 1), Pv = ec("round"), kv = eo(function(n, i) {
        return n - i;
      }, 0);
      function Xv(n) {
        return n && n.length ? Iu(n, me) : 0;
      }
      function Wv(n, i) {
        return n && n.length ? Iu(n, rA(i, 2)) : 0;
      }
      return w.after = hU, w.ary = OB, w.assign = eF, w.assignIn = qB, w.assignInWith = ho, w.assignWith = tF, w.at = nF, w.before = RB, w.bind = Bc, w.bindAll = av, w.bindKey = NB, w.castArray = yU, w.chain = SB, w.chunk = Sp, w.compact = Dp, w.concat = Mp, w.cond = uv, w.conforms = cv, w.constant = Cc, w.countBy = XC, w.create = rF, w.curry = GB, w.curryRight = VB, w.debounce = PB, w.defaults = iF, w.defaultsDeep = sF, w.defer = gU, w.delay = wU, w.difference = Op, w.differenceBy = Rp, w.differenceWith = Np, w.drop = Gp, w.dropRight = Vp, w.dropRightWhile = Pp, w.dropWhile = kp, w.fill = Xp, w.filter = JC, w.flatMap = $C, w.flatMapDeep = zC, w.flatMapDepth = qC, w.flatten = bB, w.flattenDeep = Wp, w.flattenDepth = Jp, w.flip = dU, w.flow = fv, w.flowRight = Bv, w.fromPairs = Yp, w.functions = BF, w.functionsIn = hF, w.groupBy = jC, w.initial = $p, w.intersection = zp, w.intersectionBy = qp, w.intersectionWith = jp, w.invert = wF, w.invertBy = dF, w.invokeMap = eU, w.iteratee = Uc, w.keyBy = tU, w.keys = Ae, w.keysIn = ve, w.map = ao, w.mapKeys = pF, w.mapValues = CF, w.matches = hv, w.matchesProperty = gv, w.memoize = co, w.merge = UF, w.mergeWith = jB, w.method = wv, w.methodOf = dv, w.mixin = Fc, w.negate = lo, w.nthArg = pv, w.omit = FF, w.omitBy = vF, w.once = QU, w.orderBy = nU, w.over = Cv, w.overArgs = pU, w.overEvery = Uv, w.overSome = Fv, w.partial = hc, w.partialRight = kB, w.partition = rU, w.pick = mF, w.pickBy = Ah, w.property = oh, w.propertyOf = vv, w.pull = nC, w.pullAll = KB, w.pullAllBy = rC, w.pullAllWith = iC, w.pullAt = sC, w.range = mv, w.rangeRight = Ev, w.rearg = CU, w.reject = oU, w.remove = oC, w.rest = UU, w.reverse = lc, w.sampleSize = uU, w.set = yF, w.setWith = HF, w.shuffle = cU, w.slice = aC, w.sortBy = BU, w.sortedUniq = gC, w.sortedUniqBy = wC, w.split = $F, w.spread = FU, w.tail = dC, w.take = QC, w.takeRight = pC, w.takeRightWhile = CC, w.takeWhile = UC, w.tap = DC, w.throttle = vU, w.thru = oo, w.toArray = ZB, w.toPairs = eh, w.toPairsIn = th, w.toPath = xv, w.toPlainObject = zB, w.transform = IF, w.unary = mU, w.union = FC, w.unionBy = vC, w.unionWith = mC, w.uniq = EC, w.uniqBy = yC, w.uniqWith = HC, w.unset = _F, w.unzip = fc, w.unzipWith = TB, w.update = xF, w.updateWith = bF, w.values = vr, w.valuesIn = LF, w.without = IC, w.words = ih, w.wrap = EU, w.xor = _C, w.xorBy = xC, w.xorWith = bC, w.zip = LC, w.zipObject = KC, w.zipObjectDeep = TC, w.zipWith = SC, w.entries = eh, w.entriesIn = th, w.extend = qB, w.extendWith = ho, Fc(w, w), w.add = Lv, w.attempt = sh, w.camelCase = DF, w.capitalize = nh, w.ceil = Kv, w.clamp = KF, w.clone = HU, w.cloneDeep = _U, w.cloneDeepWith = xU, w.cloneWith = IU, w.conformsTo = bU, w.deburr = rh, w.defaultTo = lv, w.divide = Tv, w.endsWith = MF, w.eq = rt, w.escape = OF, w.escapeRegExp = RF, w.every = WC, w.find = YC, w.findIndex = _B, w.findKey = oF, w.findLast = ZC, w.findLastIndex = xB, w.findLastKey = aF, w.floor = Sv, w.forEach = DB, w.forEachRight = MB, w.forIn = uF, w.forInRight = cF, w.forOwn = lF, w.forOwnRight = fF, w.get = dc, w.gt = LU, w.gte = KU, w.has = gF, w.hasIn = Qc, w.head = LB, w.identity = me, w.includes = AU, w.indexOf = Zp, w.inRange = TF, w.invoke = QF, w.isArguments = Nn, w.isArray = cA, w.isArrayBuffer = TU, w.isArrayLike = Fe, w.isArrayLikeObject = kA, w.isBoolean = SU, w.isBuffer = Bn, w.isDate = DU, w.isElement = MU, w.isEmpty = OU, w.isEqual = RU, w.isEqualWith = NU, w.isError = gc, w.isFinite = GU, w.isFunction = Gt, w.isInteger = XB, w.isLength = fo, w.isMap = WB, w.isMatch = VU, w.isMatchWith = PU, w.isNaN = kU, w.isNative = XU, w.isNil = JU, w.isNull = WU, w.isNumber = JB, w.isObject = GA, w.isObjectLike = VA, w.isPlainObject = vi, w.isRegExp = wc, w.isSafeInteger = YU, w.isSet = YB, w.isString = Bo, w.isSymbol = Ke, w.isTypedArray = Fr, w.isUndefined = ZU, w.isWeakMap = $U, w.isWeakSet = zU, w.join = AC, w.kebabCase = NF, w.last = Je, w.lastIndexOf = eC, w.lowerCase = GF, w.lowerFirst = VF, w.lt = qU, w.lte = jU, w.max = Dv, w.maxBy = Mv, w.mean = Ov, w.meanBy = Rv, w.min = Nv, w.minBy = Gv, w.stubArray = mc, w.stubFalse = Ec, w.stubObject = yv, w.stubString = Hv, w.stubTrue = Iv, w.multiply = Vv, w.nth = tC, w.noConflict = Qv, w.noop = vc, w.now = uo, w.pad = PF, w.padEnd = kF, w.padStart = XF, w.parseInt = WF, w.random = SF, w.reduce = iU, w.reduceRight = sU, w.repeat = JF, w.replace = YF, w.result = EF, w.round = Pv, w.runInContext = m, w.sample = aU, w.size = lU, w.snakeCase = ZF, w.some = fU, w.sortedIndex = uC, w.sortedIndexBy = cC, w.sortedIndexOf = lC, w.sortedLastIndex = fC, w.sortedLastIndexBy = BC, w.sortedLastIndexOf = hC, w.startCase = zF, w.startsWith = qF, w.subtract = kv, w.sum = Xv, w.sumBy = Wv, w.template = jF, w.times = _v, w.toFinite = Vt, w.toInteger = lA, w.toLength = $B, w.toLower = Av, w.toNumber = Ye, w.toSafeInteger = AF, w.toString = yA, w.toUpper = ev, w.trim = tv, w.trimEnd = nv, w.trimStart = rv, w.truncate = iv, w.unescape = sv, w.uniqueId = bv, w.upperCase = ov, w.upperFirst = pc, w.each = DB, w.eachRight = MB, w.first = LB, Fc(w, function() {
        var n = {};
        return Ct(w, function(i, o) {
          IA.call(w.prototype, o) || (n[o] = i);
        }), n;
      }(), { chain: !1 }), w.VERSION = r, Ve(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        w[n].placeholder = w;
      }), Ve(["drop", "take"], function(n, i) {
        dA.prototype[n] = function(o) {
          o = o === t ? 1 : qA(lA(o), 0);
          var c = this.__filtered__ && !i ? new dA(this) : this.clone();
          return c.__filtered__ ? c.__takeCount__ = ce(o, c.__takeCount__) : c.__views__.push({
            size: ce(o, aA),
            type: n + (c.__dir__ < 0 ? "Right" : "")
          }), c;
        }, dA.prototype[n + "Right"] = function(o) {
          return this.reverse()[n](o).reverse();
        };
      }), Ve(["filter", "map", "takeWhile"], function(n, i) {
        var o = i + 1, c = o == y || o == O;
        dA.prototype[n] = function(h) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: rA(h, 3),
            type: o
          }), d.__filtered__ = d.__filtered__ || c, d;
        };
      }), Ve(["head", "last"], function(n, i) {
        var o = "take" + (i ? "Right" : "");
        dA.prototype[n] = function() {
          return this[o](1).value()[0];
        };
      }), Ve(["initial", "tail"], function(n, i) {
        var o = "drop" + (i ? "" : "Right");
        dA.prototype[n] = function() {
          return this.__filtered__ ? new dA(this) : this[o](1);
        };
      }), dA.prototype.compact = function() {
        return this.filter(me);
      }, dA.prototype.find = function(n) {
        return this.filter(n).head();
      }, dA.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, dA.prototype.invokeMap = BA(function(n, i) {
        return typeof n == "function" ? new dA(this) : this.map(function(o) {
          return di(o, n, i);
        });
      }), dA.prototype.reject = function(n) {
        return this.filter(lo(rA(n)));
      }, dA.prototype.slice = function(n, i) {
        n = lA(n);
        var o = this;
        return o.__filtered__ && (n > 0 || i < 0) ? new dA(o) : (n < 0 ? o = o.takeRight(-n) : n && (o = o.drop(n)), i !== t && (i = lA(i), o = i < 0 ? o.dropRight(-i) : o.take(i - n)), o);
      }, dA.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, dA.prototype.toArray = function() {
        return this.take(aA);
      }, Ct(dA.prototype, function(n, i) {
        var o = /^(?:filter|find|map|reject)|While$/.test(i), c = /^(?:head|last)$/.test(i), h = w[c ? "take" + (i == "last" ? "Right" : "") : i], d = c || /^find/.test(i);
        h && (w.prototype[i] = function() {
          var U = this.__wrapped__, F = c ? [1] : arguments, E = U instanceof dA, T = F[0], S = E || cA(U), R = function(wA) {
            var pA = h.apply(w, sn([wA], F));
            return c && X ? pA[0] : pA;
          };
          S && o && typeof T == "function" && T.length != 1 && (E = S = !1);
          var X = this.__chain__, tA = !!this.__actions__.length, iA = d && !X, fA = E && !tA;
          if (!d && S) {
            U = fA ? U : new dA(this);
            var sA = n.apply(U, F);
            return sA.__actions__.push({ func: oo, args: [R], thisArg: t }), new ke(sA, X);
          }
          return iA && fA ? n.apply(this, F) : (sA = this.thru(R), iA ? c ? sA.value()[0] : sA.value() : sA);
        });
      }), Ve(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Ks[n], o = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", c = /^(?:pop|shift)$/.test(n);
        w.prototype[n] = function() {
          var h = arguments;
          if (c && !this.__chain__) {
            var d = this.value();
            return i.apply(cA(d) ? d : [], h);
          }
          return this[o](function(U) {
            return i.apply(cA(U) ? U : [], h);
          });
        };
      }), Ct(dA.prototype, function(n, i) {
        var o = w[i];
        if (o) {
          var c = o.name + "";
          IA.call(dr, c) || (dr[c] = []), dr[c].push({ name: i, func: o });
        }
      }), dr[Ao(t, b).name] = [{
        name: "wrapper",
        func: t
      }], dA.prototype.clone = sQ, dA.prototype.reverse = oQ, dA.prototype.value = aQ, w.prototype.at = MC, w.prototype.chain = OC, w.prototype.commit = RC, w.prototype.next = NC, w.prototype.plant = VC, w.prototype.reverse = PC, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = kC, w.prototype.first = w.prototype.head, ci && (w.prototype[ci] = GC), w;
    }, hr = R0();
    pt ? ((pt.exports = hr)._ = hr, Qt._ = hr) : YA._ = hr;
  }).call(Jt);
})(va, va.exports);
var jo = va.exports;
class hL {
  constructor(e = 20) {
    this.length = e, this.snapshots = [], this.cursor = -1;
  }
  get hasPrev() {
    return this.cursor > 0;
  }
  get hasNext() {
    return this.snapshots.length > this.cursor + 1;
  }
  snap(e) {
    const t = jo.cloneDeep(e);
    for (; this.cursor < this.snapshots.length - 1; )
      this.snapshots.pop();
    this.snapshots.push(t), this.snapshots.length > this.length && this.snapshots.shift(), this.cursor = this.snapshots.length - 1;
  }
  prev() {
    return this.hasPrev ? (this.cursor -= 1, jo.cloneDeep(this.snapshots[this.cursor])) : null;
  }
  next() {
    return this.hasNext ? (this.cursor += 1, jo.cloneDeep(this.snapshots[this.cursor])) : null;
  }
}
const ts = new hL(), zd = bA(!1), qd = bA(!1), gL = () => {
  zd.value = ts.hasPrev, qd.value = ts.hasNext;
}, wL = (A, e) => {
  const t = -e / 2, r = -A / 2, s = A / 2, a = e / 2;
  return `M${a},${s}H${s}V${a}H${r}V${s}H${t}V${r}H${r}V${t}H${s}V${r}H${a}V${s}Z`;
}, jd = (A) => {
  const e = A.split(`
`);
  return e.length > 1 && e[e.length - 1] === "" && e.pop(), e;
}, dL = (A, e) => {
  k4(A).then((t) => {
    const r = t.toDataURL(), s = open();
    s && (s.document.write(`<img src='${r}'>`), s.document.title = e, s.document.close());
  });
}, A0 = (A, e) => yw().duration(A).ease(e), QL = (A, e) => {
  const { pageX: t, pageY: r } = e, s = A.getBoundingClientRect(), a = s.left + window.pageXOffset, u = s.top + window.pageYOffset;
  return {
    left: t - a,
    top: r - u
  };
};
function pL() {
  var A, e;
  return (e = (A = this.parentNode) == null ? void 0 : A.parentNode) == null ? void 0 : e.parentNode;
}
function e0(A) {
  const e = A instanceof SVGGElement ? A : document.querySelector(`g[data-id='${Na(A)}']`), t = document.getElementsByClassName(oA.selected)[0];
  if (e)
    t ? t !== e ? (t.classList.remove(oA.selected), e.classList.add(oA.selected)) : TA.emit("edit-flag", !0) : e.classList.add(oA.selected);
  else
    throw new Error("selectGNode failed");
}
function st() {
  return ie(`.${oA.selected}`).data()[0];
}
const CL = (A) => {
  const { asstSvg: e } = pe;
  if (!e)
    throw new Error("asstSvg undefined");
  const t = jd(A), r = e.append("text");
  r.selectAll("tspan").data(t).enter().append("tspan").text((a) => a).attr("x", 0);
  const s = r.node().getBBox();
  return r.remove(), {
    width: Math.max(s.width, 22),
    height: Math.max(s.height, 22) * t.length
  };
}, t0 = (A, e, t, r = 0) => {
  const s = A0(r, jg);
  e.px = t[0], e.py = t[1], ie(A).transition(s).attr("transform", r0), ie(`g[data-id='${Na(e)}'] > path`).transition(s).attr("d", (a) => ma(a));
}, UL = () => {
  const { svg: A } = pe;
  if (!A)
    return;
  const e = DA.data;
  os.translateTo(A, 0 + e.width / 2, 0 + e.height / 2);
}, Kl = () => {
  const { svg: A } = pe;
  if (!A || !Mr.value || !ct.value)
    return;
  const e = Mr.value.getBBox(), t = ct.value.getBoundingClientRect(), r = Math.min(t.width / e.width, t.height / e.height), s = { x: t.width / 2, y: t.height / 2 }, a = { x: e.width * r / 2, y: e.height * r / 2 }, u = _a.translate(
    -e.x * r + s.x - a.x,
    -e.y * r + s.y - a.y
  ).scale(r);
  os.transform(A, u);
}, n0 = (A) => {
  const { svg: e } = pe;
  if (e && ct.value) {
    const { k: t } = Fa.value, r = A.getBoundingClientRect(), { x: s, y: a, width: u, height: f } = ct.value.getBoundingClientRect(), l = r.x - s, B = l + r.width, g = r.y - a, Q = g + r.height, C = 2;
    let v = 0, H = 0;
    l < 0 && (v = -l / t + C), (r.width > u || B > u) && (v = -(B - u) / t - C), g < 0 && (H = -g / t + C), (r.height > f || Q > f) && (H = -(Q - f) / t - C), os.translateBy(e, v, H);
  }
}, xg = (A) => {
  const { svg: e } = pe;
  e && os.scaleBy(e, 1.1);
}, FL = () => {
  mn.value && dL(mn.value, DA.data.name);
}, vL = () => {
  const A = ts.next();
  A && (DA.data = A, _e(!1));
}, mL = () => {
  const A = ts.prev();
  A && (DA.data = A, _e(!1));
}, EL = () => {
  ut.value && (BL.observe(ut.value), ut.value.addEventListener("blur", $4), ut.value.addEventListener("mousedown", (A) => A.stopPropagation()));
}, yL = (A) => {
  let e;
  try {
    return e = JSON.parse(A), "name" in e ? e : !1;
  } catch {
    return !1;
  }
}, ef = () => 3, tf = (A) => {
  const e = ["node"];
  return A && e.push(`depth-${A.depth}`), e;
}, HL = (A) => {
  const e = tf(A);
  return A && (A.depth === 0 && e.push(oA.root), A.collapse ? e.push(oA.collapse) : (!A.children || A.children.length === 0) && e.push("leaf")), e;
}, IL = (A) => {
  const e = [oA["add-btn"]];
  return A.collapse && e.push(oA.hidden), e;
}, r0 = (A) => `translate(${A.dx + A.px},${A.dy + A.py})`, Na = (A) => A.id, i0 = (A) => {
  const e = jd(A.name), t = A.height / e.length;
  return e.map((r) => ({ name: r, height: t }));
}, ma = (A) => {
  let e = 0, t = 0;
  const r = Math.max(je - 3, 0);
  let s = A.width + r;
  const a = ef();
  let u = a;
  const { parent: f } = A;
  f && (e = f.width, t = f.height, f.depth === 0 && (Qa || (e /= 2), t /= 2, u = 0)), A.left && (f && (f.depth !== 0 ? e = -e : Qa && (e = 0)), s = -s);
  const l = [-A.dx + e - A.px, -A.dy + t + u - A.py], B = [0, A.height + a];
  return `${Wd({ source: l, target: B })}L${s},${B[1]}`;
}, _L = (A, e) => {
  const t = A.depth === 0 ? A.height / 2 : A.height + ef();
  let r = A.width + e + Yd / 2 + Vr.margin;
  return A.left && (r = -r), `translate(${r},${t})`;
}, xL = (A, e) => {
  const r = A.depth === 0 ? A.height / 2 : A.height + ef();
  let s = A.width + e + kn.width / 2 + 4;
  return A.left && (s = -s), `translate(${s},${r})`;
}, s0 = (A, e, t, r, s) => {
  A ? (Tg(e, Kr), bg(t, Kr, fL), Lg(r, Kr), s && Kg(s, Kr)) : (Tg(e, je), bg(t, je), Lg(r, je), s && Kg(s, je));
}, o0 = (A, e) => {
  const t = A.attr("class", (s) => HL(s).join(" ")).attr("data-id", Na);
  (e ? t.transition(e) : t).attr("transform", r0);
}, a0 = (A, e) => {
  (e ? A.transition(e) : A).attr("transform", (r) => `translate(${r.left ? -r.width : 0},0)`);
}, nf = (A) => {
  A.attr("alignment-baseline", "text-before-edge").text((e) => e.name || " ").attr("x", 0).attr("dy", (e, t) => t ? e.height : 0);
}, bL = (A) => {
  const { side: e, padding: t } = Vr, r = 4, s = -t - e / 2, a = e + t * 2;
  A.attr("x", s).attr("y", s).attr("rx", r).attr("ry", r).attr("width", a).attr("height", a);
}, LL = (A) => {
  A.attr("x", -kn.width / 2).attr("y", -kn.height / 2).attr("width", kn.width).attr("height", kn.height).attr("rx", kn.radius).attr("ry", kn.radius).attr("stroke", (e) => e.color || "grey").attr("fill", (e) => e.color || "grey");
}, qc = (A, e) => {
  A.attr("cx", e).attr("cy", 0).attr("r", 1);
}, bg = (A, e, t = 4) => {
  A.attr("x", (r) => -e - (r.left ? r.width : 0)).attr("y", -e).attr("rx", t).attr("ry", t).attr("width", (r) => r.width + e * 2).attr("height", (r) => r.height + e * 2);
}, Lg = (A, e) => {
  A.attr("class", oA["expand-btn"]).attr("transform", (t) => xL(t, e)).style("color", (t) => t.color);
}, Kg = (A, e) => {
  A.attr("class", (t) => IL(t).join(" ")).attr("transform", (t) => _L(t, e));
}, Tg = (A, e) => {
  const t = Yd + Vr.margin, r = e * 2;
  A.attr("class", oA.trigger).attr("x", (s) => -e - (s.left ? s.width + t : 0)).attr("y", -e).attr("width", (s) => s.width + r + t).attr("height", (s) => s.height + r);
}, u0 = (A, e) => {
  const t = A.attr("stroke", (r) => r.color).attr("stroke-width", Ca);
  if (e) {
    const r = t.transition(e);
    pa.value ? r.attrTween("d", KL) : r.attr("d", ma);
  } else
    t.attr("d", ma);
};
function KL(A, e, t) {
  const s = ma(A), a = t[e], u = a.cloneNode(), f = a.getTotalLength();
  u.setAttribute("d", s);
  const l = u.getTotalLength(), B = [0], g = 10 / Math.max(f, l);
  let Q = 0;
  for (; (Q += g) < 1; ) B.push(Q);
  B.push(1);
  const C = B.map((v) => {
    const H = a.getPointAtLength(v * f), K = u.getPointAtLength(v * l);
    return Vl([H.x, H.y], [K.x, K.y]);
  });
  return (v) => v < 1 ? "M" + C.map((H) => H(v)).join("L") : s;
}
const TL = (A) => {
  const e = A.append("tspan");
  return nf(e), e;
}, SL = (A) => (nf(A), A), DL = (A) => {
  const e = A.append("g");
  return bL(e.append("rect")), e.append("path").attr("d", wL(2, Vr.side)), e;
}, c0 = (A) => {
  const e = DL(A);
  return e.on("click", Ld), e;
}, ML = (A) => {
  const e = A.append("g");
  return LL(e.append("rect")), qc(e.append("circle"), -4), qc(e.append("circle"), 0), qc(e.append("circle"), 4), e;
}, OL = (A, e) => {
  if (A.select(`:scope > g.${oA.content} > g.${oA["expand-btn"]}`).on("click", q4), Zn.value.drag || Zn.value.edit) {
    const r = A.select(`:scope > g.${oA.content} > g.${oA.text}`);
    r.on("mousedown", bd), Zn.value.drag && !e && Zd(r), Zn.value.edit && r.on("click", jl);
  }
  es.value && A.select(`:scope > g.${oA.content}`).on("mouseenter", J4).on("mouseleave", Y4);
}, RL = (A) => {
  var Q;
  const e = !((Q = A.data()[0]) != null && Q.depth), t = A.append("g");
  o0(t), u0(t.append("path"));
  const r = t.append("g").attr("class", oA.content), s = r.append("rect"), a = r.append("g").attr("class", oA.text), u = a.append("rect"), f = a.append("text");
  a0(f);
  const l = f.selectAll("tspan").data(i0).enter().append("tspan");
  nf(l);
  let B;
  es.value && (B = c0(r));
  const g = ML(r);
  return s0(e, s, u, g, B), OL(t, e), t.each((C, v) => {
    C.children && ns(C.children, t.filter((H, K) => v === K));
  }), r.raise(), t;
}, NL = (A) => {
  var g;
  const e = !((g = A.data()[0]) != null && g.depth), t = A0(500, jg);
  o0(A, t), u0(A.select(":scope > path"), t);
  const r = A.select(`:scope > g.${oA.content}`), s = r.select(":scope > rect"), a = r.select(`g.${oA.text}`), u = a.select("rect"), f = a.select("text");
  a0(f, t), f.selectAll("tspan").data(i0).join(TL, SL, (Q) => Q.remove());
  let l = r.select(`g.${oA["add-btn"]}`);
  const B = r.select(`g.${oA["expand-btn"]}`);
  return es.value ? l.node() || (l = c0(r)) : l.remove(), s0(e, s, u, B, l), A.each((Q, C) => {
    Q.children && ns(Q.children, A.filter((v, H) => C === H));
  }), r.raise(), A;
}, ns = (A = [DA.data], e = Af) => {
  e.selectAll(`g.${tf(A[0]).join(".")}`).data(A, (r) => r.gKey).join(RL, NL);
};
function GL(A) {
  for (var e = A.length / 6 | 0, t = new Array(e), r = 0; r < e; ) t[r] = "#" + A.slice(r * 6, ++r * 6);
  return t;
}
const VL = GL("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
class Sg extends Map {
  constructor(e, t = XL) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: t } }), e != null) for (const [r, s] of e) this.set(r, s);
  }
  get(e) {
    return super.get(Dg(this, e));
  }
  has(e) {
    return super.has(Dg(this, e));
  }
  set(e, t) {
    return super.set(PL(this, e), t);
  }
  delete(e) {
    return super.delete(kL(this, e));
  }
}
function Dg({ _intern: A, _key: e }, t) {
  const r = e(t);
  return A.has(r) ? A.get(r) : t;
}
function PL({ _intern: A, _key: e }, t) {
  const r = e(t);
  return A.has(r) ? A.get(r) : (A.set(r, t), t);
}
function kL({ _intern: A, _key: e }, t) {
  const r = e(t);
  return A.has(r) && (t = A.get(r), A.delete(r)), t;
}
function XL(A) {
  return A !== null && typeof A == "object" ? A.valueOf() : A;
}
function WL(A, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(A);
      break;
    default:
      this.range(e).domain(A);
      break;
  }
  return this;
}
const Mg = Symbol("implicit");
function l0() {
  var A = new Sg(), e = [], t = [], r = Mg;
  function s(a) {
    let u = A.get(a);
    if (u === void 0) {
      if (r !== Mg) return r;
      A.set(a, u = e.push(a) - 1);
    }
    return t[u % t.length];
  }
  return s.domain = function(a) {
    if (!arguments.length) return e.slice();
    e = [], A = new Sg();
    for (const u of a)
      A.has(u) || A.set(u, e.push(u) - 1);
    return s;
  }, s.range = function(a) {
    return arguments.length ? (t = Array.from(a), s) : t.slice();
  }, s.unknown = function(a) {
    return arguments.length ? (r = a, s) : r;
  }, s.copy = function() {
    return l0(e, t).unknown(r);
  }, WL.apply(s, arguments), s;
}
class JL {
  constructor(e, t, r, s) {
    this.w = e, this.h = t, this.y = r, this.c = s, this.cs = s.length, this.x = 0, this.prelim = 0, this.mod = 0, this.shift = 0, this.change = 0, this.tl = null, this.tr = null, this.el = null, this.er = null, this.msel = 0, this.mser = 0;
  }
}
function Og(A) {
  A.cs === 0 ? (A.el = A, A.er = A, A.msel = A.mser = 0) : (A.el = A.c[0].el, A.msel = A.c[0].msel, A.er = A.c[A.cs - 1].er, A.mser = A.c[A.cs - 1].mser);
}
function Wi(A) {
  return A.y + A.h;
}
class YL {
  constructor(e, t, r) {
    this.lowY = e, this.index = t, this.next = r;
  }
}
function Rg(A, e, t) {
  for (; t !== null && A >= t.lowY; )
    t = t.next;
  return new YL(A, e, t);
}
function ZL(A, e, t, r) {
  if (t !== e - 1) {
    const s = e - t;
    A.c[t + 1].shift += r / s, A.c[e].shift -= r / s, A.c[e].change -= r - r / s;
  }
}
function $L(A, e, t, r) {
  A.c[e].mod += r, A.c[e].msel += r, A.c[e].mser += r, ZL(A, e, t, r);
}
function zL(A) {
  return A.cs === 0 ? A.tl : A.c[0];
}
function qL(A) {
  return A.cs === 0 ? A.tr : A.c[A.cs - 1];
}
function jL(A, e, t, r) {
  const s = A.c[0].el;
  s.tl = t;
  const a = r - t.mod - A.c[0].msel;
  s.mod += a, s.prelim -= a, A.c[0].el = A.c[e].el, A.c[0].msel = A.c[e].msel;
}
function AK(A, e, t, r) {
  const s = A.c[e].er;
  s.tr = t;
  const a = r - t.mod - A.c[e].mser;
  s.mod += a, s.prelim -= a, A.c[e].er = A.c[e - 1].er, A.c[e].mser = A.c[e - 1].mser;
}
function eK(A, e, t) {
  let r = A.c[e - 1], s = r.mod, a = A.c[e], u = a.mod;
  for (; r !== null && a !== null; ) {
    Wi(r) > t.lowY && (t = t.next);
    const f = s + r.prelim + r.w - (u + a.prelim);
    f > 0 && (u += f, $L(A, e, t.index, f));
    const l = Wi(r), B = Wi(a);
    l <= B && (r = qL(r), r !== null && (s += r.mod)), l >= B && (a = zL(a), a !== null && (u += a.mod));
  }
  r === null && a !== null ? jL(A, e, a, u) : r !== null && a === null && AK(A, e, r, s);
}
function tK(A) {
  A.prelim = (A.c[0].prelim + A.c[0].mod + A.c[A.cs - 1].mod + A.c[A.cs - 1].prelim + A.c[A.cs - 1].w) / 2 - A.w / 2;
}
function Tl(A) {
  if (A.cs === 0) {
    Og(A);
    return;
  }
  Tl(A.c[0]);
  let e = Rg(Wi(A.c[0].el), 0, null);
  for (let t = 1; t < A.cs; t++) {
    Tl(A.c[t]);
    const r = Wi(A.c[t].er);
    eK(A, t, e), e = Rg(r, t, e);
  }
  tK(A), Og(A);
}
function nK(A) {
  let e = 0, t = 0;
  for (let r = 0; r < A.cs; r++)
    e += A.c[r].shift, t += e + A.c[r].change, A.c[r].mod += t;
}
function f0(A, e) {
  e += A.mod, A.x = A.prelim + e, nK(A);
  for (let t = 0; t < A.cs; t++)
    f0(A.c[t], e);
}
function rK(A) {
  Tl(A), f0(A, 0);
}
class iK {
  /**
   * @param gap - the gap between sibling nodes
   * @param bottomPadding - the height reserved for connection drawing
   */
  constructor(e, t) {
    this.gap = e, this.bottomPadding = t;
  }
  addBoundingBox(e, t) {
    return { width: e + this.gap, height: t + this.bottomPadding };
  }
  /**
   * Return the coordinate without the bounding box for a node
   */
  removeBoundingBox(e, t) {
    return { x: e + this.gap / 2, y: t };
  }
}
class sK {
  constructor(e) {
    this.bb = e;
  }
  /**
   * Layout treeData.
   * Return modified treeData and the bounding box encompassing all the nodes.
   *
   * See getSize() for more explanation.
   */
  layout(e) {
    const t = this.convert(e);
    rK(t);
    const { boundingBox: r, result: s } = this.assignLayout(t, e);
    return { result: s, boundingBox: r };
  }
  /**
   * Returns Tree to layout, with bounding boxes added to each node.
   */
  convert(e, t = 0) {
    const { width: r, height: s } = this.bb.addBoundingBox(
      e.width,
      e.height
    ), a = [];
    if (e.children && e.children.length)
      for (let u = 0; u < e.children.length; u++)
        a[u] = this.convert(e.children[u], t + s);
    return new JL(r, s, t, a);
  }
  /**
   * Assign layout tree x, y coordinates back to treeData,
   * with bounding boxes removed.
   */
  assignCoordinates(e, t) {
    const { x: r, y: s } = this.bb.removeBoundingBox(e.x, e.y);
    t.x = r, t.y = s;
    for (let a = 0; a < e.c.length; a++)
      this.assignCoordinates(e.c[a], t.children[a]);
  }
  /**
   * Return the bounding box that encompasses all the nodes.
   * The result has a structure of
   * \{ left: number, right: number, top: number, bottom: nubmer \}.
   * This is not the same bounding box concept as the `BoundingBox` class
   * used to construct `Layout` class.
   */
  getSize(e, t) {
    const { x: r, y: s, width: a, height: u } = e;
    if (t || (t = { left: r, right: r + a, top: s, bottom: s + u }), t.left = Math.min(t.left, r), t.right = Math.max(t.right, r + a), t.top = Math.min(t.top, s), t.bottom = Math.max(t.bottom, s + u), e.children)
      for (const f of e.children)
        this.getSize(f, t);
    return t;
  }
  /**
   * This function does assignCoordinates and getSize in one pass.
   */
  assignLayout(e, t, r) {
    const { x: s, y: a } = this.bb.removeBoundingBox(e.x, e.y);
    t.x = s, t.y = a;
    const { width: u, height: f } = t;
    r || (r = { left: s, right: s + u, top: a, bottom: a + f }), r.left = Math.min(r.left, s), r.right = Math.max(r.right, s + u), r.top = Math.min(r.top, a), r.bottom = Math.max(r.bottom, a + f);
    for (let l = 0; l < e.c.length; l++)
      this.assignLayout(e.c[l], t.children[l], r);
    return { result: t, boundingBox: r };
  }
}
const Ng = (A) => [A.width, A.height] = [A.height, A.width], oK = (A) => {
  A.parent ? (A.dx = A.x - A.parent.x, A.dy = A.y - A.parent.y) : (A.dx = 0, A.dy = 0);
}, Vn = (A, e) => A.id = e, aK = (A) => {
  A.parent ? A.depth = A.parent.depth + 1 : A.depth = 0;
}, Gg = (A) => {
  A.parent && A.parent.color && (A.color = A.parent.color);
}, uK = (A) => {
  A.depth > 1 && A.parent && (A.left = A.parent.left);
}, cK = (A) => {
  const e = Object.assign({}, A), t = Object.assign({}, A);
  if (!A.collapse) {
    const { children: r } = A;
    e.children = [], t.children = [], r.forEach((s) => {
      s.left ? e.children.push(s) : t.children.push(s), s.parent && (s.parent = t);
    });
  }
  return { left: e, right: t };
}, Sl = (A, e, t = "0") => {
  var s;
  e.forEach((a) => {
    a(A, t);
  });
  const { children: r } = A;
  if (r)
    for (let a = 0; a < r.length; ) {
      const u = r[a];
      u.id === "del" ? (r.splice(a, 1), (s = A.rawData.children) == null || s.splice(a, 1)) : (Sl(u, e, `${t}-${a}`), a += 1);
    }
}, Vg = (A, e) => {
  const t = new iK(e, A);
  return new sK(t);
};
class lK {
  // 左树与右树的差值
  constructor(e, t, r, s, a = l0(VL)) {
    this.colorNumber = 0, this.gKey = 0, this.rootWidth = 0, this.diffY = 0, this.colorScale = a, this.getSize = s, this.layout = Vg(t, r), this.data = this.createMdataFromData(e, "0"), this.renew();
  }
  createMdataFromData(e, t, r = null) {
    const { name: s, collapse: a, children: u } = e, { width: f, height: l } = this.getSize(s), B = r ? r.depth + 1 : 0;
    let g = !1, Q = r ? r.color : "";
    B === 1 ? (g = !!e.left, Q = this.colorScale(`${this.colorNumber += 1}`)) : B !== 0 && r && (g = r.left);
    const C = {
      id: t,
      name: s,
      rawData: e,
      parent: r,
      left: g,
      color: Q,
      depth: B,
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      px: 0,
      py: 0,
      width: f,
      height: l,
      children: [],
      _children: [],
      collapse: !!a,
      gKey: this.gKey += 1
    };
    return u && (C.collapse ? u.forEach((v, H) => {
      C._children.push(this.createMdataFromData(v, `${t}-${H}`, C));
    }) : u.forEach((v, H) => {
      C.children.push(this.createMdataFromData(v, `${t}-${H}`, C));
    })), C;
  }
  /**
   * 默认更新x, y, dx, dy, left, depth
   * @param plugins - 需要更新其他属性时的函数
   */
  renew(...e) {
    Sl(this.data, [Ng, aK, uK]), this.data = this.l(this.data);
    const t = [Ng, this.renewXY.bind(this), oK];
    Sl(this.data, t.concat(e));
  }
  /**
   * 分别计算左右树，最后合并成一颗树，右树为主树
   */
  l(e) {
    const { left: t, right: r } = cK(e);
    return this.layout.layout(t), this.layout.layout(r), this.diffY = r.x - t.x, this.rootWidth = t.height, r.children = e.children, r;
  }
  renewXY(e) {
    [e.x, e.y] = [e.y, e.x], e.left && (e.x = -e.x + this.rootWidth, e.y += this.diffY);
  }
  getRootWidth() {
    return this.rootWidth;
  }
  setBoundingBox(e, t) {
    this.layout = Vg(e, t), this.renew();
  }
  find(e) {
    const t = e.split("-").map((s) => ~~s);
    let r = this.data;
    for (let s = 1; s < t.length; s++) {
      const a = t[s], { children: u } = r;
      if (a < u.length)
        r = u[a];
      else
        return null;
    }
    return r.id === e ? r : null;
  }
  rename(e, t) {
    if (e.length > 0) {
      const r = this.find(e);
      if (r && r.name !== t) {
        r.name = t, r.rawData.name = t;
        const s = this.getSize(r.name);
        r.width = s.width, r.height = s.height, this.renew();
      }
      return r;
    } else
      return null;
  }
  /**
   * 将b节点移动到a节点下
   * @param parentId - 目标节点a
   * @param delId - 被移动节点b
   */
  moveChild(e, t) {
    var u, f;
    if (e === t)
      return null;
    const r = this.find(e), s = this.find(t), a = t.split("-").pop();
    if (a && r && s) {
      const l = s.parent;
      (u = l == null ? void 0 : l.children) == null || u.splice(~~a, 1), (f = l == null ? void 0 : l.rawData.children) == null || f.splice(~~a, 1), s.parent = r, s.gKey = this.gKey += 1, s.depth = s.parent.depth + 1, s.depth === 1 ? s.color = this.colorScale(`${this.colorNumber += 1}`) : s.left = s.parent.left, r.collapse ? r._children.push(s) : r.children.push(s), r.rawData.children ? r.rawData.children.push(s.rawData) : r.rawData.children = [s.rawData], this.renew(Vn, Gg);
    }
    return s;
  }
  moveSibling(e, t, r = 0) {
    const s = e.split("-"), a = t.split("-");
    let u = s.pop(), f = a.pop();
    if (e === t || s.length !== a.length || !u || !f)
      return null;
    const l = this.find(e), B = this.find(t);
    if (B && l && l.parent) {
      u = parseInt(u, 10), f = parseInt(f, 10), u < f && (f -= 1);
      const { children: g } = l.parent, { children: Q } = l.parent.rawData;
      if (g && Q)
        return g.splice(u, 1), g.splice(f + r, 0, l), Q.splice(u, 1), Q.splice(f + r, 0, l.rawData), l.depth === 1 && (l.left = B.left), this.renew(Vn), l;
    }
    return null;
  }
  add(e, t) {
    const r = this.find(e);
    if (r)
      if (r.collapse && this.expand(e), r.rawData.children || (r.rawData.children = []), typeof t == "string") {
        const s = t, a = this.getSize(s), u = { name: s }, f = r.color ? r.color : this.colorScale(`${this.colorNumber += 1}`), l = {
          id: `${r.id}-${r.children.length}`,
          name: s,
          rawData: u,
          parent: r,
          left: r.left,
          collapse: !1,
          color: f,
          gKey: this.gKey += 1,
          width: a.width,
          height: a.height,
          depth: r.depth + 1,
          x: 0,
          y: 0,
          dx: 0,
          dy: 0,
          px: 0,
          py: 0,
          children: [],
          _children: []
        };
        return r.children.push(l), r.rawData.children.push(u), this.renew(), l;
      } else {
        const s = t, a = this.createMdataFromData(s, `${r.id}-${r.children.length}`, r);
        return r.children.push(a), r.rawData.children.push(s), this.renew(), a;
      }
    return null;
  }
  expand(e) {
    return this.eoc(e, !1, [Gg, Vn]);
  }
  collapse(e) {
    return this.eoc(e, !0);
  }
  /**
   * 展开或折叠(expand or collapse)
   */
  eoc(e, t, r = []) {
    const s = this.find(e);
    return s && (s.collapse = t, s.rawData.collapse = t, [s._children, s.children] = [s.children, s._children], this.renew(...r)), s;
  }
  delete(e) {
    const t = this.find(e);
    if (t && t.parent)
      t.id = "del", this.renew(Vn);
    else
      throw new Error(t ? "暂不支持删除根节点" : "未找到需要删除的节点");
  }
  deleteOne(e) {
    var r;
    const t = this.find(e);
    if (t && t.parent) {
      const { parent: s, children: a, _children: u, collapse: f, rawData: l } = t, B = parseInt(e.split("-").pop(), 10);
      s.children.splice(B, 1, ...f ? u : a), (r = s.rawData.children) == null || r.splice(B, 1, ...l.children || []), a.forEach((g) => {
        g.parent = s, g.depth === 1 && (g.rawData.left = g.left);
      }), this.renew(Vn);
    }
  }
  addSibling(e, t, r = !1) {
    var a;
    const s = this.find(e);
    if (s && s.parent) {
      const u = parseInt(e.split("-").pop(), 10), { parent: f, left: l } = s, B = { name: t, left: l }, g = this.getSize(t), Q = r ? u : u + 1, C = f.color ? f.color : this.colorScale(`${this.colorNumber += 1}`), v = {
        name: t,
        parent: f,
        children: [],
        _children: [],
        color: C,
        collapse: !1,
        rawData: B,
        id: `${f.id}-${Q}`,
        left: l,
        gKey: this.gKey += 1,
        depth: s.depth,
        width: g.width,
        height: g.height,
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        px: 0,
        py: 0
      };
      return f.children.splice(Q, 0, v), (a = f.rawData.children) == null || a.splice(Q, 0, B), this.renew(Vn), v;
    }
    return null;
  }
  addParent(e, t) {
    var s;
    const r = this.find(e);
    if (r && r.parent) {
      const { parent: a, left: u, color: f } = r, l = this.getSize(t), B = parseInt(r.id.split("-").pop(), 10), g = { name: t, children: [r.rawData], left: u };
      (s = a.rawData.children) == null || s.splice(B, 1, g);
      const Q = {
        rawData: g,
        left: u,
        name: t,
        color: f,
        collapse: !1,
        parent: a,
        id: r.id,
        depth: r.depth,
        width: l.width,
        height: l.height,
        gKey: this.gKey += 1,
        children: [r],
        _children: [],
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        px: 0,
        py: 0
      };
      return r.parent = Q, a.children.splice(B, 1, Q), this.renew(Vn), Q;
    }
    return null;
  }
  changeLeft(e) {
    const t = this.find(e);
    return t && (t.left = !t.left, this.renew()), t;
  }
}
let DA;
TA.on("mmdata", (A) => A ? DA = A : null);
const _e = (A = !0) => {
  A && ts.snap(DA.data), $d.emit("update:modelValue", U1([DA.data.rawData])), gL(), ns();
}, fK = (A, e) => {
  DA.rename(A, e), _e();
}, BK = (A, e) => {
  DA.moveChild(A, e), _e();
}, Pg = (A, e, t = 0) => {
  DA.moveSibling(A, e, t), _e();
}, B0 = (A, e) => {
  const t = DA.add(A, e);
  return _e(), t;
}, kg = (A) => {
  DA.delete(A), _e();
}, hK = (A) => {
  DA.deleteOne(A), _e();
}, h0 = (A) => {
  DA.expand(A), _e();
}, gK = (A) => {
  DA.collapse(A), _e();
}, Xg = (A, e, t = !1) => {
  const r = DA.addSibling(A, e, t);
  return _e(), r;
}, wK = (A, e) => {
  const t = DA.addParent(A, e);
  return _e(), t;
}, dK = (A) => {
  DA.changeLeft(A), _e();
}, QK = Wg({
  name: "contextmenu",
  props: {
    position: {
      default: { top: 0, left: 0 }
    },
    groups: Array
  },
  emits: ["click-item"],
  setup(A, e) {
    const t = bA(!1), r = Jv(), s = bA(), a = bA(), u = Yv({ top: 0, left: 0 }), f = 8;
    TA.on("showContextmenu", async (g) => {
      if (!s.value || !a.value)
        return;
      t.value = !!g, await Zv();
      const { offsetWidth: Q, offsetHeight: C } = s.value, { offsetWidth: v, offsetHeight: H } = a.value, { top: K, left: V } = A.position;
      u.top = K + H > C ? C - H - f : K, u.left = V + v > Q ? V - v : V;
    });
    const l = () => t.value = !1;
    return {
      style: r,
      show: t,
      close: l,
      onClick: (g) => {
        l(), e.emit("click-item", g);
      },
      menuEle: a,
      containerEle: s,
      pos: u
    };
  }
}), pK = "Contextmenu_container_154ic", CK = "Contextmenu_menu_154ic", UK = "Contextmenu_disabled_154ic", FK = {
  container: pK,
  menu: CK,
  disabled: UK
}, g0 = (A, e) => {
  const t = A.__vccOpts || A;
  for (const [r, s] of e)
    t[r] = s;
  return t;
}, vK = ["id"], mK = ["onClick"];
function EK(A, e, t, r, s, a) {
  return $v((ye(), Oe("div", {
    class: Ee(A.style.container),
    ref: "containerEle"
  }, [
    Me("div", {
      onMousedown: e[0] || (e[0] = (...u) => A.close && A.close(...u))
    }, null, 32),
    Me("div", {
      ref: "menuEle",
      id: A.style.menu,
      style: zv({ top: A.pos.top + "px", left: A.pos.left + "px" })
    }, [
      (ye(!0), Oe(uh, null, ch(A.groups, (u, f) => (ye(), Oe("ul", { key: f }, [
        (ye(!0), Oe(uh, null, ch(u, (l) => (ye(), Oe("li", {
          class: Ee(l.disabled ? A.style.disabled : ""),
          key: l.name,
          onClick: (B) => A.onClick(l.name)
        }, qv(l.name), 11, mK))), 128))
      ]))), 128))
    ], 12, vK)
  ], 2)), [
    [jv, A.show]
  ]);
}
const yK = {
  $style: FK
}, HK = /* @__PURE__ */ g0(QK, [["render", EK], ["__cssModules", yK]]), IK = Wg({
  name: "Mindmap",
  components: {
    Contextmenu: HK
  },
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    // 绘制所需的变量
    xGap: { type: Number, default: Ua },
    yGap: { type: Number, default: As },
    branch: {
      type: Number,
      default: Ca,
      validator: (A) => A >= 1 && A <= 6
    },
    scaleExtent: {
      type: Object,
      default: Gr
    },
    sharpCorner: Boolean,
    // 操作许可
    centerBtn: Boolean,
    fitBtn: Boolean,
    downloadBtn: Boolean,
    timetravel: Boolean,
    addNodeBtn: Boolean,
    edit: Boolean,
    drag: Boolean,
    keyboard: Boolean,
    ctm: Boolean,
    zoom: Boolean,
    // i18n
    locale: { type: String, default: "zh" }
  },
  setup(A, e) {
    return hn(() => TA.emit("scale-extent", A.scaleExtent)), hn(() => TA.emit("branch", A.branch)), hn(() => TA.emit("sharp-corner", A.sharpCorner)), hn(() => TA.emit("gap", { xGap: A.xGap, yGap: A.yGap })), hn(() => TA.emit("mindmap-context", e)), hn(() => es.value = A.edit && A.addNodeBtn), hn(() => Zn.value.drag = A.drag), hn(() => Zn.value.edit = A.edit), Am(() => {
      if (!ct.value || !Mr.value || !zc.value || !Yn.value || !ut.value)
        return;
      TA.emit("selection-svg", ie(ct.value)), TA.emit("selection-g", ie(Mr.value)), TA.emit("selection-asstSvg", ie(zc.value)), TA.emit("selection-foreign", ie(Yn.value)), TA.emit("mmdata", new lK(jo.cloneDeep(A.modelValue[0]), Ua, As, CL)), pa.value = !1, _e();
      const { svg: t, foreign: r } = pe;
      r == null || r.raise(), EL(), Kl(), t == null || t.on("mousedown", () => {
        const s = document.getElementsByClassName(oA.selected)[0];
        s == null || s.classList.remove(oA.selected);
      }), Ig(A.zoom), _g(A.ctm);
    }), mi(() => [A.branch, es.value, A.sharpCorner], () => {
      ns(), pa.value = !1;
    }), mi(() => [A.xGap, A.yGap], (t) => {
      DA.setBoundingBox(t[0], t[1]), ns();
    }), mi(() => [A.drag, A.edit], (t) => {
      tL(t[0] || t[1]), nL(t[0]), eL(t[1]);
    }), mi(() => A.zoom, (t) => Ig(t)), mi(() => A.ctm, (t) => _g(t)), {
      wrapperEle: mn,
      svgEle: ct,
      gEle: Mr,
      style: oA,
      asstSvgEle: zc,
      foreignEle: Yn,
      foreignDivEle: ut,
      centerView: UL,
      fitView: Kl,
      download: FL,
      menu: uL,
      contextmenuPos: Dd,
      onClickMenu: z4,
      next: vL,
      prev: mL,
      hasPrev: zd,
      hasNext: qd
    };
  }
}), _K = ["id"], xK = { ref: "gEle" }, bK = {
  ref: "foreignEle",
  style: { display: "none" }
}, LK = {
  ref: "foreignDivEle",
  contenteditable: ""
};
function KK(A, e, t, r, s, a) {
  const u = em("contextmenu");
  return ye(), Oe("div", {
    class: Ee(A.style.container)
  }, [
    Me("div", {
      id: A.style["svg-wrapper"],
      ref: "wrapperEle"
    }, [
      (ye(), Oe("svg", {
        class: Ee(A.style.svg),
        ref: "svgEle"
      }, [
        Me("g", xK, [
          (ye(), Oe("foreignObject", bK, [
            Me("div", LK, null, 512)
          ], 512))
        ], 512)
      ], 2))
    ], 8, _K),
    (ye(), Oe("svg", {
      ref: "asstSvgEle",
      class: Ee(A.style["asst-svg"])
    }, null, 2)),
    Me("div", {
      class: Ee([A.style["button-list"], A.style["right-bottom"]])
    }, [
      A.centerBtn ? (ye(), Oe("button", {
        key: 0,
        onClick: e[0] || (e[0] = (f) => A.centerView())
      }, [
        Me("i", {
          class: Ee(A.style.gps)
        }, null, 2)
      ])) : Ei("", !0),
      A.fitBtn ? (ye(), Oe("button", {
        key: 1,
        onClick: e[1] || (e[1] = (f) => A.fitView())
      }, [
        Me("i", {
          class: Ee(A.style.fit)
        }, null, 2)
      ])) : Ei("", !0),
      A.downloadBtn ? (ye(), Oe("button", {
        key: 2,
        onClick: e[2] || (e[2] = (f) => A.download())
      }, [
        Me("i", {
          class: Ee(A.style.download)
        }, null, 2)
      ])) : Ei("", !0)
    ], 2),
    A.timetravel ? (ye(), Oe("div", {
      key: 0,
      class: Ee([A.style["button-list"], A.style["right-top"]])
    }, [
      Me("button", {
        onClick: e[3] || (e[3] = (...f) => A.prev && A.prev(...f)),
        class: Ee({ [A.style.disabled]: !A.hasPrev })
      }, [
        Me("i", {
          class: Ee(A.style.prev)
        }, null, 2)
      ], 2),
      Me("button", {
        onClick: e[4] || (e[4] = (...f) => A.next && A.next(...f)),
        class: Ee({ [A.style.disabled]: !A.hasNext })
      }, [
        Me("i", {
          class: Ee(A.style.next)
        }, null, 2)
      ], 2)
    ], 2)) : Ei("", !0),
    A.ctm ? (ye(), tm(u, {
      key: 1,
      position: A.contextmenuPos,
      groups: A.menu,
      onClickItem: A.onClickMenu
    }, null, 8, ["position", "groups", "onClickItem"])) : Ei("", !0)
  ], 2);
}
const SK = /* @__PURE__ */ g0(IK, [["render", KK]]);
export {
  SK as default
};
