(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequirea886=a),a.register("580bB",(function(n,t){var r,o,l,u;r=n.exports,o="Unlock",l=function(){return N},u=function(e){return N=e},Object.defineProperty(r,o,{get:l,set:u,enumerable:!0,configurable:!0});var i=a("cuInp"),c=a("1vgyn"),s=a("yrqZm"),f=a("5BN27"),m=a("eNGT7"),d=a("4BxPA"),p=a("fVAzy"),g=a("01f3h"),w=a("6AaHU"),E=a("222m3"),v=a("3u496"),y=a("5oDS0"),x=a("6L5Gk"),h=a("7Z3sw"),b=a("ho7V9"),k=a("h7ccf"),T=a("jJ2Ea"),F=a("bDjhz");function S(){var e=i.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1;\n"]);return S=function(){return e},e}function C(){var e=i.taggedTemplateLiteral(["\n  flex: 1;\n  height: 100%;\n  margin-top: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return C=function(){return e},e}function I(){var e=i.taggedTemplateLiteral(["\n  margin-top: 26px;\n  margin-bottom: 15px;\n"]);return I=function(){return e},e}function P(){var e=i.taggedTemplateLiteral(["\n  width: 12px;\n"]);return P=function(){return e},e}function L(){var e=i.taggedTemplateLiteral(["\n  visibility: ",";\n  margin-top: 18px;\n  text-decoration: none;\n  &:hover {\n    color: #999999;\n  }\n"]);return L=function(){return e},e}var M,W,B,j,A,D=function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function l(e){try{i(r.next(e))}catch(e){o(e)}}function u(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,u)}i((r=r.apply(e,n||[])).next())}))},O=f.default.form(M||(M=S())),U=f.default.div(W||(W=C()),(function(e){return e.isFullScreen?"40px":"105px"})),q=f.default(x.Input)(B||(B=I())),z=f.default.div(j||(j=P())),H=f.default(h.Text)(A||(A=L()),(function(e){return e.visibility})),N=function(n){var t=n.unlockSeedAndMnemonic,r=n.isFullScreen,a=m.useTranslation().t,o=d.useForm(),l=o.register,u=o.handleSubmit,i=o.errors,f=o.getValues,w=o.setError,y=F.useWalletMenu().showWalletMenu,x=s.useCallback((function(){return D(void 0,void 0,void 0,e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(f("password"));case 3:p.analytics.capture("unlockWallet"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.t0.message&&e.t0.message.includes("Incorrect password")?w("password",{type:"manual",message:a("unlockErrorIncorrectPassword")}):w("password",{type:"manual",message:a("unlockErrorSomethingWentWrong")});case 10:case"end":return e.stop()}}),n,null,[[0,6]])})))}),[t]),S=function(){p.analytics.capture("forgotPassword"),g.openTabAsync({url:"onboarding.html?restore=true"})};return r?e(s).createElement(T.Body,null,e(s).createElement(O,{onSubmit:u(x)},e(s).createElement(U,{isFullScreen:!0},e(s).createElement(R,null),e(s).createElement(_,{register:l,warning:i.password})),e(s).createElement(G,null),e(s).createElement(V,{error:i.password,onClick:S}))):e(s).createElement(T.Container,null,e(s).createElement(E.Header,{justifyContent:"space-between"},e(s).createElement(b.IconWrapper,{onClick:function(){var n=e(s).createElement(e(s).Fragment,null,e(s).createElement(k.ResetWalletMenuItem,null),e(s).createElement(k.HelpMenuItem,null));y(n)}},e(s).createElement(v.WalletMenuIcon,null)),e(s).createElement(h.Text,{weight:500,size:16,color:"#555555"},"Phantom.app"),e(s).createElement(z,null)),e(s).createElement(T.Body,null,e(s).createElement(O,{id:"unlock-form",onSubmit:u(x)},e(s).createElement(U,{isFullScreen:!1},e(s).createElement(R,null),e(s).createElement(_,{register:l,warning:i.password}),e(s).createElement(V,{error:i.password,onClick:S})))),e(s).createElement(T.Footer,{plain:!0},e(s).createElement(G,{form:"unlock-form"})))},_=function(n){var t=n.register,r=n.warning,a=m.useTranslation().t;return e(s).createElement(q,{name:"password",autoFocus:!0,placeholder:a("unlockPassword"),type:"password",ref:t({required:!0}),warning:r})},R=function(){var n=m.useTranslation().t;return e(s).createElement(y.IconHeader,{icon:e(s).createElement(v.LogoDark,null),primaryText:n("unlockEnterPassword")})},V=function(n){var t=n.onClick,r=n.error,a=m.useTranslation().t;return e(s).createElement(H,{size:16,color:"#666666",onClick:t,visibility:r?"visible":"hidden"},a("unlockForgotPassword"))},G=function(n){var t=m.useTranslation().t;return e(s).createElement(w.Button,Object.assign({type:"submit",theme:"primary"},n),t("unlockActionButtonUnlock"))}}))}();define=__define;})(window.define);