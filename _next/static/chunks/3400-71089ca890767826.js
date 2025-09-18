(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3400], {
        87138: function (t, e, l) {
            "use strict";
            l.d(e, {
                default: function () {
                    return r.a
                }
            });
            var n = l(231),
                r = l.n(n)
        },
        70499: function (t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function () {
                    return h
                }
            });
            var n = l(57437),
                r = l(87138),
                i = l(60231),
                s = l.n(i),
                o = l(44839),
                a = l(2265),
                c = l(16609),
                _ = l(49582),
                d = l(78002),
                u = l(16463);

            function h(t) {
                let {
                    href: e,
                    className: l,
                    children: i,
                    target: h,
                    onClick: f,
                    direction: m,
                    directionMobile: y = m,
                    translateY: g = 0,
                    translateX: w = 0,
                    duration: v = .8,
                    rotateX: p = 0,
                    rotateY: b = 0,
                    ease: x = "back.out",
                    opacity: k = 0,
                    animate: Z,
                    start: N = 80,
                    end: j = 60,
                    color: E = "primary",
                    disabled: Y,
                    type: X = "button"
                } = t, B = (0, a.useRef)(null), T = (0, a.useRef)(null), S = (0, d.Z)(), {
                    useGSAP: L,
                    activatedGsap: C
                } = (0, c.Z)(), F = (0, u.usePathname)();
                return L(() => {
                    if ("/" == F) {
                        let t;
                        if (B.current && (t = B), T.current && (t = T), C && Z && t && t.current && (null == S ? void 0 : S.width)) {
                            let e, l;
                            (null == S ? void 0 : S.width) < 992 ? (w = "right" == y ? -200 : "left" == y ? 200 : w, g = "top" == y ? 200 : "bottom" == y ? -200 : g) : (g = "top" == m ? 200 : "bottom" == m ? -200 : g, w = "right" == m ? -200 : "left" == m ? 200 : w);
                            let n = _.ZP.timeline({
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "top ".concat((null == S ? void 0 : S.width) < 992 ? N - 10 : N, "%"),
                                    end: "top ".concat((null == S ? void 0 : S.width) < 992 ? j - 15 : j - 10, "%"),
                                    scrub: 1,
                                    markers: !1
                                }
                            });
                            return e = (null == S ? void 0 : S.width) > 1440 ? w : (null == S ? void 0 : S.width) < 992 ? (null == S ? void 0 : S.width) / 500 * w : (null == S ? void 0 : S.width) / 1440 * w, l = (null == S ? void 0 : S.width) > 1440 ? g : (null == S ? void 0 : S.width) < 992 ? (null == S ? void 0 : S.width) / 500 * g : (null == S ? void 0 : S.width) / 1440 * g, n.from(t.current, {
                                translateY: l,
                                translateX: e,
                                rotateX: p,
                                rotateY: b,
                                opacity: k,
                                duration: v,
                                ease: x
                            }).to(t.current, {
                                translateY: 0,
                                rotateX: 0,
                                rotateY: 0,
                                translateX: 0,
                                opacity: 1
                            }), () => n.kill()
                        }
                    }
                }, [C, F]), (0, n.jsx)(n.Fragment, {
                    children: e ? h && "_blank" == h ? (0, n.jsxs)(r.default, {
                        ref: T,
                        href: e,
                        target: h,
                        rel: "noopener noreferrer",
                        prefetch: !1,
                        onClick: f,
                        className: (0, o.Z)(s().button, l, s()[E]),
                        children: [i, (0, n.jsx)("span", {
                            className: s().wrap
                        })]
                    }) : (0, n.jsxs)(r.default, {
                        ref: T,
                        href: e,
                        target: h,
                        rel: "",
                        onClick: f,
                        className: (0, o.Z)(s().button, l, s()[E]),
                        children: [i, (0, n.jsx)("span", {
                            className: s().wrap
                        })]
                    }) : (0, n.jsxs)("button", {
                        type: X,
                        disabled: Y,
                        ref: B,
                        onClick: f,
                        className: (0, o.Z)(s().button, l, s()[E]),
                        children: [i, (0, n.jsx)("span", {
                            className: s().wrap
                        })]
                    })
                })
            }
        },
        42625: function (t, e, l) {
            "use strict";
            var n = l(57437),
                r = l(44839),
                i = l(58538),
                s = l.n(i);
            let o = (0, l(2265).forwardRef)((t, e) => {
                let {
                    children: l,
                    className: i,
                    size: o,
                    classic: a,
                    ...c
                } = t;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                        ref: e,
                        className: (0, r.Z)(s().container, i, o && s()[o], a && s().classic),
                        ...c,
                        children: l
                    })
                })
            });
            o.displayName = "Container", e.Z = o
        },
        47984: function (t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function () {
                    return c
                }
            });
            var n = l(57437),
                r = l(79124),
                i = l(66648);
            l(2265);
            var s = l(69665),
                o = l.n(s),
                a = l(44839);

            function c(t) {
                let {
                    alt: e = "BlockDAG",
                    src: l,
                    width: s,
                    height: c,
                    hero: _,
                    className: d,
                    ...u
                } = t, h = (0, r.Z)();
                return (0, n.jsx)(n.Fragment, {
                    children: _ || u.priority ? (0, n.jsx)(i.default, {
                        className: (0, a.Z)(o().img, d),
                        src: l,
                        alt: e,
                        width: s || 0,
                        height: c || 0,
                        ...u
                    }, 1) : h ? (0, n.jsx)(i.default, {
                        className: (0, a.Z)(o().img, d),
                        src: l,
                        alt: e,
                        width: 0,
                        height: 0,
                        ...u
                    }, 2) : (0, n.jsx)(i.default, {
                        className: (0, a.Z)(o().loadingImg, d),
                        src: "/cube.webp",
                        alt: e,
                        width: 0,
                        height: 0,
                        ...u
                    }, 3)
                })
            }
        },
        45419: function (t, e, l) {
            "use strict";
            l.d(e, {
                default: function () {
                    return y
                }
            });
            var n = l(57437),
                r = l(42625),
                i = l(76003),
                s = l.n(i),
                o = l(21360),
                a = l(47984),
                c = l(32913),
                _ = l(87580),
                d = l(70499),
                u = l(13259),
                h = l(16609),
                f = l(53309),
                m = l(44839);

            function y(t) {
                let {
                    color: e
                } = t, {
                    tokenData: l
                } = (0, h.Z)();
                return (0, n.jsx)(c.Z, {
                    className: s().section,
                    color: e || "primary",
                    children: (0, n.jsxs)(r.Z, {
                        className: s().sectionContainer,
                        children: [(0, n.jsx)("div", {
                            children: (0, n.jsx)(a.default, {
                                className: s().cube,
                                src: "/images/cube.png",
                                alt: "cube",
                                width: 245,
                                height: 245
                            })
                        }), 
                        // (0, n.jsxs)(_.default, {
                        //     children: ["$", (null == l ? void 0 : l.totalSoldTokensValueUsd) ? (0, f.HN)(null == l ? void 0 : l.totalSoldTokensValueUsd).replace("M", "") : "**.**", " ", "Million Raised"]
                        // }),
                         (0, n.jsxs)(o.default, {
                            className: (0, m.Z)(s().desc, "font-bold"),
                            size: "xl",
                            children: ["Join the BlockDAG crypto engage with the project,", (0, n.jsx)("br", {
                                className: "d-md"
                            }), " and see your contribution grow to new heights."]
                        }), (0, n.jsxs)("div", {
                            className: s().btns,
                            children: [(0, n.jsx)(d.default, {
                                href: u.YJ,
                                color: "dark" === e ? "primary" : "dark",
                                children: "Buy Now"
                            }), (0, n.jsx)(d.default, {
                                color: "transparent-light",
                                href: u.zA,
                                children: "How To Buy"
                            })]
                        })]
                    })
                })
            }
        },
        32913: function (t, e, l) {
            "use strict";
            var n = l(57437),
                r = l(44839),
                i = l(14629),
                s = l.n(i);
            let o = (0, l(2265).forwardRef)((t, e) => {
                let {
                    children: l,
                    className: i,
                    color: o = "dark",
                    ...a
                } = t;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("section", {
                        ref: e,
                        className: (0, r.Z)(s().section, s()[o], i),
                        ...a,
                        children: l
                    })
                })
            });
            o.displayName = "Section", e.Z = o
        },
        21360: function (t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function () {
                    return u
                }
            });
            var n = l(57437),
                r = l(2265),
                i = l(8544),
                s = l.n(i),
                o = l(44839),
                a = l(16609),
                c = l(49582),
                _ = l(78002),
                d = l(16463);

            function u(t) {
                let {
                    children: e,
                    component: l = "p",
                    size: i = "md",
                    className: u,
                    style: h,
                    direction: f,
                    directionMobile: m = f,
                    translateY: y = 0,
                    translateX: g = 0,
                    duration: w = .8,
                    rotateX: v = 0,
                    rotateY: p = 0,
                    ease: b = "back.out",
                    opacity: x = 0,
                    animate: k,
                    start: Z = 80,
                    end: N = 60,
                    onClick: j
                } = t, E = (0, r.useRef)(null), Y = (0, _.Z)(), {
                    useGSAP: X,
                    activatedGsap: B
                } = (0, a.Z)(), T = (0, d.usePathname)();
                return X(() => {
                    if ("/" == T && B && k && E.current && (null == Y ? void 0 : Y.width)) {
                        let t, e;
                        (null == Y ? void 0 : Y.width) < 992 ? (g = "right" == m ? -200 : "left" == m ? 200 : g, y = "top" == m ? 200 : "bottom" == m ? -200 : y) : (y = "top" == f ? 200 : "bottom" == f ? -200 : y, g = "right" == f ? -200 : "left" == f ? 200 : g);
                        let l = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: E.current,
                                start: "top ".concat((null == Y ? void 0 : Y.width) < 992 ? Z - 10 : Z, "%"),
                                end: "top ".concat((null == Y ? void 0 : Y.width) < 992 ? N - 15 : N - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == Y ? void 0 : Y.width) > 1440 ? g : (null == Y ? void 0 : Y.width) < 992 ? (null == Y ? void 0 : Y.width) / 500 * g : (null == Y ? void 0 : Y.width) / 1440 * g, e = (null == Y ? void 0 : Y.width) > 1440 ? y : (null == Y ? void 0 : Y.width) < 992 ? (null == Y ? void 0 : Y.width) / 500 * y : (null == Y ? void 0 : Y.width) / 1440 * y, l.from(E.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: v,
                            rotateY: p,
                            opacity: x,
                            duration: w,
                            ease: b
                        }).to(E.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => l.kill()
                    }
                }, [B, T]), (0, n.jsx)(l, {
                    onClick: j,
                    ref: E,
                    className: (0, o.Z)(s().text, s()[i], u),
                    style: h,
                    children: e
                })
            }
        },
        87580: function (t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function () {
                    return h
                }
            });
            var n = l(57437),
                r = l(2265),
                i = l(15681),
                s = l.n(i),
                o = l(44839),
                a = l(16700),
                c = l(78002),
                _ = l(16609),
                d = l(49582),
                u = l(16463);

            function h(t) {
                let {
                    children: e,
                    size: l = "md",
                    className: i,
                    family: h = "secondary",
                    component: f = "md" == l ? "h2" : "h6",
                    variant: m,
                    uppercase: y,
                    direction: g,
                    directionMobile: w = g,
                    translateY: v = 0,
                    translateX: p = 0,
                    duration: b = .8,
                    rotateX: x = 0,
                    rotateY: k = 0,
                    ease: Z = "back.out",
                    opacity: N = 0,
                    animate: j,
                    start: E = 80,
                    end: Y = 60
                } = t, X = (0, r.useRef)(null), B = (0, c.Z)(), {
                    useGSAP: T,
                    activatedGsap: S
                } = (0, _.Z)(), L = (0, u.usePathname)();
                return T(() => {
                    if ("/" == L && S && j && X.current && (null == B ? void 0 : B.width)) {
                        let t, e;
                        (null == B ? void 0 : B.width) < 992 ? (p = "right" == w ? -200 : "left" == w ? 200 : p, v = "top" == w ? 200 : "bottom" == w ? -200 : v) : (v = "top" == g ? 200 : "bottom" == g ? -200 : v, p = "right" == g ? -200 : "left" == g ? 200 : p);
                        let l = d.ZP.timeline({
                            scrollTrigger: {
                                trigger: X.current,
                                start: "top ".concat((null == B ? void 0 : B.width) < 992 ? E - 10 : E, "%"),
                                end: "top ".concat((null == B ? void 0 : B.width) < 992 ? Y - 15 : Y - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == B ? void 0 : B.width) > 1440 ? p : (null == B ? void 0 : B.width) < 992 ? (null == B ? void 0 : B.width) / 500 * p : (null == B ? void 0 : B.width) / 1440 * p, e = (null == B ? void 0 : B.width) > 1440 ? v : (null == B ? void 0 : B.width) < 992 ? (null == B ? void 0 : B.width) / 500 * v : (null == B ? void 0 : B.width) / 1440 * v, l.from(X.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: x,
                            rotateY: k,
                            opacity: N,
                            duration: b,
                            ease: Z
                        }).to(X.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => l.kill()
                    }
                }, [S, L]), (0, n.jsx)(f, {
                    ref: X,
                    className: (0, o.Z)(s().title, s()[m || f], "secondary" == h ? a.BD : a.T$, s()[l], i, y ? "uppercase" : ""),
                    children: e
                })
            }
        },
        84395: function (t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function () {
                    return u
                }
            });
            var n = l(57437),
                r = l(2265),
                i = l(15681),
                s = l.n(i),
                o = l(44839),
                a = l(78002),
                c = l(16609),
                _ = l(49582),
                d = l(16463);

            function u(t) {
                let {
                    children: e,
                    component: l = "h5",
                    className: i,
                    color: u = "primary",
                    direction: h,
                    directionMobile: f = h,
                    translateY: m = 0,
                    translateX: y = 0,
                    duration: g = .8,
                    rotateX: w = 0,
                    rotateY: v = 0,
                    ease: p = "back.out",
                    opacity: b = 0,
                    animate: x,
                    start: k = 80,
                    end: Z = 60
                } = t, N = (0, r.useRef)(null), j = (0, a.Z)(), {
                    useGSAP: E,
                    activatedGsap: Y
                } = (0, c.Z)(), X = (0, d.usePathname)();
                return E(() => {
                    if ("/" == X && Y && x && N.current && (null == j ? void 0 : j.width)) {
                        let t, e;
                        (null == j ? void 0 : j.width) < 992 ? (y = "right" == f ? -200 : "left" == f ? 200 : y, m = "top" == f ? 200 : "bottom" == f ? -200 : m) : (m = "top" == h ? 200 : "bottom" == h ? -200 : m, y = "right" == h ? -200 : "left" == h ? 200 : y);
                        let l = _.ZP.timeline({
                            scrollTrigger: {
                                trigger: N.current,
                                start: "top ".concat((null == j ? void 0 : j.width) < 992 ? k - 10 : k, "%"),
                                end: "top ".concat((null == j ? void 0 : j.width) < 992 ? Z - 15 : Z - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == j ? void 0 : j.width) > 1440 ? y : (null == j ? void 0 : j.width) < 992 ? (null == j ? void 0 : j.width) / 500 * y : (null == j ? void 0 : j.width) / 1440 * y, e = (null == j ? void 0 : j.width) > 1440 ? m : (null == j ? void 0 : j.width) < 992 ? (null == j ? void 0 : j.width) / 500 * m : (null == j ? void 0 : j.width) / 1440 * m, l.from(N.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: w,
                            rotateY: v,
                            opacity: b,
                            duration: g,
                            ease: p
                        }).to(N.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => l.kill()
                    }
                }, [Y, X]), (0, n.jsx)(l, {
                    ref: N,
                    className: (0, o.Z)(s().subtitle, s()[u], i),
                    children: e
                })
            }
        },
        16700: function (t, e, l) {
            "use strict";
            l.d(e, {
                BD: function () {
                    return _
                },
                T$: function () {
                    return c
                }
            });
            var n = l(37983),
                r = l.n(n),
                i = l(68941),
                s = l.n(i),
                o = l(68425),
                a = l.n(o);
            let c = r().className,
                _ = s().className;
            a().className
        },
        79124: function (t, e, l) {
            "use strict";
            var n = l(2265),
                r = l(44630);
            e.Z = () => {
                let [t, e] = (0, n.useState)(!1), l = (0, r.Z)(), i = () => {
                    e(!0)
                };
                return (0, n.useEffect)(() => {
                    l > 1 && e(!0)
                }, [l]), (0, n.useEffect)(() => (window.addEventListener("mousemove", i), window.addEventListener("click", i), window.addEventListener("touchmove", i), window.addEventListener("touchstart", i), window.addEventListener("touchend", i), () => {
                    window.removeEventListener("mousemove", i), window.removeEventListener("click", i), window.removeEventListener("touchmove", i), window.removeEventListener("touchstart", i), window.removeEventListener("touchend", i)
                }), []), t
            }
        },
        44630: function (t, e, l) {
            "use strict";
            l.d(e, {
                Z: function () {
                    return r
                }
            });
            var n = l(2265);

            function r() {
                let [t, e] = (0, n.useState)(0);
                return (0, n.useEffect)(() => {
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
        53309: function (t, e, l) {
            "use strict";
            l.d(e, {
                HN: function () {
                    return c
                }
            });
            let n = (t, e) => {
                    let l = (t = t.toString()).split(".");
                    if (l.length < 2) return t;
                    let n = l[0],
                        r = l[1];
                    if (r.length <= e) return "";
                    let i = r.match(/0*$/);
                    if (!i) return "";
                    let s = i[0],
                        o = r.substring(0, i.index);
                    return s = s.substring(0, e - (r.length - s.length)), "".concat(n, ".").concat(o).concat(s)
                },
                r = (t, e, l) => {
                    let r = (t = Math.floor(1e5 * t + .5) / 1e5).toString(),
                        i = 0;
                    if (r.includes(".") && (i = r.split(".")[1].length), i < e) {
                        0 === i && (r += ".");
                        for (var s = i; s < e; s++) r += "0"
                    }
                    if (i > 0) {
                        let t = r.split("."),
                            i = t[0],
                            s = t[1],
                            o = (s.match(/[1-9][0-9]*/) || [""])[0],
                            a = o.length,
                            c = (s.match(/0*/) || [""])[0],
                            _ = c + o;
                        "0" !== i && _.length > l ? (_ = _.substring(0, l), r = "".concat(i, ".").concat(n(_, e))) : a > l && (o = o.substring(0, l), r = "".concat(i, ".").concat(c).concat(n(o, e)))
                    }
                    return r
                },
                i = t => {
                    let e = t.toString().split(".");
                    return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), e.join(".")
                },
                s = (t, e, l) => i(r(t, e, l)),
                o = (t, e) => (Math.floor(t * 10 ** e) / 10 ** e).toString(),
                a = {
                    K: 1e3,
                    M: 1e6,
                    B: 1e9,
                    T: 1e12
                },
                c = (t, e, l, n) => {
                    if (isNaN(t) || void 0 === t) return "Calculating...";
                    if (t < e) return s(t, l, n);
                    let r = t = Math.floor(t),
                        i = "";
                    return Object.entries(a).forEach(e => {
                        let [l, n] = e;
                        t / n < 1e3 && t / n >= 1 && (i = l, r = t / n)
                    }), "".concat(o(r, 2)).concat(i)
                }
        },
        55629: function (t) {
            t.exports = {
                section: "style_section__kARIQ",
                content: "style_content__J_YuY",
                card: "style_card__PgYEA",
                title: "style_title__78kFq"
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
    }
]);