(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},o=n.parcelRequirea886;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},n.parcelRequirea886=o);var i=o("aZikt"),r=o("gDkTC"),s=o("ihAua");o("6CHoY");var c=o("lwple"),u=o("czDD7"),d=o("ci2Mj"),m=o("5cKs6"),p=o("8C6BZ"),g=o("iyOkC"),h=o("4yWCU"),f=o("i2Zy4"),E=o("6mzlH"),y=(i=o("aZikt"),r=o("gDkTC"),o("lxqKj")),b=(c=o("lwple"),o("4o0lv")),x=o("7Qmuu"),v=(o("4yWCU"),o("82Ilk")),k=o("g9lcT"),w=o("ixd3d"),T=(i=o("aZikt"),o("hHMPk")),S=(x=o("7Qmuu"),c=o("lwple"),o("2zUeX")),A=o("99Anx"),C=o("cFuyE"),M=o("1yeHx"),F=o("fMhDQ"),P=(v=o("82Ilk"),w=o("ixd3d"),k=o("g9lcT"),o("6rMcH")),B=(o("4yWCU"),p=o("8C6BZ"),o("delKv")),R=o("k95B3"),H=o("dczY0"),D=o("gtUQU"),L={};t(L,"AssetDetail",(function(){return st}),(function(e){return st=e}));i=o("aZikt"),r=o("gDkTC");var I=o("h6IZU"),z=(T=o("hHMPk"),x=o("7Qmuu"),o("6oEu9")),$=(c=o("lwple"),o("7Lj33")),U=(S=o("2zUeX"),C=o("cFuyE"),p=o("8C6BZ"),F=o("fMhDQ"),k=o("g9lcT"),{});t(U,"RichTransactionHistoryProvider",(function(){return Q}),(function(e){return Q=e})),t(U,"useRichTransactionHistory",(function(){return V}),(function(e){return V=e}));i=o("aZikt");var O=o("h5G75"),K=(z=o("6oEu9"),o("9ZliH")),N=o("ehJ6P"),j=(v=o("82Ilk"),o("dlVlr")),W=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const Z=i.createContext({transactionHistory:{},refreshTransactionHistory:z.NOOP}),Q=({children:t})=>{const[n,a]=i.useState({}),{accountClient:l}=v.useSelectedAccount(),[o,r]=i.useState(l.publicKey),[s]=e(i).useState(z.TX_HISTORY_REFRESH_INTERVAL_MS),c=o&&o!==l.publicKey?l.publicKey:void 0,{data:u,error:d}=O.useQuery({enabled:!0,queryKey:["rich-transaction-history-api",o,c],refetchInterval:s,queryFn:()=>W(void 0,void 0,void 0,(function*(){const{results:e}=yield j.getRichTransactionHistory({publicKey:o.toString(),observer:null==c?void 0:c.toString()});return e}))});return i.useEffect((()=>{const e=N.default(n,(e=>{e[o.toString()]=d?[]:u}));a(e)}),[u,d]),i.useEffect((()=>{r(l.publicKey)}),[l.publicKey.toString()]),e(i).createElement(Z.Provider,{value:{transactionHistory:n,refreshTransactionHistory:e=>r(e)}},t)},V=e=>{var t;const n=i.useContext(Z);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=v.useSelectedAccount(),l=K.usePendingTransactions(a.publicKey),o=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:i.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return{confirmed:o,pending:[]};const t=[],n=o.map((e=>e.signature));for(const e of l)n.includes(e.signature)||t.push(e);return{pending:t,confirmed:o}}),[o,a,l]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};var _={};t(_,"TransactionHistoryProvider",(function(){return X}),(function(e){return X=e})),t(_,"useTransactionHistory",(function(){return q}),(function(e){return q=e}));N=o("ehJ6P"),i=o("aZikt"),z=o("6oEu9"),K=o("9ZliH"),b=o("4o0lv"),v=o("82Ilk");var G=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const Y=i.createContext({transactionHistory:{},refreshTransactionHistory:z.NOOP}),X=({children:t})=>{const[n]=b.useIncrementingNonce(z.TX_HISTORY_REFRESH_INTERVAL_MS),[a,l]=i.useState({}),{accountClient:o}=v.useSelectedAccount(),[r,s]=i.useState(o.publicKey),c=e=>G(void 0,void 0,void 0,(function*(){a[e.toString()]?(e=>{G(void 0,void 0,void 0,(function*(){var t;const n=null!==(t=a[e.toString()])&&void 0!==t?t:[];let i;if(n.length>0){const{signature:e}=n[0];i=e}const r=yield o.getTransactionHistoryAsync(e,{until:i,limit:z.TX_HISTORY_PAGINATION_COUNT}),s=N.default(a,(t=>{t[e.toString()]=[...r,...t[e.toString()]]}));l(s)}))})(e):(e=>{G(void 0,void 0,void 0,(function*(){const t=yield o.getTransactionHistoryAsync(e,{limit:z.TX_HISTORY_PAGINATION_COUNT}),n=N.default(a,(n=>{n[e.toString()]=t}));l(n)}))})(e),s(e)}));return i.useEffect((()=>{0!==n&&c(r)}),[n]),i.useEffect((()=>{s(o.publicKey),c(o.publicKey)}),[o.publicKey.toString()]),e(i).createElement(Y.Provider,{value:{transactionHistory:a,refreshTransactionHistory:c}},t)},q=e=>{var t;const n=i.useContext(Y);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=v.useSelectedAccount(),l=K.usePendingTransactions(a.publicKey),o=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:i.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return o;const t=[],n=o.map((e=>e.signature));for(const e of l)n.includes(e.signature)||t.push(e);return[...t,...o]}),[o,a,l]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};v=o("82Ilk");var J=o("j2x34"),ee=(w=o("ixd3d"),B=o("delKv"),o("g7X40")),te=o("3rE52"),ne=(i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu"),A=o("99Anx"),P=o("6rMcH"),k=o("g9lcT"),o("u1MBs")),ae=o("8FNEt"),le=o("hJDxl"),oe=o("2MtnF"),ie=o("lPkGw"),re=(i=o("aZikt"),x=o("7Qmuu"),k=o("g9lcT"),ne=o("u1MBs"),te=o("3rE52"),le=o("hJDxl"),o("eopQk")),se=(i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu"),C=o("cFuyE"),c=o("lwple"),k=o("g9lcT"),ne=o("u1MBs"),ee=o("g7X40"),o("76Idz")),ce=o("gkUV0"),ue=o("aADTv");oe=o("2MtnF"),re=o("eopQk"),p=o("8C6BZ");const de=()=>{var t;i.useEffect((()=>(p.analytics.capture("showStakeAccountList"),()=>p.analytics.capture("hideStakeAccountList"))),[]);const n=ne.useFetchStakeAccounts({refetchOnMount:"always"}),a=null!==(t=n.data)&&void 0!==t?t:[];return e(i).createElement(re.FullHeightLoadingContent,{isLoading:!n.isFetched},n.isError?e(i).createElement(me,{message:n.error.message,onRefetch:()=>{n.isFetching||n.refetch()}}):e(i).createElement(pe,{data:a}),e(i).createElement("br",null))},me=t=>{const{t:n}=x.useTranslation();return e(i).createElement(e(i).Fragment,null,e(i).createElement(ee.Text,{size:16,color:"red"},n("stakeAccountListErrorFetching"),": ",t.message),e(i).createElement(ue.Button,{onClick:t.onRefetch},n("stakeAccountListReload")))},pe=t=>{const{t:n}=x.useTranslation(),a=ke(),l=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),o=l.filter((e=>e.type===c.StakeAccountType.Delegated)),r=l.filter((e=>e.type===c.StakeAccountType.Initialized));return o.length||r.length?e(i).createElement(e(i).Fragment,null,o.length>0&&e(i).createElement(e(i).Fragment,null,o.map((t=>{var n,l;const{stake:o,voter:r}=t.info.stake.delegation,s=a.get(r),c=null===(n=null==s?void 0:s.info)||void 0===n?void 0:n.name,u=null===(l=null==s?void 0:s.info)||void 0===l?void 0:l.keybaseUsername;return e(i).createElement(xe,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,delegatedStake:Number(o),inflationReward:t.inflationReward,voteAccountPubkey:r,name:c,keybaseUsername:u})}))),r.length>0&&e(i).createElement(e(i).Fragment,null,r.map((t=>e(i).createElement(ve,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,inflationReward:t.inflationReward}))))):e(i).createElement(ge,null,e(i).createElement(ee.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},ge=T.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,he=T.default(se.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,fe=T.default(ce.TokenImage).attrs({width:44})``,Ee=T.default.div`
  overflow: hidden;
`,ye=T.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,be=T.default(ee.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,xe=t=>{var n,a;const{t:l}=x.useTranslation(),{showStakeAccountModal:o}=k.useModals(),{data:r}=ne.useFetchKeybaseUserAvatar(t.keybaseUsername),s=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:C.formatHashMedium(t.voteAccountPubkey),c=ne.useFetchStakeActivationData(t.pubkey).data,u=t.inflationReward&&t.inflationReward>0;return e(i).createElement(he,{onClick:()=>{o({stakeAccountPubkey:t.pubkey})}},e(i).createElement(fe,{iconUrl:r}),e(i).createElement(Ee,null,e(i).createElement(ye,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},s),e(i).createElement(ee.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(oe.SolBalance,null,t.delegatedStake))),e(i).createElement(ye,null,e(i).createElement(be,{size:14,activationState:null==c?void 0:c.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==c?void 0:c.state)?l("stakeAccountListActivationActivating"):"","active"===(null==c?void 0:c.state)?l("stakeAccountListActivationActive"):"","inactive"===(null==c?void 0:c.state)?l("stakeAccountListActivationInactive"):"","deactivating"===(null==c?void 0:c.state)?l("stakeAccountListActivationDeactivating"):""),e(i).createElement(ee.Text,{size:14,color:""+(u?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},u?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(oe.SolBalance,null,t.inflationReward)):"-"))))},ve=t=>{const{t:n}=x.useTranslation(),{showStakeAccountModal:a}=k.useModals(),l=ne.useFetchStakeActivationData(t.pubkey).data,o=t.inflationReward&&t.inflationReward>0;return e(i).createElement(he,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(i).createElement(fe,null),e(i).createElement(Ee,null,e(i).createElement(ye,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(i).createElement(ee.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(oe.SolBalance,null,t.balance))),e(i).createElement(ye,null,e(i).createElement(be,{size:14,activationState:null==l?void 0:l.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==l?void 0:l.state)?n("stakeAccountListActivationActivating"):"","active"===(null==l?void 0:l.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==l?void 0:l.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==l?void 0:l.state)?n("stakeAccountListActivationDeactivating"):""),e(i).createElement(ee.Text,{size:14,color:""+(o?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},o&&"+",e(i).createElement(oe.SolBalance,null,t.inflationReward)))))},ke=()=>{var e;const t=ne.useFetchValidators(),n=null!==(e=t.data)&&void 0!==e?e:[],a=i.useRef(n);a.current=n;return i.useMemo((()=>new Map(a.current.map((e=>[e.voteAccountPubkey,e])))),[t.dataUpdatedAt,a])},we=()=>{const{t:t}=x.useTranslation(),{showValidatorListModal:n,hideValidatorListModal:a}=k.useModals(),l=!ne.useFetchStakeAccounts().isFetched;return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,{items:[{label:t("stakeAccountListViewStakeSOL"),onClick:()=>{n({onClose:a})}}],icon:e(i).createElement(le.PlusIcon,null)},t("stakeAccountListViewPrimaryText")),e(i).createElement(re.FullHeightLoadingContent,{isLoading:l},e(i).createElement(de,null)))};se=o("76Idz"),ee=o("g7X40");const Te=T.default(se.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,Se=T.default.div`
  overflow: hidden;
`,Ae=T.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,Ce=T.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,Me=()=>{var t;const{t:n}=x.useTranslation(),{pushDetailView:a}=P.useDetailViews(),{showValidatorListModal:l,hideValidatorListModal:o}=k.useModals(),r=ne.useFetchStakeAccounts(),{isFetching:s,isError:c}=r,u=null!==(t=r.data)&&void 0!==t?t:[],d=u.reduce(((e,t)=>e+t.lamports),0),m=u.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),p=u.length;return e(i).createElement(Te,{isDisabled:s||c,onClick:()=>{s||c||(p>0?a(e(i).createElement(we,null),{shouldShowBackButton:!0}):l({onClose:o}))}},c?e(i).createElement(ae.Circle,{diameter:44,color:A.hexToRGB("#EB3742",.1)},e(i).createElement(le.FailureIcon,null)):s?e(i).createElement(ae.Circle,{diameter:44,color:A.hexToRGB("#8A81F8",.2)},e(i).createElement(ie.Spinner,{diameter:28})):e(i).createElement(ae.Circle,{diameter:44,color:"#3F3D29"},e(i).createElement(le.StarIcon,null)),e(i).createElement(Se,null,c?e(i).createElement(Ae,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(i).createElement(ee.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):s?e(i).createElement(Ae,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(i).createElement(ee.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):p?e(i).createElement(e(i).Fragment,null,e(i).createElement(Ce,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(i).createElement(ee.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(i).createElement(oe.SolBalance,null,d))),e(i).createElement(Ce,null,e(i).createElement(ee.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},p," ",1===p?"account":"accounts"),e(i).createElement(ee.Text,{size:14,color:""+(m>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},m>0?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(oe.SolBalance,null,m)):"–"))):e(i).createElement(Ae,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(i).createElement(ee.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))};i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu");var Fe=o("d3pmY"),Pe=(A=o("99Anx"),C=o("cFuyE"),o("HEK4k")),Be=($=o("7Lj33"),J=o("j2x34"),v=o("82Ilk"),o("aZo5h")),Re=o("lzptm");F=o("fMhDQ"),le=o("hJDxl"),ae=o("8FNEt"),re=o("eopQk"),ee=o("g7X40"),ie=o("lPkGw");const He=T.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,De=T.default(ee.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin-top: 105px;
`,Le=T.default(re.LoadingContent)`
  flex: 1;
`,Ie=({className:t,publicKey:n})=>{var a;const{t:l}=x.useTranslation(),{transactionInfos:o,isLoadingInitial:r}=_.useTransactionHistory(n),s=null===(a=F.useFetchConnection())||void 0===a?void 0:a.data,c=null==s?void 0:s.cluster;return e(i).createElement(Le,{isLoading:r},e(i).createElement(He,{className:t},0!==o.length?o.map((t=>e(i).createElement(Ne,{key:t.signature,cluster:c,transactionInfo:t}))):e(i).createElement(De,null,l("transactionsNoActivity"))))},ze=T.default.div`
  display: flex;
  justify-content: space-between;
`,$e=T.default.div`
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
`,Ue=T.default(Fe.motion.div)`
  display: flex;
  align-items: center;
`,Oe=T.default.div`
  width: 100%;
  margin-left: 10px;
  > * {
    margin-top: 2px;
  }
`,Ke=T.default.div`
  padding-top: 3px;
  padding-left: 3px;
`,Ne=({cluster:t,transactionInfo:n})=>{var a,l,o,r,s;const{t:c}=x.useTranslation(),{latestBlockTimestamp:u}=J.useBlockchainState(),{accountClient:d}=v.useSelectedAccount(),{getExistingAccountMeta:m}=v.useAccounts(),{getSavedAddressLabel:p}=Be.useAddressBook(),g=Re.useFetchAssetsWithAccount().data,h=i.useMemo(Date.now,[]),f=h-(null!=u?u:h),E=n.blockTime?Math.min(h,1e3*n.blockTime+f):void 0,{err:y,isLoading:b,isOptimistic:k,transaction:w,signature:T}=n;let S=A.hexToRGB("#3CC852",.1),M=e(i).createElement(le.CheckmarkIcon,{fill:"#27D843"}),F=C.formatHashMedium(T),P=c("transactionsSuccess");if(b||k)S=A.hexToRGB("#8A81F8",.2),F=c("transactionsSending"),P=c("transactionsWaitingForConfirmation"),M=e(i).createElement(ie.Spinner,{diameter:28});else if(y)S=A.hexToRGB("#E72C2C",.1),M=e(i).createElement(le.FailureIcon,null),P=c("transactionsError");else if(w){const t=Pe.classifyParsedTransaction(w,d.publicKey,g);if(t===Pe.ParsedTransactionType.ReceivedSol){const t=Pe.getSolTransferInstructions(w)[0],n=t.parsed.info.source,a=C.lamportsToSolana(t.parsed.info.lamports);F=c("transactionsReceivedInterpolated",{amount:C.formatTokenAmount(a)}),S=A.hexToRGB("#4E44CE",.2),M=e(i).createElement(le.ReceiveIcon,{fill:"#968DFF"}),P=`${c("transactionsFrom")}: ${C.formatAddress(n,m(n),p(n))}`}else if(t===Pe.ParsedTransactionType.SentSol){const t=Pe.getSolTransferInstructions(w)[0],n=t.parsed.info.destination,a=C.lamportsToSolana(t.parsed.info.lamports);F=c("transactionsSentInterpolated",{amount:C.formatTokenAmount(a)}),S=A.hexToRGB("#37AAEB",.1),M=e(i).createElement(Ke,null,e(i).createElement(le.SendIcon,{width:24,fill:"#6BCEFF"})),P=`${c("transactionsTo")}: ${C.formatAddress(n,m(n),p(n))}`}else if(g&&[Pe.ParsedTransactionType.SentSplFungible,Pe.ParsedTransactionType.SentSplCollectible,Pe.ParsedTransactionType.ReceivedSplFungible,Pe.ParsedTransactionType.ReceivedSplCollectible].includes(t)){const n=Pe.getSplTransferInstructions(w)[0],{source:u,destination:d}=n.parsed.info,m=g.find((e=>u===e.account.toString())),p=g.find((e=>d===e.account.toString()));let h=null===(o=null===(l=null===(a=n.parsed)||void 0===a?void 0:a.info)||void 0===l?void 0:l.tokenAmount)||void 0===o?void 0:o.uiAmount;(null==m?void 0:m.symbol)||(null==m?void 0:m.name)?(h=null!=h?h:C.amountToUiAmount(n.parsed.info.amount,m.decimals),M=e(i).createElement(Ke,null,e(i).createElement(le.SendIcon,{width:24,fill:"#6BCEFF"})),S=A.hexToRGB("#37AAEB",.1),P="",t===Pe.ParsedTransactionType.SentSplFungible?F=`${c("transactionsSent")} ${C.formatTokenAmount(h)} ${m.symbol}`:t===Pe.ParsedTransactionType.SentSplCollectible&&(F=`${c("transactionsSent")} ${null!==(r=m.name)&&void 0!==r?r:m.symbol}`)):((null==p?void 0:p.symbol)||(null==p?void 0:p.name))&&(h=null!=h?h:C.amountToUiAmount(n.parsed.info.amount,p.decimals),S=A.hexToRGB("#4E44CE",.2),M=e(i).createElement(le.ReceiveIcon,{fill:"#968DFF"}),P="",t===Pe.ParsedTransactionType.ReceivedSplFungible?F=`${c("transactionsReceived")} ${C.formatTokenAmount(h)} ${p.symbol}`:t===Pe.ParsedTransactionType.ReceivedSplCollectible&&(F=`${c("transactionsReceived")} ${null!==(s=p.name)&&void 0!==s?s:p.symbol}`))}}return e(i).createElement($e,{onClick:()=>{t&&window.open($.generateTxSolscanUrl(T,t))}},e(i).createElement(Fe.AnimatePresence,{exitBeforeEnter:!0,initial:!1},e(i).createElement(Ue,{key:F+T,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},e(i).createElement(ae.Circle,{diameter:44,color:S},M),e(i).createElement(Oe,null,e(i).createElement(ze,null,e(i).createElement(ee.Text,{size:16,weight:600,lineHeight:19,noWrap:!0},F),e(i).createElement(ee.Text,{size:14,color:"#777777",lineHeight:17},E?C.formatTimestampFromNow(E):"")),e(i).createElement(ze,null,e(i).createElement(ee.Text,{size:14,color:"#777777",lineHeight:17,textAlign:"left",noWrap:!0,maxWidth:"200px"},P))))))};i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu");var je=o("iqlzl"),We=(i=o("aZikt"),T=o("hHMPk"),o("iSBgX")),Ze=(C=o("cFuyE"),ee=o("g7X40"),x=o("7Qmuu"),o("cweFb"));H=o("dczY0"),h=o("4yWCU"),Be=o("aZo5h"),v=o("82Ilk");const Qe=T.default(Ze.Row)`
  border-radius: 6px;
  background-color: #2a2a2a;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,Ve=T.default(Ze.Row)`
  margin-left: 10px;
  margin-right: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`,_e=e=>{const{topLeft:t,topRight:n,bottomLeft:a,bottomRight:l,image:o,onClick:r}=e;return i.createElement(Qe,{onClick:r},i.createElement(Ve,null,o,i.createElement(H.Column,{width:.69*h.PHANTOM_WIDTH+"px",margin:"0 0 0 10px"},i.createElement(Ze.Row,{justify:"space-between"},i.createElement(ee.Text,{size:16,weight:600,color:null==t?void 0:t.color,margin:"0",noWrap:!0,maxWidth:"80%",lineHeight:21},(null==t?void 0:t.label)||""),i.createElement(ee.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==n?void 0:n.color)||"#777777",lineHeight:21},(null==n?void 0:n.label)||"")),i.createElement(Ze.Row,{justify:"space-between"},i.createElement(ee.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==a?void 0:a.color)||"#777777",lineHeight:21},(null==a?void 0:a.label)||""),i.createElement(ee.Text,{weight:500,size:14,color:null==l?void 0:l.color,margin:"0",noWrap:!0,lineHeight:21},(null==l?void 0:l.label)||"")))))},Ge=({transaction:e,onClick:t})=>{const{t:n}=x.useTranslation(),{getSavedAddressLabel:a}=Be.useAddressBook(),{getExistingAccountMeta:l}=v.useAccounts(),o=((e,t,n,a)=>{const{err:l,detail:o,dapp:i}=e,{data:r,feePayer:s}=o,{imageUrl:c,name:u}=null!=i?i:{};if(l)return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:t("transactionsFailed")},bottomLeft:{label:u},image:We.createIcon({transactionType:r.type,transactionState:"error"})};const d=C.lamportsToSolana(s.amountLamports);switch(r.type){case"swap":{const{sendAsset:e,receiveAsset:n}=r,a=C.formatAddressShort(e.mint||""),l=C.formatAddressShort(n.mint||"");return{topLeft:{label:(null==i?void 0:i.name)?t("transactionsSwapOn",{dappName:i.name}):t("transactionsTokenSwap")},topRight:{label:`+${C.formatTokenAmount(r.receiveUiAmount)} ${n.symbol||l}`,color:"#21E56F"},bottomLeft:{label:`${e.symbol||a} → ${n.symbol||l}`},bottomRight:{label:`-${C.formatTokenAmount(r.sendUiAmount)} ${e.symbol||a}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl,secondaryImage:n.imageUrl})}}case"send":{const{asset:e}=r,l=C.formatAddressShort(e.mint||""),o=C.formatAddress(r.to,a(r.to),n(r.to));return{topLeft:{label:`${t("transactionsSent")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`-${C.formatTokenAmount(r.uiAmount)} ${e.symbol||l}`,color:"#FFFFFF"},bottomLeft:{label:`${t("transactionsTo")}: ${o}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"receive":{const{asset:e}=r,l=C.formatAddressShort(e.mint||""),o=C.formatAddress(r.from,a(r.from),n(r.from));return{topLeft:{label:`${t("transactionsReceived")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`+${C.formatTokenAmount(r.uiAmount)} ${e.symbol||l}`,color:"#21E56F"},bottomLeft:{label:`${t("transactionsFrom")}: ${o}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"stake":{const{uiAmount:e,stakeAccount:n,validatorName:a}=r;return{topLeft:{label:t("transactionsStaked")},topRight:{label:`-${C.formatTokenAmount(e)} SOL`},bottomLeft:{label:a||C.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"withdrawStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsWithdrawStake")},topRight:{label:`+${C.formatTokenAmount(e)} SOL`,color:"#21E56F"},bottomLeft:{label:C.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"deactivateStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsUnstaked")},topRight:{label:`${C.formatTokenAmount(e)} SOL`},bottomLeft:{label:C.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"listItem":case"cancelListing":case"bidItem":case"cancelBid":case"buyItem":case"sellItem":{const e=`${C.formatTokenAmount(r.forUiAmount)} ${r.forAsset.symbol||""}`,n=r.item.name||t("richTransactionDetailUnknownNFT"),a={listItem:{topLeft:{label:t("transactionsListedInterpolated",{name:n})},topRight:{label:""}},bidItem:{topLeft:{label:t("transactionsBidOnInterpolated",{name:n})},topRight:{label:`-${e}`,color:"#777"}},cancelBid:{topLeft:{label:t("transactionsCancelBidOnInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#777"}},cancelListing:{topLeft:{label:t("transactionsUnlistedInterpolated",{name:n})},topRight:{label:""}},sellItem:{topLeft:{label:t("transactionsSoldInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#21E56F"}},buyItem:{topLeft:{label:t("transactionsBoughtInterpolated",{name:n})},topRight:{label:`-${e}`}}};return{topLeft:a[r.type].topLeft,topRight:a[r.type].topRight,bottomLeft:{label:u||""},image:We.createIcon({transactionType:r.type,primaryImage:r.item.imageUrl,secondaryImage:c})}}case"unknown":return{topLeft:{label:t("transactionsAppInteraction")},bottomLeft:{label:u},topRight:{label:`-${d} SOL`},image:We.createIcon({transactionType:r.type,primaryImage:c})};default:return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:`-${d} SOL`},image:We.createIcon({transactionType:"unknown"})}}})(e,n,a,l);return i.createElement(_e,Object.assign({},o,{onClick:t}))};ee=o("g7X40"),re=o("eopQk"),k=o("g9lcT"),H=o("dczY0"),ie=o("lPkGw"),ae=o("8FNEt"),$=o("7Lj33"),F=o("fMhDQ");const Ye=T.default(H.Column)`
  align-items: stretch;
  margin-top: -15px;
`,Xe=T.default.div`
  margin-top: 5px;
  margin-bottom: 5px;
`,qe=T.default(ee.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin-top: 105px;
`,Je=T.default(re.LoadingContent)`
  flex: 1;
`,et=(e,t)=>{const n=(e=>e.reduce(((e,t)=>{var n;const a=je.date(1e3*(null!==(n=null==t?void 0:t.blockTime)&&void 0!==n?n:0)).format("YYYY-MM-DD");return(e[a]=e[a]||[]).push(t),e}),{}))(e);return Object.keys(n).sort(((e,t)=>t.localeCompare(e))).map((e=>{const a=je.date(e),l=je.date().diff(a,t("richTransactionsDays"));return{title:l>1?a.format("MMM D, YYYY"):t(l>0?"richTransactionsYesterday":"richTransactionsToday"),data:n[e].sort(((e,t)=>t.blockTime-e.blockTime))}}))},tt=({publicKey:t})=>{const{t:n}=x.useTranslation(),{showTransactionItemModal:a}=k.useModals(),{transactionInfos:l,isLoadingInitial:o}=U.useRichTransactionHistory(t),{pending:r,confirmed:s}=l,c=i.useMemo((()=>{const e=r.map((e=>Object.assign(Object.assign({},e),{blockTime:e.blockTime||je.date().unix()})));return et([...e,...s],n)}),[s,n]);return e(i).createElement(Je,{isLoading:o},e(i).createElement(Ye,null,r.length+s.length!==0&&c?c.map((({title:t,data:n})=>((t,n)=>e(i).createElement(e(i).Fragment,null,e(i).createElement(ee.Text,{size:16,textAlign:"left",weight:500,margin:"15px 0 5px 0",color:"#777777"},t),n.map((t=>e(i).createElement(Xe,{key:t.signature},"detail"in t?e(i).createElement(Ge,{transaction:t,onClick:()=>a(t)}):e(i).createElement(nt,{transaction:t}))))))(t,n))):e(i).createElement(qe,null,n("transactionsNoActivity"))))},nt=({transaction:t})=>{var n;const{t:a}=x.useTranslation(),l=null===(n=F.useFetchConnection())||void 0===n?void 0:n.data,o=null==l?void 0:l.cluster;return e(i).createElement(_e,{image:e(i).createElement(ae.Circle,{diameter:44},e(i).createElement(ie.Spinner,{diameter:28})),topLeft:{label:a("transactionsSending")},bottomLeft:{label:a("transactionsWaitingForConfirmation")},onClick:()=>o?window.open($.generateTxSolscanUrl(t.signature,o)):null})};ue=o("aADTv"),Ze=o("cweFb"),H=o("dczY0"),i=o("aZikt"),T=o("hHMPk"),i=o("aZikt");ee=o("g7X40");const at=T.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,lt=T.default(ee.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: 500;
`;const ot=(T=o("hHMPk")).keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,it=T.default.div`
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
  animation: ${ot} 2s ease-in-out infinite;
`;var rt=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const st=e(i).memo((t=>{const{mint:n,name:a,symbol:l}=t,o=(()=>{var e,t;const{isRichTransactionsEnabled:n,isSplTokensBackendEnabled:a}=w.useFeatureFlags(),{t:l}=x.useTranslation(),o=l("assetDetailViewOnSolscan"),r=l("assetDetailStakeSOL"),s=l("assetDetailEditTokenMetadata"),c=l("assetDetailUnwrapAll"),u=l("assetDetailRecentActivity"),d=l("assetDetailActionButtonSend"),m=l("assetDetailActionButtonDeposit"),{feeCalculator:p}=J.useBlockchainState(),g=p.lamportsPerSignature,h=F.useFetchConnection(),f=h.data,E=null!==(e=null==f?void 0:f.cluster)&&void 0!==e?e:"mainnet-beta",{customMetaMap:y,customMetaMapQuery:b}=B.useCustomTokenMetaMap(),{accountClient:k}=v.useSelectedAccount(),T=k.publicKey,A=T.toString(),C=k.closeTokenAccountAsync,M=S.useSPLTokenAccountsByStandard(A,E,a),P=M.data,R=null!==(t=null==P?void 0:P.infos)&&void 0!==t?t:new Map,H=S.useFungibles({publicKey:A,cluster:E,isBackendEnabled:a}),D=H.data;return{owner:T,cluster:E,fungies:i.useMemo((()=>D),[D]),tokenInfos:R,isFetching:!h.isFetched||!b.isFetched||!M.isFetched||H.isFetching,lamportsPerSignature:g,closeTokenAccountAsync:C,isRichTransactionsEnabled:n,customMetaMap:y,viewOnSolScanText:o,stakeSolText:r,editTokenMetaText:s,unwrapAllText:c,recentActivityText:u,sendButtonText:d,depositButtonText:m}})(),{isFetching:s,owner:u,cluster:d,customMetaMap:m,tokenInfos:g,lamportsPerSignature:h,isRichTransactionsEnabled:f,closeTokenAccountAsync:E,fungies:y,viewOnSolScanText:b,stakeSolText:T,unwrapAllText:A,editTokenMetaText:M,recentActivityText:P,sendButtonText:R,depositButtonText:H}=o,D=r.useHistory(),{showValidatorListModal:L,hideValidatorListModal:O,showEditTokenModal:K,showSendModal:N,showDepositAssetModal:j}=k.useModals(),W=void 0===n,Z=i.useMemo((()=>y.find((e=>{switch(e.type){case"solana":return W?e:void 0;case"spl-token":return e.data.mintPubKey===n?e:void 0}}))),[n,y,W]),Q=i.useMemo((()=>{var e,t;switch(null==Z?void 0:Z.type){case"solana":return;case"spl-token":return{name:null===(e=m.get(Z.data.mintPubKey))||void 0===e?void 0:e.name,symbol:null===(t=m.get(Z.data.mintPubKey))||void 0===t?void 0:t.symbol}}}),[Z,m]),V=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Z?void 0:Z.data.name)&&void 0!==e?e:null==Q?void 0:Q.name)&&void 0!==t?t:a}),[Z,Q]),G=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Z?void 0:Z.data.symbol)&&void 0!==e?e:null==Q?void 0:Q.symbol)&&void 0!==t?t:l}),[Z,Q]),Y=i.useMemo((()=>{if(!Z)return u;switch(null==Z?void 0:Z.type){case"solana":return u;case"spl-token":return new I.PublicKey(null==Z?void 0:Z.data.pubkey)}}),[u,Z]),X=f&&"mainnet-beta"===d,{refreshTransactionHistory:q}=X?U.useRichTransactionHistory(Y):_.useTransactionHistory(Y),ee=i.useMemo((()=>Z?X?e(i).createElement(tt,{publicKey:Y}):e(i).createElement(Ie,{publicKey:Y}):null),[Z,X,Y]),te=i.useMemo((()=>{const e=[{label:b,onClick:()=>window.open($.generateAddressSolscanUrl(Y.toString(),d),"_blank")}];if(W&&e.push({label:T,onClick:()=>L({onClose:O})}),"spl-token"===(null==Z?void 0:Z.type)&&Z.data.mintPubKey===z.WRAPPED_SOLANA.address){const t=y.find((e=>"solana"===e.type));t&&+t.data.amount>h&&e.unshift({label:A,onClick:()=>{rt(void 0,void 0,void 0,(function*(){yield E(new I.PublicKey(Z.data.pubkey)),D.push(c.Path.Notifications)}))}})}return"spl-token"!==(null==Z?void 0:Z.type)||g.has(Z.data.mintPubKey)||e.push({label:M,onClick:()=>{p.analytics.capture("selectEditCustomToken"),K({mint:Z.data.mintPubKey,name:V,symbol:G})}}),e}),[d,b,W,T,y,h,A,E,D,Z,g,a,l,M]);return i.useEffect((()=>{q(Y)}),[Y]),e(i).createElement(ct,{isFetching:s,cluster:d,mint:"spl-token"===(null==Z?void 0:Z.type)?Z.data.mintPubKey:null!=n?n:void 0,name:V,symbol:G,balance:Z?C.amountToUiAmount(Z.data.amount,Z.data.decimals):0,dollarValue:null==Z?void 0:Z.data.usd,isSolana:W,txPublicKey:Y,TransactionsComponent:ee,actionItems:te,recentActivityText:P,sendButtonText:R,depositButtonText:H,shouldUseRichTxs:X,showSendModal:i.useCallback((()=>{Z&&N(Z)}),[Z,N]),showDepositAssetModal:i.useCallback((()=>{j({mint:"spl-token"===(null==Z?void 0:Z.type)?Z.data.mintPubKey:void 0,symbol:l})}),[j])})})),ct=e(i).memo((t=>{const{isFetching:n,cluster:a,mint:l,name:o,symbol:r,balance:s,dollarValue:c,isSolana:u,TransactionsComponent:d,actionItems:m,recentActivityText:p,sendButtonText:g,depositButtonText:h,shouldUseRichTxs:f,showSendModal:E,showDepositAssetModal:y}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,{items:m},n?e(i).createElement(e(i).Fragment,null," "):o),e(i).createElement(Et,{balance:s,symbol:r,mint:l,dollarValue:c,isFetching:n,isMainnet:"mainnet-beta"===a,sendButtonText:g,depositButtonText:h,showSendModal:E,showDepositAssetModal:y}),u&&!n&&e(i).createElement(Me,null),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(it,{height:"10px",backgroundColor:"#2D2D2D",borderRadius:"8px",width:"100px",margin:"0 0 15px 0"}),[1,2].map((t=>e(i).createElement(dt,{key:t})))):e(i).createElement(e(i).Fragment,null,!f&&e(i).createElement(ee.Text,{size:16,color:"#777777",textAlign:"left",margin:"0 auto 12px 0",noWrap:!0},null===d?null:p),d))})),ut=T.default(it).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,dt=()=>e(i).createElement(it,{align:"center",width:"100%",height:"64px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(it,{width:"54px",height:"100%",backgroundColor:"#434343",borderRadius:"50%",margin:"0 15px 0 0"}),e(i).createElement(H.Column,null,e(i).createElement(Ze.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(ut,{width:"120px"}),e(i).createElement(ut,{width:"60px"})),e(i).createElement(Ze.Row,{justify:"space-between"},e(i).createElement(ut,{width:"75px"})))),mt=T.default(H.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,pt=T.default((({children:t,className:n,maxFontSize:a})=>{const[l,o]=(()=>{const e=i.useRef(null),[t,n]=i.useState({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}=t;return i.useEffect((()=>{const t=Math.abs(a-r)<=5,i=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t)return void(i&&n({fontSize:r<a?r:a-(r-a),fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}));let c,u=l,d=o;i?(c=s?r-a:o-a,u=Math.min(l,a)):(c=s?l-a:r-a,d=Math.max(o,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,l,o,r,e]),[`${a}%`,e]})();return e(i).createElement(at,{className:n,ref:o,fontSize:a},e(i).createElement(lt,{fontSize:l,noWrap:!0},t))}))`
  margin-bottom: 7px;
`,gt=T.default(ee.Text).attrs({size:16,color:"#777777"})`
  margin-bottom: 20px;
`,ht=T.default(ue.ButtonPair)`
  width: 296px;
`,ft=T.default(it).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,Et=e(i).memo((t=>{const{mint:n,symbol:a,balance:l,dollarValue:o,isFetching:r,isMainnet:s,sendButtonText:c,depositButtonText:u,showSendModal:d,showDepositAssetModal:m}=t,p=n?C.formatAddressShort(n):void 0,g=`${C.formatTokenAmount(l)} ${null!=a?a:p}`;return e(i).createElement(e(i).Fragment,null,e(i).createElement(mt,null,r?e(i).createElement(yt,null):e(i).createElement(e(i).Fragment,null,e(i).createElement(pt,{maxFontSize:38},g),s&&e(i).createElement(gt,null,o?C.formatDollarAmount(o):"–")),e(i).createElement(ht,{primaryTheme:r?"default":"primary",primaryText:c,primaryDisabled:r,onPrimaryClicked:d,secondaryTheme:r?"default":"primary",secondaryText:u,secondaryDisabled:r,onSecondaryClicked:m,buttonPairStyle:ue.ButtonPairStyle.Small})))})),yt=()=>e(i).createElement(it,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(i).createElement(H.Column,null,e(i).createElement(Ze.Row,{justify:"center",margin:"0 auto"},e(i).createElement(ft,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(i).createElement(Ze.Row,{justify:"center",margin:"0 auto"},e(i).createElement(ft,{width:"60px",height:"8px"}))));ue=o("aADTv"),le=o("hJDxl");var bt=o("jiwMC");Ze=o("cweFb"),ee=o("g7X40");const xt=()=>{const t=(()=>{var t;const{t:n}=x.useTranslation(),a=n("homeManageTokenList"),l=n("homeSend"),o=n("homeDeposit"),r=n("assetDetailUnknownToken"),{showAssetVisibilityModal:s,showSendSelectionModal:u,showDepositSelectionModal:d}=k.useModals(),{pushDetailView:m}=P.useDetailViews(),{isSplTokensBackendEnabled:g}=w.useFeatureFlags(),h=F.useFetchConnection(),f=null==h?void 0:h.data,E=null!==(t=null==f?void 0:f.cluster)&&void 0!==t?t:"mainnet-beta",{accountClient:y}=v.useSelectedAccount(),b=y.publicKey.toString(),{hiddenMints:T,hiddenMintsMapQuery:A}=R.useHiddenMints(b),{customMetaMap:C,customMetaMapQuery:M}=B.useCustomTokenMetaMap(),H=S.useFungibles({publicKey:b,cluster:E,hiddenMints:T,isBackendEnabled:g}),{data:D,isFetching:I}=H,{totalBalance:z,totalBalanceChange:$}=i.useMemo((()=>{let e=0,t=0;for(const n of D)e+=n.data.usd,t+=n.data.usd24hChange;return{totalBalance:e,totalBalanceChange:t}}),[D]),U=!h.isFetched||!A.isFetched||!M.isFetched||I,O=h.isError||A.isError||M.isError||!!H.error,K=i.useCallback((t=>{const{mint:n,name:a,symbol:l}=t;p.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:c.Chain.Solana,isNativeOfType:n?void 0:"sol",address:n,symbol:l,name:a}}),m(e(i).createElement(L.AssetDetail,{mint:n,name:a,symbol:l}),{shouldShowBackButton:!0})}),[m]);return{data:D,isFetching:U,isError:O,isMainnet:"mainnet-beta"===E,totalBalance:z,totalBalanceChange:$,customMetaMap:C,manageTokenListButtonText:a,sendButtonText:l,depositButtonText:o,unknownTokenText:r,showAssetVisibilityModal:s,showSendSelectionModal:u,showDepositSelectionModal:d,onAssetRowClick:K}})();return t.isError?e(i).createElement(St,null):e(i).createElement(vt,Object.assign({},t))},vt=e(i).memo((t=>e(i).createElement(H.Column,{align:"center"},e(i).createElement(It,{balance:t.totalBalance,balanceChange:t.totalBalanceChange,isFetching:t.isFetching,isMainnet:t.isMainnet,sendButtonText:t.sendButtonText,depositButtonText:t.depositButtonText,showSendSelectionModal:t.showSendSelectionModal,showDepositSelectionModal:t.showDepositSelectionModal}),t.isFetching?[1,2,3].map((t=>e(i).createElement(Mt,{key:t}))):e(i).createElement(e(i).Fragment,null,e(i).createElement($t,{data:t.data,customMetaMap:t.customMetaMap,isMainnet:t.isMainnet,unknownTokenText:t.unknownTokenText,onClick:t.onAssetRowClick}),e(i).createElement(Ot,{buttonText:t.manageTokenListButtonText,onClick:t.showAssetVisibilityModal}))))),kt=T.default(H.Column).attrs({align:"center",justify:"center"})`
  height: 100%;
`,wt=T.default.div`
  width: 94px;
  height: 94px;
  position: relative;
  border-radius: 100%;
  background: rgba(235, 55, 66, 0.1);
`,Tt=T.default(Ze.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,St=()=>e(i).createElement(kt,{align:"center",justify:"center"},e(i).createElement(wt,null,e(i).createElement(Tt,null,e(i).createElement(le.FailureIcon,{width:32}))),e(i).createElement(ee.Text,{size:28,weight:500,margin:"30px 0 10px 0"},"Failed to get assets"),e(i).createElement(ee.Text,{size:16,weight:400,color:"#777",margin:"0 30px"},"There was an error attempting to retrieve your assets. Please refresh and try again.")),At=T.default.div`
  width: 44px;
  height: 44px;
  margin-right: 15px;
`,Ct=T.default(it).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,Mt=()=>e(i).createElement(it,{align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(At,null,e(i).createElement(it,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(i).createElement(H.Column,null,e(i).createElement(Ze.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(Ct,{width:"120px"}),e(i).createElement(Ct,{width:"60px"})),e(i).createElement(Ze.Row,{justify:"space-between"},e(i).createElement(Ct,{width:"75px"}),e(i).createElement(Ct,{width:"35px"})))),Ft=T.default(H.Column).attrs({align:"center"})`
  position: relative;
  width: ${h.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,Pt=T.default(ee.Text).attrs({weight:600,size:38})`
  margin-top: 33px;
  margin-bottom: 18px;
`,Bt=T.default(Ze.Row).attrs({justify:"center"})`
  margin-bottom: 22px;
  min-height: 25px;
`,Rt=T.default(ee.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,Ht=T.default(ee.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,Dt=T.default(ue.ButtonPair)`
  width: 296px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,Lt=T.default(H.Column).attrs({align:"center",padding:"49px 0"})``,It=e(i).memo((t=>{const{balance:n,balanceChange:a,isFetching:l,isMainnet:o,sendButtonText:r,depositButtonText:s,showSendSelectionModal:c,showDepositSelectionModal:u}=t,d=!o||l?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":a>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":a<0?"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)":"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)",m=0===n?"$0.00":C.formatDollarAmount(n),p=0===a?"+$0.00":C.formatDollarAmount(a,!0),g=a>0?"#21E56F":a<0?"#EB3742":"#777777",h=C.formatPercentage(M.calculateDollarChangePercentage(n,a),"0.00%",!0);return e(i).createElement(Ft,{background:d},l?e(i).createElement(Lt,null,e(i).createElement(it,{width:"150px",height:"10px",borderRadius:"6px",backgroundColor:"#4D4D4D",margin:"0 0 10px 0"}),e(i).createElement(it,{width:"75px",height:"10px",borderRadius:"6px",backgroundColor:"#484848"})):o?e(i).createElement(e(i).Fragment,null,e(i).createElement(Pt,null,m),e(i).createElement(Bt,null,e(i).createElement(Rt,{color:g},p),e(i).createElement(Ht,{color:g,backgroundColor:A.hexToRGB(g,.1)},h))):e(i).createElement(Lt,null,e(i).createElement(ee.Text,{size:36,weight:"bold",color:"#777"},"–")),e(i).createElement(Dt,{primaryTheme:"default",primaryText:r,primaryDisabled:l,onPrimaryClicked:c,secondaryText:s,secondaryDisabled:l,onSecondaryClicked:u,buttonPairStyle:ue.ButtonPairStyle.Small}))})),zt=T.default.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,$t=e(i).memo((t=>{const n=i.useCallback((e=>null!=e?e:t.unknownTokenText),[t.unknownTokenText]);return e(i).createElement(e(i).Fragment,null,t.data.map(((a,l)=>{var o,r,s;const c=S.assetKeyExtractor(a,l),u=C.amountToUiAmount(a.data.amount,a.data.decimals);switch(a.type){case"solana":return e(i).createElement(zt,{key:c},e(i).createElement(D.AssetRow,{balance:u,name:a.data.name,symbol:a.data.symbol,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>t.onClick({name:a.data.name,symbol:a.data.symbol})}));case"spl-token":{const l=t.customMetaMap.get(a.data.mintPubKey),d=null!==(r=null!==(o=a.data.symbol)&&void 0!==o?o:null==l?void 0:l.symbol)&&void 0!==r?r:null;return e(i).createElement(zt,{key:c},e(i).createElement(D.AssetRow,{balance:u,mint:a.data.mintPubKey,name:n(null!==(s=a.data.name)&&void 0!==s?s:null==l?void 0:l.name),symbol:d,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>{var e;return t.onClick({mint:a.data.mintPubKey,name:n(null!==(e=a.data.name)&&void 0!==e?e:null==l?void 0:l.name),symbol:d})}}))}}})))})),Ut=T.default(Ze.Row).attrs({justify:"center"})`
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
`,Ot=e(i).memo((t=>e(i).createElement(Ut,{onClick:t.onClick},e(i).createElement(bt.IconWrapper,null,e(i).createElement(le.TokenListSettingsIcon,null)),e(i).createElement(ee.Text,{size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0},t.buttonText))));var Kt=o("9AO5f");le=o("hJDxl"),i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu"),v=o("82Ilk"),w=o("ixd3d"),te=o("3rE52"),F=o("fMhDQ");const Nt=T.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,jt=()=>{const{t:t}=x.useTranslation(),{accountClient:n}=v.useSelectedAccount(),{isRichTransactionsEnabled:a}=w.useFeatureFlags(),{data:l}=F.useFetchConnection(),o="mainnet-beta"===(null==l?void 0:l.cluster);return e(i).createElement(Nt,null,e(i).createElement(te.PageHeader,null,t("recentActivityPrimaryText")),a&&o?e(i).createElement(tt,{publicKey:n.publicKey}):e(i).createElement(Ie,{publicKey:n.publicKey}))};i=o("aZikt"),x=o("7Qmuu"),k=o("g9lcT");var Wt=o("6oQjh");S=o("2zUeX"),v=o("82Ilk"),w=o("ixd3d"),F=o("fMhDQ"),i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu");const Zt=(T=o("hHMPk")).default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 15px;
  > * {
    margin: 5px;
  }
`;i=o("aZikt"),T=o("hHMPk"),S=o("2zUeX"),i=o("aZikt"),P=o("6rMcH"),i=o("aZikt"),T=o("hHMPk"),S=o("2zUeX"),ie=o("lPkGw"),i=o("aZikt"),P=o("6rMcH"),i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu"),S=o("2zUeX"),A=o("99Anx");var Qt=o("7eQt4"),Vt=($=o("7Lj33"),C=o("cFuyE"),k=o("g9lcT"),F=o("fMhDQ"),o("ioKPb"));te=o("3rE52"),ee=o("g7X40"),ue=o("aADTv");const _t=T.default.div`
  display: flex;
  flex-direction: column;
`,Gt=T.default.div`
  > * {
    margin: 10px 0px;
  }
  margin-bottom: 20px;
`,Yt=T.default.div`
  padding: 16px 0px;
`,Xt=T.default.div`
  display: flex;
  flex-wrap: wrap;
`,qt=T.default.div`
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
`,Jt=e(i).memo((t=>{var n,a;const{collectible:l}=t,{uri:o,mintPubKey:r,amount:s,decimals:c,name:u}=l,d=C.amountToUiAmount(s,c),{t:m}=x.useTranslation(),p=null!==(n=S.useFetchSPLTokenJSONMetadata(o).data)&&void 0!==n?n:null;let g,h,f,E;p&&(g=null==p?void 0:p.external_url,h=null==p?void 0:p.description,f=null==p?void 0:p.attributes,E=null==p?void 0:p.image);const y=i.useMemo((()=>u&&u.length>0?u:(null==p?void 0:p.name)?null==p?void 0:p.name:l.mintPubKey?l.mintPubKey:void e(i).Fragment),[u,p]),b=S.useSelectBestMedia(p),v=d>1,{showSendModal:w}=k.useModals(),T=null===(a=F.useFetchConnection())||void 0===a?void 0:a.data,M=null==T?void 0:T.cluster,P=Qt.parseURL(g);return e(i).createElement(_t,null,e(i).createElement(te.PageHeader,{items:[{label:m("collectibleDetailViewOnSolscan"),onClick:()=>M&&window.open($.generateTokenSolscanUrl(r,M),"_blank")}]},y,v?e(i).createElement("label",{style:{opacity:.5}}," (",Math.floor(d),")"):null),e(i).createElement(Vt.CollectibleDisplay,{width:328,height:328,media:b,image:E,enableCameraControls:!0,enableMedia:!0}),e(i).createElement(Yt,null,e(i).createElement(ue.Button,{theme:"primary",onClick:()=>{const e={type:"spl-token",data:Object.assign(Object.assign({},l),{usd:0,usd24hChange:0})};w(e),(()=>{const e=document.querySelector("audio"),t=document.querySelector("video"),n=null!=e?e:t;(null==n?void 0:n.paused)||null==n||n.pause()})()}},m("collectibleDetailSend"))),e(i).createElement(Gt,null,(h||g)&&e(i).createElement(ee.Text,{weight:500,size:16,color:"#777",textAlign:"left"},m("collectibleDetailDescription")),h&&e(i).createElement(ee.Text,{size:14,textAlign:"left",lineHeight:20},h),P&&e(i).createElement(ee.Text,{href:P.href,color:"#8A81F8",hoverColor:A.hexToRGB("#8A81F8",.5),size:14,weight:500,rel:"noopener noreferrer",target:"_blank"},P.host)),e(i).createElement(Gt,null,f&&f.length&&e(i).createElement(e(i).Fragment,null,e(i).createElement(ee.Text,{weight:500,size:16,color:"#777",textAlign:"left"},m("collectibleDetailProperties")),e(i).createElement(Xt,null,f.map((t=>e(i).createElement(qt,{key:t.trait_type},e(i).createElement(ee.Text,{lineHeight:15,weight:500,size:12,color:"#777",textTransform:"uppercase",textAlign:"left"},t.trait_type),e(i).createElement(ee.Text,{lineHeight:17,color:"white",size:14,weight:500,textAlign:"left"},t.value))))))))}));Vt=o("ioKPb");const en=e(i).memo((t=>{const{collectible:n,media:a,image:l}=t,{pushDetailView:o}=P.useDetailViews(),r=i.useCallback((()=>{o(e(i).createElement(Jt,{collectible:n}),{shouldShowBackButton:!0})}),[n]);return e(i).createElement(Vt.CollectibleDisplay,{onClick:r,media:a,image:l,enableCameraControls:!1})}));te=o("3rE52"),ee=o("g7X40");const tn=T.default(ee.StyledText).attrs({as:"span",weight:500})``,nn=T.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,an=T.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,ln=e(i).memo((t=>{const{collectible:n}=t,a=S.useFetchSPLTokenJSONMetadata(n.uri),{isFetched:l}=a,o=a.data||null;let r,s;return o&&(r=null==o?void 0:o.image,s=S.parseMediaFromImage(o)),e(i).createElement(nn,null,l?e(i).createElement(en,{key:n.mintPubKey,collectible:n,media:s,image:r}):e(i).createElement(an,null,e(i).createElement(ie.Spinner,null)))})),on=e(i).memo((t=>{const{name:n,collection:a}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,e(i).createElement(tn,{textTransform:"capitalize"},n)," ",e(i).createElement(tn,{opacity:.5},a.items.length)),e(i).createElement(Zt,null,a.items.map((t=>e(i).createElement(ln,{collectible:t})))))}));Vt=o("ioKPb");const rn=e(i).memo((t=>{const{name:n,collection:a,media:l,image:o}=t,{pushDetailView:r}=P.useDetailViews(),s=i.useCallback((()=>r(e(i).createElement(on,{name:n,collection:a}),{shouldShowBackButton:!0})),[n,a,r]);return e(i).createElement(Vt.CollectibleDisplay,{onClick:s,media:l,image:o,enableCameraControls:!1})}));i=o("aZikt"),T=o("hHMPk"),ee=o("g7X40");const sn=T.default.div`
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
`,cn=T.default(ee.StyledText).attrs({size:14,lineHeight:17,weight:600,noWrap:!0})``,un=e(i).memo((t=>{const{name:n,count:a}=t;return e(i).createElement(sn,null,e(i).createElement(cn,{maxWidth:"104px",noWrap:!0,textTransform:"capitalize"},n),e(i).createElement(cn,{opacity:.5,paddingLeft:4},a))}));ie=o("lPkGw");const dn=T.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,mn=T.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,pn=e(i).memo((t=>{var n,a;const{collectionKey:l,collection:o}=t,r=o.items[0],s=S.useFetchSPLTokenJSONMetadata(o.uri),{isFetched:c}=s,u=s.data||null;let d;const m=null!==(n=S.useBestCollectionName(u))&&void 0!==n?n:l,p=null!==(a=o.name)&&void 0!==a?a:m;u&&(d=u.image);const g=S.useSelectCollectionMedia(u),h=o.items.length;let f=h.toString();if(1==h){const[e]=o.items;"SemiFungible"===e.standard&&(f=e.amount)}return e(i).createElement(dn,null,c?e(i).createElement(e(i).Fragment,null,1===h?e(i).createElement(en,{key:r.pubkey,collectible:r,media:g,image:d}):e(i).createElement(rn,{key:o.key,name:p,collection:o,media:g,image:d}),e(i).createElement(un,{name:p,count:f})):e(i).createElement(mn,null,e(i).createElement(ie.Spinner,null)))}));i=o("aZikt");const gn=(T=o("hHMPk")).default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,hn=e(i).memo((t=>{var n;const{collectionKey:a,collection:l}=t,o=l.items[0],r=null!==(n=l.name)&&void 0!==n?n:a,s=l.items.length;let c=s.toString();if(1==s){const[e]=l.items;"SemiFungible"===e.standard&&(c=e.amount)}return e(i).createElement(gn,null,1===s?e(i).createElement(en,{key:o.pubkey,collectible:o,media:null,image:void 0}):e(i).createElement(rn,{key:l.key,name:r,collection:l,media:null,image:void 0}),e(i).createElement(un,{name:r,count:c}))})),fn=T.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,En=e(i).memo((t=>{const{collections:n,hasUnknownTokens:a}=t,{t:l}=x.useTranslation();return n&&n.length?e(i).createElement(Zt,null,n.map(((t,l)=>{let o=e(i).createElement(pn,{key:`${t.name}-${l}`,collectionKey:t.key,collection:t});return l===n.length-1&&a&&0!==t.items.length&&(o=e(i).createElement(hn,{collectionKey:t.key,collection:t})),o}))):e(i).createElement(fn,null,l("collectiblesNoCollectibles"))}));re=o("eopQk"),te=o("3rE52"),c=o("lwple");const yn=()=>{var t;const{t:n}=x.useTranslation(),{showDepositAssetModal:a}=k.useModals(),{isSplTokensBackendEnabled:l}=w.useFeatureFlags(),{accountClient:o}=v.useSelectedAccount(),r=o.publicKey.toString(),s=F.useFetchConnection().data,u=null!==(t=null==s?void 0:s.cluster)&&void 0!==t?t:"mainnet-beta",{data:d=null,isFetched:m,refetch:p}=S.useSPLTokenAccountsByStandard(r,u,l),g=S.useSubscribeSPLTokenCollections(d,r,u),[h]=Wt.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0);i.useEffect((()=>{p()}),[h,p]);const f=i.useMemo((()=>g.filter((e=>e.uri))),[g]),E=i.useMemo((()=>g.filter((e=>!e.uri)).map((e=>{const{items:t}=e;return t})).flat(2)),[g]),y={key:"unknownTokens",name:"Unknown Tokens",uri:"",items:E};return 0===E.length||f.find((e=>"Unknown Tokens"===e.name))||f.push(y),e(i).createElement(re.FullHeightLoadingContent,{isLoading:!m},e(i).createElement(te.PageHeader,{items:[{label:n("collectiblesReceiveCollectible"),onClick:()=>a({symbol:null,mint:void 0})}]},n("collectiblesPrimaryText")),e(i).createElement(En,{collections:f,hasUnknownTokens:0!==E.length}))};I=o("h6IZU"),i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu"),c=o("lwple"),C=o("cFuyE"),z=o("6oEu9");var bn=o("7h7pw"),xn=(Qt=o("7eQt4"),p=o("8C6BZ"),v=o("82Ilk"),P=o("6rMcH"),F=o("fMhDQ"),o("02ZG7")),vn=(k=o("g9lcT"),Be=o("aZo5h"),Wt=o("6oQjh"),o("d3kzB")),kn=(ee=o("g7X40"),le=o("hJDxl"),i=o("aZikt"),T=o("hHMPk"),o("1vmp5"));p=o("8C6BZ"),v=o("82Ilk"),le=o("hJDxl");const wn=T.default.input`
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
`,Tn=T.default.div`
  border: 1px solid #323232;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 15px;
  width: 230px;
  position: relative;
`,Sn=T.default.div`
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
`,An=()=>{const{accountMeta:t,setSelectedAccountName:n}=v.useSelectedAccount(),{handleSubmit:a}=kn.useForm(),[l,o]=i.useState(t.name),r=i.createRef();i.useEffect((()=>{o(t.name)}),[t.publicKey]);const s=()=>{0===t.name.length?n(l):(p.analytics.capture("changeAccountName",{data:{name:t.name}}),o(t.name))};return e(i).createElement(Tn,null,e(i).createElement("form",{onSubmit:a(s)},e(i).createElement(wn,{ref:r,maxLength:15,value:t.name,onBlur:s,onChange:e=>{n(e.target.value)}})),e(i).createElement(Sn,{onClick:()=>{var e;n(""),null===(e=r.current)||void 0===e||e.focus()}},e(i).createElement(le.PencilIcon,{width:18})))};ue=o("aADTv"),te=o("3rE52");var Cn=o("3xCjQ");const Mn=T.default.div`
  margin-top: 30px;
  margin-bottom: 33px;
  p {
    margin-top: 10px;
  }
`,Fn=T.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${vn.ContentRowContainer} {
    margin-bottom: 10px;
  }
`,Pn=T.default.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  > * {
    margin-top: 10px;
  }
`,Bn=()=>{const{t:t}=x.useTranslation(),{accountClient:n,accountMeta:a}=v.useSelectedAccount(),{accountMetas:l}=v.useAccounts(),{pushDetailView:o}=P.useDetailViews(),{showRemoveAccountModal:r,showResetSeedModal:s,showExportMnemonicModal:u,showExportPrivateKeyModal:d}=k.useModals(),m=1===l.length,p=a.type===c.AccountType.Ledger,g=a.type===c.AccountType.PrivateKey,h=n.publicKey.toString();return e(i).createElement(Fn,null,e(i).createElement(Mn,null,e(i).createElement(An,null),e(i).createElement(ee.Text,{size:16,color:"#777777"},"(",C.formatHashMedium(h),")")),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsDisplayLanguage"),secondaryContent:bn.languageDisplayValue(x.i18next.language),onClick:()=>{o(e(i).createElement(On,null),{shouldShowBackButton:!0})}}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsAddressBookPrimary"),secondaryContent:t("settingsAddressBookSecondary"),onClick:()=>{o(e(i).createElement(Kn,null),{shouldShowBackButton:!0})}}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsTrustedAppsPrimary"),secondaryContent:t("settingsTrustedAppsSecondary"),onClick:()=>{o(e(i).createElement(Ln,null),{shouldShowBackButton:!0})}}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsChangeNetworkPrimary"),secondaryContent:t("settingsChangeNetworkSecondary"),onClick:()=>{o(e(i).createElement(Hn,null),{shouldShowBackButton:!0})}}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsSecurityPrimary"),secondaryContent:t("settingsSecuritySecondary"),onClick:()=>{o(e(i).createElement(Nn,null),{shouldShowBackButton:!0})}}),e(i).createElement(Pn,null,!p&&e(i).createElement(e(i).Fragment,null,e(i).createElement(ue.Button,{disabled:p,onClick:d,title:p?t("settingsErrorCannotExportLedgerPrivateKey"):""},t("settingsExportPrivateKey")),!g&&e(i).createElement(ue.Button,{onClick:u},t("settingsShowSecretRecoveryPhrase"))),e(i).createElement(ue.Button,{disabled:m,theme:"warning",onClick:r,title:m?t("settingsErrorCannotRemoveAllWallets"):""},t("settingsRemoveWallet")),e(i).createElement(ue.Button,{theme:"warning",onClick:s},t("settingsResetSecretRecoveryPhrase"))))},Rn=T.default.div`
  > * {
    margin-top: 10px;
  }
  *:first-child {
    margin-top: 0px;
  }
`,Hn=()=>{var t;const{t:n}=x.useTranslation(),a=null===(t=F.useFetchConnection())||void 0===t?void 0:t.data,l=null==a?void 0:a.mainnetRpcUrl,o=null==a?void 0:a.cluster,{mutateAsync:r}=xn.useStoreStorageValue(c.StorageKeys.Cluster),s=i.useMemo((()=>[{cluster:"mainnet-beta",primaryContent:n("settingsNetworkMainnetBeta"),secondaryContent:l},{cluster:"testnet",primaryContent:n("settingsNetworkTestnet"),secondaryContent:I.clusterApiUrl("testnet")},{cluster:"devnet",primaryContent:n("settingsNetworkDevnet"),secondaryContent:I.clusterApiUrl("devnet")},{cluster:"localhost",primaryContent:n("settingsNetworkLocalhost"),secondaryContent:z.DEFAULT_LOCALHOST_RPC_URL}]),[l]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,n("settingsChangeNetworkPrimary")),e(i).createElement(Rn,null,s.map((t=>e(i).createElement(vn.ContentRow,{key:t.cluster,primaryContent:t.primaryContent,secondaryContent:t.secondaryContent,rightContent:o===t.cluster&&e(i).createElement(le.CheckmarkIcon,null),onClick:()=>{var e;(e=t.cluster)!==o&&r(e).then((()=>F.refreshConnection()))}})))))},Dn=T.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ln=()=>{var t,n;const{t:a}=x.useTranslation(),{accountClient:l}=v.useSelectedAccount(),[o,r,s]=Wt.useStorage(c.StorageKeys.TrustedApplicationsByOwnerBrowser,{});if(r)return null;const u=l.publicKey.toString(),d=null!==(t=o[u])&&void 0!==t?t:{},m=null!==(n=Object.keys(d))&&void 0!==n?n:[],p=m.length>0;return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,a("settingsTrustedAppsPrimary")),p?e(i).createElement(e(i).Fragment,null,e(i).createElement(Rn,null,m.map((t=>{var n;return e(i).createElement(vn.ContentRow,{key:t,primaryContent:null===(n=Qt.parseURL(t))||void 0===n?void 0:n.host,secondaryContent:null,rightContent:e(i).createElement(ue.Button,{fontSize:12,width:"70px",theme:"warning",paddingY:5,onClick:()=>(e=>{const t=Object.assign({},d);delete t[e],s(Object.assign(Object.assign({},o),{[u]:t}))})(t)},a("settingsTrustedAppsRevoke"))})})))):e(i).createElement(Dn,null,a("settingsNoTrustedApps")))},In=T.default(ee.Text).attrs({size:16,weight:500,color:"white",textAlign:"left"})`
  margin-top: 30px;
  margin-bottom: 14px;
`,zn=T.default(Rn)`
  padding-bottom: 20px;
`,$n=T.default(Rn)`
  padding-left: 0px;
  padding-right: 0px;
`,Un=T.default(ee.Text).attrs({size:16,weight:500,color:"#666666"})`
  font-style: italic;
`,On=()=>{const{t:t}=x.useTranslation(),[n,a]=i.useState(x.i18next.language);return e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,t("settingsDisplayLanguage")),e(i).createElement(zn,null,z.SUPPORTED_LANGUAGES.map((t=>e(i).createElement(vn.ContentRow,{key:t.value,primaryContent:t.displayValue,secondaryContent:null,rightContent:bn.languageMatches(n,t.value)&&e(i).createElement(le.CheckmarkIcon,null),onClick:()=>{p.analytics.capture("displayLanguageChanged",{data:{targetLanguage:t.value}}),x.i18next.changeLanguage(t.value),a(t.value)}})))))},Kn=()=>{const{t:t}=x.useTranslation(),{savedAddresses:n,recentAddresses:a}=Be.useAddressBook(),{showAddAddressModal:l,showEditAddressModal:o}=k.useModals();return i.useEffect((()=>{p.analytics.capture("addressBookOpen")}),[]),e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,{icon:e(i).createElement(le.PlusIcon,null),onIconClick:()=>l(void 0)},t("settingsAddressBookPrimary")),e(i).createElement($n,null,n.length>0&&n.map((t=>e(i).createElement(vn.ContentRow,{key:t.address,primaryContent:t.label,secondaryContent:null,rightContent:e(i).createElement(ee.Text,{size:16,color:"#666666"},C.formatHashMedium(t.address,4)),onClick:()=>{o(t)}}))),a.length>0&&e(i).createElement(e(i).Fragment,null,e(i).createElement(In,null,t("settingsAddressBookRecentlyUsed")),a.map((n=>e(i).createElement(vn.ContentRow,{key:n,primaryContent:e(i).createElement(Un,null,t("settingsAddressBookNoLabel")),secondaryContent:null,rightContent:e(i).createElement(ee.Text,{size:16,color:"#666666"},C.formatHashMedium(n,4)),onClick:()=>{l(n)}}))))),0===n.length&&0===a.length&&e(i).createElement(Dn,null,e(i).createElement(ee.Text,{size:18,weight:500,color:"#666666"},t("settingsNoAddresses"))))},Nn=()=>{const{t:t}=x.useTranslation(),{showChangePasswordModal:n,showChangeLockTimerModal:a}=k.useModals(),[l,o,r]=Wt.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0);return o?null:e(i).createElement(e(i).Fragment,null,e(i).createElement(te.PageHeader,null,t("settingsSecurityPrimary")),e(i).createElement(Rn,null,e(i).createElement(vn.ContentRow,{primaryContent:t("settingsChangePasswordPrimary"),secondaryContent:t("settingsChangePasswordSecondary"),onClick:n}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsAutoLockTimerPrimary"),secondaryContent:t("settingsAutoLockTimerSecondary"),onClick:a}),e(i).createElement(vn.ContentRow,{primaryContent:t("settingsSuspiciousCollectiblesPrimary"),secondaryContent:t("settingsSuspiciousCollectiblesSecondary"),rightContent:e(i).createElement(Cn.ToggleSwitch,{checked:l,onChange:()=>r(!l)})})))};i=o("aZikt"),T=o("hHMPk"),Fe=o("d3pmY");var jn=o("bXcFZ"),Wn=(A=o("99Anx"),o("bMYcF"));le=o("hJDxl"),ee=o("g7X40"),Ze=o("cweFb");const Zn=T.default(Fe.motion.div)`
  position: relative;
  cursor: ${e=>e.onClick?"pointer":"default"};
  width: 100%;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{switch(e.variant){case jn.ColorVariant.Primary:return A.hexToRGB("#4E44CE",.7);case jn.ColorVariant.Success:return A.hexToRGB("#21E56F",.7);case jn.ColorVariant.Warning:return A.hexToRGB("#E5A221",.7);case jn.ColorVariant.Danger:return A.hexToRGB("#EB3742",.7)}}};
`,Qn=T.default(Ze.Row)`
  svg {
    margin-right: 8px;
  }
`,Vn=T.default(ee.Text).attrs({size:14,color:"#FFF",lineHeight:19,weight:500,textAlign:"left"})`
  svg {
    margin-right: 10px;
  }
`,_n=T.default.button`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: middle;
  overflow: visible;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  svg {
    fill: #fff;
    margin: 0;
  }
`,Gn=()=>{const{banner:t,setBanner:n}=Wn.useBanner();return t?e(i).createElement(Fe.AnimatePresence,null,e(i).createElement(Zn,{key:"banner",role:"banner",variant:t.variant,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeOut",duration:.2},onClick:t.onClick},e(i).createElement(Qn,null,!!t.onClick&&e(i).createElement(le.ExclamationMarkCircleIcon,{width:16,height:16,circleFill:"#FFFFFF",exclamationFill:"transparent"}),e(i).createElement(Vn,null,t.message)),t.dismissable&&e(i).createElement(_n,{onClick:()=>n(void 0)},e(i).createElement(le.CloseIcon,null)))):null};i=o("aZikt"),T=o("hHMPk"),Fe=o("d3pmY"),r=o("gDkTC"),P=o("6rMcH");var Yn,Xn=o("eatHE"),qn=(i=o("aZikt"),T=o("hHMPk"),Fe=o("d3pmY"),/^\s+|\s+$/g),Jn=/^[-+]0x[0-9a-f]+$/i,ea=/^0b[01]+$/i,ta=/^0o[0-7]+$/i,na=parseInt,aa="object"==typeof n&&n&&n.Object===Object&&n,la="object"==typeof self&&self&&self.Object===Object&&self,oa=aa||la||Function("return this")(),ia=Object.prototype.toString,ra=Math.max,sa=Math.min,ca=function(){return oa.Date.now()};function ua(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function da(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==ia.call(e)}(e))return NaN;if(ua(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ua(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(qn,"");var n=ea.test(e);return n||ta.test(e)?na(e.slice(2),n?2:8):Jn.test(e)?NaN:+e}Yn=function(e,t,n){var a,l,o,i,r,s,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=a,o=l;return a=l=void 0,c=t,i=e.apply(o,n)}function g(e){return c=e,r=setTimeout(f,t),u?p(e):i}function h(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=o}function f(){var e=ca();if(h(e))return E(e);r=setTimeout(f,function(e){var n=t-(e-s);return d?sa(n,o-(e-c)):n}(e))}function E(e){return r=void 0,m&&a?p(e):(a=l=void 0,i)}function y(){var e=ca(),n=h(e);if(a=arguments,l=this,s=e,n){if(void 0===r)return g(s);if(d)return r=setTimeout(f,t),p(s)}return void 0===r&&(r=setTimeout(f,t)),i}return t=da(t)||0,ua(n)&&(u=!!n.leading,o=(d="maxWait"in n)?ra(da(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),y.cancel=function(){void 0!==r&&clearTimeout(r),c=0,a=s=l=r=void 0},y.flush=function(){return void 0===r?i:E(ca())},y};const ma=T.default(Fe.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8a81f8;
`,pa=({refs:t,activeRoute:n,onFinishedAnimating:a,isAnimating:l})=>{const[{x:o,width:r},s]=i.useState({x:0,width:0}),c=i.useCallback((()=>{t&&t[n]&&t[n].current&&s({x:t[n].current.offsetLeft,width:t[n].current.getBoundingClientRect().width})}),[n,t]);return i.useEffect((()=>{c()}),[n,t,c]),i.useEffect((()=>{const t=e(Yn)((()=>{c()}),500);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}})),e(i).createElement(ma,{animate:{x:o,width:r},style:{opacity:l?1:0},onAnimationComplete:a,transition:{duration:.4,type:"spring"}})},ga=T.default.div`
  position: relative;
  height: 60px;
  display: flex;
`,ha=T.default(Fe.motion.div)`
  flex: 1;
  overflow: auto;
  padding: 15px;
`,fa=T.default(Xn.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,Ea=({items:t})=>{const n=r.useLocation(),[a,l]=i.useState(!1),o=t.find((e=>r.matchPath(n.pathname,{path:`/${e.route}`,exact:!0}))),s=t.reduce(((e,t)=>(e[t.route]=i.createRef(),e)),{}),c=o&&o.route;return e(i).createElement(e(i).Fragment,null,e(i).createElement(Fe.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(r.Switch,{location:n,key:n.pathname},t.map((n=>e(i).createElement(r.Route,{key:n.route,path:`/${n.route}`,render:({history:a})=>{const l=a.entries;let o=0;if(l.length>1){const e=l[l.length-1].pathname,n=l[l.length-2].pathname;o=ya(t,e,n)?10:-10}return e(i).createElement(ha,{initial:{x:o,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.15}},e(i).createElement(P.DetailViewsProvider,null,n.renderContent()))}}))),e(i).createElement(r.Route,{key:"redirection",render:()=>e(i).createElement(Fe.motion.div,{exit:{opacity:0},transition:{duration:.15}},e(i).createElement(r.Redirect,{to:t[0]?t[0].route:"/"}))}))),e(i).createElement(ga,null,e(i).createElement(pa,{refs:s,activeRoute:c,onFinishedAnimating:()=>l(!1),isAnimating:a}),e(i).createElement(fa,{role:"tablist","aria-orientation":"horizontal"},t.map((t=>e(i).createElement(va,{isActive:c===t.route,key:t.route,item:t,ref:s[t.route],isAnimating:a,startAnimating:()=>l(!0)}))))))},ya=(e,t,n)=>e.findIndex((e=>e.route===ba(t)))>e.findIndex((e=>e.route===ba(n))),ba=e=>"/"===e?e:e.replace(/^\/+/g,""),xa=T.default(r.Link)`
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
`,va=i.forwardRef((({isActive:t,item:n,isAnimating:a,startAnimating:l},o)=>e(i).createElement(xa,{$isActive:t,$isAnimating:a,to:n.route,ref:o,onClick:l},n.renderButton())));i=o("aZikt");var ka=o("cdcq0"),wa=(v=o("82Ilk"),i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu"),ka=o("cdcq0"),k=o("g9lcT"),o("gBP3o")),Ta=(le=o("hJDxl"),ae=o("8FNEt"),ce=o("gkUV0"),ee=o("g7X40"),ie=o("lPkGw"),o("a80wK"));const Sa=T.default.div`
  margin-bottom: 5px;
`,Aa=T.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 14px;
`,Ca=T.default(ee.Text).attrs({size:16,color:"#777",weight:500,lineHeight:19,textAlign:"left"})``,Ma=T.default(ee.Text).attrs({size:14,color:"#777",lineHeight:17,hoverColor:"#8A81F8",weight:500,textAlign:"left"})``,Fa=T.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,Pa=T.default(ae.Circle).attrs({color:"#333333",diameter:40})`
  z-index: 0;
`,Ba=T.default.div`
  position: absolute;
  height: 1px;
  width: calc(100% + 2 * 16px); // TODO: create a constant for screen (tab) padding
  top: 20px;
  left: -16px; // TODO: use tab /screen padding
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Ra=T.default.div`
  cursor: pointer;
`,Ha=T.default.div`
  display: flex;
  align-items: center;
  input {
    font-size: 34px;
    line-height: 41px;
    font-weight: 400;
    padding: 0;
    background: none;
  }
`,Da=T.default.div`
  width: 100%;
`,La=({assetButtonTitle:t,decimals:n,disabled:a,hasWarning:l,iconUrl:o,isLoading:r,value:s,onClick:c,onUserInput:u})=>e(i).createElement(Ha,{hasWarning:l},r?e(i).createElement(Da,null,e(i).createElement(ie.Spinner,{diameter:28,color:"#8A81F8"})):e(i).createElement(Ta.NumericalInput,{name:"amount",border:"0",placeholder:"0",warning:l,value:s,decimalLimit:n,disabled:a,onUserInput:u}),e(i).createElement(za,{assetButtonTitle:t,iconUrl:o,onClick:c})),Ia=T.default.div`
  border-radius: 40px;
  background-color: #181818;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 6px;
  div {
    margin-right: 4px;
  }
  p {
    margin-right: 9px;
  }
  & > svg {
    fill: #ffffff;
    margin-right: 11px;
  }
  ${e=>e.isClickable?T.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,za=({assetButtonTitle:t,iconUrl:n,onClick:a})=>e(i).createElement(Ia,{isClickable:void 0!==a,onClick:a},e(i).createElement(ce.TokenImage,{width:30,iconUrl:n,alt:t}),e(i).createElement(ee.Text,{weight:600,size:16,color:"white"},t),void 0!==a&&e(i).createElement(le.DownChevronIcon,{width:9})),$a=()=>{const t=ka.useSwapSellAssetProps(),{setMaxAssetAmount:n}=t,{showSwapSellAssetSelectModal:a}=k.useModals();return e(i).createElement(Ua,Object.assign({},t,{onMaxBalancePressed:n,onSellAssetClicked:a}))},Ua=e(i).memo((({assetButtonTitle:t,debouncedSellAmount:n,decimals:a,formattedSellAmount:l,iconUrl:o,notEnoughAssets:r,onDebouncedSellAmount:s,onMaxBalancePressed:c,onSellAssetClicked:u})=>{const{t:d}=x.useTranslation();return e(i).createElement(Sa,null,e(i).createElement(Aa,null,e(i).createElement(Ca,null,d("swapFlowYouPay")),e(i).createElement(Ra,{onClick:c},e(i).createElement(Ma,null,d("swapperMax")," ",l))),e(i).createElement(La,{assetButtonTitle:t,decimals:a,disabled:!1,hasWarning:r,iconUrl:o,isLoading:!1,onClick:u,onUserInput:s,value:n}))})),Oa=e(i).memo((({assetButtonTitle:t,buyAmount:n,decimals:a,iconUrl:l,isFetchingQuote:o,onBuyAssetClicked:r,onSwitchTokens:s})=>{const{t:c}=x.useTranslation();return e(i).createElement(e(i).Fragment,null,e(i).createElement(Fa,null,e(i).createElement(Ba,null),e(i).createElement(Pa,{onClick:s},e(i).createElement(le.VerticalDoubleArrowsIcon,{fill:"#FFFFFF",width:20}))),e(i).createElement(Sa,null,e(i).createElement(Aa,null,e(i).createElement(Ca,null,c("swapFlowYouReceive"))),e(i).createElement(La,{assetButtonTitle:t,decimals:a,disabled:!0,hasWarning:!1,iconUrl:l,isLoading:o,onClick:r,onUserInput:()=>{},value:n})))})),Ka=()=>{const t=ka.useSwapBuyAssetProps(),n=wa.useSwapperArgs();ka.useInitialAssets(n);const{showSwapBuyAssetSelectModal:a}=k.useModals(),l=i.useCallback((()=>{a()}),[]);return e(i).createElement(Oa,Object.assign({},t,{onBuyAssetClicked:l}))};var Na=o("76KFn");i=o("aZikt"),x=o("7Qmuu"),ka=o("cdcq0"),k=o("g9lcT"),ue=o("aADTv");const ja=()=>{const{showSwapReviewModal:t}=k.useModals(),{disabled:n,theme:a,title:l}=Wa();return e(i).createElement(ue.Button,{type:"submit",theme:a,disabled:n,onClick:t},l)},Wa=()=>{const{t:e}=x.useTranslation(),{hasEnoughAssets:t,hasNoRoutes:n,canSwap:a}=ka.useSwapReviewButtonProps();return a?{disabled:!1,theme:"primary",title:e("swapFlowActionButtonText")}:t?n?{disabled:!0,theme:"default",title:e("swapNoQuotesFound")}:{disabled:!0,theme:"default",title:e("swapFlowActionButtonText")}:{disabled:!0,theme:"warning",title:e("sendFormErrorInsufficientBalance")}};i=o("aZikt"),T=o("hHMPk"),i=o("aZikt"),x=o("7Qmuu"),T=o("hHMPk"),A=o("99Anx"),ee=o("g7X40");const Za=T.default.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${A.hexToRGB("#222222",.75)};
`,Qa=T.default.div`
  background-color: ${A.hexToRGB("#E5A221",.7)};
  padding: 12px 15px;
  position: absolute;
  /* TODO: change 15px to 16px and create a screen padding constant like on mobile */
  top: -15px;
  left: -15px;
  right: 15px;
  width: calc(100% + 2 * 15px);
`,Va=T.default(ee.Text).attrs({size:16,lineHeight:19,weight:500,color:"#fff",textAlign:"center"})``,_a=()=>{const{t:t}=x.useTranslation();return e(i).createElement(Za,null,e(i).createElement(Qa,null,e(i).createElement(Va,null,t("swapAvailableOnMainnet"))))};F=o("fMhDQ");const Ga=T.default.fieldset.attrs({disabled:!0})`
  pointer-events: none;
  user-select: none;
`,Ya=({children:t})=>{const{data:n}=F.useFetchConnection();return"mainnet-beta"!==(null==n?void 0:n.cluster)?e(i).createElement(e(i).Fragment,null,e(i).createElement(_a,null),e(i).createElement(Ga,null,t)):e(i).createElement(e(i).Fragment,null,t)},Xa=e(i).memo((()=>{const{accountClient:t}=v.useSelectedAccount(),n=t.publicKey.toString();return ka.useSubscribeSwapQuoteToQueries(n),e(i).createElement(Ya,null,e(i).createElement($a,null),e(i).createElement(Ka,null),e(i).createElement(Na.SwapCard,null),e(i).createElement(ja,null))}));var qa=o("cqRHn"),Ja=(Wn=o("bMYcF"),F=o("fMhDQ"),i=o("aZikt"),T=o("hHMPk"),x=o("7Qmuu"),o("2hEfq")),el=(k=o("g9lcT"),re=o("eopQk"),o("cgvjs"));const tl=T.default.div`
  height: 100%;
  padding-bottom: 12px;
`,nl=()=>{const{isLoadingAssets:t,fromAsset:n,toAsset:a,fromAssetsList:l,toAssetsList:o,fromAmount:r,price:s,slippage:c,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,setFromAsset:g,setToAsset:h,setFromAmount:f,setSlippage:E,setIsRefreshing:y,error:b}=Ja.useSwapQuote(),{t:v}=x.useTranslation(),{showSwapReviewModal:w}=k.useModals(),T=i.useMemo((()=>e(Yn)(f,500)),[f]);i.useEffect((()=>(y(!0),()=>{y(!1)})),[]);return i.useEffect((()=>()=>{f(void 0)}),[]),e(i).createElement(re.FullHeightLoadingContent,{isLoading:t},e(i).createElement(tl,null,e(i).createElement(el.Swapper,{initialFromAssetAmount:r,price:s,slippage:c,fromAsset:n,toAsset:a,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,onFromAssetSelect:g,onToAssetSelect:h,onFromAssetAmountChange:e=>{e?T(e):(T.cancel(),f(e))},onConvertClick:e=>{f(e),w()},onArrowClick:()=>{g(a),h(n)},onSlippageUpdate:E,fromAssetsList:l,toAssetsList:o,topInputLabel:v("swapFlowYouPay"),bottomInputLabel:v("swapFlowYouReceive"),convertButtonLabel:v("swapFlowActionButtonText"),buttonTheme:"primary",isBottomInputDisabled:!0,arrowStyle:el.SwapperArrowStyle.Double,errorMessage:null==b?void 0:b.message})))},al=()=>{const{showNetworkHealthModal:t}=k.useModals(),{setBanner:n}=Wn.useBanner(),{value:a}=y.useAsync((()=>qa.shouldRenderWhatsNewOverlay())),[l,o]=i.useState(!1),r=F.useFetchConnection().data,s="mainnet-beta"===(null==r?void 0:r.cluster),{i18n:{language:c}}=x.useTranslation(),u=b.useNetworkHealth(c).data;return i.useEffect((()=>{if(s&&u){const{bannerVariant:e,bannerMessage:a,notificationMessage:l,notificationMessageTitle:o}=u,i=l&&o;n(e&&a?{variant:e,message:a,dismissable:!1,onClick:i?()=>t({title:o,message:l}):void 0}:void 0)}}),[s,u]),i.useEffect((()=>{a&&o(!0)}),[a]),l?e(i).createElement(e(i).Fragment,null,e(i).createElement(Kt.AccountHeader,null),e(i).createElement(qa.WhatsNewOverlay,{onClose:()=>{qa.acknowledgeWhatsNewOverlay(),o(!1)}})):e(i).createElement(e(i).Fragment,null,e(i).createElement(Kt.AccountHeader,null),e(i).createElement(Gn,null),e(i).createElement(ll,null),e(i).createElement("div",{id:h.MODAL_ID}))},ll=()=>{const{accountClient:t}=v.useSelectedAccount(),{isSwapperEnabled:n}=w.useFeatureFlags(),a=r.useHistory(),{closeAllModals:l}=k.useModals(),{areCollectiblesEnabled:o,isSwapper2Enabled:s}=w.useFeatureFlags();i.useEffect((()=>{l(),a.push(c.Path.Wallet)}),[t.publicKey.toString()]);const u=[{route:c.Path.Wallet,renderButton:()=>e(i).createElement(le.WalletIcon,null),renderContent:()=>e(i).createElement(xt,null)},o?{route:c.Path.Collectibles,renderButton:()=>e(i).createElement(le.CollectiblesIcon,{width:22}),renderContent:()=>e(i).createElement(yn,null)}:null,n?{route:c.Path.Swap,renderButton:()=>e(i).createElement(le.DoubleArrowsIcon,{width:24,height:24}),renderContent:()=>s?e(i).createElement(Xa,null):e(i).createElement(nl,null)}:null,{route:c.Path.Notifications,renderButton:()=>e(i).createElement(le.NotificationsIcon,null),renderContent:()=>e(i).createElement(jt,null)},{route:c.Path.Settings,renderButton:()=>e(i).createElement(le.SettingsIcon,null),renderContent:()=>e(i).createElement(Bn,null)}].filter((e=>null!==e));return e(i).createElement(Ea,{items:u})};var ol=o("jSC0s"),il=o("eduP0");i=o("aZikt"),w=o("ixd3d"),F=o("fMhDQ");const rl=({children:t})=>{const{isRichTransactionsEnabled:n}=w.useFeatureFlags(),{data:a}=F.useFetchConnection(),l="mainnet-beta"===(null==a?void 0:a.cluster),o=n&&l?U.RichTransactionHistoryProvider:_.TransactionHistoryProvider;return e(i).createElement(o,null,t)};v=o("82Ilk");var sl=o("49Dkb"),cl=(k=o("g9lcT"),J=o("j2x34"),o("5DQqc")),ul=(Be=o("aZo5h"),w=o("ixd3d"),o("eeuNW"));K=o("9ZliH"),Wn=o("bMYcF"),O=o("h5G75"),Ja=o("2hEfq");d.initSentry();const dl=()=>{i.useEffect((()=>{u.setStorageValue(c.StorageKeys.PopupHasBeenSeen,!0)}),[]);const t=i.useCallback((t=>e(i).createElement(k.ModalsProvider,null,e(i).createElement(ul.WalletMenuProvider,null,e(i).createElement(ol.Unlock,{unlockSeedAndMnemonic:t})))),[]),n=i.useCallback((()=>{g.openTabAsync({url:"onboarding.html"}),window.close()}),[]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(m.ThemedGlobalStyle,{backgroundColor:"#222222"}),e(i).createElement(f.PopupAndNotificationErrorBoundary,null,e(i).createElement(E.Main,{withBorder:!0},e(i).createElement(r.MemoryRouter,null,e(i).createElement(Wn.BannerProvider,null,e(i).createElement(O.QueryProvider,null,e(i).createElement(w.FeatureFlagsProvider,null,e(i).createElement(sl.BrowserProvider,null,e(i).createElement(il.SeedProvider,{renderLocked:t,openOnboarding:n},e(i).createElement(K.TransactionsProvider,null,e(i).createElement(cl.HardwareWalletProvider,null,e(i).createElement(v.AccountsProvider,null,e(i).createElement(Be.AddressBookProvider,null,e(i).createElement(J.BlockchainProvider,null,e(i).createElement(Ja.SwapQuoteProvider,null,e(i).createElement(rl,null,e(i).createElement(k.ModalsProvider,null,e(i).createElement(ul.WalletMenuProvider,null,e(i).createElement(al,null))))))))))))))),e(i).createElement("div",{id:h.MODAL_ID})))))};s.render(e(i).createElement(dl,null),document.getElementById("root")),p.analytics.capture("popupOpen");define=__define;})(window.define);