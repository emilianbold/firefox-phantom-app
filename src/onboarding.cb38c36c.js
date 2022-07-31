(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequirea886=a);var i=a("aZikt"),l=a("ihAua"),c=a("gDkTC");a("6CHoY");var s=a("ci2Mj"),u=a("5cKs6"),d=a("h5G75"),p=a("ixd3d"),m={};t(m,"AccountImporterProvider",(function(){return v}),(function(e){return v=e})),t(m,"useAccountImporter",(function(){return y}),(function(e){return y=e}));i=a("aZikt");var h=a("lwple"),f=a("czDD7"),g=(h=a("lwple"),a("8C6BZ")),b=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const w=i.createContext({accountMetas:[],setAccountMetas(){},importAccountMetas(){return b(this,void 0,void 0,(function*(){}))}}),v=({children:t})=>{const[n,r]=i.useState([]),o=i.useCallback((e=>b(void 0,void 0,void 0,(function*(){yield f.setStorageValue(h.StorageKeys.AccountMetas,e);for(const t of e)t.type===h.AccountType.Seed&&g.analytics.capture("addSeedAccount",{data:{walletIndex:t.walletIndex}});yield f.setStorageValue(h.StorageKeys.SelectedAccountIndex,0)}))),[]);return e(i).createElement(w.Provider,{value:{accountMetas:n,setAccountMetas:r,importAccountMetas:o}},t)},y=()=>i.useContext(w);var x={};t(x,"OnboardingType",(function(){return _t}),(function(e){return _t=e})),t(x,"OnboardingProvider",(function(){return jt}),(function(e){return jt=e})),t(x,"useOnboarding",(function(){return Nt}),(function(e){return Nt=e}));i=a("aZikt"),c=a("gDkTC");var E=a("lxqKj"),C=a("ehJ6P");a("6CHoY");var S={};t(S,"SecureBytes",(function(){return I}),(function(e){return I=e}));var k,P,T=a("4RIUn"),O=function(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n},R=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};const M=e=>(null===window||void 0===window?void 0:window.crypto)?window.crypto.getRandomValues(new Uint8Array(e)):T.randomBytes(e),A=(e,t)=>{const n=e.length,r=new Uint8Array(n);for(let o=0;o<n;o++)r[o]=e[o]^t[o];return r};class I{static from(e){return new I(e)}constructor(e){k.set(this,void 0),P.set(this,void 0),this.read=e=>{const t=((e,t)=>{const n=e.length,r=new Uint8Array(n);for(let o=0;o<n;o++)r[o]=e[o]^t[o];return r})(R(this,k,"f"),R(this,P,"f"));let n=null;try{e(t)}catch(e){n=e}finally{const e=M(t.length),r=A(t,e);if(t.fill(0),O(this,P,e,"f"),O(this,k,r,"f"),n)throw n}};const t=e.length,n=M(t),r=A(e,n);O(this,P,n,"f"),O(this,k,r,"f")}}k=new WeakMap,P=new WeakMap;var D=a("7eQt4"),F=(g=a("8C6BZ"),{});t(F,"OnboardingImportWallet",(function(){return Rt}),(function(e){return Rt=e}));i=a("aZikt");var H=a("hHMPk"),_=a("7Qmuu"),B=(g=a("8C6BZ"),a("cweFb")),W=a("g7X40"),j=(i=a("aZikt"),H=a("hHMPk"),a("aADTv")),N=a("dczY0");W=a("g7X40"),i=a("aZikt"),H=a("hHMPk"),N=a("dczY0");const L=H.default(N.Column).attrs({justify:"center"})`
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
`,G=H.default(W.Text).attrs({color:"FFFFFF",weight:500,size:28,lineHeight:34,textAlign:"center",margin:"0 0 10px 0"})``,$=H.default(W.Text).attrs((e=>{var t;return{size:16,color:null!==(t=e.color)&&void 0!==t?t:"#999"}}))``,V=({onSubmit:t,title:n,subtitle:r,subtitleColor:o,buttonTheme:a="default",buttonText:l,buttonDisabled:c,children:s})=>e(i).createElement(Z,{onSubmit:e=>{e.preventDefault(),t()},"data-testid":"onboarding-form"},e(i).createElement(K,null,e(i).createElement(z,null,e(i).createElement(G,null,n),e(i).createElement($,{color:o},r)),s),e(i).createElement(j.Button,{"data-testid":"onboarding-form-submit-button",type:"submit",theme:a,disabled:c},l));i=a("aZikt"),H=a("hHMPk"),_=a("7Qmuu");var X=a("7rvxc"),Y=(B=a("cweFb"),N=a("dczY0"),a("lPkGw")),J=(i=a("aZikt"),H=a("hHMPk"),a("cFuyE")),Q={};t(Q,"CheckboxGroup",(function(){return Re}),(function(e){return Re=e})),t(Q,"Checkbox",(function(){return Me}),(function(e){return Me=e}));i=a("aZikt"),H=a("hHMPk"),i=a("aZikt");var q=a("f9f8D"),ee=a("52Tb2"),te=a("itADJ"),ne=a("d8po8"),re=a("fIGG7"),oe=a("kHzXS"),ae=a("abL1A");function ie(){return ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ie.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var ce,se,ue;function de(e){return!(!e||e.isControlled||e.disabled)}function pe(e){return function(t,n){return t&&t.isControlled&&n.state===e}}!function(e){e.Checked="checked",e.Mixed="mixed",e.Unchecked="unchecked"}(se||(se={})),function(e){e.GetDerivedData="GET_DERIVED_DATA",e.Mount="MOUNT",e.Set="SET",e.Toggle="TOGGLE",e.Unmount="UNMOUNT"}(ue||(ue={}));var me=ae.assign((function(e,t){return ie({},e,{refs:t.refs})})),he=((ce={})[ue.Mount]={actions:me},ce[ue.GetDerivedData]={actions:[me,ae.assign((function(e,t){return ie({},e,t.data)}))]},ce[ue.Set]=[{target:se.Checked,cond:pe(se.Checked)},{target:se.Unchecked,cond:pe(se.Unchecked)},{target:se.Mixed,cond:pe(se.Mixed)}],ce);function fe(e,t,n){void 0===n&&(n="useMixedCheckbox");var r,o=t||{},a=o.checked,l=o.defaultChecked,c=o.disabled,s=o.onChange,u=o.onClick,d=null!=a,p=ae.useCreateMachine(function(e,t){var n,r,o,a;return{id:"mixed-checkbox",initial:e,context:{disabled:t.disabled,isControlled:t.isControlled,refs:{input:null}},states:(a={},a[se.Unchecked]={entry:me,on:ie((n={},n[ue.Toggle]={target:se.Checked,cond:de},n),he)},a[se.Checked]={entry:me,on:ie((r={},r[ue.Toggle]={target:se.Unchecked,cond:de},r),he)},a[se.Mixed]={entry:me,on:ie((o={},o[ue.Toggle]={target:se.Checked,cond:de},o),he)},a)}}(ge(d?a:l),{disabled:!!c,isControlled:d})),m=ae.useMachine(p,{input:e},false),h=m[0],f=m[1],g={"aria-checked":be(h.value),checked:(r=h.value,r===se.Checked),disabled:!!c,onChange:re.composeEventHandlers(s,(function(){d||f(ue.Toggle)})),onClick:re.composeEventHandlers(u,(function(){w()})),type:"checkbox"},b={checked:be(h.value)};function w(){e.current&&(e.current.indeterminate=h.value===se.Mixed)}return i.useEffect((function(){d&&f({type:ue.Set,state:ge(a)})}),[d,a,f]),oe.useIsomorphicLayoutEffect(w),i.useEffect((function(){f({type:ue.GetDerivedData,data:{disabled:c,isControlled:d}})}),[c,d,f]),[g,b]}function ge(e){return!0===e?se.Checked:"mixed"===e?se.Mixed:se.Unchecked}function be(e){return e===se.Checked||e===se.Mixed&&"mixed"}function we(e,t,n){var r=null!=e,o=i.useRef(r).current;i.useEffect((function(){}),[n,t,r,o])}var ve=["as","checked","children","defaultChecked","disabled","onClick","onChange","__componentName"],ye=["as","onBlur","onFocus"],xe=q.createNamedContext("CustomCheckboxContext",{});var Ee=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"span":n,o=e.checked,a=e.children,l=e.defaultChecked,c=e.disabled,s=e.onClick,u=e.onChange,d=e.__componentName,p=void 0===d?"CustomCheckboxContainer":d,m=le(e,ve),h=i.useRef(null),f=fe(h,{defaultChecked:l,checked:o,disabled:c,onChange:u},p),g=f[0],b=f[1],w=i.useState(!1),v=w[0],y=w[1];var x={defaultChecked:l,disabled:c,focused:v,inputProps:g,inputRef:h,setFocused:y};return we(o,"checked",p),te.useCheckStyles("checkbox"),i.createElement(xe.Provider,{value:x},i.createElement(r,ie({},m,{ref:t,"data-reach-custom-checkbox-container":"","data-focused":v?"":void 0,"data-state":ge(b.checked),onClick:re.composeEventHandlers(s,(function(){window.requestAnimationFrame((function(){h.current&&h.current.focus()}))}))}),ee.isFunction(a)?a({checked:g["aria-checked"],inputRef:h,focused:v}):a))})),Ce=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"input":n,o=e.onBlur,a=e.onFocus,l=le(e,ye),c=i.useContext(xe),s=c.focused,u=c.inputProps,d=c.inputRef,p=c.setFocused,m=ne.useComposedRefs(t,d),h=i.useRef(!0);return i.useEffect((function(){return function(){h.current=!1}}),[]),i.createElement(r,ie({},l,u,{ref:m,type:"checkbox","data-reach-custom-checkbox-input":"","data-focused":s?"":void 0,onBlur:re.composeEventHandlers(o,(function(){window.requestAnimationFrame((function(){h.current&&p(!1)}))})),onFocus:re.composeEventHandlers(a,(function(){window.requestAnimationFrame((function(){h.current&&p(!0)}))}))}))})),Se=a("99Anx"),ke=a("hJDxl"),Pe=(B=a("cweFb"),a("CmvE4")),Te=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function Oe(e){return{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",width:"100%",height:"100%",userSelect:"none",pointerEvents:"none",borderRadius:"6px",opacity:""+(e?1:0),transition:"transform 150ms ease-out, background 150ms ease-out",zIndex:1,background:!0===e?"#4E44CE":"transparent"}}const Re=H.default(B.Row)`
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
`,Me=t=>{const{onChange:n}=t,r=Te(t,["onChange"]),o=t.checked;return e(i).createElement(Ee,{checked:null!=t.checked?t.checked:o,onChange:n,style:{background:"#181818",border:"1px solid #2F2F2F",borderRadius:"6px",height:"22px",minHeight:"22px",width:"22px",minWidth:"22px",cursor:"pointer",userSelect:"none",position:"relative",outlineColor:"transparent",outlineStyle:"none",boxShadow:"none"}},e(i).createElement(Ce,Object.assign({},r)),e(i).createElement("span",{"aria-hidden":!0,style:Oe(o)},e(i).createElement(ke.CheckmarkIcon,{width:13})))};H.default(Pe.SkeletonLoader)`
  border: 1.5px solid #484848;
  border-radius: ${6}px;
  width: ${22}px;
  height: ${22}px;
`;var Ae=a("2MtnF");W=a("g7X40");const Ie=t=>{var n,r,o;const a=!!t.selected,[l,c]=i.useState(null!==(r=null!==(n=t.selected)&&void 0!==n?n:t.defaultSelected)&&void 0!==r?r:[]),s=null!==(o=t.selected)&&void 0!==o?o:l,u=new Set(s);return e(i).createElement(De,{"data-testid":"account-multiselect"},t.accounts.map((({meta:n,lamports:r})=>{const o=u.has(n.publicKey);return e(i).createElement(Fe,{"data-testid":`account-multiselect-address-row-${n.publicKey}`,key:n.publicKey,onClick:()=>{o?(e=>{var n,r;const o=new Set(s);o.delete(e);const i=[...o];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(r=t.onDeselect)||void 0===r||r.call(t,e)})(n.publicKey):(e=>{var n,r;const o=new Set(s);o.add(e);const i=[...o];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(r=t.onSelect)||void 0===r||r.call(t,e)})(n.publicKey)}},e(i).createElement(Q.CheckboxGroup,{width:"auto"},e(i).createElement(Q.Checkbox,{"data-testid":"account-multiselect-address-row-checkbox",checked:o}),e(i).createElement("span",null,J.formatHashMedium(n.publicKey,4))),e(i).createElement(W.Text,{color:"#777",size:14},e(i).createElement(Ae.SolBalance,{format:"0,0.[000]"},r)))})))},De=H.default.ul`
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
`,Fe=H.default.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  label {
    color: #999;
  }
`;var He={};t(He,"OnboardingCreatePassword",(function(){return yt}),(function(e){return yt=e}));i=a("aZikt"),H=a("hHMPk"),_=a("7Qmuu");var _e=a("6oEu9"),Be=(h=a("lwple"),a("hUfgV")),We=(g=a("8C6BZ"),a("ebwnM")),je=a("cqRHn"),Ne=a("02ZG7"),Le=a("a80wK"),Ue=(W=a("g7X40"),N=a("dczY0"),{});t(Ue,"OnboardingCreateRecoveryPhrase",(function(){return mt}),(function(e){return mt=e}));i=a("aZikt"),H=a("hHMPk");var Ke=a("e5x4G"),Ze=a("fCuks"),ze=(_=a("7Qmuu"),a("6oEu9"),h=a("lwple"),Be=a("hUfgV"),a("4yWCU"));Ne=a("02ZG7"),g=a("8C6BZ"),ke=a("hJDxl"),W=a("g7X40"),B=a("cweFb"),N=a("dczY0"),j=a("aADTv"),i=a("aZikt"),H=a("hHMPk"),Ze=a("fCuks"),_=a("7Qmuu"),h=a("lwple"),ze=a("4yWCU"),Ne=a("02ZG7"),i=a("aZikt");const Ge=e=>{const[t,n]=i.useState(!1),r=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!0)},o=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!1)},a=()=>{n(!1)};return i.useEffect((()=>(window.addEventListener("keydown",r),window.addEventListener("keyup",o),window.addEventListener("blur",a),()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",o),window.removeEventListener("blur",a)})),[]),t};ke=a("hJDxl"),W=a("g7X40"),B=a("cweFb"),i=a("aZikt"),H=a("hHMPk");var $e=a("d3pmY");_=a("7Qmuu"),_e=a("6oEu9"),g=a("8C6BZ"),ke=a("hJDxl"),N=a("dczY0"),B=a("cweFb"),j=a("aADTv"),W=a("g7X40"),i=a("aZikt"),H=a("hHMPk"),N=a("dczY0"),ke=a("hJDxl"),B=a("cweFb"),W=a("g7X40");const Ve=H.default(B.Row).attrs({width:"350px"})`
  background-color: #4e44ce;
  height: 74px;
  border: 1px solid #665ddc;
  border-radius: 8px;
  padding: 15px;
`,Xe=H.default(N.Column).attrs({justify:"center"})`
  margin-left: 15px;
`,Ye=H.default.span`
  display: inline;
  position: relative;
  top: ${e=>e.top};
  margin-left: 2px;
  margin-right: 2px;
`,Je=()=>e(i).createElement(Ve,null,e(i).createElement(ke.LogoNoBackground,null),e(i).createElement(Xe,null,e(i).createElement(W.Text,{size:16,weight:600},"Pin the Phantom extension"),e(i).createElement(W.Text,{size:16,weight:400},"Click"," ",e(i).createElement(Ye,{top:"1px"},e(i).createElement(ke.ChromeExtensionIcon,{width:16,height:16}))," ","and then"," ",e(i).createElement(Ye,{top:"3px"},e(i).createElement(ke.PinChromeExtensionIcon,{width:9.49,height:16}))," ","and voilà!"))),Qe=H.default(N.Column)`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,qe=H.default(j.Button).attrs({borderRadius:"6px"})`
  &:hover {
    path {
      fill: white;
    }
  }
`,et=H.default(B.Row).attrs({justify:"space-between"})`
  padding: 0 20px;
`,tt=H.default($e.motion.div)`
  position: fixed;
  top: 16px;
  right: 16px;
`,nt=()=>{const{t:t}=_.useTranslation(),n=[{id:0,testid:"onboarding-twitter-button",icon:e(i).createElement(ke.TwitterIcon,null),text:t("onboardingSocialsFollowOnTwitter"),onClick:()=>{g.analytics.capture("onboardingTwitterClick"),window.open(_e.PHANTOM_TWITTER_URL,"_blank")}},{id:1,testid:"onboarding-support-button",icon:e(i).createElement(ke.HelpIcon,{fill:"#fff",width:20}),text:t("onboardingSocialsVisitHelpCenter"),onClick:()=>{g.analytics.capture("onboardingHelpCenterClick"),window.open(_e.PHANTOM_SUPPORT_URL,"_blank")}}];return e(i).createElement(e(i).Fragment,null,e(i).createElement(V,{onSubmit:()=>{g.analytics.capture("onboardingFinishClick"),window.close()},title:t("onboardingSocialsFinished"),subtitle:t("onboardingSocialsFinishedDescription"),buttonTheme:"primary",buttonText:t("onboardingSocialsFinishAction")},e(i).createElement(Qe,null,n.map((({id:t,testid:n,icon:r,text:o,onClick:a})=>e(i).createElement(qe,{key:t,"data-testid":n,onClick:a},e(i).createElement(et,null,e(i).createElement(B.Row,null,r,e(i).createElement(W.Text,{size:16,weight:600,lineHeight:19,margin:"0 0 0 20px"},o)),e(i).createElement(ke.RightChevronIcon,null))))))),e(i).createElement(tt,{animate:{opacity:1},initial:{opacity:0},transition:{delay:.4}},e(i).createElement(Je,null)))},rt=H.default(B.Row).attrs({justify:"center"})`
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
`;rt.defaultProps={width:"80px"};const ot=()=>{var t;const{t:n}=_.useTranslation(),{pushStep:r}=x.useOnboarding(),o=Ne.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen),a=Ne.useStoreStorageValue(h.StorageKeys.PopupHasBeenSeen),l=null!==(t=o.data)&&void 0!==t&&t,c=Ge("p"),s=Ge("Shift"),u=Ge("Alt"),d=ze.BROWSER_ENV.os.name===Ze.OS_MAP.MacOS,p=d?"107px":"80px",m=n(d?"onboardingKeyboardShortcutMac":"onboardingKeyboardShortcutNotMac"),f=[{id:"altOption",isHighlighted:u,width:p,icon:d?e(i).createElement(ke.OptionIcon,null):e(i).createElement(ke.AltIcon,null)},{id:"shift",isHighlighted:s,icon:e(i).createElement(ke.ShiftIcon,null)},{id:"p",isHighlighted:c,icon:e(i).createElement(ke.PKeyIcon,null)}];return e(i).createElement(V,{onSubmit:()=>{l||a.mutate(!0),r(e(i).createElement(nt,null))},title:n("onboardingKeyboardShortcut"),subtitle:n("onboardingKeyboardShortcutDescription"),buttonTheme:"primary",buttonText:n("onboardingKeyboardShortcutContinue")},e(i).createElement(B.Row,{justify:"center",margin:"0 0 30px 0"},f.map((({id:t,isHighlighted:n,width:r,icon:o})=>e(i).createElement(rt,{key:t,isHighlighted:n,width:r},o)))),e(i).createElement(B.Row,{justify:"center"},e(i).createElement(W.Text,{"data-testid":"onboarding-keyboard-shortcut-text",size:17,weight:500,color:"#999"},n("onboardingKeyboardShortcutTry")," ",m)))};var at=a("5TDIN"),it=a("UhLns"),lt=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const ct=H.default(N.Column).attrs({justify:"space-between"})`
  position: relative;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
  padding: 10px 0;
`,st=H.default(N.Column)`
  align-items: center;
  display: flex;
  position: relative;
`,ut=H.default(B.Row).attrs({justify:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`,dt=H.default(j.Button)`
  padding: 10px 0;
`,pt=H.default(B.Row)`
  svg {
    margin-right: 10px;
  }
`,mt=({password:t})=>{var n;const{t:r}=_.useTranslation(),{pushStep:o,mnemonic:a,secureMnemonic:l}=x.useOnboarding(),[{indexes:c,wordlist:s},u]=i.useState({indexes:[],wordlist:[]});i.useEffect((()=>{a&&at.getBip39().then((e=>lt(void 0,void 0,void 0,(function*(){const{wordlist:t}=e,n=Array.from(yield a.getIndexes());u({indexes:n,wordlist:t})})))).catch(console.error)}),[a]);const[d,p]=i.useState(!1),[m,f]=i.useState(!1),[b,w]=i.useState(!0),[v,y]=i.useState(!1),E=i.useRef(null).current,C=null!==(n=Ne.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen).data)&&void 0!==n&&n,S=()=>{b&&(w(!1),null==E||E.focus(),null==E||E.setSelectionRange(0,0))},k=e=>{if(!e)return;const t=Object.values(e)[0],n="boolean"==typeof t;if("number"==typeof t)"buildNumber"in e.data&&p(!1);else if(n){t&&(m||f(!0),v||y(!0))}},P=e=>{const t=JSON.stringify(e),[n,r,o]=(()=>{switch(ze.BROWSER_ENV.browser.name){case Ze.BROWSER_MAP.chrome:return[_e.ONE_PASSWORD_CHROME_STABLE,_e.ONE_PASSWORD_CHROME_BETA,null];case Ze.BROWSER_MAP.firefox:return[_e.ONE_PASSWORD_FIREFOX_STABLE,_e.ONE_PASSWORD_FIREFOX_BETA,null];case Ze.BROWSER_MAP.edge:return[_e.ONE_PASSWORD_EDGE_STABLE,_e.ONE_PASSWORD_CHROME_STABLE,_e.ONE_PASSWORD_CHROME_BETA];default:return[_e.ONE_PASSWORD_CHROME_STABLE,_e.ONE_PASSWORD_CHROME_BETA,null]}})();Ke.browser.runtime.sendMessage(n,t).then(k).catch((()=>{Ke.browser.runtime.sendMessage(r,t).then(k).catch((()=>{o&&Ke.browser.runtime.sendMessage(o,t).then(k).catch()}))}))};return i.useEffect((()=>{P({name:"hello"})}),[]),i.useEffect((()=>{let e;return m&&(e=setTimeout((()=>{f(!1)}),5e3)),()=>{e&&clearTimeout(e)}}),[m]),e(i).createElement(V,{onSubmit:()=>lt(void 0,void 0,void 0,(function*(){l&&(g.analytics.capture("onboardingCreateNewWallet"),o(e(i).createElement(ot,null)),C&&o(e(i).createElement(nt,null)))})),title:r("onboardingCreateRecoveryPhraseSecretRecoveryPhrase"),subtitle:r("onboardingCreateRecoveryPhraseSecretRecoveryPhraseReminder"),subtitleColor:"#FFDC62",buttonTheme:v?"primary":"default",buttonText:r("onboardingCreateRecoveryPhraseContinue"),buttonDisabled:!v},e(i).createElement(ct,{onMouseEnter:S,onMouseLeave:()=>{w(!0),null==E||E.setSelectionRange(0,0),null==E||E.blur()}},e(i).createElement(st,{onClick:S},b&&e(i).createElement(ut,null,e(i).createElement(ke.PrivacyEyeIcon,null)),e(i).createElement(it.MnemonicDisplay,{blur:b,readOnly:!0,indexes:c,wordlist:s})),d&&e(i).createElement(dt,{onClick:()=>lt(void 0,void 0,void 0,(function*(){if(!l||!a)return;const e=yield a.deriveSeed();l.read((n=>{const{publicKey:r}=Be.createSeedAccount(e,"Wallet 1",0,h.DerivationPathType.Bip44ChangeSolana);e.fill(0);const o={name:"create-item",data:{type:"115",saveRequest:{title:"Phantom Wallet",fields:[{autocomplete:"crypto-address",value:r},{autocomplete:"crypto-recovery-seed",value:Array.from(n)},{autocomplete:"current-password",value:t}]}}};P(o)}))}))},e(i).createElement(pt,{justify:"center"},e(i).createElement(ke.OnePasswordIcon,null),r(m?"onboardingCreateRecoveryPhraseSaved":"onboardingCreateRecoveryPhraseSaveIn1Password")))),e(i).createElement(Q.CheckboxGroup,null,e(i).createElement(Q.Checkbox,{"data-testid":"onboarding-form-saved-secret-recovery-phrase-checkbox",checked:v,onChange:()=>{y(!v)}}),e(i).createElement(W.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(_.Trans,{i18nKey:"onboardingCreateRecoveryPhraseSavedSecretRecoveryPhrase"}))))};var ht=a("aF4zF"),ft=(at=a("5TDIN"),function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))});const gt={password:"",confirmPassword:""},bt=H.default(N.Column)`
  margin-bottom: ${e=>e.needsExtraMargin?37:17}px;
  input[name="password"] {
    margin-bottom: 10px;
  }
`,wt=H.default.div`
  position: relative;
  width: 100%;
`,vt=H.default(W.Text).attrs({size:14,lineHeight:19,margin:"0",weight:600})`
  position: absolute;
  top: 15px;
  right: 14px;
`,yt=()=>{var t;const{t:n}=_.useTranslation(),{accountMetas:r,importAccountMetas:o}=m.useAccountImporter(),{mnemonic:a,setMnemonic:l,onboardingType:c,pushStep:s}=x.useOnboarding(),u=c===x.OnboardingType.Create,d=c===x.OnboardingType.Import,p=c===x.OnboardingType.Restore,f=Ne.useFetchStorageValue(h.StorageKeys.TermsHaveBeenAcknowledgedV2),b=Ne.useStoreStorageValue(h.StorageKeys.TermsHaveBeenAcknowledgedV2),w=i.useMemo((()=>{var e;return null!==(e=f.data)&&void 0!==e&&e}),[f.data]),v=null!==(t=Ne.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen).data)&&void 0!==t&&t,[y,E]=i.useState(gt),{password:C,confirmPassword:S}=y,[k,P]=i.useState(void 0),T=i.useMemo((()=>{const e=C.length;switch(!0){case e>0&&e<8:return n("onboardingCreatePasswordPasswordStrengthWeak");case e>=8&&e<21:return n("onboardingCreatePasswordPasswordStrengthMedium");case e>=21:return n("onboardingCreatePasswordPasswordStrengthStrong");default:return}}),[C]),O=i.useMemo((()=>{switch(T){case n("onboardingCreatePasswordPasswordStrengthWeak"):return"#EB3742";case n("onboardingCreatePasswordPasswordStrengthMedium"):return"#FFDC62";case n("onboardingCreatePasswordPasswordStrengthStrong"):return"#21E56F";default:return"#777777"}}),[T]),R=!p&&!w||!C||!S,M=e=>{const{name:t,value:n}=e.currentTarget;k&&P(void 0),E(Object.assign(Object.assign({},y),{[t]:n}))},A=e=>ft(void 0,void 0,void 0,(function*(){try{if(!(yield ht.setMnemonic(C,{type:"bip39",value:e})))throw new Error("Failed to set seed phrase");if(r.length)yield o(r);else{const t=yield e.deriveSeed(),n=Be.createSeedAccount(t,"Wallet 1",0,h.DerivationPathType.Bip44ChangeSolana);yield o([n])}}catch(e){(null==e?void 0:e.message.includes("Invalid seed"))?P(n("onboardingCreatePasswordErrorInvalidSecretRecoveryPhrase")):console.error(e)}}));return e(i).createElement(V,{onSubmit:()=>ft(void 0,void 0,void 0,(function*(){const t=We.validatePassword(C),n=We.validateConfirmPassword(C,S);if(t||n)P(null!=t?t:n);else if(u){const t=(yield at.getBip39()).fromSentenceLength(12);yield l(t),A(t),g.analytics.capture("onboardingCreatePassword"),je.acknowledgeWhatsNewOverlay(),s(e(i).createElement(Ue.OnboardingCreateRecoveryPhrase,{password:C}))}else{if(!a)throw new Error("Invalid mnemonic");A(a),g.analytics.capture(d?"importWalletCreatePassword":"restoreWalletCreatePassword"),je.acknowledgeWhatsNewOverlay(),s(e(i).createElement(ot,null)),v&&s(e(i).createElement(nt,null))}})),title:n("onboardingCreatePassword"),subtitle:n("onboardingCreatePasswordDescription"),buttonTheme:R?"default":"primary",buttonText:n("onboardingCreatePasswordContinue"),buttonDisabled:R},e(i).createElement(bt,{needsExtraMargin:!!k},e(i).createElement(Le.Input,{"data-testid":"onboarding-form-password-input",type:"password",name:"password",placeholder:n("onboardingCreatePasswordPasswordPlaceholder"),onChange:M}),e(i).createElement(wt,null,e(i).createElement(Le.Input.WithWarning,{"data-testid":"onboarding-form-confirm-password-input",type:"password",name:"confirmPassword",placeholder:n("onboardingCreatePasswordConfirmPasswordPlaceholder"),onChange:M,warningMessage:k}),!!T&&e(i).createElement(vt,{color:O},T))),!p&&e(i).createElement(Q.CheckboxGroup,null,e(i).createElement(Q.Checkbox,{"data-testid":"onboarding-form-terms-of-service-checkbox",checked:w,onChange:()=>{const e=w;b.mutate(!e)}}),e(i).createElement(W.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(_.Trans,{i18nKey:"onboardingCreatePasswordAgreeToTermsOfServiceInterpolated"},"I agree to the ",e(i).createElement("label",{onClick:()=>{g.analytics.capture("onboardingTermsClick"),window.open(_e.PHANTOM_TERMS_URL,"_blank")}},"Terms of Service")))))},xt=H.default(N.Column).attrs({align:"center",justify:"center"})`
  height: 210px;
`,Et=H.default(B.Row).attrs({justify:"center"})`
  flex-flow: column;
  max-height: 210px;
  overflow-y: scroll;
  ul {
    margin: 0;
    width: 100%;
  }
`,Ct=()=>{const{t:t}=_.useTranslation(),{setAccountMetas:n}=m.useAccountImporter(),{mnemonic:r,pushStep:o}=x.useOnboarding(),[a,l]=i.useState(void 0);i.useEffect((()=>{r&&r.deriveSeed().then(l).catch(console.error)}),[r]);const c=X.useFetchAccountsBySeed(a),s=i.useMemo((()=>{var e;return null!==(e=c.data)&&void 0!==e?e:[]}),[c.data]),u=c.isFetched,[d,p]=i.useState([]),h=d.length,f=i.useMemo((()=>{const e=s.filter((e=>e.sigs>0||e.lamports>0));return(e.length?e:s.slice(0,1)).map((e=>e.meta.publicKey))}),[s]);return i.useEffect((()=>{p((e=>h?e:f))}),[f]),e(i).createElement(V,{onSubmit:()=>{const t=new Set(d),r=s.filter((e=>t.has(e.meta.publicKey))).map((({meta:e},t)=>Object.assign(Object.assign({},e),{name:`Wallet ${t+1}`})));n(r),o(e(i).createElement(He.OnboardingCreatePassword,null))},title:t("onboardingSelectAccountsImportAccounts"),subtitle:t("onboardingSelectAccountsImportAccountsDescription"),subtitleColor:"#999",buttonTheme:h?"primary":"default",buttonText:t("onboardingSelectAccountsImportSelectedAccounts"),buttonDisabled:!h},u?e(i).createElement(Et,null,e(i).createElement(Ie,{accounts:s,defaultSelected:f,onChange:p})):e(i).createElement(xt,null,e(i).createElement(Y.Spinner,null)))};at=a("5TDIN"),it=a("UhLns");var St=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const kt=H.default.div`
  padding: 12px 12px 0 12px;
  margin: 10px 0 0 0;
`,Pt=H.default(B.Row).attrs({align:"center",justify:"center"})``,Tt=H.default.a`
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
`,Ot=H.default(W.Text).attrs({color:"#eb3742",size:16,textAlign:"left"})``,Rt=()=>{const{t:t}=_.useTranslation(),[n,r]=i.useState(null),[o,a]=i.useState([]);i.useEffect((()=>{at.getBip39().then((e=>{const{wordlist:t}=e;a(t),r((()=>e))})).catch(console.error)}),[]);const{onboardingType:l,pushStep:c,setMnemonic:s}=x.useOnboarding(),u=l===x.OnboardingType.Restore,[d,p]=i.useState((()=>new Array(12).fill(-1))),[m,h]=i.useState(null),f=d.every((e=>-1!==e)),b=d.length;return e(i).createElement(V,{onSubmit:()=>St(void 0,void 0,void 0,(function*(){try{if(!n)throw new Error("Bip39 class is not configured");const t=Uint32Array.from(d),r=yield n.fromIndexes(t);yield s(r),g.analytics.capture(u?"restoreWalletRestore":"onboardingImportWallet"),c(e(i).createElement(Ct,null))}catch(e){h(t("onboardingImportWalletErrorInvalidSecretRecoveryPhrase")),console.error(e)}})),title:t("onboardingImportWalletSecretRecoveryPhrase"),subtitle:t("onboardingImportWalletImportExistingWallet"),buttonTheme:f?"primary":"default",buttonText:t(u?"onboardingImportWalletRestoreWallet":"onboardingImportWallet"),buttonDisabled:!f},e(i).createElement(it.MnemonicDisplay,{indexes:d,wordlist:o,onChange:(e,t)=>{var r;m&&h(null);const o=e.replaceAll(/\s+/g," ").toLowerCase().trim(),a=(null!==(r=null==n?void 0:n.wordlist)&&void 0!==r?r:[]).indexOf(o),i=d.slice().fill(-1);for(let e=0;e<d.length;e++)i[e]=d[e];i[t]=a,p(i)}}),e(i).createElement(kt,null,m&&e(i).createElement(Ot,{"data-testid":"onboarding-import-secret-recovery-phrase-error-message"},m),!m&&e(i).createElement(Pt,null,e(i).createElement(Tt,{"data-testid":"onboarding-import-secret-recovery-phrase-num-words-toggle",onClick:()=>p((e=>12===e.length?e.concat(new Array(12).fill(-1)):e.slice(0,12)))},t("onboardingImportWalletIHaveWords",{numWords:12===b?24:12})))))};var Mt={};t(Mt,"OnboardingPathSelection",(function(){return Ht}),(function(e){return Ht=e}));i=a("aZikt"),H=a("hHMPk"),_=a("7Qmuu"),j=a("aADTv"),N=a("dczY0"),ke=a("hJDxl"),W=a("g7X40");var At=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const It=H.default(N.Column).attrs({justify:"center"})`
  height: 100%;
  flex: 1;
`,Dt=H.default(N.Column).attrs({align:"center",justify:"center"})`
  svg:nth-child(2) {
    margin: 20px 0;
  }
`,Ft=H.default(N.Column).attrs({justify:"flex-end"})`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,Ht=()=>{const{t:t}=_.useTranslation(),{setOnboardingType:n,mnemonic:r,pushStep:o}=x.useOnboarding(),a=i.useCallback((()=>At(void 0,void 0,void 0,(function*(){n(x.OnboardingType.Create),o(e(i).createElement(He.OnboardingCreatePassword,null))}))),[r]),l=i.useCallback((()=>{n(x.OnboardingType.Import),o(e(i).createElement(F.OnboardingImportWallet,null))}),[]);return e(i).createElement(It,null,e(i).createElement(K,null,e(i).createElement(Dt,null,e(i).createElement(ke.Logo,null),e(i).createElement(ke.LogoBrand,null),e(i).createElement(W.Text,{color:"#999",size:17},t("onboardingPathSelectionTagline")))),e(i).createElement(Ft,null,e(i).createElement(j.Button,{"data-testid":"create-wallet-button",theme:"primary",onClick:a},t("onboardingPathSelectionCreateWallet")),e(i).createElement(j.Button,{"data-testid":"import-recovery-phrase-button",onClick:l},t("onboardingPathSelectionIHaveAWallet"))))};var _t,Bt=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};!function(e){e.Initial="initial",e.Create="create",e.Import="import",e.Restore="restore"}(_t||(_t={}));const Wt=i.createContext(null),jt=({children:t})=>{var n;const{search:r}=c.useLocation(),o=new URLSearchParams(r).get("restore"),[a,l]=i.useState(null),[s,u]=i.useState(null),d=i.useCallback((e=>Bt(void 0,void 0,void 0,(function*(){if(e){let t=null;try{t=yield e.getMnemonic();const n=S.SecureBytes.from(t);l(n),u(e)}finally{null==t||t.fill(0)}}else l(null),u(null)}))),[]),[p,m]=i.useState(o?_t.Restore:_t.Initial),[h,f]=i.useState([]),b=null!==(n=E.usePreviousDistinct(h,((e,t)=>(null==e?void 0:e.length)===t.length)))&&void 0!==n?n:[],w=D.getLast(h);return i.useEffect((()=>{g.analytics.assignGroup("rootGroup",""),o?(g.analytics.capture("restoreWalletOpen"),f([e(i).createElement(F.OnboardingImportWallet,null)])):(g.analytics.capture("onboardingOpen"),f([e(i).createElement(Mt.OnboardingPathSelection,null)]))}),[]),e(i).createElement(Wt.Provider,{value:{secureMnemonic:a,mnemonic:s,setMnemonic:d,onboardingType:p,setOnboardingType:m,onboardingStack:h,prevOnboardingStack:b,currentStep:w,pushStep:e=>{f((t=>C.default(t,(t=>{t.push(e)}))))},popStep:()=>{f((e=>C.default(e,(e=>{e.pop()}))))}}},t)},Nt=()=>{const e=i.useContext(Wt);if(!e)throw new Error("Missing onboarding context");return e};var Lt=a("9P0Mo"),Ut=a("i2Zy4"),Kt=(i=a("aZikt"),H=a("hHMPk"),$e=a("d3pmY"),B=a("cweFb"),i=a("aZikt"),H=a("hHMPk"),D=a("7eQt4"),a("hoJun")),Zt=a("8FNEt");ke=a("hJDxl"),B=a("cweFb");const zt=H.default(B.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
`,Gt=H.default(B.Row).attrs({justify:"center"})`
  > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`,$t=H.default.div`
  width: 24px;
  height: 24px;
`,Vt=()=>{const{onboardingType:t,onboardingStack:n,popStep:r}=x.useOnboarding(),o=t===x.OnboardingType.Create,a=(x.OnboardingType.Import,t===x.OnboardingType.Restore),l=n.length,c=a?l-1:l-2,s=!a||0!==c,u=o?4:5;return e(i).createElement(zt,null,e(i).createElement($t,null,s&&e(i).createElement(Kt.ChevronCircle,{right:1,onClick:r},e(i).createElement(ke.LeftChevronIcon,null))),e(i).createElement(Gt,null,D.range(u).map((t=>e(i).createElement(Zt.Circle,{key:t,diameter:12,color:t<=c?"#4E44CE":"#333"})))))},Xt=H.default.main`
  width: ${420}px;
  min-height: ${504}px;
  position: relative;
  overflow: hidden;
  background-color: #222222;
  border: 1px solid #323232;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`,Yt=H.default(B.Row)`
  height: ${46}px;
`,Jt=H.default($e.motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(${458}px);
  padding: 20px;
`,Qt=()=>{const{onboardingType:t,onboardingStack:n,prevOnboardingStack:r,currentStep:o}=x.useOnboarding(),a=t===x.OnboardingType.Restore,l=n.length,c=l>r.length,s=l>1||a,u=0===r.length,d=u?1:0,p=`${l}_${r.length}`,m={initial:{opacity:d},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2,duration:.2}},h={initial:{x:u?0:c?150:-150,opacity:d},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(i).createElement(Xt,null,s?e(i).createElement($e.motion.div,Object.assign({},m),e(i).createElement(Vt,null)):e(i).createElement(Yt,null),e(i).createElement($e.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(Jt,Object.assign({key:p},h),o)))};s.initSentry(),l.render(e(i).createElement(c.BrowserRouter,null,e(i).createElement(u.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(i).createElement(d.QueryProvider,null,e(i).createElement(p.FeatureFlagsProvider,null,e(i).createElement(m.AccountImporterProvider,null,e(i).createElement(Lt.FullPageHeader,null),e(i).createElement(Ut.OnboardingAndConnectHardwareErrorBoundary,null,e(i).createElement(x.OnboardingProvider,null,e(i).createElement(Qt,null))))))),document.getElementById("root"));define=__define;})(window.define);