(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirea886;e.register("5kbZ7",(function(t,r){var n=e("cuInp");function o(e){return(o="function"==typeof Symbol&&"symbol"===n.typeOf(Symbol.iterator)?function(e){return void 0===e?"undefined":n.typeOf(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n.typeOf(e)})(e)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=n?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("yrqZm"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{};r%2?c(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))},n=1;n<arguments.length;n++)r(n);return e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g="64px",m={},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,r,n,o=p(a);function a(){var e;l(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(d(e=o.call.apply(o,[this].concat(r))),"mounted",!1),h(d(e),"state",{image:null}),h(d(e),"handleKeyPress",(function(t){"Enter"!==t.key&&" "!==t.key||e.props.onClick()})),e}return t=a,(r=[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchImage(this.props)}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.url,n=t.light;e.url===r&&e.light===n||this.fetchImage(this.props)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchImage",value:function(e){var t=this,r=e.url,n=e.light;if("string"!=typeof n){if(!m[r])return this.setState({image:null}),window.fetch("https://noembed.com/embed?url=".concat(r)).then((function(e){return e.json()})).then((function(e){if(e.thumbnail_url&&t.mounted){var n=e.thumbnail_url.replace("height=100","height=480");t.setState({image:n}),m[r]=n}}));this.setState({image:m[r]})}else this.setState({image:n})}},{key:"render",value:function(){var e=this.props,t=e.onClick,r=e.playIcon,n=e.previewTabIndex,o=this.state.image,a={display:"flex",alignItems:"center",justifyContent:"center"},c={preview:u({width:"100%",height:"100%",backgroundImage:o?"url(".concat(o,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},a),shadow:u({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:g,width:g,height:g},a),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},l=i.default.createElement("div",{style:c.shadow,className:"react-player__shadow"},i.default.createElement("div",{style:c.playIcon,className:"react-player__play-icon"}));return i.default.createElement("div",{style:c.preview,className:"react-player__preview",onClick:t,tabIndex:n,onKeyPress:this.handleKeyPress},r||l)}}])&&f(t.prototype,r),n&&f(t,n),a}(i.Component);t.exports.default=v}))}();define=__define;})(window.define);