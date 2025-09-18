(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7096], {
        79554: function (e, t, s) {
            "use strict";
            s.d(t, {
                default: function () {
                    return x
                }
            });
            var i = s(57437),
                l = s(5735),
                n = s.n(l),
                a = s(44839),
                r = s(36018),
                o = s.n(r),
                c = s(21360),
                d = s(87580),
                h = s(762),
                u = s(43615),
                m = s(87138);

            function p(e) {
                var t, s, l, n, r, p, _, g;
                let {
                    dev: f,
                    index: x,
                    length: v,
                    className: j
                } = e;
                return (0, i.jsxs)("div", {
                    className: (0, a.Z)(o().devcard, j),
                    children: [(0, i.jsx)("div", {
                        className: o().img,
                        children: (0, i.jsx)(d.default, {
                            className: o().number,
                            size: "sm",
                            children: v - x
                        })
                    }), (0, i.jsxs)("div", {
                        className: o().content,
                        children: [(0, i.jsx)(m.default, {
                            href: "/dev-releases/".concat((null === (t = f.attributes) || void 0 === t ? void 0 : t.slug) || "#"),
                            children: (0, i.jsxs)(c.default, {
                                className: o().title,
                                size: "lg",
                                children: ["Dev Releases ", v - x]
                            })
                        }), (0, i.jsx)(c.default, {
                            className: o().date,
                            children: (0, h.ie)(f.createdAt)
                        }), (0, i.jsx)(c.default, {
                            className: (0, a.Z)(o().desc, "line-clamp-3"),
                            children: (null === (l = f.attributes) || void 0 === l ? void 0 : null === (s = l.seo) || void 0 === s ? void 0 : s.metaDesc) ? null === (r = f.attributes) || void 0 === r ? void 0 : null === (n = r.seo) || void 0 === n ? void 0 : n.metaDesc : null === (_ = f.attributes) || void 0 === _ ? void 0 : null === (p = _.seo) || void 0 === p ? void 0 : p.metaDescription
                        }), (0, i.jsx)(u.default, {
                            className: o().button,
                            href: "/dev-releases/".concat((null === (g = f.attributes) || void 0 === g ? void 0 : g.slug) || "#"),
                            children: "Read More"
                        })]
                    })]
                })
            }
            var _ = s(81079),
                g = s(2265),
                f = s(70499);

            function x(e) {
                let {
                    devData: t,
                    heading: s
                } = e, [l, r] = (0, g.useState)(6);
                return (0, i.jsxs)("div", {
                    className: n().devWrapper,
                    children: [(0, i.jsx)(_.default, {
                        direction: "top",
                        className: n().cards,
                        children: null == t ? void 0 : t.map((e, s) => (0, i.jsx)(p, {
                            className: (0, a.Z)(s + 1 > l && "".concat(n().loading, " d-md d-sm")),
                            length: t.length,
                            dev: e,
                            index: s
                        }, s))
                    }), (0, i.jsx)(f.default, {
                        className: n().button,
                        color: s ? "dark" : "transparent-dark",
                        disabled: !t || (null == t ? void 0 : t.length) <= l,
                        onClick: () => {
                            r(e => e + 3)
                        },
                        children: "Show More"
                    })]
                })
            }
        },
        85580: function (e, t, s) {
            "use strict";
            s.d(t, {
                default: function () {
                    return m
                }
            });
            var i = s(57437),
                l = s(32913),
                n = s(56311),
                a = s.n(n),
                r = s(42625),
                o = s(58350),
                c = s(21360),
                d = s(44839),
                h = s(5540),
                u = s(53267);

            function m(e) {
                let {} = e, t = [{
                    status: "completed",
                    phase: "1",
                    title: "January 2024",
                    lists: [{
                        title: "Project Initiation",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Team and Project Formation"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "High Level Scoping & Design"
                        })]
                    }, {
                        title: "Development",
                        desc: "Development of Core Blockchain & Explorer",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Core Blockchain, DAG, UTXO & EVM"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Proof of work consensus mechanism"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Explorer, with Faucet"
                        })]
                    }],
                    href: "#"
                }, {
                    status: "completed",
                    phase: "1",
                    title: "September 2024",
                    lists: [{
                        title: "Testnet AwakeningLaunch (Alpha)",
                        desc: "Public Launch of Testnet Awakeningto the community for testing of the Explorer, Faucet, as well as setting up and running nodes.",
                        list: void 0
                    }],
                    href: "#"
                }, {
                    status: "completed",
                    phase: "1",
                    title: "October 2024",
                    lists: [{
                        title: "Planning & Preparation",
                        desc: "Planning & Preparation for the 2nd phase of the project, including finalizing the roadmap and increasing the team size to allow for the additional development work.",
                        list: void 0
                    }],
                    href: "#"
                }, {
                    status: "completed",
                    phase: "1",
                    title: "October 2024",
                    lists: [{
                        title: "Code Completion",
                        desc: "This final version of BlockDAG 1.0 includes the following additional functionality added after the Testnet Awakening:",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Optimizations and Improvements"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Contract Visualizer & Verifications"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Nodes Visualizer"
                        })]
                    }],
                    href: "#"
                }, {
                    status: "completed",
                    phase: "1",
                    title: "November 2024",
                    lists: [{
                        title: "BlockDAG 1.0 Completion",
                        desc: "This step represents the completion of BlockDAG 1.0 as initially planned.",
                        list: void 0
                    }, {
                        title: "Testnet Awakening Development Completion",
                        desc: "Development of the core blockchain, including the BlockDAG nodes, consensus, Explorer, and Faucet.",
                        list: void 0
                    }],
                    href: "#"
                }, {
                    status: "completed",
                    phase: "2",
                    title: "Q1 2025",
                    lists: [{
                        title: "3rd Party Audit",
                        desc: "A 3rd party security audit on the BlockDAG 1.0 smart contracts",
                        list: void 0
                    }, {
                        title: "Blockchain Improvements",
                        desc: "Improvements will be made to the core blockchain as well as the Explorer",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Explorer: Miner Visualizer"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Blockchain Performance & Storage Optimizations"
                        })]
                    }],
                    href: "#"
                }, {
                    status: "planned",
                    phase: "2",
                    title: "Q2 2025",
                    lists: [{
                        title: "Blockchain Features",
                        desc: "Additional features will be added to the core blockchain as well as the Explorer",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Fee Customizations Module"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Fee Sharing Module"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Explorer Analytics Module"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Custom Mining Rewards"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Blockchain Upgradeability"
                        })]
                    }, {
                        desc: "Interoperability with popular wallets:",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Plus Wallet"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Trust Wallet"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Others\xa0"
                        })]
                    }],
                    href: "#"
                }, {
                    status: "planned",
                    phase: "2",
                    title: "2025",
                    lists: [{
                        title: "StableCoins",
                        desc: "Stablecoins are an essential component of DeFi and any Layer 1 Blockchain. BlockDAG will incorporate the following Stablecoins:",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Tether: USDT"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Circle:\xa0 USDC"
                        })]
                    }, {
                        title: "Low Code IDE & Launchpad",
                        desc: "To facilitate easy launching of tokens & NFTs for non-technical persons. This includes launching tokens with advanced features such as:",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Staking"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Swaps"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Airdrops"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Lockups & vesting schedules"
                        })]
                    }],
                    href: "#"
                }, {
                    status: "planned",
                    phase: "2",
                    title: "2025",
                    lists: [{
                        title: "DeFi Functionality",
                        desc: "BlockDAG is building it’s own DeFi functionality:",
                        list: [(0, i.jsx)(i.Fragment, {
                            children: "Pseudo Staking"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Swaps (on the BlockDAG chain)"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Lending & Borrowing"
                        }), (0, i.jsx)(i.Fragment, {
                            children: "Bridging (between BlockDAG and other chains)"
                        })]
                    }],
                    href: "#"
                }, {
                    status: "planned",
                    phase: "2",
                    title: "2025",
                    lists: [{
                        title: "Testnet AwakeningFinal",
                        desc: "The final version of the Testnet Awakeningwill allow the community to test the full set of features prior to going live. The development team will also perform final load and stress tests.\xa0",
                        list: void 0
                    }, {
                        title: "Audit - Final",
                        desc: "A 3rd party security audit on all smart contracts",
                        list: void 0
                    }, {
                        title: "Testnet Awakening LAUNCH",
                        desc: "During this phase of development we’re adding significant improvements to the core blockchain, as well as Stablecoins, DeFi, a Launchpad, and other innovative and valuable functionality.",
                        list: void 0
                    }],
                    href: "#"
                }];
                return (0, i.jsxs)(l.Z, {
                    id: "roadmap",
                    className: a().roadmap,
                    children: [(0, i.jsxs)(r.Z, {
                        className: a().container,
                        children: [(0, i.jsx)(o.Z, {
                            align: "center",
                            title: "Roadmap",
                            desc: "BlockDAG represents the next evolution in blockchain technology, designed to address the limitations of traditional blockchain systems. Unlike conventional blockchains that process transactions in a linear sequence."
                        }), (0, i.jsx)(c.default, {
                            size: "lg",
                            className: "text-center font-bold",
                            children: "We have completed our Phase 1 roadmap as promised!"
                        })]
                    }), (0, i.jsx)(u.tq, {
                        id: "updatesSwiper",
                        className: (0, d.Z)(a().swiper),
                        modules: [h.tl, h.s5],
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
                        children: t.map((e, t) => (0, i.jsx)(u.o5, {
                            className: a().slide,
                            children: (0, i.jsxs)("div", {
                                className: a().item,
                                children: [(0, i.jsxs)(c.default, {
                                    size: "xl",
                                    className: (0, d.Z)(a().listTitle, "font-bold"),
                                    children: [e.title, (0, i.jsxs)(c.default, {
                                        component: "span",
                                        className: (0, d.Z)(a().phase),
                                        children: ["Phase ", e.phase]
                                    })]
                                }), e.status && (0, i.jsx)("div", {
                                    className: (0, d.Z)(a().status, a()[e.status]),
                                    children: "progress" == e.status ? "IN PROGRESS" : e.status
                                }), e.lists.map((e, t) => (0, i.jsxs)("div", {
                                    className: a().list,
                                    children: [e.title && (0, i.jsx)(c.default, {
                                        size: "lg",
                                        className: "font-bold",
                                        children: e.title
                                    }), e.desc && (0, i.jsx)(c.default, {
                                        children: e.desc
                                    }), (null == e ? void 0 : e.list) && (0, i.jsx)("ul", {
                                        children: e.list.map((e, t) => (0, i.jsx)("li", {
                                            children: (0, i.jsx)(c.default, {
                                                children: e
                                            })
                                        }, t))
                                    })]
                                }, t))]
                            }, t)
                        }, t))
                    })]
                })
            }
        },
        58350: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return d
                }
            });
            var i = s(57437),
                l = s(44839),
                n = s(21360),
                a = s(87580),
                r = s(84395),
                o = s(18803),
                c = s.n(o);

            function d(e) {
                let {
                    subtitle: t,
                    subtitleColor: s,
                    title: o,
                    bigdesc: d,
                    titleBottomContent: h,
                    largedesc: u,
                    desc: m,
                    subtitleComponent: p,
                    titleComponent: _,
                    align: g = "center",
                    alignMobile: f = g,
                    bg: x = "dark",
                    animate: v = !0,
                    direction: j = "right",
                    maxWidth: b,
                    className: y,
                    largedescClass: k,
                    bigdescClass: F,
                    descClass: w
                } = e;
                return (0, i.jsxs)("div", {
                    className: (0, l.Z)(c().heading, c()[g], g !== f && c()["sm-".concat(f)], b && c().max, y && y),
                    children: [t && (0, i.jsx)(r.default, {
                        color: s || ("light" == x ? "dark" : "primary" == x ? "light" : "primary"),
                        component: p,
                        animate: v,
                        direction: j,
                        className: c().subtitle,
                        children: t
                    }), o && (0, i.jsx)(a.default, {
                        animate: v,
                        direction: j,
                        component: _,
                        className: c().title,
                        children: o
                    }), h && h, u && (0, i.jsx)(n.default, {
                        animate: v,
                        direction: j,
                        className: (0, l.Z)(c().bigdesc, c().largedesc, c()[x], k),
                        size: "xl",
                        children: u
                    }), d && (0, i.jsx)(n.default, {
                        animate: v,
                        direction: j,
                        className: (0, l.Z)(c().bigdesc, c()[x], F),
                        size: "lg",
                        children: d
                    }), m && (0, i.jsx)(n.default, {
                        animate: v,
                        direction: j,
                        className: (0, l.Z)(c().desc, c()[x], w),
                        children: m
                    })]
                })
            }
        },
        32913: function (e, t, s) {
            "use strict";
            var i = s(57437),
                l = s(44839),
                n = s(14629),
                a = s.n(n);
            let r = (0, s(2265).forwardRef)((e, t) => {
                let {
                    children: s,
                    className: n,
                    color: r = "dark",
                    ...o
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        ref: t,
                        className: (0, l.Z)(a().section, a()[r], n),
                        ...o,
                        children: s
                    })
                })
            });
            r.displayName = "Section", t.Z = r
        },
        5735: function (e) {
            e.exports = {
                devreleases: "style_devreleases__ObT_M",
                container: "style_container__YKMqt",
                cards: "style_cards__vscfL",
                loading: "style_loading__hUaLe",
                revealDev: "style_revealDev__8w4FS",
                button: "style_button__B1g6u"
            }
        },
        56311: function (e) {
            e.exports = {
                roadmap: "style_roadmap___naA_",
                swiper: "style_swiper__pYHRx",
                slide: "style_slide__xnQfD",
                item: "style_item__zRHcP",
                listTitle: "style_listTitle__mlmLN",
                phase: "style_phase__zAWwf",
                status: "style_status__ex0eR",
                completed: "style_completed__610q3",
                progress: "style_progress__iVjFl",
                pending: "style_pending__ubL2m",
                list: "style_list__rmutB",
                button: "style_button__kwUTj"
            }
        },
        36018: function (e) {
            e.exports = {
                devcard: "style_devcard__HHSiF",
                img: "style_img__arX9f",
                content: "style_content__DIKMy",
                title: "style_title__8HQ6A",
                button: "style_button__7kB01"
            }
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
                imgWrapper: "style_imgWrapper__2Ez5g"
            }
        }
    }
]);