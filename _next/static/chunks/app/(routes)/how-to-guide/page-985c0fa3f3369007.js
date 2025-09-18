(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3829],
  {
    41235: function (t, e, r) {
      Promise.resolve().then(r.t.bind(r, 231, 23)),
        Promise.resolve().then(r.bind(r, 54893)),
        Promise.resolve().then(r.t.bind(r, 58538, 23)),
        Promise.resolve().then(r.t.bind(r, 59747, 23)),
        Promise.resolve().then(r.bind(r, 47984)),
        Promise.resolve().then(r.bind(r, 45419)),
        Promise.resolve().then(r.t.bind(r, 14629, 23)),
        Promise.resolve().then(r.bind(r, 21360)),
        Promise.resolve().then(r.bind(r, 87580)),
        Promise.resolve().then(r.bind(r, 84395));
    },
    87138: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return l.a;
        },
      });
      var n = r(231),
        l = r.n(n);
    },
    54893: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return _;
        },
      });
      var n = r(57437),
        l = r(32913),
        i = r(18439),
        s = r.n(i),
        o = r(42625),
        a = r(44839),
        c = r(84395),
        d = r(16700),
        u = r(87580);
      function _(t) {
        let {} = t,
          e = [
            {
              subtitle: "SHIPPING DETAILS",
              title: "Complete Your Shipping Details: A Simple Guide",
              iframe: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("iframe", {
                    className: "d-md",
                    src: "//play.vidyard.com/vwXbAUJx3pbwoidDSrX6HD.html?",
                    frameBorder: "0",
                    allow:
                      "autoplay; fullscreen; picture-in-picture; clipboard-write",
                    title: "BlockDAG - How To Guide",
                  }),
                  (0, n.jsx)("iframe", {
                    className: "d-sm",
                    src: "//play.vidyard.com/uruTGRsfBG8JNv32ifH2vz.html?",
                    frameBorder: "0",
                    allow:
                      "autoplay; fullscreen; picture-in-picture; clipboard-write",
                    title: "BlockDAG - How To Guide",
                  }),
                ],
              }),
              href: "#",
            },
          ];
        return (0, n.jsx)(l.Z, {
          className: s().guides,
          children: (0, n.jsx)(o.Z, {
            classic: !0,
            children: (0, n.jsx)("div", {
              className: s().videos,
              children: e.map((t, e) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: s().item,
                    children: [
                      (0, n.jsx)("div", {
                        className: s().card,
                        children: (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(c.default, { children: t.subtitle }),
                            (0, n.jsx)(u.default, {
                              size: "sm",
                              className: (0, a.Z)(
                                "font-bold text-white",
                                d.BD,
                                s().title
                              ),
                              children: t.title,
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: (0, a.Z)(s().video),
                        children: t.iframe,
                      }),
                    ],
                  },
                  e
                )
              ),
            }),
          }),
        });
      }
    },
    70499: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return h;
          },
        });
      var n = r(57437),
        l = r(87138),
        i = r(60231),
        s = r.n(i),
        o = r(44839),
        a = r(2265),
        c = r(16609),
        d = r(49582),
        u = r(78002),
        _ = r(16463);
      function h(t) {
        let {
            href: e,
            className: r,
            children: i,
            target: h,
            onClick: f,
            direction: m,
            directionMobile: v = m,
            translateY: w = 0,
            translateX: p = 0,
            duration: g = 0.8,
            rotateX: y = 0,
            rotateY: b = 0,
            ease: x = "back.out",
            opacity: N = 0,
            animate: j,
            start: k = 80,
            end: Z = 60,
            color: E = "primary",
            disabled: P,
            type: B = "button",
          } = t,
          S = (0, a.useRef)(null),
          X = (0, a.useRef)(null),
          Y = (0, u.Z)(),
          { useGSAP: T, activatedGsap: G } = (0, c.Z)(),
          L = (0, _.usePathname)();
        return (
          T(() => {
            if ("/" == L) {
              let t;
              if (
                (S.current && (t = S),
                X.current && (t = X),
                G && j && t && t.current && (null == Y ? void 0 : Y.width))
              ) {
                let e, r;
                (null == Y ? void 0 : Y.width) < 992
                  ? ((p = "right" == v ? -200 : "left" == v ? 200 : p),
                    (w = "top" == v ? 200 : "bottom" == v ? -200 : w))
                  : ((w = "top" == m ? 200 : "bottom" == m ? -200 : w),
                    (p = "right" == m ? -200 : "left" == m ? 200 : p));
                let n = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top ".concat(
                      (null == Y ? void 0 : Y.width) < 992 ? k - 10 : k,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == Y ? void 0 : Y.width) < 992 ? Z - 15 : Z - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (e =
                    (null == Y ? void 0 : Y.width) > 1440
                      ? p
                      : (null == Y ? void 0 : Y.width) < 992
                      ? ((null == Y ? void 0 : Y.width) / 500) * p
                      : ((null == Y ? void 0 : Y.width) / 1440) * p),
                  (r =
                    (null == Y ? void 0 : Y.width) > 1440
                      ? w
                      : (null == Y ? void 0 : Y.width) < 992
                      ? ((null == Y ? void 0 : Y.width) / 500) * w
                      : ((null == Y ? void 0 : Y.width) / 1440) * w),
                  n
                    .from(t.current, {
                      translateY: r,
                      translateX: e,
                      rotateX: y,
                      rotateY: b,
                      opacity: N,
                      duration: g,
                      ease: x,
                    })
                    .to(t.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => n.kill()
                );
              }
            }
          }, [G, L]),
          (0, n.jsx)(n.Fragment, {
            children: e
              ? h && "_blank" == h
                ? (0, n.jsxs)(l.default, {
                    ref: X,
                    href: e,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: f,
                    className: (0, o.Z)(s().button, r, s()[E]),
                    children: [i, (0, n.jsx)("span", { className: s().wrap })],
                  })
                : (0, n.jsxs)(l.default, {
                    ref: X,
                    href: e,
                    target: h,
                    rel: "",
                    onClick: f,
                    className: (0, o.Z)(s().button, r, s()[E]),
                    children: [i, (0, n.jsx)("span", { className: s().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: B,
                  disabled: P,
                  ref: S,
                  onClick: f,
                  className: (0, o.Z)(s().button, r, s()[E]),
                  children: [i, (0, n.jsx)("span", { className: s().wrap })],
                }),
          })
        );
      }
    },
    42625: function (t, e, r) {
      "use strict";
      var n = r(57437),
        l = r(44839),
        i = r(58538),
        s = r.n(i);
      let o = (0, r(2265).forwardRef)((t, e) => {
        let { children: r, className: i, size: o, classic: a, ...c } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: e,
            className: (0, l.Z)(
              s().container,
              i,
              o && s()[o],
              a && s().classic
            ),
            ...c,
            children: r,
          }),
        });
      });
      (o.displayName = "Container"), (e.Z = o);
    },
    47984: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return c;
          },
        });
      var n = r(57437),
        l = r(79124),
        i = r(66648);
      r(2265);
      var s = r(69665),
        o = r.n(s),
        a = r(44839);
      function c(t) {
        let {
            alt: e = "BlockDAG",
            src: r,
            width: s,
            height: c,
            hero: d,
            className: u,
            ..._
          } = t,
          h = (0, l.Z)();
        return (0, n.jsx)(n.Fragment, {
          children:
            d || _.priority
              ? (0, n.jsx)(
                  i.default,
                  {
                    className: (0, a.Z)(o().img, u),
                    src: r,
                    alt: e,
                    width: s || 0,
                    height: c || 0,
                    ..._,
                  },
                  1
                )
              : h
              ? (0, n.jsx)(
                  i.default,
                  {
                    className: (0, a.Z)(o().img, u),
                    src: r,
                    alt: e,
                    width: 0,
                    height: 0,
                    ..._,
                  },
                  2
                )
              : (0, n.jsx)(
                  i.default,
                  {
                    className: (0, a.Z)(o().loadingImg, u),
                    src: "/cube.webp",
                    alt: e,
                    width: 0,
                    height: 0,
                    ..._,
                  },
                  3
                ),
        });
      }
    },
    45419: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return v;
        },
      });
      var n = r(57437),
        l = r(42625),
        i = r(76003),
        s = r.n(i),
        o = r(21360),
        a = r(47984),
        c = r(32913),
        d = r(87580),
        u = r(70499),
        _ = r(13259),
        h = r(16609),
        f = r(53309),
        m = r(44839);
      function v(t) {
        let { color: e } = t,
          { tokenData: r } = (0, h.Z)();
        return (0, n.jsx)(c.Z, {
          className: s().section,
          color: e || "primary",
          children: (0, n.jsxs)(l.Z, {
            className: s().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(a.default, {
                  className: s().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              // (0, n.jsxs)(d.default, {
              //   children: [
              //     "$",
              //     (null == r ? void 0 : r.totalSoldTokensValueUsd)
              //       ? (0, f.HN)(
              //           null == r ? void 0 : r.totalSoldTokensValueUsd
              //         ).replace("M", "")
              //       : "**.**",
              //     " ",
              //     "Million Raised",
              //   ],
              // }),
              (0, n.jsxs)(o.default, {
                className: (0, m.Z)(s().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto engage with the project,",
                  (0, n.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, n.jsxs)("div", {
                className: s().btns,
                children: [
                  (0, n.jsx)(u.default, {
                    href: _.YJ,
                    color: "dark" === e ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, n.jsx)(u.default, {
                    color: "transparent-light",
                    href: _.zA,
                    children: "How To Buy",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    32913: function (t, e, r) {
      "use strict";
      var n = r(57437),
        l = r(44839),
        i = r(14629),
        s = r.n(i);
      let o = (0, r(2265).forwardRef)((t, e) => {
        let { children: r, className: i, color: o = "dark", ...a } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: e,
            className: (0, l.Z)(s().section, s()[o], i),
            ...a,
            children: r,
          }),
        });
      });
      (o.displayName = "Section"), (e.Z = o);
    },
    21360: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return _;
          },
        });
      var n = r(57437),
        l = r(2265),
        i = r(8544),
        s = r.n(i),
        o = r(44839),
        a = r(16609),
        c = r(49582),
        d = r(78002),
        u = r(16463);
      function _(t) {
        let {
            children: e,
            component: r = "p",
            size: i = "md",
            className: _,
            style: h,
            direction: f,
            directionMobile: m = f,
            translateY: v = 0,
            translateX: w = 0,
            duration: p = 0.8,
            rotateX: g = 0,
            rotateY: y = 0,
            ease: b = "back.out",
            opacity: x = 0,
            animate: N,
            start: j = 80,
            end: k = 60,
            onClick: Z,
          } = t,
          E = (0, l.useRef)(null),
          P = (0, d.Z)(),
          { useGSAP: B, activatedGsap: S } = (0, a.Z)(),
          X = (0, u.usePathname)();
        return (
          B(() => {
            if (
              "/" == X &&
              S &&
              N &&
              E.current &&
              (null == P ? void 0 : P.width)
            ) {
              let t, e;
              (null == P ? void 0 : P.width) < 992
                ? ((w = "right" == m ? -200 : "left" == m ? 200 : w),
                  (v = "top" == m ? 200 : "bottom" == m ? -200 : v))
                : ((v = "top" == f ? 200 : "bottom" == f ? -200 : v),
                  (w = "right" == f ? -200 : "left" == f ? 200 : w));
              let r = c.ZP.timeline({
                scrollTrigger: {
                  trigger: E.current,
                  start: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? j - 10 : j,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? k - 15 : k - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == P ? void 0 : P.width) > 1440
                    ? w
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * w
                    : ((null == P ? void 0 : P.width) / 1440) * w),
                (e =
                  (null == P ? void 0 : P.width) > 1440
                    ? v
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * v
                    : ((null == P ? void 0 : P.width) / 1440) * v),
                r
                  .from(E.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: g,
                    rotateY: y,
                    opacity: x,
                    duration: p,
                    ease: b,
                  })
                  .to(E.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [S, X]),
          (0, n.jsx)(r, {
            onClick: Z,
            ref: E,
            className: (0, o.Z)(s().text, s()[i], _),
            style: h,
            children: e,
          })
        );
      }
    },
    87580: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return h;
          },
        });
      var n = r(57437),
        l = r(2265),
        i = r(15681),
        s = r.n(i),
        o = r(44839),
        a = r(16700),
        c = r(78002),
        d = r(16609),
        u = r(49582),
        _ = r(16463);
      function h(t) {
        let {
            children: e,
            size: r = "md",
            className: i,
            family: h = "secondary",
            component: f = "md" == r ? "h2" : "h6",
            variant: m,
            uppercase: v,
            direction: w,
            directionMobile: p = w,
            translateY: g = 0,
            translateX: y = 0,
            duration: b = 0.8,
            rotateX: x = 0,
            rotateY: N = 0,
            ease: j = "back.out",
            opacity: k = 0,
            animate: Z,
            start: E = 80,
            end: P = 60,
          } = t,
          B = (0, l.useRef)(null),
          S = (0, c.Z)(),
          { useGSAP: X, activatedGsap: Y } = (0, d.Z)(),
          T = (0, _.usePathname)();
        return (
          X(() => {
            if (
              "/" == T &&
              Y &&
              Z &&
              B.current &&
              (null == S ? void 0 : S.width)
            ) {
              let t, e;
              (null == S ? void 0 : S.width) < 992
                ? ((y = "right" == p ? -200 : "left" == p ? 200 : y),
                  (g = "top" == p ? 200 : "bottom" == p ? -200 : g))
                : ((g = "top" == w ? 200 : "bottom" == w ? -200 : g),
                  (y = "right" == w ? -200 : "left" == w ? 200 : y));
              let r = u.ZP.timeline({
                scrollTrigger: {
                  trigger: B.current,
                  start: "top ".concat(
                    (null == S ? void 0 : S.width) < 992 ? E - 10 : E,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == S ? void 0 : S.width) < 992 ? P - 15 : P - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == S ? void 0 : S.width) > 1440
                    ? y
                    : (null == S ? void 0 : S.width) < 992
                    ? ((null == S ? void 0 : S.width) / 500) * y
                    : ((null == S ? void 0 : S.width) / 1440) * y),
                (e =
                  (null == S ? void 0 : S.width) > 1440
                    ? g
                    : (null == S ? void 0 : S.width) < 992
                    ? ((null == S ? void 0 : S.width) / 500) * g
                    : ((null == S ? void 0 : S.width) / 1440) * g),
                r
                  .from(B.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: x,
                    rotateY: N,
                    opacity: k,
                    duration: b,
                    ease: j,
                  })
                  .to(B.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [Y, T]),
          (0, n.jsx)(f, {
            ref: B,
            className: (0, o.Z)(
              s().title,
              s()[m || f],
              "secondary" == h ? a.BD : a.T$,
              s()[r],
              i,
              v ? "uppercase" : ""
            ),
            children: e,
          })
        );
      }
    },
    84395: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return _;
          },
        });
      var n = r(57437),
        l = r(2265),
        i = r(15681),
        s = r.n(i),
        o = r(44839),
        a = r(78002),
        c = r(16609),
        d = r(49582),
        u = r(16463);
      function _(t) {
        let {
            children: e,
            component: r = "h5",
            className: i,
            color: _ = "primary",
            direction: h,
            directionMobile: f = h,
            translateY: m = 0,
            translateX: v = 0,
            duration: w = 0.8,
            rotateX: p = 0,
            rotateY: g = 0,
            ease: y = "back.out",
            opacity: b = 0,
            animate: x,
            start: N = 80,
            end: j = 60,
          } = t,
          k = (0, l.useRef)(null),
          Z = (0, a.Z)(),
          { useGSAP: E, activatedGsap: P } = (0, c.Z)(),
          B = (0, u.usePathname)();
        return (
          E(() => {
            if (
              "/" == B &&
              P &&
              x &&
              k.current &&
              (null == Z ? void 0 : Z.width)
            ) {
              let t, e;
              (null == Z ? void 0 : Z.width) < 992
                ? ((v = "right" == f ? -200 : "left" == f ? 200 : v),
                  (m = "top" == f ? 200 : "bottom" == f ? -200 : m))
                : ((m = "top" == h ? 200 : "bottom" == h ? -200 : m),
                  (v = "right" == h ? -200 : "left" == h ? 200 : v));
              let r = d.ZP.timeline({
                scrollTrigger: {
                  trigger: k.current,
                  start: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? N - 10 : N,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? j - 15 : j - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? v
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * v
                    : ((null == Z ? void 0 : Z.width) / 1440) * v),
                (e =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? m
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * m
                    : ((null == Z ? void 0 : Z.width) / 1440) * m),
                r
                  .from(k.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: p,
                    rotateY: g,
                    opacity: b,
                    duration: w,
                    ease: y,
                  })
                  .to(k.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [P, B]),
          (0, n.jsx)(r, {
            ref: k,
            className: (0, o.Z)(s().subtitle, s()[_], i),
            children: e,
          })
        );
      }
    },
    16700: function (t, e, r) {
      "use strict";
      r.d(e, {
        BD: function () {
          return d;
        },
        T$: function () {
          return c;
        },
      });
      var n = r(37983),
        l = r.n(n),
        i = r(68941),
        s = r.n(i),
        o = r(68425),
        a = r.n(o);
      let c = l().className,
        d = s().className;
      a().className;
    },
    79124: function (t, e, r) {
      "use strict";
      var n = r(2265),
        l = r(44630);
      e.Z = () => {
        let [t, e] = (0, n.useState)(!1),
          r = (0, l.Z)(),
          i = () => {
            e(!0);
          };
        return (
          (0, n.useEffect)(() => {
            r > 1 && e(!0);
          }, [r]),
          (0, n.useEffect)(
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
    44630: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return l;
        },
      });
      var n = r(2265);
      function l() {
        let [t, e] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
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
    53309: function (t, e, r) {
      "use strict";
      r.d(e, {
        HN: function () {
          return c;
        },
      });
      let n = (t, e) => {
          let r = (t = t.toString()).split(".");
          if (r.length < 2) return t;
          let n = r[0],
            l = r[1];
          if (l.length <= e) return "";
          let i = l.match(/0*$/);
          if (!i) return "";
          let s = i[0],
            o = l.substring(0, i.index);
          return (
            (s = s.substring(0, e - (l.length - s.length))),
            "".concat(n, ".").concat(o).concat(s)
          );
        },
        l = (t, e, r) => {
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
            "0" !== i && d.length > r
              ? ((d = d.substring(0, r)),
                (l = "".concat(i, ".").concat(n(d, e))))
              : a > r &&
                ((o = o.substring(0, r)),
                (l = "".concat(i, ".").concat(c).concat(n(o, e))));
          }
          return l;
        },
        i = (t) => {
          let e = t.toString().split(".");
          return (
            (e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), e.join(".")
          );
        },
        s = (t, e, r) => i(l(t, e, r)),
        o = (t, e) => (Math.floor(t * 10 ** e) / 10 ** e).toString(),
        a = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 },
        c = (t, e, r, n) => {
          if (isNaN(t) || void 0 === t) return "Calculating...";
          if (t < e) return s(t, r, n);
          let l = (t = Math.floor(t)),
            i = "";
          return (
            Object.entries(a).forEach((e) => {
              let [r, n] = e;
              t / n < 1e3 && t / n >= 1 && ((i = r), (l = t / n));
            }),
            "".concat(o(l, 2)).concat(i)
          );
        };
    },
    18439: function (t) {
      t.exports = {
        guides: "style_guides__cfrW2",
        videos: "style_videos__HQNmQ",
        item: "style_item__Ph0I3",
        title: "style_title__Ssgf8",
        card: "style_card__2v5N5",
        video: "style_video__EDfer",
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
      [3752, 4194, 6624, 6835, 5575, 922, 835, 7429, 6609, 2971, 7023, 1744],
      function () {
        return t((t.s = 41235));
      }
    ),
      (_N_E = t.O());
  },
]);
