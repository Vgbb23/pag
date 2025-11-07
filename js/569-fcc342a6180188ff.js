(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [569],
  {
    22284: function (e, t, a) {
      "use strict";
      a.d(t, {
        l: function () {
          return _;
        },
      });
      var r = a(67294),
        s = a(45697),
        i = a.n(s),
        n = a(49623),
        c = a.n(n),
        o = a(93967),
        l = a.n(o),
        A = a(9335),
        g = a.n(A),
        m = a(11538),
        u = a.n(m);
      function p(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(a), !0).forEach(function (t) {
                h(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : p(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function h(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function f(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a,
              r,
              s =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != s) {
              var i = [],
                n = !0,
                c = !1;
              try {
                for (
                  s = s.call(e);
                  !(n = (a = s.next()).done) &&
                  (i.push(a.value), !t || i.length !== t);
                  n = !0
                );
              } catch (o) {
                (c = !0), (r = o);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return b(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a)
              )
                return Array.from(e);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return b(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      var _ = r.memo(function (e) {
        var t = e.children,
          a = e.initialOffset,
          s = void 0 === a ? 0 : a,
          i = e.step,
          n = void 0 === i ? 200 : i,
          o = e.relayoutDelay,
          A = e.nav,
          m = void 0 === A || A,
          p = e.centerContent,
          h = e.navSticky,
          b = void 0 === h || h,
          _ = (0, r.useRef)(),
          x = (0, r.useRef)(),
          E = (0, r.useRef)(),
          v = (0, r.useRef)(),
          w = f((0, r.useState)({ transform: "translateX(0)" }), 2),
          y = w[0],
          C = w[1],
          R = f((0, r.useState)({ top: null, left: null, right: null }), 2),
          B = R[0],
          O = R[1],
          N = f((0, r.useState)(!1), 2),
          U = N[0],
          D = N[1],
          P = f((0, r.useState)(!1), 2),
          S = P[0],
          I = P[1],
          k = f((0, r.useState)(0), 2),
          V = k[0],
          Q = k[1],
          q = f((0, r.useState)(0), 2),
          L = q[0],
          Z = q[1];
        function M(e, t) {
          var a,
            r,
            s,
            i,
            n = Math.max(0, Math.min(e, t));
          C({ transform: "translateX(".concat(-n, "px)") }),
            Z(n),
            0 !== n && m ? S && I(!1) : I(!0),
            n >= t || !m ? D(!0) : U && D(!1);
        }
        function G() {
          if (null != x && x.current && null != _ && _.current) {
            var e =
                x.current.getBoundingClientRect().width +
                _.current.getBoundingClientRect().width,
              t = Array.from(x.current.children)
                .map(function (e) {
                  var t, a, r, s, i;
                  return (
                    (a = e.getBoundingClientRect().width),
                    (s = (r = getComputedStyle(e)).marginRight),
                    [a, s || "0px", (i = r.marginLeft) || "0px"]
                      .map(function (e) {
                        return parseInt(e);
                      })
                      .reduce(function (e, t) {
                        return e + t;
                      })
                  );
                })
                .reduce(function (e, t) {
                  return e + t;
                });
            return {
              getFrameWidth: e,
              getContentWidth: t,
              getOffsetLimit: t - e,
            };
          }
        }
        var H = c()(
          function () {
            var e = G();
            e && M(0, e.getOffsetLimit);
          },
          void 0 === o ? 200 : o
        );
        (0, r.useEffect)(
          function () {
            return (
              (function () {
                var e = G();
                if (e) {
                  var t = e.getOffsetLimit;
                  Q(t), M(s, t);
                }
              })(),
              window.addEventListener("resize", H),
              function () {
                window.removeEventListener("resize", H);
              }
            );
          },
          [m]
        ),
          (0, r.useEffect)(
            function () {
              var e = v.current;
              if (m && e) {
                var t = c()(a, 12);
                return (
                  window.addEventListener("scroll", t),
                  a(),
                  function () {
                    window.removeEventListener("scroll", t);
                  }
                );
              }
              function a() {
                var e = v.current,
                  t = E.current;
                if (e && t) {
                  var a,
                    r,
                    s = e.getBoundingClientRect(),
                    i = t.getBoundingClientRect(),
                    n = window.innerHeight - 120,
                    c = Math.max(120, s.top),
                    o = c + (Math.min(n, s.bottom) - c) / 2 - s.top;
                  o = Math.min(o, s.height - 120);
                  var l = i.left - s.left + 16,
                    A = s.right - i.right + 16;
                  s.bottom < 120 || s.top > n
                    ? O({ top: null, left: null, right: null })
                    : O({ top: o, left: l, right: A });
                }
              }
            },
            [m]
          );
        var T = r.useMemo(
          function () {
            if (b && null !== B.top) {
              var e = { top: "".concat(B.top, "px"), position: "absolute" },
                t = d(d({}, e), {}, { left: "".concat(B.left, "px") }),
                a = d(d({}, e), {}, { right: "".concat(B.right, "px") });
              return { left: t, right: a };
            }
            return { left: {}, right: {} };
          },
          [b, B]
        );
        return r.createElement(
          "div",
          {
            ref: v,
            "data-testid": "carousel",
            "data-component-name": "slider-free-core",
            className: l()({ [u().sliderFreeCoreContainer]: Boolean(m) }),
          },
          r.createElement(
            "div",
            {
              "data-testid": "carousel-core",
              className: l()(g().sliderFreeCore, {
                [g().sliderFreeCoreHideNav]: !m,
              }),
            },
            r.createElement(
              "button",
              {
                "data-themed": !0,
                "aria-label": "Slide anterior",
                style: T.left,
                className: l()(
                  g().sliderFreeCoreNav,
                  g().sliderFreeCoreNavLeft,
                  u().customNavButton,
                  { [g().sliderFreeCoreNavHidden]: S }
                ),
                onClick: function () {
                  M(L - n, V);
                },
              },
              r.createElement("div", { className: g().sliderFreeCoreNavArrow })
            ),
            r.createElement(
              "button",
              {
                "data-themed": !0,
                "aria-label": "Pr\xf3ximo slide",
                style: T.right,
                className: l()(
                  g().sliderFreeCoreNav,
                  g().sliderFreeCoreNavRight,
                  u().customNavButton,
                  { [g().sliderFreeCoreNavHidden]: U }
                ),
                onClick: function () {
                  M(L + n, V);
                },
              },
              r.createElement("div", { className: g().sliderFreeCoreNavArrow })
            ),
            r.createElement(
              "div",
              {
                className: l()(
                  g().sliderFreeCoreFrame,
                  g().sliderFreeCoreFrameHideShadowLeft,
                  g().sliderFreeCoreFrameHideShadowRight,
                  u().customSliderFreeCoreFrame
                ),
                ref: E,
              },
              r.createElement(
                "div",
                {
                  "data-testid": "carousel-content",
                  ref: x,
                  style: y,
                  className: l()(g().sliderFreeCoreContent, {
                    [u().customSliderFreeCoreContent]: void 0 !== p && p,
                  }),
                },
                t,
                r.createElement("div", {
                  ref: _,
                  className: g().sliderFreeCoreSpacer,
                })
              )
            )
          )
        );
      });
      (_.displayName = "Carousel"),
        (_.propTypes = {
          step: i().number,
          initialOffset: i().number,
          relayoutDelay: i().number,
          nav: i().bool,
          centerContent: i().bool,
          children: i().node,
          navSticky: i().bool,
        });
    },
    1740: function (e, t, a) {
      "use strict";
      a.d(t, {
        d: function () {
          return o;
        },
      });
      var r = a(67294),
        s = a(45697),
        i = a.n(s),
        n = ["href"];
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function o(e) {
        var t = e.href,
          a = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              s = (function (e, t) {
                if (null == e) return {};
                var a,
                  r,
                  s = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (a = i[r]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                return s;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++)
                (a = i[r]),
                  !(t.indexOf(a) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                    (s[a] = e[a]);
            }
            return s;
          })(e, n);
        return r.createElement(
          "a",
          c({ target: "_blank", href: t, rel: "noopener noreferrer" }, a)
        );
      }
      o.propTypes = { href: i().string.isRequired };
    },
    99597: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = a(67294),
        s = a(45697),
        i = a.n(s);
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      var c = a(37872),
        o = a(99415),
        l = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/whatsapp-with-text@2x.d496e17f.png",
          height: 160,
          width: 362,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAgElEQVR42h3BTQrCMBAG0C8maRZduiyIGxG6Uy8geGF/oOAFeoBudSseoCGDkzBj2/cwI6Km5NIWKXtV3XXf7oABR0wMM5+ttc+Uks05a6gC7vSwferN6/e+OO99iTHSGEevogKFOuOqelUHBmPBzGsR2RLTRrM218+txYATAPwBr7VCGTpkJ+oAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        },
        A = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/whatsapp-with-text.19dcbcbc.png",
          height: 80,
          width: 181,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAi0lEQVR4nGP8//8/w48fP6RZWVj5/zP//8vCyPJv+4vtPF6vvBh1lIzOMf769cuBmZl55+fPn5l///79n5ODk2Hjj03Mh74dZrz/874zyATrT58+bQEqYAOy/wEV/N/LuI/t5PdT7Oe+nQMrYPjz548wCwsL788/P/+xM7D/3fhqI3/AmwBOVyWPswCMz0gd5TUugQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        },
        g = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/whatsapp-only-icon.1faf708a.svg",
          height: 80,
          width: 80,
        },
        m = a(63257),
        u = a.n(m);
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var d = {
        "aria-label": "Pedir pelo whatsapp",
        "data-testid": "cta-whatsapp-button",
        href: "https://api.whatsapp.com/send?phone=551131269126&text=Quero%20vender%20com%20a%20maquininha%20PagBank",
        "data-track-click":
          "category: vendas - maquinas cartao; action: central - atendimento opcao; label: whatsapp",
        target: "_blank",
        rel: "noreferrer",
      };
      function h(e) {
        // Botão WhatsApp removido - sempre retorna null
        return null;
      }
      var f = r.memo(h);
      h.propTypes = { withText: i().bool, icon: i().any };
    },
    53991: function (e, t, a) {
      "use strict";
      a.d(t, {
        uZ: function () {
          return g;
        },
        Ez: function () {
          return m;
        },
        Kk: function () {
          return u;
        },
        Li: function () {
          return d;
        },
        Yb: function () {
          return p;
        },
        Z3: function () {
          return h;
        },
        bq: function () {
          return f;
        },
        wo: function () {
          return b;
        },
      });
      var r = a(67294),
        s = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-bluetooth.4fb7252e.svg",
          height: 33,
          width: 32,
        },
        i = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-cartao-credito.13ccb750.svg",
          height: 33,
          width: 32,
        },
        n = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-comprovante-sms.45e14ce9.svg",
          height: 33,
          width: 32,
        },
        c = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-receba-na-hora.1ebd952b.svg",
          height: 33,
          width: 32,
        },
        o = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-sem-aluguel.c099f47d.svg",
          height: 33,
          width: 33,
        },
        l = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-comprovante-impresso.9dd9a11b.svg",
          height: 32,
          width: 32,
        },
        A = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-chip-gratis.447c4e38.svg",
          height: 32,
          width: 32,
        },
        g = "BLUETOOTH_CONN",
        m = "FREE_CARD",
        u = "MAIL_SMS_COPY",
        p = "NO_FEE",
        d = "NO_CEL",
        h = "PRINT_COPY",
        f = "SELL_ON_TIME",
        b = function (e) {
          switch (e) {
            case g:
              return {
                icon: s.src,
                alt: "Conex\xe3o por Bluetooth",
                text: "Conex\xe3o por Bluetooth (precisa de celular)",
              };
            case p:
              return { icon: o.src, alt: "Sem aluguel", text: "Sem aluguel" };
            case d:
              return {
                icon: A.src,
                alt: "N\xe3o precisa de celular",
                text: "N\xe3o precisa de celular (chip gr\xe1tis)",
              };
            case f:
              return {
                icon: c.src,
                alt: "Venda em at\xe9 18x e receba tudo na hora",
                text: r.createElement(
                  r.Fragment,
                  null,
                  "Venda em at\xe9 18x ",
                  r.createElement("sup", null, "3"),
                  " e receba tudo na hora",
                  " ",
                  r.createElement("sup", null, "1")
                ),
              };
            case u:
              return {
                icon: n.src,
                alt: "Comprovante por e-mail ou SMS",
                text: "Comprovante por e-mail ou SMS",
              };
            case m:
              return {
                icon: i.src,
                alt: "Icone cartao",
                text: "Cart\xe3o de Cr\xe9dito GR\xc1TIS com Limite Garantido. APLICOU VIROU LIMITE!",
              };
            case h:
              return {
                icon: l.src,
                alt: "Impress\xe3o do comprovante",
                text: "Imprime comprovante",
              };
            default:
              return null;
          }
        };
    },
    99708: function (e, t, a) {
      "use strict";
      a.d(t, {
        Hp: function () {
          return n;
        },
        RJ: function () {
          return o;
        },
        Tf: function () {
          return c;
        },
        x1: function () {
          return l;
        },
      });
      var r = a(62471),
        s = a(9873),
        i = a(51483),
        n = "BLUE_ACCEPT_PIX",
        c = "BLACK_QRCODE_PIX",
        o = "FIVE_YEARS_WARRANTY",
        l = function (e) {
          switch (e) {
            case n:
              return { src: r.Z.src, alt: "Aceita Pix" };
            case c:
              return { src: s.Z.src, alt: "Aceita QR Code PIX" };
            case o:
              return { src: i.Z.src, alt: "Nova em folha 5 anos de garantia" };
            default:
              return null;
          }
        };
    },
    60853: function (e, t, a) {
      "use strict";
      a.d(t, {
        Ez: function () {
          return m;
        },
        Fm: function () {
          return _;
        },
        Kk: function () {
          return u;
        },
        Li: function () {
          return d;
        },
        Yb: function () {
          return p;
        },
        Z3: function () {
          return h;
        },
        bq: function () {
          return f;
        },
        uZ: function () {
          return g;
        },
        wL: function () {
          return b;
        },
        wo: function () {
          return x;
        },
      });
      var r = a(67294),
        s = a(66999),
        i = a(92335),
        n = a(1279),
        c = a(82843),
        o = a(18009),
        l = a(44754),
        A = a(74702),
        g = "BLUETOOTH_CONN",
        m = "FREE_CARD",
        u = "MAIL_SMS_COPY",
        p = "NO_FEE",
        d = "NO_CEL",
        h = "PRINT_COPY",
        f = "SELL_ON_TIME",
        b = "SUPPORT",
        _ = "MAIL_SMS_COPY_PROFIT",
        x = function (e) {
          switch (e) {
            case g:
              return {
                icon: s.Z.src,
                alt: "Conex\xe3o por Bluetooth",
                text: "Conex\xe3o por Bluetooth (precisa de celular)",
              };
            case p:
              return { icon: o.Z.src, alt: "Sem aluguel", text: "Sem aluguel" };
            case d:
              return {
                icon: l.Z.src,
                alt: "N\xe3o precisa de celular",
                text: "N\xe3o precisa de celular (chip gr\xe1tis)",
              };
            case f:
              return {
                icon: c.Z.src,
                alt: "Venda em at\xe9 18x e receba tudo na hora",
                text: r.createElement(
                  r.Fragment,
                  null,
                  "Venda em at\xe9 18x ",
                  r.createElement("sup", null, "3"),
                  " e receba tudo na hora",
                  " ",
                  r.createElement("sup", null, "1")
                ),
              };
            case u:
              return {
                icon: n.Z.src,
                alt: "Comprovante por e-mail ou SMS",
                text: "Comprovante por e-mail ou SMS",
              };
            case _:
              return {
                icon: n.Z.src,
                alt: "A maquininha que imprime mais barata do Brasil",
                text: "A maquininha que imprime mais barata do Brasil",
              };
            case m:
              return {
                icon: i.Z.src,
                alt: "Icone cartao",
                text: "Cart\xe3o de cr\xe9dito internacional GR\xc1TIS, com limite garantido e cashback de 1%",
              };
            case h:
              return {
                icon: n.Z.src,
                alt: "Impress\xe3o do comprovante",
                text: "Imprime comprovante",
              };
            case b:
              return {
                icon: A.Z.src,
                alt: "Suporte dispon\xedvel 24 horas por dia",
                text: "Suporte dispon\xedvel 24 horas por dia",
              };
            default:
              return null;
          }
        };
    },
    79715: function (e, t, a) {
      "use strict";
      a.d(t, {
        B: function () {
          return r;
        },
      });
      var r = {
        wireframe: {
          generic: !0,
          image1x: {
            src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/generic-device.edebbbbb.png",
            height: 72,
            width: 52,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAZ0lEQVR42g3LuwnCAABF0TuJpaWl/bsb2DqFuIKF2CciNhIQUREbCVj4A8kYIaskpz/4dJ/CkyVg5zobS39A6owcZ5KLSzxKEKs02Fpk68Gvd/LOzHkWueaF9TCmrjxb4cdHbv7dQQ8i8iPiZzeKygAAAABJRU5ErkJggg==",
            blurWidth: 6,
            blurHeight: 8,
          },
          image2x: {
            src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/generic-device@2x.b76777d4.png",
            height: 144,
            width: 104,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAZ0lEQVR42g3LsQnCAAAF0ZvE0tLW+t8Gtk4huIGNWGtEbCQgGERsVLAIKkjGCFklef3Dt8fsvFgAdq6zsfAH5JWR40xSucSzBLFMg63b7D359U7qzJxnkWtqfA5j6srKEj8+cvPvAXoi5SPg7JrTLQAAAABJRU5ErkJggg==",
            blurWidth: 6,
            blurHeight: 8,
          },
        },
        logotipo_1x: {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-generic-device.a99d6119.png",
          height: 45,
          width: 160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKUlEQVR42gXAMQoAEAAAQJvBaFeuyCAGZfL/dymIKopm6FKQTM+1bEf+Ra4EU9MnBFMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        },
        logotipo_2x: {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-generic-device@2x.25e11e79.png",
          height: 90,
          width: 320,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42gXAIQ4AEAAAQE0QdZvbmGAEQfL/b1kQVRTN0KUgmZ5r2Y78AUXCBFU2QNAJAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        codeFeats: [],
        codeSeals: [],
      };
    },
    39911: function (e, t, a) {
      "use strict";
      a.d(t, {
        d: function () {
          return eM;
        },
        $: function () {
          return eZ;
        },
      });
      var r = a(79715),
        s = a(53991),
        i = a(99708),
        n = a(64306),
        c = a(1355),
        o = a(30771),
        l = a(21151),
        A = a(96749),
        g = a(53188),
        m = {
          wireframe: {
            background_image1x: n.Z,
            background_image2x: c.Z,
            reader_image1x: o.Z,
            reader_image2x: l.Z,
          },
          logotipo_1x: A.Z,
          logotipo_2x: g.Z,
        },
        u = a(23818),
        p = a(34996),
        d = a(35928),
        h = a(79101),
        f = a(18799),
        b = a(42161),
        _ = {
          wireframe: {
            background_image1x: u.Z,
            background_image2x: p.Z,
            reader_image1x: d.Z,
            reader_image2x: h.Z,
          },
          logotipo_1x: f.Z,
          logotipo_2x: b.Z,
        },
        x = a(48888),
        E = a(10212),
        v = a(45959),
        w = a(62422),
        y = a(92921),
        C = a(84089),
        R = {
          wireframe: {
            background_image1x: v.Z,
            background_image2x: w.Z,
            reader_image1x: x.Z,
            reader_image2x: E.Z,
          },
          logotipo_1x: y.Z,
          logotipo_2x: C.Z,
        },
        B = a(62101),
        O = a(71780),
        N = a(88812),
        U = a(97855),
        D = a(27076),
        P = a(314),
        S = {
          wireframe: {
            background_image1x: N.Z,
            background_image2x: U.Z,
            reader_image1x: B.Z,
            reader_image2x: O.Z,
          },
          logotipo_1x: D.Z,
          logotipo_2x: P.Z,
        },
        I = a(38290),
        k = a(54047),
        V = a(80276),
        Q = a(53554),
        q = a(43930),
        L = a(73402),
        Z = {
          wireframe: {
            background_image1x: I.Z,
            background_image2x: k.Z,
            reader_image1x: V.Z,
            reader_image2x: Q.Z,
          },
          logotipo_1x: q.Z,
          logotipo_2x: L.Z,
        },
        M = a(88860),
        G = a(54281),
        H = a(2659),
        T = a(42159),
        Y = a(874),
        F = a(36518),
        z = {
          wireframe: {
            background_image1x: H.Z,
            background_image2x: T.Z,
            reader_image1x: M.Z,
            reader_image2x: G.Z,
          },
          logotipo_1x: Y.Z,
          logotipo_2x: F.Z,
        },
        j = a(79392),
        K = a(7202),
        W = a(10921),
        J = a(5196),
        X = a(37682),
        $ = a(5648),
        ee = {
          wireframe: {
            background_image1x: W.Z,
            background_image2x: J.Z,
            reader_image1x: j.Z,
            reader_image2x: K.Z,
          },
          logotipo_1x: X.Z,
          logotipo_2x: $.Z,
        },
        et = a(61148),
        ea = a(82585),
        er = a(87734),
        es = a(48233),
        ei = a(28605),
        en = a(72309),
        ec = {
          wireframe: {
            background_image1x: er.Z,
            background_image2x: es.Z,
            reader_image1x: et.Z,
            reader_image2x: ea.Z,
          },
          logotipo_1x: ei.Z,
          logotipo_2x: en.Z,
        };
      function eo(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function el(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eo(Object(a), !0).forEach(function (t) {
                eA(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : eo(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function eA(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      var eg = {
          minizinha_nfc: el(
            el({}, m),
            {},
            {
              exclusive: !0,
              codeFeats: [s.Yb, s.uZ, s.bq, s.Kk, s.Ez],
              codeSeals: [i.Hp, i.RJ],
            }
          ),
          minizinha_nfc_2: el(
            el({}, _),
            {},
            {
              exclusive: !0,
              codeFeats: [s.Yb, s.uZ, s.bq, s.Kk, s.Ez],
              codeSeals: [i.Hp, i.RJ],
            }
          ),
          moderninha_profit: el(
            el(
              {},
              {
                wireframe: {
                  reader_image1x: {
                    src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha_profit.c950c167.png",
                    height: 131,
                    width: 130,
                    blurDataURL:
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mMI13RhZGBgYPh0Qub4i/3yf5/sVf/z9pDUHgYGBoZn593Bcgz//+ey/Dwv8ODDUYb/T3cy/H93kOHO//8nwZJQBQzM22d63z24oub/gRW1/zdPdHvyrJGBiwEJMK9YNvfum/df/7/9+O3/klmTPxczMIjCZWcwMDBPm9h85+zZ8//PXLj0v7e96tt6cQZJJCv6mGZUMNyOdmL4X+nI8H9dHsP3o0v1pZHdwHRmseK9ugTD/wtajf7f36r44lMLAycDMri7TuzQ6Tniv86slPp3eovBFgYGBoYN7xgYASBralZ13Ih1AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8,
                  },
                  reader_image2x: {
                    src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha_profit@2x.22fbba40.png",
                    height: 261,
                    width: 260,
                    blurDataURL:
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mOoCnFhZGBgYPh0Qub4ywPyf5/t1/z97pDsHgYGBobXF73Acgz//2ez/L4o8uDzcYb/r/Yy/P94hOHO//83wJJQBQzMO2d53z20sur/wZXV/7dOdnvyrJmBkwEJMK9YNu/O24/f/r/79OP/0tlTPpcxMIjCZRsZGJhnTG69c+Hi5f8Xrlz7P6Gr9ut6JgZJJCs6mGZVMdxO9mL4X+vJ8H9dAcP3E8v1pJHdwHRuqfrd1nTz/0s7zP4/2KLw4k07AxcDMri7Tvr4mbly/8+slP9/eovBLgYGBoY57xgYAcQRa0cg2AdmAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8,
                  },
                },
                logotipo_1x: {
                  src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo_profit.39167cf7.png",
                  height: 50,
                  width: 250,
                  blurDataURL:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGNkYOAUbJ8QobF89pLPl67+ZmBkZGD+/58BKM7AAcRPgAwRieb+CIt1c6e8Pn+F4S8TEwPLv38MX4GSnEB8DwDGzxU34YWMHQAAAABJRU5ErkJggg==",
                  blurWidth: 8,
                  blurHeight: 2,
                },
                logotipo_2x: {
                  src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo_profit@2x.d6b559fe.png",
                  height: 99,
                  width: 500,
                  blurDataURL:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPElEQVR42mNgYOAU6JyUZKGvw6oD5GgzMTLoAWkDILYAYhkgFpFomZgbZKTDYAPkWDExMdgBaSMgBvElAf3GBtgLoGM6AAAAAElFTkSuQmCC",
                  blurWidth: 8,
                  blurHeight: 2,
                },
              }
            ),
            {},
            {
              exclusive: !0,
              codeFeats: [s.Yb, s.uZ, s.bq, s.Kk, s.Ez],
              codeSeals: [i.Tf, i.RJ],
            }
          ),
          minizinha_chip_3: el(
            el({}, Z),
            {},
            {
              codeFeats: [s.Yb, s.Li, s.bq, s.Kk, s.Ez],
              codeSeals: [i.Hp, i.RJ],
            }
          ),
          moderninha_plus_2: el(
            el({}, z),
            {},
            {
              codeFeats: [s.Yb, s.Li, s.bq, s.Kk, s.Ez],
              codeSeals: [i.Tf, i.RJ],
            }
          ),
          moderninha_smart_2: el(
            el({}, ec),
            {},
            {
              codeFeats: [s.Yb, s.Li, s.bq, s.Z3, s.Ez],
              codeSeals: [i.Tf, i.RJ],
            }
          ),
          moderninha_pro_2s: el(
            el({}, R),
            {},
            {
              codeFeats: [s.Yb, s.Li, s.bq, s.Z3, s.Ez],
              codeSeals: [i.Tf, i.RJ],
            }
          ),
          moderninha_prov: el(
            el({}, S),
            {},
            {
              codeFeats: [s.Yb, s.Li, s.bq, s.Z3, s.Ez],
              codeSeals: [i.Tf, i.RJ],
            }
          ),
          moderninha_x: el(
            el({}, ee),
            {},
            {
              codeFeats: [s.Yb, s.Li, s.bq, s.Kk, s.Ez],
              codeSeals: [i.Tf, i.RJ],
            }
          ),
        },
        em = a(60853),
        eu = a(97751),
        ep = a(72582),
        ed = { wireframe: { logo: eu.Z.src, machine: ep.Z.src } },
        eh = a(48842),
        ef = a(68541),
        eb = { wireframe: { logo: eh.Z.src, machine: ef.Z.src } },
        e_ = a(62754),
        ex = a(80808),
        eE = { wireframe: { logo: e_.Z.src, machine: ex.Z.src } },
        ev = a(5118),
        ew = a(60903),
        ey = { wireframe: { logo: ev.Z.src, machine: ew.Z.src } },
        eC = a(1512),
        eR = a(17621),
        eB = { wireframe: { logo: eC.Z.src, machine: eR.Z.src } },
        eO = a(25681),
        eN = a(79325),
        eU = { wireframe: { logo: eO.Z.src, machine: eN.Z.src } },
        eD = a(1742),
        eP = a(93897),
        eS = { wireframe: { logo: eD.Z.src, machine: eP.Z.src } };
      function eI(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function ek(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eI(Object(a), !0).forEach(function (t) {
                eV(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : eI(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function eV(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      var eQ = {
        minizinha_nfc_2: ek(
          ek({}, ed),
          {},
          {
            exclusive: !0,
            codeFeats: [em.Yb, em.uZ, em.wL, em.bq, em.Kk, em.Ez],
            codeSeals: [i.Hp, i.RJ],
          }
        ),
        moderninha_profit: ek(
          ek({}, eS),
          {},
          {
            exclusive: !0,
            codeFeats: [em.Yb, em.Li, em.wL, em.bq, em.Fm, em.Ez],
            codeSeals: [i.Tf, i.RJ],
            checkoutLink:
              "https://carrinho.pagbank.com.br/?cl=true&er=64c363fbb5eca1e5&ori=LPMKT&promo=supermax074pro",
          }
        ),
        minizinha_chip_3: ek(
          ek({}, ey),
          {},
          {
            codeFeats: [em.Yb, em.Li, em.wL, em.bq, em.Kk, em.Ez],
            codeSeals: [i.Hp, i.RJ],
          }
        ),
        moderninha_plus_2: ek(
          ek({}, eB),
          {},
          {
            codeFeats: [em.Yb, em.Li, em.wL, em.bq, em.Kk, em.Ez],
            codeSeals: [i.Tf, i.RJ],
          }
        ),
        moderninha_smart_2: ek(
          ek({}, eU),
          {},
          {
            codeFeats: [em.Yb, em.Li, em.wL, em.bq, em.Z3, em.Ez],
            codeSeals: [i.Tf, i.RJ],
          }
        ),
        moderninha_smart_camera: ek(
          ek(
            {},
            {
              wireframe: {
                logo: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo.d35b7ae0.svg",
                machine:
                  "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-smart.b9806cdf.png",
              },
            }
          ),
          {},
          { codeFeats: [], codeSeals: [] }
        ),
        moderninha_pro_2s: ek(
          ek({}, eb),
          {},
          {
            codeFeats: [em.Yb, em.Li, em.wL, em.bq, em.Z3, em.Ez],
            codeSeals: [i.Tf, i.RJ],
          }
        ),
        moderninha_prov: ek(
          ek({}, eE),
          {},
          {
            codeFeats: [em.Yb, em.Li, em.wL, em.bq, em.Z3, em.Ez],
            codeSeals: [i.Tf, i.RJ],
          }
        ),
      };
      function eq(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function eL(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      var eZ = { common: eg, parceiros: eQ },
        eM = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? eq(Object(a), !0).forEach(function (t) {
                  eL(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : eq(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
          }
          return e;
        })({}, r.B);
    },
    18652: function (e, t, a) {
      "use strict";
      a.d(t, {
        YD: function () {
          return tf;
        },
        Ae: function () {
          return tm;
        },
        fw: function () {
          return eZ;
        },
        r8: function () {
          return F;
        },
        AN: function () {
          return eB;
        },
        ab: function () {
          return J.Z;
        },
        IM: function () {
          return aB;
        },
        UR: function () {
          return g;
        },
        fr: function () {
          return x;
        },
        M9: function () {
          return a5;
        },
        A6: function () {
          return e3;
        },
        XC: function () {
          return G;
        },
        yD: function () {
          return e9;
        },
        TH: function () {
          return ex;
        },
        Fe: function () {
          return W;
        },
      });
      var r = a(67294),
        s = a(99415),
        i = a(37872),
        n = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-phone.e07428ea.svg",
          height: 20,
          width: 20,
        },
        c = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-phone-mobile.b08155b9.svg",
          height: 30,
          width: 30,
        },
        o = a(82167),
        l = a.n(o);
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function g(e) {
        var t = (0, i.a)("(max-width: 767px)"),
          a =
            "category: vendas - maquinas cartao; action: central - atendimento opcao; label: whatsapp;";
        return t
          ? r.createElement(
              "button",
              A(
                {
                  className: l().buttonMobile,
                  "data-track-click": a,
                  "aria-label": "Pe\xe7a por telefone",
                },
                e
              ),
              r.createElement(s.Ee, { src: c.src, alt: "" })
            )
          : r.createElement(
              "button",
              A({ className: l().button, "data-track-click": a }, e),
              r.createElement(s.Ee, { src: n.src, alt: "" }),
              "Pe\xe7a por telefone"
            );
      }
      var m = a(45697),
        u = a.n(m),
        p = a(18408),
        d = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/whatsapp.a6172cab.png",
          height: 24,
          width: 24,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42g3EvQpBAQAG0K+u2aTkL97AZFYMSiZFBtd9C4tN3UUpSQaDB/FwJ7dTJwoxVDkZiSJi4WZt62Up0fe0MxEtb8MozX2dReyUTY2Oj9rKRhVjtWi7OHroxdTP1cHS3VxiYGZs76grij8r8VADp3NmkAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-close.04875963.svg",
          height: 14,
          width: 14,
        },
        f = a(29347),
        b = a.n(f);
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function x(e) {
        var t = e.isOpen,
          a = e.onClose,
          i = e.showWhatsapp,
          c = e.anchorProps;
        return r.createElement(
          p.Z,
          {
            open: t,
            closeOnOutsideClick: !0,
            closeButton: !1,
            closeHandler: a,
            className: b().drawer,
          },
          r.createElement(
            "div",
            { className: b().drawer__close },
            r.createElement(
              "button",
              { type: "button", "aria-label": "Fechar menu", onClick: a },
              r.createElement("img", { src: h.src, alt: "" })
            )
          ),
          r.createElement(
            "strong",
            { className: b().drawer__title },
            "Atendimento de segunda a s\xe1bado das 8h \xe0s 22h"
          ),
          r.createElement(
            "div",
            { className: b().drawer__content },
            r.createElement(
              "span",
              null,
              "Capitais e regi\xf5es metropolitanas:"
            ),
            r.createElement(
              "a",
              {
                "data-testid": "link-capital-phone",
                className: b()["button-telephone"],
                href: "tel:40036624",
                "data-uol-audience-event":
                  "category: vendas - maquinas cartao; action: central - atendimento opcao; label: telefone capitais;",
                "data-track-click":
                  "category: vendas - maquinas cartao; action: central - atendimento opcao; label: telefone capitais;",
              },
              r.createElement("span", null, "4003-6624"),
              r.createElement(
                "div",
                null,
                r.createElement(s.Ee, { src: n.src, alt: "" })
              )
            )
          ),
          r.createElement(
            "div",
            { className: b().drawer__content },
            r.createElement(
              "span",
              null,
              "Demais localidades, exceto celular:"
            ),
            r.createElement(
              "a",
              {
                "data-testid": "link-other-locations-phone",
                className: b()["button-telephone"],
                href: "tel:08008821100",
                "data-uol-audience-event":
                  "category: vendas - maquinas cartao; action: central - atendimento opcao; label: telefone outras;",
                "data-track-click":
                  "category: vendas - maquinas cartao; action: central - atendimento opcao; label: telefone outras;",
              },
              r.createElement("span", null, "0800 882 1100"),
              r.createElement(
                "div",
                null,
                r.createElement(s.Ee, { src: n.src, alt: "" })
              )
            )
          ),
          // Botão WhatsApp removido - nunca renderiza
          null
        );
      }
      x.propTypes = {
        isOpen: u().bool.isRequired,
        showWhatsapp: u().bool,
        anchorProps: u().object,
        onClose: u().func.isRequired,
      };
      var E = a(37533);
      u().array.isRequired, a(73377);
      var v = a(55022),
        w = a(51614);
      u().number.isRequired, u().node, u().node, u().node;
      var y = a(47595),
        C = a(30703),
        R = a.n(C),
        B = ["children"];
      function O() {
        return (O = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function N(e) {
        var t = e.children,
          a = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              s = (function (e, t) {
                if (null == e) return {};
                var a,
                  r,
                  s = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (a = i[r]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                return s;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++)
                (a = i[r]),
                  !(t.indexOf(a) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                    (s[a] = e[a]);
            }
            return s;
          })(e, B);
        return r.createElement("div", O({ className: R().simulatorBox }, a), t);
      }
      N.propTypes = { children: u().node };
      var U = a(43017),
        D = a.n(U);
      function P(e) {
        var t = e.label,
          a = e.value;
        return r.createElement(
          "div",
          { className: D().simulatorItem },
          r.createElement("strong", null, a),
          r.createElement("span", null, t)
        );
      }
      P.propTypes = {
        label: u().string.isRequired,
        value: u().string.isRequired,
      };
      var S = a(93967),
        I = a.n(S),
        k = a(18525),
        V = a.n(k),
        Q = [
          { label: "Na hora", suffix: "1" },
          { label: "14 dias" },
          { label: "30 dias" },
        ];
      function q(e) {
        var t = e.activeStep,
          a = e.onChange;
        return r.createElement(
          "div",
          { className: V().stepper },
          Q.map(function (e, s) {
            return r.createElement(
              "button",
              {
                key: e.label,
                className: I()(V().step, { [V().active]: t >= s }),
                onClick: function () {
                  var e;
                  return a(s);
                },
                "data-track-click":
                  "category: vendas - maquinas cartao; action: simulador - ".concat(
                    e.label.toLowerCase(),
                    ";"
                  ),
              },
              r.createElement("div", { className: V().step__circle }),
              r.createElement(
                "span",
                { className: I()(V().step__label, { [V().active]: t === s }) },
                e.label,
                " ",
                Boolean(e.suffix) && r.createElement("sup", null, e.suffix)
              )
            );
          })
        );
      }
      q.propTypes = {
        activeStep: u().number.isRequired,
        onChange: u().func.isRequired,
      };
      var L = a(75997),
        Z = a.n(L);
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      function G() {
        var e,
          t,
          a =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((e = (0, r.useState)(0))) ||
            (function (e, t) {
              var a,
                r,
                s =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != s) {
                var i = [],
                  n = !0,
                  c = !1;
                try {
                  for (
                    s = s.call(e);
                    !(n = (a = s.next()).done) &&
                    (i.push(a.value), !t || i.length !== t);
                    n = !0
                  );
                } catch (o) {
                  (c = !0), (r = o);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (c) throw r;
                  }
                }
                return i;
              }
            })(e, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return M(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === a && e.constructor && (a = e.constructor.name),
                  "Map" === a || "Set" === a)
                )
                  return Array.from(e);
                if (
                  "Arguments" === a ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                )
                  return M(e, t);
              }
            })(e, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          i = a[0],
          n = a[1],
          c = [
            { in_cash: "4,99%", installments: "5,59%" },
            { in_cash: "3,99%", installments: "4,59%" },
            { in_cash: "3,19%", installments: "3,79%" },
          ];
        function o(e) {
          n(e);
        }
        return r.createElement(
          s.$0,
          { className: Z().simulator, isContainer: !1 },
          r.createElement(
            s.W2,
            null,
            r.createElement(
              "h2",
              { className: Z().simulator__title },
              "Taxa de ",
              r.createElement("strong", null, "0%"),
              " no d\xe9bito e cr\xe9dito \xe0 vista e Pix ",
              r.createElement("br", null),
              " nos 30 primeiros dias ",
              r.createElement("sup", null, "2")
            ),
            r.createElement(
              "p",
              { className: Z().simulator__text },
              "Ap\xf3s per\xedodo promocional, planos flex\xedveis com as melhores condi\xe7\xf5es do mercado"
            ),
            r.createElement(
              "h3",
              { className: Z().simulator__subtitle },
              "Prazos de Recebimento"
            ),
            r.createElement(
              "div",
              { className: Z().simulator__grid },
              r.createElement(
                "div",
                {
                  "data-testid": "simulador_debito",
                  className: Z().simulator__card,
                },
                r.createElement(
                  "span",
                  { className: Z()["simulator__card-title"] },
                  "D\xe9bito"
                ),
                r.createElement(
                  "strong",
                  { className: Z()["simulator__card-text"] },
                  "Receber na hora ",
                  r.createElement("sup", null, "1")
                ),
                r.createElement(
                  N,
                  { "data-testid": "debit-box" },
                  r.createElement(P, { label: "\xe0 vista*", value: "1,99%" })
                ),
                r.createElement(
                  "div",
                  { className: Z().simulator__flags },
                  r.createElement(y.v, {
                    size: "small",
                    data: [
                      "maestro",
                      "visa-electron",
                      "elo",
                      "banri-compras",
                      "cabal",
                    ],
                  })
                )
              ),
              r.createElement(
                "div",
                {
                  "data-testid": "simulador_credito",
                  className: Z().simulator__card,
                },
                r.createElement(
                  "span",
                  { className: Z()["simulator__card-title"] },
                  "Cr\xe9dito"
                ),
                r.createElement(q, { activeStep: i, onChange: o }),
                r.createElement(
                  N,
                  { "data-testid": "credit-box" },
                  r.createElement(P, {
                    label: "\xe0 vista",
                    value: c[i].in_cash,
                  }),
                  r.createElement(P, {
                    label: "parcelado**",
                    value: c[i].installments,
                  })
                ),
                r.createElement(
                  "div",
                  { className: Z().simulator__flags },
                  r.createElement(y.v, {
                    size: "small",
                    data: ["mastercard", "visa", "elo", "hipercard"],
                  })
                ),
                r.createElement(
                  "div",
                  { className: Z().simulator__flags },
                  r.createElement(y.v, {
                    size: "small",
                    data: ["hiper", "cabal", "amex", "diners"],
                  })
                ),
                r.createElement(
                  "footer",
                  null,
                  r.createElement(
                    "p",
                    null,
                    "Vendas com a bandeira Diners possui plano de recebimento somente em 30 dias"
                  ),
                  r.createElement(
                    "a",
                    {
                      href: "https://pagbank.com.br/para-seu-negocio/taxas-e-tarifas",
                      "data-track-click":
                        "category: vendas - maquinas cartao; action: simulador - taxas e tarifas;",
                      className: Z()["simulator__card-link"],
                    },
                    "Taxas demais bandeiras"
                  )
                )
              ),
              r.createElement(
                "div",
                {
                  "data-testid": "simulador_voucher",
                  className: Z().simulator__card,
                },
                r.createElement(
                  "span",
                  { className: Z()["simulator__card-title"] },
                  "Voucher"
                ),
                r.createElement(
                  "strong",
                  { className: Z()["simulator__card-text"] },
                  "Consulte"
                ),
                r.createElement(
                  N,
                  null,
                  r.createElement(
                    "div",
                    { className: Z()["voucher-box"] },
                    r.createElement(
                      "span",
                      null,
                      "Taxa e prazo de recebimento a ser negociado com a bandeira."
                    ),
                    r.createElement(
                      "a",
                      {
                        href: "https://pagbank.com.br/para-seu-negocio/voucher#como-aceitar",
                        "data-track-click":
                          "category: vendas - maquinas cartao; action: simulador - voucher saiba mais;",
                        className: ""
                          .concat(Z()["simulator__card-link"], " ")
                          .concat(Z()["simulator__card-link--active"]),
                      },
                      "Saiba mais"
                    )
                  )
                ),
                r.createElement(
                  "div",
                  { className: Z().simulator__flags },
                  r.createElement(y.v, {
                    size: "small",
                    data: ["alelo", "pluxee", "ticket", "vr"],
                  })
                ),
                r.createElement(
                  "div",
                  { className: Z().simulator__flags },
                  r.createElement(y.v, {
                    size: "small",
                    data: ["ben", "upbrasil", "greencard"],
                  })
                )
              )
            ),
            r.createElement(
              "span",
              { className: Z().simulator__info },
              "* Ap\xf3s 1 ano de ",
              r.createElement("strong", null, "1,99%"),
              ", a taxa ser\xe1 2,39%.",
              " ",
              r.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noreferrer",
                  href: "https://faq.pagbank.com.br/duvida/regulamento-promocao-1-99-modalidade-debito/563",
                  "data-track-click":
                    "category: vendas - maquinas cartao; action: simulador - veja regulamento;",
                },
                "Veja Regulamento"
              ),
              ". ** Taxa para parcelado em 18x equivalente a 1,31% por parcela."
            )
          )
        );
      }
      var H = a(71604),
        T = a(59592),
        Y = a.n(T);
      function F() {
        // Seção de ajuda removida - sempre retorna null
        return null;
      }
      var z = a(1740),
        j = a(35507),
        K = a.n(j);
      function W() {
        return null;
      }
      var J = a(99597),
        X = a(45138),
        $ = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/qrcode-google.eede2da8.png",
          height: 1023,
          width: 1023,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/AOLN2O7p5cziAMyhsp+zyqLMAOXIzMbTprHXAM6F1M+/javcANNptsHDzavhAOPOvdajp6bTAM2isanClYjcAOLN3sLg3M3y55UwyLe2N4UAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ee = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/qrcode-facebook.156d4475.png",
          height: 1023,
          width: 1023,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/AOLN2vTj5sviAMyjqqCpx6PMAOPCyLW9obPXANWYyb6sjavcANiloZKszavhAN/AvsWnpqbTAM2gwsyzi4rcAOLM38bd3szy0qgwUgWS0BMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        et = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/qrcode-tiktok.d8271f1b.png",
          height: 1023,
          width: 1023,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/AOLO1eLk5sviAM6euqu4xaPMAN3M1q3ApbLXANCi0qnGlancAM1sqcjC16jhAODEpM3Eo6bTAMyoorG1iIvcAOLM37rd3M3y3LowbmZqiQcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ea = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/qrcode-default.9f76b3d9.png",
          height: 1023,
          width: 1023,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/AOLN1+Xm5MziAMyis6K7zKHMAOPFvbDFpLLXANizt8HEiqvcANeWur63xK3hANy+yMG7qabTAM6lsIialYjcAOHN3sDh283y3nIwbbGvqdIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        er = ["g", "s", "d", "u", "ytv", "vp", "x", "cpc"],
        es = function (e) {
          var t = e.get("utm_source"),
            a = e.get("utm_medium");
          return "google" === t && er.includes(a)
            ? { link: "https://pagbank.vc/mtos1", qrcode: $.src }
            : "facebook" === t && "social-ads" === a
            ? { link: "https://pagbank.vc/mtos2", qrcode: ee.src }
            : "tiktok" === t && "social-ads" === a
            ? { link: "https://pagbank.vc/mtos3", qrcode: et.src }
            : { link: "https://pagbank.vc/mtos4", qrcode: ea.src };
        },
        ei = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/gif-tap-on.88ce875d.gif",
          height: 600,
          width: 759,
        },
        en = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/bg-bluetooth.a30c1416.svg",
          height: 190,
          width: 132,
        },
        ec = a(5462),
        eo = a.n(ec),
        el = function () {
          return r.createElement(
            "picture",
            { className: eo().gif },
            r.createElement(s.Ee, {
              src: en.src,
              alt: "",
              className: eo().gif__bg,
            }),
            r.createElement(s.Ee, {
              src: ei.src,
              alt: "Celular sendo utilizado como maquina de cartao",
              className: eo().gif__img,
            })
          );
        },
        eA = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/selo-sem-aluguel-sm.8561807e.png",
          height: 67,
          width: 67,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR42jWPy0rDUBRFD/oH1pkVFVFICor+qRQHQRAhdSCFOlMUJbcN+AIdKQo1PqZGYyym8SbGJWeQA2tyNuyH6FXgMjYDvrwCJQuM/mrRIfWT/KXJ96Og2NdZSDuff9CS31FgiBe4Ppq2OxsOu5sOlwcNSzxHNTKhqGV8KwzP17kPl3gIl7nrr/HzLJB6hRRvXnGyJ5jeCjfHi5x257k6XCXsCeW7Vwq5GQzPpvDbE3Z/u0V3y6XTnrTRRQNy0xfALT/8JIuaZJEwflJmqBI/oV4COOSB0T6aq661+A9ytLRsbsfd+AAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        eg = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/selo-sem-aluguel-sm@2x.9eaab1bb.png",
          height: 134,
          width: 134,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42j2PwUrDQBRFn/6BiLiyUhElpaDo15rqMi6UbkTULhRmNpFKKQrixjRaXFkao5DIJG1PJ0PpgwuPe8/myBTExiPXitQvXDKtZuBJddVDGiTms0YWiYsZblN1Dpr+acVoh+f7dXPZatA+a9DrrBlGdeymhV+/+HkTvvrHRI97xN193sMjzIdA2iql+PaL8Ep4ujvgVe0SXtd5eTik3xEmY78U/rWKuxtcnKyY2/MmN0GT9umqGfY2sZsWwCvHQZINauSR5QdCHm8xSYIE8ARwkKWXmk55oTkHmLi74ITj+UkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        em = function () {
          return r.createElement(
            "picture",
            { className: eo().rent },
            r.createElement("source", {
              srcSet: "".concat(eA.src, " 1x, ").concat(eg.src, " 2x"),
            }),
            r.createElement(s.Ee, {
              src: eg.src,
              alt: "Sem alluguel nem taxa de adesao",
            })
          );
        },
        eu = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/bg-sm.eb30b6f1.svg",
          height: 69,
          width: 540,
        },
        ep = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/bg-lg.8eeb3401.svg",
          height: 440,
          width: 115,
        },
        ed = function () {
          return r.createElement(
            "picture",
            null,
            r.createElement("source", {
              srcSet: ep.src,
              media: "(min-width: 1024px)",
            }),
            r.createElement("source", {
              srcSet: eu.src,
              media: "(min-width: 320px)",
            }),
            r.createElement(s.Ee, {
              src: eu.src,
              alt: "",
              className: eo().mask,
            })
          );
        },
        eh = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-close.5d44f340.svg",
          height: 14,
          width: 14,
        },
        ef = a(74668),
        eb = a.n(ef);
      function e_(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      function ex(e) {
        var t,
          a,
          n = e.isOpen,
          c = e.closeModal,
          o = (0, i.a)("(max-width: 767px)"),
          l =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((t = (0, r.useState)({}))) ||
            (function (e, t) {
              var a,
                r,
                s =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != s) {
                var i = [],
                  n = !0,
                  c = !1;
                try {
                  for (
                    s = s.call(e);
                    !(n = (a = s.next()).done) &&
                    (i.push(a.value), !t || i.length !== t);
                    n = !0
                  );
                } catch (o) {
                  (c = !0), (r = o);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (c) throw r;
                  }
                }
                return i;
              }
            })(t, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return e_(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === a && e.constructor && (a = e.constructor.name),
                  "Map" === a || "Set" === a)
                )
                  return Array.from(e);
                if (
                  "Arguments" === a ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                )
                  return e_(e, t);
              }
            })(t, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          A = l[0],
          g = l[1];
        (0, r.useEffect)(function () {
          var e;
          g(es(new URLSearchParams(window.location.search)));
        }, []);
        var m = function () {
            return r.createElement(
              "span",
              { className: eb().req },
              "Requisitos: Smartphones com Antena NFC e Android 8.1 ou Superior"
            );
          },
          u = function () {
            return r.createElement(
              z.d,
              {
                className: eb().orderNfc,
                "data-track-click":
                  "category: vendas - maquinas cartao; action: modal - tap on; label: minizinha_nfc_2;",
                href: "https://carrinho.pagseguro.uol.com.br/?er=5a59efd11053578d&cl=true&ori=LPMKT",
              },
              "Prefiro pagar para ter uma Minizinha NFC"
            );
          },
          p = function () {
            return r.createElement(
              v.Z,
              {
                target: "_blank",
                rel: "noopener noreferrer",
                className: I()(eb().btn, eb().qrContainer__grid__btn),
                "data-track-click":
                  "category: vendas - maquinas cartao; action: modal - tap on; label: baixe_pagvendas;",
                href: null == A ? void 0 : A.link,
              },
              r.createElement(
                r.Fragment,
                null,
                r.createElement("strong", null, "Baixe gr\xe1tis o PagVendas"),
                " e venda com TapOn"
              )
            );
          };
        return r.createElement(
          X.Z,
          {
            open: n,
            boxClassName: eb().modalbox,
            closeButton: !1,
            closeHandler: c,
          },
          r.createElement(
            "button",
            { onClick: c, className: eb().closeIcon },
            r.createElement(s.Ee, { src: eh, alt: "" })
          ),
          r.createElement(
            "div",
            { className: eb().boxYellow },
            r.createElement(
              "div",
              { className: eb()["boxYellow--content"] },
              r.createElement(
                "div",
                { className: eb()["boxYellow-column"] },
                r.createElement(
                  "h2",
                  null,
                  "O PagBank tem uma op\xe7\xe3o melhor para voc\xea"
                ),
                !o && r.createElement(m, null)
              )
            ),
            r.createElement(em, null),
            r.createElement(el, null),
            r.createElement(ed, null)
          ),
          r.createElement(
            "div",
            { className: eb().boxBlue },
            r.createElement(
              "div",
              { className: eb()["boxBlue--content"] },
              r.createElement("h2", null, "Tap On"),
              r.createElement(
                "p",
                null,
                "Transforme seu celular em uma m\xe1quina de cart\xe3o e venda hoje"
              ),
              r.createElement(
                "ul",
                null,
                r.createElement(
                  "li",
                  null,
                  "Cr\xe9dito, d\xe9bito e pagamentos por aproxima\xe7\xe3o"
                ),
                r.createElement(
                  "li",
                  null,
                  "Dinheiro na hora e sem taxa de ades\xe3o"
                ),
                r.createElement(
                  "li",
                  null,
                  "Aceite as principais bandeiras de cart\xe3o"
                ),
                r.createElement(
                  "li",
                  null,
                  "Voc\xea vende com o mesmo app da Minizinha NFC"
                )
              ),
              o
                ? r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(p, null),
                    r.createElement(u, null)
                  )
                : r.createElement(
                    "div",
                    { className: eb().qrContainer },
                    r.createElement(
                      "h3",
                      { className: eb().qrContainer__title },
                      "Escaneie o QR Code com a c\xe2mera de seu celular"
                    ),
                    r.createElement(
                      "div",
                      { className: eb().qrContainer__grid },
                      r.createElement(s.Ee, {
                        src: null == A ? void 0 : A.qrcode,
                        className: eb().qrContainer__grid__qrcode,
                        alt: "qrcode",
                      }),
                      r.createElement(
                        "span",
                        { className: eb().qrContainer__grid__info },
                        "Ou clique no bot\xe3o abaixo"
                      ),
                      r.createElement(p, null)
                    ),
                    r.createElement(u, null)
                  )
            ),
            o && r.createElement(m, null)
          )
        );
      }
      ex.propTypes = { isOpen: u().bool, closeModal: u().func };
      var eE = a(21614),
        ev = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/check.f7e3ff1d.gif",
          height: 192,
          width: 192,
        },
        ew = a(1935),
        ey = a.n(ew),
        eC = [
          {
            title: "RECEBA SEU DINHEIRO NA HORA",
            sup: "1",
            image: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-dinheiro-na-hora.dd2a2e29.svg",
              height: 50,
              width: 50,
            },
            description: "Inclusive fins de semana e feriados",
          },
          {
            title: "PAGBANK. SEU DINHEIRO RENDE MAIS.",
            sup: null,
            image: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-conta-gratis.6b5f9300.svg",
              height: 50,
              width: 50,
            },
            description:
              "Venda nas maquininhas, receba no PagBank e aproveite as vantagens!",
          },
          {
            title:
              "CART\xc3O DE CR\xc9DITO INTERNACIONAL GR\xc1TIS COM CASHBACK DE 1%",
            sup: null,
            image: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-cartao-internacional.a6fb7e6e.svg",
              height: 50,
              width: 50,
            },
            description: "Gr\xe1tis Sem anuidade",
          },
          {
            title: "PIX GR\xc1TIS E ILIMITADOS",
            sup: null,
            image: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-teds-ilimitadas.05cf195b.svg",
              height: 50,
              width: 50,
            },
            description: "Para todos os bancos",
          },
          {
            title: "ENTREGA MAIS R\xc1PIDA DO MERCADO",
            sup: null,
            image: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-entrega-rapida.45eca81a.svg",
              height: 50,
              width: 50,
            },
            description: null,
          },
        ],
        eR = {
          "maquinas-de-cartao": [
            {
              title: "DE TAXA NOS 30 PRIMEIROS DIAS",
              sup: "2",
              image: {
                src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-taxa-0.b1ab89b4.svg",
                height: 50,
                width: 50,
              },
              description: null,
            },
          ].concat(eC),
          "maquininhas-de-cartao-melhores-taxas": [
            {
              title: "MELHORES TAXAS DO BRASIL",
              sup: "2",
              image: {
                src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/taxa-zero-percentage-icon.4fd2f073.svg",
                height: 41,
                width: 40,
              },
              description: null,
            },
          ].concat(eC),
        };
      function eB(e) {
        var t = e.showHeader,
          a = e.slug,
          i = eR[void 0 === a ? "maquinas-de-cartao" : a];
        return r.createElement(
          s.$0,
          { isContainer: !1, className: ey().featuresBg },
          r.createElement(
            s.W2,
            null,
            void 0 !== t &&
              t &&
              r.createElement(
                "header",
                { className: ey().featuresHeader },
                r.createElement(s.Ee, { src: ev.src, alt: "check" }),
                r.createElement(
                  "div",
                  null,
                  r.createElement("h2", null, "Voc\xea escolhe!"),
                  r.createElement(
                    "p",
                    null,
                    "Ap\xf3s a finaliza\xe7\xe3o da compra, voc\xea poder\xe1 ativar o Poupar autom\xe1tico para rendimento di\xe1rio e o Cart\xe3o de cr\xe9dito gr\xe1tis sem an\xe1lise de cr\xe9dito."
                  )
                )
              ),
            r.createElement(
              "ul",
              { className: ey().featuresList },
              i.map(function (e) {
                return r.createElement(eO, { key: e.title, feature: e });
              })
            )
          )
        );
      }
      eB.propTypes = { slug: u().string, showHeader: u().bool };
      var eO = function (e) {
        var t = e.feature,
          a = eE.Z.Header.HeadlineVariants.BodyMediumStrong,
          i = eE.Z.Header.HeadlineLevels.H3;
        return r.createElement(
          "li",
          { className: ey().featureItem },
          r.createElement(
            eE.Z,
            { vertical: !0, className: ey().featureItemCard },
            r.createElement(
              eE.Z.SupportingVisual,
              { className: ey().featureItemSupportingVisual },
              r.createElement(s.Ee, { src: t.image.src, alt: "" })
            ),
            r.createElement(eE.Z.Header, {
              className: ey().featureItemHeader,
              headline: {
                title: {
                  content: r.createElement(
                    r.Fragment,
                    null,
                    t.title,
                    t.sup && r.createElement("sup", null, t.sup)
                  ),
                  variant: a,
                  level: i,
                },
              },
            }),
            t.description &&
              r.createElement(
                eE.Z.Footer,
                { className: ey().featureItemCardFooter, divider: !0 },
                r.createElement(
                  "span",
                  { className: ey().featureItemDescription },
                  t.description
                )
              )
          )
        );
      };
      eO.propTypes = { feature: u().object.isRequired };
      var eN = a(64363),
        eU = a(75502),
        eD = a(99616),
        eP = a.n(eD);
      function eS() {
        return r.createElement(
          s.U8,
          {
            className: eP()["benefits-intro"],
            reverse: !0,
            headline: r.createElement(
              "h3",
              null,
              r.createElement("strong", null, "PagBank."),
              " Seu dinheiro rende mais."
            ),
            image: r.createElement(s.Ee, {
              srcset: "".concat(eN.Z.src, " 1x, ").concat(eU.Z.src, " 2x"),
              alt: "Cart\xe3o da conta PagBank internacional gr\xe1tis, sem mensalidade e anuidade",
            }),
          },
          r.createElement(
            "p",
            { className: eP().text },
            "Todas as maquininhas j\xe1 v\xeam com ",
            r.createElement("strong", null, "PagBank"),
            ", o banco completo. Com ele, o dinheiro das suas vendas",
            " ",
            r.createElement("strong", null, "rende muito mais"),
            " que a poupan\xe7a e voc\xea tem um cart\xe3o de cr\xe9dito internacional gr\xe1tis e sem anuidade."
          ),
          r.createElement(
            "p",
            { className: eP().text },
            "Al\xe9m disso, conta com diversas op\xe7\xf5es de investimento, como CDBs com rendimento e liquidez di\xe1rios e aplica\xe7\xe3o",
            " ",
            r.createElement("strong", null, "a partir de R$ 1.")
          ),
          r.createElement(
            "p",
            { className: eP().text },
            "E ainda tem acesso ao PagVendas, uma plataforma para a",
            " ",
            r.createElement("strong", null, "gest\xe3o dos seus clientes"),
            " e tudo que seu neg\xf3cio precisa."
          )
        );
      }
      var eI = [
          {
            title: "Cart\xe3o internacional gr\xe1tis e sem anuidade",
            image: {
              source: {
                src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-card.478b8079.svg",
                height: 70,
                width: 70,
              },
              alt: "\xedcone cart\xe3o",
            },
          },
          {
            title: "TEDs e Pix gr\xe1tis e ilimitados",
            image: {
              source: {
                src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-money.4978d3d1.svg",
                height: 70,
                width: 70,
              },
              alt: "\xedcone moeda",
            },
          },
          {
            title: "Gera\xe7\xe3o de boletos",
            image: {
              source: {
                src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-codebar.e1a64281.svg",
                height: 70,
                width: 70,
              },
              alt: "\xedcone boleto",
            },
          },
          {
            title: "PagVendas: gest\xe3o de clientes, estoque e mais",
            image: {
              source: {
                src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-management.8f49c436.svg",
                height: 70,
                width: 70,
              },
              alt: "\xedcone planilha",
            },
          },
          {
            title: "Recarga de celular com cashback",
            image: {
              source: {
                src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-recharge.92bde68c.svg",
                height: 70,
                width: 70,
              },
              alt: "\xedcone celular apresentando cashback",
            },
          },
          {
            title: r.createElement(
              r.Fragment,
              null,
              r.createElement("span", null, "Faz Empr\xe9stimo"),
              r.createElement("span", null, "*Sujeito \xe1 an\xe1lise")
            ),
            image: {
              source: {
                src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-loan.34579999.svg",
                height: 70,
                width: 70,
              },
              alt: "\xedcone empr\xe9stimo bolsa de dinheiro",
            },
          },
        ],
        ek = a(96183),
        eV = a.n(ek);
      function eQ() {
        return r.createElement(
          "div",
          { className: eV()["benefits-grid__container"] },
          r.createElement(
            s.W2,
            null,
            r.createElement(
              "div",
              { className: eV()["benefits-grid"] },
              eI.map(function (e) {
                return r.createElement(
                  "div",
                  {
                    key: e.image.alt,
                    "data-testid": "benefits-grid-item",
                    className: eV()["benefits-grid__item"],
                  },
                  r.createElement("img", {
                    src: e.image.source.src,
                    alt: e.image.alt,
                  }),
                  r.createElement("div", null, e.title)
                );
              })
            )
          )
        );
      }
      var eq = a(65679),
        eL = a.n(eq);
      function eZ() {
        return r.createElement(
          s.$0,
          { isContainer: !1, className: eL().benefits },
          r.createElement(s.W2, null, r.createElement(eS, null)),
          r.createElement(eQ, null),
          // Botão "Conheça as vantagens" removido
        );
      }
      var eM = a(78444),
        eG = a.n(eM);
      function eH(e) {
        var t = e.title,
          a = e.images;
        return r.createElement(
          "div",
          { className: eG()["payment-box"] },
          r.createElement("span", { className: eG()["payment-box__title"] }, t),
          r.createElement(
            "div",
            { className: eG()["payment-box__grid"] },
            a.map(function (e) {
              return r.createElement("img", {
                key: e.alt,
                src: e.source.src,
                alt: e.alt,
              });
            })
          )
        );
      }
      eH.propTypes = {
        title: u().string.isRequired,
        images: u().array.isRequired,
      };
      var eT = a(50996),
        eY = a(23935),
        eF = a(9927),
        ez = a(54617),
        ej = a(31050),
        eK = a(76072),
        eW = a(79387),
        eJ = a(66632),
        eX = a(90723),
        e$ = [
          { source: eT.Z, alt: "Mastercard" },
          { source: eY.Z, alt: "Visa" },
          { source: eF.Z, alt: "Hiper" },
          { source: ez.Z, alt: "Hipercard" },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/diners-club.12382db1.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAgklEQVR42jXLwQoCIRSFYd//jSKmxUDjpoXESJFEUChXHVOqCUqvZshsDvx8HJJzLqXUfb0/MD0QsSVpcA/zjt9W2+N4UjURF3jO372ANRWHM/yhPaSUWuurBHGRAKCUQkSSUmKMdd2m73vOR0rpMAwxRlIxhOCcs3ay1hpjvPeI+AN3woSxEvi4pQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Diners Club",
          },
          { source: ej.Z, alt: "American Express" },
          { source: eK.Z, alt: "Elo" },
          { source: eW.Z, alt: "Cabal" },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/banri-compras.5f1113ad.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAg0lEQVR42mP4/w8E/v////vLx4/vHv4Fsv6BxBggjP8/vv9+fP374+t/f3wGikAlfvz8s3DDxdU7r8xcd3naijOfv/4ECoIlfv1Jmns+dcEF076T4TPPvP/8HSrx5++/VTuvdM46PHflqekrT3/5BtYBsfnv92//Pn/89+nDny+fISIAZVOBKoP5LTMAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Banri Compras",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/pix.a6e15f3b.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEX////+/v79/v79/f39/Pz8/Pz6/Pz5+fn3+fn1+vn4+Pjt9vT18vPy8vLo9PLw8PDv7e3j8e/l5+fk5ubk5OS+4dyr2tNxyb1IwbN6sYGAAAAAMUlEQVR42iXBxQHAIAAEwb0oEVz7r5QHMwixPOzGcPL1+udUXuJowVt/g7sOADZAkiYjgAFJwOgtSgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Pix",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/qr-code.3f91585d.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEX////+/v78/Pz7+/v5+fn4+Pj39/f09fXx8fHv7+/f39/b3NzU1dXPz8/Nzc3Mzc3Ky8vIyMjFxsa/wMCztLStrq5r2hGGAAAANElEQVR42mNgZGBkYgISQMjKy8cOZjALCLIBKQYWDi5uTjYgg1+UR0hEmAEowsrCxsrCCAAX4AEVSjo5AgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "QR Code",
          },
        ],
        e1 = [
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/pluxee.773ac725.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAPFBMVEX////+/v79/f37+/vs7O3q6uvp6erV1NfR0NPKys3HxsrFxMjExMfDw8bCwsbBwcXAwMS3t7u2tru2tbrVIiwOAAAAK0lEQVR42mNgZGRgAgJGBjhgExbk4OcWYGVgF+Lk4+HiZWFghssxMoEVAwAWcADTkvvT9gAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Pluxee",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/vr.1a4e20c6.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEX////+///+/v7+/v39/f3Y1s7L1s7H2MzTz8bH0sXAzcO7yrm0w7Suw7OywbGov66yqo+xqY+Pspl0l3xrknSmSnSIAAAAMElEQVR42mNgYGIAAiDBwsAmIszFwAKEvELs/AxMQAYPJzcfmMEqKMDBwMwAVcwIABmtAO3CBqPAAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "VR",
          },
          { source: eJ.Z, alt: "Ticket" },
          { source: eX.Z, alt: "Alelo" },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ben.196fa079.png",
              height: 56,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEX////+/v/+/v79/f38/Pz4+Pjk5OTj4+PQ0NC2trasrKympqWXl5aMjIuJiomJiYiHh4d+fn5xcXATFA8AAAA3MhOzAAAAMklEQVR42hXGxwHAMBACQazDtnLuv1ahB+zAAS8MTgvr14t9z0/Bk/KoF4ileYE0GsgDGP0A+W+Uhg4AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Ben",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/upbrasil.18d1ebcf.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAV1BMVEX+///++ff++fb++Pb+7+j+7uf+7ub+7OX+7OT+39D+38/+3c7+3Mz+3Mv+28f+2sn+2sj+1b/+uY3+sn/+sn7+rnf+oVP+mTT+liH+kgD+jQD+hQD+gwDRArfRAAAANklEQVR42mNgYOQX4OVhZmBgYJMQk5RhBTI4hAT5RDiADHZRQT5hEINFWkocLMXIxcnNxcQAADXpAfIRQjGfAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "UP",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/greencard.93228ea5.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAfklEQVR42kVNSQ6DMBDj//9pD+0HENwQLZQorZrplpTlwpJMlMCwSPhiy5btwHs/Luh03w6dc440mQFRr4cwizMoDJrwEgsJZM5BIdgxOv+bMuHpITp9q98WoEVZKVAv9uYa9T4lPpDcUv68Xx95DkzWamvQIVprEKlqLK7/E2ljhrAzD3v2AAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Green Card",
          },
        ],
        e2 = [
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/nubank.a621c33c.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAh0lEQVR42g3JQQ7BQBQG4P+feTVpNRYaNo7Ajjs6jwvYsrHDKQRJ004nU+/p9vt4rM7am8I8CIBzwoAMmbQ6SGhce8/WIX+VoJtNAWt2YbEKcZNz1vcj+ZLtdRQHDp+RymopjFhvS1X0l05Y4HVKhlTvJT11jEbAeycELNAR8fZzcEVNKGzAHxRiO7TOG/otAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "NuBank",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/picpay.e43632f2.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAkklEQVR42mNQPBSncShB4WCs+qF4IEPrUCKQBAoyyB6MYdgfIA4igxn2+zPs82XYHyh3MJZB/VDC1GtL595eW31+4vTry1suTi8+26V3KInB8Wh235X5k64umnVjZffluSvvbgUiyYPRQKNigSYAtTMcCGHY7wdkKB+KkwaaDLRH81AC0EK1Q/FABtBkoFKlQ3EA3jFEDSJCqS8AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "PicPay",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/mercado-pago.5c063578.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAkklEQVR42g3IMRLBQBQG4P+9XSbZIDKMLrXSBRRaruJkVFS5gHEFtcKMioyJtZPY9/jKj8zhyUAHgo+IgkHPkQaAh/9VWktXle/T/LPl4IWmgPUKZ1C1ZvmQiZVdSJHSKyrxsU7ar7/VaBRRkci4LOossU7REK9mbrOQvsH5rns1OdRGKAw3RXYhzRnXESNIq/oDirVAa5uUXdIAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Mercado Pago",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/inter.bcf49db8.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAl0lEQVR42mO4V65zv0LvfpXJvQqd+5UG96vN71caAgUZ7lfo3y9TvFfIcL9K836ZxN1shntF7Pcr9YGUwONJGW92LHx3ZPObnUvf7FzyYnn3vWIxhru5DE/nNbw7sO7tgQ3vT+z+dPHos3n1d/MYGO5X6N4rVb9XIHmvSP5+pRmIXaIItJUBbLkukAVSUaZ+r1wLxCjXAQBw20/DK/EPHAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Inter",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/original.4fef86b0.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAV1BMVEWMyodxtHmOnIuUkZWCgoKBgoGBgYFwf25efGFvcG9vb29saGxIaVJCRj46OjooKCglHiUdHh0SEhIREREQEBAOEQ0mACQLCwsVAxECCQMDAwMBAQEAAABkm0E+AAAANklEQVR42mOQAQJxIRFpBgleAUEQh4GDgYmZlY2Fn4GHkZ2bk4uLj0FGTAYMGCRlRIVFhEWkAF2wA4A6b4W3AAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Original",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ame.f7ccef92.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEX////+///+/v79/f36/v/5/v7/8vPv3uTi4+rh4OfZ2eLY2OHQz9rEyNbExNL7pbD1o6+sq8Gko7zcaYbeZ4TQVXrHAAAAL0lEQVR42i3Fxw0AIAwEsEtC723/WUER/hgMsIi8jIVy+/haWgSNHlaeCSCC4u8CGZ0A78EDHg8AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "Ame",
          },
          {
            source: {
              src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/muitas-outras.5f424378.png",
              height: 55,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAUVBMVEWh2dqh2Nmg19ig1tef1tee1NWd09Sd0tOaz9CVx8iUx8iTxMWSxMWSw8SRwsOOvb6JtreItbaHs7SGsrOFsbKEsLGDrq+BrKyAqap/qal8pKW1oJ9zAAAAMUlEQVR42gVAQQ6AMAwCimb//6hXXbpieGUAiJaEQre5Fj/zqTjb593iKF0A7zlMrB+zeRMJjMOT2AAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            alt: "E muitas outras",
          },
        ],
        e0 = a(19362),
        e4 = a.n(e0);
      function e3(e) {
        var t = e.disclaimerItem,
          a = void 0 === t ? null : t;
        return r.createElement(
          s.$0,
          { isContainer: !1, className: e4()["payment-methods"] },
          r.createElement(
            s.W2,
            null,
            a
              ? r.createElement(
                  "h2",
                  null,
                  "Voc\xea aceita todas as formas de pagamento e recebe seu dinheiro na hora ",
                  r.createElement("sup", null, a),
                  " com praticidade e seguran\xe7a"
                )
              : r.createElement(
                  "h2",
                  null,
                  "Voc\xea aceita todas as formas de pagamento e recebe seu dinheiro na hora com praticidade e seguran\xe7a"
                ),
            r.createElement(eH, {
              title:
                "Cart\xf5es de Cr\xe9dito, D\xe9bito, QR Code Pix e PIX por aproxima\xe7\xe3o",
              images: e$,
            }),
            r.createElement(
              "div",
              { className: e4()["payment-row"] },
              r.createElement(eH, {
                title: "Refei\xe7\xe3o e Alimenta\xe7\xe3o",
                images: e1,
              }),
              r.createElement(
                "div",
                null,
                r.createElement(eH, {
                  title: "Carteiras Digitais",
                  images: e2,
                }),
                r.createElement(
                  "span",
                  { className: e4()["payment-info"] },
                  "* Pagamento com carteiras digitais via QR Code Pix"
                )
              )
            )
          )
        );
      }
      e3.propTypes = { disclaimerItem: u().number };
      var e7 = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/gif-tap-on.4511e09a.gif",
          height: 600,
          width: 759,
        },
        e5 = a(22578),
        e8 = a.n(e5);
      function e9(e) {
        var t = e.link;
        return r.createElement(
          s.$0,
          { className: e8().section, isContainer: !1 },
          r.createElement(
            s.W2,
            { className: e8().container },
            r.createElement(
              "div",
              { className: e8().image },
              r.createElement(s.Ee, { src: e7.src, alt: "" })
            ),
            r.createElement(
              "div",
              { className: e8().content, id: "tap-on" },
              r.createElement(
                "h2",
                { className: e8().title },
                "Transforme seu celular em uma maquininha e venda com o Tap On"
              ),
              r.createElement(
                "ul",
                { className: e8().list },
                r.createElement(
                  "li",
                  null,
                  "Dinheiro na hora, sem aluguel e sem taxa de ades\xe3o"
                ),
                r.createElement(
                  "li",
                  null,
                  "Cr\xe9dito, d\xe9bito e pagamentos por aproxima\xe7\xe3o"
                ),
                r.createElement(
                  "li",
                  null,
                  "Aceite as principais bandeiras de cart\xe3o"
                )
              )
              // Botão "Baixe o App e venda com Tap On" removido
            )
          )
        );
      }
      (e9.propTypes = { link: u().string }), r.Fragment, r.Fragment;
      var e6 = a(16294),
        te = a(87555),
        tt = a(56575),
        ta = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/img-maquininhas-md.11b4f18a.png",
          height: 202,
          width: 339,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAqElEQVR42mOIjY09HB4RU8MABftnaWvvnCqbxAADYSEhhXHeDG4g9sXN7qnn1pp9W9uh+GrmrDmhq1avamY4tKUvfu+WuVvXLZ5+7ei2kh8XDub8P3Ph2q+Dhw/+r6upuc1wbVvq+YNLov5vnlf6f9Xs8v/r5sb+P3by9P85c2b/Z2BgiGN4tZHB8c4qhqRj67Pj+urL4yZU2CSXFyUu09PVvaKhY+gKAJgHTZDn+pM1AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        tr = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/img-maquininhas-lg.a776cdca.png",
          height: 321,
          width: 562,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AVBSV4jj7fzDak4ZtWI6lAnb6ype5+bWkdZzACwYlIbcAWpeQmItJfjyMzhuzfbwxmwSDNJy4eY3APcJKa78AgqvAcO1kp/4/g1U9/P1DAsJ7wAZGNf9+Ah2/wwQDwS4sK3cAd64U9Pq7OYs8fsqAOz6IgD/9bUAJDiIAOnr8ABxcHLSAeWtADv4AQAX8ghn/czXHgH56Zn8+Q9SBKmtu2L3/Qjyv+ZUIUN0KyIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        ts = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-truck.0bf2e930.svg",
          height: 24,
          width: 25,
        },
        ti = a(5965),
        tn = a.n(ti),
        tc = {
          natal: {
            icon: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-tree.f297e07c.svg",
            text: r.createElement(
              "h6",
              null,
              r.createElement("span", null, "OFERTAS DE NATAL"),
              " POR TEMPO LIMITADO"
            ),
          },
          "ano-novo": {
            icon: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-new-year.3a6bd0a2.svg",
            text: r.createElement(
              "h6",
              null,
              "ANO NOVO, M\xc1QUINA NOVA. APROVEITE!"
            ),
          },
          "sem-duvida": {
            icon: ts.src,
            text: r.createElement(
              "h6",
              null,
              "Maquininhas com entrega mais r\xe1pida do Brasil"
            ),
          },
          carnaval: {
            icon: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-carnival.d4f3dfe9.svg",
            text: r.createElement(
              "h6",
              null,
              "OFERTAS DE CARNAVAL. APROVEITE!"
            ),
          },
          "dia-das-maes": {
            icon: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-heart.6bd4ae9a.svg",
            text: r.createElement(
              "h6",
              null,
              "DIA DAS M\xc3ES \xc9 NO PAGBANK"
            ),
          },
          "black-friday": {
            icon: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-fire.84721ee4.svg",
            text: r.createElement(
              "h6",
              null,
              "OFERTA BLACK FRIDAY POR ",
              r.createElement("span", null, "TEMPO LIMITADO")
            ),
          },
          "condicoes-especiais": {
            icon: ts.src,
            text: r.createElement(
              "h6",
              null,
              "Maquininhas com entrega mais r\xe1pida do Brasil"
            ),
          },
        };
      function to(e) {
        var t = e.offer,
          a = void 0 === t ? "black-friday" : t,
          i = tc[a];
        return r.createElement(
          "div",
          { className: tn().container, "data-offer": a },
          r.createElement(s.Ee, { src: i.icon, alt: "" }),
          i.text
        );
      }
      to.propTypes = { offer: u().oneOf(Object.keys(tc)).isRequired };
      var tl = a(92774),
        tA = a.n(tl),
        tg = [
          { id: 1, content: r.createElement("strong", null, "Receba na hora") },
          { id: 2, content: "Frete gr\xe1tis" },
          {
            id: 3,
            content: "D\xe9bito, cr\xe9dito e PIX por aproxima\xe7\xe3o",
          },
          { id: 4, content: "Sem aluguel" },
          { id: 5, content: "5 anos de garantia" },
          { id: 6, content: "Banco completo gr\xe1tis" },
          { id: 7, content: "Aceite cart\xe3o direto pelo celular" },
        ];
      function tm(e) {
        var t = e.discount,
          a = e.currentPage,
          i = void 0 === a ? "home-de-parceiros" : a;
        return r.createElement(
          s.$0,
          {
            isContainer: !1,
            className: I()(tA().banner, {
              [tA().moderninhas]: "moderninhas" === i,
              [tA().condicoesEspeciais]: "condicoes-especiais" === i,
            }),
          },
          r.createElement(
            "div",
            { className: tA().logo },
            r.createElement(s.TR, null)
          ),
          r.createElement(
            s.W2,
            { className: tA().container },
            r.createElement(
              "div",
              { className: tA().heading },
              r.createElement(to, {
                offer:
                  "condicoes-especiais" === i
                    ? "condicoes-especiais"
                    : "sem-duvida",
              }),
              r.createElement(
                "h1",
                null,
                "condicoes-especiais" === i
                  ? r.createElement(
                      "p",
                      { className: tA().headingVariant },
                      "Chega mais no PagBank e economize at\xe9 ",
                      t,
                      "% hoje vendendo com taxa zero!"
                    )
                  : r.createElement(
                      r.Fragment,
                      null,
                      "ECONOMIZE at\xe9 ",
                      t,
                      "% hoje e",
                      " ",
                      r.createElement(
                        "span",
                        { className: tA().heading },
                        "venda com taxa zero!"
                      )
                    )
              )
            ),
            r.createElement(
              "div",
              { className: tA().machines },
              "moderninhas" === i
                ? r.createElement(
                    "picture",
                    null,
                    r.createElement("source", {
                      media: "(min-width: 1230px)",
                      srcSet: tt.Z.src,
                    }),
                    r.createElement(s.Ee, {
                      src: te.Z.src,
                      alt: "Maquininhas Pagbank",
                    })
                  )
                : r.createElement(
                    "picture",
                    null,
                    r.createElement("source", {
                      media: "(min-width: 1230px)",
                      srcSet: tr.src,
                    }),
                    r.createElement(s.Ee, {
                      src: ta.src,
                      alt: "Maquininhas Pagbank",
                    })
                  )
            ),
            r.createElement(
              "div",
              { className: tA().features },
              r.createElement(
                "div",
                { className: tA().featuresCard },
                r.createElement(
                  "div",
                  { className: tA().featuresCardContent },
                  r.createElement(s.Ee, { src: e6.Z.src, alt: "" }),
                  r.createElement(
                    "div",
                    { className: tA().featuresCardInfo },
                    r.createElement(
                      "h2",
                      null,
                      "Maquininhas de gra\xe7a para voc\xea"
                    ),
                    r.createElement(
                      "p",
                      null,
                      "Receba o valor pago de volta ao atingir R$ 10 mil em vendas nos primeiros 30 dias."
                    )
                  )
                )
              ),
              r.createElement(
                "ul",
                { className: tA().featuresList },
                tg.map(function (e) {
                  return r.createElement(
                    "li",
                    { key: e.id },
                    r.createElement("span", null, e.content)
                  );
                })
              )
            )
          ),
          r.createElement("div", {
            className: I()(tA().curve, {
              [tA().condicoesEspeciais]: "condicoes-especiais" === i,
            }),
          })
        );
      }
      tm.propTypes = {
        discount: u().number,
        currentPage: u().oneOf([
          "home-de-parceiros",
          "moderninhas",
          "condicoes-especiais",
        ]),
      };
      var tu = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/img-maquininhas.615cc67b.png",
          height: 322,
          width: 562,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AZydoI7g4uT8hIGs7P/K0JLc6Sxb5uXUlNeCAC4XhYbbAZOLfFz9+OAm7fQSBkM0/wITDdN14eU2APYJKq78AwuuAb2wjKD/AxNM+vf4CQcE7QoZGdX++Ah2/g0QEQS4sKzeAd+5VdHp6+Uu8PooAO37IwD/9LMAIzmJAOrs8QBzcXPTAeatADn4AAAY8Qlm/czYIAH555b8+RFVBKisumH4/Af14T5XKr2O2w0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        tp = a(73781),
        td = a.n(tp),
        th = [
          { id: 1, content: r.createElement("strong", null, "Receba na hora") },
          { id: 2, content: "Frete gr\xe1tis" },
          {
            id: 3,
            content: "D\xe9bito, cr\xe9dito e PIX por aproxima\xe7\xe3o",
          },
          { id: 4, content: "Sem aluguel" },
          { id: 5, content: "5 anos de garantia" },
          { id: 6, content: "Banco completo gr\xe1tis" },
          {
            id: 7,
            content: "Aceite cart\xe3o direto pelo celular",
            scrollTo: "tapOn",
          },
        ];
      function tf(e) {
        var t = e.scrollToTapOn;
        return r.createElement(
          s.$0,
          { isContainer: !1, className: td().banner },
          r.createElement(
            "div",
            { className: td().logo },
            r.createElement(s.TR, null)
          ),
          r.createElement(
            s.W2,
            { className: td().container },
            r.createElement(
              "div",
              { className: td().heading },
              r.createElement(to, { offer: "dia-das-maes" }),
              r.createElement(
                "h1",
                null,
                "Ofertas de Dia das M\xe3es com as melhores maquininhas e solu\xe7\xf5es pra voc\xea vender mais"
              )
            ),
            r.createElement(
              "div",
              { className: td().machines },
              r.createElement(s.Ee, { src: tu.src, alt: "" })
            ),
            r.createElement(
              "div",
              { className: td().features },
              r.createElement(
                "div",
                { className: td().featuresCard },
                r.createElement(
                  "div",
                  { className: td().featuresCardContent },
                  r.createElement(s.Ee, { src: e6.Z.src, alt: "" }),
                  r.createElement(
                    "div",
                    { className: td().featuresCardInfo },
                    r.createElement(
                      "h2",
                      null,
                      "Maquininhas de gra\xe7a para voc\xea"
                    ),
                    r.createElement(
                      "p",
                      null,
                      "Receba o valor pago de volta ao atingir R$ 10 mil em vendas nos primeiros 30 dias."
                    )
                  )
                )
              ),
              r.createElement(
                "ul",
                { className: td().featuresList },
                th.map(function (e) {
                  var a = null != e && e.scrollTo ? "pointer" : "default";
                  return r.createElement(
                    "li",
                    {
                      key: e.id,
                      onClick: function () {
                        var a;
                        return (a = e), void (a.scrollTo && t());
                      },
                      style: { cursor: a },
                    },
                    r.createElement("span", null, e.content)
                  );
                })
              )
            )
          )
        );
      }
      tf.propTypes = { scrollToTapOn: u().func.isRequired };
      var tb = a(93988),
        t_ = a(17228),
        tx = a.n(t_),
        tE = function (e) {
          var t = e.image1x,
            a = e.image2x,
            i = e.alt;
          return r.createElement(s.Ee, {
            className: tx()["wireframe-background"],
            srcset: "".concat(t, " 1x, ").concat(a, " 2x"),
            alt: i,
          });
        };
      tE.propTypes = {
        image1x: u().string,
        image2x: u().string,
        alt: u().string,
      };
      var tv = a(93978),
        tw = a.n(tv),
        ty = function (e) {
          var t = e.image1x,
            a = e.image2x,
            i = e.alt;
          return r.createElement(s.Ee, {
            className: tw()["wireframe-reader"],
            srcset: "".concat(t, " 1x, ").concat(a, " 2x"),
            alt: i,
          });
        };
      ty.propTypes = {
        image1x: u().string,
        image2x: u().string,
        alt: u().string,
      };
      var tC = a(67918),
        tR = a(43475),
        tB = a.n(tR);
      function tO(e) {
        var t = e.discount,
          a = e.background_image1x,
          s = e.background_image2x,
          i = e.reader_image1x,
          n = e.reader_image2x,
          c = e.readerShortName,
          o = e.className;
        return r.createElement(
          "div",
          { className: I()(tB().wireframe, o) },
          r.createElement(ty, { image1x: i.src, image2x: n.src, alt: c }),
          r.createElement(tE, {
            image1x: a.src,
            image2x: s.src,
            alt: "Celebridade com ".concat(c),
          }),
          r.createElement(tC.Z, { discount: t }),
          "Minizinha NFC 2" === c &&
            r.createElement(tC.Z, { bottom: !0, image: !0 })
        );
      }
      tO.propTypes = {
        discount: u().number,
        background_image1x: u().object,
        background_image2x: u().object,
        reader_image1x: u().object,
        reader_image2x: u().object,
        readerShortName: u().string,
        className: u().string,
      };
      var tN = a(44862),
        tU = a.n(tN),
        tD = function (e) {
          var t = e.rebateValue,
            a = e.priceWithRebate,
            s = e.installments,
            i = e.installmentPrice,
            n = e.fullPrice,
            c = e.endDate,
            o = e.readerShortName;
          return r.createElement(
            "div",
            { "data-testid": "offer-block", className: tU()["promo-block"] },
            t
              ? r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    "div",
                    {
                      "data-testid": "promo-block-rebate",
                      className: tU()["promo-block__rebate-tax"],
                    },
                    "Voc\xea paga ",
                    r.createElement("strong", null, "R$ ", n),
                    " ",
                    r.createElement(
                      "span",
                      null,
                      "(",
                      r.createElement("strong", null, s, "x R$ ", i),
                      ")",
                      " e recebe",
                      " "
                    ),
                    "R$ ",
                    t,
                    " de reembolso nas suas taxas."
                  ),
                  r.createElement(
                    "div",
                    {
                      "data-testid": "promo-block-rebate-final",
                      className: tU()["promo-block__rebate-final"],
                    },
                    "A ",
                    o,
                    " custar\xe1",
                    " ",
                    r.createElement("span", null, "apenas R$ ", a, ".")
                  )
                )
              : r.createElement(
                  "span",
                  { className: tU()["promo-block__full-price"] },
                  "\xc0 vista R$ ",
                  n
                ),
            r.createElement(
              "div",
              { className: tU()["promo-block--container-details"] },
              r.createElement(
                "span",
                { className: tU()["promo-block__end-date"] },
                "Promo\xe7\xe3o v\xe1lida at\xe9 ",
                c,
                "."
              )
            )
          );
        };
      tD.propTypes = {
        rebateValue: u().number,
        priceWithRebate: u().string,
        installments: u().number,
        installmentPrice: u().string,
        fullPrice: u().string,
        endDate: u().string,
        readerShortName: u().string,
      };
      var tP = function (e) {
        var t = e.original,
          a = e.rebateValue,
          s = e.offer,
          i = e.final;
        return r.createElement(
          "div",
          { "data-testid": "price-block", className: tU().card__price },
          t &&
            r.createElement(
              "span",
              null,
              "de "
                .concat(null == t ? void 0 : t.installments, "x de R$ ")
                .concat(t.installmentPrice)
            ),
          a
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "span",
                  null,
                  "por equivalente a ".concat(
                    null == i ? void 0 : i.installments,
                    "x de"
                  )
                ),
                r.createElement(
                  "div",
                  { className: tU().card__value },
                  r.createElement("small", null, "R$"),
                  r.createElement(
                    "strong",
                    null,
                    null == i ? void 0 : i.installmentPrice
                  )
                )
              )
            : r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "span",
                  null,
                  "por ".concat(null == s ? void 0 : s.installments, "x de")
                ),
                r.createElement(
                  "div",
                  { className: tU().card__value },
                  r.createElement("small", null, "R$"),
                  r.createElement(
                    "strong",
                    null,
                    null == s ? void 0 : s.installmentPrice
                  )
                )
              )
        );
      };
      tP.propTypes = {
        original: u().object,
        rebateValue: u().number,
        offer: u().object,
        final: u().object,
      };
      var tS = a(61749),
        tI = a.n(tS),
        tk = function (e) {
          var t = e.icon,
            a = e.alt,
            i = e.text;
          return r.createElement(
            "li",
            null,
            r.createElement(
              "div",
              { className: tI().features__icon },
              r.createElement(s.Ee, { src: t, alt: a || "" })
            ),
            r.createElement("span", { className: tI().features__text }, i)
          );
        };
      tk.propTypes = { icon: u().string, text: u().string, alt: u().string };
      var tV = a(53991);
      function tQ() {
        return (tQ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tq = function (e) {
        var t = e.codeFeats;
        return r.createElement(
          "ul",
          { className: tI().features },
          (void 0 === t ? [] : t).map(function (e) {
            return r.createElement(tk, tQ({}, (0, tV.wo)(e), { key: e }));
          })
        );
      };
      tq.propTypes = { codeFeats: u().array };
      var tL = a(99708),
        tZ = a(3847),
        tM = a.n(tZ);
      function tG() {
        return (tG = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tH = function (e) {
        var t = e.codeSeals;
        return r.createElement(
          "div",
          { "data-testid": "machine-seals", className: tM().seals },
          (void 0 === t ? [] : t).map(function (e) {
            return r.createElement(s.Ee, tG({}, (0, tL.x1)(e), { key: e }));
          })
        );
      };
      tH.propTypes = { codeSeals: u().array };
      var tT = a(98703),
        tY = a.n(tT),
        tF = function (e) {
          var t = e.image1x,
            a = e.image2x,
            i = e.alt;
          return r.createElement(
            "div",
            {
              "data-testid": "wireframe-placeholder",
              className: tY()["wireframe-placeholder"],
            },
            r.createElement(s.Ee, {
              srcset: "".concat(t.src, " 1x, ").concat(a.src, " 2x"),
              alt: i,
            })
          );
        };
      function tz(e) {
        var t = e.discount,
          a = e.image1x,
          s = e.image2x,
          i = e.readerShortName,
          n = e.className;
        return r.createElement(
          "div",
          { className: I()(tB().wireframe, n) },
          r.createElement(tF, { image1x: a, image2x: s, alt: i }),
          r.createElement(tC.Z, { discount: t })
        );
      }
      function tj() {
        return (tj = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      (tF.propTypes = {
        image1x: u().object,
        image2x: u().object,
        alt: u().string,
      }),
        (tz.propTypes = {
          discount: u().number,
          image1x: u().object,
          image2x: u().object,
          readerShortName: u().string,
          className: u().string,
        }),
        u().shape({
          sku: u().string,
          wireframe: u().object,
          readerShortName: u().string,
          logotipo_1x: u().object,
          logotipo_2x: u().object,
          tagline: u().string,
          pricesData: u().object,
          codeFeats: u().array,
          codeSeals: u().array,
          checkoutLink: u().string,
          exclusive: u().bool,
          onOrderClick: u().func,
        }),
        u().bool,
        a(22284);
      var tK = a(1237);
      u().array, u().bool, u().bool, u().string;
      var tW = a(4440),
        tJ = a(96617),
        tX = a.n(tJ);
      function t$(e) {
        var t = e.reader,
          a = e.children,
          s = e.className,
          i = e.isFeatured,
          n = e.highlightType,
          c = void 0 === n ? "new-year" : n,
          o = {
            "new-year": "OFERTA ".concat(t.pricesData.percentOff, "% OFF"),
            carnaval: "OFERTA DE CARNAVAL",
            "dia-das-maes": "OFERTA DIA DAS M\xc3ES",
            "black-friday": "OFERTA DE BLACK FRIDAY",
          };
        return r.createElement(
          tW.H.Provider,
          { value: { reader: t } },
          r.createElement(
            "div",
            {
              className: I()(tX().productCardRoot, tX().highlight, s),
            },
            r.createElement(
              "div",
              { className: tX().highlightText, "data-type": c },
              o[c]
            ),
            a
          )
        );
      }
      t$.propTypes = {
        reader: u().object,
        children: u().node,
        isFeatured: u().bool,
        className: u().string,
        highlightType: u().oneOf([
          "new-year",
          "carnaval",
          "dia-das-maes",
          "black-friday",
        ]),
      };
      var t1 = a(86507),
        t2 = a.n(t1);
      function t0(e) {
        var t = e.children;
        return r.createElement("div", { className: t2().card }, t);
      }
      t0.propTypes = { children: u().node };
      var t4 = a(993),
        t3 = a.n(t4);
      function t7() {
        return (t7 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t5 = a(27890),
        t8 = a.n(t5);
      function t9(e) {
        var t = e.text;
        return r.createElement("div", { className: t8().ribbon }, t);
      }
      t9.propTypes = { text: u().string };
      var t6 = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/star.13778ac4.svg",
          height: 18,
          width: 19,
        },
        ae = a(43986),
        at = a.n(ae),
        aa = a(80869),
        ar = a.n(aa),
        as = a(2948),
        ai = a.n(as);
      function an(e) {
        var t = e.children,
          a = (0, tW.i)().reader;
        var productData = {
          moderninha_profit: { name: "Moderninha ProFit", price: 49.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.c950c167.png" },
          minizinha_nfc_2: { name: "Minizinha NFC 2", price: 14.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.21cf7496.png" },
          minizinha_chip_3: { name: "Minizinha Chip 3", price: 34.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.ea3daea7.png" },
          moderninha_pro_2s: { name: "Moderninha Pro 2", price: 59.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.bd7b45a5.png" },
          moderninha_smart_2: { name: "Moderninha Smart 2", price: 99.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.2712b0cd.png" },
          moderninha_plus_2: { name: "Moderninha Plus 2", price: 39.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.8bdf407e.png" }
        };
        var product = productData[a.sku] || { name: a.readerShortName || "Produto", price: 0, image: "" };
        return r.createElement(
          v.Z,
          {
            itemProp: "url",
            className: ai().actionButton,
            "data-track-click":
              "category: vendas - maquinas cartao; action: maquininhas - peca ja opcao; label: ".concat(
                a.sku,
                ";"
              ),
            href: "javascript:void(0)",
            onClick: function() {
              if (typeof window !== 'undefined' && typeof window.goToCheckout === 'function') {
                window.goToCheckout(product.name, product.price, product.image);
              } else if (typeof goToCheckout === 'function') {
                goToCheckout(product.name, product.price, product.image);
              }
            }
          },
          t
        );
      }
      an.propTypes = { children: u().node };
      var ac = a(4047),
        ao = a.n(ac),
        al = a(24355),
        aA = a.n(al);
      function ag() {
        return r.createElement(
          "svg",
          {
            width: "14",
            height: "18",
            viewBox: "0 0 14 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r.createElement("path", {
            d: "M11.8125 5.0625L5.6875 12.9372L2.625 9",
            stroke: "#1BB99A",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
      var am = r.createElement(
          r.Fragment,
          null,
          "Venda em at\xe9 18x ",
          r.createElement("sup", null, "3"),
          " e receba tudo na hora ",
          r.createElement("sup", null, "1")
        ),
        au = {
          moderninha_pro_2s: [
            "Sem aluguel",
            "Comprovante impresso ou por SMS",
            "N\xe3o precisa de celular (Chip gr\xe1tis)",
            "Bateria com dura\xe7\xe3o de 6 horas",
            "Reposi\xe7\xe3o autom\xe1tica e gratuita de bobinas",
            "Suporte dispon\xedvel 24 horas por dia",
            am,
            "Aceita todas as bandeiras de d\xe9bito, cr\xe9dito, refei\xe7\xe3o, QR Code Pix, NFC e carteiras digitais",
          ],
          moderninha_prov: [
            "Sem aluguel",
            "Comprovante impresso ou por SMS",
            "N\xe3o precisa de celular (Chip gr\xe1tis)",
            "Bateria com dura\xe7\xe3o de 6 horas",
            "Reposi\xe7\xe3o autom\xe1tica e gratuita de bobinas",
            "Suporte dispon\xedvel 24 horas por dia",
            am,
            "Aceita todas as bandeiras de d\xe9bito, cr\xe9dito, refei\xe7\xe3o, QR Code Pix, NFC e carteiras digitais",
          ],
          moderninha_plus_2: [
            "Sem aluguel",
            "Comprovante por SMS",
            "N\xe3o precisa de celular (Chip gr\xe1tis)",
            "Bateria de longa dura\xe7\xe3o (10 horas)",
            "Suporte dispon\xedvel 24 horas por dia",
            am,
            "Aceita todas as bandeiras de d\xe9bito, cr\xe9dito, refei\xe7\xe3o, QR Code Pix, NFC e carteiras digitais",
          ],
          moderninha_smart_2: [
            "Sem aluguel",
            "Comprovante impresso ou por SMS",
            "N\xe3o precisa de celular (Chip gr\xe1tis)",
            "Bateria de longa dura\xe7\xe3o (10 horas)",
            "Reposi\xe7\xe3o autom\xe1tica e gratuita de bobinas",
            "Suporte dispon\xedvel 24 horas por dia",
            am,
            "Aceita todas as bandeiras de d\xe9bito, cr\xe9dito, refei\xe7\xe3o, QR Code Pix, NFC e carteiras digitais",
          ],
        },
        ap = a(20971),
        ad = a.n(ap);
      function ah(e) {
        var t = e.invert;
        return r.createElement(
          "svg",
          {
            style: {
              transform: void 0 !== t && t ? "rotate(180deg)" : "rotate(0deg)",
            },
            width: "14",
            height: "7",
            viewBox: "0 0 14 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r.createElement("path", {
            d: "M12.0067 1L6.99345 6L1.99344 1.00001",
            stroke: "#1BB99A",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
      ah.propTypes = { invert: u().bool };
      var af = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-people.99a53955.svg",
          height: 23,
          width: 22,
        },
        ab = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-wifi.e75fccef.svg",
          height: 22,
          width: 25,
        },
        a_ = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-bluetooth.1025f371.svg",
          height: 26,
          width: 22,
        },
        ax = {
          moderninha_pro_2s: {
            heading: "R\xe1pida e robusta",
            items: [
              {
                image: af,
                title: "Indicada para:",
                description:
                  "Quem quer uma maquininha tradicional, que trabalhe bem em qualquer volume de vendas e necessita do comprovante impresso.",
              },
              {
                image: ab,
                title: "4G ou Wi-Fi 5GHz:",
                description:
                  "Faz as vendas mais r\xe1pidas e seguras do mercado.",
              },
              {
                image: a_,
                title: "At\xe9 6 usu\xe1rios:",
                description:
                  "Crie at\xe9 6 perfis e acesse seus relat\xf3rios de venda, de forma separada ou conjunta.",
              },
            ],
          },
          moderninha_prov: {
            heading: "R\xe1pida e robusta",
            items: [
              {
                image: af,
                title: "Indicada para:",
                description:
                  "Quem quer uma maquininha tradicional, que trabalhe bem em qualquer volume de vendas e necessita do comprovante impresso.",
              },
              {
                image: {
                  src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/wifi.eb8cedbc.svg",
                  height: 28,
                  width: 28,
                },
                title: "3G ou Wi-Fi:",
                description:
                  "Faz as vendas mais r\xe1pidas e seguras do mercado.",
              },
              {
                image: {
                  src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/profile-change.aee7320b.svg",
                  height: 28,
                  width: 28,
                },
                title: "At\xe9 6 usu\xe1rios:",
                description:
                  "Crie at\xe9 6 perfis e acesse seus relat\xf3rios de venda, de forma separada ou conjunta.",
              },
            ],
          },
          moderninha_plus_2: {
            heading: "R\xe1pida e cabe no bolso:",
            items: [
              {
                image: af,
                title: "Indicada para:",
                description:
                  "Quem j\xe1 tem m\xe9dio volume de vendas e n\xe3o necessita de comprovante impresso.",
              },
              {
                image: a_,
                title: "3G ou Wi-Fi:",
                description:
                  "Internet via Wi-Fi ou Chip com o melhor sinal em sua \xe1rea, garantem uma conex\xe3o sem falhas.",
              },
            ],
          },
          moderninha_smart_2: {
            heading: "A maquininha mais completa",
            items: [
              {
                image: af,
                title: "Indicada para:",
                description:
                  "Quem quer uma ferramenta completa, que trabalhe com rapidez em qualquer volume de vendas e necessita de comprovante impresso.",
              },
              {
                image: ab,
                title: "4G ou Wi-Fi 5GHz:",
                description:
                  "Faz as vendas mais r\xe1pidas e seguras do mercado.",
              },
              {
                image: {
                  src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-digital-account.41a62f03.svg",
                  height: 24,
                  width: 24,
                },
                title: "Acesso ao App PagVendas:",
                description:
                  "Crie gratuitamente uma frente de caixa completa (Sistema PDV) e gerencie tudo, direto na Smart2.",
              },
              {
                image: {
                  src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-camera.aa649d06.svg",
                  height: 24,
                  width: 24,
                },
                title: "C\xe2mera de 5 Megapixel:",
                description:
                  "Fa\xe7a leitura do c\xf3digo de barras ou adicione fotos dos produtos, para agilizar as suas vendas.",
              },
              {
                image: {
                  src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-stock.29d19b6b.svg",
                  height: 24,
                  width: 24,
                },
                title: "Gest\xe3o de estoque e vendas:",
                description:
                  "Acompanhe seu neg\xf3cio por meio de relat\xf3rios detalhados na tela da moderninha Smart2.",
              },
              {
                image: {
                  src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/icon-clients.e7312b45.svg",
                  height: 24,
                  width: 24,
                },
                title: "Crie programas de fidelidade:",
                description:
                  "Fidelize seus clientes, criando programas personalizados por meio da fun\xe7\xe3o ClubePag.",
              },
            ],
          },
        },
        aE = a(61983),
        av = a.n(aE);
      function aw(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      var ay = a(90509),
        aC = a.n(ay);
      function aR() {
        return (aR = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var aB = {
          Root: t$,
          Content: t0,
          Logo: function (e) {
            var t = (0, tW.i)().reader;
            return r.createElement(
              s.Ee,
              t7(
                {
                  className: t3().logo,
                  srcset: ""
                    .concat(t.logotipo_1x.src, " 1x, ")
                    .concat(t.logotipo_2x.src, " 2x"),
                  alt: t.readerShortName,
                },
                e
              )
            );
          },
          Ribbon: t9,
          Featured: function () {
            var e = (0, tW.i)().reader;
            return r.createElement(
              "div",
              { className: at().featured },
              r.createElement(s.Ee, {
                className: at().logo,
                src: t6.src,
                alt: "",
              }),
              r.createElement(
                "h6",
                null,
                "OFERTA ",
                e.pricesData.percentOff,
                "% OFF"
              )
            );
          },
          Price: function () {
            var e = (0, tW.i)().reader.pricesData,
              t = (0, tW.i)().reader.sku,
              n = e.original,
              a = e.rebateValue,
              s = e.offer,
              i = e.final,
              c = {
                moderninha_profit: "49,90",
                minizinha_nfc_2: "14,90",
                minizinha_chip_3: "34,90",
                moderninha_pro_2s: "59,90",
                moderninha_smart_2: "99,90",
                moderninha_plus_2: "39,90",
              },
              o = c[t] || (a ? null == i ? void 0 : i.installmentPrice : null == s ? void 0 : s.installmentPrice);
            return r.createElement(
              "div",
              { className: ar().container },
              n &&
                r.createElement(
                  "span",
                  {
                    "data-testid": "original-value",
                    className: ar().textPrice,
                  },
                  "de ",
                  null == n ? void 0 : n.installments,
                  "x de R$",
                  " ",
                  null == n ? void 0 : n.installmentPrice
                ),
              a
                ? r.createElement(
                    "span",
                    {
                      "data-testid": "final-installments",
                      className: ar().textPrice,
                    },
                    "Por equivalente a ",
                    null == i ? void 0 : i.installments,
                    "x sem juros de"
                  )
                : r.createElement(
                    "span",
                    {
                      "data-testid": "offer-installments",
                      className: ar().textPrice,
                    },
                    "Hoje, Por apenas"
                  ),
              r.createElement(
                "div",
                { className: ar().priceContainer },
                r.createElement(
                  "strong",
                  { className: ar().priceSymbol },
                  "R$"
                ),
                r.createElement(
                  "strong",
                  { "data-testid": a ? "final-value" : "offer-value", className: ar().price },
                  o
                )
              )
            );
          },
          Action: an,
          Warranty: function () {
            return r.createElement(
              "div",
              { className: ao().warranty },
              r.createElement(
                "span",
                { className: ao().warrantyText },
                "5 anos de garantia"
              ),
              r.createElement(
                "span",
                { className: ao().warrantyText },
                "(maquininha nova em folha)"
              )
            );
          },
          Offer: function () {
            var e,
              t,
              a,
              s,
              i,
              n,
              c = (0, tW.i)().reader,
              o = c.readerShortName,
              d = {
                moderninha_profit: "49,90",
                minizinha_nfc_2: "14,90",
                minizinha_chip_3: "34,90",
                moderninha_pro_2s: "59,90",
                moderninha_smart_2: "99,90",
                moderninha_plus_2: "39,90",
              },
              l = d[c.sku] || (null === (e = c.pricesData) ||
                void 0 === e ||
                null === (e = e.offer) ||
                void 0 === e
                  ? void 0
                  : e.price),
              A =
                null === (t = c.pricesData) ||
                void 0 === t ||
                null === (t = t.offer) ||
                void 0 === t
                  ? void 0
                  : t.installmentPrice,
              g =
                null === (a = c.pricesData) ||
                void 0 === a ||
                null === (a = a.offer) ||
                void 0 === a
                  ? void 0
                  : a.installments,
              m =
                null === (s = c.pricesData) || void 0 === s
                  ? void 0
                  : s.rebateValue,
              u =
                null === (i = c.pricesData) ||
                void 0 === i ||
                null === (i = i.final) ||
                void 0 === i
                  ? void 0
                  : i.price,
              p =
                null === (n = c.pricesData) || void 0 === n
                  ? void 0
                  : n.finalPromoDate;
            return r.createElement(
              "div",
              { className: aA().offer },
              m &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    "span",
                    { "data-testid": "with-rebate" },
                    "Voc\xea paga",
                    " ",
                    r.createElement(
                      "strong",
                      null,
                      "R$ ",
                      l,
                      " (",
                      g,
                      "x R$",
                      " ",
                      A,
                      ")"
                    ),
                    " "
                  ),
                  r.createElement(
                    "span",
                    null,
                    "e recebe R$ ",
                    m,
                    " de reembolso nas suas taxas."
                  ),
                  r.createElement(
                    "span",
                    null,
                    "A ",
                    o,
                    " custar\xe1 apenas R$ ",
                    u,
                    "."
                  )
                ),
              r.createElement(
                "span",
                null,
                "Promo\xe7\xe3o v\xe1lida at\xe9 30/11"
              )
            );
          },
          Benefits: function () {
            var e,
              t =
                null !== (e = au[(0, tW.i)().reader.sku]) && void 0 !== e
                  ? e
                  : [];
            return r.createElement(
              "div",
              { className: ad().benefits },
              r.createElement(
                "strong",
                { className: ad().benefitsTitle },
                "Benef\xedcios:"
              ),
              r.createElement(
                "ul",
                { className: ad().benefitsList },
                t.map(function (e) {
                  return r.createElement(
                    "li",
                    { key: e },
                    r.createElement(ag, null),
                    r.createElement("span", null, e)
                  );
                })
              )
            );
          },
          Features: function () {
            var e,
              t,
              a =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((e = (0, r.useState)(!1))) ||
                (function (e, t) {
                  var a,
                    r,
                    s =
                      null == e
                        ? null
                        : ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                  if (null != s) {
                    var i = [],
                      n = !0,
                      c = !1;
                    try {
                      for (
                        s = s.call(e);
                        !(n = (a = s.next()).done) &&
                        (i.push(a.value), !t || i.length !== t);
                        n = !0
                      );
                    } catch (o) {
                      (c = !0), (r = o);
                    } finally {
                      try {
                        n || null == s.return || s.return();
                      } finally {
                        if (c) throw r;
                      }
                    }
                    return i;
                  }
                })(e, 2) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return aw(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === a &&
                        e.constructor &&
                        (a = e.constructor.name),
                      "Map" === a || "Set" === a)
                    )
                      return Array.from(e);
                    if (
                      "Arguments" === a ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                    )
                      return aw(e, t);
                  }
                })(e, 2) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              i = a[0],
              n = a[1],
              c = ax[(0, tW.i)().reader.sku];
            if (!c) return null;
            var o = function () {
                n(function (e) {
                  return !e;
                });
              },
              l = i ? c.items.slice(0, c.items.length) : c.items.slice(0, 3);
            return r.createElement(
              "div",
              { className: av().feature },
              r.createElement(
                "strong",
                { className: av().featureTitle },
                c.heading
              ),
              r.createElement(
                "ul",
                { className: av().featureList },
                l.map(function (e) {
                  return r.createElement(
                    "li",
                    { key: e.title, className: av().featureListItem },
                    r.createElement(s.Ee, { src: e.image.src, alt: "" }),
                    r.createElement(
                      "div",
                      null,
                      r.createElement("span", null, e.title),
                      r.createElement("span", null, e.description)
                    )
                  );
                })
              ),
              c.items.length > 3 &&
                r.createElement(
                  "button",
                  { onClick: o, className: av().featureButton },
                  r.createElement("span", null, i ? "Ver menos" : "Ver mais"),
                  r.createElement(ah, { invert: i })
                )
            );
          },
          Image: function () {
            var e = (0, tW.i)().reader,
              t = e.wireframe,
              a = e.pricesData,
              s = e.readerShortName;
            return t.generic
              ? r.createElement(
                  tz,
                  aR(
                    {
                      className: aC().wireframe,
                      discount: a.percentOff,
                      readerShortName: s,
                    },
                    t
                  )
                )
              : r.createElement(
                  tO,
                  aR(
                    {
                      className: aC().wireframe,
                      discount: a.percentOff,
                      readerShortName: s,
                    },
                    t
                  )
                );
          },
        },
        aO = a(29821),
        aN = a.n(aO);
      function aU(e) {
        var t = e.reader,
          a = e.children,
          s = e.className,
          i = e.isFeatured,
          n = e.highlightType,
          c = void 0 === n ? "new-year" : n,
          o = {
            "new-year": "OFERTA ".concat(t.pricesData.percentOff, "% OFF"),
            carnaval: "OFERTA DE CARNAVAL",
            "dia-das-maes": "OFERTA DIA DAS M\xc3ES",
            "black-friday": "OFERTA DE BLACK FRIDAY",
          };
        return r.createElement(
          tW.H.Provider,
          { value: { reader: t } },
          r.createElement(
            "div",
            {
              className: I()(aN().productCardRoot, aN().highlight, s),
            },
            r.createElement(
              "div",
              { className: aN().highlightText, "data-type": c },
              o[c]
            ),
            a
          )
        );
      }
      aU.propTypes = {
        reader: u().object,
        children: u().node,
        className: u().string,
        isFeatured: u().bool,
        highlightType: u().oneOf([
          "new-year",
          "carnaval",
          "dia-das-maes",
          "black-friday",
        ]),
      };
      var aD = a(60664),
        aP = a.n(aD);
      function aS() {
        return (aS = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var aI = a(41160),
        ak = a.n(aI);
      function aV(e) {
        var t = e.customImage,
          a = (0, tW.i)().reader;
        return r.createElement(
          "div",
          { className: ak().imageContainer },
          a.wireframe.generic
            ? r.createElement(s.Ee, {
                className: ak().placeholder,
                srcset: ""
                  .concat(a.wireframe.image1x.src, " 1x, ")
                  .concat(a.wireframe.image2x.src, " 2x"),
                alt: "Maquininha PagBank",
              })
            : r.createElement(s.Ee, {
                src: null != t ? t : a.wireframe.machine,
                alt: a.readerShortName,
              }),
          "Minizinha NFC 2" === a.readerShortName &&
            r.createElement(tC.Z, { bottom: !0, image: !0 }),
          r.createElement(tC.Z, { discount: a.pricesData.percentOff })
        );
      }
      aV.propTypes = { customImage: u().string };
      var aQ = a(53643),
        aq = a.n(aQ);
      function aL(e) {
        var t = e.children;
        return r.createElement("div", { className: aq().content }, t);
      }
      aL.propTypes = { children: u().node };
      var aZ = a(74766),
        aM = a.n(aZ),
        aG = a(22955),
        aH = a.n(aG);
      function aT(e) {
        var t = e.children,
          a = e.customHrefLink,
          s = (0, tW.i)().reader;
        var productData = {
          moderninha_profit: { name: "Moderninha ProFit", price: 49.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.c950c167.png" },
          minizinha_nfc_2: { name: "Minizinha NFC 2", price: 14.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.21cf7496.png" },
          minizinha_chip_3: { name: "Minizinha Chip 3", price: 34.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.ea3daea7.png" },
          moderninha_pro_2s: { name: "Moderninha Pro 2", price: 59.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.bd7b45a5.png" },
          moderninha_smart_2: { name: "Moderninha Smart 2", price: 99.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.2712b0cd.png" },
          moderninha_plus_2: { name: "Moderninha Plus 2", price: 39.90, image: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.8bdf407e.png" }
        };
        var product = productData[s.sku] || { name: s.readerShortName || "Produto", price: 0, image: "" };
        return r.createElement(
          v.Z,
          {
            itemProp: "url",
            className: aH().actionButton,
            "data-track-click":
              "category: landing - vendas maquininhas; action: pagbank - adicionar opcao; label: ".concat(
                s.sku,
                ";"
              ),
            href: "javascript:void(0)",
            onClick: function() {
              if (typeof window !== 'undefined' && typeof window.goToCheckout === 'function') {
                window.goToCheckout(product.name, product.price, product.image);
              } else if (typeof goToCheckout === 'function') {
                goToCheckout(product.name, product.price, product.image);
              }
            }
          },
          t
        );
      }
      aT.propTypes = { children: u().node, customHrefLink: u().string };
      var aY = a(62180),
        aF = a.n(aY),
        az = a(60853),
        aj = a(30006),
        aK = a.n(aj);
      function aW() {
        var e = (0, tW.i)().reader;
        return r.createElement(
          "ul",
          { className: aK().features },
          e.codeFeats.map(function (e) {
            var t,
              a = (0, az.wo)(e);
            return r.createElement(
              "li",
              { className: aK().feature, key: a.text },
              r.createElement(
                "div",
                { className: aK().featureIcon },
                r.createElement(s.Ee, {
                  src: a.icon,
                  alt: null !== (t = a.alt) && void 0 !== t ? t : "",
                })
              ),
              r.createElement("span", { className: aK().featureText }, a.text)
            );
          })
        );
      }
      aW.propTypes = { codeFeats: u().array };
      var aJ = a(29666),
        aX = a.n(aJ),
        a$ = a(62471),
        a1 = a(9873),
        a2 = a(51483),
        a0 = function (e) {
          switch (e) {
            case "BLUE_ACCEPT_PIX":
              return { src: a$.Z.src, alt: "Aceita Pix" };
            case "BLACK_QRCODE_PIX":
              return { src: a1.Z.src, alt: "Aceita QR Code PIX" };
            case "FIVE_YEARS_WARRANTY":
              return { src: a2.Z.src, alt: "Nova em folha 5 anos de garantia" };
            default:
              return null;
          }
        },
        a4 = a(91255),
        a3 = a.n(a4);
      function a7() {
        return (a7 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var a5 = {
        Root: aU,
        Logo: function (e) {
          var t = (0, tW.i)().reader;
          return t.wireframe.generic
            ? r.createElement(s.Ee, {
                className: aP().logo,
                srcset: ""
                  .concat(t.logotipo_1x.src, " 1x, ")
                  .concat(t.logotipo_2x.src, " 2x"),
                alt: "Maquininha",
              })
            : r.createElement(
                s.Ee,
                aS(
                  {
                    className: aP().logo,
                    src: t.wireframe.logo,
                    alt: t.readerShortName,
                  },
                  e
                )
              );
        },
        Image: aV,
        Content: aL,
        Price: function () {
          var e = (0, tW.i)().reader.pricesData,
            t = (0, tW.i)().reader.sku,
            n = e.original,
            a = e.rebateValue,
            s = e.offer,
            i = e.final,
            c = {
              moderninha_profit: "49,90",
              minizinha_nfc_2: "14,90",
              minizinha_chip_3: "34,90",
              moderninha_pro_2s: "59,90",
              moderninha_smart_2: "99,90",
              moderninha_plus_2: "39,90",
            },
            o = c[t] || (a ? null == i ? void 0 : i.installmentPrice : null == s ? void 0 : s.installmentPrice);
          return r.createElement(
            "div",
            { className: aM().container },
            n &&
              r.createElement(
                "span",
                {
                  className: ""
                    .concat(aM().textPrice, " ")
                    .concat(aM().original),
                },
                "de ",
                null == n ? void 0 : n.installments,
                "x de R$",
                " ",
                null == n ? void 0 : n.installmentPrice
              ),
            a
              ? r.createElement(
                  "span",
                  { className: aM().textPrice },
                  "Por equivalente a ",
                  null == i ? void 0 : i.installments,
                  "x sem juros de"
                )
              : r.createElement(
                  "span",
                  { className: aM().textPrice },
                  "Hoje, Por apenas"
                ),
            r.createElement(
              "div",
              { className: aM().priceContainer },
              r.createElement("strong", { className: aM().priceSymbol }, "R$"),
              r.createElement(
                "strong",
                { className: aM().price },
                o
              )
            )
          );
        },
        Action: aT,
        Info: function () {
          return r.createElement(
            "div",
            { className: aF().info },
            r.createElement(
              "div",
              { className: aF().freeShipping },
              r.createElement(
                "svg",
                {
                  width: "21",
                  height: "20",
                  viewBox: "0 0 21 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                r.createElement("path", {
                  d: "M2.70508 10H10.2051V11.25H2.70508V10ZM1.45508 6.875H7.70508V8.125H1.45508V6.875Z",
                  fill: "#007455",
                }),
                r.createElement("path", {
                  d: "M18.9041 10.3788L17.0291 6.00375C16.9809 5.8913 16.9009 5.79546 16.7987 5.72812C16.6966 5.66079 16.577 5.62493 16.4547 5.625H14.5797V4.375C14.5797 4.20924 14.5138 4.05027 14.3966 3.93306C14.2794 3.81585 14.1204 3.75 13.9547 3.75H3.95468V5H13.3297V12.8475C13.0449 13.0129 12.7956 13.233 12.5963 13.4952C12.397 13.7573 12.2516 14.0564 12.1684 14.375H8.24093C8.08881 13.7858 7.72703 13.2724 7.22342 12.9309C6.71981 12.5894 6.10894 12.4433 5.5053 12.5199C4.90167 12.5966 4.34672 12.8908 3.94448 13.3474C3.54223 13.8039 3.32031 14.3915 3.32031 15C3.32031 15.6085 3.54223 16.1961 3.94448 16.6526C4.34672 17.1092 4.90167 17.4034 5.5053 17.4801C6.10894 17.5567 6.71981 17.4106 7.22342 17.0691C7.72703 16.7276 8.08881 16.2142 8.24093 15.625H12.1684C12.3044 16.1614 12.6153 16.6371 13.052 16.977C13.4888 17.3168 14.0263 17.5013 14.5797 17.5013C15.133 17.5013 15.6706 17.3168 16.1073 16.977C16.544 16.6371 16.855 16.1614 16.9909 15.625H18.3297C18.4954 15.625 18.6544 15.5592 18.7716 15.4419C18.8888 15.3247 18.9547 15.1658 18.9547 15V10.625C18.9547 10.5403 18.9375 10.4565 18.9041 10.3788ZM5.82968 16.25C5.58245 16.25 5.34078 16.1767 5.13521 16.0393C4.92965 15.902 4.76944 15.7068 4.67483 15.4784C4.58022 15.2499 4.55546 14.9986 4.6037 14.7561C4.65193 14.5137 4.77098 14.2909 4.94579 14.1161C5.12061 13.9413 5.34334 13.8222 5.58581 13.774C5.82829 13.7258 6.07962 13.7505 6.30803 13.8451C6.53644 13.9398 6.73166 14.1 6.86901 14.3055C7.00637 14.5111 7.07968 14.7528 7.07968 15C7.07935 15.3314 6.94754 15.6492 6.7132 15.8835C6.47885 16.1179 6.1611 16.2497 5.82968 16.25ZM14.5797 6.875H16.0422L17.3822 10H14.5797V6.875ZM14.5797 16.25C14.3325 16.25 14.0908 16.1767 13.8852 16.0393C13.6797 15.902 13.5194 15.7068 13.4248 15.4784C13.3302 15.2499 13.3055 14.9986 13.3537 14.7561C13.4019 14.5137 13.521 14.2909 13.6958 14.1161C13.8706 13.9413 14.0933 13.8222 14.3358 13.774C14.5783 13.7258 14.8296 13.7505 15.058 13.8451C15.2864 13.9398 15.4817 14.1 15.619 14.3055C15.7564 14.5111 15.8297 14.7528 15.8297 15C15.8293 15.3314 15.6975 15.6492 15.4632 15.8835C15.2288 16.1179 14.9111 16.2497 14.5797 16.25ZM17.7047 14.375H16.9909C16.8533 13.8396 16.5418 13.3651 16.1055 13.0258C15.6691 12.6865 15.1325 12.5015 14.5797 12.5V11.25H17.7047V14.375Z",
                  fill: "#007455",
                })
              ),
              r.createElement("span", null, "Frete gr\xe1tis para todo Brasil")
            ),
            r.createElement(
              "div",
              { className: aF().fees },
              r.createElement(s.Ee, { src: tb.Z.src, alt: "Selo Taxa 0" }),
              r.createElement(
                "span",
                null,
                "Nos 30 primeiros dias ",
                r.createElement("sup", null, "2")
              ),
              r.createElement(
                "a",
                {
                  href: "https://pagbank.com.br/para-seu-negocio/online/link-de-pagamento",
                },
                "Venda online, por Whatsapp e redes sociais"
              )
            )
          );
        },
        Features: aW,
        Offer: function () {
          var e,
            t,
            a,
            s,
            i,
            n,
            c = (0, tW.i)().reader,
            o = c.readerShortName,
            d = {
              moderninha_profit: "49,90",
              minizinha_nfc_2: "14,90",
              minizinha_chip_3: "34,90",
              moderninha_pro_2s: "59,90",
              moderninha_smart_2: "99,90",
              moderninha_plus_2: "39,90",
            },
            l = d[c.sku] || (null === (e = c.pricesData) ||
              void 0 === e ||
              null === (e = e.offer) ||
              void 0 === e
                ? void 0
                : e.price),
            A =
              null === (t = c.pricesData) ||
              void 0 === t ||
              null === (t = t.offer) ||
              void 0 === t
                ? void 0
                : t.installmentPrice,
            g =
              null === (a = c.pricesData) ||
              void 0 === a ||
              null === (a = a.offer) ||
              void 0 === a
                ? void 0
                : a.installments,
            m =
              null === (s = c.pricesData) || void 0 === s
                ? void 0
                : s.rebateValue,
            u =
              null === (i = c.pricesData) ||
              void 0 === i ||
              null === (i = i.final) ||
              void 0 === i
                ? void 0
                : i.price,
            p =
              null === (n = c.pricesData) || void 0 === n
                ? void 0
                : n.finalPromoDate;
          return r.createElement(
            "div",
            { className: aX().offer },
            m &&
              r.createElement(
                "div",
                { className: aX().withRebate },
                r.createElement(
                  "span",
                  { "data-testid": "with-rebate" },
                  "Voc\xea paga",
                  " ",
                  r.createElement(
                    "strong",
                    null,
                    "R$ ",
                    l,
                    " (",
                    g,
                    "x R$",
                    " ",
                    A,
                    ")"
                  ),
                  " "
                ),
                r.createElement(
                  "span",
                  null,
                  "e recebe R$ ",
                  m,
                  " de reembolso nas suas taxas.",
                  " "
                ),
                r.createElement(
                  "span",
                  null,
                  "A ",
                  o,
                  " custar\xe1 apenas R$ ",
                  u,
                  "."
                )
              ),
            r.createElement(
              "div",
              { className: aX().offerInfo },
              r.createElement(
                "span",
                null,
                "Promo\xe7\xe3o v\xe1lida at\xe9 30/11"
              )
            )
          );
        },
        Seals: function () {
          var e = (0, tW.i)().reader;
          return r.createElement(
            "div",
            { className: a3().seals },
            e.codeSeals.map(function (e) {
              return r.createElement(s.Ee, a7({}, a0(e), { key: e }));
            })
          );
        },
      };
    },
    67918: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = a(67294),
        s = a(45697),
        i = a.n(s),
        n = a(93967),
        c = a.n(n),
        o = a(28244),
        l = a.n(o),
        A = {
          src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/selo-a-mais-barata-do-brasil.3d28c356.svg",
          height: 55,
          width: 55,
        },
        g = function (e) {
          var t = e.discount,
            a = e.bottom,
            s = e.image;
          return r.createElement(
            "div",
            {
              className: c()(l()["wireframe-seal"], {
                [l().image]: s,
                [l().bottom]: void 0 !== a && a,
              }),
            },
            r.createElement(
              "div",
              { className: l()["wireframe-seal__container"] },
              s
                ? r.createElement("img", {
                    src: A.src,
                    alt: "Seal",
                    className: l()["wireframe-seal__image"],
                  })
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      "span",
                      {
                        "data-testid": "seal-value",
                        className: l()["wireframe-seal__value"],
                      },
                      t,
                      r.createElement("small", null, "%")
                    ),
                    r.createElement(
                      "span",
                      { className: l()["wireframe-seal__off"] },
                      "OFF"
                    )
                  )
            )
          );
        };
      g.propTypes = { discount: i().number, bottom: i().bool, image: i().bool };
      var m = g;
    },
    90109: function (e, t, a) {
      "use strict";
      function r(e) {
        var t = e.category,
          a = e.action,
          r = e.label,
          s = [];
        return (
          t && s.push("category: ".concat(t)),
          a && s.push("action: ".concat(a)),
          r && s.push("label: ".concat(r)),
          "".concat(s.join("; "), ";")
        );
      }
      a.d(t, {
        h: function () {
          return r;
        },
      });
    },
    16294: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-maquininha.75ce4c6d.svg",
        height: 40,
        width: 33,
      };
    },
    56575: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/img-moderninhas-lg.ebdaff2c.png",
        height: 359,
        width: 466,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AaOjouvc3d+nhcLjGFsi9pxGJuwYwK26u2iPvecyOUIAAXJ4f1IaA9jwLROpeiIgAA3n6AA2AAlgdz1gn5no3cr7Ab23uCvazK5GU1dajObm6ALX08z8FSxGAykmK/uvra3SAdrY1Lbp6ehJKC42+uvo5wL38+wBBQ8VA/vx7fWMi41+Ab+2rq7t6uVRDhAPAP749wATIjAACAgJAL/AwQBubnXJAayglm/99edM682DBREeAPsCJaL/2djMEdHU5Aiztbqo7Plk8nfvU/kAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    87555: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/img-moderninhas-md.65bcff5b.png",
        height: 267,
        width: 352,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AaGhoOXW2d+mib3mF45I67gfEPQVU3G8mtTPyfcNGSgAAUNeezxvOL8UHQ3GgQwKABXf4QAZFCqaXChHZb7QwLX1AaystEIR+cBVKC5AaODe4gDo7vL7GS1CBSAZGuWen5/jAdjX1N717+YhKjRB+dzW0wP9/v4BAwsNA/Dl4ts9QkV4AbiwqdT4798r+fr9AA8JCQAZL0MA/fz8AKSlpwCfo6mSAaufln8A9Nsy786PCBQuTfLrCUgY3tzSC8jM3P3Cwr55lShjyBKAlMgAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    38290: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-minizinha-chip-3.339fa872.png",
        height: 138,
        width: 136,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9UlEQVR42mMAgflNOawg2kSOWbo4yOZYVZRDCYjfnerJzLB5RgMzAxTUJAfMv7Kg/v+ZeQ17QPzLS9pYGEDgw5HF1gvn970Ld7X6/3hZy989/aWfQAYygMD/9elciyuiHi1bu+D/lJXzf68tCfyzddmU//m9XTerGBhYGLYt7HBeuHHx/13nDv659fz2/+171/w/e+vM3yuPb/w/dPmEJcPx2yf1ZqyY+3/S0tn/Lt2/9Pfig8t/rz68+v/s7Qt/7r1+oMoABfNii/P/bz+97//Rq8f/bzmx8//6w9unMSABxqTc9N49O5Y8PbN3yZM9uxZ1wCQAZQZ86XuljeEAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    54047: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-minizinha-chip-3@2x.677c4293.png",
        height: 276,
        width: 272,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42mMAgUUtuawg2lSZW7IkxO5odbRjKYjfl+7DzLB1ViMzAwQwVif6z7uyoP7/2XkNB0ECN1d2s4BlPh1dYrN88cT3kW42/58sb/u7f1LFV6CwBVjy//oMrqWV0Y9XrF/4f8aaRb/XlAb/2bFyxv+SCb13gfawMexY2OG8aOOS/7vOHfxz68Wd/zv2rf1/7taZv1ef3Px/9MopG4bjt0/pzVo1///kZbP/Xb5/+e/Fh1f+Xn107f+5Oxf+33v1QJMBCubFFOb+33F63/+j147/33py1/+NR3bMYkACjIk5ab17dix9enbv0id7dy/pgkkAAON9fbbVyRzqAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    43930: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-minizinha-chip-3.1c8f7df9.png",
        height: 45,
        width: 160,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKElEQVR42mNwlHV0c7R2NHBSd1zjOMlJkcFR3tEWCJ0c7RwNHHUdxQCL0gfzOYNWVQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    73402: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-minizinha-chip-3@2x.896c9067.png",
        height: 90,
        width: 320,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKElEQVR42mNwlHV0dbR2NHBUc1zlOMVRicFR3tEWCJ0c7Rz1HXUdxQGLegfwmS8EQAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    80276: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/minizinha-chip-3.b235731a.png",
        height: 136,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAiklEQVR42mO4uVuS6dxaFpbza5lYrq5mZGLAAFc2MBjs7mbwOjaDwfvGSgYthiMba4+fPLzt/65Ni/9vnha1meHgtpn7Dx4/9X/JyvX/F/dlrGU4tUz1wIw6i//TivX/H5sltZHh6SaOw3tamf+vnSTz//I6ifUMP7dJbv0wX+T/mQN6/68e01wMAGSmQBmN1qbaAAAAAElFTkSuQmCC",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    53554: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/minizinha-chip-3@2x.5f4e8f34.png",
        height: 272,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAiklEQVR42mO4vUeR6cI6dpYLa5lYrq1hYmLAAFc2MBjs6WHwOj6DwfvGSgZdhuNbGo6fPrr9/56tS/9vm5Wwj+HYzjn7D586+3/Z6s3/l03K285wZoXWgXnNNv9nVZj8PzFXfjfD862Chw51i/zfNk3l/40NMjsZfu6Q2flxoeT/8wcN/984rrMBAJyzQU1FzFqrAAAAAElFTkSuQmCC",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    64306: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-minizinha-nfc.90d3cd83.png",
        height: 136,
        width: 136,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Ae/u7hT7/Pwd/fr7AhMVF/d7XFpYGAgCZPT6/HMkGxanAeLh4X7s7e2BAgMC/QcLCgHIqqYCOwkCAO0ABN45cXonAejl5yzx+fUx6Mrgcv75BTDq2c37JAvnBSEiKNcGDAAuAc2svAD2yeFP7PQBsPTsBP7z+PAAKjDcAiYtPOSIxig0AaoAAABErLjF3MbBOgtHU/3yBQYD9dTS/SxIPwP8Cw9rAaIATQBIrXC+2+DoQRZDPPsBBQQF5c7g+yRDLQUGBQFoAcSOsgAJCwZV6evkqhowIQAHFCD/+fj6ARkrHd/36vAxAaldbQIK8/T+4QUJaTZaUH8MGCESBRALzhAWD1///v/ZIoR2Y+pnZgYAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    1355: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-minizinha-nfc@2x.df026aba.png",
        height: 272,
        width: 272,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Ae7u7xX9/Pwd/Pv7AhITFfd9X1xaGAkCYvX6/HIiGBWnAePi43/v7++AAgQC/gYJCAHGqKUBOwsCAOz/BN05cHkmAejm6Czz+vYx58rfcv75BTDp2Mz7JgzqBSAhJtUHD/UvAc6svQD0x+BQ7fYBr/TsBP7z+fAAKzDdAiYtPON8xCozAaEAAABNrLjG3MjDOQtGUv3yBQYD9tTR/StIQAP8Cg9pAZoAPwBQrX7A3ODoPxZDPfsABQMF5c/g+yVCLQUFBQFmAcWOsgAJCwdW6OvkqRsxIQAGFCD++vj6AhkqHN716vAxAaleawIM9Pb+3wQMajdZToALGCERBRAKzhAVD17////ZjIx4TGfwZDgAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    96749: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-minizinha-nfc.f6d2789f.png",
        height: 45,
        width: 160,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKElEQVR42mNgEGBQY1Bn0AKSSgx6DAIMDDIMVgzWDDYMFgzGDCYMAgAmwAKKisvWSAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    53188: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-minizinha-nfc@2x.a301aca6.png",
        height: 90,
        width: 320,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKElEQVR42mNgEGBQY1Bn0AKSSgy6DAIMDDIMVgzWDDYMFgzGDCYMAgAmrAKJRAgf/AAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    30771: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/minizinha-nfc.504c3930.png",
        height: 136,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAiElEQVR42mN4cp6H+cYxLZY7x3lZnl3gYWbAAB+uM5je2s/gf+8Ag/+nmwymDDvXBp3bun3Z/+3bF//fuSbwNMOK+ZlHt+2/8H8LEC+dl3WA4fxOhqPLZzH8XzeD4f+lHQyHGK6vkzi2uUX3f/8k/f/HdkgeZXi2nXPzq7Vcf47uFPpz/pDQZgAtOUHQBODrNgAAAABJRU5ErkJggg==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    21151: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/minizinha-nfc@2x.e28ec271.png",
        height: 272,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAhUlEQVR42mN4co6X+eZxPZY7x3lYnp7nYWbAAO+vMZjdOsDgfw+IP9xgMGXYtS7k/PYdK/7v3LH0P5B9mmHVwpyj2w9e/L8NiFcszDvAcGEnw9HV8xj+b5rD8P/yToZDDNfXSx/d1mH4f/JU4//Hd0gdZXi2nWPrq3Xc/47uFPp3/pDQFgBAPEI1at1o5AAAAABJRU5ErkJggg==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    23818: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-minizinha-nfc-2.90d3cd83.png",
        height: 136,
        width: 136,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Ae/u7hT7/Pwd/fr7AhMVF/d7XFpYGAgCZPT6/HMkGxanAeLh4X7s7e2BAgMC/QcLCgHIqqYCOwkCAO0ABN45cXonAejl5yzx+fUx6Mrgcv75BTDq2c37JAvnBSEiKNcGDAAuAc2svAD2yeFP7PQBsPTsBP7z+PAAKjDcAiYtPOSIxig0AaoAAABErLjF3MbBOgtHU/3yBQYD9dTS/SxIPwP8Cw9rAaIATQBIrXC+2+DoQRZDPPsBBQQF5c7g+yRDLQUGBQFoAcSOsgAJCwZV6evkqhowIQAHFCD/+fj6ARkrHd/36vAxAaldbQIK8/T+4QUJaTZaUH8MGCESBRALzhAWD1///v/ZIoR2Y+pnZgYAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    34996: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-minizinha-nfc-2@2x.df026aba.png",
        height: 272,
        width: 272,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Ae7u7xX9/Pwd/Pv7AhITFfd9X1xaGAkCYvX6/HIiGBWnAePi43/v7++AAgQC/gYJCAHGqKUBOwsCAOz/BN05cHkmAejm6Czz+vYx58rfcv75BTDp2Mz7JgzqBSAhJtUHD/UvAc6svQD0x+BQ7fYBr/TsBP7z+fAAKzDdAiYtPON8xCozAaEAAABNrLjG3MjDOQtGUv3yBQYD9tTR/StIQAP8Cg9pAZoAPwBQrX7A3ODoPxZDPfsABQMF5c/g+yVCLQUFBQFmAcWOsgAJCwdW6OvkqRsxIQAGFCD++vj6AhkqHN716vAxAaleawIM9Pb+3wQMajdZToALGCERBRAKzhAVD17////ZjIx4TGfwZDgAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    18799: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-nfc-2.03da95ad.png",
        height: 45,
        width: 160,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQklEQVR4nGNkZmPSYGBg4GBkYGD8x8DALMbB/o2NhYUTyP/24us3PpACC6gCJqCCP+KcHH/ZmJm//fv//8vLr995AW+sEYzvDul4AAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    42161: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-nfc-2@2x.f029c35a.png",
        height: 90,
        width: 320,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARElEQVR4nA3KuxGAMAwDUDni8rmDlh0Ygf2XgZ44DaC4f8acDgMqzPBL3FsdhWwA/Oq+2pJ5AioBkqQ3wJdJD/zcfWwTFeEWi6CaesEAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    35928: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/minizinha-nfc-2.10784343.png",
        height: 136,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAiUlEQVR42mO4udOF5fhSTZYTy3VZLq3VYmHAAA/3W0WeWsCQfRKIb21mi2TYNDvi/4Y1i/5v37Ti/8oJAf8Zlk1Ofbfn0PG/x09f+ju/N+U9w4O9Zh/PrLX5f36Z1f9rq5U+MnzYZ/T1wRKG/5d3Mvy/tUfmK8ObTUZ3ny6Q/nV9n8KvSzsVHwAAgzRFNqrIxEYAAAAASUVORK5CYII=",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    79101: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/minizinha-nfc-2@2x.bb80dfa5.png",
        height: 272,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAiklEQVR42mO4ucOV5dgSLZbjy3RZLq3VYmHAAA/3W0edXMCQfWI+Q/atzexRDJvmRP3fvG7J/51bVv9fPSn4P8OKKenv9h85+ffk2ct/F/Wnv2d4uM/844X1tv8vrbT+f2Ot8keGj/uMvj5cxvD/yi6G/7f3ynxleLPJ+P7zRTK/bhxQ/HV5l+IjAJP4RZP9t+tkAAAAAElFTkSuQmCC",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    2659: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-plus-2.8a29a69c.png",
        height: 136,
        width: 136,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42mPYMamckYGBAYQZVMQF27hY2H4bq8oFMwCBlbYSCwMMlIZZFUU7Gf4vDXP8b6wodpcBGRxY3Dsv08/s/6Sc4H+nZ5T/slMR++9lbTCDAQTurum0n1ES+T/By/xPe7L3vx3taf/zfI3/V0a5/I/3tjVn2NSSUrQVKLizO/PPjk4g3ZXxf217yp99/dn/M9wMMxn29ucGLCoN/z+tKPT3pt7c/1u6M/+fnVfz++yciv+zszw9GEDA1Vxvf0N64P+9syr/bZtS8m9lc8r/dU3JOxhgIMndTqA63n3D3unlv84ta/s1syJyNQMDAy8DAwMDADD9Z9J651GNAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    42159: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-plus-2@2x.4a659cca.png",
        height: 272,
        width: 272,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42mPYPa2akYGBgYkBCNSlRFo4Wdj+GqvJhTMAgY2uCgsDDFRE2hRGOxn9K4tw/m+qJPGAARkcWjZhXk6g5f+JWcH/zs6q/OWoIfXfw0p/BgMI3F/fbT+rLPp/vKfFn7Yk7387OzL+5/ka/6+Icvmf4GNnzrClLa1oa3va/1092X92dqX/39Wd9X9te+qf/f05/3M8jTMZ9k3IC1xSHvF/elHY7y39Bf+3ABWcnV/7+9ycyv/zcrw9GEDA1Vx3f31a4P99s2v+bZ9a9m91W9r/9S2pOxlgINXTQaAq3n3D3hkVvy8sb/81uzp2DQMDAy8DAwMDAJiUaJVXFUdaAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    874: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-plus-2.d8c5dd1e.png",
        height: 45,
        width: 160,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNMLww1kJFg5aktX/bOUE+e5fylhyyb5yX9sDSUYf7x/TszY3pJooGcODNvdemcF8aGSqxnz99j2rUogdlQV/HP9x9/fgMAN94bngBbqpYAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    36518: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-plus-2@2x.7405ed29.png",
        height: 90,
        width: 320,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGPMLo3Ul5Ni5S0vXPTeUF+e+fzFhyyb5yX9sDCQZv7x4wczY3ZFmr68JDNvWf70VyaGSixnzt9j2rUogclAR/Hv959/fgMAOIUbnFheUtsAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    88860: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-plus-2.a5e0f763.png",
        height: 136,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAiElEQVR42mXB3QqCMBQA4AP6yl0VdJdQCxpurN3YKoejWGYLQvvBRIjyru7zUY4P4PdBtpWenI59EYx8zWce9OQ2GezXkdWS25iTITxS9a0yhuWBotssfvC6ROX/w7BtGFbHsIbCyGeuQ3QrgjsRvOGsaJ3KOVpB0LBJA/dEuGvM8WaWeFK06ACwNUm6yd+4HwAAAABJRU5ErkJggg==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    54281: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-plus-2@2x.6aeb4e42.png",
        height: 272,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAgklEQVR42l3BQQ4BQRAAwO6dltlIWImEJ7g4+4yPeIurg5PE0S88QhAXjJ2kd3pnut23Cs+HvXs9H6g5w7RpDIbwcjruYuRNYgYrfKVRJdvFjNc6ydBGWtG4Lp/l3ADRwe1ugdrQ4+9tICLAnRBJx65PCqoGWsxR7f3XkwG6Cjil8Ae420AjSH4H5wAAAABJRU5ErkJggg==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    45959: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-pro-2.c7b9dbd3.png",
        height: 136,
        width: 136,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCElEQVR42mPI9WBgZgACK1Mbo7xgh6t+lvrWIP7M6hhWBhAIjm5kAdGJdgzLjk4u+b+kOv7atul5piCx1f1ZjAwg8OzCzOyJpa7/j7Rn/ZycG/Z/85S8/+dWNeYwgIAxA4PMtSuXvs2fO/f/phKXfxcnpfy5saTi/4WlpT8PzEqSZzi1tCZwaWfy/wO7Vv15dP3C/2fnj/6/fWDDn5PbVv7fuWVdKMP1Ld2W69sC/0+ev+Tv8rMP/i049+Tflt27/+6ZU///wIIpNgwgcHF5xYaunp7/JSsP/WvcdPLf5iVT/l9YlLGZAQb+H2Dgmjaxe2XFiv2/Jm4/9WvTwimr3y9k4GFgYGAAAPYegJqZWE2OAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    62422: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-pro-2@2x.a702d09d.png",
        height: 272,
        width: 272,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42mPI92BgZmBgYLA1sTUuCHG6HmBtaAviz6yOYWUAgcCoFhYQnWzPsPzYlNL/S2sSrm+bnmcKEls7IZuRAQReX5mfPaXC4//RztyfU/Mj/2+ekvf/3KrGHAYQsGBgkLl5/dr3RfPn/d9c6vLv0pS0PzeXVv6/sKT058FZifIMJ5bUBK3uT/9/eO/qP4+uX/z/7PzR/3cObPxzatuq/zu3rg9luLa523JDe+D/qQuW/l1x7sG/heee/t+yZ8+fPXMa/h9cONWGAQQuLK/Y0NXb+79k5aF/TZtP/tuydOr/C4syNjPAwP8DDFzTJvWsrFx54NfkHad/b140dfXbeQw8DAwMDABYVIE6PcUxIwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    92921: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-pro-2.61b5aa54.png",
        height: 45,
        width: 160,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASElEQVR4nGMMz/TX0lDj5mksXPZZW0f1/4/Pv9gZGRn//v//nwlIMzIGZ0ZaaKnxCDQXzn6praPO+OPzDzag8G+ggt+MDAycAC5qGS+HkplrAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    84089: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-pro-2@2x.fc22efb9.png",
        height: 90,
        width: 320,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGOMygnW1FTn5q3NXfRZR0ft/48vv9gZGBj+AjETEDMyhuXGmmmr8QjW505/paOrwfD98w82RgaG30BJEOYEAKIzEzBIYHMoAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    48888: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-pro-2.0e91b44c.png",
        height: 137,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/Afu9JFn5+xUK/wEA/gcE6uoB468A9AD8AAsBAAAA/P8A3gGunXTrQEM/FP38+QC0sLnjAcW9tu4THCcRAwQEANfLvvkBx7+28A0dJA8OBggA0ca69QGqopnyOUdPDQP+/wCsoJfvAaV3APy3xQADOBwAADgtANABxJEa39ffBxIMGAENKiD4tCOeOc2XmSvkAAAAAElFTkSuQmCC",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    10212: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-pro-2@2x.6d27b050.png",
        height: 274,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/Afq+JF75+hUI/wD//wcE6+sB468A+QH9AAYBAAAA/P4A4wGwn3juQEM+EP38+gGzsLnnAcW/uPIWHCgNAgQDANbKvvsBx8C39BAfJgsNBgcA0cS6+AGrpJv1OkZPCgL+/wCtopjzAaZ4AP6/zQABMhcAADQpANQBxZIb5tngBw0MGAEMKB73ua/eOwXfQHLQAAAAAElFTkSuQmCC",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    88812: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-pro.157ccadc.png",
        height: 136,
        width: 136,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABB0lEQVR42mP4f5aBkYFhKhMDEEQ4WZYWhjofYWBg4GIAglAXA6AcFNxYzODUn+Hx8dSMiv/FIXY1DEBQE2zPwgACt7amF9/cXf5/Rp77v5P9xb+bMwP+H1pclckAAqdnRUofXdr4+dKlK/87S3P+numO/nduSsb/Oyurv52bHS/DcHZFY+DheYX/pxSb/zl5cOv/F9fO/X985uCf67tW/j+zY3UQw8ll9RYnFpf9X1gf+XfOtsP/lp179G/J2Ud/d62d/3/79FJLBhA4s7xm/aF55f9T+hb9a9x08l/P2j3/Dy5u2sjAAAV7lvZynV5UtKJv2syfzZtO/pqz88SqHXO7uRkYGBgAfCqAdYVWBvgAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    97855: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-pro@2x.6f7dbdcb.png",
        height: 272,
        width: 272,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCElEQVR42mP4f5aBkYFhKhMDEEQ6W5UWhTkfYWBg4GIAglAXA6AcFNxYzOA0IcPz4+mZlf9LQu1rGICgNsSBhQEE7mzLLL69t+r/rHzPf6cmlPxuyQr8f2hxVSYDCJycHi59fFnT5+vXb/zvKc/7e6Y7+t/5qZn/76ys/nZudpwMw5nljYFH5hf9n1Nl8+f0oW3/X1w79//xmUN/ru9a+f/MjtVBDCeX1VucXFz+f1FD1N852478W3b+0b+lZx/93bV2/v/t08ssGUDgzPKa9Yfmlf9P6Vv0r3HTyX+9a/f+P7i4aSMDAxTsXtrLdWZR0Yr+6bN+tWw+9WvurpOrds/v42ZgYGAAALbdgOe63LJsAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    27076: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-pro.928734e5.png",
        height: 45,
        width: 160,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPElEQVR42mPwCnfTnDY/04KBgUFHWEJIBUgbALEmlNZlcAkPsJ44tyQYyLEWkBAzAdJ2QGwDxPoMDAwmAFW3CM8be0gCAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    314: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-pro@2x.81d0abd7.png",
        height: 90,
        width: 320,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPElEQVR42mPwjnTXnLko24KBgUFHWFJIBUgbALEmlNZlcIsMtJ6yoCwYyLEWkBA3AdJ2QGwDxPoMDAzGAFpSCOkDTJenAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    62101: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-pro.263e1df0.png",
        height: 136,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAkUlEQVR4nGP8f1W1g4GJn5Xh33/Wnx8+vWR8sZPh/4fXDAyMDAxAMSB9bG3FHyl1JwZGxv8MFw5v/8/48NLuf1/ZlRiZgQKfn177x/jg4s5/jEI6jKyszAxPr5/8x7h7WfM/QXVvRhagihsH1v9jXFDJ8H/BLAYGM2MGBl9boKEHJmv/ePiIh4VJgOE/v8TnnwAyWzpmOcoIMgAAAABJRU5ErkJggg==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    71780: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-pro@2x.e4925964.png",
        height: 272,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAkUlEQVR4nGP8f1W1k4GJn5XhPwPzz/ef3jC+3MXw/8NrBjD4/5+BgfH42oo/EqpODExMDAyXj+9gZHxwcef/fwI6QOm/DB8eXmBgfHBhx382CWMGZmYGhifXjjMw7l3e+l9Qw5uBlYmR4ebB9QyMi2sY/q/fysCgLcfA4G4KNPTQNINfT57yMjPx/WXgFvnwBwCaaTSYo+3XPgAAAABJRU5ErkJggg==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    87734: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-smart-2.98899c40.png",
        height: 136,
        width: 136,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR42mMAgXXTy1gZIEBKWVL0tbGWciMDBDAyXN89lRnE+v//P+vyjpzeBFfz/9Z6Wk8YkMGNvTNNr+2a8H7PjLL/t1dO/HtwRvmvg3PSbBlA4O6Pf0w390y+fmXn1P+VGZG/jiya+Of8xkn/jy9vuHO0hIGV4fauTuNbR5b+u3jpzN+C1KT/p86f+X/t9vV/Z84e/3/6xD4LhmuHlqhcu3Hp95HDu/93FST8u3b98r+7D+78vwKkDx3cqcUAAhdP7lp4cUvP/8P7t/y7cPXSv2s3r/4H4uUMDFDwfgID2/Wt7Ysvndr96/zVS7+uXL+0/N79OxwMDAwMAFdziJpyTWzGAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    48233: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-smart-2@2x.ccb00238.png",
        height: 272,
        width: 272,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42mMAgQ0zKlgZIEBMRUL0tZGWShsDBDAyXN89lRnE+v//P+uq7vyuFA/L/3YG2s/BkjBwfe9M0+u7Jr7fO7P8/+1Vk/4enln568DsFFsGEHjw4w/TzT2Tr1/dNfV/dVb0r8OLJv45v3Hy/+PLG+8cKWRgZbi9q8v41pEl/y5dPve3MD3l/8lzp/9fv3Pj35mzx/+fPrHfkuHaoSWq129c+n306L7/XQXx/65eu/Tv7oO7/6/euPzv8JG9WgwgcPHU7oUXt/T8P7x/y78LVy/9u37r6v/rt64tZ4CBdz0MbNe2ti2+dGrXrwvXLv++cv3S8nsP7nAwMDAwAACFIojkQoepZQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    28605: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-smart-2.5fb5e126.png",
        height: 45,
        width: 160,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANklEQVR42mMAAQN3O5PGKanxQKYPmwC/I5AOBWIbBhjQ8vDkrZ5QIAlk+jEws4QBaRAGKWQAABzUB6Rgo5xAAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    72309: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-smart-2@2x.6f0cd833.png",
        height: 90,
        width: 320,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANUlEQVR42mMAARNvR9O2GenxQKYPh5CAI5AOBWJbBhjQ9fHlrZ9cLAlk+jMws4RBFYAUMgAAJTwH1irqfjsAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    61148: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-smart-2.ca6955e9.png",
        height: 136,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/AcKkLa/07/1Q+vkBAPj1+aUB9csRvvDn70H6+QAA+/YAsQFVS0u6+QEKRQMC/gD78OWuAaytr69IR0VQ/Pz8AK6vsKIBtrW1rUNERFL9/f0AsrKynwG1tbatMTIwUvLx8gDQ0NCdAbW0tbVKS0pK/v7+AK2traMBgoGCsjU1NE39/v4AxMTEoWaTS+SqyMGyAAAAAElFTkSuQmCC",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    82585: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-smart-2@2x.b7f96b1d.png",
        height: 272,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/AcOmLrH17/5O/PoBAPb0+acB9csQv/Hn8ED7+gAA+vYAsgFYTU67+AIKRAMC/gD88eWwAbCxs7BFREJP/P39ALOztKMBubm5r0FBQFD9/f4At7e2oQG5ubquMDEvUfX09QDQ0NCeAbi4ubZHR0ZJ/v7+ALKysqQBhoWGszIzMkz+/v4Ax8fHo3+1TFW25eOgAAAAAElFTkSuQmCC",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    10921: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-x.ddf59bd8.png",
        height: 136,
        width: 136,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42mMAgTUb3NlAdIaqm2WwvfFPMUb+QhDfy1WehWHT8UBGBhA4xKC7uD/o5IaGnP/epmrfE/UixRhgYN/piqyFx5b+7+pQ+b+tIPpHhbPWfx19hl4GEHj+n0H58qXM3ydPN/8PSmL43VXR9P/Mys7/S+Z1/T95KsKU4co1z5hTS4v+75kX/2deofL/d4db//94fuXPg9Mn/p/rTy1m2DXLz+HA4pj/53ZF/fm1z/Tfr/1B/+5ev/tr99oJ/08vFwtjAIG7b602XH5g9f/VWq3/3zbK/r+0ed7/Q6fbDzHAwP//+eyLV9nObQoS+HBuWtiny9M9Vul32AowMDAwAACGl3s03vl3XAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    5196: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/famoso-moderninha-x@2x.09314041.png",
        height: 272,
        width: 272,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42mMAgTUb3NlAdIaKm2WwvfFPcSaBIhDfy02BhWHzySBGBhA4zKC7ZELwyY2Nuf99TNW/J+lFijHAwP4zVVmLTyz/392p+n97YcyPShet/3qGDL0MIPD8P4Py5ctZv0+daf0fnMzwu7uy+f/ZlV3/l87v/n/qTJQpw5VrnjGnlxX/3zsv/s/8IpX/74+0/f/x4uqfh6dP/D/Xn1bMsGu2v8PBJTH/z+2K+vN7v+m/3/uD/929cffXnnUT/59eIRbGAAJ331ptuPzA+v+rddr/v2+U/3958/z/h850HGKAgf//89iXrLab2xws9OHctPDPV2Z4rTLtdhRgYGBgAADAS3uwN5XfhAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    37682: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-x.35e82a6d.png",
        height: 45,
        width: 160,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQUlEQVR4nGNUkVcQYGBg4AZiLiBmZONmY7527RZD4eQ8BjFFmTcgBRJACX4gBiliYONiZrl2/R5DeV8Ig7qx8m0ANRcLxQZKNmAAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    5648: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo-moderninha-x@2x.8f07a8ac.png",
        height: 90,
        width: 320,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQElEQVR4nGNUkVcQZGBg4IJiRjZedpZrV27+L59dyiihovAapEACKCEAxNxAzMDOzcJy9dodhtqpkf+1zdVvAwBpcQ4AIKmRAwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    79392: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-x.7b2062b1.png",
        height: 136,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAhElEQVR42iXGMQrCMBiG4e9Lf/OLiosdvIAO7l7BxdELOHhYQSm9QsFJ2hpSdIihMeADL7wEUOQEf1+eLud6MXIJGvTv4cXr/ZZ2my1AoqoriKp+JtbOSKb8QUIIZvAezGIco0xVsSpLkIRtmiTOOdu1LYwx8N4L98fDc606T2Tx6Lr+B2kXLTt2HuHdAAAAAElFTkSuQmCC",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    7202: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/moderninha-x@2x.ff5d7f40.png",
        height: 272,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAgklEQVR42hXKMQrCMBgF4Pf+polWEOrorIN38AguDh7AwcMKCvEKjgqmpKFDSE3T4ds+AqgKVeQi8XK72mbkmkL8huB4fz7yYbcHSNiXhTLGDFrrBpRsFiaqGKP0fZgDU/qP80C7aUESWtdZee/rznUQIUIIFY/nk9sumxVIeX8/bgKlfyu2PIlM9wAAAABJRU5ErkJggg==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    90723: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/alelo.fcde6bda.png",
        height: 55,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEX////+/v74+fny9fTv8/Lp7uzo7uvd5uLb5N/Z4+DK2NLC0surwrqPtaiGsaKFrZ6DrZ2EqZppoY5jnIZQl3ApilZmTOvXAAAALUlEQVR42mNgYGQAAkYQYmLh5gSxmPkFhEXZgKKsQny8IhwgKXYuQR6IOjAJABgLAO6ayBOHAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    31050: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/american-express.ed717746.png",
        height: 55,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAh0lEQVR42mP4////v3//fvz+9+3X368//3z78RvIBQoyAPGfv/9W3/zSfOaj07pHKQuv/Pj5Gyrx99+/XQ+/L7zxpenoq+4d94ASCB2TTr9ZePXDkvOv15x6+vPXH5iOv//iF11j6Dun1n48tOfod4gOiOVPXn2+++TD3cfvHzx9D1T3//9/AM9Xf0NFyKYdAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    79387: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/cabal.2c746ec5.png",
        height: 55,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAgklEQVR42mP49+/f////f/z4+fnzl4+fPn399u3v37////9ngFDzFqwKjChuaJniHZT78eMnhET/xHlTZyzdsftwZHz5mzfvEBKTpy3MzG+dNW+1rVv6u/cfEBLzF63xCikpruxLTK9/9w4sAbEcaO7Ll69fvXrz6vWbP3/+/P//HwCranWldGNbSgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    76072: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/elo.837ec3f2.png",
        height: 53,
        width: 79,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEX//////v7+/v75+vrk5+fk5ubi5eTh5OTh4+Pf4uHe4eDc397b397X2trV2djW2NjHzMu+xMOosK+iq6mZo6J6iYeJODC2AAAAKUlEQVR42mNgZIABDl5WZn4uBgYWURFhAUEhbgYGdh42Pl5OBgYmqAoAFTwA9cLcdtMAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    9927: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/hiper.6fe9fdf5.png",
        height: 55,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAgElEQVR42mP49+/ffxj49+vnv39/QYx//xhA1O9f3y8c+7xuzvsaz2/HdoFE/v4FSfx6dPddNsO7Urk3UQyf5rcidPz59P7r7mXfz+z6dmTzl81z/37+CBRkgBj+aWnfxzmNn+a1fOjL/vPuFUji379/EL3/fv369/v3vz9/ICIAYI1/iQNyASgAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    54617: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/hipercard.21c8fe0f.png",
        height: 55,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAUVBMVEX////+/v77+Pj69fX48fLy5OToz9Dnz9Dmz8/mzc7mzM3jxsfjxsbYra7Yra3Yp6jVpqbNgYPLeXrGZGbFYmTEYGLAVFa/Sky/RUi+RUi9REcEPAzJAAAAMklEQVR42jXKtQHAIAAAwSdGDHf2H5QGrj4Ey/7eUj4HXDX3Vk4w0afgNvisVvaHmcUAJfABeXQ3OUIAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    50996: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/mastercard.0eae6a57.png",
        height: 55,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAg0lEQVR42mP49+/ffwwAFGQAUn8/f37f1PKho+3HlvqfByb8+/0TKAiS+LpnzzMGhrdGDJ/rGb72Mvy+fwYq8evWrbcMDJ9c9H9OlPy9iOffu8dQiR+/fz/af+DBnj3Pz+99cuHw91+/oRI/f/x4+f79i/fvX737+Pz12x8/vv///x8AntF5ijvNqDMAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    66632: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ticket.4fef08b4.png",
        height: 55,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAOVBMVEX////+/v7+/f38+Pf79PT78/P68O/y0tLuxsbuwsHsurnmqajloqHikZDgionhgoDfenjdaWbcY2C2w+WeAAAALElEQVR42mNgYGQAAkYQYubmYQFSTAzsgkJcYAaHAD8nkGJkYOXlYwNSMMUAEx4AuL65kGUAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    23935: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/visa.78ebea95.png",
        height: 55,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEX///////7+/v/+/v7+/v39/v79/Pr19/ry9fnx9Pjv8vft8fbm7PPr4djS3enP2ujJ1eTE0+O5yt21yN2zx92nvtekvNacttKHqsy1wAkFAAAAMUlEQVR42iXChw3AIBAAsUs+PfS+/6SAsAy7CCPHBjJf2iVvLBBqLC0D9/Op/z0Rlg4fjgE/zT+ndgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    64363: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/img-conta-digital.70e123a7.png",
        height: 370,
        width: 422,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA6ElEQVR42mMAAbvmBq7///9ztpREr2jKjnz19cubyf///xcHS0YUFtcn9XTdvnXn1tVV07r+b6iK+3/mwon/t+6fWAtWEFZY+DSlp+d/blH1/+pk/38rGq3/rlqy+P/HV/ff////RJTBasIEmQnzp05sS5L6um+zyv9bZ3T/TmmJ+zN18tT/6RkpfWBTJpXG6q9e2/b9+Z3Q/x8e+fyf1KX2n4HB8L+Hh/NqsIL2ubP2dO468n/XjrLfn59Y3mksN3+rrGn338xMfxVYQcPMGYE9q1adnLe8yRXEd/cMqPD09LzLycVbAwAynXOWJ11rdQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 7,
      };
    },
    75502: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/img-conta-digital@2x.dfdba319.png",
        height: 740,
        width: 844,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA6ElEQVR42mMAAbvmBq7///9ztpREr2jKjnz19cubyf///xcHS0YUFtcn9XTdvnXn1tVV07r+b6iK+3/mwon/t+6fWAtWEFZY+DSlp+d/blH1/+pk/38rGq3/rlqy+P/HV/ff////WJTBasIEmQnzp05sS5L6um+zyv9bZ3T+Tm2N/zN1yrT/6RkpfWBTJpXG6q9e2/b9+Z3Q/x8e+fyf1KX6n4HB8L+nh/NqsIL2ubP2dO468n/XjrLfn59Y3GmqsHyrpuPw38xUbxVYQcPMGYE9q1adnLe8yRXE9/MPq/D19b3LysZVAwA2O3O2jAZdTgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 7,
      };
    },
    66999: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-bluetooth.132a360f.svg",
        height: 24,
        width: 24,
      };
    },
    92335: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-cartao-credito.338fdab1.svg",
        height: 16,
        width: 22,
      };
    },
    44754: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-chip-gratis.ac6158a3.svg",
        height: 24,
        width: 24,
      };
    },
    1279: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-comprovante-sms.df12484b.svg",
        height: 24,
        width: 24,
      };
    },
    82843: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-receba-na-hora.b2f7d9c3.svg",
        height: 28,
        width: 28,
      };
    },
    18009: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-sem-aluguel.34ff7d11.svg",
        height: 24,
        width: 24,
      };
    },
    74702: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/ic-support.11cf8f0d.svg",
        height: 24,
        width: 24,
      };
    },
    5118: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo.c5c895ff.svg",
        height: 48,
        width: 244,
      };
    },
    60903: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.ea3daea7.png",
        height: 130,
        width: 130,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42j3Mz0vCcBzG8ffnuznZgqzFYpl5sPAa9JvAu9C/26VrGSTSLbqMQMEuYWMwSTdbn2TCDs9zeV48AjAd9O4Gw/f7LPsuUIxbQy67uzfA0C7Bx5PXuX0kPOqqGEun0atMnvtbAHZZBg0PAxp+HdfZQRZN3hKKChQr+BxPWOY1UWK+xhFmG6cCF+cnjEZ9Xh4gTuDqDK57La2A8VJ+3VMaB7b6eyryl+K50arcANBMWrOcMI3Jgzqzdht7jrXO5gHreBF0UvZNJk1/KYkjMOcH4B81k0iTigQE1QAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    97751: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo.66a815b0.svg",
        height: 48,
        width: 244,
      };
    },
    72582: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.21cf7496.png",
        height: 130,
        width: 130,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42kXMvUpCUQDA8f8559rhlmgJDQXdckinSug5IqK9l4gmh6C5N2jsSWoqHNRFRNCLiqL4haj4ec9xEK77j5+w1jLKv7z+/f98TieNjQDcQ+lcezfvqYfChwRo1r9P2vKN2yefzHODYfSLWqWYAHAA1jMCzzsnmTzjQGn67Ss6PkEIojGotsrUy5cAtGoFEqcQgnTqkSM3y7SUBQP3x+Be3O0BYo2OpDExSWAEjlqCHQMgd2ChJr8G/B5j3SenLWpjVDiYVaQbz4BQGlcJG7eW+UoOALZCW0oPJ+EhvQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    1512: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo.2d76e418.svg",
        height: 48,
        width: 244,
      };
    },
    17621: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.8bdf407e.png",
        height: 130,
        width: 130,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3ElEQVR42kXPv0rDUBQH4N+595IQTAyIk4UKOgoODi7O4is4+0q+hm8gLg6uDtZBqJAqmBL7jza37U1yz2npkO7f8hEAvL2+nBT538d0MkqauvZakSZFVwB6BgCK/Cc5TI+POt0zMDdm8l/QoP8ZA8AOZL13ubt/QOe0izBI5Dfr0/PTo2/BfJb7ylXsG1E1HJxzCKJUteDy5pby7IuGg2+4ymG1tDi/uEYLwjCQxWwqbrUmFgEzw7PfA4Ioo7UyBzFYhESA5WioWmCtLeMoGm+HqTaKvYiyZbkAgA02rWp3frOY/wAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    48842: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo.8094552f.svg",
        height: 48,
        width: 244,
      };
    },
    68541: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.bd7b45a5.png",
        height: 130,
        width: 130,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwUlEQVR42l3MPctBYQDG8es4zxd5BqPB5GuY+ALKLiZl1sEiylFKckheymtKYZHEIC93OJkMMtxlsF9OOurkN//7YxuAAstrhrUcgHIIPicYw8IFVHxNjejeXPdorjoc6OEZLOZh6cLXqNvc01Yu5gR+9Vulw/1xo5SShq5dALjgNBk2BW1VPXUCoMBBqRTSJ/NyphBHaonIDk5kUjXiuPq9YDYIrjT0PtcQVDuAMs//i2LMw1rGy03DXYelXfb9vQF+amcEbpvObAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    1742: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo.381e9283.svg",
        height: 50,
        width: 250,
      };
    },
    93897: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.c950c167.png",
        height: 131,
        width: 130,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mMI13RhZGBgYPh0Qub4i/3yf5/sVf/z9pDUHgYGBoZn593Bcgz//+ey/Dwv8ODDUYb/T3cy/H93kOHO//8nwZJQBQzM22d63z24oub/gRW1/zdPdHvyrJGBiwEJMK9YNvfum/df/7/9+O3/klmTPxczMIjCZWcwMDBPm9h85+zZ8//PXLj0v7e96tt6cQZJJCv6mGZUMNyOdmL4X+nI8H9dHsP3o0v1pZHdwHRmseK9ugTD/wtajf7f36r44lMLAycDMri7TuzQ6Tniv86slPp3eovBFgYGBoYN7xgYASBralZ13Ih1AAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    62754: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo.b76b08db.svg",
        height: 48,
        width: 244,
      };
    },
    80808: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.1298d519.png",
        height: 130,
        width: 130,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuUlEQVR42lWOsQoBAQCGf7yLPIHNqOxeQZEHMBkwkIwGhVxRlMIxEOUwiAxIp7i7B5CUbrqB7ie56+6b/r6+4YcFDziZO9Dcgs8ZpJ8jvLCG3AtrcyFBSYhTKodkOCHgPS5aqvEijTc57VYVfJ0rkFcN9f64Udd1LvvVCwCPK7isOyr/LIaCHdgfxrWkKooDTsQ+25nYNe8O0r5uDlrED2aj4KYIBaW9B07WlcC5lQqyWQhyVA+cLP8Bw31nnatpNJkAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    25681: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/logo.975e72d3.svg",
        height: 48,
        width: 244,
      };
    },
    79325: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/maquininha.2712b0cd.png",
        height: 130,
        width: 130,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42iXKO07DQBSF4f967thkLKCigiBEzxJYBgVI6WgQEhtIT88ieGyA7IAukReBZCtFHkriiRPHdqK4O0f/J3/f9ypGdsBbPvcfPi/xue/HTt8B1bvbHI1igM40HR4iFJ7IdQAQfexfEBoAqkIfiKywmf03JmyFPr++kGVjgHWv94QEwufXz+q6ewXQqGqAtRxP01QYCTmxWls1AGix2VJsSwDmi9khxlR1XZflrgXnp2esFksA27284TisVedcC4ajEdPJBCAYDH4BIUkSk6YZAHsmfEvJe01HogAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    93988: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/selo-0-taxa.88878abf.svg",
        height: 112,
        width: 112,
      };
    },
    51483: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/selo-garantia.4b9446c0.svg",
        height: 110,
        width: 110,
      };
    },
    62471: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/selo-pix.db0be23e.svg",
        height: 108,
        width: 108,
      };
    },
    9873: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://acq-static-pages.pagseguro.com.br/static-pages/campanhas/_next/static/media/selo-qr-pix.e50498b2.svg",
        height: 108,
        width: 108,
      };
    },
    11538: function (e) {
      e.exports = {
        sliderFreeCoreContainer: "styles_sliderFreeCoreContainer__6_McW",
        customSliderFreeCoreFrame: "styles_customSliderFreeCoreFrame__DE_Rv",
        customNavButton: "styles_customNavButton__RJR3X",
      };
    },
    5965: function (e) {
      e.exports = { container: "styles_container__R9XGq" };
    },
    63257: function (e) {
      e.exports = {
        "floating-whatsapp-container":
          "styles_floating-whatsapp-container__aLg2A",
        noText: "styles_noText__VM7I7",
      };
    },
    73781: function (e) {
      e.exports = {
        banner: "styles_banner__Gpty3",
        logo: "styles_logo__icFn2",
        container: "styles_container__ljDhN",
        heading: "styles_heading__ELV5h",
        machines: "styles_machines__nuD9S",
        features: "styles_features__8plkv",
        featuresCard: "styles_featuresCard__8NVRf",
        featuresCardContent: "styles_featuresCardContent__T2JYu",
        featuresCardInfo: "styles_featuresCardInfo__DpVE9",
        featuresList: "styles_featuresList__0PUni",
        moderninhas: "styles_moderninhas__15ECz",
      };
    },
    92774: function (e) {
      e.exports = {
        banner: "styles_banner__CyAiX",
        moderninhas: "styles_moderninhas__r0xGH",
        heading: "styles_heading__bQcS_",
        curve: "styles_curve__VG_H5",
        condicoesEspeciais: "styles_condicoesEspeciais__MKrpo",
        logo: "styles_logo__SBuIL",
        container: "styles_container__XdS8_",
        machines: "styles_machines__L3zw_",
        features: "styles_features__4F3B0",
        featuresCard: "styles_featuresCard__pRLZN",
        featuresCardContent: "styles_featuresCardContent__K1Zvh",
        featuresCardInfo: "styles_featuresCardInfo__pT6zF",
        featuresList: "styles_featuresList__AHUmY",
        headingVariant: "styles_headingVariant__G6FEL",
      };
    },
    96183: function (e) {
      e.exports = {
        "benefits-grid": "styles_benefits-grid__orEx6",
        "benefits-grid__container": "styles_benefits-grid__container__7Ph_Q",
        "benefits-grid__item": "styles_benefits-grid__item__cVG6h",
      };
    },
    99616: function (e) {
      e.exports = {
        "benefits-intro": "styles_benefits-intro__rU1CB",
        text: "styles_text__y8Ftg",
      };
    },
    65679: function (e) {
      e.exports = {
        benefits: "styles_benefits__R0IV1",
        benefits__action: "styles_benefits__action__lNpL4",
        "action-button": "styles_action-button__JyIP4",
      };
    },
    44862: function (e) {
      e.exports = {
        wireframe: "styles_wireframe__3Gu2T",
        card: "styles_card__HlG65",
        card__logo: "styles_card__logo__ittc0",
        card__price: "styles_card__price__289cP",
        card__value: "styles_card__value__Ed0E8",
        card__button: "styles_card__button__gbZqx",
        card__fees: "styles_card__fees__tG_yL",
        "promo-block": "styles_promo-block__TPihP",
        "promo-block__full-price": "styles_promo-block__full-price__ibtJQ",
        "promo-block__rebate-tax": "styles_promo-block__rebate-tax__0zQWf",
        "promo-block__rebate-final": "styles_promo-block__rebate-final__4_Q0x",
        "promo-block__end-date": "styles_promo-block__end-date__r10HS",
        "promo-block__exclusive": "styles_promo-block__exclusive__aRr2X",
        "promo-block--container-details":
          "styles_promo-block--container-details__cJC7F",
        checkout: "styles_checkout__OiP97",
      };
    },
    61749: function (e) {
      e.exports = {
        features: "styles_features__m3Tlm",
        features__icon: "styles_features__icon__JI2xH",
      };
    },
    3847: function (e) {
      e.exports = { seals: "styles_seals__KzVaX" };
    },
    1237: function (e) {
      e.exports = {
        carouselContainer: "styles_carouselContainer__1ixzX",
        carouselItem: "styles_carouselItem__MzNwZ",
        promoInfo: "styles_promoInfo__vxyVO",
      };
    },
    2948: function (e) {
      e.exports = { actionButton: "styles_actionButton__fyjpK" };
    },
    20971: function (e) {
      e.exports = {
        benefits: "styles_benefits__aUEpq",
        benefitsTitle: "styles_benefitsTitle__BdasW",
        benefitsList: "styles_benefitsList__x93RK",
      };
    },
    86507: function (e) {
      e.exports = { card: "styles_card__qvwM9" };
    },
    43986: function (e) {
      e.exports = { featured: "styles_featured__oy7Me" };
    },
    61983: function (e) {
      e.exports = {
        feature: "styles_feature__DxUUI",
        featureTitle: "styles_featureTitle__Q7S1W",
        featureList: "styles_featureList__yAInx",
        featureListItem: "styles_featureListItem__VlBv0",
        featureButton: "styles_featureButton__3aC6E",
      };
    },
    90509: function (e) {
      e.exports = { wireframe: "styles_wireframe__pUtxF" };
    },
    993: function (e) {
      e.exports = { logo: "styles_logo__rSHh2" };
    },
    24355: function (e) {
      e.exports = { offer: "styles_offer__6ggvY" };
    },
    80869: function (e) {
      e.exports = {
        container: "styles_container__1fIWx",
        textPrice: "styles_textPrice__NZO4E",
        priceContainer: "styles_priceContainer___4SVX",
        priceSymbol: "styles_priceSymbol__X2_B7",
        price: "styles_price__qUr99",
      };
    },
    27890: function (e) {
      e.exports = { ribbon: "styles_ribbon__8GvyF" };
    },
    96617: function (e) {
      e.exports = {
        productCardRoot: "styles_productCardRoot__Sj4IK",
        highlight: "styles_highlight__EVBa0",
        highlightText: "styles_highlightText__tOAQJ",
      };
    },
    4047: function (e) {
      e.exports = {
        warranty: "styles_warranty__K3jAo",
        warrantyText: "styles_warrantyText__filcq",
      };
    },
    22955: function (e) {
      e.exports = { actionButton: "styles_actionButton__0bXZH" };
    },
    53643: function (e) {
      e.exports = { content: "styles_content__A_cyb" };
    },
    30006: function (e) {
      e.exports = {
        features: "styles_features__qfa_d",
        feature: "styles_feature__VlW2b",
        featureIcon: "styles_featureIcon__BugOn",
        featureText: "styles_featureText__Xv9TM",
      };
    },
    41160: function (e) {
      e.exports = {
        imageContainer: "styles_imageContainer__WMH3i",
        placeholder: "styles_placeholder__3uhD7",
      };
    },
    62180: function (e) {
      e.exports = {
        info: "styles_info__uGGTO",
        freeShipping: "styles_freeShipping__Y4SOg",
        fees: "styles_fees__oMEJt",
      };
    },
    60664: function (e) {
      e.exports = { logo: "styles_logo__vE_JD" };
    },
    29666: function (e) {
      e.exports = {
        offer: "styles_offer__bvXNg",
        withRebate: "styles_withRebate__Znmkj",
        withoutRebate: "styles_withoutRebate__G6fl_",
        offerInfo: "styles_offerInfo__e3ZmB",
      };
    },
    74766: function (e) {
      e.exports = {
        container: "styles_container__hBu0B",
        textPrice: "styles_textPrice__Fnh0i",
        original: "styles_original__tJUhs",
        priceContainer: "styles_priceContainer__s3oDQ",
        priceSymbol: "styles_priceSymbol__yEDA8",
        price: "styles_price__Uxa0c",
      };
    },
    29821: function (e) {
      e.exports = {
        productCardRoot: "styles_productCardRoot__prgVF",
        highlight: "styles_highlight__Wu7uI",
        highlightText: "styles_highlightText__tOAQJ",
      };
    },
    91255: function (e) {
      e.exports = { seals: "styles_seals__T6BLT" };
    },
    59592: function (e) {
      e.exports = { contact: "styles_contact__12FYE" };
    },
    1935: function (e) {
      e.exports = {
        featuresBg: "styles_featuresBg__X__a_",
        featuresHeader: "styles_featuresHeader__4iRIV",
        featuresList: "styles_featuresList__PrWQ0",
        featureItemCard: "styles_featureItemCard__G2RtI",
        featureItemSupportingVisual:
          "styles_featureItemSupportingVisual__arTVn",
        featureItemHeader: "styles_featureItemHeader__uLRWn",
        featureItemCardFooter: "styles_featureItemCardFooter__7_Vi9",
        featureItemDescription: "styles_featureItemDescription__ObCMx",
      };
    },
    37533: function (e) {
      e.exports = {
        list: "styles_list__nHtwQ",
        listItem: "styles_listItem__e7vMB",
      };
    },
    73377: function (e) {
      e.exports = {
        info: "styles_info__NELhC",
        infoContent: "styles_infoContent__SKh8W",
      };
    },
    51614: function (e) {
      e.exports = {
        bannerWrapper: "styles_bannerWrapper__mY_81",
        bannerWithInfoBlock: "styles_bannerWithInfoBlock__164Eg",
        banner: "styles_banner__h73o_",
        bannerMask: "styles_bannerMask__f5Sd_",
        bannerContainer: "styles_bannerContainer__UnMTf",
        bannerLeft: "styles_bannerLeft__ALtmF",
        bannerRight: "styles_bannerRight__dS7bq",
        bannerCTA: "styles_bannerCTA__7QyMX",
        bannerBadge: "styles_bannerBadge__ASzS8",
      };
    },
    82167: function (e) {
      e.exports = {
        button: "styles_button__uUwp4",
        buttonMobile: "styles_buttonMobile__xeVMs",
      };
    },
    29347: function (e) {
      e.exports = {
        drawer: "styles_drawer__E1_vu",
        drawer__close: "styles_drawer__close__Iz6Oq",
        drawer__title: "styles_drawer__title__cIgRs",
        drawer__content: "styles_drawer__content__ChvnG",
        "button-telephone": "styles_button-telephone__u0zY9",
        "button-whatsapp": "styles_button-whatsapp__tW3_6",
        fill: "styles_fill__0oKnp",
      };
    },
    78444: function (e) {
      e.exports = {
        "payment-box": "styles_payment-box__wpnnl",
        "payment-box__title": "styles_payment-box__title___Wsml",
        "payment-box__grid": "styles_payment-box__grid__oO7S2",
      };
    },
    19362: function (e) {
      e.exports = {
        "payment-methods": "styles_payment-methods__ln60c",
        "payment-row": "styles_payment-row__jq_Lt",
        "payment-info": "styles_payment-info__uhmZp",
      };
    },
    30703: function (e) {
      e.exports = { simulatorBox: "styles_simulatorBox__EBJuN" };
    },
    43017: function (e) {
      e.exports = { simulatorItem: "styles_simulatorItem__t8EIF" };
    },
    18525: function (e) {
      e.exports = {
        stepper: "styles_stepper__N624A",
        step: "styles_step__dvNt2",
        active: "styles_active__1QUBu",
        step__circle: "styles_step__circle__T4AOq",
        step__label: "styles_step__label__OhhyH",
      };
    },
    75997: function (e) {
      e.exports = {
        simulator: "styles_simulator__kXwTz",
        simulator__title: "styles_simulator__title__75fmi",
        simulator__text: "styles_simulator__text__YANRW",
        simulator__subtitle: "styles_simulator__subtitle__DQUA2",
        simulator__info: "styles_simulator__info__Pr6pZ",
        simulator__grid: "styles_simulator__grid__Oc8qf",
        simulator__card: "styles_simulator__card__hzRbC",
        "simulator__card-title": "styles_simulator__card-title__0998x",
        "simulator__card-text": "styles_simulator__card-text__97jBE",
        "simulator__card-link": "styles_simulator__card-link__M_1YA",
        "simulator__card-link--active":
          "styles_simulator__card-link--active__LarHF",
        simulator__flags: "styles_simulator__flags__KR79g",
        "voucher-box": "styles_voucher-box__qyfqC",
      };
    },
    22578: function (e) {
      e.exports = {
        section: "styles_section__eTYKq",
        container: "styles_container__AC_NG",
        content: "styles_content__wEx2t",
        image: "styles_image__dVrwt",
        title: "styles_title__YH_W7",
        list: "styles_list__E90Oq",
        link: "styles_link__ovOm5",
      };
    },
    5462: function (e) {
      e.exports = {
        gif: "styles_gif__mIobh",
        gif__img: "styles_gif__img__DcHXS",
        gif__bg: "styles_gif__bg__u62vg",
        rent: "styles_rent__qzeH9",
        mask: "styles_mask__SZPvX",
      };
    },
    74668: function (e) {
      e.exports = {
        modalbox: "styles_modalbox__M6mY_",
        closeIcon: "styles_closeIcon__HLiwr",
        boxYellow: "styles_boxYellow__Jxtu_",
        "boxYellow--content": "styles_boxYellow--content__MyTkl",
        "boxYellow-column": "styles_boxYellow-column__V2z3D",
        boxBlue: "styles_boxBlue__ukrCX",
        "boxBlue--content": "styles_boxBlue--content__kN9xP",
        btn: "styles_btn__Z1ljq",
        req: "styles_req__J8ecn",
        qrContainer: "styles_qrContainer__sTc7_",
        qrContainer__title: "styles_qrContainer__title__9yX8j",
        qrContainer__grid: "styles_qrContainer__grid__JQsR0",
        qrContainer__grid__qrcode: "styles_qrContainer__grid__qrcode__WeYfs",
        qrContainer__grid__info: "styles_qrContainer__grid__info__8rF58",
        qrContainer__grid__btn: "styles_qrContainer__grid__btn__H_Tn0",
        orderNfc: "styles_orderNfc__543Lu",
      };
    },
    35507: function (e) {
      e.exports = {
        termsItem: "styles_termsItem__YwxLG",
        operation: "styles_operation__hPA0y",
      };
    },
    17228: function (e) {
      e.exports = {
        "wireframe-background": "styles_wireframe-background__piObn",
      };
    },
    98703: function (e) {
      e.exports = {
        "wireframe-placeholder": "styles_wireframe-placeholder__yjX3r",
      };
    },
    93978: function (e) {
      e.exports = { "wireframe-reader": "styles_wireframe-reader__VxRiB" };
    },
    28244: function (e) {
      e.exports = {
        "wireframe-seal": "styles_wireframe-seal___gUMn",
        bottom: "styles_bottom__OP7iS",
        image: "styles_image__H60yA",
        "wireframe-seal__container": "styles_wireframe-seal__container__e5KL7",
        "wireframe-seal__value": "styles_wireframe-seal__value__RWVgM",
        "wireframe-seal__off": "styles_wireframe-seal__off__TEIEm",
      };
    },
    43475: function (e) {
      e.exports = { wireframe: "styles_wireframe__PLZhP" };
    },
  },
]);
