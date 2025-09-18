(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1967],
  {
    87138: function (t, e, l) {
      "use strict";
      l.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = l(231),
        r = l.n(n);
    },
    70499: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return _;
          },
        });
      var n = l(57437),
        r = l(87138),
        s = l(60231),
        i = l.n(s),
        o = l(44839),
        c = l(2265),
        a = l(16609),
        u = l(49582),
        d = l(78002),
        h = l(16463);
      function _(t) {
        let {
            href: e,
            className: l,
            children: s,
            target: _,
            onClick: f,
            direction: m,
            directionMobile: v = m,
            translateY: g = 0,
            translateX: x = 0,
            duration: y = 0.8,
            rotateX: w = 0,
            rotateY: p = 0,
            ease: b = "back.out",
            opacity: j = 0,
            animate: N,
            start: Z = 80,
            end: k = 60,
            color: D = "primary",
            disabled: E,
            type: L = "button",
          } = t,
          C = (0, c.useRef)(null),
          F = (0, c.useRef)(null),
          X = (0, d.Z)(),
          { useGSAP: B, activatedGsap: T } = (0, a.Z)(),
          Y = (0, h.usePathname)();
        return (
          B(() => {
            if ("/" == Y) {
              let t;
              if (
                (C.current && (t = C),
                F.current && (t = F),
                T && N && t && t.current && (null == X ? void 0 : X.width))
              ) {
                let e, l;
                (null == X ? void 0 : X.width) < 992
                  ? ((x = "right" == v ? -200 : "left" == v ? 200 : x),
                    (g = "top" == v ? 200 : "bottom" == v ? -200 : g))
                  : ((g = "top" == m ? 200 : "bottom" == m ? -200 : g),
                    (x = "right" == m ? -200 : "left" == m ? 200 : x));
                let n = u.ZP.timeline({
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top ".concat(
                      (null == X ? void 0 : X.width) < 992 ? Z - 10 : Z,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == X ? void 0 : X.width) < 992 ? k - 15 : k - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (e =
                    (null == X ? void 0 : X.width) > 1440
                      ? x
                      : (null == X ? void 0 : X.width) < 992
                      ? ((null == X ? void 0 : X.width) / 500) * x
                      : ((null == X ? void 0 : X.width) / 1440) * x),
                  (l =
                    (null == X ? void 0 : X.width) > 1440
                      ? g
                      : (null == X ? void 0 : X.width) < 992
                      ? ((null == X ? void 0 : X.width) / 500) * g
                      : ((null == X ? void 0 : X.width) / 1440) * g),
                  n
                    .from(t.current, {
                      translateY: l,
                      translateX: e,
                      rotateX: w,
                      rotateY: p,
                      opacity: j,
                      duration: y,
                      ease: b,
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
          }, [T, Y]),
          (0, n.jsx)(n.Fragment, {
            children: e
              ? _ && "_blank" == _
                ? (0, n.jsxs)(r.default, {
                    ref: F,
                    href: e,
                    target: _,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: f,
                    className: (0, o.Z)(i().button, l, i()[D]),
                    children: [s, (0, n.jsx)("span", { className: i().wrap })],
                  })
                : (0, n.jsxs)(r.default, {
                    ref: F,
                    href: e,
                    target: _,
                    rel: "",
                    onClick: f,
                    className: (0, o.Z)(i().button, l, i()[D]),
                    children: [s, (0, n.jsx)("span", { className: i().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: L,
                  disabled: E,
                  ref: C,
                  onClick: f,
                  className: (0, o.Z)(i().button, l, i()[D]),
                  children: [s, (0, n.jsx)("span", { className: i().wrap })],
                }),
          })
        );
      }
    },
    42625: function (t, e, l) {
      "use strict";
      var n = l(57437),
        r = l(44839),
        s = l(58538),
        i = l.n(s);
      let o = (0, l(2265).forwardRef)((t, e) => {
        let { children: l, className: s, size: o, classic: c, ...a } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: e,
            className: (0, r.Z)(
              i().container,
              s,
              o && i()[o],
              c && i().classic
            ),
            ...a,
            children: l,
          }),
        });
      });
      (o.displayName = "Container"), (e.Z = o);
    },
    15110: function (t, e, l) {
      "use strict";
      l.d(e, {
        Z: function () {
          return a;
        },
      });
      var n = l(57437),
        r = l(44839),
        s = l(41885),
        i = l.n(s),
        o = l(21360),
        c = l(47984);
      function a(t) {
        let {
          label: e,
          error: l,
          errorDesc: s,
          success: a,
          successDesc: u,
          icon: d,
          iconPosition: h = "right",
          customLabelPosition: _ = "right",
          customLabelTriggerInput: f,
          customLabel: m,
          infoDesc: v,
          light: g,
          className: x,
          ...y
        } = t;
        return (0, n.jsxs)("div", {
          className: (0, r.Z)(
            i().input,
            g && i().light,
            l && i().error,
            a && i().success,
            x
          ),
          children: [
            e &&
              (0, n.jsx)("label", {
                className: i().label,
                htmlFor: null == y ? void 0 : y.id,
                children: e,
              }),
            (0, n.jsxs)("div", {
              className: (0, r.Z)(
                i().controller,
                g && i().light,
                l && i().error,
                a && i().success,
                d && i()[h]
              ),
              children: [
                (0, n.jsx)("input", { ...y }),
                ((d && "left" == h) || (m && "left" == h)) &&
                  (0, n.jsxs)("div", {
                    className: i().left,
                    children: [
                      d &&
                        "left" == h &&
                        (0, n.jsx)(c.default, {
                          className: (0, r.Z)(i().icon),
                          hero: !0,
                          src: d,
                          alt: (null == y ? void 0 : y.name) || "BlockDAG",
                        }),
                      m &&
                        "left" == _ &&
                        (0, n.jsx)("label", {
                          className: (0, r.Z)(i().customLabel),
                          htmlFor: f ? (null == y ? void 0 : y.id) : void 0,
                          children: m,
                        }),
                    ],
                  }),
                ((d && "right" == h) || (m && "right" == h)) &&
                  (0, n.jsxs)("div", {
                    className: i().right,
                    children: [
                      d &&
                        "right" == h &&
                        (0, n.jsx)(c.default, {
                          className: (0, r.Z)(i().icon),
                          hero: !0,
                          src: d,
                          alt: (null == y ? void 0 : y.name) || "BlockDAG",
                        }),
                      m &&
                        "right" == _ &&
                        (0, n.jsx)("label", {
                          className: (0, r.Z)(i().customLabel),
                          htmlFor: f ? (null == y ? void 0 : y.id) : void 0,
                          children: m,
                        }),
                    ],
                  }),
              ],
            }),
            v &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, r.Z)(i().infoDesc, "text-[#3E4D6C] text-left"),
                children: v,
              }),
            l &&
              s &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, r.Z)(i().infoDesc, "text-error-400 text-left"),
                children: s,
              }),
            a &&
              u &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, r.Z)(i().infoDesc, "text-info-400 text-left"),
                children: u,
              }),
          ],
        });
      }
    },
    21352: function (t, e, l) {
      "use strict";
      l.d(e, {
        Z: function () {
          return a;
        },
      });
      var n = l(57437),
        r = l(2265),
        s = l(44839),
        i = l(37847),
        o = l.n(i),
        c = l(21360);
      function a(t) {
        let {
          label: e,
          error: l,
          errorDesc: i,
          success: a,
          successDesc: u,
          icon: d,
          iconPosition: h = "right",
          infoDesc: _,
          light: f,
          values: m,
          ...v
        } = t;
        return (0, n.jsxs)("div", {
          className: (0, s.Z)(
            o().input,
            f && o().light,
            l && o().error,
            a && o().success
          ),
          children: [
            e &&
              (0, n.jsx)("label", {
                className: o().label,
                htmlFor: null == v ? void 0 : v.id,
                children: e,
              }),
            (0, n.jsx)("div", {
              className: (0, s.Z)(
                o().controller,
                f && o().light,
                l && o().error,
                a && o().success,
                d && o()[h]
              ),
              children:
                null == m
                  ? void 0
                  : m.map((t, e) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          className: o().radio,
                          children: [
                            (0, r.createElement)("input", {
                              hidden: !0,
                              id: t,
                              type: "radio",
                              ...v,
                              key: e,
                              value: t,
                            }),
                            (0, n.jsx)("label", {
                              className: o().check,
                              htmlFor: t,
                            }),
                            (0, n.jsx)("label", { htmlFor: t, children: t }),
                          ],
                        },
                        e
                      )
                    ),
            }),
            _ &&
              (0, n.jsx)(c.default, {
                size: "sm",
                className: (0, s.Z)(o().infoDesc, "text-[#3E4D6C] text-left"),
                children: _,
              }),
            l &&
              i &&
              (0, n.jsx)(c.default, {
                size: "sm",
                className: (0, s.Z)(o().infoDesc, "text-error-400 text-left"),
                children: i,
              }),
            a &&
              u &&
              (0, n.jsx)(c.default, {
                size: "sm",
                className: (0, s.Z)(o().infoDesc, "text-info-400 text-left"),
                children: u,
              }),
          ],
        });
      }
    },
    79283: function (t, e, l) {
      "use strict";
      l.d(e, {
        Z: function () {
          return a;
        },
      });
      var n = l(57437),
        r = l(44839),
        s = l(97884),
        i = l.n(s),
        o = l(21360),
        c = l(47984);
      function a(t) {
        let {
          label: e,
          error: l,
          errorDesc: s,
          success: a,
          successDesc: u,
          icon: d,
          iconPosition: h = "right",
          customLabelPosition: _ = "right",
          customLabelTriggerInput: f,
          customLabel: m,
          infoDesc: v,
          light: g,
          ...x
        } = t;
        return (0, n.jsxs)("div", {
          className: (0, r.Z)(
            i().input,
            g && i().light,
            l && i().error,
            a && i().success
          ),
          children: [
            e &&
              (0, n.jsx)("label", {
                className: i().label,
                htmlFor: null == x ? void 0 : x.id,
                children: e,
              }),
            (0, n.jsxs)("div", {
              className: (0, r.Z)(
                i().controller,
                g && i().light,
                l && i().error,
                a && i().success,
                d && i()[h]
              ),
              children: [
                (0, n.jsx)("textarea", { ...x }),
                ((d && "left" == h) || (m && "left" == h)) &&
                  (0, n.jsxs)("div", {
                    className: i().left,
                    children: [
                      d &&
                        "left" == h &&
                        (0, n.jsx)(c.default, {
                          className: (0, r.Z)(i().icon),
                          hero: !0,
                          src: d,
                          alt: (null == x ? void 0 : x.name) || "BlockDAG",
                        }),
                      m &&
                        "left" == _ &&
                        (0, n.jsx)("label", {
                          className: (0, r.Z)(i().customLabel),
                          htmlFor: f ? (null == x ? void 0 : x.id) : void 0,
                          children: m,
                        }),
                    ],
                  }),
                ((d && "right" == h) || (m && "right" == h)) &&
                  (0, n.jsxs)("div", {
                    className: i().right,
                    children: [
                      d &&
                        "right" == h &&
                        (0, n.jsx)(c.default, {
                          className: (0, r.Z)(i().icon),
                          hero: !0,
                          src: d,
                          alt: (null == x ? void 0 : x.name) || "BlockDAG",
                        }),
                      m &&
                        "right" == _ &&
                        (0, n.jsx)("label", {
                          className: (0, r.Z)(i().customLabel),
                          htmlFor: f ? (null == x ? void 0 : x.id) : void 0,
                          children: m,
                        }),
                    ],
                  }),
              ],
            }),
            v &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, r.Z)(i().infoDesc, "text-[#3E4D6C] text-left"),
                children: v,
              }),
            l &&
              s &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, r.Z)(i().infoDesc, "text-error-400 text-left"),
                children: s,
              }),
            a &&
              u &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, r.Z)(i().infoDesc, "text-info-400 text-left"),
                children: u,
              }),
          ],
        });
      }
    },
    47984: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return a;
          },
        });
      var n = l(57437),
        r = l(79124),
        s = l(66648);
      l(2265);
      var i = l(69665),
        o = l.n(i),
        c = l(44839);
      function a(t) {
        let {
            alt: e = "BlockDAG",
            src: l,
            width: i,
            height: a,
            hero: u,
            className: d,
            ...h
          } = t,
          _ = (0, r.Z)();
        return (0, n.jsx)(n.Fragment, {
          children:
            u || h.priority
              ? (0, n.jsx)(
                  s.default,
                  {
                    className: (0, c.Z)(o().img, d),
                    src: l,
                    alt: e,
                    width: i || 0,
                    height: a || 0,
                    ...h,
                  },
                  1
                )
              : _
              ? (0, n.jsx)(
                  s.default,
                  {
                    className: (0, c.Z)(o().img, d),
                    src: l,
                    alt: e,
                    width: 0,
                    height: 0,
                    ...h,
                  },
                  2
                )
              : (0, n.jsx)(
                  s.default,
                  {
                    className: (0, c.Z)(o().loadingImg, d),
                    src: "/cube.webp",
                    alt: e,
                    width: 0,
                    height: 0,
                    ...h,
                  },
                  3
                ),
        });
      }
    },
    45419: function (t, e, l) {
      "use strict";
      l.d(e, {
        default: function () {
          return v;
        },
      });
      var n = l(57437),
        r = l(42625),
        s = l(76003),
        i = l.n(s),
        o = l(21360),
        c = l(47984),
        a = l(32913),
        u = l(87580),
        d = l(70499),
        h = l(13259),
        _ = l(16609),
        f = l(53309),
        m = l(44839);
      function v(t) {
        let { color: e } = t,
          { tokenData: l } = (0, _.Z)();
        return (0, n.jsx)(a.Z, {
          className: i().section,
          color: e || "primary",
          children: (0, n.jsxs)(r.Z, {
            className: i().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(c.default, {
                  className: i().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              // (0, n.jsxs)(u.default, {
              //   children: [
              //     "$",
              //     (null == l ? void 0 : l.totalSoldTokensValueUsd)
              //       ? (0, f.HN)(
              //           null == l ? void 0 : l.totalSoldTokensValueUsd
              //         ).replace("M", "")
              //       : "**.**",
              //     " ",
              //     "Million Raised",
              //   ],
              // }),
              (0, n.jsxs)(o.default, {
                className: (0, m.Z)(i().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto engage with the project,",
                  (0, n.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, n.jsxs)("div", {
                className: i().btns,
                children: [
                  (0, n.jsx)(d.default, {
                    href: h.YJ,
                    color: "dark" === e ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, n.jsx)(d.default, {
                    color: "transparent-light",
                    href: h.zA,
                    children: "How To Buy",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    32913: function (t, e, l) {
      "use strict";
      var n = l(57437),
        r = l(44839),
        s = l(14629),
        i = l.n(s);
      let o = (0, l(2265).forwardRef)((t, e) => {
        let { children: l, className: s, color: o = "dark", ...c } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: e,
            className: (0, r.Z)(i().section, i()[o], s),
            ...c,
            children: l,
          }),
        });
      });
      (o.displayName = "Section"), (e.Z = o);
    },
    21360: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return h;
          },
        });
      var n = l(57437),
        r = l(2265),
        s = l(8544),
        i = l.n(s),
        o = l(44839),
        c = l(16609),
        a = l(49582),
        u = l(78002),
        d = l(16463);
      function h(t) {
        let {
            children: e,
            component: l = "p",
            size: s = "md",
            className: h,
            style: _,
            direction: f,
            directionMobile: m = f,
            translateY: v = 0,
            translateX: g = 0,
            duration: x = 0.8,
            rotateX: y = 0,
            rotateY: w = 0,
            ease: p = "back.out",
            opacity: b = 0,
            animate: j,
            start: N = 80,
            end: Z = 60,
            onClick: k,
          } = t,
          D = (0, r.useRef)(null),
          E = (0, u.Z)(),
          { useGSAP: L, activatedGsap: C } = (0, c.Z)(),
          F = (0, d.usePathname)();
        return (
          L(() => {
            if (
              "/" == F &&
              C &&
              j &&
              D.current &&
              (null == E ? void 0 : E.width)
            ) {
              let t, e;
              (null == E ? void 0 : E.width) < 992
                ? ((g = "right" == m ? -200 : "left" == m ? 200 : g),
                  (v = "top" == m ? 200 : "bottom" == m ? -200 : v))
                : ((v = "top" == f ? 200 : "bottom" == f ? -200 : v),
                  (g = "right" == f ? -200 : "left" == f ? 200 : g));
              let l = a.ZP.timeline({
                scrollTrigger: {
                  trigger: D.current,
                  start: "top ".concat(
                    (null == E ? void 0 : E.width) < 992 ? N - 10 : N,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == E ? void 0 : E.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == E ? void 0 : E.width) > 1440
                    ? g
                    : (null == E ? void 0 : E.width) < 992
                    ? ((null == E ? void 0 : E.width) / 500) * g
                    : ((null == E ? void 0 : E.width) / 1440) * g),
                (e =
                  (null == E ? void 0 : E.width) > 1440
                    ? v
                    : (null == E ? void 0 : E.width) < 992
                    ? ((null == E ? void 0 : E.width) / 500) * v
                    : ((null == E ? void 0 : E.width) / 1440) * v),
                l
                  .from(D.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: y,
                    rotateY: w,
                    opacity: b,
                    duration: x,
                    ease: p,
                  })
                  .to(D.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [C, F]),
          (0, n.jsx)(l, {
            onClick: k,
            ref: D,
            className: (0, o.Z)(i().text, i()[s], h),
            style: _,
            children: e,
          })
        );
      }
    },
    87580: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return _;
          },
        });
      var n = l(57437),
        r = l(2265),
        s = l(15681),
        i = l.n(s),
        o = l(44839),
        c = l(16700),
        a = l(78002),
        u = l(16609),
        d = l(49582),
        h = l(16463);
      function _(t) {
        let {
            children: e,
            size: l = "md",
            className: s,
            family: _ = "secondary",
            component: f = "md" == l ? "h2" : "h6",
            variant: m,
            uppercase: v,
            direction: g,
            directionMobile: x = g,
            translateY: y = 0,
            translateX: w = 0,
            duration: p = 0.8,
            rotateX: b = 0,
            rotateY: j = 0,
            ease: N = "back.out",
            opacity: Z = 0,
            animate: k,
            start: D = 80,
            end: E = 60,
          } = t,
          L = (0, r.useRef)(null),
          C = (0, a.Z)(),
          { useGSAP: F, activatedGsap: X } = (0, u.Z)(),
          B = (0, h.usePathname)();
        return (
          F(() => {
            if (
              "/" == B &&
              X &&
              k &&
              L.current &&
              (null == C ? void 0 : C.width)
            ) {
              let t, e;
              (null == C ? void 0 : C.width) < 992
                ? ((w = "right" == x ? -200 : "left" == x ? 200 : w),
                  (y = "top" == x ? 200 : "bottom" == x ? -200 : y))
                : ((y = "top" == g ? 200 : "bottom" == g ? -200 : y),
                  (w = "right" == g ? -200 : "left" == g ? 200 : w));
              let l = d.ZP.timeline({
                scrollTrigger: {
                  trigger: L.current,
                  start: "top ".concat(
                    (null == C ? void 0 : C.width) < 992 ? D - 10 : D,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == C ? void 0 : C.width) < 992 ? E - 15 : E - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == C ? void 0 : C.width) > 1440
                    ? w
                    : (null == C ? void 0 : C.width) < 992
                    ? ((null == C ? void 0 : C.width) / 500) * w
                    : ((null == C ? void 0 : C.width) / 1440) * w),
                (e =
                  (null == C ? void 0 : C.width) > 1440
                    ? y
                    : (null == C ? void 0 : C.width) < 992
                    ? ((null == C ? void 0 : C.width) / 500) * y
                    : ((null == C ? void 0 : C.width) / 1440) * y),
                l
                  .from(L.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: b,
                    rotateY: j,
                    opacity: Z,
                    duration: p,
                    ease: N,
                  })
                  .to(L.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [X, B]),
          (0, n.jsx)(f, {
            ref: L,
            className: (0, o.Z)(
              i().title,
              i()[m || f],
              "secondary" == _ ? c.BD : c.T$,
              i()[l],
              s,
              v ? "uppercase" : ""
            ),
            children: e,
          })
        );
      }
    },
    84395: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return h;
          },
        });
      var n = l(57437),
        r = l(2265),
        s = l(15681),
        i = l.n(s),
        o = l(44839),
        c = l(78002),
        a = l(16609),
        u = l(49582),
        d = l(16463);
      function h(t) {
        let {
            children: e,
            component: l = "h5",
            className: s,
            color: h = "primary",
            direction: _,
            directionMobile: f = _,
            translateY: m = 0,
            translateX: v = 0,
            duration: g = 0.8,
            rotateX: x = 0,
            rotateY: y = 0,
            ease: w = "back.out",
            opacity: p = 0,
            animate: b,
            start: j = 80,
            end: N = 60,
          } = t,
          Z = (0, r.useRef)(null),
          k = (0, c.Z)(),
          { useGSAP: D, activatedGsap: E } = (0, a.Z)(),
          L = (0, d.usePathname)();
        return (
          D(() => {
            if (
              "/" == L &&
              E &&
              b &&
              Z.current &&
              (null == k ? void 0 : k.width)
            ) {
              let t, e;
              (null == k ? void 0 : k.width) < 992
                ? ((v = "right" == f ? -200 : "left" == f ? 200 : v),
                  (m = "top" == f ? 200 : "bottom" == f ? -200 : m))
                : ((m = "top" == _ ? 200 : "bottom" == _ ? -200 : m),
                  (v = "right" == _ ? -200 : "left" == _ ? 200 : v));
              let l = u.ZP.timeline({
                scrollTrigger: {
                  trigger: Z.current,
                  start: "top ".concat(
                    (null == k ? void 0 : k.width) < 992 ? j - 10 : j,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == k ? void 0 : k.width) < 992 ? N - 15 : N - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == k ? void 0 : k.width) > 1440
                    ? v
                    : (null == k ? void 0 : k.width) < 992
                    ? ((null == k ? void 0 : k.width) / 500) * v
                    : ((null == k ? void 0 : k.width) / 1440) * v),
                (e =
                  (null == k ? void 0 : k.width) > 1440
                    ? m
                    : (null == k ? void 0 : k.width) < 992
                    ? ((null == k ? void 0 : k.width) / 500) * m
                    : ((null == k ? void 0 : k.width) / 1440) * m),
                l
                  .from(Z.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: x,
                    rotateY: y,
                    opacity: p,
                    duration: g,
                    ease: w,
                  })
                  .to(Z.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [E, L]),
          (0, n.jsx)(l, {
            ref: Z,
            className: (0, o.Z)(i().subtitle, i()[h], s),
            children: e,
          })
        );
      }
    },
    93728: function (t, e) {
      "use strict";
      let l = 0,
        n = (t, e, n) => {
          let r = new CustomEvent("add-toast", {
            detail: { id: l++, message: t, status: e, duration: n },
          });
          window.dispatchEvent(r);
        };
      e.Z = {
        success: function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return n(t, "success", e);
        },
        error: function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return n(t, "error", e);
        },
        info: function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return n(t, "info", e);
        },
      };
    },
    16700: function (t, e, l) {
      "use strict";
      l.d(e, {
        BD: function () {
          return u;
        },
        T$: function () {
          return a;
        },
      });
      var n = l(37983),
        r = l.n(n),
        s = l(68941),
        i = l.n(s),
        o = l(68425),
        c = l.n(o);
      let a = r().className,
        u = i().className;
      c().className;
    },
    79124: function (t, e, l) {
      "use strict";
      var n = l(2265),
        r = l(44630);
      e.Z = () => {
        let [t, e] = (0, n.useState)(!1),
          l = (0, r.Z)(),
          s = () => {
            e(!0);
          };
        return (
          (0, n.useEffect)(() => {
            l > 1 && e(!0);
          }, [l]),
          (0, n.useEffect)(
            () => (
              window.addEventListener("mousemove", s),
              window.addEventListener("click", s),
              window.addEventListener("touchmove", s),
              window.addEventListener("touchstart", s),
              window.addEventListener("touchend", s),
              () => {
                window.removeEventListener("mousemove", s),
                  window.removeEventListener("click", s),
                  window.removeEventListener("touchmove", s),
                  window.removeEventListener("touchstart", s),
                  window.removeEventListener("touchend", s);
              }
            ),
            []
          ),
          t
        );
      };
    },
    44630: function (t, e, l) {
      "use strict";
      l.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = l(2265);
      function r() {
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
    53309: function (t, e, l) {
      "use strict";
      l.d(e, {
        HN: function () {
          return a;
        },
      });
      let n = (t, e) => {
          let l = (t = t.toString()).split(".");
          if (l.length < 2) return t;
          let n = l[0],
            r = l[1];
          if (r.length <= e) return "";
          let s = r.match(/0*$/);
          if (!s) return "";
          let i = s[0],
            o = r.substring(0, s.index);
          return (
            (i = i.substring(0, e - (r.length - i.length))),
            "".concat(n, ".").concat(o).concat(i)
          );
        },
        r = (t, e, l) => {
          let r = (t = Math.floor(1e5 * t + 0.5) / 1e5).toString(),
            s = 0;
          if ((r.includes(".") && (s = r.split(".")[1].length), s < e)) {
            0 === s && (r += ".");
            for (var i = s; i < e; i++) r += "0";
          }
          if (s > 0) {
            let t = r.split("."),
              s = t[0],
              i = t[1],
              o = (i.match(/[1-9][0-9]*/) || [""])[0],
              c = o.length,
              a = (i.match(/0*/) || [""])[0],
              u = a + o;
            "0" !== s && u.length > l
              ? ((u = u.substring(0, l)),
                (r = "".concat(s, ".").concat(n(u, e))))
              : c > l &&
                ((o = o.substring(0, l)),
                (r = "".concat(s, ".").concat(a).concat(n(o, e))));
          }
          return r;
        },
        s = (t) => {
          let e = t.toString().split(".");
          return (
            (e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), e.join(".")
          );
        },
        i = (t, e, l) => s(r(t, e, l)),
        o = (t, e) => (Math.floor(t * 10 ** e) / 10 ** e).toString(),
        c = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 },
        a = (t, e, l, n) => {
          if (isNaN(t) || void 0 === t) return "Calculating...";
          if (t < e) return i(t, l, n);
          let r = (t = Math.floor(t)),
            s = "";
          return (
            Object.entries(c).forEach((e) => {
              let [l, n] = e;
              t / n < 1e3 && t / n >= 1 && ((s = l), (r = t / n));
            }),
            "".concat(o(r, 2)).concat(s)
          );
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
    41885: function (t) {
      t.exports = {
        input: "style_input__d5JsO",
        controller: "style_controller__nvybk",
        light: "style_light__z0G2T",
        error: "style_error__PziOt",
        success: "style_success__0Z81G",
        right: "style_right__R6XjJ",
        left: "style_left__ZkaCL",
        icon: "style_icon__6CHXb",
        customLabel: "style_customLabel__FJRk4",
        infoDesc: "style_infoDesc__MIj8g",
      };
    },
    37847: function (t) {
      t.exports = {
        input: "style_input__wVpj_",
        controller: "style_controller__VouSh",
        radio: "style_radio__iB9Wn",
        check: "style_check__9sKm8",
        light: "style_light__L2nP9",
        right: "style_right__r26YN",
        left: "style_left__yembF",
        icon: "style_icon__yWeZv",
        customLabel: "style_customLabel__k5hmk",
        infoDesc: "style_infoDesc__bTQTx",
      };
    },
    97884: function (t) {
      t.exports = {
        input: "style_input__MJkl_",
        controller: "style_controller__vgb6T",
        light: "style_light__4wD52",
        error: "style_error__uTvdm",
        success: "style_success__9fYxn",
        right: "style_right__G9oCS",
        left: "style_left__3M4m4",
        icon: "style_icon__XcpHG",
        customLabel: "style_customLabel__3_CsH",
        infoDesc: "style_infoDesc__C7_75",
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
]);
