(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequirea886=a);var i=a("aZikt"),l=a("ihAua"),c=a("gDkTC");a("6CHoY");var s=a("ci2Mj"),u=a("5cKs6"),d=a("h5G75"),m=a("ixd3d"),p={};t(p,"AccountImporterProvider",(function(){return v}),(function(e){return v=e})),t(p,"useAccountImporter",(function(){return y}),(function(e){return y=e}));i=a("aZikt");var h=a("lwple"),f=a("czDD7"),g=(h=a("lwple"),a("8C6BZ")),b=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const w=i.createContext({accountMetas:[],setAccountMetas(){},importAccountMetas(){return b(this,void 0,void 0,(function*(){}))}}),v=({children:t})=>{const[n,r]=i.useState([]),o=i.useCallback((e=>b(void 0,void 0,void 0,(function*(){yield f.setStorageValue(h.StorageKeys.AccountMetas,e);for(const t of e)t.type===h.AccountType.Seed&&g.analytics.capture("addSeedAccount",{data:{walletIndex:t.walletIndex}});yield f.setStorageValue(h.StorageKeys.SelectedAccountIndex,0)}))),[]);return e(i).createElement(w.Provider,{value:{accountMetas:n,setAccountMetas:r,importAccountMetas:o}},t)},y=()=>i.useContext(w);var E={};t(E,"OnboardingType",(function(){return Ht}),(function(e){return Ht=e})),t(E,"OnboardingProvider",(function(){return Wt}),(function(e){return Wt=e})),t(E,"useOnboarding",(function(){return jt}),(function(e){return jt=e}));i=a("aZikt"),c=a("gDkTC");var x=a("lxqKj"),C=a("ehJ6P");a("6CHoY");var S={};t(S,"SecureBytes",(function(){return I}),(function(e){return I=e}));var k,P,T=a("4RIUn"),O=function(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n},R=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};const M=e=>(null===window||void 0===window?void 0:window.crypto)?window.crypto.getRandomValues(new Uint8Array(e)):T.randomBytes(e),A=(e,t)=>{const n=e.length,r=new Uint8Array(n);for(let o=0;o<n;o++)r[o]=e[o]^t[o];return r};class I{static from(e){return new I(e)}constructor(e){k.set(this,void 0),P.set(this,void 0),this.read=e=>{const t=((e,t)=>{const n=e.length,r=new Uint8Array(n);for(let o=0;o<n;o++)r[o]=e[o]^t[o];return r})(R(this,k,"f"),R(this,P,"f"));let n=null;try{e(t)}catch(e){n=e}finally{const e=M(t.length),r=A(t,e);if(t.fill(0),O(this,P,e,"f"),O(this,k,r,"f"),n)throw n}};const t=e.length,n=M(t),r=A(e,n);O(this,P,n,"f"),O(this,k,r,"f")}}k=new WeakMap,P=new WeakMap;var D=a("7eQt4"),F=(g=a("8C6BZ"),{});t(F,"OnboardingImportWallet",(function(){return Ot}),(function(e){return Ot=e}));i=a("aZikt");var H=a("hHMPk"),_=a("7Qmuu"),B=(g=a("8C6BZ"),a("cweFb")),W=a("g7X40"),j=(i=a("aZikt"),H=a("hHMPk"),a("aADTv")),N=a("dczY0");W=a("g7X40"),i=a("aZikt"),H=a("hHMPk"),N=a("dczY0");const L=H.default(N.Column).attrs({justify:"center"})`
  height: 100%;
  margin-bottom: 20px; // to offset <OnboardingContent /> 20px padding. See (onboarding_flow.tsx)
  flex: 1;
`,U=H.default.div`
  width: 100%;
  height: fit-content;
`,K=({children:t})=>e(i).createElement(L,null,e(i).createElement(U,null,t)),Z=H.default.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`,z=H.default(N.Column).attrs({align:"center"})`
  margin-bottom: 20px;
