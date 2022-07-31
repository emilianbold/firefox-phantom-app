(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},l=n.parcelRequirea886;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},n.parcelRequirea886=l);var i=l("aZikt"),r=l("gDkTC"),c=l("ihAua");l("6CHoY");var s=l("lwple"),u=l("czDD7"),d=l("ci2Mj"),m=l("5cKs6"),p=l("8C6BZ"),g=l("iyOkC"),h=l("4yWCU"),f=l("i2Zy4"),y=l("6mzlH"),E=(i=l("aZikt"),r=l("gDkTC"),l("lxqKj")),b=(s=l("lwple"),l("4yWCU"),l("82Ilk")),x=l("g9lcT"),v=l("ixd3d"),k=(i=l("aZikt"),l("hHMPk")),T=l("7Qmuu"),w=(s=l("lwple"),l("2zUeX")),S=l("99Anx"),A=l("cFuyE"),C=l("1yeHx"),M=l("fMhDQ"),F=(b=l("82Ilk"),v=l("ixd3d"),x=l("g9lcT"),l("6rMcH")),P=(l("4yWCU"),p=l("8C6BZ"),l("delKv")),R=l("k95B3"),B=l("dczY0"),H=l("gtUQU"),L={};t(L,"AssetDetail",(function(){return ct}),(function(e){return ct=e}));i=l("aZikt"),r=l("gDkTC");var D=l("h6IZU"),I=(k=l("hHMPk"),T=l("7Qmuu"),l("6oEu9")),z=(s=l("lwple"),l("7Lj33")),$=(w=l("2zUeX"),A=l("cFuyE"),p=l("8C6BZ"),M=l("fMhDQ"),x=l("g9lcT"),{});t($,"RichTransactionHistoryProvider",(function(){return Z}),(function(e){return Z=e})),t($,"useRichTransactionHistory",(function(){return V}),(function(e){return V=e}));i=l("aZikt");var U=l("h5G75"),O=(I=l("6oEu9"),l("9ZliH")),K=l("ehJ6P"),N=(b=l("82Ilk"),l("dlVlr")),j=function(e,t,n,a){return new(n||(n=Promise))((function(o,l){function i(e){try{c(a.next(e))}catch(e){l(e)}}function r(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}c((a=a.apply(e,t||[])).next())}))};const W=i.createContext({transactionHistory:{},refreshTransactionHistory:I.NOOP}),Z=({children:t})=>{const[n,a]=i.useState({}),{accountClient:o}=b.useSelectedAccount(),[l,r]=i.useState(o.publicKey),[c]=e(i).useState(I.TX_HISTORY_REFRESH_INTERVAL_MS),s=l&&l!==o.publicKey?o.publicKey:void 0,{data:u,error:d}=U.useQuery({enabled:!0,queryKey:["rich-transaction-history-api",l,s],refetchInterval:c,queryFn:()=>j(void 0,void 0,void 0,(function*(){const{results:e}=yield N.getRichTransactionHistory({publicKey:l.toString(),observer:null==s?void 0:s.toString()});return e}))});return i.useEffect((()=>{const e=K.default(n,(e=>{e[l.toString()]=d?[]:u}));a(e)}),[u,d]),i.useEffect((()=>{r(o.publicKey)}),[o.publicKey.toString()]),e(i).createElement(W.Provider,{value:{transactionHistory:n,refreshTransactionHistory:e=>r(e)}},t)},V=e=>{var t;const n=i.useContext(W);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=b.useSelectedAccount(),o=O.usePendingTransactions(a.publicKey),l=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:i.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return{confirmed:l,pending:[]};const t=[],n=l.map((e=>e.signature));for(const e of o)n.includes(e.signature)||t.push(e);return{pending:t,confirmed:l}}),[l,a,o]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};var Q={};t(Q,"TransactionHistoryProvider",(function(){return G}),(function(e){return G=e})),t(Q,"useTransactionHistory",(function(){return J}),(function(e){return J=e}));K=l("ehJ6P"),i=l("aZikt"),I=l("6oEu9"),O=l("9ZliH");var _=l("4o0lv"),Y=(b=l("82Ilk"),function(e,t,n,a){return new(n||(n=Promise))((function(o,l){function i(e){try{c(a.next(e))}catch(e){l(e)}}function r(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}c((a=a.apply(e,t||[])).next())}))});const X=i.createContext({transactionHistory:{},refreshTransactionHistory:I.NOOP}),G=({children:t})=>{const[n]=_.useIncrementingNonce(I.TX_HISTORY_REFRESH_INTERVAL_MS),[a,o]=i.useState({}),{accountClient:l}=b.useSelectedAccount(),[r,c]=i.useState(l.publicKey),s=e=>Y(void 0,void 0,void 0,(function*(){a[e.toString()]?(e=>{Y(void 0,void 0,void 0,(function*(){var t;const n=null!==(t=a[e.toString()])&&void 0!==t?t:[];let i;if(n.length>0){const{signature:e}=n[0];i=e}const r=yield l.getTransactionHistoryAsync(e,{until:i,limit:I.TX_HISTORY_PAGINATION_COUNT}),c=K.default(a,(t=>{t[e.toString()]=[...r,...t[e.toString()]]}));o(c)}))})(e):(e=>{Y(void 0,void 0,void 0,(function*(){const t=yield l.getTransactionHistoryAsync(e,{limit:I.TX_HISTORY_PAGINATION_COUNT}),n=K.default(a,(n=>{n[e.toString()]=t}));o(n)}))})(e),c(e)}));return i.useEffect((()=>{0!==n&&s(r)}),[n]),i.useEffect((()=>{c(l.publicKey),s(l.publicKey)}),[l.publicKey.toString()]),e(i).createElement(X.Provider,{value:{transactionHistory:a,refreshTransactionHistory:s}},t)},J=e=>{var t;const n=i.useContext(X);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=b.useSelectedAccount(),o=O.usePendingTransactions(a.publicKey),l=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:i.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return l;const t=[],n=l.map((e=>e.signature));for(const e of o)n.includes(e.signature)||t.push(e);return[...t,...l]}),[l,a,o]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};b=l("82Ilk");var q=l("j2x34"),ee=(v=l("ixd3d"),P=l("delKv"),l("g7X40")),te=l("3rE52"),ne=(i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu"),S=l("99Anx"),F=l("6rMcH"),x=l("g9lcT"),l("u1MBs")),ae=l("8FNEt"),oe=l("hJDxl"),le=l("2MtnF"),ie=l("lPkGw"),re=(i=l("aZikt"),T=l("7Qmuu"),x=l("g9lcT"),ne=l("u1MBs"),te=l("3rE52"),oe=l("hJDxl"),l("eopQk")),ce=(i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu"),A=l("cFuyE"),s=l("lwple"),x=l("g9lcT"),ne=l("u1MBs"),ee=l("g7X40"),l("76Idz")),se=l("gkUV0"),ue=l("aADTv");le=l("2MtnF"),re=l("eopQk"),p=l("8C6BZ");const de=()=>{var t;i.useEffect((()=>(p.analytics.capture("showStakeAccountList"),()=>p.analytics.capture("hideStakeAccountList"))),[]);const n=ne.useFetchStakeAccounts({refetchOnMount:"always"}),a=null!==(t=n.data)&&void 0!==t?t:[];return e(i).createElement(re.FullHeightLoadingContent,{isLoading:!n.isFetched},n.isError?e(i).createElement(me,{message:n.error.message,onRefetch:()=>{n.isFetching||n.refetch()}}):e(i).createElement(pe,{data:a}),e(i).createElement("br",null))},me=t=>{const{t:n}=T.useTranslation();return e(i).createElement(e(i).Fragment,null,e(i).createElement(ee.Text,{size:16,color:"red"},n("stakeAccountListErrorFetching"),": ",t.message),e(i).createElement(ue.Button,{onClick:t.onRefetch},n("stakeAccountListReload")))},pe=t=>{const{t:n}=T.useTranslation(),a=ke(),o=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),l=o.filter((e=>e.type===s.StakeAccountType.Delegated)),r=o.filter((e=>e.type===s.StakeAccountType.Initialized));return l.length||r.length?e(i).createElement(e(i).Fragment,null,l.length>0&&e(i).createElement(e(i).Fragment,null,l.map((t=>{var n,o;const{stake:l,voter:r}=t.info.stake.delegation,c=a.get(r),s=null===(n=null==c?void 0:c.info)||void 0===n?void 0:n.name,u=null===(o=null==c?void 0:c.info)||void 0===o?void 0:o.keybaseUsername;return e(i).createElement(xe,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,delegatedStake:Number(l),inflationReward:t.inflationReward,voteAccountPubkey:r,name:s,keybaseUsername:u})}))),r.length>0&&e(i).createElement(e(i).Fragment,null,r.map((t=>e(i).createElement(ve,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,inflationReward:t.inflationReward}))))):e(i).createElement(ge,null,e(i).createElement(ee.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},ge=k.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,he=k.default(ce.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,fe=k.default(se.TokenImage).attrs({width:44})``,ye=k.default.div`
  overflow: hidden;
`,Ee=k.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,be=k.default(ee.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,xe=t=>{var n,a;const{t:o}=T.useTranslation(),{showStakeAccountModal:l}=x.useModals(),{data:r}=ne.useFetchKeybaseUserAvatar(t.keybaseUsername),c=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:A.formatHashMedium(t.voteAccountPubkey),s=ne.useFetchStakeActivationData(t.pubkey).data,u=t.inflationReward&&t.inflationReward>0;return e(i).createElement(he,{onClick:()=>{l({stakeAccountPubkey:t.pubkey})}},e(i).createElement(fe,{iconUrl:r}),e(i).createElement(ye,null,e(i).createElement(Ee,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},c),e(i).createElement(ee.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,t.delegatedStake))),e(i).createElement(Ee,null,e(i).createElement(be,{size:14,activationState:null==s?void 0:s.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==s?void 0:s.state)?o("stakeAccountListActivationActivating"):"","active"===(null==s?void 0:s.state)?o("stakeAccountListActivationActive"):"","inactive"===(null==s?void 0:s.state)?o("stakeAccountListActivationInactive"):"","deactivating"===(null==s?void 0:s.state)?o("stakeAccountListActivationDeactivating"):""),e(i).createElement(ee.Text,{size:14,color:""+(u?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},u?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(le.SolBalance,null,t.inflationReward)):"-"))))},ve=t=>{const{t:n}=T.useTranslation(),{showStakeAccountModal:a}=x.useModals(),o=ne.useFetchStakeActivationData(t.pubkey).data,l=t.inflationReward&&t.inflationReward>0;return e(i).createElement(he,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(i).createElement(fe,null),e(i).createElement(ye,null,e(i).createElement(Ee,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(i).createElement(ee.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,t.balance))),e(i).createElement(Ee,null,e(i).createElement(be,{size:14,activationState:null==o?void 0:o.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==o?void 0:o.state)?n("stakeAccountListActivationActivating"):"","active"===(null==o?void 0:o.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==o?void 0:o.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==o?void 0:o.state)?n("stakeAccountListActivationDeactivating"):""),e(i).createElement(ee.Text,{size:14,color:""+(l?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},l&&"+",e(i).createElement(le.SolBalance,null,t.inflationReward)))))},ke=()=>{var e;const t=ne.useFetchValidators(),n=null!==(e=t.data)&&void 0!==e?e:[],a=i.useRef(n);a.current=n;return i.useMemo((()=>new Map(a.current.map((e=>[e.voteAccountPubkey,e])))),[t.dataUpdatedAt,a])},Te=()=>{const{t:t}=T.useTranslation(),{showValidatorListModal:n,hideValidatorListModal:a}=x.useModals(),o=!ne.useFetchStakeAccounts().isFetched;return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,{items:[{label:t("stakeAccountListViewStakeSOL"),onClick:()=>{n({onClose:a})}}],icon:e(i).createElement(oe.PlusIcon,null)},t("stakeAccountListViewPrimaryText")),e(i).createElement(re.FullHeightLoadingContent,{isLoading:o},e(i).createElement(de,null)))};ce=l("76Idz"),ee=l("g7X40");const we=k.default(ce.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,Se=k.default.div`
  overflow: hidden;
`,Ae=k.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,Ce=k.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,Me=()=>{var t;const{t:n}=T.useTranslation(),{pushDetailView:a}=F.useDetailViews(),{showValidatorListModal:o,hideValidatorListModal:l}=x.useModals(),r=ne.useFetchStakeAccounts(),{isFetching:c,isError:s}=r,u=null!==(t=r.data)&&void 0!==t?t:[],d=u.reduce(((e,t)=>e+t.lamports),0),m=u.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),p=u.length;return e(i).createElement(we,{isDisabled:c||s,onClick:()=>{c||s||(p>0?a(e(i).createElement(Te,null),{shouldShowBackButton:!0}):o({onClose:l}))}},s?e(i).createElement(ae.Circle,{diameter:44,color:S.hexToRGB("#EB3742",.1)},e(i).createElement(oe.FailureIcon,null)):c?e(i).createElement(ae.Circle,{diameter:44,color:S.hexToRGB("#8A81F8",.2)},e(i).createElement(ie.Spinner,{diameter:28})):e(i).createElement(ae.Circle,{diameter:44,color:"#3F3D29"},e(i).createElement(oe.StarIcon,null)),e(i).createElement(Se,null,s?e(i).createElement(Ae,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(i).createElement(ee.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):c?e(i).createElement(Ae,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(i).createElement(ee.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):p?e(i).createElement(e(i).Fragment,null,e(i).createElement(Ce,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(i).createElement(ee.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,d))),e(i).createElement(Ce,null,e(i).createElement(ee.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},p," ",1===p?"account":"accounts"),e(i).createElement(ee.Text,{size:14,color:""+(m>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},m>0?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(le.SolBalance,null,m)):"–"))):e(i).createElement(Ae,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(i).createElement(ee.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))};i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu");var Fe=l("d3pmY"),Pe=(S=l("99Anx"),A=l("cFuyE"),l("HEK4k")),Re=(z=l("7Lj33"),q=l("j2x34"),b=l("82Ilk"),l("aZo5h")),Be=l("lzptm");M=l("fMhDQ"),oe=l("hJDxl"),ae=l("8FNEt"),re=l("eopQk"),ee=l("g7X40"),ie=l("lPkGw");const He=k.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Le=k.default(ee.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin-top: 105px;
`,De=k.default(re.LoadingContent)`
  flex: 1;
`,Ie=({className:t,publicKey:n})=>{var a;const{t:o}=T.useTranslation(),{transactionInfos:l,isLoadingInitial:r}=Q.useTransactionHistory(n),c=null===(a=M.useFetchConnection())||void 0===a?void 0:a.data,s=null==c?void 0:c.cluster;return e(i).createElement(De,{isLoading:r},e(i).createElement(He,{className:t},0!==l.length?l.map((t=>e(i).createElement(Ne,{key:t.signature,cluster:s,transactionInfo:t}))):e(i).createElement(Le,null,o("transactionsNoActivity"))))},ze=k.default.div`
  display: flex;
  justify-content: space-between;
`,$e=k.default.div`
  background: #2a2a2a;
  border-radius: 6px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 15px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,Ue=k.default(Fe.motion.div)`
  display: flex;
  align-items: center;
`,Oe=k.default.div`
  width: 100%;
  margin-left: 10px;
  > * {
    margin-top: 2px;
  }
`,Ke=k.default.div`
  padding-top: 3px;
  padding-left: 3px;
`,Ne=({cluster:t,transactionInfo:n})=>{var a,o,l,r,c;const{t:s}=T.useTranslation(),{latestBlockTimestamp:u}=q.useBlockchainState(),{accountClient:d}=b.useSelectedAccount(),{getExistingAccountMeta:m}=b.useAccounts(),{getSavedAddressLabel:p}=Re.useAddressBook(),g=Be.useFetchAssetsWithAccount().data,h=i.useMemo(Date.now,[]),f=h-(null!=u?u:h),y=n.blockTime?Math.min(h,1e3*n.blockTime+f):void 0,{err:E,isLoading:x,isOptimistic:v,transaction:k,signature:w}=n;let C=S.hexToRGB("#3CC852",.1),M=e(i).createElement(oe.CheckmarkIcon,{fill:"#27D843"}),F=A.formatHashMedium(w),P=s("transactionsSuccess");if(x||v)C=S.hexToRGB("#8A81F8",.2),F=s("transactionsSending"),P=s("transactionsWaitingForConfirmation"),M=e(i).createElement(ie.Spinner,{diameter:28});else if(E)C=S.hexToRGB("#E72C2C",.1),M=e(i).createElement(oe.FailureIcon,null),P=s("transactionsError");else if(k){const t=Pe.classifyParsedTransaction(k,d.publicKey,g);if(t===Pe.ParsedTransactionType.ReceivedSol){const t=Pe.getSolTransferInstructions(k)[0],n=t.parsed.info.source,a=A.lamportsToSolana(t.parsed.info.lamports);F=s("transactionsReceivedInterpolated",{amount:A.formatTokenAmount(a)}),C=S.hexToRGB("#4E44CE",.2),M=e(i).createElement(oe.ReceiveIcon,{fill:"#968DFF"}),P=`${s("transactionsFrom")}: ${A.formatAddress(n,m(n),p(n))}`}else if(t===Pe.ParsedTransactionType.SentSol){const t=Pe.getSolTransferInstructions(k)[0],n=t.parsed.info.destination,a=A.lamportsToSolana(t.parsed.info.lamports);F=s("transactionsSentInterpolated",{amount:A.formatTokenAmount(a)}),C=S.hexToRGB("#37AAEB",.1),M=e(i).createElement(Ke,null,e(i).createElement(oe.SendIcon,{width:24,fill:"#6BCEFF"})),P=`${s("transactionsTo")}: ${A.formatAddress(n,m(n),p(n))}`}else if(g&&[Pe.ParsedTransactionType.SentSplFungible,Pe.ParsedTransactionType.SentSplCollectible,Pe.ParsedTransactionType.ReceivedSplFungible,Pe.ParsedTransactionType.ReceivedSplCollectible].includes(t)){const n=Pe.getSplTransferInstructions(k)[0],{source:u,destination:d}=n.parsed.info,m=g.find((e=>u===e.account.toString())),p=g.find((e=>d===e.account.toString()));let h=null===(l=null===(o=null===(a=n.parsed)||void 0===a?void 0:a.info)||void 0===o?void 0:o.tokenAmount)||void 0===l?void 0:l.uiAmount;(null==m?void 0:m.symbol)||(null==m?void 0:m.name)?(h=null!=h?h:A.amountToUiAmount(n.parsed.info.amount,m.decimals),M=e(i).createElement(Ke,null,e(i).createElement(oe.SendIcon,{width:24,fill:"#6BCEFF"})),C=S.hexToRGB("#37AAEB",.1),P="",t===Pe.ParsedTransactionType.SentSplFungible?F=`${s("transactionsSent")} ${A.formatTokenAmount(h)} ${m.symbol}`:t===Pe.ParsedTransactionType.SentSplCollectible&&(F=`${s("transactionsSent")} ${null!==(r=m.name)&&void 0!==r?r:m.symbol}`)):((null==p?void 0:p.symbol)||(null==p?void 0:p.name))&&(h=null!=h?h:A.amountToUiAmount(n.parsed.info.amount,p.decimals),C=S.hexToRGB("#4E44CE",.2),M=e(i).createElement(oe.ReceiveIcon,{fill:"#968DFF"}),P="",t===Pe.ParsedTransactionType.ReceivedSplFungible?F=`${s("transactionsReceived")} ${A.formatTokenAmount(h)} ${p.symbol}`:t===Pe.ParsedTransactionType.ReceivedSplCollectible&&(F=`${s("transactionsReceived")} ${null!==(c=p.name)&&void 0!==c?c:p.symbol}`))}}return e(i).createElement($e,{onClick:()=>{t&&window.open(z.generateTxSolscanUrl(w,t))}},e(i).createElement(Fe.AnimatePresence,{exitBeforeEnter:!0,initial:!1},e(i).createElement(Ue,{key:F+w,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},e(i).createElement(ae.Circle,{diameter:44,color:C},M),e(i).createElement(Oe,null,e(i).createElement(ze,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,noWrap:!0},F),e(i).createElement(ee.Text,{size:14,color:"#777777",lineHeight:17},y?A.formatTimestampFromNow(y):"")),e(i).createElement(ze,null,e(i).createElement(ee.Text,{size:14,color:"#777777",lineHeight:17,textAlign:"left",noWrap:!0,maxWidth:"200px"},P))))))};i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu");var je=l("iqlzl"),We=(i=l("aZikt"),k=l("hHMPk"),l("iSBgX")),Ze=(A=l("cFuyE"),ee=l("g7X40"),T=l("7Qmuu"),l("cweFb"));B=l("dczY0"),h=l("4yWCU"),Re=l("aZo5h"),b=l("82Ilk");const Ve=k.default(Ze.Row)`
  border-radius: 6px;
  background-color: #2a2a2a;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,Qe=k.default(Ze.Row)`
  margin-left: 10px;
  margin-right: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`,_e=e=>{const{topLeft:t,topRight:n,bottomLeft:a,bottomRight:o,image:l,onClick:r}=e;return i.createElement(Ve,{onClick:r},i.createElement(Qe,null,l,i.createElement(B.Column,{width:.69*h.PHANTOM_WIDTH+"px",margin:"0 0 0 10px"},i.createElement(Ze.Row,{justify:"space-between"},i.createElement(ee.Text,{size:16,weight:600,color:null==t?void 0:t.color,margin:"0",noWrap:!0,maxWidth:"80%",lineHeight:21},(null==t?void 0:t.label)||""),i.createElement(ee.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==n?void 0:n.color)||"#777777",lineHeight:21},(null==n?void 0:n.label)||"")),i.createElement(Ze.Row,{justify:"space-between"},i.createElement(ee.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==a?void 0:a.color)||"#777777",lineHeight:21},(null==a?void 0:a.label)||""),i.createElement(ee.Text,{weight:500,size:14,color:null==o?void 0:o.color,margin:"0",noWrap:!0,lineHeight:21},(null==o?void 0:o.label)||"")))))},Ye=({transaction:e,onClick:t})=>{const{t:n}=T.useTranslation(),{getSavedAddressLabel:a}=Re.useAddressBook(),{getExistingAccountMeta:o}=b.useAccounts(),l=((e,t,n,a)=>{const{err:o,detail:l,dapp:i}=e,{data:r,feePayer:c}=l,{imageUrl:s,name:u}=null!=i?i:{};if(o)return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:t("transactionsFailed")},bottomLeft:{label:u},image:We.createIcon({transactionType:r.type,transactionState:"error"})};const d=A.lamportsToSolana(c.amountLamports);switch(r.type){case"swap":{const{sendAsset:e,receiveAsset:n}=r,a=A.formatAddressShort(e.mint||""),o=A.formatAddressShort(n.mint||"");return{topLeft:{label:(null==i?void 0:i.name)?`${t("transactionsSwapOn")} ${i.name}`:t("transactionsTokenSwap")},topRight:{label:`+${A.formatTokenAmount(r.receiveUiAmount)} ${n.symbol||o}`,color:"#21E56F"},bottomLeft:{label:`${e.symbol||a} → ${n.symbol||o}`},bottomRight:{label:`-${A.formatTokenAmount(r.sendUiAmount)} ${e.symbol||a}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl,secondaryImage:n.imageUrl})}}case"send":{const{asset:e}=r,o=A.formatAddressShort(e.mint||""),l=A.formatAddress(r.to,a(r.to),n(r.to));return{topLeft:{label:`${t("transactionsSent")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`-${A.formatTokenAmount(r.uiAmount)} ${e.symbol||o}`,color:"#FFFFFF"},bottomLeft:{label:`${t("transactionsTo")}: ${l}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"receive":{const{asset:e}=r,o=A.formatAddressShort(e.mint||""),l=A.formatAddress(r.from,a(r.from),n(r.from));return{topLeft:{label:`${t("transactionsReceived")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`+${A.formatTokenAmount(r.uiAmount)} ${e.symbol||o}`,color:"#21E56F"},bottomLeft:{label:`${t("transactionsFrom")}: ${l}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"stake":{const{uiAmount:e,stakeAccount:n,validatorName:a}=r;return{topLeft:{label:t("transactionsStaked")},topRight:{label:`-${A.formatTokenAmount(e)} SOL`},bottomLeft:{label:a||A.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"withdrawStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsWithdrawStake")},topRight:{label:`+${A.formatTokenAmount(e)} SOL`,color:"#21E56F"},bottomLeft:{label:A.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"deactivateStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsUnstaked")},topRight:{label:`${A.formatTokenAmount(e)} SOL`},bottomLeft:{label:A.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"listItem":case"cancelListing":case"bidItem":case"cancelBid":case"buyItem":case"sellItem":{const e=`${A.formatTokenAmount(r.forUiAmount)} ${r.forAsset.symbol||""}`,n=r.item.name||t("richTransactionDetailUnknownNFT"),a={listItem:{topLeft:{label:t("transactionsListedInterpolated",{name:n})},topRight:{label:""}},bidItem:{topLeft:{label:t("transactionsBidOnInterpolated",{name:n})},topRight:{label:`-${e}`,color:"#777"}},cancelBid:{topLeft:{label:t("transactionsCancelBidOnInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#777"}},cancelListing:{topLeft:{label:t("transactionsUnlistedInterpolated",{name:n})},topRight:{label:""}},sellItem:{topLeft:{label:t("transactionsSoldInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#21E56F"}},buyItem:{topLeft:{label:t("transactionsBoughtInterpolated",{name:n})},topRight:{label:`-${e}`}}};return{topLeft:a[r.type].topLeft,topRight:a[r.type].topRight,bottomLeft:{label:u||""},image:We.createIcon({transactionType:r.type,primaryImage:r.item.imageUrl,secondaryImage:s})}}case"unknown":return{topLeft:{label:t("transactionsAppInteraction")},bottomLeft:{label:u},topRight:{label:`-${d} SOL`},image:We.createIcon({transactionType:r.type,primaryImage:s})};default:return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:`-${d} SOL`},image:We.createIcon({transactionType:"unknown"})}}})(e,n,a,o);return i.createElement(_e,Object.assign({},l,{onClick:t}))};ee=l("g7X40"),re=l("eopQk"),x=l("g9lcT"),B=l("dczY0"),ie=l("lPkGw"),ae=l("8FNEt"),z=l("7Lj33"),M=l("fMhDQ");const Xe=k.default(B.Column)`
  align-items: stretch;
  margin-top: -15px;
`,Ge=k.default.div`
  margin-top: 5px;
  margin-bottom: 5px;
`,Je=k.default(ee.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin-top: 105px;
`,qe=k.default(re.LoadingContent)`
  flex: 1;
`,et=(e,t)=>{const n=(e=>e.reduce(((e,t)=>{var n;const a=je.date(1e3*(null!==(n=null==t?void 0:t.blockTime)&&void 0!==n?n:0)).format("YYYY-MM-DD");return(e[a]=e[a]||[]).push(t),e}),{}))(e);return Object.keys(n).sort(((e,t)=>t.localeCompare(e))).map((e=>{const a=je.date(e),o=je.date().diff(a,t("richTransactionsDays"));return{title:o>1?a.format("MMM D, YYYY"):t(o>0?"richTransactionsYesterday":"richTransactionsToday"),data:n[e].sort(((e,t)=>t.blockTime-e.blockTime))}}))},tt=({publicKey:t})=>{const{t:n}=T.useTranslation(),{showTransactionItemModal:a}=x.useModals(),{transactionInfos:o,isLoadingInitial:l}=$.useRichTransactionHistory(t),{pending:r,confirmed:c}=o,s=i.useMemo((()=>{const e=r.map((e=>Object.assign(Object.assign({},e),{blockTime:e.blockTime||je.date().unix()})));return et([...e,...c],n)}),[c,n]);return e(i).createElement(qe,{isLoading:l},e(i).createElement(Xe,null,r.length+c.length!==0&&s?s.map((({title:t,data:n})=>((t,n)=>e(i).createElement(e(i).Fragment,null,e(i).createElement(ee.Text,{size:16,textAlign:"left",weight:500,margin:"15px 0 5px 0",color:"#777777"},t),n.map((t=>e(i).createElement(Ge,{key:t.signature},"detail"in t?e(i).createElement(Ye,{transaction:t,onClick:()=>a(t)}):e(i).createElement(nt,{transaction:t}))))))(t,n))):e(i).createElement(Je,null,n("transactionsNoActivity"))))},nt=({transaction:t})=>{var n;const{t:a}=T.useTranslation(),o=null===(n=M.useFetchConnection())||void 0===n?void 0:n.data,l=null==o?void 0:o.cluster;return e(i).createElement(_e,{image:e(i).createElement(ae.Circle,{diameter:44},e(i).createElement(ie.Spinner,{diameter:28})),topLeft:{label:a("transactionsSending")},bottomLeft:{label:a("transactionsWaitingForConfirmation")},onClick:()=>l?window.open(z.generateTxSolscanUrl(t.signature,l)):null})};ue=l("aADTv"),Ze=l("cweFb"),B=l("dczY0"),i=l("aZikt"),k=l("hHMPk"),i=l("aZikt");ee=l("g7X40");const at=k.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,ot=k.default(ee.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: 500;
`;const lt=(k=l("hHMPk")).keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,it=k.default.div`
  display: flex;
  flex-direction: ${({flexDirection:e})=>e};
  align-items: ${({align:e})=>e};
  justify-content: ${({justify:e})=>e};
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  padding: ${({padding:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  background-color: ${({backgroundColor:e})=>e};
  animation: ${lt} 2s ease-in-out infinite;
`;var rt=function(e,t,n,a){return new(n||(n=Promise))((function(o,l){function i(e){try{c(a.next(e))}catch(e){l(e)}}function r(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}c((a=a.apply(e,t||[])).next())}))};const ct=e(i).memo((t=>{const{mint:n,name:a,symbol:o}=t,l=(()=>{var e,t;const{isRichTransactionsEnabled:n,isSplTokensBackendEnabled:a}=v.useFeatureFlags(),{t:o}=T.useTranslation(),l=o("assetDetailViewOnSolscan"),r=o("assetDetailStakeSOL"),c=o("assetDetailEditTokenMetadata"),s=o("assetDetailUnwrapAll"),u=o("assetDetailRecentActivity"),d=o("assetDetailActionButtonSend"),m=o("assetDetailActionButtonDeposit"),{feeCalculator:p}=q.useBlockchainState(),g=p.lamportsPerSignature,h=M.useFetchConnection(),f=h.data,y=null!==(e=null==f?void 0:f.cluster)&&void 0!==e?e:"mainnet-beta",{customMetaMap:E,customMetaMapQuery:x}=P.useCustomTokenMetaMap(),{accountClient:k}=b.useSelectedAccount(),S=k.publicKey,A=S.toString(),C=k.closeTokenAccountAsync,F=w.useSPLTokenAccountsByStandard(A,y,a),R=F.data,B=null!==(t=null==R?void 0:R.infos)&&void 0!==t?t:new Map,H=w.useFungibles({publicKey:A,cluster:y,isBackendEnabled:a}),L=H.data;return{owner:S,cluster:y,fungies:i.useMemo((()=>L),[L]),tokenInfos:B,isFetching:!h.isFetched||!x.isFetched||!F.isFetched||H.isFetching,lamportsPerSignature:g,closeTokenAccountAsync:C,isRichTransactionsEnabled:n,customMetaMap:E,viewOnSolScanText:l,stakeSolText:r,editTokenMetaText:c,unwrapAllText:s,recentActivityText:u,sendButtonText:d,depositButtonText:m}})(),{isFetching:c,owner:u,cluster:d,customMetaMap:m,tokenInfos:g,lamportsPerSignature:h,isRichTransactionsEnabled:f,closeTokenAccountAsync:y,fungies:E,viewOnSolScanText:k,stakeSolText:S,unwrapAllText:C,editTokenMetaText:F,recentActivityText:R,sendButtonText:B,depositButtonText:H}=l,L=r.useHistory(),{showValidatorListModal:U,hideValidatorListModal:O,showEditTokenModal:K,showSendModal:N,showDepositAssetModal:j}=x.useModals(),W=void 0===n,Z=i.useMemo((()=>E.find((e=>{switch(e.type){case"solana":return W?e:void 0;case"spl-token":return e.data.mintPubKey===n?e:void 0}}))),[n,E,W]),V=i.useMemo((()=>{var e,t;switch(null==Z?void 0:Z.type){case"solana":return;case"spl-token":return{name:null===(e=m.get(Z.data.mintPubKey))||void 0===e?void 0:e.name,symbol:null===(t=m.get(Z.data.mintPubKey))||void 0===t?void 0:t.symbol}}}),[Z,m]),_=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Z?void 0:Z.data.name)&&void 0!==e?e:null==V?void 0:V.name)&&void 0!==t?t:a}),[Z,V]),Y=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Z?void 0:Z.data.symbol)&&void 0!==e?e:null==V?void 0:V.symbol)&&void 0!==t?t:o}),[Z,V]),X=i.useMemo((()=>{if(!Z)return u;switch(null==Z?void 0:Z.type){case"solana":return u;case"spl-token":return new D.PublicKey(null==Z?void 0:Z.data.pubkey)}}),[u,Z]),G=f&&"mainnet-beta"===d,{refreshTransactionHistory:J}=G?$.useRichTransactionHistory(X):Q.useTransactionHistory(X),ee=i.useMemo((()=>Z?G?e(i).createElement(tt,{publicKey:X}):e(i).createElement(Ie,{publicKey:X}):null),[Z,G,X]),te=i.useMemo((()=>{const e=[{label:k,onClick:()=>window.open(z.generateAddressSolscanUrl(X.toString(),d),"_blank")}];if(W&&e.push({label:S,onClick:()=>U({onClose:O})}),"spl-token"===(null==Z?void 0:Z.type)&&Z.data.mintPubKey===I.WRAPPED_SOLANA.address){const t=E.find((e=>"solana"===e.type));t&&+t.data.amount>h&&e.unshift({label:C,onClick:()=>{rt(void 0,void 0,void 0,(function*(){yield y(new D.PublicKey(Z.data.pubkey)),L.push(s.Path.Notifications)}))}})}return"spl-token"!==(null==Z?void 0:Z.type)||g.has(Z.data.mintPubKey)||e.push({label:F,onClick:()=>{p.analytics.capture("selectEditCustomToken"),K({mint:Z.data.mintPubKey,name:_,symbol:Y})}}),e}),[d,k,W,S,E,h,C,y,L,Z,g,a,o,F]);return i.useEffect((()=>{J(X)}),[X]),e(i).createElement(st,{isFetching:c,cluster:d,mint:"spl-token"===(null==Z?void 0:Z.type)?Z.data.mintPubKey:null!=n?n:void 0,name:_,symbol:Y,balance:Z?A.amountToUiAmount(Z.data.amount,Z.data.decimals):0,dollarValue:null==Z?void 0:Z.data.usd,isSolana:W,txPublicKey:X,TransactionsComponent:ee,actionItems:te,recentActivityText:R,sendButtonText:B,depositButtonText:H,shouldUseRichTxs:G,showSendModal:i.useCallback((()=>{Z&&N(Z)}),[Z,N]),showDepositAssetModal:i.useCallback((()=>{j({mint:"spl-token"===(null==Z?void 0:Z.type)?Z.data.mintPubKey:void 0,symbol:o})}),[j])})})),st=e(i).memo((t=>{const{isFetching:n,cluster:a,mint:o,name:l,symbol:r,balance:c,dollarValue:s,isSolana:u,TransactionsComponent:d,actionItems:m,recentActivityText:p,sendButtonText:g,depositButtonText:h,shouldUseRichTxs:f,showSendModal:y,showDepositAssetModal:E}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,{items:m},n?e(i).createElement(e(i).Fragment,null," "):l),e(i).createElement(yt,{balance:c,symbol:r,mint:o,dollarValue:s,isFetching:n,isMainnet:"mainnet-beta"===a,sendButtonText:g,depositButtonText:h,showSendModal:y,showDepositAssetModal:E}),u&&!n&&e(i).createElement(Me,null),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(it,{height:"10px",backgroundColor:"#2D2D2D",borderRadius:"8px",width:"100px",margin:"0 0 15px 0"}),[1,2].map((t=>e(i).createElement(dt,{key:t})))):e(i).createElement(e(i).Fragment,null,!f&&e(i).createElement(ee.Text,{size:16,color:"#777777",textAlign:"left",margin:"0 auto 12px 0",noWrap:!0},null===d?null:p),d))})),ut=k.default(it).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,dt=()=>e(i).createElement(it,{align:"center",width:"100%",height:"64px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(it,{width:"54px",height:"100%",backgroundColor:"#434343",borderRadius:"50%",margin:"0 15px 0 0"}),e(i).createElement(B.Column,null,e(i).createElement(Ze.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(ut,{width:"120px"}),e(i).createElement(ut,{width:"60px"})),e(i).createElement(Ze.Row,{justify:"space-between"},e(i).createElement(ut,{width:"75px"})))),mt=k.default(B.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,pt=k.default((({children:t,className:n,maxFontSize:a})=>{const[o,l]=(()=>{const e=i.useRef(null),[t,n]=i.useState({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:o,fontSizeMin:l,fontSizePrev:r}=t;return i.useEffect((()=>{const t=Math.abs(a-r)<=5,i=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),c=a>r;if(t)return void(i&&n({fontSize:r<a?r:a-(r-a),fontSizeMax:o,fontSizeMin:l,fontSizePrev:r}));let s,u=o,d=l;i?(s=c?r-a:l-a,u=Math.min(o,a)):(s=c?o-a:r-a,d=Math.max(l,a)),n({fontSize:a+s/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,o,l,r,e]),[`${a}%`,e]})();return e(i).createElement(at,{className:n,ref:l,fontSize:a},e(i).createElement(ot,{fontSize:o,noWrap:!0},t))}))`
  margin-bottom: 7px;
`,gt=k.default(ee.Text).attrs({size:16,color:"#777777"})`
  margin-bottom: 20px;
`,ht=k.default(ue.ButtonPair)`
  width: 296px;
`,ft=k.default(it).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,yt=e(i).memo((t=>{const{mint:n,symbol:a,balance:o,dollarValue:l,isFetching:r,isMainnet:c,sendButtonText:s,depositButtonText:u,showSendModal:d,showDepositAssetModal:m}=t,p=n?A.formatAddressShort(n):void 0,g=`${A.formatTokenAmount(o)} ${null!=a?a:p}`;return e(i).createElement(e(i).Fragment,null,e(i).createElement(mt,null,r?e(i).createElement(Et,null):e(i).createElement(e(i).Fragment,null,e(i).createElement(pt,{maxFontSize:38},g),c&&e(i).createElement(gt,null,l?A.formatDollarAmount(l):"–")),e(i).createElement(ht,{primaryTheme:r?"default":"primary",primaryText:s,primaryDisabled:r,onPrimaryClicked:d,secondaryTheme:r?"default":"primary",secondaryText:u,secondaryDisabled:r,onSecondaryClicked:m,buttonPairStyle:ue.ButtonPairStyle.Small})))})),Et=()=>e(i).createElement(it,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(i).createElement(B.Column,null,e(i).createElement(Ze.Row,{justify:"center",margin:"0 auto"},e(i).createElement(ft,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(i).createElement(Ze.Row,{justify:"center",margin:"0 auto"},e(i).createElement(ft,{width:"60px",height:"8px"}))));ue=l("aADTv"),oe=l("hJDxl");var bt=l("jiwMC");Ze=l("cweFb"),ee=l("g7X40");const xt=()=>{const t=(()=>{var t;const{t:n}=T.useTranslation(),a=n("homeManageTokenList"),o=n("homeSend"),l=n("homeDeposit"),r=n("assetDetailUnknownToken"),{showAssetVisibilityModal:c,showSendSelectionModal:u,showDepositSelectionModal:d}=x.useModals(),{pushDetailView:m}=F.useDetailViews(),{isSplTokensBackendEnabled:g}=v.useFeatureFlags(),h=M.useFetchConnection(),f=null==h?void 0:h.data,y=null!==(t=null==f?void 0:f.cluster)&&void 0!==t?t:"mainnet-beta",{accountClient:E}=b.useSelectedAccount(),k=E.publicKey.toString(),{hiddenMints:S,hiddenMintsMapQuery:A}=R.useHiddenMints(k),{customMetaMap:C,customMetaMapQuery:B}=P.useCustomTokenMetaMap(),H=w.useFungibles({publicKey:k,cluster:y,hiddenMints:S,isBackendEnabled:g}),{data:D,isFetching:I}=H,{totalBalance:z,totalBalanceChange:$}=i.useMemo((()=>{let e=0,t=0;for(const n of D)e+=n.data.usd,t+=n.data.usd24hChange;return{totalBalance:e,totalBalanceChange:t}}),[D]),U=!h.isFetched||!A.isFetched||!B.isFetched||I,O=h.isError||A.isError||B.isError||!!H.error,K=i.useCallback((t=>{const{mint:n,name:a,symbol:o}=t;p.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:s.Chain.Solana,isNativeOfType:n?void 0:"sol",address:n,symbol:o,name:a}}),m(e(i).createElement(L.AssetDetail,{mint:n,name:a,symbol:o}),{shouldShowBackButton:!0})}),[m]);return{data:D,isFetching:U,isError:O,isMainnet:"mainnet-beta"===y,totalBalance:z,totalBalanceChange:$,customMetaMap:C,manageTokenListButtonText:a,sendButtonText:o,depositButtonText:l,unknownTokenText:r,showAssetVisibilityModal:c,showSendSelectionModal:u,showDepositSelectionModal:d,onAssetRowClick:K}})();return t.isError?e(i).createElement(St,null):e(i).createElement(vt,Object.assign({},t))},vt=e(i).memo((t=>e(i).createElement(B.Column,{align:"center"},e(i).createElement(It,{balance:t.totalBalance,balanceChange:t.totalBalanceChange,isFetching:t.isFetching,isMainnet:t.isMainnet,sendButtonText:t.sendButtonText,depositButtonText:t.depositButtonText,showSendSelectionModal:t.showSendSelectionModal,showDepositSelectionModal:t.showDepositSelectionModal}),t.isFetching?[1,2,3].map((t=>e(i).createElement(Mt,{key:t}))):e(i).createElement(e(i).Fragment,null,e(i).createElement($t,{data:t.data,customMetaMap:t.customMetaMap,isMainnet:t.isMainnet,unknownTokenText:t.unknownTokenText,onClick:t.onAssetRowClick}),e(i).createElement(Ot,{buttonText:t.manageTokenListButtonText,onClick:t.showAssetVisibilityModal}))))),kt=k.default(B.Column).attrs({align:"center",justify:"center"})`
  height: 100%;
`,Tt=k.default.div`
  width: 94px;
  height: 94px;
  position: relative;
  border-radius: 100%;
  background: rgba(235, 55, 66, 0.1);
`,wt=k.default(Ze.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,St=()=>e(i).createElement(kt,{align:"center",justify:"center"},e(i).createElement(Tt,null,e(i).createElement(wt,null,e(i).createElement(oe.FailureIcon,{width:32}))),e(i).createElement(ee.Text,{size:28,weight:500,margin:"30px 0 10px 0"},"Failed to get assets"),e(i).createElement(ee.Text,{size:16,weight:400,color:"#777",margin:"0 30px"},"There was an error attempting to retrieve your assets. Please refresh and try again.")),At=k.default.div`
  width: 44px;
  height: 44px;
  margin-right: 15px;
`,Ct=k.default(it).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,Mt=()=>e(i).createElement(it,{align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(At,null,e(i).createElement(it,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(i).createElement(B.Column,null,e(i).createElement(Ze.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(Ct,{width:"120px"}),e(i).createElement(Ct,{width:"60px"})),e(i).createElement(Ze.Row,{justify:"space-between"},e(i).createElement(Ct,{width:"75px"}),e(i).createElement(Ct,{width:"35px"})))),Ft=k.default(B.Column).attrs({align:"center"})`
  position: relative;
  width: ${h.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,Pt=k.default(ee.Text).attrs({weight:600,size:38})`
  margin-top: 33px;
  margin-bottom: 18px;
`,Rt=k.default(Ze.Row).attrs({justify:"center"})`
  margin-bottom: 22px;
  min-height: 25px;
`,Bt=k.default(ee.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,Ht=k.default(ee.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,Lt=k.default(ue.ButtonPair)`
  width: 296px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,Dt=k.default(B.Column).attrs({align:"center",padding:"49px 0"})``,It=e(i).memo((t=>{const{balance:n,balanceChange:a,isFetching:o,isMainnet:l,sendButtonText:r,depositButtonText:c,showSendSelectionModal:s,showDepositSelectionModal:u}=t,d=!l||o?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":a>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":a<0?"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)":"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)",m=0===n?"$0.00":A.formatDollarAmount(n),p=0===a?"+$0.00":A.formatDollarAmount(a,!0),g=a>0?"#21E56F":a<0?"#EB3742":"#777777",h=A.formatPercentage(C.calculateDollarChangePercentage(n,a),"0.00%",!0);return e(i).createElement(Ft,{background:d},o?e(i).createElement(Dt,null,e(i).createElement(it,{width:"150px",height:"10px",borderRadius:"6px",backgroundColor:"#4D4D4D",margin:"0 0 10px 0"}),e(i).createElement(it,{width:"75px",height:"10px",borderRadius:"6px",backgroundColor:"#484848"})):l?e(i).createElement(e(i).Fragment,null,e(i).createElement(Pt,null,m),e(i).createElement(Rt,null,e(i).createElement(Bt,{color:g},p),e(i).createElement(Ht,{color:g,backgroundColor:S.hexToRGB(g,.1)},h))):e(i).createElement(Dt,null,e(i).createElement(ee.Text,{size:36,weight:"bold",color:"#777"},"–")),e(i).createElement(Lt,{primaryTheme:"default",primaryText:r,primaryDisabled:o,onPrimaryClicked:s,secondaryText:c,secondaryDisabled:o,onSecondaryClicked:u,buttonPairStyle:ue.ButtonPairStyle.Small}))})),zt=k.default.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,$t=e(i).memo((t=>{const n=i.useCallback((e=>null!=e?e:t.unknownTokenText),[t.unknownTokenText]);return e(i).createElement(e(i).Fragment,null,t.data.map(((a,o)=>{var l,r,c;const s=w.assetKeyExtractor(a,o),u=A.amountToUiAmount(a.data.amount,a.data.decimals);switch(a.type){case"solana":return e(i).createElement(zt,{key:s},e(i).createElement(H.AssetRow,{balance:u,name:a.data.name,symbol:a.data.symbol,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>t.onClick({name:a.data.name,symbol:a.data.symbol})}));case"spl-token":{const o=t.customMetaMap.get(a.data.mintPubKey),d=null!==(r=null!==(l=a.data.symbol)&&void 0!==l?l:null==o?void 0:o.symbol)&&void 0!==r?r:null;return e(i).createElement(zt,{key:s},e(i).createElement(H.AssetRow,{balance:u,mint:a.data.mintPubKey,name:n(null!==(c=a.data.name)&&void 0!==c?c:null==o?void 0:o.name),symbol:d,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>{var e;return t.onClick({mint:a.data.mintPubKey,name:n(null!==(e=a.data.name)&&void 0!==e?e:null==o?void 0:o.name),symbol:d})}}))}}})))})),Ut=k.default(Ze.Row).attrs({justify:"center"})`
  cursor: pointer;
  margin: 0 auto;
  width: auto;
  height: 48px;
  margin-bottom: 18px;
  p {
    font-weight: 500;
  }
  &:hover {
    p {
      color: #8a81f8 !important;
    }
    svg {
      fill: #8a81f8;
      path {
        stroke: #8a81f8;
      }
      circle {
        stroke: #8a81f8;
      }
    }
  }
`,Ot=e(i).memo((t=>e(i).createElement(Ut,{onClick:t.onClick},e(i).createElement(bt.IconWrapper,null,e(i).createElement(oe.TokenListSettingsIcon,null)),e(i).createElement(ee.Text,{size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0},t.buttonText))));var Kt=l("9AO5f");oe=l("hJDxl"),i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu"),b=l("82Ilk"),v=l("ixd3d"),te=l("3rE52"),M=l("fMhDQ");const Nt=k.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,jt=()=>{const{t:t}=T.useTranslation(),{accountClient:n}=b.useSelectedAccount(),{isRichTransactionsEnabled:a}=v.useFeatureFlags(),{data:o}=M.useFetchConnection(),l="mainnet-beta"===(null==o?void 0:o.cluster);return e(i).createElement(Nt,null,e(i).createElement(te.PageHeader,null,t("recentActivityPrimaryText")),a&&l?e(i).createElement(tt,{publicKey:n.publicKey}):e(i).createElement(Ie,{publicKey:n.publicKey}))};i=l("aZikt"),T=l("7Qmuu"),x=l("g9lcT"),w=l("2zUeX"),b=l("82Ilk"),v=l("ixd3d"),M=l("fMhDQ"),i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu");const Wt=(k=l("hHMPk")).default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 15px;
  > * {
    margin: 5px;
  }
`;i=l("aZikt"),k=l("hHMPk"),w=l("2zUeX"),i=l("aZikt"),F=l("6rMcH"),i=l("aZikt"),k=l("hHMPk"),w=l("2zUeX"),ie=l("lPkGw"),i=l("aZikt"),F=l("6rMcH"),i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu"),w=l("2zUeX"),S=l("99Anx");var Zt=l("iJUYi"),Vt=(z=l("7Lj33"),A=l("cFuyE"),x=l("g9lcT"),M=l("fMhDQ"),l("ioKPb"));te=l("3rE52"),ee=l("g7X40"),ue=l("aADTv");const Qt=k.default.div`
  display: flex;
  flex-direction: column;
`,_t=k.default.div`
  > * {
    margin: 10px 0px;
  }
  margin-bottom: 20px;
`,Yt=k.default.div`
  padding: 16px 0px;
`,Xt=k.default.div`
  display: flex;
  flex-wrap: wrap;
`,Gt=k.default.div`
  border-radius: 6px;
  border: 1px solid #333333;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
  max-width: fit-content;
  word-break: break-word;
  align-items: flex-start;
`,Jt=e(i).memo((t=>{var n,a;const{collectible:o}=t,{uri:l,mintPubKey:r,amount:c,decimals:s,name:u}=o,d=A.amountToUiAmount(c,s),{t:m}=T.useTranslation(),p=null!==(n=w.useFetchSPLTokenJSONMetadata(l).data)&&void 0!==n?n:null;let g,h,f,y;p&&(g=null==p?void 0:p.external_url,h=null==p?void 0:p.description,f=null==p?void 0:p.attributes,y=null==p?void 0:p.image);const E=i.useMemo((()=>u&&u.length>0?u:(null==p?void 0:p.name)?null==p?void 0:p.name:o.mintPubKey?o.mintPubKey:void e(i).Fragment),[u,p]),b=w.useSelectBestMedia(p),v=d>1,{showSendModal:k}=x.useModals(),C=null===(a=M.useFetchConnection())||void 0===a?void 0:a.data,F=null==C?void 0:C.cluster,P=Zt.parseURL(g);return e(i).createElement(Qt,null,e(i).createElement(te.PageHeader,{items:[{label:m("collectibleDetailViewOnSolscan"),onClick:()=>F&&window.open(z.generateTokenSolscanUrl(r,F),"_blank")}]},E,v?e(i).createElement("label",{style:{opacity:.5}}," (",Math.floor(d),")"):null),e(i).createElement(Vt.CollectibleDisplay,{width:328,height:328,media:b,image:y,enableCameraControls:!0,enableMedia:!0}),e(i).createElement(Yt,null,e(i).createElement(ue.Button,{theme:"primary",onClick:()=>{const e={type:"spl-token",data:Object.assign(Object.assign({},o),{usd:0,usd24hChange:0})};k(e),(()=>{const e=document.querySelector("audio"),t=document.querySelector("video"),n=null!=e?e:t;(null==n?void 0:n.paused)||null==n||n.pause()})()}},m("collectibleDetailSend"))),e(i).createElement(_t,null,(h||g)&&e(i).createElement(ee.Text,{weight:500,size:16,color:"#777",textAlign:"left"},m("collectibleDetailDescription")),h&&e(i).createElement(ee.Text,{size:14,textAlign:"left",lineHeight:20},h),P&&e(i).createElement(ee.Text,{href:P.href,color:"#8A81F8",hoverColor:S.hexToRGB("#8A81F8",.5),size:14,weight:500,rel:"noopener noreferrer",target:"_blank"},P.host)),e(i).createElement(_t,null,f&&f.length&&e(i).createElement(e(i).Fragment,null,e(i).createElement(ee.Text,{weight:500,size:16,color:"#777",textAlign:"left"},m("collectibleDetailProperties")),e(i).createElement(Xt,null,f.map((t=>e(i).createElement(Gt,{key:t.trait_type},e(i).createElement(ee.Text,{lineHeight:15,weight:500,size:12,color:"#777",textTransform:"uppercase",textAlign:"left"},t.trait_type),e(i).createElement(ee.Text,{lineHeight:17,color:"white",size:14,weight:500,textAlign:"left"},t.value))))))))}));Vt=l("ioKPb");const qt=e(i).memo((t=>{const{collectible:n,media:a,image:o}=t,{pushDetailView:l}=F.useDetailViews(),r=i.useCallback((()=>{l(e(i).createElement(Jt,{collectible:n}),{shouldShowBackButton:!0})}),[n]);return e(i).createElement(Vt.CollectibleDisplay,{onClick:r,media:a,image:o,enableCameraControls:!1})}));te=l("3rE52"),ee=l("g7X40");const en=k.default(ee.StyledText).attrs({as:"span",weight:500})``,tn=k.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,nn=k.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,an=e(i).memo((t=>{const{collectible:n}=t,a=w.useFetchSPLTokenJSONMetadata(n.uri),{isFetched:o}=a,l=a.data||null;let r,c;return l&&(r=null==l?void 0:l.image,c=w.parseMediaFromImage(l)),e(i).createElement(tn,null,o?e(i).createElement(qt,{key:n.mintPubKey,collectible:n,media:c,image:r}):e(i).createElement(nn,null,e(i).createElement(ie.Spinner,null)))})),on=e(i).memo((t=>{const{name:n,collection:a}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,e(i).createElement(en,{textTransform:"capitalize"},n)," ",e(i).createElement(en,{opacity:.5},a.items.length)),e(i).createElement(Wt,null,a.items.map((t=>e(i).createElement(an,{collectible:t})))))}));Vt=l("ioKPb");const ln=e(i).memo((t=>{const{name:n,collection:a,media:o,image:l}=t,{pushDetailView:r}=F.useDetailViews(),c=i.useCallback((()=>r(e(i).createElement(on,{name:n,collection:a}),{shouldShowBackButton:!0})),[n,a,r]);return e(i).createElement(Vt.CollectibleDisplay,{onClick:c,media:o,image:l,enableCameraControls:!1})}));i=l("aZikt"),k=l("hHMPk"),ee=l("g7X40");const rn=k.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  left: 4px;
  bottom: 4px;
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(15px);
  border-radius: 6px;
  padding: 6px 11px;
`,cn=k.default(ee.StyledText).attrs({size:14,lineHeight:17,weight:600,noWrap:!0})``,sn=e(i).memo((t=>{const{name:n,count:a}=t;return e(i).createElement(rn,null,e(i).createElement(cn,{maxWidth:"104px",noWrap:!0,textTransform:"capitalize"},n),e(i).createElement(cn,{opacity:.5,paddingLeft:4},a))}));ie=l("lPkGw");const un=k.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,dn=k.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,mn=e(i).memo((t=>{var n,a;const{collectionKey:o,collection:l}=t,r=l.items[0],c=w.useFetchSPLTokenJSONMetadata(l.uri),{isFetched:s}=c,u=c.data||null;let d;const m=null!==(n=w.useBestCollectionName(u))&&void 0!==n?n:o,p=null!==(a=l.name)&&void 0!==a?a:m;u&&(d=u.image);const g=w.useSelectCollectionMedia(u),h=l.items.length;let f=h.toString();if(1==h){const[e]=l.items;"SemiFungible"===e.standard&&(f=e.amount)}return e(i).createElement(un,null,s?e(i).createElement(e(i).Fragment,null,1===h?e(i).createElement(qt,{key:r.pubkey,collectible:r,media:g,image:d}):e(i).createElement(ln,{key:l.key,name:p,collection:l,media:g,image:d}),e(i).createElement(sn,{name:p,count:f})):e(i).createElement(dn,null,e(i).createElement(ie.Spinner,null)))}));i=l("aZikt");const pn=(k=l("hHMPk")).default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,gn=e(i).memo((t=>{var n;const{collectionKey:a,collection:o}=t,l=o.items[0],r=null!==(n=o.name)&&void 0!==n?n:a,c=o.items.length;let s=c.toString();if(1==c){const[e]=o.items;"SemiFungible"===e.standard&&(s=e.amount)}return e(i).createElement(pn,null,1===c?e(i).createElement(qt,{key:l.pubkey,collectible:l,media:null,image:void 0}):e(i).createElement(ln,{key:o.key,name:r,collection:o,media:null,image:void 0}),e(i).createElement(sn,{name:r,count:s}))})),hn=k.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,fn=e(i).memo((t=>{const{collections:n,hasUnknownTokens:a}=t,{t:o}=T.useTranslation();return n&&n.length?e(i).createElement(Wt,null,n.map(((t,o)=>{let l=e(i).createElement(mn,{key:`${t.name}-${o}`,collectionKey:t.key,collection:t});return o===n.length-1&&a&&0!==t.items.length&&(l=e(i).createElement(gn,{collectionKey:t.key,collection:t})),l}))):e(i).createElement(hn,null,o("collectiblesNoCollectibles"))}));re=l("eopQk"),te=l("3rE52");const yn=()=>{var t;const{t:n}=T.useTranslation(),{showDepositAssetModal:a}=x.useModals(),{isSplTokensBackendEnabled:o}=v.useFeatureFlags(),{accountClient:l}=b.useSelectedAccount(),r=l.publicKey.toString(),c=M.useFetchConnection().data,s=null!==(t=null==c?void 0:c.cluster)&&void 0!==t?t:"mainnet-beta",{data:u=null,isFetched:d}=w.useSPLTokenAccountsByStandard(r,s,o),m=w.useSubscribeSPLTokenCollections(u,r,s),p=i.useMemo((()=>m.filter((e=>e.uri))),[m]),g=i.useMemo((()=>m.filter((e=>!e.uri)).map((e=>{const{items:t}=e;return t})).flat(2)),[m]),h={key:"unknownTokens",name:"Unknown Tokens",uri:"",items:g};return 0===g.length||p.find((e=>"Unknown Tokens"===e.name))||p.push(h),e(i).createElement(re.FullHeightLoadingContent,{isLoading:!d},e(i).createElement(te.PageHeader,{items:[{label:n("collectiblesReceiveCollectible"),onClick:()=>a({symbol:null,mint:void 0})}]},n("collectiblesPrimaryText")),e(i).createElement(fn,{collections:p,hasUnknownTokens:0!==g.length}))};D=l("h6IZU"),i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu"),s=l("lwple"),A=l("cFuyE"),I=l("6oEu9");var En=l("7h7pw"),bn=(Zt=l("iJUYi"),p=l("8C6BZ"),b=l("82Ilk"),F=l("6rMcH"),M=l("fMhDQ"),l("02ZG7")),xn=(x=l("g9lcT"),Re=l("aZo5h"),l("6oQjh")),vn=l("d3kzB"),kn=(ee=l("g7X40"),oe=l("hJDxl"),i=l("aZikt"),k=l("hHMPk"),l("1vmp5"));p=l("8C6BZ"),b=l("82Ilk"),oe=l("hJDxl");const Tn=k.default.input`
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  background: none;
  border: none;
  width: 166px;
  &:focus {
    outline: 0;
  }
`,wn=k.default.div`
  border: 1px solid #323232;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 15px;
  width: 230px;
  position: relative;
`,Sn=k.default.div`
  position: absolute;
  right: 18px;
  top: 18px;
  svg {
    fill: #666;
  }
  :hover {
    cursor: pointer;
    svg {
      fill: white;
    }
  }
`,An=()=>{const{accountMeta:t,setSelectedAccountName:n}=b.useSelectedAccount(),{handleSubmit:a}=kn.useForm(),[o,l]=i.useState(t.name),r=i.createRef();i.useEffect((()=>{l(t.name)}),[t.publicKey]);const c=()=>{0===t.name.length?n(o):(p.analytics.capture("changeAccountName",{data:{name:t.name}}),l(t.name))};return e(i).createElement(wn,null,e(i).createElement("form",{onSubmit:a(c)},e(i).createElement(Tn,{ref:r,maxLength:15,value:t.name,onBlur:c,onChange:e=>{n(e.target.value)}})),e(i).createElement(Sn,{onClick:()=>{var e;n(""),null===(e=r.current)||void 0===e||e.focus()}},e(i).createElement(oe.PencilIcon,{width:18})))};ue=l("aADTv"),te=l("3rE52");const Cn=k.default.div`
  margin-top: 30px;
  margin-bottom: 33px;
  p {
    margin-top: 10px;
  }
`,Mn=k.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${vn.ContentRowContainer} {
    margin-bottom: 10px;
  }
`,Fn=k.default.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  > * {
    margin-top: 10px;
  }
`,Pn=()=>{const{t:t}=T.useTranslation(),{accountClient:n,accountMeta:a}=b.useSelectedAccount(),{accountMetas:o}=b.useAccounts(),{pushDetailView:l}=F.useDetailViews(),{showChangePasswordModal:r,showRemoveAccountModal:c,showResetSeedModal:u,showExportMnemonicModal:d,showExportPrivateKeyModal:m,showChangeLockTimerModal:p}=x.useModals(),g=1===o.length,h=a.type===s.AccountType.Ledger,f=a.type===s.AccountType.PrivateKey,y=n.publicKey.toString();return e(i).createElement(Mn,null,e(i).createElement(Cn,null,e(i).createElement(An,null),e(i).createElement(ee.Text,{size:16,color:"#777777"},"(",A.formatHashMedium(y),")")),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsDisplayLanguage"),secondaryContent:En.languageDisplayValue(T.i18next.language),onClick:()=>{l(e(i).createElement(Un,null),{shouldShowBackButton:!0})}}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsAddressBookPrimary"),secondaryContent:t("settingsAddressBookSecondary"),onClick:()=>{l(e(i).createElement(On,null),{shouldShowBackButton:!0})}}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsTrustedAppsPrimary"),secondaryContent:t("settingsTrustedAppsSecondary"),onClick:()=>{l(e(i).createElement(Ln,null),{shouldShowBackButton:!0})}}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsChangePasswordPrimary"),secondaryContent:t("settingsChangePasswordSecondary"),onClick:r}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsAutoLockTimerPrimary"),secondaryContent:t("settingsAutoLockTimerSecondary"),onClick:p}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsChangeNetworkPrimary"),secondaryContent:t("settingsChangeNetworkSecondary"),onClick:()=>{l(e(i).createElement(Bn,null),{shouldShowBackButton:!0})}}),e(i).createElement(Fn,null,!h&&e(i).createElement(e(i).Fragment,null,e(i).createElement(ue.Button,{disabled:h,onClick:m,title:h?t("settingsErrorCannotExportLedgerPrivateKey"):""},t("settingsExportPrivateKey")),!f&&e(i).createElement(ue.Button,{onClick:d},t("settingsShowSecretRecoveryPhrase"))),e(i).createElement(ue.Button,{disabled:g,theme:"warning",onClick:c,title:g?t("settingsErrorCannotRemoveAllWallets"):""},t("settingsRemoveWallet")),e(i).createElement(ue.Button,{theme:"warning",onClick:u},t("settingsResetSecretRecoveryPhrase"))))},Rn=k.default.div`
  > * {
    margin-top: 10px;
  }
  *:first-child {
    margin-top: 0px;
  }
`,Bn=()=>{var t;const{t:n}=T.useTranslation(),a=null===(t=M.useFetchConnection())||void 0===t?void 0:t.data,o=null==a?void 0:a.mainnetRpcUrl,l=null==a?void 0:a.cluster,{mutateAsync:r}=bn.useStoreStorageValue(s.StorageKeys.Cluster),c=i.useMemo((()=>[{cluster:"mainnet-beta",primaryContent:n("settingsNetworkMainnetBeta"),secondaryContent:o},{cluster:"testnet",primaryContent:n("settingsNetworkTestnet"),secondaryContent:D.clusterApiUrl("testnet")},{cluster:"devnet",primaryContent:n("settingsNetworkDevnet"),secondaryContent:D.clusterApiUrl("devnet")},{cluster:"localhost",primaryContent:n("settingsNetworkLocalhost"),secondaryContent:I.DEFAULT_LOCALHOST_RPC_URL}]),[o]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,n("settingsChangeNetworkPrimary")),e(i).createElement(Rn,null,c.map((t=>e(i).createElement(vn.ContentRow,{key:t.cluster,primaryContent:t.primaryContent,secondaryContent:t.secondaryContent,rightContent:l===t.cluster&&e(i).createElement(oe.CheckmarkIcon,null),onClick:()=>{var e;(e=t.cluster)!==l&&r(e).then((()=>M.refreshConnection()))}})))))},Hn=k.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ln=()=>{var t,n;const{t:a}=T.useTranslation(),{accountClient:o}=b.useSelectedAccount(),[l,r,c]=xn.useStorage(s.StorageKeys.TrustedApplicationsByOwnerBrowser,{});if(r)return null;const u=o.publicKey.toString(),d=null!==(t=l[u])&&void 0!==t?t:{},m=null!==(n=Object.keys(d))&&void 0!==n?n:[],p=m.length>0;return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,a("settingsTrustedAppsPrimary")),p?e(i).createElement(e(i).Fragment,null,e(i).createElement(Rn,null,m.map((t=>{var n;return e(i).createElement(vn.ContentRow,{key:t,primaryContent:null===(n=Zt.parseURL(t))||void 0===n?void 0:n.host,secondaryContent:null,rightContent:e(i).createElement(ue.Button,{fontSize:12,width:"70px",theme:"warning",paddingY:5,onClick:()=>(e=>{const t=Object.assign({},d);delete t[e],c(Object.assign(Object.assign({},l),{[u]:t}))})(t)},a("settingsTrustedAppsRevoke"))})})))):e(i).createElement(Hn,null,a("settingsNoTrustedApps")))},Dn=k.default(ee.Text).attrs({size:16,weight:500,color:"white",textAlign:"left"})`
  margin-top: 30px;
  margin-bottom: 14px;
`,In=k.default(Rn)`
  padding-bottom: 20px;
`,zn=k.default(Rn)`
  padding-left: 0px;
  padding-right: 0px;
`,$n=k.default(ee.Text).attrs({size:16,weight:500,color:"#666666"})`
  font-style: italic;
`,Un=()=>{const{t:t}=T.useTranslation(),[n,a]=i.useState(T.i18next.language);return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,t("settingsDisplayLanguage")),e(i).createElement(In,null,I.SUPPORTED_LANGUAGES.map((t=>e(i).createElement(vn.ContentRow,{key:t.value,primaryContent:t.displayValue,secondaryContent:null,rightContent:En.languageMatches(n,t.value)&&e(i).createElement(oe.CheckmarkIcon,null),onClick:()=>{p.analytics.capture("displayLanguageChanged",{data:{targetLanguage:t.value}}),T.i18next.changeLanguage(t.value),a(t.value)}})))))},On=()=>{const{t:t}=T.useTranslation(),{savedAddresses:n,recentAddresses:a}=Re.useAddressBook(),{showAddAddressModal:o,showEditAddressModal:l}=x.useModals();return i.useEffect((()=>{p.analytics.capture("addressBookOpen")}),[]),e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,{icon:e(i).createElement(oe.PlusIcon,null),onIconClick:()=>o(void 0)},t("settingsAddressBookPrimary")),e(i).createElement(zn,null,n.length>0&&n.map((t=>e(i).createElement(vn.ContentRow,{key:t.address,primaryContent:t.label,secondaryContent:null,rightContent:e(i).createElement(ee.Text,{size:16,color:"#666666"},A.formatHashMedium(t.address,4)),onClick:()=>{l(t)}}))),a.length>0&&e(i).createElement(e(i).Fragment,null,e(i).createElement(Dn,null,t("settingsAddressBookRecentlyUsed")),a.map((n=>e(i).createElement(vn.ContentRow,{key:n,primaryContent:e(i).createElement($n,null,t("settingsAddressBookNoLabel")),secondaryContent:null,rightContent:e(i).createElement(ee.Text,{size:16,color:"#666666"},A.formatHashMedium(n,4)),onClick:()=>{o(n)}}))))),0===n.length&&0===a.length&&e(i).createElement(Hn,null,e(i).createElement(ee.Text,{size:18,weight:500,color:"#666666"},t("settingsNoAddresses"))))};i=l("aZikt"),k=l("hHMPk"),Fe=l("d3pmY");var Kn=l("bXcFZ"),Nn=l("bMYcF");ee=l("g7X40"),oe=l("hJDxl");const jn=k.default(Fe.AnimatePresence)`
  position: relative;
`,Wn=k.default(Fe.motion.div)`
  padding: 8px 16px;
  opacity: 0.9;
  backdrop-filter: blur(2px);
  background-color: ${e=>{switch(e.variant){case Kn.ColorVariant.Primary:return"#4E44CE";case Kn.ColorVariant.Success:return"#21E56F";case Kn.ColorVariant.Warning:return"#EB8D37";case Kn.ColorVariant.Danger:default:return"#EB3742"}}};
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  z-index: 3;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  height: ${41}px;
`;Wn.defaultProps={variant:Kn.ColorVariant.Primary};const Zn=k.default.div`
  svg {
    fill: #fff;
  }
  cursor: pointer;
`,Vn=()=>{const{banner:t,setBanner:n}=Nn.useBanner(),a={initial:{height:0},animate:{height:41},exit:{height:0},transition:{ease:"easeOut",duration:.2}};return t?e(i).createElement(jn,{exitBeforeEnter:!0,initial:!0},e(i).createElement(Wn,Object.assign({variant:t.variant},a),e(i).createElement(ee.Text,{size:16,color:"#FFF",weight:500,opacity:1},t.content),e(i).createElement(Zn,{onClick:()=>n(void 0)},e(i).createElement(oe.CloseIcon,{fill:"#FFF"})))):null};i=l("aZikt"),k=l("hHMPk"),Fe=l("d3pmY"),r=l("gDkTC"),F=l("6rMcH");var Qn,_n=l("eatHE"),Yn=(i=l("aZikt"),k=l("hHMPk"),Fe=l("d3pmY"),/^\s+|\s+$/g),Xn=/^[-+]0x[0-9a-f]+$/i,Gn=/^0b[01]+$/i,Jn=/^0o[0-7]+$/i,qn=parseInt,ea="object"==typeof n&&n&&n.Object===Object&&n,ta="object"==typeof self&&self&&self.Object===Object&&self,na=ea||ta||Function("return this")(),aa=Object.prototype.toString,oa=Math.max,la=Math.min,ia=function(){return na.Date.now()};function ra(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ca(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==aa.call(e)}(e))return NaN;if(ra(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ra(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Yn,"");var n=Gn.test(e);return n||Jn.test(e)?qn(e.slice(2),n?2:8):Xn.test(e)?NaN:+e}Qn=function(e,t,n){var a,o,l,i,r,c,s=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=a,l=o;return a=o=void 0,s=t,i=e.apply(l,n)}function g(e){return s=e,r=setTimeout(f,t),u?p(e):i}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=l}function f(){var e=ia();if(h(e))return y(e);r=setTimeout(f,function(e){var n=t-(e-c);return d?la(n,l-(e-s)):n}(e))}function y(e){return r=void 0,m&&a?p(e):(a=o=void 0,i)}function E(){var e=ia(),n=h(e);if(a=arguments,o=this,c=e,n){if(void 0===r)return g(c);if(d)return r=setTimeout(f,t),p(c)}return void 0===r&&(r=setTimeout(f,t)),i}return t=ca(t)||0,ra(n)&&(u=!!n.leading,l=(d="maxWait"in n)?oa(ca(n.maxWait)||0,t):l,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==r&&clearTimeout(r),s=0,a=c=o=r=void 0},E.flush=function(){return void 0===r?i:y(ia())},E};const sa=k.default(Fe.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8a81f8;
`,ua=({refs:t,activeRoute:n,onFinishedAnimating:a,isAnimating:o})=>{const[{x:l,width:r},c]=i.useState({x:0,width:0}),s=i.useCallback((()=>{t&&t[n]&&t[n].current&&c({x:t[n].current.offsetLeft,width:t[n].current.getBoundingClientRect().width})}),[n,t]);return i.useEffect((()=>{s()}),[n,t,s]),i.useEffect((()=>{const t=e(Qn)((()=>{s()}),500);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}})),e(i).createElement(sa,{animate:{x:l,width:r},style:{opacity:o?1:0},onAnimationComplete:a,transition:{duration:.4,type:"spring"}})},da=k.default.div`
  position: relative;
  height: 60px;
  display: flex;
`,ma=k.default(Fe.motion.div)`
  flex: 1;
  overflow: auto;
  padding: 15px;
`,pa=k.default(_n.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,ga=({items:t})=>{const n=r.useLocation(),[a,o]=i.useState(!1),l=t.find((e=>r.matchPath(n.pathname,{path:`/${e.route}`,exact:!0}))),c=t.reduce(((e,t)=>(e[t.route]=i.createRef(),e)),{}),s=l&&l.route;return e(i).createElement(e(i).Fragment,null,e(i).createElement(Fe.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(r.Switch,{location:n,key:n.pathname},t.map((n=>e(i).createElement(r.Route,{key:n.route,path:`/${n.route}`,render:({history:a})=>{const o=a.entries;let l=0;if(o.length>1){const e=o[o.length-1].pathname,n=o[o.length-2].pathname;l=ha(t,e,n)?10:-10}return e(i).createElement(ma,{initial:{x:l,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.15}},e(i).createElement(F.DetailViewsProvider,null,n.renderContent()))}}))),e(i).createElement(r.Route,{key:"redirection",render:()=>e(i).createElement(Fe.motion.div,{exit:{opacity:0},transition:{duration:.15}},e(i).createElement(r.Redirect,{to:t[0]?t[0].route:"/"}))}))),e(i).createElement(da,null,e(i).createElement(ua,{refs:c,activeRoute:s,onFinishedAnimating:()=>o(!1),isAnimating:a}),e(i).createElement(pa,{role:"tablist","aria-orientation":"horizontal"},t.map((t=>e(i).createElement(Ea,{isActive:s===t.route,key:t.route,item:t,ref:c[t.route],isAnimating:a,startAnimating:()=>o(!0)}))))))},ha=(e,t,n)=>e.findIndex((e=>e.route===fa(t)))>e.findIndex((e=>e.route===fa(n))),fa=e=>"/"===e?e:e.replace(/^\/+/g,""),ya=k.default(r.Link)`
  display: block;
  padding: 15px 0px;
  margin: 0px 12px;
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: white;
    svg {
      fill: white;
    }
  }
  :after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    height: 2px;
    width: 100%;
    ${e=>e.$isActive&&!e.$isAnimating&&"background-color: #8A81F8;"}
    ${e=>e.$isAnimating&&"background-color: transparent;"}
  }
  svg {
    fill: #666;
    transition: fill 200ms ease;
    ${e=>e.$isActive&&"fill: white;"}
  }
`,Ea=i.forwardRef((({isActive:t,item:n,isAnimating:a,startAnimating:o},l)=>e(i).createElement(ya,{$isActive:t,$isAnimating:a,to:n.route,ref:l,onClick:o},n.renderButton())));i=l("aZikt"),k=l("hHMPk"),T=l("7Qmuu");var ba=l("2hEfq"),xa=(x=l("g9lcT"),re=l("eopQk"),l("f2RwE"));const va=k.default.div`
  height: 100%;
  padding-bottom: 12px;
`,ka=()=>{const{isLoadingAssets:t,fromAsset:n,toAsset:a,fromAssetsList:o,toAssetsList:l,fromAmount:r,price:c,slippage:s,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,setFromAsset:g,setToAsset:h,setFromAmount:f,setSlippage:y,setIsRefreshing:E,error:b}=ba.useSwapQuote(),{t:v}=T.useTranslation(),{showSwapReviewModal:k}=x.useModals(),w=i.useMemo((()=>e(Qn)(f,500)),[f]);i.useEffect((()=>(E(!0),()=>{E(!1)})),[]);return i.useEffect((()=>()=>{f(void 0)}),[]),e(i).createElement(re.FullHeightLoadingContent,{isLoading:t},e(i).createElement(va,null,e(i).createElement(xa.Swapper,{initialFromAssetAmount:r,price:c,slippage:s,fromAsset:n,toAsset:a,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,onFromAssetSelect:g,onToAssetSelect:h,onFromAssetAmountChange:e=>{e?w(e):(w.cancel(),f(e))},onConvertClick:e=>{f(e),k()},onArrowClick:()=>{g(a),h(n)},onSlippageUpdate:y,fromAssetsList:o,toAssetsList:l,topInputLabel:v("swapFlowYouPay"),bottomInputLabel:v("swapFlowYouReceive"),convertButtonLabel:v("swapFlowActionButtonText"),buttonTheme:"primary",isBottomInputDisabled:!0,arrowStyle:xa.SwapperArrowStyle.Double,errorMessage:null==b?void 0:b.message})))};var Ta=l("cqRHn");const wa=()=>{const{value:t}=E.useAsync((()=>Ta.shouldRenderWhatsNewOverlay())),[n,a]=i.useState(!1);return i.useEffect((()=>{t&&a(!0)}),[t]),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(Kt.AccountHeader,null),e(i).createElement(Ta.WhatsNewOverlay,{onClose:()=>{Ta.acknowledgeWhatsNewOverlay(),a(!1)}})):e(i).createElement(e(i).Fragment,null,e(i).createElement(Kt.AccountHeader,null),e(i).createElement(Vn,null),e(i).createElement(Sa,null),e(i).createElement("div",{id:h.MODAL_ID}))},Sa=()=>{const{accountClient:t}=b.useSelectedAccount(),{isSwapperEnabled:n}=v.useFeatureFlags(),a=r.useHistory(),{closeAllModals:o}=x.useModals(),{areCollectiblesEnabled:l}=v.useFeatureFlags();i.useEffect((()=>{o(),a.push(s.Path.Wallet)}),[t.publicKey.toString()]);const c=[{route:s.Path.Wallet,renderButton:()=>e(i).createElement(oe.WalletIcon,null),renderContent:()=>e(i).createElement(xt,null)},l?{route:s.Path.Collectibles,renderButton:()=>e(i).createElement(oe.CollectiblesIcon,{width:22}),renderContent:()=>e(i).createElement(yn,null)}:null,n?{route:s.Path.Swap,renderButton:()=>e(i).createElement(oe.DoubleArrowsIcon,{width:24,height:24}),renderContent:()=>e(i).createElement(ka,null)}:null,{route:s.Path.Notifications,renderButton:()=>e(i).createElement(oe.NotificationsIcon,null),renderContent:()=>e(i).createElement(jt,null)},{route:s.Path.Settings,renderButton:()=>e(i).createElement(oe.SettingsIcon,null),renderContent:()=>e(i).createElement(Pn,null)}].filter((e=>null!==e));return e(i).createElement(ga,{items:c})};var Aa=l("jSC0s"),Ca=l("eduP0");i=l("aZikt"),v=l("ixd3d"),M=l("fMhDQ");const Ma=({children:t})=>{const{isRichTransactionsEnabled:n}=v.useFeatureFlags(),{data:a}=M.useFetchConnection(),o="mainnet-beta"===(null==a?void 0:a.cluster),l=n&&o?$.RichTransactionHistoryProvider:Q.TransactionHistoryProvider;return e(i).createElement(l,null,t)};b=l("82Ilk");var Fa=l("49Dkb"),Pa=(x=l("g9lcT"),q=l("j2x34"),l("5DQqc")),Ra=(Re=l("aZo5h"),v=l("ixd3d"),l("eeuNW"));O=l("9ZliH"),Nn=l("bMYcF"),ba=l("2hEfq"),U=l("h5G75");d.initSentry();const Ba=()=>{i.useEffect((()=>{u.setStorageValue(s.StorageKeys.PopupHasBeenSeen,!0)}),[]);const t=i.useCallback((t=>e(i).createElement(x.ModalsProvider,null,e(i).createElement(Ra.WalletMenuProvider,null,e(i).createElement(Aa.Unlock,{unlockSeedAndMnemonic:t})))),[]),n=i.useCallback((()=>{g.openTabAsync({url:"onboarding.html"}),window.close()}),[]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(m.ThemedGlobalStyle,{backgroundColor:"#222222"}),e(i).createElement(f.PopupAndNotificationErrorBoundary,null,e(i).createElement(y.Main,{withBorder:!0},e(i).createElement(r.MemoryRouter,null,e(i).createElement(Nn.BannerProvider,null,e(i).createElement(U.QueryProvider,null,e(i).createElement(v.FeatureFlagsProvider,null,e(i).createElement(Fa.BrowserProvider,null,e(i).createElement(Ca.SeedProvider,{renderLocked:t,openOnboarding:n},e(i).createElement(O.TransactionsProvider,null,e(i).createElement(Pa.HardwareWalletProvider,null,e(i).createElement(b.AccountsProvider,null,e(i).createElement(Re.AddressBookProvider,null,e(i).createElement(q.BlockchainProvider,null,e(i).createElement(ba.SwapQuoteProvider,null,e(i).createElement(Ma,null,e(i).createElement(x.ModalsProvider,null,e(i).createElement(Ra.WalletMenuProvider,null,e(i).createElement(wa,null))))))))))))))),e(i).createElement("div",{id:h.MODAL_ID})))))};c.render(e(i).createElement(Ba,null),document.getElementById("root")),p.analytics.capture("popupOpen");define=__define;})(window.define);