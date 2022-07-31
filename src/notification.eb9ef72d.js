(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=n.parcelRequirea886;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},n.parcelRequirea886=r);var i=r("aZikt"),c=r("ihAua"),l=r("eLyRJ"),s=r("ci2Mj"),u=r("8C6BZ"),d=r("5cKs6"),p=r("iyOkC"),m=r("4yWCU");r("6CHoY");var g={};t(g,"BackgroundConnectionProvider",(function(){return T}),(function(e){return T=e})),t(g,"useIncomingBackgroundRequest",(function(){return b}),(function(e){return b=e})),t(g,"usePostOutgoingBackgroundResponse",(function(){return x}),(function(e){return x=e}));i=r("aZikt");var f=r("e5x4G"),v=r("6oEu9"),y=(p=r("iyOkC"),function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))});const h={isConnected:!1,lastMessage:null,postMessage:v.NOOP},E=e(i).createContext(h),T=({children:t})=>{const[n,o,a]=function(){const[e,t]=i.useState(null),[n,o]=i.useState(null);i.useEffect((()=>{let e;return(()=>y(this,void 0,void 0,(function*(){const n=`notification/${(yield p.getCurrentWindowAsync()).id}`;e=f.browser.runtime.connect({name:n}),t(e),e.onMessage.addListener((e=>{o(e)})),e.onDisconnect.addListener((()=>{t(null)}))})))(),()=>{null==e||e.disconnect()}}),[]);const a=i.useCallback((t=>{e&&e.postMessage(t)}),[e]);return[!!e,n,a]}();return e(i).createElement(E.Provider,{value:{isConnected:n,lastMessage:o,postMessage:a}},t)};function A(){const e=i.useContext(E);if(!e)throw new Error("Missing background connection context");return e}function b(){const{lastMessage:e}=A();return e&&"string"==typeof e.origin&&e.origin&&e.req&&"string"==typeof e.req.method&&e.req.method?e:null}function x(){const e=b(),{postMessage:t}=A();return i.useCallback((n=>{if(!e)throw new Error("No request received from the background yet");if(e.req.id!==n.id)throw new Error(`Request id: ${e.req.id} does not match response id: ${n.id}`);t(n)}),[e,t])}var k=r("6rMcH"),w=r("eduP0"),S=r("ixd3d"),C=r("82Ilk"),M=r("9ZliH"),P=r("5DQqc"),R=r("eeuNW"),I=r("g9lcT"),B=r("h5G75"),F=r("bMYcF"),O=r("6mzlH"),H=r("jSC0s"),q=r("cjUNA"),D=(i=r("aZikt"),r("hHMPk")),L=(u=r("8C6BZ"),r("lwple")),N=(l=r("eLyRJ"),C=r("82Ilk"),i=r("aZikt"),D=r("hHMPk"),r("7Qmuu")),j=r("cFuyE"),z=r("hJDxl"),K=r("bJYWD"),W=r("9AO5f"),U=r("aADTv"),$=r("lSpdH"),Z=r("g7X40");const _=D.default.div`
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  width: 100%;
  display: flex;
  padding: 10px 5px;
`,J=D.default.div`
  > * {
    margin: 18px 0px;
  }
`,Q=D.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin: 0px ${e=>e.spacing}px;
    text-align: left;
  }
