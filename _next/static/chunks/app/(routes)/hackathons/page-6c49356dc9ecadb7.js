(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [566], {
        80690: function (t, e, n) {
            Promise.resolve().then(n.t.bind(n, 231, 23)), Promise.resolve().then(n.t.bind(n, 58538, 23)), Promise.resolve().then(n.bind(n, 47984)), Promise.resolve().then(n.bind(n, 45419)), Promise.resolve().then(n.t.bind(n, 14629, 23)), Promise.resolve().then(n.t.bind(n, 59747, 23)), Promise.resolve().then(n.t.bind(n, 16909, 23)), Promise.resolve().then(n.t.bind(n, 18803, 23)), Promise.resolve().then(n.t.bind(n, 9784, 23)), Promise.resolve().then(n.t.bind(n, 51122, 23)), Promise.resolve().then(n.t.bind(n, 12354, 23)), Promise.resolve().then(n.t.bind(n, 42348, 23)), Promise.resolve().then(n.bind(n, 21360)), Promise.resolve().then(n.bind(n, 87580)), Promise.resolve().then(n.bind(n, 84395))
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
                a = n(16609),
                c = n(49582),
                d = n(78002),
                u = n(16463);

            function h(t) {
                let {
                    href: e,
                    className: n,
                    children: s,
                    target: h,
                    onClick: m,
                    direction: y,
                    directionMobile: f = y,
                    translateY: v = 0,
                    translateX: g = 0,
                    duration: p = .8,
                    rotateX: w = 0,
                    rotateY: b = 0,
                    ease: x = "back.out",
                    opacity: k = 0,
                    animate: Z,
                    start: j = 80,
                    end: N = 60,
                    color: E = "primary",
                    disabled: P,
                    type: T = "button"
                } = t, X = (0, _.useRef)(null), Y = (0, _.useRef)(null), B = (0, d.Z)(), {
                    useGSAP: L,
                    activatedGsap: S
                } = (0, a.Z)(), C = (0, u.usePathname)();
                return L(() => {
                    if ("/" == C) {
                        let t;
                        if (X.current && (t = X), Y.current && (t = Y), S && Z && t && t.current && (null == B ? void 0 : B.width)) {
                            let e, n;
                            (null == B ? void 0 : B.width) < 992 ? (g = "right" == f ? -200 : "left" == f ? 200 : g, v = "top" == f ? 200 : "bottom" == f ? -200 : v) : (v = "top" == y ? 200 : "bottom" == y ? -200 : v, g = "right" == y ? -200 : "left" == y ? 200 : g);
                            let l = c.ZP.timeline({
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "top ".concat((null == B ? void 0 : B.width) < 992 ? j - 10 : j, "%"),
                                    end: "top ".concat((null == B ? void 0 : B.width) < 992 ? N - 15 : N - 10, "%"),
                                    scrub: 1,
                                    markers: !1
                                }
                            });
                            return e = (null == B ? void 0 : B.width) > 1440 ? g : (null == B ? void 0 : B.width) < 992 ? (null == B ? void 0 : B.width) / 500 * g : (null == B ? void 0 : B.width) / 1440 * g, n = (null == B ? void 0 : B.width) > 1440 ? v : (null == B ? void 0 : B.width) < 992 ? (null == B ? void 0 : B.width) / 500 * v : (null == B ? void 0 : B.width) / 1440 * v, l.from(t.current, {
                                translateY: n,
                                translateX: e,
                                rotateX: w,
                                rotateY: b,
                                opacity: k,
                                duration: p,
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
                }, [S, C]), (0, l.jsx)(l.Fragment, {
                    children: e ? h && "_blank" == h ? (0, l.jsxs)(r.default, {
                        ref: Y,
                        href: e,
                        target: h,
                        rel: "noopener noreferrer",
                        prefetch: !1,
                        onClick: m,
                        className: (0, o.Z)(i().button, n, i()[E]),
                        children: [s, (0, l.jsx)("span", {
                            className: i().wrap
                        })]
                    }) : (0, l.jsxs)(r.default, {
                        ref: Y,
                        href: e,
                        target: h,
                        rel: "",
                        onClick: m,
                        className: (0, o.Z)(i().button, n, i()[E]),
                        children: [s, (0, l.jsx)("span", {
                            className: i().wrap
                        })]
                    }) : (0, l.jsxs)("button", {
                        type: T,
                        disabled: P,
                        ref: X,
                        onClick: m,
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
                    ...a
                } = t;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("div", {
                        ref: e,
                        className: (0, r.Z)(i().container, s, o && i()[o], _ && i().classic),
                        ...a,
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
                    return a
                }
            });
            var l = n(57437),
                r = n(79124),
                s = n(66648);
            n(2265);
            var i = n(69665),
                o = n.n(i),
                _ = n(44839);

            function a(t) {
                let {
                    alt: e = "BlockDAG",
                    src: n,
                    width: i,
                    height: a,
                    hero: c,
                    className: d,
                    ...u
                } = t, h = (0, r.Z)();
                return (0, l.jsx)(l.Fragment, {
                    children: c || u.priority ? (0, l.jsx)(s.default, {
                        className: (0, _.Z)(o().img, d),
                        src: n,
                        alt: e,
                        width: i || 0,
                        height: a || 0,
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
                    return f
                }
            });
            var l = n(57437),
                r = n(42625),
                s = n(76003),
                i = n.n(s),
                o = n(21360),
                _ = n(47984),
                a = n(32913),
                c = n(87580),
                d = n(70499),
                u = n(13259),
                h = n(16609),
                m = n(53309),
                y = n(44839);

            function f(t) {
                let {
                    color: e
                } = t, {
                    tokenData: n
                } = (0, h.Z)();
                return (0, l.jsx)(a.Z, {
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
                        // (0, l.jsxs)(c.default, {
                        //     children: ["$", (null == n ? void 0 : n.totalSoldTokensValueUsd) ? (0, m.HN)(null == n ? void 0 : n.totalSoldTokensValueUsd).replace("M", "") : "**.**", " ", "Million Raised"]
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
                a = n(49582),
                c = n(78002),
                d = n(16463);

            function u(t) {
                let {
                    children: e,
                    component: n = "p",
                    size: s = "md",
                    className: u,
                    style: h,
                    direction: m,
                    directionMobile: y = m,
                    translateY: f = 0,
                    translateX: v = 0,
                    duration: g = .8,
                    rotateX: p = 0,
                    rotateY: w = 0,
                    ease: b = "back.out",
                    opacity: x = 0,
                    animate: k,
                    start: Z = 80,
                    end: j = 60,
                    onClick: N
                } = t, E = (0, r.useRef)(null), P = (0, c.Z)(), {
                    useGSAP: T,
                    activatedGsap: X
                } = (0, _.Z)(), Y = (0, d.usePathname)();
                return T(() => {
                    if ("/" == Y && X && k && E.current && (null == P ? void 0 : P.width)) {
                        let t, e;
                        (null == P ? void 0 : P.width) < 992 ? (v = "right" == y ? -200 : "left" == y ? 200 : v, f = "top" == y ? 200 : "bottom" == y ? -200 : f) : (f = "top" == m ? 200 : "bottom" == m ? -200 : f, v = "right" == m ? -200 : "left" == m ? 200 : v);
                        let n = a.ZP.timeline({
                            scrollTrigger: {
                                trigger: E.current,
                                start: "top ".concat((null == P ? void 0 : P.width) < 992 ? Z - 10 : Z, "%"),
                                end: "top ".concat((null == P ? void 0 : P.width) < 992 ? j - 15 : j - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == P ? void 0 : P.width) > 1440 ? v : (null == P ? void 0 : P.width) < 992 ? (null == P ? void 0 : P.width) / 500 * v : (null == P ? void 0 : P.width) / 1440 * v, e = (null == P ? void 0 : P.width) > 1440 ? f : (null == P ? void 0 : P.width) < 992 ? (null == P ? void 0 : P.width) / 500 * f : (null == P ? void 0 : P.width) / 1440 * f, n.from(E.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: p,
                            rotateY: w,
                            opacity: x,
                            duration: g,
                            ease: b
                        }).to(E.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [X, Y]), (0, l.jsx)(n, {
                    onClick: N,
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
                a = n(78002),
                c = n(16609),
                d = n(49582),
                u = n(16463);

            function h(t) {
                let {
                    children: e,
                    size: n = "md",
                    className: s,
                    family: h = "secondary",
                    component: m = "md" == n ? "h2" : "h6",
                    variant: y,
                    uppercase: f,
                    direction: v,
                    directionMobile: g = v,
                    translateY: p = 0,
                    translateX: w = 0,
                    duration: b = .8,
                    rotateX: x = 0,
                    rotateY: k = 0,
                    ease: Z = "back.out",
                    opacity: j = 0,
                    animate: N,
                    start: E = 80,
                    end: P = 60
                } = t, T = (0, r.useRef)(null), X = (0, a.Z)(), {
                    useGSAP: Y,
                    activatedGsap: B
                } = (0, c.Z)(), L = (0, u.usePathname)();
                return Y(() => {
                    if ("/" == L && B && N && T.current && (null == X ? void 0 : X.width)) {
                        let t, e;
                        (null == X ? void 0 : X.width) < 992 ? (w = "right" == g ? -200 : "left" == g ? 200 : w, p = "top" == g ? 200 : "bottom" == g ? -200 : p) : (p = "top" == v ? 200 : "bottom" == v ? -200 : p, w = "right" == v ? -200 : "left" == v ? 200 : w);
                        let n = d.ZP.timeline({
                            scrollTrigger: {
                                trigger: T.current,
                                start: "top ".concat((null == X ? void 0 : X.width) < 992 ? E - 10 : E, "%"),
                                end: "top ".concat((null == X ? void 0 : X.width) < 992 ? P - 15 : P - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == X ? void 0 : X.width) > 1440 ? w : (null == X ? void 0 : X.width) < 992 ? (null == X ? void 0 : X.width) / 500 * w : (null == X ? void 0 : X.width) / 1440 * w, e = (null == X ? void 0 : X.width) > 1440 ? p : (null == X ? void 0 : X.width) < 992 ? (null == X ? void 0 : X.width) / 500 * p : (null == X ? void 0 : X.width) / 1440 * p, n.from(T.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: x,
                            rotateY: k,
                            opacity: j,
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
                }, [B, L]), (0, l.jsx)(m, {
                    ref: T,
                    className: (0, o.Z)(i().title, i()[y || m], "secondary" == h ? _.BD : _.T$, i()[n], s, f ? "uppercase" : ""),
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
                a = n(16609),
                c = n(49582),
                d = n(16463);

            function u(t) {
                let {
                    children: e,
                    component: n = "h5",
                    className: s,
                    color: u = "primary",
                    direction: h,
                    directionMobile: m = h,
                    translateY: y = 0,
                    translateX: f = 0,
                    duration: v = .8,
                    rotateX: g = 0,
                    rotateY: p = 0,
                    ease: w = "back.out",
                    opacity: b = 0,
                    animate: x,
                    start: k = 80,
                    end: Z = 60
                } = t, j = (0, r.useRef)(null), N = (0, _.Z)(), {
                    useGSAP: E,
                    activatedGsap: P
                } = (0, a.Z)(), T = (0, d.usePathname)();
                return E(() => {
                    if ("/" == T && P && x && j.current && (null == N ? void 0 : N.width)) {
                        let t, e;
                        (null == N ? void 0 : N.width) < 992 ? (f = "right" == m ? -200 : "left" == m ? 200 : f, y = "top" == m ? 200 : "bottom" == m ? -200 : y) : (y = "top" == h ? 200 : "bottom" == h ? -200 : y, f = "right" == h ? -200 : "left" == h ? 200 : f);
                        let n = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: j.current,
                                start: "top ".concat((null == N ? void 0 : N.width) < 992 ? k - 10 : k, "%"),
                                end: "top ".concat((null == N ? void 0 : N.width) < 992 ? Z - 15 : Z - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == N ? void 0 : N.width) > 1440 ? f : (null == N ? void 0 : N.width) < 992 ? (null == N ? void 0 : N.width) / 500 * f : (null == N ? void 0 : N.width) / 1440 * f, e = (null == N ? void 0 : N.width) > 1440 ? y : (null == N ? void 0 : N.width) < 992 ? (null == N ? void 0 : N.width) / 500 * y : (null == N ? void 0 : N.width) / 1440 * y, n.from(j.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: g,
                            rotateY: p,
                            opacity: b,
                            duration: v,
                            ease: w
                        }).to(j.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [P, T]), (0, l.jsx)(n, {
                    ref: j,
                    className: (0, o.Z)(i().subtitle, i()[u], s),
                    children: e
                })
            }
        },
        16700: function (t, e, n) {
            "use strict";
            n.d(e, {
                BD: function () {
                    return c
                },
                T$: function () {
                    return a
                }
            });
            var l = n(37983),
                r = n.n(l),
                s = n(68941),
                i = n.n(s),
                o = n(68425),
                _ = n.n(o);
            let a = r().className,
                c = i().className;
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
                    return a
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
                            a = (i.match(/0*/) || [""])[0],
                            c = a + o;
                        "0" !== s && c.length > n ? (c = c.substring(0, n), r = "".concat(s, ".").concat(l(c, e))) : _ > n && (o = o.substring(0, n), r = "".concat(s, ".").concat(a).concat(l(o, e)))
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
                a = (t, e, n, l) => {
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
        12354: function (t) {
            t.exports = {
                section: "style_section__Xib25",
                content: "style_content__ZmzL2",
                boxes: "style_boxes__GtK87",
                box: "style_box__D9Vn9",
                title: "style_title__ht1op",
                subtitle: "style_subtitle__vdgsE",
                list: "style_list__cfqy_",
                list_item: "style_list_item__pQLG6",
                icon: "style_icon__Xan4j"
            }
        },
        16909: function (t) {
            t.exports = {
                section: "style_section__z9WlQ",
                content: "style_content__Ayiys",
                boxes: "style_boxes__J90j9",
                bottomText: "style_bottomText__zC5BI"
            }
        },
        42348: function (t) {
            t.exports = {
                section: "style_section__nZ_I_",
                content: "style_content__ifjWU",
                wrapper: "style_wrapper__7TAu8",
                boxes: "style_boxes__trqWs",
                box: "style_box__vHgUW",
                title: "style_title__kzHYV",
                imgWrapper: "style_imgWrapper__vRKvM"
            }
        },
        51122: function (t) {
            t.exports = {
                section: "style_section__X14DM",
                content: "style_content__7caAe",
                boxes: "style_boxes__RenG_",
                bottomText: "style_bottomText__jv7bO"
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
        t.O(0, [3752, 6835, 5575, 6624, 2881, 922, 835, 7429, 6609, 2971, 7023, 1744], function () {
            return t(t.s = 80690)
        }), _N_E = t.O()
    }
]);