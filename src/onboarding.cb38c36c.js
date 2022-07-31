(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequirea886=a);var i=a("aZikt"),l=a("ihAua"),c=a("gDkTC");a("6CHoY");var u=a("ci2Mj"),s=a("5cKs6"),d=a("h5G75"),m=a("ixd3d"),p={};t(p,"AccountImporterProvider",(function(){return E}),(function(e){return E=e})),t(p,"useAccountImporter",(function(){return x}),(function(e){return x=e}));i=a("aZikt");var h=a("lwple"),f=a("czDD7"),g=(h=a("lwple"),a("8C6BZ")),b=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const v=i.createContext({accountMetas:[],setAccountMetas(){},importAccountMetas(){return b(this,void 0,void 0,(function*(){}))}}),E=({children:t})=>{const[n,o]=i.useState([]),r=i.useCallback((e=>b(void 0,void 0,void 0,(function*(){yield f.setStorageValue(h.StorageKeys.AccountMetas,e);for(const t of e)t.type===h.AccountType.Seed&&g.analytics.capture("addSeedAccount",{data:{walletIndex:t.walletIndex}});yield f.setStorageValue(h.StorageKeys.SelectedAccountIndex,0)}))),[]);return e(i).createElement(v.Provider,{value:{accountMetas:n,setAccountMetas:o,importAccountMetas:r}},t)},x=()=>i.useContext(v);var w=a("bMYcF"),y=(i=a("aZikt"),c=a("gDkTC"),a("lxqKj")),S=a("ehJ6P");a("6CHoY");var C=a("7eQt4"),k=(g=a("8C6BZ"),{});t(k,"OnboardingImportWallet",(function(){return Pt}),(function(e){return Pt=e}));i=a("aZikt");var P=a("hHMPk"),T=a("7Qmuu"),M=(y=a("lxqKj"),a("3XPpL")),A=(g=a("8C6BZ"),a("cweFb")),O=a("g7X40"),R=(i=a("aZikt"),P=a("hHMPk"),a("aADTv")),I=a("dczY0");O=a("g7X40"),i=a("aZikt"),P=a("hHMPk"),I=a("dczY0");const F=P.default(I.Column).attrs({justify:"center"})`
  height: 100%;
  margin-bottom: 20px; // to offset <OnboardingContent /> 20px padding. See (onboarding_flow.tsx)
  flex: 1;
`,H=P.default.div`
  width: 100%;
  height: fit-content;
`,_=({children:t})=>e(i).createElement(F,null,e(i).createElement(H,null,t)),D=P.default.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`,B=P.default(I.Column).attrs({align:"center"})`
  margin-bottom: 20px;
