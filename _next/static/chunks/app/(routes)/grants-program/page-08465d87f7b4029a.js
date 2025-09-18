(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5029], {
        47536: function (t, e, n) {
            Promise.resolve().then(n.t.bind(n, 231, 23)), Promise.resolve().then(n.bind(n, 70499)), Promise.resolve().then(n.t.bind(n, 58538, 23)), Promise.resolve().then(n.t.bind(n, 59747, 23)), Promise.resolve().then(n.t.bind(n, 9784, 23)), Promise.resolve().then(n.t.bind(n, 340, 23)), Promise.resolve().then(n.t.bind(n, 73411, 23)), Promise.resolve().then(n.t.bind(n, 18803, 23)), Promise.resolve().then(n.t.bind(n, 98801, 23)), Promise.resolve().then(n.bind(n, 47984)), Promise.resolve().then(n.bind(n, 45419)), Promise.resolve().then(n.t.bind(n, 14629, 23)), Promise.resolve().then(n.t.bind(n, 14566, 23)), Promise.resolve().then(n.bind(n, 21360)), Promise.resolve().then(n.bind(n, 87580)), Promise.resolve().then(n.bind(n, 84395))
        },
        87138: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return r.a
                }
            });
            var l = n(231),
                r = n.n(l)
        },
        70499: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return h
                }
            });
            var l = n(57437),
                r = n(87138),
                s = n(60231),
                i = n.n(s),
                o = n(44839),
                _ = n(2265),
                c = n(16609),
                a = n(49582),
                d = n(78002),
                u = n(16463);

            function h(t) {
                let {
                    href: e,
                    className: n,
                    children: s,
                    target: h,
                    onClick: f,
                    direction: y,
                    directionMobile: m = y,
                    translateY: g = 0,
                    translateX: v = 0,
                    duration: w = .8,
                    rotateX: p = 0,
                    rotateY: b = 0,
                    ease: x = "back.out",
                    opacity: k = 0,
                    animate: Z,
                    start: N = 80,
                    end: j = 60,
                    color: E = "primary",
                    disabled: P,
                    type: T = "button"
                } = t, Y = (0, _.useRef)(null), X = (0, _.useRef)(null), C = (0, d.Z)(), {
                    useGSAP: B,
                    activatedGsap: L
                } = (0, c.Z)(), S = (0, u.usePathname)();
                return B(() => {
                    if ("/" == S) {
                        let t;
                        if (Y.current && (t = Y), X.current && (t = X), L && Z && t && t.current && (null == C ? void 0 : C.width)) {
                            let e, n;
                            (null == C ? void 0 : C.width) < 992 ? (v = "right" == m ? -200 : "left" == m ? 200 : v, g = "top" == m ? 200 : "bottom" == m ? -200 : g) : (g = "top" == y ? 200 : "bottom" == y ? -200 : g, v = "right" == y ? -200 : "left" == y ? 200 : v);
                            let l = a.ZP.timeline({
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "top ".concat((null == C ? void 0 : C.width) < 992 ? N - 10 : N, "%"),
                                    end: "top ".concat((null == C ? void 0 : C.width) < 992 ? j - 15 : j - 10, "%"),
                                    scrub: 1,
                                    markers: !1
                                }
                            });
                            return e = (null == C ? void 0 : C.width) > 1440 ? v : (null == C ? void 0 : C.width) < 992 ? (null == C ? void 0 : C.width) / 500 * v : (null == C ? void 0 : C.width) / 1440 * v, n = (null == C ? void 0 : C.width) > 1440 ? g : (null == C ? void 0 : C.width) < 992 ? (null == C ? void 0 : C.width) / 500 * g : (null == C ? void 0 : C.width) / 1440 * g, l.from(t.current, {
                                translateY: n,
                                translateX: e,
                                rotateX: p,
                                rotateY: b,
                                opacity: k,
                                duration: w,
                                ease: x
                            }).to(t.current, {
                                translateY: 0,
                                rotateX: 0,
                                rotateY: 0,
                                translateX: 0,
                                opacity: 1
                            }), () => l.kill()
                        }
                    }
                }, [L, S]), (0, l.jsx)(l.Fragment, {
                    children: e ? h && "_blank" == h ? (0, l.jsxs)(r.default, {
                        ref: X,
                        href: e,
                        target: h,
                        rel: "noopener noreferrer",
                        prefetch: !1,
                        onClick: f,
                        className: (0, o.Z)(i().button, n, i()[E]),
                        children: [s, (0, l.jsx)("span", {
                            className: i().wrap
                        })]
                    }) : (0, l.jsxs)(r.default, {
                        ref: X,
                        href: e,
                        target: h,
                        rel: "",
                        onClick: f,
                        className: (0, o.Z)(i().button, n, i()[E]),
                        children: [s, (0, l.jsx)("span", {
                            className: i().wrap
                        })]
                    }) : (0, l.jsxs)("button", {
                        type: T,
                        disabled: P,
                        ref: Y,
                        onClick: f,
                        className: (0, o.Z)(i().button, n, i()[E]),
                        children: [s, (0, l.jsx)("span", {
                            className: i().wrap
                        })]
                    })
                })
            }
        },
        42625: function (t, e, n) {
            "use strict";
            var l = n(57437),
                r = n(44839),
                s = n(58538),
                i = n.n(s);
            let o = (0, n(2265).forwardRef)((t, e) => {
                let {
                    children: n,
                    className: s,
                    size: o,
                    classic: _,
                    ...c
                } = t;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("div", {
                        ref: e,
                        className: (0, r.Z)(i().container, s, o && i()[o], _ && i().classic),
                        ...c,
                        children: n
                    })
                })
            });
            o.displayName = "Container", e.Z = o
        },
        47984: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return c
                }
            });
            var l = n(57437),
                r = n(79124),
                s = n(66648);
            n(2265);
            var i = n(69665),
                o = n.n(i),
                _ = n(44839);

            function c(t) {
                let {
                    alt: e = "BlockDAG",
                    src: n,
                    width: i,
                    height: c,
                    hero: a,
                    className: d,
                    ...u
                } = t, h = (0, r.Z)();
                return (0, l.jsx)(l.Fragment, {
                    children: a || u.priority ? (0, l.jsx)(s.default, {
                        className: (0, _.Z)(o().img, d),
                        src: n,
                        alt: e,
                        width: i || 0,
                        height: c || 0,
                        ...u
                    }, 1) : h ? (0, l.jsx)(s.default, {
                        className: (0, _.Z)(o().img, d),
                        src: n,
                        alt: e,
                        width: 0,
                        height: 0,
                        ...u
                    }, 2) : (0, l.jsx)(s.default, {
                        className: (0, _.Z)(o().loadingImg, d),
                        src: "/cube.webp",
                        alt: e,
                        width: 0,
                        height: 0,
                        ...u
                    }, 3)
                })
            }
        },
        45419: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return m
                }
            });
            var l = n(57437),
                r = n(42625),
                s = n(76003),
                i = n.n(s),
                o = n(21360),
                _ = n(47984),
                c = n(32913),
                a = n(87580),
                d = n(70499),
                u = n(13259),
                h = n(16609),
                f = n(53309),
                y = n(44839);

            function m(t) {
                let {
                    color: e
                } = t, {
                    tokenData: n
                } = (0, h.Z)();
                return (0, l.jsx)(c.Z, {
                    className: i().section,
                    color: e || "primary",
                    children: (0, l.jsxs)(r.Z, {
                        className: i().sectionContainer,
                        children: [(0, l.jsx)("div", {
                            children: (0, l.jsx)(_.default, {
                                className: i().cube,
                                src: "/images/cube.png",
                                alt: "cube",
                                width: 245,
                                height: 245
                            })
                        }),
                        //  (0, l.jsxs)(a.default, {
                        //     children: ["$", (null == n ? void 0 : n.totalSoldTokensValueUsd) ? (0, f.HN)(null == n ? void 0 : n.totalSoldTokensValueUsd).replace("M", "") : "**.**", " ", "Million Raised"]
                        // }), 
                        (0, l.jsxs)(o.default, {
                            className: (0, y.Z)(i().desc, "font-bold"),
                            size: "xl",
                            children: ["Join the BlockDAG crypto engage with the project,", (0, l.jsx)("br", {
                                className: "d-md"
                            }), " and see your contribution grow to new heights."]
                        }), (0, l.jsxs)("div", {
                            className: i().btns,
                            children: [(0, l.jsx)(d.default, {
                                href: u.YJ,
                                color: "dark" === e ? "primary" : "dark",
                                children: "Buy Now"
                            }), (0, l.jsx)(d.default, {
                                color: "transparent-light",
                                href: u.zA,
                                children: "How To Buy"
                            })]
                        })]
                    })
                })
            }
        },
        32913: function (t, e, n) {
            "use strict";
            var l = n(57437),
                r = n(44839),
                s = n(14629),
                i = n.n(s);
            let o = (0, n(2265).forwardRef)((t, e) => {
                let {
                    children: n,
                    className: s,
                    color: o = "dark",
                    ..._
                } = t;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("section", {
                        ref: e,
                        className: (0, r.Z)(i().section, i()[o], s),
                        ..._,
                        children: n
                    })
                })
            });
            o.displayName = "Section", e.Z = o
        },
        21360: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return u
                }
            });
            var l = n(57437),
                r = n(2265),
                s = n(8544),
                i = n.n(s),
                o = n(44839),
                _ = n(16609),
                c = n(49582),
                a = n(78002),
                d = n(16463);

            function u(t) {
                let {
                    children: e,
                    component: n = "p",
                    size: s = "md",
                    className: u,
                    style: h,
                    direction: f,
                    directionMobile: y = f,
                    translateY: m = 0,
                    translateX: g = 0,
                    duration: v = .8,
                    rotateX: w = 0,
                    rotateY: p = 0,
                    ease: b = "back.out",
                    opacity: x = 0,
                    animate: k,
                    start: Z = 80,
                    end: N = 60,
                    onClick: j
                } = t, E = (0, r.useRef)(null), P = (0, a.Z)(), {
                    useGSAP: T,
                    activatedGsap: Y
                } = (0, _.Z)(), X = (0, d.usePathname)();
                return T(() => {
                    if ("/" == X && Y && k && E.current && (null == P ? void 0 : P.width)) {
                        let t, e;
                        (null == P ? void 0 : P.width) < 992 ? (g = "right" == y ? -200 : "left" == y ? 200 : g, m = "top" == y ? 200 : "bottom" == y ? -200 : m) : (m = "top" == f ? 200 : "bottom" == f ? -200 : m, g = "right" == f ? -200 : "left" == f ? 200 : g);
                        let n = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: E.current,
                                start: "top ".concat((null == P ? void 0 : P.width) < 992 ? Z - 10 : Z, "%"),
                                end: "top ".concat((null == P ? void 0 : P.width) < 992 ? N - 15 : N - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == P ? void 0 : P.width) > 1440 ? g : (null == P ? void 0 : P.width) < 992 ? (null == P ? void 0 : P.width) / 500 * g : (null == P ? void 0 : P.width) / 1440 * g, e = (null == P ? void 0 : P.width) > 1440 ? m : (null == P ? void 0 : P.width) < 992 ? (null == P ? void 0 : P.width) / 500 * m : (null == P ? void 0 : P.width) / 1440 * m, n.from(E.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: w,
                            rotateY: p,
                            opacity: x,
                            duration: v,
                            ease: b
                        }).to(E.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [Y, X]), (0, l.jsx)(n, {
                    onClick: j,
                    ref: E,
                    className: (0, o.Z)(i().text, i()[s], u),
                    style: h,
                    children: e
                })
            }
        },
        87580: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return h
                }
            });
            var l = n(57437),
                r = n(2265),
                s = n(15681),
                i = n.n(s),
                o = n(44839),
                _ = n(16700),
                c = n(78002),
                a = n(16609),
                d = n(49582),
                u = n(16463);

            function h(t) {
                let {
                    children: e,
                    size: n = "md",
                    className: s,
                    family: h = "secondary",
                    component: f = "md" == n ? "h2" : "h6",
                    variant: y,
                    uppercase: m,
                    direction: g,
                    directionMobile: v = g,
                    translateY: w = 0,
                    translateX: p = 0,
                    duration: b = .8,
                    rotateX: x = 0,
                    rotateY: k = 0,
                    ease: Z = "back.out",
                    opacity: N = 0,
                    animate: j,
                    start: E = 80,
                    end: P = 60
                } = t, T = (0, r.useRef)(null), Y = (0, c.Z)(), {
                    useGSAP: X,
                    activatedGsap: C
                } = (0, a.Z)(), B = (0, u.usePathname)();
                return X(() => {
                    if ("/" == B && C && j && T.current && (null == Y ? void 0 : Y.width)) {
                        let t, e;
                        (null == Y ? void 0 : Y.width) < 992 ? (p = "right" == v ? -200 : "left" == v ? 200 : p, w = "top" == v ? 200 : "bottom" == v ? -200 : w) : (w = "top" == g ? 200 : "bottom" == g ? -200 : w, p = "right" == g ? -200 : "left" == g ? 200 : p);
                        let n = d.ZP.timeline({
                            scrollTrigger: {
                                trigger: T.current,
                                start: "top ".concat((null == Y ? void 0 : Y.width) < 992 ? E - 10 : E, "%"),
                                end: "top ".concat((null == Y ? void 0 : Y.width) < 992 ? P - 15 : P - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == Y ? void 0 : Y.width) > 1440 ? p : (null == Y ? void 0 : Y.width) < 992 ? (null == Y ? void 0 : Y.width) / 500 * p : (null == Y ? void 0 : Y.width) / 1440 * p, e = (null == Y ? void 0 : Y.width) > 1440 ? w : (null == Y ? void 0 : Y.width) < 992 ? (null == Y ? void 0 : Y.width) / 500 * w : (null == Y ? void 0 : Y.width) / 1440 * w, n.from(T.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: x,
                            rotateY: k,
                            opacity: N,
                            duration: b,
                            ease: Z
                        }).to(T.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [C, B]), (0, l.jsx)(f, {
                    ref: T,
                    className: (0, o.Z)(i().title, i()[y || f], "secondary" == h ? _.BD : _.T$, i()[n], s, m ? "uppercase" : ""),
                    children: e
                })
            }
        },
        84395: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return u
                }
            });
            var l = n(57437),
                r = n(2265),
                s = n(15681),
                i = n.n(s),
                o = n(44839),
                _ = n(78002),
                c = n(16609),
                a = n(49582),
                d = n(16463);

            function u(t) {
                let {
                    children: e,
                    component: n = "h5",
                    className: s,
                    color: u = "primary",
                    direction: h,
                    directionMobile: f = h,
                    translateY: y = 0,
                    translateX: m = 0,
                    duration: g = .8,
                    rotateX: v = 0,
                    rotateY: w = 0,
                    ease: p = "back.out",
                    opacity: b = 0,
                    animate: x,
                    start: k = 80,
                    end: Z = 60
                } = t, N = (0, r.useRef)(null), j = (0, _.Z)(), {
                    useGSAP: E,
                    activatedGsap: P
                } = (0, c.Z)(), T = (0, d.usePathname)();
                return E(() => {
                    if ("/" == T && P && x && N.current && (null == j ? void 0 : j.width)) {
                        let t, e;
                        (null == j ? void 0 : j.width) < 992 ? (m = "right" == f ? -200 : "left" == f ? 200 : m, y = "top" == f ? 200 : "bottom" == f ? -200 : y) : (y = "top" == h ? 200 : "bottom" == h ? -200 : y, m = "right" == h ? -200 : "left" == h ? 200 : m);
                        let n = a.ZP.timeline({
                            scrollTrigger: {
                                trigger: N.current,
                                start: "top ".concat((null == j ? void 0 : j.width) < 992 ? k - 10 : k, "%"),
                                end: "top ".concat((null == j ? void 0 : j.width) < 992 ? Z - 15 : Z - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == j ? void 0 : j.width) > 1440 ? m : (null == j ? void 0 : j.width) < 992 ? (null == j ? void 0 : j.width) / 500 * m : (null == j ? void 0 : j.width) / 1440 * m, e = (null == j ? void 0 : j.width) > 1440 ? y : (null == j ? void 0 : j.width) < 992 ? (null == j ? void 0 : j.width) / 500 * y : (null == j ? void 0 : j.width) / 1440 * y, n.from(N.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: v,
                            rotateY: w,
                            opacity: b,
                            duration: g,
                            ease: p
                        }).to(N.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [P, T]), (0, l.jsx)(n, {
                    ref: N,
                    className: (0, o.Z)(i().subtitle, i()[u], s),
                    children: e
                })
            }
        },
        16700: function (t, e, n) {
            "use strict";
            n.d(e, {
                BD: function () {
                    return a
                },
                T$: function () {
                    return c
                }
            });
            var l = n(37983),
                r = n.n(l),
                s = n(68941),
                i = n.n(s),
                o = n(68425),
                _ = n.n(o);
            let c = r().className,
                a = i().className;
            _().className
        },
        79124: function (t, e, n) {
            "use strict";
            var l = n(2265),
                r = n(44630);
            e.Z = () => {
                let [t, e] = (0, l.useState)(!1), n = (0, r.Z)(), s = () => {
                    e(!0)
                };
                return (0, l.useEffect)(() => {
                    n > 1 && e(!0)
                }, [n]), (0, l.useEffect)(() => (window.addEventListener("mousemove", s), window.addEventListener("click", s), window.addEventListener("touchmove", s), window.addEventListener("touchstart", s), window.addEventListener("touchend", s), () => {
                    window.removeEventListener("mousemove", s), window.removeEventListener("click", s), window.removeEventListener("touchmove", s), window.removeEventListener("touchstart", s), window.removeEventListener("touchend", s)
                }), []), t
            }
        },
        44630: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return r
                }
            });
            var l = n(2265);

            function r() {
                let [t, e] = (0, l.useState)(0);
                return (0, l.useEffect)(() => {
                    {
                        let t = () => {
                            e(window.scrollY)
                        };
                        return window.addEventListener("scroll", t), () => {
                            window.removeEventListener("scroll", t)
                        }
                    }
                }, []), t
            }
        },
        53309: function (t, e, n) {
            "use strict";
            n.d(e, {
                HN: function () {
                    return c
                }
            });
            let l = (t, e) => {
                    let n = (t = t.toString()).split(".");
                    if (n.length < 2) return t;
                    let l = n[0],
                        r = n[1];
                    if (r.length <= e) return "";
                    let s = r.match(/0*$/);
                    if (!s) return "";
                    let i = s[0],
                        o = r.substring(0, s.index);
                    return i = i.substring(0, e - (r.length - i.length)), "".concat(l, ".").concat(o).concat(i)
                },
                r = (t, e, n) => {
                    let r = (t = Math.floor(1e5 * t + .5) / 1e5).toString(),
                        s = 0;
                    if (r.includes(".") && (s = r.split(".")[1].length), s < e) {
                        0 === s && (r += ".");
                        for (var i = s; i < e; i++) r += "0"
                    }
                    if (s > 0) {
                        let t = r.split("."),
                            s = t[0],
                            i = t[1],
                            o = (i.match(/[1-9][0-9]*/) || [""])[0],
                            _ = o.length,
                            c = (i.match(/0*/) || [""])[0],
                            a = c + o;
                        "0" !== s && a.length > n ? (a = a.substring(0, n), r = "".concat(s, ".").concat(l(a, e))) : _ > n && (o = o.substring(0, n), r = "".concat(s, ".").concat(c).concat(l(o, e)))
                    }
                    return r
                },
                s = t => {
                    let e = t.toString().split(".");
                    return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), e.join(".")
                },
                i = (t, e, n) => s(r(t, e, n)),
                o = (t, e) => (Math.floor(t * 10 ** e) / 10 ** e).toString(),
                _ = {
                    K: 1e3,
                    M: 1e6,
                    B: 1e9,
                    T: 1e12
                },
                c = (t, e, n, l) => {
                    if (isNaN(t) || void 0 === t) return "Calculating...";
                    if (t < e) return i(t, n, l);
                    let r = t = Math.floor(t),
                        s = "";
                    return Object.entries(_).forEach(e => {
                        let [n, l] = e;
                        t / l < 1e3 && t / l >= 1 && (s = n, r = t / l)
                    }), "".concat(o(r, 2)).concat(s)
                }
        },
        73411: function (t) {
            t.exports = {
                section: "style_section__IQuiS",
                content: "style_content__Qz0rE",
                card: "style_card__0KSOx",
                icon: "style_icon__VnWlb",
                boxContent: "style_boxContent__LN5bl",
                title: "style_title__KaVFi",
                desc: "style_desc__kLiqP",
                selectionProcess: "style_selectionProcess__2R9fk",
                selectionTitle: "style_selectionTitle__XexNU",
                boxes: "style_boxes__wr7na",
                connect: "style_connect__CBZop",
                texts: "style_texts__tTeed",
                list: "style_list__dCU6U",
                item: "style_item__joVfp",
                bottomText: "style_bottomText__SkRQI"
            }
        },
        14566: function (t) {
            t.exports = {
                section: "style_section__6AOXo",
                content: "style_content__sbPHz",
                card: "style_card__OyTC6"
            }
        },
        340: function (t) {
            t.exports = {
                section: "style_section__LV9xQ",
                content: "style_content__7awYL"
            }
        },
        98801: function (t) {
            t.exports = {
                section: "style_section__k4tzU",
                content: "style_content__i424f",
                title: "style_title__WDaW9",
                right: "style_right__n1EJg",
                rightTopTexts: "style_rightTopTexts__J_hFw",
                rightTitle: "style_rightTitle__kWi55",
                boxes: "style_boxes__fMkCk"
            }
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
                "transparent-primary": "style_transparent-primary__q5o8s"
            }
        },
        9784: function (t) {
            t.exports = {
                card: "style_card__Pxh7T",
                icon: "style_icon__lYd_T",
                vertical: "style_vertical__gD7An",
                verticalMobile: "style_verticalMobile__FySfF",
                shadow: "style_shadow__BN9sk",
                shadowTop: "style_shadowTop__ARDte",
                content: "style_content__YtA0e",
                title: "style_title__KEKbX",
                desc: "style_desc__dVqU2",
                white: "style_white__eOgEV",
                light: "style_light__ztwkE",
                lightDescWhite: "style_lightDescWhite__CnBc6",
                dark: "style_dark__ZeUOf"
            }
        },
        58538: function (t) {
            t.exports = {
                container: "style_container__O7qie",
                lg: "style_lg__uab1X",
                sm: "style_sm__gJ0_G",
                classic: "style_classic___AOOd"
            }
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
                primary: "style_primary__V_I_D"
            }
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
                imgWrapper: "style_imgWrapper__2Ez5g"
            }
        },
        69665: function (t) {
            t.exports = {
                loadingImg: "style_loadingImg__SX0hM",
                img: "style_img__foiEq"
            }
        },
        76003: function (t) {
            t.exports = {
                section: "style_section__K46ck",
                sectionContainer: "style_sectionContainer__oErws",
                desc: "style_desc___bTux",
                btns: "style_btns__eS32b",
                cube: "style_cube__p2p8S"
            }
        },
        14629: function (t) {
            t.exports = {
                section: "style_section__09_zn",
                dark: "style_dark__R3RMO",
                light: "style_light__xXq5a",
                white: "style_white__ZsX2_",
                primary: "style_primary__zErJA"
            }
        },
        8544: function (t) {
            t.exports = {
                text: "style_text__Z44aT",
                xs: "style_xs__fVs46",
                sm: "style_sm__RimS5",
                md: "style_md__ZQhe4",
                lg: "style_lg__AdDq0",
                xl: "style_xl__HaD9x"
            }
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
                light: "style_light__4bx5s"
            }
        }
    },
    function (t) {
        t.O(0, [6835, 3752, 5080, 1128, 5575, 6624, 922, 835, 7429, 6609, 2971, 7023, 1744], function () {
            return t(t.s = 47536)
        }), _N_E = t.O()
    }
]);