`,V=({tabId:t,origin:n,confirmApproval:o,denyApproval:a})=>{const{t:r}=N.useTranslation();return e(i).createElement(K.Container,null,e(i).createElement(W.AccountHeader,{lastChild:e(i).createElement("div",null),walletMenuShowOnlyAccounts:!0}),e(i).createElement(K.Body,null,e(i).createElement(K.TopGroup,null,e(i).createElement($.TabIconHeader,{tabId:t,secondaryText:j.removeWebPrefixes(n)})),e(i).createElement(_,null,e(i).createElement(J,null,e(i).createElement(Q,{spacing:8},e(i).createElement(Z.Text,{size:14,color:"#777777",lineHeight:16.94,weight:500},r("notificationApplicationApprovalPermissionsPrimary"))),e(i).createElement(Q,{spacing:8},e(i).createElement(z.CheckmarkIcon,{fill:"#21E56F"}),e(i).createElement(Z.Text,{size:14,lineHeight:17},r("notificationApplicationApprovalPermissionsViewWalletActivity"))),e(i).createElement(Q,{spacing:8},e(i).createElement(z.CheckmarkIcon,{fill:"#21E56F"}),e(i).createElement(Z.Text,{size:14,lineHeight:17},r("notificationApplicationApprovalPermissionsTransactionApproval"))))),e(i).createElement(K.BottomGroup,null,e(i).createElement(Q,{spacing:4},e(i).createElement(Z.Text,{size:14,lineHeight:17,color:"#777"},r("notificationApplicationApprovalConnectDisclaimer"))))),e(i).createElement(K.Footer,{plain:!0},e(i).createElement(U.ButtonPair,{primaryText:r("notificationApplicationApprovalActionButtonConnect"),secondaryText:r("notificationApplicationApprovalActionButtonCancel"),onPrimaryClicked:()=>o(n),onSecondaryClicked:()=>a(n)})))};var Y=r("6oQjh"),G=r("iO2dB"),X=r("9OxTN"),ee=r("lPkGw");const te=D.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`,ne=({tabId:t,origin:n,requestId:o})=>{var a;const{accountClient:r}=C.useSelectedAccount(),c=r.publicKey.toString(),s=g.usePostOutgoingBackgroundResponse(),[d,p,m]=Y.useStorage(L.StorageKeys.TrustedApplicationsByOwnerBrowser,{}),f=null!==(a=d[c])&&void 0!==a?a:{},v=void 0!==f[n],[y,h]=e(i).useState(!1),[E,T]=e(i).useState(!1),A=t=>{const n=e(q)(f);n[t]=!0,u.analytics.capture("connectionConfirm",{data:{origin:t}}),m(Object.assign(Object.assign({},d),{[c]:n}))},b=()=>{u.analytics.capture("connectionDeny",{data:{origin:n}});const e=l.createJsonRpcErrorResponse(o,l.RpcErrorCode.UserRejectedRequest);s(e)};if(i.useEffect((()=>{v?(()=>{const e={publicKey:c},t=l.createJsonRpcResponse(o,e);s(t)})():X.detectPhishing(n).then((e=>{T(e.result),h(!0)})).catch((()=>{h(!0)}))}),[v]),v)return null;return p||!y?e(i).createElement(te,null,e(i).createElement(ee.Spinner,null)):E?e(i).createElement(G.BlocklistConnectRequest,{tabId:t,origin:n,confirmApproval:A,denyApproval:b}):e(i).createElement(V,{tabId:t,origin:n,confirmApproval:A,denyApproval:b})};var oe={};t(oe,"SignatureRequest",(function(){return Tt}),(function(e){return Tt=e}));i=r("aZikt"),D=r("hHMPk"),N=r("7Qmuu");var ae=r("bgp3N"),re=(u=r("8C6BZ"),l=r("eLyRJ"),r("HEK4k")),ie=(L=r("lwple"),r("7Lj33")),ce=(C=r("82Ilk"),M=r("9ZliH"),k=r("6rMcH"),i=r("aZikt"),u=r("8C6BZ"),C=r("82Ilk"),{});t(ce,"useFetchScannedTransaction",(function(){return me}),(function(e){return me=e}));i=r("aZikt");var le=r("2pAND"),se=(v=r("6oEu9"),r("j5GoN")),ue=(re=r("HEK4k"),function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))});const de=new Error("Ninja API key missing");var pe;!function(e){e.ChecksPassed="CHECKS_PASSED",e.KnownMalicious="KNOWN_MALICIOUS",e.SuspectedMalicious="SUSPECTED_MALICIOUS"}(pe||(pe={}));const me=(t,n,o)=>{const[a,r]=i.useState({error:null,isLoading:!1});if(i.useEffect((()=>{r({isLoading:!0,error:null}),ue(void 0,void 0,void 0,(function*(){const a=re.messagesToTransaction(t);a.feePayer||void 0===n||(a.feePayer=n);const i=e(le).encode(a.serialize({requireAllSignatures:!1,verifySignatures:!1}));try{const e=new AbortController,t=e.signal;setTimeout((()=>{e.abort()}),3e3);const n=new Headers;if(void 0===v.NINJA_SECURITY_API_KEY)return void r({error:de,isLoading:!1});n.append("X-NINJA-API-Key",v.NINJA_SECURITY_API_KEY),n.append("Content-Type","application/json");const a={tx:i,metadata:{origin:o}},c={method:"POST",headers:n,body:JSON.stringify(a)},l=new Request("https://api.ninja.security/solana/v0/mainnet/scan/transaction",c),s=yield fetch(l,{signal:t});if(s.ok){const e=yield s.json();if(void 0===e.status||![pe.ChecksPassed,pe.KnownMalicious,pe.SuspectedMalicious].includes(e.status))return void r({error:new Error("Response missing valid TxnScanStatus"),isLoading:!1});const t=e.status===pe.KnownMalicious,n=e.status===pe.SuspectedMalicious;r({error:null,isTxnKnownMalicious:t,isTxnSuspectedMalicious:n,isLoading:!1})}else r({error:new Error(`Ninja API returned non-200 response: ${s.status}`),isLoading:!1})}catch(e){e.message.toLowerCase().includes("aborted")?r({error:se.ERR_REQUEST_TIMEOUT_REACHED,isLoading:!1}):r({error:e,isLoading:!1})}}))}),[t,n]),null!==a.error&&a.error===de)throw a.error;return a};se=r("j5GoN");var ge=r("fMhDQ"),fe=(D=r("hHMPk"),i=r("aZikt"),N=r("7Qmuu"),v=r("6oEu9"),r("9qtir")),ve=(u=r("8C6BZ"),j=r("cFuyE"),re=r("HEK4k"),r("6gzK9")),ye=r("lzptm"),he=r("2t1ms"),Ee=(i=r("aZikt"),r("hZalX")),Te=r("ljcNr"),Ae=(C=r("82Ilk"),r("jC9PB")),be={};t(be,"useFetchSimulatedTransaction",(function(){return ke}),(function(e){return ke=e}));ve=r("6gzK9"),re=r("HEK4k"),C=r("82Ilk"),B=r("h5G75");var xe=function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))};function ke(e,t){const{accountClient:n}=C.useSelectedAccount(),o=["simulated-tx",{messages:e}],a=!!e;return B.useQuery({queryKey:o,queryFn:()=>xe(this,void 0,void 0,(function*(){const t=re.messagesToTransaction(e);t.recentBlockhash||(t.recentBlockhash=yield n.getLatestBlockhash()),t.feePayer||(t.feePayer=n.publicKey);const o=re.getAccountsFromTransaction(t).filter((e=>!/1111111111111111/.test(e.toString()))),a=(yield n.simulateTransaction(t,o)).value.accounts;return new Map(ve.zip(o.map((e=>e.toString())),a))})),enabled:a,refetchInterval:t})}var we=r("dkOkP").Buffer;j=r("cFuyE");var Se=r("j2x34");var Ce={};t(Ce,"useTokenMetasForMints",(function(){return Ie}),(function(e){return Ie=e}));var Me=r("lxqKj"),Pe=r("9MFgk"),Re=(ie=r("7Lj33"),j=r("cFuyE"),ye=r("lzptm"),ge=r("fMhDQ"),function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))});const Ie=e=>{var t;const n=ye.useFetchTokenMetas().data,o=new Map(null==n?void 0:n.map((e=>[e.address,e]))),a=null===(t=ge.useFetchConnection())||void 0===t?void 0:t.data,r=null==a?void 0:a.connection;return Me.useAsync((()=>Re(void 0,void 0,void 0,(function*(){var t,n,a;if(!e.length||!r)return{};const i={},c=[];for(const t of e){const e=o.get(t);e?i[t]=e:c.push(t)}if(c.length){const e=yield ie.fetchMintInfos(c,r),o=(yield Pe.fetchCollectibleMetadata(c,r)).reduce(((e,t)=>(e[t.mint.toString()]=t,e)),{});for(const r of c){const c=e[r],l=o[r];if(c){let e;l&&(e=yield Pe.fetchUriData(l.data.uri,r)),i[r]={decimals:c.decimals,address:r,symbol:null!==(t=null==l?void 0:l.data.symbol)&&void 0!==t?t:j.formatAddressShort(r),name:null!==(a=null!==(n=null==e?void 0:e.name)&&void 0!==n?n:null==l?void 0:l.data.name)&&void 0!==a?a:"Unknown",isCollectible:!!l&&!!l.data.uri}}}}return i}))),[e.length])};K=r("bJYWD"),W=r("9AO5f"),U=r("aADTv"),$=r("lSpdH");var Be=r("eopQk");D=r("hHMPk"),Z=r("g7X40");const Fe=D.default.section`
  background: #2a2a2a;
  border-radius: 6px;
  margin-bottom: 10px;
`,Oe=D.default.div`
  padding-top: 0px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  border-top: 1px solid #222222;
  > * {
    margin-top: 12px;
  }
`,He=(D.default.div`
  padding: 12px 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,D.default(Z.Text).attrs({textAlign:"left",size:14,weight:500,lineHeight:17})``,D.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    display: flex;
    align-items: center;
  }
`);Z=r("g7X40");var qe={};t(qe,"TransactionInstructionRows",(function(){return Ke}),(function(e){return Ke=e})),t(qe,"SignMessageInstructionRow",(function(){return We}),(function(e){return We=e})),t(qe,"RowCard",(function(){return Ye}),(function(e){return Ye=e}));D=r("hHMPk"),i=r("aZikt"),u=r("8C6BZ"),j=r("cFuyE"),C=r("82Ilk"),i=r("aZikt");Be=r("eopQk"),Z=r("g7X40");var De=r("k7WoY"),Le=r("k8hDx"),Ne=(ie=r("7Lj33"),ge=r("fMhDQ"),r("dkOkP").Buffer),je=function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))};const ze=[],Ke=({messages:t})=>{const{accountClient:n}=C.useSelectedAccount(),o=i.useCallback((()=>je(void 0,void 0,void 0,(function*(){const e=(yield Promise.all(t.map((e=>n.decodeMessageAsync(e))))).filter((e=>void 0!==e));return e.flat().forEach((e=>{e&&u.analytics.capture("transactionInstructionApproval",{data:{origin:origin,type:e.type}})})),e}))),[t]),[a,r,c]=function(t,n){const[o,a]=e(i).useState({value:n,error:null,isPending:!0});e(i).useEffect((()=>{t().then((e=>a({value:e,error:null,isPending:!1}))).catch((e=>a({value:n,error:e.toString(),isPending:!1})))}),[t,n]);const{value:r,error:c,isPending:l}=o;return[r,c,l]}(o,ze),l=a.flat();return e(i).createElement(Be.LoadingContent,{isLoading:c},l.map(((t,n)=>e(i).createElement(Ve,{key:n,decodedMessage:t}))))},We=({message:t,display:n="utf8"})=>{let o;if("hex"===n)o=`0x${Ne.from(t).toString("hex")}`;else o=(new TextDecoder).decode(t);return e(i).createElement(Ue,null,e(i).createElement($e,null,e(i).createElement(Z.Text,{textAlign:"left",size:14,weight:600,lineHeight:17},"Sign message"),e(i).createElement(De.Info,{tooltipAlignment:"bottomRight",info:e(i).createElement(Le.TooltipContent,{paddingLeft:10,paddingRight:10},e(i).createElement(Le.TooltipText,{size:14,color:"#FFF",weight:500,lineHeight:20},"Make sure you understand what you are signing and trust the application that is requesting this."))})),e(i).createElement(Ze,null,e(i).createElement(_e,null,e(i).createElement(Z.Text,{size:14,weight:500,lineHeight:17,whiteSpace:"pre-line",wordBreak:"break-all",textAlign:"left",color:"#777"},o))))},Ue=D.default.section`
  background: #2a2a2a;
  border-radius: 6px;
  margin-bottom: 10px;
`,$e=D.default.div`
  padding: 12px 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Ze=D.default.div`
  padding-top: 0px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  border-top: 1px solid #222222;
  > * {
    margin-top: 12px;
  }