`,W=P.default(O.Text).attrs({color:"FFFFFF",weight:500,size:28,lineHeight:34,textAlign:"center",margin:"0 0 10px 0"})``,j=P.default(O.Text).attrs((e=>{var t;return{size:16,color:null!==(t=e.color)&&void 0!==t?t:"#999"}}))``,N=({onSubmit:t,title:n,subtitle:o,subtitleColor:r,buttonTheme:a="default",buttonText:l,buttonDisabled:c,children:u})=>e(i).createElement(D,{onSubmit:e=>{e.preventDefault(),t()}},e(i).createElement(_,null,e(i).createElement(B,null,e(i).createElement(W,null,n),e(i).createElement(j,{color:r},o)),u),e(i).createElement(R.Button,{type:"submit",theme:a,disabled:c},l));i=a("aZikt"),P=a("hHMPk"),T=a("7Qmuu");var L=a("7rvxc"),Z=(A=a("cweFb"),I=a("dczY0"),a("lPkGw")),K=(i=a("aZikt"),P=a("hHMPk"),a("cFuyE")),z={};t(z,"CheckboxGroup",(function(){return xe}),(function(e){return xe=e})),t(z,"Checkbox",(function(){return we}),(function(e){return we=e}));i=a("aZikt"),P=a("hHMPk"),i=a("aZikt");var U=a("f9f8D"),G=a("52Tb2"),$=a("itADJ"),V=a("d8po8"),X=a("fIGG7"),Y=a("kHzXS"),J=a("abL1A");function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Q.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var ee,te,ne;function oe(e){return!(!e||e.isControlled||e.disabled)}function re(e){return function(t,n){return t&&t.isControlled&&n.state===e}}!function(e){e.Checked="checked",e.Mixed="mixed",e.Unchecked="unchecked"}(te||(te={})),function(e){e.GetDerivedData="GET_DERIVED_DATA",e.Mount="MOUNT",e.Set="SET",e.Toggle="TOGGLE",e.Unmount="UNMOUNT"}(ne||(ne={}));var ae=J.assign((function(e,t){return Q({},e,{refs:t.refs})})),ie=((ee={})[ne.Mount]={actions:ae},ee[ne.GetDerivedData]={actions:[ae,J.assign((function(e,t){return Q({},e,t.data)}))]},ee[ne.Set]=[{target:te.Checked,cond:re(te.Checked)},{target:te.Unchecked,cond:re(te.Unchecked)},{target:te.Mixed,cond:re(te.Mixed)}],ee);function le(e,t,n){void 0===n&&(n="useMixedCheckbox");var o,r=t||{},a=r.checked,l=r.defaultChecked,c=r.disabled,u=r.onChange,s=r.onClick,d=null!=a,m=J.useCreateMachine(function(e,t){var n,o,r,a;return{id:"mixed-checkbox",initial:e,context:{disabled:t.disabled,isControlled:t.isControlled,refs:{input:null}},states:(a={},a[te.Unchecked]={entry:ae,on:Q((n={},n[ne.Toggle]={target:te.Checked,cond:oe},n),ie)},a[te.Checked]={entry:ae,on:Q((o={},o[ne.Toggle]={target:te.Unchecked,cond:oe},o),ie)},a[te.Mixed]={entry:ae,on:Q((r={},r[ne.Toggle]={target:te.Checked,cond:oe},r),ie)},a)}}(ce(d?a:l),{disabled:!!c,isControlled:d})),p=J.useMachine(m,{input:e},false),h=p[0],f=p[1],g={"aria-checked":ue(h.value),checked:(o=h.value,o===te.Checked),disabled:!!c,onChange:X.composeEventHandlers(u,(function(){d||f(ne.Toggle)})),onClick:X.composeEventHandlers(s,(function(){v()})),type:"checkbox"},b={checked:ue(h.value)};function v(){e.current&&(e.current.indeterminate=h.value===te.Mixed)}return i.useEffect((function(){d&&f({type:ne.Set,state:ce(a)})}),[d,a,f]),Y.useIsomorphicLayoutEffect(v),i.useEffect((function(){f({type:ne.GetDerivedData,data:{disabled:c,isControlled:d}})}),[c,d,f]),[g,b]}function ce(e){return!0===e?te.Checked:"mixed"===e?te.Mixed:te.Unchecked}function ue(e){return e===te.Checked||e===te.Mixed&&"mixed"}function se(e,t,n){var o=null!=e,r=i.useRef(o).current;i.useEffect((function(){}),[n,t,o,r])}var de=["as","checked","children","defaultChecked","disabled","onClick","onChange","__componentName"],me=["as","onBlur","onFocus"],pe=U.createNamedContext("CustomCheckboxContext",{});var he=i.forwardRef((function(e,t){var n=e.as,o=void 0===n?"span":n,r=e.checked,a=e.children,l=e.defaultChecked,c=e.disabled,u=e.onClick,s=e.onChange,d=e.__componentName,m=void 0===d?"CustomCheckboxContainer":d,p=q(e,de),h=i.useRef(null),f=le(h,{defaultChecked:l,checked:r,disabled:c,onChange:s},m),g=f[0],b=f[1],v=i.useState(!1),E=v[0],x=v[1];var w={defaultChecked:l,disabled:c,focused:E,inputProps:g,inputRef:h,setFocused:x};return se(r,"checked",m),$.useCheckStyles("checkbox"),i.createElement(pe.Provider,{value:w},i.createElement(o,Q({},p,{ref:t,"data-reach-custom-checkbox-container":"","data-focused":E?"":void 0,"data-state":ce(b.checked),onClick:X.composeEventHandlers(u,(function(){window.requestAnimationFrame((function(){h.current&&h.current.focus()}))}))}),G.isFunction(a)?a({checked:g["aria-checked"],inputRef:h,focused:E}):a))})),fe=i.forwardRef((function(e,t){var n=e.as,o=void 0===n?"input":n,r=e.onBlur,a=e.onFocus,l=q(e,me),c=i.useContext(pe),u=c.focused,s=c.inputProps,d=c.inputRef,m=c.setFocused,p=V.useComposedRefs(t,d),h=i.useRef(!0);return i.useEffect((function(){return function(){h.current=!1}}),[]),i.createElement(o,Q({},l,s,{ref:p,type:"checkbox","data-reach-custom-checkbox-input":"","data-focused":u?"":void 0,onBlur:X.composeEventHandlers(r,(function(){window.requestAnimationFrame((function(){h.current&&m(!1)}))})),onFocus:X.composeEventHandlers(a,(function(){window.requestAnimationFrame((function(){h.current&&m(!0)}))}))}))})),ge=a("99Anx"),be=a("hJDxl"),ve=(A=a("cweFb"),function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n});function Ee(e){return{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",width:"100%",height:"100%",userSelect:"none",pointerEvents:"none",borderRadius:"6px",opacity:""+(e?1:0),transition:"transform 150ms ease-out, background 150ms ease-out",zIndex:1,background:!0===e?"#4E44CE":"transparent"}}const xe=P.default(A.Row)`
  margin: ${e=>{var t;return null!==(t=e.margin)&&void 0!==t?t:0}};
  > * {
    margin-right: 10px;
  }
  label {
    color: #8a81f8;
    cursor: pointer;
    &:hover {
      color: ${ge.hexToRGB("#8A81F8",.5)};
    }
  }
