(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequirea886=a);var i=a("aZikt"),l=a("ihAua"),c=a("gDkTC");a("6CHoY");var u=a("ci2Mj"),s=a("5cKs6"),d=a("h5G75"),m=a("ixd3d"),p={};t(p,"AccountImporterProvider",(function(){return E}),(function(e){return E=e})),t(p,"useAccountImporter",(function(){return x}),(function(e){return x=e}));i=a("aZikt");var h=a("lwple"),f=a("czDD7"),g=(h=a("lwple"),a("8C6BZ")),b=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const v=i.createContext({accountMetas:[],setAccountMetas(){},importAccountMetas(){return b(this,void 0,void 0,(function*(){}))}}),E=({children:t})=>{const[n,o]=i.useState([]),r=i.useCallback((e=>b(void 0,void 0,void 0,(function*(){yield f.setStorageValue(h.StorageKeys.AccountMetas,e);for(const t of e)t.type===h.AccountType.Seed&&g.analytics.capture("addSeedAccount",{data:{walletIndex:t.walletIndex}});yield f.setStorageValue(h.StorageKeys.SelectedAccountIndex,0)}))),[]);return e(i).createElement(v.Provider,{value:{accountMetas:n,setAccountMetas:o,importAccountMetas:r}},t)},x=()=>i.useContext(v);i=a("aZikt"),c=a("gDkTC");var w=a("lxqKj"),y=a("ehJ6P");a("6CHoY");var S=a("7eQt4"),C=(g=a("8C6BZ"),{});t(C,"OnboardingImportWallet",(function(){return kt}),(function(e){return kt=e}));i=a("aZikt");var k=a("hHMPk"),P=a("7Qmuu"),T=(w=a("lxqKj"),a("3XPpL")),A=(g=a("8C6BZ"),a("cweFb")),M=a("g7X40"),O=(i=a("aZikt"),k=a("hHMPk"),a("aADTv")),R=a("dczY0");M=a("g7X40"),i=a("aZikt"),k=a("hHMPk"),R=a("dczY0");const I=k.default(R.Column).attrs({justify:"center"})`
  height: 100%;
  margin-bottom: 20px; // to offset <OnboardingContent /> 20px padding. See (onboarding_flow.tsx)
  flex: 1;
`,F=k.default.div`
  width: 100%;
  height: fit-content;
`,H=({children:t})=>e(i).createElement(I,null,e(i).createElement(F,null,t)),_=k.default.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`,D=k.default(R.Column).attrs({align:"center"})`
  margin-bottom: 20px;
