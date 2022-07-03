import {
    r as c,
    j as a,
    a as e,
    m as l,
    R as N,
    c as I,
    L as G,
    B as D,
    b as Y,
    d as E,
    e as K,
    f as X
} from "./vendor.caded6e3.js";
const Q = function () {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
    new MutationObserver(n => {
        for (const t of n)
            if (t.type === "childList")
                for (const m of t.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && s(m)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function v(n) {
        const t = {};
        return n.integrity && (t.integrity = n.integrity), n.referrerpolicy && (t.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? t.credentials = "include" : n.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t
    }

    function s(n) {
        if (n.ep) return;
        n.ep = !0;
        const t = v(n);
        fetch(n.href, t)
    }
};
Q();
var O = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVRoge2a24tNURzHPy7lLg8aZihPFE1SZp5NeKIMaeSSF8WDhDLNPPIkjfwF8uKSB6FEySVP8kQuMW4vxiWUCOEBP/2m36njmL3XWnufvc+anG996zyc79qftc/aa6/fWgfqqyXAAeA68BL4ZtbP14D9wGIi1ArgFiCevgl0EYGmAicDwGt9HJjSKPi5wL0c8BXfAdrKhp9eJ3gxPwBmlNmBC3WEF/P5suA3FgAv5p6i4ccCzwvswFO7RmFaVyC8mNfWE3gMsBBYBewFXpfQgVfAHmA1sMgYgqXT2hFgqARgcXjIWFp973g/8DUCcKnxF6A37ReZAJyOAFQcPmWs/+hYBHASsAT5S9sjgJJAb6vA62LqbQRAEug3wGTtwK4IYCSjd2KFhoxSX9YO/IgARDL6OxFASE43HED++w58iuAuSkZ/0CF0JgIQyWhd+gxXQTJKvV47MA64HwGMBPqusQ9rOfArAijx9E9gWe2Cbl8EYOLp3Uk1QZ/1LuY734tDK4FHEcBKjR/aUPeSPhybgXNWyjUK+jNwFthU/cCGSvdpZgHtwNKS3G7XLHSPqKmmmmqqOLXYFuPASGsOD3VZts/aCtFE223Q/dANWTZ3O4H3VS+T37Yz7auDlqnkta15ntlWO26qfpmdCIX/mFD9T/LIDyS8UY96wj9OyHfkga94QUZ49Q0P+MGUvC4lUtXhgH8HjM8Irz6Ukp3tgNcV6Pw0+GnAC0cD3Sl5V0k6aMeySbrqyOvfE1LV7YDf6shfSsk/cRxiz3HA60zk1Joc8KqLGeFVbXnhk4aQwm/xzPckDBuvMy3gygj5w77wFelJpI5FLSBuW1UWoh3AM5sI9PRkZkBWv6tzvWa1DW3LW38AkbUKdcusPcoAAAAASUVORK5CYII=",
    W = "/assets/rain.7ac5ec00.mp3",
    V = "/assets/Ocean.dbe288f8.mp3",
    M = "/assets/whiteNoise.a9dc8973.mp3",
    J = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADbklEQVRoge2ZS2xOURDHfyVRpR8W0m5UQjdKqFaIlFhrWs9UxBILoqQJFfFaiX42JBQ7IhIWHhGpsPGs0oiInSXRejTxiBJ9oVdGpnIzufdzH9/Dl/SfTHJz75mZ/9wz95yZc2EUvqgD3gDdQC15iG7AUekiD+EYyTs4owHkGP/FDJQDS4ExOQhgrPoWDpGwHvihzh8AiSwGkFCfjnIQLqFxzxDoCBlE1GU0ob7cvu9E4M9Jj7cYJohaDULIL49B3gFaowQw0WMWRB5FSKec+Uv4vBGZ0oI0ki8A7sac8dBBzPYYKyvGfuCWps53Fbm+CewDZnrozckUeb8geoHJrucVwA3glwcRKzKmDZjl0p+iNjNCfgTFQBK4CNS4pn4PMBSAuBXR2e1KxRq1nVRfGYdsbucjELdyLuJGGRutPoQ6gS2aIsUqkmJbgSc+OsezTX6tB4kPev9faAA+eeivIkuYALw3zmXDmhHCRrl2a45L3gFFZAHbjeMBoDKCnSpg0NhqJAt4bpy2xLB1xNgS2xnFdONQKsXSGPZKXRWvyDAwLayR8cBmXc+tNOtUj2C1CUBK3rh4aGyucD2rVg5e3IRzoQy6GmDDma8Gd6ajSjQ4bWw2uci7Z8dLLsvAbwE2GyEu2GvuH0pDAEljU3Znwa4AvL7KwCsBZqDSZwZOpCGAUz4zUBWgRLmE5tEmXRGsHDBL5EpjQOr3uGg3NutdzyR1D/pw2zjyDcRZheQNTY1BvsRjFSojy/tAnO+gxdh6RhbQZJz2A3Mj2JHUHDC2ZJfPOIo8aqHXml5BUaZdmpOLWkiwxmNFkFI5KG7nshr16weGQjT6XbnuB9Au6kzEXbnZpXc2Vx3ZCBYASyKQkI5tXoY4jWIU6frL2K1Sl2/6FeakTMrWhSH0F6lOuvR7zUleSsjK8Mpjo/kY8Ji81ufYJK7+y1QlS4E+PAb0/aMGv6ZnOyVazhbq9TrgeoAmJI5+H3BUuf7dNOvN35R8kc/ADgmgJ8Wgpz5H607AU+gLKkFOrR0jw9pxtaUYI73En9z0ytdG1zTJScGLEM7lr8piV4rK9eMQ+h1Gv8Hnu/wpDzcAX7Suv6/EJ/l8J8u08OrUD21Q9Xq0NUyaYxiLah3Trjr9KlKei+/DKU75xunfSunh32oKbXMPkP+yeYffjupc03x3J80AAAAASUVORK5CYII=",
    z = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgElEQVRoge2ZvUpDQRBGj6BX0EZLay2jgq8h+gb6Cpa+giD+BSX4DtpZqoWFjWCTxMpGtLVLQDDJyMIuXDQRTXYnu7AHpt37nTDcvTOBTCaTyXhmBTgBmkAbkDFXG2jYTMu/BZ8GakA3gtAyoEy2M6DoF/42goDyx7r5LlGLIJT8s07LPR9z28iA6gAVI1CNIIwMWUdG4MnTYXfAlbJAwwi0PB02a1tyHXhREmjh8bAyM8Ce7dPQEoQQcKwBjykLGKaAXeAjVQHHUqDLEi0BwwSwDbynKuBYAC5SFnBsAK8pCxjmgfuUBUb9mByrwBxwDvRSFDD9/+bjudoC5g106fO5oiQQ4g4QLYFFOwb6DC4aApPAjsdPdtEUWAUeAgaXUAJmFtgHPhXCi0+BLWATeFYKLk4gZH+qjJTNCILIKEP9cQRBZMg6wC5MNYbvYIst7MJUEqsqJYqAN2WIuu63oS7swjTmdurYX/5H+DIVu3OsR/QHRx04LPd8JpPJZPDBFz7LeGLYfU7OAAAAAElFTkSuQmCC",
    j = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVRoge2YO2hUQRSGv6hgYwKiKdIEC0kIWGjn2ihRCzUgUVMsYmFhVhDUwkZB1FQpRcRGC8FCQdAUggoWaiWWNlq4xEeMCYmPQi0UNzIyF4bh3LmzuTPsLeaHA8vwMec/yzzOHUhKSkpKqqi6gB3Adv27MjoAfAZmgVEHdxVY0nElwHxBtBJYNIwt6DGJ+2lwPxzcosd8wTRkJMtiUOAGSnBDMQuoCwnHBO5gCa4es4BJIeGEwF0owU3GLOChkHBK4O6W4B7FLGBWSNgUuNcluPlY5nuFZCpaQI/BrQb+lOCWgL4YBezOSaaiZnCbA3B7YhRwxpGwYXBHAnBnYxRwy5FQ3bquk6pd7k6MAl45Ej43uAcBuDehzasN99uR8LvRsL0PwP0F1oQsYIsjWRb9+pRpBeK2hizgqEcBI8C2gNzxkAVctya/p9ezOXYOGLfGpoXLT+KeAo+tsZu+5vYBMx7/iBn7gdPWmDL6zhob14aLuAZwOGfPfM0JtdGHVQEf2zSvYkPBxWau4xEPrgZsWoaP6eUUMKNPkr4CLjtJ+gu4FtANrAK+tenlE/ra9i3iA7DXWH5fHOxbzXQVGGsa89X18vDxsqCXcik9cyRQGz2TveHNuG/NqQpe6xFBdM1h7GLOB74dl+igTjiMqdeGTA0Hd6iD/v+/+eQZ22hwNQc30EH/rM8xpZ5RVhhcd07r8Cv2M4qP5gRjLwSuKXAvqYCeCMZU62FrSuBuUAFdFoydFLgJgTtFBXRMMKYedW2NCdwwFZDUGq8TuEGB66UC6tF9T2ZKtSV4PORmrUYldNswdt7Bjep2WnWRO6mQ1Jm/K/RnYFJSUlISsfUP8WZQZ6lYCYsAAAAASUVORK5CYII=";
const R = new Audio(W),
    k = new Audio(V),
    x = new Audio(M),
    Z = h => {
        const [i, v] = c.exports.useState(0), [s, n] = c.exports.useState(0), [t, m] = c.exports.useState(0), [o, w] = c.exports.useState(0), [r, B] = c.exports.useState(350);
        k.volume = s, R.volume = i, x.volume = t, R.play(), k.play(), x.play();
        const A = () => {
            w(0)
        };
        return setTimeout(function () {
            w(-450), B(420)
        }, 2e3), c.exports.useEffect(() => {
            A(), B(1e3)
        }, [h.radio]), a("div", {
            className: "infoContainer",
            children: [e("div", {
                className: "time"
            }), e("div", {
                className: "songName",
                children: a(l.div, {
                    animate: {
                        x: o
                    },
                    transition: {
                        delay: 1
                    },
                    className: "radioStationTitle",
                    style: {
                        left: r
                    },
                    children: [h.radio, e("div", {
                        className: "socialsContainer",
                        children: a("a", {
                            target: "_blank",
                            href: h.youtube,
                            children: [" ", e("img", {
                                src: z,
                                className: "socialIcons",
                                alt: ""
                            }), " "]
                        })
                    })]
                })
            }), a("div", {
                className: "otherSoundsContainer",
                children: [a("div", {
                    className: "allign",
                    children: [e("input", {
                        className: "soundDial",
                        type: "range",
                        orient: "vertical",
                        min: 0,
                        max: 1,
                        value: i,
                        onChange: C => {
                            v(C.target.valueAsNumber)
                        },
                        step: .2
                    }), e("div", {
                        className: "otherSounds",
                        children: e("img", {
                            src: O,
                            className: "imgSizing",
                            alt: ""
                        })
                    })]
                }), a("div", {
                    className: "allign",
                    children: [e("input", {
                        className: "soundDial",
                        type: "range",
                        orient: "vertical",
                        min: 0,
                        max: 1,
                        value: s,
                        onChange: C => {
                            n(C.target.valueAsNumber)
                        },
                        step: .2
                    }), e("div", {
                        className: "otherSounds",
                        children: e("img", {
                            src: J,
                            className: "imgSizing",
                            alt: ""
                        })
                    })]
                }), a("div", {
                    className: "allign",
                    children: [e("input", {
                        className: "soundDial",
                        type: "range",
                        orient: "vertical",
                        min: 0,
                        max: 1,
                        value: t,
                        onChange: C => {
                            m(C.target.valueAsNumber)
                        },
                        step: .2
                    }), e("div", {
                        className: "otherSounds",
                        children: e("img", {
                            src: j,
                            className: "imgSizing",
                            alt: ""
                        })
                    })]
                })]
            })]
        })
    },
    q = () => e("svg", {
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: a("g", {
            id: "study",
            children: [e("rect", {
                width: "64",
                height: "64"
            }), a("g", {
                id: "smoke",
                children: [e("path", {
                    id: "smoke-2",
                    d: "M9 21L9.55279 19.8944C9.83431 19.3314 9.83431 18.6686 9.55279 18.1056L9 17L8.44721 15.8944C8.16569 15.3314 8.16569 14.6686 8.44721 14.1056L9 13",
                    stroke: "#797270"
                }), e("path", {
                    id: "smoke-1",
                    d: "M6.5 22L7.05279 20.8944C7.33431 20.3314 7.33431 19.6686 7.05279 19.1056L6.5 18L5.94721 16.8944C5.66569 16.3314 5.66569 15.6686 5.94721 15.1056L6.5 14",
                    stroke: "#797270"
                })]
            }), a("g", {
                id: "laptop",
                children: [e("rect", {
                    id: "laptop-base",
                    x: "17",
                    y: "28",
                    width: "20",
                    height: "3",
                    fill: "#F3F3F3",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "laptop-screen",
                    x: "18",
                    y: "17",
                    width: "18",
                    height: "11",
                    fill: "#5A524E",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "line-1",
                    x: "20",
                    y: "19",
                    width: "14",
                    height: "1",
                    fill: "#F78764"
                }), e("rect", {
                    id: "line-2",
                    x: "20",
                    y: "21",
                    width: "14",
                    height: "1",
                    fill: "#F9AB82"
                }), e("rect", {
                    id: "line-3",
                    x: "20",
                    y: "23",
                    width: "14",
                    height: "1",
                    fill: "#F78764"
                }), e("rect", {
                    id: "line-4",
                    x: "20",
                    y: "25",
                    width: "14",
                    height: "1",
                    fill: "#F9AB82"
                })]
            }), a("g", {
                id: "cup",
                children: [e("rect", {
                    id: "Rectangle 978",
                    x: "5",
                    y: "24",
                    width: "5",
                    height: "7",
                    fill: "#CCC4C4",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("path", {
                    id: "Ellipse 416",
                    d: "M11 28C12.1046 28 13 27.1046 13 26C13 24.8954 12.1046 24 11 24",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "Rectangle 996",
                    x: "6",
                    y: "25",
                    width: "3",
                    height: "1",
                    fill: "#D6D2D1"
                })]
            }), a("g", {
                id: "books",
                children: [e("rect", {
                    id: "Rectangle 984",
                    x: "58",
                    y: "27",
                    width: "4",
                    height: "14",
                    transform: "rotate(90 58 27)",
                    fill: "#B16B4F",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "Rectangle 985",
                    x: "56",
                    y: "23",
                    width: "4",
                    height: "14",
                    transform: "rotate(90 56 23)",
                    fill: "#797270",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "Rectangle 986",
                    x: "60",
                    y: "19",
                    width: "4",
                    height: "14",
                    transform: "rotate(90 60 19)",
                    fill: "#F78764",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "Rectangle 993",
                    x: "47",
                    y: "20",
                    width: "12",
                    height: "1",
                    fill: "#F9AB82"
                }), e("rect", {
                    id: "Rectangle 994",
                    x: "43",
                    y: "24",
                    width: "12",
                    height: "1",
                    fill: "#54504E"
                }), e("rect", {
                    id: "Rectangle 995",
                    x: "45",
                    y: "28",
                    width: "12",
                    height: "1",
                    fill: "#804D39"
                })]
            }), a("g", {
                id: "desk",
                children: [e("rect", {
                    id: "Rectangle 973",
                    x: "4",
                    y: "31",
                    width: "56",
                    height: "5",
                    fill: "#797270",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "Rectangle 987",
                    x: "10",
                    y: "36",
                    width: "30",
                    height: "6",
                    fill: "#797270",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "Rectangle 975",
                    x: "6",
                    y: "36",
                    width: "4",
                    height: "24",
                    fill: "#797270",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "Rectangle 974",
                    x: "40",
                    y: "36",
                    width: "18",
                    height: "24",
                    fill: "#797270",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("line", {
                    id: "Line 129",
                    x1: "40",
                    y1: "48",
                    x2: "58",
                    y2: "48",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("line", {
                    id: "Line 130",
                    x1: "22",
                    y1: "39",
                    x2: "28",
                    y2: "39",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("line", {
                    id: "Line 142",
                    x1: "46",
                    y1: "42",
                    x2: "52",
                    y2: "42",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("line", {
                    id: "Line 131",
                    x1: "46",
                    y1: "54",
                    x2: "52",
                    y2: "54",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                }), e("rect", {
                    id: "Rectangle 988",
                    x: "11",
                    y: "37",
                    width: "28",
                    height: "1",
                    fill: "#54504E"
                }), e("rect", {
                    id: "Rectangle 992",
                    x: "5",
                    y: "32",
                    width: "54",
                    height: "1",
                    fill: "#9E9492"
                }), e("rect", {
                    id: "Rectangle 989",
                    x: "7",
                    y: "37",
                    width: "2",
                    height: "1",
                    fill: "#54504E"
                }), e("rect", {
                    id: "Rectangle 990",
                    x: "41",
                    y: "37",
                    width: "16",
                    height: "1",
                    fill: "#54504E"
                }), e("rect", {
                    id: "Rectangle 991",
                    x: "41",
                    y: "49",
                    width: "16",
                    height: "1",
                    fill: "#54504E"
                }), e("line", {
                    id: "Line 143",
                    y1: "60",
                    x2: "64",
                    y2: "60",
                    stroke: "#453F3C",
                    "stroke-width": "2"
                })]
            })]
        })
    }),
    _ = () => e("div", {
        className: "loading",
        children: a("div", {
            class: "container",
            children: [e("div", {
                class: "ring"
            }), e("div", {
                class: "ring"
            }), e("div", {
                class: "ring"
            }), e("p", {
                children: "Loading..."
            })]
        })
    });
var g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVRogdXasU5CQRSE4T/BQp6GRF8QfATsiaUWVjyUWkhCqJ0xJPc2xkKze++5c5Lp5yuA3bMA3AA74AO4AC/AhqB5APwjAl5TIO+/AKIg/kMWDfE/coUcgXtCAV4ixA1ZBMQdUgpxx5RAPEFmhXjCjJC7VIDngHjGTAJxQbpCXBj1gFQC3ANSXd6tkOrSboVUl3UrpLqkWyHV5dwKcWC+gCdgnQrwkMd0wCkd8JkO2Cd/iA/AbRpAqV+jSv0hU+pRQqmHOaUep5V6oVHqlTL2Uq/UtYpSF1tKXS0qdbmr1PW6Uh84lPrEpCUUHye2+DjxD91vqcXH2aUWZ5gVsB3+9HEGnlOKX+cbBBooT0GddDcAAAAASUVORK5CYII=";
const $ = ({
    Ambient: h,
    Anime: i,
    Astral: v,
    ChillHop: s,
    Cow: n,
    Spinnin: t,
    Ivy: m,
    High: o,
    Lofi: w,
    Study: r,
    Jazz: B,
    Nice: A
}) => a("div", {
    className: "radioList",
    children: [e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: 0
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: h,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "Ambient Renders"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .15
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: i,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "Anime Vibe"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .25
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: v,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "Astral Throb"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .35
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: s,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "ChillHop Music"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .45
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: n,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "Chilled Cow"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .65
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: m,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "Ivy Records"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .75
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: o,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "H5G1 Music"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .85
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: w,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), e("span", {
                children: " Lofi Girl "
            })]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .85
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: A,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), e("span", {
                children: " Nice Guys "
            })]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: .95
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: t,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "Spinnin Records"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: 1.05
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: r,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "StudyMD"]
        })
    }), e(l.div, {
        animate: {
            opacity: [0, 1]
        },
        transition: {
            delay: 1.15
        },
        children: a(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: B,
            className: "station",
            children: [e("img", {
                className: "triangle",
                src: g,
                alt: ""
            }), "The Jazz Caf\xE9"]
        })
    })]
});
var ee = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVRogdWZzUrDQBRGz4MItooLF76BuBBFBW1tHStqwT9QpG5dCIpdCr6NSx/EnT+p4huo1aqVgSkUSdpJMjOZfHDpKuGcSTpJ7oX8pQQEqhbIWWpAB+iqapFj+C7wTI7hv4EqOYiIgK+7BpkHrtVv7uAPgV8F8ANMp4DfxnEOFHQ/yHlC+C0cZzcEXlYzJvxXFn/YDbVq3RgCIgK+4sO2N0xAhBzzCay6ht8csPK9utCEL/u28rLugREN+JJr+Kq6XwfBPwEFH+ErmvBFDfgV1/BLQNsAfBtYdg2/aAj+PeYrhpHIj4mPIfCBJvycLcgZ4Aa4U7tHfw3bKh+A0SHwbzbhjyNeA3TqURN+1hZ8UV3aXMLLnKSAL2g82M6wnEsD8GEr3yu5QFbTjAkvd5sxTXjvBIKY8F4JBAngvREIEsJ7IdBKAZ+5QAsYTwHvRKBhEd6JwGTIa0Sae965gMyVJXhnAjJ7wK1heKcC/2MCPjMBYQg+E4FaCHxHdYnrPm6jcRut6749yJK0uHWaWk4FRIL+/KCGrlMBkWK4sKPxLW1VQBiYjETNBawLCIMzqf0BElYEhIWBWth4yYpALQJe9vpN9Jd6A75eHWEwZQcDtUafhOwJTRg8N8+W4fvblKfAlOkTvziAt5qSugqvwFrWMHHzB0z6pQzBRHFPAAAAAElFTkSuQmCC",
    U = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVRoge2ZTYhOURjHf14TU2LGx5BY2AgLETIoG18LC0lIPhciRRKLSTbGGESxULKxmmxYYIFmM2WFYeFjKTvjY2FqKB+JV6fum6en49xzufe899T9193c/3mm5zf3fDzneaFSpUpFahowAPwA+oAWItJU4CVQF88mIlEH8EIlb55DRKCJwFNL8lEAtDuSLz1AO/DEkbwPQA3YC5wF5hI4+cGU5H0AusTYEWBhiOTbgMceyfsA3FHj3wIzy5K8D8BOS8wDYHRRyT/KkLzvIj5viTuad/ITgIcZk7cBbAMuAEvEu1HAPRU3kpzquWhc8lnr/wmwW7z/BixTp/iwijVfxlumZlkH7FfPgYxz3gVw1bJgZwj/sOUrjPdJfnbKYVTPCWAN8Ev5N4U/FhhSvlnkTo0BnheUvG0NdCvfAC0Vfq/yb6cBbCkweRtAzbKTXRf+AuUNJzF/1YnAAI2ppJNsETvSB+XPw6GTTQCoAe/UuBXC71fehrIBGN1Q43bwR1eUd5ASAlxU444J74zyusoIcMlROpxW3vEYptB24V32/BtNXcTv1bjlwr+bpTHQjG10rRrzUbVf3ih/vgtgc2CAmqW2kgfZHOV9TustmfrjVUCAHkspscgxI+7jWcwNBgAwU0cXc2YxN2T+06+Vv88HoBG8OnA5PQRMF/4e5X8BJlGiC80u8f4r0KlufLqUNidybvpXCL0GtgLngMXqfZ+KM4CzKMG92OdSf8QSd4qClLUzkQawHvipYp4BrUUB5N3YumW5BwdpMfpCpAH0irHfgVUEVJvH+ZEG0JrUY+Y0XkkTlNbkLXV73afNHgWACyIaAKPJyRYoATYSmaYkFeQn4FpsP7NWqkQE+g2WnQbSI8w5LAAAAABJRU5ErkJggg==";
let L = 0;
const te = ({
    plauPause: h,
    buttonClass: i,
    playPauseImage: v,
    buttonClass2: s,
    LiveStreamAudio: n,
    LiveStreamPlayPause: t
}) => {
    const m = d => {
            let b = d.target.className;
            b === "volumeOn" || b === "audioOnImg" ? (C(ee), w("volumeOff"), B("audioOffImg"), L = u, f(0)) : (b === "volumeOff" || b === "audioOffImg") && (C(U), w("volumeOn"), B("audioOnImg"), f(L))
        },
        [o, w] = c.exports.useState("volumeOn"),
        [r, B] = c.exports.useState("audioOnImg"),
        [A, C] = c.exports.useState(U),
        [u, f] = c.exports.useState(.35);
    return a("div", {
        className: "audioControl",
        children: [e(l.div, {
            whileHover: {
                scale: 1.03
            },
            whileTap: {
                scale: .9
            },
            onClick: h,
            className: i,
            children: e("img", {
                src: v,
                className: s,
                alt: ""
            })
        }), e(l.div, {
            whileHover: {
                scale: 1.09
            },
            whileTap: {
                scale: .9
            },
            onClick: m,
            className: o,
            children: e("img", {
                className: r,
                src: A,
                alt: ""
            })
        }), e("div", {
            children: e("input", {
                className: "volumeDial",
                type: "range",
                min: 0,
                max: 1,
                value: u,
                step: .01,
                onChange: d => {
                    f(d.target.valueAsNumber)
                }
            })
        }), e(N, {
            className: "liveStreamPlayer",
            playing: t,
            volume: u,
            url: n
        })]
    })
};
var p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVRoge3aQQqDQBBE0Vp59Zh7ZpJjGAKubAoLUVrIf9BLe1D/TiXc1yTpKektadmZIWler+naW8zBAdv5XdO1t0ie0HY+jXuL5eB07S24AYM3kCIhg4RSJGSQUIqEDBJKkZBBQikSMkgoRUIGCaVIyCChFAkZJJQiIYOEUiRkkFCKhAwS+puExoFDXo17T/kg/WjcW0zrYeOCXw2u2At1+AL6aLqb6eIX8gAAAABJRU5ErkJggg==";

function ae() {
    const [h, i] = c.exports.useState("PlayPause"), [v, s] = c.exports.useState("playBtn"), [n, t] = c.exports.useState(g), [m, o] = c.exports.useState(!1), [w, r] = c.exports.useState("pauseScreen"), [B, A] = c.exports.useState("https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"), [C, u] = c.exports.useState("LofiGirl"), [f, d] = c.exports.useState(""), b = T => {
        let S = T.target.className;
        S === "PlayPause" || S === "playBtn" ? (t(p), i("PlayPause2"), s("playBtn2"), F()) : (S === "PlayPause2" || S === "playBtn2") && (t(g), i("PlayPause"), s("playBtn"), P())
    }, F = () => {
        o(!1), o(!0), r("unpauseScreen")
    }, P = () => {
        r("pauseScreen"), o(!1)
    }, [H, y] = c.exports.useState("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1");
    return a("div", {
        className: "interfaceContainer",
        children: [a("div", {
            className: "radioContainer",
            children: [e("div", {
                className: "logo",
                children: "H\xE2n's music "
            }), e("div", {
                className: "subHeading"
            }), e("div", {
                className: "radioStationsContainer",
                children: e($, {
                    Ambient: () => {
                        y("//www.youtube.com/embed/hBGbt2CRDpA?autoplay=1&mute=1&start=1"), u("Ambient Renders"), d("https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw"), A("https://www.youtube.com/watch?v=GlEps1Ra06U&ab_channel=RelaxingAmbienceASMR"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Anime: () => {
                        y("//www.youtube.com/embed/5B7Rsw0L2r8?autoplay=1&mute=1&start=0"), u("AnimeVibe"), d("https://www.youtube.com/c/AnimeVibe"), A("https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Astral: () => {
                        y("//www.youtube.com/embed/RJcIzUNKSQk?autoplay=1&mute=1&start=1"), u("Astral Throb"), d("https://www.youtube.com/c/AstralThrob"), A("https://www.youtube.com/watch?v=UedTcufyrHc&ab_channel=NightrideFM"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    ChillHop: () => {
                        y("//www.youtube.com/embed/iEGFFyv0MH4?autoplay=1&mute=1&start=1"), u("ChillHop Music"), d("https://www.youtube.com/c/Chillhopdotcom/videos"), A("https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Cow: () => {
                        y("//www.youtube.com/embed/lTRiuFIWV54?autoplay=1&mute=1&start=1"), u("Chilled Cow"), d("https://www.youtube.com/c/LofiGirl"), A("https://www.youtube.com/watch?v=DWcJFNfaw9c&ab_channel=LofiGirl"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Spinnin: () => {
                        y("//www.youtube.com/embed/N65Jb683pXQ?autoplay=1&mute=1&start=0"), u("Spinnin' Records"), d("https://www.youtube.com/channel/UCpDJl2EmP7Oh90Vylx0dZtA"), A("https://www.youtube.com/watch?v=N65Jb683pXQ&ab_channel=Spinnin%27Records"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Ivy: () => {
                        y("//www.youtube.com/embed/F1B9Fk_SgI0?autoplay=1&mute=1&start=10"), u("Ivy Records"), d("https://www.youtube.com/channel/UCv7qaGzuEfLhKxAZf4eZONg"), A("https://www.youtube.com/watch?v=aLqc8TdoLJ0"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    High: () => {
                        y("//www.youtube.com/embed/lniKA4QHuxg?autoplay=1&mute=1&start=1"), u("H5G1 Music"), d("https://www.youtube.com/channel/UCIPy2w-XdvaU73L3nAK1-0g"), A("https://www.youtube.com/watch?v=-9gEgshJUuY&ab_channel=lofigeek"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Lofi: () => {
                        y("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1"), u("LofiGirl"), d("https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow"), A("https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Study: () => {
                        y("//www.youtube.com/embed/PcxpLIv4CNU?autoplay=1&mute=1&start=1"), u("StudyMD"), d("https://www.youtube.com/channel/UC5CRP-6oxYenIgBj17CkBZg"), A("https://www.youtube.com/watch?v=uxR_sTZnBtg&ab_channel=StudyMD"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Jazz: () => {
                        y("//www.youtube.com/embed/U8HBZOTZrf0?autoplay=1&mute=1&start=1"), u("theJazz Cafe"), d("https://www.youtube.com/c/TheJazzHopCaf%C3%A9"), A("https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    },
                    Nice: () => {
                        y("//www.youtube.com/embed/3n1aC2TYXIA?autoplay=1&mute=1&start=1"), u("Nice Guys"), d("https://www.youtube.com/channel/UCMmt12UKW571UWtJAgWkWqg"), A("https://www.youtube.com/watch?v=oVi5gtzTDx0&ab_channel=NiceGuys"), o(!0), r("unpauseScreen"), t(p), i("PlayPause2"), s("playBtn2")
                    }
                })
            })]
        }), e("div", {
            className: "audioControlContainer",
            children: e(te, {
                plauPause: b,
                buttonClass: h,
                playPauseImage: n,
                buttonClass2: v,
                LiveStreamAudio: B,
                LiveStreamPlayPause: m
            })
        }), e("div", {
            className: w,
            children: a("div", {
                style: {
                    transform: "translateX(60px)"
                },
                children: [e(q, {}), e("p", {
                    style: {
                        marginTop: "0rem"
                    },
                    children: "Music Paused"
                })]
            })
        }), e(Z, {
            youtube: f,
            radio: C
        }), e("div", {
            class: "videoContainer",
            children: e(N, {
                className: "vid",
                width: "140%",
                height: "140%",
                loop: "true",
                playing: m,
                volume: "mute",
                url: H
            })
        }), e(_, {})]
    })
}
const ie = () => {
        const [h, i] = c.exports.useState(""), [v, s] = c.exports.useState(!1), [n, t] = c.exports.useState(""), m = w => {
            i(w.target.value), console.log(w.target.value)
        }, o = () => {
            h === "230521" ? (s(!1), t("/music")) : h !== "230521" && (s(!0), t(""))
        };
        return a("div", {
            children: [e("div", {
                className: "heroContainer",
                children: e("div", {
                    className: "videoContainer2",
                    children: e(N, {
                        className: "react-player",
                        url: "//www.youtube.com/embed/TGan48YE9Us?autoplay=1&mute=1&start=20",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        playing: !0,
                        loop: !0,
                        muted: !0,
                        s: !0
                    })
                })
            }), a("div", {
                className: "titleContainer",
                children: [e("i", {
                    className: "fa-solid fa-heart heroLogo"
                }), e("h1", {
                    className: "tracking-in-expand-fwd",
                    children: "Hoa\u0300i Thu\u031Bo\u031Bng"
                }), e("h3", {
                    className: "subTitle",
                    children: "Trang web n\xE0y l\xE0 d\xE0nh ri\xEAng cho em "
                }), e("div", {
                    className: "subPassword",
                    children: "Mật khẩu"
                }), e("input", {
                    type: "input",
                    className: "Password ",
                    style: {
                        width: "200px"
                    },
                    value: h,
                    onChange: w => {
                        m(w)
                    }
                }), e("div", {
                    className: I(v === !0 ? "checkPass" : "d-none"),
                    children: "B\xE9 suy ngh\u0129 l\u1EA1i \u0111i !"
                }), e("div", {
                    class: "note-position-1 note-amination",
                    children: "♫"
                }), e("div", {
                    class: "note-position-2 note-amination animation-delay-2",
                    children: "♩"
                }), a("div", {
                    className: "bubbleContainer",
                    children: [e("div", {
                        className: "bubble1"
                    }), e("div", {
                        className: "bubble2"
                    }), e("div", {
                        className: "bubble3"
                    })]
                }), e("div", {
                    class: "wrap",
                    children: e(G, {
                        to: n,
                        children: a("button", {
                            class: "button",
                            onClick: () => o(),
                            children: ["B\u1EA5m v\xE0o \u0111\xE2y \u0111\u1EC3 nghe n\xE8 ", e("i", {
                                class: "fa-solid fa-heart"
                            })]
                        })
                    })
                })]
            }), e(N, {
                className: "react-player",
                url: "//www.youtube.com/embed/lf6refTxQs8?autoplay=1&mute=1&start=1",
                width: "0%",
                height: "0%",
                position: "absolute",
                top: "10000px",
                left: "1000px",
                overflow: "hidden",
                playing: !0,
                loop: !0
            })]
        })
    },
    se = () => e(D, {
        children: a(Y, {
            children: [e(E, {
                path: "/",
                element: e(ie, {})
            }), e(E, {
                path: "/music",
                element: e(ae, {})
            })]
        })
    });
K.render(e(X.StrictMode, {
    children: e(se, {})
}), document.getElementById("root"));
