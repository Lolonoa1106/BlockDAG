"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6609], {
        13259: function (t, e, r) {
            r.d(e, {
                D3: function () {
                    return l
                },
                PQ: function () {
                    return a
                },
                T5: function () {
                    return w
                },
                UK: function () {
                    return f
                },
                Uz: function () {
                    return v
                },
                XI: function () {
                    return g
                },
                YJ: function () {
                    return o
                },
                ej: function () {
                    return u
                },
                gG: function () {
                    return c
                },
                ob: function () {
                    return k
                },
                rz: function () {
                    return h
                },
                sc: function () {
                    return p
                },
                uU: function () {
                    return s
                },
                wd: function () {
                    return d
                },
                yM: function () {
                    return m
                },
                zA: function () {
                    return i
                }
            });
            var n = r(20357);
            let o = "https://app.uniswap.org/",
                i = "/how-to-buy",
                // a = "https://apps.apple.com",
                c = "#",
                s = "https://api.bdagapiserver.com/api/v2/barong/public/users/metrics",
                u = "pk.eyJ1IjoiYmxvY2tkYWduZXR3b3JrIiwiYSI6ImNtN3Z4YjFpMjAxYjEycXNuOW54ZGMwN3MifQ.QNDH25sl5Hwt_OCo1wwT6A",
                d = "https://primordial.bdagscan.com/",
                l = "https://ide.primordial.bdagscan.com/",
                f = "https://coldwallet.com/",
                p = "https://academy.blockdag.network/",
                h = "https://wiki.blockdag.network/blockdag-wiki",
                w = "https://presaleapi.blockdag.network",
                g = "https://leadapi.blockdag.network",
                m = "https://blockdag.network/";
            n.env.NEXTAUTH_URL, n.env.NEXT_LOCAL;
            let v = "https://preapi.blockdag.network/",
                k = {
                    headers: {
                        project: m
                    }
                }
        },
        16609: function (t, e, r) {
            r.d(e, {
                BaseProvider: function () {
                    return g
                },
                Z: function () {
                    return m
                }
            });
            var n = r(57437),
                o = r(13259),
                i = r(38472);
            let a = async t => {
                try {
                    return await i.Z.get("".concat(o.Uz).concat(t))
                } catch (t) {
                    throw console.error("Failed to fetch data:", t), t
                }
            };
            var c = r(762),
                s = r(2265),
                u = r(49582),
                d = r(60019),
                l = r(66098),
                f = r.n(l),
                p = r(78002),
                h = r(16463);
            u.ZP.registerPlugin(d.V, f());
            let w = (0, s.createContext)(void 0),
                g = t => {
                    let {
                        children: e
                    } = t, [r, u] = (0, s.useState)(!1), [l, f] = (0, s.useState)(!0), [g, m] = (0, s.useState)(!1), v = (0, p.Z)(), k = (0, h.usePathname)();
                    (0, s.useEffect)(() => {
                        (null == v ? void 0 : v.width) && (document.body.classList.add("sizeChanged"), setTimeout(() => {
                            document.body.classList.remove("sizeChanged")
                        }, 50))
                    }, [null == v ? void 0 : v.width]);
                    let [b, y] = (0, s.useState)(void 0), [P, S] = (0, s.useState)(void 0), [T, E] = (0, s.useState)({
                        ETH: 1,
                        BNB: 1,
                        USDT: 1,
                        NP: 1,
                        PAPARA: 1
                    });
                    (0, s.useEffect)(() => {
                        l || "/" != k || f(!0)
                    }, [l, k]), (0, s.useEffect)(() => {
                        i.Z.get("".concat(o.T5, "/user-country"), o.ob).then(t => {
                            200 == t.status ? y(t.data.userCountry) : y("US")
                        }).catch(t => {
                            console.log(t), y("US")
                        })
                    }, []);
                    let B = async () => {
                        try {
                            let t = await a("root");
                            if (t && t.data) {
                                let e = null == t ? void 0 : t.data;
                                S(null == e ? void 0 : e.coin)
                            } else i.Z.get("".concat(o.T5, "/blockdag?project=").concat(o.yM), {
                                headers: {
                                    project: o.yM
                                }
                            }).then(t => {
                                if (200 === t.status) {
                                    var e;
                                    S(null === (e = t.data) || void 0 === e ? void 0 : e.coin)
                                }
                            })
                        } catch (t) {
                            i.Z.get("".concat(o.T5, "/blockdag?project=").concat(o.yM), {
                                headers: {
                                    project: o.yM
                                }
                            }).then(t => {
                                if (200 === t.status) {
                                    var e;
                                    S(null === (e = t.data) || void 0 === e ? void 0 : e.coin)
                                }
                            })
                        }
                    }, N = async () => {
                        try {
                            let t = await a("prices");
                            if (t && t.data) {
                                let e = t.data;
                                if (e.ETH && e.BNB && e.TRY) {
                                    let t = {
                                        etherPrice: 1 / e.ETH,
                                        bnbPrice: 1 / e.BNB,
                                        tryPrice: 1 / e.TRY
                                    };
                                    localStorage.setItem("prices", JSON.stringify(t)), E({
                                        ETH: 1 / e.ETH,
                                        BNB: 1 / e.BNB,
                                        USDT: 1,
                                        NP: 1,
                                        PAPARA: 1 / e.TRY
                                    })
                                }
                            } else i.Z.get("https://min-api.cryptocompare.com/data/price?fsym=usd&tsyms=eth,bnb,try").then(t => {
                                if (200 === t.status) {
                                    let e = {
                                        etherPrice: 1 / t.data.ETH,
                                        bnbPrice: 1 / t.data.BNB,
                                        tryPrice: 1 / t.data.TRY
                                    };
                                    localStorage.setItem("prices", JSON.stringify(e)), E({
                                        ETH: 1 / t.data.ETH,
                                        BNB: 1 / t.data.BNB,
                                        USDT: 1,
                                        NP: 1,
                                        PAPARA: 1 / t.data.TRY
                                    })
                                }
                            }).catch(t => {
                                console.error("Error fetching prices:", t);
                                let e = localStorage.getItem("prices");
                                if (e) {
                                    let t = JSON.parse(e);
                                    E({
                                        ETH: t.etherPrice,
                                        BNB: t.bnbPrice,
                                        USDT: 1,
                                        NP: 1,
                                        PAPARA: t.tryPrice
                                    })
                                }
                            })
                        } catch (t) {
                            i.Z.get("https://min-api.cryptocompare.com/data/price?fsym=usd&tsyms=eth,bnb,try").then(t => {
                                if (200 === t.status) {
                                    let e = {
                                        etherPrice: 1 / t.data.ETH,
                                        bnbPrice: 1 / t.data.BNB,
                                        tryPrice: 1 / t.data.TRY
                                    };
                                    localStorage.setItem("prices", JSON.stringify(e)), E({
                                        ETH: 1 / t.data.ETH,
                                        BNB: 1 / t.data.BNB,
                                        USDT: 1,
                                        NP: 1,
                                        PAPARA: 1 / t.data.TRY
                                    })
                                }
                            }).catch(t => {
                                console.error("Error fetching prices:", t);
                                let e = localStorage.getItem("prices");
                                if (e) {
                                    let t = JSON.parse(e);
                                    E({
                                        ETH: t.etherPrice,
                                        BNB: t.bnbPrice,
                                        USDT: 1,
                                        NP: 1,
                                        PAPARA: t.tryPrice
                                    })
                                }
                            })
                        }
                    };
                    (0, s.useEffect)(() => {
                        B(), N();
                        let t = setInterval(() => {
                            u(t => !t)
                        }, 6e5);
                        return () => clearInterval(t)
                    }, [r]), (0, s.useEffect)(() => {
                        (() => {
                            {
                                var t, e, r, n;
                                let o = new URLSearchParams(window.location.search),
                                    i = o.get("utm_source"),
                                    a = o.get("source"),
                                    s = o.get("utm_medium"),
                                    u = o.get("utm_campaign"),
                                    d = (null === (n = window) || void 0 === n ? void 0 : null === (r = n.location) || void 0 === r ? void 0 : null === (e = r.href) || void 0 === e ? void 0 : null === (t = e.split("?")) || void 0 === t ? void 0 : t[1]) || "";
                                i && "Trust_iOS_Browser" !== i && (0, c.MS)("blockdag.utm_source", i, 1), s && (0, c.MS)("blockdag.utm_medium", s, 1), a && (0, c.MS)("blockdag.source", a, 1), u && (0, c.MS)("blockdag.utm_campaign", u, 1), d && (0, c.MS)("blockdag.all_params", "?".concat(d), 1)
                            }
                        })()
                    }, []), (0, s.useEffect)(() => {
                        (() => {
                            {
                                let t = new URLSearchParams(window.location.search).get("earnusdt");
                                t && "Trust_iOS_Browser" !== t && (0, c.MS)("blockdag.earnusdt", t, 20)
                            }
                        })()
                    }, []);
                    let [A, _] = (0, s.useState)(!1);
                    return (0, s.useEffect)(() => {
                        if ("/support" !== k) {
                            let t = document.getElementById("freshworks-container"),
                                e = document.getElementById("freshworks-widget-script");
                            e && t && (e.remove(), t.remove(), _(!1));
                            return
                        }
                        if (!A) {
                            if (document.getElementById("freshworks-widget-script")) {
                                _(!0);
                                return
                            }
                            window.fwSettings = {
                                widget_id: 501000000666
                            }, "function" != typeof window.FreshworksWidget && (window.FreshworksWidget = function () {
                                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                window.FreshworksWidget.q = window.FreshworksWidget.q || [], window.FreshworksWidget.q.push(e)
                            });
                            let t = document.createElement("script");
                            t.id = "freshworks-widget-script", t.type = "text/javascript", t.src = "https://mec-widget.freshworks.com/widgets/501000000666.js", t.async = !0, t.defer = !0, t.onload = () => _(!0), document.body.appendChild(t)
                        }
                        if ("/support" !== k) {
                            let t = document.getElementById("freshworks-container"),
                                e = document.getElementById("freshworks-widget-script");
                            e && t && (e.remove(), t.remove(), _(!1))
                        }
                    }, [k, A]), (0, n.jsx)(w.Provider, {
                        value: {
                            tokenData: P,
                            heroActive: g,
                            setHeroActive: m,
                            country: b,
                            prices: T,
                            useGSAP: d.V,
                            activatedGsap: l
                        },
                        children: e
                    })
                };
            var m = () => {
                let t = (0, s.useContext)(w);
                if (!t) throw Error("useBase must be used within a WalletProvider");
                return t
            }
        },
        78002: function (t, e, r) {
            r.d(e, {
                Z: function () {
                    return o
                }
            });
            var n = r(2265);

            function o() {
                function t() {
                    var t, e;
                    return {
                        width: null === (t = window) || void 0 === t ? void 0 : t.innerWidth,
                        height: null === (e = window) || void 0 === e ? void 0 : e.innerHeight
                    }
                }
                let [e, r] = (0, n.useState)(t);
                return (0, n.useEffect)(() => {
                    var e;

                    function n() {
                        r(t())
                    }
                    return null === (e = window) || void 0 === e || e.addEventListener("resize", n), () => {
                        var t;
                        return null === (t = window) || void 0 === t ? void 0 : t.removeEventListener("resize", n)
                    }
                }, []), e
            }
        },
        762: function (t, e, r) {
            function n(t, e, r) {
                let n = new Date;
                n.setTime(n.getTime() + 6e4 * r);
                let o = "expires=" + n.toUTCString();
                document.cookie = t + "=" + e + ";" + o + ";domain=.blockdag.network;path=/", document.cookie = t + "=" + e + ";" + o + ";path=/"
            }
            r.d(e, {
                Eh: function () {
                    return a
                },
                HN: function () {
                    return i
                },
                MS: function () {
                    return n
                },
                ie: function () {
                    return o
                }
            });
            let o = t => t ? new Date(t).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }) : null,
                i = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                a = (t, e) => "John Doe" != t && t ? e.find(e => e.attributes.title === t) : e.find(t => "Jake Morrison" === t.attributes.title)
        }
    }
]);