`,B=k.default(M.Text).attrs({color:"FFFFFF",weight:500,size:28,lineHeight:34,textAlign:"center",margin:"0 0 10px 0"})``,W=k.default(M.Text).attrs((e=>{var t;return{size:16,color:null!==(t=e.color)&&void 0!==t?t:"#999"}}))``,j=({onSubmit:t,title:n,subtitle:o,subtitleColor:r,buttonTheme:a="default",buttonText:l,buttonDisabled:c,children:u})=>e(i).createElement(_,{onSubmit:e=>{e.preventDefault(),t()}},e(i).createElement(H,null,e(i).createElement(D,null,e(i).createElement(B,null,n),e(i).createElement(W,{color:r},o)),u),e(i).createElement(O.Button,{type:"submit",theme:a,disabled:c},l));i=a("aZikt"),k=a("hHMPk"),P=a("7Qmuu");var N=a("7rvxc"),L=(A=a("cweFb"),R=a("dczY0"),a("lPkGw")),Z=(i=a("aZikt"),k=a("hHMPk"),a("cFuyE")),K={};t(K,"CheckboxGroup",(function(){return Ee}),(function(e){return Ee=e})),t(K,"Checkbox",(function(){return xe}),(function(e){return xe=e}));i=a("aZikt"),k=a("hHMPk"),i=a("aZikt");var z=a("f9f8D"),U=a("52Tb2"),G=a("itADJ"),$=a("d8po8"),V=a("fIGG7"),X=a("kHzXS"),Y=a("abL1A");function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},J.apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var q,ee,te;function ne(e){return!(!e||e.isControlled||e.disabled)}function oe(e){return function(t,n){return t&&t.isControlled&&n.state===e}}!function(e){e.Checked="checked",e.Mixed="mixed",e.Unchecked="unchecked"}(ee||(ee={})),function(e){e.GetDerivedData="GET_DERIVED_DATA",e.Mount="MOUNT",e.Set="SET",e.Toggle="TOGGLE",e.Unmount="UNMOUNT"}(te||(te={}));var re=Y.assign((function(e,t){return J({},e,{refs:t.refs})})),ae=((q={})[te.Mount]={actions:re},q[te.GetDerivedData]={actions:[re,Y.assign((function(e,t){return J({},e,t.data)}))]},q[te.Set]=[{target:ee.Checked,cond:oe(ee.Checked)},{target:ee.Unchecked,cond:oe(ee.Unchecked)},{target:ee.Mixed,cond:oe(ee.Mixed)}],q);function ie(e,t,n){void 0===n&&(n="useMixedCheckbox");var o,r=t||{},a=r.checked,l=r.defaultChecked,c=r.disabled,u=r.onChange,s=r.onClick,d=null!=a,m=Y.useCreateMachine(function(e,t){var n,o,r,a;return{id:"mixed-checkbox",initial:e,context:{disabled:t.disabled,isControlled:t.isControlled,refs:{input:null}},states:(a={},a[ee.Unchecked]={entry:re,on:J((n={},n[te.Toggle]={target:ee.Checked,cond:ne},n),ae)},a[ee.Checked]={entry:re,on:J((o={},o[te.Toggle]={target:ee.Unchecked,cond:ne},o),ae)},a[ee.Mixed]={entry:re,on:J((r={},r[te.Toggle]={target:ee.Checked,cond:ne},r),ae)},a)}}(le(d?a:l),{disabled:!!c,isControlled:d})),p=Y.useMachine(m,{input:e},false),h=p[0],f=p[1],g={"aria-checked":ce(h.value),checked:(o=h.value,o===ee.Checked),disabled:!!c,onChange:V.composeEventHandlers(u,(function(){d||f(te.Toggle)})),onClick:V.composeEventHandlers(s,(function(){v()})),type:"checkbox"},b={checked:ce(h.value)};function v(){e.current&&(e.current.indeterminate=h.value===ee.Mixed)}return i.useEffect((function(){d&&f({type:te.Set,state:le(a)})}),[d,a,f]),X.useIsomorphicLayoutEffect(v),i.useEffect((function(){f({type:te.GetDerivedData,data:{disabled:c,isControlled:d}})}),[c,d,f]),[g,b]}function le(e){return!0===e?ee.Checked:"mixed"===e?ee.Mixed:ee.Unchecked}function ce(e){return e===ee.Checked||e===ee.Mixed&&"mixed"}function ue(e,t,n){var o=null!=e,r=i.useRef(o).current;i.useEffect((function(){}),[n,t,o,r])}var se=["as","checked","children","defaultChecked","disabled","onClick","onChange","__componentName"],de=["as","onBlur","onFocus"],me=z.createNamedContext("CustomCheckboxContext",{});var pe=i.forwardRef((function(e,t){var n=e.as,o=void 0===n?"span":n,r=e.checked,a=e.children,l=e.defaultChecked,c=e.disabled,u=e.onClick,s=e.onChange,d=e.__componentName,m=void 0===d?"CustomCheckboxContainer":d,p=Q(e,se),h=i.useRef(null),f=ie(h,{defaultChecked:l,checked:r,disabled:c,onChange:s},m),g=f[0],b=f[1],v=i.useState(!1),E=v[0],x=v[1];var w={defaultChecked:l,disabled:c,focused:E,inputProps:g,inputRef:h,setFocused:x};return ue(r,"checked",m),G.useCheckStyles("checkbox"),i.createElement(me.Provider,{value:w},i.createElement(o,J({},p,{ref:t,"data-reach-custom-checkbox-container":"","data-focused":E?"":void 0,"data-state":le(b.checked),onClick:V.composeEventHandlers(u,(function(){window.requestAnimationFrame((function(){h.current&&h.current.focus()}))}))}),U.isFunction(a)?a({checked:g["aria-checked"],inputRef:h,focused:E}):a))})),he=i.forwardRef((function(e,t){var n=e.as,o=void 0===n?"input":n,r=e.onBlur,a=e.onFocus,l=Q(e,de),c=i.useContext(me),u=c.focused,s=c.inputProps,d=c.inputRef,m=c.setFocused,p=$.useComposedRefs(t,d),h=i.useRef(!0);return i.useEffect((function(){return function(){h.current=!1}}),[]),i.createElement(o,J({},l,s,{ref:p,type:"checkbox","data-reach-custom-checkbox-input":"","data-focused":u?"":void 0,onBlur:V.composeEventHandlers(r,(function(){window.requestAnimationFrame((function(){h.current&&m(!1)}))})),onFocus:V.composeEventHandlers(a,(function(){window.requestAnimationFrame((function(){h.current&&m(!0)}))}))}))})),fe=a("99Anx"),ge=a("hJDxl"),be=(A=a("cweFb"),function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n});function ve(e){return{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",width:"100%",height:"100%",userSelect:"none",pointerEvents:"none",borderRadius:"6px",opacity:""+(e?1:0),transition:"transform 150ms ease-out, background 150ms ease-out",zIndex:1,background:!0===e?"#4E44CE":"transparent"}}const Ee=k.default(A.Row)`
  margin: ${e=>{var t;return null!==(t=e.margin)&&void 0!==t?t:0}};
  > * {
    margin-right: 10px;
  }
  label {
    color: #8a81f8;
    cursor: pointer;
    &:hover {
      color: ${fe.hexToRGB("#8A81F8",.5)};
    }
  }
