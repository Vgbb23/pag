(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4877],
  {
    47595: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return m;
        },
      });
      var r = n(67294),
        a = n(45697),
        i = n.n(a),
        o = n(12859),
        s = n.n(o),
        c = n(93967),
        l = n.n(c),
        u = { small: 30, medium: 40, large: 60 };
      function m(e) {
        var t = e.data,
          n = e.className,
          a = e.size,
          i = void 0 === a ? "medium" : a;
        return r.createElement(
          "div",
          { className: l()(s().container, n) },
          t.map(function (e) {
            return r.createElement(
              "span",
              {
                key: e,
                className: "ps-brand-x"
                  .concat(u[i], " ps-brand-x")
                  .concat(u[i], "--")
                  .concat(e),
                title: e,
              },
              e
            );
          })
        );
      }
      m.propTypes = {
        data: i().array.isRequired,
        size: i().oneOf(["small", "medium", "large"]),
        className: i().string,
      };
    },
    46199: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return d;
        },
      });
      var r = n(67294),
        a = n(93967),
        i = n.n(a),
        o = n(45697),
        s = n.n(o),
        c = n(99415),
        l = n(47352),
        u = n.n(l),
        m = function (e) {
          var t = e[0];
          return "object" == typeof t && "iconSource" in t && "text" in t;
        };
      function d(e) {
        var t = e.listClassName,
          n = e.singleIcon,
          a = e.items;
        return r.createElement(
          "ul",
          { className: i()(t, u().list) },
          m(a)
            ? a.map(function (e) {
                var t = e.iconSource,
                  n = e.text;
                return r.createElement(
                  "li",
                  { className: u().listItem, key: n },
                  r.createElement(c.Ee, { src: t, alt: "Icone" }),
                  n
                );
              })
            : a.map(function (e, t) {
                return r.createElement(
                  "li",
                  {
                    className: u().listItem,
                    key: "HeroList singleIcon ".concat(t),
                  },
                  r.createElement(c.Ee, { src: n, alt: "Icone de check" }),
                  e
                );
              })
        );
      }
      d.propTypes = {
        listClassName: s().string,
        singleIcon: s().string,
        items: s().arrayOf(
          s().oneOfType([
            s().shape({
              iconSource: s().string,
              text: s().oneOfType([s().string, s().node]),
            }),
            s().oneOfType([s().string, s().node]),
          ])
        ).isRequired,
      };
    },
    4440: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return a;
        },
        i: function () {
          return i;
        },
      });
      var r = n(67294),
        a = (0, r.createContext)(null);
      function i() {
        var e = (0, r.useContext)(a);
        if (!e) throw Error("ProductContext is required");
        return e;
      }
    },
    37872: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return i;
        },
      });
      var r = n(67294);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e) {
        var t,
          n,
          i =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((t = (0, r.useState)(!1))) ||
            (function (e, t) {
              var n,
                r,
                a =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != a) {
                var i = [],
                  o = !0,
                  s = !1;
                try {
                  for (
                    a = a.call(e);
                    !(o = (n = a.next()).done) &&
                    (i.push(n.value), !t || i.length !== t);
                    o = !0
                  );
                } catch (c) {
                  (s = !0), (r = c);
                } finally {
                  try {
                    o || null == a.return || a.return();
                  } finally {
                    if (s) throw r;
                  }
                }
                return i;
              }
            })(t, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return a(e, t);
              }
            })(t, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          o = i[0],
          s = i[1];
        return (
          (0, r.useEffect)(
            function () {
              var t = window.matchMedia(e);
              t.matches !== o && s(t.matches);
              var n = function () {
                return s(t.matches);
              };
              return (
                window.addEventListener("resize", n),
                function () {
                  return window.removeEventListener("resize", n);
                }
              );
            },
            [o, e]
          ),
          o
        );
      }
    },
    8203: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var r = n(67294),
        a = n(45697),
        i = n.n(a),
        o = n(93967),
        s = n.n(o),
        c = n(99415),
        l = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-percent.6c53b149.svg",
          height: 60,
          width: 61,
        },
        u = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-heart.da4f1116.svg",
          height: 60,
          width: 61,
        },
        m = n(80977),
        d = n.n(m);
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function p(e) {
        return r.createElement(
          c.$0,
          f(
            {
              isContainer: !1,
              className: s()(d().section, e.sectionStyleClass),
            },
            e
          ),
          r.createElement(
            c.W2,
            { className: d().container },
            r.createElement(
              "div",
              { className: d().card },
              r.createElement(
                "div",
                { className: d().cardContainer },
                r.createElement(
                  "div",
                  { className: d().row },
                  r.createElement(
                    "div",
                    { className: d().item },
                    r.createElement(c.Ee, { src: l.src, alt: "" }),
                    r.createElement(
                      "p",
                      null,
                      "CDB que Rende ",
                      r.createElement("strong", null, "130%"),
                      " do CDI"
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: d().item },
                    r.createElement(c.Ee, { src: u.src, alt: "" }),
                    r.createElement(
                      "p",
                      null,
                      "PagBank ",
                      r.createElement("strong", null, "Sa\xfade Gr\xe1tis"),
                      " no 1\xba M\xeas"
                    )
                  )
                ),
                r.createElement(
                  "p",
                  { className: d().description },
                  "Aproveite os",
                  " ",
                  r.createElement(
                    "strong",
                    null,
                    "melhores descontos e ofertas imperd\xedveis"
                  ),
                  " ",
                  "no PagBank pra vender muito e cuidar bem do seu dinheiro:"
                )
              )
            )
          )
        );
      }
      p.propTypes = { sectionStyleClass: i().string };
      var h = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-squeeze.c697cff7.svg",
          height: 61,
          width: 60,
        },
        v = n(93612),
        g = n.n(v);
      function y(e) {
        var t = e.title,
          n = e.description;
        return r.createElement(
          "div",
          { className: g().banner },
          r.createElement(c.Ee, {
            className: g().bannerImg,
            src: h.src,
            alt: "",
          }),
          r.createElement(
            "div",
            { className: g().bannerContent },
            r.createElement("h3", null, t),
            r.createElement("p", null, n)
          )
        );
      }
      y.propTypes = {
        title: i().string.isRequired,
        description: i().string.isRequired,
      };
      var _ = n(37872),
        b = n(46199),
        E = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-check.fa451b22.svg",
          height: 14,
          width: 15,
        },
        x = n(6568),
        w = n.n(x),
        D = [
          "Venda com taxa zero",
          "Receba na hora",
          "D\xe9bito, cr\xe9dito e PIX",
          "Sem aluguel",
          "5 anos de garantia",
          "Banco completo gr\xe1tis",
        ],
        O = [
          "Venda com taxa zero",
          "D\xe9bito, cr\xe9dito e PIX",
          "5 anos de garantia",
          "Receba na hora",
          "Sem aluguel",
          "Banco completo gr\xe1tis",
        ];
      function C(e) {
        var t = e.listStyleClass,
          n = (0, _.a)("(min-width: 768px)");
        return r.createElement(b.d, {
          listClassName: s()(w().herolist, t),
          singleIcon: E.src,
          items: n ? O : D,
        });
      }
      C.propTypes = { listStyleClass: i().string };
      var k = n(61958),
        N = n.n(k);
      function P(e) {
        var t = e.icon,
          n = e.title,
          a = e.subtitle,
          i = e.cardStyleClass,
          o = e.col;
        return r.createElement(
          "div",
          {
            className: s()(N().card, void 0 === i ? "" : i, {
              [N().col]: void 0 !== o && o,
            }),
          },
          r.createElement(
            "div",
            { className: N().cardBody },
            r.createElement(
              "div",
              { className: N().cardContent },
              r.createElement(c.Ee, { src: t, alt: "" }),
              r.createElement(
                "div",
                null,
                r.createElement("h2", null, n),
                a && r.createElement("p", null, a)
              )
            )
          )
        );
      }
      P.propTypes = {
        icon: i().string,
        title: i().string,
        subtitle: i().string,
        cardStyleClass: i().string,
        col: i().bool,
      };
      var S = {
        SqueezeBanner: y,
        BlockInfo: p,
        BannerFeatures: C,
        RoundedBox: P,
      };
    },
    36995: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cs: function () {
          return i;
        },
        DR: function () {
          return m;
        },
        E2: function () {
          return s;
        },
        FF: function () {
          return l;
        },
        K2: function () {
          return c;
        },
        SZ: function () {
          return r;
        },
        Tv: function () {
          return u;
        },
        X3: function () {
          return a;
        },
        Yp: function () {
          return o;
        },
        aV: function () {
          return d;
        },
        zW: function () {
          return f;
        },
      });
      var r = "minizinha_chip_3",
        a = "minizinha_nfc_2",
        i = "moderninha_plus_2",
        o = "moderninha_pro_2s",
        s = "moderninha_profit",
        c = "moderninha_smart_camera",
        l = "moderninha_smart_2",
        u = "moderninha_x",
        m =
          "https://api.whatsapp.com/send?phone=551148629427&text=Ol%C3%A1,%20gostaria%20de%20enviar%20meu%20v%C3%ADdeo.",
        d =
          "https://wa.me/551128386923?text=%F0%9F%91%8B%20Ol%C3%A1%2C%20acessei%20a%20p%C3%A1gina%20do%20Renda%20Extra%20do%20PagBank%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
        f =
          "https://api.whatsapp.com/send?phone=551131269126&text=Quero%20vender%20com%20a%20maquininha%20PagBank";
    },
    6131: function (e, t, n) {
      "use strict";
      var r = n(48116);
      e.exports = {
        localeFormatter: {
          ptb: {
            currency: (e) =>
              ("string" == typeof e ? parseFloat(e || 0) : e)
                .toFixed(2)
                .replace(".", ",")
                .replace(/(\d)(?=(\d{3})+,)/g, "$1."),
            date: function (e) {
              return e && r(e instanceof Date ? e : new Date(e), "dd/mm/yyyy");
            },
            monthDay: function (e) {
              return e && r(e instanceof Date ? e : new Date(e), "dd/mm");
            },
          },
          eng: {
            currency: (e) =>
              ("string" == typeof e ? parseFloat(e || 0) : e).toFixed(2),
            date: function (e) {
              return e && r(e instanceof Date ? e : new Date(e), "yyyy/mm/dd");
            },
            monthDay: function (e) {
              return e && r(e instanceof Date ? e : new Date(e), "mm/dd");
            },
          },
        },
      };
    },
    89215: function (e, t, n) {
      "use strict";
      n.d(t, {
        qd: function () {
          return v;
        },
        fH: function () {
          return g;
        },
      });
      var r = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n =
              null == e
                ? void 0
                : e.find(function (e) {
                    return "tagline" === e.key;
                  });
          return n && n.value
            ? n.value
            : (console.error("Option tagline does not exists for ".concat(t)),
              null);
        },
        a = n(6131),
        i = n(77953);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var l = a.localeFormatter.ptb,
        u = l.currency,
        m = l.monthDay,
        d = a.localeFormatter.eng.currency,
        f = function (e) {
          var t = e.offer,
            n = e.reader;
          if (!t) throw Error("".concat(n, " nao retornou valores de oferta"));
          return {
            price: u(t.value || 0),
            priceDot: d(t.value || 0),
            installmentPrice: u(t.installments.installmentValue || 0),
            installments: t.installments.numberOfInstallments,
          };
        },
        p = function (e) {
          var t,
            n,
            r,
            a = null == e ? void 0 : e.retailPrice,
            o = null == e ? void 0 : e.fullPrice,
            c = null == e ? void 0 : e.promoPrice,
            l = c || a,
            d = (0, i.overridePromotionEndDate)(s({}, a)),
            p = null == a ? void 0 : a.endDate;
          return {
            pricesData: {
              offer: f({ offer: l, reader: e.sku }),
              original: o
                ? {
                    price: u(o.value || 0),
                    installmentPrice: u(o.installments.installmentValue || 0),
                    installments: o.installments.numberOfInstallments,
                  }
                : null,
              final: (n = c || a)
                ? {
                    price: u(n.value || 0),
                    installmentPrice: u(n.installments.installmentValue || 0),
                    installments: n.installments.numberOfInstallments,
                  }
                : null,
              finalPromoDate: m(
                (r = (null == d ? void 0 : d.endDate) || p) ||
                  "2050-12-31T23:59:59"
              ),
              percentOff: null == l ? void 0 : l.percentOff,
              disclaimerUrl: null == a ? void 0 : a.disclaimerUrl,
              rebateValue: null == l ? void 0 : l.rebateValue,
            },
          };
        },
        h = function (e) {
          var t = e.data,
            n = e.order,
            r = (void 0 === n ? [] : n).reduce(function (e, t, n) {
              return (e[t] = n), e;
            }, {});
          return (void 0 === t ? [] : t).sort(function (e, t) {
            return r[e.sku] - r[t.sku];
          });
        },
        v = function (e) {
          var t = e.readersBySku,
            n = e.extraData,
            a = e.genericData,
            i = e.order,
            o = Object.keys(t).reduce(function (e, i) {
              var o,
                c = n[i] || a,
                l = t[i];
              return (
                l &&
                  e.push(
                    s(
                      s(
                        {
                          sku: l.sku,
                          hash: l.hash,
                          readerShortName: l.shortName,
                          tagline: r(
                            null == l ||
                              null === (o = l.options) ||
                              void 0 === o
                              ? void 0
                              : o.marketing,
                            i
                          ),
                          checkoutLink:
                            "https://carrinho.pagseguro.uol.com.br/?er=".concat(
                              l.hash,
                              "&cl=true&ori=LPMKT"
                            ),
                        },
                        c
                      ),
                      p(l)
                    )
                  ),
                e
              );
            }, []);
          return h({ data: o, order: i });
        },
        g = function (e) {
          var t,
            n = e.reader,
            a = e.sku;
          return s(
            {
              sku: n.sku,
              hash: n.hash,
              readerShortName: n.shortName,
              tagline: r(
                null == n || null === (t = n.options) || void 0 === t
                  ? void 0
                  : t.marketing,
                a
              ),
              checkoutLink: "https://carrinho.pagseguro.uol.com.br/?er=".concat(
                n.hash,
                "&cl=true&ori=LPMKT"
              ),
            },
            p(n)
          );
        };
    },
    77953: function (e) {
      "use strict";
      var t = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new Date(),
            t = "string" == typeof e ? new Date(e) : e;
          return new Date(t.getFullYear(), t.getMonth() + 1, 0, 23, 59, 59, 0);
        },
        n = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = new Date(e);
          return n.setHours(n.getHours() + t), n;
        },
        r = function (e) {
          return new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
            .toISOString()
            .replace(/\..+$/, "");
        },
        a = function (e) {
          var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 24,
            i = t(n(Date.now(), a));
          return e.endDate && new Date(e.endDate) > i && (e.endDate = r(i)), e;
        };
      e.exports = {
        addHours: n,
        getEndOfMonth: t,
        localDateToString: r,
        overridePromotionEndDate: a,
      };
    },
    12859: function (e) {
      e.exports = { container: "styles_container__dpDro" };
    },
    47352: function (e) {
      e.exports = {
        list: "styles_list__gzmJ0",
        listItem: "styles_listItem__4hW_c",
      };
    },
    6568: function (e) {
      e.exports = { herolist: "styles_herolist__ODTKT" };
    },
    80977: function (e) {
      e.exports = {
        section: "styles_section__x79WF",
        card: "styles_card__1Oa9i",
        cardContainer: "styles_cardContainer__opF3Z",
        row: "styles_row__QoXn7",
        item: "styles_item__pDqUr",
        description: "styles_description__hv0wd",
      };
    },
    61958: function (e) {
      e.exports = {
        card: "styles_card__NZlzs",
        cardBody: "styles_cardBody__chGCG",
        cardContent: "styles_cardContent__3v8Md",
        col: "styles_col__h1gUt",
      };
    },
    93612: function (e) {
      e.exports = {
        banner: "styles_banner__a67bz",
        bannerContent: "styles_bannerContent__oBs_i",
      };
    },
  },
]);