`,_e=D.default.div`
  display: flex;
  justify-content: space-between;
`,Je=D.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  cursor: pointer;
`,Qe=({condition:e,wrapper:t,children:n})=>e?t(n):n,Ve=({decodedMessage:t})=>{var n;const o=null===(n=ge.useFetchConnection())||void 0===n?void 0:n.data,a=null==o?void 0:o.cluster,r=i.useMemo((()=>Xe(t)),[t]),c=i.useMemo((()=>at(t,a)),[t,a]);return e(i).createElement(Ye,{title:r,rowItems:c})},Ye=({title:t,rowItems:n,emptyDescription:o,info:a})=>e(i).createElement(Ue,null,e(i).createElement($e,null,e(i).createElement(Z.Text,{textAlign:"left",size:14,weight:500,lineHeight:17},t),a&&e(i).createElement(De.Info,{info:a})),e(i).createElement(Ze,null,n.map((({keyText:t,valueText:n,valueColor:o,link:a})=>e(i).createElement(_e,{key:t||n},t&&e(i).createElement(Z.Text,{size:14,lineHeight:17,color:"#777777"},t),e(i).createElement(Qe,{condition:a,wrapper:t=>e(i).createElement(Je,{href:a},t)},e(i).createElement(Z.Text,{size:14,weight:500,lineHeight:17,color:o,whiteSpace:t?"normal":"pre-line",wordBreak:"break-word"},n))))),0===n.length&&e(i).createElement(_e,null,e(i).createElement(Z.Text,{size:14,weight:400,lineHeight:17,whiteSpace:"normal"},o)))),Ge={cancelOrder:"Cancel order",cancelOrderV2:"Cancel order",newOrder:"Place order",newOrderV3:"Place order",settleFunds:"Settle funds",matchOrders:"Match orders",initializeMint:"Initialize mint",initializeAccount:"Initialize account",transfer:"Transfer",approve:"Approve",mintTo:"Mint to",closeAccount:"Close account",systemCreate:"Create account",systemTransfer:"Transfer SOL",createAssociatedTokenAccount:"Create token account",signMessage:"Sign Message",unknown:"Unknown"},Xe=e=>{var t;const{type:n}=e;return null!==(t=Ge[n])&&void 0!==t?t:n},et={side:{label:"Side",isAddress:!1},orderId:{label:"Order Id",isAddress:!1},limit:{label:"Limit",isAddress:!1},basePubkey:{label:"Base wallet",isAddress:!0},quotePubkey:{label:"Quote wallet",isAddress:!0}},tt={amount:{label:"Amount",isAddress:!1},accountPubkey:{label:"Account",isAddress:!0},mintPubkey:{label:"Mint",isAddress:!0},sourcePubkey:{label:"Source",isAddress:!0},destinationPubkey:{label:"Destination",isAddress:!0},ownerPubkey:{label:"Owner",isAddress:!0}},nt={toPubkey:{label:"To",isAddress:!0},accountPubkey:{label:"Account",isAddress:!0},basePubkey:{label:"Base",isAddress:!0},seed:{label:"Seed",isAddress:!1},noncePubkey:{label:"Nonce",isAddress:!0},authorizedPubkey:{label:"Authorized",isAddress:!0},newAuthorizedPubkey:{label:"New authorized",isAddress:!0},newAccountPubkey:{label:"New account",isAddress:!0},amount:{label:"Amount",isAddress:!1},lamports:{label:"Amount",isAddress:!1}},ot=(e,t)=>{const{market:n,marketInfo:o,data:a}=e,r=[];o&&r.push({keyText:"Market",valueText:o.name});const{side:i,limitPrice:c,maxQuantity:l,maxBaseQuantity:s,orderType:u,ownerPubkey:d}=a;r.push({keyText:"Side",valueText:i.charAt(0).toUpperCase()+i.slice(1)}),r.push({keyText:"Price",valueText:(null==n?void 0:n.priceLotsToNumber(c))||""+c});const p=t?s:l;return r.push({keyText:"Quantity",valueText:(null==n?void 0:n.baseSizeLotsToNumber(p))||""+p}),r.push({keyText:"Type",valueText:u.charAt(0).toUpperCase()+u.slice(1)}),r.push({keyText:"Owner",valueText:it(d)}),r},at=(e,t)=>{switch(e.type){case"cancelOrder":case"cancelOrderV2":case"matchOrders":case"settleFunds":return(e=>{const t=[];return e.marketInfo&&t.push({keyText:"Market",valueText:e.marketInfo.name}),rt(t,e.data,et),t})(e);case"closeAccount":case"initializeAccount":case"transfer":case"approve":case"mintTo":return(e=>{const t=[];return rt(t,e.data,tt),t})(e);case"systemCreate":case"systemTransfer":return(e=>{const t=[];return rt(t,e.data,nt),t})(e);case"newOrder":return ot(e,!1);case"newOrderV3":return ot(e,!0);case"unknown":case"createAssociatedTokenAccount":return((e,t)=>{const n=e.rawData,o=n.length>20?j.formatHashMedium(n,10):n,a=e.data.programId,r=t?ie.generateAddressSolscanUrl(a.toString(),t):void 0;return o?[{keyText:"Program Id",valueText:it(a),valueColor:"#8A81F8",link:r},{keyText:"Data",valueText:o}]:[{keyText:"Program Id",valueText:it(a),valueColor:"#8A81F8",link:r}]})(e,t);default:return[]}},rt=(e,t,n)=>{Object.entries(t).forEach((([t,o])=>{const a=n[t];if(a){const{label:n,isAddress:r}=a,i=n;let c="";r?c=it(o):"lamports"===t?c=`${j.formatTokenAmount(j.lamportsToSolana(o))} SOL`:"function"==typeof o.toString()?c=o.toString():"string"==typeof o&&(c=o),e.push({keyText:i,valueText:c})}}))},it=e=>{const t=e.toString();return j.formatHashMedium(t)};Le=r("k8hDx"),De=r("k7WoY");var ct=r("2MtnF");const lt=D.default(Be.LoadingContent)`
  height: 150px;
`,st=D.default(Z.Text)`
  color: ${e=>e.isKnownMalicious?pt:dt};
`,ut=D.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  height: 48px;
  border-width: 1px;
  border-style: solid;
  border-color: ${e=>e.isKnownMalicious?pt:dt};
  border-radius: 6px;
  margin-bottom: 10px;