`,xe=t=>{const{onChange:n}=t,o=be(t,["onChange"]),r=t.checked;return e(i).createElement(pe,{checked:null!=t.checked?t.checked:r,onChange:n,style:{background:"#181818",border:"1px solid #2F2F2F",borderRadius:"6px",height:22,minHeight:22,width:22,minWidth:22,cursor:"pointer",userSelect:"none",position:"relative",outlineColor:"transparent",outlineStyle:"none",boxShadow:"none"}},e(i).createElement(he,Object.assign({},o)),e(i).createElement("span",{"aria-hidden":!0,style:ve(r)},e(i).createElement(ge.CheckmarkIcon,{width:13})))};var we=a("2MtnF");M=a("g7X40");const ye=t=>{var n,o,r;const a=!!t.selected,[l,c]=i.useState(null!==(o=null!==(n=t.selected)&&void 0!==n?n:t.defaultSelected)&&void 0!==o?o:[]),u=null!==(r=t.selected)&&void 0!==r?r:l,s=new Set(u);return e(i).createElement(Se,null,t.accounts.map((({meta:n,lamports:o})=>{const r=s.has(n.publicKey);return e(i).createElement(Ce,{key:n.publicKey,onClick:()=>{r?(e=>{var n,o;const r=new Set(u);r.delete(e);const i=[...r];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(o=t.onDeselect)||void 0===o||o.call(t,e)})(n.publicKey):(e=>{var n,o;const r=new Set(u);r.add(e);const i=[...r];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(o=t.onSelect)||void 0===o||o.call(t,e)})(n.publicKey)}},e(i).createElement(K.CheckboxGroup,{width:"auto"},e(i).createElement(K.Checkbox,{checked:r}),e(i).createElement("span",null,Z.formatHashMedium(n.publicKey,4))),e(i).createElement(M.Text,{color:"#777",size:14},e(i).createElement(we.SolBalance,{format:"0,0.[000]"},o)))})))},Se=k.default.ul`
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
`,Ce=k.default.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  label {
    color: #999;
  }
`;var ke={};t(ke,"OnboardingCreatePassword",(function(){return st}),(function(e){return st=e}));i=a("aZikt"),k=a("hHMPk"),P=a("7Qmuu");var Pe=a("6oEu9"),Te=(h=a("lwple"),a("hUfgV")),Ae=(g=a("8C6BZ"),a("ebwnM")),Me=a("cqRHn"),Oe=a("02ZG7"),Re=a("a80wK"),Ie=(M=a("g7X40"),R=a("dczY0"),{});t(Ie,"OnboardingCreateRecoveryPhrase",(function(){return ot}),(function(e){return ot=e}));i=a("aZikt"),k=a("hHMPk");var Fe=a("e5x4G"),He=a("fCuks"),_e=(P=a("7Qmuu"),a("6oEu9"),h=a("lwple"),Te=a("hUfgV"),a("4yWCU")),De=(Oe=a("02ZG7"),g=a("8C6BZ"),a("2kWQE"));ge=a("hJDxl"),M=a("g7X40"),A=a("cweFb"),R=a("dczY0"),O=a("aADTv"),i=a("aZikt"),k=a("hHMPk"),He=a("fCuks"),P=a("7Qmuu"),h=a("lwple"),_e=a("4yWCU"),Oe=a("02ZG7"),i=a("aZikt");const Be=e=>{const[t,n]=i.useState(!1),o=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!0)},r=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!1)},a=()=>{n(!1)};return i.useEffect((()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",r),window.addEventListener("blur",a),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",r),window.removeEventListener("blur",a)})),[]),t};ge=a("hJDxl"),M=a("g7X40"),A=a("cweFb"),i=a("aZikt"),k=a("hHMPk");var We=a("d3pmY");P=a("7Qmuu"),Pe=a("6oEu9"),g=a("8C6BZ"),ge=a("hJDxl"),R=a("dczY0"),A=a("cweFb"),O=a("aADTv"),M=a("g7X40"),i=a("aZikt"),k=a("hHMPk"),R=a("dczY0"),ge=a("hJDxl"),A=a("cweFb"),M=a("g7X40");const je=k.default(A.Row).attrs({width:"350px"})`
  background-color: #4e44ce;
  height: 74px;
  border: 1px solid #665ddc;
  border-radius: 8px;
  padding: 15px;
`,Ne=k.default(R.Column).attrs({justify:"center"})`
  margin-left: 15px;
`,Le=k.default.span`
  display: inline;
  position: relative;
  top: ${e=>e.top};
  margin-left: 2px;
  margin-right: 2px;
`,Ze=()=>e(i).createElement(je,null,e(i).createElement(ge.LogoNoBackground,null),e(i).createElement(Ne,null,e(i).createElement(M.Text,{size:16,weight:600},"Pin the Phantom extension"),e(i).createElement(M.Text,{size:16,weight:400},"Click"," ",e(i).createElement(Le,{top:"1px"},e(i).createElement(ge.ChromeExtensionIcon,{width:16,height:16}))," ","and then"," ",e(i).createElement(Le,{top:"3px"},e(i).createElement(ge.PinChromeExtensionIcon,{width:9.49,height:16}))," ","and voilà!"))),Ke=k.default(R.Column)`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,ze=k.default(O.Button).attrs({borderRadius:"6px"})`
  &:hover {
    path {
      fill: white;
    }
  }
`,Ue=k.default(A.Row).attrs({justify:"space-between"})`
  padding: 0 20px;
