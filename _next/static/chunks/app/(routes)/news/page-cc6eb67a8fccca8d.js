(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1944],
  {
    80054: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 231, 23)),
        Promise.resolve().then(s.bind(s, 42263)),
        Promise.resolve().then(s.bind(s, 65385)),
        Promise.resolve().then(s.t.bind(s, 66391, 23)),
        Promise.resolve().then(s.t.bind(s, 84868, 23)),
        Promise.resolve().then(s.t.bind(s, 63450, 23)),
        Promise.resolve().then(s.bind(s, 10876)),
        Promise.resolve().then(s.t.bind(s, 77632, 23)),
        Promise.resolve().then(s.bind(s, 39070)),
        Promise.resolve().then(s.bind(s, 81079)),
        Promise.resolve().then(s.bind(s, 70499)),
        Promise.resolve().then(s.bind(s, 43615)),
        Promise.resolve().then(s.bind(s, 47984)),
        Promise.resolve().then(s.bind(s, 45419)),
        Promise.resolve().then(s.t.bind(s, 14629, 23)),
        Promise.resolve().then(s.t.bind(s, 58538, 23)),
        Promise.resolve().then(s.t.bind(s, 18803, 23)),
        Promise.resolve().then(s.t.bind(s, 59747, 23)),
        Promise.resolve().then(s.bind(s, 21360)),
        Promise.resolve().then(s.bind(s, 87580)),
        Promise.resolve().then(s.bind(s, 84395));
    },
    10876: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return h;
        },
      });
      var n = s(57437),
        l = s(2265),
        i = s(77632),
        r = s.n(i),
        o = s(47984),
        a = s(44839),
        c = s(21360),
        d = s(70499),
        _ = s(43615),
        u = s(87138);
      function h(e) {
        let { newsData: t, countriesData: s } = e,
          [i, h] = (0, l.useState)(6),
          [m, f] = (0, l.useState)("English"),
          [g, b] = (0, l.useState)(t || []);
        return (
          (0, l.useEffect)(() => {
            t &&
              s &&
              (null !== m
                ? b(t.filter((e) => e.attributes["news-country"].includes(m)))
                : b(t),
              h(6));
          }, [m, t]),
          (0, n.jsxs)("div", {
            className: r().newsWrapper,
            children: [
              (0, n.jsxs)("div", {
                className: r().countries,
                children: [
                  (0, n.jsxs)("div", {
                    onClick: () => {
                      f(null);
                    },
                    className: (0, a.Z)(
                      r().countryItem,
                      null == m && r().selected
                    ),
                    children: [
                      (0, n.jsx)("div", {
                        className: r().flagImg,
                        children: (0, n.jsx)(o.default, {
                          hero: !0,
                          src: "/icons/global.svg",
                          alt: "World flag",
                        }),
                      }),
                      (0, n.jsx)(c.default, { children: "All" }),
                    ],
                  }),
                  s &&
                    s.map((e, t) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          onClick: () => {
                            f(e.attributes.title);
                          },
                          className: (0, a.Z)(
                            r().countryItem,
                            m == e.attributes.title && r().selected
                          ),
                          children: [
                            (0, n.jsx)("div", {
                              className: r().flagImg,
                              children: (0, n.jsx)(o.default, {
                                hero: !0,
                                src: e.attributes.img,
                                alt: e.attributes.title,
                              }),
                            }),
                            (0, n.jsx)(c.default, {
                              children: e.attributes.title,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                ],
              }),
              (0, n.jsxs)("div", {
                className: r().newsContainer,
                children: [
                  (0, n.jsx)(c.default, {
                    size: "lg",
                    children: m
                      ? "News from ".concat(m, " Media")
                      : "News All Over World",
                  }),
                  (0, n.jsxs)("div", {
                    className: r().newsGrid,
                    children: [
                      !g.length &&
                        (0, n.jsxs)(c.default, {
                          children: [
                            "There is no latest news from",
                            " ",
                            m || "World",
                            " Media yet.",
                          ],
                        }),
                      g.slice(0, i).map((e, t) => {
                        var s, l, i, o;
                        return (0, n.jsxs)(
                          "div",
                          {
                            className: r().item,
                            children: [
                              (0, n.jsx)(u.default, {
                                href: (
                                  null == e
                                    ? void 0
                                    : null === (s = e.attributes) ||
                                      void 0 === s
                                    ? void 0
                                    : s.link
                                )
                                  ? null == e
                                    ? void 0
                                    : null === (l = e.attributes) ||
                                      void 0 === l
                                    ? void 0
                                    : l.link
                                  : "#",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, n.jsx)(c.default, {
                                  size: "lg",
                                  className: (0, a.Z)(
                                    r().title,
                                    (e.attributes.title.includes("https://") ||
                                      e.attributes.title.includes("www.")) &&
                                      r().break,
                                    "line-clamp-4"
                                  ),
                                  children: e.attributes.title,
                                }),
                              }),
                              (0, n.jsx)(c.default, {
                                className: r().date,
                                children: e.attributes.date,
                              }),
                              (0, n.jsx)(_.default, {
                                href: (
                                  null == e
                                    ? void 0
                                    : null === (i = e.attributes) ||
                                      void 0 === i
                                    ? void 0
                                    : i.link
                                )
                                  ? null == e
                                    ? void 0
                                    : null === (o = e.attributes) ||
                                      void 0 === o
                                    ? void 0
                                    : o.link
                                  : "#",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Read More",
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    ],
                  }),
                  // (0, n.jsx)(d.default, {
                  //   className: r().button,
                  //   color: "primary",
                  //   disabled: !g || (null == g ? void 0 : g.length) <= i,
                  //   onClick: () => {
                  //     h((e) => e + 3);
                  //   },
                  //   children: "Show More",
                  // }),
                ],
              }),
            ],
          })
        );
      }
    },
    39070: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return f;
        },
      });
      var n = s(57437),
        l = s(32913),
        i = s(52783),
        r = s.n(i),
        o = s(42625),
        a = s(84395),
        c = s(87580),
        d = s(21360),
        _ = s(47984),
        u = s(43615),
        h = s(81079),
        m = s(44839);
      function f(e) {
        let { color: t } = e,
          s = (e) => {
            let t = document.createElement("a");
            (t.href = "".concat(e)),
              (t.download = e),
              document.body.appendChild(t),
              t.click(),
              document.body.removeChild(t);
          };
        return (0, n.jsx)(l.Z, {
          color: t || "dark",
          className: r().presskit,
          children: (0, n.jsxs)(o.Z, {
            className: r().container,
            children: [
              (0, n.jsxs)("div", {
                className: r().texts,
                children: [
                  (0, n.jsx)(a.default, {
                    color:
                      "primary" == t
                        ? "light"
                        : "light" === t
                        ? "dark"
                        : "primary",
                    animate: !0,
                    direction: "right",
                    children: "PRESS KIT",
                  }),
                  (0, n.jsx)(c.default, {
                    animate: !0,
                    direction: "right",
                    children: "Files For Press",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: r().content,
                children: [
                  {
                    title: "The Logo",
                    format: ".SVG",
                    size: "2.9 MB",
                    desc: "The horizontal lockup shall be used in most circumstances. The vertical lockup and the BloockDAG symbol shall only be used for constrained spaces.",
                    img: "/images/presskit/Logo.svg",
                  },
                  {
                    title: "The Logo Vertical",
                    format: ".SVG",
                    size: "2.9 MB",
                    desc: '"BlockDAG" represents the brand and the platform.',
                    img: "/images/presskit/LogoVertical.svg",
                  },
                  {
                    title: "The BlockDAG Symbol",
                    format: ".SVG",
                    size: "2.9 MB",
                    desc: '"BlockDAG" symbol represents the brand and the platform.',
                    img: "/images/presskit/Symbol.svg",
                  },
                  {
                    title: "The BlockDAG Coin Logo",
                    format: ".SVG",
                    size: "8 KB",
                    desc: "“BlockDAG” represents the governance coin on the BlockDAG blockchain.",
                    img: "/images/presskit/TokenLogo.svg",
                  },
                  {
                    title: "The BlockDAG Coin Logo Vertical",
                    format: ".SVG",
                    size: "8 KB",
                    desc: '"BlockDAG" represents the brand and the platform.',
                    img: "/images/presskit/TokenLogoVertical.svg",
                  },
                  {
                    title: "The BlockDAG Coin Symbol",
                    format: ".SVG",
                    size: "2 KB",
                    desc: "“BlockDAG” represents the governance coin on the BlockDAG blockchain.",
                    img: "/images/presskit/TokenSymbol.svg",
                  },
                ].map((e, l) =>
                  (0, n.jsxs)(
                    h.default,
                    {
                      animate: !0,
                      direction:
                        l % 3 == 0 ? "right" : l % 3 == 1 ? "top" : "left",
                      directionMobile: l % 2 == 0 ? "right" : "left",
                      className: (0, m.Z)(
                        r().item,
                        "light" === t ? r().white : ""
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className: r().head,
                          children: (0, n.jsx)(c.default, {
                            size: "sm",
                            children: e.format,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: r().img,
                          children: (0, n.jsx)(_.default, {
                            src: e.img,
                            alt: e.title,
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: r().details,
                          children: [
                            (0, n.jsx)(d.default, {
                              size: "lg",
                              className: "font-bold",
                              children: e.title,
                            }),
                            (0, n.jsx)(d.default, { children: e.size }),
                            (0, n.jsx)(d.default, {
                              className: r().desc,
                              children: e.desc,
                            }),
                            (0, n.jsx)(u.default, {
                              className: r().download,
                              href: e.img,
                              target: "_blank",
                              download: !0,
                              onClick: () => {
                                s(e.img);
                              },
                              children: "Download",
                            }),
                          ],
                        }),
                      ],
                    },
                    l
                  )
                ),
              }),
            ],
          }),
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
      var n = s(57437),
        l = s(42625),
        i = s(76003),
        r = s.n(i),
        o = s(21360),
        a = s(47984),
        c = s(32913),
        d = s(87580),
        _ = s(70499),
        u = s(13259),
        h = s(16609),
        m = s(53309),
        f = s(44839);
      function g(e) {
        let { color: t } = e,
          { tokenData: s } = (0, h.Z)();
        return (0, n.jsx)(c.Z, {
          className: r().section,
          color: t || "primary",
          children: (0, n.jsxs)(l.Z, {
            className: r().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(a.default, {
                  className: r().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              // (0, n.jsxs)(d.default, {
              //   children: [
              //     "$",
              //     (null == s ? void 0 : s.totalSoldTokensValueUsd)
              //       ? (0, m.HN)(
              //           null == s ? void 0 : s.totalSoldTokensValueUsd
              //         ).replace("M", "")
              //       : "**.**",
              //     " ",
              //     "Million Raised",
              //   ],
              // }),
              (0, n.jsxs)(o.default, {
                className: (0, f.Z)(r().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto engage with the project,",
                  (0, n.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, n.jsxs)("div", {
                className: r().btns,
                children: [
                  (0, n.jsx)(_.default, {
                    href: u.YJ,
                    color: "dark" === t ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, n.jsx)(_.default, {
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
    32913: function (e, t, s) {
      "use strict";
      var n = s(57437),
        l = s(44839),
        i = s(14629),
        r = s.n(i);
      let o = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: i, color: o = "dark", ...a } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: t,
            className: (0, l.Z)(r().section, r()[o], i),
            ...a,
            children: s,
          }),
        });
      });
      (o.displayName = "Section"), (t.Z = o);
    },
    53309: function (e, t, s) {
      "use strict";
      s.d(t, {
        HN: function () {
          return c;
        },
      });
      let n = (e, t) => {
          let s = (e = e.toString()).split(".");
          if (s.length < 2) return e;
          let n = s[0],
            l = s[1];
          if (l.length <= t) return "";
          let i = l.match(/0*$/);
          if (!i) return "";
          let r = i[0],
            o = l.substring(0, i.index);
          return (
            (r = r.substring(0, t - (l.length - r.length))),
            "".concat(n, ".").concat(o).concat(r)
          );
        },
        l = (e, t, s) => {
          let l = (e = Math.floor(1e5 * e + 0.5) / 1e5).toString(),
            i = 0;
          if ((l.includes(".") && (i = l.split(".")[1].length), i < t)) {
            0 === i && (l += ".");
            for (var r = i; r < t; r++) l += "0";
          }
          if (i > 0) {
            let e = l.split("."),
              i = e[0],
              r = e[1],
              o = (r.match(/[1-9][0-9]*/) || [""])[0],
              a = o.length,
              c = (r.match(/0*/) || [""])[0],
              d = c + o;
            "0" !== i && d.length > s
              ? ((d = d.substring(0, s)),
                (l = "".concat(i, ".").concat(n(d, t))))
              : a > s &&
                ((o = o.substring(0, s)),
                (l = "".concat(i, ".").concat(c).concat(n(o, t))));
          }
          return l;
        },
        i = (e) => {
          let t = e.toString().split(".");
          return (
            (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), t.join(".")
          );
        },
        r = (e, t, s) => i(l(e, t, s)),
        o = (e, t) => (Math.floor(e * 10 ** t) / 10 ** t).toString(),
        a = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 },
        c = (e, t, s, n) => {
          if (isNaN(e) || void 0 === e) return "Calculating...";
          if (e < t) return r(e, s, n);
          let l = (e = Math.floor(e)),
            i = "";
          return (
            Object.entries(a).forEach((t) => {
              let [s, n] = t;
              e / n < 1e3 && e / n >= 1 && ((i = s), (l = e / n));
            }),
            "".concat(o(l, 2)).concat(i)
          );
        };
    },
    84868: function (e) {
      e.exports = {
        giveaway: "style_giveaway__ID1_5",
        content: "style_content__Gq_nS",
        flex: "style_flex__Q8bYC",
        image: "style_image__Oqgeq",
        texts: "style_texts__R_LRv",
        btn: "style_btn__NBSYt",
      };
    },
    63450: function (e) {
      e.exports = {
        partners: "style_partners__Anqlf",
        container: "style_container__Q4dR8",
        top: "style_top__HiQbT",
        partnerContent: "style_partnerContent__1W9y2",
        partnerList: "style_partnerList__M51X5",
        partnerItem: "style_partnerItem__Fclj6",
        partnerItemContent: "style_partnerItemContent__90dHY",
      };
    },
    77632: function (e) {
      e.exports = {
        news: "style_news__JLYh4",
        container: "style_container__QoNu2",
        newsWrapper: "style_newsWrapper__ZVGPn",
        countries: "style_countries__LN9QY",
        countryItem: "style_countryItem__pvIyj",
        selected: "style_selected__dvxn2",
        newsContainer: "style_newsContainer__jHWtY",
        button: "style_button__yooF2",
        newsGrid: "style_newsGrid__60c8W",
        item: "style_item__oUIl0",
        title: "style_title__eudre",
        break: "style_break__B4A64",
        date: "style_date__syeK4",
      };
    },
    52783: function (e) {
      e.exports = {
        presskit: "style_presskit__rNaON",
        container: "style_container__yuBEx",
        texts: "style_texts__lQtL0",
        content: "style_content__wpHeG",
        item: "style_item__06BAS",
        white: "style_white__P48BU",
        head: "style_head__a4j3_",
        img: "style_img__Vxvo6",
        details: "style_details__Jmx7Q",
        desc: "style_desc__QCZZ7",
        download: "style_download___gG1s",
      };
    },
    59747: function (e) {
      e.exports = {
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
  function (e) {
    e.O(
      0,
      [
        3752, 6835, 5575, 3346, 6624, 922, 835, 7429, 7749, 6609, 4169, 2215,
        2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 80054));
      }
    ),
      (_N_E = e.O());
  },
]);
