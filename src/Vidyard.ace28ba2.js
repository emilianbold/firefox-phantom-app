(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirea886;e.register("57Bvw",(function(t,n){var r=e("cuInp");function o(e){return(o="function"==typeof Symbol&&"symbol"===r.typeOf(Symbol.iterator)?function(e){return void 0===e?"undefined":r.typeOf(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r.typeOf(e)})(e)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(e("yrqZm")),a=e("jY370"),u=e("hRh3p");function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,r,o=s(l);function l(){var e;f(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(b(e=o.call.apply(o,[this].concat(n))),"callPlayer",a.callPlayer),v(b(e),"mute",(function(){e.setVolume(0)})),v(b(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),v(b(e),"ref",(function(t){e.container=t})),e}return t=l,n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,r=n.playing,o=n.config,i=n.onError,l=n.onDuration,f=e&&e.match(u.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,a.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((function(e){t.container&&(e.api.addReadyListener((function(e,n){t.player=n,t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seek",t.props.onSeek),t.player.on("playerComplete",t.props.onEnded)}),f),e.api.renderPlayer(function(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{};n%2?c(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))},r=1;r<arguments.length;r++)n(r);return e}({uuid:f,container:t.container,autoplay:r?1:0},o.options)),e.api.getPlayerMetadata(f).then((function(e){t.duration=e.length_in_seconds,l(e.length_in_seconds)})))}),i)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){window.VidyardV4.api.destroyPlayer(this.player)}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackSpeed",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.callPlayer("currentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return i.default.createElement("div",{style:e},i.default.createElement("div",{ref:this.ref}))}}],n&&p(t.prototype,n),r&&p(t,r),l}(i.Component);t.exports.default=O,v(O,"displayName","Vidyard"),v(O,"canPlay",u.canPlay.vidyard)}))}();define=__define;})(window.define);