`,dt="#FFDC62",pt="#EB3742",mt=({tabId:t,origin:n,messages:o,confirmApproval:a,denyApproval:r,transactionName:c,isTxnKnownMalicious:l,isTxnSuspectedMalicious:s})=>{var d;const{t:p}=N.useTranslation(),m=(()=>{const{feeCalculator:e}=Se.useBlockchainState();return j.lamportsToSolana(e.lamportsPerSignature)})()*re.getRequiredSignatures(o),[g,f]=i.useState(!1),y=ye.useFetchSolanaBalance(),h=y.data,E=ye.useFetchAssetsWithAccount(),T=E.data,A=he.useFetchCollectibles(),b=A.data,x=i.useMemo((()=>{if(!T||!b)return ve.objectArrayToMap([],"account");const e=[...T,...b];return ve.objectArrayToMap(e,"account")}),[T,b]),k=!y.isFetched||!E.isFetched||!A.isFetched,w=((e,t=!1)=>{const n=be.useFetchSimulatedTransaction(e,t),o=n.error,{accountClient:a}=C.useSelectedAccount(),r=n.data,c=i.useMemo((()=>{const e=new Map;if(r){for(const[t,n]of r)if(n&&n.data&&n.owner.toString()===Ee.TOKEN_PROGRAM_ID.toString()){const[o]=n.data;try{const n=Te.deserializeTokenAccount(we.from(o,"base64"));n.owner===a.publicKey.toString()&&e.set(t,n)}catch(e){}}return e}}),[r]);return{balances:i.useMemo((()=>{const e={};if(!r||!c)return;const t=a.publicKey.toString(),n=null==r?void 0:r.get(t);n&&(e[t]={amount:new Ae.BigNumber(n.lamports)});for(const[n,o]of c)o.owner===t&&(e[n]={mint:o.mint,amount:o.amount,delegate:o.delegate});return e}),[r,c]),error:o}})(o,5e3),S=Object.values(null!==(d=w.balances)&&void 0!==d?d:{}).map((e=>e.mint)).filter((e=>!!e)),M=Ce.useTokenMetasForMints(S),P=i.useMemo((()=>{var e;const{balances:t}=w;if(!t||k)return;const n=[];for(const[o,a]of Object.entries(t)){if(void 0===a.mint&&h){const e=a.amount.minus(h),t=j.lamportsToSolana(e.toNumber())+m;if(0!==t){const o=j.formatTokenAmount(Math.abs(t));n.push({keyText:v.SOLANA.symbol,valueText:e.isNegative()?`-${o} ${v.SOLANA.symbol}`:`+${o} ${v.SOLANA.symbol}`,valueColor:e.isNegative()?"#EB3742":"#21E56F"})}continue}const t=x[o],r=a.mint;if(t){const o=a.amount.minus(t.baseBalance),i=j.amountToUiAmount(o.abs(),t.decimals),c=j.formatTokenAmount(Math.abs(i));if("fungible"===t.type){const a=null!==(e=null==t?void 0:t.symbol)&&void 0!==e?e:j.formatAddressShort(null!=r?r:t.address);0!==i&&n.push({keyText:a,valueText:o.isNegative()?`-${c} ${a}`:`+${c} ${a}`,valueColor:o.isNegative()?"#EB3742":"#21E56F"})}else if("collectible"===t.type){const e="NFT";if(0!==i){const a="1"===c?"":`(${c})`;n.push({keyText:e,valueText:o.isNegative()?`-${t.name} ${a}`:`+${t.name} ${a}`})}}}else if(M.value&&r){const e=M.value[r];if(e){const t=j.amountToUiAmount(a.amount.toNumber(),e.decimals);if(0!==t){const o=j.formatTokenAmount(t),a="1"===o?"":`(${o})`;n.push({keyText:e.isCollectible?"NFT":e.symbol,valueText:e.isCollectible?`+${e.name} ${a}`:`+${o} ${e.symbol}`,valueColor:e.isCollectible?void 0:"#21E56F"})}}}}return n}),[w,x,h,m,M,k]),R=e(i).createElement(Le.TooltipContent,{paddingLeft:10,paddingRight:10},e(i).createElement(Le.TooltipText,{size:14,color:"#FFF",lineHeight:18},p("notificationTransactionApprovalEstimatesBasedOnSimulations")));let I=p("notificationTransactionApprovalUnableToFetchBalanceChanges");w.error instanceof fe.TransactionSimulationError&&(I=p("notificationTransactionApprovalTransactionMayFailToConfirm"));const B=i.useMemo((()=>{const e=re.canEvadeTransactionSimulation(o);return e&&u.analytics.capture("transactionCanEvadeSimulation",{data:{messages:o.join("|")}}),e}),[o]);return B&&(I=p("notificationTransactionApprovalSignUnableToSimulate")),e(i).createElement(K.Container,null,e(i).createElement(W.AccountHeader,{firstChild:e(i).createElement("div",null),lastChild:e(i).createElement("div",null)}),e(i).createElement(K.Body,null,e(i).createElement(K.Icon,null,e(i).createElement($.TabIconHeader,{tabId:t,primaryText:c,secondaryText:j.removeWebPrefixes(n)})),e(i).createElement(lt,{isLoading:void 0===P&&!w.error,showingDelayMs:0},(l||s)&&e(i).createElement(ut,{isKnownMalicious:l},e(i).createElement(st,{size:14,weight:500,lineHeight:19.6,isKnownMalicious:l},p(l?"notificationTransactionApprovalKnownMalicious":"notificationTransactionApprovalSuspectedMalicious"))),w.error||B?e(i).createElement(qe.RowCard,{title:p("notificationTransactionApprovalEstimatedBalanceChanges"),rowItems:[{valueText:I,valueColor:pt}],info:R}):e(i).createElement(qe.RowCard,{title:p("notificationTransactionApprovalEstimatedBalanceChanges"),rowItems:P,emptyDescription:p("notificationTransactionApprovalNoBalanceChanges"),info:R}),e(i).createElement(Fe,null,e(i).createElement(Oe,null,e(i).createElement(He,null,e(i).createElement(Z.Text,{size:14,lineHeight:17,textAlign:"left",color:"#777",style:{gap:10,marginLeft:"-8px"}},e(i).createElement(De.Info,{info:e(i).createElement(Le.TooltipContent,{paddingLeft:10,paddingRight:10},e(i).createElement(Le.TooltipText,{size:14,color:"#FFF",lineHeight:18},p("notificationTransactionApprovalSolanaAmountRequired")))}),p("notificationTransactionApprovalNetworkFee")),e(i).createElement(Z.Text,{size:14,weight:500,lineHeight:17,whiteSpace:"normal",wordBreak:"break-word"},e(i).createElement(ct.SolBalance,null,m))))),e(i).createElement(Z.Text,{size:14,lineHeight:19,color:"#777777",margin:"17px 0",onClick:()=>f(!g)},p(g?"notificationTransactionApprovalHideAdvancedDetails":"notificationTransactionApprovalViewAdvancedDetails")),g&&e(i).createElement(qe.TransactionInstructionRows,{messages:o}))),e(i).createElement(K.Footer,null,e(i).createElement(U.ButtonPair,{primaryText:p("notificationTransactionApprovalActionButtonApprove"),secondaryText:p("notificationTransactionApprovalActionButtonCancel"),onPrimaryClicked:a,onSecondaryClicked:r})))};var gt=r("djb9u");K=r("bJYWD"),i=r("aZikt"),D=r("hHMPk"),N=r("7Qmuu"),j=r("cFuyE"),W=r("9AO5f"),$=r("lSpdH"),U=r("aADTv"),Z=r("g7X40"),K=r("bJYWD");const ft=D.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,vt=D.default.div`
  border: 1px solid ${"#eb3742"};
  border-radius: 8px;
  padding: 10px 10px;
  margin-bottom: 10px;