`,Ge=k.default(We.motion.div)`
  position: fixed;
  top: 16px;
  right: 16px;
`,$e=()=>{const{t:t}=P.useTranslation(),n=[{id:0,icon:e(i).createElement(ge.TwitterIcon,null),text:t("onboardingSocialsFollowOnTwitter"),onClick:()=>{g.analytics.capture("onboardingTwitterClick"),window.open(Pe.PHANTOM_TWITTER_URL,"_blank")}},{id:1,icon:e(i).createElement(ge.HelpIcon,{fill:"#fff",width:20}),text:t("onboardingSocialsVisitHelpCenter"),onClick:()=>{g.analytics.capture("onboardingHelpCenterClick"),window.open(Pe.PHANTOM_SUPPORT_URL,"_blank")}}];return e(i).createElement(e(i).Fragment,null,e(i).createElement(j,{onSubmit:()=>{g.analytics.capture("onboardingFinishClick"),window.close()},title:t("onboardingSocialsFinished"),subtitle:t("onboardingSocialsFinishedDescription"),buttonTheme:"primary",buttonText:t("onboardingSocialsFinishAction")},e(i).createElement(Ke,null,n.map((({id:t,icon:n,text:o,onClick:r})=>e(i).createElement(ze,{key:t,onClick:r},e(i).createElement(Ue,null,e(i).createElement(A.Row,null,n,e(i).createElement(M.Text,{size:16,weight:600,lineHeight:19,margin:"0 0 0 20px"},o)),e(i).createElement(ge.RightChevronIcon,null))))))),e(i).createElement(Ge,{animate:{opacity:1},initial:{opacity:0},transition:{delay:.4}},e(i).createElement(Ze,null)))},Ve=k.default(A.Row).attrs({justify:"center"})`
  height: 80px;
  width: ${e=>e.width}px;
  border-radius: 10px;
  background-color: #333333;
  transition: transform 200ms ease;
  &:not(:last-child) {
    margin-right: 20px;
  }
  ${e=>!e.isHighlighted&&k.css`
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      transform: translate(0, -5px);
    `}
  svg {
    fill: ${e=>e.isHighlighted?"white":"#999999"};
    transition: fill 200ms ease;
  }
`;Ve.defaultProps={width:"80px"};const Xe=()=>{var t;const{t:n}=P.useTranslation(),{pushStep:o}=Dt(),r=Oe.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen),a=Oe.useStoreStorageValue(h.StorageKeys.PopupHasBeenSeen),l=null!==(t=r.data)&&void 0!==t&&t,c=Be("p"),u=Be("Shift"),s=Be("Alt"),d=_e.BROWSER_ENV.os.name===He.OS_MAP.MacOS,m=d?"107px":"80px",p=n(d?"onboardingKeyboardShortcutMac":"onboardingKeyboardShortcutNotMac"),f=[{id:"altOption",isHighlighted:s,width:m,icon:d?e(i).createElement(ge.OptionIcon,null):e(i).createElement(ge.AltIcon,null)},{id:"shift",isHighlighted:u,icon:e(i).createElement(ge.ShiftIcon,null)},{id:"p",isHighlighted:c,icon:e(i).createElement(ge.PKeyIcon,null)}];return e(i).createElement(j,{onSubmit:()=>{l||a.mutate(!0),o(e(i).createElement($e,null))},title:n("onboardingKeyboardShortcut"),subtitle:n("onboardingKeyboardShortcutDescription"),buttonTheme:"primary",buttonText:n("onboardingKeyboardShortcutContinue")},e(i).createElement(A.Row,{justify:"center",margin:"0 0 30px 0"},f.map((({id:t,isHighlighted:n,width:o,icon:r})=>e(i).createElement(Ve,{key:t,isHighlighted:n,width:o},r)))),e(i).createElement(A.Row,{justify:"center"},e(i).createElement(M.Text,{size:17,weight:500,color:"#999"},n("onboardingKeyboardShortcutTry")," ",p)))};var Ye=a("dkOkP").Buffer,Je=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const Qe=k.default(R.Column).attrs({justify:"space-between"})`
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
`,qe=k.default(R.Column)`
  align-items: center;
  display: flex;
  position: relative;
