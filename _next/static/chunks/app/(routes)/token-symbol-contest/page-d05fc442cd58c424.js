(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [0],
  {
    68679: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 12525)),
        Promise.resolve().then(l.t.bind(l, 49470, 23)),
        Promise.resolve().then(l.bind(l, 47984)),
        Promise.resolve().then(l.bind(l, 45419)),
        Promise.resolve().then(l.t.bind(l, 14629, 23)),
        Promise.resolve().then(l.t.bind(l, 58538, 23)),
        Promise.resolve().then(l.bind(l, 21360)),
        Promise.resolve().then(l.bind(l, 87580)),
        Promise.resolve().then(l.bind(l, 84395));
    },
    87138: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return s.a;
        },
      });
      var n = l(231),
        s = l.n(n);
    },
    12525: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return j;
        },
      });
      var n = l(57437),
        s = l(42625),
        r = l(94580),
        i = l.n(r),
        o = l(15110),
        a = l(84395),
        c = l(87580),
        d = l(21360),
        u = l(2265),
        _ = l(38472),
        h = l(93728),
        f = l(762),
        m = l(70499),
        v = l(87138),
        p = l(32913),
        y = l(44839),
        g = l(96985),
        x = l.n(g),
        w = l(47984);
      function b(e) {
        let {
            label: t,
            error: l,
            errorDesc: s,
            success: r,
            successDesc: i,
            icon: o,
            customLabel: a,
            infoDesc: c,
            light: _,
            ...h
          } = e,
          [f, m] = (0, u.useState)(null),
          v = h.id || "file-input";
        return (0, n.jsxs)("div", {
          className: (0, y.Z)(
            x().input,
            _ && x().light,
            l && x().error,
            r && x().success
          ),
          children: [
            t &&
              (0, n.jsx)("label", {
                className: x().label,
                htmlFor: v,
                children: t,
              }),
            (0, n.jsx)("div", {
              className: (0, y.Z)(
                x().controller,
                _ && x().light,
                l && x().error,
                r && x().success
              ),
              children: (0, n.jsxs)("label", {
                htmlFor: v,
                className: (0, y.Z)(x().fileWrapper, { [x().hasFile]: !!f }),
                children: [
                  (0, n.jsx)("input", {
                    ...h,
                    id: v,
                    type: "file",
                    hidden: !0,
                    onChange: (e) => {
                      var t;
                      e.target.files &&
                        e.target.files[0] &&
                        m(e.target.files[0].name),
                        null === (t = h.onChange) ||
                          void 0 === t ||
                          t.call(h, e);
                    },
                  }),
                  (0, n.jsxs)("div", {
                    className: x().fileInputContent,
                    children: [
                      (0, n.jsx)(w.default, {
                        className: (0, y.Z)(x().icon),
                        hero: !0,
                        src: o || "/icons/upload.svg",
                        alt: "Upload Icon",
                      }),
                      (0, n.jsx)("span", {
                        children: f || "Choose a file or drag & drop",
                      }),
                      a &&
                        (0, n.jsx)("span", {
                          className: x().fileCustomLabel,
                          children: a,
                        }),
                    ],
                  }),
                ],
              }),
            }),
            c &&
              (0, n.jsx)(d.default, {
                size: "sm",
                className: (0, y.Z)(x().infoDesc, "text-[#3E4D6C] text-left"),
                children: c,
              }),
            l &&
              s &&
              (0, n.jsx)(d.default, {
                size: "sm",
                className: (0, y.Z)(x().infoDesc, "text-error-400 text-left"),
                children: s,
              }),
            r &&
              i &&
              (0, n.jsx)(d.default, {
                size: "sm",
                className: (0, y.Z)(x().infoDesc, "text-info-400 text-left"),
                children: i,
              }),
          ],
        });
      }
      function j(e) {
        var t, l, r, y;
        let {} = e,
          [g, x] = (0, u.useState)(),
          [w, j] = (0, u.useState)(!1),
          [N, Z] = (0, u.useState)([]),
          k = (0, u.useRef)(null),
          C = (e) => {
            let { name: t, value: l, files: n } = e.target;
            if ("file" === t && (null == n ? void 0 : n[0])) {
              let e = n[0];
              if (!["application/pdf", "image/svg+xml"].includes(e.type)) {
                Z((e) => Array.from(new Set([...e, "file"]))),
                  h.Z.error("Only .svg and .pdf files are allowed.");
                return;
              }
              x((l) => ({ ...l, [t]: e })), Z((e) => e.filter((e) => e !== t));
              return;
            }
            x((e) => ({ ...e, [t]: l || "" })),
              Z((e) => e.filter((e) => e !== t));
          },
          E = async (e) => {
            e.preventDefault(), j(!0), Z([]);
            let t = ["full_name", "email", "wallet_address", "file"].filter(
              (e) => !(null == g ? void 0 : g[e])
            );
            if (t.length > 0) {
              Z(t), h.Z.error("Please fill in all required fields."), j(!1);
              return;
            }
            if (!f.HN.test(g.email)) {
              Z((e) => [...e, "email"]),
                h.Z.error("Email is not a valid format."),
                j(!1);
              return;
            }
            let l = new FormData();
            l.append("full_name", g.full_name),
              l.append("email", g.email),
              l.append("wallet_address", g.wallet_address),
              l.append("file", g.file),
              console.log(g.full_name),
              console.log(g.email),
              console.log(g.wallet_address),
              console.log(g.file);
            try {
              let e = await _.Z.post(
                "https://bdag-lead-cltgh.ondigitalocean.app/api/symbol-leads",
                l,
                { headers: { "Content-Type": "multipart/form-data" } }
              );
              200 === e.status || 201 === e.status
                ? (h.Z.success(
                    "Your details have been submitted and you will receive correspondence shortly"
                  ),
                  setTimeout(() => {
                    var e;
                    j(!1),
                      x({}),
                      null === (e = k.current) || void 0 === e || e.reset();
                  }, 3e3))
                : (h.Z.error("Something went wrong."), j(!1));
            } catch (e) {
              var n, s;
              h.Z.error(
                (null == e
                  ? void 0
                  : null === (s = e.response) || void 0 === s
                  ? void 0
                  : null === (n = s.data) || void 0 === n
                  ? void 0
                  : n.error) || "Upload failed!"
              ),
                j(!1);
            }
          };
        return (0, n.jsx)(p.Z, {
          color: "white",
          id: "tokensymbolcontestform",
          className: i().keynoteform,
          children: (0, n.jsx)(s.Z, {
            children: (0, n.jsxs)("div", {
              className: i().content,
              children: [
                (0, n.jsxs)("div", {
                  className: i().titles,
                  children: [
                    (0, n.jsx)(a.default, {
                      className: i().subtitle,
                      children: "UPLOAD YOUR DESIGN",
                    }),
                    (0, n.jsx)(c.default, {
                      className: i().title,
                      children: "Ready To Leave Your Mark On The Blockchain?",
                    }),
                    (0, n.jsx)(c.default, {
                      size: "sm",
                      family: "primary",
                      className: i().title2,
                      children: "The countdown begins NOW!",
                    }),
                    (0, n.jsx)(d.default, {
                      size: "lg",
                      className: i().paragraph,
                      children:
                        "Your design could symbolize speed, security, and decentralization-the core values of BlockDAG-and it could be seen across our website, wallets, exchanges, and beyond!",
                    }),
                  ],
                }),
                (0, n.jsxs)("form", {
                  ref: k,
                  onSubmit: E,
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(c.default, {
                          size: "sm",
                          family: "primary",
                          className: i().formTitle,
                          children: "Provide your details",
                        }),
                        (0, n.jsx)(o.Z, {
                          light: !0,
                          error:
                            null == N
                              ? void 0
                              : null === (t = N.includes) || void 0 === t
                              ? void 0
                              : t.call(N, "full_name"),
                          onChange: C,
                          value: (null == g ? void 0 : g.full_name) || "",
                          name: "full_name",
                          placeholder: "Full Name (Required)",
                        }),
                        (0, n.jsx)(o.Z, {
                          light: !0,
                          error:
                            null == N
                              ? void 0
                              : null === (l = N.includes) || void 0 === l
                              ? void 0
                              : l.call(N, "email"),
                          onChange: C,
                          value: (null == g ? void 0 : g.email) || "",
                          name: "email",
                          type: "email",
                          inputMode: "email",
                          placeholder: "Email Address\xa0(Required)",
                        }),
                        (0, n.jsx)(o.Z, {
                          light: !0,
                          error:
                            null == N
                              ? void 0
                              : null === (r = N.includes) || void 0 === r
                              ? void 0
                              : r.call(N, "wallet_address"),
                          onChange: C,
                          value: (null == g ? void 0 : g.wallet_address) || "",
                          name: "wallet_address",
                          type: "text",
                          inputMode: "text",
                          placeholder: "ERC-20 wallet address",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(c.default, {
                          size: "sm",
                          family: "primary",
                          className: i().formTitle,
                          children: "Upload your file",
                        }),
                        (0, n.jsx)(b, {
                          id: "file",
                          light: !0,
                          error:
                            null == N
                              ? void 0
                              : null === (y = N.includes) || void 0 === y
                              ? void 0
                              : y.call(N, "file"),
                          onChange: C,
                          accept: ".svg,.pdf",
                          name: "file",
                          type: "file",
                          inputMode: "text",
                          label: "PDF or SVG formats",
                          icon: "/icons/file-cloud.svg",
                          className: "flex !items-center !justify-center",
                          infoDesc:
                            "The file upload size limit is 1MB. Please upload only in .pdf and .svg formats.",
                        }),
                      ],
                    }),
                    (0, n.jsx)(m.default, {
                      type: "submit",
                      disabled: w,
                      children: "Submit",
                    }),
                    (0, n.jsxs)(d.default, {
                      children: [
                        "We value your privacy.",
                        " ",
                        (0, n.jsx)(v.default, {
                          className: i().learnMore,
                          target: "_blank",
                          href: "/privacy",
                          children: "Learn\xa0more.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    70499: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return h;
          },
        });
      var n = l(57437),
        s = l(87138),
        r = l(60231),
        i = l.n(r),
        o = l(44839),
        a = l(2265),
        c = l(16609),
        d = l(49582),
        u = l(78002),
        _ = l(16463);
      function h(e) {
        let {
            href: t,
            className: l,
            children: r,
            target: h,
            onClick: f,
            direction: m,
            directionMobile: v = m,
            translateY: p = 0,
            translateX: y = 0,
            duration: g = 0.8,
            rotateX: x = 0,
            rotateY: w = 0,
            ease: b = "back.out",
            opacity: j = 0,
            animate: N,
            start: Z = 80,
            end: k = 60,
            color: C = "primary",
            disabled: E,
            type: L = "button",
          } = e,
          S = (0, a.useRef)(null),
          D = (0, a.useRef)(null),
          P = (0, u.Z)(),
          { useGSAP: T, activatedGsap: X } = (0, c.Z)(),
          F = (0, _.usePathname)();
        return (
          T(() => {
            if ("/" == F) {
              let e;
              if (
                (S.current && (e = S),
                D.current && (e = D),
                X && N && e && e.current && (null == P ? void 0 : P.width))
              ) {
                let t, l;
                (null == P ? void 0 : P.width) < 992
                  ? ((y = "right" == v ? -200 : "left" == v ? 200 : y),
                    (p = "top" == v ? 200 : "bottom" == v ? -200 : p))
                  : ((p = "top" == m ? 200 : "bottom" == m ? -200 : p),
                    (y = "right" == m ? -200 : "left" == m ? 200 : y));
                let n = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == P ? void 0 : P.width) < 992 ? Z - 10 : Z,
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
                      ? y
                      : (null == P ? void 0 : P.width) < 992
                      ? ((null == P ? void 0 : P.width) / 500) * y
                      : ((null == P ? void 0 : P.width) / 1440) * y),
                  (l =
                    (null == P ? void 0 : P.width) > 1440
                      ? p
                      : (null == P ? void 0 : P.width) < 992
                      ? ((null == P ? void 0 : P.width) / 500) * p
                      : ((null == P ? void 0 : P.width) / 1440) * p),
                  n
                    .from(e.current, {
                      translateY: l,
                      translateX: t,
                      rotateX: x,
                      rotateY: w,
                      opacity: j,
                      duration: g,
                      ease: b,
                    })
                    .to(e.current, {
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
          }, [X, F]),
          (0, n.jsx)(n.Fragment, {
            children: t
              ? h && "_blank" == h
                ? (0, n.jsxs)(s.default, {
                    ref: D,
                    href: t,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: f,
                    className: (0, o.Z)(i().button, l, i()[C]),
                    children: [r, (0, n.jsx)("span", { className: i().wrap })],
                  })
                : (0, n.jsxs)(s.default, {
                    ref: D,
                    href: t,
                    target: h,
                    rel: "",
                    onClick: f,
                    className: (0, o.Z)(i().button, l, i()[C]),
                    children: [r, (0, n.jsx)("span", { className: i().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: L,
                  disabled: E,
                  ref: S,
                  onClick: f,
                  className: (0, o.Z)(i().button, l, i()[C]),
                  children: [r, (0, n.jsx)("span", { className: i().wrap })],
                }),
          })
        );
      }
    },
    42625: function (e, t, l) {
      "use strict";
      var n = l(57437),
        s = l(44839),
        r = l(58538),
        i = l.n(r);
      let o = (0, l(2265).forwardRef)((e, t) => {
        let { children: l, className: r, size: o, classic: a, ...c } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: t,
            className: (0, s.Z)(
              i().container,
              r,
              o && i()[o],
              a && i().classic
            ),
            ...c,
            children: l,
          }),
        });
      });
      (o.displayName = "Container"), (t.Z = o);
    },
    15110: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = l(57437),
        s = l(44839),
        r = l(41885),
        i = l.n(r),
        o = l(21360),
        a = l(47984);
      function c(e) {
        let {
          label: t,
          error: l,
          errorDesc: r,
          success: c,
          successDesc: d,
          icon: u,
          iconPosition: _ = "right",
          customLabelPosition: h = "right",
          customLabelTriggerInput: f,
          customLabel: m,
          infoDesc: v,
          light: p,
          className: y,
          ...g
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, s.Z)(
            i().input,
            p && i().light,
            l && i().error,
            c && i().success,
            y
          ),
          children: [
            t &&
              (0, n.jsx)("label", {
                className: i().label,
                htmlFor: null == g ? void 0 : g.id,
                children: t,
              }),
            (0, n.jsxs)("div", {
              className: (0, s.Z)(
                i().controller,
                p && i().light,
                l && i().error,
                c && i().success,
                u && i()[_]
              ),
              children: [
                (0, n.jsx)("input", { ...g }),
                ((u && "left" == _) || (m && "left" == _)) &&
                  (0, n.jsxs)("div", {
                    className: i().left,
                    children: [
                      u &&
                        "left" == _ &&
                        (0, n.jsx)(a.default, {
                          className: (0, s.Z)(i().icon),
                          hero: !0,
                          src: u,
                          alt: (null == g ? void 0 : g.name) || "BlockDAG",
                        }),
                      m &&
                        "left" == h &&
                        (0, n.jsx)("label", {
                          className: (0, s.Z)(i().customLabel),
                          htmlFor: f ? (null == g ? void 0 : g.id) : void 0,
                          children: m,
                        }),
                    ],
                  }),
                ((u && "right" == _) || (m && "right" == _)) &&
                  (0, n.jsxs)("div", {
                    className: i().right,
                    children: [
                      u &&
                        "right" == _ &&
                        (0, n.jsx)(a.default, {
                          className: (0, s.Z)(i().icon),
                          hero: !0,
                          src: u,
                          alt: (null == g ? void 0 : g.name) || "BlockDAG",
                        }),
                      m &&
                        "right" == h &&
                        (0, n.jsx)("label", {
                          className: (0, s.Z)(i().customLabel),
                          htmlFor: f ? (null == g ? void 0 : g.id) : void 0,
                          children: m,
                        }),
                    ],
                  }),
              ],
            }),
            v &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, s.Z)(i().infoDesc, "text-[#3E4D6C] text-left"),
                children: v,
              }),
            l &&
              r &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, s.Z)(i().infoDesc, "text-error-400 text-left"),
                children: r,
              }),
            c &&
              d &&
              (0, n.jsx)(o.default, {
                size: "sm",
                className: (0, s.Z)(i().infoDesc, "text-info-400 text-left"),
                children: d,
              }),
          ],
        });
      }
    },
    47984: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var n = l(57437),
        s = l(79124),
        r = l(66648);
      l(2265);
      var i = l(69665),
        o = l.n(i),
        a = l(44839);
      function c(e) {
        let {
            alt: t = "BlockDAG",
            src: l,
            width: i,
            height: c,
            hero: d,
            className: u,
            ..._
          } = e,
          h = (0, s.Z)();
        return (0, n.jsx)(n.Fragment, {
          children:
            d || _.priority
              ? (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(o().img, u),
                    src: l,
                    alt: t,
                    width: i || 0,
                    height: c || 0,
                    ..._,
                  },
                  1
                )
              : h
              ? (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(o().img, u),
                    src: l,
                    alt: t,
                    width: 0,
                    height: 0,
                    ..._,
                  },
                  2
                )
              : (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(o().loadingImg, u),
                    src: "/cube.webp",
                    alt: t,
                    width: 0,
                    height: 0,
                    ..._,
                  },
                  3
                ),
        });
      }
    },
    45419: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return v;
        },
      });
      var n = l(57437),
        s = l(42625),
        r = l(76003),
        i = l.n(r),
        o = l(21360),
        a = l(47984),
        c = l(32913),
        d = l(87580),
        u = l(70499),
        _ = l(13259),
        h = l(16609),
        f = l(53309),
        m = l(44839);
      function v(e) {
        let { color: t } = e,
          { tokenData: l } = (0, h.Z)();
        return (0, n.jsx)(c.Z, {
          className: i().section,
          color: t || "primary",
          children: (0, n.jsxs)(s.Z, {
            className: i().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(a.default, {
                  className: i().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              // (0, n.jsxs)(d.default, {
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
                  (0, n.jsx)(u.default, {
                    href: _.YJ,
                    color: "dark" === t ? "primary" : "dark",
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
    32913: function (e, t, l) {
      "use strict";
      var n = l(57437),
        s = l(44839),
        r = l(14629),
        i = l.n(r);
      let o = (0, l(2265).forwardRef)((e, t) => {
        let { children: l, className: r, color: o = "dark", ...a } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: t,
            className: (0, s.Z)(i().section, i()[o], r),
            ...a,
            children: l,
          }),
        });
      });
      (o.displayName = "Section"), (t.Z = o);
    },
    21360: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return _;
          },
        });
      var n = l(57437),
        s = l(2265),
        r = l(8544),
        i = l.n(r),
        o = l(44839),
        a = l(16609),
        c = l(49582),
        d = l(78002),
        u = l(16463);
      function _(e) {
        let {
            children: t,
            component: l = "p",
            size: r = "md",
            className: _,
            style: h,
            direction: f,
            directionMobile: m = f,
            translateY: v = 0,
            translateX: p = 0,
            duration: y = 0.8,
            rotateX: g = 0,
            rotateY: x = 0,
            ease: w = "back.out",
            opacity: b = 0,
            animate: j,
            start: N = 80,
            end: Z = 60,
            onClick: k,
          } = e,
          C = (0, s.useRef)(null),
          E = (0, d.Z)(),
          { useGSAP: L, activatedGsap: S } = (0, a.Z)(),
          D = (0, u.usePathname)();
        return (
          L(() => {
            if (
              "/" == D &&
              S &&
              j &&
              C.current &&
              (null == E ? void 0 : E.width)
            ) {
              let e, t;
              (null == E ? void 0 : E.width) < 992
                ? ((p = "right" == m ? -200 : "left" == m ? 200 : p),
                  (v = "top" == m ? 200 : "bottom" == m ? -200 : v))
                : ((v = "top" == f ? 200 : "bottom" == f ? -200 : v),
                  (p = "right" == f ? -200 : "left" == f ? 200 : p));
              let l = c.ZP.timeline({
                scrollTrigger: {
                  trigger: C.current,
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
                (e =
                  (null == E ? void 0 : E.width) > 1440
                    ? p
                    : (null == E ? void 0 : E.width) < 992
                    ? ((null == E ? void 0 : E.width) / 500) * p
                    : ((null == E ? void 0 : E.width) / 1440) * p),
                (t =
                  (null == E ? void 0 : E.width) > 1440
                    ? v
                    : (null == E ? void 0 : E.width) < 992
                    ? ((null == E ? void 0 : E.width) / 500) * v
                    : ((null == E ? void 0 : E.width) / 1440) * v),
                l
                  .from(C.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: g,
                    rotateY: x,
                    opacity: b,
                    duration: y,
                    ease: w,
                  })
                  .to(C.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [S, D]),
          (0, n.jsx)(l, {
            onClick: k,
            ref: C,
            className: (0, o.Z)(i().text, i()[r], _),
            style: h,
            children: t,
          })
        );
      }
    },
    87580: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return h;
          },
        });
      var n = l(57437),
        s = l(2265),
        r = l(15681),
        i = l.n(r),
        o = l(44839),
        a = l(16700),
        c = l(78002),
        d = l(16609),
        u = l(49582),
        _ = l(16463);
      function h(e) {
        let {
            children: t,
            size: l = "md",
            className: r,
            family: h = "secondary",
            component: f = "md" == l ? "h2" : "h6",
            variant: m,
            uppercase: v,
            direction: p,
            directionMobile: y = p,
            translateY: g = 0,
            translateX: x = 0,
            duration: w = 0.8,
            rotateX: b = 0,
            rotateY: j = 0,
            ease: N = "back.out",
            opacity: Z = 0,
            animate: k,
            start: C = 80,
            end: E = 60,
          } = e,
          L = (0, s.useRef)(null),
          S = (0, c.Z)(),
          { useGSAP: D, activatedGsap: P } = (0, d.Z)(),
          T = (0, _.usePathname)();
        return (
          D(() => {
            if (
              "/" == T &&
              P &&
              k &&
              L.current &&
              (null == S ? void 0 : S.width)
            ) {
              let e, t;
              (null == S ? void 0 : S.width) < 992
                ? ((x = "right" == y ? -200 : "left" == y ? 200 : x),
                  (g = "top" == y ? 200 : "bottom" == y ? -200 : g))
                : ((g = "top" == p ? 200 : "bottom" == p ? -200 : g),
                  (x = "right" == p ? -200 : "left" == p ? 200 : x));
              let l = u.ZP.timeline({
                scrollTrigger: {
                  trigger: L.current,
                  start: "top ".concat(
                    (null == S ? void 0 : S.width) < 992 ? C - 10 : C,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == S ? void 0 : S.width) < 992 ? E - 15 : E - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == S ? void 0 : S.width) > 1440
                    ? x
                    : (null == S ? void 0 : S.width) < 992
                    ? ((null == S ? void 0 : S.width) / 500) * x
                    : ((null == S ? void 0 : S.width) / 1440) * x),
                (t =
                  (null == S ? void 0 : S.width) > 1440
                    ? g
                    : (null == S ? void 0 : S.width) < 992
                    ? ((null == S ? void 0 : S.width) / 500) * g
                    : ((null == S ? void 0 : S.width) / 1440) * g),
                l
                  .from(L.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: b,
                    rotateY: j,
                    opacity: Z,
                    duration: w,
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
          }, [P, T]),
          (0, n.jsx)(f, {
            ref: L,
            className: (0, o.Z)(
              i().title,
              i()[m || f],
              "secondary" == h ? a.BD : a.T$,
              i()[l],
              r,
              v ? "uppercase" : ""
            ),
            children: t,
          })
        );
      }
    },
    84395: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return _;
          },
        });
      var n = l(57437),
        s = l(2265),
        r = l(15681),
        i = l.n(r),
        o = l(44839),
        a = l(78002),
        c = l(16609),
        d = l(49582),
        u = l(16463);
      function _(e) {
        let {
            children: t,
            component: l = "h5",
            className: r,
            color: _ = "primary",
            direction: h,
            directionMobile: f = h,
            translateY: m = 0,
            translateX: v = 0,
            duration: p = 0.8,
            rotateX: y = 0,
            rotateY: g = 0,
            ease: x = "back.out",
            opacity: w = 0,
            animate: b,
            start: j = 80,
            end: N = 60,
          } = e,
          Z = (0, s.useRef)(null),
          k = (0, a.Z)(),
          { useGSAP: C, activatedGsap: E } = (0, c.Z)(),
          L = (0, u.usePathname)();
        return (
          C(() => {
            if (
              "/" == L &&
              E &&
              b &&
              Z.current &&
              (null == k ? void 0 : k.width)
            ) {
              let e, t;
              (null == k ? void 0 : k.width) < 992
                ? ((v = "right" == f ? -200 : "left" == f ? 200 : v),
                  (m = "top" == f ? 200 : "bottom" == f ? -200 : m))
                : ((m = "top" == h ? 200 : "bottom" == h ? -200 : m),
                  (v = "right" == h ? -200 : "left" == h ? 200 : v));
              let l = d.ZP.timeline({
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
                (e =
                  (null == k ? void 0 : k.width) > 1440
                    ? v
                    : (null == k ? void 0 : k.width) < 992
                    ? ((null == k ? void 0 : k.width) / 500) * v
                    : ((null == k ? void 0 : k.width) / 1440) * v),
                (t =
                  (null == k ? void 0 : k.width) > 1440
                    ? m
                    : (null == k ? void 0 : k.width) < 992
                    ? ((null == k ? void 0 : k.width) / 500) * m
                    : ((null == k ? void 0 : k.width) / 1440) * m),
                l
                  .from(Z.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: y,
                    rotateY: g,
                    opacity: w,
                    duration: p,
                    ease: x,
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
            className: (0, o.Z)(i().subtitle, i()[_], r),
            children: t,
          })
        );
      }
    },
    93728: function (e, t) {
      "use strict";
      let l = 0,
        n = (e, t, n) => {
          let s = new CustomEvent("add-toast", {
            detail: { id: l++, message: e, status: t, duration: n },
          });
          window.dispatchEvent(s);
        };
      t.Z = {
        success: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return n(e, "success", t);
        },
        error: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return n(e, "error", t);
        },
        info: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return n(e, "info", t);
        },
      };
    },
    16700: function (e, t, l) {
      "use strict";
      l.d(t, {
        BD: function () {
          return d;
        },
        T$: function () {
          return c;
        },
      });
      var n = l(37983),
        s = l.n(n),
        r = l(68941),
        i = l.n(r),
        o = l(68425),
        a = l.n(o);
      let c = s().className,
        d = i().className;
      a().className;
    },
    79124: function (e, t, l) {
      "use strict";
      var n = l(2265),
        s = l(44630);
      t.Z = () => {
        let [e, t] = (0, n.useState)(!1),
          l = (0, s.Z)(),
          r = () => {
            t(!0);
          };
        return (
          (0, n.useEffect)(() => {
            l > 1 && t(!0);
          }, [l]),
          (0, n.useEffect)(
            () => (
              window.addEventListener("mousemove", r),
              window.addEventListener("click", r),
              window.addEventListener("touchmove", r),
              window.addEventListener("touchstart", r),
              window.addEventListener("touchend", r),
              () => {
                window.removeEventListener("mousemove", r),
                  window.removeEventListener("click", r),
                  window.removeEventListener("touchmove", r),
                  window.removeEventListener("touchstart", r),
                  window.removeEventListener("touchend", r);
              }
            ),
            []
          ),
          e
        );
      };
    },
    44630: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = l(2265);
      function s() {
        let [e, t] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            {
              let e = () => {
                t(window.scrollY);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }
          }, []),
          e
        );
      }
    },
    53309: function (e, t, l) {
      "use strict";
      l.d(t, {
        HN: function () {
          return c;
        },
      });
      let n = (e, t) => {
          let l = (e = e.toString()).split(".");
          if (l.length < 2) return e;
          let n = l[0],
            s = l[1];
          if (s.length <= t) return "";
          let r = s.match(/0*$/);
          if (!r) return "";
          let i = r[0],
            o = s.substring(0, r.index);
          return (
            (i = i.substring(0, t - (s.length - i.length))),
            "".concat(n, ".").concat(o).concat(i)
          );
        },
        s = (e, t, l) => {
          let s = (e = Math.floor(1e5 * e + 0.5) / 1e5).toString(),
            r = 0;
          if ((s.includes(".") && (r = s.split(".")[1].length), r < t)) {
            0 === r && (s += ".");
            for (var i = r; i < t; i++) s += "0";
          }
          if (r > 0) {
            let e = s.split("."),
              r = e[0],
              i = e[1],
              o = (i.match(/[1-9][0-9]*/) || [""])[0],
              a = o.length,
              c = (i.match(/0*/) || [""])[0],
              d = c + o;
            "0" !== r && d.length > l
              ? ((d = d.substring(0, l)),
                (s = "".concat(r, ".").concat(n(d, t))))
              : a > l &&
                ((o = o.substring(0, l)),
                (s = "".concat(r, ".").concat(c).concat(n(o, t))));
          }
          return s;
        },
        r = (e) => {
          let t = e.toString().split(".");
          return (
            (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), t.join(".")
          );
        },
        i = (e, t, l) => r(s(e, t, l)),
        o = (e, t) => (Math.floor(e * 10 ** t) / 10 ** t).toString(),
        a = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 },
        c = (e, t, l, n) => {
          if (isNaN(e) || void 0 === e) return "Calculating...";
          if (e < t) return i(e, l, n);
          let s = (e = Math.floor(e)),
            r = "";
          return (
            Object.entries(a).forEach((t) => {
              let [l, n] = t;
              e / n < 1e3 && e / n >= 1 && ((r = l), (s = e / n));
            }),
            "".concat(o(s, 2)).concat(r)
          );
        };
    },
    94580: function (e) {
      e.exports = {
        keynoteform: "style_keynoteform__4G15N",
        titles: "style_titles__Tzdhk",
        subtitle: "style_subtitle__H32_x",
        title: "style_title__N1qFW",
        title2: "style_title2__wQ0io",
        paragraph: "style_paragraph__KXkCr",
        formTitle: "style_formTitle__Szkxm",
        learnMore: "style_learnMore__qWPgm",
      };
    },
    49470: function (e) {
      e.exports = {
        hero: "style_hero__x0vXN",
        container: "style_container__Aiket",
        top: "style_top__KgxJa",
        content: "style_content__rOAdS",
        texts: "style_texts__Zfh6V",
        title: "style_title__s44Wn",
        bigdesc: "style_bigdesc__kuRxl",
        desc: "style_desc__YBShW",
        btns: "style_btns__rLsGl",
        imgWrapper: "style_imgWrapper__qgBnX",
        boxes: "style_boxes__VET_T",
        box: "style_box__j7SX7",
        box_title: "style_box_title__oy_ko",
      };
    },
    60231: function (e) {
      e.exports = {
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
    58538: function (e) {
      e.exports = {
        container: "style_container__O7qie",
        lg: "style_lg__uab1X",
        sm: "style_sm__gJ0_G",
        classic: "style_classic___AOOd",
      };
    },
    41885: function (e) {
      e.exports = {
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
    96985: function (e) {
      e.exports = {
        input: "style_input__ntK_y",
        controller: "style_controller__9w3qM",
        light: "style_light__tnLZN",
        error: "style_error__9yhVa",
        success: "style_success__xmfkh",
        icon: "style_icon__2I95x",
        customLabel: "style_customLabel__bNxuf",
        left: "style_left__O_PKK",
        right: "style_right___PKC8",
        infoDesc: "style_infoDesc__sIaoM",
        fileWrapper: "style_fileWrapper__5I7y8",
        hasFile: "style_hasFile__qSxUU",
        fileInputContent: "style_fileInputContent__A33lv",
        fileCustomLabel: "style_fileCustomLabel__72A6A",
      };
    },
    69665: function (e) {
      e.exports = {
        loadingImg: "style_loadingImg__SX0hM",
        img: "style_img__foiEq",
      };
    },
    76003: function (e) {
      e.exports = {
        section: "style_section__K46ck",
        sectionContainer: "style_sectionContainer__oErws",
        desc: "style_desc___bTux",
        btns: "style_btns__eS32b",
        cube: "style_cube__p2p8S",
      };
    },
    14629: function (e) {
      e.exports = {
        section: "style_section__09_zn",
        dark: "style_dark__R3RMO",
        light: "style_light__xXq5a",
        white: "style_white__ZsX2_",
        primary: "style_primary__zErJA",
      };
    },
    8544: function (e) {
      e.exports = {
        text: "style_text__Z44aT",
        xs: "style_xs__fVs46",
        sm: "style_sm__RimS5",
        md: "style_md__ZQhe4",
        lg: "style_lg__AdDq0",
        xl: "style_xl__HaD9x",
      };
    },
    15681: function (e) {
      e.exports = {
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
  function (e) {
    e.O(
      0,
      [3752, 5575, 6835, 6624, 3736, 922, 835, 7429, 6609, 2971, 7023, 1744],
      function () {
        return e((e.s = 68679));
      }
    ),
      (_N_E = e.O());
  },
]);