`,yt=({tabId:t,origin:n,proceedToApproval:o,denyApproval:a})=>{const{t:r}=N.useTranslation();return e(i).createElement(K.Container,null,e(i).createElement(W.AccountHeader,{lastChild:e(i).createElement("div",null),walletMenuShowOnlyAccounts:!0}),e(i).createElement(K.Body,null,e(i).createElement(K.TopGroup,null,e(i).createElement($.TabIconHeader,{tabId:t,secondaryText:j.removeWebPrefixes(n),showWarning:!0})),e(i).createElement(ft,null,e(i).createElement(vt,null,e(i).createElement(Z.Text,{size:14,color:"#eb3742"},r("maliciousTransactionWarning"))),e(i).createElement(Z.Text,{size:14,color:"#777777",hoverColor:"#eb3742",onClick:()=>o(n)},r("maliciousTransactionWarningIgnoreWarning")))),e(i).createElement(K.Footer,{plain:!0},e(i).createElement(U.Button,{onClick:()=>a(n)},r("maliciousTransactionWarningButtonClose"))))};ee=r("lPkGw");var ht=function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))};const Et=D.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`,Tt=({origin:t,requestId:n,requestMethod:o,tabId:a,unsignedTransactionMessages:r=[],options:c={}})=>{var s;const{t:d}=N.useTranslation(),[p,m]=i.useState(!1),f=M.useTransactionsManager(),v=g.usePostOutgoingBackgroundResponse(),{accountClient:y,accountMeta:h}=C.useSelectedAccount(),E=h.type===L.AccountType.Ledger,T=o===l.ProviderToWalletRequestMethods.SignTransaction,A=o===l.ProviderToWalletRequestMethods.SignAllTransactions,b=o===l.ProviderToWalletRequestMethods.SignAndSendTransaction,x=null===(s=ge.useFetchConnection())||void 0===s?void 0:s.data,w=null==x?void 0:x.connection,{pushDetailView:S,popDetailView:P}=k.useDetailViews(),R=re.canEvadeTransactionSimulation(r),{isTxnKnownMalicious:I,isTxnSuspectedMalicious:B,isLoading:F}=((e,t)=>{const{accountClient:n}=C.useSelectedAccount(),o=n.publicKey,a=ce.useFetchScannedTransaction(e,o,t);return i.useEffect((()=>{null!==a.error&&a.error===se.ERR_REQUEST_TIMEOUT_REACHED&&u.analytics.capture("scanTransactionRequestTimeoutReached")}),[a]),a})(r,t),O=i.useCallback((o=>ht(void 0,void 0,void 0,(function*(){let a=y;const s=a.publicKey.toString(),d=[];let p;if(E){if(!w)return;const e=ie.createSignerFromLedgerAccountMeta(h,o);a=new ae.AccountClient(w,e,f)}try{if(b){const e=re.messageToTransaction(r[0]),o=yield a.signAndSendTransactionAsync(e,c);u.analytics.capture("signAndSendTransaction",{data:{origin:t}}),p=l.createSignSuccessResponse(n,o,s)}else{for(const e of r)d.push(yield a.signMessageAsync(e));T?(u.analytics.capture("signTransaction",{data:{origin:t}}),p=l.createSignSuccessResponse(n,d[0],s)):A&&(u.analytics.capture("signAllTransactions",{data:{origin:t}}),p=l.createSignAllTransactionsSuccessResponse(n,d,s))}u.analytics.capture("transactionConfirm",{data:{origin:t,messages:r.join("|"),canEvadeSimulation:R}}),v(p)}catch(t){console.error(t),gt.isKnownLedgerActionError(t)?S(e(i).createElement(K.LedgerWrapper,null,e(i).createElement(gt.LedgerActionError,{ledgerActionError:t,onRetryClick:()=>{P()},onCancelClick:()=>{p=l.createJsonRpcErrorResponse(n,l.RpcErrorCode.UserRejectedRequest),v(p)}}))):E?(p=l.createJsonRpcErrorResponse(n,l.RpcErrorCode.UserRejectedRequest),v(p)):(p=l.createJsonRpcErrorResponse(n,l.RpcErrorCode.TransactionRejected,null==t?void 0:t.message),v(p))}}))),[n,r,y,w,v]),H=i.useCallback((()=>{E?S(e(i).createElement(K.LedgerWrapper,null,e(i).createElement(gt.LedgerAction,{ledgerAction:O,cancel:D})),{shouldShowBackButton:!1}):O()}),[O]),q=i.useCallback((()=>{m(!0)}),[]),D=i.useCallback((()=>{const e=l.createJsonRpcErrorResponse(n,l.RpcErrorCode.UserRejectedRequest);u.analytics.capture("transactionDeny",{data:{origin:t,messages:r.join("|"),canEvadeSimulation:R}}),v(e)}),[n,v]);return F?e(i).createElement(Et,null,e(i).createElement(ee.Spinner,null)):I&&!p?e(i).createElement(yt,{tabId:a,origin:t,proceedToApproval:q,denyApproval:D}):e(i).createElement(mt,{tabId:a,origin:t,messages:r,confirmApproval:H,denyApproval:D,transactionName:d("notificationSignatureRequestApproveTransactionCapitalized"),isTxnKnownMalicious:I,isTxnSuspectedMalicious:B})};var At={};t(At,"SignMessageRequest",(function(){return kt}),(function(e){return kt=e}));i=r("aZikt"),u=r("8C6BZ"),l=r("eLyRJ"),L=r("lwple"),j=r("cFuyE"),C=r("82Ilk"),k=r("6rMcH"),ge=r("fMhDQ"),gt=r("djb9u"),U=r("aADTv"),W=r("9AO5f"),K=r("bJYWD"),$=r("lSpdH");var bt=r("dkOkP").Buffer,xt=function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))};const kt=t=>{var n;const{origin:o,requestId:a,message:r,display:c,tabId:s}=t,d=g.usePostOutgoingBackgroundResponse(),{accountClient:p,accountMeta:m}=C.useSelectedAccount(),f=null===(n=ge.useFetchConnection())||void 0===n?void 0:n.data,v=null==f?void 0:f.connection,{pushDetailView:y}=k.useDetailViews(),h=i.useCallback((()=>xt(void 0,void 0,void 0,(function*(){const e=p;try{const t=yield e.signUTF8(bt.from(r).toString()),n=e.publicKey.toString(),i=l.createSignSuccessResponse(a,t,n);u.analytics.capture("signMessageConfirm",{data:{origin:o}}),d(i)}catch(e){T()}}))),[a,r,p,v,d]),E=i.useCallback((()=>{m.type===L.AccountType.Ledger?y(e(i).createElement(K.LedgerWrapper,null,e(i).createElement(gt.LedgerAction,{ledgerAction:h,cancel:T})),{shouldShowBackButton:!1}):h()}),[h]),T=i.useCallback((()=>{const e=l.createJsonRpcErrorResponse(a,l.RpcErrorCode.UserRejectedRequest);u.analytics.capture("transactionDeny",{data:{origin:o}}),d(e)}),[a,d]);return e(i).createElement(K.Container,null,e(i).createElement(W.AccountHeader,{firstChild:e(i).createElement("div",null),lastChild:e(i).createElement("div",null)}),e(i).createElement(K.Body,null,e(i).createElement(K.Icon,null,e(i).createElement($.TabIconHeader,{tabId:s,primaryText:"Signature Request",secondaryText:j.removeWebPrefixes(o)})),e(i).createElement(qe.SignMessageInstructionRow,{message:r,display:c})),e(i).createElement(K.Footer,null,e(i).createElement(U.ButtonPair,{primaryText:"Approve",secondaryText:"Cancel",onPrimaryClicked:E,onSecondaryClicked:T})))};var wt=r("i2Zy4");s.initSentry();const St=()=>{const t=g.useIncomingBackgroundRequest();if(!t)return null;const{origin:n,req:o,tabId:a}=t,{id:r,method:c}=o,{message:s,messages:d,display:p,options:m}=o.params,f=c===l.ProviderToWalletRequestMethods.Connect,v=c===l.ProviderToWalletRequestMethods.SignMessage,y=c===l.ProviderToWalletRequestMethods.SignTransaction,h=c===l.ProviderToWalletRequestMethods.SignAllTransactions,E=c===l.ProviderToWalletRequestMethods.SignAndSendTransaction,T=y||h,A=s instanceof Uint8Array?s:l.objectToUint8Array(null!=s?s:{}),b=y||E?[s]:h?d:void 0,x=f?"Connection Error":"Transaction Error",w=`There was an error attempting to ${f?"connect to the application":"sign the transaction"}. Please try again.`;return i.useEffect((()=>{u.analytics.capture("notificationOpen",{data:{method:c}})}),[c]),e(i).createElement(wt.PopupAndNotificationErrorBoundary,{title:x,message:w},f?e(i).createElement(ne,{tabId:a,origin:n,requestId:r}):v?e(i).createElement(k.DetailViewsProvider,null,e(i).createElement(At.SignMessageRequest,{tabId:a,origin:n,requestId:r,message:A,display:p})):T?e(i).createElement(k.DetailViewsProvider,null,e(i).createElement(oe.SignatureRequest,{tabId:a,origin:n,requestId:r,requestMethod:c,unsignedTransactionMessages:b})):E?e(i).createElement(k.DetailViewsProvider,null,e(i).createElement(oe.SignatureRequest,{tabId:a,origin:n,requestId:r,requestMethod:c,unsignedTransactionMessages:b,options:m})):null)},Ct=()=>{const t=i.useCallback((t=>e(i).createElement(I.ModalsProvider,null,e(i).createElement(R.WalletMenuProvider,null,e(i).createElement(H.Unlock,{unlockSeedAndMnemonic:t})))),[]),n=i.useCallback((()=>{p.openTabAsync({url:"onboarding.html"}),window.close()}),[]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(d.ThemedGlobalStyle,{backgroundColor:"#222222"}),e(i).createElement(wt.PopupAndNotificationErrorBoundary,null,e(i).createElement(O.Main,null,e(i).createElement(S.FeatureFlagsProvider,null,e(i).createElement(F.BannerProvider,null,e(i).createElement(B.QueryProvider,null,e(i).createElement(g.BackgroundConnectionProvider,null,e(i).createElement(w.SeedProvider,{renderLocked:t,openOnboarding:n},e(i).createElement(M.TransactionsProvider,null,e(i).createElement(P.HardwareWalletProvider,null,e(i).createElement(C.AccountsProvider,null,e(i).createElement(R.WalletMenuProvider,null,e(i).createElement(St,null)))))))))),e(i).createElement("div",{id:m.MODAL_ID}))))};c.render(e(i).createElement(Ct,null),document.getElementById("root"));define=__define;})(window.define);