(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequirea886;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},r.parcelRequirea886=o);var i=o("yrqZm"),a=o("jLXMA"),l=o("1eJXt");o("goCP2");var u=o("edC09"),d=o("aq3jz");u.initSentry();var c=function(){var e;try{e=new URLSearchParams(window.location.search).get("origin")||"",new URL(e)}catch(r){e=""}return e},f=function(){var r=i.useMemo(c,[]);return e(i).createElement(d.SentryErrorBoundary,null,e(i).createElement(l.BlocklistOrigin,{origin:r}))};a.render(e(i).createElement(f,null),document.getElementById("root"))}();define=__define;})(window.define);