`,we=t=>{const{onChange:n}=t,o=ve(t,["onChange"]),r=t.checked;return e(i).createElement(he,{checked:null!=t.checked?t.checked:r,onChange:n,style:{background:"#181818",border:"1px solid #2F2F2F",borderRadius:"6px",height:22,minHeight:22,width:22,minWidth:22,cursor:"pointer",userSelect:"none",position:"relative",outlineColor:"transparent",outlineStyle:"none",boxShadow:"none"}},e(i).createElement(fe,Object.assign({},o)),e(i).createElement("span",{"aria-hidden":!0,style:Ee(r)},e(i).createElement(be.CheckmarkIcon,{width:13})))};var ye=a("2MtnF");O=a("g7X40");const Se=t=>{var n,o,r;const a=!!t.selected,[l,c]=i.useState(null!==(o=null!==(n=t.selected)&&void 0!==n?n:t.defaultSelected)&&void 0!==o?o:[]),u=null!==(r=t.selected)&&void 0!==r?r:l,s=new Set(u);return e(i).createElement(Ce,null,t.accounts.map((({meta:n,lamports:o})=>{const r=s.has(n.publicKey);return e(i).createElement(ke,{key:n.publicKey,onClick:()=>{r?(e=>{var n,o;const r=new Set(u);r.delete(e);const i=[...r];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(o=t.onDeselect)||void 0===o||o.call(t,e)})(n.publicKey):(e=>{var n,o;const r=new Set(u);r.add(e);const i=[...r];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(o=t.onSelect)||void 0===o||o.call(t,e)})(n.publicKey)}},e(i).createElement(z.CheckboxGroup,{width:"auto"},e(i).createElement(z.Checkbox,{checked:r}),e(i).createElement("span",null,K.formatHashMedium(n.publicKey,4))),e(i).createElement(O.Text,{color:"#777",size:14},e(i).createElement(ye.SolBalance,{format:"0,0.[000]"},o)))})))},Ce=P.default.ul`
  display: grid;
  grid-template-rows: repeat(auto-fill, 20px);
  gap: 16px;
  flex: 1;
  margin: 12px 0 27px 0;
  padding: 16px;
  overflow: auto;
  background: #181818;
  border: 1px solid #2f2f2f;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`,ke=P.default.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  label {
    color: #999;
  }
`;var Pe={};t(Pe,"OnboardingCreatePassword",(function(){return dt}),(function(e){return dt=e}));i=a("aZikt"),P=a("hHMPk"),T=a("7Qmuu");var Te=a("6oEu9"),Me=(h=a("lwple"),a("hUfgV")),Ae=(g=a("8C6BZ"),a("ebwnM")),Oe=a("cqRHn"),Re=a("02ZG7"),Ie=a("a80wK"),Fe=(O=a("g7X40"),I=a("dczY0"),{});t(Fe,"OnboardingCreateRecoveryPhrase",(function(){return rt}),(function(e){return rt=e}));i=a("aZikt"),P=a("hHMPk");var He=a("e5x4G"),_e=a("fCuks"),De=(T=a("7Qmuu"),a("6oEu9"),h=a("lwple"),Me=a("hUfgV"),a("4yWCU")),Be=(Re=a("02ZG7"),g=a("8C6BZ"),a("2kWQE"));be=a("hJDxl"),O=a("g7X40"),A=a("cweFb"),I=a("dczY0"),R=a("aADTv"),i=a("aZikt"),P=a("hHMPk"),_e=a("fCuks"),T=a("7Qmuu"),h=a("lwple"),De=a("4yWCU"),Re=a("02ZG7"),i=a("aZikt");const We=e=>{const[t,n]=i.useState(!1),o=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!0)},r=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!1)},a=()=>{n(!1)};return i.useEffect((()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",r),window.addEventListener("blur",a),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",r),window.removeEventListener("blur",a)})),[]),t};be=a("hJDxl"),O=a("g7X40"),A=a("cweFb"),i=a("aZikt"),P=a("hHMPk");var je=a("d3pmY");T=a("7Qmuu"),Te=a("6oEu9"),g=a("8C6BZ"),be=a("hJDxl"),I=a("dczY0"),A=a("cweFb"),R=a("aADTv"),O=a("g7X40"),i=a("aZikt"),P=a("hHMPk"),I=a("dczY0"),be=a("hJDxl"),A=a("cweFb"),O=a("g7X40");const Ne=P.default(A.Row).attrs({width:"350px"})`
  background-color: #4e44ce;
  height: 74px;
  border: 1px solid #665ddc;
  border-radius: 8px;
  padding: 15px;
`,Le=P.default(I.Column).attrs({justify:"center"})`
  margin-left: 15px;
`,Ze=P.default.span`
  display: inline;
  position: relative;
  top: ${e=>e.top};
  margin-left: 2px;
  margin-right: 2px;
