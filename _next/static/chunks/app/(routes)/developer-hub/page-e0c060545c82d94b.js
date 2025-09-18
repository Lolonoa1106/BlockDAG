(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2982], {
        60667: function (e, t, n) {
            Promise.resolve().then(n.t.bind(n, 231, 23)), Promise.resolve().then(n.bind(n, 64360)), Promise.resolve().then(n.t.bind(n, 88973, 23)), Promise.resolve().then(n.bind(n, 56461)), Promise.resolve().then(n.bind(n, 79554)), Promise.resolve().then(n.bind(n, 85580)), Promise.resolve().then(n.bind(n, 70499)), Promise.resolve().then(n.t.bind(n, 58538, 23)), Promise.resolve().then(n.bind(n, 43615)), Promise.resolve().then(n.bind(n, 47984)), Promise.resolve().then(n.bind(n, 45419)), Promise.resolve().then(n.t.bind(n, 14629, 23)), Promise.resolve().then(n.t.bind(n, 5735, 23)), Promise.resolve().then(n.t.bind(n, 18803, 23)), Promise.resolve().then(n.t.bind(n, 59747, 23)), Promise.resolve().then(n.bind(n, 21360)), Promise.resolve().then(n.bind(n, 87580)), Promise.resolve().then(n.bind(n, 84395))
        },
        56461: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return u
                }
            });
            var s = n(57437),
                i = n(32913),
                r = n(95918),
                l = n.n(r),
                o = n(42625),
                c = n(21360),
                a = n(87580),
                d = n(81079),
                _ = n(47984);

            function u(e) {
                let {} = e, t = [{
                    title: (0, s.jsx)(s.Fragment, {
                        children: "Project Grants"
                    }),
                    icon: "/icons/project-grants.svg",
                    desc: (0, s.jsx)(s.Fragment, {
                        children: "Financial assistance to help launch projects from the ground up."
                    })
                }, {
                    title: (0, s.jsx)(s.Fragment, {
                        children: "Marketing Support"
                    }),
                    icon: "/icons/marketing-support.svg",
                    desc: (0, s.jsx)(s.Fragment, {
                        children: "Assisting projects in reaching their target audience and building market visibility."
                    })
                }, {
                    title: (0, s.jsx)(s.Fragment, {
                        children: "Partner Vouchers"
                    }),
                    icon: "/icons/partner-voucher.svg",
                    desc: (0, s.jsx)(s.Fragment, {
                        children: "Connecting projects with key resources and services through our network of partners."
                    })
                }, {
                    title: (0, s.jsx)(s.Fragment, {
                        children: "Investor Connections"
                    }),
                    icon: "/icons/investor-connections.svg",
                    desc: (0, s.jsx)(s.Fragment, {
                        children: "Enabling access to potential investors to support further growth and expansion."
                    })
                }, {
                    title: (0, s.jsx)(s.Fragment, {
                        children: "Technical Assistance"
                    }),
                    icon: "/icons/technical-assistance.svg",
                    desc: (0, s.jsx)(s.Fragment, {
                        children: "Providing guidance to overcome technical challenges and enhance development."
                    })
                }];
                return (0, s.jsx)(i.Z, {
                    color: "dark",
                    className: l().features,
                    children: (0, s.jsx)(o.Z, {
                        className: l().container,
                        children: (0, s.jsxs)("div", {
                            className: l().content,
                            children: [(0, s.jsxs)("div", {
                                className: l().top,
                                children: [(0, s.jsx)(a.default, {
                                    animate: !0,
                                    direction: "right",
                                    className: l().title,
                                    children: "Startup Hub"
                                }), (0, s.jsx)(c.default, {
                                    size: "md",
                                    className: l().desc,
                                    children: "Our mission is to foster an environment where projects can flourish. Through our comprehensive support ecosystem, we provide a variety of resources tailored to the unique needs of each project, including:"
                                })]
                            }), (0, s.jsx)("div", {
                                className: l().grid,
                                children: t.map((e, t) => (0, s.jsxs)(d.default, {
                                    direction: 0 == t ? "right" : 1 == t ? "bottom" : 2 == t ? "left" : 3 == t ? "right" : 4 == t ? "top" : "left",
                                    directionMobile: "left",
                                    ease: "sine.out",
                                    className: l().gridItem,
                                    children: [(0, s.jsx)("div", {
                                        className: l().gridIcon,
                                        children: (0, s.jsx)(_.default, {
                                            src: e.icon,
                                            alt: "icon",
                                            width: 48,
                                            height: 48
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: l().texts,
                                        children: [(0, s.jsx)(c.default, {
                                            size: "lg",
                                            className: l().gridTitle,
                                            children: e.title
                                        }), (0, s.jsx)(c.default, {
                                            size: "md",
                                            className: l().gridDesc,
                                            children: e.desc
                                        })]
                                    })]
                                }, t))
                            })]
                        })
                    })
                })
            }
        },
        43615: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return h
                }
            });
            var s = n(57437),
                i = n(2265),
                r = n(48241),
                l = n.n(r),
                o = n(87138),
                c = n(44839),
                a = n(78002),
                d = n(16609),
                _ = n(49582),
                u = n(16463);

            function h(e) {
                let {
                    href: t,
                    download: n,
                    className: r,
                    target: h,
                    children: g,
                    color: m = "primary",
                    onClick: f,
                    direction: p,
                    directionMobile: v = p,
                    translateY: y = 0,
                    translateX: b = 0,
                    duration: x = .8,
                    rotateX: j = 0,
                    rotateY: k = 0,
                    ease: w = "back.out",
                    opacity: N = 0,
                    animate: P,
                    start: F = 80,
                    end: C = 60,
                    ...M
                } = e, S = (0, a.Z)(), T = (0, i.useRef)(null), {
                    useGSAP: Z,
                    activatedGsap: E
                } = (0, d.Z)(), I = (0, u.usePathname)();
                return Z(() => {
                    if ("/" == I && E && P && T.current && (null == S ? void 0 : S.width)) {
                        let e, t;
                        (null == S ? void 0 : S.width) < 992 ? (b = "right" == v ? -200 : "left" == v ? 200 : b, y = "top" == v ? 200 : "bottom" == v ? -200 : y) : (y = "top" == p ? 200 : "bottom" == p ? -200 : y, b = "right" == p ? -200 : "left" == p ? 200 : b);
                        let n = _.ZP.timeline({
                            scrollTrigger: {
                                trigger: T.current,
                                start: "top ".concat((null == S ? void 0 : S.width) < 992 ? F - 10 : F, "%"),
                                end: "top ".concat((null == S ? void 0 : S.width) < 992 ? C - 15 : C - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return e = (null == S ? void 0 : S.width) > 1440 ? b : (null == S ? void 0 : S.width) < 992 ? (null == S ? void 0 : S.width) / 500 * b : (null == S ? void 0 : S.width) / 1440 * b, t = (null == S ? void 0 : S.width) > 1440 ? y : (null == S ? void 0 : S.width) < 992 ? (null == S ? void 0 : S.width) / 500 * y : (null == S ? void 0 : S.width) / 1440 * y, n.from(T.current, {
                            translateY: t,
                            translateX: e,
                            rotateX: j,
                            rotateY: k,
                            opacity: N,
                            duration: x,
                            ease: w
                        }).to(T.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [S, E, I]), h && "_blank" == h ? (0, s.jsx)(o.default, {
                    ref: T,
                    download: n,
                    href: t,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: f,
                    className: (0, c.Z)(l().customlink, l()[m], r),
                    ...M,
                    children: g
                }) : (0, s.jsx)(o.default, {
                    ref: T,
                    download: n,
                    href: t,
                    target: h,
                    onClick: f,
                    className: (0, c.Z)(l().customlink, l()[m], r),
                    ...M,
                    children: g
                })
            }
        },
        45419: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return f
                }
            });
            var s = n(57437),
                i = n(42625),
                r = n(76003),
                l = n.n(r),
                o = n(21360),
                c = n(47984),
                a = n(32913),
                d = n(87580),
                _ = n(70499),
                u = n(13259),
                h = n(16609),
                g = n(53309),
                m = n(44839);

            function f(e) {
                let {
                    color: t
                } = e, {
                    tokenData: n
                } = (0, h.Z)();
                return (0, s.jsx)(a.Z, {
                    className: l().section,
                    color: t || "primary",
                    children: (0, s.jsxs)(i.Z, {
                        className: l().sectionContainer,
                        children: [(0, s.jsx)("div", {
                            children: (0, s.jsx)(c.default, {
                                className: l().cube,
                                src: "/images/cube.png",
                                alt: "cube",
                                width: 245,
                                height: 245
                            })
                        }), 
                        // (0, s.jsxs)(d.default, {
                        //     children: ["$", (null == n ? void 0 : n.totalSoldTokensValueUsd) ? (0, g.HN)(null == n ? void 0 : n.totalSoldTokensValueUsd).replace("M", "") : "**.**", " ", "Million Raised"]
                        // }),
                         (0, s.jsxs)(o.default, {
                            className: (0, m.Z)(l().desc, "font-bold"),
                            size: "xl",
                            children: ["Join the BlockDAG crypto engage with the project,", (0, s.jsx)("br", {
                                className: "d-md"
                            }), " and see your contribution grow to new heights."]
                        }), (0, s.jsxs)("div", {
                            className: l().btns,
                            children: [(0, s.jsx)(_.default, {
                                href: u.YJ,
                                color: "dark" === t ? "primary" : "dark",
                                children: "Buy Now"
                            }), (0, s.jsx)(_.default, {
                                color: "transparent-light",
                                href: u.zA,
                                children: "How To Buy"
                            })]
                        })]
                    })
                })
            }
        },
        53309: function (e, t, n) {
            "use strict";
            n.d(t, {
                HN: function () {
                    return a
                }
            });
            let s = (e, t) => {
                    let n = (e = e.toString()).split(".");
                    if (n.length < 2) return e;
                    let s = n[0],
                        i = n[1];
                    if (i.length <= t) return "";
                    let r = i.match(/0*$/);
                    if (!r) return "";
                    let l = r[0],
                        o = i.substring(0, r.index);
                    return l = l.substring(0, t - (i.length - l.length)), "".concat(s, ".").concat(o).concat(l)
                },
                i = (e, t, n) => {
                    let i = (e = Math.floor(1e5 * e + .5) / 1e5).toString(),
                        r = 0;
                    if (i.includes(".") && (r = i.split(".")[1].length), r < t) {
                        0 === r && (i += ".");
                        for (var l = r; l < t; l++) i += "0"
                    }
                    if (r > 0) {
                        let e = i.split("."),
                            r = e[0],
                            l = e[1],
                            o = (l.match(/[1-9][0-9]*/) || [""])[0],
                            c = o.length,
                            a = (l.match(/0*/) || [""])[0],
                            d = a + o;
                        "0" !== r && d.length > n ? (d = d.substring(0, n), i = "".concat(r, ".").concat(s(d, t))) : c > n && (o = o.substring(0, n), i = "".concat(r, ".").concat(a).concat(s(o, t)))
                    }
                    return i
                },
                r = e => {
                    let t = e.toString().split(".");
                    return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
                },
                l = (e, t, n) => r(i(e, t, n)),
                o = (e, t) => (Math.floor(e * 10 ** t) / 10 ** t).toString(),
                c = {
                    K: 1e3,
                    M: 1e6,
                    B: 1e9,
                    T: 1e12
                },
                a = (e, t, n, s) => {
                    if (isNaN(e) || void 0 === e) return "Calculating...";
                    if (e < t) return l(e, n, s);
                    let i = e = Math.floor(e),
                        r = "";
                    return Object.entries(c).forEach(t => {
                        let [n, s] = t;
                        e / s < 1e3 && e / s >= 1 && (r = n, i = e / s)
                    }), "".concat(o(i, 2)).concat(r)
                }
        },
        88973: function (e) {
            e.exports = {
                section: "style_section__GP2Eb",
                container: "style_container__TUSnW",
                content: "style_content__C_kLd",
                box: "style_box__H1EJd",
                title: "style_title__Simqe",
                desc: "style_desc__gJLyu"
            }
        },
        95918: function (e) {
            e.exports = {
                features: "style_features__XgGLU",
                container: "style_container__Ggco3",
                content: "style_content__dZMRK",
                top: "style_top__bWvQU",
                title: "style_title__83jzM",
                desc: "style_desc__qcFgy",
                grid: "style_grid__AfO6w",
                gridItem: "style_gridItem__Vt2Ri",
                texts: "style_texts__b4XQa",
                gridTitle: "style_gridTitle__yR0Rf",
                gridDesc: "style_gridDesc__zzp81",
                gridIcon: "style_gridIcon__eWkPB"
            }
        },
        48241: function (e) {
            e.exports = {
                customlink: "style_customlink___bLW0",
                primary: "style_primary__NaDFQ",
                light: "style_light___QhFW",
                dark: "style_dark__F5y8x"
            }
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
                primary: "style_primary__V_I_D"
            }
        },
        76003: function (e) {
            e.exports = {
                section: "style_section__K46ck",
                sectionContainer: "style_sectionContainer__oErws",
                desc: "style_desc___bTux",
                btns: "style_btns__eS32b",
                cube: "style_cube__p2p8S"
            }
        }
    },
    function (e) {
        e.O(0, [3752, 5575, 6624, 6835, 6364, 922, 835, 7429, 7749, 6609, 4169, 7096, 4360, 2971, 7023, 1744], function () {
            return e(e.s = 60667)
        }), _N_E = e.O()
    }
]);