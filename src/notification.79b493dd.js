!function(){function e(e){return e&&e.__esModule?e.default:e}function n(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequirea886;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){a[e]=n},t.parcelRequirea886=o);var i=o("yrqZm"),c=o("jLXMA"),l=o("a9js8"),u=o("edC09"),s=o("fVAzy"),d=o("15Pgw"),f=o("01f3h"),p=o("1Wa82");o("goCP2");var m={};n(m,"BackgroundConnectionProvider",(function(){return A}),(function(e){return A=e})),n(m,"useIncomingBackgroundRequest",(function(){return w}),(function(e){return w=e})),n(m,"usePostOutgoingBackgroundResponse",(function(){return k}),(function(e){return k=e}));var v=o("cuInp"),g=o("1vgyn"),y=(i=o("yrqZm"),o("4P3Ea")),h=o("hZbar"),T=(f=o("01f3h"),function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))}),b={isConnected:!1,lastMessage:null,postMessage:h.NOOP},x=e(i).createContext(b),A=function(n){var t=n.children,r=v.slicedToArray(function(){var n=this,t=v.slicedToArray(i.useState(null),2),r=t[0],a=t[1],o=v.slicedToArray(i.useState(null),2),c=o[0],l=o[1];i.useEffect((function(){var t,r=n;return function(){return T(r,void 0,void 0,e(g).mark((function n(){var r,o;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getCurrentWindowAsync();case 2:r=e.sent,o="notification/".concat(r.id),t=y.browser.runtime.connect({name:o}),a(t),t.onMessage.addListener((function(e){l(e)})),t.onDisconnect.addListener((function(){a(null)}));case 8:case"end":return e.stop()}}),n)})))}(),function(){null==t||t.disconnect()}}),[]);var u=i.useCallback((function(e){r&&r.postMessage(e)}),[r]);return[!!r,c,u]}(),3),a=r[0],o=r[1],c=r[2];return e(i).createElement(x.Provider,{value:{isConnected:a,lastMessage:o,postMessage:c}},t)};function E(){var e=i.useContext(x);if(!e)throw new Error("Missing background connection context");return e}function w(){var e=E().lastMessage;return e&&"string"==typeof e.origin&&e.origin&&e.req&&"string"==typeof e.req.method&&e.req.method?e:null}function k(){var e=w(),n=E().postMessage;return i.useCallback((function(t){if(!e)throw new Error("No request received from the background yet");if(e.req.id!==t.id)throw new Error("Request id: ".concat(e.req.id," does not match response id: ").concat(t.id));n(t)}),[e,n])}var S=o("1qebk"),C=o("1tMSC"),P=o("j040j"),M=o("1rSG6"),R=o("gpRlx"),I=o("9lBKv"),q=o("bDjhz"),B=o("1w3DR"),j=o("bWoQY"),L=o("bbVVl"),F=o("cFjyR"),N=o("580bB"),O=(v=o("cuInp"),o("5GStK")),z=(i=o("yrqZm"),o("5BN27")),D=(s=o("fVAzy"),o("226dB")),H=(l=o("a9js8"),M=o("1rSG6"),v=o("cuInp"),i=o("yrqZm"),z=o("5BN27"),o("eNGT7")),W=o("jcs3P"),U=o("3u496"),V=o("jJ2Ea"),G=o("jj9QT"),Z=o("6AaHU"),J=o("5oDS0"),K=o("7Z3sw");function Q(){var e=v.taggedTemplateLiteral(["\n  border-top: 1px solid #333333;\n  border-bottom: 1px solid #333333;\n  width: 100%;\n  display: flex;\n  padding: 10px 5px;\n"]);return Q=function(){return e},e}function _(){var e=v.taggedTemplateLiteral(["\n  > * {\n    margin: 18px 0px;\n  }\n"]);return _=function(){return e},e}function X(){var e=v.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  > * {\n    margin: 0px ","px;\n    text-align: left;\n  }\n"]);return X=function(){return e},e}var Y=function(e){return e},$=z.default.div(fn||(fn=Y(Q()))),ee=z.default.div(He||(He=Y(_()))),ne=z.default.div(We||(We=Y(X(),0)),(function(e){return e.spacing})),te=function(n){var t=n.tabId,r=n.origin,a=n.confirmApproval,o=n.denyApproval,c=H.useTranslation().t;return e(i).createElement(V.Container,null,e(i).createElement(G.AccountHeader,{lastChild:e(i).createElement("div",null),walletMenuShowOnlyAccounts:!0}),e(i).createElement(V.Body,null,e(i).createElement(V.TopGroup,null,e(i).createElement(J.TabIconHeader,{tabId:t,secondaryText:W.removeWebPrefixes(r)})),e(i).createElement($,null,e(i).createElement(ee,null,e(i).createElement(ne,{spacing:8},e(i).createElement(K.Text,{size:14,color:"#777777",lineHeight:16.94,weight:500},c("notificationApplicationApprovalPermissionsPrimary"))),e(i).createElement(ne,{spacing:8},e(i).createElement(U.CheckmarkIcon,{fill:"#21E56F"}),e(i).createElement(K.Text,{size:14,lineHeight:17},c("notificationApplicationApprovalPermissionsViewWalletActivity"))),e(i).createElement(ne,{spacing:8},e(i).createElement(U.CheckmarkIcon,{fill:"#21E56F"}),e(i).createElement(K.Text,{size:14,lineHeight:17},c("notificationApplicationApprovalPermissionsTransactionApproval"))))),e(i).createElement(V.BottomGroup,null,e(i).createElement(ne,{spacing:4},e(i).createElement(K.Text,{size:14,lineHeight:17,color:"#777"},c("notificationApplicationApprovalConnectDisclaimer"))))),e(i).createElement(V.Footer,{plain:!0},e(i).createElement(Z.ButtonPair,{primaryText:c("notificationApplicationApprovalActionButtonConnect"),secondaryText:c("notificationApplicationApprovalActionButtonCancel"),onPrimaryClicked:function(){return a(r)},onSecondaryClicked:function(){return o(r)}})))},re=o("5vcFJ"),ae=o("1eJXt"),oe=o("kJkjp"),ie=o("glMqZ");function Q(){var e=v.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]);return Q=function(){return e},e}Y=function(e){return e};var ce=z.default.div(fn||(fn=Y(Q()))),le=function(n){var t,r=n.tabId,a=n.origin,o=n.requestId,c=M.useSelectedAccount().accountClient.publicKey.toString(),u=m.usePostOutgoingBackgroundResponse(),d=v.slicedToArray(re.useStorage(D.StorageKeys.TrustedApplicationsByOwnerBrowser,{}),3),f=d[0],p=d[1],g=d[2],y=null!==(t=f[c])&&void 0!==t?t:{},h=void 0!==y[a],T=v.slicedToArray(e(i).useState(!1),2),b=T[0],x=T[1],A=v.slicedToArray(e(i).useState(!1),2),E=A[0],w=A[1],k=function(n){var t=e(O)(y);t[n]=!0,s.analytics.capture("connectionConfirm",{data:{origin:n}}),g(Object.assign(Object.assign({},f),v.defineProperty({},c,t)))},S=function(){s.analytics.capture("connectionDeny",{data:{origin:a}});var e=l.createJsonRpcErrorResponse(o,l.RpcErrorCode.UserRejectedRequest);u(e)};return i.useEffect((function(){var e,n;h?(e={publicKey:c},n=l.createJsonRpcResponse(o,e),u(n)):oe.detectPhishing(a).then((function(e){w(e.result),x(!0)})).catch((function(){x(!0)}))}),[h]),h?null:p||!b?e(i).createElement(ce,null,e(i).createElement(ie.Spinner,null)):E?e(i).createElement(ae.BlocklistConnectRequest,{tabId:r,origin:a,confirmApproval:k,denyApproval:S}):e(i).createElement(te,{tabId:r,origin:a,confirmApproval:k,denyApproval:S})},ue={};n(ue,"SignatureRequest",(function(){return yn}),(function(e){return yn=e}));g=o("1vgyn"),i=o("yrqZm"),H=o("eNGT7");var se=o("kAN3y"),de=(s=o("fVAzy"),l=o("a9js8"),o("7gyel")),fe=(D=o("226dB"),o("67fgn")),pe=(M=o("1rSG6"),R=o("gpRlx"),S=o("1qebk"),o("cneLj")),me=(v=o("cuInp"),z=o("5BN27"),i=o("yrqZm"),H=o("eNGT7"),h=o("hZbar"),o("boeq2")),ve=(W=o("jcs3P"),de=o("7gyel"),o("jIDTl")),ge=o("bGaWd"),ye=o("9l6gG"),he=(v=o("cuInp"),i=o("yrqZm"),o("3xIqg")),Te=o("aCPnG"),be=(M=o("1rSG6"),o("eENAE")),xe={};n(xe,"useFetchSimulatedTransaction",(function(){return Ee}),(function(e){return Ee=e}));g=o("1vgyn"),ve=o("jIDTl"),de=o("7gyel"),M=o("1rSG6"),j=o("bWoQY");var Ae=function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))};function Ee(n,t){var r=this,a=M.useSelectedAccount().accountClient,o=["simulated-tx",{messages:n}],i=!!n;return j.useQuery({queryKey:o,queryFn:function(){return Ae(r,void 0,void 0,e(g).mark((function t(){var r,o,i,c,l;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=de.messagesToTransaction(n)).recentBlockhash){e.next=5;break}return e.next=4,a.getRecentBlockHash();case 4:r.recentBlockhash=e.sent;case 5:return r.feePayer||(r.feePayer=a.publicKey),o=de.getAccountsFromTransaction(r),i=o.filter((function(e){return!/1111111111111111/.test(e.toString())})),e.next=10,a.simulateTransaction(r,i);case 10:return c=e.sent,l=c.value.accounts,e.abrupt("return",new Map(ve.zip(i.map((function(e){return e.toString()})),l)));case 13:case"end":return e.stop()}}),t)})))},enabled:i,refetchInterval:t})}var we=o("ehiNV").Buffer;v=o("cuInp"),i=o("yrqZm"),de=o("7gyel"),s=o("fVAzy");W=o("jcs3P");var ke=o("7ZQfp"),Se={};n(Se,"useTokenMetasForMints",(function(){return Re}),(function(e){return Re=e}));g=o("1vgyn");var Ce=o("foMWJ"),Pe=o("54rXI"),Me=(fe=o("67fgn"),W=o("jcs3P"),ge=o("bGaWd"),pe=o("cneLj"),function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))}),Re=function(n){var t,r=ge.useFetchTokenMetas().data,a=new Map(null==r?void 0:r.map((function(e){return[e.address,e]}))),o=null===(t=pe.useFetchConnection())||void 0===t?void 0:t.data,i=null==o?void 0:o.connection;return Ce.useAsync((function(){return Me(void 0,void 0,void 0,e(g).mark((function t(){var r,o,c,l,u,s,d,f,p,m,v,y,h,T,b,x,A,E,w,k,S,C,P;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.length&&i){e.next=3;break}return e.abrupt("return",{});case 3:for(l={},u=[],s=!0,d=!1,f=void 0,e.prev=6,p=n[Symbol.iterator]();!(s=(m=p.next()).done);s=!0)v=m.value,(y=a.get(v))?l[v]=y:u.push(v);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),d=!0,f=e.t0;case 14:e.prev=14,e.prev=15,s||null==p.return||p.return();case 17:if(e.prev=17,!d){e.next=20;break}throw f;case 20:return e.finish(17);case 21:return e.finish(14);case 22:if(!u.length){e.next=60;break}return e.next=25,fe.fetchMintInfos(u,i);case 25:return h=e.sent,e.next=28,Pe.fetchCollectibleMetadata(u,i);case 28:T=e.sent.reduce((function(e,n){return e[n.mint.toString()]=n,e}),{}),b=!0,x=!1,A=void 0,e.prev=30,E=u[Symbol.iterator]();case 32:if(b=(w=E.next()).done){e.next=46;break}if(k=w.value,S=h[k],C=T[k],!S){e.next=43;break}if(!C){e.next=42;break}return e.next=41,Pe.fetchUriData(C.data.uri,k);case 41:P=e.sent;case 42:l[k]={decimals:S.decimals,address:k,symbol:null!==(r=null==C?void 0:C.data.symbol)&&void 0!==r?r:W.formatAddressShort(k),name:null!==(c=null!==(o=null==P?void 0:P.name)&&void 0!==o?o:null==C?void 0:C.data.name)&&void 0!==c?c:"Unknown",isCollectible:!!C&&!!C.data.uri};case 43:b=!0,e.next=32;break;case 46:e.next=52;break;case 48:e.prev=48,e.t1=e.catch(30),x=!0,A=e.t1;case 52:e.prev=52,e.prev=53,b||null==E.return||E.return();case 55:if(e.prev=55,!x){e.next=58;break}throw A;case 58:return e.finish(55);case 59:return e.finish(52);case 60:return e.abrupt("return",l);case 61:case"end":return e.stop()}}),t,null,[[6,10,14,22],[15,,17,21],[30,48,52,60],[53,,55,59]])})))}),[n.length])},Ie=(V=o("jJ2Ea"),G=o("jj9QT"),Z=o("6AaHU"),J=o("5oDS0"),o("j7d8I"));v=o("cuInp"),z=o("5BN27"),K=o("7Z3sw");function Q(){var e=v.taggedTemplateLiteral(["\n  background: #2a2a2a;\n  border-radius: 6px;\n  margin-bottom: 10px;\n"]);return Q=function(){return e},e}function _(){var e=v.taggedTemplateLiteral(["\n  padding-top: 0px;\n  padding-bottom: 12px;\n  padding-left: 18px;\n  padding-right: 18px;\n  border-top: 1px solid #222222;\n  > * {\n    margin-top: 12px;\n  }\n"]);return _=function(){return e},e}function X(){var e=v.taggedTemplateLiteral(["\n  padding: 12px 18px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return X=function(){return e},e}function qe(){var e=v.taggedTemplateLiteral([""]);return qe=function(){return e},e}function Be(){var e=v.taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > * {\n    display: flex;\n    align-items: center;\n  }\n"]);return Be=function(){return e},e}Y=function(e){return e};var je,Le=z.default.section(fn||(fn=Y(Q()))),Fe=z.default.div(He||(He=Y(_()))),Ne=(z.default.div(We||(We=Y(X()))),z.default(K.Text).attrs({textAlign:"left",size:14,weight:500,lineHeight:17})(Ue||(Ue=Y(qe()))),z.default.div(je||(je=Y(Be())))),Oe=(K=o("7Z3sw"),{});n(Oe,"TransactionInstructionRows",(function(){return Je}),(function(e){return Je=e})),n(Oe,"SignMessageInstructionRow",(function(){return Ke}),(function(e){return Ke=e})),n(Oe,"RowCard",(function(){return en}),(function(e){return en=e}));v=o("cuInp"),g=o("1vgyn"),z=o("5BN27"),i=o("yrqZm"),s=o("fVAzy"),W=o("jcs3P"),M=o("1rSG6"),v=o("cuInp"),i=o("yrqZm");Ie=o("j7d8I"),K=o("7Z3sw");var ze=o("8ePxM"),De=o("8G5sy");function Q(){var e=v.taggedTemplateLiteral(["\n  background: #2a2a2a;\n  border-radius: 6px;\n  margin-bottom: 10px;\n"]);return Q=function(){return e},e}function _(){var e=v.taggedTemplateLiteral(["\n  padding: 12px 18px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return _=function(){return e},e}function X(){var e=v.taggedTemplateLiteral(["\n  padding-top: 0px;\n  padding-bottom: 12px;\n  padding-left: 18px;\n  padding-right: 18px;\n  border-top: 1px solid #222222;\n  > * {\n    margin-top: 12px;\n  }\n"]);return X=function(){return e},e}function qe(){var e=v.taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"]);return qe=function(){return e},e}Y=function(e){return e};var He,We,Ue,Ve=o("ehiNV").Buffer,Ge=function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))},Ze=[],Je=function(n){var t=n.messages,r=M.useSelectedAccount().accountClient,a=i.useCallback((function(){return Ge(void 0,void 0,void 0,e(g).mark((function n(){var a,o;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return r.decodeMessageAsync(e)})));case 2:return a=e.sent,(o=a.filter((function(e){return void 0!==e}))).flat().forEach((function(e){e&&s.analytics.capture("transactionInstructionApproval",{data:{origin:origin,type:e.type}})})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),n)})))}),[t]),o=v.slicedToArray(function(n,t){var r=v.slicedToArray(e(i).useState({value:t,error:null,isPending:!0}),2),a=r[0],o=r[1];return e(i).useEffect((function(){n().then((function(e){return o({value:e,error:null,isPending:!1})})).catch((function(e){return o({value:t,error:e.toString(),isPending:!1})}))}),[n,t]),[a.value,a.error,a.isPending]}(a,Ze),3),c=o[0],l=(o[1],o[2]),u=c.flat();return e(i).createElement(Ie.LoadingContent,{isLoading:l},u.map((function(n,t){return e(i).createElement($e,{key:t,decodedMessage:n})})))},Ke=function(n){var t,r=n.message,a=n.display;if("hex"===(void 0===a?"utf8":a))t="0x".concat(Ve.from(r).toString("hex"));else t=(new TextDecoder).decode(r);return e(i).createElement(Qe,null,e(i).createElement(_e,null,e(i).createElement(K.Text,{textAlign:"left",size:14,weight:600,lineHeight:17},"Sign message"),e(i).createElement(ze.Info,{tooltipAlignment:"bottomRight",info:e(i).createElement(De.TooltipContent,{paddingLeft:10,paddingRight:10},e(i).createElement(De.TooltipText,{size:14,color:"#FFF",weight:500,lineHeight:20},"Make sure you understand what you are signing and trust the application that is requesting this."))})),e(i).createElement(Xe,null,e(i).createElement(Ye,null,e(i).createElement(K.Text,{size:14,weight:500,lineHeight:17,whiteSpace:"pre-line",wordBreak:"break-all",textAlign:"left",color:"#777"},t))))},Qe=z.default.section(fn||(fn=Y(Q()))),_e=z.default.div(He||(He=Y(_()))),Xe=z.default.div(We||(We=Y(X()))),Ye=z.default.div(Ue||(Ue=Y(qe()))),$e=function(n){var t=n.decodedMessage,r=i.useMemo((function(){return tn(t)}),[t]),a=i.useMemo((function(){return ln(t)}),[t]);return e(i).createElement(en,{title:r,rowItems:a})},en=function(n){var t=n.title,r=n.rowItems,a=n.emptyDescription,o=n.info;return e(i).createElement(Qe,null,e(i).createElement(_e,null,e(i).createElement(K.Text,{textAlign:"left",size:14,weight:500,lineHeight:17},t),o&&e(i).createElement(ze.Info,{info:o})),e(i).createElement(Xe,null,r.map((function(n){var t=n.keyText,r=n.valueText,a=n.valueColor;return e(i).createElement(Ye,{key:t||r},t&&e(i).createElement(K.Text,{size:14,lineHeight:17,color:"#777777"},t),e(i).createElement(K.Text,{size:14,weight:500,lineHeight:17,color:a,whiteSpace:t?"normal":"pre-line",wordBreak:"break-word"},r))})),0===r.length&&e(i).createElement(Ye,null,e(i).createElement(K.Text,{size:14,weight:400,lineHeight:17,whiteSpace:"normal"},a))))},nn={cancelOrder:"Cancel order",cancelOrderV2:"Cancel order",newOrder:"Place order",newOrderV3:"Place order",settleFunds:"Settle funds",matchOrders:"Match orders",initializeMint:"Initialize mint",initializeAccount:"Initialize account",transfer:"Transfer",approve:"Approve",mintTo:"Mint to",closeAccount:"Close account",systemCreate:"Create account",systemTransfer:"Transfer SOL",createAssociatedTokenAccount:"Create token account",signMessage:"Sign Message",unknown:"Unknown"},tn=function(e){var n,t=e.type;return null!==(n=nn[t])&&void 0!==n?n:t},rn={side:{label:"Side",isAddress:!1},orderId:{label:"Order Id",isAddress:!1},limit:{label:"Limit",isAddress:!1},basePubkey:{label:"Base wallet",isAddress:!0},quotePubkey:{label:"Quote wallet",isAddress:!0}},an={amount:{label:"Amount",isAddress:!1},accountPubkey:{label:"Account",isAddress:!0},mintPubkey:{label:"Mint",isAddress:!0},sourcePubkey:{label:"Source",isAddress:!0},destinationPubkey:{label:"Destination",isAddress:!0},ownerPubkey:{label:"Owner",isAddress:!0}},on={toPubkey:{label:"To",isAddress:!0},accountPubkey:{label:"Account",isAddress:!0},basePubkey:{label:"Base",isAddress:!0},seed:{label:"Seed",isAddress:!1},noncePubkey:{label:"Nonce",isAddress:!0},authorizedPubkey:{label:"Authorized",isAddress:!0},newAuthorizedPubkey:{label:"New authorized",isAddress:!0},newAccountPubkey:{label:"New account",isAddress:!0},amount:{label:"Amount",isAddress:!1},lamports:{label:"Amount",isAddress:!1}},cn=function(e,n){var t=e.market,r=e.marketInfo,a=e.data,o=[];r&&o.push({keyText:"Market",valueText:r.name});var i=a.side,c=a.limitPrice,l=a.maxQuantity,u=a.maxBaseQuantity,s=a.orderType,d=a.ownerPubkey;o.push({keyText:"Side",valueText:i.charAt(0).toUpperCase()+i.slice(1)}),o.push({keyText:"Price",valueText:(null==t?void 0:t.priceLotsToNumber(c))||""+c});var f=n?u:l;return o.push({keyText:"Quantity",valueText:(null==t?void 0:t.baseSizeLotsToNumber(f))||""+f}),o.push({keyText:"Type",valueText:s.charAt(0).toUpperCase()+s.slice(1)}),o.push({keyText:"Owner",valueText:sn(d)}),o},ln=function(e){switch(e.type){case"cancelOrder":case"cancelOrderV2":case"matchOrders":case"settleFunds":return function(e){var n=[];return e.marketInfo&&n.push({keyText:"Market",valueText:e.marketInfo.name}),un(n,e.data,rn),n}(e);case"closeAccount":case"initializeAccount":case"transfer":case"approve":case"mintTo":return function(e){var n=[];return un(n,e.data,an),n}(e);case"systemCreate":case"systemTransfer":return function(e){var n=[];return un(n,e.data,on),n}(e);case"newOrder":return cn(e,!1);case"newOrderV3":return cn(e,!0);case"unknown":case"createAssociatedTokenAccount":return function(e){var n=e.rawData,t=n.length>20?W.formatHashMedium(n,10):n;return t?[{keyText:"Program Id",valueText:sn(e.data.programId)},{keyText:"Data",valueText:t}]:[{keyText:"Program Id",valueText:sn(e.data.programId)}]}(e);default:return[]}},un=function(e,n,t){Object.entries(n).forEach((function(n){var r=v.slicedToArray(n,2),a=r[0],o=r[1],i=t[a];if(i){var c=i.label,l="";i.isAddress?l=sn(o):"lamports"===a?l="".concat(W.formatTokenAmount(W.lamportsToSolana(o))," SOL"):"function"==typeof o.toString()?l=o.toString():"string"==typeof o&&(l=o),e.push({keyText:c,valueText:l})}}))},sn=function(e){var n=e.toString();return W.formatHashMedium(n)},dn=(De=o("8G5sy"),ze=o("8ePxM"),o("4WZBg"));function Q(){var e=v.taggedTemplateLiteral(["\n  height: 150px;\n"]);return Q=function(){return e},e}Y=function(e){return e};var fn,pn=z.default(Ie.LoadingContent)(fn||(fn=Y(Q()))),mn=function(n){var t,r,a=n.tabId,o=n.origin,c=n.messages,l=n.confirmApproval,u=n.denyApproval,d=n.transactionName,f=H.useTranslation().t,p=(r=ke.useBlockchainState().feeCalculator,W.lamportsToSolana(r.lamportsPerSignature))*de.getRequiredSignatures(c),m=v.slicedToArray(i.useState(!1),2),g=m[0],y=m[1],T=ge.useFetchSolanaBalance(),b=T.data,x=ge.useFetchAssetsWithAccount(),A=x.data,E=ye.useFetchCollectibles(),w=E.data,k=i.useMemo((function(){if(!A||!w)return ve.objectArrayToMap([],"account");var e=v.toConsumableArray(A).concat(v.toConsumableArray(w));return ve.objectArrayToMap(e,"account")}),[A,w]),S=!T.isFetched||!x.isFetched||!E.isFetched,C=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=xe.useFetchSimulatedTransaction(e,n),r=t.error,a=M.useSelectedAccount().accountClient,o=t.data,c=i.useMemo((function(){var e=new Map;if(o){var n=!0,t=!1,r=void 0;try{for(var i,c=o[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var l=v.slicedToArray(i.value,2),u=l[0],s=l[1];if(s&&s.data&&s.owner.toString()===he.TOKEN_PROGRAM_ID.toString()){var d=v.slicedToArray(s.data,1)[0];try{var f=Te.deserializeTokenAccount(we.from(d,"base64"));f.owner===a.publicKey.toString()&&e.set(u,f)}catch(e){}}}}catch(e){t=!0,r=e}finally{try{n||null==c.return||c.return()}finally{if(t)throw r}}return e}}),[o]);return{balances:i.useMemo((function(){var e={};if(o&&c){var n=a.publicKey.toString(),t=null==o?void 0:o.get(n);t&&(e[n]={amount:new be.BigNumber(t.lamports)});var r=!0,i=!1,l=void 0;try{for(var u,s=c[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){var d=v.slicedToArray(u.value,2),f=d[0],p=d[1];p.owner===n&&(e[f]={mint:p.mint,amount:p.amount,delegate:p.delegate})}}catch(e){i=!0,l=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw l}}return e}}),[o,c]),error:r}}(c,5e3),P=Object.values(null!==(t=C.balances)&&void 0!==t?t:{}).map((function(e){return e.mint})).filter((function(e){return!!e})),R=Se.useTokenMetasForMints(P),I=i.useMemo((function(){var e,n=C.balances;if(n&&!S){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=Object.entries(n)[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var l=v.slicedToArray(i.value,2),u=l[0],s=l[1];if(void 0===s.mint&&b){var d=s.amount.minus(b),f=W.lamportsToSolana(d.toNumber())+p;if(0!==f){var m=W.formatTokenAmount(Math.abs(f));t.push({keyText:h.SOLANA.symbol,valueText:d.isNegative()?"-".concat(m," ").concat(h.SOLANA.symbol):"+".concat(m," ").concat(h.SOLANA.symbol),valueColor:d.isNegative()?"#EB3742":"#21E56F"})}}else{var g=k[u],y=s.mint;if(g){var T=s.amount.minus(g.baseBalance),x=W.amountToUiAmount(T.abs(),g.decimals),A=W.formatTokenAmount(Math.abs(x));if("fungible"===g.type){var E=null!==(e=null==g?void 0:g.symbol)&&void 0!==e?e:W.formatAddressShort(null!=y?y:g.address);0!==x&&t.push({keyText:E,valueText:T.isNegative()?"-".concat(A," ").concat(E):"+".concat(A," ").concat(E),valueColor:T.isNegative()?"#EB3742":"#21E56F"})}else if("collectible"===g.type){if(0!==x){var w="1"===A?"":"(".concat(A,")");t.push({keyText:"NFT",valueText:T.isNegative()?"-".concat(g.name," ").concat(w):"+".concat(g.name," ").concat(w)})}}}else if(R.value&&y){var P=R.value[y];if(P){var M=W.amountToUiAmount(s.amount.toNumber(),P.decimals);if(0!==M){var I=W.formatTokenAmount(M),q="1"===I?"":"(".concat(I,")");t.push({keyText:P.isCollectible?"NFT":P.symbol,valueText:P.isCollectible?"+".concat(P.name," ").concat(q):"+".concat(I," ").concat(P.symbol),valueColor:P.isCollectible?void 0:"#21E56F"})}}}}}}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}}),[C,k,b,p,R,S]),q=e(i).createElement(De.TooltipContent,{paddingLeft:10,paddingRight:10},e(i).createElement(De.TooltipText,{size:14,color:"#FFF",lineHeight:18},f("notificationTransactionApprovalEstimatesBasedOnSimulations"))),B=f("notificationTransactionApprovalUnableToFetchBalanceChanges");C.error instanceof me.TransactionSimulationError&&(B=f("notificationTransactionApprovalTransactionMayFailToConfirm"));var j=function(e){var n=v.slicedToArray(i.useState(!1),2),t=n[0],r=n[1];return i.useEffect((function(){var n=de.canEvadeTransactionSimulation(e);r(n),s.analytics.capture("transactionCanEvadeSimulation",{data:{messages:e.join("|")}})}),[e]),t}(c);return j&&(B=f("notificationTransactionApprovalSignUnableToSimulate")),e(i).createElement(V.Container,null,e(i).createElement(G.AccountHeader,{firstChild:e(i).createElement("div",null),lastChild:e(i).createElement("div",null)}),e(i).createElement(V.Body,null,e(i).createElement(V.Icon,null,e(i).createElement(J.TabIconHeader,{tabId:a,primaryText:d,secondaryText:W.removeWebPrefixes(o)})),e(i).createElement(pn,{isLoading:void 0===I&&!C.error,showingDelayMs:0},C.error||j?e(i).createElement(Oe.RowCard,{title:f("notificationTransactionApprovalEstimatedBalanceChanges"),rowItems:[{valueText:B,valueColor:"#EB3742"}],info:q}):e(i).createElement(Oe.RowCard,{title:f("notificationTransactionApprovalEstimatedBalanceChanges"),rowItems:I,emptyDescription:f("notificationTransactionApprovalNoBalanceChanges"),info:q}),e(i).createElement(Le,null,e(i).createElement(Fe,null,e(i).createElement(Ne,null,e(i).createElement(K.Text,{size:14,lineHeight:17,textAlign:"left",color:"#777",style:{gap:10,marginLeft:"-8px"}},e(i).createElement(ze.Info,{info:e(i).createElement(De.TooltipContent,{paddingLeft:10,paddingRight:10},e(i).createElement(De.TooltipText,{size:14,color:"#FFF",lineHeight:18},f("notificationTransactionApprovalSolanaAmountRequired")))}),f("notificationTransactionApprovalNetworkFee")),e(i).createElement(K.Text,{size:14,weight:500,lineHeight:17,whiteSpace:"normal",wordBreak:"break-word"},e(i).createElement(dn.SolBalance,null,p))))),e(i).createElement(K.Text,{size:14,lineHeight:19,color:"#777777",margin:"17px 0",onClick:function(){return y(!g)}},f(g?"notificationTransactionApprovalHideAdvancedDetails":"notificationTransactionApprovalViewAdvancedDetails")),g&&e(i).createElement(Oe.TransactionInstructionRows,{messages:c}))),e(i).createElement(V.Footer,null,e(i).createElement(Z.ButtonPair,{primaryText:f("notificationTransactionApprovalActionButtonApprove"),secondaryText:f("notificationTransactionApprovalActionButtonCancel"),onPrimaryClicked:l,onSecondaryClicked:u})))},vn=o("3UD42"),gn=(V=o("jJ2Ea"),function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))}),yn=function(n){var t,r=n.origin,a=n.requestId,o=n.requestMethod,c=n.tabId,u=n.unsignedTransactionMessages,d=void 0===u?[]:u,f=n.options,p=void 0===f?{}:f,v=H.useTranslation().t,y=R.useTransactionsManager(),h=m.usePostOutgoingBackgroundResponse(),T=M.useSelectedAccount(),b=T.accountClient,x=T.accountMeta,A=x.type===D.AccountType.Ledger,E=o===l.ProviderToWalletRequestMethods.SignTransaction,w=o===l.ProviderToWalletRequestMethods.SignAllTransactions,k=o===l.ProviderToWalletRequestMethods.SignAndSendTransaction,C=null===(t=pe.useFetchConnection())||void 0===t?void 0:t.data,P=null==C?void 0:C.connection,I=S.useDetailViews(),q=I.pushDetailView,B=I.popDetailView,j=de.canEvadeTransactionSimulation(d),L=i.useCallback((function(n){return gn(void 0,void 0,void 0,e(g).mark((function t(){var o,c,u,f,m,v,T,S,C,M,R,I,L;return e(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=(o=b).publicKey.toString(),u=[],!A){t.next=9;break}if(P){t.next=7;break}return t.abrupt("return");case 7:m=fe.createSignerFromLedgerAccountMeta(x,n),o=new se.AccountClient(P,m,y);case 9:if(t.prev=9,!k){t.next=18;break}return v=de.messageToTransaction(d[0]),t.next=14,o.signAndSendTransactionAsync(v,p);case 14:T=t.sent,f=l.createSignSuccessResponse(a,T,c),t.next=46;break;case 18:S=!0,C=!1,M=void 0,t.prev=19,R=d[Symbol.iterator]();case 21:if(S=(I=R.next()).done){t.next=31;break}return L=I.value,t.t0=u,t.next=26,o.signMessageAsync(L);case 26:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 28:S=!0,t.next=21;break;case 31:t.next=37;break;case 33:t.prev=33,t.t2=t.catch(19),C=!0,M=t.t2;case 37:t.prev=37,t.prev=38,S||null==R.return||R.return();case 40:if(t.prev=40,!C){t.next=43;break}throw M;case 43:return t.finish(40);case 44:return t.finish(37);case 45:E?f=l.createSignSuccessResponse(a,u[0],c):w&&(f=l.createSignAllTransactionsSuccessResponse(a,u,c));case 46:s.analytics.capture("transactionConfirm",{data:{origin:r,messages:d.join("|"),canEvadeSimulation:j}}),h(f),t.next=54;break;case 50:t.prev=50,t.t3=t.catch(9),console.error(t.t3),vn.isKnownLedgerActionError(t.t3)?q(e(i).createElement(V.LedgerWrapper,null,e(i).createElement(vn.LedgerActionError,{ledgerActionError:t.t3,onRetryClick:function(){B()},onCancelClick:function(){f=l.createJsonRpcErrorResponse(a,l.RpcErrorCode.UserRejectedRequest),h(f)}}))):A?(f=l.createJsonRpcErrorResponse(a,l.RpcErrorCode.UserRejectedRequest),h(f)):(f=l.createJsonRpcErrorResponse(a,l.RpcErrorCode.TransactionRejected),h(f));case 54:case"end":return t.stop()}}),t,null,[[9,50],[19,33,37,45],[38,,40,44]])})))}),[a,d,b,P,h]),F=i.useCallback((function(){A?q(e(i).createElement(V.LedgerWrapper,null,e(i).createElement(vn.LedgerAction,{ledgerAction:L,cancel:N})),{shouldShowBackButton:!1}):L()}),[L]),N=i.useCallback((function(){var e=l.createJsonRpcErrorResponse(a,l.RpcErrorCode.UserRejectedRequest);s.analytics.capture("transactionDeny",{data:{origin:r,messages:d.join("|"),canEvadeSimulation:j}}),h(e)}),[a,h]);return e(i).createElement(mn,{tabId:c,origin:r,messages:d,confirmApproval:F,denyApproval:N,transactionName:v("notificationSignatureRequestApproveTransactionCapitalized")})},hn={};n(hn,"SignMessageRequest",(function(){return xn}),(function(e){return xn=e}));g=o("1vgyn"),i=o("yrqZm"),s=o("fVAzy"),l=o("a9js8"),D=o("226dB"),W=o("jcs3P"),M=o("1rSG6"),S=o("1qebk"),pe=o("cneLj"),vn=o("3UD42"),Z=o("6AaHU"),G=o("jj9QT"),V=o("jJ2Ea"),J=o("5oDS0");var Tn=o("ehiNV").Buffer,bn=function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))},xn=function(n){var t,r=n.origin,a=n.requestId,o=n.message,c=n.display,u=n.tabId,d=m.usePostOutgoingBackgroundResponse(),f=M.useSelectedAccount(),p=f.accountClient,v=f.accountMeta,y=null===(t=pe.useFetchConnection())||void 0===t?void 0:t.data,h=null==y?void 0:y.connection,T=S.useDetailViews().pushDetailView,b=i.useCallback((function(){return bn(void 0,void 0,void 0,e(g).mark((function n(){var t,i,c,u;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p,e.prev=1,e.next=4,t.signUTF8(Tn.from(o).toString());case 4:i=e.sent,c=t.publicKey.toString(),u=l.createSignSuccessResponse(a,i,c),s.analytics.capture("signMessageConfirm",{data:{origin:r}}),d(u),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),A();case 14:case"end":return e.stop()}}),n,null,[[1,11]])})))}),[a,o,p,h,d]),x=i.useCallback((function(){v.type===D.AccountType.Ledger?T(e(i).createElement(V.LedgerWrapper,null,e(i).createElement(vn.LedgerAction,{ledgerAction:b,cancel:A})),{shouldShowBackButton:!1}):b()}),[b]),A=i.useCallback((function(){var e=l.createJsonRpcErrorResponse(a,l.RpcErrorCode.UserRejectedRequest);s.analytics.capture("transactionDeny",{data:{origin:r}}),d(e)}),[a,d]);return e(i).createElement(V.Container,null,e(i).createElement(G.AccountHeader,{firstChild:e(i).createElement("div",null),lastChild:e(i).createElement("div",null)}),e(i).createElement(V.Body,null,e(i).createElement(V.Icon,null,e(i).createElement(J.TabIconHeader,{tabId:u,primaryText:"Signature Request",secondaryText:W.removeWebPrefixes(r)})),e(i).createElement(Oe.SignMessageInstructionRow,{message:o,display:c})),e(i).createElement(V.Footer,null,e(i).createElement(Z.ButtonPair,{primaryText:"Approve",secondaryText:"Cancel",onPrimaryClicked:x,onSecondaryClicked:A})))},An=o("aq3jz");u.initSentry();var En=function(){var n=m.useIncomingBackgroundRequest();if(!n)return null;var t=n.origin,r=n.req,a=n.tabId,o=r.id,c=r.method,u=r.params,d=u.message,f=u.messages,p=u.display,v=u.options,g=c===l.ProviderToWalletRequestMethods.Connect,y=c===l.ProviderToWalletRequestMethods.SignMessage,h=c===l.ProviderToWalletRequestMethods.SignTransaction,T=c===l.ProviderToWalletRequestMethods.SignAllTransactions,b=c===l.ProviderToWalletRequestMethods.SignAndSendTransaction,x=h||T,A=d instanceof Uint8Array?d:l.objectToUint8Array(null!=d?d:{}),E=h||b?[d]:T?f:void 0,w=g?"Connection Error":"Transaction Error",k="There was an error attempting to ".concat(g?"connect to the application":"sign the transaction",". Please try again.");return i.useEffect((function(){s.analytics.capture("notificationOpen",{data:{method:c}})}),[c]),e(i).createElement(An.PopupAndNotificationErrorBoundary,{title:w,message:k},g?e(i).createElement(le,{tabId:a,origin:t,requestId:o}):y?e(i).createElement(S.DetailViewsProvider,null,e(i).createElement(hn.SignMessageRequest,{tabId:a,origin:t,requestId:o,message:A,display:p})):x?e(i).createElement(S.DetailViewsProvider,null,e(i).createElement(ue.SignatureRequest,{tabId:a,origin:t,requestId:o,requestMethod:c,unsignedTransactionMessages:E})):b?e(i).createElement(S.DetailViewsProvider,null,e(i).createElement(ue.SignatureRequest,{tabId:a,origin:t,requestId:o,requestMethod:c,unsignedTransactionMessages:E,options:v})):null)},wn=function(){var n=i.useCallback((function(n){return e(i).createElement(B.ModalsProvider,null,e(i).createElement(q.WalletMenuProvider,null,e(i).createElement(N.Unlock,{unlockSeedAndMnemonic:n})))}),[]),t=i.useCallback((function(){f.openTabAsync({url:"onboarding.html"}),window.close()}),[]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(d.ThemedGlobalStyle,{backgroundColor:"#222222"}),e(i).createElement(An.PopupAndNotificationErrorBoundary,null,e(i).createElement(F.Main,null,e(i).createElement(P.FeatureFlagsProvider,null,e(i).createElement(L.BannerProvider,null,e(i).createElement(j.QueryProvider,null,e(i).createElement(m.BackgroundConnectionProvider,null,e(i).createElement(C.SeedProvider,{renderLocked:n,openOnboarding:t},e(i).createElement(R.TransactionsProvider,null,e(i).createElement(I.HardwareWalletProvider,null,e(i).createElement(M.AccountsProvider,null,e(i).createElement(q.WalletMenuProvider,null,e(i).createElement(En,null)))))))))),e(i).createElement("div",{id:p.MODAL_ID}))))};c.render(e(i).createElement(wn,null),document.getElementById("root"))}();