`,et=k.default(A.Row).attrs({justify:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`,tt=k.default(O.Button)`
  padding: 10px 0;
`,nt=k.default(A.Row)`
  svg {
    margin-right: 10px;
  }
`,ot=({password:t})=>{var n,o;const{t:r}=P.useTranslation(),{pushStep:a,freshSeedAndMnemonic:l}=Dt(),c=null==l?void 0:l.seed,u=null!==(n=null==l?void 0:l.mnemonic)&&void 0!==n?n:Pe.DEFAULT_SEED_AND_MNEMONIC.mnemonic,[s,d]=i.useState(!1),[m,p]=i.useState(!1),[f,b]=i.useState(!0),[v,E]=i.useState(!1),x=i.useRef(null).current,w=null!==(o=Oe.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen).data)&&void 0!==o&&o,y=()=>{b(!0),null==x||x.setSelectionRange(0,0),null==x||x.blur()},S=()=>{f&&(b(!1),null==x||x.focus(),null==x||x.setSelectionRange(0,0))},C=e=>{if(!e)return;const t=Object.values(e)[0];if("number"==typeof t&&!s);else if("boolean"==typeof t){t&&(m||p(!0),v||E(!0))}},k=e=>{const t=JSON.stringify(e),[n,o,r]=(()=>{switch(_e.BROWSER_ENV.browser.name){case He.BROWSER_MAP.chrome:return[Pe.ONE_PASSWORD_CHROME_STABLE,Pe.ONE_PASSWORD_CHROME_BETA];case He.BROWSER_MAP.firefox:return[Pe.ONE_PASSWORD_FIREFOX_STABLE,Pe.ONE_PASSWORD_FIREFOX_BETA];case He.BROWSER_MAP.edge:return[Pe.ONE_PASSWORD_EDGE_STABLE,Pe.ONE_PASSWORD_CHROME_STABLE,Pe.ONE_PASSWORD_CHROME_BETA];default:return[Pe.ONE_PASSWORD_CHROME_STABLE,Pe.ONE_PASSWORD_CHROME_BETA]}})();Fe.browser.runtime.sendMessage(n,t).then(C).catch((()=>{Fe.browser.runtime.sendMessage(o,t).then(C).catch((()=>{r&&Fe.browser.runtime.sendMessage(r,t).then(C).catch()}))}))};return i.useEffect((()=>{let e;return m&&(e=setTimeout((()=>{p(!1)}),5e3)),()=>{e&&clearTimeout(e)}}),[m]),e(i).createElement(j,{onSubmit:()=>Je(void 0,void 0,void 0,(function*(){l&&(g.analytics.capture("onboardingCreateNewWallet"),a(e(i).createElement(Xe,null)),w&&a(e(i).createElement($e,null)))})),title:r("onboardingCreateRecoveryPhraseSecretRecoveryPhrase"),subtitle:r("onboardingCreateRecoveryPhraseSecretRecoveryPhraseReminder"),subtitleColor:"#FFDC62",buttonTheme:v?"primary":"default",buttonText:r("onboardingCreateRecoveryPhraseContinue"),buttonDisabled:!v},e(i).createElement(Qe,{onMouseEnter:S,onMouseLeave:y},e(i).createElement(qe,{onClick:S},f&&e(i).createElement(et,null,e(i).createElement(ge.PrivacyEyeIcon,null)),e(i).createElement(De.SecretCanvas,{onBlur:y,onFocus:S,isBlurred:f,mnemonic:u,width:330})),s&&e(i).createElement(tt,{onClick:()=>{if(!c||!u.length)return;const{publicKey:e}=Te.createSeedAccount(Ye.from(c,"hex"),"Wallet 1",0,h.DerivationPathType.Bip44Change),n={name:"create-item",data:{type:"",saveRequest:{title:"Phantom Wallet",fields:[{autocomplete:"crypto-address",value:e},{autocomplete:"crypto-recovery-seed",value:u.toString()},{autocomplete:"current-password",value:t}],notes:void 0}}};k(n)}},e(i).createElement(nt,{justify:"center"},e(i).createElement(ge.OnePasswordIcon,null),r(m?"onboardingCreateRecoveryPhraseSaved":"onboardingCreateRecoveryPhraseSaveIn1Password")))),e(i).createElement(K.CheckboxGroup,null,e(i).createElement(K.Checkbox,{checked:v,onChange:()=>{E(!v)}}),e(i).createElement(M.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(P.Trans,{i18nKey:"onboardingCreateRecoveryPhraseSavedSecretRecoveryPhrase"}))))};var rt=a("dkOkP").Buffer,at=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const it={password:"",confirmPassword:""},lt=k.default(R.Column)`
  margin-bottom: ${e=>e.needsExtraMargin?37:17}px;
  input[name="password"] {
    margin-bottom: 10px;
  }
`,ct=k.default.div`
  position: relative;
  width: 100%;
`,ut=k.default(M.Text).attrs({size:14,lineHeight:19,margin:"0",weight:600})`
  position: absolute;
  top: 15px;
  right: 14px;
`,st=()=>{var t;const{t:n}=P.useTranslation(),{accountMetas:o,importAccountMetas:r}=p.useAccountImporter(),{onboardingType:a,setCanCreateSeedAndMnemonic:l,freshSeedAndMnemonic:c,importedSeedAndMnemonic:u,pushStep:s}=Dt(),d=a===Ft.Create,m=a===Ft.Import,f=a===Ft.Restore,b=Oe.useFetchStorageValue(h.StorageKeys.TermsHaveBeenAcknowledgedV2),v=Oe.useStoreStorageValue(h.StorageKeys.TermsHaveBeenAcknowledgedV2),E=i.useMemo((()=>{var e;return null!==(e=b.data)&&void 0!==e&&e}),[b.data]),x=null!==(t=Oe.useFetchStorageValue(h.StorageKeys.PopupHasBeenSeen).data)&&void 0!==t&&t,[w,y]=i.useState(it),{password:S,confirmPassword:C}=w,[k,T]=i.useState(void 0),A=i.useMemo((()=>{const e=S.length;switch(!0){case e>0&&e<8:return n("onboardingCreatePasswordPasswordStrengthWeak");case e>=8&&e<21:return n("onboardingCreatePasswordPasswordStrengthMedium");case e>=21:return n("onboardingCreatePasswordPasswordStrengthStrong");default:return}}),[S]),O=i.useMemo((()=>{switch(A){case n("onboardingCreatePasswordPasswordStrengthWeak"):return"#EB3742";case n("onboardingCreatePasswordPasswordStrengthMedium"):return"#FFDC62";case n("onboardingCreatePasswordPasswordStrengthStrong"):return"#21E56F";default:return"#777777"}}),[A]),R=!f&&!E||!S||!C,I=e=>{const{name:t,value:n}=e.currentTarget;k&&T(void 0),y(Object.assign(Object.assign({},w),{[t]:n}))},F=e=>at(void 0,void 0,void 0,(function*(){if(!e)throw new Error("Failed to import accounts: missing a seed and mnemonic.");try{if(yield Te.setSeedAndMnemonicWithPassword(e,S),o.length)yield r(o);else{const t=rt.from(e.seed,"hex"),n=Te.createSeedAccount(t,"Wallet 1",0,h.DerivationPathType.Bip44Change);yield r([n])}}catch(e){(null==e?void 0:e.message.includes("Invalid seed"))?T(n("onboardingCreatePasswordErrorInvalidSecretRecoveryPhrase")):console.error(e)}}));return e(i).createElement(j,{onSubmit:()=>at(void 0,void 0,void 0,(function*(){const t=Ae.validatePassword(S),n=Ae.validateConfirmPassword(S,C);t||n?T(null!=t?t:n):d?(F(c),l(!1),g.analytics.capture("onboardingCreatePassword"),Me.acknowledgeWhatsNewOverlay(),s(e(i).createElement(Ie.OnboardingCreateRecoveryPhrase,{password:S}))):(F(u),g.analytics.capture(m?"importWalletCreatePassword":"restoreWalletCreatePassword"),Me.acknowledgeWhatsNewOverlay(),s(e(i).createElement(Xe,null)),x&&s(e(i).createElement($e,null)))})),title:n("onboardingCreatePassword"),subtitle:n("onboardingCreatePasswordDescription"),buttonTheme:R?"default":"primary",buttonText:n("onboardingCreatePasswordContinue"),buttonDisabled:R},e(i).createElement(lt,{needsExtraMargin:!!k},e(i).createElement(Re.Input,{type:"password",name:"password",placeholder:n("onboardingCreatePasswordPasswordPlaceholder"),onChange:I}),e(i).createElement(ct,null,e(i).createElement(Re.Input.WithWarning,{type:"password",name:"confirmPassword",placeholder:n("onboardingCreatePasswordConfirmPasswordPlaceholder"),onChange:I,warningMessage:k}),!!A&&e(i).createElement(ut,{color:O},A))),!f&&e(i).createElement(K.CheckboxGroup,null,e(i).createElement(K.Checkbox,{checked:E,onChange:()=>{const e=E;v.mutate(!e)}}),e(i).createElement(M.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(P.Trans,{i18nKey:"onboardingCreatePasswordAgreeToTermsOfServiceInterpolated"},"I agree to the ",e(i).createElement("label",{onClick:()=>{g.analytics.capture("onboardingTermsClick"),window.open(Pe.PHANTOM_TERMS_URL,"_blank")}},"Terms of Service")))))};var dt=a("dkOkP").Buffer;const mt=k.default(R.Column).attrs({align:"center",justify:"center"})`
  height: 210px;
`,pt=k.default(A.Row).attrs({justify:"center"})`
  flex-flow: column;
  max-height: 210px;
  overflow-y: scroll;
  ul {
    margin: 0;
    width: 100%;
  }
`,ht=()=>{const{t:t}=P.useTranslation(),{setAccountMetas:n}=p.useAccountImporter(),{importedSeedAndMnemonic:o,pushStep:r}=Dt(),a=(null==o?void 0:o.seed)?dt.from(o.seed,"hex"):void 0,l=N.useFetchAccountsBySeed(a),c=i.useMemo((()=>{var e;return null!==(e=l.data)&&void 0!==e?e:[]}),[l.data]),u=l.isFetched,[s,d]=i.useState([]),m=s.length,h=i.useMemo((()=>{const e=c.filter((e=>e.sigs>0||e.lamports>0));return(e.length?e:c.slice(0,1)).map((e=>e.meta.publicKey))}),[c]);return i.useEffect((()=>{d((e=>m?e:h))}),[h]),e(i).createElement(j,{onSubmit:()=>{const t=new Set(s),o=c.filter((e=>t.has(e.meta.publicKey))).map((({meta:e},t)=>Object.assign(Object.assign({},e),{name:`Wallet ${t+1}`})));n(o),r(e(i).createElement(ke.OnboardingCreatePassword,null))},title:t("onboardingSelectAccountsImportAccounts"),subtitle:t("onboardingSelectAccountsImportAccountsDescription"),subtitleColor:"#999",buttonTheme:m?"primary":"default",buttonText:t("onboardingSelectAccountsImportSelectedAccounts"),buttonDisabled:!m},u?e(i).createElement(pt,null,e(i).createElement(ye,{accounts:c,defaultSelected:h,onChange:d})):e(i).createElement(mt,null,e(i).createElement(L.Spinner,null)))};var ft=a("dkOkP").Buffer,gt=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const bt=k.default(A.Row).attrs({align:"center",justify:"center",width:"120px"})`
  color: #fff;
  background: #181818;
  border: 1px solid #2f2f2f;
  border-radius: 6px;
  align-self: center;
  height: 41px;
  &:focus-within {
    border: 1px solid #8a81f8;
  }
`,vt=k.default.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  row-gap: 10px;
  ${bt}:nth-child(3n-2) {
    justify-self: left;
  }
  ${bt}:nth-child(3n+2) {
    justify-self: center;
  }
  ${bt}:nth-child(3n+3) {
    justify-self: right;
  }
