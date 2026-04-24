"use strict";
    function i18n(t) {
        return window.I18N_MESSAGES[t]
    }
    function timeSecsToIntervalText(t) {
        var e = (Math.floor(t) % 60).toString()
          , n = (Math.floor(t / 60) % 60).toString()
          , a = (Math.floor(t / 3600) % 24).toString()
          , r = Math.floor(t / 86400).toString()
          , o = i18n("util.time.days")
          , i = i18n("util.time.hours")
          , u = i18n("util.time.min")
          , s = i18n("util.time.sec");
        return r > 0 ? r + " " + o + " " + a + " " + i + " " + n + " " + u + " " + e + " " + s : a > 0 ? a + " " + i + " " + n + " " + u + " " + e + " " + s : n > 0 ? n + " " + u + " " + e + " " + s : e + " " + s
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    , _Game, DEBUG_MODE = !1;
    !function(t) {
        function e(t) {
            return t %= c,
            t < 0 ? t + c : t
        }
        function n(t, e, n) {
            return n > e ? e : n < t ? t : Number.isFinite(n) ? n : .5 * (t + e)
        }
        function a(t) {
            try {
                var e = function() {
                    var e = t.getContext("2d");
                    return e.pathCircle = function(t, n, a) {
                        e.beginPath(),
                        e.arc(t, n, a, 0, c),
                        e.closePath()
                    }
                    ,
                    e.pathSector = function(t, n, a, r, o, i) {
                        e.beginPath(),
                        e.arc(t, n, a, r, o, i)
                    }
                    ,
                    e.drawRegion = function(t, n, a, r, o) {
                        return e.drawImage(t.a, t.b, t.c, t.d, t.e, n - r, a - o, 2 * r, 2 * o)
                    }
                    ,
                    {
                        v: e
                    }
                }();
                if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e)))
                    return e.v
            } catch (t) {}
            return null
        }
        function r(t) {
            var e = d.f(t);
            return e ? e : T
        }
        function o(t) {
            var e = w[t];
            return e ? e : y
        }
        function i(t) {
            var e = p[t];
            return e ? e : M
        }
        function u(t) {
            function e(t, e) {
                for (var n = t.length, a = new Array(t.length), r = 0; r < t.length; r++) {
                    var o = a[r] = new Image;
                    o.onload = function() {
                        0 == --n && e(a)
                    }
                    ,
                    o.src = t[r]
                }
            }
            function n(t, e) {
                for (var n = t.length, a = {}, r = 0; r < t.length; r++) {
                    var o = t[r]
                      , i = a[o.name] = new Image;
                    i.onload = function() {
                        0 == --n && e(a)
                    }
                    ,
                    i.src = o.src
                }
            }
            function a(t, e, n, a) {
                var r = parseInt(a.substring(1, 3), 16)
                  , o = parseInt(a.substring(3, 5), 16)
                  , i = parseInt(a.substring(5, 7), 16)
                  , u = h.createElement("canvas");
                u.width = e,
                u.height = n;
                var s = u && u.getContext ? u.getContext("2d") : null;
                s.clearRect(0, 0, e, n),
                s.drawImage(t, 0, 0, e, n);
                for (var l = s.getImageData(0, 0, e, n), c = e * n, g = 0; g < c; g++)
                    l.data[4 * g] *= r / 256,
                    l.data[4 * g + 1] *= o / 256,
                    l.data[4 * g + 2] *= i / 256;
                return s.putImageData(l, 0, 0),
                u
            }
            function r() {
                0 == --i && t()
            }
            function o(t, e) {
                for (var n in t)
                    t.hasOwnProperty(n) && e(n, t[n])
            }
            var i = 4;
            e(["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAoCAYAAABw65OnAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABqNJREFUWAnNWH1MlVUYP5fvAVe4fHbTwES4uCJBvoYfNKBYKSnNrBk5+oet2nBaa5UM48OiuZUtJkqx2QqaNl3N7Rq1YogGU3DarAQVh0xAGN8fClzg9HuO973c99wXyJnas/3ec85znnPO857zPM953lfH5iYDuhKBJ4BQwAm4Bdx0cXH5Y2pq6jTqE8A9k05jhjXg7QKoPAdEZWZmBqalpbHbt2+zzs5O1tTUxBoaGoanp6cr0f8pcA34T4gU2gN0ALmAD7ApKiqKT05Ocpm6urp4Xl4e1+v145B7F3AG7pn2YobfgUfsZjpz5MgReX1Vu62tjScnJ3OMOQa42I296+oWjLgE6O1GhgYEBHCLxaJaVKsxMTHBMzIySJEKu/F3VaVtpDNdK43K2rhxo9aamryRkRFuMplIkWxpngWbZPGpQB9A1m5PplWrVtm35617e3uzw4cPMzc3t88hGDCvsNRJSiQDP0t8avr6+flpsBk7deoUS01NZcHBwSw+Pp5VVVUJuejoaJadne2LxpuaA+dhHkKf1hZ+CXLY+pqaGo44QduuQmlpqZCtr68n/gVaz2AwbPX19Y2h+kL0DQRe0xA6uG/fPgcl1q1bp1oc40QbCwojJnfGkUyB7wH3jQDfApSg7aaxhmDRcXQBj2oI9Pb1kamoqaWlRc2wtgYGBlh3dzdzdXVlPj4+ZOx6GOtllI1GL6/3cbT12JVQrcGkBMWGp+VOJyenGzSpTGFhYTJLtPHWLCgoSNTHxsaoFA+dTnc0PTSEfbQ6KdZFp2uEgrFCSHp4o90DLLbn49xTEhMTHY7DbDZzTOxwJCUlJUKWIin6aT5B/v7+K54KeYzzXe/xmm1ZfHFQ4CB2hJzBgT4G55DE1Xt6euKemtJUJCYmhru7u/Pw8HC+f/9+PjMzI+TKy8tJQbpTbISj6L65I1cocjJ7GzcGBvZDuUibgLVCkfI68KLUceH8+fMOSszFoOgaGRnJnZ2dn7efx89gMJu3viKUoB05umUzh7FeQUQWEZpsgmgE2Ax8BTwDKNRw4sQJpb5gWVxczJqbm6txu/5kL4w9unRtaNjG2hy+nGVFmpZjlwuJqShB9SYgE/gW+ABwBczHjx9HMT9hZ9ju3btZUVERuc6rsjRspK1teFYJ6i9ISmTebm5vIdIG2StBfRS64wHKJSjgBDc2Nlq0vAR9gi5evCiiJ3bhVzDo/hm40zP7hJLtPbcoH5olfw8P9nJEuDtc+nUXK5uUmbHWb6DMAOhY3oHBdSQkJCxNT09nK1euZEajkcH/Ga5wVl1dzc6ePduFRciwDwDTgAOh/9aIxeLAJ9c99NffaYoSFFwUJRRhejMCa29vj6qoqEhFdRlArjwKdAKnAZKZBOYkuPvwqIYSJgNdMyxMPo45J7qfHcpOaG2jOA4sHhkSEnJPxwEvWOSNcC5Ty8AgsVoVJeyPYgk6DgKPA58hfB/AuYtrG20VFRQUMBimcfv27aW1tbWb0LkV6FUJoQHv8NRrKPHL9XYS/U0+jrVgNgJ0n0QD3cgXXClvmIuQCDNc7yw/P5927jRAnwoqghIhQZ6eKl7f+Dj7/vKVCQS4r+2ViIPUj8A2gK5eMucNSPFQzE9YhGIExQoTJL+TpeEdS5cuWqRiFzScYaOTk2Wjo6M9ihIUPo8BOYDwCOuIpPXr11urCxfYDYaw/Zwctp10uhXLfGaVOHblKqtqbrkKr/mQZlWUoAhZA/xATCvRBfYkbbdMFMop//RAwImIiGBlZWUMb8swKdu5cydD2M5SjdHp4mKD71zzdR2dLLe2bgC29kJvby9dF4L+F1c5HbrZqpCtgKZv5OTk4AXVlJSU5JBLYBB9idm+1LCDJCMsEdf42zvWrOYHMjbwAIOhRyupoeNYA5wEVIRwvUTLK1pbW1VySoNCeU/PnVzGy8uL2OKBV3iJXDGvvuEcMpP4oaGhc8oYpSQljACFYJkCkHjIPIYPHAceMZAfiFgCl2NYiILfCCW6KOO7xsY+6e/vXz04OEg5iwOREjSA7g6ZnKxvpOIXFhYKA1Qx0SAXJcOkL3Zk3H+CNY52LHYiAUkwGf6890sxBPYAMn0BUhuEtVVXV8dTUlI4ElseFxfHKysrbXJkR5goX55sofazEKAoKVMRwrJt8n9ToVQQ3xyUT9zVZyAtTEdxDaCQbU8P7INYWXQLKg/114CiyF5U6OJ6aD9JSBEdQAbaAeQCPsAD+V1EC8tEwWsXQCUFlvv+40xLCawr6IH9QvwHmxqTf4/YWCIAAAAASUVORK5CYII="], function(t) {
                x = t[0],
                r()
            }),
            e(["/images/bg-pattern.png"], function(t) {
                f = t[0],
                r()
            }),
            e(["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwUlEQVRIS73VB2sWQRDG8d/aoth7R7HEgt//k4hdUexGjSaR2OLKI3PhXmMB4RwYbt/b9+a/88zsbjOxtb/F773nP5tGnk++Dd5a63+K8VtA7z1Bt2Ib5mq8uYKt4Qs+4XPGrbVAN9gvAb33LdiBXeU7sR15H/uKj/iAlfLV1lrez9gGQO89q96NfTiA/diLQDIXy+oT/D0W8RbvsNxay9y6zQBq5XtwEEdxDEcKFGikikWa5Qr8Ci/wEm+wNM5kHVCaZ5WHcQKnyzM+hIDHgCW8xjM8Ls94IdkNNRkD8nEkOYmzOFfPUwUNIAWPpbABJNgTPMSDej5NZq21ZOkHoFoxBY0kCX4R8wUJIBlkflyDFDcZBJDgd3C3IJFsJS08ANJ+KWaCXcDl8vOVUebSVWndWFpytQqcFd/HrfJ7BV1sra0NgKwsqzyDS7iKKwjgeOk/7IGhQ7IXItPzAtzEDdzGo2SXjhoA0T/FjTxZ/bUCpA6RLcX/uaWzg9OqkSMSBXC9skhNFlKH/waYXKLJixyppmvT2gvTbbQCpMenOyoKkuN4msNu2D2THtcjyHQXzggy3ZU5vpEmu/Rnb9Z///UddRYCKBhTvLwAAAAASUVORK5CYII="], function(t) {
                var e = t[0]
                  , n = new Array(9);
                n[0] = a(e, 8, 8, "#ff66aa"),
                n[1] = a(e, 8, 8, "#ff8888"),
                n[2] = a(e, 8, 8, "#ffaa66"),
                n[3] = a(e, 8, 8, "#aaff66"),
                n[4] = a(e, 8, 8, "#88ff88"),
                n[5] = a(e, 8, 8, "#66ffaa"),
                n[6] = a(e, 8, 8, "#66aaff"),
                n[7] = a(e, 8, 8, "#8888ff"),
                n[8] = a(e, 8, 8, "#aa66ff"),
                v = n,
                r()
            });
            var u = {
                version: 1e4,
                textureDict: {
                    T0: {
                        url: "/textures/10000/18e95928.png"
                    },
                    T1: {
                        url: "/textures/10000/627a56f3.png"
                    },
                    T2: {
                        url: "/textures/10000/cfae417a.png"
                    }
                },
                regionDict: {
                    G0: {
                        texture: "T0",
                        x: 0,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G1: {
                        texture: "T0",
                        x: 20,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G2: {
                        texture: "T0",
                        x: 40,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G3: {
                        texture: "T0",
                        x: 60,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G4: {
                        texture: "T0",
                        x: 80,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G5: {
                        texture: "T0",
                        x: 100,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G6: {
                        texture: "T0",
                        x: 120,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G7: {
                        texture: "T0",
                        x: 140,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G8: {
                        texture: "T0",
                        x: 160,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    G9: {
                        texture: "T0",
                        x: 180,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Ga: {
                        texture: "T0",
                        x: 200,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gb: {
                        texture: "T0",
                        x: 220,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gc: {
                        texture: "T0",
                        x: 240,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gd: {
                        texture: "T0",
                        x: 260,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Ge: {
                        texture: "T0",
                        x: 280,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gf: {
                        texture: "T0",
                        x: 300,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gg: {
                        texture: "T0",
                        x: 320,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gh: {
                        texture: "T0",
                        x: 340,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gi: {
                        texture: "T0",
                        x: 360,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gj: {
                        texture: "T0",
                        x: 380,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    Gk: {
                        texture: "T0",
                        x: 400,
                        y: 0,
                        w: 16,
                        h: 16
                    },
                    B0: {
                        texture: "T0",
                        x: 420,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    B1: {
                        texture: "T0",
                        x: 488,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    B2: {
                        texture: "T0",
                        x: 556,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    B3: {
                        texture: "T0",
                        x: 624,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    B4: {
                        texture: "T0",
                        x: 692,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    B5: {
                        texture: "T0",
                        x: 760,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    B6: {
                        texture: "T0",
                        x: 828,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    B7: {
                        texture: "T0",
                        x: 896,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    B8: {
                        texture: "T0",
                        x: 0,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    B9: {
                        texture: "T0",
                        x: 68,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Ba: {
                        texture: "T0",
                        x: 136,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bb: {
                        texture: "T0",
                        x: 204,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bc: {
                        texture: "T0",
                        x: 272,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bd: {
                        texture: "T0",
                        x: 340,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Be: {
                        texture: "T0",
                        x: 408,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bf: {
                        texture: "T0",
                        x: 476,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bg: {
                        texture: "T0",
                        x: 544,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bh: {
                        texture: "T0",
                        x: 612,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bi: {
                        texture: "T0",
                        x: 680,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bj: {
                        texture: "T0",
                        x: 748,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    Bk: {
                        texture: "T0",
                        x: 816,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    q1: {
                        texture: "T0",
                        x: 884,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    q2: {
                        texture: "T0",
                        x: 952,
                        y: 68,
                        w: 64,
                        h: 64
                    },
                    q3: {
                        texture: "T0",
                        x: 0,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    q4: {
                        texture: "T0",
                        x: 68,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    q5: {
                        texture: "T0",
                        x: 136,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    q6: {
                        texture: "T0",
                        x: 204,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    w1: {
                        texture: "T0",
                        x: 272,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    w2: {
                        texture: "T0",
                        x: 340,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    w3: {
                        texture: "T0",
                        x: 408,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    w4: {
                        texture: "T0",
                        x: 476,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    w5: {
                        texture: "T0",
                        x: 544,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    w6: {
                        texture: "T0",
                        x: 612,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    e1: {
                        texture: "T0",
                        x: 680,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    e2: {
                        texture: "T0",
                        x: 748,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    e3: {
                        texture: "T0",
                        x: 816,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    e4: {
                        texture: "T0",
                        x: 884,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    e5: {
                        texture: "T0",
                        x: 952,
                        y: 136,
                        w: 64,
                        h: 64
                    },
                    e6: {
                        texture: "T0",
                        x: 0,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    r1: {
                        texture: "T0",
                        x: 68,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    r2: {
                        texture: "T0",
                        x: 136,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    r3: {
                        texture: "T0",
                        x: 204,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    r4: {
                        texture: "T0",
                        x: 272,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    r5: {
                        texture: "T0",
                        x: 340,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    r6: {
                        texture: "T0",
                        x: 408,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    t1: {
                        texture: "T0",
                        x: 476,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    t2: {
                        texture: "T0",
                        x: 544,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    t3: {
                        texture: "T0",
                        x: 612,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    t4: {
                        texture: "T0",
                        x: 680,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    t5: {
                        texture: "T0",
                        x: 748,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    t6: {
                        texture: "T0",
                        x: 816,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    t7: {
                        texture: "T0",
                        x: 884,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    t8: {
                        texture: "T0",
                        x: 952,
                        y: 204,
                        w: 64,
                        h: 64
                    },
                    y1: {
                        texture: "T0",
                        x: 0,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    y2: {
                        texture: "T0",
                        x: 68,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    y3: {
                        texture: "T0",
                        x: 136,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    y4: {
                        texture: "T0",
                        x: 204,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    y5: {
                        texture: "T0",
                        x: 272,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    y6: {
                        texture: "T0",
                        x: 340,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    y7: {
                        texture: "T0",
                        x: 408,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    y8: {
                        texture: "T0",
                        x: 476,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    u1: {
                        texture: "T0",
                        x: 544,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    u2: {
                        texture: "T0",
                        x: 612,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    u3: {
                        texture: "T0",
                        x: 680,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    u4: {
                        texture: "T0",
                        x: 748,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    u5: {
                        texture: "T0",
                        x: 816,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    u6: {
                        texture: "T0",
                        x: 884,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    u7: {
                        texture: "T0",
                        x: 952,
                        y: 272,
                        w: 64,
                        h: 64
                    },
                    u8: {
                        texture: "T0",
                        x: 0,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    i1: {
                        texture: "T0",
                        x: 68,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    i2: {
                        texture: "T0",
                        x: 136,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    i3: {
                        texture: "T0",
                        x: 204,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    i4: {
                        texture: "T0",
                        x: 272,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    i5: {
                        texture: "T0",
                        x: 340,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    i6: {
                        texture: "T0",
                        x: 408,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    i7: {
                        texture: "T0",
                        x: 476,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    i8: {
                        texture: "T0",
                        x: 544,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    o1: {
                        texture: "T0",
                        x: 612,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    o2: {
                        texture: "T0",
                        x: 680,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    o3: {
                        texture: "T0",
                        x: 748,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    o4: {
                        texture: "T0",
                        x: 816,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    o5: {
                        texture: "T0",
                        x: 884,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    o6: {
                        texture: "T0",
                        x: 952,
                        y: 340,
                        w: 64,
                        h: 64
                    },
                    o7: {
                        texture: "T0",
                        x: 0,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    o8: {
                        texture: "T0",
                        x: 68,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    p1: {
                        texture: "T0",
                        x: 136,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    p2: {
                        texture: "T0",
                        x: 204,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    p3: {
                        texture: "T0",
                        x: 272,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    p4: {
                        texture: "T0",
                        x: 340,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    p5: {
                        texture: "T0",
                        x: 408,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    p6: {
                        texture: "T0",
                        x: 476,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    p7: {
                        texture: "T0",
                        x: 544,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    p8: {
                        texture: "T0",
                        x: 612,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    a1: {
                        texture: "T0",
                        x: 680,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    a2: {
                        texture: "T0",
                        x: 748,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    a3: {
                        texture: "T0",
                        x: 816,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    a4: {
                        texture: "T0",
                        x: 884,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    a5: {
                        texture: "T0",
                        x: 952,
                        y: 408,
                        w: 64,
                        h: 64
                    },
                    a6: {
                        texture: "T0",
                        x: 0,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    a7: {
                        texture: "T0",
                        x: 68,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    a8: {
                        texture: "T0",
                        x: 136,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    s1: {
                        texture: "T0",
                        x: 204,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    s2: {
                        texture: "T0",
                        x: 272,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    s3: {
                        texture: "T0",
                        x: 340,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    s4: {
                        texture: "T0",
                        x: 408,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    s5: {
                        texture: "T0",
                        x: 476,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    s6: {
                        texture: "T0",
                        x: 544,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    s7: {
                        texture: "T0",
                        x: 612,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    s8: {
                        texture: "T0",
                        x: 680,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    d1: {
                        texture: "T0",
                        x: 748,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    d2: {
                        texture: "T0",
                        x: 816,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    d3: {
                        texture: "T0",
                        x: 884,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    d4: {
                        texture: "T0",
                        x: 952,
                        y: 476,
                        w: 64,
                        h: 64
                    },
                    d5: {
                        texture: "T0",
                        x: 0,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    d6: {
                        texture: "T0",
                        x: 68,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    d7: {
                        texture: "T0",
                        x: 136,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    d8: {
                        texture: "T0",
                        x: 204,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    f1: {
                        texture: "T0",
                        x: 272,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    f2: {
                        texture: "T0",
                        x: 340,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    f3: {
                        texture: "T0",
                        x: 408,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    f4: {
                        texture: "T0",
                        x: 476,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    f5: {
                        texture: "T0",
                        x: 544,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    f6: {
                        texture: "T0",
                        x: 612,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    f7: {
                        texture: "T0",
                        x: 680,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    f8: {
                        texture: "T0",
                        x: 748,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    g1: {
                        texture: "T0",
                        x: 816,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    g2: {
                        texture: "T0",
                        x: 884,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    g3: {
                        texture: "T0",
                        x: 952,
                        y: 544,
                        w: 64,
                        h: 64
                    },
                    g4: {
                        texture: "T0",
                        x: 0,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    g5: {
                        texture: "T0",
                        x: 68,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    g6: {
                        texture: "T0",
                        x: 136,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    g7: {
                        texture: "T0",
                        x: 204,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    g8: {
                        texture: "T0",
                        x: 272,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    h1: {
                        texture: "T0",
                        x: 340,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    h2: {
                        texture: "T0",
                        x: 408,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    h3: {
                        texture: "T0",
                        x: 476,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    h4: {
                        texture: "T0",
                        x: 544,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    h5: {
                        texture: "T0",
                        x: 612,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    h6: {
                        texture: "T0",
                        x: 680,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    h7: {
                        texture: "T0",
                        x: 748,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    h8: {
                        texture: "T0",
                        x: 816,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    j1: {
                        texture: "T0",
                        x: 884,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    j2: {
                        texture: "T0",
                        x: 952,
                        y: 612,
                        w: 64,
                        h: 64
                    },
                    j3: {
                        texture: "T0",
                        x: 0,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    j4: {
                        texture: "T0",
                        x: 68,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    j5: {
                        texture: "T0",
                        x: 136,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    j6: {
                        texture: "T0",
                        x: 204,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    j7: {
                        texture: "T0",
                        x: 272,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    j8: {
                        texture: "T0",
                        x: 340,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    k1: {
                        texture: "T0",
                        x: 408,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    k2: {
                        texture: "T0",
                        x: 476,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    k3: {
                        texture: "T0",
                        x: 544,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    k4: {
                        texture: "T0",
                        x: 612,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    k5: {
                        texture: "T0",
                        x: 680,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    k6: {
                        texture: "T0",
                        x: 748,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    k7: {
                        texture: "T0",
                        x: 816,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    k8: {
                        texture: "T0",
                        x: 884,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    l1: {
                        texture: "T0",
                        x: 952,
                        y: 680,
                        w: 64,
                        h: 64
                    },
                    l2: {
                        texture: "T0",
                        x: 0,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    l3: {
                        texture: "T0",
                        x: 68,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    l4: {
                        texture: "T0",
                        x: 136,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    l5: {
                        texture: "T0",
                        x: 204,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    l6: {
                        texture: "T0",
                        x: 272,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    l7: {
                        texture: "T0",
                        x: 340,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    l8: {
                        texture: "T0",
                        x: 408,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    z1: {
                        texture: "T0",
                        x: 476,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    z2: {
                        texture: "T0",
                        x: 544,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    z3: {
                        texture: "T0",
                        x: 612,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    z4: {
                        texture: "T0",
                        x: 680,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    z5: {
                        texture: "T0",
                        x: 748,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    z6: {
                        texture: "T0",
                        x: 816,
                        y: 748,
                        w: 64,
                        h: 64
                    },
                    P000: {
                        texture: "T1",
                        x: 0,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    P001: {
                        texture: "T1",
                        x: 64,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    P002: {
                        texture: "T1",
                        x: 128,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    P003: {
                        texture: "T1",
                        x: 192,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    P004: {
                        texture: "T1",
                        x: 256,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    P005: {
                        texture: "T1",
                        x: 320,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    P006: {
                        texture: "T1",
                        x: 384,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    P007: {
                        texture: "T1",
                        x: 448,
                        y: 0,
                        w: 64,
                        h: 64
                    },
                    P008: {
                        texture: "T1",
                        x: 0,
                        y: 64,
                        w: 64,
                        h: 64
                    },
                    P009: {
                        texture: "T1",
                        x: 64,
                        y: 64,
                        w: 64,
                        h: 64
                    },
                    P010: {
                        texture: "T1",
                        x: 128,
                        y: 64,
                        w: 64,
                        h: 64
                    },
                    P011: {
                        texture: "T1",
                        x: 192,
                        y: 64,
                        w: 64,
                        h: 64
                    },
                    P012: {
                        texture: "T1",
                        x: 256,
                        y: 64,
                        w: 64,
                        h: 64
                    },
                    P013: {
                        texture: "T1",
                        x: 320,
                        y: 64,
                        w: 64,
                        h: 64
                    },
                    P014: {
                        texture: "T1",
                        x: 384,
                        y: 64,
                        w: 64,
                        h: 64
                    },
                    P015: {
                        texture: "T1",
                        x: 448,
                        y: 64,
                        w: 64,
                        h: 64
                    },
                    P016: {
                        texture: "T1",
                        x: 0,
                        y: 128,
                        w: 64,
                        h: 64
                    },
                    P017: {
                        texture: "T1",
                        x: 64,
                        y: 128,
                        w: 64,
                        h: 64
                    },
                    P018: {
                        texture: "T1",
                        x: 128,
                        y: 128,
                        w: 64,
                        h: 64
                    },
                    P019: {
                        texture: "T1",
                        x: 192,
                        y: 128,
                        w: 64,
                        h: 64
                    },
                    P020: {
                        texture: "T1",
                        x: 256,
                        y: 128,
                        w: 64,
                        h: 64
                    },
                    P021: {
                        texture: "T1",
                        x: 320,
                        y: 128,
                        w: 64,
                        h: 64
                    },
                    P022: {
                        texture: "T1",
                        x: 384,
                        y: 128,
                        w: 64,
                        h: 64
                    },
                    P023: {
                        texture: "T1",
                        x: 448,
                        y: 128,
                        w: 64,
                        h: 64
                    },
                    P024: {
                        texture: "T1",
                        x: 0,
                        y: 192,
                        w: 64,
                        h: 64
                    },
                    P025: {
                        texture: "T1",
                        x: 64,
                        y: 192,
                        w: 64,
                        h: 64
                    },
                    P026: {
                        texture: "T1",
                        x: 128,
                        y: 192,
                        w: 64,
                        h: 64
                    },
                    P027: {
                        texture: "T1",
                        x: 192,
                        y: 192,
                        w: 64,
                        h: 64
                    },
                    PUNK: {
                        texture: "T1",
                        x: 0,
                        y: 256,
                        w: 64,
                        h: 64
                    },
                    P081: {
                        texture: "T1",
                        x: 64,
                        y: 256,
                        w: 64,
                        h: 64
                    },
                    P082: {
                        texture: "T1",
                        x: 128,
                        y: 256,
                        w: 64,
                        h: 64
                    },
                    P083: {
                        texture: "T1",
                        x: 192,
                        y: 256,
                        w: 64,
                        h: 64
                    },
                    P084: {
                        texture: "T1",
                        x: 256,
                        y: 256,
                        w: 64,
                        h: 64
                    },
                    P085: {
                        texture: "T1",
                        x: 320,
                        y: 256,
                        w: 64,
                        h: 64
                    },
                    P086: {
                        texture: "T1",
                        x: 384,
                        y: 256,
                        w: 64,
                        h: 64
                    },
                    P087: {
                        texture: "T1",
                        x: 448,
                        y: 256,
                        w: 64,
                        h: 64
                    },
                    PG0: {
                        texture: "T1",
                        x: 0,
                        y: 384,
                        w: 128,
                        h: 128
                    },
                    PG1: {
                        texture: "T1",
                        x: 128,
                        y: 384,
                        w: 128,
                        h: 128
                    },
                    PCIN: {
                        texture: "T1",
                        x: 0,
                        y: 320,
                        w: 64,
                        h: 64
                    },
                    AUN: {
                        texture: "T2",
                        x: 0,
                        y: 0,
                        w: 60,
                        h: 60
                    },
                    A00: {
                        texture: "T2",
                        x: 60,
                        y: 0,
                        w: 60,
                        h: 60
                    },
                    A01: {
                        texture: "T2",
                        x: 120,
                        y: 0,
                        w: 60,
                        h: 60
                    },
                    A02: {
                        texture: "T2",
                        x: 180,
                        y: 0,
                        w: 60,
                        h: 60
                    },
                    A03: {
                        texture: "T2",
                        x: 0,
                        y: 60,
                        w: 60,
                        h: 60
                    },
                    A04: {
                        texture: "T2",
                        x: 60,
                        y: 60,
                        w: 60,
                        h: 60
                    },
                    A05: {
                        texture: "T2",
                        x: 120,
                        y: 60,
                        w: 60,
                        h: 60
                    }
                },
                segmentUnknown: {
                    prime: "fedeb5",
                    base: ["B06"],
                    glow: ["G06"]
                },
                segmentDict: {
                    0: {
                        prime: "26c6da",
                        base: ["B7", "B7", "Bd", "Bd"],
                        glow: ["G7", "G7", "Gd", "Gd"]
                    },
                    1: {
                        prime: "58c4f5",
                        base: ["B3", "B3", "B0", "B0", "B3"],
                        glow: ["G3", "G3", "G0", "G0", "G3"]
                    },
                    2: {
                        prime: "8760c7",
                        base: ["Bh", "Bh", "B6", "B6", "Bh"],
                        glow: ["Gh", "Gh", "G6", "G6", "Gh"]
                    },
                    3: {
                        prime: "feec64",
                        base: ["Bc", "Bc", "B0", "B0", "Bc"],
                        glow: ["Gc", "Gc", "G0", "G0", "Gc"]
                    },
                    4: {
                        prime: "26c6da",
                        base: ["B7", "B7", "B4", "B4", "B7"],
                        glow: ["G7", "G7", "G4", "G4", "G7"]
                    },
                    5: {
                        prime: "fc714a",
                        base: ["Bb", "Bb", "B2", "B2", "Bb"],
                        glow: ["Gb", "Gb", "G2", "G2", "Gb"]
                    },
                    6: {
                        prime: "feec64",
                        base: ["Bc", "Bc", "B7", "B7", "Bc"],
                        glow: ["Gc", "Gc", "G7", "G7", "Gc"]
                    },
                    7: {
                        prime: "fc714a",
                        base: ["Bb", "B7", "Bc", "Bc"],
                        glow: ["Gb", "G7", "Gc", "Gc"]
                    },
                    8: {
                        prime: "26c6da",
                        base: ["B7", "B7", "B7", "Bc", "Bc", "Bc", "B5", "B5", "B5"],
                        glow: ["G7", "G7", "G7", "Gc", "Gc", "Gc", "G5", "G5", "G5"]
                    },
                    9: {
                        prime: "83c13b",
                        base: ["B5", "B5", "B5", "Bc", "Bc", "Bc", "Bb", "Bb", "Bb"],
                        glow: ["G5", "G5", "G5", "Gc", "Gc", "Gc", "Gb", "Gb", "Gb"]
                    },
                    10: {
                        prime: "fca637",
                        base: ["B9", "B9", "B0", "B0", "B7"],
                        glow: ["G9", "G9", "G0", "G0", "G7"]
                    },
                    11: {
                        prime: "58c4f5",
                        base: ["B3", "Ba", "B0", "B3"],
                        glow: ["G3", "Ga", "G0", "G3"]
                    },
                    12: {
                        prime: "58c4f5",
                        base: ["B3", "Bc", "Bc", "B1"],
                        glow: ["G3", "Gc", "Gc", "G1"]
                    },
                    13: {
                        prime: "fca637",
                        base: ["B9", "B2", "B9", "B6", "B6", "B2"],
                        glow: ["G9", "G2", "G9", "G6", "G6", "G2"]
                    },
                    14: {
                        prime: "83c13b",
                        base: ["B5", "B5", "B5", "B6", "B6", "B6"],
                        glow: ["G5", "G5", "G5", "G6", "G6", "G6"]
                    },
                    15: {
                        prime: "83c13b",
                        base: ["q1", "q2", "q3", "q4", "q5", "q6"],
                        glow: ["G5"]
                    },
                    16: {
                        prime: "ec4243",
                        base: ["w1", "w2", "w3", "w4", "w5", "w6"],
                        glow: ["Ge"]
                    },
                    17: {
                        prime: "8760c7",
                        base: ["e1", "e2", "e3", "e4", "e5", "e6"],
                        glow: ["Gf"]
                    },
                    18: {
                        prime: "22a8f5",
                        base: ["r1", "r2", "r3", "r4", "r5", "r6"],
                        glow: ["Gg"]
                    },
                    19: {
                        prime: "8760c7",
                        base: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8"],
                        glow: ["Gh"]
                    },
                    20: {
                        prime: "83c13b",
                        base: ["y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8"],
                        glow: ["G5"]
                    },
                    21: {
                        prime: "fca637",
                        base: ["u1", "u2", "u3", "u4", "u5", "u6", "u7", "u8"],
                        glow: ["G9"]
                    },
                    22: {
                        prime: "22a8f5",
                        base: ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"],
                        glow: ["Gg"]
                    },
                    23: {
                        prime: "feec64",
                        base: ["o1", "o2", "o3", "o4", "o5", "o6", "o7", "o8"],
                        glow: ["Gb"]
                    },
                    24: {
                        prime: "22a8f5",
                        base: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"],
                        glow: ["G4"]
                    },
                    25: {
                        prime: "fca637",
                        base: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"],
                        glow: ["Gg"]
                    },
                    26: {
                        prime: "3196f0",
                        base: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"],
                        glow: ["Gc"]
                    },
                    27: {
                        prime: "ff8ef5",
                        base: ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"],
                        glow: ["G1"]
                    },
                    28: {
                        prime: "feec64",
                        base: ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"],
                        glow: ["G4"]
                    },
                    29: {
                        prime: "31a79b",
                        base: ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"],
                        glow: ["Gc"]
                    },
                    30: {
                        prime: "f44336",
                        base: ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"],
                        glow: ["Ga"]
                    },
                    31: {
                        prime: "ff8ef5",
                        base: ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8"],
                        glow: ["Gh"]
                    },
                    32: {
                        prime: "ec4243",
                        base: ["k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8"],
                        glow: ["Ge"]
                    },
                    33: {
                        prime: "83c13b",
                        base: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8"],
                        glow: ["G5"]
                    },
                    34: {
                        prime: "22a8f5",
                        base: ["z1", "z2", "z3", "z4", "z5", "z6"],
                        glow: ["Gg"]
                    }
                },
                portionUnknown: {
                    base: "PUNK",
                    glow: "PG0"
                },
                portionDict: {
                    0: {
                        base: "P000",
                        glow: "PG0"
                    },
                    1: {
                        base: "P001",
                        glow: "PG0"
                    },
                    2: {
                        base: "P002",
                        glow: "PG0"
                    },
                    3: {
                        base: "P003",
                        glow: "PG0"
                    },
                    4: {
                        base: "P004",
                        glow: "PG0"
                    },
                    5: {
                        base: "P005",
                        glow: "PG0"
                    },
                    6: {
                        base: "P006",
                        glow: "PG0"
                    },
                    7: {
                        base: "P007",
                        glow: "PG0"
                    },
                    8: {
                        base: "P008",
                        glow: "PG0"
                    },
                    9: {
                        base: "P009",
                        glow: "PG0"
                    },
                    10: {
                        base: "P010",
                        glow: "PG0"
                    },
                    11: {
                        base: "P011",
                        glow: "PG0"
                    },
                    12: {
                        base: "P012",
                        glow: "PG0"
                    },
                    13: {
                        base: "P013",
                        glow: "PG0"
                    },
                    14: {
                        base: "P014",
                        glow: "PG0"
                    },
                    15: {
                        base: "P015",
                        glow: "PG0"
                    },
                    16: {
                        base: "P016",
                        glow: "PG0"
                    },
                    17: {
                        base: "P017",
                        glow: "PG0"
                    },
                    18: {
                        base: "P018",
                        glow: "PG0"
                    },
                    19: {
                        base: "P019",
                        glow: "PG0"
                    },
                    20: {
                        base: "P020",
                        glow: "PG0"
                    },
                    21: {
                        base: "P021",
                        glow: "PG0"
                    },
                    22: {
                        base: "P022",
                        glow: "PG0"
                    },
                    23: {
                        base: "P023",
                        glow: "PG0"
                    },
                    24: {
                        base: "P024",
                        glow: "PG0"
                    },
                    25: {
                        base: "P025",
                        glow: "PG0"
                    },
                    26: {
                        base: "P026",
                        glow: "PG0"
                    },
                    27: {
                        base: "P027",
                        glow: "PG0"
                    },
                    81: {
                        base: "P081",
                        glow: "PG1"
                    },
                    82: {
                        base: "P082",
                        glow: "PG1"
                    },
                    83: {
                        base: "P083",
                        glow: "PG1"
                    },
                    84: {
                        base: "P084",
                        glow: "PG1"
                    },
                    85: {
                        base: "P085",
                        glow: "PG1"
                    },
                    86: {
                        base: "P086",
                        glow: "PG1"
                    },
                    87: {
                        base: "P087",
                        glow: "PG1"
                    },
                    90: {
                        base: "PCIN",
                        glow: "PG0"
                    }
                },
                abilityUnknown: {
                    base: "AUN"
                },
                abilityDict: {
                    0: {
                        base: "A00"
                    },
                    1: {
                        base: "A01"
                    },
                    2: {
                        base: "A02"
                    },
                    3: {
                        base: "A03"
                    },
                    4: {
                        base: "A04"
                    },
                    5: {
                        base: "A05"
                    }
                }
            }
              , s = [];
            o(u.textureDict, function(t, e) {
                s.push({
                    name: t,
                    src: e.url
                })
            }),
            n(s, function(t) {
                var e = {};
                o(u.regionDict, function(n, a) {
                    e[n] = {
                        a: t[a.texture],
                        b: a.x,
                        c: a.y,
                        d: a.w,
                        e: a.h
                    }
                }),
                o(u.segmentDict, function(t, n) {
                    t = parseInt(t),
                    d.g(t, {
                        i: "#" + n.prime,
                        j: n.base.map(function(t) {
                            return e[t]
                        }),
                        k: n.glow.map(function(t) {
                            return e[t]
                        })
                    })
                });
                var n = u.segmentUnknown;
                T = {
                    i: "#" + n.prime,
                    j: n.base.map(function(t) {
                        return e[t]
                    }),
                    k: n.glow.map(function(t) {
                        return e[t]
                    })
                },
                d.l(function(t, e) {
                    return t - e
                }),
                o(u.portionDict, function(t, n) {
                    t = parseInt(t),
                    w[t] = {
                        j: e[n.base],
                        k: e[n.glow]
                    }
                });
                var a = u.portionUnknown;
                y = {
                    j: e[a.base],
                    k: e[a.glow]
                },
                o(u.abilityDict, function(t, n) {
                    t = parseInt(t),
                    p[t] = {
                        j: e[n.base]
                    }
                });
                var i = u.abilityUnknown;
                M = {
                    j: e[i.base]
                },
                r()
            })
        }
        var s = !1
          , h = t.document
          , l = 200
          , c = 2 * Math.PI
          , g = function() {
            function t() {
                this.m = [],
                this.n = {}
            }
            return t.prototype.g = function(t, e) {
                this.m.push(t),
                this.n[t] = e
            }
            ,
            t.prototype.f = function(t) {
                return this.n[t]
            }
            ,
            t.prototype.o = function(t) {
                return this.m.indexOf(t) >= 0
            }
            ,
            t.prototype.p = function(t) {
                if (0 == this.m.length)
                    return null;
                var e = this.m.indexOf(t);
                return e == -1 ? this.m[0] : (e++,
                e >= this.m.length && (e = 0),
                this.m[e])
            }
            ,
            t.prototype.q = function(t) {
                if (0 == this.m.length)
                    return null;
                var e = this.m.indexOf(t);
                return e == -1 ? this.m[this.m.length] : (e--,
                e <= 0 && (e = this.m.length - 1),
                this.m[e])
            }
            ,
            t.prototype.l = function(t) {
                this.m = this.m.sort(t)
            }
            ,
            t.prototype.r = function() {
                return this.m
            }
            ,
            t
        }()
          , f = void 0
          , x = void 0
          , d = new g
          , T = void 0
          , w = {}
          , y = void 0
          , p = {}
          , M = void 0
          , v = void 0;
        _Game = function(g, T, w, y, p, M) {
            function m(t) {
                var e = void 0;
                e = t > 0 ? "+" + t : t < 0 ? "-" + t : "0";
                var n = Math.min(1, .5 + t / 600)
                  , a = void 0;
                a = t < 15 ? "#ffffff" : t < 165 ? "#f4d100" : t < 500 ? "#ed563f" : "#f900f9";
                var r = Math.random()
                  , o = 1 + .5 * Math.random();
                return new ht(e,(!0),n,a,r,o)
            }
            function A(t) {
                var e = t ? "HEADSHOT" : "KILL"
                  , n = t ? 1.5 : 1
                  , a = t ? "#ed563f" : "#ffffff"
                  , r = .5
                  , o = t ? 1 : 1.5;
                return new ht(e,(!1),n,a,r,o)
            }
            function b(t, e, n) {
                var a = 255 & n | e << 8 & 65280 | t << 16 & 16711680;
                return 1e4 * ((16777215 & a) / 8388608 - 1)
            }
            function I(t) {
                return ((65535 & t) / 32768 - 1) * pt
            }
            function G(t) {
                return ((t >> 16 & 65535) / 32768 - 1) * pt
            }
            function N(t, e) {
                var n = t.getInt8(e);
                if (0 == (128 & n))
                    return n;
                var a = t.getInt8(e + 1);
                if (0 == (128 & a))
                    return a | n << 7 & 16256;
                var r = t.getInt8(e + 2);
                if (0 == (128 & r))
                    return r | a << 7 & 16256 | n << 14 & 2080768;
                var o = t.getInt8(e + 3);
                return 0 == (128 & o) ? o | r << 7 & 16256 | a << 14 & 2080768 | n << 21 & 266338304 : void 0
            }
            function j(t) {
                return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : void 0
            }
            function P(t, e) {
                var n = bt = new WebSocket(t);
                n.binaryType = "arraybuffer",
                n.safeSend = function(t) {
                    n && 1 === n.readyState ? n.send(t) : setTimeout(function() {
                        n.safeSend(t)
                    }, 100)
                }
                ,
                n.onopen = function() {
                    bt == n && e()
                }
                ,
                n.onclose = function() {
                    bt == n && (Ot != Dt && Ot != Et || (Ot = Ut,
                    dt(!1)))
                }
                ,
                n.onerror = function(t) {
                    bt == n && (Ot != Dt && Ot != Et || (Ot = Ut,
                    dt(!1)))
                }
                ,
                n.onmessage = function(t) {
                    if (bt == n) {
                        var e = new DataView(t.data);
                        wt.push(e)
                    }
                }
            }
            function C(t) {
                Ft.s = t.getInt16(1),
                yt = t.getFloat32(3),
                pt = 1.02 * yt
            }
            function k(t, e) {
                vt = t.getInt16(e),
                e += 2,
                Mt = Date.now() + vt;
                var n = void 0;
                n = N(t, e),
                e += j(n);
                for (var a = 0; a < n; a++)
                    e = O(t, e);
                n = N(t, e),
                e += j(n);
                for (var r = 0; r < n; r++)
                    e = z(t, e);
                n = N(t, e),
                e += j(n);
                for (var o = 0; o < n; o++)
                    e = R(t, e);
                n = N(t, e),
                e += j(n);
                for (var i = 0; i < n; i++)
                    e = L(t, e);
                n = N(t, e),
                e += j(n);
                for (var u = 0; u < n; u++)
                    e = S(t, e);
                n = N(t, e),
                e += j(n);
                for (var s = 0; s < n; s++)
                    e = D(t, e);
                n = N(t, e),
                e += j(n);
                for (var h = 0; h < n; h++)
                    e = E(t, e);
                n = N(t, e),
                e += j(n);
                for (var l = 0; l < n; l++)
                    e = B(t, e);
                return e = U(t, e),
                Ot == Dt && (Ot = Et,
                xt()),
                e
            }
            function L(t, e) {
                var n = t.getInt16(e);
                e += 2;
                var a = new st(n)
                  , r = t.getInt8(e);
                e += 1,
                a.t(r);
                var o = t.getInt8(e);
                e += 1;
                for (var i = "", u = 0; u < o; u++)
                    i += String.fromCharCode(t.getInt16(e)),
                    e += 2;
                return a.u(i),
                Zt[n] = a,
                e
            }
            function S(t, e) {
                var n = t.getInt16(e);
                e += 2;
                var a = n == Ft.s ? Ft : Zt[n];
                return "undefined" != typeof a && (a.z = !1),
                e
            }
            function B(t, e) {
                var n = t.getInt16(e);
                e += 2;
                var a = Zt[n]
                  , r = !!(1 & t.getInt8(e))
                  , o = !!(2 & t.getInt8(e));
                if (e += 1,
                o) {
                    var i = t.getFloat32(e);
                    e += 4,
                    a && a.A(i)
                }
                var u = b(t.getInt8(e++), t.getInt8(e++), t.getInt8(e++))
                  , s = b(t.getInt8(e++), t.getInt8(e++), t.getInt8(e++));
                a && a.B(u, s, r);
                var h = N(t, e);
                if (e += j(h),
                a)
                    for (var l in a.C) {
                        var c = a.C[l];
                        c && (c.D = !1)
                    }
                for (var g = 0; g < h; g++) {
                    var f = t.getInt8(e);
                    e++;
                    var x = t.getInt8(e);
                    if (e++,
                    a) {
                        var d = a.C[f];
                        d || (d = a.C[f] = new ct(f)),
                        d.D = !0,
                        d.F = Math.min(1, Math.max(0, x / 100))
                    }
                }
                return e
            }
            function U(t, e) {
                var n = !!(1 & t.getInt8(e))
                  , a = !!(2 & t.getInt8(e));
                if (e += 1,
                a) {
                    var r = Ft.G
                      , o = t.getFloat32(e);
                    e += 4,
                    Ft.A(o),
                    r = Ft.G - r,
                    r > 0 && Wt.H(r)
                }
                Ft.B(b(t.getInt8(e++), t.getInt8(e++), t.getInt8(e++)), b(t.getInt8(e++), t.getInt8(e++), t.getInt8(e++)), n);
                var i = N(t, e);
                e += j(i);
                for (var u in Ft.C) {
                    var s = Ft.C[u];
                    s && (s.D = !1)
                }
                for (var h = 0; h < i; h++) {
                    var l = t.getInt8(e);
                    e++;
                    var c = t.getInt8(e);
                    e++;
                    var g = Ft.C[l];
                    g || (g = Ft.C[l] = new ct(l)),
                    g.D = !0,
                    g.F = Math.min(1, Math.max(0, c / 100))
                }
            }
            function D(t, e) {
                var n = t.getInt16(e);
                e += 2;
                var a = n == Ft.s ? Ft : Zt[n]
                  , r = t.getFloat32(e);
                e += 4;
                var o = N(t, e);
                return e += j(o),
                a ? (a.A(r),
                a.I(function(n) {
                    return b(t.getInt8(e++), t.getInt8(e++), t.getInt8(e++))
                }, o),
                a.J = !0) : e += 6 * o,
                e
            }
            function E(t, e) {
                var n = t.getInt16(e);
                e += 2;
                var a = Zt[n];
                return a && a.z && (a.J = !1),
                e
            }
            function O(t, e) {
                var n = t.getInt32(e);
                e += 4;
                var a = b(t.getInt8(e++), t.getInt8(e++), t.getInt8(e++))
                  , r = t.getInt8(e++)
                  , o = new gt(n);
                return o.K(1),
                o.L(a),
                o.M(I(n), G(n), !0),
                o.t(r),
                Jt[n] = o,
                e
            }
            function z(t, e) {
                var n = t.getInt32(e);
                e += 4;
                var a = Jt[n];
                return a && (a.K(0),
                a.L(1.5 * a.N()),
                a.O(!0)),
                e
            }
            function R(t, e) {
                var n = t.getInt32(e);
                e += 4;
                var a = t.getInt16(e);
                e += 2;
                var r = Jt[n];
                if (r) {
                    r.K(0),
                    r.L(.1 * r.N()),
                    r.O(!0);
                    var o = a == Ft.s ? Ft : Zt[a];
                    o && o.J && r.M(o.P[0], o.P[1], !1)
                }
                return e
            }
            function Y(t) {
                for (var e = Bt && Bt.getContext ? Bt.getContext("2d") : null, n = e.getImageData(0, 0, 80, 80), a = 628, r = ce[0], o = 80 - r, i = 0, u = 0; u < a; u++)
                    for (var s = t.getInt8(1 + u), h = 0; h < 8; h++) {
                        var l = 0 != (s >> h & 1)
                          , c = 4 * (r + 80 * i);
                        l ? (n.data[c] = 255,
                        n.data[c + 1] = 255,
                        n.data[c + 2] = 255,
                        n.data[c + 3] = 255) : n.data[c + 3] = 0,
                        ++r >= o && ++i < 80 && (r = ce[i],
                        o = 80 - r)
                    }
                e.putImageData(n, 0, 0)
            }
            function W(t, e) {
                var n = t.getInt32(e);
                e += 4,
                console.log("Wormy Error: " + n)
            }
            function H(t, e) {
                Ot != Dt && Ot != Et || !function() {
                    Ot = Ut;
                    var t = bt;
                    setTimeout(function() {
                        t == bt && null != t && (bt.close(),
                        bt = null)
                    }, 5e3),
                    dt(!0, [Math.floor(Ft.G), Ht])
                }()
            }
            function $(t, e) {
                t.getInt16(e);
                e += 2;
                0 != t.getInt8(e++)
            }
            function F(t, e) {
                $t = t.getInt16(e),
                e += 2,
                Ht = t.getInt16(e),
                e += 2;
                for (var n = t.getInt8(e++), a = 0; a < n; a++) {
                    var o = t.getInt16(e);
                    e += 2;
                    var i = t.getFloat32(e);
                    e += 4;
                    var u = o == Ft.s ? Ft : Zt[o];
                    if (u) {
                        mt[a].Q = !0,
                        mt[a].R = u == Ft,
                        mt[a].S = u.T(),
                        mt[a].G = Math.floor(i);
                        var s = r(u.U());
                        mt[a].V = s.i
                    }
                }
                for (var h = n + 1; h < 10; h++)
                    mt[h].Q = !1
            }
            function Q(t, e) {
                if (w && (Ct.setTransform(1, 0, 0, 1, 0, 0),
                Ct.fillStyle = "#000000",
                Ct.fillRect(0, 0, w.width, w.height),
                v)) {
                    Ct.save(),
                    Ct.globalCompositeOperation = "normal";
                    for (var n = .8 * Math.max(w.width, w.height), a = 0; a < ge.length; a++) {
                        var o = ge[a]
                          , i = Math.cos(o.W * (8e-5 * t) + o.X)
                          , u = Math.sin(o.Y * (8e-5 * t));
                        Ct.globalAlpha = .2 + .2 * Math.cos(o.X + o.Z * (.001 * t)),
                        Ct.drawImage(v[o.$], .5 * w.width + .4 * i * w.width - .5 * n, .5 * w.height + .2 * u * w.height - .5 * n, n, n)
                    }
                    Ct.restore()
                }
                if (y) {
                    var s = oe
                      , h = Math.min(24, Math.max(12, ie / 6));
                    kt.setTransform(1, 0, 0, 1, 0, 0),
                    kt.clearRect(0, 0, oe, ie),
                    kt.setTransform(1, 0, 0, 1, ue, se);
                    var l = 0
                      , c = 0
                      , g = 0
                      , f = Math.floor((s - 2 * h) / (.5 * h) - 1)
                      , d = 0;
                    fe.length < 3 * f && (fe = new Float32Array(3 * f));
                    for (var T = 0; T < f; T++) {
                        var p = l / 240 * 2 * Math.PI - t / 200;
                        g = h / 18 * Math.cos(p * (.1 * h + 16.2) / 18) * Math.PI * .05,
                        fe[d++] = .5 * s - 1.5 * h - l,
                        fe[d++] = -c,
                        fe[d++] = g;
                        var M = .5 * h * Math.cos(g)
                          , m = .5 * h * Math.sin(g);
                        l += M,
                        c += m
                    }
                    for (var A = r(Ft.U()), b = A.k, I = A.j, G = 1.4, N = fe.length - 3; N >= 0; N -= 3) {
                        var j = b[N / 3 % b.length];
                        kt.save(),
                        kt.translate(fe[N], fe[N + 1]),
                        kt.rotate(fe[N + 2]),
                        kt.drawRegion(j, 0, 0, h * G, h * G),
                        kt.restore()
                    }
                    for (var P = fe.length - 3; P >= 0; P -= 3) {
                        var C = I[P / 3 % I.length];
                        kt.save(),
                        kt.translate(fe[P], fe[P + 1]),
                        kt.rotate(fe[P + 2]),
                        kt.drawRegion(C, 0, 0, h, h),
                        kt.restore()
                    }
                    kt.save(),
                    kt.translate(fe[0], fe[1]),
                    kt.rotate(fe[2]),
                    kt.scale(h / 32, h / 32),
                    kt.drawImage(x, 2, -20, 33, 40),
                    kt.restore()
                }
            }
            function V(t) {
                function e(t, e, n, a, r) {
                    t = "" + t,
                    r || (r = u);
                    var o = Pt.measureText(t).width;
                    if (a > 0)
                        for (; o > a; )
                            t = t.substring(0, t.length - 1),
                            o = Pt.measureText(t).width;
                    switch (r) {
                    case u:
                        return Pt.fillText(t, e, n),
                        o;
                    case h:
                        return Pt.fillText(t, e + (a - o) / 2, n),
                        o;
                    case l:
                        return Pt.fillText(t, e + a - o, n),
                        o
                    }
                }
                var n = Ft.P[0]
                  , a = Ft.P[1]
                  , r = te / _t
                  , o = ee / _t
                  , u = 1
                  , h = 2
                  , l = 4;
                Pt.setTransform(_t, 0, 0, _t, 0, 0),
                Pt.clearRect(0, 0, r, o),
                Pt.save(),
                Pt.globalAlpha = .8,
                Pt.fillStyle = "#000000",
                Pt.strokeStyle = "#f7941d",
                Pt.lineWidth = 2,
                Pt.pathCircle(Lt + St, Lt + St, St),
                Pt.fill(),
                Pt.stroke(),
                Pt.lineWidth = 2,
                Pt.beginPath(),
                Pt.moveTo(Lt + St, Lt),
                Pt.lineTo(Lt + St, Lt + 2 * St),
                Pt.closePath(),
                Pt.stroke(),
                Pt.beginPath(),
                Pt.moveTo(Lt, Lt + St),
                Pt.lineTo(Lt + 2 * St, Lt + St),
                Pt.closePath(),
                Pt.stroke(),
                Pt.globalAlpha = .5,
                Pt.drawImage(Bt, Lt, Lt, 2 * St, 2 * St),
                Pt.globalAlpha = .5,
                Pt.fillStyle = "#000000",
                Pt.pathCircle(Lt + St + n / yt * St, Lt + St + a / yt * St, .1 * St),
                Pt.fill(),
                Pt.globalAlpha = .9,
                Pt.fillStyle = "#f7941d",
                Pt.pathCircle(Lt + St + n / yt * St, Lt + St + a / yt * St, .05 * St),
                Pt.fill();
                var g = 130
                  , f = 30
                  , x = .5 + .5 * Math.cos(c * (t / 1e3 / 1.6 % 1));
                for (var d in Ft.C) {
                    var T = Ft.C[d];
                    if (T && T.D) {
                        var w = T.F;
                        Pt.globalAlpha = 1 - w + w * x;
                        var y = i(T._).j;
                        Pt.drawRegion(y, g, f, 20, 20),
                        g += 40
                    }
                }
                Pt.globalAlpha = .95;
                var M = void 0
                  , v = void 0;
                Pt.font = "12px PT Sans",
                M = r - 225,
                v = 17,
                Pt.fillStyle = "#ffffff",
                Pt.globalAlpha = 1,
                e(p("index.game.leader.top10"), M + 28, v, 105, u),
                Pt.globalAlpha = .6,
                e("(" + $t + " online)", M + 140, v, 80, l),
                v += 14;
                for (var m = 0; m < 10; m++) {
                    var A = mt[m];
                    if (!A.Q)
                        break;
                    A.R ? (m > 0 && (v += 8),
                    Pt.fillStyle = "#ffffff",
                    Pt.globalAlpha = 1) : (Pt.fillStyle = A.V,
                    Pt.globalAlpha = 1),
                    e(m + 1, M, v, 24, l),
                    e(A.S, M + 28, v, 126, u),
                    e(A.G, M + 160, v, 60, l),
                    A.R && (v += 10),
                    v += 14
                }
                Ht > 10 && (Pt.fillStyle = "#ffffff",
                Pt.globalAlpha = 1,
                v += 8,
                e(Ht, M, v, 24, l),
                e(Ft.S, M + 28, v, 126, u),
                e(Math.floor(Ft.G), M + 160, v, 60, l));
                for (var b = r / 2, I = 0; I < Wt.aa.length; I++) {
                    var G = Wt.aa[I]
                      , N = G.ba;
                    Pt.fillStyle = G.V,
                    Pt.globalAlpha = .5 * Math.sin(Math.PI * N),
                    Pt.font = Math.floor(48 * G.ca) + "px PT Sans";
                    var j = r * (.25 + .5 * G.da)
                      , P = G.ea ? .5 * o * (1 - N) : .5 * o * (2 - N);
                    e(G.fa, j - .5 * b, P, b, h)
                }
                s && (Pt.font = "12px PT Sans",
                Pt.globalAlpha = .25,
                Pt.fillStyle = "white",
                e("fps: " + Math.floor(Rt) + "; " + _t.toFixed(1), 5, o - 5, r - 10, l)),
                Pt.restore()
            }
            function K(t) {
                function e(e) {
                    if (e) {
                        var n = e.ga
                          , a = .1 * Math.PI
                          , o = t / 400 * Math.PI
                          , i = e.z ? .125 : .25
                          , u = e.ha
                          , s = r(e.U())
                          , h = s.k
                          , l = s.j;
                        jt.save(),
                        jt.globalAlpha = e.ia;
                        var c = 4 * e.ja - 3
                          , g = void 0
                          , f = void 0
                          , d = void 0
                          , T = void 0
                          , w = void 0;
                        f = e.P[3 * c - 3],
                        d = e.P[3 * c - 2],
                        w = n * (1.4 + u * i + .15 * u * Math.cos((c - 1) * a - o)),
                        g = h[(c - 1) % h.length],
                        jt.drawRegion(g, f, d, w, w);
                        for (var y = c - 1; y >= 1; y--)
                            f = e.P[3 * y - 3],
                            d = e.P[3 * y - 2],
                            w = n * (1.4 + u * i + .15 * u * Math.cos((y - 1) * a - o)),
                            g = h[(y - 1) % h.length],
                            jt.drawRegion(g, f, d, w, w),
                            f = e.P[3 * y],
                            d = e.P[3 * y + 1],
                            T = e.P[3 * y + 2],
                            jt.save(),
                            jt.translate(f, d),
                            jt.rotate(T),
                            g = l[y % l.length],
                            jt.drawRegion(g, 0, 0, n, n),
                            jt.restore();
                        jt.save(),
                        jt.translate(e.P[0], e.P[1]),
                        jt.rotate(e.P[2]),
                        g = l[0],
                        jt.drawRegion(g, 0, 0, n, n),
                        jt.scale(n / 32, n / 32),
                        jt.drawImage(x, 2, -20, 33, 40),
                        jt.restore(),
                        jt.restore()
                    }
                }
                function n(t) {
                    if (t) {
                        var e = t.P[0]
                          , n = t.P[1];
                        jt.save(),
                        jt.globalAlpha = .6 * t.ia,
                        jt.font = "20px PT Sans",
                        jt.fillStyle = r(t.U()).i,
                        jt.translate(e, n + 3 * t.ga),
                        jt.scale(.015, .015),
                        jt.fillText(t.T(), 0, 0),
                        jt.restore()
                    }
                }
                function a(t, e) {
                    var n = (e ? .65 : 1) * Math.min(4, t.ka)
                      , a = o(t.U()).k
                      , r = t.la.x
                      , i = t.la.y;
                    t.ma > .05 && (jt.globalAlpha = (e ? .9 : .3) * t.ia,
                    jt.drawRegion(a, r, i, n, n))
                }
                function i(t, e) {
                    var n = e ? .6 : Math.min(.5, t.ma)
                      , a = o(t.U()).j
                      , r = t.la.x
                      , i = t.la.y;
                    jt.globalAlpha = t.ia,
                    jt.drawRegion(a, r, i, n, n)
                }
                var u = Ft.P[0]
                  , s = Ft.P[1];
                jt.setTransform(1, 0, 0, 1, 0, 0),
                jt.clearRect(0, 0, te, ee);
                var h = he * _t;
                jt.save(),
                jt.globalAlpha = .3,
                jt.fillStyle = Gt,
                jt.setTransform(It * h, 0, 0, It * h, .5 * te - u * h, .5 * ee - s * h),
                jt.fillRect(-(.5 * te / h - u) / It, -(.5 * ee / h - s) / It, te / h / It, ee / h / It),
                jt.restore(),
                jt.setTransform(h, 0, 0, h, ae - u * h, re - s * h),
                zt && (jt.save(),
                jt.setTransform(1, 0, 0, 1, 0, 0),
                jt.globalCompositeOperation = "lighter",
                jt.fillStyle = "hsl(" + Math.floor(qt) + ", 100%, 75%)",
                jt.globalAlpha = .1,
                jt.fillRect(0, 0, te, ee),
                jt.restore()),
                jt.save(),
                jt.globalAlpha = .3,
                jt.strokeStyle = "red",
                jt.lineWidth = .2,
                jt.beginPath(),
                jt.moveTo(yt, 0);
                for (var l = 0; l <= 160; l++) {
                    var g = c * l / 160;
                    jt.lineTo(yt * Math.cos(g), yt * Math.sin(g))
                }
                jt.closePath(),
                jt.stroke(),
                jt.restore(),
                jt.save(),
                jt.globalCompositeOperation = "lighter";
                for (var f in Jt) {
                    var d = Jt[f];
                    d && a(d, d.U() >= 80)
                }
                jt.globalCompositeOperation = "source-over";
                for (var T in Jt) {
                    var w = Jt[T];
                    w && i(w, w.U() >= 80)
                }
                jt.restore(),
                e(Ft);
                for (var y in Zt) {
                    var p = Zt[y];
                    p && p.J && (e(p),
                    n(p))
                }
                jt.setTransform(1, 0, 0, 1, 0, 0),
                jt.drawImage(Nt, 0, 0, te, ee)
            }
            function J(t, e) {
                Ft.na(t, e);
                for (var n in Zt) {
                    var a = Zt[n];
                    a && a.J && a.na(t, e),
                    !a.z && a.ia < .005 && delete Zt[a.s]
                }
                for (var r in Jt) {
                    var o = Jt[r];
                    o.na(t, e),
                    o.oa && o.ia < .005 && delete Jt[o.s]
                }
                Wt.pa(t, e)
            }
            function Z() {
                for (var t = void 0, e = 0; e < 10; e++) {
                    if (!(t = wt.shift()))
                        return;
                    var n = 255 & t.getInt8(0);
                    switch (n) {
                    case 0:
                        return void C(t, 1);
                    case 1:
                        return void k(t, 1);
                    case 2:
                        return void Y(t, 1);
                    case 3:
                        return void F(t, 1);
                    case 4:
                        return void W(t, 1);
                    case 5:
                        return void H(t, 1);
                    case 6:
                        return void $(t, 1)
                    }
                }
            }
            function _() {
                function t() {
                    requestAnimationFrame(t);
                    var a = Date.now()
                      , r = a - e;
                    Z(),
                    Ot != Ut && Ot != Dt || Q(a, r),
                    bt && (J(a, r),
                    le = 4 + 12.5 * Ft.ga,
                    he = n(5, 500, he + r / 1e3 * (.5 * ne / le - he)),
                    qt += .01 * r,
                    qt > 360 && (qt %= 360),
                    K(a),
                    V(a));
                    for (var o = 1e3 / Math.max(1, a - e), i = 0, u = 0; u < 9; u++)
                        i += Yt[u],
                        Yt[u] = Yt[u + 1];
                    Yt[9] = o,
                    Rt = (i + o) / 10,
                    e = a
                }
                var e = Date.now();
                t()
            }
            function X() {
                jt = a(T),
                Pt = a(Nt),
                Ct = a(w),
                kt = a(y),
                u(function() {
                    jt && (Gt = jt.createPattern(f, "repeat")),
                    ft(),
                    _()
                }),
                setInterval(function() {
                    Tt(function(t, n) {
                        var a = n ? 128 : 0
                          , r = e(t) / c * 128 & 127
                          , o = 255 & (a | r);
                        if (bt && Kt != o) {
                            var i = new ArrayBuffer(1)
                              , u = new DataView(i);
                            u.setInt8(0, o),
                            bt.safeSend(i),
                            Qt = t,
                            Vt = n,
                            Kt = o
                        }
                    })
                }, 100),
                q(),
                t.addEventListener("resize", function() {
                    q()
                })
            }
            function q() {
                Xt = t.devicePixelRatio ? t.devicePixelRatio : 1,
                _t = Xt,
                Nt.width = _t * T.offsetWidth,
                Nt.height = _t * T.offsetHeight,
                te = T.width = _t * T.offsetWidth,
                ee = T.height = _t * T.offsetHeight,
                ne = Math.max(T.offsetWidth, T.offsetHeight),
                ae = .5 * te,
                re = .5 * ee,
                w && (w.width = .5 * te,
                w.height = .5 * ee),
                y && (oe = y.width = Xt * y.offsetWidth,
                ie = y.height = Xt * y.offsetHeight,
                ue = .5 * oe,
                se = .5 * ie),
                t.scrollTo(0, 1)
            }
            function tt() {
                return d.r()
            }
            function et() {
                return Ft.U()
            }
            function nt(t) {
                Ft.t(t)
            }
            function at() {
                var t = Ft.U();
                t = d.q(t),
                Ft.t(t)
            }
            function rt() {
                var t = Ft.U();
                t = d.p(t),
                Ft.t(t)
            }
            function ot(t, e) {
                if (t = "" + t,
                Ot != Ut)
                    return !1;
                Mt = 0,
                Zt = {},
                Jt = {},
                Ft.A(.25),
                Ft.u(t),
                Ft.z = !0,
                Ft.J = !0,
                null != bt && (bt.close(),
                bt = null),
                Ot = Dt;
                var n = Math.min(32, t.length)
                  , a = Math.min(2048, e.length)
                  , r = Ft.U();
                return g(function(o) {
                    var i = void 0;
                    if ("guest" === e) {
                        i = new ArrayBuffer(7 + 2 * n);
                        var u = new DataView(i)
                          , s = 0;
                        u.setInt8(s, 129),
                        s++,
                        u.setInt16(s, 2400),
                        s += 2,
                        u.setInt8(s, 0),
                        s++,
                        u.setInt16(s, r),
                        s += 2,
                        u.setInt8(s, n),
                        s++;
                        for (var h = 0; h < n; h++)
                            u.setInt16(s, t.charCodeAt(h)),
                            s += 2
                    } else {
                        i = new ArrayBuffer(6 + 2 * a);
                        var l = new DataView(i)
                          , c = 0;
                        l.setInt8(c, 129),
                        c++,
                        l.setInt16(c, 2400),
                        c += 2,
                        l.setInt8(c, 1),
                        c++,
                        l.setInt16(c, a),
                        c += 2;
                        for (var g = 0; g < a; g++)
                            l.setInt16(c, e.charCodeAt(g)),
                            c += 2
                    }
                    P(o, function() {
                        bt.safeSend(i)
                    })
                }),
                !0
            }
            function it() {
                return Rt
            }
            function ut(t) {
                zt = 0 == t
            }
            _Game = null;
            for (var st = function() {
                function t(t) {
                    this.s = t,
                    this.S = "",
                    this.J = !1,
                    this.z = !0,
                    this.qa = !1,
                    this.ra = 0,
                    this.ia = 1,
                    this.ha = 0,
                    this.G = 0,
                    this.C = {},
                    this.sa = 0,
                    this.ja = 0,
                    this.ta = new Float32Array(2 * l),
                    this.ua = new Float32Array(2 * l),
                    this.va = new Float32Array(2 * l),
                    this.P = new Float32Array(3 * (4 * l - 3)),
                    this.ga = 0,
                    this.wa = 0,
                    this.A(.25)
                }
                return t.prototype.A = function(t) {
                    var e = this.ja;
                    this.G = 50 * t;
                    var n = Math.sqrt(4 * Math.pow(5 * t, .707106781186548) + 25);
                    this.ga = .025 * (5 + .9 * n);
                    var a = Math.min(l, Math.max(3, 5 * (n - 5) + 1));
                    if (this.ja = Math.floor(a),
                    this.wa = a - this.ja,
                    e > 0 && e < this.ja)
                        for (var r = this.ta[2 * e - 2], o = this.ta[2 * e - 1], i = this.ua[2 * e - 2], u = this.ua[2 * e - 1], s = this.va[2 * e - 2], h = this.va[2 * e - 1], c = e; c < this.ja; c++)
                            this.ta[2 * c] = r,
                            this.ta[2 * c + 1] = o,
                            this.ua[2 * c] = i,
                            this.ua[2 * c + 1] = u,
                            this.va[2 * c] = s,
                            this.va[2 * c + 1] = h
                }
                ,
                t.prototype.I = function(t, e) {
                    this.sa = Mt,
                    this.ja = e;
                    for (var n = 0; n < this.ja; n++)
                        this.va[2 * n] = this.ua[2 * n] = this.ta[2 * n] = t(),
                        this.va[2 * n + 1] = this.ua[2 * n + 1] = this.ta[2 * n + 1] = t()
                }
                ,
                t.prototype.T = function() {
                    return this.S
                }
                ,
                t.prototype.u = function(t) {
                    this.S = t
                }
                ,
                t.prototype.U = function() {
                    return this.ra
                }
                ,
                t.prototype.t = function(t) {
                    d.o(t) && (this.ra = t)
                }
                ,
                t.prototype.B = function(t, e, n) {
                    this.sa = Mt,
                    this.qa = n;
                    var a = this.ja
                      , r = this.ta
                      , o = this.ua;
                    this.xa(t, e, a, r);
                    for (var i = 0; i < this.ja; i++)
                        o[2 * i] = r[2 * i],
                        o[2 * i + 1] = r[2 * i + 1]
                }
                ,
                t.prototype.xa = function(t, e, n, a) {
                    var r = a[0]
                      , o = void 0
                      , i = a[1]
                      , u = void 0
                      , s = Math.hypot(r - t, i - e);
                    if (s > 0) {
                        a[0] = t,
                        a[1] = e;
                        for (var h = this.ga / (this.ga + s), l = 1 - 2 * h, c = 1, g = n - 1; c < g; c++)
                            o = a[2 * c],
                            a[2 * c] = a[2 * c - 2] * l + (o + r) * h,
                            r = o,
                            u = a[2 * c + 1],
                            a[2 * c + 1] = a[2 * c - 1] * l + (u + i) * h,
                            i = u;
                        h = this.wa * this.ga / (this.wa * this.ga + s),
                        l = 1 - 2 * h,
                        a[2 * n - 2] = a[2 * n - 4] * l + (a[2 * n - 2] + r) * h,
                        a[2 * n - 1] = a[2 * n - 3] * l + (a[2 * n - 1] + i) * h
                    }
                }
                ,
                t.prototype.na = function(t, e) {
                    var a = n(.1, 1, e / 400);
                    this.ia = n(0, 1, this.ia + a * ((this.z ? this.qa ? .6 : 1 : 0) - this.ia)),
                    this.ha = n(0, 1, this.ha + a * ((this.z ? this.qa ? 1 : 0 : 1) - this.ha));
                    var r = this.ua
                      , o = this.va
                      , i = this.P
                      , u = this.ja;
                    if (this.z && this.J) {
                        if (this.sa > 0) {
                            for (; t > this.sa; ) {
                                var s = 95;
                                this.sa += s;
                                var h = r[0] - r[2]
                                  , l = r[1] - r[3]
                                  , c = Math.hypot(h, l)
                                  , g = r[0] + h / c * (this.qa ? 8 : 4) * s / 1e3
                                  , f = r[1] + l / c * (this.qa ? 8 : 4) * s / 1e3;
                                this.xa(g, f, u, r)
                            }
                            for (var x = Math.min(.5, 1 * e / (this.sa - t + e)), d = 0; d < u; d++)
                                o[2 * d] += x * (r[2 * d] - o[2 * d]),
                                o[2 * d + 1] += x * (r[2 * d + 1] - o[2 * d + 1])
                        }
                        var T = -.0703125
                          , w = -.0625
                          , y = -.0234375
                          , p = .8671875
                          , M = .5625
                          , v = .2265625
                          , m = 2 * T + p
                          , A = 2 * w + M
                          , b = 2 * y + v
                          , I = v - T
                          , G = M - w
                          , N = p - y
                          , j = void 0
                          , P = void 0
                          , C = void 0
                          , k = void 0
                          , L = void 0
                          , S = void 0
                          , B = void 0
                          , U = void 0
                          , D = 0;
                        j = o[0],
                        L = o[1],
                        P = o[2],
                        S = o[3],
                        C = o[4],
                        B = o[5],
                        i[D++] = j,
                        i[D++] = L,
                        D++,
                        i[D++] = m * j + I * P + y * C,
                        i[D++] = m * L + I * S + y * B,
                        D++,
                        i[D++] = A * j + G * P + w * C,
                        i[D++] = A * L + G * S + w * B,
                        D++,
                        i[D++] = b * j + N * P + T * C,
                        i[D++] = b * L + N * S + T * B,
                        D++;
                        for (var E = 0; E < u - 3; E++)
                            j = o[2 * E],
                            L = o[2 * E + 1],
                            P = o[2 * E + 2],
                            S = o[2 * E + 3],
                            C = o[2 * E + 4],
                            B = o[2 * E + 5],
                            k = o[2 * E + 6],
                            U = o[2 * E + 7],
                            i[D++] = P,
                            i[D++] = S,
                            D++,
                            i[D++] = T * j + p * P + v * C + y * k,
                            i[D++] = T * L + p * S + v * B + y * U,
                            D++,
                            i[D++] = w * j + M * P + M * C + w * k,
                            i[D++] = w * L + M * S + M * B + w * U,
                            D++,
                            i[D++] = y * j + v * P + p * C + T * k,
                            i[D++] = y * L + v * S + p * B + T * U,
                            D++;
                        j = o[2 * u - 6],
                        L = o[2 * u - 5],
                        P = o[2 * u - 4],
                        S = o[2 * u - 3],
                        C = o[2 * u - 2],
                        B = o[2 * u - 1],
                        i[D++] = P,
                        i[D++] = S,
                        D++,
                        i[D++] = T * j + N * P + b * C,
                        i[D++] = T * L + N * S + b * B,
                        D++,
                        i[D++] = w * j + G * P + A * C,
                        i[D++] = w * L + G * S + A * B,
                        D++,
                        i[D++] = y * j + I * P + m * C,
                        i[D++] = y * L + I * S + m * B,
                        D++,
                        i[D++] = C,
                        i[D++] = B,
                        i[2] = Math.atan2(i[1] - i[4], i[0] - i[3]);
                        for (var O = 1, z = 4 * u - 4; O < z; O++)
                            i[3 * O + 2] = Math.atan2(i[3 * O - 2] - i[3 * O + 4], i[3 * O - 3] - i[3 * O + 3]);
                        i[12 * u - 10] = Math.atan2(i[12 * u - 14] - i[12 * u - 11], i[12 * u - 15] - i[12 * u - 12])
                    }
                }
                ,
                t
            }(), ht = function() {
                function t(t, e, n, a, r, o) {
                    this.fa = t,
                    this.ea = e,
                    this.ca = n,
                    this.V = a,
                    this.da = r,
                    this.ya = o,
                    this.ba = 0
                }
                return t
            }(), lt = function() {
                function t() {
                    this.aa = [],
                    this.za = 0
                }
                return t.prototype.Aa = function(t) {
                    this.aa.push(A(t))
                }
                ,
                t.prototype.H = function(t) {
                    if (this.za += t,
                    this.za >= 1) {
                        var e = Math.floor(this.za);
                        this.za -= e,
                        this.aa.push(m(e))
                    }
                }
                ,
                t.prototype.pa = function(t, e) {
                    for (var n = 0; n < this.aa.length; ) {
                        var a = this.aa[n];
                        a.ba += e / 2e3 * a.ya,
                        a.ba > 1 && (this.aa.splice(n, 1),
                        n--),
                        n++
                    }
                }
                ,
                t
            }(), ct = function() {
                function t(t) {
                    this._ = t,
                    this.D = !1,
                    this.F = 100
                }
                return t
            }(), gt = function() {
                function t(t) {
                    this.s = t,
                    this.ra = 0,
                    this.oa = !1,
                    this.Ca = {
                        x: 0,
                        y: 0
                    },
                    this.la = {
                        x: 0,
                        y: 0
                    },
                    this.Da = 0,
                    this.ia = 1,
                    this.Ea = 0,
                    this.ma = 0,
                    this.ka = 0,
                    this.X = 2 * Math.PI * Math.random()
                }
                return t.prototype.N = function() {
                    return this.Ea
                }
                ,
                t.prototype.L = function(t) {
                    this.Ea = t
                }
                ,
                t.prototype.M = function(t, e, n) {
                    this.Ca.x = t,
                    this.Ca.y = e,
                    n && (this.la.x = t,
                    this.la.y = e)
                }
                ,
                t.prototype.K = function(t) {
                    this.Da = t
                }
                ,
                t.prototype.U = function() {
                    return this.ra
                }
                ,
                t.prototype.t = function(t) {
                    this.ra = t
                }
                ,
                t.prototype.O = function(t) {
                    this.oa = t
                }
                ,
                t.prototype.na = function(t, e) {
                    var a = e / 400;
                    this.ma = this.ma + a * (this.Ea - this.ma);
                    var r = (1.5 + .3 * Math.cos(this.X + t / 200)) * this.Ea;
                    this.ka = this.ka + 2 * a * (r - this.ka),
                    this.ia = n(0, 1, this.ia + 2 * a * (this.Da - this.ia));
                    var o = 2 * e / 1e3;
                    this.la.x = this.la.x * (1 - o) + this.Ca.x * o,
                    this.la.y = this.la.y * (1 - o) + this.Ca.y * o
                }
                ,
                t
            }(), ft = M[0], xt = M[1], dt = M[2], Tt = M[3], wt = [], yt = 500, pt = 1.02 * yt, Mt = 0, vt = 0, mt = new Array(10), At = 0; At < 10; At++)
                mt[At] = {
                    Q: !1,
                    R: !1,
                    S: "",
                    G: 0,
                    V: "#ffffff"
                };
            var bt = void 0
              , It = .016
              , Gt = void 0
              , Nt = h.createElement("canvas")
              , jt = void 0
              , Pt = void 0
              , Ct = void 0
              , kt = void 0
              , Lt = 20
              , St = 40
              , Bt = h.createElement("canvas");
            Bt.width = 80,
            Bt.height = 80;
            var Ut = 0
              , Dt = 1
              , Et = 2
              , Ot = Ut
              , zt = !1
              , Rt = 30
              , Yt = new Float32Array(10)
              , Wt = new lt
              , Ht = 500
              , $t = 500
              , Ft = new st
              , Qt = 0
              , Vt = !1
              , Kt = 300
              , Jt = {}
              , Zt = {}
              , _t = 2
              , Xt = 2
              , qt = Math.floor(360 * Math.random())
              , te = 500
              , ee = 500
              , ne = 500
              , ae = te / 2
              , re = ee / 2
              , oe = 500
              , ie = 500
              , ue = oe / 2
              , se = ie / 2
              , he = 100
              , le = 40
              , ce = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34]
              , ge = [{
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 1,
                Y: 2,
                $: 0
            }, {
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 1.5,
                Y: 1.5,
                $: 1
            }, {
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 2,
                Y: 1,
                $: 2
            }, {
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 3,
                Y: 2,
                $: 3
            }, {
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 2.5,
                Y: 2.5,
                $: 4
            }, {
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 2,
                Y: 3,
                $: 5
            }, {
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 5,
                Y: 4,
                $: 6
            }, {
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 4.5,
                Y: 4.5,
                $: 7
            }, {
                X: c * Math.random(),
                Z: .1 + .4 * Math.random(),
                W: 4,
                Y: 5,
                $: 8
            }]
              , fe = new Float32Array(3);
            return X(),
            [tt, et, nt, at, rt, ot, it, ut]
        }
    }(window);
    var UserManager = function() {
        function t(t, e) {
            return "undefined" == typeof t ? e : t
        }
        function e() {
            for (var t = 0; t < c.length; t++)
                c[t]()
        }
        function n(t, e) {
            e ? $.get(GATEWAY_HOST + "/pub/wuid/" + e + "/login", function(n) {
                a(n, t, e)
            }).fail(function() {
                a(null)
            }) : a(null)
        }
        function a(t, n, a) {
            t && t.user_data ? (d = !0,
            T = a,
            w = t.user_data,
            y = n,
            setCookie("account_type", y, 60),
            e()) : l.Fa()
        }
        function r(t) {
            return "undefined" == typeof FB ? void t(null) : void FB.getLoginStatus(function(e) {
                return "connected" === e.status ? void t(e.authResponse && e.authResponse.accessToken ? e.authResponse.accessToken : null) : void FB.login(function(e) {
                    return "connected" === e.status && e.authResponse && e.authResponse.accessToken ? void t(e.authResponse.accessToken) : void t(null)
                }, {
                    scope: "email,user_location"
                })
            })
        }
        function o(t) {
            return "undefined" == typeof GoogleAuth ? void t(null) : void GoogleAuth.then(function() {
                if (GoogleAuth.isSignedIn.get()) {
                    var e = GoogleAuth.currentUser.get();
                    return void t(e.getAuthResponse().id_token)
                }
                GoogleAuth.currentUser.listen(function(e) {
                    t(e.isSignedIn() ? e.getAuthResponse().id_token : null)
                }),
                GoogleAuth.signIn()
            })
        }
        function i(t) {
            VK.Auth.getLoginStatus(function(e) {
                return e.session ? void t(e.session.sid ? e.session.sid : null) : void VK.Auth.login(function(e) {
                    return e.session && e.session.sid ? void t(e.session.sid) : void t(null)
                })
            })
        }
        function u() {
            console.log("lo:fb"),
            FB.logout(function() {}),
            e()
        }
        function s() {
            console.log("lo:gg"),
            GoogleAuth.signOut(),
            e()
        }
        function h() {
            console.log("lo:vk"),
            VK.Auth.logout(function() {}),
            e()
        }
        var l = {}
          , c = []
          , g = "facebook"
          , f = "google"
          , x = "vkontakte"
          , d = !1
          , T = "guest"
          , w = {}
          , y = null;
        return l.Ha = function() {
            return t(w.username, "")
        }
        ,
        l.Ia = function() {
            return t(w.nickname, "")
        }
        ,
        l.Ja = function() {
            return t(w.avatarUrl, GUEST_AVATAR_URL)
        }
        ,
        l.Ka = function() {
            return t(w.coins, 0)
        }
        ,
        l.La = function() {
            return t(w.level, 1)
        }
        ,
        l.Ma = function() {
            return t(w.expOnLevel, 0)
        }
        ,
        l.Na = function() {
            return t(w.expToNext, 50)
        }
        ,
        l.U = function() {
            return t(w.skinId, 0)
        }
        ,
        l.Oa = function() {
            return t(w.highScore, 0)
        }
        ,
        l.Pa = function() {
            return t(w.bestSurvivalTimeSec, 0)
        }
        ,
        l.Qa = function() {
            return t(w.kills, 0)
        }
        ,
        l.Ra = function() {
            return t(w.headShots, 0)
        }
        ,
        l.Sa = function() {
            return t(w.sessionsPlayed, 0)
        }
        ,
        l.Ta = function() {
            return t(w.totalPlayTimeSec, 0)
        }
        ,
        l.Ua = function() {
            return t(w.regDate, {})
        }
        ,
        l.Va = function(t) {
            c.push(t)
        }
        ,
        l.Wa = function() {
            return d
        }
        ,
        l.Xa = function() {
            return T
        }
        ,
        l.Ya = function() {
            return w
        }
        ,
        l.Za = function(t) {
            w = t,
            e()
        }
        ,
        l.$a = function() {
            l.Fa(),
            r(function(t) {
                n(g, "fb_" + t)
            })
        }
        ,
        l._a = function() {
            l.Fa(),
            o(function(t) {
                n(f, "gg_" + t)
            })
        }
        ,
        l.ab = function() {
            l.Fa(),
            i(function(t) {
                n(x, "vk_" + t)
            })
        }
        ,
        l.Fa = function() {
            if (console.log("iSI: " + d),
            d) {
                var t = y;
                switch (d = !1,
                T = "guest",
                w = {},
                y = null,
                setCookie("account_type", y, 60),
                t) {
                case g:
                    return void u();
                case f:
                    return void s();
                case x:
                    return void h()
                }
                e()
            }
        }
        ,
        l.bb = function() {
            getCookie("account_type") == g && (console.log("rs:fb"),
            l.$a())
        }
        ,
        l.cb = function() {
            getCookie("account_type") == f && (console.log("rs:gg"),
            l._a())
        }
        ,
        l.db = function() {
            getCookie("account_type") == x && (console.log("rs:vk"),
            l.ab())
        }
        ,
        l.eb = function() {
            e()
        }
        ,
        l
    }, PopupManager = function() {
        function t(t) {
            $.get(GATEWAY_HOST + "/pub/leaders", function(e) {
                R = e,
                a(null != z ? z : E.fb),
                t()
            })
        }
        function e(t) {
            var e = UserManager.Ua();
            f.html(UserManager.Ha()),
            x.html(UserManager.Ka()),
            g.attr("src", UserManager.Ja()),
            d.width(100 * UserManager.Ma() / UserManager.Na() + "%"),
            T.html(UserManager.Ma() + " / " + UserManager.Na()),
            w.html(UserManager.La()),
            y.html(UserManager.Oa()),
            p.html(timeSecsToIntervalText(UserManager.Pa())),
            M.html(UserManager.Qa()),
            v.html(UserManager.Ra()),
            m.html(UserManager.Sa()),
            A.html(timeSecsToIntervalText(UserManager.Ta())),
            b.html(moment([e.year, e.month - 1, e.day]).format("LL")),
            t()
        }
        function n(t) {
            if (O != t) {
                O = t,
                k.stop(),
                k.fadeIn(100),
                O.gb(function() {
                    k.stop(),
                    k.fadeOut(100)
                });
                for (var e in D) {
                    var n = D[e];
                    n.hb.removeClass("active"),
                    n.ib.removeClass("active")
                }
                O.hb.addClass("active"),
                O.ib.addClass("active")
            }
        }
        function a(t) {
            z = t;
            for (var e in E) {
                var n = E[e];
                n.hb.removeClass("pressed")
            }
            z.hb.addClass("pressed");
            for (var a = R[z.jb], r = "", o = 0; o < a.length; o++) {
                var i = a[o];
                r += '<div class="table-row"><span>' + (o + 1) + '</span><span><img src="' + i.avatarUrl + '"/></span><span>' + i.username + "</span><span>" + i.level + "</span><span>" + i.highScore + "</span><span>" + i.headShots + " / " + i.kills + "</span></div>"
            }
            U.empty(),
            U.append(r)
        }
        var r = {}
          , o = $("#main-panel")
          , i = $("#popup-panel")
          , u = $("#popup-close")
          , s = $("#popup-login-gg")
          , h = $("#popup-login-fb")
          , l = $("#popup-login-vk")
          , c = $("#popup-logout")
          , g = $("#profile-avatar")
          , f = $("#profile-username")
          , x = $("#profile-coins")
          , d = $("#profile-experience-bar")
          , T = $("#profile-experience-val")
          , w = $("#profile-level")
          , y = $("#profile-stat-highScore")
          , p = $("#profile-stat-bestSurvivalTime")
          , M = $("#profile-stat-kills")
          , v = $("#profile-stat-headshots")
          , m = $("#profile-stat-gamesPlayed")
          , A = $("#profile-stat-totalTimeSpent")
          , b = $("#profile-stat-registrationDate")
          , I = $("#profile-tab-button")
          , G = $("#leaders-tab-button")
          , N = $("#settings-tab-button")
          , j = $("#profile-tab")
          , P = $("#leaders-tab")
          , C = $("#settings-tab")
          , k = $("#loading-tab")
          , L = $("#leaders-button-level")
          , S = $("#leaders-button-highscore")
          , B = $("#leaders-button-kills")
          , U = $("#highscore-table")
          , D = {
            kb: {
                lb: !0,
                gb: e,
                hb: I,
                ib: j
            },
            mb: {
                lb: !0,
                gb: t,
                hb: G,
                ib: P
            },
            nb: {
                lb: !1,
                gb: function(t) {
                    t()
                },
                hb: N,
                ib: C
            }
        }
          , E = {
            fb: {
                hb: L,
                jb: "byLevel"
            },
            ob: {
                hb: S,
                jb: "byHighScore"
            },
            pb: {
                hb: B,
                jb: "byKillsAndHeadShots"
            }
        };
        u.click(function() {
            return r.qb()
        }),
        UserManager.Va(function() {
            s.toggle(!UserManager.Wa()),
            h.toggle(!UserManager.Wa()),
            l.toggle(!UserManager.Wa()),
            c.toggle(UserManager.Wa()),
            n(D.nb);
            for (var t in D) {
                var e = D[t];
                e.lb && e.hb.toggle(UserManager.Wa())
            }
        }),
        s.click(function() {
            return UserManager._a()
        }),
        h.click(function() {
            return UserManager.$a()
        }),
        l.click(function() {
            return UserManager.ab()
        }),
        c.click(function() {
            return UserManager.Fa()
        }),
        I.click(function() {
            return n(D.kb)
        }),
        G.click(function() {
            return n(D.mb)
        }),
        N.click(function() {
            return n(D.nb)
        }),
        L.click(function() {
            return a(E.fb)
        }),
        S.click(function() {
            return a(E.ob)
        }),
        B.click(function() {
            return a(E.pb)
        });
        var O = null
          , z = null
          , R = {};
        return r.rb = function() {
            n(D.kb),
            i.fadeIn(300),
            o.fadeOut(300)
        }
        ,
        r.sb = function() {
            n(D.mb),
            i.fadeIn(300),
            o.fadeOut(300)
        }
        ,
        r.tb = function() {
            n(D.nb),
            i.fadeIn(300),
            o.fadeOut(300)
        }
        ,
        r.qb = function() {
            i.fadeOut(300),
            o.fadeIn(300)
        }
        ,
        r
    }, GATEWAY_HOST = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8="), GUEST_AVATAR_URL = "/images/guest-avatar.png", GoogleAuth;
    !function() {
        function t() {
            return !function(t, e, n) {
                function a(t, e) {
                    return ("undefined" == typeof t ? "undefined" : _typeof(t)) === e
                }
                function r() {
                    var t, e, n, r, o, i, h;
                    for (var c in s)
                        if (s.hasOwnProperty(c)) {
                            if (t = [],
                            e = s[c],
                            e.name && (t.push(e.name.toLowerCase()),
                            e.options && e.options.aliases && e.options.aliases.length))
                                for (n = 0; n < e.options.aliases.length; n++)
                                    t.push(e.options.aliases[n].toLowerCase());
                            for (r = a(e.fn, "function") ? e.fn() : e.fn,
                            o = 0; o < t.length; o++)
                                i = t[o],
                                h = i.split("."),
                                1 === h.length ? l[h[0]] = r : (!l[h[0]] || l[h[0]]instanceof Boolean || (l[h[0]] = new Boolean(l[h[0]])),
                                l[h[0]][h[1]] = r),
                                u.push((r ? "" : "no-") + h.join("-"))
                        }
                }
                function o(t) {
                    var e = g.className
                      , n = l._config.classPrefix || "";
                    if (f && (e = e.baseVal),
                    l._config.enableJSClass) {
                        var a = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                        e = e.replace(a, "$1" + n + "js$2")
                    }
                    l._config.enableClasses && (e += " " + n + t.join(" " + n),
                    f ? g.className.baseVal = e : g.className = e)
                }
                function i() {
                    return "function" != typeof e.createElement ? e.createElement(arguments[0]) : f ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
                }
                var u = []
                  , s = []
                  , h = {
                    _version: "3.3.1",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(t, e) {
                        var n = this;
                        setTimeout(function() {
                            e(n[t])
                        }, 0)
                    },
                    addTest: function(t, e, n) {
                        s.push({
                            name: t,
                            fn: e,
                            options: n
                        })
                    },
                    addAsyncTest: function(t) {
                        s.push({
                            name: null,
                            fn: t
                        })
                    }
                }
                  , l = function() {};
                l.prototype = h,
                l = new l;
                var c = !1;
                try {
                    c = "WebSocket"in t && 2 === t.WebSocket.CLOSING
                } catch (t) {}
                l.addTest("websockets", c);
                var g = e.documentElement
                  , f = "svg" === g.nodeName.toLowerCase();
                l.addTest("canvas", function() {
                    var t = i("canvas");
                    return !(!t.getContext || !t.getContext("2d"))
                }),
                l.addTest("canvastext", function() {
                    return l.canvas !== !1 && "function" == typeof i("canvas").getContext("2d").fillText
                }),
                r(),
                o(u),
                delete h.addTest,
                delete h.addAsyncTest;
                for (var x = 0; x < l._q.length; x++)
                    l._q[x]();
                t.Modernizr = l
            }(window, document),
            Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
        }
        function e(t, e, n) {
            var a = document.createElement("script")
              , r = !0;
            e && (a.id = e),
            a.async = "async",
            a.type = "text/javascript",
            a.src = t,
            n && (a.onload = a.onreadystatechange = function() {
                r = !1;
                try {
                    n()
                } catch (t) {
                    console.log(t)
                }
                a.onload = a.onreadystatechange = null
            }
            );
            var o = document.head || document.getElementsByTagName("head")[0];
            o.appendChild(a)
        }
        function n() {
            function n() {
                return "true" === getCookie("shared")
            }
            function a(t) {
                setCookie("shared", !!t, 1800)
            }
            function i() {
                return getCookie("nickname")
            }
            function u(t) {
                setCookie("nickname", t, 30)
            }
            function s() {
                var t = vt()
                  , e = void 0;
                return n() && (e = parseInt(getCookie("skin"))),
                t.indexOf(e) < 0 && (e = t[Math.floor(Math.random() * t.length)]),
                e
            }
            function h(t) {
                setCookie("skin", t, 30)
            }
            function l(t, e, n, a, r, o) {
                var i = '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M118.1 138.7c10.9 27 24.8 52.4 43 75.2 2.4 3 5.5 5.7 8.7 7.9 4.7 3.2 9.1 2.1 11-3.3 2-5.6 3.9-17 4-23 0.3-15.4 0-25.6-0.9-41 -0.5-9.9-4.1-18.6-18.6-21.2 -4.5-0.8-4.9-4.5-2-8.2 6-7.7 14.4-8.9 23.4-9.4 14.7-0.8 29.5-0.1 44.2 0 6 0.1 12 0.5 17.9 1.8 7.7 1.7 11.8 7.1 13.1 14.6 0.7 3.9 1 7.9 0.9 11.8 -0.4 16.9-1.2 33.7-1.4 50.6 -0.1 6.6 0.4 13.4 1.8 19.8 2 9 8.1 11.2 14.3 4.7 7.9-8.2 14.9-17.5 21.5-26.9 11.9-17.1 20.8-35.9 28.5-55.3 4-10 7-12.2 17.8-12.2 20.2 0 40.4-0.1 60.7 0 3.6 0 7.3 0.4 10.7 1.4 5.5 1.8 7.7 6.2 6.4 11.9 -3 13.3-10.2 24.6-17.9 35.5 -12.4 17.5-25.3 34.5-38 51.8 -1.6 2.2-3 4.5-4.4 6.9 -4.7 8.6-4.4 13.4 2.5 20.5 11 11.3 22.8 22 33.4 33.6 7.7 8.5 14.9 17.7 21 27.4 7.8 12.2 3 23.8-11.5 25.8 -9.1 1.3-53.6 0-55.9 0 -12-0.1-22.5-4.2-30.9-12.3 -9.4-9.1-17.9-19-27-28.4 -2.7-2.8-5.6-5.6-8.7-8 -7.4-5.6-14.6-4.4-18.1 4.3 -2.9 7.4-5.5 27-5.6 28.7 -0.6 8.7-6.2 14.3-16 14.8 -28.2 1.5-55.6-1.6-81.1-15.3 -21.6-11.6-38.9-27.9-53.8-47 -23.7-30.3-42.5-63.6-59.6-97.9 -0.9-1.8-18.2-38.7-18.7-40.4 -1.5-5.8-0.1-11.4 4.8-13.3 3.1-1.2 60.2 0 61.2 0C108 125.4 114.2 129.2 118.1 138.7z" fill="#FFF"/></svg><span>' + t + "</span></div>";
                return "undefined" != typeof VK && "undefined" != typeof VK.Share ? VK.Share.button({
                    noparse: !0,
                    url: e,
                    title: a,
                    description: r,
                    image: o
                }, {
                    type: "custom",
                    text: i
                }) : $(i)
            }
            function c(t, e, n, a, r, o) {
                var i = '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/></svg><span>' + t + "</span></div>"
                  , u = $(i);
                return u.click(function() {
                    "undefined" != typeof FB && "undefined" != typeof FB.ui && FB.ui({
                        method: "feed",
                        display: "popup",
                        link: e,
                        name: n,
                        caption: a,
                        description: r,
                        picture: o
                    }, function() {})
                }),
                u
            }
            function g() {
                k.toggle(UserManager.Wa()),
                L.toggle(!UserManager.Wa()),
                S.toggle(!UserManager.Wa()),
                U.toggle(UserManager.Wa()),
                D.toggle(UserManager.Wa()),
                B.click(UserManager.Wa() ? function() {
                    return PopupManager.rb()
                }
                : function() {}
                ),
                it.click(UserManager.Wa() ? function() {
                    return PopupManager.rb()
                }
                : function() {}
                ),
                UserManager.Wa() ? (PopupManager.qb(),
                z.hide(),
                ot.html(UserManager.Ha()),
                rt.attr("src", UserManager.Ja()),
                it.html(UserManager.Ka()),
                ut.width(100 * UserManager.Ma() / UserManager.Na() + "%"),
                st.html(UserManager.Ma() + " / " + UserManager.Na()),
                ht.html(UserManager.La()),
                C.val(UserManager.Ia()),
                At(UserManager.U())) : (z.toggle(!n()),
                ot.html(ot.data("guest")),
                rt.attr("src", GUEST_AVATAR_URL),
                it.html("10"),
                ut.width("0"),
                st.html(""),
                ht.html(1),
                C.val(i()),
                At(s()))
            }
            function f(t) {
                var e = UserManager.Xa();
                $.get(GATEWAY_HOST + "/pub/wuid/" + e + "/start?nickname=" + encodeURI(C.val()) + "&skinId=" + encodeURI(mt()), function(e) {
                    t(e.server_url)
                })
            }
            function x() {
                UserManager.eb()
            }
            function d() {
                return setCookie("prerollCount", kt += 1, 30),
                kt >= 5 || r ? (at.stop(!0),
                at.hide(),
                void o.ub()) : void w()
            }
            function T() {
                setCookie("prerollCount", kt = 0, 30),
                w()
            }
            function w() {
                var t = UserManager.Xa()
                  , e = C.val();
                Gt(e, t) && (at.stop(!0),
                at.fadeOut(500),
                Y.stop(!0),
                Y.fadeIn(500),
                UserManager.Wa() || (u(e),
                h(mt())))
            }
            function y() {
                console.log("c"),
                V.stop(!0),
                V.fadeOut(500),
                lt.stop(!0),
                lt.fadeOut(500),
                Y.stop(!0),
                Y.fadeOut(500)
            }
            function p(t) {
                Q.html(t),
                H.fadeIn(),
                F.slideDown()
            }
            function M() {
                H.fadeOut(),
                F.slideUp()
            }
            function v(t, e) {
                var n = void 0
                  , a = void 0
                  , r = void 0;
                e >= 1 && e <= 10 ? (a = i18n("index.game.result.place.i" + e),
                r = i18n("index.game.result.placeInBoard"),
                n = i18n("index.game.social.shareResult.messGood").replace("{0}", C.val()).replace("{1}", t).replace("{2}", a)) : (a = "",
                r = i18n("index.game.result.tryHit"),
                n = i18n("index.game.social.shareResult.messNorm").replace("{0}", C.val()).replace("{1}", t)),
                q.html(i18n("index.game.result.your")),
                tt.html(t),
                et.html(a),
                nt.html(r);
                var o = i18n("index.game.result.share");
                i18n("index.game.social.shareResult.caption");
                _.empty().append(l(o, "https://web.archive.org/web/20170204062146/https://wormate.io", "wormate.io", n, n, "https://web.archive.org/web/20170204062146/https://wormate.io/images/og-share-img-new.jpg")),
                X.empty().append(c(o, "https://web.archive.org/web/20170204062146/https://wormate.io", "wormate.io", n, n, "https://web.archive.org/web/20170204062146/https://wormate.io/images/og-share-img-new.jpg")),
                W.stop(!0),
                W.fadeIn(3e3)
            }
            function m(t, e) {
                Ct = !1,
                t ? !function() {
                    var t = e[0]
                      , n = e[1];
                    UserManager.Wa() ? $.get(GATEWAY_HOST + "/pub/wuid/" + UserManager.Xa() + "/getUserData", function(e) {
                        if (v(t, n),
                        e.user_data) {
                            var a = UserManager.La();
                            UserManager.Za(e.user_data);
                            var r = UserManager.La();
                            r > 1 && r != a && p(r)
                        }
                    }) : v(t, n)
                }() : (console.log("b"),
                V.stop(!0),
                V.fadeIn(5e3),
                lt.stop(!0),
                lt.fadeIn(5e3),
                "undefined" != typeof googletag && "undefined" != typeof googletag.pubads && googletag.pubads().refresh(),
                at.stop(!0),
                at.fadeIn(500)),
                Y.stop(!0),
                Y.fadeOut(500)
            }
            function A(t) {
                var e = Math.atan2(Pt - .5 * ft.offsetHeight, jt - .5 * ft.offsetWidth);
                t(e, Ct)
            }
            function b() {
                var t = St.width()
                  , e = St.height()
                  , n = K.outerWidth()
                  , a = K.outerHeight()
                  , r = ct.outerHeight()
                  , o = gt.outerHeight()
                  , i = Math.min(1, Math.min((e - o - r) / a, t / n))
                  , u = "translate(-50%, -50%) scale(" + i + ")";
                K.css({
                    "-webkit-transform": u,
                    "-moz-transform": u,
                    "-ms-transform": u,
                    "-o-transform": u,
                    transform: u
                })
            }
            o.vb(T);
            var I = window.I18N_LANG;
            I || (I = "en");
            var G = void 0;
            switch (I) {
            case "uk":
                G = "uk_UA";
                break;
            case "de":
                G = "de_DE";
                break;
            case "fr":
                G = "fr_FR";
                break;
            case "ru":
                G = "ru_RU";
                break;
            case "es":
                G = "es_ES";
                break;
            default:
                G = "en_US"
            }
            moment.locale(G);
            var N = document.getElementById("game-wrap");
            if (N.style.display = "block",
            !t()) {
                var j = document.getElementById("error-page");
                return void (j.style.display = "block")
            }
            UserManager = UserManager(),
            PopupManager = PopupManager();
            var P = $("#players-advice-cont")
              , C = $("#input-nickname")
              , k = $("#input-play")
              , L = $("#input-login")
              , S = $("#input-guest")
              , B = $("#input-profile")
              , U = $("#input-leaders")
              , D = $("#input-settings")
              , E = $("#skin-view-prev")
              , O = $("#skin-view-next")
              , z = $("#skin-over-cont")
              , R = $("#skin-over-button-list")
              , Y = $("#loading-page")
              , W = $("#results-page")
              , H = $("#levelup-page")
              , F = $("#levelup-cont")
              , Q = $("#levelup-val")
              , V = $("#main-menu-page")
              , K = $("#main-menu-flex")
              , J = $("#final-caption")
              , Z = $("#final-continue")
              , _ = $("#final-share-vk")
              , X = $("#final-share-fb")
              , q = $("#final-message")
              , tt = $("#final-score")
              , et = $("#final-place")
              , nt = $("#final-board")
              , at = $("#ad-cont")
              , rt = $("#avatar")
              , ot = $("#username")
              , it = $("#coins")
              , ut = $("#experience-bar")
              , st = $("#experience-val")
              , ht = $("#level")
              , lt = $("#markup-wrap")
              , ct = $("#markup-header")
              , gt = $("#markup-footer")
              , ft = document.getElementById("stage")
              , xt = 0
              , dt = P.children();
            if (setInterval(function() {
                dt.eq(xt).fadeOut(500, function() {
                    ++xt >= dt.length && (xt = 0),
                    dt.eq(xt).fadeIn(500).css("display", "inline-block")
                })
            }, 3e3),
            J.text(i18n("index.game.result.title")),
            Z.text(i18n("index.game.result.continue")),
            setTimeout(function() {
                e("//web.archive.org/web/20170204062146/https://connect.facebook.net/" + G + "/sdk.js", "facebook-jssdk", function() {
                    FB.init({
                        appId: "861926850619051",
                        cookie: !0,
                        xfbml: !0,
                        status: !0,
                        version: "v2.8"
                    }),
                    UserManager.bb()
                }),
                e("//web.archive.org/web/20170204062146/https://vk.com/js/api/openapi.js?127", null, function() {
                    VK.init({
                        apiId: 5607778
                    }),
                    VK.Widgets.Like("__vk_like", {
                        redesign: 1,
                        type: "mini",
                        height: 20
                    }),
                    VK.Widgets.Subscribe("__vk_subscribe", {
                        mode: 1,
                        soft: 1
                    }, -124481002)
                }),
                e("//web.archive.org/web/20170204062146/https://apis.google.com/js/api:client.js", null, function() {
                    gapi.load("auth2", function() {
                        GoogleAuth = gapi.auth2.init({
                            client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
                        }),
                        UserManager.cb()
                    })
                }),
                e("//web.archive.org/web/20170204062146/https://platform.twitter.com/widgets.js", "twitter-wjs"),
                e("//web.archive.org/web/20170204062146/https://vk.com/js/api/share.js?90"),
                e("//web.archive.org/web/20170204062146/https://apis.google.com/js/platform.js"),
                e("//web.archive.org/web/20170204062146/https://www.googletagservices.com/tag/js/gpt.js", null, function() {
                    googletag.cmd.push(function() {
                        googletag.defineSlot("/421469808/WRM_wormate.io_300x250", [300, 250], "div-gpt-ad-1480514147620-0").addService(googletag.pubads()),
                        googletag.pubads().enableSingleRequest(),
                        googletag.enableServices()
                    }),
                    googletag.cmd.push(function() {
                        googletag.display("div-gpt-ad-1480514147620-0")
                    })
                })
            }, 0),
            !n()) {
                var Tt = function() {
                    a(!0),
                    z.hide()
                };
                z.show();
                var wt = i18n("index.game.main.menu.unlockSkins.share")
                  , yt = encodeURIComponent(i18n("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio")
                  , pt = encodeURIComponent(i18n("index.game.main.menu.unlockSkins.comeAndPlay"));
                R.append($('<a class="skin-over-button" id="skin-over-tw" target="_blank" href="https://web.archive.org/web/20170204062146/http://twitter.com/intent/tweet?status=' + yt + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="><span>' + wt + "</span></a>").click(Tt)),
                R.append($('<a class="skin-over-button" id="skin-over-vk" target="_blank" href="https://web.archive.org/web/20170204062146/http://vk.com/share.php?url=https%3A%2F%2Fwormate.io"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xMTguMSAxMjVjMTAuOSAyNyAyNC44IDUyLjQgNDMgNzUuMiAyLjQgMyA1LjUgNS43IDguNyA3LjkgNC43IDMuMiA5LjEgMi4xIDExLTMuMyAyLTUuNiAzLjktMTcgNC0yMyAwLjMtMTUuNCAwLTI1LjYtMC45LTQxIC0wLjUtOS45LTQuMS0xOC42LTE4LjYtMjEuMiAtNC41LTAuOC00LjktNC41LTItOC4yIDYtNy43IDE0LjQtOC45IDIzLjQtOS40IDE0LjctMC44IDI5LjUtMC4xIDQ0LjIgMCA2IDAuMSAxMiAwLjUgMTcuOSAxLjggNy43IDEuNyAxMS44IDcuMSAxMy4xIDE0LjYgMC43IDMuOSAxIDcuOSAwLjkgMTEuOCAtMC40IDE2LjktMS4yIDMzLjctMS40IDUwLjYgLTAuMSA2LjYgMC40IDEzLjQgMS44IDE5LjggMiA5IDguMSAxMS4yIDE0LjMgNC43IDcuOS04LjIgMTQuOS0xNy41IDIxLjUtMjYuOSAxMS45LTE3LjEgMjAuOC0zNS45IDI4LjUtNTUuMyA0LTEwIDctMTIuMiAxNy44LTEyLjIgMjAuMiAwIDQwLjQtMC4xIDYwLjcgMCAzLjYgMCA3LjMgMC40IDEwLjcgMS40IDUuNSAxLjggNy43IDYuMiA2LjQgMTEuOSAtMyAxMy4zLTEwLjIgMjQuNi0xNy45IDM1LjUgLTEyLjQgMTcuNS0yNS4zIDM0LjUtMzggNTEuOCAtMS42IDIuMi0zIDQuNS00LjQgNi45IC00LjcgOC42LTQuNCAxMy40IDIuNSAyMC41IDExIDExLjMgMjIuOCAyMiAzMy40IDMzLjYgNy43IDguNSAxNC45IDE3LjcgMjEgMjcuNCA3LjggMTIuMiAzIDIzLjgtMTEuNSAyNS44IC05LjEgMS4zLTUzLjYgMC01NS45IDAgLTEyLTAuMS0yMi41LTQuMi0zMC45LTEyLjMgLTkuNC05LjEtMTcuOS0xOS0yNy0yOC40IC0yLjctMi44LTUuNi01LjYtOC43LTggLTcuNC01LjYtMTQuNi00LjQtMTguMSA0LjMgLTIuOSA3LjQtNS41IDI3LTUuNiAyOC43IC0wLjYgOC43LTYuMiAxNC4zLTE2IDE0LjggLTI4LjIgMS41LTU1LjYtMS42LTgxLjEtMTUuMyAtMjEuNi0xMS42LTM4LjktMjcuOS01My44LTQ3IC0yMy43LTMwLjMtNDIuNS02My42LTU5LjYtOTcuOSAtMC45LTEuOC0xOC4yLTM4LjctMTguNy00MC40IC0xLjUtNS44LTAuMS0xMS40IDQuOC0xMy4zIDMuMS0xLjIgNjAuMiAwIDYxLjIgMEMxMDggMTI1LjQgMTE0LjIgMTI5LjIgMTE4LjEgMTM4Ljd6IiBmaWxsPSIjRkZGIi8+PC9zdmc+"><span>' + wt + "</span></a>").click(Tt)),
                R.append($('<a class="skin-over-button" id="skin-over-fb" target="_blank" href="https://web.archive.org/web/20170204062146/https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + pt + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"><span>' + wt + "</span></a>").click(Tt))
            }
            L.click(function() {
                return PopupManager.tb()
            }),
            U.click(function() {
                return PopupManager.sb()
            }),
            D.click(function() {
                return PopupManager.tb()
            }),
            B.click(function() {
                return PopupManager.rb()
            }),
            UserManager.Va(g);
            var Mt = _Game(f, ft, document.getElementById("main-menu-bg"), document.getElementById("skin-view-canv"), i18n, [x, y, m, A])
              , vt = function() {
                return Mt[0]()
            }
              , mt = function() {
                return Mt[1]()
            }
              , At = function(t) {
                return Mt[2](t)
            }
              , bt = function() {
                return Mt[3]()
            }
              , It = function() {
                return Mt[4]()
            }
              , Gt = function(t, e) {
                return Mt[5](t, e)
            }
              , Nt = function(t) {
                return Mt[7](t)
            };
            Nt(0);
            var jt = 0
              , Pt = 0
              , Ct = void 0
              , kt = parseInt(getCookie("prerollCount"));
            kt >= 0 && kt <= 4 || (kt = 3),
            H.click(function() {
                return M()
            }),
            Z.click(function() {
                W.stop(!0),
                W.fadeOut(500),
                console.log("a"),
                V.stop(!0),
                V.fadeIn(500),
                lt.stop(!0),
                lt.fadeIn(500),
                "undefined" != typeof googletag && "undefined" != typeof googletag.pubads && googletag.pubads().refresh(),
                at.stop(!0),
                at.fadeIn(500)
            });
            var Lt = {
                contextmenu: function(t) {
                    return t.preventDefault(),
                    t.stopPropagation(),
                    !1
                },
                touchmove: function(t) {
                    (t = t || window.event) && (t = t.touches[0],
                    "undefined" != typeof t.clientX ? (jt = t.clientX,
                    Pt = t.clientY) : (jt = t.pageX,
                    Pt = t.pageY))
                },
                touchstart: function(t) {
                    (t = t || window.event) && (Ct = t.touches.length >= 2),
                    t.preventDefault()
                },
                touchend: function(t) {
                    (t = t || window.event) && (Ct = t.touches.length >= 2)
                },
                mousemove: function(t) {
                    (t = t || window.event && "undefined" != typeof t.clientX) && (jt = t.clientX,
                    Pt = t.clientY)
                },
                mousedown: function(t) {
                    Ct = !0
                },
                mouseup: function(t) {
                    Ct = !1
                }
            };
            addEventListener("contextmenu", Lt.contextmenu),
            ft.addEventListener("touchmove", Lt.touchmove, !0),
            ft.addEventListener("touchstart", Lt.touchstart, !0),
            ft.addEventListener("touchend", Lt.touchend, !0),
            ft.addEventListener("mousemove", Lt.mousemove, !0),
            ft.addEventListener("mousedown", Lt.mousedown, !0),
            ft.addEventListener("mouseup", Lt.mouseup, !0),
            k.click(d),
            S.click(d),
            E.click(bt),
            O.click(It),
            C.keypress(function(t) {
                13 == t.keyCode && d()
            }),
            $("html").keydown(function(t) {
                16 == t.keyCode && (Ct = !0)
            }).keyup(function(t) {
                16 == t.keyCode && (Ct = !1)
            }),
            $(function() {
                FastClick.attach(document.body)
            });
            var St = $("body");
            b(),
            $(window).resize(b)
        }
        var a = {
            wb: function() {
                var t = null
                  , n = {};
                return n.vb = function(n) {
                    e("//web.archive.org/web/20170204062146/https://api.adinplay.com/player/v2/WRM/wormate.io/player.min.js", null, function() {
                        if ("undefined" != typeof aipPlayer) {
                            var e = "preroll";
                            t = new aipPlayer({
                                AD_WIDTH: 960,
                                AD_HEIGHT: 540,
                                AD_FULLSCREEN: !0,
                                PREROLL_ELEM: document.getElementById(e),
                                AIP_COMPLETE: n
                            })
                        }
                    })
                }
                ,
                n.ub = function() {
                    t && t.startPreRoll()
                }
                ,
                n
            }(),
            xb: function() {
                function t() {
                    console.log("Append!!!!");
                    var t = document.createElement("script");
                    t.src = "//web.archive.org/web/20170204062146/https://cdn.playwire.com/bolt/js/zeus/embed.js",
                    t.type = "text/javascript",
                    t.setAttribute("charset", "utf-8"),
                    t.setAttribute("data-asasd", "LOOOL"),
                    t.setAttribute("data-id", e),
                    t.setAttribute("data-autoload", "false"),
                    t.setAttribute("data-config", "//web.archive.org/web/20170204062146/https://config.playwire.com/1018410/v2/pre_content.json"),
                    t.setAttribute("data-width", "100%"),
                    t.setAttribute("data-height", "100%"),
                    t.setAttribute("data-post-ad-container", "game-cont"),
                    document.getElementById("game-wrap").appendChild(t)
                }
                var e = "pw-player"
                  , n = !1
                  , a = {};
                return a.vb = function(n) {
                    function a() {
                        n(),
                        t()
                    }
                    "undefined" != typeof Bolt && (Bolt.on(e, Bolt.BOLT_AD_COMPLETE, a),
                    Bolt.on(e, Bolt.BOLT_AD_ERROR, a)),
                    t()
                }
                ,
                a.ub = function() {
                    if ("undefined" != typeof Bolt) {
                        var t = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                        n || t ? Bolt.playMedia(e) : Bolt.renderPlayer(e, function() {
                            n = !0,
                            Bolt.playMedia(e)
                        })
                    }
                }
                ,
                a
            }(),
            yb: function() {
                var t = function() {}
                  , e = {};
                return e.vb = function(e) {
                    t = e
                }
                ,
                e.ub = function() {
                    setTimeout(t, 1)
                }
                ,
                e
            }()
        }
          , r = !1
          , o = a.wb;
        window.playwire && (r = !0,
        o = a.xb),
        window.onerror = function(t, e, n, a, r) {
            return "undefined" != typeof $ && $.get(GATEWAY_HOST + "/pub/error.jpg?m=" + encodeURI(t) + "&u=" + encodeURI(e) + "&ln=" + encodeURI(n) + "&cn=" + encodeURI(a), function() {}),
            !1
        }
        ,
        window.addEventListener("load", function() {
            n()
        });
        try {
            var i = "background:#000"
              , u = "color:#"
              , s = u + "FFC107;" + i
              , h = u + "26C6DA;" + i
              , l = u + "FFEB3B;" + i
              , c = u + "8BC34A;" + i
              , g = u + "CDDC39;" + i;
            console.log("A  `-.TTTTTT`-::`  AT  .:/:-`T A -/.`-:///:.`T AT  ..TT  .T  ATTT..TAT `.-------..``TA  ``.`````````TTTTTTTTT\nA sNMMd-TTTTToN@N- A  :yN@MMNy-  A.@@@MMNy-  AT.hMMd.T /mMd`TATT /mMMm/ A`odN@@@@Mmh/A`yN@MMNNN@oTTTTTTTT  \nA/@MMN-TTTT :@@s A.h@@@MM/  AN@No:-:sN@+ ATd@Mm. `y@MyTATTs@@s:AN@@@@NNNNmoAs@MNNNNNNNNh-TTTTTTTT  \nA-@@mTTTT +@@y`Am@MmddN@MM- Ad@sT  +@N A  /@@Nym@@.  AT  o@@MMo.A:////o@Md:.--.` Ay@h-..----`TTTTTTTTT \nA d@@/TTTT+@@+Ay@N+`  .h@My Ah@d.T`y@d A  h@N@@N@Ms  AT /@M+N@M:T  A s@-TT As@-TTTTT A +hhy-AT./shhhs/.  \nA -N@MMdTTTT+@@-A@MoT  -@Md Ah@Mmhyhm@d- A .@m-sNMNd/.@MN  AT-N@o +@MN.T A .@`TT A+@+``.-/+/.TT  A.@MyA `sN@@MN+ \nA  +@@-TTT  y@MMyA:@M:T  .@Mm Am@@@mo-`  A s@o  -:-` `@MM: A  .m@Nsym@MMhT A .@:TT Ay@Mmdm@MhTT  A`@M/A hMMNs::+N@/\nATs@MMyT`oys`  .N@MM-A:@M+T  +@MhA`@My/yNMMNh-TA N@sTT /@MMy A .m@MNMMNm@MM/TA -@dTT Ad@Nsshddhs-TT  A h@:A:@oT +@h\nAT y@MM/ .d@d-:d@MMo A`@MN:T:N@M/Ao@Mo  -d@m`  A-@MN.TTs@MMm A.m@Mm.--.`N@MN`  A o@M/TTA@M/T `TTT  A y@sAo@:T +@h\nAT `s@MNsm@MMNN@MMy  A s@MNdhdN@MhA`N@MdT-@Mm: A/@MMm`T  h@@`Ad@MMoT  s@MMo  A N@MdTTA@Mo.`.----.  A `..  A N@dA/@h`  .m@+\nATTo@@Md+h@@Ms`  A  oN@@@Ns`A.@MMhT N@MMyA/@@yT  s@@:A@MMm`T  `m@Md  A.@@TTAN@MNNNNNNNNd.A-mNNm:A-@MmA`d@NhhN@h`\nATT :dMMNh/T-yNMNh:T AT.+ymNNNdy+.TAy@m-T :m@NsA yN@N+T  `h@Mo`Ah@h.TT .h@o  A sNMMNoTTAo@NN@@Md`A-mMMN-A`d@oA `od@@h/  \nATTT..`TT  ``TTATTTTTTA`.`TT  .-.` A  `.--`TT  `..`  A `.`TTT  .-.TA  `..`TT A ````````..``  A  `.  A  .-. AT `-:-.`T \n".split("@").join("MMM").split("T").join("   ").split("A").join("%c"), s, h, l, c, h, s, g, s, h, l, c, h, s, g, s, h, l, c, h, s, g, s, h, l, c, h, s, g, s, h, l, c, h, s, g, s, h, s, h, l, c, h, s, g, s, h, s, h, l, c, h, s, g, s, h, s, h, l, c, h, s, g, s, h, s, h, l, c, h, s, g, s, h, s, h, l, c, h, s, g, c, s, h, s, h, l, c, h, s, g, c, s, h, s, h, l, c, h, s, g, c, s, h, s, h, l, c, h, s, g, c, s, h);
        } catch (t) {}
    }();