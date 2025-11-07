!(function () {
  "use strict";
  var e,
    t,
    n,
    r,
    c,
    d,
    a,
    f = {},
    o = {};
  function i(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var n = (o[e] = { id: e, loaded: !1, exports: {} }),
      r = !0;
    try {
      f[e].call(n.exports, n, n.exports, i), (r = !1);
    } finally {
      r && delete o[e];
    }
    return (n.loaded = !0), n.exports;
  }
  (i.m = f),
    (e = []),
    (i.O = function (t, n, r, c) {
      if (n) {
        c = c || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > c; d--) e[d] = e[d - 1];
        e[d] = [n, r, c];
        return;
      }
      for (var a = 1 / 0, d = 0; d < e.length; d++) {
        for (
          var n = e[d][0], r = e[d][1], c = e[d][2], f = !0, o = 0;
          o < n.length;
          o++
        )
          a >= c &&
          Object.keys(i.O).every(function (e) {
            return i.O[e](n[o]);
          })
            ? n.splice(o--, 1)
            : ((f = !1), c < a && (a = c));
        if (f) {
          e.splice(d--, 1);
          var u = r();
          void 0 !== u && (t = u);
        }
      }
      return t;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, { a: t }), t;
    }),
    (i.d = function (e, t) {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.f = {}),
    (i.e = function (e) {
      return Promise.all(
        Object.keys(i.f).reduce(function (t, n) {
          return i.f[n](e, t), t;
        }, [])
      );
    }),
    (i.u = function (e) {
      return (
        "static/chunks/" +
        e +
        "." +
        { 2741: "ef7d65617850389c", 9651: "de9061b22ac16cf7" }[e] +
        ".js"
      );
    }),
    (i.miniCssF = function (e) {
      return (
        "static/css/" +
        {
          11: "8e1f2e511fe5c8d8",
          338: "2862c9fb77d6c653",
          569: "35ccd2dd9f21f16b",
          900: "c46889ec2eb68b1c",
          995: "9e6f905610a2890d",
          1188: "603d06445f6bfc6d",
          1239: "b25e0abf36c1c22f",
          1256: "26c389d39f15c925",
          1257: "998cd8ac1fc08b37",
          1285: "6151f9747f3d6f32",
          1292: "886449c591c6b4d5",
          1465: "13b8231f62886434",
          1894: "6392dea27ea9639f",
          2087: "a24a2b0f21821c49",
          2434: "c3a7227decc6b4ac",
          2633: "8b790a5669b428aa",
          2888: "3d74b41266f90c2e",
          2946: "d85dbd4cbca42412",
          3073: "2b49375cee4f96e5",
          3118: "08ecabc282337036",
          3258: "d3ff35e6c8a97ec6",
          3293: "2a18dd2c41d4c3bf",
          3333: "8b790a5669b428aa",
          3410: "2810f8d1f1ea2c36",
          3411: "228dc2daa297c128",
          3641: "08ecabc282337036",
          3656: "1c4473b45fd0cdf2",
          3752: "84bf6d6831e4f108",
          4029: "a1cd8a35a2942b9c",
          4181: "5c57e16a402262d2",
          4560: "08282ca75767f0b4",
          4821: "68a3d0dcb9e75622",
          5185: "8b790a5669b428aa",
          5222: "a447fdccfd7331cf",
          5353: "08ecabc282337036",
          5369: "8923498fc2778945",
          5878: "8fa8e36951234dc3",
          6187: "26c389d39f15c925",
          6209: "77fc1003bf3ec8c2",
          6438: "f89f4e1d4061469c",
          6511: "613f4cccd92046b1",
          6900: "246f7299ead84575",
          6982: "9631be5b01694f5d",
          7351: "4d9ce7677560a491",
          7430: "d9968fc7ce789aa4",
          7972: "3a9d6f8f493b99d3",
          8268: "57e23399ce59a151",
          8468: "fb38da1a6853eca9",
          8535: "feabd6c3a8cdcd31",
          8691: "4739ba7f70a9b173",
          8716: "c28cbcd805ee49eb",
          8893: "026cc4db2cb1c4aa",
          9057: "7f86d1ce42bbb672",
          9306: "9651bd7fd341a370",
          9562: "8b790a5669b428aa",
          9615: "b78e66e2b681f0bd",
          9768: "b68729a77fab5715",
          9946: "c5cd4a4ce5924055",
        }[e] +
        ".css"
      );
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t = {}),
    (n = "_N_E:"),
    (i.l = function (e, r, c, d) {
      if (t[e]) {
        t[e].push(r);
        return;
      }
      if (void 0 !== c)
        for (
          var a, f, o = document.getElementsByTagName("script"), u = 0;
          u < o.length;
          u++
        ) {
          var b = o[u];
          if (
            b.getAttribute("src") == e ||
            b.getAttribute("data-webpack") == n + c
          ) {
            a = b;
            break;
          }
        }
      a ||
        ((f = !0),
        ((a = document.createElement("script")).charset = "utf-8"),
        (a.timeout = 120),
        i.nc && a.setAttribute("nonce", i.nc),
        a.setAttribute("data-webpack", n + c),
        (a.src = i.tu(e)),
        0 === a.src.indexOf(window.location.origin + "/") ||
          (a.crossOrigin = "anonymous")),
        (t[e] = [r]);
      var s = function (n, r) {
          (a.onerror = a.onload = null), clearTimeout(l);
          var c = t[e];
          if (
            (delete t[e],
            a.parentNode && a.parentNode.removeChild(a),
            c &&
              c.forEach(function (e) {
                return e(r);
              }),
            n)
          )
            return n(r);
        },
        l = setTimeout(
          s.bind(null, void 0, { type: "timeout", target: a }),
          12e4
        );
      (a.onerror = s.bind(null, a.onerror)),
        (a.onload = s.bind(null, a.onload)),
        f && document.head.appendChild(a);
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (i.tt = function () {
      return (
        void 0 === r &&
          ((r = {
            createScriptURL: function (e) {
              return e;
            },
          }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (r = trustedTypes.createPolicy("nextjs#bundler", r))),
        r
      );
    }),
    (i.tu = function (e) {
      return i.tt().createScriptURL(e);
    }),
    (i.p =
      "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/"),
    (c = { 2272: 0, 3641: 0, 3118: 0, 5353: 0 }),
    (i.f.j = function (e, t) {
      var n = i.o(c, e) ? c[e] : void 0;
      if (0 !== n) {
        if (n) t.push(n[2]);
        else if (/^(2272|3118|3641|5353)$/.test(e)) c[e] = 0;
        else {
          var r = new Promise(function (t, r) {
            n = c[e] = [t, r];
          });
          t.push((n[2] = r));
          var d = i.p + i.u(e),
            a = Error(),
            f = function (t) {
              if (i.o(c, e) && (0 !== (n = c[e]) && (c[e] = void 0), n)) {
                var r = t && ("load" === t.type ? "missing" : t.type),
                  d = t && t.target && t.target.src;
                (a.message =
                  "Loading chunk " + e + " failed.\n(" + r + ": " + d + ")"),
                  (a.name = "ChunkLoadError"),
                  (a.type = r),
                  (a.request = d),
                  n[1](a);
              }
            };
          i.l(d, f, "chunk-" + e, e);
        }
      }
    }),
    (i.O.j = function (e) {
      return 0 === c[e];
    }),
    (d = function (e, t) {
      var n,
        r,
        d = t[0],
        a = t[1],
        f = t[2],
        o = 0;
      if (
        d.some(function (e) {
          return 0 !== c[e];
        })
      ) {
        for (n in a) i.o(a, n) && (i.m[n] = a[n]);
        if (f) var u = f(i);
      }
      for (e && e(t); o < d.length; o++)
        (r = d[o]), i.o(c, r) && c[r] && c[r][0](), (c[r] = 0);
      return i.O(u);
    }),
    (a = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(
      d.bind(null, 0)
    ),
    (a.push = d.bind(null, a.push.bind(a)));
})();
