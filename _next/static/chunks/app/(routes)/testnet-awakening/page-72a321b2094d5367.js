(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7727],
  {
    63239: function (t, e, n) {
      Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.t.bind(n, 24537, 23)),
        Promise.resolve().then(n.t.bind(n, 58538, 23)),
        Promise.resolve().then(n.t.bind(n, 59747, 23)),
        Promise.resolve().then(n.t.bind(n, 12183, 23)),
        Promise.resolve().then(n.t.bind(n, 18803, 23)),
        Promise.resolve().then(n.bind(n, 47984)),
        Promise.resolve().then(n.bind(n, 45419)),
        Promise.resolve().then(n.t.bind(n, 14629, 23)),
        Promise.resolve().then(n.bind(n, 21360)),
        Promise.resolve().then(n.bind(n, 87580)),
        Promise.resolve().then(n.bind(n, 84395));
    },
    87138: function (t, e, n) {
      "use strict";
      n.d(e, {
        default: function () {
          return l.a;
        },
      });
      var r = n(231),
        l = n.n(r);
    },
    70499: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return h;
          },
        });
      var r = n(57437),
        l = n(87138),
        i = n(60231),
        s = n.n(i),
        o = n(44839),
        a = n(2265),
        c = n(16609),
        d = n(49582),
        _ = n(78002),
        u = n(16463);
      function h(t) {
        let {
            href: e,
            className: n,
            children: i,
            target: h,
            onClick: f,
            direction: m,
            directionMobile: y = m,
            translateY: g = 0,
            translateX: v = 0,
            duration: w = 0.8,
            rotateX: p = 0,
            rotateY: b = 0,
            ease: x = "back.out",
            opacity: k = 0,
            animate: Z,
            start: N = 80,
            end: j = 60,
            color: E = "primary",
            disabled: P,
            type: Y = "button",
          } = t,
          X = (0, a.useRef)(null),
          L = (0, a.useRef)(null),
          B = (0, _.Z)(),
          { useGSAP: S, activatedGsap: C } = (0, c.Z)(),
          R = (0, u.usePathname)();
        return (
          S(() => {
            if ("/" == R) {
              let t;
              if (
                (X.current && (t = X),
                L.current && (t = L),
                C && Z && t && t.current && (null == B ? void 0 : B.width))
              ) {
                let e, n;
                (null == B ? void 0 : B.width) < 992
                  ? ((v = "right" == y ? -200 : "left" == y ? 200 : v),
                    (g = "top" == y ? 200 : "bottom" == y ? -200 : g))
                  : ((g = "top" == m ? 200 : "bottom" == m ? -200 : g),
                    (v = "right" == m ? -200 : "left" == m ? 200 : v));
                let r = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top ".concat(
                      (null == B ? void 0 : B.width) < 992 ? N - 10 : N,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == B ? void 0 : B.width) < 992 ? j - 15 : j - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (e =
                    (null == B ? void 0 : B.width) > 1440
                      ? v
                      : (null == B ? void 0 : B.width) < 992
                      ? ((null == B ? void 0 : B.width) / 500) * v
                      : ((null == B ? void 0 : B.width) / 1440) * v),
                  (n =
                    (null == B ? void 0 : B.width) > 1440
                      ? g
                      : (null == B ? void 0 : B.width) < 992
                      ? ((null == B ? void 0 : B.width) / 500) * g
                      : ((null == B ? void 0 : B.width) / 1440) * g),
                  r
                    .from(t.current, {
                      translateY: n,
                      translateX: e,
                      rotateX: p,
                      rotateY: b,
                      opacity: k,
                      duration: w,
                      ease: x,
                    })
                    .to(t.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => r.kill()
                );
              }
            }
          }, [C, R]),
          (0, r.jsx)(r.Fragment, {
            children: e
              ? h && "_blank" == h
                ? (0, r.jsxs)(l.default, {
                    ref: L,
                    href: e,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: f,
                    className: (0, o.Z)(s().button, n, s()[E]),
                    children: [i, (0, r.jsx)("span", { className: s().wrap })],
                  })
                : (0, r.jsxs)(l.default, {
                    ref: L,
                    href: e,
                    target: h,
                    rel: "",
                    onClick: f,
                    className: (0, o.Z)(s().button, n, s()[E]),
                    children: [i, (0, r.jsx)("span", { className: s().wrap })],
                  })
              : (0, r.jsxs)("button", {
                  type: Y,
                  disabled: P,
                  ref: X,
                  onClick: f,
                  className: (0, o.Z)(s().button, n, s()[E]),
                  children: [i, (0, r.jsx)("span", { className: s().wrap })],
                }),
          })
        );
      }
    },
    42625: function (t, e, n) {
      "use strict";
      var r = n(57437),
        l = n(44839),
        i = n(58538),
        s = n.n(i);
      let o = (0, n(2265).forwardRef)((t, e) => {
        let { children: n, className: i, size: o, classic: a, ...c } = t;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            ref: e,
            className: (0, l.Z)(
              s().container,
              i,
              o && s()[o],
              a && s().classic
            ),
            ...c,
            children: n,
          }),
        });
      });
      (o.displayName = "Container"), (e.Z = o);
    },
    47984: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var r = n(57437),
        l = n(79124),
        i = n(66648);
      n(2265);
      var s = n(69665),
        o = n.n(s),
        a = n(44839);
      function c(t) {
        let {
            alt: e = "BlockDAG",
            src: n,
            width: s,
            height: c,
            hero: d,
            className: _,
            ...u
          } = t,
          h = (0, l.Z)();
        return (0, r.jsx)(r.Fragment, {
          children:
            d || u.priority
              ? (0, r.jsx)(
                  i.default,
                  {
                    className: (0, a.Z)(o().img, _),
                    src: n,
                    alt: e,
                    width: s || 0,
                    height: c || 0,
                    ...u,
                  },
                  1
                )
              : h
              ? (0, r.jsx)(
                  i.default,
                  {
                    className: (0, a.Z)(o().img, _),
                    src: n,
                    alt: e,
                    width: 0,
                    height: 0,
                    ...u,
                  },
                  2
                )
              : (0, r.jsx)(
                  i.default,
                  {
                    className: (0, a.Z)(o().loadingImg, _),
                    src: "/cube.webp",
                    alt: e,
                    width: 0,
                    height: 0,
                    ...u,
                  },
                  3
                ),
        });
      }
    },
    45419: function (t, e, n) {
      "use strict";
      n.d(e, {
        default: function () {
          return y;
        },
      });
      var r = n(57437),
        l = n(42625),
        i = n(76003),
        s = n.n(i),
        o = n(21360),
        a = n(47984),
        c = n(32913),
        d = n(87580),
        _ = n(70499),
        u = n(13259),
        h = n(16609),
        f = n(53309),
        m = n(44839);
      function y(t) {
        let { color: e } = t,
          { tokenData: n } = (0, h.Z)();
        return (0, r.jsx)(c.Z, {
          className: s().section,
          color: e || "primary",
          children: (0, r.jsxs)(l.Z, {
            className: s().sectionContainer,
            children: [
              (0, r.jsx)("div", {
                children: (0, r.jsx)(a.default, {
                  className: s().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              // (0, r.jsxs)(d.default, {
              //   children: [
              //     "$",
              //     (null == n ? void 0 : n.totalSoldTokensValueUsd)
              //       ? (0, f.HN)(
              //           null == n ? void 0 : n.totalSoldTokensValueUsd
              //         ).replace("M", "")
              //       : "**.**",
              //     " ",
              //     "Million Raised",
              //   ],
              // }),
              (0, r.jsxs)(o.default, {
                className: (0, m.Z)(s().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto engage with the project,",
                  (0, r.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, r.jsxs)("div", {
                className: s().btns,
                children: [
                  (0, r.jsx)(_.default, {
                    href: u.YJ,
                    color: "dark" === e ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, r.jsx)(_.default, {
                    color: "transparent-light",
                    href: u.zA,
                    children: "How To Buy",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    32913: function (t, e, n) {
      "use strict";
      var r = n(57437),
        l = n(44839),
        i = n(14629),
        s = n.n(i);
      let o = (0, n(2265).forwardRef)((t, e) => {
        let { children: n, className: i, color: o = "dark", ...a } = t;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("section", {
            ref: e,
            className: (0, l.Z)(s().section, s()[o], i),
            ...a,
            children: n,
          }),
        });
      });
      (o.displayName = "Section"), (e.Z = o);
    },
    21360: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var r = n(57437),
        l = n(2265),
        i = n(8544),
        s = n.n(i),
        o = n(44839),
        a = n(16609),
        c = n(49582),
        d = n(78002),
        _ = n(16463);
      function u(t) {
        let {
            children: e,
            component: n = "p",
            size: i = "md",
            className: u,
            style: h,
            direction: f,
            directionMobile: m = f,
            translateY: y = 0,
            translateX: g = 0,
            duration: v = 0.8,
            rotateX: w = 0,
            rotateY: p = 0,
            ease: b = "back.out",
            opacity: x = 0,
            animate: k,
            start: Z = 80,
            end: N = 60,
            onClick: j,
          } = t,
          E = (0, l.useRef)(null),
          P = (0, d.Z)(),
          { useGSAP: Y, activatedGsap: X } = (0, a.Z)(),
          L = (0, _.usePathname)();
        return (
          Y(() => {
            if (
              "/" == L &&
              X &&
              k &&
              E.current &&
              (null == P ? void 0 : P.width)
            ) {
              let t, e;
              (null == P ? void 0 : P.width) < 992
                ? ((g = "right" == m ? -200 : "left" == m ? 200 : g),
                  (y = "top" == m ? 200 : "bottom" == m ? -200 : y))
                : ((y = "top" == f ? 200 : "bottom" == f ? -200 : y),
                  (g = "right" == f ? -200 : "left" == f ? 200 : g));
              let n = c.ZP.timeline({
                scrollTrigger: {
                  trigger: E.current,
                  start: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? Z - 10 : Z,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? N - 15 : N - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == P ? void 0 : P.width) > 1440
                    ? g
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * g
                    : ((null == P ? void 0 : P.width) / 1440) * g),
                (e =
                  (null == P ? void 0 : P.width) > 1440
                    ? y
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * y
                    : ((null == P ? void 0 : P.width) / 1440) * y),
                n
                  .from(E.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: w,
                    rotateY: p,
                    opacity: x,
                    duration: v,
                    ease: b,
                  })
                  .to(E.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [X, L]),
          (0, r.jsx)(n, {
            onClick: j,
            ref: E,
            className: (0, o.Z)(s().text, s()[i], u),
            style: h,
            children: e,
          })
        );
      }
    },
    87580: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return h;
          },
        });
      var r = n(57437),
        l = n(2265),
        i = n(15681),
        s = n.n(i),
        o = n(44839),
        a = n(16700),
        c = n(78002),
        d = n(16609),
        _ = n(49582),
        u = n(16463);
      function h(t) {
        let {
            children: e,
            size: n = "md",
            className: i,
            family: h = "secondary",
            component: f = "md" == n ? "h2" : "h6",
            variant: m,
            uppercase: y,
            direction: g,
            directionMobile: v = g,
            translateY: w = 0,
            translateX: p = 0,
            duration: b = 0.8,
            rotateX: x = 0,
            rotateY: k = 0,
            ease: Z = "back.out",
            opacity: N = 0,
            animate: j,
            start: E = 80,
            end: P = 60,
          } = t,
          Y = (0, l.useRef)(null),
          X = (0, c.Z)(),
          { useGSAP: L, activatedGsap: B } = (0, d.Z)(),
          S = (0, u.usePathname)();
        return (
          L(() => {
            if (
              "/" == S &&
              B &&
              j &&
              Y.current &&
              (null == X ? void 0 : X.width)
            ) {
              let t, e;
              (null == X ? void 0 : X.width) < 992
                ? ((p = "right" == v ? -200 : "left" == v ? 200 : p),
                  (w = "top" == v ? 200 : "bottom" == v ? -200 : w))
                : ((w = "top" == g ? 200 : "bottom" == g ? -200 : w),
                  (p = "right" == g ? -200 : "left" == g ? 200 : p));
              let n = _.ZP.timeline({
                scrollTrigger: {
                  trigger: Y.current,
                  start: "top ".concat(
                    (null == X ? void 0 : X.width) < 992 ? E - 10 : E,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == X ? void 0 : X.width) < 992 ? P - 15 : P - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == X ? void 0 : X.width) > 1440
                    ? p
                    : (null == X ? void 0 : X.width) < 992
                    ? ((null == X ? void 0 : X.width) / 500) * p
                    : ((null == X ? void 0 : X.width) / 1440) * p),
                (e =
                  (null == X ? void 0 : X.width) > 1440
                    ? w
                    : (null == X ? void 0 : X.width) < 992
                    ? ((null == X ? void 0 : X.width) / 500) * w
                    : ((null == X ? void 0 : X.width) / 1440) * w),
                n
                  .from(Y.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: x,
                    rotateY: k,
                    opacity: N,
                    duration: b,
                    ease: Z,
                  })
                  .to(Y.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [B, S]),
          (0, r.jsx)(f, {
            ref: Y,
            className: (0, o.Z)(
              s().title,
              s()[m || f],
              "secondary" == h ? a.BD : a.T$,
              s()[n],
              i,
              y ? "uppercase" : ""
            ),
            children: e,
          })
        );
      }
    },
    84395: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var r = n(57437),
        l = n(2265),
        i = n(15681),
        s = n.n(i),
        o = n(44839),
        a = n(78002),
        c = n(16609),
        d = n(49582),
        _ = n(16463);
      function u(t) {
        let {
            children: e,
            component: n = "h5",
            className: i,
            color: u = "primary",
            direction: h,
            directionMobile: f = h,
            translateY: m = 0,
            translateX: y = 0,
            duration: g = 0.8,
            rotateX: v = 0,
            rotateY: w = 0,
            ease: p = "back.out",
            opacity: b = 0,
            animate: x,
            start: k = 80,
            end: Z = 60,
          } = t,
          N = (0, l.useRef)(null),
          j = (0, a.Z)(),
          { useGSAP: E, activatedGsap: P } = (0, c.Z)(),
          Y = (0, _.usePathname)();
        return (
          E(() => {
            if (
              "/" == Y &&
              P &&
              x &&
              N.current &&
              (null == j ? void 0 : j.width)
            ) {
              let t, e;
              (null == j ? void 0 : j.width) < 992
                ? ((y = "right" == f ? -200 : "left" == f ? 200 : y),
                  (m = "top" == f ? 200 : "bottom" == f ? -200 : m))
                : ((m = "top" == h ? 200 : "bottom" == h ? -200 : m),
                  (y = "right" == h ? -200 : "left" == h ? 200 : y));
              let n = d.ZP.timeline({
                scrollTrigger: {
                  trigger: N.current,
                  start: "top ".concat(
                    (null == j ? void 0 : j.width) < 992 ? k - 10 : k,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == j ? void 0 : j.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == j ? void 0 : j.width) > 1440
                    ? y
                    : (null == j ? void 0 : j.width) < 992
                    ? ((null == j ? void 0 : j.width) / 500) * y
                    : ((null == j ? void 0 : j.width) / 1440) * y),
                (e =
                  (null == j ? void 0 : j.width) > 1440
                    ? m
                    : (null == j ? void 0 : j.width) < 992
                    ? ((null == j ? void 0 : j.width) / 500) * m
                    : ((null == j ? void 0 : j.width) / 1440) * m),
                n
                  .from(N.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: v,
                    rotateY: w,
                    opacity: b,
                    duration: g,
                    ease: p,
                  })
                  .to(N.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [P, Y]),
          (0, r.jsx)(n, {
            ref: N,
            className: (0, o.Z)(s().subtitle, s()[u], i),
            children: e,
          })
        );
      }
    },
    16700: function (t, e, n) {
      "use strict";
      n.d(e, {
        BD: function () {
          return d;
        },
        T$: function () {
          return c;
        },
      });
      var r = n(37983),
        l = n.n(r),
        i = n(68941),
        s = n.n(i),
        o = n(68425),
        a = n.n(o);
      let c = l().className,
        d = s().className;
      a().className;
    },
    79124: function (t, e, n) {
      "use strict";
      var r = n(2265),
        l = n(44630);
      e.Z = () => {
        let [t, e] = (0, r.useState)(!1),
          n = (0, l.Z)(),
          i = () => {
            e(!0);
          };
        return (
          (0, r.useEffect)(() => {
            n > 1 && e(!0);
          }, [n]),
          (0, r.useEffect)(
            () => (
              window.addEventListener("mousemove", i),
              window.addEventListener("click", i),
              window.addEventListener("touchmove", i),
              window.addEventListener("touchstart", i),
              window.addEventListener("touchend", i),
              () => {
                window.removeEventListener("mousemove", i),
                  window.removeEventListener("click", i),
                  window.removeEventListener("touchmove", i),
                  window.removeEventListener("touchstart", i),
                  window.removeEventListener("touchend", i);
              }
            ),
            []
          ),
          t
        );
      };
    },
    44630: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var r = n(2265);
      function l() {
        let [t, e] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            {
              let t = () => {
                e(window.scrollY);
              };
              return (
                window.addEventListener("scroll", t),
                () => {
                  window.removeEventListener("scroll", t);
                }
              );
            }
          }, []),
          t
        );
      }
    },
    53309: function (t, e, n) {
      "use strict";
      n.d(e, {
        HN: function () {
          return c;
        },
      });
      let r = (t, e) => {
          let n = (t = t.toString()).split(".");
          if (n.length < 2) return t;
          let r = n[0],
            l = n[1];
          if (l.length <= e) return "";
          let i = l.match(/0*$/);
          if (!i) return "";
          let s = i[0],
            o = l.substring(0, i.index);
          return (
            (s = s.substring(0, e - (l.length - s.length))),
            "".concat(r, ".").concat(o).concat(s)
          );
        },
        l = (t, e, n) => {
          let l = (t = Math.floor(1e5 * t + 0.5) / 1e5).toString(),
            i = 0;
          if ((l.includes(".") && (i = l.split(".")[1].length), i < e)) {
            0 === i && (l += ".");
            for (var s = i; s < e; s++) l += "0";
          }
          if (i > 0) {
            let t = l.split("."),
              i = t[0],
              s = t[1],
              o = (s.match(/[1-9][0-9]*/) || [""])[0],
              a = o.length,
              c = (s.match(/0*/) || [""])[0],
              d = c + o;
            "0" !== i && d.length > n
              ? ((d = d.substring(0, n)),
                (l = "".concat(i, ".").concat(r(d, e))))
              : a > n &&
                ((o = o.substring(0, n)),
                (l = "".concat(i, ".").concat(c).concat(r(o, e))));
          }
          return l;
        },
        i = (t) => {
          let e = t.toString().split(".");
          return (
            (e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), e.join(".")
          );
        },
        s = (t, e, n) => i(l(t, e, n)),
        o = (t, e) => (Math.floor(t * 10 ** e) / 10 ** e).toString(),
        a = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 },
        c = (t, e, n, r) => {
          if (isNaN(t) || void 0 === t) return "Calculating...";
          if (t < e) return s(t, n, r);
          let l = (t = Math.floor(t)),
            i = "";
          return (
            Object.entries(a).forEach((e) => {
              let [n, r] = e;
              t / r < 1e3 && t / r >= 1 && ((i = n), (l = t / r));
            }),
            "".concat(o(l, 2)).concat(i)
          );
        };
    },
    24537: function (t) {
      t.exports = {
        container: "style_container__ewOE6",
        content: "style_content__P7WeL",
        texts: "style_texts__3tFZ5",
        title: "style_title__fO9DD",
      };
    },
    12183: function (t) {
      t.exports = {
        section: "style_section__MMkAi",
        content: "style_content___Z_U5",
        grid: "style_grid__tLnHb",
        item: "style_item__H8bVZ",
        icon: "style_icon__rZD2i",
        texts: "style_texts__lEYfV",
        title: "style_title__gk5_R",
        desc: "style_desc__VNCfR",
        bottomDesc: "style_bottomDesc__1I0wc",
      };
    },
    60231: function (t) {
      t.exports = {
        button: "style_button__C9H72",
        wrap: "style_wrap__yFGLp",
        hover: "style_hover__dNFsO",
        primary: "style_primary__FoPQF",
        light: "style_light__geNjY",
        dark: "style_dark__Ov6B6",
        "transparent-dark": "style_transparent-dark__hThHh",
        "transparent-light": "style_transparent-light__aG3s9",
        "transparent-primary": "style_transparent-primary__q5o8s",
      };
    },
    58538: function (t) {
      t.exports = {
        container: "style_container__O7qie",
        lg: "style_lg__uab1X",
        sm: "style_sm__gJ0_G",
        classic: "style_classic___AOOd",
      };
    },
    18803: function (t) {
      t.exports = {
        heading: "style_heading__7QWv_",
        subtitle: "style_subtitle__LLHN9",
        title: "style_title__FMEQZ",
        bigdesc: "style_bigdesc__5rpkX",
        max: "style_max__0T80P",
        center: "style_center__F8CrW",
        desc: "style_desc__YAo5D",
        left: "style_left__W8sqB",
        right: "style_right__mFqM7",
        "sm-center": "style_sm-center__RGnjf",
        "sm-left": "style_sm-left__ESlVy",
        "sm-right": "style_sm-right__qY1rC",
        largedesc: "style_largedesc__IB79u",
        dark: "style_dark__dEXck",
        light: "style_light__9MD59",
        primary: "style_primary__V_I_D",
      };
    },
    59747: function (t) {
      t.exports = {
        breadcrumbSection: "style_breadcrumbSection___gLAq",
        hero: "style_hero__UpYQP",
        container: "style_container__uiBlW",
        content: "style_content__fcl60",
        texts: "style_texts__ek20Z",
        title: "style_title__K_zoE",
        bigdesc: "style_bigdesc__J_ZOY",
        desc: "style_desc__701gB",
        btns: "style_btns__HG0fs",
        imgWrapper: "style_imgWrapper__2Ez5g",
      };
    },
    69665: function (t) {
      t.exports = {
        loadingImg: "style_loadingImg__SX0hM",
        img: "style_img__foiEq",
      };
    },
    76003: function (t) {
      t.exports = {
        section: "style_section__K46ck",
        sectionContainer: "style_sectionContainer__oErws",
        desc: "style_desc___bTux",
        btns: "style_btns__eS32b",
        cube: "style_cube__p2p8S",
      };
    },
    14629: function (t) {
      t.exports = {
        section: "style_section__09_zn",
        dark: "style_dark__R3RMO",
        light: "style_light__xXq5a",
        white: "style_white__ZsX2_",
        primary: "style_primary__zErJA",
      };
    },
    8544: function (t) {
      t.exports = {
        text: "style_text__Z44aT",
        xs: "style_xs__fVs46",
        sm: "style_sm__RimS5",
        md: "style_md__ZQhe4",
        lg: "style_lg__AdDq0",
        xl: "style_xl__HaD9x",
      };
    },
    15681: function (t) {
      t.exports = {
        title: "style_title__VJGg6",
        xs: "style_xs__YyI9I",
        sm: "style_sm__fI_bB",
        md: "style_md__tEuBB",
        lg: "style_lg___IlF9",
        xl: "style_xl__IttXv",
        subtitle: "style_subtitle__b3_RB",
        primary: "style_primary__168ud",
        dark: "style_dark__kOJyV",
        light: "style_light__4bx5s",
      };
    },
  },
  function (t) {
    t.O(
      0,
      [7639, 3752, 6835, 5575, 6624, 922, 835, 7429, 6609, 2971, 7023, 1744],
      function () {
        return t((t.s = 63239));
      }
    ),
      (_N_E = t.O());
  },
]);
