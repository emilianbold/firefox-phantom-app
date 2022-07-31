(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequirea886;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequirea886=a);var o=a("aZikt"),l=a("ihAua"),i=a("hHMPk"),c=a("ehJ6P"),d=a("d3pmY"),s=a("lxqKj"),u=a("gDkTC"),p=a("lwple"),m=a("czDD7");a("6CHoY");var g=a("7Qmuu"),h=a("6oEu9"),y=(p=a("lwple"),a("6oQjh")),v=a("ci2Mj"),f=a("8C6BZ"),x=a("5cKs6"),S=a("6gzK9"),E=a("cFuyE"),w=a("jKFz7"),T=a("iXlMH"),P=a("5DQqc"),b=a("bMYcF"),H=a("fMhDQ"),A=a("h5G75"),C=a("aADTv"),k=a("i2Zy4"),F=a("hJDxl"),I=a("9P0Mo"),D=a("2cgmz"),L=a("lSpdH"),B=(o=a("aZikt"),i=a("hHMPk"),S=a("6gzK9"),a("hoJun")),O=a("8FNEt"),M=(F=a("hJDxl"),a("cweFb"));const _=i.default(M.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
  position: absolute;
`,j=i.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,K=i.default.div`
  width: 24px;
  height: 24px;
`,N=({onBackClick:t,totalSteps:n,currentStepIndex:r,isHidden:a,showBackButtonOnFirstStep:l})=>{const i=l||0!==r;return e(o).createElement(_,{opacity:a?0:1},i?e(o).createElement(B.ChevronCircle,{right:1,onClick:t},e(o).createElement(F.LeftChevronIcon,null)):e(o).createElement(K,null),e(o).createElement(j,null,S.range(n).map((t=>{const n=t<=r?"#4E44CE":"#333";return e(o).createElement(O.Circle,{key:t,diameter:12,color:n})}))),e(o).createElement(K,null))};var R=a("lPkGw"),W=(o=a("aZikt"),i=a("hHMPk"),a("i5Y99")),V=(F=a("hJDxl"),a("bPgZb"));const z=i.default(W.ListboxInput)`
  position: relative;
  width: 100%;
`,Z=i.default.div`
  width: 11px;
  margin-top: 1px;
  margin-right: 8px;
  svg {
    fill: #aaa;
  }
`,J=({value:t,placeholderText:n,options:r,onChange:a})=>{var l;const i=r.map((e=>e.value)),c=0===r.length,d=null===(l=r.find((e=>e.value===t)))||void 0===l?void 0:l.displayValue;return e(o).createElement(z,{value:null!=t?t:"__none",onChange:e=>a(e,i.indexOf(e)),tabIndex:0,disabled:c},(()=>e(o).createElement(e(o).Fragment,null,e(o).createElement(V.SelectButton,{arrow:e(o).createElement(Z,null,e(o).createElement(F.DownChevronIcon,null))},void 0===t?n:d),!c&&e(o).createElement(V.SelectPopover,null,e(o).createElement(V.SelectList,null,r.map((t=>{var n;return e(o).createElement(V.SelectItem,{key:t.value,value:t.value},null!==(n=t.displayValue)&&void 0!==n?n:t.value)})))))))};var Q=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))};v.initSentry();const Y=i.default.main`
  width: 400px;
  height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`,q=i.default.section`
  > * {
    margin-bottom: 10px;
  }
  margin-top: 27px;
`,U=i.default(L.IconHeader)`
  margin-top: 46px;
  padding-left: 10px;
  padding-right: 10px;
`,$=i.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    color: #999;
  }
`,G=()=>{const t=new URLSearchParams(u.useLocation().search).get("permission");return e(o).createElement(e(o).Fragment,null,e(o).createElement(x.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(o).createElement(I.FullPageHeader,null),e(o).createElement(P.HardwareWalletProvider,null,e(o).createElement(k.OnboardingAndConnectHardwareErrorBoundary,null,t?e(o).createElement(Y,null,e(o).createElement(te,{onFinish:()=>window.close(),pushStep:h.NOOP,popStep:h.NOOP})):e(o).createElement(X,null))))},X=()=>{const[t,n]=o.useState([]),r=s.usePreviousDistinct(t,((e,t)=>(null==e?void 0:e.length)===t.length)),a=S.getLast(t),l=e=>{n((t=>c.default(t,(t=>{t.push(e)}))))},i=()=>{n((e=>c.default(e,(e=>{e.pop()}))))};o.useEffect((()=>{n([e(o).createElement(te,{pushStep:l,popStep:i})])}),[]);const u=t.length,p=t.length>(null!=r?r:[]).length,m=0===(null==r?void 0:r.length),g={initial:{x:m?0:p?150:-150,opacity:m?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(o).createElement(Y,null,e(o).createElement(N,{totalSteps:3,onBackClick:i,currentStepIndex:u-1}),e(o).createElement(d.AnimatePresence,{exitBeforeEnter:!0},e(o).createElement(d.motion.div,Object.assign({style:{height:"100%"},key:`${t.length}_${null==r?void 0:r.length}`},g),a)))},ee=i.default.div`
  padding: 20px;
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,te=t=>{const{t:n}=g.useTranslation(),{ledgerTransportState:r,transport:a,getPermission:l}=P.useLedgerTransport();let i,c,d=D.ConfirmationIconType.Default,s=e(o).createElement(R.SpinnerIcon,null),u=n("connectHardwareContinueActionButtonText"),p=!1,m=h.NOOP;switch(r){case P.LedgerTransportState.Searching:i=n("connectHardwareSearchingPrimaryText"),c=n("connectHardwareSearchingSecondaryText"),p=!0;break;case P.LedgerTransportState.NeedsPermission:s=e(o).createElement(F.AddIcon,null),i=n("connectHardwareNeedsPermissionPrimaryText"),c=n("connectHardwareNeedsPermissionSecondaryText"),m=l;break;case P.LedgerTransportState.WaitingForPermission:i=n("connectHardwareWaitingForPermissionPrimaryText"),c=n("connectHardwareWaitingForPermissionSecondaryText"),p=!0;break;case P.LedgerTransportState.WaitingForApplication:s=e(o).createElement(F.SolanaIcon,null),i=n("connectHardwareWaitingForApplicationPrimaryText"),c=n("connectHardwareWaitingForApplicationSecondaryText"),p=!0;break;case P.LedgerTransportState.Connected:d=D.ConfirmationIconType.Success,i=n("connectHardwareConnectedPrimaryText"),c=n("connectHardwareConnectedSecondaryText"),m=()=>{if(!a)throw new Error("Transport is missing");t.onFinish?t.onFinish():t.pushStep(e(o).createElement(re,Object.assign({transport:a},t)))};break;case P.LedgerTransportState.Failed:d=D.ConfirmationIconType.Failure,i=n("connectHardwareFailedPrimaryText"),c=n("connectHardwareFailedSecondaryText"),u=n("connectHardwareFailedRetryActionButtonText"),m=l}return e(o).createElement(ee,null,e(o).createElement(U,{icon:e(o).createElement(D.ConfirmationIcon,{defaultIcon:s,type:d}),primaryText:i,secondaryText:c,headerStyle:L.IconHeaderStyle.Large}),e(o).createElement(C.Button,{onClick:m,theme:"primary",disabled:p},u))},ne=[p.DerivationPathType.Bip44Root,p.DerivationPathType.Bip44,p.DerivationPathType.Bip44Change],re=t=>{var n;const{t:r}=g.useTranslation(),[a,l]=o.useState(0),[i,d]=o.useState(void 0),[s,u]=o.useState([]),[v,x]=o.useState({}),[P,b]=o.useState(!1),A=null===(n=H.useFetchConnection())||void 0===n?void 0:n.data,k=null==A?void 0:A.connection,[I,D,B]=y.useStorage(p.StorageKeys.AccountMetas,[]),O=o.useMemo((()=>{const e=I.filter((e=>e.type===p.AccountType.Ledger)).map((e=>e.publicKey.toString()));return s.filter((t=>!e.includes(t.toString())))}),[s,I]),M=void 0!==a?ne[a]:void 0,_=o.useMemo((()=>M?M===p.DerivationPathType.Bip44Root?[w.solanaDerivationPath(0,0,p.DerivationPathType.Bip44Root)]:S.range(10).map((e=>w.solanaDerivationPath(e,0,M))):[]),[a]),j=ne.map((e=>({value:e,displayValue:h.DERIVATION_PATH_TYPE_TO_VALUE[e]})));o.useEffect((()=>{Q(void 0,void 0,void 0,(function*(){if(!D&&k){b(!0);try{const e=[];for(const n of _){const r=yield w.getPublicKeyAsync(t.transport,n);e.push(r)}u(e);const n=yield T.getMultipleAccountsAsync(k,e,"finalized");x(n)}catch(e){console.error(e)}finally{b(!1)}}}))}),[t.transport,D,_,k]),o.useEffect((()=>{u([])}),[_]),o.useEffect((()=>{1===O.length&&d(0)}),[O]);const K=O.map((t=>{var n;const r=t.toString(),a=null===(n=v[t.toString()])||void 0===n?void 0:n.lamports,l=void 0!==a?E.formatTokenAmount(E.lamportsToSolana(a)):"0";return{displayValue:e(o).createElement($,null,e(o).createElement("span",null,E.formatHashMedium(r,7)),e(o).createElement("label",null,l," SOL")),value:r}})),N=void 0===a||void 0===i,R=void 0!==i?O[i]:void 0;return e(o).createElement(ee,null,e(o).createElement(U,{icon:e(o).createElement(F.AddIcon,null),primaryText:r("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:L.IconHeaderStyle.Large}),e(o).createElement(q,null,e(o).createElement(J,{placeholderText:r("connectHardwareSelectAddressDerivationPath"),options:j,value:M,onChange:(e,t)=>{l(t)}}),e(o).createElement(J,{placeholderText:P?r("connectHardwareSelectAddressSearching"):0===O.length?r("connectHardwareSelectAddressAllAddressesImported"):r("connectHardwareSelectAddressWalletAddress"),options:K,value:null==R?void 0:R.toString(),onChange:(e,t)=>{d(t)}})),e(o).createElement(C.Button,{onClick:()=>{if(void 0===i)return;const n=O[i],r=s.map((e=>e.toString())).indexOf(n.toString());var a,l;a=n.toString(),l=r,Q(void 0,void 0,void 0,(function*(){if(D)return;const e=c.default(I,(e=>{const t=e.filter((e=>e.type===p.AccountType.Ledger)).length+1,n=_[l].toString("hex");e.push({type:p.AccountType.Ledger,name:`Ledger ${t}`,publicKey:a,derivationPath:n})})),t=e.length-1;f.analytics.capture("connectHardwareAddAccount"),B(e),m.setStorageValue(p.StorageKeys.SelectedAccountIndex,t)})),t.pushStep(e(o).createElement(ae,Object.assign({},t)))},theme:"primary",disabled:N},"Add Account"))},ae=()=>{const{t:t}=g.useTranslation();return e(o).createElement(ee,null,e(o).createElement(U,{icon:e(o).createElement(D.ConfirmationIcon,{defaultIcon:e(o).createElement("div",null),type:D.ConfirmationIconType.Success}),primaryText:t("connectHardwareFinishPrimaryText"),secondaryText:t("connectHardwareFinishSecondaryText"),headerStyle:L.IconHeaderStyle.Large}),e(o).createElement(C.Button,{onClick:()=>{f.analytics.capture("connectHardwareFinishClick"),window.close()},theme:"primary"},"Done"))};l.render(e(o).createElement(u.BrowserRouter,null,e(o).createElement(b.BannerProvider,null,e(o).createElement(A.QueryProvider,null,e(o).createElement(G,null)))),document.getElementById("root")),f.analytics.capture("connectHardwareOpen");define=__define;})(window.define);