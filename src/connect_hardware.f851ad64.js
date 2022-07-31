(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequirea886=a);var o=a("cuInp"),i=a("1vgyn"),c=a("yrqZm"),l=a("jLXMA"),u=a("5BN27"),d=a("8lwbT"),s=a("1XFga"),p=a("foMWJ"),f=a("k4gOl"),m=a("226dB"),g=a("8fnAG");a("goCP2");var v=a("eNGT7"),h=a("hZbar"),y=(m=a("226dB"),a("5vcFJ")),x=a("edC09"),S=a("fVAzy"),T=a("15Pgw"),E=a("lziLk"),w=a("jcs3P"),b=a("6HRK6"),A=a("4gTGP"),P=a("9lBKv"),H=a("cneLj"),L=a("bWoQY"),C=a("6AaHU"),k=a("aq3jz"),I=a("3u496"),B=a("3l6Qh"),F=a("f39Wy"),O=a("5oDS0"),D=(o=a("cuInp"),c=a("yrqZm"),u=a("5BN27"),E=a("lziLk"),a("dErWb")),W=a("2Af4W"),N=(I=a("3u496"),a("11rv6"));function j(){var e=o.taggedTemplateLiteral(["\n  background-color: #222222;\n  padding: 10px 16px;\n  border-bottom: 1px solid #323232;\n  height: 46px;\n  opacity: ",";\n  position: absolute;\n"]);return j=function(){return e},e}function R(){var e=o.taggedTemplateLiteral(["\n  display: flex;\n  margin-left: 10px;\n  > * {\n    margin-right: 10px;\n  }\n"]);return R=function(){return e},e}function _(){var e=o.taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n"]);return _=function(){return e},e}var M=function(e){return e},V=u.default(N.Row).attrs({justify:"space-between"})(ee||(ee=M(j(),0)),(function(e){var n;return null!==(n=e.opacity)&&void 0!==n?n:"1"})),q=u.default.div(ne||(ne=M(R()))),K=u.default.div(te||(te=M(_()))),Z=function(n){var t=n.onBackClick,r=n.totalSteps,a=n.currentStepIndex,o=n.isHidden,i=n.showBackButtonOnFirstStep||0!==a;return e(c).createElement(V,{opacity:o?0:1},i?e(c).createElement(D.ChevronCircle,{right:1,onClick:t},e(c).createElement(I.LeftChevronIcon,null)):e(c).createElement(K,null),e(c).createElement(q,null,E.range(r).map((function(n){var t=n<=a?"#4E44CE":"#333";return e(c).createElement(W.Circle,{key:n,diameter:12,color:t})}))),e(c).createElement(K,null))},z=a("glMqZ"),U=(o=a("cuInp"),c=a("yrqZm"),u=a("5BN27"),a("juw1O")),G=(I=a("3u496"),a("i0uZH"));function j(){var e=o.taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n"]);return j=function(){return e},e}function R(){var e=o.taggedTemplateLiteral(["\n  width: 11px;\n  margin-top: 1px;\n  margin-right: 8px;\n  svg {\n    fill: #aaa;\n  }\n"]);return R=function(){return e},e}M=function(e){return e};var Q=u.default(U.ListboxInput)(ee||(ee=M(j()))),J=u.default.div(ne||(ne=M(R()))),X=function(n){var t,r=n.value,a=n.placeholderText,o=n.options,i=n.onChange,l=o.map((function(e){return e.value})),u=0===o.length,d=null===(t=o.find((function(e){return e.value===r})))||void 0===t?void 0:t.displayValue;return e(c).createElement(Q,{value:null!=r?r:"__none",onChange:function(e){return i(e,l.indexOf(e))},tabIndex:0,disabled:u},(function(){return e(c).createElement(e(c).Fragment,null,e(c).createElement(G.SelectButton,{arrow:e(c).createElement(J,null,e(c).createElement(I.DownChevronIcon,null))},void 0===r?a:d),!u&&e(c).createElement(G.SelectPopover,null,e(c).createElement(G.SelectList,null,o.map((function(n){var t;return e(c).createElement(G.SelectItem,{key:n.value,value:n.value},null!==(t=n.displayValue)&&void 0!==t?t:n.value)})))))}))};function j(){var e=o.taggedTemplateLiteral(["\n  width: 400px;\n  height: 450px;\n  background-color: #222222;\n  border: 1px solid #323232;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n"]);return j=function(){return e},e}function R(){var e=o.taggedTemplateLiteral(["\n  > * {\n    margin-bottom: 10px;\n  }\n  margin-top: 27px;\n"]);return R=function(){return e},e}function _(){var e=o.taggedTemplateLiteral(["\n  margin-top: 46px;\n  padding-left: 10px;\n  padding-right: 10px;\n"]);return _=function(){return e},e}function Y(){var e=o.taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  label {\n    color: #999;\n  }\n"]);return Y=function(){return e},e}function $(){var e=o.taggedTemplateLiteral(["\n  padding: 20px;\n  padding-top: 46px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"]);return $=function(){return e},e}M=function(e){return e};var ee,ne,te,re,ae,oe=function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))};x.initSentry();var ie=u.default.main(ee||(ee=M(j()))),ce=u.default.section(ne||(ne=M(R()))),le=u.default(O.IconHeader)(te||(te=M(_()))),ue=u.default.div(re||(re=M(Y()))),de=function(){var n=new URLSearchParams(f.useLocation().search).get("permission");return e(c).createElement(e(c).Fragment,null,e(c).createElement(T.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(c).createElement(B.FullPageHeader,null),e(c).createElement(P.HardwareWalletProvider,null,e(c).createElement(k.OnboardingAndConnectHardwareErrorBoundary,null,n?e(c).createElement(ie,null,e(c).createElement(fe,{onFinish:function(){return window.close()},pushStep:h.NOOP,popStep:h.NOOP})):e(c).createElement(se,null))))},se=function(){var n=o.slicedToArray(c.useState([]),2),t=n[0],r=n[1],a=p.usePreviousDistinct(t,(function(e,n){return(null==e?void 0:e.length)===n.length})),i=E.getLast(t),l=function(e){r((function(n){return d.default(n,(function(n){n.push(e)}))}))},u=function(){r((function(e){return d.default(e,(function(e){e.pop()}))}))};c.useEffect((function(){r([e(c).createElement(fe,{pushStep:l,popStep:u})])}),[]);var f=t.length,m=t.length>(null!=a?a:[]).length,g=0===(null==a?void 0:a.length),v={initial:{x:g?0:m?150:-150,opacity:g?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(c).createElement(ie,null,e(c).createElement(Z,{totalSteps:3,onBackClick:u,currentStepIndex:f-1}),e(c).createElement(s.AnimatePresence,{exitBeforeEnter:!0},e(c).createElement(s.motion.div,Object.assign({style:{height:"100%"},key:"".concat(t.length,"_").concat(null==a?void 0:a.length)},v),i)))},pe=u.default.div(ae||(ae=M($()))),fe=function(n){var t,r,a=v.useTranslation().t,o=P.useLedgerTransport(),i=o.ledgerTransportState,l=o.transport,u=o.getPermission,d=F.ConfirmationIconType.Default,s=e(c).createElement(z.SpinnerIcon,null),p=a("connectHardwareContinueActionButtonText"),f=!1,m=h.NOOP;switch(i){case P.LedgerTransportState.Searching:t=a("connectHardwareSearchingPrimaryText"),r=a("connectHardwareSearchingSecondaryText"),f=!0;break;case P.LedgerTransportState.NeedsPermission:s=e(c).createElement(I.AddIcon,null),t=a("connectHardwareNeedsPermissionPrimaryText"),r=a("connectHardwareNeedsPermissionSecondaryText"),m=u;break;case P.LedgerTransportState.WaitingForPermission:t=a("connectHardwareWaitingForPermissionPrimaryText"),r=a("connectHardwareWaitingForPermissionSecondaryText"),f=!0;break;case P.LedgerTransportState.WaitingForApplication:s=e(c).createElement(I.SolanaIcon,null),t=a("connectHardwareWaitingForApplicationPrimaryText"),r=a("connectHardwareWaitingForApplicationSecondaryText"),f=!0;break;case P.LedgerTransportState.Connected:d=F.ConfirmationIconType.Success,t=a("connectHardwareConnectedPrimaryText"),r=a("connectHardwareConnectedSecondaryText"),m=function(){if(!l)throw new Error("Transport is missing");n.onFinish?n.onFinish():n.pushStep(e(c).createElement(ge,Object.assign({transport:l},n)))};break;case P.LedgerTransportState.Failed:d=F.ConfirmationIconType.Failure,t=a("connectHardwareFailedPrimaryText"),r=a("connectHardwareFailedSecondaryText"),p=a("connectHardwareFailedRetryActionButtonText"),m=u}return e(c).createElement(pe,null,e(c).createElement(le,{icon:e(c).createElement(F.ConfirmationIcon,{defaultIcon:s,type:d}),primaryText:t,secondaryText:r,headerStyle:O.IconHeaderStyle.Large}),e(c).createElement(C.Button,{onClick:m,theme:"primary",disabled:f},p))},me=[m.DerivationPathType.Bip44RootSolana,m.DerivationPathType.Bip44Solana,m.DerivationPathType.Bip44ChangeSolana],ge=function(n){var t,r=v.useTranslation().t,a=o.slicedToArray(c.useState(0),2),l=a[0],u=a[1],s=o.slicedToArray(c.useState(void 0),2),p=s[0],f=s[1],x=o.slicedToArray(c.useState([]),2),T=x[0],P=x[1],L=o.slicedToArray(c.useState({}),2),k=L[0],B=L[1],F=o.slicedToArray(c.useState(!1),2),D=F[0],W=F[1],N=null===(t=H.useFetchConnection())||void 0===t?void 0:t.data,j=null==N?void 0:N.connection,R=o.slicedToArray(y.useStorage(m.StorageKeys.AccountMetas,[]),3),_=R[0],M=R[1],V=R[2],q=c.useMemo((function(){var e=_.filter((function(e){return e.type===m.AccountType.Ledger})).map((function(e){return e.publicKey.toString()}));return T.filter((function(n){return!e.includes(n.toString())}))}),[T,_]),K=void 0!==l?me[l]:void 0,Z=c.useMemo((function(){return K?K===m.DerivationPathType.Bip44RootSolana?[b.solanaDerivationPath(0,0,m.DerivationPathType.Bip44RootSolana)]:E.range(10).map((function(e){return b.solanaDerivationPath(e,0,K)})):[]}),[l]),z=me.map((function(e){return{value:e,displayValue:h.DERIVATION_PATH_TYPE_TO_VALUE[e]}}));c.useEffect((function(){oe(void 0,void 0,void 0,e(i).mark((function t(){var r,a,o,c,l,u,d,s,p;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M&&j){e.next=2;break}return e.abrupt("return");case 2:W(!0),e.prev=3,r=[],a=!0,o=!1,c=void 0,e.prev=6,l=Z[Symbol.iterator]();case 8:if(a=(u=l.next()).done){e.next=17;break}return d=u.value,e.next=12,b.getPublicKeyAsync(n.transport,d);case 12:s=e.sent,r.push(s);case 14:a=!0,e.next=8;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(6),o=!0,c=e.t0;case 23:e.prev=23,e.prev=24,a||null==l.return||l.return();case 26:if(e.prev=26,!o){e.next=29;break}throw c;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return P(r),e.next=34,A.getMultipleAccountsAsync(j,r,"finalized");case 34:p=e.sent,B(p),e.next=41;break;case 38:e.prev=38,e.t1=e.catch(3),console.error(e.t1);case 41:return e.prev=41,W(!1),e.finish(41);case 44:case"end":return e.stop()}}),t,null,[[3,38,41,44],[6,19,23,31],[24,,26,30]])})))}),[n.transport,M,Z,j]),c.useEffect((function(){P([])}),[Z]),c.useEffect((function(){1===q.length&&f(0)}),[q]);var U=q.map((function(n){var t,r=n.toString(),a=null===(t=k[n.toString()])||void 0===t?void 0:t.lamports,o=void 0!==a?w.formatTokenAmount(w.lamportsToSolana(a)):"0";return{displayValue:e(c).createElement(ue,null,e(c).createElement("span",null,w.formatHashMedium(r,7)),e(c).createElement("label",null,o," SOL")),value:r}})),G=void 0===l||void 0===p,Q=void 0!==p?q[p]:void 0;return e(c).createElement(pe,null,e(c).createElement(le,{icon:e(c).createElement(I.AddIcon,null),primaryText:r("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:O.IconHeaderStyle.Large}),e(c).createElement(ce,null,e(c).createElement(X,{placeholderText:r("connectHardwareSelectAddressDerivationPath"),options:z,value:K,onChange:function(e,n){u(n)}}),e(c).createElement(X,{placeholderText:D?r("connectHardwareSelectAddressSearching"):0===q.length?r("connectHardwareSelectAddressAllAddressesImported"):r("connectHardwareSelectAddressWalletAddress"),options:U,value:null==Q?void 0:Q.toString(),onChange:function(e,n){f(n)}})),e(c).createElement(C.Button,{onClick:function(){if(void 0!==p){var t,r,a=q[p],o=T.map((function(e){return e.toString()})).indexOf(a.toString());t=a.toString(),r=o,oe(void 0,void 0,void 0,e(i).mark((function n(){var a,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M){e.next=2;break}return e.abrupt("return");case 2:a=d.default(_,(function(e){var n=e.filter((function(e){return e.type===m.AccountType.Ledger})).length+1,a=Z[r].toString("hex");e.push({type:m.AccountType.Ledger,name:"Ledger ".concat(n),publicKey:t,derivationPath:a})})),o=a.length-1,S.analytics.capture("connectHardwareAddAccount"),V(a),g.setStorageValue(m.StorageKeys.SelectedAccountIndex,o);case 7:case"end":return e.stop()}}),n)}))),n.pushStep(e(c).createElement(ve,Object.assign({},n)))}},theme:"primary",disabled:G},"Add Account"))},ve=function(){var n=v.useTranslation().t;return e(c).createElement(pe,null,e(c).createElement(le,{icon:e(c).createElement(F.ConfirmationIcon,{defaultIcon:e(c).createElement("div",null),type:F.ConfirmationIconType.Success}),primaryText:n("connectHardwareFinishPrimaryText"),secondaryText:n("connectHardwareFinishSecondaryText"),headerStyle:O.IconHeaderStyle.Large}),e(c).createElement(C.Button,{onClick:function(){S.analytics.capture("connectHardwareFinishClick"),window.close()},theme:"primary"},"Done"))};l.render(e(c).createElement(f.BrowserRouter,null,e(c).createElement(L.QueryProvider,null,e(c).createElement(de,null))),document.getElementById("root")),S.analytics.capture("connectHardwareOpen")}();define=__define;})(window.define);