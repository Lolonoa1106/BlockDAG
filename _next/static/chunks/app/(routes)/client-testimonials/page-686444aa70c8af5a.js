(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8359], {
        8217: function (t, e, n) {
            Promise.resolve().then(n.t.bind(n, 38173, 23)), Promise.resolve().then(n.t.bind(n, 231, 23)), Promise.resolve().then(n.bind(n, 85654)), Promise.resolve().then(n.t.bind(n, 74174, 23)), Promise.resolve().then(n.t.bind(n, 58538, 23)), Promise.resolve().then(n.t.bind(n, 17097, 23)), Promise.resolve().then(n.bind(n, 47984)), Promise.resolve().then(n.bind(n, 45419)), Promise.resolve().then(n.t.bind(n, 14629, 23)), Promise.resolve().then(n.bind(n, 21360)), Promise.resolve().then(n.bind(n, 87580)), Promise.resolve().then(n.bind(n, 84395))
        },
        87138: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return l.a
                }
            });
            var r = n(231),
                l = n.n(r)
        },
        85654: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return o
                }
            });
            var r = n(57437),
                l = n(33532),
                i = n.n(l),
                s = n(32983);

            function o(t) {
                let {} = t;
                return (0, r.jsx)(s.Z, {
                    noBreadcrumb: !0,
                    sectionClass: i().section,
                    containerClass: i().container,
                    contentClass: i().content,
                    textsClass: i().texts,
                    titleClass: i().title,
                    img: {
                        src: "/images/hero/clients-testimonials.webp"
                    },
                    subtitle: (0, r.jsx)(r.Fragment, {
                        children: "COMMUNITY INTERVIEWS"
                    }),
                    title: (0, r.jsx)(r.Fragment, {
                        children: "Testimonials"
                    }),
                    bigdesc: (0, r.jsx)(r.Fragment, {
                        children: "Paving the Way for the Future of Decentralized Finance"
                    }),
                    desc: (0, r.jsx)(r.Fragment, {
                        children: "At BlockDAG, we’re not just building another blockchain; we’re redefining what’s possible in the world of decentralized finance. With our groundbreaking BlockDAG technology, we are committed to breaking barriers and making blockchain more efficient, sustainable, and accessible to everyone. But don’t just take our word for it—hear from the people who’ve experienced firsthand the transformational power of BlockDAG."
                    }),
                    custom: (0, r.jsx)(r.Fragment, {})
                })
            }
        },
        70499: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return h
                }
            });
            var r = n(57437),
                l = n(87138),
                i = n(60231),
                s = n.n(i),
                o = n(44839),
                a = n(2265),
                c = n(16609),
                d = n(49582),
                u = n(78002),
                _ = n(16463);

            function h(t) {
                let {
                    href: e,
                    className: n,
                    children: i,
                    target: h,
                    onClick: m,
                    direction: f,
                    directionMobile: g = f,
                    translateY: v = 0,
                    translateX: w = 0,
                    duration: y = .8,
                    rotateX: p = 0,
                    rotateY: b = 0,
                    ease: x = "back.out",
                    opacity: j = 0,
                    animate: N,
                    start: Z = 80,
                    end: k = 60,
                    color: E = "primary",
                    disabled: B,
                    type: P = "button"
                } = t, Y = (0, a.useRef)(null), C = (0, a.useRef)(null), R = (0, u.Z)(), {
                    useGSAP: S,
                    activatedGsap: F
                } = (0, c.Z)(), T = (0, _.usePathname)();
                return S(() => {
                    if ("/" == T) {
                        let t;
                        if (Y.current && (t = Y), C.current && (t = C), F && N && t && t.current && (null == R ? void 0 : R.width)) {
                            let e, n;
                            (null == R ? void 0 : R.width) < 992 ? (w = "right" == g ? -200 : "left" == g ? 200 : w, v = "top" == g ? 200 : "bottom" == g ? -200 : v) : (v = "top" == f ? 200 : "bottom" == f ? -200 : v, w = "right" == f ? -200 : "left" == f ? 200 : w);
                            let r = d.ZP.timeline({
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "top ".concat((null == R ? void 0 : R.width) < 992 ? Z - 10 : Z, "%"),
                                    end: "top ".concat((null == R ? void 0 : R.width) < 992 ? k - 15 : k - 10, "%"),
                                    scrub: 1,
                                    markers: !1
                                }
                            });
                            return e = (null == R ? void 0 : R.width) > 1440 ? w : (null == R ? void 0 : R.width) < 992 ? (null == R ? void 0 : R.width) / 500 * w : (null == R ? void 0 : R.width) / 1440 * w, n = (null == R ? void 0 : R.width) > 1440 ? v : (null == R ? void 0 : R.width) < 992 ? (null == R ? void 0 : R.width) / 500 * v : (null == R ? void 0 : R.width) / 1440 * v, r.from(t.current, {
                                translateY: n,
                                translateX: e,
                                rotateX: p,
                                rotateY: b,
                                opacity: j,
                                duration: y,
                                ease: x
                            }).to(t.current, {
                                translateY: 0,
                                rotateX: 0,
                                rotateY: 0,
                                translateX: 0,
                                opacity: 1
                            }), () => r.kill()
                        }
                    }
                }, [F, T]), (0, r.jsx)(r.Fragment, {
                    children: e ? h && "_blank" == h ? (0, r.jsxs)(l.default, {
                        ref: C,
                        href: e,
                        target: h,
                        rel: "noopener noreferrer",
                        prefetch: !1,
                        onClick: m,
                        className: (0, o.Z)(s().button, n, s()[E]),
                        children: [i, (0, r.jsx)("span", {
                            className: s().wrap
                        })]
                    }) : (0, r.jsxs)(l.default, {
                        ref: C,
                        href: e,
                        target: h,
                        rel: "",
                        onClick: m,
                        className: (0, o.Z)(s().button, n, s()[E]),
                        children: [i, (0, r.jsx)("span", {
                            className: s().wrap
                        })]
                    }) : (0, r.jsxs)("button", {
                        type: P,
                        disabled: B,
                        ref: Y,
                        onClick: m,
                        className: (0, o.Z)(s().button, n, s()[E]),
                        children: [i, (0, r.jsx)("span", {
                            className: s().wrap
                        })]
                    })
                })
            }
        },
        42625: function (t, e, n) {
            "use strict";
            var r = n(57437),
                l = n(44839),
                i = n(58538),
                s = n.n(i);
            let o = (0, n(2265).forwardRef)((t, e) => {
                let {
                    children: n,
                    className: i,
                    size: o,
                    classic: a,
                    ...c
                } = t;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        ref: e,
                        className: (0, l.Z)(s().container, i, o && s()[o], a && s().classic),
                        ...c,
                        children: n
                    })
                })
            });
            o.displayName = "Container", e.Z = o
        },
        32983: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return m
                }
            });
            var r = n(57437),
                l = n(47984),
                i = n(42625),
                s = n(32913),
                o = n(21360),
                a = n(87580),
                c = n(59747),
                d = n.n(c),
                u = n(44839),
                _ = n(84395),
                h = n(87138);

            function m(t) {
                let {
                    img: e,
                    title: n,
                    bigdesc: c,
                    xldesc: m,
                    desc: f,
                    custom: g,
                    btns: v,
                    subtitle: w,
                    notHero: y,
                    breadcrumb: p,
                    noBreadcrumb: b,
                    sectionClass: x,
                    containerClass: j,
                    contentClass: N,
                    textsClass: Z,
                    subtitleClass: k,
                    titleClass: E,
                    xlDescClass: B,
                    bigDescClass: P,
                    descClass: Y,
                    btnsClass: C
                } = t;
                return (0, r.jsxs)(r.Fragment, {
                    children: [!b && (0, r.jsx)("section", {
                        className: d().breadcrumbSection,
                        children: (0, r.jsx)(i.Z, {
                            className: d().breadcrumb,
                            children: (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: (0, r.jsx)(h.default, {
                                        href: "/",
                                        children: (0, r.jsx)(o.default, {
                                            children: "Home"
                                        })
                                    })
                                }), p && p.map((t, e) => (0, r.jsx)("li", {
                                    children: (0, r.jsx)(h.default, {
                                        href: t.slug,
                                        children: (0, r.jsx)(o.default, {
                                            children: t.title
                                        })
                                    })
                                }, e)), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(o.default, {
                                        children: n
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(s.Z, {
                        className: (0, u.Z)(d().hero, x),
                        children: (0, r.jsxs)(i.Z, {
                            className: (0, u.Z)(d().container, j),
                            children: [(0, r.jsxs)("div", {
                                className: (0, u.Z)(d().content, N),
                                children: [(0, r.jsxs)("div", {
                                    className: (0, u.Z)(d().texts, Z),
                                    children: [w && (0, r.jsx)(_.default, {
                                        className: k,
                                        children: w
                                    }), (0, r.jsx)(a.default, {
                                        component: y ? "h2" : "h1",
                                        className: (0, u.Z)(d().title, E),
                                        children: n
                                    }), m && (0, r.jsx)(o.default, {
                                        className: (0, u.Z)(d().bigdesc, B),
                                        size: "xl",
                                        children: m
                                    }), " ", c && (0, r.jsx)(o.default, {
                                        className: (0, u.Z)(d().bigdesc, P),
                                        size: "lg",
                                        children: c
                                    }), f && (0, r.jsx)(o.default, {
                                        className: (0, u.Z)(d().desc, Y),
                                        children: f
                                    })]
                                }), g && g, v && (0, r.jsx)("div", {
                                    className: (0, u.Z)(d().btns, C),
                                    children: v
                                })]
                            }), (0, r.jsx)("div", {
                                className: (0, u.Z)(d().imgWrapper, e.wrapperClass),
                                children: (0, r.jsx)(l.default, {
                                    hero: !y,
                                    priority: !y,
                                    className: (0, u.Z)(d().img, e.className),
                                    src: e.src,
                                    alt: (null == e ? void 0 : e.alt) || "BlockDAG",
                                    width: e.width || 568,
                                    height: e.height || 590
                                })
                            })]
                        })
                    })]
                })
            }
        },
        47984: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return c
                }
            });
            var r = n(57437),
                l = n(79124),
                i = n(66648);
            n(2265);
            var s = n(69665),
                o = n.n(s),
                a = n(44839);

            function c(t) {
                let {
                    alt: e = "BlockDAG",
                    src: n,
                    width: s,
                    height: c,
                    hero: d,
                    className: u,
                    ..._
                } = t, h = (0, l.Z)();
                return (0, r.jsx)(r.Fragment, {
                    children: d || _.priority ? (0, r.jsx)(i.default, {
                        className: (0, a.Z)(o().img, u),
                        src: n,
                        alt: e,
                        width: s || 0,
                        height: c || 0,
                        ..._
                    }, 1) : h ? (0, r.jsx)(i.default, {
                        className: (0, a.Z)(o().img, u),
                        src: n,
                        alt: e,
                        width: 0,
                        height: 0,
                        ..._
                    }, 2) : (0, r.jsx)(i.default, {
                        className: (0, a.Z)(o().loadingImg, u),
                        src: "/cube.webp",
                        alt: e,
                        width: 0,
                        height: 0,
                        ..._
                    }, 3)
                })
            }
        },
        45419: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return g
                }
            });
            var r = n(57437),
                l = n(42625),
                i = n(76003),
                s = n.n(i),
                o = n(21360),
                a = n(47984),
                c = n(32913),
                d = n(87580),
                u = n(70499),
                _ = n(13259),
                h = n(16609),
                m = n(53309),
                f = n(44839);

            function g(t) {
                let {
                    color: e
                } = t, {
                    tokenData: n
                } = (0, h.Z)();
                return (0, r.jsx)(c.Z, {
                    className: s().section,
                    color: e || "primary",
                    children: (0, r.jsxs)(l.Z, {
                        className: s().sectionContainer,
                        children: [(0, r.jsx)("div", {
                            children: (0, r.jsx)(a.default, {
                                className: s().cube,
                                src: "/images/cube.png",
                                alt: "cube",
                                width: 245,
                                height: 245
                            })
                        }),
                        //  (0, r.jsxs)(d.default, {
                        //     children: ["$", (null == n ? void 0 : n.totalSoldTokensValueUsd) ? (0, m.HN)(null == n ? void 0 : n.totalSoldTokensValueUsd).replace("M", "") : "**.**", " ", "Million Raised"]
                        // }), 
                        (0, r.jsxs)(o.default, {
                            className: (0, f.Z)(s().desc, "font-bold"),
                            size: "xl",
                            children: ["Join the BlockDAG crypto engage with the project,", (0, r.jsx)("br", {
                                className: "d-md"
                            }), " and see your contribution grow to new heights."]
                        }), (0, r.jsxs)("div", {
                            className: s().btns,
                            children: [(0, r.jsx)(u.default, {
                                href: _.YJ,
                                color: "dark" === e ? "primary" : "dark",
                                children: "Buy Now"
                            }), (0, r.jsx)(u.default, {
                                color: "transparent-light",
                                href: _.zA,
                                children: "How To Buy"
                            })]
                        })]
                    })
                })
            }
        },
        32913: function (t, e, n) {
            "use strict";
            var r = n(57437),
                l = n(44839),
                i = n(14629),
                s = n.n(i);
            let o = (0, n(2265).forwardRef)((t, e) => {
                let {
                    children: n,
                    className: i,
                    color: o = "dark",
                    ...a
                } = t;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("section", {
                        ref: e,
                        className: (0, l.Z)(s().section, s()[o], i),
                        ...a,
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
                    return _
                }
            });
            var r = n(57437),
                l = n(2265),
                i = n(8544),
                s = n.n(i),
                o = n(44839),
                a = n(16609),
                c = n(49582),
                d = n(78002),
                u = n(16463);

            function _(t) {
                let {
                    children: e,
                    component: n = "p",
                    size: i = "md",
                    className: _,
                    style: h,
                    direction: m,
                    directionMobile: f = m,
                    translateY: g = 0,
                    translateX: v = 0,
                    duration: w = .8,
                    rotateX: y = 0,
                    rotateY: p = 0,
                    ease: b = "back.out",
                    opacity: x = 0,
                    animate: j,
                    start: N = 80,
                    end: Z = 60,
                    onClick: k
                } = t, E = (0, l.useRef)(null), B = (0, d.Z)(), {
                    useGSAP: P,
                    activatedGsap: Y
                } = (0, a.Z)(), C = (0, u.usePathname)();
                return P(() => {
                    if ("/" == C && Y && j && E.current && (null == B ? void 0 : B.width)) {
                        let t, e;
                        (null == B ? void 0 : B.width) < 992 ? (v = "right" == f ? -200 : "left" == f ? 200 : v, g = "top" == f ? 200 : "bottom" == f ? -200 : g) : (g = "top" == m ? 200 : "bottom" == m ? -200 : g, v = "right" == m ? -200 : "left" == m ? 200 : v);
                        let n = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: E.current,
                                start: "top ".concat((null == B ? void 0 : B.width) < 992 ? N - 10 : N, "%"),
                                end: "top ".concat((null == B ? void 0 : B.width) < 992 ? Z - 15 : Z - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == B ? void 0 : B.width) > 1440 ? v : (null == B ? void 0 : B.width) < 992 ? (null == B ? void 0 : B.width) / 500 * v : (null == B ? void 0 : B.width) / 1440 * v, e = (null == B ? void 0 : B.width) > 1440 ? g : (null == B ? void 0 : B.width) < 992 ? (null == B ? void 0 : B.width) / 500 * g : (null == B ? void 0 : B.width) / 1440 * g, n.from(E.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: y,
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
                        }), () => n.kill()
                    }
                }, [Y, C]), (0, r.jsx)(n, {
                    onClick: k,
                    ref: E,
                    className: (0, o.Z)(s().text, s()[i], _),
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
            var r = n(57437),
                l = n(2265),
                i = n(15681),
                s = n.n(i),
                o = n(44839),
                a = n(16700),
                c = n(78002),
                d = n(16609),
                u = n(49582),
                _ = n(16463);

            function h(t) {
                let {
                    children: e,
                    size: n = "md",
                    className: i,
                    family: h = "secondary",
                    component: m = "md" == n ? "h2" : "h6",
                    variant: f,
                    uppercase: g,
                    direction: v,
                    directionMobile: w = v,
                    translateY: y = 0,
                    translateX: p = 0,
                    duration: b = .8,
                    rotateX: x = 0,
                    rotateY: j = 0,
                    ease: N = "back.out",
                    opacity: Z = 0,
                    animate: k,
                    start: E = 80,
                    end: B = 60
                } = t, P = (0, l.useRef)(null), Y = (0, c.Z)(), {
                    useGSAP: C,
                    activatedGsap: R
                } = (0, d.Z)(), S = (0, _.usePathname)();
                return C(() => {
                    if ("/" == S && R && k && P.current && (null == Y ? void 0 : Y.width)) {
                        let t, e;
                        (null == Y ? void 0 : Y.width) < 992 ? (p = "right" == w ? -200 : "left" == w ? 200 : p, y = "top" == w ? 200 : "bottom" == w ? -200 : y) : (y = "top" == v ? 200 : "bottom" == v ? -200 : y, p = "right" == v ? -200 : "left" == v ? 200 : p);
                        let n = u.ZP.timeline({
                            scrollTrigger: {
                                trigger: P.current,
                                start: "top ".concat((null == Y ? void 0 : Y.width) < 992 ? E - 10 : E, "%"),
                                end: "top ".concat((null == Y ? void 0 : Y.width) < 992 ? B - 15 : B - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == Y ? void 0 : Y.width) > 1440 ? p : (null == Y ? void 0 : Y.width) < 992 ? (null == Y ? void 0 : Y.width) / 500 * p : (null == Y ? void 0 : Y.width) / 1440 * p, e = (null == Y ? void 0 : Y.width) > 1440 ? y : (null == Y ? void 0 : Y.width) < 992 ? (null == Y ? void 0 : Y.width) / 500 * y : (null == Y ? void 0 : Y.width) / 1440 * y, n.from(P.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: x,
                            rotateY: j,
                            opacity: Z,
                            duration: b,
                            ease: N
                        }).to(P.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [R, S]), (0, r.jsx)(m, {
                    ref: P,
                    className: (0, o.Z)(s().title, s()[f || m], "secondary" == h ? a.BD : a.T$, s()[n], i, g ? "uppercase" : ""),
                    children: e
                })
            }
        },
        84395: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function () {
                    return _
                }
            });
            var r = n(57437),
                l = n(2265),
                i = n(15681),
                s = n.n(i),
                o = n(44839),
                a = n(78002),
                c = n(16609),
                d = n(49582),
                u = n(16463);

            function _(t) {
                let {
                    children: e,
                    component: n = "h5",
                    className: i,
                    color: _ = "primary",
                    direction: h,
                    directionMobile: m = h,
                    translateY: f = 0,
                    translateX: g = 0,
                    duration: v = .8,
                    rotateX: w = 0,
                    rotateY: y = 0,
                    ease: p = "back.out",
                    opacity: b = 0,
                    animate: x,
                    start: j = 80,
                    end: N = 60
                } = t, Z = (0, l.useRef)(null), k = (0, a.Z)(), {
                    useGSAP: E,
                    activatedGsap: B
                } = (0, c.Z)(), P = (0, u.usePathname)();
                return E(() => {
                    if ("/" == P && B && x && Z.current && (null == k ? void 0 : k.width)) {
                        let t, e;
                        (null == k ? void 0 : k.width) < 992 ? (g = "right" == m ? -200 : "left" == m ? 200 : g, f = "top" == m ? 200 : "bottom" == m ? -200 : f) : (f = "top" == h ? 200 : "bottom" == h ? -200 : f, g = "right" == h ? -200 : "left" == h ? 200 : g);
                        let n = d.ZP.timeline({
                            scrollTrigger: {
                                trigger: Z.current,
                                start: "top ".concat((null == k ? void 0 : k.width) < 992 ? j - 10 : j, "%"),
                                end: "top ".concat((null == k ? void 0 : k.width) < 992 ? N - 15 : N - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == k ? void 0 : k.width) > 1440 ? g : (null == k ? void 0 : k.width) < 992 ? (null == k ? void 0 : k.width) / 500 * g : (null == k ? void 0 : k.width) / 1440 * g, e = (null == k ? void 0 : k.width) > 1440 ? f : (null == k ? void 0 : k.width) < 992 ? (null == k ? void 0 : k.width) / 500 * f : (null == k ? void 0 : k.width) / 1440 * f, n.from(Z.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: w,
                            rotateY: y,
                            opacity: b,
                            duration: v,
                            ease: p
                        }).to(Z.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [B, P]), (0, r.jsx)(n, {
                    ref: Z,
                    className: (0, o.Z)(s().subtitle, s()[_], i),
                    children: e
                })
            }
        },
        16700: function (t, e, n) {
            "use strict";
            n.d(e, {
                BD: function () {
                    return d
                },
                T$: function () {
                    return c
                }
            });
            var r = n(37983),
                l = n.n(r),
                i = n(68941),
                s = n.n(i),
                o = n(68425),
                a = n.n(o);
            let c = l().className,
                d = s().className;
            a().className
        },
        79124: function (t, e, n) {
            "use strict";
            var r = n(2265),
                l = n(44630);
            e.Z = () => {
                let [t, e] = (0, r.useState)(!1), n = (0, l.Z)(), i = () => {
                    e(!0)
                };
                return (0, r.useEffect)(() => {
                    n > 1 && e(!0)
                }, [n]), (0, r.useEffect)(() => (window.addEventListener("mousemove", i), window.addEventListener("click", i), window.addEventListener("touchmove", i), window.addEventListener("touchstart", i), window.addEventListener("touchend", i), () => {
                    window.removeEventListener("mousemove", i), window.removeEventListener("click", i), window.removeEventListener("touchmove", i), window.removeEventListener("touchstart", i), window.removeEventListener("touchend", i)
                }), []), t
            }
        },
        44630: function (t, e, n) {
            "use strict";
            n.d(e, {
                Z: function () {
                    return l
                }
            });
            var r = n(2265);

            function l() {
                let [t, e] = (0, r.useState)(0);
                return (0, r.useEffect)(() => {
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
            let r = (t, e) => {
                    let n = (t = t.toString()).split(".");
                    if (n.length < 2) return t;
                    let r = n[0],
                        l = n[1];
                    if (l.length <= e) return "";
                    let i = l.match(/0*$/);
                    if (!i) return "";
                    let s = i[0],
                        o = l.substring(0, i.index);
                    return s = s.substring(0, e - (l.length - s.length)), "".concat(r, ".").concat(o).concat(s)
                },
                l = (t, e, n) => {
                    let l = (t = Math.floor(1e5 * t + .5) / 1e5).toString(),
                        i = 0;
                    if (l.includes(".") && (i = l.split(".")[1].length), i < e) {
                        0 === i && (l += ".");
                        for (var s = i; s < e; s++) l += "0"
                    }
                    if (i > 0) {
                        let t = l.split("."),
                            i = t[0],
                            s = t[1],
                            o = (s.match(/[1-9][0-9]*/) || [""])[0],
                            a = o.length,
                            c = (s.match(/0*/) || [""])[0],
                            d = c + o;
                        "0" !== i && d.length > n ? (d = d.substring(0, n), l = "".concat(i, ".").concat(r(d, e))) : a > n && (o = o.substring(0, n), l = "".concat(i, ".").concat(c).concat(r(o, e)))
                    }
                    return l
                },
                i = t => {
                    let e = t.toString().split(".");
                    return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), e.join(".")
                },
                s = (t, e, n) => i(l(t, e, n)),
                o = (t, e) => (Math.floor(t * 10 ** e) / 10 ** e).toString(),
                a = {
                    K: 1e3,
                    M: 1e6,
                    B: 1e9,
                    T: 1e12
                },
                c = (t, e, n, r) => {
                    if (isNaN(t) || void 0 === t) return "Calculating...";
                    if (t < e) return s(t, n, r);
                    let l = t = Math.floor(t),
                        i = "";
                    return Object.entries(a).forEach(e => {
                        let [n, r] = e;
                        t / r < 1e3 && t / r >= 1 && (i = n, l = t / r)
                    }), "".concat(o(l, 2)).concat(i)
                }
        },
        17097: function (t) {
            t.exports = {
                section: "style_section__Ie8Qf",
                videos: "style_videos__l6tE8",
                item: "style_item__gbrjz",
                card: "style_card__0e3EM",
                content: "style_content__yqYy7",
                button: "style_button__8SWYR",
                video: "style_video__gARgn"
            }
        },
        33532: function (t) {
            t.exports = {
                section: "style_section__kuWLj",
                container: "style_container__Wsrep",
                content: "style_content__RYNyN",
                texts: "style_texts__BIaA6",
                title: "style_title__DKahq"
            }
        },
        74174: function (t) {
            t.exports = {
                section: "style_section__RBjIm",
                container: "style_container__rn_BO",
                imgArea: "style_imgArea__d17gc",
                content: "style_content__xyBnR",
                texts: "style_texts__rC16C",
                btns: "style_btns__vTLop",
                socials: "style_socials__t9K_M",
                item: "style_item__E9rPw"
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
        58538: function (t) {
            t.exports = {
                container: "style_container__O7qie",
                lg: "style_lg__uab1X",
                sm: "style_sm__gJ0_G",
                classic: "style_classic___AOOd"
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
        t.O(0, [6835, 3752, 5575, 6624, 9117, 922, 835, 7429, 6609, 2971, 7023, 1744], function () {
            return t(t.s = 8217)
        }), _N_E = t.O()
    }
]);