`,G=H.default(W.Text).attrs({color:"FFFFFF",weight:500,size:28,lineHeight:34,textAlign:"center",margin:"0 0 10px 0"})``,V=H.default(W.Text).attrs((e=>{var t;return{size:16,color:null!==(t=e.color)&&void 0!==t?t:"#999"}}))``,$=({onSubmit:t,title:n,subtitle:r,subtitleColor:o,buttonTheme:a="default",buttonText:l,buttonDisabled:c,children:s})=>e(i).createElement(Z,{onSubmit:e=>{e.preventDefault(),t()},"data-testid":"onboarding-form"},e(i).createElement(K,null,e(i).createElement(z,null,e(i).createElement(G,null,n),e(i).createElement(V,{color:o},r)),s),e(i).createElement(j.Button,{"data-testid":"onboarding-form-submit-button",type:"submit",theme:a,disabled:c},l));i=a("aZikt"),H=a("hHMPk"),_=a("7Qmuu");var X=a("7rvxc"),Y=(B=a("cweFb"),N=a("dczY0"),a("lPkGw")),J=(i=a("aZikt"),H=a("hHMPk"),a("cFuyE")),Q={};t(Q,"CheckboxGroup",(function(){return Oe}),(function(e){return Oe=e})),t(Q,"Checkbox",(function(){return Re}),(function(e){return Re=e}));i=a("aZikt"),H=a("hHMPk"),i=a("aZikt");var q=a("f9f8D"),ee=a("52Tb2"),te=a("itADJ"),ne=a("d8po8"),re=a("fIGG7"),oe=a("kHzXS"),ae=a("abL1A");function ie(){return ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ie.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var ce,se,ue;function de(e){return!(!e||e.isControlled||e.disabled)}function me(e){return function(t,n){return t&&t.isControlled&&n.state===e}}!function(e){e.Checked="checked",e.Mixed="mixed",e.Unchecked="unchecked"}(se||(se={})),function(e){e.GetDerivedData="GET_DERIVED_DATA",e.Mount="MOUNT",e.Set="SET",e.Toggle="TOGGLE",e.Unmount="UNMOUNT"}(ue||(ue={}));var pe=ae.assign((function(e,t){return ie({},e,{refs:t.refs})})),he=((ce={})[ue.Mount]={actions:pe},ce[ue.GetDerivedData]={actions:[pe,ae.assign((function(e,t){return ie({},e,t.data)}))]},ce[ue.Set]=[{target:se.Checked,cond:me(se.Checked)},{target:se.Unchecked,cond:me(se.Unchecked)},{target:se.Mixed,cond:me(se.Mixed)}],ce);function fe(e,t,n){void 0===n&&(n="useMixedCheckbox");var r,o=t||{},a=o.checked,l=o.defaultChecked,c=o.disabled,s=o.onChange,u=o.onClick,d=null!=a,m=ae.useCreateMachine(function(e,t){var n,r,o,a;return{id:"mixed-checkbox",initial:e,context:{disabled:t.disabled,isControlled:t.isControlled,refs:{input:null}},states:(a={},a[se.Unchecked]={entry:pe,on:ie((n={},n[ue.Toggle]={target:se.Checked,cond:de},n),he)},a[se.Checked]={entry:pe,on:ie((r={},r[ue.Toggle]={target:se.Unchecked,cond:de},r),he)},a[se.Mixed]={entry:pe,on:ie((o={},o[ue.Toggle]={target:se.Checked,cond:de},o),he)},a)}}(ge(d?a:l),{disabled:!!c,isControlled:d})),p=ae.useMachine(m,{input:e},false),h=p[0],f=p[1],g={"aria-checked":be(h.value),checked:(r=h.value,r===se.Checked),disabled:!!c,onChange:re.composeEventHandlers(s,(function(){d||f(ue.Toggle)})),onClick:re.composeEventHandlers(u,(function(){w()})),type:"checkbox"},b={checked:be(h.value)};function w(){e.current&&(e.current.indeterminate=h.value===se.Mixed)}return i.useEffect((function(){d&&f({type:ue.Set,state:ge(a)})}),[d,a,f]),oe.useIsomorphicLayoutEffect(w),i.useEffect((function(){f({type:ue.GetDerivedData,data:{disabled:c,isControlled:d}})}),[c,d,f]),[g,b]}function ge(e){return!0===e?se.Checked:"mixed"===e?se.Mixed:se.Unchecked}function be(e){return e===se.Checked||e===se.Mixed&&"mixed"}function we(e,t,n){var r=null!=e,o=i.useRef(r).current;i.useEffect((function(){}),[n,t,r,o])}var ve=["as","checked","children","defaultChecked","disabled","onClick","onChange","__componentName"],ye=["as","onBlur","onFocus"],Ee=q.createNamedContext("CustomCheckboxContext",{});var xe=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"span":n,o=e.checked,a=e.children,l=e.defaultChecked,c=e.disabled,s=e.onClick,u=e.onChange,d=e.__componentName,m=void 0===d?"CustomCheckboxContainer":d,p=le(e,ve),h=i.useRef(null),f=fe(h,{defaultChecked:l,checked:o,disabled:c,onChange:u},m),g=f[0],b=f[1],w=i.useState(!1),v=w[0],y=w[1];var E={defaultChecked:l,disabled:c,focused:v,inputProps:g,inputRef:h,setFocused:y};return we(o,"checked",m),te.useCheckStyles("checkbox"),i.createElement(Ee.Provider,{value:E},i.createElement(r,ie({},p,{ref:t,"data-reach-custom-checkbox-container":"","data-focused":v?"":void 0,"data-state":ge(b.checked),onClick:re.composeEventHandlers(s,(function(){window.requestAnimationFrame((function(){h.current&&h.current.focus()}))}))}),ee.isFunction(a)?a({checked:g["aria-checked"],inputRef:h,focused:v}):a))})),Ce=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"input":n,o=e.onBlur,a=e.onFocus,l=le(e,ye),c=i.useContext(Ee),s=c.focused,u=c.inputProps,d=c.inputRef,m=c.setFocused,p=ne.useComposedRefs(t,d),h=i.useRef(!0);return i.useEffect((function(){return function(){h.current=!1}}),[]),i.createElement(r,ie({},l,u,{ref:p,type:"checkbox","data-reach-custom-checkbox-input":"","data-focused":s?"":void 0,onBlur:re.composeEventHandlers(o,(function(){window.requestAnimationFrame((function(){h.current&&m(!1)}))})),onFocus:re.composeEventHandlers(a,(function(){window.requestAnimationFrame((function(){h.current&&m(!0)}))}))}))})),Se=a("99Anx"),ke=a("hJDxl"),Pe=(B=a("cweFb"),function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n});function Te(e){return{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",width:"100%",height:"100%",userSelect:"none",pointerEvents:"none",borderRadius:"6px",opacity:""+(e?1:0),transition:"transform 150ms ease-out, background 150ms ease-out",zIndex:1,background:!0===e?"#4E44CE":"transparent"}}const Oe=H.default(B.Row)`
  margin: ${e=>{var t;return null!==(t=e.margin)&&void 0!==t?t:0}};
  > * {
    margin-right: 10px;
  }
  label {
    color: #8a81f8;
    cursor: pointer;
    &:hover {
      color: ${Se.hexToRGB("#8A81F8",.5)};
    }
  }
