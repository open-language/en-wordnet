// node:path
var L = Object.create;
var b = Object.defineProperty;
var z = Object.getOwnPropertyDescriptor;
var D = Object.getOwnPropertyNames;
var T = Object.getPrototypeOf;
var R = Object.prototype.hasOwnProperty;
var _ = (f, e) => () => (e || f((e = { exports: {} }).exports, e), e.exports);
var E = (f, e) => {
  for (var r in e)
    b(f, r, { get: e[r], enumerable: true });
};
var C = (f, e, r, l) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of D(e))
      !R.call(f, i) && i !== r && b(f, i, { get: () => e[i], enumerable: !(l = z(e, i)) || l.enumerable });
  return f;
};
var A = (f, e, r) => (C(f, e, "default"), r && C(r, e, "default"));
var y = (f, e, r) => (r = f != null ? L(T(f)) : {}, C(e || !f || !f.__esModule ? b(r, "default", { value: f, enumerable: true }) : r, f));
var h = _((F, S) => {
  function c(f) {
    if (typeof f != "string")
      throw new TypeError("Path must be a string. Received " + JSON.stringify(f));
  }
  function w(f, e) {
    for (var r = "", l = 0, i = -1, s = 0, n, t = 0;t <= f.length; ++t) {
      if (t < f.length)
        n = f.charCodeAt(t);
      else {
        if (n === 47)
          break;
        n = 47;
      }
      if (n === 47) {
        if (!(i === t - 1 || s === 1))
          if (i !== t - 1 && s === 2) {
            if (r.length < 2 || l !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
              if (r.length > 2) {
                var a = r.lastIndexOf("/");
                if (a !== r.length - 1) {
                  a === -1 ? (r = "", l = 0) : (r = r.slice(0, a), l = r.length - 1 - r.lastIndexOf("/")), i = t, s = 0;
                  continue;
                }
              } else if (r.length === 2 || r.length === 1) {
                r = "", l = 0, i = t, s = 0;
                continue;
              }
            }
            e && (r.length > 0 ? r += "/.." : r = "..", l = 2);
          } else
            r.length > 0 ? r += "/" + f.slice(i + 1, t) : r = f.slice(i + 1, t), l = t - i - 1;
        i = t, s = 0;
      } else
        n === 46 && s !== -1 ? ++s : s = -1;
    }
    return r;
  }
  function J(f, e) {
    var r = e.dir || e.root, l = e.base || (e.name || "") + (e.ext || "");
    return r ? r === e.root ? r + l : r + f + l : l;
  }
  var g = { resolve: function() {
    for (var e = "", r = false, l, i = arguments.length - 1;i >= -1 && !r; i--) {
      var s;
      i >= 0 ? s = arguments[i] : (l === undefined && (l = process.cwd()), s = l), c(s), s.length !== 0 && (e = s + "/" + e, r = s.charCodeAt(0) === 47);
    }
    return e = w(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  }, normalize: function(e) {
    if (c(e), e.length === 0)
      return ".";
    var r = e.charCodeAt(0) === 47, l = e.charCodeAt(e.length - 1) === 47;
    return e = w(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && l && (e += "/"), r ? "/" + e : e;
  }, isAbsolute: function(e) {
    return c(e), e.length > 0 && e.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, r = 0;r < arguments.length; ++r) {
      var l = arguments[r];
      c(l), l.length > 0 && (e === undefined ? e = l : e += "/" + l);
    }
    return e === undefined ? "." : g.normalize(e);
  }, relative: function(e, r) {
    if (c(e), c(r), e === r || (e = g.resolve(e), r = g.resolve(r), e === r))
      return "";
    for (var l = 1;l < e.length && e.charCodeAt(l) === 47; ++l)
      ;
    for (var i = e.length, s = i - l, n = 1;n < r.length && r.charCodeAt(n) === 47; ++n)
      ;
    for (var t = r.length, a = t - n, v = s < a ? s : a, u = -1, o = 0;o <= v; ++o) {
      if (o === v) {
        if (a > v) {
          if (r.charCodeAt(n + o) === 47)
            return r.slice(n + o + 1);
          if (o === 0)
            return r.slice(n + o);
        } else
          s > v && (e.charCodeAt(l + o) === 47 ? u = o : o === 0 && (u = 0));
        break;
      }
      var k = e.charCodeAt(l + o), P = r.charCodeAt(n + o);
      if (k !== P)
        break;
      k === 47 && (u = o);
    }
    var d = "";
    for (o = l + u + 1;o <= i; ++o)
      (o === i || e.charCodeAt(o) === 47) && (d.length === 0 ? d += ".." : d += "/..");
    return d.length > 0 ? d + r.slice(n + u) : (n += u, r.charCodeAt(n) === 47 && ++n, r.slice(n));
  }, _makeLong: function(e) {
    return e;
  }, dirname: function(e) {
    if (c(e), e.length === 0)
      return ".";
    for (var r = e.charCodeAt(0), l = r === 47, i = -1, s = true, n = e.length - 1;n >= 1; --n)
      if (r = e.charCodeAt(n), r === 47) {
        if (!s) {
          i = n;
          break;
        }
      } else
        s = false;
    return i === -1 ? l ? "/" : "." : l && i === 1 ? "//" : e.slice(0, i);
  }, basename: function(e, r) {
    if (r !== undefined && typeof r != "string")
      throw new TypeError('"ext" argument must be a string');
    c(e);
    var l = 0, i = -1, s = true, n;
    if (r !== undefined && r.length > 0 && r.length <= e.length) {
      if (r.length === e.length && r === e)
        return "";
      var t = r.length - 1, a = -1;
      for (n = e.length - 1;n >= 0; --n) {
        var v = e.charCodeAt(n);
        if (v === 47) {
          if (!s) {
            l = n + 1;
            break;
          }
        } else
          a === -1 && (s = false, a = n + 1), t >= 0 && (v === r.charCodeAt(t) ? --t === -1 && (i = n) : (t = -1, i = a));
      }
      return l === i ? i = a : i === -1 && (i = e.length), e.slice(l, i);
    } else {
      for (n = e.length - 1;n >= 0; --n)
        if (e.charCodeAt(n) === 47) {
          if (!s) {
            l = n + 1;
            break;
          }
        } else
          i === -1 && (s = false, i = n + 1);
      return i === -1 ? "" : e.slice(l, i);
    }
  }, extname: function(e) {
    c(e);
    for (var r = -1, l = 0, i = -1, s = true, n = 0, t = e.length - 1;t >= 0; --t) {
      var a = e.charCodeAt(t);
      if (a === 47) {
        if (!s) {
          l = t + 1;
          break;
        }
        continue;
      }
      i === -1 && (s = false, i = t + 1), a === 46 ? r === -1 ? r = t : n !== 1 && (n = 1) : r !== -1 && (n = -1);
    }
    return r === -1 || i === -1 || n === 0 || n === 1 && r === i - 1 && r === l + 1 ? "" : e.slice(r, i);
  }, format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return J("/", e);
  }, parse: function(e) {
    c(e);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return r;
    var l = e.charCodeAt(0), i = l === 47, s;
    i ? (r.root = "/", s = 1) : s = 0;
    for (var n = -1, t = 0, a = -1, v = true, u = e.length - 1, o = 0;u >= s; --u) {
      if (l = e.charCodeAt(u), l === 47) {
        if (!v) {
          t = u + 1;
          break;
        }
        continue;
      }
      a === -1 && (v = false, a = u + 1), l === 46 ? n === -1 ? n = u : o !== 1 && (o = 1) : n !== -1 && (o = -1);
    }
    return n === -1 || a === -1 || o === 0 || o === 1 && n === a - 1 && n === t + 1 ? a !== -1 && (t === 0 && i ? r.base = r.name = e.slice(1, a) : r.base = r.name = e.slice(t, a)) : (t === 0 && i ? (r.name = e.slice(1, n), r.base = e.slice(1, a)) : (r.name = e.slice(t, n), r.base = e.slice(t, a)), r.ext = e.slice(n, a)), t > 0 ? r.dir = e.slice(0, t - 1) : i && (r.dir = "/"), r;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  g.posix = g;
  S.exports = g;
});
var m = {};
E(m, { default: () => q });
A(m, y(h()));
var q = y(h());

// src/index.ts
var __dirname = "/Users/sudhanshuraheja/code/src/github.com/open-language/en-wordnet/src";
var enWordnet = new Map;
enWordnet.set("3.0", undefined(__dirname, "..", "database", "3.0"));
enWordnet.set("3.1", undefined(__dirname, "..", "database", "3.1"));
var src_default = enWordnet;
export {
  src_default as default
};
