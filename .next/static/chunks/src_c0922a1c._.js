(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navLinks = [
    {
        href: "#cabanas",
        label: "Cabañas"
    },
    {
        href: "#reservas",
        label: "Reservas"
    },
    {
        href: "#opiniones",
        label: "Opiniones"
    },
    {
        href: "#ubicacion",
        label: "Ubicación"
    }
];
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHome = pathname === "/";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 50)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ".concat(scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "🏡"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-xl font-semibold transition-colors duration-300 ".concat(scrolled ? "text-primary" : "text-white"),
                                children: "El Encinar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: isHome ? link.href : "/".concat(link.href),
                                    className: "text-sm font-medium transition-colors duration-300 hover:text-accent ".concat(scrolled ? "text-text-dark" : "text-white/90"),
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: isHome ? "#reservas" : "/#reservas",
                                className: "bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105",
                                children: "Reservar Ahora"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMenuOpen(!menuOpen),
                        className: "md:hidden flex flex-col gap-1.5 p-2",
                        "aria-label": "Menú",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-6 h-0.5 transition-all duration-300 ".concat(menuOpen ? "rotate-45 translate-y-2 bg-text-dark" : scrolled ? "bg-text-dark" : "bg-white")
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-6 h-0.5 transition-all duration-300 ".concat(menuOpen ? "opacity-0" : scrolled ? "bg-text-dark" : "bg-white")
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-6 h-0.5 transition-all duration-300 ".concat(menuOpen ? "-rotate-45 -translate-y-2 bg-text-dark" : scrolled ? "bg-text-dark" : "bg-white")
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ".concat(menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 flex flex-col gap-3",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: isHome ? link.href : "/".concat(link.href),
                                onClick: ()=>setMenuOpen(false),
                                className: "text-text-dark py-2 text-base font-medium hover:text-primary transition-colors",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: isHome ? "#reservas" : "/#reservas",
                            onClick: ()=>setMenuOpen(false),
                            className: "bg-primary text-white text-center py-3 rounded-full font-semibold mt-2 hover:bg-primary-light transition-colors",
                            children: "Reservar Ahora"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Navbar, "O3Og3Vm96FL0UQKVEPKx47Olcq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Hero() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            setLoaded(true);
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-[2000ms]",
                        style: {
                            backgroundImage: "url('/cabana1-1.jpg')",
                            transform: loaded ? "scale(1)" : "scale(1.1)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-accent font-medium tracking-[0.3em] uppercase text-base sm:text-lg mb-6 transition-all duration-1000 delay-300 ".concat(loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                        children: "Naturaleza y confort en perfecta armonía"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-6xl sm:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6 transition-all duration-1000 delay-500 ".concat(loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                        children: [
                            "Cabañas Rurales",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent italic font-medium",
                                children: "El Encinar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/85 text-xl sm:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-all duration-1000 delay-700 ".concat(loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                        children: "Descubre la tranquilidad de nuestras cabañas de madera con piscina panorámica. Un rincón exclusivo donde la naturaleza y el confort se encuentran."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ".concat(loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#reservas",
                            className: "bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2",
                            children: [
                                "Reservar Ahora",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms] ".concat(loaded ? "opacity-100" : "opacity-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#cabanas",
                    className: "flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs uppercase tracking-widest",
                            children: "Desplázate"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 animate-bounce",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Hero, "I8RUn14npbk54TheiKdNt4wCpsU=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CabinCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CabinCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CabinCard(param) {
    let { cabin, index } = param;
    _s();
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const placeholderImages = [
        "/cabana1-1.jpg",
        "/cabana2-9.jpg"
    ];
    const image = placeholderImages[index % 2];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-72 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: cabin.name,
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                        onLoad: ()=>setImageLoaded(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CabinCard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CabinCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary font-bold text-sm",
                            children: [
                                cabin.pricePerNight,
                                "€",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-text-muted font-normal text-xs",
                                    children: "/noche"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CabinCard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CabinCard.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CabinCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-primary/90 text-white text-xs px-3 py-1 rounded-full font-medium",
                                children: [
                                    cabin.capacity,
                                    " huéspedes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CabinCard.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-white/90 text-text-dark text-xs px-3 py-1 rounded-full font-medium",
                                children: [
                                    cabin.bedrooms,
                                    " hab. · ",
                                    cabin.bathrooms,
                                    " baño"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CabinCard.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CabinCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CabinCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-2xl font-bold text-text-dark mb-2",
                        children: cabin.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/CabinCard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-muted leading-relaxed mb-4",
                        children: cabin.shortDescription
                    }, void 0, false, {
                        fileName: "[project]/src/components/CabinCard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: [
                            cabin.features.slice(0, 4).map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-beige text-secondary text-xs px-3 py-1.5 rounded-full font-medium",
                                    children: feature
                                }, feature, false, {
                                    fileName: "[project]/src/components/CabinCard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)),
                            cabin.features.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-beige text-secondary text-xs px-3 py-1.5 rounded-full font-medium",
                                children: [
                                    "+",
                                    cabin.features.length - 4,
                                    " más"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CabinCard.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CabinCard.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/propiedades/".concat(cabin.slug),
                        className: "block w-full text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg",
                        children: "Ver Detalles"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CabinCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CabinCard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CabinCard.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(CabinCard, "fJz4KtRhxnyPSE31FwcDKA7uz50=");
_c = CabinCard;
var _c;
__turbopack_context__.k.register(_c, "CabinCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cabins",
    ()=>cabins,
    "pool",
    ()=>pool,
    "reviews",
    ()=>reviews,
    "services",
    ()=>services
]);
const cabins = [
    {
        id: "cabana-1",
        name: "Cabaña El Roble",
        slug: "el-roble",
        description: "🌿 Tu refugio rural cerca de Madrid\n\nEscápate del ruido y disfruta de una acogedora cabaña en plena naturaleza, rodeada de tranquilidad y con vistas espectaculares. A tan solo 5 minutos en coche del pueblo más cercano y con conexión rápida a Madrid en transporte público, podrás desconectar sin renunciar a la comodidad.\n\n🏡 Un espacio pensado para disfrutar\n\nLa cabaña tiene capacidad para hasta 5 personas y cuenta con todas las comodidades:\n• Salón con cocina integrada\n• Baño con ducha\n• Dormitorio con mosquiteras\n• Sofá cama adicional\n\nPerfecta para una escapada en pareja, con amigos o en familia.\n\n🌞 Exterior y actividades\n\nDisfruta de un amplio espacio exterior ideal para relajarte o compartir momentos:\n• Piscina disponible en verano ☀️\n• Zona chill out para las noches bajo las estrellas\n• Barbacoa y mesa para reuniones\n• Espacio para niños y mascotas\n\nTambién podrás hacer rutas, paseos en bici o visitar lugares cercanos como Patones de Arriba o El Escorial.\n\n🐾 Naturaleza y animales\n\nJunto a la cabaña hay una pequeña granja con animales rescatados. Si quieres interactuar con ellos, solo tienes que pedirnos permiso 😊\n\n🎉 Perfecto para escapadas y celebraciones\n\nUn lugar ideal para desconectar o reunirte con los tuyos en un entorno natural, con posibilidad de ampliar la experiencia con tiendas de campaña (bajo solicitud).",
        shortDescription: "Tu refugio rural cerca de Madrid. Acogedora cabaña en plena naturaleza con vistas espectaculares, piscina y zona chill out.",
        capacity: 5,
        bedrooms: 1,
        bathrooms: 1,
        beds: 3,
        pricePerNight: 90,
        priceWeekend: 130,
        weeklyDiscount: 10,
        minStay: 2,
        maxStay: 180,
        features: [
            "Vistas panorámicas",
            "Vistas a la montaña",
            "Cocina completa",
            "Baño con ducha",
            "Dormitorio con mosquiteras",
            "Sofá cama adicional",
            "Aire acondicionado",
            "Calefacción",
            "Lavadora",
            "TV",
            "Zona para trabajar",
            "Entrada privada",
            "Patio trasero",
            "Tumbonas",
            "Barbacoa",
            "Aparcamiento gratuito",
            "Acceso piscina",
            "Admite mascotas",
            "Personal 24h",
            "Llegada autónoma"
        ],
        images: [
            "/cabana1-1.jpg",
            "/cabana1-2.jpg",
            "/cabana1-3.jpg",
            "/cabana1-4.jpg",
            "/cabana1-5.jpg",
            "/cabana1-7.jpg",
            "/cabana1-8.jpg",
            "/cabana1-9.jpg",
            "/cabana1-10.jpg",
            "/cabana1-11.jpg",
            "/cabana1-12.jpg",
            "/cabana1-13.jpg",
            "/cabana1-14.jpg",
            "/cabana1-15.jpg",
            "/cabana1-16.jpg",
            "/cabana1-17.jpg",
            "/cabana1-18.jpg",
            "/cabana1-19.jpg",
            "/cabana1-20.jpg",
            "/cabana1-21.jpg",
            "/cabana1-22.jpg",
            "/cabana1-23.jpg",
            "/cabana1-24.jpg",
            "/cabana1-25.jpg",
            "/cabana1-26.jpg",
            "/cabana1-27.jpg",
            "/cabana1-28.jpg",
            "/cabana1-29.jpg",
            "/cabana1-30.jpg"
        ],
        isPrimary: true
    },
    {
        id: "cabana-2",
        name: "Cabaña El Encinar",
        slug: "el-encinar",
        description: "🌄 Una cabaña única con vistas increíbles\n\nDescubre una acogedora cabaña tipo loft con personalidad propia, rodeada de naturaleza y con unas vistas espectaculares. Un lugar perfecto para desconectar y disfrutar de la tranquilidad, a tan solo 30 minutos de Madrid.\n\n🏡 Espacio cómodo y totalmente equipado\n\nLa cabaña, de estilo loft y con abundante luz natural, está pensada para ofrecerte una estancia cómoda y relajante:\n\n• Capacidad para hasta 4 personas\n• Cama de matrimonio + sofá cama\n• Cocina completamente equipada\n• Baño con ducha\n• Aire acondicionado y calefacción\n\nIncluye todo lo necesario: lavadora, secadora, lavavajillas, horno, microondas, cafetera y más.\n\n🌿 Exterior para disfrutar todo el día\n\nRelájate en su terraza privada de 20 m² con vistas abiertas al campo:\n\n• Barbacoa\n• Zona chill out\n• Mesa exterior\n\nAdemás, podrás acceder a zonas comunes como piscina y jacuzzi (según disponibilidad).\n\n🐾 Naturaleza, finca y convivencia\n\nLa cabaña se encuentra en una finca de más de 4 hectáreas, donde hay otras viviendas independientes. Cada alojamiento mantiene su privacidad, aunque los accesos y espacios exteriores son compartidos, por lo que es posible coincidir con otros huéspedes.\n\nTambién contamos con animales de granja y huerto propio 🌱\n\n🐶 Mascotas bienvenidas\n\nPuedes venir con tu mascota, siempre que sea sociable, esté bien educada y bajo control. Es importante respetar a otros huéspedes y animales de la finca.\n\n📍 Ubicación y acceso\n\nSituada en plena naturaleza:\n\n• A 6 km del pueblo más cercano\n• A 10 km de estación de tren (Colmenar Viejo)\n• A 30 minutos de Madrid\n\nEl acceso es por camino de tierra, transitable con vehículos normales. Es imprescindible disponer de coche, aunque ofrecemos recogida en estación bajo solicitud.\n\n🎉 Ideal para escapadas o pequeñas celebraciones\n\nUn espacio perfecto para desconectar en pareja, con amigos o en familia. También existe la posibilidad de organizar pequeñas reuniones utilizando zonas comunes como la piscina (bajo reserva y suplemento).",
        shortDescription: "Cabaña loft única con vistas espectaculares, terraza de 20 m², barbacoa y acceso a piscina. Perfecta para desconectar a 30 min de Madrid.",
        capacity: 4,
        bedrooms: 1,
        bathrooms: 1,
        beds: 2,
        pricePerNight: 89,
        priceWeekend: 110,
        weeklyDiscount: 10,
        minStay: 2,
        maxStay: 1125,
        features: [
            "Agua caliente",
            "Agua corriente con temperatura suficiente",
            "Aire acondicionado",
            "Almohadas y mantas adicionales",
            "Alojamiento de una altura",
            "Aparcamiento gratuito en instalaciones",
            "Bandeja de repostería",
            "Barbacoa",
            "Batidora",
            "Botiquín",
            "Cafetera",
            "Café",
            "Calefacción",
            "Cocina completa",
            "Comedor al aire libre",
            "Congelador",
            "Copas de vino",
            "Disponible para estancias largas",
            "Entrada privada",
            "Espacio para guardar ropa",
            "Fogones",
            "Gel de ducha",
            "Hervidor de agua",
            "Horno",
            "Juegos de mesa",
            "Kitchenette",
            "Lavadora",
            "Libros y material de lectura",
            "Limpieza disponible durante estancia",
            "Mesa de comedor",
            "Microondas",
            "Mobiliario exterior",
            "Mosquitera",
            "Nevera",
            "Patio o balcón",
            "Perchas",
            "Persianas o cortinas opacas",
            "Piscina compartida",
            "Plancha",
            "Platos y cubiertos",
            "Productos de limpieza",
            "Ropa de cama algodón",
            "Salón privado",
            "Secador de pelo",
            "Secadora",
            "Servicios básicos",
            "Tendedero para ropa",
            "Tostadora",
            "Tumbonas",
            "TV",
            "Utensilios básicos de cocina",
            "Utensilios de barbacoa",
            "Zona para trabajar",
            "Admite mascotas"
        ],
        images: [
            "/cabana2-9.jpg",
            "/cabana2-1.jpg",
            "/cabana2-2.jpg",
            "/cabana2-3.jpg",
            "/cabana2-4.jpg",
            "/cabana2-5.jpg",
            "/cabana2-6.jpg",
            "/cabana2-7.jpg",
            "/cabana2-8.jpg",
            "/cabana2-10.jpg",
            "/cabana2-11.jpg",
            "/cabana2-12.jpg",
            "/cabana2-13.jpg",
            "/cabana2-14.jpg",
            "/cabana2-15.jpg",
            "/cabana2-16.jpg",
            "/cabana2-17.jpg",
            "/cabana2-18.jpg",
            "/cabana2-19.jpg",
            "/cabana2-20.jpg",
            "/cabana2-21.jpg",
            "/cabana2-22.jpg",
            "/cabana2-23.jpg",
            "/cabana2-24.jpg",
            "/cabana2-25.jpg",
            "/cabana2-26.jpg",
            "/cabana2-27.jpg",
            "/cabana2-28.jpg",
            "/cabana2-29.jpg",
            "/cabana2-30.jpg",
            "/cabana2-31.jpg",
            "/cabana2-32.jpg",
            "/cabana2-33.jpg",
            "/cabana2-34.jpg",
            "/cabana2-35.jpg",
            "/cabana2-36.jpg",
            "/cabana2-37.jpg",
            "/cabana2-38.jpg",
            "/cabana2-39.jpg"
        ],
        isPrimary: true
    }
];
const pool = {
    name: "Piscina Panorámica",
    slug: "piscina",
    description: "Nuestra piscina de diseño moderno con vistas panorámicas al valle es el lugar perfecto para refrescarse y relajarse. Rodeada de zonas verdes y con un cómodo solárium, ofrece un espacio exclusivo para nuestros huéspedes.\n\n🏊 Diseño y características\n\nLa piscina está cuidadosamente diseñada para maximizar las vistas y el confort:\n\n• Vistas panorámicas al valle\n• Zona de solárium con tumbonas\n• Duchas exteriores para refrescarse\n• Zona lounge para relajarse después del baño\n• Áreas verdes alrededor para privacidad\n• Acceso exclusivo para huéspedes de las cabañas\n\n🌞 Abierta en verano\n\nDisfruta de la piscina durante los meses de verano, ideal para refrescarte después de explorar la naturaleza o simplemente para pasar un día relajante.\n\n💎 El lugar perfecto para relajarse\n\nSi te hospedas en cualquiera de nuestras cabañas, tendrás acceso gratuito a la piscina. Un oasis de tranquilidad rodeado de naturaleza.",
    features: [
        "Vistas panorámicas",
        "Zona solárium",
        "Tumbonas cómodas",
        "Duchas exteriores",
        "Zona lounge",
        "Áreas verdes",
        "Acceso exclusivo",
        "Agua cristalina"
    ],
    images: [
        "/piscina-1.jpg",
        "/piscina-2.jpg",
        "/piscina-3.jpg",
        "/piscina-4.jpg",
        "/piscina-5.jpg",
        "/piscina-6.jpg"
    ]
};
const services = [
    {
        icon: "🏊",
        title: "Piscina Privada",
        description: "Piscina de diseño con vistas panorámicas al valle, zona solárium y tumbonas exclusivas para huéspedes."
    },
    {
        icon: "🌿",
        title: "Naturaleza Pura",
        description: "Rodeados de encinas y naturaleza virgen. Senderos para pasear y descubrir la flora y fauna local."
    },
    {
        icon: "📶",
        title: "WiFi Gratuito",
        description: "Conexión WiFi de alta velocidad en todas las cabañas. Desconecta o trabaja, tú decides."
    },
    {
        icon: "🔥",
        title: "Barbacoa",
        description: "Cada cabaña cuenta con su propia zona de barbacoa para disfrutar de comidas al aire libre."
    },
    {
        icon: "🅿️",
        title: "Parking Privado",
        description: "Aparcamiento gratuito junto a las cabañas. Acceso fácil y seguro para tu vehículo."
    },
    {
        icon: "🌅",
        title: "Vistas al Valle",
        description: "Disfruta de atardeceres espectaculares desde tu terraza privada con vistas al valle."
    },
    {
        icon: "🛏️",
        title: "Ropa de Cama Premium",
        description: "Sábanas y toallas de alta calidad para que tu descanso sea perfecto."
    },
    {
        icon: "🏡",
        title: "Terraza Privada",
        description: "Cada cabaña tiene su propia terraza amueblada con zona chill-out para relajarte."
    }
];
const reviews = [
    {
        id: 1,
        name: "María García",
        avatar: "MG",
        rating: 5,
        date: "Febrero 2026",
        text: "Un lugar mágico. Las cabañas son preciosas y la piscina con esas vistas es increíble. Volveremos seguro. El trato del anfitrión fue excepcional.",
        cabin: "Cabaña El Roble"
    },
    {
        id: 2,
        name: "Carlos Martínez",
        avatar: "CM",
        rating: 5,
        date: "Enero 2026",
        text: "Perfecto para desconectar. Hemos pasado un fin de semana inolvidable. La cabaña estaba impecable y la zona de barbacoa es genial. 100% recomendable.",
        cabin: "Cabaña El Encinar"
    },
    {
        id: 3,
        name: "Laura Sánchez",
        avatar: "LS",
        rating: 5,
        date: "Diciembre 2025",
        text: "Nos encantó la terraza con las luces y la pérgola. Cenamos bajo las estrellas y fue una experiencia única. La piscina panorámica es espectacular.",
        cabin: "Cabaña El Encinar"
    },
    {
        id: 4,
        name: "Javier López",
        avatar: "JL",
        rating: 4,
        date: "Noviembre 2025",
        text: "Muy buen alojamiento rural. Tranquilidad total y naturaleza por todos lados. Las vistas desde la piscina son impresionantes. Ideal para familias.",
        cabin: "Cabaña El Roble"
    },
    {
        id: 5,
        name: "Ana Rodríguez",
        avatar: "AR",
        rating: 5,
        date: "Octubre 2025",
        text: "Sin duda uno de los mejores sitios en los que hemos estado. Todo cuidado al detalle, la decoración rústica es preciosa y se respira paz.",
        cabin: "Cabaña El Roble"
    },
    {
        id: 6,
        name: "Pedro Fernández",
        avatar: "PF",
        rating: 5,
        date: "Septiembre 2025",
        text: "Fuimos con amigos y lo pasamos genial. La zona chill-out de la cabaña El Encinar es perfecta para reuniones. Repetiremos en verano por la piscina.",
        cabin: "Cabaña El Encinar"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeader(param) {
    let { subtitle, title, description, light = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium tracking-[0.25em] uppercase mb-3 ".concat(light ? "text-accent" : "text-primary"),
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ".concat(light ? "text-white" : "text-text-dark"),
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeader.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 h-1 mx-auto rounded-full mb-6 ".concat(light ? "bg-accent" : "bg-primary")
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeader.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-2xl mx-auto text-lg leading-relaxed ".concat(light ? "text-white/70" : "text-text-muted"),
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeader.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SectionHeader.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BookingCalendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionHeader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Simulate some booked dates
const getBookedDates = (cabinId)=>{
    const booked = [];
    const now = new Date();
    // Add some random booked dates for realism
    if (cabinId === "cabana-1") {
        for(let i = 5; i <= 8; i++){
            const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
            booked.push(d);
        }
        for(let i = 15; i <= 18; i++){
            const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
            booked.push(d);
        }
    } else {
        for(let i = 3; i <= 5; i++){
            const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
            booked.push(d);
        }
        for(let i = 20; i <= 24; i++){
            const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
            booked.push(d);
        }
    }
    return booked;
};
function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isDateInRange(date, start, end) {
    return date >= start && date <= end;
}
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Monday start
}
const WEEKDAYS = [
    "Lu",
    "Ma",
    "Mi",
    "Ju",
    "Vi",
    "Sá",
    "Do"
];
const MONTHS = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
function MiniCalendar(param) {
    let { year, month, onMonthChange, startDate, endDate, onDateClick, bookedDates } = param;
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = [];
    for(let i = 0; i < firstDay; i++){
        days.push(null);
    }
    for(let d = 1; d <= daysInMonth; d++){
        days.push(new Date(year, month, d));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onMonthChange(-1),
                        className: "p-2 hover:bg-beige rounded-lg transition-colors text-text-muted hover:text-text-dark",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingCalendar.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-display text-lg font-semibold text-text-dark",
                        children: [
                            MONTHS[month],
                            " ",
                            year
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingCalendar.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onMonthChange(1),
                        className: "p-2 hover:bg-beige rounded-lg transition-colors text-text-muted hover:text-text-dark",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingCalendar.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookingCalendar.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1 mb-2",
                children: WEEKDAYS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-xs font-medium text-text-muted py-2",
                        children: d
                    }, d, false, {
                        fileName: "[project]/src/components/BookingCalendar.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/BookingCalendar.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1",
                children: days.map((date, i)=>{
                    if (!date) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, "empty-".concat(i), false, {
                            fileName: "[project]/src/components/BookingCalendar.tsx",
                            lineNumber: 140,
                            columnNumber: 20
                        }, this);
                    }
                    const isPast = date < today;
                    const isBooked = bookedDates.some((b)=>isSameDay(b, date));
                    const isDisabled = isPast || isBooked;
                    const isStart = startDate && isSameDay(date, startDate);
                    const isEnd = endDate && isSameDay(date, endDate);
                    const isInRange = startDate && endDate && isDateInRange(date, startDate, endDate);
                    const isToday = isSameDay(date, today);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: isDisabled,
                        onClick: ()=>onDateClick(date),
                        className: "relative aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-200 ".concat(isDisabled ? "text-text-muted/40 cursor-not-allowed" : isStart || isEnd ? "bg-primary text-white font-bold shadow-md" : isInRange ? "bg-primary/15 text-primary font-medium" : isToday ? "bg-accent/20 text-accent font-bold ring-2 ring-accent/50" : "text-text-dark hover:bg-beige cursor-pointer"),
                        children: [
                            date.getDate(),
                            isBooked && !isPast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 171,
                                columnNumber: 17
                            }, this)
                        ]
                    }, date.toISOString(), true, {
                        fileName: "[project]/src/components/BookingCalendar.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/BookingCalendar.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookingCalendar.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c = MiniCalendar;
function BookingCalendar(param) {
    let { initialProperty } = param;
    var _booking_startDate, _booking_endDate;
    _s();
    const initialCabinId = (initialProperty === null || initialProperty === void 0 ? void 0 : initialProperty.id) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cabins"][0].id;
    const [booking, setBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        cabinId: initialCabinId,
        startDate: null,
        endDate: null,
        guests: 2,
        name: "",
        email: "",
        phone: ""
    });
    const [calendarMonth, setCalendarMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getMonth());
    const [calendarYear, setCalendarYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dates");
    const selectedCabin = booking.cabinId === "piscina" ? {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pool"].name,
        shortDescription: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pool"].description,
        pricePerNight: 0,
        capacity: 999
    } : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cabins"].find((c)=>c.id === booking.cabinId);
    const bookedDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BookingCalendar.useMemo[bookedDates]": ()=>getBookedDates(booking.cabinId)
    }["BookingCalendar.useMemo[bookedDates]"], [
        booking.cabinId
    ]);
    const handleMonthChange = (dir)=>{
        let newMonth = calendarMonth + dir;
        let newYear = calendarYear;
        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        } else if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }
        setCalendarMonth(newMonth);
        setCalendarYear(newYear);
    };
    const handleDateClick = (date)=>{
        if (!booking.startDate || booking.startDate && booking.endDate) {
            setBooking({
                ...booking,
                startDate: date,
                endDate: null
            });
        } else {
            if (date < booking.startDate) {
                setBooking({
                    ...booking,
                    startDate: date,
                    endDate: null
                });
            } else {
                // Check if any booked date is in range
                const hasBookedInRange = bookedDates.some((b)=>b > booking.startDate && b < date);
                if (hasBookedInRange) {
                    setBooking({
                        ...booking,
                        startDate: date,
                        endDate: null
                    });
                } else {
                    setBooking({
                        ...booking,
                        endDate: date
                    });
                }
            }
        }
    };
    const nights = booking.startDate && booking.endDate ? Math.ceil((booking.endDate.getTime() - booking.startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0;
    // Calculate price with weekend and weekly discounts
    const calculatePrice = ()=>{
        if (nights === 0) return 0;
        let total = 0;
        let currentDate = new Date(booking.startDate);
        const endDate = new Date(booking.endDate);
        // Iterate through each night
        while(currentDate < endDate){
            const dayOfWeek = currentDate.getDay();
            const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Friday or Saturday
            let nightPrice = isWeekend ? selectedCabin.priceWeekend : selectedCabin.pricePerNight;
            total += nightPrice;
            currentDate.setDate(currentDate.getDate() + 1);
        }
        // Apply weekly discount if stay is 7+ nights
        if (nights >= 7 && selectedCabin.weeklyDiscount) {
            const discount = total * selectedCabin.weeklyDiscount / 100;
            total -= discount;
        }
        return Math.round(total);
    };
    const totalPrice = calculatePrice();
    const handleSubmit = ()=>{
        setSubmitted(true);
        setTimeout(()=>{
            setSubmitted(false);
            setStep("dates");
            setBooking({
                cabinId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cabins"][0].id,
                startDate: null,
                endDate: null,
                guests: 2,
                name: "",
                email: "",
                phone: ""
            });
        }, 4000);
    };
    if (submitted) {
        var _booking_startDate1, _booking_endDate1;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "reservas",
            className: "py-24 px-4 bg-primary-dark",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl p-12 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-6",
                            children: "✅"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingCalendar.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-3xl font-bold text-text-dark mb-4",
                            children: "¡Reserva Confirmada!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingCalendar.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-text-muted text-lg mb-2",
                            children: [
                                "Hemos recibido tu solicitud para",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: selectedCabin.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingCalendar.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-text-muted",
                            children: [
                                (_booking_startDate1 = booking.startDate) === null || _booking_startDate1 === void 0 ? void 0 : _booking_startDate1.toLocaleDateString("es-ES"),
                                " →",
                                " ",
                                (_booking_endDate1 = booking.endDate) === null || _booking_endDate1 === void 0 ? void 0 : _booking_endDate1.toLocaleDateString("es-ES"),
                                " · ",
                                nights,
                                " noches ·",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        totalPrice,
                                        "€"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingCalendar.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingCalendar.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary font-medium mt-4",
                            children: "Te enviaremos un email de confirmación en breve."
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingCalendar.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingCalendar.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BookingCalendar.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/BookingCalendar.tsx",
            lineNumber: 302,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reservas",
        className: "py-24 px-4 bg-primary-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    subtitle: "Reserva tu escapada",
                    title: "Calendario de Disponibilidad",
                    description: "Selecciona tu cabaña, elige las fechas y disfruta. Cada cabaña tiene su calendario independiente.",
                    light: true
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingCalendar.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                !initialProperty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4 mb-10 flex-wrap",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cabins"].map((cabin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setBooking({
                                        ...booking,
                                        cabinId: cabin.id,
                                        startDate: null,
                                        endDate: null
                                    });
                                    setStep("dates");
                                },
                                className: "px-6 py-3 rounded-xl font-semibold transition-all duration-300 ".concat(booking.cabinId === cabin.id ? "bg-accent text-primary-dark shadow-lg" : "bg-white/10 text-white/70 hover:bg-white/20"),
                                children: cabin.name
                            }, cabin.id, false, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 341,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setBooking({
                                    ...booking,
                                    cabinId: "piscina",
                                    startDate: null,
                                    endDate: null
                                });
                                setStep("dates");
                            },
                            className: "px-6 py-3 rounded-xl font-semibold transition-all duration-300 ".concat(booking.cabinId === "piscina" ? "bg-accent text-primary-dark shadow-lg" : "bg-white/10 text-white/70 hover:bg-white/20"),
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pool"].name
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingCalendar.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingCalendar.tsx",
                    lineNumber: 339,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto",
                    children: step === "dates" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 sm:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-xl font-semibold text-text-dark mb-6",
                                        children: "Selecciona tus fechas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 387,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniCalendar, {
                                        year: calendarYear,
                                        month: calendarMonth,
                                        onMonthChange: handleMonthChange,
                                        startDate: booking.startDate,
                                        endDate: booking.endDate,
                                        onDateClick: handleDateClick,
                                        bookedDates: bookedDates
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 mt-4 text-xs text-text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 bg-primary rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Seleccionado"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 bg-primary/15 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Rango"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 403,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 bg-red-100 rounded relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingCalendar.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    "Reservado"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 386,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 sm:p-8 bg-beige/50 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-xl font-semibold text-text-dark mb-2",
                                                children: selectedCabin.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 418,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-text-muted text-sm mb-6",
                                                children: selectedCabin.shortDescription
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-text-muted",
                                                                children: "Entrada"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-text-dark",
                                                                children: booking.startDate ? booking.startDate.toLocaleDateString("es-ES", {
                                                                    weekday: "short",
                                                                    day: "numeric",
                                                                    month: "short"
                                                                }) : "Selecciona fecha"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-text-muted",
                                                                children: "Salida"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-text-dark",
                                                                children: booking.endDate ? booking.endDate.toLocaleDateString("es-ES", {
                                                                    weekday: "short",
                                                                    day: "numeric",
                                                                    month: "short"
                                                                }) : "Selecciona fecha"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-text-muted",
                                                                children: "Huéspedes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setBooking({
                                                                                ...booking,
                                                                                guests: Math.max(1, booking.guests - 1)
                                                                            }),
                                                                        className: "w-7 h-7 rounded-full bg-beige-dark flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-colors",
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                        lineNumber: 455,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium w-4 text-center",
                                                                        children: booking.guests
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                        lineNumber: 466,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setBooking({
                                                                                ...booking,
                                                                                guests: Math.min(selectedCabin.capacity, booking.guests + 1)
                                                                            }),
                                                                        className: "w-7 h-7 rounded-full bg-beige-dark flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-colors",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 425,
                                                columnNumber: 19
                                            }, this),
                                            nights > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-beige-dark pt-4 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-text-muted",
                                                                children: [
                                                                    selectedCabin.pricePerNight,
                                                                    "€ × ",
                                                                    nights,
                                                                    " noches"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: [
                                                                    totalPrice,
                                                                    "€"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-lg font-bold text-primary",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    totalPrice,
                                                                    "€"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                                lineNumber: 497,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 488,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep("details"),
                                        disabled: !booking.startDate || !booking.endDate,
                                        className: "w-full mt-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ".concat(booking.startDate && booking.endDate ? "bg-primary text-white hover:bg-primary-light hover:shadow-lg" : "bg-beige-dark text-text-muted cursor-not-allowed"),
                                        children: "Continuar Reserva"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 503,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 416,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingCalendar.tsx",
                        lineNumber: 384,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 sm:p-10 max-w-lg mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep("dates"),
                                className: "text-primary hover:text-primary-light font-medium text-sm mb-6 flex items-center gap-1",
                                children: "← Cambiar fechas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 518,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-2xl font-bold text-text-dark mb-2",
                                children: "Completa tu Reserva"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 525,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-muted text-sm mb-6",
                                children: [
                                    selectedCabin.name,
                                    " ·",
                                    " ",
                                    (_booking_startDate = booking.startDate) === null || _booking_startDate === void 0 ? void 0 : _booking_startDate.toLocaleDateString("es-ES"),
                                    " →",
                                    " ",
                                    (_booking_endDate = booking.endDate) === null || _booking_endDate === void 0 ? void 0 : _booking_endDate.toLocaleDateString("es-ES"),
                                    " · ",
                                    nights,
                                    " noches · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            totalPrice,
                                            "€"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 532,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 528,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text-dark mb-1.5",
                                                children: "Nombre completo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 537,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: booking.name,
                                                onChange: (e)=>setBooking({
                                                        ...booking,
                                                        name: e.target.value
                                                    }),
                                                placeholder: "Tu nombre",
                                                className: "w-full px-4 py-3 border border-beige-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 540,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 536,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text-dark mb-1.5",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: booking.email,
                                                onChange: (e)=>setBooking({
                                                        ...booking,
                                                        email: e.target.value
                                                    }),
                                                placeholder: "tu@email.com",
                                                className: "w-full px-4 py-3 border border-beige-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 550,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text-dark mb-1.5",
                                                children: "Teléfono"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 565,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                value: booking.phone,
                                                onChange: (e)=>setBooking({
                                                        ...booking,
                                                        phone: e.target.value
                                                    }),
                                                placeholder: "+34 600 000 000",
                                                className: "w-full px-4 py-3 border border-beige-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                                lineNumber: 568,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.tsx",
                                        lineNumber: 564,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 535,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: !booking.name || !booking.email || !booking.phone,
                                className: "w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ".concat(booking.name && booking.email && booking.phone ? "bg-primary text-white hover:bg-primary-light hover:shadow-xl" : "bg-beige-dark text-text-muted cursor-not-allowed"),
                                children: [
                                    "Confirmar Reserva · ",
                                    totalPrice,
                                    "€"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 580,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-text-muted text-xs mt-4",
                                children: "Recibirás un email de confirmación. Cancelación gratuita hasta 48h antes."
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingCalendar.tsx",
                                lineNumber: 592,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingCalendar.tsx",
                        lineNumber: 517,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingCalendar.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingCalendar.tsx",
            lineNumber: 329,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BookingCalendar.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
}
_s(BookingCalendar, "7eK5iVjKE/Nu2axYlWKMNkurzRc=");
_c1 = BookingCalendar;
var _c, _c1;
__turbopack_context__.k.register(_c, "MiniCalendar");
__turbopack_context__.k.register(_c1, "BookingCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionHeader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StarRating(param) {
    let { rating } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-0.5",
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-4 h-4 ".concat(star <= rating ? "text-accent" : "text-beige-dark"),
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, star, false, {
                fileName: "[project]/src/components/Reviews.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Reviews.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = StarRating;
function Reviews() {
    _s();
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const averageRating = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].reduce((sum, r)=>sum + r.rating, 0) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "opiniones",
        className: "py-24 px-4 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    subtitle: "Lo que dicen nuestros huéspedes",
                    title: "Opiniones Reales"
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-3 bg-beige px-6 py-3 rounded-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-3xl font-bold text-primary",
                                children: averageRating.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reviews.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                        rating: Math.round(averageRating)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Reviews.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-text-muted text-xs mt-0.5",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length,
                                            " valoraciones"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Reviews.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Reviews.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].slice(0, visibleCount).map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary font-bold text-sm",
                                                children: review.avatar
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Reviews.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Reviews.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-text-dark text-sm",
                                                    children: review.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Reviews.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-text-muted text-xs",
                                                    children: review.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Reviews.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Reviews.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Reviews.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                    rating: review.rating
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Reviews.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-muted text-sm leading-relaxed mt-3 mb-3",
                                    children: [
                                        "“",
                                        review.text,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Reviews.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full",
                                    children: review.cabin
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Reviews.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, review.id, true, {
                            fileName: "[project]/src/components/Reviews.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                visibleCount < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setVisibleCount(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length),
                        className: "text-primary hover:text-primary-light font-semibold text-sm transition-colors",
                        children: "Ver más opiniones →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Reviews.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Reviews.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Reviews.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Reviews.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Reviews, "8v1UOlIva8JKO9XRaURRr6jlLc8=");
_c1 = Reviews;
var _c, _c1;
__turbopack_context__.k.register(_c, "StarRating");
__turbopack_context__.k.register(_c1, "Reviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Location.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Location
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Location() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Location.useEffect": ()=>{
            // Ocultar el popup del mapa después de que cargue
            const timer = setTimeout({
                "Location.useEffect.timer": ()=>{
                    const button = document.querySelector('[aria-label="Cerrar"]');
                    if (button) {
                        button.click();
                    }
                }
            }["Location.useEffect.timer"], 500);
            return ({
                "Location.useEffect": ()=>clearTimeout(timer)
            })["Location.useEffect"];
        }
    }["Location.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "ubicacion",
        className: "py-24 px-4 bg-cream",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    subtitle: "¿Dónde estamos?",
                    title: "Nuestra Ubicación",
                    description: "Situadas en plena naturaleza, nuestras cabañas ofrecen el retiro perfecto sin renunciar a la accesibilidad."
                }, void 0, false, {
                    fileName: "[project]/src/components/Location.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[350px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.5692430625545!2d-3.6703159328186032!3d40.683459174139415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43d7508dcc9f11%3A0xc2df516480dd0f57!2sChica%20de%20Navalmelendro!5e0!3m2!1ses!2ses!4v1774733520225!5m2!1ses!2ses",
                                width: "100%",
                                height: "100%",
                                style: {
                                    border: 0
                                },
                                allowFullScreen: true,
                                loading: "lazy",
                                referrerPolicy: "no-referrer-when-downgrade",
                                title: "Ubicación Chica de Navalmelendro"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Location.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Location.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl p-6 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl",
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Location.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display text-lg font-semibold text-text-dark mb-1",
                                                        children: "Dirección"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Location.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-text-muted",
                                                        children: [
                                                            "Finca Navalmelendro, Ctra. M104 km 6,5",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/Location.tsx",
                                                                lineNumber: 53,
                                                                columnNumber: 21
                                                            }, this),
                                                            "28770, Madrid, España"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Location.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Location.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Location.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Location.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl p-6 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl",
                                                children: "🚗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Location.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display text-lg font-semibold text-text-dark mb-1",
                                                        children: "Cómo Llegar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Location.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-text-muted",
                                                        children: "A 15 minutos del pueblo más cercano. Carretera asfaltada hasta la entrada. Parking privado incluido."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Location.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Location.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Location.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Location.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl p-6 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl",
                                                children: "📞"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Location.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display text-lg font-semibold text-text-dark mb-1",
                                                        children: "Contacto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Location.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-text-muted",
                                                        children: [
                                                            "Teléfono:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "tel:+34647622690",
                                                                className: "text-primary hover:text-primary-light font-medium",
                                                                children: "+34 647 622 690"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Location.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/Location.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Email:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "mailto:info@cabanasencinar.es",
                                                                className: "text-primary hover:text-primary-light font-medium",
                                                                children: "info@cabanasencinar.es"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Location.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Location.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Location.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Location.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Location.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl p-6 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl",
                                                children: "⏰"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Location.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display text-lg font-semibold text-text-dark mb-1",
                                                        children: "Horarios"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Location.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-text-muted",
                                                        children: [
                                                            "Check-in: 15:00 – 20:00",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/Location.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Check-out: antes de las 12:00"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Location.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Location.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Location.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Location.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Location.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Location.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Location.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Location.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Location, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Location;
var _c;
__turbopack_context__.k.register(_c, "Location");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c0922a1c._.js.map