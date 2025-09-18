(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2215], {
        42263: function (t, e, l) {
            "use strict";
            l.d(e, {
                default: function () {
                    return u
                }
            });
            var i = l(57437),
                s = l(42625),
                r = l(87138),
                a = l(60357),
                n = l.n(a),
                o = l(16463),
                d = l(66648);

            function u(t) {
                let {
                    data: e
                } = t, l = (0, o.usePathname)();
                return (0, i.jsxs)(s.Z, {
                    className: n().container,
                    children: [(0, i.jsx)("h5", {
                        className: n().title,
                        children: "News Categories"
                    }), (0, i.jsxs)("ul", {
                        className: n().list,
                        children: [(0, i.jsx)("li", {
                            children: (0, i.jsxs)(r.default, {
                                href: "/blog",
                                className: "/blog" === l ? n().active : "",
                                children: [(0, i.jsx)(d.default, {
                                    src: "/icons/global-white.svg",
                                    width: 24,
                                    height: 24,
                                    alt: "Global"
                                }), "Global"]
                            })
                        }), e.map((t, e) => (0, i.jsx)("li", {
                            children: (0, i.jsx)(r.default, {
                                href: "#",
                                className: l.replace("/blog/category/", "") === t.attributes.slug ? n().active : "",
                                children: t.attributes.title
                            })
                        }, e))
                    ]
                    })]
                })
            }
        },
        65385: function (t, e, l) {
            "use strict";
            l.d(e, {
                default: function () {
                    return p
                }
            });
            var i = l(57437),
                s = l(66391),
                r = l.n(s),
                a = l(47984),
                n = l(44839),
                o = l(21360),
                d = l(43615),
                u = l(87138),
                c = l(2265),
                _ = l(81079),
                h = l(70499),
                v = l(42625),
                m = l(5540),
                g = l(53267),
                f = l(66648),
                b = l(762);

            function p(t) {
                let {
                    blogData: e,
                    slider: l,
                    authors: s
                } = t, [p, y] = (0, c.useState)(6);
                return (0, i.jsxs)("div", {
                    className: r().blogWrapper,
                    children: [l && (0, i.jsx)(g.tq, {
                        id: "updatesSwiper",
                        className: (0, n.Z)(r().swiper),
                        modules: [m.tl, m.s5],
                        breakpoints: {
                            320: {
                                slidesPerView: 1.2,
                                spaceBetween: 40
                            },
                            992: {
                                slidesPerView: 2.3,
                                spaceBetween: 0
                            }
                        },
                        slidesPerView: "auto",
                        pagination: {
                            clickable: !0
                        },
                        children: null == e ? void 0 : e.map((t, e) => {
                            var l, s, c, _, h, v, m, f, b, p, y, x;
                            return (0, i.jsx)(g.o5, {
                                className: r().slide,
                                children: (0, i.jsxs)("div", {
                                    className: r().sliderItem,
                                    children: [(0, i.jsx)(u.default, {
                                        href: (null == t ? void 0 : null === (l = t.attributes) || void 0 === l ? void 0 : l.slug) ? "/blog/".concat(null == t ? void 0 : null === (s = t.attributes) || void 0 === s ? void 0 : s.slug) : "/blog#",
                                        className: r().img,
                                        children: (0, i.jsx)(a.default, {
                                            src: t.attributes.img,
                                            alt: t.attributes.title,
                                            draggable: !1
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: r().content,
                                        children: [(0, i.jsx)(u.default, {
                                            href: (null == t ? void 0 : null === (c = t.attributes) || void 0 === c ? void 0 : c.slug) ? "/blog/".concat(null == t ? void 0 : null === (_ = t.attributes) || void 0 === _ ? void 0 : _.slug) : "/blog#",
                                            children: (0, i.jsx)(o.default, {
                                                className: (0, n.Z)(r().title, "line-clamp-3"),
                                                size: "lg",
                                                children: t.attributes.title
                                            })
                                        }), (0, i.jsx)(o.default, {
                                            className: (0, n.Z)(r().desc, "line-clamp-3"),
                                            children: (null === (v = t.attributes) || void 0 === v ? void 0 : null === (h = v.seo) || void 0 === h ? void 0 : h.metaDesc) ? null === (f = t.attributes) || void 0 === f ? void 0 : null === (m = f.seo) || void 0 === m ? void 0 : m.metaDesc : null === (p = t.attributes) || void 0 === p ? void 0 : null === (b = p.seo) || void 0 === b ? void 0 : b.metaDescription
                                        }), (0, i.jsx)(d.default, {
                                            className: r().button,
                                            href: (null == t ? void 0 : null === (y = t.attributes) || void 0 === y ? void 0 : y.slug) ? "/blog/".concat(null == t ? void 0 : null === (x = t.attributes) || void 0 === x ? void 0 : x.slug) : "/blog#",
                                            children: "Read More"
                                        })]
                                    })]
                                }, e)
                            }, e)
                        })
                    }), !l && (0, i.jsxs)(v.Z, {
                        classic: !0,
                        children: [(0, i.jsx)(_.default, {
                            direction: "top",
                            className: r().cards,
                            children: null == e ? void 0 : e.map((t, e) => {
                                var l, c, _, h, v, m, g, y, x, j, w, N, k, Z, C, D;
                                return (0, i.jsxs)("div", {
                                    className: (0, n.Z)(r().item, e + 1 > p && "d-md d-sm"),
                                    children: [(0, i.jsx)(u.default, {
                                        href: (null == t ? void 0 : null === (l = t.attributes) || void 0 === l ? void 0 : l.slug) ? "/blog/".concat(null == t ? void 0 : null === (c = t.attributes) || void 0 === c ? void 0 : c.slug) : "/blog#",
                                        className: r().img,
                                        children: (0, i.jsx)(a.default, {
                                            src: t.attributes.img,
                                            alt: t.attributes.title,
                                            draggable: !1
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: r().content,
                                        children: [(0, i.jsx)(u.default, {
                                            href: (null == t ? void 0 : null === (_ = t.attributes) || void 0 === _ ? void 0 : _.slug) ? "/blog/".concat(null == t ? void 0 : null === (h = t.attributes) || void 0 === h ? void 0 : h.slug) : "/blog#",
                                            children: (0, i.jsx)(o.default, {
                                                className: (0, n.Z)(r().title, "line-clamp-3"),
                                                size: "lg",
                                                children: t.attributes.title
                                            })
                                        }), (0, i.jsx)(o.default, {
                                            className: (0, n.Z)(r().desc, "line-clamp-3"),
                                            children: (null === (m = t.attributes) || void 0 === m ? void 0 : null === (v = m.seo) || void 0 === v ? void 0 : v.metaDesc) ? null === (y = t.attributes) || void 0 === y ? void 0 : null === (g = y.seo) || void 0 === g ? void 0 : g.metaDesc : null === (j = t.attributes) || void 0 === j ? void 0 : null === (x = j.seo) || void 0 === x ? void 0 : x.metaDescription
                                        }), (0, i.jsxs)("div", {
                                            className: r().infos,
                                            children: [(0, i.jsxs)(o.default, {
                                                className: (0, n.Z)(r().info, "line-clamp-3"),
                                                children: [(0, i.jsx)(f.default, {
                                                    src: "/icons/calendar.svg",
                                                    alt: "Calendar",
                                                    width: 20,
                                                    height: 20
                                                }), (0, b.ie)(t.createdAt)]
                                            }), (0, i.jsxs)(o.default, {
                                                className: (0, n.Z)(r().info, "line-clamp-3"),
                                                children: [(0, i.jsx)(f.default, {
                                                    src: (null === (w = (0, b.Eh)(null === (N = t.attributes.authors) || void 0 === N ? void 0 : N[0], s)) || void 0 === w ? void 0 : w.attributes.img) || "/icons/user.svg",
                                                    alt: "User",
                                                    width: 20,
                                                    height: 20
                                                }), null === (k = (0, b.Eh)(null === (Z = t.attributes.authors) || void 0 === Z ? void 0 : Z[0], s)) || void 0 === k ? void 0 : k.attributes.title]
                                            })]
                                        }), (0, i.jsx)(d.default, {
                                            className: r().button,
                                            href: (null == t ? void 0 : null === (C = t.attributes) || void 0 === C ? void 0 : C.slug) ? "/blog/".concat(null == t ? void 0 : null === (D = t.attributes) || void 0 === D ? void 0 : D.slug) : "/blog#",
                                            children: "Read More"
                                        })]
                                    })]
                                }, e)
                            })
                        }),
                        //  (0, i.jsx)(h.default, {
                        //     className: r().moreButton,
                        //     color: "primary",
                        //     disabled: !e || (null == e ? void 0 : e.length) <= p,
                        //     onClick: () => {
                        //         y(t => t + 3)
                        //     },
                        //     children: "Show More"
                        // })
                    ]
                    })]
                })
            }
        },
        70499: function (t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function () {
                    return h
                }
            });
            var i = l(57437),
                s = l(87138),
                r = l(60231),
                a = l.n(r),
                n = l(44839),
                o = l(2265),
                d = l(16609),
                u = l(49582),
                c = l(78002),
                _ = l(16463);

            function h(t) {
                let {
                    href: e,
                    className: l,
                    children: r,
                    target: h,
                    onClick: v,
                    direction: m,
                    directionMobile: g = m,
                    translateY: f = 0,
                    translateX: b = 0,
                    duration: p = .8,
                    rotateX: y = 0,
                    rotateY: x = 0,
                    ease: j = "back.out",
                    opacity: w = 0,
                    animate: N,
                    start: k = 80,
                    end: Z = 60,
                    color: C = "primary",
                    disabled: D,
                    type: E = "button"
                } = t, F = (0, o.useRef)(null), B = (0, o.useRef)(null), X = (0, c.Z)(), {
                    useGSAP: Y,
                    activatedGsap: P
                } = (0, d.Z)(), q = (0, _.usePathname)();
                return Y(() => {
                    if ("/" == q) {
                        let t;
                        if (F.current && (t = F), B.current && (t = B), P && N && t && t.current && (null == X ? void 0 : X.width)) {
                            let e, l;
                            (null == X ? void 0 : X.width) < 992 ? (b = "right" == g ? -200 : "left" == g ? 200 : b, f = "top" == g ? 200 : "bottom" == g ? -200 : f) : (f = "top" == m ? 200 : "bottom" == m ? -200 : f, b = "right" == m ? -200 : "left" == m ? 200 : b);
                            let i = u.ZP.timeline({
                                scrollTrigger: {
                                    trigger: t.current,
                                    start: "top ".concat((null == X ? void 0 : X.width) < 992 ? k - 10 : k, "%"),
                                    end: "top ".concat((null == X ? void 0 : X.width) < 992 ? Z - 15 : Z - 10, "%"),
                                    scrub: 1,
                                    markers: !1
                                }
                            });
                            return e = (null == X ? void 0 : X.width) > 1440 ? b : (null == X ? void 0 : X.width) < 992 ? (null == X ? void 0 : X.width) / 500 * b : (null == X ? void 0 : X.width) / 1440 * b, l = (null == X ? void 0 : X.width) > 1440 ? f : (null == X ? void 0 : X.width) < 992 ? (null == X ? void 0 : X.width) / 500 * f : (null == X ? void 0 : X.width) / 1440 * f, i.from(t.current, {
                                translateY: l,
                                translateX: e,
                                rotateX: y,
                                rotateY: x,
                                opacity: w,
                                duration: p,
                                ease: j
                            }).to(t.current, {
                                translateY: 0,
                                rotateX: 0,
                                rotateY: 0,
                                translateX: 0,
                                opacity: 1
                            }), () => i.kill()
                        }
                    }
                }, [P, q]), (0, i.jsx)(i.Fragment, {
                    children: e ? h && "_blank" == h ? (0, i.jsxs)(s.default, {
                        ref: B,
                        href: e,
                        target: h,
                        rel: "noopener noreferrer",
                        prefetch: !1,
                        onClick: v,
                        className: (0, n.Z)(a().button, l, a()[C]),
                        children: [r, (0, i.jsx)("span", {
                            className: a().wrap
                        })]
                    }) : (0, i.jsxs)(s.default, {
                        ref: B,
                        href: e,
                        target: h,
                        rel: "",
                        onClick: v,
                        className: (0, n.Z)(a().button, l, a()[C]),
                        children: [r, (0, i.jsx)("span", {
                            className: a().wrap
                        })]
                    }) : (0, i.jsxs)("button", {
                        type: E,
                        disabled: D,
                        ref: F,
                        onClick: v,
                        className: (0, n.Z)(a().button, l, a()[C]),
                        children: [r, (0, i.jsx)("span", {
                            className: a().wrap
                        })]
                    })
                })
            }
        },
        42625: function (t, e, l) {
            "use strict";
            var i = l(57437),
                s = l(44839),
                r = l(58538),
                a = l.n(r);
            let n = (0, l(2265).forwardRef)((t, e) => {
                let {
                    children: l,
                    className: r,
                    size: n,
                    classic: o,
                    ...d
                } = t;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        ref: e,
                        className: (0, s.Z)(a().container, r, n && a()[n], o && a().classic),
                        ...d,
                        children: l
                    })
                })
            });
            n.displayName = "Container", e.Z = n
        },
        43615: function (t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function () {
                    return h
                }
            });
            var i = l(57437),
                s = l(2265),
                r = l(48241),
                a = l.n(r),
                n = l(87138),
                o = l(44839),
                d = l(78002),
                u = l(16609),
                c = l(49582),
                _ = l(16463);

            function h(t) {
                let {
                    href: e,
                    download: l,
                    className: r,
                    target: h,
                    children: v,
                    color: m = "primary",
                    onClick: g,
                    direction: f,
                    directionMobile: b = f,
                    translateY: p = 0,
                    translateX: y = 0,
                    duration: x = .8,
                    rotateX: j = 0,
                    rotateY: w = 0,
                    ease: N = "back.out",
                    opacity: k = 0,
                    animate: Z,
                    start: C = 80,
                    end: D = 60,
                    ...E
                } = t, F = (0, d.Z)(), B = (0, s.useRef)(null), {
                    useGSAP: X,
                    activatedGsap: Y
                } = (0, u.Z)(), P = (0, _.usePathname)();
                return X(() => {
                    if ("/" == P && Y && Z && B.current && (null == F ? void 0 : F.width)) {
                        let t, e;
                        (null == F ? void 0 : F.width) < 992 ? (y = "right" == b ? -200 : "left" == b ? 200 : y, p = "top" == b ? 200 : "bottom" == b ? -200 : p) : (p = "top" == f ? 200 : "bottom" == f ? -200 : p, y = "right" == f ? -200 : "left" == f ? 200 : y);
                        let l = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: B.current,
                                start: "top ".concat((null == F ? void 0 : F.width) < 992 ? C - 10 : C, "%"),
                                end: "top ".concat((null == F ? void 0 : F.width) < 992 ? D - 15 : D - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return t = (null == F ? void 0 : F.width) > 1440 ? y : (null == F ? void 0 : F.width) < 992 ? (null == F ? void 0 : F.width) / 500 * y : (null == F ? void 0 : F.width) / 1440 * y, e = (null == F ? void 0 : F.width) > 1440 ? p : (null == F ? void 0 : F.width) < 992 ? (null == F ? void 0 : F.width) / 500 * p : (null == F ? void 0 : F.width) / 1440 * p, l.from(B.current, {
                            translateY: e,
                            translateX: t,
                            rotateX: j,
                            rotateY: w,
                            opacity: k,
                            duration: x,
                            ease: N
                        }).to(B.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => l.kill()
                    }
                }, [F, Y, P]), h && "_blank" == h ? (0, i.jsx)(n.default, {
                    ref: B,
                    download: l,
                    href: e,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: g,
                    className: (0, o.Z)(a().customlink, a()[m], r),
                    ...E,
                    children: v
                }) : (0, i.jsx)(n.default, {
                    ref: B,
                    download: l,
                    href: e,
                    target: h,
                    onClick: g,
                    className: (0, o.Z)(a().customlink, a()[m], r),
                    ...E,
                    children: v
                })
            }
        },
        60357: function (t) {
            t.exports = {
                container: "style_container__E_htq",
                title: "style_title__Ubdj8",
                list: "style_list__91rgv",
                active: "style_active__VpBw1"
            }
        },
        66391: function (t) {
            t.exports = {
                blog: "style_blog__Mvbds",
                container: "style_container__Zztbd",
                swiper: "style_swiper__1EXBT",
                slide: "style_slide__Hlx0D",
                blogWrapper: "style_blogWrapper__awAK_",
                sliderItem: "style_sliderItem__A2XBi",
                img: "style_img__Gjh2a",
                content: "style_content___IYrX",
                title: "style_title__5zoZj",
                button: "style_button__UC0Zs",
                item: "style_item__7q9xi",
                infos: "style_infos__7wGVA",
                info: "style_info__EjYMe",
                cards: "style_cards__hl507",
                loading: "style_loading__hAETz",
                revealDev: "style_revealDev__uEaq5",
                moreButton: "style_moreButton__kK5LO"
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
        48241: function (t) {
            t.exports = {
                customlink: "style_customlink___bLW0",
                primary: "style_primary__NaDFQ",
                light: "style_light___QhFW",
                dark: "style_dark__F5y8x"
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
        }
    }
]);