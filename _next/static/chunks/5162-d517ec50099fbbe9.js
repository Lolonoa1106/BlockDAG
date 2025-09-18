(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5162],
  {
    90062: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return S;
        },
      });
      var l = s(57437),
        i = s(32913),
        r = s(16631),
        n = s.n(r),
        a = s(42625),
        o = s(87580),
        c = s(21360),
        d = s(87138),
        u = s(5540),
        h = s(53267),
        m = s(2265),
        _ = s(44630),
        f = s(44839),
        g = s(81079),
        p = s(66648);
      let w = [
        {
          title: "telegram",
          img: "/images/connect/telegram.svg",
          slug: "https://t.me",
          width: 32,
          height: 32,
        },
        {
          title: "x",
          img: "/images/connect/x.svg",
          slug: "https://x.com/",
          width: 33,
          height: 30,
        },
        // {
        //   title: "discord",
        //   img: "/images/connect/discord.svg",
        //   slug: "https://discord.gg/Q7BxghMVyu",
        //   width: 142,
        //   height: 36,
        // },
        // {
        //   title: "youtube",
        //   img: "/images/connect/youtube.svg",
        //   slug: "https://www.youtube.com/@BlockDAGofficial",
        //   width: 112,
        //   height: 25,
        // },
        // {
        //   title: "facebook",
        //   img: "/images/connect/facebook.svg",
        //   slug: "https://www.facebook.com/profile.php?id=61557699651392&mibextid=LQQJ4d",
        //   width: 119,
        //   height: 23,
        // },
        // {
        //   title: "instagram",
        //   img: "/images/connect/instagram.svg",
        //   slug: "https://www.instagram.com/blockdagnetwork",
        //   width: 116,
        //   height: 39,
        // },
        // {
        //   title: "medium",
        //   img: "/images/connect/medium.svg",
        //   slug: "https://medium.com/@BlockDAGNetwork1",
        //   width: 162,
        //   height: 32,
        // },
        // {
        //   title: "linkedin",
        //   img: "/images/connect/linkedin.svg",
        //   slug: "https://www.linkedin.com/company/blockdag-network",
        //   width: 100,
        //   height: 25,
        // },
      ];
      var v = s(15110),
        b = s(70499),
        x = s(50573),
        y = s.n(x),
        N = s(93728),
        j = s(762),
        k = s(13259),
        Z = s(38472);
      function T() {
        var e;
        let [t, s] = (0, m.useState)(),
          [i, r] = (0, m.useState)(!1),
          [n, a] = (0, m.useState)([]);
        return (0, l.jsxs)("form", {
          className: y().newsletterTool,
          onSubmit: (e) => {
            if (
              (e.preventDefault(),
              r(!0),
              (null == t ? void 0 : t.email) || a((e) => [...e, "email"]),
              !(null == t ? void 0 : t.email))
            ) {
              N.Z.error("Fill the required fields!"), r(!1);
              return;
            }
            if (!j.HN.test(t.email)) {
              a((e) => [...e, "email"]),
                N.Z.error("Email is not valid format!"),
                r(!1);
              return;
            }
            let l = {
              type: "newsletter",
              source: "website",
              email: null == t ? void 0 : t.email,
            };
            Z.Z.post("".concat(k.XI, "/leads/createLead"), l, k.ob)
              .then((e) => {
                201 == e.status
                  ? (N.Z.success(
                      "Successfully subscribed to the BlockDAG newsletter!"
                    ),
                    setTimeout(() => {
                      r(!1), s({});
                    }, 3e3))
                  : (N.Z.error("Something went wrong!"), r(!1));
              })
              .catch((e) => {
                var t, s, l, i;
                (null === (s = e.response) || void 0 === s
                  ? void 0
                  : null === (t = s.data) || void 0 === t
                  ? void 0
                  : t.message) &&
                  (N.Z.error(
                    null === (i = e.response) || void 0 === i
                      ? void 0
                      : null === (l = i.data) || void 0 === l
                      ? void 0
                      : l.message
                  ),
                  r(!1));
              });
          },
          children: [
            (0, l.jsxs)("div", {
              className: y().subscribe,
              children: [
                (0, l.jsx)(v.Z, {
                  className: y().inputTool,
                  light: !0,
                  error:
                    null == n
                      ? void 0
                      : null === (e = n.includes) || void 0 === e
                      ? void 0
                      : e.call(n, "email"),
                  onChange: (e) => {
                    let { name: t, value: l } = e.target;
                    s((e) => ({ ...e, [t]: l || "" })),
                      a((e) => e.filter((e) => e !== t));
                  },
                  name: "email",
                  type: "email",
                  inputMode: "email",
                  placeholder: "Enter your email address",
                  value: (null == t ? void 0 : t.email) || "",
                }),
                (0, l.jsxs)("div", {
                  className: y().privacyText,
                  children: [
                    "We value your privacy.",
                    " ",
                    (0, l.jsx)(d.default, {
                      className: y().learnMore,
                      target: "_blank",
                      href: "/privacy",
                      children: "Learn more.",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(b.default, {
              className: y().subscribeButton,
              disabled: i,
              type: "submit",
              children: "Subscribe",
            }),
          ],
        });
      }
      function S(e) {
        let { color: t, desc: s, newsletter: r } = e,
          [v, b] = (0, m.useState)(!1),
          x = (0, _.Z)();
        return (
          (0, m.useEffect)(() => {
            x > 2e3 && b(!0);
          }, [x]),
          (0, l.jsx)(i.Z, {
            id: "connect",
            color: t || "white",
            className: n().join,
            children: (0, l.jsxs)(a.Z, {
              className: n().container,
              children: [
                (0, l.jsxs)("div", {
                  className: n().texts,
                  children: [
                    (0, l.jsx)(o.default, {
                      animate: !0,
                      direction: "right",
                      className: n().title,
                      children: "Join The Fastest Growing Community",
                    }),
                    r
                      ? (0, l.jsxs)("div", {
                          className: n().newsletter,
                          children: [
                            (0, l.jsx)(c.default, {
                              animate: !0,
                              direction: "left",
                              className: n().desc,
                              size: "xl",
                              children:
                                s ||
                                "Whether you're an investor, developer, or industry partner, there's a place for you in the BlockDAG ecosystem.",
                            }),
                            r && (0, l.jsx)(T, {}),
                          ],
                        })
                      : (0, l.jsx)(c.default, {
                          animate: !0,
                          direction: "left",
                          className: n().desc,
                          size: "xl",
                          children:
                            s ||
                            "Whether you're an investor, developer, or industry partner, there's a place for you in the BlockDAG ecosystem.",
                        }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: n().connect,
                  children: [
                    (0, l.jsxs)(c.default, {
                      animate: !0,
                      direction: "right",
                      className: n().desc,
                      size: "xl",
                      children: ["Connect with us", " "],
                    }),
                    (0, l.jsx)("div", {
                      className: n().list,
                      children: w.map((e, t) =>
                        (0, l.jsx)(
                          d.default,
                          {
                            className: n().item,
                            href: e.slug,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, l.jsx)(g.default, {
                              direction: "top",
                              start: 90 - 3 * t,
                              end: 70 - 3 * t,
                              children: (0, l.jsx)(p.default, {
                                src: e.img,
                                alt: e.title,
                                width: 0,
                                height: 0,
                              }),
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: n().reviews,
                  children: [
                    (0, l.jsxs)(c.default, {
                      animate: !0,
                      direction: "right",
                      start: 60,
                      end: 40,
                      className: n().desc,
                      size: "xl",
                      children: ["Watch the reviews", " "],
                    }),
                    (0, l.jsx)(h.tq, {
                      id: "updatesSwiper",
                      className: (0, f.Z)(n().swiper),
                      modules: [u.tl, u.s5],
                      breakpoints: {
                        320: { slidesPerView: 1, spaceBetween: 0 },
                        992: { slidesPerView: 2, spaceBetween: 40 },
                      },
                      slidesPerView: "auto",
                      pagination: { clickable: !0 },
                      children: [
                        { embedId: "79bOYopQ7LE" },
                        { embedId: "bZ0jYulJEIU" },
                        { embedId: "dhAxWXXun18" },
                        { embedId: "83Was9f2V6I" },
                      ].map((e, t) =>
                        (0, l.jsx)(
                          h.o5,
                          {
                            children: (0, l.jsx)(g.default, {
                              direction: 0 == t ? "right" : "left",
                              directionMobile: "left",
                              ease: "sine.out",
                              start: 60,
                              end: 40,
                              className: n().videoArea,
                              children:
                                v &&
                                (0, l.jsx)("iframe", {
                                  width: "845",
                                  height: "480",
                                  src: "https://www.youtube.com/embed/".concat(
                                    e.embedId
                                  ),
                                  title:
                                    "DON'T MISS OUT ON THE BLOCKDAG PRESALE!!\uD83D\uDD25 THIS ONE'S ON OUR UP NEXT RADAR TO MOON IN 2024!!",
                                  frameBorder: "0",
                                  allow:
                                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                  referrerPolicy:
                                    "strict-origin-when-cross-origin",
                                  allowFullScreen: !0,
                                }),
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    70499: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var l = s(57437),
        i = s(87138),
        r = s(60231),
        n = s.n(r),
        a = s(44839),
        o = s(2265),
        c = s(16609),
        d = s(49582),
        u = s(78002),
        h = s(16463);
      function m(e) {
        let {
            href: t,
            className: s,
            children: r,
            target: m,
            onClick: _,
            direction: f,
            directionMobile: g = f,
            translateY: p = 0,
            translateX: w = 0,
            duration: v = 0.8,
            rotateX: b = 0,
            rotateY: x = 0,
            ease: y = "back.out",
            opacity: N = 0,
            animate: j,
            start: k = 80,
            end: Z = 60,
            color: T = "primary",
            disabled: S,
            type: D = "button",
          } = e,
          B = (0, o.useRef)(null),
          A = (0, o.useRef)(null),
          C = (0, u.Z)(),
          { useGSAP: O, activatedGsap: E } = (0, c.Z)(),
          G = (0, h.usePathname)();
        return (
          O(() => {
            if ("/" == G) {
              let e;
              if (
                (B.current && (e = B),
                A.current && (e = A),
                E && j && e && e.current && (null == C ? void 0 : C.width))
              ) {
                let t, s;
                (null == C ? void 0 : C.width) < 992
                  ? ((w = "right" == g ? -200 : "left" == g ? 200 : w),
                    (p = "top" == g ? 200 : "bottom" == g ? -200 : p))
                  : ((p = "top" == f ? 200 : "bottom" == f ? -200 : p),
                    (w = "right" == f ? -200 : "left" == f ? 200 : w));
                let l = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == C ? void 0 : C.width) < 992 ? k - 10 : k,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == C ? void 0 : C.width) < 992 ? Z - 15 : Z - 10,
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
                  (s =
                    (null == C ? void 0 : C.width) > 1440
                      ? p
                      : (null == C ? void 0 : C.width) < 992
                      ? ((null == C ? void 0 : C.width) / 500) * p
                      : ((null == C ? void 0 : C.width) / 1440) * p),
                  l
                    .from(e.current, {
                      translateY: s,
                      translateX: t,
                      rotateX: b,
                      rotateY: x,
                      opacity: N,
                      duration: v,
                      ease: y,
                    })
                    .to(e.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => l.kill()
                );
              }
            }
          }, [E, G]),
          (0, l.jsx)(l.Fragment, {
            children: t
              ? m && "_blank" == m
                ? (0, l.jsxs)(i.default, {
                    ref: A,
                    href: t,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: _,
                    className: (0, a.Z)(n().button, s, n()[T]),
                    children: [r, (0, l.jsx)("span", { className: n().wrap })],
                  })
                : (0, l.jsxs)(i.default, {
                    ref: A,
                    href: t,
                    target: m,
                    rel: "",
                    onClick: _,
                    className: (0, a.Z)(n().button, s, n()[T]),
                    children: [r, (0, l.jsx)("span", { className: n().wrap })],
                  })
              : (0, l.jsxs)("button", {
                  type: D,
                  disabled: S,
                  ref: B,
                  onClick: _,
                  className: (0, a.Z)(n().button, s, n()[T]),
                  children: [r, (0, l.jsx)("span", { className: n().wrap })],
                }),
          })
        );
      }
    },
    15110: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var l = s(57437),
        i = s(44839),
        r = s(41885),
        n = s.n(r),
        a = s(21360),
        o = s(47984);
      function c(e) {
        let {
          label: t,
          error: s,
          errorDesc: r,
          success: c,
          successDesc: d,
          icon: u,
          iconPosition: h = "right",
          customLabelPosition: m = "right",
          customLabelTriggerInput: _,
          customLabel: f,
          infoDesc: g,
          light: p,
          className: w,
          ...v
        } = e;
        return (0, l.jsxs)("div", {
          className: (0, i.Z)(
            n().input,
            p && n().light,
            s && n().error,
            c && n().success,
            w
          ),
          children: [
            t &&
              (0, l.jsx)("label", {
                className: n().label,
                htmlFor: null == v ? void 0 : v.id,
                children: t,
              }),
            (0, l.jsxs)("div", {
              className: (0, i.Z)(
                n().controller,
                p && n().light,
                s && n().error,
                c && n().success,
                u && n()[h]
              ),
              children: [
                (0, l.jsx)("input", { ...v }),
                ((u && "left" == h) || (f && "left" == h)) &&
                  (0, l.jsxs)("div", {
                    className: n().left,
                    children: [
                      u &&
                        "left" == h &&
                        (0, l.jsx)(o.default, {
                          className: (0, i.Z)(n().icon),
                          hero: !0,
                          src: u,
                          alt: (null == v ? void 0 : v.name) || "BlockDAG",
                        }),
                      f &&
                        "left" == m &&
                        (0, l.jsx)("label", {
                          className: (0, i.Z)(n().customLabel),
                          htmlFor: _ ? (null == v ? void 0 : v.id) : void 0,
                          children: f,
                        }),
                    ],
                  }),
                ((u && "right" == h) || (f && "right" == h)) &&
                  (0, l.jsxs)("div", {
                    className: n().right,
                    children: [
                      u &&
                        "right" == h &&
                        (0, l.jsx)(o.default, {
                          className: (0, i.Z)(n().icon),
                          hero: !0,
                          src: u,
                          alt: (null == v ? void 0 : v.name) || "BlockDAG",
                        }),
                      f &&
                        "right" == m &&
                        (0, l.jsx)("label", {
                          className: (0, i.Z)(n().customLabel),
                          htmlFor: _ ? (null == v ? void 0 : v.id) : void 0,
                          children: f,
                        }),
                    ],
                  }),
              ],
            }),
            g &&
              (0, l.jsx)(a.default, {
                size: "sm",
                className: (0, i.Z)(n().infoDesc, "text-[#3E4D6C] text-left"),
                children: g,
              }),
            s &&
              r &&
              (0, l.jsx)(a.default, {
                size: "sm",
                className: (0, i.Z)(n().infoDesc, "text-error-400 text-left"),
                children: r,
              }),
            c &&
              d &&
              (0, l.jsx)(a.default, {
                size: "sm",
                className: (0, i.Z)(n().infoDesc, "text-info-400 text-left"),
                children: d,
              }),
          ],
        });
      }
    },
    45419: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return g;
        },
      });
      var l = s(57437),
        i = s(42625),
        r = s(76003),
        n = s.n(r),
        a = s(21360),
        o = s(47984),
        c = s(32913),
        d = s(87580),
        u = s(70499),
        h = s(13259),
        m = s(16609),
        _ = s(53309),
        f = s(44839);
      function g(e) {
        let { color: t } = e,
          { tokenData: s } = (0, m.Z)();
        return (0, l.jsx)(c.Z, {
          className: n().section,
          color: t || "primary",
          children: (0, l.jsxs)(i.Z, {
            className: n().sectionContainer,
            children: [
              (0, l.jsx)("div", {
                children: (0, l.jsx)(o.default, {
                  className: n().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              // (0, l.jsxs)(d.default, {
              //   children: [
              //     "$",
              //     (null == s ? void 0 : s.totalSoldTokensValueUsd)
              //       ? (0, _.HN)(
              //           null == s ? void 0 : s.totalSoldTokensValueUsd
              //         ).replace("M", "")
              //       : "**.**",
              //     " ",
              //     "Million Raised",
              //   ],
              // }),
              (0, l.jsxs)(a.default, {
                className: (0, f.Z)(n().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto engage with the project,",
                  (0, l.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, l.jsxs)("div", {
                className: n().btns,
                children: [
                  (0, l.jsx)(u.default, {
                    href: h.YJ,
                    color: "dark" === t ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, l.jsx)(u.default, {
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
    93728: function (e, t) {
      "use strict";
      let s = 0,
        l = (e, t, l) => {
          let i = new CustomEvent("add-toast", {
            detail: { id: s++, message: e, status: t, duration: l },
          });
          window.dispatchEvent(i);
        };
      t.Z = {
        success: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return l(e, "success", t);
        },
        error: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return l(e, "error", t);
        },
        info: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return l(e, "info", t);
        },
      };
    },
    53309: function (e, t, s) {
      "use strict";
      s.d(t, {
        HN: function () {
          return c;
        },
      });
      let l = (e, t) => {
          let s = (e = e.toString()).split(".");
          if (s.length < 2) return e;
          let l = s[0],
            i = s[1];
          if (i.length <= t) return "";
          let r = i.match(/0*$/);
          if (!r) return "";
          let n = r[0],
            a = i.substring(0, r.index);
          return (
            (n = n.substring(0, t - (i.length - n.length))),
            "".concat(l, ".").concat(a).concat(n)
          );
        },
        i = (e, t, s) => {
          let i = (e = Math.floor(1e5 * e + 0.5) / 1e5).toString(),
            r = 0;
          if ((i.includes(".") && (r = i.split(".")[1].length), r < t)) {
            0 === r && (i += ".");
            for (var n = r; n < t; n++) i += "0";
          }
          if (r > 0) {
            let e = i.split("."),
              r = e[0],
              n = e[1],
              a = (n.match(/[1-9][0-9]*/) || [""])[0],
              o = a.length,
              c = (n.match(/0*/) || [""])[0],
              d = c + a;
            "0" !== r && d.length > s
              ? ((d = d.substring(0, s)),
                (i = "".concat(r, ".").concat(l(d, t))))
              : o > s &&
                ((a = a.substring(0, s)),
                (i = "".concat(r, ".").concat(c).concat(l(a, t))));
          }
          return i;
        },
        r = (e) => {
          let t = e.toString().split(".");
          return (
            (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), t.join(".")
          );
        },
        n = (e, t, s) => r(i(e, t, s)),
        a = (e, t) => (Math.floor(e * 10 ** t) / 10 ** t).toString(),
        o = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 },
        c = (e, t, s, l) => {
          if (isNaN(e) || void 0 === e) return "Calculating...";
          if (e < t) return n(e, s, l);
          let i = (e = Math.floor(e)),
            r = "";
          return (
            Object.entries(o).forEach((t) => {
              let [s, l] = t;
              e / l < 1e3 && e / l >= 1 && ((r = s), (i = e / l));
            }),
            "".concat(a(i, 2)).concat(r)
          );
        };
    },
    16631: function (e) {
      e.exports = {
        join: "style_join__DEfIw",
        container: "style_container__rMn5A",
        desc: "style_desc__5J5SS",
        texts: "style_texts__y1_vj",
        newsletter: "style_newsletter__lbqiC",
        connect: "style_connect__fVHH_",
        list: "style_list__mRsUl",
        item: "style_item__TGrOR",
        reviews: "style_reviews__VnQ80",
        swiper: "style_swiper__gOyWu",
        videoArea: "style_videoArea__Tj1P5",
      };
    },
    50573: function (e) {
      e.exports = {
        newsletterTool: "NewsletterTool_newsletterTool__tacB8",
        subscribe: "NewsletterTool_subscribe__gvHec",
        inputTool: "NewsletterTool_inputTool__iaxyR",
        subscribeButton: "NewsletterTool_subscribeButton__LoeLe",
        privacyText: "NewsletterTool_privacyText__R7ATd",
        learnMore: "NewsletterTool_learnMore__JpzSK",
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
    76003: function (e) {
      e.exports = {
        section: "style_section__K46ck",
        sectionContainer: "style_sectionContainer__oErws",
        desc: "style_desc___bTux",
        btns: "style_btns__eS32b",
        cube: "style_cube__p2p8S",
      };
    },
  },
]);
