(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8893],
  {
    48116: function (e, t, r) {
      var n;
      !(function (a) {
        "use strict";
        var i,
          o,
          c,
          s =
            ((i =
              /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g),
            (o =
              /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g),
            (c = /[^-+\dA-Z]/g),
            function (e, t, r, n) {
              if (
                (1 !== arguments.length ||
                  "string" !==
                    ((a = e),
                    null === a
                      ? "null"
                      : void 0 === a
                      ? "undefined"
                      : "object" != typeof a
                      ? typeof a
                      : Array.isArray(a)
                      ? "array"
                      : {}.toString.call(a).slice(8, -1).toLowerCase()) ||
                  /\d/.test(e) ||
                  ((t = e), (e = void 0)),
                (e = e || new Date()) instanceof Date || (e = new Date(e)),
                isNaN(e))
              )
                throw TypeError("Invalid date");
              var a,
                u,
                d,
                m,
                p,
                f,
                g,
                h = (t = String(s.masks[t] || t || s.masks.default)).slice(
                  0,
                  4
                );
              ("UTC:" === h || "GMT:" === h) &&
                ((t = t.slice(4)), (r = !0), "GMT:" === h && (n = !0));
              var y = r ? "getUTC" : "get",
                _ = e[y + "Date"](),
                v = e[y + "Day"](),
                b = e[y + "Month"](),
                A = e[y + "FullYear"](),
                E = e[y + "Hours"](),
                x = e[y + "Minutes"](),
                w = e[y + "Seconds"](),
                O = e[y + "Milliseconds"](),
                R = r ? 0 : e.getTimezoneOffset(),
                N =
                  ((u = e),
                  (d = new Date(u.getFullYear(), u.getMonth(), u.getDate())),
                  d.setDate(d.getDate() - ((d.getDay() + 6) % 7) + 3),
                  (m = new Date(d.getFullYear(), 0, 4)),
                  m.setDate(m.getDate() - ((m.getDay() + 6) % 7) + 3),
                  (p = d.getTimezoneOffset() - m.getTimezoneOffset()),
                  d.setHours(d.getHours() - p),
                  1 + Math.floor((d - m) / 6048e5)),
                C = ((f = e), (g = f.getDay()), 0 === g && (g = 7), g),
                k = {
                  d: _,
                  dd: l(_),
                  ddd: s.i18n.dayNames[v],
                  dddd: s.i18n.dayNames[v + 7],
                  m: b + 1,
                  mm: l(b + 1),
                  mmm: s.i18n.monthNames[b],
                  mmmm: s.i18n.monthNames[b + 12],
                  yy: String(A).slice(2),
                  yyyy: A,
                  h: E % 12 || 12,
                  hh: l(E % 12 || 12),
                  H: E,
                  HH: l(E),
                  M: x,
                  MM: l(x),
                  s: w,
                  ss: l(w),
                  l: l(O, 3),
                  L: l(Math.round(O / 10)),
                  t: E < 12 ? s.i18n.timeNames[0] : s.i18n.timeNames[1],
                  tt: E < 12 ? s.i18n.timeNames[2] : s.i18n.timeNames[3],
                  T: E < 12 ? s.i18n.timeNames[4] : s.i18n.timeNames[5],
                  TT: E < 12 ? s.i18n.timeNames[6] : s.i18n.timeNames[7],
                  Z: n
                    ? "GMT"
                    : r
                    ? "UTC"
                    : (String(e).match(o) || [""]).pop().replace(c, ""),
                  o:
                    (R > 0 ? "-" : "+") +
                    l(
                      100 * Math.floor(Math.abs(R) / 60) + (Math.abs(R) % 60),
                      4
                    ),
                  S: ["th", "st", "nd", "rd"][
                    _ % 10 > 3 ? 0 : (((_ % 100) - (_ % 10) != 10) * _) % 10
                  ],
                  W: N,
                  N: C,
                };
              return t.replace(i, function (e) {
                return e in k ? k[e] : e.slice(1, e.length - 1);
              });
            });
        function l(e, t) {
          for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
          return e;
        }
        (s.masks = {
          default: "ddd mmm dd yyyy HH:MM:ss",
          shortDate: "m/d/yy",
          mediumDate: "mmm d, yyyy",
          longDate: "mmmm d, yyyy",
          fullDate: "dddd, mmmm d, yyyy",
          shortTime: "h:MM TT",
          mediumTime: "h:MM:ss TT",
          longTime: "h:MM:ss TT Z",
          isoDate: "yyyy-mm-dd",
          isoTime: "HH:MM:ss",
          isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
          expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z",
        }),
          (s.i18n = {
            dayNames: [
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            monthNames: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
          }),
          void 0 !==
            (n = function () {
              return s;
            }.call(t, r, t, e)) && (e.exports = n);
      })(this);
    },
    21333: function (e, t, r) {
      "use strict";
      var n = r(67294),
        a = r(73935),
        i = r(45697),
        o = r.n(i);
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var s = function (e) {
        var t,
          r,
          i = e.selector,
          o = void 0 === i ? "body" : i,
          s = e.children,
          l =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((t = (0, n.useState)(!1))) ||
            (function (e, t) {
              var r,
                n,
                a =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != a) {
                var i = [],
                  o = !0,
                  c = !1;
                try {
                  for (
                    a = a.call(e);
                    !(o = (r = a.next()).done) &&
                    (i.push(r.value), !t || i.length !== t);
                    o = !0
                  );
                } catch (s) {
                  (c = !0), (n = s);
                } finally {
                  try {
                    o || null == a.return || a.return();
                  } finally {
                    if (c) throw n;
                  }
                }
                return i;
              }
            })(t, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return c(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(e);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return c(e, t);
              }
            })(t, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          u = l[0],
          d = l[1],
          m = (0, n.useRef)(null);
        (0, n.useEffect)(
          function () {
            (m.current = document.querySelector(o)), d(!0);
          },
          [o]
        );
        var p = (0, n.cloneElement)(s);
        return u ? (0, a.createPortal)(p, m.current) : p;
      };
      (s.propTypes = { selector: o().string, children: o().node.isRequired }),
        (t.Z = s);
    },
    71604: function (e, t, r) {
      "use strict";
      r.d(t, {
        WW: function () {
          return J;
        },
      });
      var n = r(67294),
        a = r(45697),
        i = r.n(a),
        o = r(93967),
        c = r.n(o),
        s = r(55022),
        l = r(26963);
      i().string.isRequired,
        i().element.isRequired,
        i().oneOfType([i().node, i().string]).isRequired,
        i().string.isRequired,
        i().string.isRequired,
        i().object,
        i().string,
        r(59563);
      var u = r(38957),
        d = (r(68227), r(62096)),
        m = r(99415),
        p = r(92756),
        f = r.n(p),
        g = r(34502),
        h = r.n(g),
        y = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/money-plus-circle.3e657c92.svg",
          height: 24,
          width: 24,
        },
        _ = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/international-card-globe.cc6046d8.svg",
          height: 24,
          width: 24,
        },
        v = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/pix.76ee12e8.svg",
          height: 28,
          width: 27,
        },
        b = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/digital-account-mobile.57f2b394.png",
          height: 243,
          width: 243,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AXt0M4Lz8vlGSFJRag0C7g0VEQhKJyMRHNTN4IQsRJvXAWNeMO8LDf0QKysZ8fXYAw/z+/kAVGYyAPf6Aak0N4tYAXKSeKwg/w1TKRr+AL+u0wDn7e37oET0BU4NDNuwP1o0AZ+wgnNGNmCMAf0C/MGnnQT2BAX/q//EAR4JBPZ/Rz44AZuDRVFKY5+u//3+/7qmpQEVIBv/NkVK/evv4ATm+cVtAaaLN1QcMn6r6+/7/FNumgKZg1kCZmJcAOfu6AC35byEAdOtNEm+w8y24vtHAMEJPABADwnzYVFJBPT39d9m2rs7AW9EAB05WGM14RE2LN/m+t8u+szLtXOhALUAAPCUu5Xoflh8cPWMxUkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        A = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/digital-account-mobile@2x.55d4a644.png",
          height: 486,
          width: 486,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AX54OYL28/ZGQ05QagwC7Q0VEAdKJyMRHNXN34QrRJzXAWdkOe8OD/4QJSUR8fXWAQ/y+/kAVGcyAPj6A6kzNolYAXWVe6wgAA9TJxf6AL6t0gDo7u77sEP3BUEODNusQ1s0AaGxhXNFNl6MAfwC/MGonQT2BAX/rf7FAR0KBfZ/ST84AZ6HTlBJYZev/vz+/7mmpAEWIBv/NkRL/ezx4QTm+cVtAaiNPVQaMHir6+/7/FNxmwKagVkCZWFbAOjv6QC35byEAdStNEnBxsy24fpIAL0IOwBCDwrzYVFJBPT49d9z3cA7AW9FAB07WGQ04BE1Ld/m+t8t+czLuXOhALEAAPCVvJbo1HV7qNbajJgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        E = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/digital-account-desktop.734001ed.png",
          height: 420,
          width: 420,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AYB5OILy8fZGRE5Rag0D7A0VEAhKJyMRHNXO4IQrQ5vXAWViN+8PEP8QJiUS8fXXAQ/y+/kAVGYyAPf7Aqk0NopYAXWUe6whAQ9TJhf6AL6t0gDo7u77rUP3BUMODNutRF00AaGxhHNFNl+MAfwC/MGonQT2BAX/rf/FAR0KBfaASUA4AZ6GTVBIYpiv//v+/7mmpAEWIRz/NUVK/e3w4gTm+cRtAaiNO1QaMHqr6+/7/FNxmwKagVkCZWFbAOjw6QC35LyEAdStNEnBxsy24fpIAL0IPABCDwnzYVFIBPT49t943sE7AW9EAB06WWQ04RE1Ld/m+t8t+czLunOhALAAAPCVvJbo2KB7tbpjFhkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/digital-account-desktop@2x.dabdeead.png",
          height: 840,
          width: 840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AYJ8OoLz8fZGQkxRag0C6g0UEAlKJyMQHNXO3oQrQ53XAWhlPO8REgEQISIM8fXVAQ/y/PgAVGYyAPj6BKkzNohYAXaWfawgAQ9TJhX4AL6t0gDp7+/7uEP6BTsOC9upRFk0AaGxhHNFNl+MAf0C/MGnnQT3BAb/sQDHARoKA/Z+SD84AZ6HTVBJYZiv//z//7imowEXIR3/NkRK/ezx4gTl+MRtAaiNPFQaMHmr6+/7/FNznAKbgFgCZGBbAOnw6gC35LyEAdStNUnDyMu24PlJALwHOwBDDwnzYVJKBPT49d9+38M7AW9FAB07WWU04RA1Ld7m+d8t+czLunOhALAAAPCWvJfobqN5xtc6rk4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        w = ["ctaLink", "audienceEvent", "className"];
      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function N() {
        return (N = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function C(e) {
        var t = e.ctaLink,
          r = e.audienceEvent,
          a = e.className,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  a = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]);
            }
            return a;
          })(e, w);
        return n.createElement(
          m.$0,
          N(
            {
              componentName: "digital-account-block",
              themeColoredBackground: !0,
              className: c()(f()["digital-account-block"], a),
            },
            i
          ),
          n.createElement(
            "div",
            { className: f()["digital-account-block__card"] },
            n.createElement(
              "div",
              { className: f()["digital-account-block__picture-container"] },
              n.createElement(m.t, {
                alt: "Mulher negra, de cabelo preto, express\xe3o sorridente, usando uma camiseta cinza clara de manga curta, cal\xe7a jeans, colar amarelo e duas pulseiras (sendo uma azul e outra marrom). Ela est\xe1 segurando um cart\xe3o de cr\xe9dito do PagBank, ao lado de uma maquininha e um celular com o aplicativo PagBank aberto. Sobre a imagem h\xe1 o selo de 1% de cashback no cart\xe3o de cr\xe9dito gr\xe1tis.",
                small: b,
                small2x: A,
                large: E,
                large2x: x,
                className: f()["digital-account-block__picture"],
              })
            ),
            n.createElement(
              "div",
              { className: f()["digital-account-block__content"] },
              n.createElement(
                "div",
                { className: f()["digital-account-block__text"] },
                n.createElement(
                  "h2",
                  { className: f()["digital-account-block__title"] },
                  "PagBank: seu\xa0banco\xa0completo"
                ),
                n.createElement(
                  "p",
                  { className: f()["digital-account-block__description"] },
                  "No PagBank voc\xea tem tudo o que precisa para vender mais e cuidar melhor do seu dinheiro. Aproveite a liberdade de definir o limite do seu cart\xe3o de cr\xe9dito internacional gr\xe1tis, a comodidade de pagar suas contas sem sair de casa, investir e acompanhar seu dinheiro rendendo mais que o dobro da poupan\xe7a. Resolva tudo pelo app, a qualquer momento, em qualquer lugar."
                )
              ),
              n.createElement(
                "div",
                { className: f()["digital-account-block__geometric-list"] },
                n.createElement(m.IM, {
                  itemColumnDirectionOnTablet: !0,
                  list: [
                    {
                      icon: n.createElement(m.Ee, { src: y, alt: "" }),
                      title: "Conta para PF e PJ",
                    },
                    {
                      icon: n.createElement(m.Ee, { src: _, alt: "" }),
                      title: "1% de cashback no cart\xe3o de cr\xe9dito",
                    },
                    {
                      icon: n.createElement(m.Ee, { src: v, alt: "" }),
                      title: "Pix gr\xe1tis e ilimitados",
                    },
                  ],
                })
              ),
              n.createElement(
                "div",
                { className: f()["digital-account-block__action"] },
                n.createElement(
                  s.Z,
                  {
                    href: t,
                    "data-uol-audience-event": r,
                    size: s.Z.Sizes.Mobile,
                  },
                  "Abra sua conta"
                )
              )
            )
          )
        );
      }
      (C.propTypes = {
        ctaLink: i().string.isRequired,
        audienceEvent: i().string.isRequired,
        className: i().string,
      }),
        ((0, d.Z)(C, { Button: h() }).propTypes = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? O(Object(r), !0).forEach(function (t) {
                  R(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        })({}, C.propTypes));
      var k = r(83776),
        T = r(85447),
        S = r.n(T),
        L = r(46815),
        q = ["className", "children"],
        P = [
          "title",
          "footer",
          "footerAlign",
          "loading",
          "className",
          "children",
          "actions",
          "highlight",
          "removeContainerPadding",
          "containerClassName",
          "titleClassName",
          "beforeContainer",
          "titleAppearance",
          "titleLevel",
          "clip",
        ];
      function D() {
        return (D = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function j(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (a[r] = e[r]);
        }
        return a;
      }
      var M = function (e) {
        var t = e.className,
          r = e.children,
          a = j(e, q),
          i = c()(S().cardboardNoPadding, t);
        return n.createElement(
          "div",
          D({ className: i }, a, {
            "data-subcomponent-name": "cardboard-nopadding",
          }),
          r
        );
      };
      M.propTypes = { className: i().string, children: i().node };
      var F = function (e) {
        var t = e.title,
          r = e.footer,
          a = e.footerAlign,
          i = e.loading,
          o = e.className,
          s = e.children,
          l = e.actions,
          u = e.highlight,
          d = e.removeContainerPadding,
          m = e.containerClassName,
          p = e.titleClassName,
          f = e.beforeContainer,
          g = e.titleAppearance,
          h = e.titleLevel,
          y = e.clip,
          _ = j(e, P);
        (0, L.ih)({
          component: "Cardboard",
          componentToUse: "CardBoard",
          componentUrl: "cardboard",
        });
        var v = c()(
          S().cardboard,
          {
            [S().cardboardLoading]: i,
            [S().cardboardClip]: y,
            [S().cardboardFooterAlignCenter]: r && "center" === a,
            [S().cardboardFooterAlignRight]: r && "right" === a,
            [S().cardboardHighlight]: Boolean(u),
            [S().cardboardHighlightOnTop]: "top" === u,
            [S().cardboardRemoveContainerPadding]: void 0 !== d && d,
          },
          o
        );
        return n.createElement(
          "div",
          D({ "data-component-name": "cardboard" }, _, { className: v }),
          f,
          n.createElement(
            "div",
            {
              className: c()(S().cardboardContainer, void 0 === m ? "" : m),
              "data-component-child": !0,
            },
            l
              ? n.createElement(
                  "div",
                  {
                    className: S().cardboardActions,
                    "data-component-child": !0,
                  },
                  l
                )
              : null,
            t
              ? n.createElement(
                  k.Z,
                  {
                    appearance: void 0 === g ? 5 : g,
                    className: c()(S().cardboardTitle, void 0 === p ? "" : p),
                    level: void 0 === h ? 1 : h,
                  },
                  t
                )
              : null,
            n.createElement(
              "div",
              { className: S().cardboardContent, "data-component-child": !0 },
              i ? null : s
            )
          ),
          r && !i
            ? n.createElement(
                "div",
                { className: S().cardboardFooter, "data-component-child": !0 },
                n.createElement(
                  "div",
                  {
                    className: S().cardboardContainer,
                    "data-component-child": !0,
                  },
                  r
                )
              )
            : null
        );
      };
      (F.propTypes = {
        title: i().node,
        titleLevel: i().number,
        footer: i().node,
        footerAlign: i().oneOf(["center", "right"]),
        loading: i().bool,
        className: i().string,
        children: i().node,
        actions: i().node,
        containerClassName: i().string,
        titleClassName: i().string,
        highlight: i().oneOfType([i().bool, i().oneOf(["top"])]),
        removeContainerPadding: i().bool,
        beforeContainer: i().node,
        titleAppearance: i().number,
        clip: i().bool,
      }),
        (F.NoPadding = M),
        (F.FooterAlign = { Center: "center", Right: "right" }),
        (F.Highlights = { Top: "top" });
      var I = r(88105),
        B = r(28660),
        V = r.n(B);
      i().arrayOf(
        i().shape({
          question: i().oneOfType([i().string, i().node]).isRequired,
          answer: i().node.isRequired,
          audienceEvent: i().string,
        })
      ).isRequired,
        i().string,
        i().number,
        i().number;
      var Z = r(68134),
        H = r(38421),
        G = r(8815),
        W = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/questions.e59f1399.svg",
          height: 24,
          width: 24,
        },
        U = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/email.bedc7c56.svg",
          height: 24,
          width: 24,
        },
        z = r(32194),
        Q = r.n(z);
      function J(e) {
        var t = e.questionsHref,
          r = e.questionsUolAudience,
          a = e.emailHref,
          i = e.emailUolAudience,
          o = e.level;
        return n.createElement(
          "div",
          { "data-component-name": "help", className: Q().help },
          n.createElement(G.Z, {
            title: "Ficou com alguma d\xfavida? Podemos te ajudar!",
            titleAlign: G.Z.Align.Center,
            level: void 0 === o ? 2 : o,
            addMarginBottom: !0,
          }),
          n.createElement(
            "div",
            { className: Q().help__buttons },
            n.createElement(H.Z, {
              href: void 0 === t ? "https://faq.pagbank.com.br" : t,
              icon: n.createElement(u.Z, {
                src: (0, Z.$)(W),
                alt: "Ilustra\xe7\xe3o de um bal\xe3o de conversa",
              }),
              label: "Perguntas frequentes",
              "data-uol-audience-event": r,
            }),
            n.createElement(H.Z, {
              href:
                void 0 === a
                  ? "https://pagbank.com.br/ajuda/envie-um-email"
                  : a,
              icon: n.createElement(u.Z, {
                src: (0, Z.$)(U),
                alt: "Ilustra\xe7\xe3o de um envelope de carta",
              }),
              label: "E-mail",
              "data-uol-audience-event": i,
            })
          )
        );
      }
      J.propTypes = {
        questionsHref: i().string,
        questionsUolAudience: i().string,
        emailHref: i().string,
        emailUolAudience: i().string,
        level: i().number,
      };
      var Y = r(80184),
        X = r(36039);
      i().string, r(93482);
      var K = r(93737),
        $ = r(78942),
        ee = r.n($);
      function et(e) {
        var t = e.readerShortName,
          r = e.readerGender,
          a = e.fullPrice,
          i = e.installments,
          o = e.installmentPrice,
          c = e.rebateValue,
          s = e.priceWithRebate,
          l = e.endDate,
          u = e.disclaimerUrl,
          d = e.audienceEventCategory,
          m = e.audienceEventAction,
          p = e.disclaimerReference,
          f = ee()["rebate-disclaimer-context__price"],
          g = r === et.ReaderGender.Male ? "O" : "A";
        return n.createElement(
          K.Z,
          { align: K.Z.Align.Center },
          p,
          " Voc\xea paga",
          " ",
          n.createElement("span", { className: f }, "R$ ", a),
          " (",
          i,
          "\xd7",
          " ",
          n.createElement("span", { className: f }, "R$ ", o),
          ") e recebe",
          " ",
          n.createElement("span", { className: f }, "R$ ", c),
          " de reembolso.",
          " ",
          g,
          " ",
          t,
          " custar\xe1 apenas",
          " ",
          n.createElement("span", { className: f }, "R$ ", s),
          ". Promo\xe7\xe3o v\xe1lida at\xe9 ",
          l,
          ".",
          " ",
          n.createElement(
            "a",
            {
              href: u,
              "data-uol-audience-event": "category: "
                .concat(d, "; action: ")
                .concat(m, "; label: ")
                .concat(t.toLowerCase(), ";"),
            },
            "Veja regulamento"
          )
        );
      }
      (et.ReaderGender = { Female: "female", Male: "male" }),
        (et.propTypes = {
          readerShortName: i().string.isRequired,
          readerGender: i().oneOf([
            et.ReaderGender.Female,
            et.ReaderGender.Male,
          ]).isRequired,
          fullPrice: i().string.isRequired,
          installments: i().string.isRequired,
          installmentPrice: i().string.isRequired,
          rebateValue: i().string.isRequired,
          priceWithRebate: i().string.isRequired,
          endDate: i().string.isRequired,
          disclaimerUrl: i().string.isRequired,
          audienceEventCategory: i().string.isRequired,
          audienceEventAction: i().string.isRequired,
          disclaimerReference: i().string.isRequired,
        }),
        r(18502),
        r(65106);
      var er = r(16306);
      i().string,
        i().string,
        i().string,
        i().string,
        i().string,
        i().shape({ category: i().string, action: i().string }),
        i().string;
      var en = r(35237),
        ea = r(73060),
        ei = r(88596),
        eo = r.n(ei),
        ec = ["children", "className"];
      function es() {
        return (es = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function el(e) {
        var t = e.children,
          r = e.className,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  a = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]);
            }
            return a;
          })(e, ec);
        return n.createElement(
          "div",
          es(
            {
              "data-component-name": "technical-data-sheet-grouper",
              className: c()(eo()["technical-data-sheet__grouper"], r),
            },
            a
          ),
          t
        );
      }
      el.propTypes = {
        className: i().string,
        children: i().oneOfType([i().element, i().arrayOf(i().element)]),
      };
      var eu = ["label", "items"];
      function ed() {
        return (ed = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function em(e) {
        var t = e.label,
          r = e.items,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  a = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]);
            }
            return a;
          })(e, eu);
        return (
          console.warn(
            "Componente `TechnicalDataSheet` est\xe1 obsoleto e n\xe3o receber\xe1 mais suporte."
          ),
          n.createElement(
            en.Z,
            ed({}, a, { closedLabel: t }),
            n.createElement(
              ea.Z,
              { className: eo()["technical-data-sheet__content"] },
              r.map(function (e, t) {
                return n.createElement(
                  ea.Z.Item,
                  {
                    key: t,
                    icon: n.createElement(ea.Z.ItemIcon, null, e.icon),
                    itemProps: {
                      className: eo()["technical-data-sheet__item"],
                    },
                  },
                  n.createElement(ea.Z.ItemText, {
                    primary: e.name,
                    primaryBold: !0,
                  })
                );
              })
            )
          )
        );
      }
      (em.propTypes = {
        label: i().string.isRequired,
        items: i().arrayOf(i().shape({ name: i().string, icon: i().element }))
          .isRequired,
      }),
        (em.Grouper = el);
      var ep = r(52562);
      r(28147);
      var ef = r(45737),
        eg = r(97763),
        eh = r(36897),
        ey = r.n(eh),
        e_ = {
          READERS: {
            backgroundColor: ["#FFFBA8", "#EBF18A"],
            title: "Para vender com maquininha",
          },
          PHONE: {
            backgroundColor: ["#DBF1F0", "#DBF1F0"],
            title: "Para vender pelo celular",
          },
        },
        ev = function (e) {
          var t = e.segment,
            r = e.readersPlans;
          return n.createElement(
            eg.Z,
            {
              className: ey().container,
              style: {
                background: "linear-gradient(to right, ".concat(
                  e_[t].backgroundColor,
                  ")"
                ),
              },
            },
            n.createElement(
              "p",
              { className: ey().container__segmentText },
              e_[t].title
            ),
            (null == r ? void 0 : r.length) > 1
              ? n.createElement(
                  "p",
                  { className: ey().container__segmentText },
                  e_[t].title
                )
              : null
          );
        };
      ev.propTypes = {
        segment: i().string.isRequired,
        readersPlans: i().arrayOf(i().object).isRequired,
      };
      var eb = r(80850),
        eA = r.n(eb);
      function eE() {
        return (eE = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      ((function (e) {
        var t = e.cards,
          r = e.hoveredCardId,
          a = e.selectedCardId,
          i = e.handleSelect,
          o = e.handleCardMouseEnter,
          c = e.handleCardMouseLeave,
          s = e.segment,
          l = e.onMoreInfoClick,
          u = t.filter(function (e) {
            return e.segment === s;
          });
        return n.createElement(
          "div",
          { className: eA().container },
          n.createElement(ev, { segment: s, readersPlans: u }),
          n.createElement(
            "div",
            { className: eA().container__cards },
            u.map(function (e) {
              return n.createElement(
                ef.Z,
                eE({ key: e.id }, e, {
                  isHovered: r === e.id,
                  isSelected: a === e.id,
                  onClick: i,
                  onMouseEnter: o,
                  onMouseLeave: c,
                  onMoreInfoClick: function () {
                    return null == l ? void 0 : l(e.id);
                  },
                })
              );
            })
          )
        );
      }).propTypes = {
        cards: i().arrayOf(
          i().shape({
            id: i().string.isRequired,
            segment: i().string.isRequired,
            planName: i().string.isRequired,
            planNameBgColor: i().string,
            selo: i().node,
            description: i().string.isRequired,
            taxes: i().arrayOf(
              i().shape({
                type: i().string.isRequired,
                value: i().string.isRequired,
              })
            ).isRequired,
            taxesTransparency: i().string,
            href: i().string.isRequired,
            dataAudience: i().string.isRequired,
            button: i().node,
            dataTestid: i().string.isRequired,
          })
        ).isRequired,
        hoveredCardId: i().string,
        selectedCardId: i().string,
        handleSelect: i().func.isRequired,
        handleCardMouseEnter: i().func.isRequired,
        handleCardMouseLeave: i().func.isRequired,
        segment: i().string.isRequired,
        onMoreInfoClick: i().func,
      }),
        i().arrayOf(
          i().shape({
            id: i().string.isRequired,
            planName: i().string.isRequired,
            planNameBgColor: i().string,
            selo: i().node,
            description: i().string.isRequired,
            taxes: i().arrayOf(
              i().shape({
                type: i().string.isRequired,
                value: i().string.isRequired,
              })
            ).isRequired,
            taxesTransparency: i().string,
            href: i().string.isRequired,
            dataAudience: i().string.isRequired,
            button: i().node,
            dataTestid: i().string.isRequired,
          })
        ).isRequired,
        i().func,
        i().func;
      var ex,
        ew,
        eO = r(28969),
        eR = r(86772),
        eN = r(37799),
        eC = r.n(eN);
      ((function (e) {
        var t = e.cards,
          r = e.hoveredCardId,
          a = e.selectedCardId,
          i = e.handleSelect,
          o = e.onPlanHover,
          c = e.onModalStateChange,
          s = e.segment,
          l = t.filter(function (e) {
            return e.segment === s;
          });
        return n.createElement(
          "div",
          { className: eC().container },
          n.createElement(ev, { segment: s }),
          n.createElement(
            "div",
            { className: eC().container__cards },
            l.map(function (e) {
              return n.createElement(eR.Z, {
                key: e.id,
                planData: e,
                isSelected: a === e.id,
                isHovered: r === e.id,
                onPlanSelect: i,
                onPlanHover: o,
                onModalStateChange: c,
                planCardProps: {},
                modalProps: {},
              });
            })
          )
        );
      }).propTypes = {
        cards: i().arrayOf(
          i().shape({
            id: i().string.isRequired,
            segment: i().string.isRequired,
            planName: i().string.isRequired,
            planNameBgColor: i().string,
            selo: i().node,
            description: i().node.isRequired,
            taxes: i().arrayOf(
              i().shape({
                type: i().string.isRequired,
                value: i().string.isRequired,
              })
            ).isRequired,
            standardTaxes: i().arrayOf(
              i().shape({
                type: i().string.isRequired,
                value: i().string.isRequired,
              })
            ),
            taxesTransparency: i().string,
            dataAudience: i().string.isRequired,
            dataTestid: i().string.isRequired,
            disclaimer: i().string,
            highlight: i().bool,
            tag: i().string,
            modalData: i().object,
          })
        ).isRequired,
        hoveredCardId: i().string,
        selectedCardId: i().string,
        handleSelect: i().func.isRequired,
        onPlanHover: i().func,
        onModalStateChange: i().func,
        segment: i().string.isRequired,
      }),
        i().arrayOf(
          i().shape({
            id: i().string.isRequired,
            planName: i().string.isRequired,
            planNameBgColor: i().string,
            selo: i().node,
            description: i().node.isRequired,
            taxes: i().arrayOf(
              i().shape({
                type: i().string.isRequired,
                value: i().string.isRequired,
              })
            ).isRequired,
            standardTaxes: i().arrayOf(
              i().shape({
                type: i().string.isRequired,
                value: i().string.isRequired,
              })
            ),
            taxesTransparency: i().string,
            dataAudience: i().string.isRequired,
            dataTestid: i().string.isRequired,
            disclaimer: i().string,
            highlight: i().bool,
            tag: i().string,
            segment: i().string.isRequired,
            modalData: i().shape({
              title: i().node.isRequired,
              segments: i().arrayOf(
                i().shape({
                  title: i().node,
                  disclaimer: i().string,
                  disclaimerBgColor: i().string,
                  disclaimerTextColor: i().string,
                  taxCardBgColor: i().string,
                  taxes: i().arrayOf(
                    i().shape({
                      type: i().string.isRequired,
                      value: i().string.isRequired,
                    })
                  ).isRequired,
                })
              ),
              informativeTable: i().shape({
                title: i().node.isRequired,
                selectors: i().arrayOf(
                  i().shape({
                    id: i().string.isRequired,
                    label: i().string.isRequired,
                  })
                ).isRequired,
                tables: i().objectOf(
                  i().shape({
                    headers: i().arrayOf(i().string).isRequired,
                    rows: i().arrayOf(i().arrayOf(i().string)).isRequired,
                  })
                ).isRequired,
              }),
              regulations: i().shape({
                link: i().string.isRequired,
                linkText: i().string,
                text: i().string,
                audienceEvent: i().string,
                dataTestid: i().string,
              }),
            }),
          })
        ).isRequired,
        i().func,
        i().func,
        i().func,
        i().func;
    },
    18298: function (e, t, r) {
      "use strict";
      r.d(t, {
        Cs: function () {
          return o;
        },
        PY: function () {
          return a;
        },
        aI: function () {
          return i;
        },
        xs: function () {
          return n;
        },
      });
      var n = "na hora",
        a = "14",
        i = "30",
        o = {
          [n]: { inCash: "4,99%", installments: "5,59%" },
          [a]: { inCash: "3,99%", installments: "4,59%" },
          [i]: { inCash: "3,19%", installments: "3,79%" },
        };
    },
    36383: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return u;
        },
        i: function () {
          return d;
        },
      });
      var n = r(67294),
        a = r(45697),
        i = r.n(a),
        o = r(18298);
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r,
              n,
              a =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != a) {
              var i = [],
                o = !0,
                c = !1;
              try {
                for (
                  a = a.call(e);
                  !(o = (r = a.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (s) {
                (c = !0), (n = s);
              } finally {
                try {
                  o || null == a.return || a.return();
                } finally {
                  if (c) throw n;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return s(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return s(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var l = (0, n.createContext)();
      function u(e) {
        var t = e.children,
          r = e.trackingReceiveDays,
          a = e.installmentsDisclaimerReference,
          i = e.inCash,
          s = e.installments,
          u = (0, n.useState)(i || o.Cs[o.aI].inCash),
          d = c(u, 2),
          m = d[0],
          p = d[1],
          f = (0, n.useState)(s || o.Cs[o.aI].installments),
          g = c(f, 2),
          h = g[0],
          y = g[1],
          _ = (0, n.useCallback)(function (e) {
            var t = o.Cs[e];
            p(t.inCash), y(t.installments);
          });
        return n.createElement(
          l.Provider,
          {
            value: {
              updateCreditValues: _,
              inCashValue: m,
              installmentsValue: h,
              trackingReceiveDays: r,
              installmentsDisclaimerReference: a,
            },
          },
          t
        );
      }
      function d() {
        var e = (0, n.useContext)(l);
        if (e) return e;
        throw Error(
          '"useCreditSimulator" must be used within an "CreditSimulatorContext".'
        );
      }
      u.propTypes = {
        children: i().node.isRequired,
        trackingReceiveDays: i().string,
        installmentsDisclaimerReference: i().string,
        inCash: i().string,
        installments: i().string,
      };
    },
    68227: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = r(67294),
        a = r(45697),
        i = r.n(a),
        o = r(93967),
        c = r.n(o),
        s = r(68849),
        l = r(3253),
        u = r(20129),
        d = r(36383),
        m = r(55748),
        p = r.n(m),
        f = r(16306),
        g = r.n(f);
      function h(e) {
        var t = e.rightAwayDisclaimerReference,
          r = e.trackingReceiveDays,
          a = e.installmentsDisclaimerReference;
        return n.createElement(
          l.gL,
          {
            componentName: "credit-simulator-card",
            className: p()["credit-simulator-card"],
            title: "Cr\xe9dito",
          },
          n.createElement(l.xv, { text: "Prazos de recebimento" }),
          n.createElement(
            d.A,
            { trackingReceiveDays: r, installmentsDisclaimerReference: a },
            n.createElement(
              s.Z.Group,
              {
                className: c()(
                  p()["credit-simulator-card__form-check-group"],
                  g()["tax-and-rates--margin-bottom"]
                ),
              },
              n.createElement(u.Gn, { rightAwayDisclaimerReference: t }),
              n.createElement(u.SY, null),
              n.createElement(u.VD, null)
            ),
            n.createElement(u.AX, null)
          )
        );
      }
      h.propTypes = {
        rightAwayDisclaimerReference: i().string,
        trackingReceiveDays: i().string,
        installmentsDisclaimerReference: i().string,
      };
    },
    20129: function (e, t, r) {
      "use strict";
      r.d(t, {
        SY: function () {
          return u;
        },
        VD: function () {
          return d;
        },
        Gn: function () {
          return m;
        },
        AX: function () {
          return h;
        },
      });
      var n = r(67294),
        a = r(45697),
        i = r.n(a),
        o = r(18298),
        c = r(68849),
        s = r(36383);
      function l(e) {
        var t = e.label,
          r = e.value,
          a = e.defaultChecked,
          i = (0, s.i)(),
          o = i.updateCreditValues,
          l = i.trackingReceiveDays;
        return n.createElement(
          c.Z,
          { label: t },
          n.createElement("input", {
            type: "radio",
            name: "creditSimulator",
            id: r,
            value: r,
            onChange: function (e) {
              return o(e.target.value);
            },
            defaultChecked: void 0 !== a && a,
            "data-uol-audience-event":
              l && "".concat(l, " label: ").concat(r, ";"),
          })
        );
      }
      function u() {
        return n.createElement(l, { label: "14 dias", value: o.PY });
      }
      function d() {
        return n.createElement(l, {
          label: "30 dias",
          value: o.aI,
          defaultChecked: !0,
        });
      }
      function m(e) {
        var t = e.rightAwayDisclaimerReference;
        return n.createElement(l, {
          label: n.createElement(
            n.Fragment,
            null,
            "NA HORA",
            t && n.createElement("sup", null, t)
          ),
          value: o.xs,
        });
      }
      (l.propTypes = {
        label: i().node.isRequired,
        value: i().string.isRequired,
        defaultChecked: i().bool,
      }),
        (m.propTypes = { rightAwayDisclaimerReference: i().string });
      var p = r(3253),
        f = r(23968),
        g = r.n(f);
      function h() {
        var e = (0, s.i)(),
          t = e.inCashValue,
          r = e.installmentsValue,
          a = e.installmentsDisclaimerReference;
        return n.createElement(
          "div",
          { className: g()["simulator-display"] },
          n.createElement(p.xv, {
            text: n.createElement(
              n.Fragment,
              null,
              n.createElement(p.Bw, { text: t }),
              "\xe0 vista"
            ),
          }),
          n.createElement("span", {
            className: g()["simulator-display__divider"],
          }),
          n.createElement(p.xv, {
            text: n.createElement(
              n.Fragment,
              null,
              n.createElement(p.Bw, { text: r }),
              "parcelado",
              a
            ),
          })
        );
      }
    },
    93482: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(67294),
        a = r(45697),
        i = r.n(a),
        o = r(3253),
        c = r(20129),
        s = r(36383),
        l = r(37186),
        u = r.n(l),
        d = r(16306),
        m = r.n(d);
      function p(e) {
        var t = e.title,
          r = e.receivement,
          a = e.rightAwayDisclaimerReference,
          i = e.rate,
          l = e.descriptionRate,
          d = e.inCashCredit,
          p = e.installmentsCredit,
          f = e.children;
        return (
          console.warn(
            "Componente `RatesInfoCard` est\xe1 obsoleto e n\xe3o receber\xe1 mais suporte."
          ),
          n.createElement(
            o.gL,
            {
              componentName: "rates-info-card",
              className: u()["rates-info-card"],
              title: t,
            },
            n.createElement(o.xv, {
              className: m()["tax-and-rates--margin-bottom"],
              text: n.createElement(
                n.Fragment,
                null,
                "Receba",
                n.createElement(o.Bw, {
                  size: o.Bw.Size.Small,
                  text: n.createElement(
                    n.Fragment,
                    null,
                    r,
                    a && n.createElement("sup", null, a)
                  ),
                })
              ),
            }),
            d || p
              ? n.createElement(
                  s.A,
                  { inCash: d, installments: p },
                  f,
                  n.createElement(c.AX, null)
                )
              : n.createElement(o.xv, {
                  text: n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(o.Bw, { text: i }),
                    l
                  ),
                })
          )
        );
      }
      p.propTypes = {
        title: i().string.isRequired,
        receivement: i().string,
        rightAwayDisclaimerReference: i().string,
        rate: i().string,
        descriptionRate: i().string,
        inCashCredit: i().string,
        installmentsCredit: i().string,
        children: i().node,
      };
    },
    18502: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return el;
        },
      });
      var n = r(67294),
        a = r(45697),
        i = r.n(a),
        o = r(5101),
        c = r(3253),
        s = r(8815),
        l = r(93967),
        u = r.n(l),
        d = r(85337),
        m = r.n(d),
        p = r(46815),
        f = [
          "type",
          "size",
          "isInline",
          "withBackground",
          "withCurrentColor",
          "className",
          "title",
          "children",
        ];
      function g() {
        return (g = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var h = function (e) {
        var t = e.type,
          r = e.size,
          a = e.isInline,
          i = e.withBackground,
          o = e.withCurrentColor,
          c = e.className,
          s = e.title,
          l = e.children,
          d = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  a = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]);
            }
            return a;
          })(e, f);
        (0, p.ih)({
          component: "Alert",
          componentToUse: "Feedback",
          componentUrl: "feedback",
        });
        var h = u()(
          m().alert,
          {
            [m().alertSuccess]: "success" === t,
            [m().alertInfo]: "info" === t,
            [m().alertWarning]: "warning" === t,
            [m().alertDanger]: "danger" === t,
            [m().alertWait]: "wait" === t,
            [m().alertLoader]: "loader" === t,
            [m().alertXs]: "x-small" === r,
            [m().alertSm]: "small" === r,
            [m().alertLg]: "large" === r,
            [m().bgAlert]: i,
            [m().alertCurrentColor]: o,
            [m().single]: a,
          },
          c
        );
        return n.createElement(
          "div",
          g({}, d, { className: h, "data-component-name": "alert" }),
          s
            ? n.createElement("strong", { "data-component-child": !0 }, s)
            : null,
          " ",
          n.createElement("p", { "data-component-child": !0 }, l)
        );
      };
      (h.propTypes = {
        type: i().oneOf([
          "success",
          "info",
          "warning",
          "danger",
          "wait",
          "loader",
        ]),
        size: i().oneOf(["x-small", "small", "large"]),
        isInline: i().bool,
        withBackground: i().bool,
        withCurrentColor: i().bool,
        className: i().string,
        title: i().node,
        children: i().node,
      }),
        (h.Sizes = { Large: "large", Small: "small", XSmall: "x-small" }),
        (h.Types = {
          Danger: "danger",
          Info: "info",
          Loader: "loader",
          Success: "success",
          Warning: "warning",
          Wait: "wait",
        });
      var y,
        _ = r(55022),
        v = "CREDIT_CARD-",
        b = "EMBEDDED",
        A = (0, r(35085).create)({
          baseURL: "https://api.site.pagseguro.uol.com.br",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      function E() {
        E = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          i = n.asyncIterator || "@@asyncIterator",
          o = n.toStringTag || "@@toStringTag";
        function c(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (s) {
          c = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, n) {
          var a,
            i,
            o,
            c,
            s = Object.create(
              (t && t.prototype instanceof m ? t : m).prototype
            ),
            l = new O(n || []);
          return (
            (s._invoke =
              ((o = l),
              (c = "suspendedStart"),
              function (t, n) {
                if ("executing" === c)
                  throw Error("Generator is already running");
                if ("completed" === c) {
                  if ("throw" === t) throw n;
                  return N();
                }
                for (o.method = t, o.arg = n; ; ) {
                  var a = o.delegate;
                  if (a) {
                    var i = A(a, o);
                    if (i) {
                      if (i === d) continue;
                      return i;
                    }
                  }
                  if ("next" === o.method) o.sent = o._sent = o.arg;
                  else if ("throw" === o.method) {
                    if ("suspendedStart" === c)
                      throw ((c = "completed"), o.arg);
                    o.dispatchException(o.arg);
                  } else "return" === o.method && o.abrupt("return", o.arg);
                  c = "executing";
                  var s = u(e, r, o);
                  if ("normal" === s.type) {
                    if (
                      ((c = o.done ? "completed" : "suspendedYield"),
                      s.arg === d)
                    )
                      continue;
                    return { value: s.arg, done: o.done };
                  }
                  "throw" === s.type &&
                    ((c = "completed"), (o.method = "throw"), (o.arg = s.arg));
                }
              })),
            s
          );
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (n) {
            return { type: "throw", arg: n };
          }
        }
        e.wrap = l;
        var d = {};
        function m() {}
        function p() {}
        function f() {}
        var g = {};
        c(g, a, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          y = h && h(h(R([])));
        y && y !== t && r.call(y, a) && (g = y);
        var _ = (f.prototype = m.prototype = Object.create(g));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var n;
          this._invoke = function (a, i) {
            function o() {
              return new t(function (n, o) {
                !(function n(a, i, o, c) {
                  var s = u(e[a], e, i);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      d = l.value;
                    return d && "object" == typeof d && r.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            n("next", e, o, c);
                          },
                          function (e) {
                            n("throw", e, o, c);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (l.value = e), o(l);
                          },
                          function (e) {
                            return n("throw", e, o, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, i, n, o);
              });
            }
            return (n = n ? n.then(o, o) : o());
          };
        }
        function A(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                A(e, t),
                "throw" === t.method)
              )
                return d;
              (t.method = "throw"),
                (t.arg = TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var n = u(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), d
            );
          var a = n.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : a
            : ((t.method = "throw"),
              (t.arg = TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function w(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function R(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = f),
          c(_, "constructor", f),
          c(f, "constructor", p),
          (p.displayName = c(f, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(b.prototype),
          c(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, i) {
            void 0 === i && (i = Promise);
            var o = new b(l(t, r, n, a), i);
            return e.isGeneratorFunction(r)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          v(_),
          c(_, o, "Generator"),
          c(_, a, function () {
            return this;
          }),
          c(_, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = R),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(w),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  o = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (c && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), w(r), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    w(r);
                  }
                  return a;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: R(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function x(e, t, r, n, a, i, o) {
        try {
          var c = e[i](o),
            s = c.value;
        } catch (l) {
          r(l);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(n, a);
      }
      function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var N = function (e) {
        if ("string" == typeof e) {
          var t;
          e = parseFloat((t = e).replace(",", "."));
        }
        return e
          .toFixed(2)
          .replace(".", ",")
          .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
      };
      function C(e) {
        return parseFloat(e.replace(/\./g, "").replace(/,/g, "."));
      }
      var k,
        T,
        S = function (e) {
          var t = e.replace(/[^0-9]/g, "").replace(/^0+/, ""),
            r = t.length;
          return (
            (t = r > 2 ? t.replace(/(\d*)(\d{2})$/, "$1.$2") : t),
            (t = 2 === r ? "0.".concat(t) : t),
            (t = "" !== (t = 1 === r ? "0.0".concat(t) : t) ? N(t) : "")
          );
        },
        L = function (e) {
          var t = Math.floor(e / 4);
          return t >= 12 ? 12 : t;
        },
        q = function (e, t) {
          if ("" !== e) {
            var r = L(C(e)),
              n = [
                { value: "", label: "" },
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? O(Object(r), !0).forEach(function (t) {
                          R(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : O(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })(
                  {},
                  t === b
                    ? {
                        value: "".concat("DEBIT_CARD-", "1"),
                        label: "D\xe9bito",
                      }
                    : {}
                ),
                { value: "".concat(v, "1"), label: "Cr\xe9dito \xe0 vista" },
              ];
            if (r > 1)
              for (var a = 2; a <= r; a++)
                n.push({
                  value: "".concat(v).concat(a),
                  label: "".concat(a, " parcelas"),
                });
            return n;
          }
          return [];
        },
        P = function (e, t, r) {
          var n,
            a,
            i =
              (function (e) {
                if (Array.isArray(e)) return e;
              })((n = t.split("-"))) ||
              (function (e, t) {
                var r,
                  n,
                  a =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                if (null != a) {
                  var i = [],
                    o = !0,
                    c = !1;
                  try {
                    for (
                      a = a.call(e);
                      !(o = (r = a.next()).done) &&
                      (i.push(r.value), !t || i.length !== t);
                      o = !0
                    );
                  } catch (s) {
                    (c = !0), (n = s);
                  } finally {
                    try {
                      o || null == a.return || a.return();
                    } finally {
                      if (c) throw n;
                    }
                  }
                  return i;
                }
              })(n, 2) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return w(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  if (
                    ("Object" === r &&
                      e.constructor &&
                      (r = e.constructor.name),
                    "Map" === r || "Set" === r)
                  )
                    return Array.from(e);
                  if (
                    "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return w(e, t);
                }
              })(n, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            o = i[0],
            c = i[1];
          return {
            channel: r === b ? "MOBILE" : "WEB",
            installmentType: "SELLER",
            installments: void 0 === c ? "" : c,
            paymentMethod: void 0 === o ? "" : o,
            price: C(e),
            select: t,
            type: r,
          };
        },
        D =
          ((k = E().mark(function e(t, r, n) {
            var a, i, o;
            return E().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = P(t, r, n)),
                        (e.prev = 1),
                        (e.next = 4),
                        A.post("ps-website-bff/v2/tax-and-rates/simulate", a)
                      );
                    case 4:
                      return (o = e.sent.data), e.abrupt("return", o);
                    case 9:
                      throw ((e.prev = 9), (e.t0 = e.catch(1)), Error(e.t0));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 9]]
            );
          })),
          (T = function () {
            var e = this,
              t = arguments;
            return new Promise(function (r, n) {
              var a = k.apply(e, t);
              function i(e) {
                x(a, r, n, i, o, "next", e);
              }
              function o(e) {
                x(a, r, n, i, o, "throw", e);
              }
              i(void 0);
            });
          }),
          function (e, t, r) {
            return T.apply(this, arguments);
          });
      function j() {
        j = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          i = n.asyncIterator || "@@asyncIterator",
          o = n.toStringTag || "@@toStringTag";
        function c(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (s) {
          c = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, n) {
          var a,
            i,
            o,
            c,
            s = Object.create(
              (t && t.prototype instanceof m ? t : m).prototype
            ),
            l = new w(n || []);
          return (
            (s._invoke =
              ((o = l),
              (c = "suspendedStart"),
              function (t, n) {
                if ("executing" === c)
                  throw Error("Generator is already running");
                if ("completed" === c) {
                  if ("throw" === t) throw n;
                  return R();
                }
                for (o.method = t, o.arg = n; ; ) {
                  var a = o.delegate;
                  if (a) {
                    var i = A(a, o);
                    if (i) {
                      if (i === d) continue;
                      return i;
                    }
                  }
                  if ("next" === o.method) o.sent = o._sent = o.arg;
                  else if ("throw" === o.method) {
                    if ("suspendedStart" === c)
                      throw ((c = "completed"), o.arg);
                    o.dispatchException(o.arg);
                  } else "return" === o.method && o.abrupt("return", o.arg);
                  c = "executing";
                  var s = u(e, r, o);
                  if ("normal" === s.type) {
                    if (
                      ((c = o.done ? "completed" : "suspendedYield"),
                      s.arg === d)
                    )
                      continue;
                    return { value: s.arg, done: o.done };
                  }
                  "throw" === s.type &&
                    ((c = "completed"), (o.method = "throw"), (o.arg = s.arg));
                }
              })),
            s
          );
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (n) {
            return { type: "throw", arg: n };
          }
        }
        e.wrap = l;
        var d = {};
        function m() {}
        function p() {}
        function f() {}
        var g = {};
        c(g, a, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          y = h && h(h(O([])));
        y && y !== t && r.call(y, a) && (g = y);
        var _ = (f.prototype = m.prototype = Object.create(g));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var n;
          this._invoke = function (a, i) {
            function o() {
              return new t(function (n, o) {
                !(function n(a, i, o, c) {
                  var s = u(e[a], e, i);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      d = l.value;
                    return d && "object" == typeof d && r.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            n("next", e, o, c);
                          },
                          function (e) {
                            n("throw", e, o, c);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (l.value = e), o(l);
                          },
                          function (e) {
                            return n("throw", e, o, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, i, n, o);
              });
            }
            return (n = n ? n.then(o, o) : o());
          };
        }
        function A(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                A(e, t),
                "throw" === t.method)
              )
                return d;
              (t.method = "throw"),
                (t.arg = TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var n = u(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), d
            );
          var a = n.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : a
            : ((t.method = "throw"),
              (t.arg = TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function w(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = f),
          c(_, "constructor", f),
          c(f, "constructor", p),
          (p.displayName = c(f, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(b.prototype),
          c(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, i) {
            void 0 === i && (i = Promise);
            var o = new b(l(t, r, n, a), i);
            return e.isGeneratorFunction(r)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          v(_),
          c(_, o, "Generator"),
          c(_, a, function () {
            return this;
          }),
          c(_, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = O),
          (w.prototype = {
            constructor: w,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  o = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (c && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), x(r), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    x(r);
                  }
                  return a;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function M(e, t, r, n, a, i, o) {
        try {
          var c = e[i](o),
            s = c.value;
        } catch (l) {
          r(l);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(n, a);
      }
      function F(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r,
              n,
              a =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != a) {
              var i = [],
                o = !0,
                c = !1;
              try {
                for (
                  a = a.call(e);
                  !(o = (r = a.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (s) {
                (c = !0), (n = s);
              } finally {
                try {
                  o || null == a.return || a.return();
                } finally {
                  if (c) throw n;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return I(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return I(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var B = (0, n.createContext)();
      function V(e) {
        var t,
          r = e.children,
          a = e.simulationType,
          i = e.trackingSellValue,
          o = e.trackingFormOfPayment,
          c = F((0, n.useState)(""), 2),
          s = c[0],
          l = c[1],
          u = F((0, n.useState)([]), 2),
          d = u[0],
          m = u[1],
          p = F((0, n.useState)(""), 2),
          f = p[0],
          g = p[1],
          h = F((0, n.useState)(!1), 2),
          y = h[0],
          _ = h[1],
          v = F((0, n.useState)(!1), 2),
          b = v[0],
          A = v[1],
          E = F((0, n.useState)(!1), 2),
          x = E[0],
          w = E[1],
          O = F((0, n.useState)("0,00"), 2),
          R = O[0],
          N = O[1],
          k = F((0, n.useState)("0,00"), 2),
          T = k[0],
          L = k[1],
          P = F((0, n.useState)("0,00"), 2),
          I = P[0],
          V = P[1],
          Z = (0, n.useCallback)(function () {
            g(""), _(!1), N("0,00"), L("0,00"), V("0,00");
          }),
          H = (0, n.useCallback)(function (e) {
            l(S(e));
          }),
          G = (0, n.useCallback)(function () {
            var e;
            _(1 > C(s));
          }),
          W = (0, n.useCallback)(function (e) {
            g(e);
          }),
          U = (0, n.useCallback)(function (e) {
            var t,
              r = e.reduce(function (e, t) {
                return (
                  (e["receiveIn".concat(t.escrow, "Days")] = S(
                    Number(t.netAmount).toFixed(2)
                  )),
                  e
                );
              }, {}),
              n = r.receiveIn0Days,
              a = r.receiveIn14Days,
              i = r.receiveIn30Days;
            N(n), L(a), V(i);
          }),
          z = (0, n.useCallback)(
            ((t = j().mark(function e() {
              var t;
              return j().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          w(!1), A(!0), (e.prev = 2), (e.next = 5), D(s, f, a)
                        );
                      case 5:
                        U(e.sent), A(!1), (e.next = 14);
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(2)), w(!0), A(!1);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 10]]
              );
            })),
            function () {
              var e = this,
                r = arguments;
              return new Promise(function (n, a) {
                var i = t.apply(e, r);
                function o(e) {
                  M(i, n, a, o, c, "next", e);
                }
                function c(e) {
                  M(i, n, a, o, c, "throw", e);
                }
                o(void 0);
              });
            })
          );
        return (
          (0, n.useEffect)(
            function () {
              Z(), m(q(s, a));
            },
            [s]
          ),
          (0, n.useEffect)(
            function () {
              f && z();
            },
            [f]
          ),
          n.createElement(
            B.Provider,
            {
              value: {
                simulationType: a,
                salesPrice: s,
                salesPriceTyped: H,
                validateMinimumValue: G,
                showMinimumValueAlert: y,
                formsOfPaymentList: d,
                formOfPayment: f,
                selectedFormOfPayment: W,
                getData: z,
                isLoading: b,
                isError: x,
                receiveRightAway: R,
                receiveIn14Days: T,
                receiveIn30Days: I,
                trackingSellValue: i,
                trackingFormOfPayment: o,
              },
            },
            r
          )
        );
      }
      function Z() {
        var e = (0, n.useContext)(B);
        if (e) return e;
        throw Error(
          '"useSellingSimulator" must be used within an "SellingSimulatorContext".'
        );
      }
      V.propTypes = {
        children: i().node.isRequired,
        simulationType: i().oneOf(["WEB", b]).isRequired,
        trackingSellValue: i().string,
        trackingFormOfPayment: i().shape({
          category: i().string,
          action: i().string,
        }),
      };
      var H = r(60862),
        G = r.n(H);
      function W() {
        var e = Z(),
          t = e.isLoading,
          r = e.isError,
          a = e.getData;
        return n.createElement(
          n.Fragment,
          null,
          t &&
            n.createElement(
              "div",
              { className: G()["alert-message"] },
              n.createElement(
                h,
                { type: h.Types.Loader, title: "Aguarde" },
                "Estamos calculando suas informa\xe7\xf5es"
              )
            ),
          r &&
            n.createElement(
              "div",
              { className: G()["alert-message"] },
              n.createElement(
                "div",
                { className: G()["alert-message__wrapper"] },
                n.createElement(
                  h,
                  { type: h.Types.Warning, title: "Ops..." },
                  "N\xe3o conseguimos realizar sua simula\xe7\xe3o de venda agora, tente novamente em instantes."
                ),
                n.createElement(
                  _.Z,
                  {
                    appearance: _.Z.Appearances.Link,
                    size: _.Z.Sizes.Small,
                    onClick: a,
                  },
                  "Tente novamente"
                )
              )
            )
        );
      }
      var U = r(57654),
        z = r.n(U);
      function Q() {
        var e = (0, n.useRef)(null),
          t = Z(),
          r = t.formOfPayment,
          a = t.formsOfPaymentList,
          i = t.selectedFormOfPayment,
          c = t.validateMinimumValue,
          s = t.showMinimumValueAlert,
          l = t.trackingFormOfPayment;
        (0, n.useEffect)(
          function () {
            s && e.current.blur();
          },
          [s]
        );
        var u = (0, n.useCallback)(function () {
            c();
          }),
          d = function (e) {
            if (
              (i(e.target.value),
              Boolean(l) && window && void 0 !== window.uolAnalytics)
            ) {
              var t = l.category,
                r = l.action;
              window.uolAnalytics("event", {
                category: t,
                action: r,
                label: e.target.value,
              });
            }
          };
        return n.createElement(
          o.Z,
          null,
          n.createElement(
            "select",
            {
              ref: e,
              className: z()["forms-of-payment--hide-option"],
              name: "form-of-payment",
              id: "form-of-payment",
              placeholder: "Forma de pagamento",
              value: r,
              onFocus: u,
              onChange: d,
              required: !0,
              disabled: 0 === a.length || s,
            },
            a &&
              a.map(function (e, t) {
                return n.createElement(
                  "option",
                  { key: t, value: e.value },
                  e.label
                );
              })
          )
        );
      }
      var J = r(68167),
        Y = r.n(J);
      function X() {
        var e = Z().showMinimumValueAlert;
        return n.createElement(
          n.Fragment,
          null,
          e &&
            n.createElement(
              "p",
              { className: Y()["minimum-value"] },
              "Valor m\xednimo: ",
              n.createElement("strong", null, "R$ 1,00"),
              "."
            )
        );
      }
      var K = r(16306),
        $ = r.n(K);
      function ee() {
        var e = Z(),
          t = e.showMinimumValueAlert,
          r = e.salesPrice,
          a = e.salesPriceTyped,
          i = e.trackingSellValue;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            o.Z,
            {
              className: $()["tax-and-rates--margin-bottom"],
              prefix: "R$",
              appearance: t ? o.Z.Appearances.Warning : null,
            },
            n.createElement("input", {
              type: "text",
              id: "sales-price",
              placeholder: "Digite o valor",
              maxLength: "12",
              value: r,
              onChange: function (e) {
                return a(e.target.value);
              },
              "data-uol-audience-event": i,
            })
          )
        );
      }
      var et = r(41312),
        er = r.n(et);
      function en(e) {
        var t = e.title,
          r = e.value;
        return n.createElement(
          "div",
          { className: er()["value-to-receive"] },
          n.createElement(c.Dx, { text: t }),
          n.createElement(c.xv, {
            text: n.createElement(
              n.Fragment,
              null,
              r
                ? n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      "small",
                      { className: er()["value-to-receive__currency"] },
                      "R$\xa0"
                    ),
                    n.createElement(
                      "strong",
                      { className: er()["value-to-receive__value"] },
                      r
                    )
                  )
                : n.createElement(
                    "small",
                    { className: er()["value-to-receive__currency"] },
                    "N\xe3o dispon\xedvel"
                  )
            ),
          })
        );
      }
      en.propTypes = { title: i().node.isRequired, value: i().string };
      var ea = r(76478),
        ei = r.n(ea);
      function eo(e) {
        var t = e.rightAwayDisclaimerReference,
          r = Z(),
          a = r.receiveRightAway,
          i = r.receiveIn14Days,
          o = r.receiveIn30Days;
        return n.createElement(
          "div",
          { className: ei()["values-display"] },
          n.createElement(
            "h4",
            { className: ei()["values-display__title"] },
            "Voc\xea recebe:"
          ),
          n.createElement(en, {
            title: n.createElement(
              n.Fragment,
              null,
              "Na hora",
              t && n.createElement("sup", null, t)
            ),
            value: a,
          }),
          n.createElement(en, { title: "Em 14 dias", value: i }),
          n.createElement(en, { title: "Em 30 dias", value: o })
        );
      }
      eo.propTypes = { rightAwayDisclaimerReference: i().string };
      var ec = r(90150),
        es = r.n(ec);
      function el(e) {
        var t = e.simulationType,
          r = void 0 === t ? el.Type.Readers : t,
          a = e.rightAwayDisclaimerReference,
          i = e.trackingSellValue,
          l = e.trackingFormOfPayment;
        return (
          console.warn(
            "O componente SellingSimulatorCard est\xe1 obsoleto e n\xe3o receber\xe1 mais suporte."
          ),
          n.createElement(
            c.gL,
            {
              componentName: "selling-simulator-card",
              className: es()["selling-simulator-card"],
            },
            n.createElement(s.Z, {
              title: "Simule aqui sua venda",
              titleAlign: s.Z.Align.CenterMobile,
              addMarginBottom: !0,
            }),
            n.createElement(
              V,
              {
                simulationType: r,
                trackingSellValue: i,
                trackingFormOfPayment: l,
              },
              n.createElement(
                "div",
                { className: es()["selling-simulator-card__container"] },
                n.createElement(W, null),
                n.createElement(
                  o.Z.Row,
                  { className: es()["selling-simulator-card__sales-price"] },
                  n.createElement(ee, null),
                  n.createElement(Q, null)
                ),
                n.createElement(eo, { rightAwayDisclaimerReference: a })
              ),
              n.createElement(X, null)
            )
          )
        );
      }
      (el.Type = { Online: "WEB", Readers: b }),
        (el.propTypes = {
          simulationType: i().oneOf([el.Type.Online, el.Type.Readers]),
          rightAwayDisclaimerReference: i().string,
          trackingSellValue: i().string,
          trackingFormOfPayment: i().shape({
            category: i().string,
            action: i().string,
          }),
        });
    },
    3253: function (e, t, r) {
      "use strict";
      r.d(t, {
        gL: function () {
          return f;
        },
        xv: function () {
          return y;
        },
        Bw: function () {
          return b;
        },
        Dx: function () {
          return d;
        },
      });
      var n = r(67294),
        a = r(45697),
        i = r.n(a),
        o = r(93967),
        c = r.n(o),
        s = r(59563),
        l = r(40572),
        u = r.n(l);
      function d(e) {
        var t = e.text;
        return n.createElement("h5", { className: u().title }, t);
      }
      d.propTypes = { text: i().node.isRequired };
      var m = r(40224),
        p = r.n(m);
      function f(e) {
        var t = e.componentName,
          r = e.className,
          a = e.title,
          i = e.children;
        return n.createElement(
          s.Z,
          {
            componentName: t,
            className: c()(p()["block-card-container"], r && r),
            spacingVertical: s.Z.Spacing.Large,
          },
          a && n.createElement(d, { text: a }),
          i
        );
      }
      f.propTypes = {
        componentName: i().string.isRequired,
        className: i().string,
        title: i().string,
        children: i().node.isRequired,
      };
      var g = r(95546),
        h = r.n(g);
      function y(e) {
        var t = e.className,
          r = e.text;
        return n.createElement("p", { className: c()(h().text, t && t) }, r);
      }
      y.propTypes = { className: i().string, text: i().node.isRequired };
      var _ = r(55027),
        v = r.n(_);
      function b(e) {
        var t = e.className,
          r = e.size,
          a = void 0 === r ? b.Size.Small : r,
          i = e.text;
        return n.createElement(
          "span",
          {
            className: c()(
              v()["text-highlight"],
              v()["text-highlight--".concat(a)],
              t && t
            ),
          },
          i
        );
      }
      (b.Size = { Small: "sm", Large: "lg" }),
        (b.propTypes = {
          className: i().string,
          text: i().oneOfType([i().string, i().object]).isRequired,
          size: i().oneOf([b.Size.Small, b.Size.Large]),
        });
    },
    65106: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = r(67294),
        a = r(45697),
        i = r.n(a),
        o = r(55022),
        c = r(3253),
        s = r(50127),
        l = r.n(s),
        u = r(16306),
        d = r.n(u);
      function m(e) {
        var t = e.trackingKnowMore;
        return n.createElement(
          c.gL,
          {
            componentName: "voucher-info-card",
            className: l()["voucher-info-card"],
            title: "Voucher",
          },
          n.createElement(c.xv, {
            className: d()["tax-and-rates--margin-bottom"],
            text: "Taxa e prazo de recebimento a serem negociados com a bandeira.",
          }),
          n.createElement(
            o.Z,
            {
              href: "https://pagbank.com.br/para-seu-negocio/voucher",
              appearance: o.Z.Appearances.Link,
              size: o.Z.Sizes.XSmall,
              "data-uol-audience-event": t,
            },
            "Saiba mais"
          )
        );
      }
      m.propTypes = { trackingKnowMore: i().string };
    },
    85337: function (e) {
      e.exports = {
        alert: "alerts_alert__93K6e",
        alertLink: "alerts_alertLink__6VdJN",
        btn: "alerts_btn__TF977",
        table: "alerts_table__KDXvC",
        inlineTexts: "alerts_inlineTexts__sVitm",
        single: "alerts_single__8wTH6",
        iconCentered: "alerts_iconCentered__xuS_F",
        alertDismissable: "alerts_alertDismissable__MlbVW",
        alertDismissible: "alerts_alertDismissible__ppa5G",
        close: "alerts_close__NLphZ",
        alertSuccess: "alerts_alertSuccess__IChDR",
        alertInfo: "alerts_alertInfo__74O1q",
        alertWarning: "alerts_alertWarning__yYk2o",
        alertDanger: "alerts_alertDanger__jQdPa",
        alertBlock: "alerts_alertBlock__NzYAF",
        alertWait: "alerts_alertWait__nEnyu",
        alertLoader: "alerts_alertLoader__Gy0ns",
        bgAlert: "alerts_bgAlert__mF2vX",
        alertXs: "alerts_alertXs___VgeA",
        alertSm: "alerts_alertSm__EWQXC",
        alertLg: "alerts_alertLg__XblTi",
        helpBlock: "alerts_helpBlock__0Mv63",
        alertMessage: "alerts_alertMessage__WJRAd",
        hasLoader: "alerts_hasLoader__ixr_d",
        spin: "alerts_spin__yrBjr",
        alertCurrentColor: "alerts_alertCurrentColor__peq4q",
      };
    },
    85447: function (e) {
      e.exports = {
        cardboardContainer: "cardboard_cardboardContainer__rU7pO",
        cardboardFooter: "cardboard_cardboardFooter__J0ZrU",
        cardboardLoading: "cardboard_cardboardLoading__WykwM",
        cardboardContent: "cardboard_cardboardContent__KCaOp",
        spin: "cardboard_spin__faO6T",
        cardboard: "cardboard_cardboard__o569z",
        cardboardTitle: "cardboard_cardboardTitle__11j9V",
        cardboardClip: "cardboard_cardboardClip__npDz4",
        cardboardNoPadding: "cardboard_cardboardNoPadding__WURzG",
        cardboardActions: "cardboard_cardboardActions__hCJhZ",
        cardboardHighlight: "cardboard_cardboardHighlight__cWDdD",
        cardboardHighlightOnTop: "cardboard_cardboardHighlightOnTop__0a8Ls",
        cardboardFooterAlignCenter:
          "cardboard_cardboardFooterAlignCenter__LODnB",
        cardboardFooterAlignRight: "cardboard_cardboardFooterAlignRight__rWzh_",
        cardboardRemoveContainerPadding:
          "cardboard_cardboardRemoveContainerPadding__HbAn3",
      };
    },
    26963: function (e) {
      e.exports = {
        "card-product-service": "styles_card-product-service__ruOuy",
        "card-product-service__logo":
          "styles_card-product-service__logo__MNYl4",
        "card-product-service__content":
          "styles_card-product-service__content__Ihd66",
        "card-product-service__header":
          "styles_card-product-service__header__sD9qQ",
        "card-product-service__description":
          "styles_card-product-service__description__HsqFm",
      };
    },
    55748: function (e) {
      e.exports = {
        "credit-simulator-card__form-check-group":
          "styles_credit-simulator-card__form-check-group__JsORj",
        "credit-simulator-card": "styles_credit-simulator-card__fYYMM",
      };
    },
    23968: function (e) {
      e.exports = {
        "simulator-display": "styles_simulator-display__LFs1e",
        "simulator-display__divider":
          "styles_simulator-display__divider__SEyos",
      };
    },
    34502: function (e) {
      e.exports = {
        button: "button_button__GEOZt",
        "button--alt": "button_button--alt__APCj6",
        "button--alt-negative": "button_button--alt-negative__p2fb0",
        "button--link": "button_button--link__NvUsQ",
        "button--link-negative": "button_button--link-negative__NulHW",
        "button--disabled": "button_button--disabled__uHviO",
        button__icon: "button_button__icon__znLlN",
        "button--active": "button_button--active__mUXVH",
        buttonLink: "button_buttonLink__xj4RF",
        "buttonLink--alt": "button_buttonLink--alt__ldw3p",
      };
    },
    92756: function (e) {
      e.exports = {
        "digital-account-block": "styles_digital-account-block__9Rm_j",
        "digital-account-block__card":
          "styles_digital-account-block__card__Zg3d8",
        "digital-account-block__picture-container":
          "styles_digital-account-block__picture-container__HB3SG",
        "digital-account-block__picture":
          "styles_digital-account-block__picture__AE8kn",
        "digital-account-block__text":
          "styles_digital-account-block__text__uu_GZ",
        "digital-account-block__title":
          "styles_digital-account-block__title__08HwE",
        "digital-account-block__description":
          "styles_digital-account-block__description__BZSw0",
        "digital-account-block__geometric-list":
          "styles_digital-account-block__geometric-list__F9zQP",
        "digital-account-block__action":
          "styles_digital-account-block__action__k0QpV",
      };
    },
    28660: function (e) {
      e.exports = {
        faq__title: "styles_faq__title__x5HVq",
        "faq__card-board": "styles_faq__card-board__uB9OZ",
      };
    },
    32194: function (e) {
      e.exports = { help__buttons: "styles_help__buttons__jQOLE" };
    },
    36039: function (e) {
      e.exports = {
        "info-card-free-account__container":
          "styles_info-card-free-account__container__T3bWr",
        "info-card-free-account__title":
          "styles_info-card-free-account__title__Pyadh",
        "info-card-free-account__content":
          "styles_info-card-free-account__content__nE3M0",
        "info-card-free-account__icon":
          "styles_info-card-free-account__icon__CY7mV",
        "info-card-free-account__list":
          "styles_info-card-free-account__list__UVN0t",
        "info-card-free-account__list-item":
          "styles_info-card-free-account__list-item__DfxWI",
      };
    },
    37799: function (e) {
      e.exports = {
        container: "styles_container__wxvxK",
        container__cards: "styles_container__cards__ejo1m",
      };
    },
    28969: function (e) {
      e.exports = {
        carousel: "styles_carousel__iOiqJ",
        categoryHeader: "styles_categoryHeader__3JzHg",
      };
    },
    80850: function (e) {
      e.exports = {
        container: "styles_container___beEx",
        container__cards: "styles_container__cards__NoCBA",
      };
    },
    36897: function (e) {
      e.exports = {
        container: "styles_container__BhLBC",
        container__segmentText: "styles_container__segmentText__gBQhL",
      };
    },
    52562: function (e) {
      e.exports = {
        carousel: "styles_carousel__W3__d",
        categoryHeader: "styles_categoryHeader__3DXt3",
      };
    },
    37186: function (e) {
      e.exports = { "rates-info-card": "styles_rates-info-card__bdG9x" };
    },
    78942: function (e) {
      e.exports = {
        "rebate-disclaimer-context__price":
          "styles_rebate-disclaimer-context__price__LgiXi",
      };
    },
    90150: function (e) {
      e.exports = {
        "selling-simulator-card": "styles_selling-simulator-card__Va_ZU",
        "selling-simulator-card__container":
          "styles_selling-simulator-card__container___pTLk",
        "selling-simulator-card__sales-price":
          "styles_selling-simulator-card__sales-price__tZxVJ",
      };
    },
    60862: function (e) {
      e.exports = {
        "alert-message": "styles_alert-message__w5DYg",
        "alert-message__wrapper": "styles_alert-message__wrapper__p3uRz",
      };
    },
    57654: function (e) {
      e.exports = {
        "forms-of-payment--hide-option":
          "styles_forms-of-payment--hide-option__8cdQB",
      };
    },
    68167: function (e) {
      e.exports = { "minimum-value": "styles_minimum-value__Ca7yJ" };
    },
    41312: function (e) {
      e.exports = {
        "value-to-receive": "styles_value-to-receive__S_yKU",
        "value-to-receive__currency":
          "styles_value-to-receive__currency__nVwty",
        "value-to-receive__value": "styles_value-to-receive__value__68FzT",
      };
    },
    76478: function (e) {
      e.exports = {
        "values-display": "styles_values-display__aTxNs",
        "values-display__title": "styles_values-display__title__MLUP9",
      };
    },
    16306: function (e) {
      e.exports = {
        "tax-and-rates": "styles_tax-and-rates__QDoOF",
        "tax-and-rates--margin-bottom":
          "styles_tax-and-rates--margin-bottom__u7g4K",
        "tax-and-rates__disclaimer-group":
          "styles_tax-and-rates__disclaimer-group__j37TO",
      };
    },
    40224: function (e) {
      e.exports = {
        "block-card-container": "styles_block-card-container__QWHJ3",
      };
    },
    55027: function (e) {
      e.exports = {
        "text-highlight": "styles_text-highlight__RGcWD",
        "text-highlight--sm": "styles_text-highlight--sm__rVctE",
        "text-highlight--lg": "styles_text-highlight--lg__fQl5X",
      };
    },
    95546: function (e) {
      e.exports = { text: "styles_text__aiJ27" };
    },
    40572: function (e) {
      e.exports = { title: "styles_title__HcbgN" };
    },
    88596: function (e) {
      e.exports = {
        "technical-data-sheet__content":
          "styles_technical-data-sheet__content__8pREB",
        "technical-data-sheet__item":
          "styles_technical-data-sheet__item__0tPNy",
        "technical-data-sheet__grouper":
          "styles_technical-data-sheet__grouper__mVf5u",
      };
    },
    50127: function (e) {
      e.exports = { "voucher-info-card": "styles_voucher-info-card__JE4kQ" };
    },
  },
]);
