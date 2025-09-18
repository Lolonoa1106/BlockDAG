(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
  {
    95889: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.bind(n, 79554)),
        Promise.resolve().then(n.bind(n, 85580)),
        Promise.resolve().then(n.bind(n, 44144)),
        Promise.resolve().then(n.bind(n, 70499)),
        Promise.resolve().then(n.t.bind(n, 58538, 23)),
        Promise.resolve().then(n.t.bind(n, 59747, 23)),
        Promise.resolve().then(n.t.bind(n, 5735, 23)),
        Promise.resolve().then(n.t.bind(n, 18803, 23)),
        Promise.resolve().then(n.bind(n, 47984)),
        Promise.resolve().then(n.bind(n, 45419)),
        Promise.resolve().then(n.t.bind(n, 14629, 23)),
        Promise.resolve().then(n.bind(n, 21360)),
        Promise.resolve().then(n.bind(n, 87580)),
        Promise.resolve().then(n.bind(n, 84395));
    },
    44144: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return m;
        },
      });
      var i = n(57437),
        s = n(32913),
        r = n(19565),
        l = n.n(r),
        a = n(42625),
        o = n(47984),
        c = n(21360),
        d = n(87580),
        u = n(2265),
        h = n(44839);
      function m(e) {
        let {} = e,
          [t, n] = (0, u.useState)(0),
          r = [
            {
              index: 0,
              title: (0, i.jsx)(i.Fragment, {
                children: "Hybrid Architecture",
              }),
              icon: "/icons/hybrid-architecture.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "BlockDAG introduces a groundbreaking hybrid architecture that combines the best of blockchain and Directed Acyclic Graph (DAG) technologies. This innovative approach enables unparalleled scalability and efficiency, ensuring that the network can handle an ever-growing number of transactions without compromising on speed or security. The hybrid architecture allows BlockDAG to deliver a more sustainable and powerful platform that meets the demands of modern decentralized applications.",
              }),
              additional: (0, i.jsx)(o.default, {
                alt: "Diagram",
                width: 643,
                height: 338,
                src: "/images/architecture-diagram.svg",
              }),
            },
            {
              index: 1,
              title: (0, i.jsx)(i.Fragment, { children: "EVM Compatibility" }),
              icon: "/icons/evm-compatibility.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "To ensure interoperability with the vast ecosystem of Ethereum-based tools, wallets, and dApps, BlockDAG is fully compatible with the Ethereum Virtual Machine (EVM). This compatibility allows developers to seamlessly migrate their existing Ethereum projects to BlockDAG, taking advantage of the network’s superior speed and lower transaction costs, while maintaining all the functionalities they are accustomed to. BlockDAG bridges the gap between established blockchain ecosystems and new, more efficient technologies.",
              }),
            },
            {
              index: 2,
              title: (0, i.jsx)(i.Fragment, {
                children: "Low-Code Smart Contract Builder",
              }),
              icon: "/icons/low-code.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "BlockDAG's Low-Code Smart Contract Builder revolutionizes the way developers and businesses create and deploy smart contracts. This intuitive tool simplifies the development process by providing a drag-and-drop interface that allows users to design complex smart contracts without extensive coding knowledge. By making smart contract creation accessible to everyone, BlockDAG empowers a broader audience to innovate and participate in the decentralized economy.",
              }),
            },
            {
              index: 3,
              title: (0, i.jsx)(i.Fragment, {
                children: "Innovations for the Real World",
              }),
              icon: "/icons/innovations.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "BlockDAG is not just about technology for technology’s sake; it’s about driving real-world innovations that solve practical problems. Whether it's streamlining supply chains, enhancing financial systems, or enabling new forms of digital interaction, BlockDAG’s technology is designed to be applied in a wide range of industries. Our focus is on creating impactful solutions that bring tangible benefits to businesses and individuals around the globe.",
              }),
            },
            {
              index: 4,
              title: (0, i.jsx)(i.Fragment, {
                children: "Consensus & Security",
              }),
              icon: "/icons/consensus.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "Security is at the core of BlockDAG’s architecture. The platform employs a robust consensus mechanism that ensures the integrity and security of all transactions on the network. By leveraging a hybrid proof-of-work (PoW) consensus model, BlockDAG provides a secure environment that resists attacks and maintains network stability. Our advanced security protocols protect user assets and data, giving users confidence in the safety of their interactions on the platform.",
              }),
            },
            {
              index: 5,
              title: (0, i.jsx)(i.Fragment, { children: "Scalability" }),
              icon: "/icons/scalability-blue.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "BlockDAG is engineered for scalability from the ground up. The platform’s hybrid architecture and innovative consensus mechanism allow it to process thousands of transactions per second, far surpassing the capabilities of traditional blockchain networks. This scalability ensures that BlockDAG can support the growing demands of decentralized applications and accommodate future growth, making it a sustainable and future-proof solution for the blockchain industry.",
              }),
            },
          ],
          m = [r[t], ...r.filter((e) => e.index !== t)];
        return (0, i.jsx)(s.Z, {
          className: l().explore,
          children: (0, i.jsx)(a.Z, {
            classic: !0,
            children: (0, i.jsxs)("div", {
              className: l().content,
              children: [
                (0, i.jsx)(d.default, { children: "Explore" }),
                (0, i.jsxs)("div", {
                  className: l().wrapper,
                  children: [
                    (0, i.jsx)("div", {
                      className: l().categories,
                      children: m.map((e) =>
                        (0, i.jsx)(
                          c.default,
                          {
                            size: t === e.index ? "lg" : "md",
                            onClick: () => n(e.index),
                            className: (0, h.Z)(
                              l().title,
                              t === e.index && l().active
                            ),
                            children: e.title,
                          },
                          e.index
                        )
                      ),
                    }),
                    (0, i.jsx)("div", {
                      className: l().boxes,
                      children: m.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: l().boxes_item,
                            children: [
                              (0, i.jsx)("div", {
                                className: l().icon,
                                children: (0, i.jsx)(o.default, {
                                  alt: "BlockDAG",
                                  src: e.icon,
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: l().texts,
                                children: [
                                  (0, i.jsx)(c.default, {
                                    size: "lg",
                                    className: l().texts_title,
                                    children: e.title,
                                  }),
                                  (0, i.jsx)(c.default, {
                                    size: "md",
                                    className: l().texts_desc,
                                    children: e.desc,
                                  }),
                                  e.additional && e.additional,
                                ],
                              }),
                            ],
                          },
                          e.index
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    70499: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var i = n(57437),
        s = n(87138),
        r = n(60231),
        l = n.n(r),
        a = n(44839),
        o = n(2265),
        c = n(16609),
        d = n(49582),
        u = n(78002),
        h = n(16463);
      function m(e) {
        let {
            href: t,
            className: n,
            children: r,
            target: m,
            onClick: _,
            direction: f,
            directionMobile: g = f,
            translateY: p = 0,
            translateX: b = 0,
            duration: y = 0.8,
            rotateX: v = 0,
            rotateY: x = 0,
            ease: w = "back.out",
            opacity: k = 0,
            animate: j,
            start: N = 80,
            end: F = 60,
            color: B = "primary",
            disabled: C,
            type: D = "button",
          } = e,
          P = (0, o.useRef)(null),
          A = (0, o.useRef)(null),
          G = (0, u.Z)(),
          { useGSAP: Z, activatedGsap: T } = (0, c.Z)(),
          S = (0, h.usePathname)();
        return (
          Z(() => {
            if ("/" == S) {
              let e;
              if (
                (P.current && (e = P),
                A.current && (e = A),
                T && j && e && e.current && (null == G ? void 0 : G.width))
              ) {
                let t, n;
                (null == G ? void 0 : G.width) < 992
                  ? ((b = "right" == g ? -200 : "left" == g ? 200 : b),
                    (p = "top" == g ? 200 : "bottom" == g ? -200 : p))
                  : ((p = "top" == f ? 200 : "bottom" == f ? -200 : p),
                    (b = "right" == f ? -200 : "left" == f ? 200 : b));
                let i = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == G ? void 0 : G.width) < 992 ? N - 10 : N,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == G ? void 0 : G.width) < 992 ? F - 15 : F - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (t =
                    (null == G ? void 0 : G.width) > 1440
                      ? b
                      : (null == G ? void 0 : G.width) < 992
                      ? ((null == G ? void 0 : G.width) / 500) * b
                      : ((null == G ? void 0 : G.width) / 1440) * b),
                  (n =
                    (null == G ? void 0 : G.width) > 1440
                      ? p
                      : (null == G ? void 0 : G.width) < 992
                      ? ((null == G ? void 0 : G.width) / 500) * p
                      : ((null == G ? void 0 : G.width) / 1440) * p),
                  i
                    .from(e.current, {
                      translateY: n,
                      translateX: t,
                      rotateX: v,
                      rotateY: x,
                      opacity: k,
                      duration: y,
                      ease: w,
                    })
                    .to(e.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => i.kill()
                );
              }
            }
          }, [T, S]),
          (0, i.jsx)(i.Fragment, {
            children: t
              ? m && "_blank" == m
                ? (0, i.jsxs)(s.default, {
                    ref: A,
                    href: t,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: _,
                    className: (0, a.Z)(l().button, n, l()[B]),
                    children: [r, (0, i.jsx)("span", { className: l().wrap })],
                  })
                : (0, i.jsxs)(s.default, {
                    ref: A,
                    href: t,
                    target: m,
                    rel: "",
                    onClick: _,
                    className: (0, a.Z)(l().button, n, l()[B]),
                    children: [r, (0, i.jsx)("span", { className: l().wrap })],
                  })
              : (0, i.jsxs)("button", {
                  type: D,
                  disabled: C,
                  ref: P,
                  onClick: _,
                  className: (0, a.Z)(l().button, n, l()[B]),
                  children: [r, (0, i.jsx)("span", { className: l().wrap })],
                }),
          })
        );
      }
    },
    42625: function (e, t, n) {
      "use strict";
      var i = n(57437),
        s = n(44839),
        r = n(58538),
        l = n.n(r);
      let a = (0, n(2265).forwardRef)((e, t) => {
        let { children: n, className: r, size: a, classic: o, ...c } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            ref: t,
            className: (0, s.Z)(
              l().container,
              r,
              a && l()[a],
              o && l().classic
            ),
            ...c,
            children: n,
          }),
        });
      });
      (a.displayName = "Container"), (t.Z = a);
    },
    43615: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var i = n(57437),
        s = n(2265),
        r = n(48241),
        l = n.n(r),
        a = n(87138),
        o = n(44839),
        c = n(78002),
        d = n(16609),
        u = n(49582),
        h = n(16463);
      function m(e) {
        let {
            href: t,
            download: n,
            className: r,
            target: m,
            children: _,
            color: f = "primary",
            onClick: g,
            direction: p,
            directionMobile: b = p,
            translateY: y = 0,
            translateX: v = 0,
            duration: x = 0.8,
            rotateX: w = 0,
            rotateY: k = 0,
            ease: j = "back.out",
            opacity: N = 0,
            animate: F,
            start: B = 80,
            end: C = 60,
            ...D
          } = e,
          P = (0, c.Z)(),
          A = (0, s.useRef)(null),
          { useGSAP: G, activatedGsap: Z } = (0, d.Z)(),
          T = (0, h.usePathname)();
        return (
          G(() => {
            if (
              "/" == T &&
              Z &&
              F &&
              A.current &&
              (null == P ? void 0 : P.width)
            ) {
              let e, t;
              (null == P ? void 0 : P.width) < 992
                ? ((v = "right" == b ? -200 : "left" == b ? 200 : v),
                  (y = "top" == b ? 200 : "bottom" == b ? -200 : y))
                : ((y = "top" == p ? 200 : "bottom" == p ? -200 : y),
                  (v = "right" == p ? -200 : "left" == p ? 200 : v));
              let n = u.ZP.timeline({
                scrollTrigger: {
                  trigger: A.current,
                  start: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? B - 10 : B,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? C - 15 : C - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == P ? void 0 : P.width) > 1440
                    ? v
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * v
                    : ((null == P ? void 0 : P.width) / 1440) * v),
                (t =
                  (null == P ? void 0 : P.width) > 1440
                    ? y
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * y
                    : ((null == P ? void 0 : P.width) / 1440) * y),
                n
                  .from(A.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: w,
                    rotateY: k,
                    opacity: N,
                    duration: x,
                    ease: j,
                  })
                  .to(A.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [P, Z, T]),
          m && "_blank" == m
            ? (0, i.jsx)(a.default, {
                ref: A,
                download: n,
                href: t,
                target: m,
                rel: "noopener noreferrer",
                prefetch: !1,
                onClick: g,
                className: (0, o.Z)(l().customlink, l()[f], r),
                ...D,
                children: _,
              })
            : (0, i.jsx)(a.default, {
                ref: A,
                download: n,
                href: t,
                target: m,
                onClick: g,
                className: (0, o.Z)(l().customlink, l()[f], r),
                ...D,
                children: _,
              })
        );
      }
    },
    45419: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return g;
        },
      });
      var i = n(57437),
        s = n(42625),
        r = n(76003),
        l = n.n(r),
        a = n(21360),
        o = n(47984),
        c = n(32913),
        d = n(87580),
        u = n(70499),
        h = n(13259),
        m = n(16609),
        _ = n(53309),
        f = n(44839);
      function g(e) {
        let { color: t } = e,
          { tokenData: n } = (0, m.Z)();
        return (0, i.jsx)(c.Z, {
          className: l().section,
          color: t || "primary",
          children: (0, i.jsxs)(s.Z, {
            className: l().sectionContainer,
            children: [
              (0, i.jsx)("div", {
                children: (0, i.jsx)(o.default, {
                  className: l().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              // (0, i.jsxs)(d.default, {
              //   children: [
              //     "$",
              //     (null == n ? void 0 : n.totalSoldTokensValueUsd)
              //       ? (0, _.HN)(
              //           null == n ? void 0 : n.totalSoldTokensValueUsd
              //         ).replace("M", "")
              //       : "**.**",
              //     " ",
              //     "Million Raised",
              //   ],
              // }),
              (0, i.jsxs)(a.default, {
                className: (0, f.Z)(l().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto engage with the project,",
                  (0, i.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, i.jsxs)("div", {
                className: l().btns,
                children: [
                  (0, i.jsx)(u.default, {
                    href: h.YJ,
                    color: "dark" === t ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, i.jsx)(u.default, {
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
    53309: function (e, t, n) {
      "use strict";
      n.d(t, {
        HN: function () {
          return c;
        },
      });
      let i = (e, t) => {
          let n = (e = e.toString()).split(".");
          if (n.length < 2) return e;
          let i = n[0],
            s = n[1];
          if (s.length <= t) return "";
          let r = s.match(/0*$/);
          if (!r) return "";
          let l = r[0],
            a = s.substring(0, r.index);
          return (
            (l = l.substring(0, t - (s.length - l.length))),
            "".concat(i, ".").concat(a).concat(l)
          );
        },
        s = (e, t, n) => {
          let s = (e = Math.floor(1e5 * e + 0.5) / 1e5).toString(),
            r = 0;
          if ((s.includes(".") && (r = s.split(".")[1].length), r < t)) {
            0 === r && (s += ".");
            for (var l = r; l < t; l++) s += "0";
          }
          if (r > 0) {
            let e = s.split("."),
              r = e[0],
              l = e[1],
              a = (l.match(/[1-9][0-9]*/) || [""])[0],
              o = a.length,
              c = (l.match(/0*/) || [""])[0],
              d = c + a;
            "0" !== r && d.length > n
              ? ((d = d.substring(0, n)),
                (s = "".concat(r, ".").concat(i(d, t))))
              : o > n &&
                ((a = a.substring(0, n)),
                (s = "".concat(r, ".").concat(c).concat(i(a, t))));
          }
          return s;
        },
        r = (e) => {
          let t = e.toString().split(".");
          return (
            (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), t.join(".")
          );
        },
        l = (e, t, n) => r(s(e, t, n)),
        a = (e, t) => (Math.floor(e * 10 ** t) / 10 ** t).toString(),
        o = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 },
        c = (e, t, n, i) => {
          if (isNaN(e) || void 0 === e) return "Calculating...";
          if (e < t) return l(e, n, i);
          let s = (e = Math.floor(e)),
            r = "";
          return (
            Object.entries(o).forEach((t) => {
              let [n, i] = t;
              e / i < 1e3 && e / i >= 1 && ((r = n), (s = e / i));
            }),
            "".concat(a(s, 2)).concat(r)
          );
        };
    },
    19565: function (e) {
      e.exports = {
        explore: "style_explore__jssWw",
        content: "style_content__jF4nj",
        wrapper: "style_wrapper__hMIvk",
        categories: "style_categories__tV3UH",
        title: "style_title__fxvaf",
        active: "style_active___vLg9",
        boxes: "style_boxes___lqG_",
        boxes_item: "style_boxes_item__8dI32",
        icon: "style_icon__6Nb8D",
        texts: "style_texts__XRCFy",
        texts_title: "style_texts_title__6vr2F",
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
    48241: function (e) {
      e.exports = {
        customlink: "style_customlink___bLW0",
        primary: "style_primary__NaDFQ",
        light: "style_light___QhFW",
        dark: "style_dark__F5y8x",
      };
    },
    18803: function (e) {
      e.exports = {
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
        6835, 6364, 5575, 6624, 3752, 7951, 922, 835, 7429, 7749, 6609, 4169,
        7096, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 95889));
      }
    ),
      (_N_E = e.O());
  },
]);