`,Ke=()=>e(i).createElement(Ne,null,e(i).createElement(be.LogoNoBackground,null),e(i).createElement(Le,null,e(i).createElement(O.Text,{size:16,weight:600},"Pin the Phantom extension"),e(i).createElement(O.Text,{size:16,weight:400},"Click"," ",e(i).createElement(Ze,{top:"1px"},e(i).createElement(be.ChromeExtensionIcon,{width:16,height:16}))," ","and then"," ",e(i).createElement(Ze,{top:"3px"},e(i).createElement(be.PinChromeExtensionIcon,{width:9.49,height:16}))," ","and voilà!"))),ze=P.default(I.Column)`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,Ue=P.default(R.Button).attrs({borderRadius:"6px"})`
  &:hover {
    path {
      fill: white;
    }
  }
`,Ge=P.default(A.Row).attrs({justify:"space-between"})`
  padding: 0 20px;
`,$e=P.default(je.motion.div)`
  position: fixed;
  top: 16px;
  right: 16px;
`,Ve=()=>{const{t:t}=T.useTranslation(),n=[{id:0,icon:e(i).createElement(be.TwitterIcon,null),text:t("onboardingSocialsFollowOnTwitter"),onClick:()=>{g.analytics.capture("onboardingTwitterClick"),window.open(Te.PHANTOM_TWITTER_URL,"_blank")}},{id:1,icon:e(i).createElement(be.HelpIcon,{fill:"#fff",width:20}),text:t("onboardingSocialsVisitHelpCenter"),onClick:()=>{g.analytics.capture("onboardingHelpCenterClick"),window.open(Te.PHANTOM_SUPPORT_URL,"_blank")}}];return e(i).createElement(e(i).Fragment,null,e(i).createElement(N,{onSubmit:()=>{g.analytics.capture("onboardingFinishClick"),window.close()},title:t("onboardingSocialsFinished"),subtitle:t("onboardingSocialsFinishedDescription"),buttonTheme:"primary",buttonText:t("onboardingSocialsFinishAction")},e(i).createElement(ze,null,n.map((({id:t,icon:n,text:o,onClick:r})=>e(i).createElement(Ue,{key:t,onClick:r},e(i).createElement(Ge,null,e(i).createElement(A.Row,null,n,e(i).createElement(O.Text,{size:16,weight:600,lineHeight:19,margin:"0 0 0 20px"},o)),e(i).createElement(be.RightChevronIcon,null))))))),e(i).createElement($e,{animate:{opacity:1},initial:{opacity:0},transition:{delay:.4}},e(i).createElement(Ke,null)))},Xe=P.default(A.Row).attrs({justify:"center"})`
  height: 80px;
  width: ${e=>e.width}px;
  border-radius: 10px;
  background-color: #333333;
  transition: transform 200ms ease;
  &:not(:last-child) {
    margin-right: 20px;
  }
  ${e=>!e.isHighlighted&&P.css`
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      transform: translate(0, -5px);
    `}
  svg {
    fill: ${e=>e.isHighlighted?"white":"#999999"};
    transition: fill 200ms ease;
  }
`;Xe.defaultProps={width:"80px"};const Ye=()=>{var t;const{t:n}=T.useTranslation(),{pushStep:o}=Bt(),r=Re.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen),a=Re.useStoreStorageValue(h.StorageKeys.PopupHasBeenSeen),l=null!==(t=r.data)&&void 0!==t&&t,c=We("p"),u=We("Shift"),s=We("Alt"),d=De.BROWSER_ENV.os.name===_e.OS_MAP.MacOS,m=d?"107px":"80px",p=n(d?"onboardingKeyboardShortcutMac":"onboardingKeyboardShortcutNotMac"),f=[{id:"altOption",isHighlighted:s,width:m,icon:d?e(i).createElement(be.OptionIcon,null):e(i).createElement(be.AltIcon,null)},{id:"shift",isHighlighted:u,icon:e(i).createElement(be.ShiftIcon,null)},{id:"p",isHighlighted:c,icon:e(i).createElement(be.PKeyIcon,null)}];return e(i).createElement(N,{onSubmit:()=>{l||a.mutate(!0),o(e(i).createElement(Ve,null))},title:n("onboardingKeyboardShortcut"),subtitle:n("onboardingKeyboardShortcutDescription"),buttonTheme:"primary",buttonText:n("onboardingKeyboardShortcutContinue")},e(i).createElement(A.Row,{justify:"center",margin:"0 0 30px 0"},f.map((({id:t,isHighlighted:n,width:o,icon:r})=>e(i).createElement(Xe,{key:t,isHighlighted:n,width:o},r)))),e(i).createElement(A.Row,{justify:"center"},e(i).createElement(O.Text,{size:17,weight:500,color:"#999"},n("onboardingKeyboardShortcutTry")," ",p)))};var Je=a("dkOkP").Buffer,Qe=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const qe=P.default(I.Column).attrs({justify:"space-between"})`
  position: relative;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 17px;
  background: #181818;
  border-width: 1px;
  border-style: solid;
  border-color: #2f2f2f;
  border-radius: 6px;
  padding: 10px;
`,et=P.default(I.Column)`
  align-items: center;
  display: flex;
  position: relative;
`,tt=P.default(A.Row).attrs({justify:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`,nt=P.default(R.Button)`
  padding: 10px 0;
`,ot=P.default(A.Row)`
  svg {
    margin-right: 10px;
  }
`,rt=({password:t})=>{var n,o;const{t:r}=T.useTranslation(),{pushStep:a,freshSeedAndMnemonic:l}=Bt(),c=null==l?void 0:l.seed,u=null!==(n=null==l?void 0:l.mnemonic)&&void 0!==n?n:Te.DEFAULT_SEED_AND_MNEMONIC.mnemonic,[s,d]=i.useState(!1),[m,p]=i.useState(!1),[f,b]=i.useState(!0),[v,E]=i.useState(!1),x=i.useRef(null).current,w=null!==(o=Re.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen).data)&&void 0!==o&&o,y=()=>{b(!0),null==x||x.setSelectionRange(0,0),null==x||x.blur()},S=()=>{f&&(b(!1),null==x||x.focus(),null==x||x.setSelectionRange(0,0))},C=e=>{if(!e)return;const t=Object.values(e)[0];if("number"==typeof t&&!s);else if("boolean"==typeof t){t&&(m||p(!0),v||E(!0))}},k=e=>{const t=JSON.stringify(e),[n,o,r]=(()=>{switch(De.BROWSER_ENV.browser.name){case _e.BROWSER_MAP.chrome:return[Te.ONE_PASSWORD_CHROME_STABLE,Te.ONE_PASSWORD_CHROME_BETA];case _e.BROWSER_MAP.firefox:return[Te.ONE_PASSWORD_FIREFOX_STABLE,Te.ONE_PASSWORD_FIREFOX_BETA];case _e.BROWSER_MAP.edge:return[Te.ONE_PASSWORD_EDGE_STABLE,Te.ONE_PASSWORD_CHROME_STABLE,Te.ONE_PASSWORD_CHROME_BETA];default:return[Te.ONE_PASSWORD_CHROME_STABLE,Te.ONE_PASSWORD_CHROME_BETA]}})();He.browser.runtime.sendMessage(n,t).then(C).catch((()=>{He.browser.runtime.sendMessage(o,t).then(C).catch((()=>{r&&He.browser.runtime.sendMessage(r,t).then(C).catch()}))}))};return i.useEffect((()=>{let e;return m&&(e=setTimeout((()=>{p(!1)}),5e3)),()=>{e&&clearTimeout(e)}}),[m]),e(i).createElement(N,{onSubmit:()=>Qe(void 0,void 0,void 0,(function*(){l&&(g.analytics.capture("onboardingCreateNewWallet"),a(e(i).createElement(Ye,null)),w&&a(e(i).createElement(Ve,null)))})),title:r("onboardingCreateRecoveryPhraseSecretRecoveryPhrase"),subtitle:r("onboardingCreateRecoveryPhraseSecretRecoveryPhraseReminder"),subtitleColor:"#FFDC62",buttonTheme:v?"primary":"default",buttonText:r("onboardingCreateRecoveryPhraseContinue"),buttonDisabled:!v},e(i).createElement(qe,{onMouseEnter:S,onMouseLeave:y},e(i).createElement(et,{onClick:S},f&&e(i).createElement(tt,null,e(i).createElement(be.PrivacyEyeIcon,null)),e(i).createElement(Be.SecretCanvas,{onBlur:y,onFocus:S,isBlurred:f,mnemonic:u,width:330})),s&&e(i).createElement(nt,{onClick:()=>{if(!c||!u.length)return;const{publicKey:e}=Me.createSeedAccount(Je.from(c,"hex"),"Wallet 1",0,h.DerivationPathType.Bip44Change),n={name:"create-item",data:{type:"",saveRequest:{title:"Phantom Wallet",fields:[{autocomplete:"crypto-address",value:e},{autocomplete:"crypto-recovery-seed",value:u.toString()},{autocomplete:"current-password",value:t}],notes:void 0}}};k(n)}},e(i).createElement(ot,{justify:"center"},e(i).createElement(be.OnePasswordIcon,null),r(m?"onboardingCreateRecoveryPhraseSaved":"onboardingCreateRecoveryPhraseSaveIn1Password")))),e(i).createElement(z.CheckboxGroup,null,e(i).createElement(z.Checkbox,{checked:v,onChange:()=>{E(!v)}}),e(i).createElement(O.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(T.Trans,{i18nKey:"onboardingCreateRecoveryPhraseSavedSecretRecoveryPhrase"}))))};var at=a("dkOkP").Buffer,it=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const lt={password:"",confirmPassword:""},ct=P.default(I.Column)`
  margin-bottom: ${e=>e.needsExtraMargin?37:17}px;
  input[name="password"] {
    margin-bottom: 10px;
  }
`,ut=P.default.div`
  position: relative;
  width: 100%;
`,st=P.default(O.Text).attrs({size:14,lineHeight:19,margin:"0",weight:600})`
  position: absolute;
  top: 15px;
  right: 14px;
`,dt=()=>{var t;const{t:n}=T.useTranslation(),{accountMetas:o,importAccountMetas:r}=p.useAccountImporter(),{onboardingType:a,setCanCreateSeedAndMnemonic:l,freshSeedAndMnemonic:c,importedSeedAndMnemonic:u,pushStep:s}=Bt(),d=a===Ht.Create,m=a===Ht.Import,f=a===Ht.Restore,b=Re.useFetchStorageValue(h.StorageKeys.TermsHaveBeenAcknowledgedV2),v=Re.useStoreStorageValue(h.StorageKeys.TermsHaveBeenAcknowledgedV2),E=i.useMemo((()=>{var e;return null!==(e=b.data)&&void 0!==e&&e}),[b.data]),x=null!==(t=Re.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen).data)&&void 0!==t&&t,[w,y]=i.useState(lt),{password:S,confirmPassword:C}=w,[k,P]=i.useState(void 0),M=i.useMemo((()=>{const e=S.length;switch(!0){case e>0&&e<8:return n("onboardingCreatePasswordPasswordStrengthWeak");case e>=8&&e<21:return n("onboardingCreatePasswordPasswordStrengthMedium");case e>=21:return n("onboardingCreatePasswordPasswordStrengthStrong");default:return}}),[S]),A=i.useMemo((()=>{switch(M){case n("onboardingCreatePasswordPasswordStrengthWeak"):return"#EB3742";case n("onboardingCreatePasswordPasswordStrengthMedium"):return"#FFDC62";case n("onboardingCreatePasswordPasswordStrengthStrong"):return"#21E56F";default:return"#777777"}}),[M]),R=!f&&!E||!S||!C,I=e=>{const{name:t,value:n}=e.currentTarget;k&&P(void 0),y(Object.assign(Object.assign({},w),{[t]:n}))},F=e=>it(void 0,void 0,void 0,(function*(){if(!e)throw new Error("Failed to import accounts: missing a seed and mnemonic.");try{if(yield Me.setSeedAndMnemonicWithPassword(e,S),o.length)yield r(o);else{const t=at.from(e.seed,"hex"),n=Me.createSeedAccount(t,"Wallet 1",0,h.DerivationPathType.Bip44Change);yield r([n])}}catch(e){(null==e?void 0:e.message.includes("Invalid seed"))?P(n("onboardingCreatePasswordErrorInvalidSecretRecoveryPhrase")):console.error(e)}}));return e(i).createElement(N,{onSubmit:()=>it(void 0,void 0,void 0,(function*(){const t=Ae.validatePassword(S),n=Ae.validateConfirmPassword(S,C);t||n?P(null!=t?t:n):d?(F(c),l(!1),g.analytics.capture("onboardingCreatePassword"),Oe.acknowledgeWhatsNewOverlay(),s(e(i).createElement(Fe.OnboardingCreateRecoveryPhrase,{password:S}))):(F(u),g.analytics.capture(m?"importWalletCreatePassword":"restoreWalletCreatePassword"),Oe.acknowledgeWhatsNewOverlay(),s(e(i).createElement(Ye,null)),x&&s(e(i).createElement(Ve,null)))})),title:n("onboardingCreatePassword"),subtitle:n("onboardingCreatePasswordDescription"),buttonTheme:R?"default":"primary",buttonText:n("onboardingCreatePasswordContinue"),buttonDisabled:R},e(i).createElement(ct,{needsExtraMargin:!!k},e(i).createElement(Ie.Input,{type:"password",name:"password",placeholder:n("onboardingCreatePasswordPasswordPlaceholder"),onChange:I}),e(i).createElement(ut,null,e(i).createElement(Ie.Input.WithWarning,{type:"password",name:"confirmPassword",placeholder:n("onboardingCreatePasswordConfirmPasswordPlaceholder"),onChange:I,warningMessage:k}),!!M&&e(i).createElement(st,{color:A},M))),!f&&e(i).createElement(z.CheckboxGroup,null,e(i).createElement(z.Checkbox,{checked:E,onChange:()=>{const e=E;v.mutate(!e)}}),e(i).createElement(O.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(T.Trans,{i18nKey:"onboardingCreatePasswordAgreeToTermsOfServiceInterpolated"},"I agree to the ",e(i).createElement("label",{onClick:()=>{g.analytics.capture("onboardingTermsClick"),window.open(Te.PHANTOM_TERMS_URL,"_blank")}},"Terms of Service")))))};var mt=a("dkOkP").Buffer;const pt=P.default(I.Column).attrs({align:"center",justify:"center"})`
  height: 210px;
`,ht=P.default(A.Row).attrs({justify:"center"})`
  flex-flow: column;
  max-height: 210px;
  overflow-y: scroll;
  ul {
    margin: 0;
    width: 100%;
  }
`,ft=()=>{const{t:t}=T.useTranslation(),{setAccountMetas:n}=p.useAccountImporter(),{importedSeedAndMnemonic:o,pushStep:r}=Bt(),a=(null==o?void 0:o.seed)?mt.from(o.seed,"hex"):void 0,l=L.useFetchAccountsBySeed(a),c=i.useMemo((()=>{var e;return null!==(e=l.data)&&void 0!==e?e:[]}),[l.data]),u=l.isFetched,[s,d]=i.useState([]),m=s.length,h=i.useMemo((()=>{const e=c.filter((e=>e.sigs>0||e.lamports>0));return(e.length?e:c.slice(0,1)).map((e=>e.meta.publicKey))}),[c]);return i.useEffect((()=>{d((e=>m?e:h))}),[h]),e(i).createElement(N,{onSubmit:()=>{const t=new Set(s),o=c.filter((e=>t.has(e.meta.publicKey))).map((({meta:e},t)=>Object.assign(Object.assign({},e),{name:`Wallet ${t+1}`})));n(o),r(e(i).createElement(Pe.OnboardingCreatePassword,null))},title:t("onboardingSelectAccountsImportAccounts"),subtitle:t("onboardingSelectAccountsImportAccountsDescription"),subtitleColor:"#999",buttonTheme:m?"primary":"default",buttonText:t("onboardingSelectAccountsImportSelectedAccounts"),buttonDisabled:!m},u?e(i).createElement(ht,null,e(i).createElement(Se,{accounts:c,defaultSelected:h,onChange:d})):e(i).createElement(pt,null,e(i).createElement(Z.Spinner,null)))};var gt=a("dkOkP").Buffer,bt=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const vt=P.default(A.Row).attrs({align:"center",justify:"center",width:"120px"})`
  color: #fff;
  background: #181818;
  border: 1px solid #2f2f2f;
  border-radius: 6px;
  align-self: center;
  height: 41px;
  &:focus-within {
    border: 1px solid #8a81f8;
  }
`,Et=P.default.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  row-gap: 10px;
  ${vt}:nth-child(3n-2) {
    justify-self: left;
  }
  ${vt}:nth-child(3n+2) {
    justify-self: center;
  }
  ${vt}:nth-child(3n+3) {
    justify-self: right;
  }
`,xt=P.default(O.Text).attrs({size:14,color:"#999999"})``,wt=P.default.input`
  color: #fff;
  background: none;
  border: none;
  width: 65%;
  &:focus {
    outline: 0;
  }
`,yt=P.default.div`
  height: 24px;
  padding: 12px 0 30px;
`,St=P.default(A.Row).attrs({align:"center",justify:"center"})``,Ct=P.default.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: #777;
  &:hover {
    color: #8a81f8;
    p {
      color: #8a81f8;
    }
  }
`,kt=P.default(O.Text).attrs({color:"#eb3742",size:16,textAlign:"left"})``,Pt=()=>{const{t:t}=T.useTranslation(),{onboardingType:n,pushStep:o,setImportedSeedAndMnemonic:r}=Bt(),a=n===Ht.Restore,[l,c]=y.useToggle(!1),u=l?24:12,[s,d]=i.useState(new Array(u)),[m,p]=i.useState(void 0),h=-1===s.findIndex((e=>void 0===e));return i.useEffect((()=>{const e=s.slice(0,12);if(24===u){const t=new Array(12);d([...e,...t])}else d(e)}),[l]),e(i).createElement(N,{onSubmit:()=>bt(void 0,void 0,void 0,(function*(){try{const t=gt.from(" "),n=s.reduce(((e,n)=>gt.concat([e,t,n]))),l=yield M.toSeedAndMnemonic(n);r({seed:gt.from(l.seed).toString("hex"),mnemonic:n}),g.analytics.capture(a?"restoreWalletRestore":"onboardingImportWallet"),o(e(i).createElement(ft,null))}catch(e){p(t("onboardingImportWalletErrorInvalidSecretRecoveryPhrase")),console.error(e)}})),title:t("onboardingImportWalletSecretRecoveryPhrase"),subtitle:t("onboardingImportWalletImportExistingWallet"),buttonTheme:h?"primary":"default",buttonText:t(a?"onboardingImportWalletRestoreWallet":"onboardingImportWallet"),buttonDisabled:!h},e(i).createElement(Et,null,[...Array(u)].map(((t,n)=>e(i).createElement(vt,{key:n},e(i).createElement(xt,null,`${n+1}.`),e(i).createElement(wt,{autoComplete:"off",autoCorrect:"off",spellCheck:!1,id:`word_${n}`,key:`word_${n}`,onChange:e=>((e,t)=>{m&&p(void 0);const n=[...s],o=e.replaceAll(/\s+/g," ").toLowerCase().trim();n[t]=gt.from(o),d(n)})(e.target.value,n),pattern:"[A-Za-z\\s]+"}))))),e(i).createElement(yt,null,m&&e(i).createElement(kt,null,m),!m&&e(i).createElement(St,null,e(i).createElement(Ct,{onClick:()=>c(!l)},t("onboardingImportWalletIHaveWords",{numWords:l?12:24})))))};var Tt={};t(Tt,"OnboardingPathSelection",(function(){return Ft}),(function(e){return Ft=e}));i=a("aZikt"),P=a("hHMPk"),T=a("7Qmuu"),M=a("3XPpL"),R=a("aADTv"),I=a("dczY0"),be=a("hJDxl"),O=a("g7X40");var Mt=a("dkOkP").Buffer,At=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const Ot=P.default(I.Column).attrs({justify:"center"})`
  height: 100%;
  flex: 1;
`,Rt=P.default(I.Column).attrs({align:"center",justify:"center"})`
  svg:nth-child(2) {
    margin: 20px 0;
  }
`,It=P.default(I.Column).attrs({justify:"flex-end"})`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,Ft=()=>{const{t:t}=T.useTranslation(),{setOnboardingType:n,canCreateSeedAndMnemonic:o,setFreshSeedAndMnemonic:r,pushStep:a}=Bt();return e(i).createElement(Ot,null,e(i).createElement(_,null,e(i).createElement(Rt,null,e(i).createElement(be.Logo,null),e(i).createElement(be.LogoBrand,null),e(i).createElement(O.Text,{color:"#999",size:17},t("onboardingPathSelectionTagline")))),e(i).createElement(It,null,e(i).createElement(R.Button,{theme:"primary",onClick:()=>At(void 0,void 0,void 0,(function*(){o&&(yield At(void 0,void 0,void 0,(function*(){try{const e=yield M.createMnemonic(),t=yield M.toSeedAndMnemonic(e);r({seed:Mt.from(t.seed).toString("hex"),mnemonic:e})}catch(e){console.error(e)}}))),n(Ht.Create),a(e(i).createElement(Pe.OnboardingCreatePassword,null))}))},t("onboardingPathSelectionCreateWallet")),e(i).createElement(R.Button,{onClick:()=>{n(Ht.Import),a(e(i).createElement(k.OnboardingImportWallet,null))}},t("onboardingPathSelectionIHaveAWallet"))))};var Ht;!function(e){e.Initial="initial",e.Create="create",e.Import="import",e.Restore="restore"}(Ht||(Ht={}));const _t=i.createContext(null),Dt=({children:t})=>{var n;const{search:o}=c.useLocation(),r=new URLSearchParams(o).get("restore"),[a,l]=i.useState(!0),[u,s]=i.useState(void 0),[d,m]=i.useState(void 0),[p,h]=i.useState(r?Ht.Restore:Ht.Initial),[f,b]=i.useState([]),v=null!==(n=y.usePreviousDistinct(f,((e,t)=>(null==e?void 0:e.length)===t.length)))&&void 0!==n?n:[],E=C.getLast(f);return i.useEffect((()=>{r?(g.analytics.capture("restoreWalletOpen"),b([e(i).createElement(k.OnboardingImportWallet,null)])):(g.analytics.capture("onboardingOpen"),b([e(i).createElement(Tt.OnboardingPathSelection,null)]))}),[]),e(i).createElement(_t.Provider,{value:{canCreateSeedAndMnemonic:a,setCanCreateSeedAndMnemonic:l,freshSeedAndMnemonic:u,setFreshSeedAndMnemonic:s,importedSeedAndMnemonic:d,setImportedSeedAndMnemonic:m,onboardingType:p,setOnboardingType:h,onboardingStack:f,prevOnboardingStack:v,currentStep:E,pushStep:e=>{b((t=>S.default(t,(t=>{t.push(e)}))))},popStep:()=>{b((e=>S.default(e,(e=>{e.pop()}))))}}},t)},Bt=()=>{const e=i.useContext(_t);if(!e)throw new Error("Missing onboarding context");return e};var Wt=a("9P0Mo"),jt=a("i2Zy4"),Nt=(i=a("aZikt"),P=a("hHMPk"),je=a("d3pmY"),A=a("cweFb"),i=a("aZikt"),P=a("hHMPk"),C=a("7eQt4"),a("hoJun")),Lt=a("8FNEt");be=a("hJDxl"),A=a("cweFb");const Zt=P.default(A.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
`,Kt=P.default(A.Row).attrs({justify:"center"})`
  > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`,zt=P.default.div`
  width: 24px;
  height: 24px;
`,Ut=()=>{const{onboardingType:t,onboardingStack:n,popStep:o}=Bt(),r=t===Ht.Create,a=(Ht.Import,t===Ht.Restore),l=n.length,c=a?l-1:l-2,u=!a||0!==c,s=r?4:5;return e(i).createElement(Zt,null,e(i).createElement(zt,null,u&&e(i).createElement(Nt.ChevronCircle,{right:1,onClick:o},e(i).createElement(be.LeftChevronIcon,null))),e(i).createElement(Kt,null,C.range(s).map((t=>e(i).createElement(Lt.Circle,{key:t,diameter:12,color:t<=c?"#4E44CE":"#333"})))))},Gt=P.default.main`
  width: ${420}px;
  min-height: ${504}px;
  position: relative;
  overflow: hidden;
  background-color: #222222;
  border: 1px solid #323232;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`,$t=P.default(A.Row)`
  height: ${46}px;
`,Vt=P.default(je.motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(${458}px);
  padding: 20px;
`,Xt=()=>{const{onboardingType:t,onboardingStack:n,prevOnboardingStack:o,currentStep:r}=Bt(),a=t===Ht.Restore,l=n.length,c=l>o.length,u=l>1||a,s=0===o.length,d=s?1:0,m=`${l}_${o.length}`,p={initial:{opacity:d},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2,duration:.2}},h={initial:{x:s?0:c?150:-150,opacity:d},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(i).createElement(Gt,null,u?e(i).createElement(je.motion.div,Object.assign({},p),e(i).createElement(Ut,null)):e(i).createElement($t,null),e(i).createElement(je.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(Vt,Object.assign({key:m},h),r)))};u.initSentry(),l.render(e(i).createElement(c.BrowserRouter,null,e(i).createElement(s.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(i).createElement(w.BannerProvider,null,e(i).createElement(d.QueryProvider,null,e(i).createElement(m.FeatureFlagsProvider,null,e(i).createElement(p.AccountImporterProvider,null,e(i).createElement(Wt.FullPageHeader,null),e(i).createElement(jt.OnboardingAndConnectHardwareErrorBoundary,null,e(i).createElement(Dt,null,e(i).createElement(Xt,null)))))))),document.getElementById("root"));define=__define;})(window.define);