`,Re=t=>{const{onChange:n}=t,r=Pe(t,["onChange"]),o=t.checked;return e(i).createElement(xe,{checked:null!=t.checked?t.checked:o,onChange:n,style:{background:"#181818",border:"1px solid #2F2F2F",borderRadius:"6px",height:22,minHeight:22,width:22,minWidth:22,cursor:"pointer",userSelect:"none",position:"relative",outlineColor:"transparent",outlineStyle:"none",boxShadow:"none"}},e(i).createElement(Ce,Object.assign({},r)),e(i).createElement("span",{"aria-hidden":!0,style:Te(o)},e(i).createElement(ke.CheckmarkIcon,{width:13})))};var Me=a("2MtnF");W=a("g7X40");const Ae=t=>{var n,r,o;const a=!!t.selected,[l,c]=i.useState(null!==(r=null!==(n=t.selected)&&void 0!==n?n:t.defaultSelected)&&void 0!==r?r:[]),s=null!==(o=t.selected)&&void 0!==o?o:l,u=new Set(s);return e(i).createElement(Ie,{"data-testid":"account-multiselect"},t.accounts.map((({meta:n,lamports:r})=>{const o=u.has(n.publicKey);return e(i).createElement(De,{"data-testid":`account-multiselect-address-row-${n.publicKey}`,key:n.publicKey,onClick:()=>{o?(e=>{var n,r;const o=new Set(s);o.delete(e);const i=[...o];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(r=t.onDeselect)||void 0===r||r.call(t,e)})(n.publicKey):(e=>{var n,r;const o=new Set(s);o.add(e);const i=[...o];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(r=t.onSelect)||void 0===r||r.call(t,e)})(n.publicKey)}},e(i).createElement(Q.CheckboxGroup,{width:"auto"},e(i).createElement(Q.Checkbox,{"data-testid":"account-multiselect-address-row-checkbox",checked:o}),e(i).createElement("span",null,J.formatHashMedium(n.publicKey,4))),e(i).createElement(W.Text,{color:"#777",size:14},e(i).createElement(Me.SolBalance,{format:"0,0.[000]"},r)))})))},Ie=H.default.ul`
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
`,De=H.default.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  label {
    color: #999;
  }
`;var Fe={};t(Fe,"OnboardingCreatePassword",(function(){return vt}),(function(e){return vt=e}));i=a("aZikt"),H=a("hHMPk"),_=a("7Qmuu");var He=a("6oEu9"),_e=(h=a("lwple"),a("hUfgV")),Be=(g=a("8C6BZ"),a("ebwnM")),We=a("cqRHn"),je=a("02ZG7"),Ne=a("a80wK"),Le=(W=a("g7X40"),N=a("dczY0"),{});t(Le,"OnboardingCreateRecoveryPhrase",(function(){return mt}),(function(e){return mt=e}));i=a("aZikt"),H=a("hHMPk");var Ue=a("e5x4G"),Ke=a("fCuks"),Ze=(_=a("7Qmuu"),a("6oEu9"),h=a("lwple"),_e=a("hUfgV"),a("4yWCU"));je=a("02ZG7"),g=a("8C6BZ"),ke=a("hJDxl"),W=a("g7X40"),B=a("cweFb"),N=a("dczY0"),j=a("aADTv"),i=a("aZikt"),H=a("hHMPk"),Ke=a("fCuks"),_=a("7Qmuu"),h=a("lwple"),Ze=a("4yWCU"),je=a("02ZG7"),i=a("aZikt");const ze=e=>{const[t,n]=i.useState(!1),r=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!0)},o=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!1)},a=()=>{n(!1)};return i.useEffect((()=>(window.addEventListener("keydown",r),window.addEventListener("keyup",o),window.addEventListener("blur",a),()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",o),window.removeEventListener("blur",a)})),[]),t};ke=a("hJDxl"),W=a("g7X40"),B=a("cweFb"),i=a("aZikt"),H=a("hHMPk");var Ge=a("d3pmY");_=a("7Qmuu"),He=a("6oEu9"),g=a("8C6BZ"),ke=a("hJDxl"),N=a("dczY0"),B=a("cweFb"),j=a("aADTv"),W=a("g7X40"),i=a("aZikt"),H=a("hHMPk"),N=a("dczY0"),ke=a("hJDxl"),B=a("cweFb"),W=a("g7X40");const Ve=H.default(B.Row).attrs({width:"350px"})`
  background-color: #4e44ce;
  height: 74px;
  border: 1px solid #665ddc;
  border-radius: 8px;
  padding: 15px;
`,$e=H.default(N.Column).attrs({justify:"center"})`
  margin-left: 15px;
`,Xe=H.default.span`
  display: inline;
  position: relative;
  top: ${e=>e.top};
  margin-left: 2px;
  margin-right: 2px;
`,Ye=()=>e(i).createElement(Ve,null,e(i).createElement(ke.LogoNoBackground,null),e(i).createElement($e,null,e(i).createElement(W.Text,{size:16,weight:600},"Pin the Phantom extension"),e(i).createElement(W.Text,{size:16,weight:400},"Click"," ",e(i).createElement(Xe,{top:"1px"},e(i).createElement(ke.ChromeExtensionIcon,{width:16,height:16}))," ","and then"," ",e(i).createElement(Xe,{top:"3px"},e(i).createElement(ke.PinChromeExtensionIcon,{width:9.49,height:16}))," ","and voilà!"))),Je=H.default(N.Column)`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,Qe=H.default(j.Button).attrs({borderRadius:"6px"})`
  &:hover {
    path {
      fill: white;
    }
  }
`,qe=H.default(B.Row).attrs({justify:"space-between"})`
  padding: 0 20px;
`,et=H.default(Ge.motion.div)`
  position: fixed;
  top: 16px;
  right: 16px;
`,tt=()=>{const{t:t}=_.useTranslation(),n=[{id:0,testid:"onboarding-twitter-button",icon:e(i).createElement(ke.TwitterIcon,null),text:t("onboardingSocialsFollowOnTwitter"),onClick:()=>{g.analytics.capture("onboardingTwitterClick"),window.open(He.PHANTOM_TWITTER_URL,"_blank")}},{id:1,testid:"onboarding-support-button",icon:e(i).createElement(ke.HelpIcon,{fill:"#fff",width:20}),text:t("onboardingSocialsVisitHelpCenter"),onClick:()=>{g.analytics.capture("onboardingHelpCenterClick"),window.open(He.PHANTOM_SUPPORT_URL,"_blank")}}];return e(i).createElement(e(i).Fragment,null,e(i).createElement($,{onSubmit:()=>{g.analytics.capture("onboardingFinishClick"),window.close()},title:t("onboardingSocialsFinished"),subtitle:t("onboardingSocialsFinishedDescription"),buttonTheme:"primary",buttonText:t("onboardingSocialsFinishAction")},e(i).createElement(Je,null,n.map((({id:t,testid:n,icon:r,text:o,onClick:a})=>e(i).createElement(Qe,{key:t,"data-testid":n,onClick:a},e(i).createElement(qe,null,e(i).createElement(B.Row,null,r,e(i).createElement(W.Text,{size:16,weight:600,lineHeight:19,margin:"0 0 0 20px"},o)),e(i).createElement(ke.RightChevronIcon,null))))))),e(i).createElement(et,{animate:{opacity:1},initial:{opacity:0},transition:{delay:.4}},e(i).createElement(Ye,null)))},nt=H.default(B.Row).attrs({justify:"center"})`
  height: 80px;
  width: ${e=>e.width}px;
  border-radius: 10px;
  background-color: #333333;
  transition: transform 200ms ease;
  &:not(:last-child) {
    margin-right: 20px;
  }
  ${e=>!e.isHighlighted&&H.css`
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      transform: translate(0, -5px);
    `}
  svg {
    fill: ${e=>e.isHighlighted?"white":"#999999"};
    transition: fill 200ms ease;
  }
`;nt.defaultProps={width:"80px"};const rt=()=>{var t;const{t:n}=_.useTranslation(),{pushStep:r}=E.useOnboarding(),o=je.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen),a=je.useStoreStorageValue(h.StorageKeys.PopupHasBeenSeen),l=null!==(t=o.data)&&void 0!==t&&t,c=ze("p"),s=ze("Shift"),u=ze("Alt"),d=Ze.BROWSER_ENV.os.name===Ke.OS_MAP.MacOS,m=d?"107px":"80px",p=n(d?"onboardingKeyboardShortcutMac":"onboardingKeyboardShortcutNotMac"),f=[{id:"altOption",isHighlighted:u,width:m,icon:d?e(i).createElement(ke.OptionIcon,null):e(i).createElement(ke.AltIcon,null)},{id:"shift",isHighlighted:s,icon:e(i).createElement(ke.ShiftIcon,null)},{id:"p",isHighlighted:c,icon:e(i).createElement(ke.PKeyIcon,null)}];return e(i).createElement($,{onSubmit:()=>{l||a.mutate(!0),r(e(i).createElement(tt,null))},title:n("onboardingKeyboardShortcut"),subtitle:n("onboardingKeyboardShortcutDescription"),buttonTheme:"primary",buttonText:n("onboardingKeyboardShortcutContinue")},e(i).createElement(B.Row,{justify:"center",margin:"0 0 30px 0"},f.map((({id:t,isHighlighted:n,width:r,icon:o})=>e(i).createElement(nt,{key:t,isHighlighted:n,width:r},o)))),e(i).createElement(B.Row,{justify:"center"},e(i).createElement(W.Text,{"data-testid":"onboarding-keyboard-shortcut-text",size:17,weight:500,color:"#999"},n("onboardingKeyboardShortcutTry")," ",p)))};var ot=a("5TDIN"),at=a("UhLns"),it=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const lt=H.default(N.Column).attrs({justify:"space-between"})`
  position: relative;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
  padding: 10px 0;
`,ct=H.default(N.Column)`
  align-items: center;
  display: flex;
  position: relative;
`,st=H.default(B.Row).attrs({justify:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`,ut=H.default(j.Button)`
  padding: 10px 0;
`,dt=H.default(B.Row)`
  svg {
    margin-right: 10px;
  }
`,mt=({password:t})=>{var n;const{t:r}=_.useTranslation(),{pushStep:o,mnemonic:a,secureMnemonic:l}=E.useOnboarding(),[{indexes:c,wordlist:s},u]=i.useState({indexes:[],wordlist:[]});i.useEffect((()=>{a&&ot.getBip39().then((e=>it(void 0,void 0,void 0,(function*(){const{wordlist:t}=e,n=Array.from(yield a.getIndexes());u({indexes:n,wordlist:t})})))).catch(console.error)}),[a]);const[d,m]=i.useState(!1),[p,f]=i.useState(!1),[b,w]=i.useState(!0),[v,y]=i.useState(!1),x=i.useRef(null).current,C=null!==(n=je.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen).data)&&void 0!==n&&n,S=()=>{b&&(w(!1),null==x||x.focus(),null==x||x.setSelectionRange(0,0))},k=e=>{if(!e)return;const t=Object.values(e)[0],n="boolean"==typeof t;if("number"==typeof t)"buildNumber"in e.data&&m(!1);else if(n){t&&(p||f(!0),v||y(!0))}},P=e=>{const t=JSON.stringify(e),[n,r,o]=(()=>{switch(Ze.BROWSER_ENV.browser.name){case Ke.BROWSER_MAP.chrome:return[He.ONE_PASSWORD_CHROME_STABLE,He.ONE_PASSWORD_CHROME_BETA,null];case Ke.BROWSER_MAP.firefox:return[He.ONE_PASSWORD_FIREFOX_STABLE,He.ONE_PASSWORD_FIREFOX_BETA,null];case Ke.BROWSER_MAP.edge:return[He.ONE_PASSWORD_EDGE_STABLE,He.ONE_PASSWORD_CHROME_STABLE,He.ONE_PASSWORD_CHROME_BETA];default:return[He.ONE_PASSWORD_CHROME_STABLE,He.ONE_PASSWORD_CHROME_BETA,null]}})();Ue.browser.runtime.sendMessage(n,t).then(k).catch((()=>{Ue.browser.runtime.sendMessage(r,t).then(k).catch((()=>{o&&Ue.browser.runtime.sendMessage(o,t).then(k).catch()}))}))};return i.useEffect((()=>{P({name:"hello"})}),[]),i.useEffect((()=>{let e;return p&&(e=setTimeout((()=>{f(!1)}),5e3)),()=>{e&&clearTimeout(e)}}),[p]),e(i).createElement($,{onSubmit:()=>it(void 0,void 0,void 0,(function*(){l&&(g.analytics.capture("onboardingCreateNewWallet"),o(e(i).createElement(rt,null)),C&&o(e(i).createElement(tt,null)))})),title:r("onboardingCreateRecoveryPhraseSecretRecoveryPhrase"),subtitle:r("onboardingCreateRecoveryPhraseSecretRecoveryPhraseReminder"),subtitleColor:"#FFDC62",buttonTheme:v?"primary":"default",buttonText:r("onboardingCreateRecoveryPhraseContinue"),buttonDisabled:!v},e(i).createElement(lt,{onMouseEnter:S,onMouseLeave:()=>{w(!0),null==x||x.setSelectionRange(0,0),null==x||x.blur()}},e(i).createElement(ct,{onClick:S},b&&e(i).createElement(st,null,e(i).createElement(ke.PrivacyEyeIcon,null)),e(i).createElement(at.MnemonicDisplay,{blur:b,readOnly:!0,indexes:c,wordlist:s})),d&&e(i).createElement(ut,{onClick:()=>it(void 0,void 0,void 0,(function*(){if(!l||!a)return;const e=yield a.deriveSeed();l.read((n=>{const{publicKey:r}=_e.createSeedAccount(e,"Wallet 1",0,h.DerivationPathType.Bip44Change);e.fill(0);const o={name:"create-item",data:{type:"115",saveRequest:{title:"Phantom Wallet",fields:[{autocomplete:"crypto-address",value:r},{autocomplete:"crypto-recovery-seed",value:Array.from(n)},{autocomplete:"current-password",value:t}]}}};P(o)}))}))},e(i).createElement(dt,{justify:"center"},e(i).createElement(ke.OnePasswordIcon,null),r(p?"onboardingCreateRecoveryPhraseSaved":"onboardingCreateRecoveryPhraseSaveIn1Password")))),e(i).createElement(Q.CheckboxGroup,null,e(i).createElement(Q.Checkbox,{"data-testid":"onboarding-form-saved-secret-recovery-phrase-checkbox",checked:v,onChange:()=>{y(!v)}}),e(i).createElement(W.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(_.Trans,{i18nKey:"onboardingCreateRecoveryPhraseSavedSecretRecoveryPhrase"}))))};var pt=a("aF4zF"),ht=(ot=a("5TDIN"),function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))});const ft={password:"",confirmPassword:""},gt=H.default(N.Column)`
  margin-bottom: ${e=>e.needsExtraMargin?37:17}px;
  input[name="password"] {
    margin-bottom: 10px;
  }
`,bt=H.default.div`
  position: relative;
  width: 100%;
`,wt=H.default(W.Text).attrs({size:14,lineHeight:19,margin:"0",weight:600})`
  position: absolute;
  top: 15px;
  right: 14px;
`,vt=()=>{var t;const{t:n}=_.useTranslation(),{accountMetas:r,importAccountMetas:o}=p.useAccountImporter(),{mnemonic:a,setMnemonic:l,onboardingType:c,pushStep:s}=E.useOnboarding(),u=c===E.OnboardingType.Create,d=c===E.OnboardingType.Import,m=c===E.OnboardingType.Restore,f=je.useFetchStorageValue(h.StorageKeys.TermsHaveBeenAcknowledgedV2),b=je.useStoreStorageValue(h.StorageKeys.TermsHaveBeenAcknowledgedV2),w=i.useMemo((()=>{var e;return null!==(e=f.data)&&void 0!==e&&e}),[f.data]),v=null!==(t=je.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen).data)&&void 0!==t&&t,[y,x]=i.useState(ft),{password:C,confirmPassword:S}=y,[k,P]=i.useState(void 0),T=i.useMemo((()=>{const e=C.length;switch(!0){case e>0&&e<8:return n("onboardingCreatePasswordPasswordStrengthWeak");case e>=8&&e<21:return n("onboardingCreatePasswordPasswordStrengthMedium");case e>=21:return n("onboardingCreatePasswordPasswordStrengthStrong");default:return}}),[C]),O=i.useMemo((()=>{switch(T){case n("onboardingCreatePasswordPasswordStrengthWeak"):return"#EB3742";case n("onboardingCreatePasswordPasswordStrengthMedium"):return"#FFDC62";case n("onboardingCreatePasswordPasswordStrengthStrong"):return"#21E56F";default:return"#777777"}}),[T]),R=!m&&!w||!C||!S,M=e=>{const{name:t,value:n}=e.currentTarget;k&&P(void 0),x(Object.assign(Object.assign({},y),{[t]:n}))},A=e=>ht(void 0,void 0,void 0,(function*(){try{if(!(yield pt.setMnemonic(C,{type:"bip39",value:e})))throw new Error("Failed to set seed phrase");if(r.length)yield o(r);else{const t=yield e.deriveSeed(),n=_e.createSeedAccount(t,"Wallet 1",0,h.DerivationPathType.Bip44Change);yield o([n])}}catch(e){(null==e?void 0:e.message.includes("Invalid seed"))?P(n("onboardingCreatePasswordErrorInvalidSecretRecoveryPhrase")):console.error(e)}}));return e(i).createElement($,{onSubmit:()=>ht(void 0,void 0,void 0,(function*(){const t=Be.validatePassword(C),n=Be.validateConfirmPassword(C,S);if(t||n)P(null!=t?t:n);else if(u){const t=(yield ot.getBip39()).fromSentenceLength(12);yield l(t),A(t),g.analytics.capture("onboardingCreatePassword"),We.acknowledgeWhatsNewOverlay(),s(e(i).createElement(Le.OnboardingCreateRecoveryPhrase,{password:C}))}else{if(!a)throw new Error("Invalid mnemonic");A(a),g.analytics.capture(d?"importWalletCreatePassword":"restoreWalletCreatePassword"),We.acknowledgeWhatsNewOverlay(),s(e(i).createElement(rt,null)),v&&s(e(i).createElement(tt,null))}})),title:n("onboardingCreatePassword"),subtitle:n("onboardingCreatePasswordDescription"),buttonTheme:R?"default":"primary",buttonText:n("onboardingCreatePasswordContinue"),buttonDisabled:R},e(i).createElement(gt,{needsExtraMargin:!!k},e(i).createElement(Ne.Input,{"data-testid":"onboarding-form-password-input",type:"password",name:"password",placeholder:n("onboardingCreatePasswordPasswordPlaceholder"),onChange:M}),e(i).createElement(bt,null,e(i).createElement(Ne.Input.WithWarning,{"data-testid":"onboarding-form-confirm-password-input",type:"password",name:"confirmPassword",placeholder:n("onboardingCreatePasswordConfirmPasswordPlaceholder"),onChange:M,warningMessage:k}),!!T&&e(i).createElement(wt,{color:O},T))),!m&&e(i).createElement(Q.CheckboxGroup,null,e(i).createElement(Q.Checkbox,{"data-testid":"onboarding-form-terms-of-service-checkbox",checked:w,onChange:()=>{const e=w;b.mutate(!e)}}),e(i).createElement(W.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(_.Trans,{i18nKey:"onboardingCreatePasswordAgreeToTermsOfServiceInterpolated"},"I agree to the ",e(i).createElement("label",{onClick:()=>{g.analytics.capture("onboardingTermsClick"),window.open(He.PHANTOM_TERMS_URL,"_blank")}},"Terms of Service")))))},yt=H.default(N.Column).attrs({align:"center",justify:"center"})`
  height: 210px;
`,Et=H.default(B.Row).attrs({justify:"center"})`
  flex-flow: column;
  max-height: 210px;
  overflow-y: scroll;
  ul {
    margin: 0;
    width: 100%;
  }
`,xt=()=>{const{t:t}=_.useTranslation(),{setAccountMetas:n}=p.useAccountImporter(),{mnemonic:r,pushStep:o}=E.useOnboarding(),[a,l]=i.useState(void 0);i.useEffect((()=>{r&&r.deriveSeed().then(l).catch(console.error)}),[r]);const c=X.useFetchAccountsBySeed(a),s=i.useMemo((()=>{var e;return null!==(e=c.data)&&void 0!==e?e:[]}),[c.data]),u=c.isFetched,[d,m]=i.useState([]),h=d.length,f=i.useMemo((()=>{const e=s.filter((e=>e.sigs>0||e.lamports>0));return(e.length?e:s.slice(0,1)).map((e=>e.meta.publicKey))}),[s]);return i.useEffect((()=>{m((e=>h?e:f))}),[f]),e(i).createElement($,{onSubmit:()=>{const t=new Set(d),r=s.filter((e=>t.has(e.meta.publicKey))).map((({meta:e},t)=>Object.assign(Object.assign({},e),{name:`Wallet ${t+1}`})));n(r),o(e(i).createElement(Fe.OnboardingCreatePassword,null))},title:t("onboardingSelectAccountsImportAccounts"),subtitle:t("onboardingSelectAccountsImportAccountsDescription"),subtitleColor:"#999",buttonTheme:h?"primary":"default",buttonText:t("onboardingSelectAccountsImportSelectedAccounts"),buttonDisabled:!h},u?e(i).createElement(Et,null,e(i).createElement(Ae,{accounts:s,defaultSelected:f,onChange:m})):e(i).createElement(yt,null,e(i).createElement(Y.Spinner,null)))};ot=a("5TDIN"),at=a("UhLns");var Ct=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const St=H.default.div`
  padding: 12px 12px 0 12px;
  margin: 10px 0 0 0;
`,kt=H.default(B.Row).attrs({align:"center",justify:"center"})``,Pt=H.default.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: #777;
  size: 14px;
  &:hover {
    color: #8a81f8;
    p {
      color: #8a81f8;
    }
  }
`,Tt=H.default(W.Text).attrs({color:"#eb3742",size:16,textAlign:"left"})``,Ot=()=>{const{t:t}=_.useTranslation(),[n,r]=i.useState(null),[o,a]=i.useState([]);i.useEffect((()=>{ot.getBip39().then((e=>{const{wordlist:t}=e;a(t),r((()=>e))})).catch(console.error)}),[]);const{onboardingType:l,pushStep:c,setMnemonic:s}=E.useOnboarding(),u=l===E.OnboardingType.Restore,[d,m]=i.useState((()=>new Array(12).fill(-1))),[p,h]=i.useState(null),f=d.every((e=>-1!==e)),b=d.length;return e(i).createElement($,{onSubmit:()=>Ct(void 0,void 0,void 0,(function*(){try{if(!n)throw new Error("Bip39 class is not configured");const t=Uint32Array.from(d),r=yield n.fromIndexes(t);yield s(r),g.analytics.capture(u?"restoreWalletRestore":"onboardingImportWallet"),c(e(i).createElement(xt,null))}catch(e){h(t("onboardingImportWalletErrorInvalidSecretRecoveryPhrase")),console.error(e)}})),title:t("onboardingImportWalletSecretRecoveryPhrase"),subtitle:t("onboardingImportWalletImportExistingWallet"),buttonTheme:f?"primary":"default",buttonText:t(u?"onboardingImportWalletRestoreWallet":"onboardingImportWallet"),buttonDisabled:!f},e(i).createElement(at.MnemonicDisplay,{indexes:d,wordlist:o,onChange:(e,t)=>{var r;p&&h(null);const o=e.replaceAll(/\s+/g," ").toLowerCase().trim(),a=(null!==(r=null==n?void 0:n.wordlist)&&void 0!==r?r:[]).indexOf(o),i=d.slice().fill(-1);for(let e=0;e<d.length;e++)i[e]=d[e];i[t]=a,m(i)}}),e(i).createElement(St,null,p&&e(i).createElement(Tt,{"data-testid":"onboarding-import-secret-recovery-phrase-error-message"},p),!p&&e(i).createElement(kt,null,e(i).createElement(Pt,{"data-testid":"onboarding-import-secret-recovery-phrase-num-words-toggle",onClick:()=>m((e=>12===e.length?e.concat(new Array(12).fill(-1)):e.slice(0,12)))},t("onboardingImportWalletIHaveWords",{numWords:b})))))};var Rt={};t(Rt,"OnboardingPathSelection",(function(){return Ft}),(function(e){return Ft=e}));i=a("aZikt"),H=a("hHMPk"),_=a("7Qmuu"),j=a("aADTv"),N=a("dczY0"),ke=a("hJDxl"),W=a("g7X40");var Mt=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const At=H.default(N.Column).attrs({justify:"center"})`
  height: 100%;
  flex: 1;
`,It=H.default(N.Column).attrs({align:"center",justify:"center"})`
  svg:nth-child(2) {
    margin: 20px 0;
  }
`,Dt=H.default(N.Column).attrs({justify:"flex-end"})`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,Ft=()=>{const{t:t}=_.useTranslation(),{setOnboardingType:n,mnemonic:r,pushStep:o}=E.useOnboarding(),a=i.useCallback((()=>Mt(void 0,void 0,void 0,(function*(){n(E.OnboardingType.Create),o(e(i).createElement(Fe.OnboardingCreatePassword,null))}))),[r]),l=i.useCallback((()=>{n(E.OnboardingType.Import),o(e(i).createElement(F.OnboardingImportWallet,null))}),[]);return e(i).createElement(At,null,e(i).createElement(K,null,e(i).createElement(It,null,e(i).createElement(ke.Logo,null),e(i).createElement(ke.LogoBrand,null),e(i).createElement(W.Text,{color:"#999",size:17},t("onboardingPathSelectionTagline")))),e(i).createElement(Dt,null,e(i).createElement(j.Button,{"data-testid":"create-wallet-button",theme:"primary",onClick:a},t("onboardingPathSelectionCreateWallet")),e(i).createElement(j.Button,{"data-testid":"import-recovery-phrase-button",onClick:l},t("onboardingPathSelectionIHaveAWallet"))))};var Ht,_t=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};!function(e){e.Initial="initial",e.Create="create",e.Import="import",e.Restore="restore"}(Ht||(Ht={}));const Bt=i.createContext(null),Wt=({children:t})=>{var n;const{search:r}=c.useLocation(),o=new URLSearchParams(r).get("restore"),[a,l]=i.useState(null),[s,u]=i.useState(null),d=i.useCallback((e=>_t(void 0,void 0,void 0,(function*(){if(e){let t=null;try{t=yield e.getMnemonic();const n=S.SecureBytes.from(t);l(n),u(e)}finally{null==t||t.fill(0)}}else l(null),u(null)}))),[]),[m,p]=i.useState(o?Ht.Restore:Ht.Initial),[h,f]=i.useState([]),b=null!==(n=x.usePreviousDistinct(h,((e,t)=>(null==e?void 0:e.length)===t.length)))&&void 0!==n?n:[],w=D.getLast(h);return i.useEffect((()=>{g.analytics.assignGroup("rootGroup",""),o?(g.analytics.capture("restoreWalletOpen"),f([e(i).createElement(F.OnboardingImportWallet,null)])):(g.analytics.capture("onboardingOpen"),f([e(i).createElement(Rt.OnboardingPathSelection,null)]))}),[]),e(i).createElement(Bt.Provider,{value:{secureMnemonic:a,mnemonic:s,setMnemonic:d,onboardingType:m,setOnboardingType:p,onboardingStack:h,prevOnboardingStack:b,currentStep:w,pushStep:e=>{f((t=>C.default(t,(t=>{t.push(e)}))))},popStep:()=>{f((e=>C.default(e,(e=>{e.pop()}))))}}},t)},jt=()=>{const e=i.useContext(Bt);if(!e)throw new Error("Missing onboarding context");return e};var Nt=a("9P0Mo"),Lt=a("i2Zy4"),Ut=(i=a("aZikt"),H=a("hHMPk"),Ge=a("d3pmY"),B=a("cweFb"),i=a("aZikt"),H=a("hHMPk"),D=a("7eQt4"),a("hoJun")),Kt=a("8FNEt");ke=a("hJDxl"),B=a("cweFb");const Zt=H.default(B.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
`,zt=H.default(B.Row).attrs({justify:"center"})`
  > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`,Gt=H.default.div`
  width: 24px;
  height: 24px;
`,Vt=()=>{const{onboardingType:t,onboardingStack:n,popStep:r}=E.useOnboarding(),o=t===E.OnboardingType.Create,a=(E.OnboardingType.Import,t===E.OnboardingType.Restore),l=n.length,c=a?l-1:l-2,s=!a||0!==c,u=o?4:5;return e(i).createElement(Zt,null,e(i).createElement(Gt,null,s&&e(i).createElement(Ut.ChevronCircle,{right:1,onClick:r},e(i).createElement(ke.LeftChevronIcon,null))),e(i).createElement(zt,null,D.range(u).map((t=>e(i).createElement(Kt.Circle,{key:t,diameter:12,color:t<=c?"#4E44CE":"#333"})))))},$t=H.default.main`
  width: ${420}px;
  min-height: ${504}px;
  position: relative;
  overflow: hidden;
  background-color: #222222;
  border: 1px solid #323232;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`,Xt=H.default(B.Row)`
  height: ${46}px;
`,Yt=H.default(Ge.motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(${458}px);
  padding: 20px;
`,Jt=()=>{const{onboardingType:t,onboardingStack:n,prevOnboardingStack:r,currentStep:o}=E.useOnboarding(),a=t===E.OnboardingType.Restore,l=n.length,c=l>r.length,s=l>1||a,u=0===r.length,d=u?1:0,m=`${l}_${r.length}`,p={initial:{opacity:d},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2,duration:.2}},h={initial:{x:u?0:c?150:-150,opacity:d},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(i).createElement($t,null,s?e(i).createElement(Ge.motion.div,Object.assign({},p),e(i).createElement(Vt,null)):e(i).createElement(Xt,null),e(i).createElement(Ge.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(Yt,Object.assign({key:m},h),o)))};s.initSentry(),l.render(e(i).createElement(c.BrowserRouter,null,e(i).createElement(u.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(i).createElement(d.QueryProvider,null,e(i).createElement(m.FeatureFlagsProvider,null,e(i).createElement(p.AccountImporterProvider,null,e(i).createElement(Nt.FullPageHeader,null),e(i).createElement(Lt.OnboardingAndConnectHardwareErrorBoundary,null,e(i).createElement(E.OnboardingProvider,null,e(i).createElement(Jt,null))))))),document.getElementById("root"));define=__define;})(window.define);