`,Et=k.default(M.Text).attrs({size:14,color:"#999999"})``,xt=k.default.input`
  color: #fff;
  background: none;
  border: none;
  width: 65%;
  &:focus {
    outline: 0;
  }
`,wt=k.default.div`
  height: 24px;
  padding: 12px 0 30px;
`,yt=k.default(A.Row).attrs({align:"center",justify:"center"})``,St=k.default.a`
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
`,Ct=k.default(M.Text).attrs({color:"#eb3742",size:16,textAlign:"left"})``,kt=()=>{const{t:t}=P.useTranslation(),{onboardingType:n,pushStep:o,setImportedSeedAndMnemonic:r}=Dt(),a=n===Ft.Restore,[l,c]=w.useToggle(!1),u=l?24:12,[s,d]=i.useState(new Array(u)),[m,p]=i.useState(void 0),h=-1===s.findIndex((e=>void 0===e));return i.useEffect((()=>{const e=s.slice(0,12);if(24===u){const t=new Array(12);d([...e,...t])}else d(e)}),[l]),e(i).createElement(j,{onSubmit:()=>gt(void 0,void 0,void 0,(function*(){try{const t=ft.from(" "),n=s.reduce(((e,n)=>ft.concat([e,t,n]))),l=yield T.toSeedAndMnemonic(n);r({seed:ft.from(l.seed).toString("hex"),mnemonic:n}),g.analytics.capture(a?"restoreWalletRestore":"onboardingImportWallet"),o(e(i).createElement(ht,null))}catch(e){p(t("onboardingImportWalletErrorInvalidSecretRecoveryPhrase")),console.error(e)}})),title:t("onboardingImportWalletSecretRecoveryPhrase"),subtitle:t("onboardingImportWalletImportExistingWallet"),buttonTheme:h?"primary":"default",buttonText:t(a?"onboardingImportWalletRestoreWallet":"onboardingImportWallet"),buttonDisabled:!h},e(i).createElement(vt,null,[...Array(u)].map(((t,n)=>e(i).createElement(bt,{key:n},e(i).createElement(Et,null,`${n+1}.`),e(i).createElement(xt,{autoComplete:"off",autoCorrect:"off",spellCheck:!1,id:`word_${n}`,key:`word_${n}`,onChange:e=>((e,t)=>{m&&p(void 0);const n=[...s],o=e.replaceAll(/\s+/g," ").toLowerCase().trim();n[t]=ft.from(o),d(n)})(e.target.value,n),pattern:"[A-Za-z\\s]+"}))))),e(i).createElement(wt,null,m&&e(i).createElement(Ct,null,m),!m&&e(i).createElement(yt,null,e(i).createElement(St,{onClick:()=>c(!l)},t("onboardingImportWalletIHaveWords",{numWords:l?12:24})))))};var Pt={};t(Pt,"OnboardingPathSelection",(function(){return It}),(function(e){return It=e}));i=a("aZikt"),k=a("hHMPk"),P=a("7Qmuu"),T=a("3XPpL"),O=a("aADTv"),R=a("dczY0"),ge=a("hJDxl"),M=a("g7X40");var Tt=a("dkOkP").Buffer,At=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const Mt=k.default(R.Column).attrs({justify:"center"})`
  height: 100%;
  flex: 1;
