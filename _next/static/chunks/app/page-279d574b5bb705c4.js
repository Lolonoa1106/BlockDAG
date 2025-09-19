(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        25551: function (e, t, n) {
            Promise.resolve().then(n.t.bind(n, 38173, 23)), Promise.resolve().then(n.t.bind(n, 231, 23)), Promise.resolve().then(n.bind(n, 14904)), Promise.resolve().then(n.t.bind(n, 45814, 23)), Promise.resolve().then(n.bind(n, 97639)), Promise.resolve().then(n.bind(n, 92300)), Promise.resolve().then(n.t.bind(n, 26766, 23)), Promise.resolve().then(n.bind(n, 79336)), Promise.resolve().then(n.bind(n, 90062)), Promise.resolve().then(n.t.bind(n, 26143, 23)), Promise.resolve().then(n.t.bind(n, 72232, 23)), Promise.resolve().then(n.t.bind(n, 63450, 23)), Promise.resolve().then(n.bind(n, 9411)), Promise.resolve().then(n.t.bind(n, 35234, 23)), Promise.resolve().then(n.bind(n, 87452)), Promise.resolve().then(n.bind(n, 43377)), Promise.resolve().then(n.bind(n, 15858)), Promise.resolve().then(n.bind(n, 81079)), Promise.resolve().then(n.bind(n, 39113)), Promise.resolve().then(n.bind(n, 70499)), Promise.resolve().then(n.t.bind(n, 58538, 23)), Promise.resolve().then(n.bind(n, 43615)), Promise.resolve().then(n.t.bind(n, 18803, 23)), Promise.resolve().then(n.bind(n, 47984)), Promise.resolve().then(n.bind(n, 45419)), Promise.resolve().then(n.t.bind(n, 14629, 23)), Promise.resolve().then(n.bind(n, 21360)), Promise.resolve().then(n.bind(n, 87580)), Promise.resolve().then(n.bind(n, 84395))
        },
        39053: function (e, t, n) {
            (e.exports = n(45240)).tz.load(n(46564))
        },
        45240: function (e, t, n) {
            var s, i, l;
            l = function (e) {
                "use strict";
                void 0 === e.version && e.default && (e = e.default);
                var t, n, s = {},
                    i = {},
                    l = {},
                    r = {},
                    a = {};
                e && "string" == typeof e.version || w("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
                var _ = e.version.split("."),
                    o = +_[0],
                    c = +_[1];

                function d(e) {
                    return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48
                }

                function u(e) {
                    var t, n = 0,
                        s = e.split("."),
                        i = s[0],
                        l = s[1] || "",
                        r = 1,
                        a = 0,
                        _ = 1;
                    for (45 === e.charCodeAt(0) && (n = 1, _ = -1); n < i.length; n++) a = 60 * a + (t = d(i.charCodeAt(n)));
                    for (n = 0; n < l.length; n++) r /= 60, a += (t = d(l.charCodeAt(n))) * r;
                    return a * _
                }

                function m(e) {
                    for (var t = 0; t < e.length; t++) e[t] = u(e[t])
                }

                function h(e, t) {
                    var n, s = [];
                    for (n = 0; n < t.length; n++) s[n] = e[t[n]];
                    return s
                }

                function y(e) {
                    var t = e.split("|"),
                        n = t[2].split(" "),
                        s = t[3].split(""),
                        i = t[4].split(" ");
                    return m(n), m(s), m(i),
                        function (e, t) {
                            for (var n = 0; n < t; n++) e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
                            e[t - 1] = 1 / 0
                        }(i, s.length), {
                            name: t[0],
                            abbrs: h(t[1].split(" "), s),
                            offsets: h(n, s),
                            untils: i,
                            population: 0 | t[5]
                        }
                }

                function g(e) {
                    e && this._set(y(e))
                }

                function f(e, t) {
                    this.name = e, this.zones = t
                }

                function p(e) {
                    var t = e.toTimeString(),
                        n = t.match(/\([a-z ]+\)/i);
                    "GMT" === (n = n && n[0] ? (n = n[0].match(/[A-Z]/g)) ? n.join("") : void 0 : (n = t.match(/[A-Z]{3,5}/g)) ? n[0] : void 0) && (n = void 0), this.at = +e, this.abbr = n, this.offset = e.getTimezoneOffset()
                }

                function v(e) {
                    this.zone = e, this.offsetScore = 0, this.abbrScore = 0
                }

                function b(e, t) {
                    return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : e.zone.population !== t.zone.population ? t.zone.population - e.zone.population : t.zone.name.localeCompare(e.zone.name)
                }

                function x(e) {
                    return (e || "").toLowerCase().replace(/\//g, "_")
                }

                function T(e) {
                    var t, n, i, l;
                    for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) s[l = x(n = (i = e[t].split("|"))[0])] = e[t], r[l] = n,
                        function (e, t) {
                            var n, s;
                            for (m(t), n = 0; n < t.length; n++) a[s = t[n]] = a[s] || {}, a[s][e] = !0
                        }(l, i[2].split(" "))
                }

                function j(e, t) {
                    var n, l = s[e = x(e)];
                    return l instanceof g ? l : "string" == typeof l ? (l = new g(l), s[e] = l, l) : i[e] && t !== j && (n = j(i[e], j)) ? ((l = s[e] = new g)._set(n), l.name = r[e], l) : null
                }

                function B(e) {
                    var t, n, s, l;
                    for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) s = x((n = e[t].split("|"))[0]), l = x(n[1]), i[s] = l, r[s] = n[0], i[l] = s, r[l] = n[1]
                }

                function L(e) {
                    var t = "X" === e._f || "x" === e._f;
                    return !!(e._a && void 0 === e._tzm && !t)
                }

                function w(e) {
                    "undefined" != typeof console && "function" == typeof console.error && console.error(e)
                }

                function C(t) {
                    var n, s = Array.prototype.slice.call(arguments, 0, -1),
                        i = arguments[arguments.length - 1],
                        l = e.utc.apply(null, s);
                    return !e.isMoment(t) && L(l) && (n = j(i)) && l.add(n.parse(l), "minutes"), l.tz(i), l
                }(o < 2 || 2 === o && c < 6) && w("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"), g.prototype = {
                    _set: function (e) {
                        this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population
                    },
                    _index: function (e) {
                        var t;
                        if ((t = function (e, t) {
                                var n, s = t.length;
                                if (e < t[0]) return 0;
                                if (s > 1 && t[s - 1] === 1 / 0 && e >= t[s - 2]) return s - 1;
                                if (e >= t[s - 1]) return -1;
                                for (var i = 0, l = s - 1; l - i > 1;) t[n = Math.floor((i + l) / 2)] <= e ? i = n : l = n;
                                return l
                            }(+e, this.untils)) >= 0) return t
                    },
                    countries: function () {
                        var e = this.name;
                        return Object.keys(l).filter(function (t) {
                            return -1 !== l[t].zones.indexOf(e)
                        })
                    },
                    parse: function (e) {
                        var t, n, s, i, l = +e,
                            r = this.offsets,
                            a = this.untils,
                            _ = a.length - 1;
                        for (i = 0; i < _; i++)
                            if (t = r[i], n = r[i + 1], s = r[i ? i - 1 : i], t < n && C.moveAmbiguousForward ? t = n : t > s && C.moveInvalidForward && (t = s), l < a[i] - 6e4 * t) return r[i];
                        return r[_]
                    },
                    abbr: function (e) {
                        return this.abbrs[this._index(e)]
                    },
                    offset: function (e) {
                        return w("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(e)]
                    },
                    utcOffset: function (e) {
                        return this.offsets[this._index(e)]
                    }
                }, v.prototype.scoreOffsetAt = function (e) {
                    this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
                }, C.version = "0.5.46", C.dataVersion = "", C._zones = s, C._links = i, C._names = r, C._countries = l, C.add = T, C.link = B, C.load = function (e) {
                    T(e.zones), B(e.links),
                        function (e) {
                            var t, n, s, i;
                            if (e && e.length)
                                for (t = 0; t < e.length; t++) n = (i = e[t].split("|"))[0].toUpperCase(), s = i[1].split(" "), l[n] = new f(n, s)
                        }(e.countries), C.dataVersion = e.version
                }, C.zone = j, C.zoneExists = function e(t) {
                    return e.didShowError || (e.didShowError = !0, w("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")), !!j(t)
                }, C.guess = function (e) {
                    return (!n || e) && (n = function () {
                        try {
                            var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                            if (e && e.length > 3) {
                                var t = r[x(e)];
                                if (t) return t;
                                w("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
                            }
                        } catch (e) {}
                        var n, s, i, l = function () {
                                var e, t, n, s, i = new Date().getFullYear() - 2,
                                    l = new p(new Date(i, 0, 1)),
                                    r = l.offset,
                                    a = [l];
                                for (s = 1; s < 48; s++)(n = new Date(i, s, 1).getTimezoneOffset()) !== r && (a.push(e = function (e, t) {
                                    for (var n, s; s = ((t.at - e.at) / 12e4 | 0) * 6e4;)(n = new p(new Date(e.at + s))).offset === e.offset ? e = n : t = n;
                                    return e
                                }(l, t = new p(new Date(i, s, 1)))), a.push(new p(new Date(e.at + 6e4))), l = t, r = n);
                                for (s = 0; s < 4; s++) a.push(new p(new Date(i + s, 0, 1))), a.push(new p(new Date(i + s, 6, 1)));
                                return a
                            }(),
                            _ = l.length,
                            o = function (e) {
                                var t, n, s, i, l = e.length,
                                    _ = {},
                                    o = [],
                                    c = {};
                                for (t = 0; t < l; t++)
                                    if (s = e[t].offset, !c.hasOwnProperty(s)) {
                                        for (n in i = a[s] || {}) i.hasOwnProperty(n) && (_[n] = !0);
                                        c[s] = !0
                                    } for (t in _) _.hasOwnProperty(t) && o.push(r[t]);
                                return o
                            }(l),
                            c = [];
                        for (s = 0; s < o.length; s++) {
                            for (i = 0, n = new v(j(o[s]), _); i < _; i++) n.scoreOffsetAt(l[i]);
                            c.push(n)
                        }
                        return c.sort(b), c.length > 0 ? c[0].zone.name : void 0
                    }()), n
                }, C.names = function () {
                    var e, t = [];
                    for (e in r) r.hasOwnProperty(e) && (s[e] || s[i[e]]) && r[e] && t.push(r[e]);
                    return t.sort()
                }, C.Zone = g, C.unpack = y, C.unpackBase60 = u, C.needsOffset = L, C.moveInvalidForward = !0, C.moveAmbiguousForward = !1, C.countries = function () {
                    return Object.keys(l)
                }, C.zonesForCountry = function (e, t) {
                    if (!(e = l[e.toUpperCase()] || null)) return null;
                    var n = e.zones.sort();
                    return t ? n.map(function (e) {
                        var t = j(e);
                        return {
                            name: e,
                            offset: t.utcOffset(new Date)
                        }
                    }) : n
                };
                var k = e.fn;

                function D(e) {
                    return function () {
                        return this._z ? this._z.abbr(this) : e.call(this)
                    }
                }

                function N(e) {
                    return function () {
                        return this._z = null, e.apply(this, arguments)
                    }
                }
                e.tz = C, e.defaultZone = null, e.updateOffset = function (t, n) {
                    var s, i = e.defaultZone;
                    if (void 0 === t._z && (i && L(t) && !t._isUTC && t.isValid() && (t._d = e.utc(t._a)._d, t.utc().add(i.parse(t), "minutes")), t._z = i), t._z) {
                        if (16 > Math.abs(s = t._z.utcOffset(t)) && (s /= 60), void 0 !== t.utcOffset) {
                            var l = t._z;
                            t.utcOffset(-s, n), t._z = l
                        } else t.zone(s, n)
                    }
                }, k.tz = function (t, n) {
                    if (t) {
                        if ("string" != typeof t) throw Error("Time zone name must be a string, got " + t + " [" + typeof t + "]");
                        return this._z = j(t), this._z ? e.updateOffset(this, n) : w("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this
                    }
                    if (this._z) return this._z.name
                }, k.zoneName = D(k.zoneName), k.zoneAbbr = D(k.zoneAbbr), k.utc = N(k.utc), k.local = N(k.local), k.utcOffset = (t = k.utcOffset, function () {
                    return arguments.length > 0 && (this._z = null), t.apply(this, arguments)
                }), e.tz.setDefault = function (t) {
                    return (o < 2 || 2 === o && c < 9) && w("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."), e.defaultZone = t ? j(t) : null, e
                };
                var I = e.momentProperties;
                return "[object Array]" === Object.prototype.toString.call(I) ? (I.push("_z"), I.push("_a")) : I && (I._z = null), e
            }, e.exports ? e.exports = l(n(19212)) : (s = [n(19212)], void 0 === (i = l.apply(t, s)) || (e.exports = i))
        },
        97639: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return m
                }
            });
            var s = n(57437),
                i = n(32913),
                l = n(13913),
                r = n.n(l),
                a = n(42625),
                _ = n(21360),
                o = n(87580),
                c = n(81079),
                d = n(66648),
                u = n(70499);

            function m(e) {
                let {} = e;
                return (0, s.jsx)(i.Z, {
                    color: "light",
                    className: r().exchange,
                    children: (0, s.jsxs)(a.Z, {
                        className: r().container,
                        children: [(0, s.jsx)(c.default, {
                            direction: "right",
                            className: r().image,
                            children: (0, s.jsx)(d.default, {
                                src: "/images/home/exchange.webp",
                                alt: "Exchange Listings",
                                width: 424,
                                height: 440
                            })
                        }), (0, s.jsxs)("div", {
                            className: r().content,
                            children: [(0, s.jsx)(o.default, {
                                animate: !0,
                                direction: "left",
                                className: r().title,
                                children: "Top Exchange Listings Confirmed"
                            }), (0, s.jsx)(_.default, {
                                animate: !0,
                                size: "lg",
                                direction: "left",
                                className: "font-bold",
                                children: "BlockDAG (BDAG) is officially confirmed for launch on major global exchanges including:"
                            }), (0, s.jsx)("div", {
                                className: r().logos,
                                children: [{
                                    title: "Mexc",
                                    src: "/images/home/exchanges/mexc.svg"
                                }, {
                                    title: "lbank",
                                    src: "/images/home/exchanges/lbank.svg"
                                }, {
                                    title: "xt",
                                    src: "/images/home/exchanges/xt.svg"
                                }, {
                                    title: "coinstore",
                                    src: "/images/home/exchanges/coinstore.svg"
                                }, {
                                    title: "bitmart",
                                    src: "/images/home/exchanges/bitmart.svg"
                                }].map((e, t) => (0, s.jsx)(c.default, {
                                    direction: "left",
                                    className: r().logo,
                                    children: (0, s.jsx)(d.default, {
                                        src: e.src,
                                        alt: e.title,
                                        width: 0,
                                        height: 30
                                    })
                                }, t))
                            }), (0, s.jsx)(_.default, {
                                animate: !0,
                                direction: "left",
                                className: "font-bold md:mt-[-20px]",
                                children: "+15 MORE Tier 1 and US exchanges"
                            }), (0, s.jsx)(u.default, {
                                animate: !0,
                                direction: "left",
                                href: "https://x.com/bdageth",
                                target: "_blank",
                                children: "Follow Us for Real-Time Listings"
                            })]
                        })]
                    })
                })
            }
        },
        79336: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return Z
                }
            });
            var s = n(57437),
                i = n(33375),
                l = n.n(i),
                r = n(32913),
                a = n(2265),
                _ = n(44839),
                o = n(44630),
                c = n(42625),
                d = n(16700),
                u = n(82415),
                m = n(47062),
                h = n.n(m),
                y = n(70499),
                g = n(13259),
                f = n(87737),
                p = n.n(f),
                v = n(47984);

            function b(e) {
                let {
                    innerPage: t,
                    dark: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: (0, _.Z)(p().presalelogos, t && p().innerPage, n && p().dark),
                    children: [(0, s.jsx)("div", {
                        children: (0, s.jsx)(v.default, {
                            hero: !0,
                            className: p().iconCry,
                            src: "/icons/eth.svg",
                            alt: "eth",
                            width: 20,
                            height: 20
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(v.default, {
                            hero: !0,
                            className: p().iconCry,
                            src: "/icons/usdt.svg",
                            alt: "eth",
                            width: 20,
                            height: 20
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(v.default, {
                            hero: !0,
                            className: p().iconCry,
                            src: "/icons/bnb.svg",
                            alt: "eth",
                            width: 20,
                            height: 20
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(v.default, {
                            hero: !0,
                            className: p().iconVisa,
                            src: "/icons/visa.svg",
                            alt: "eth",
                            width: 0,
                            height: 0
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(v.default, {
                            hero: !0,
                            className: p().iconMastercard,
                            src: "/icons/mastercard.svg",
                            alt: "eth",
                            width: 0,
                            height: 0
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(v.default, {
                            hero: !0,
                            className: p().iconPays,
                            src: "/icons/gpay.svg",
                            alt: "eth",
                            width: 0,
                            height: 0
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(v.default, {
                            hero: !0,
                            className: p().iconPays,
                            src: "/icons/applepay.svg",
                            alt: "eth",
                            width: 0,
                            height: 0
                        })
                    }), n && (0, s.jsx)(y.default, {
                        className: p().button,
                        href: g.YJ,
                        target: "_blank",
                        color: "primary",
                        children: (0, s.jsxs)("span", {
                            children: ["Buy ", (0, s.jsx)("span", {
                                className: "d-md",
                                children: " Now"
                            })]
                        })
                    })]
                })
            }

            function x(e) {
                let {
                    active: t
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: (0, _.Z)(h().presaleislive, t && h().active),
                        children: [
                        //     (0, s.jsxs)("p", {
                        //     className: (0, _.Z)(h().presale, d.BD),
                        //     children: ["Presale is ", (0, s.jsx)("span", {
                        //         children: "Live"
                        //     })]
                        // }),
                         (0, s.jsx)("div", {
                            className: h().logos,
                            children: (0, s.jsx)(b, {})
                        }), (0, s.jsx)(y.default, {
                            className: h().button,
                            href: g.YJ,
                            target: "_blank",
                            color: "primary",
                            children: (0, s.jsx)("span", {
                                children: "Buy Now "
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, _.Z)(h().presaleislivesec, !t && h().active),
                        children: [
                        //     (0, s.jsxs)("p", {
                        //     className: (0, _.Z)(h().presale, d.BD),
                        //     children: ["Presale is ", (0, s.jsx)("span", {
                        //         children: "Live"
                        //     })]
                        // }),
                         (0, s.jsx)(b, {
                            dark: !0
                        })]
                    })]
                })
            }
            var T = n(79124),
                j = n(16463),
                B = n(5540),
                L = n(53267),
                w = n(87580),
                C = n(66648),
                k = n(39053),
                D = n.n(k),
                N = n(21365),
                I = n.n(N),
                S = e => {
                    let {
                        className: t,
                        ctLondon: n
                    } = e, i = D().tz(n || "2025-01-31 18:00", "Europe/London"), l = () => {
                        let e = D()(),
                            t = i.diff(e, "seconds");
                        return t <= 0 ? null : {
                            days: Math.floor(t / 86400),
                            hours: Math.floor(t / 3600 % 24),
                            minutes: Math.floor(t / 60 % 60),
                            seconds: t % 60
                        }
                    }, [r, o] = (0, a.useState)(l()), [c, u] = (0, a.useState)(!1);
                    if ((0, a.useEffect)(() => {
                            u(!0)
                        }, []), (0, a.useEffect)(() => {
                            if (!c || !r) return;
                            let e = setInterval(() => {
                                o(l())
                            }, 1e3);
                            return () => clearInterval(e)
                        }, [c, r]), !r || !c) return null;
                    let {
                        days: m,
                        hours: h,
                        minutes: y,
                        seconds: g
                    } = r;
                    return (0, s.jsx)("div", {
                        className: (0, _.Z)(I().countArea, t, d.BD),
                        children: (0, s.jsxs)("div", {
                            className: I().counter,
                            children: [(0, s.jsx)("div", {
                                className: I().box,
                                style: {
                                    "--percent": "".concat(100 * Math.min(m / 30, 1), "%")
                                },
                                children: (0, s.jsx)("div", {
                                    className: I().numbers,
                                    children: (0, s.jsx)("span", {
                                        children: m < 10 ? "0".concat(m) : m
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: I().box,
                                style: {
                                    "--percent": "".concat(h / 24 * 100, "%")
                                },
                                children: (0, s.jsx)("div", {
                                    className: I().numbers,
                                    children: (0, s.jsx)("span", {
                                        children: h < 10 ? "0".concat(h) : h
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: I().box,
                                style: {
                                    "--percent": "".concat(y / 60 * 100, "%")
                                },
                                children: (0, s.jsx)("div", {
                                    className: I().numbers,
                                    children: (0, s.jsx)("span", {
                                        children: y < 10 ? "0".concat(y) : y
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: I().box,
                                style: {
                                    "--percent": "".concat(g / 60 * 100, "%")
                                },
                                children: (0, s.jsx)("div", {
                                    className: I().numbers,
                                    children: (0, s.jsx)("span", {
                                        children: g < 10 ? "0".concat(g) : g
                                    })
                                })
                            })]
                        })
                    })
                };

            function Z(e) {
                let {} = e, t = (0, o.Z)(), n = (0, j.useRouter)(), [i, m] = (0, a.useState)(0), h = (0, T.Z)(), y = (0, a.useRef)(null), [f, p] = (0, a.useState)(!1), b = (0, a.useRef)(null), k = [{
                    img: "/images/home/breakingrecords-banner.webp",
                    mobileImg: "/images/home/breakingrecords-banner-mobile.webp",
                    // href: "".concat(g.YJ),
                    desc: void 0,
                    wide: void 0,
                    sliderDuration: 12e3,
                    video: void 0,
                    content: (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: l().breakingrecordsBanner,
                            children: (0, s.jsxs)("div", {
                                className: l().breakingrecordsContent,
                                children: [
                                //     (0, s.jsxs)(w.default, {
                                //     size: "xl",
                                //     className: (0, _.Z)(l().breakingrecordsTitle),
                                //     children: ["Last ", (0, s.jsx)("span", {
                                //         children: "48 hours"
                                //     }), " at"]
                                // }),
                                 (0, s.jsxs)(w.default, {
                                    size: "xl",
                                    className: (0, _.Z)(l().breakingrecordsTitle2),
                                    children: [(0, s.jsx)("span", {
                                        children: "$BDAG"
                                    }), " is Live!"]
                                }), (0, s.jsx)(w.default, {
                                    size: "xl",
                                    className: (0, _.Z)(l().breakingrecordsTitle3),
                                    children: "forever"
                                }), (0, s.jsx)(w.default, {
                                    size: "xl",
                                    className: (0, _.Z)(l().breakingrecordsTitle4),
                                    children: "BlockDAG BREAKING RECORDS"
                                }), 
                                // (0, s.jsx)("div", {
                                //     className: l().countdown,
                                //     children: (0, s.jsx)(S, {
                                //         ctLondon: "2025-09-19T16:00:00Z"
                                //     })
                                // })
                            ]
                            })
                        })
                    }),
                    imgClass: l().breakingrecordsBannerImg,
                    position: "center"
                }, 
                // {
                //     img: "/images/home/testnet-launch-banner.webp",
                //     mobileImg: "/images/home/testnet-launch-banner-mobile.webp",
                //     href: "".concat(g.YJ),
                //     desc: void 0,
                //     wide: void 0,
                //     sliderDuration: 10,
                //     video: void 0,
                //     content: (0, s.jsx)(s.Fragment, {
                //         children: (0, s.jsx)("div", {
                //             className: l().TestnetBanner,
                //             children: (0, s.jsxs)("div", {
                //                 className: l().TestnetContent,
                //                 children: [(0, s.jsx)(w.default, {
                //                     size: "xl",
                //                     className: (0, _.Z)(l().TestnetTitle, d.BD),
                //                     children: "Testnet"
                //                 }), (0, s.jsx)(w.default, {
                //                     size: "xl",
                //                     className: (0, _.Z)(l().TestnetTitle2, d.BD),
                //                     children: "Awakening Launch"
                //                 }), (0, s.jsx)(w.default, {
                //                     size: "xl",
                //                     className: (0, _.Z)(l().TestnetTitle3, d.BD),
                //                     children: "Buy BDAG"
                //                 }),
                //                  (0, s.jsx)("div", {
                //                     className: l().countdown,
                //                     children: (0, s.jsx)(S, {
                //                         ctLondon: "2025-09-25T17:00:00Z"
                //                     })
                //                 })
                //             ]
                //             })
                //         })
                //     }),
                //     imgClass: l().TestnetBannerImg,
                //     position: "center"
                // },
                 {
                    img: "/images/home/hit-banner.webp",
                    mobileImg: "/images/home/hit-banner-mobile.webp",
                    href: "".concat(g.YJ),
                    desc: void 0,
                    wide: void 0,
                    sliderDuration: 12,
                    video: void 0,
                    content: (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: l().hitBanner,
                            children: (0, s.jsxs)("div", {
                                className: l().hitContent,
                                children: [(0, s.jsx)(w.default, {
                                    size: "xl",
                                    className: (0, _.Z)(l().hitTitle, d.BD),
                                    children: "X1 MINER HITS"
                                }), (0, s.jsx)(w.default, {
                                    size: "xl",
                                    className: (0, _.Z)(l().hitTitle2),
                                    children: "3,000,000 USERS"
                                }), (0, s.jsx)("div", {
                                    className: l().hitDivider
                                }), (0, s.jsx)(w.default, {
                                    size: "xl",
                                    className: (0, _.Z)(l().hitTitle3),
                                    children: "CONNECT YOUR X1 & X10 MINER"
                                }), (0, s.jsx)(w.default, {
                                    size: "xl",
                                    className: (0, _.Z)(l().hitTitle4),
                                    children: "START MINING"
                                })]
                            })
                        })
                    }),
                    imgClass: l().hitBannerImg,
                    position: "center"
                }, {
                    img: "/images/home/im2-banner.webp",
                    mobileImg: "/images/home/im2-banner-mobile.webp",
                    href: "".concat(g.YJ),
                    desc: void 0,
                    wide: void 0,
                    sliderDuration: 10,
                    video: void 0,
                    content: (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: l().imBanner,
                            children: (0, s.jsx)("div", {
                                className: l().imContent,
                                children: (0, s.jsx)(w.default, {
                                    size: "xl",
                                    className: (0, _.Z)(l().imTitle, d.BD),
                                    children: "INTER OFFICIAL PARTNER"
                                })
                            })
                        })
                    }),
                    imgClass: l().imBannerImg,
                    position: "center"
                }, {
                    img: "/images/home/teamcall-banner.webp",
                    mobileImg: "/images/home/teamcall-banner-mobile.webp",
                    href: "/team",
                    desc: void 0,
                    wide: void 0,
                    sliderDuration: 10,
                    content: (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: (0, _.Z)(l().massiveBanner),
                            children: (0, s.jsxs)("div", {
                                className: l().massiveContent,
                                children: [(0, s.jsx)(w.default, {
                                    className: (0, _.Z)(l().massiveTitle, d.BD),
                                    children: "BlockDAG TEAM"
                                }), (0, s.jsx)(C.default, {
                                    className: (0, _.Z)(l().teamImg, "d-md"),
                                    src: "/images/home/team-members-v4.webp",
                                    alt: "BlockDAG Team",
                                    width: 1280,
                                    height: 580
                                }), (0, s.jsx)(C.default, {
                                    className: (0, _.Z)(l().teamImg, "d-sm"),
                                    src: "/images/home/team-members-v4-mobile.webp",
                                    alt: "BlockDAG Team",
                                    width: 324,
                                    height: 353
                                })]
                            })
                        })
                    }),
                    imgClass: l().massiveImg,
                    position: "center"
                }];
                return (0, a.useEffect)(() => {
                    let e, t;
                    return (async () => {
                        if (y.current && k[i].video) {
                            p(!1);
                            try {
                                var n, s;
                                b.current.muted = !0, await (null === (n = b.current) || void 0 === n ? void 0 : n.load()), await (null === (s = b.current) || void 0 === s ? void 0 : s.play())
                            } catch (e) {
                                console.log(e)
                            }
                            e = setTimeout(async () => {
                                p(!0)
                            }, 100), t = setTimeout(() => {
                                var e;
                                null === (e = y.current) || void 0 === e || e.swiper.slideNext()
                            }, 1e3 * (k[i].sliderDuration || 5))
                        } else p(!1), void 0 !== k[i].sliderDuration && (t = setTimeout(() => {
                            var e;
                            null === (e = y.current) || void 0 === e || e.swiper.slideNext()
                        }, 1e3 * k[i].sliderDuration))
                    })(), () => {
                        clearTimeout(e), clearTimeout(t)
                    }
                }, [i]), (0, a.useEffect)(() => {
                    if (y.current) {
                        let e = setTimeout(() => {
                            var e;
                            null === (e = y.current) || void 0 === e || e.swiper.slideNext()
                        }, k[i].sliderDuration ? 2e3 * k[i].sliderDuration : 5e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [i]), (0, s.jsx)(r.Z, {
                    color: "white",
                    className: (0, _.Z)(l().hero, l().active),
                    children: (0, s.jsxs)("div", {
                        className: (0, _.Z)(l().heroWrapper, t < 250 ? l().sticky : l().absolute),
                        children: [(0, s.jsx)("div", {
                            className: l().slideWrapper,
                            children: (0, s.jsx)(L.tq, {
                                id: "heroSwiper",
                                ref: y,
                                className: l().swiper,
                                modules: [B.s5, B.lI, B.tl, B.W_],
                                effect: "coverflow",
                                loop: !0,
                                breakpoints: {
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 0
                                    },
                                    992: {
                                        slidesPerView: 1,
                                        spaceBetween: 0
                                    }
                                },
                                slidesPerView: "auto",
                                onSlideChange: e => {
                                    m(e.realIndex)
                                },
                                pagination: {
                                    clickable: !0
                                },
                                children: k.map((e, t) => (0, s.jsxs)(L.o5, {
                                    onClick: () => {
                                        (null == e ? void 0 : e.href) && n.push(null == e ? void 0 : e.href)
                                    },
                                    className: l().swiperSlide,
                                    children: [(0, s.jsxs)("div", {
                                        className: (0, _.Z)(l().img, f && l().videoActive, (null == e ? void 0 : e.position) && l()[e.position]),
                                        children: [0 == t ? (0, s.jsx)(s.Fragment, {
                                            children: e.mobileImg ? (0, s.jsxs)(s.Fragment, {
                                                children: [(0, s.jsx)(v.default, {
                                                    hero: !0,
                                                    className: (0, _.Z)("d-md", e.imgClass),
                                                    priority: !1,
                                                    src: e.img,
                                                    alt: "BlockDAG",
                                                    width: 1440,
                                                    height: 1080
                                                }), (0, s.jsx)(v.default, {
                                                    hero: !0,
                                                    className: (0, _.Z)("d-sm", e.imgClass),
                                                    priority: !0,
                                                    src: e.mobileImg,
                                                    alt: "BlockDAG",
                                                    width: 455,
                                                    height: 823
                                                })]
                                            }) : (0, s.jsx)(v.default, {
                                                hero: !0,
                                                className: (0, _.Z)(e.imgClass),
                                                priority: !0,
                                                src: e.img,
                                                alt: "BlockDAG",
                                                width: 1440,
                                                height: 1080
                                            })
                                        }) : (h || 0 !== i) && (0, s.jsx)(s.Fragment, {
                                            children: e.mobileImg ? (0, s.jsxs)(s.Fragment, {
                                                children: [(0, s.jsx)(v.default, {
                                                    hero: !0,
                                                    className: (0, _.Z)("d-md", e.imgClass),
                                                    priority: !1,
                                                    src: e.img,
                                                    alt: "BlockDAG",
                                                    width: 1440,
                                                    height: 1080
                                                }), (0, s.jsx)(v.default, {
                                                    hero: !0,
                                                    className: (0, _.Z)("d-sm", e.imgClass),
                                                    priority: !1,
                                                    src: e.mobileImg,
                                                    alt: "BlockDAG",
                                                    width: 1440,
                                                    height: 1080
                                                })]
                                            }) : (0, s.jsx)(v.default, {
                                                hero: !0,
                                                className: (0, _.Z)(e.imgClass),
                                                priority: !1,
                                                src: e.img,
                                                alt: "BlockDAG",
                                                width: 1440,
                                                height: 1080
                                            })
                                        }), e.video && t == i && (0, s.jsx)("div", {
                                            className: (0, _.Z)(l().video, f && l().videoActive),
                                            children: e.video
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: (0, _.Z)(l().content, f && l().videoActive),
                                        children: (0, s.jsx)(c.Z, {
                                            size: (null == e ? void 0 : e.wide) ? "lg" : void 0,
                                            className: l().container,
                                            children: (0, s.jsx)("div", {
                                                className: l().mainContent,
                                                children: e.content
                                            })
                                        })
                                    })]
                                }, t))
                            })
                        }), (0, s.jsxs)("div", {
                            className: l().swiperNavigation,
                            children: [(0, s.jsx)("button", {
                                className: l().prev,
                                onClick: () => {
                                    if (y.current) {
                                        var e;
                                        null === (e = y.current) || void 0 === e || e.swiper.slidePrev()
                                    }
                                },
                                children: (0, s.jsx)(u.Z.Chevron, {})
                            }), (0, s.jsx)("button", {
                                className: l().next,
                                onClick: () => {
                                    if (y.current) {
                                        var e;
                                        null === (e = y.current) || void 0 === e || e.swiper.slideNext()
                                    }
                                },
                                children: (0, s.jsx)(u.Z.Chevron, {})
                            })]
                        }), (0, s.jsx)(x, {
                            active: !0
                        }), (0, s.jsxs)("div", {
                            className: (0, _.Z)(l().partners, l().active),
                            children: [(0, s.jsx)("div", {
                                className: l().partnerTexts,
                                children: (0, s.jsx)("p", {
                                    className: (0, _.Z)(l().partnerShip, d.BD),
                                    children: "Partnerships"
                                })
                            }), (0, s.jsxs)("div", {
                                className: l().partnerLogos,
                                children: [(0, s.jsx)(u.Z.Inter, {}), (0, s.jsxs)("div", {
                                    className: l().partnerLogoText,
                                    children: ["OFFICIAL BLOCKCHAIN", (0, s.jsx)("br", {}), " PARTNER"]
                                }), (0, s.jsx)(C.default, {
                                    src: "/icons/seattle-orcas.svg",
                                    alt: "Seattle Orcas",
                                    width: 97,
                                    height: 60
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        9411: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return v
                }
            });
            var s = n(57437),
                i = n(32913),
                l = n(9750),
                r = n.n(l),
                a = n(42625),
                _ = n(21360),
                o = n(87580),
                c = n(70499),
                d = n(13259),
                u = n(47984),
                m = n(81079),
                h = n(44839),
                y = n(16609),
                g = n(53309),
                f = n(44630),
                p = n(2265);

            function v(e) {
                let {} = e, {
                    tokenData: t
                } = (0, y.Z)(), n = (0, f.Z)(), [l, v] = (0, p.useState)(!1);
                return (0, p.useEffect)(() => {
                    n > 200 && v(!0)
                }, [n]), (0, s.jsx)(i.Z, {
                    color: "dark",
                    className: r().raised,
                    children: (0, s.jsxs)(a.Z, {
                        className: r().container,
                        children: [(0, s.jsxs)("div", {
                            className: r().texts,
                            children: [(0, s.jsx)(_.default, {
                                component: "h3",
                                start: 70,
                                end: 30,
                                ease: "back.in",
                                animate: !1,
                                direction: "left",
                                size: "xl",
                                className: "text-center font-bold",
                                children: "Ground-Breaking Crypto 2025"
                            }), (0, s.jsx)(_.default, {
                                direction: "left",
                                start: 70,
                                end: 30,
                                ease: "back.in",
                                animate: !1,
                                size: "lg",
                                className: "text-center",
                                children: "Join the BlockDAG crypto 2025, engage with the project, and see your contribution grow to new heights."
                            })]
                        }),
                        //  (0, s.jsxs)(o.default, {
                        //     className: (0, h.Z)(r().title, "text-center"),
                        //     children: [(0, s.jsxs)(m.default, {
                        //         animate: !1,
                        //         rotateY: 80,
                        //         opacity: .2,
                        //         start: 80,
                        //         end: 15,
                        //         className: r().first,
                        //         component: "span",
                        //         ease: "elastic.inOut",
                        //         children: ["$", (null == t ? void 0 : t.totalSoldTokensValueUsd) ? (0, g.HN)(null == t ? void 0 : t.totalSoldTokensValueUsd).replace("M", "") : "**.**", " ", "Million Raised"]
                        //     }), (0, s.jsxs)(m.default, {
                        //         animate: !1,
                        //         rotateY: -80,
                        //         opacity: .2,
                        //         start: 80,
                        //         end: 15,
                        //         className: r().second,
                        //         component: "span",
                        //         ease: "elastic.inOut",
                        //         children: ["$", (null == t ? void 0 : t.totalSoldTokensValueUsd) ? (0, g.HN)(null == t ? void 0 : t.totalSoldTokensValueUsd).replace("M", "") : "**.**", " ", "Million Raised"]
                        //     })]
                        // }),
                         (0, s.jsxs)("div", {
                            className: "flex justify-center gap-4",
                            children: [(0, s.jsx)(c.default, {
                                animate: !1,
                                start: 80,
                                end: 15,
                                rotateY: 80,
                                ease: "expo.out",
                                direction: "right",
                                href: d.YJ,
                                color: "primary",
                                children: "Buy Now"
                            }), (0, s.jsx)(c.default, {
                                animate: !1,
                                direction: "left",
                                start: 80,
                                rotateY: -80,
                                end: 15,
                                ease: "expo.out",
                                href: d.zA,
                                color: "transparent-dark",
                                children: "How to Buy?"
                            })]
                        }), (0, s.jsx)(m.default, {
                            animate: !1,
                            translateY: -300,
                            opacity: 1,
                            start: 60,
                            end: 0,
                            ease: "back.out",
                            className: r().gifArea,
                            children: l && (0, s.jsx)(u.default, {
                                src: "/3d.gif",
                                width: 400,
                                height: 375,
                                alt: "BlockDAG"
                            })
                        })]
                    })
                })
            }
        },
        87452: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return g
                }
            });
            var s = n(57437),
                i = n(32913),
                l = n(44327),
                r = n.n(l),
                a = n(42625),
                _ = n(58350),
                o = n(87580),
                c = n(47984),
                d = n(44839),
                u = n(21360),
                m = n(70499),
                h = n(87138),
                y = n(82415);

            function g(e) {
                let {} = e, t = [{
                    icon: "/cube.webp",
                    iconStyle: {
                        rotate: "-33deg",
                        width: "calc(var(--1) * 55)"
                    },
                    completed: !0,
                    title: (0, s.jsx)(s.Fragment, {
                        children: "Internal Audit"
                    }),
                    desc: (0, s.jsx)(s.Fragment, {
                        children: "Our in-house team conducted an exhaustive review using advanced code analysis tools, extensive unit tests, and integration tests to identify and address potential vulnerabilities."
                    })
                }, {
                    icon: "/images/security/halborn-black.svg",
                    iconStyle: {
                        width: "calc(var(--1) * 160)"
                    },
                    completed: !0,
                    title: (0, s.jsx)(s.Fragment, {
                        children: "External Audit 1: Halborn "
                    }),
                    href: "https://www.halborn.com/audits/blockdag/treasury-vesting",
                    desc: (0, s.jsx)(s.Fragment, {
                        children: "We partnered with Halborn, a renowned security firm, to provide an independent assessment. Their review validated our internal findings and helped fortify our security measures."
                    })
                }, {
                    icon: "/images/security/certik-black.svg",
                    iconStyle: {
                        width: "calc(var(--1) * 174)"
                    },
                    completed: !0,
                    title: (0, s.jsx)(s.Fragment, {
                        children: "External Audit 2: Certik "
                    }),
                    href: "/blockdag-certik-security-audit.pdf",
                    desc: (0, s.jsx)(s.Fragment, {
                        children: "We are currently collaborating with Certik for an additional layer of scrutiny to further enhance our smart contract security."
                    })
                }];
                return (0, s.jsx)(i.Z, {
                    color: "white",
                    className: r().section,
                    children: (0, s.jsx)(a.Z, {
                        classic: !0,
                        children: (0, s.jsxs)("div", {
                            className: r().content,
                            children: [(0, s.jsx)(_.Z, {
                                bg: "light",
                                align: "center",
                                alignMobile: "center",
                                title: "Fortifying Blockchain Security at Every Layer",
                                desc: (0, s.jsx)(s.Fragment, {
                                    children: "BlockDAG places security at the heart of innovation, implementing rigorous audits, community-driven bug bounty programs, and advanced cryptographic solutions. Discover how our proactive approach ensures a secure, transparent, and resilient blockchain ecosystem."
                                })
                            }), (0, s.jsx)("div", {
                                className: r().boxes,
                                children: t.map((e, t) => (0, s.jsxs)("div", {
                                    className: r().box,
                                    children: [(0, s.jsx)("div", {
                                        className: r().top,
                                        children: (0, s.jsx)("div", {
                                            className: r().icon,
                                            style: e.iconStyle,
                                            children: e.href ? (0, s.jsx)(s.Fragment, {
                                                children: (0, s.jsxs)("div", {
                                                    className: r().linkBox,
                                                    children: [(0, s.jsxs)(h.default, {
                                                        href: e.href,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: [(0, s.jsx)(c.default, {
                                                            src: e.icon,
                                                            alt: "Icon"
                                                        }), (0, s.jsx)(y.Z.ExternalLink, {})]
                                                    }), (0, s.jsx)("span", {
                                                        className: r().link,
                                                        children: "Click on above logo to read"
                                                    })]
                                                })
                                            }) : (0, s.jsx)(c.default, {
                                                src: e.icon,
                                                alt: "Icon"
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: r().texts,
                                        children: [(0, s.jsx)(o.default, {
                                            family: "primary",
                                            size: "xs",
                                            children: e.title
                                        }), (0, s.jsx)("div", {
                                            className: (0, d.Z)(e.completed ? r().completed : r().uncompleted),
                                            children: e.completed ? "Completed" : "In Progress"
                                        }), (0, s.jsx)(u.default, {
                                            className: r().desc,
                                            children: e.desc
                                        })]
                                    })]
                                }, t))
                            }), (0, s.jsx)(m.default, {
                                className: r().button,
                                href: "/security",
                                children: "Explore Our Security Commitment"
                            })]
                        })
                    })
                })
            }
        },
        42625: function (e, t, n) {
            "use strict";
            var s = n(57437),
                i = n(44839),
                l = n(58538),
                r = n.n(l);
            let a = (0, n(2265).forwardRef)((e, t) => {
                let {
                    children: n,
                    className: l,
                    size: a,
                    classic: _,
                    ...o
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                        ref: t,
                        className: (0, i.Z)(r().container, l, a && r()[a], _ && r().classic),
                        ...o,
                        children: n
                    })
                })
            });
            a.displayName = "Container", t.Z = a
        },
        43615: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return m
                }
            });
            var s = n(57437),
                i = n(2265),
                l = n(48241),
                r = n.n(l),
                a = n(87138),
                _ = n(44839),
                o = n(78002),
                c = n(16609),
                d = n(49582),
                u = n(16463);

            function m(e) {
                let {
                    href: t,
                    download: n,
                    className: l,
                    target: m,
                    children: h,
                    color: y = "primary",
                    onClick: g,
                    direction: f,
                    directionMobile: p = f,
                    translateY: v = 0,
                    translateX: b = 0,
                    duration: x = .8,
                    rotateX: T = 0,
                    rotateY: j = 0,
                    ease: B = "back.out",
                    opacity: L = 0,
                    animate: w,
                    start: C = 80,
                    end: k = 60,
                    ...D
                } = e, N = (0, o.Z)(), I = (0, i.useRef)(null), {
                    useGSAP: S,
                    activatedGsap: Z
                } = (0, c.Z)(), A = (0, u.usePathname)();
                return S(() => {
                    if ("/" == A && Z && w && I.current && (null == N ? void 0 : N.width)) {
                        let e, t;
                        (null == N ? void 0 : N.width) < 992 ? (b = "right" == p ? -200 : "left" == p ? 200 : b, v = "top" == p ? 200 : "bottom" == p ? -200 : v) : (v = "top" == f ? 200 : "bottom" == f ? -200 : v, b = "right" == f ? -200 : "left" == f ? 200 : b);
                        let n = d.ZP.timeline({
                            scrollTrigger: {
                                trigger: I.current,
                                start: "top ".concat((null == N ? void 0 : N.width) < 992 ? C - 10 : C, "%"),
                                end: "top ".concat((null == N ? void 0 : N.width) < 992 ? k - 15 : k - 10, "%"),
                                scrub: 1,
                                markers: !1
                            }
                        });
                        return e = (null == N ? void 0 : N.width) > 1440 ? b : (null == N ? void 0 : N.width) < 992 ? (null == N ? void 0 : N.width) / 500 * b : (null == N ? void 0 : N.width) / 1440 * b, t = (null == N ? void 0 : N.width) > 1440 ? v : (null == N ? void 0 : N.width) < 992 ? (null == N ? void 0 : N.width) / 500 * v : (null == N ? void 0 : N.width) / 1440 * v, n.from(I.current, {
                            translateY: t,
                            translateX: e,
                            rotateX: T,
                            rotateY: j,
                            opacity: L,
                            duration: x,
                            ease: B
                        }).to(I.current, {
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0,
                            translateX: 0,
                            opacity: 1
                        }), () => n.kill()
                    }
                }, [N, Z, A]), m && "_blank" == m ? (0, s.jsx)(a.default, {
                    ref: I,
                    download: n,
                    href: t,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: g,
                    className: (0, _.Z)(r().customlink, r()[y], l),
                    ...D,
                    children: h
                }) : (0, s.jsx)(a.default, {
                    ref: I,
                    download: n,
                    href: t,
                    target: m,
                    onClick: g,
                    className: (0, _.Z)(r().customlink, r()[y], l),
                    ...D,
                    children: h
                })
            }
        },
        58350: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return c
                }
            });
            var s = n(57437),
                i = n(44839),
                l = n(21360),
                r = n(87580),
                a = n(84395),
                _ = n(18803),
                o = n.n(_);

            function c(e) {
                let {
                    subtitle: t,
                    subtitleColor: n,
                    title: _,
                    bigdesc: c,
                    titleBottomContent: d,
                    largedesc: u,
                    desc: m,
                    subtitleComponent: h,
                    titleComponent: y,
                    align: g = "center",
                    alignMobile: f = g,
                    bg: p = "dark",
                    animate: v = !0,
                    direction: b = "right",
                    maxWidth: x,
                    className: T,
                    largedescClass: j,
                    bigdescClass: B,
                    descClass: L
                } = e;
                return (0, s.jsxs)("div", {
                    className: (0, i.Z)(o().heading, o()[g], g !== f && o()["sm-".concat(f)], x && o().max, T && T),
                    children: [t && (0, s.jsx)(a.default, {
                        color: n || ("light" == p ? "dark" : "primary" == p ? "light" : "primary"),
                        component: h,
                        animate: v,
                        direction: b,
                        className: o().subtitle,
                        children: t
                    }), _ && (0, s.jsx)(r.default, {
                        animate: v,
                        direction: b,
                        component: y,
                        className: o().title,
                        children: _
                    }), d && d, u && (0, s.jsx)(l.default, {
                        animate: v,
                        direction: b,
                        className: (0, i.Z)(o().bigdesc, o().largedesc, o()[p], j),
                        size: "xl",
                        children: u
                    }), c && (0, s.jsx)(l.default, {
                        animate: v,
                        direction: b,
                        className: (0, i.Z)(o().bigdesc, o()[p], B),
                        size: "lg",
                        children: c
                    }), m && (0, s.jsx)(l.default, {
                        animate: v,
                        direction: b,
                        className: (0, i.Z)(o().desc, o()[p], L),
                        children: m
                    })]
                })
            }
        },
        82415: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return i
                }
            });
            var s = n(57437);
            n(2265);
            var i = {
                Chevron: function (e) {
                    return (0, s.jsx)("svg", {
                        ...e,
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            d: "M4.5 6.75L9 11.25L13.5 6.75",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                Arrowdown: function (e) {
                    return (0, s.jsx)("svg", {
                        ...e,
                        width: "25",
                        height: "25",
                        viewBox: "0 0 25 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            d: "M17.5 7.5L7.5 17.5M7.5 17.5H17.5M7.5 17.5V7.5",
                            stroke: "currentColor",
                            strokeWidth: "2.20542",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                Shipping: function (e) {
                    return (0, s.jsxs)("svg", {
                        ...e,
                        width: "25",
                        height: "25",
                        viewBox: "0 0 25 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("g", {
                            clipPath: "url(#clip0_100_17247)",
                            children: (0, s.jsx)("path", {
                                d: "M23.853 5.60763C23.853 5.30315 23.6691 5.02881 23.3875 4.91308L12.7821 0.556314C12.5993 0.481229 12.3943 0.481229 12.2115 0.556314L1.60616 4.91308C1.32454 5.02876 1.14062 5.30315 1.14062 5.60763V19.3924C1.14062 19.6968 1.32449 19.9712 1.60616 20.0869L12.2115 24.4437C12.3923 24.518 12.5956 24.5196 12.7812 24.4436C12.7903 24.4406 12.3887 24.6053 23.3875 20.0869C23.6691 19.9712 23.853 19.6968 23.853 19.3924V5.60763ZM12.4968 9.21579L8.58915 7.6105L17.034 3.92655L21.203 5.63921L12.4968 9.21579ZM2.64234 6.79098L6.01375 8.17599V12.0835C6.01375 12.4981 6.34995 12.8343 6.76461 12.8343C7.17927 12.8343 7.51547 12.4981 7.51547 12.0835V8.79291L11.746 10.5308V22.6289L2.64234 18.8891V6.79098ZM12.4968 2.06259L15.0998 3.1319L6.65489 6.81585L3.7906 5.63916L12.4968 2.06259ZM13.2477 10.5308L22.3513 6.79098V18.8891L13.2477 22.6289V10.5308Z",
                                fill: "#4AB3FF"
                            })
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: "clip0_100_17247",
                                children: (0, s.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white",
                                    transform: "translate(0.5 0.5)"
                                })
                            })
                        })]
                    })
                },
                Minus: function (e) {
                    return (0, s.jsx)("svg", {
                        ...e,
                        width: "25",
                        height: "25",
                        viewBox: "0 0 25 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            d: "M5.5 12.5H19.5",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                Plus: function (e) {
                    return (0, s.jsx)("svg", {
                        ...e,
                        width: "25",
                        height: "25",
                        viewBox: "0 0 25 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            d: "M12.5 5.5V19.5M5.5 12.5H19.5",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                Inter: function (e) {
                    return (0, s.jsxs)("svg", {
                        ...e,
                        width: "155",
                        height: "155",
                        viewBox: "0 0 155 155",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            d: "M77.7652 147.61C116.456 147.61 147.821 116.245 147.821 77.5544C147.821 38.8638 116.456 7.49892 77.7652 7.49892C39.0746 7.49892 7.70972 38.8638 7.70972 77.5544C7.70972 116.245 39.0746 147.61 77.7652 147.61Z",
                            fill: "#001EA0"
                        }), (0, s.jsx)("path", {
                            d: "M77.7613 0.580471C35.2133 0.580471 0.799072 34.9946 0.799072 77.5427C0.799072 120.091 35.2133 154.505 77.7613 154.505C120.309 154.505 154.724 120.091 154.724 77.5427C154.724 34.9946 120.309 0.580471 77.7613 0.580471ZM77.7613 143.504C41.3707 143.504 11.7999 113.933 11.7999 77.5427C11.7999 41.1521 41.3707 11.5813 77.7613 11.5813C114.152 11.5813 143.723 41.1521 143.723 77.5427C143.723 113.933 114.152 143.504 77.7613 143.504Z",
                            fill: "black"
                        }), (0, s.jsx)("path", {
                            d: "M77.7578 11.57C41.3672 11.57 11.7964 41.1408 11.7964 77.5314C11.7964 113.922 41.3672 143.493 77.7578 143.493C114.148 143.493 143.719 113.922 143.719 77.5314C143.719 41.1408 114.148 11.57 77.7578 11.57ZM39.3799 99.0878L37.9464 115.464C28.4876 105.571 22.7755 92.2679 22.7755 77.5314C22.7755 63.5659 27.9447 50.8167 36.5129 41.1408L41.6821 52.3588C36.7301 59.3958 33.7654 68.1921 33.7654 77.5314C33.7654 85.3395 35.8505 92.7023 39.369 99.0769L39.3799 99.0878ZM53.4539 126.899C49.7182 125.031 46.3083 122.827 43.007 120.188L48.8386 54.661L40.5961 36.9598C43.4522 34.4295 46.4278 32.2359 49.6096 30.2486L66.985 67.4102V93.4625L58.0801 74.3278L53.4648 126.878L53.4539 126.899ZM77.7578 132.503C71.0465 132.503 64.6719 131.297 58.8512 129.202L59.8394 117.658C63.6837 119.417 67.7561 120.622 72.1542 121.176V33.8865C67.5389 34.4404 63.1407 35.7544 59.177 37.6222L54.5616 27.7291C61.5987 24.4278 69.4067 22.5599 77.7578 22.5599C86.1089 22.5599 93.9169 24.4278 100.954 27.7291L96.3386 37.6222C92.3857 35.7544 87.9876 34.4295 83.3614 33.8865V121.176C87.6509 120.622 91.8319 119.417 95.6762 117.658L96.6644 129.202C90.8328 131.287 84.4582 132.503 77.7578 132.503ZM102.051 126.899L97.4354 74.3495L88.5306 93.4842V67.4319L105.906 30.2703C109.099 32.2467 112.063 34.4512 114.919 36.9815L106.677 54.6827L112.509 120.21C109.207 122.849 105.797 125.042 102.062 126.921L102.051 126.899ZM117.547 115.464L116.114 99.0878C119.633 92.7132 121.718 85.3503 121.718 77.5423C121.718 68.1921 118.753 59.4067 113.801 52.3696L118.97 41.1516C127.549 50.8276 132.708 63.5768 132.708 77.5423C132.708 92.2788 126.995 105.582 117.537 115.475L117.547 115.464Z",
                            fill: "#001EA0"
                        }), (0, s.jsx)("path", {
                            d: "M37.9617 115.466L39.3952 99.0893C35.8766 92.7147 33.7916 85.3518 33.7916 77.5438C33.7916 68.1936 36.7563 59.4082 41.7083 52.3711L36.5391 41.1531C27.96 50.8291 22.8016 63.5783 22.8016 77.5438C22.8016 92.2803 28.5138 105.583 37.9725 115.476L37.9617 115.466ZM117.552 115.466C127.011 105.572 132.723 92.2694 132.723 77.5329C132.723 63.5674 127.554 50.8182 118.985 41.1423L113.816 52.3603C118.768 59.3973 121.733 68.1936 121.733 77.5329C121.733 85.341 119.648 92.7038 116.129 99.0784L117.563 115.455L117.552 115.466ZM40.6006 36.9722L48.843 54.6734L43.0114 120.2C46.3127 122.839 49.7227 125.033 53.4584 126.912L58.0737 74.3619L66.9786 93.4966V67.4443L49.6032 30.2827C46.4105 32.2591 43.4458 34.4636 40.5897 36.9939L40.6006 36.9722ZM88.535 93.4857L97.4399 74.351L102.055 126.901C105.791 125.033 109.201 122.828 112.502 120.19L106.671 54.6625L114.913 36.9613C112.057 34.431 109.081 32.2374 105.9 30.2501L88.5241 67.4117V93.464L88.535 93.4857ZM54.5661 27.7415L59.1814 37.6346C63.1343 35.7668 67.5325 34.4419 72.1587 33.8989V121.189C67.7605 120.635 63.6882 119.429 59.8438 117.67L58.8556 129.214C64.6872 131.299 71.0618 132.515 77.7622 132.515C84.4626 132.515 90.8481 131.31 96.6689 129.214L95.6806 117.67C91.8363 119.429 87.6554 120.635 83.3658 121.189V33.888C87.9811 34.4419 92.3793 35.7559 96.3431 37.6238L100.958 27.7306C93.9214 24.4293 86.1133 22.5615 77.7622 22.5615C69.4112 22.5615 61.6031 24.4293 54.5661 27.7306V27.7415Z",
                            fill: "white"
                        })]
                    })
                },
                ExternalLink: function (e) {
                    return (0, s.jsx)("svg", {
                        ...e,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, s.jsx)("path", {
                            d: "M6 18L18 6M18 6H9M18 6V15",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }
            }
        },
        32913: function (e, t, n) {
            "use strict";
            var s = n(57437),
                i = n(44839),
                l = n(14629),
                r = n.n(l);
            let a = (0, n(2265).forwardRef)((e, t) => {
                let {
                    children: n,
                    className: l,
                    color: a = "dark",
                    ..._
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        ref: t,
                        className: (0, i.Z)(r().section, r()[a], l),
                        ..._,
                        children: n
                    })
                })
            });
            a.displayName = "Section", t.Z = a
        },
        45814: function (e) {
            e.exports = {
                hero: "style_hero__DC06C",
                container: "style_container__Mu_up",
                top: "style_top__sEJTl",
                content: "style_content__g5c4q",
                texts: "style_texts__gvpIe",
                subtitle: "style_subtitle__KV5FV",
                title: "style_title__LjqJZ",
                bigdesc: "style_bigdesc__ZBWVQ",
                desc: "style_desc__n_V27",
                links: "style_links__UXONI",
                linksTitle: "style_linksTitle__nW6TI",
                list: "style_list__WA9zz",
                listItem: "style_listItem__LiMrd",
                icon: "style_icon__pqwtr",
                button: "style_button__TVXG1"
            }
        },
        13913: function (e) {
            e.exports = {
                exchange: "style_exchange__ezuLz",
                container: "style_container__wqqK8",
                image: "style_image__9lc5k",
                content: "style_content__O1loB",
                title: "style_title__6PZHg",
                descs: "style_descs__nkEJq",
                desc: "style_desc__PTeP1",
                btns: "style_btns__3uyVS",
                logos: "style_logos__uWEOo"
            }
        },
        33375: function (e) {
            e.exports = {
                breakingrecordsBanner: "style_breakingrecordsBanner__8ncCz",
                breakingrecordsContent: "style_breakingrecordsContent__5w1Fp",
                breakingrecordsTitle: "style_breakingrecordsTitle__KSH1_",
                breakingrecordsTitle2: "style_breakingrecordsTitle2__me1Et",
                breakingrecordsTitle3: "style_breakingrecordsTitle3__SDwGb",
                breakingrecordsTitle4: "style_breakingrecordsTitle4__ePxmN",
                countdown: "style_countdown__tOTWs",
                TestnetBanner: "style_TestnetBanner__rQJGf",
                TestnetContent: "style_TestnetContent__z4iqF",
                TestnetTitle: "style_TestnetTitle__EQqfQ",
                TestnetTitle2: "style_TestnetTitle2__41dNT",
                TestnetTitle3: "style_TestnetTitle3__ONEnp",
                bdagendBanner: "style_bdagendBanner__Y8vP5",
                bdagendContent: "style_bdagendContent__QOquH",
                fhBanner: "style_fhBanner__QOep1",
                fhContent: "style_fhContent__PzZ_e",
                fhTitle: "style_fhTitle__7rF7I",
                pcBanner: "style_pcBanner__EbMFW",
                pcContent: "style_pcContent__eVr1D",
                pcTitle: "style_pcTitle__4a8WG",
                pcTitle2: "style_pcTitle2___qzXy",
                pcTitle3: "style_pcTitle3__gdQQJ",
                pcTitle4: "style_pcTitle4__jJ8Ur",
                pcBannerImg: "style_pcBannerImg__XhNts",
                fcBanner: "style_fcBanner__rGK8A",
                fcContent: "style_fcContent__nDVWE",
                fcTitle: "style_fcTitle__4REzX",
                fcTitle2: "style_fcTitle2__5KH93",
                fcTitle4: "style_fcTitle4__eFwuA",
                fcTitle3: "style_fcTitle3__7_P1R",
                bxcImg: "style_bxcImg__L8PAH",
                fcBannerImg: "style_fcBannerImg__IuerC",
                sepAmaBanner: "style_sepAmaBanner__BwIzl",
                sepAmaContent: "style_sepAmaContent__rSjqD",
                sepAmaTitle: "style_sepAmaTitle__fRCfX",
                sepAmaTitle2: "style_sepAmaTitle2__DxJ0d",
                sepAmaTitle3: "style_sepAmaTitle3__UqT4E",
                hitBanner: "style_hitBanner__M99Gc",
                hitContent: "style_hitContent__5Sgdy",
                hitTitle: "style_hitTitle__yTYx5",
                hitTitle2: "style_hitTitle2__XPW7Z",
                hitDivider: "style_hitDivider__uOvfW",
                hitTitle3: "style_hitTitle3__Ago1q",
                hitTitle4: "style_hitTitle4__uYQh9",
                p22Banner: "style_p22Banner__9IMeI",
                p22Content: "style_p22Content__G0XUG",
                p22Title: "style_p22Title___ePhn",
                p22Title2: "style_p22Title2__Vtk7f",
                p22Title3: "style_p22Title3__kpipE",
                p22Title4: "style_p22Title4__7gAiB",
                dashv3Banner: "style_dashv3Banner__uj8fO",
                dashv3Content: "style_dashv3Content__Rfj4o",
                dashv3Title: "style_dashv3Title__P2_yC",
                dashv3Title2: "style_dashv3Title2__TQDBg",
                dashv3Title3: "style_dashv3Title3__ku_kF",
                dashv3Title4: "style_dashv3Title4__NDF0B",
                dashv3Desc: "style_dashv3Desc__bVt_Q",
                finishingBanner: "style_finishingBanner__y3e6l",
                finishingContent: "style_finishingContent__VqaWH",
                finishingTitle: "style_finishingTitle__1Fk_m",
                finishingTitle2: "style_finishingTitle2__a7EJx",
                logosContainer: "style_logosContainer__Lk1Sy",
                logos: "style_logos__GyHNj",
                finishingTitle3: "style_finishingTitle3__BkTKe",
                beatBanner: "style_beatBanner__PDHtw",
                beatContent: "style_beatContent__hRSvo",
                beatTitle: "style_beatTitle__8RHKy",
                beatTitle2: "style_beatTitle2__05p4X",
                beatTitle3: "style_beatTitle3__l6Aq4",
                beatTitle4: "style_beatTitle4__p70ee",
                beatDesc: "style_beatDesc__yfi8X",
                aimingBanner: "style_aimingBanner__CWtMY",
                aimingContent: "style_aimingContent__dHe0g",
                aimingTitle1: "style_aimingTitle1__taZby",
                aimingTitle2: "style_aimingTitle2__xM4Q0",
                aimingTitle3: "style_aimingTitle3___yc_g",
                ctCt: "style_ctCt__sfTQY",
                ibelinkBanner: "style_ibelinkBanner__FYOCQ",
                ibelinkContent: "style_ibelinkContent__GQLOj",
                ibelinkTitle: "style_ibelinkTitle__OhOld",
                exchanges: "style_exchanges__SAWeQ",
                price: "style_price__49W1w",
                ibelinkDesc: "style_ibelinkDesc__NIJjA",
                globalPhase: "style_globalPhase__Um2Oq",
                seaBannerImg: "style_seaBannerImg__5DiSS",
                seaBanner: "style_seaBanner__Lx3c9",
                seaContent: "style_seaContent__3ULgh",
                seaTitle: "style_seaTitle__VIDIy",
                seaDesc: "style_seaDesc___Ze8a",
                seaLogos: "style_seaLogos__x0D7s",
                globalLaunchBanner: "style_globalLaunchBanner__4D_9f",
                globalLaunchContent: "style_globalLaunchContent__jYJXG",
                globalLaunchTitle: "style_globalLaunchTitle__4_wMn",
                launchText: "style_launchText__J_3Fl",
                migrateText: "style_migrateText__IkgI_",
                migrateAnimation: "style_migrateAnimation__mgZSA",
                globalLaunchTitle2: "style_globalLaunchTitle2__y8xfp",
                exchanges2: "style_exchanges2__W_Z6l",
                globalLaunchDesc: "style_globalLaunchDesc___rYgJ",
                imBanner: "style_imBanner__K1Ch5",
                imContent: "style_imContent__AvX6S",
                imTitle: "style_imTitle__lowvh",
                airdropBannerImg: "style_airdropBannerImg__t87P7",
                airdropBanner: "style_airdropBanner__RW0pM",
                airdropContent: "style_airdropContent__E9snl",
                airdropClaimrImg: "style_airdropClaimrImg__M3NWe",
                airdropTitle: "style_airdropTitle__Jks1B",
                airdropDesc: "style_airdropDesc__PGqoc",
                airdropDesc2: "style_airdropDesc2__XhsBX",
                priceincreasedBannerImg: "style_priceincreasedBannerImg__285Nl",
                priceincreasedBanner: "style_priceincreasedBanner__l57ky",
                priceincreasedContent: "style_priceincreasedContent__L2qot",
                priceincreasedTitle: "style_priceincreasedTitle__EYufD",
                priceincreasedDesc: "style_priceincreasedDesc__kM4NF",
                priceincreasedDesc2: "style_priceincreasedDesc2__Sieay",
                x10bannerBannerImg: "style_x10bannerBannerImg__e0XlX",
                x10bannerBanner: "style_x10bannerBanner__tyj_H",
                x10bannerContent: "style_x10bannerContent__U3Y7b",
                x10bannerTitleContainer: "style_x10bannerTitleContainer__6Ts1V",
                x10bannerTitle: "style_x10bannerTitle__6Y64b",
                x10bannerSub: "style_x10bannerSub__iqXLa",
                x10bannerDesc: "style_x10bannerDesc___nGYh",
                deliveriesBannerImg: "style_deliveriesBannerImg___04FT",
                deliveriesBanner: "style_deliveriesBanner__lU_S0",
                deliveriesContent: "style_deliveriesContent__pFB32",
                deliveriesTitle: "style_deliveriesTitle__3eJNX",
                deliveriesDesc: "style_deliveriesDesc__PFT9t",
                increasealertBannerImg: "style_increasealertBannerImg__GRIfT",
                increasealertBanner: "style_increasealertBanner___HOWq",
                increasealertContent: "style_increasealertContent__qaAbA",
                increasealertSub: "style_increasealertSub__i3fdO",
                increasealertTitle: "style_increasealertTitle__hEW7d",
                increasealertDesc: "style_increasealertDesc__p0wPF",
                usbasedBannerImg: "style_usbasedBannerImg__tvSvy",
                usbasedBanner: "style_usbasedBanner__y8gl8",
                usbasedContent: "style_usbasedContent__8xNsq",
                usbasedTitle: "style_usbasedTitle__hyMpp",
                blue: "style_blue___jDkB",
                red: "style_red__dMOFn",
                usbasedDesc: "style_usbasedDesc__yzaqY",
                usbasedDesc2: "style_usbasedDesc2__F_sHm",
                minerdeliveryBannerImg: "style_minerdeliveryBannerImg__zldoC",
                minerdeliveryBanner: "style_minerdeliveryBanner__m5z4Y",
                minerdeliveryContent: "style_minerdeliveryContent__H2IzY",
                minerdeliveryTitle: "style_minerdeliveryTitle__cES_1",
                minerdeliveryDesc: "style_minerdeliveryDesc__mmoPg",
                june13BannerImg: "style_june13BannerImg__p4olj",
                june13Banner: "style_june13Banner__BLjWj",
                june13Title: "style_june13Title__2tRNw",
                breatheTitle: "style_breatheTitle__EY58H",
                june13Sub2: "style_june13Sub2__xE_xq",
                june13Sub4: "style_june13Sub4__9Cfu0",
                june13Sub5: "style_june13Sub5__R6cib",
                june13List: "style_june13List__tgnfk",
                june13ListItem: "style_june13ListItem__PP_oS",
                june13ListLine: "style_june13ListLine__EJn2Q",
                june13Desc: "style_june13Desc__NJ2t3",
                line: "style_line__QZCU0",
                telegramBannerImg: "style_telegramBannerImg__lK7AX",
                telegramBanner: "style_telegramBanner__1iHXz",
                telegramTitle: "style_telegramTitle__6mtWh",
                smallest: "style_smallest__zTl7z",
                biggest: "style_biggest__6b0YT",
                big: "style_big__KrD_g",
                doubleBannerImg: "style_doubleBannerImg___x_n3",
                doubleBanner: "style_doubleBanner___PsfR",
                doubleContent: "style_doubleContent__r5B_f",
                doubleSub2: "style_doubleSub2__VVitS",
                doubleTitle: "style_doubleTitle__Uj6cG",
                easterButton: "style_easterButton__iE2w4",
                goLiveBannerImg: "style_goLiveBannerImg__IP3M3",
                goLiveBanner: "style_goLiveBanner__8mEkM",
                goLiveTitle: "style_goLiveTitle__p5k48",
                goLiveSub: "style_goLiveSub__gfORA",
                goLiveSub2: "style_goLiveSub2__F0N8p",
                goLiveSub3: "style_goLiveSub3__a0HDs",
                goLiveSub4: "style_goLiveSub4__HTHfF",
                goLiveList: "style_goLiveList__O1U63",
                goLiveListItem: "style_goLiveListItem__WhcSH",
                goLiveListLine: "style_goLiveListLine__qoY8j",
                goLiveDesc: "style_goLiveDesc__R4wjY",
                battlePoolBannerImg: "style_battlePoolBannerImg__jAPEM",
                battlePoolBanner: "style_battlePoolBanner__cT55y",
                battlePoolSub: "style_battlePoolSub__SkK88",
                icon: "style_icon__CiSga",
                battlePoolSub2: "style_battlePoolSub2__BWcSL",
                battlePoolTitle: "style_battlePoolTitle__ToRA0",
                battlePoolDesc: "style_battlePoolDesc__fdyEJ",
                certikBannerImg: "style_certikBannerImg__mPF5D",
                certikBanner: "style_certikBanner__TLrNO",
                certikSub: "style_certikSub__IunfE",
                certikSub2: "style_certikSub2__LABzh",
                certikTitle: "style_certikTitle__VdcBh",
                certikDiv: "style_certikDiv__unmJ8",
                certikDesc: "style_certikDesc__w7ZJT",
                newLaunchBannerImg: "style_newLaunchBannerImg__rOe2m",
                newLaunchBanner: "style_newLaunchBanner__1pat8",
                newLaunchSub: "style_newLaunchSub__ZCILN",
                newLaunchSub2: "style_newLaunchSub2__xEoBD",
                newLaunchTitle: "style_newLaunchTitle__isa0u",
                newLaunchDiv: "style_newLaunchDiv___yC9g",
                newLaunchDesc: "style_newLaunchDesc__2qD9X",
                easterBannerImg: "style_easterBannerImg__LErlH",
                easterBanner: "style_easterBanner__8P13E",
                easterSub: "style_easterSub__YQQUJ",
                easterTitle: "style_easterTitle__zU3pJ",
                easterDiv: "style_easterDiv__dGgyI",
                easterDesc: "style_easterDesc___U3Z9",
                bdagExpiringBannerImg: "style_bdagExpiringBannerImg__cAcnl",
                bdagExpiringBanner: "style_bdagExpiringBanner__Utqvx",
                bdagExpiringTitle: "style_bdagExpiringTitle__ZV8xj",
                bdagExpiringSub: "style_bdagExpiringSub__bvrwv",
                bdagExpiringDiv: "style_bdagExpiringDiv__jhWoo",
                bdagExpiringDesc: "style_bdagExpiringDesc__9Id9W",
                bdagExpiringButton: "style_bdagExpiringButton__n1Xpl",
                keynoteLiveBannerImg: "style_keynoteLiveBannerImg__LejlG",
                keynoteLiveBanner: "style_keynoteLiveBanner__DpwTl",
                keynoteLiveTitle: "style_keynoteLiveTitle__aS08g",
                keynoteLiveSub: "style_keynoteLiveSub__DLqNG",
                keynoteLiveDesc: "style_keynoteLiveDesc__EZmQx",
                keynoteLiveButton: "style_keynoteLiveButton__S06s4",
                finalAmaBannerImg: "style_finalAmaBannerImg__FWaaE",
                finalAmaBanner: "style_finalAmaBanner__tl5gU",
                finalAmaSub: "style_finalAmaSub___mF_N",
                finalAmaTitle: "style_finalAmaTitle__UAHPm",
                finalAmaDesc: "style_finalAmaDesc___rDGc",
                finalAmaCode: "style_finalAmaCode__3TvA3",
                limitedTimeBannerImg: "style_limitedTimeBannerImg___vk94",
                limitedTimeBanner: "style_limitedTimeBanner__bczqU",
                limitedTimeTitle: "style_limitedTimeTitle__pUYwO",
                limitedTimeDesc: "style_limitedTimeDesc__2v7wV",
                limitedTimeDesc2: "style_limitedTimeDesc2__sH_bV",
                limitedTimeButton: "style_limitedTimeButton__7pEFn",
                spaceBannerImg: "style_spaceBannerImg__qZCFV",
                spaceBanner: "style_spaceBanner__BsYUu",
                spaceTitle: "style_spaceTitle__1r6L2",
                spaceDesc: "style_spaceDesc__xqmqz",
                raisedBannerImg: "style_raisedBannerImg__JGzSJ",
                raisedBanner: "style_raisedBanner__EabKg",
                raisedTitle: "style_raisedTitle__3jaKs",
                raisedDesc: "style_raisedDesc__frKww",
                auditBannerImg: "style_auditBannerImg__T_XIp",
                auditBanner: "style_auditBanner__kAKno",
                auditTitle: "style_auditTitle__AKk4P",
                auditDesc: "style_auditDesc__8fnn7",
                certik: "style_certik__L1sJ1",
                halborn: "style_halborn__mHEVS",
                listingBannerImg: "style_listingBannerImg__wj9A7",
                listingBanner: "style_listingBanner__aZUhq",
                listingSub: "style_listingSub__p3C_R",
                listingTitle: "style_listingTitle__wFvv8",
                listingDesc: "style_listingDesc__5_uaV",
                listingDesc2: "style_listingDesc2__0pwox",
                newMembers: "style_newMembers__SBPFV",
                newMembersImg: "style_newMembersImg__WpU0Q",
                newMembersText: "style_newMembersText__vKTAn",
                exchangeBannerImg: "style_exchangeBannerImg__oGGae",
                exchangeBanner: "style_exchangeBanner__hlGYv",
                exchangeContent: "style_exchangeContent__2JYTu",
                exchangeSub: "style_exchangeSub__6KmVK",
                exchangeTitle: "style_exchangeTitle__DgVyg",
                exchangeDesc: "style_exchangeDesc__H5hiz",
                exchangeDesc2: "style_exchangeDesc2__YYuiN",
                aff10Img: "style_aff10Img__gIvQU",
                aff10Banner: "style_aff10Banner__fHo_7",
                aff10Content: "style_aff10Content__mPwpc",
                aff10Sub: "style_aff10Sub__LILDE",
                aff10Title: "style_aff10Title__gbiZX",
                aff10Desc: "style_aff10Desc__VzucG",
                aff10Button: "style_aff10Button___2aGl",
                x1LaunchImg: "style_x1LaunchImg__t22mf",
                x1LaunchBanner: "style_x1LaunchBanner__H_DLa",
                x1LaunchContent: "style_x1LaunchContent__maDcN",
                x1LaunchSub: "style_x1LaunchSub__lEuZB",
                x1LaunchTitle: "style_x1LaunchTitle__SoptN",
                x1LaunchDesc: "style_x1LaunchDesc___TTPG",
                interLaunchImg: "style_interLaunchImg__JLVLL",
                interLaunchBanner: "style_interLaunchBanner__aCUGW",
                interLaunchContent: "style_interLaunchContent__VDG0_",
                interLaunchSub: "style_interLaunchSub__6Sv_q",
                interLaunchTitle: "style_interLaunchTitle__2WG4s",
                interLaunchDesc: "style_interLaunchDesc__2jS_0",
                interLaunchDesc2: "style_interLaunchDesc2__Nd0IT",
                interLaunchButton: "style_interLaunchButton__xQZBL",
                massiveImg: "style_massiveImg__ZnDad",
                massiveBanner: "style_massiveBanner__h6kde",
                massiveContent: "style_massiveContent__iwWG9",
                massiveTitle: "style_massiveTitle__3ELpN",
                teamImg: "style_teamImg__QjZyp",
                keynote3BannerImg: "style_keynote3BannerImg__8Vlgy",
                keynote3Banner: "style_keynote3Banner__5rety",
                keynote3Title: "style_keynote3Title__I2qxt",
                keynote3Desc: "style_keynote3Desc__xAqwz",
                amaBannerImg: "style_amaBannerImg__KcQUX",
                amaBanner: "style_amaBanner__qveTB",
                amaTitle: "style_amaTitle__nfwJS",
                amaDesc: "style_amaDesc__f4Cpg",
                cgiBannerImg: "style_cgiBannerImg__a6stm",
                cgiBanner: "style_cgiBanner__bcqjk",
                cgiTitle: "style_cgiTitle__PsF_l",
                cgiSub: "style_cgiSub__ULzFc",
                cgiDesc: "style_cgiDesc__HRWkQ",
                TestnetSub: "style_TestnetSub__5ShLS",
                TestnetDesc: "style_TestnetDesc__aR8st",
                activeUserBanner: "style_activeUserBanner__UWjP3",
                activeUserTitle: "style_activeUserTitle__wXjc0",
                stores: "style_stores__cLzPV",
                hero: "style_hero__tXKZW",
                swiperNavigation: "style_swiperNavigation__wcA5S",
                prev: "style_prev__PzhgM",
                next: "style_next__6O0jS",
                position: "style_position__OOTA2",
                swiper: "style_swiper__H0FOs",
                content: "style_content__6JEzh",
                container: "style_container__wsYVP",
                mainContent: "style_mainContent__Q57El",
                xCenter: "style_xCenter__vx6Tq",
                yCenter: "style_yCenter__KPfZs",
                yBottom: "style_yBottom__A6p_g",
                btns: "style_btns__WQlab",
                slideWrapper: "style_slideWrapper__yAG8Q",
                partners: "style_partners__EntuL",
                partnerShip: "style_partnerShip__Cd4mL",
                partnerLogos: "style_partnerLogos__Aor41",
                partnerLogoText: "style_partnerLogoText__uLqLF",
                active: "style_active__Q0pNl",
                img: "style_img__Yeqei",
                videoActive: "style_videoActive__PkdgK",
                video: "style_video__BxuzB",
                center: "style_center__H1nYx",
                left: "style_left__K2LsV",
                right: "style_right__NON5M",
                slideContent: "style_slideContent__YIk_b",
                pagination: "style_pagination__dkJvy",
                referralBannerImg: "style_referralBannerImg__t7wsV",
                referralBanner: "style_referralBanner__we8po",
                referralContent: "style_referralContent__gkowh",
                referralTitle: "style_referralTitle__s3pid",
                highlight: "style_highlight__U0k63",
                referralDesc: "style_referralDesc__DtD58",
                referralButton: "style_referralButton__iJjfi",
                ibelinkText: "style_ibelinkText__nZEEp",
                animationFirst: "style_animationFirst__iazKh"
            }
        },
        26143: function (e) {
            e.exports = {
                keynotes: "style_keynotes__Rf_rY",
                container: "style_container__uWpT3",
                top: "style_top__CKIne",
                grid: "style_grid__C3svw",
                item: "style_item__uzrvS",
                title: "style_title__b_tG7",
                desc: "style_desc__zAuh4",
                imgWrapper: "style_imgWrapper__AkTxi"
            }
        },
        72232: function (e) {
            e.exports = {
                media: "style_media__MGgKx",
                container: "style_container___31qm",
                texts: "style_texts__SO8nV",
                title: "style_title__YSHJi",
                desc: "style_desc__4fuYc",
                logos: "style_logos__IXOX0",
                logo: "style_logo___etC_"
            }
        },
        9750: function (e) {
            e.exports = {
                raised: "style_raised__0BywU",
                container: "style_container__tnLJL",
                title: "style_title__hlH4X",
                first: "style_first__jDNmp",
                second: "style_second__Rg8Bw",
                texts: "style_texts__orDoC",
                gifArea: "style_gifArea__MF5c3"
            }
        },
        35234: function (e) {
            e.exports = {
                referral: "style_referral__12bcr",
                container: "style_container__G_s23",
                content: "style_content__vyR4y",
                texts: "style_texts__IyA0i",
                link: "style_link__EO0_k",
                imageWrapper: "style_imageWrapper__NlyFA",
                image: "style_image__LHCHQ"
            }
        },
        44327: function (e) {
            e.exports = {
                section: "style_section__bXXSC",
                content: "style_content__OiZm_",
                boxes: "style_boxes__Eilcm",
                box: "style_box__C9_KI",
                top: "style_top__IKdL0",
                icon: "style_icon___eDAP",
                linkBox: "style_linkBox__G8WTe",
                link: "style_link__wazwM",
                texts: "style_texts__az91B",
                completed: "style_completed__5ohz6",
                uncompleted: "style_uncompleted__GcZ7I",
                button: "style_button__Mhj2F"
            }
        },
        21365: function (e) {
            e.exports = {
                countArea: "style_countArea__BbysK",
                counter: "style_counter__qTi_L",
                box: "style_box__9FPhV",
                box100: "style_box100__O3_7r",
                numbers: "style_numbers__FXsFe",
                numbers100: "style_numbers100__9GtqA",
                digit: "style_digit__mS8IW",
                text: "style_text__ZEEpB"
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
        47062: function (e) {
            e.exports = {
                presaleislive: "style_presaleislive__eIxJ1",
                button: "style_button__29T4g",
                active: "style_active__loAw8",
                logos: "style_logos__QPJFB",
                presale: "style_presale__5KDjs",
                presaleislivesec: "style_presaleislivesec___JlEo"
            }
        },
        87737: function (e) {
            e.exports = {
                presalelogos: "style_presalelogos__CFR1I",
                button: "style_button__YBwt4",
                iconCry: "style_iconCry__lsg1O",
                iconVisa: "style_iconVisa__VZ7By",
                iconMastercard: "style_iconMastercard__Zg_Hl",
                iconPays: "style_iconPays__LDOl7",
                innerPage: "style_innerPage__18LE2",
                dark: "style_dark__t6fFo",
                preLogoAnimation: "style_preLogoAnimation__sAK_B"
            }
        }
    },
    function (e) {
        e.O(0, [3752, 5575, 6624, 6835, 1513, 1352, 922, 7326, 6990, 835, 7429, 7749, 6609, 4169, 5162, 6737, 5066, 2971, 7023, 1744], function () {
            return e(e.s = 25551)
        }), _N_E = e.O()
    }
]);