`,Ot=k.default(R.Column).attrs({align:"center",justify:"center"})`
  svg:nth-child(2) {
    margin: 20px 0;
  }
`,Rt=k.default(R.Column).attrs({justify:"flex-end"})`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,It=()=>{const{t:t}=P.useTranslation(),{setOnboardingType:n,canCreateSeedAndMnemonic:o,setFreshSeedAndMnemonic:r,pushStep:a}=Dt();return e(i).createElement(Mt,null,e(i).createElement(H,null,e(i).createElement(Ot,null,e(i).createElement(ge.Logo,null),e(i).createElement(ge.LogoBrand,null),e(i).createElement(M.Text,{color:"#999",size:17},t("onboardingPathSelectionTagline")))),e(i).createElement(Rt,null,e(i).createElement(O.Button,{theme:"primary",onClick:()=>At(void 0,void 0,void 0,(function*(){o&&(yield At(void 0,void 0,void 0,(function*(){try{const e=yield T.createMnemonic(),t=yield T.toSeedAndMnemonic(e);r({seed:Tt.from(t.seed).toString("hex"),mnemonic:e})}catch(e){console.error(e)}}))),n(Ft.Create),a(e(i).createElement(ke.OnboardingCreatePassword,null))}))},t("onboardingPathSelectionCreateWallet")),e(i).createElement(O.Button,{onClick:()=>{n(Ft.Import),a(e(i).createElement(C.OnboardingImportWallet,null))}},t("onboardingPathSelectionIHaveAWallet"))))};var Ft;!function(e){e.Initial="initial",e.Create="create",e.Import="import",e.Restore="restore"}(Ft||(Ft={}));const Ht=i.createContext(null),_t=({children:t})=>{var n;const{search:o}=c.useLocation(),r=new URLSearchParams(o).get("restore"),[a,l]=i.useState(!0),[u,s]=i.useState(void 0),[d,m]=i.useState(void 0),[p,h]=i.useState(r?Ft.Restore:Ft.Initial),[f,b]=i.useState([]),v=null!==(n=w.usePreviousDistinct(f,((e,t)=>(null==e?void 0:e.length)===t.length)))&&void 0!==n?n:[],E=S.getLast(f);return i.useEffect((()=>{r?(g.analytics.capture("restoreWalletOpen"),b([e(i).createElement(C.OnboardingImportWallet,null)])):(g.analytics.capture("onboardingOpen"),b([e(i).createElement(Pt.OnboardingPathSelection,null)]))}),[]),e(i).createElement(Ht.Provider,{value:{canCreateSeedAndMnemonic:a,setCanCreateSeedAndMnemonic:l,freshSeedAndMnemonic:u,setFreshSeedAndMnemonic:s,importedSeedAndMnemonic:d,setImportedSeedAndMnemonic:m,onboardingType:p,setOnboardingType:h,onboardingStack:f,prevOnboardingStack:v,currentStep:E,pushStep:e=>{b((t=>y.default(t,(t=>{t.push(e)}))))},popStep:()=>{b((e=>y.default(e,(e=>{e.pop()}))))}}},t)},Dt=()=>{const e=i.useContext(Ht);if(!e)throw new Error("Missing onboarding context");return e};var Bt=a("9P0Mo"),Wt=a("i2Zy4"),jt=(i=a("aZikt"),k=a("hHMPk"),We=a("d3pmY"),A=a("cweFb"),i=a("aZikt"),k=a("hHMPk"),S=a("7eQt4"),a("hoJun")),Nt=a("8FNEt");ge=a("hJDxl"),A=a("cweFb");const Lt=k.default(A.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
`,Zt=k.default(A.Row).attrs({justify:"center"})`
  > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`,Kt=k.default.div`
  width: 24px;
  height: 24px;
`,zt=()=>{const{onboardingType:t,onboardingStack:n,popStep:o}=Dt(),r=t===Ft.Create,a=(Ft.Import,t===Ft.Restore),l=n.length,c=a?l-1:l-2,u=!a||0!==c,s=r?4:5;return e(i).createElement(Lt,null,e(i).createElement(Kt,null,u&&e(i).createElement(jt.ChevronCircle,{right:1,onClick:o},e(i).createElement(ge.LeftChevronIcon,null))),e(i).createElement(Zt,null,S.range(s).map((t=>e(i).createElement(Nt.Circle,{key:t,diameter:12,color:t<=c?"#4E44CE":"#333"})))))},Ut=k.default.main`
  width: ${420}px;
  min-height: ${504}px;
  position: relative;
  overflow: hidden;
  background-color: #222222;
  border: 1px solid #323232;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`,Gt=k.default(A.Row)`
  height: ${46}px;
`,$t=k.default(We.motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(${458}px);
  padding: 20px;
`,Vt=()=>{const{onboardingType:t,onboardingStack:n,prevOnboardingStack:o,currentStep:r}=Dt(),a=t===Ft.Restore,l=n.length,c=l>o.length,u=l>1||a,s=0===o.length,d=s?1:0,m=`${l}_${o.length}`,p={initial:{opacity:d},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2,duration:.2}},h={initial:{x:s?0:c?150:-150,opacity:d},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(i).createElement(Ut,null,u?e(i).createElement(We.motion.div,Object.assign({},p),e(i).createElement(zt,null)):e(i).createElement(Gt,null),e(i).createElement(We.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement($t,Object.assign({key:m},h),r)))};u.initSentry(),l.render(e(i).createElement(c.BrowserRouter,null,e(i).createElement(s.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(i).createElement(d.QueryProvider,null,e(i).createElement(m.FeatureFlagsProvider,null,e(i).createElement(p.AccountImporterProvider,null,e(i).createElement(Bt.FullPageHeader,null),e(i).createElement(Wt.OnboardingAndConnectHardwareErrorBoundary,null,e(i).createElement(_t,null,e(i).createElement(Vt,null))))))),document.getElementById("root"));define=__define;})(window.define);