(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},l=n.parcelRequirea886;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},n.parcelRequirea886=l);var o=l("aZikt"),r=l("gDkTC"),s=l("ihAua");l("6CHoY");var c=l("lwple"),u=l("czDD7"),d=l("ci2Mj"),m=l("5cKs6"),p=l("iyOkC"),g=l("4yWCU"),h=l("i2Zy4"),f=l("6mzlH"),y=(o=l("aZikt"),r=l("gDkTC"),l("lxqKj")),b=(c=l("lwple"),l("4yWCU"),l("82Ilk")),E=l("g9lcT"),v=l("ixd3d"),x=(o=l("aZikt"),l("hHMPk")),k=l("7Qmuu"),w=(c=l("lwple"),l("2zUeX")),T=l("99Anx"),S=l("cFuyE"),C=l("1yeHx"),A=l("fMhDQ"),M=(b=l("82Ilk"),v=l("ixd3d"),E=l("g9lcT"),l("6rMcH")),F=(l("4yWCU"),l("8C6BZ")),P=l("delKv"),B=l("k95B3"),L=l("dczY0"),D=l("gtUQU"),R={};t(R,"AssetDetail",(function(){return st}),(function(e){return st=e}));o=l("aZikt"),r=l("gDkTC");var H=l("h6IZU"),$=(x=l("hHMPk"),k=l("7Qmuu"),l("6oEu9")),I=(c=l("lwple"),l("7Lj33")),z=(w=l("2zUeX"),S=l("cFuyE"),F=l("8C6BZ"),A=l("fMhDQ"),E=l("g9lcT"),{});t(z,"RichTransactionHistoryProvider",(function(){return Z}),(function(e){return Z=e})),t(z,"useRichTransactionHistory",(function(){return Q}),(function(e){return Q=e}));o=l("aZikt");var O=l("ehJ6P"),U=l("dlVlr"),K=($=l("6oEu9"),b=l("82Ilk"),l("h5G75")),N=l("9ZliH"),j=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const W=o.createContext({transactionHistory:{},refreshTransactionHistory:$.NOOP}),Z=({children:t})=>{const[n,a]=o.useState({}),{accountClient:i}=b.useSelectedSolanaAccount(),[l,r]=o.useState(i.publicKey),[s]=e(o).useState($.TX_HISTORY_REFRESH_INTERVAL_MS),c=l&&l!==i.publicKey?i.publicKey:void 0,{data:u,error:d}=K.useQuery({enabled:!0,queryKey:["rich-transaction-history-api",l,c],refetchInterval:s,queryFn:()=>j(void 0,void 0,void 0,(function*(){const{results:e}=yield U.getRichTransactionHistory({publicKey:l.toString(),observer:null==c?void 0:c.toString()});return e}))});return o.useEffect((()=>{const e=O.default(n,(e=>{e[l.toString()]=d?[]:u}));a(e)}),[u,d]),o.useEffect((()=>{r(i.publicKey)}),[i.publicKey.toString()]),e(o).createElement(W.Provider,{value:{transactionHistory:n,refreshTransactionHistory:e=>r(e)}},t)},Q=e=>{var t;const n=o.useContext(W);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=b.useSelectedSolanaAccount(),i=N.usePendingTransactions(a.publicKey),l=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:o.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return{confirmed:l,pending:[]};const t=[],n=l.map((e=>e.signature));for(const e of i)n.includes(e.signature)||t.push(e);return{pending:t,confirmed:l}}),[l,a,i]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};var V={};t(V,"TransactionHistoryProvider",(function(){return X}),(function(e){return X=e})),t(V,"useTransactionHistory",(function(){return J}),(function(e){return J=e}));O=l("ehJ6P"),o=l("aZikt"),$=l("6oEu9"),N=l("9ZliH");var _=l("4o0lv"),Y=(b=l("82Ilk"),function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))});const G=o.createContext({transactionHistory:{},refreshTransactionHistory:$.NOOP}),X=({children:t})=>{const[n]=_.useIncrementingNonce($.TX_HISTORY_REFRESH_INTERVAL_MS),[a,i]=o.useState({}),{accountClient:l}=b.useSelectedSolanaAccount(),[r,s]=o.useState(l.publicKey),c=e=>Y(void 0,void 0,void 0,(function*(){a[e.toString()]?(e=>{Y(void 0,void 0,void 0,(function*(){var t;const n=null!==(t=a[e.toString()])&&void 0!==t?t:[];let o;if(n.length>0){const{signature:e}=n[0];o=e}const r=yield l.getTransactionHistoryAsync(e,{until:o,limit:$.TX_HISTORY_PAGINATION_COUNT}),s=O.default(a,(t=>{t[e.toString()]=[...r,...t[e.toString()]]}));i(s)}))})(e):(e=>{Y(void 0,void 0,void 0,(function*(){const t=yield l.getTransactionHistoryAsync(e,{limit:$.TX_HISTORY_PAGINATION_COUNT}),n=O.default(a,(n=>{n[e.toString()]=t}));i(n)}))})(e),s(e)}));return o.useEffect((()=>{0!==n&&c(r)}),[n]),o.useEffect((()=>{s(l.publicKey),c(l.publicKey)}),[l.publicKey.toString()]),e(o).createElement(G.Provider,{value:{transactionHistory:a,refreshTransactionHistory:c}},t)},J=e=>{var t;const n=o.useContext(G);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=b.useSelectedSolanaAccount(),i=N.usePendingTransactions(a.publicKey),l=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:o.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return l;const t=[],n=l.map((e=>e.signature));for(const e of i)n.includes(e.signature)||t.push(e);return[...t,...l]}),[l,a,i]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};b=l("82Ilk");var q=l("j2x34"),ee=(v=l("ixd3d"),P=l("delKv"),l("cw7dG")),te=l("g7X40"),ne=l("3rE52"),ae=(o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),T=l("99Anx"),M=l("6rMcH"),E=l("g9lcT"),l("u1MBs")),ie=l("8FNEt"),le=l("hJDxl"),oe=l("2MtnF"),re=l("lPkGw"),se=(o=l("aZikt"),k=l("7Qmuu"),E=l("g9lcT"),ae=l("u1MBs"),ne=l("3rE52"),le=l("hJDxl"),l("eopQk")),ce=(o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),S=l("cFuyE"),c=l("lwple"),E=l("g9lcT"),ae=l("u1MBs"),te=l("g7X40"),l("76Idz")),ue=l("gkUV0"),de=l("aADTv");oe=l("2MtnF"),se=l("eopQk"),F=l("8C6BZ");const me=()=>{var t;o.useEffect((()=>(F.analytics.capture("showStakeAccountList"),()=>F.analytics.capture("hideStakeAccountList"))),[]);const n=ae.useFetchStakeAccounts({refetchOnMount:"always"}),a=null!==(t=n.data)&&void 0!==t?t:[];return e(o).createElement(se.FullHeightLoadingContent,{isLoading:!n.isFetched},n.isError?e(o).createElement(pe,{message:n.error.message,onRefetch:()=>{n.isFetching||n.refetch()}}):e(o).createElement(ge,{data:a}),e(o).createElement("br",null))},pe=t=>{const{t:n}=k.useTranslation();return e(o).createElement(e(o).Fragment,null,e(o).createElement(te.Text,{size:16,color:"red"},n("stakeAccountListErrorFetching"),": ",t.message),e(o).createElement(de.Button,{onClick:t.onRefetch},n("stakeAccountListReload")))},ge=t=>{const{t:n}=k.useTranslation(),a=we(),i=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),l=i.filter((e=>e.type===c.StakeAccountType.Delegated)),r=i.filter((e=>e.type===c.StakeAccountType.Initialized));return l.length||r.length?e(o).createElement(e(o).Fragment,null,l.length>0&&e(o).createElement(e(o).Fragment,null,l.map((t=>{var n,i;const{stake:l,voter:r}=t.info.stake.delegation,s=a.get(r),c=null===(n=null==s?void 0:s.info)||void 0===n?void 0:n.name,u=null===(i=null==s?void 0:s.info)||void 0===i?void 0:i.keybaseUsername;return e(o).createElement(xe,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,delegatedStake:Number(l),inflationReward:t.inflationReward,voteAccountPubkey:r,name:c,keybaseUsername:u})}))),r.length>0&&e(o).createElement(e(o).Fragment,null,r.map((t=>e(o).createElement(ke,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,inflationReward:t.inflationReward}))))):e(o).createElement(he,null,e(o).createElement(te.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},he=x.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,fe=x.default(ce.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,ye=x.default(ue.TokenImage).attrs({width:44})``,be=x.default.div`
  overflow: hidden;
`,Ee=x.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,ve=x.default(te.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,xe=t=>{var n,a;const{t:i}=k.useTranslation(),{showStakeAccountModal:l}=E.useModals(),{data:r}=ae.useFetchKeybaseUserAvatar(t.keybaseUsername),s=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:S.formatHashMedium(t.voteAccountPubkey),c=ae.useFetchStakeActivationData(t.pubkey).data,u=t.inflationReward&&t.inflationReward>0;return e(o).createElement(fe,{onClick:()=>{l({stakeAccountPubkey:t.pubkey})}},e(o).createElement(ye,{iconUrl:r}),e(o).createElement(be,null,e(o).createElement(Ee,null,e(o).createElement(te.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},s),e(o).createElement(te.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(o).createElement(oe.SolBalance,null,t.delegatedStake))),e(o).createElement(Ee,null,e(o).createElement(ve,{size:14,activationState:null==c?void 0:c.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==c?void 0:c.state)?i("stakeAccountListActivationActivating"):"","active"===(null==c?void 0:c.state)?i("stakeAccountListActivationActive"):"","inactive"===(null==c?void 0:c.state)?i("stakeAccountListActivationInactive"):"","deactivating"===(null==c?void 0:c.state)?i("stakeAccountListActivationDeactivating"):""),e(o).createElement(te.Text,{size:14,color:""+(u?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},u?e(o).createElement(e(o).Fragment,null,"+",e(o).createElement(oe.SolBalance,null,t.inflationReward)):"-"))))},ke=t=>{const{t:n}=k.useTranslation(),{showStakeAccountModal:a}=E.useModals(),i=ae.useFetchStakeActivationData(t.pubkey).data,l=t.inflationReward&&t.inflationReward>0;return e(o).createElement(fe,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(o).createElement(ye,null),e(o).createElement(be,null,e(o).createElement(Ee,null,e(o).createElement(te.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(o).createElement(te.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(o).createElement(oe.SolBalance,null,t.balance))),e(o).createElement(Ee,null,e(o).createElement(ve,{size:14,activationState:null==i?void 0:i.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==i?void 0:i.state)?n("stakeAccountListActivationActivating"):"","active"===(null==i?void 0:i.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==i?void 0:i.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==i?void 0:i.state)?n("stakeAccountListActivationDeactivating"):""),e(o).createElement(te.Text,{size:14,color:""+(l?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},l&&"+",e(o).createElement(oe.SolBalance,null,t.inflationReward)))))},we=()=>{var e;const t=ae.useFetchValidators(),n=null!==(e=t.data)&&void 0!==e?e:[],a=o.useRef(n);a.current=n;return o.useMemo((()=>new Map(a.current.map((e=>[e.voteAccountPubkey,e])))),[t.dataUpdatedAt,a])},Te=()=>{const{t:t}=k.useTranslation(),{showValidatorListModal:n,hideValidatorListModal:a}=E.useModals(),i=!ae.useFetchStakeAccounts().isFetched;return e(o).createElement(e(o).Fragment,null,e(o).createElement(ne.PageHeader,{items:[{label:t("stakeAccountListViewStakeSOL"),onClick:()=>{n({onClose:a})}}],icon:e(o).createElement(le.PlusIcon,null)},t("stakeAccountListViewPrimaryText")),e(o).createElement(se.FullHeightLoadingContent,{isLoading:i},e(o).createElement(me,null)))};ce=l("76Idz"),te=l("g7X40");const Se=x.default(ce.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,Ce=x.default.div`
  overflow: hidden;
`,Ae=x.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,Me=x.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,Fe=()=>{var t;const{t:n}=k.useTranslation(),{pushDetailView:a}=M.useDetailViews(),{showValidatorListModal:i,hideValidatorListModal:l}=E.useModals(),r=ae.useFetchStakeAccounts(),{isFetching:s,isError:c}=r,u=null!==(t=r.data)&&void 0!==t?t:[],d=u.reduce(((e,t)=>e+t.lamports),0),m=u.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),p=u.length;return e(o).createElement(Se,{isDisabled:s,onClick:()=>{c?r.refetch():s||(p>0?a(e(o).createElement(Te,null),{shouldShowBackButton:!0}):i({onClose:l}))}},s?e(o).createElement(ie.Circle,{diameter:44,color:T.hexToRGB("#8A81F8",.2)},e(o).createElement(re.Spinner,{diameter:28})):c?e(o).createElement(ie.Circle,{diameter:44,color:T.hexToRGB("#EB3742",.1)},e(o).createElement(le.FailureIcon,null)):e(o).createElement(ie.Circle,{diameter:44,color:"#3F3D29"},e(o).createElement(le.StarIcon,null)),e(o).createElement(Ce,null,s?e(o).createElement(Ae,null,e(o).createElement(te.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(o).createElement(te.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):c?e(o).createElement(Ae,null,e(o).createElement(te.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(o).createElement(te.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):p?e(o).createElement(e(o).Fragment,null,e(o).createElement(Me,null,e(o).createElement(te.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(o).createElement(te.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(o).createElement(oe.SolBalance,null,d))),e(o).createElement(Me,null,e(o).createElement(te.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},p," ",1===p?"account":"accounts"),e(o).createElement(te.Text,{size:14,color:""+(m>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},m>0?e(o).createElement(e(o).Fragment,null,"+",e(o).createElement(oe.SolBalance,null,m)):"–"))):e(o).createElement(Ae,null,e(o).createElement(te.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(o).createElement(te.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))};o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu");var Pe=l("d3pmY"),Be=(T=l("99Anx"),S=l("cFuyE"),l("HEK4k")),Le=(I=l("7Lj33"),q=l("j2x34"),b=l("82Ilk"),l("aZo5h")),De=l("lzptm");A=l("fMhDQ"),le=l("hJDxl"),ie=l("8FNEt"),se=l("eopQk"),te=l("g7X40"),re=l("lPkGw");const Re=x.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,He=x.default(te.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin-top: 105px;
`,$e=x.default(se.LoadingContent)`
  flex: 1;
`,Ie=({className:t,publicKey:n})=>{var a;const{t:i}=k.useTranslation(),{transactionInfos:l,isLoadingInitial:r}=V.useTransactionHistory(n),s=null===(a=A.useFetchConnection())||void 0===a?void 0:a.data,c=null==s?void 0:s.cluster;return e(o).createElement($e,{isLoading:r},e(o).createElement(Re,{className:t},0!==l.length?l.map((t=>e(o).createElement(je,{key:t.signature,cluster:c,transactionInfo:t}))):e(o).createElement(He,null,i("transactionsNoActivity"))))},ze=x.default.div`
  display: flex;
  justify-content: space-between;
`,Oe=x.default.div`
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
`,Ue=x.default(Pe.motion.div)`
  display: flex;
  align-items: center;
`,Ke=x.default.div`
  width: 100%;
  margin-left: 10px;
  > * {
    margin-top: 2px;
  }
`,Ne=x.default.div`
  padding-top: 3px;
  padding-left: 3px;
`,je=({cluster:t,transactionInfo:n})=>{var a,i,l,r,s;const{t:c}=k.useTranslation(),{latestBlockTimestamp:u}=q.useBlockchainState(),{accountClient:d}=b.useSelectedSolanaAccount(),{getExistingAccountMeta:m}=b.useSolanaAccounts(),{getSavedAddressLabel:p}=Le.useAddressBook(),g=De.useFetchAssetsWithAccount().data,h=o.useMemo(Date.now,[]),f=h-(null!=u?u:h),y=n.blockTime?Math.min(h,1e3*n.blockTime+f):void 0,{err:E,isLoading:v,isOptimistic:x,transaction:w,signature:C}=n;let A=T.hexToRGB("#3CC852",.1),M=e(o).createElement(le.CheckmarkIcon,{fill:"#27D843"}),F=S.formatHashMedium(C),P=c("transactionsSuccess");if(v||x)A=T.hexToRGB("#8A81F8",.2),F=c("transactionsSending"),P=c("transactionsWaitingForConfirmation"),M=e(o).createElement(re.Spinner,{diameter:28});else if(E)A=T.hexToRGB("#E72C2C",.1),M=e(o).createElement(le.FailureIcon,null),P=c("transactionsError");else if(w){const t=Be.classifyParsedTransaction(w,d.publicKey,g);if(t===Be.ParsedTransactionType.ReceivedSol){const t=Be.getSolTransferInstructions(w)[0],n=t.parsed.info.source,a=S.lamportsToSolana(t.parsed.info.lamports);F=c("transactionsReceivedInterpolated",{amount:S.formatTokenAmount(a)}),A=T.hexToRGB("#4E44CE",.2),M=e(o).createElement(le.ReceiveIcon,{fill:"#968DFF"}),P=`${c("transactionsFrom")}: ${S.formatAddress(n,m(n),p(n))}`}else if(t===Be.ParsedTransactionType.SentSol){const t=Be.getSolTransferInstructions(w)[0],n=t.parsed.info.destination,a=S.lamportsToSolana(t.parsed.info.lamports);F=c("transactionsSentInterpolated",{amount:S.formatTokenAmount(a)}),A=T.hexToRGB("#37AAEB",.1),M=e(o).createElement(Ne,null,e(o).createElement(le.SendIcon,{width:24,fill:"#6BCEFF"})),P=`${c("transactionsTo")}: ${S.formatAddress(n,m(n),p(n))}`}else if(g&&[Be.ParsedTransactionType.SentSplFungible,Be.ParsedTransactionType.SentSplCollectible,Be.ParsedTransactionType.ReceivedSplFungible,Be.ParsedTransactionType.ReceivedSplCollectible].includes(t)){const n=Be.getSplTransferInstructions(w)[0],{source:u,destination:d}=n.parsed.info,m=g.find((e=>u===e.account.toString())),p=g.find((e=>d===e.account.toString()));let h=null===(l=null===(i=null===(a=n.parsed)||void 0===a?void 0:a.info)||void 0===i?void 0:i.tokenAmount)||void 0===l?void 0:l.uiAmount;(null==m?void 0:m.symbol)||(null==m?void 0:m.name)?(h=null!=h?h:S.amountToUiAmount(n.parsed.info.amount,m.decimals),M=e(o).createElement(Ne,null,e(o).createElement(le.SendIcon,{width:24,fill:"#6BCEFF"})),A=T.hexToRGB("#37AAEB",.1),P="",t===Be.ParsedTransactionType.SentSplFungible?F=`${c("transactionsSent")} ${S.formatTokenAmount(h)} ${m.symbol}`:t===Be.ParsedTransactionType.SentSplCollectible&&(F=`${c("transactionsSent")} ${null!==(r=m.name)&&void 0!==r?r:m.symbol}`)):((null==p?void 0:p.symbol)||(null==p?void 0:p.name))&&(h=null!=h?h:S.amountToUiAmount(n.parsed.info.amount,p.decimals),A=T.hexToRGB("#4E44CE",.2),M=e(o).createElement(le.ReceiveIcon,{fill:"#968DFF"}),P="",t===Be.ParsedTransactionType.ReceivedSplFungible?F=`${c("transactionsReceived")} ${S.formatTokenAmount(h)} ${p.symbol}`:t===Be.ParsedTransactionType.ReceivedSplCollectible&&(F=`${c("transactionsReceived")} ${null!==(s=p.name)&&void 0!==s?s:p.symbol}`))}}return e(o).createElement(Oe,{onClick:()=>{t&&window.open(I.generateTxSolscanUrl(C,t))}},e(o).createElement(Pe.AnimatePresence,{exitBeforeEnter:!0,initial:!1},e(o).createElement(Ue,{key:F+C,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},e(o).createElement(ie.Circle,{diameter:44,color:A},M),e(o).createElement(Ke,null,e(o).createElement(ze,null,e(o).createElement(te.Text,{size:16,weight:600,lineHeight:19,noWrap:!0},F),e(o).createElement(te.Text,{size:14,color:"#777777",lineHeight:17},y?S.formatTimestampFromNow(y):"")),e(o).createElement(ze,null,e(o).createElement(te.Text,{size:14,color:"#777777",lineHeight:17,textAlign:"left",noWrap:!0,maxWidth:"200px"},P))))))};o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),I=l("7Lj33");var We=l("iqlzl"),Ze=(o=l("aZikt"),x=l("hHMPk"),l("iSBgX")),Qe=(S=l("cFuyE"),te=l("g7X40"),k=l("7Qmuu"),l("cweFb"));L=l("dczY0"),g=l("4yWCU"),Le=l("aZo5h"),b=l("82Ilk");const Ve=x.default(Qe.Row)`
  border-radius: 6px;
  background-color: #2a2a2a;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,_e=x.default(Qe.Row)`
  margin-left: 10px;
  margin-right: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`,Ye=e=>{const{topLeft:t,topRight:n,bottomLeft:a,bottomRight:i,image:l,onClick:r}=e;return o.createElement(Ve,{onClick:r},o.createElement(_e,null,l,o.createElement(L.Column,{width:.69*g.PHANTOM_WIDTH+"px",margin:"0 0 0 10px"},o.createElement(Qe.Row,{justify:"space-between"},o.createElement(te.Text,{size:16,weight:600,color:null==t?void 0:t.color,margin:"0",noWrap:!0,maxWidth:"80%",lineHeight:21},(null==t?void 0:t.label)||""),o.createElement(te.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==n?void 0:n.color)||"#777777",lineHeight:21},(null==n?void 0:n.label)||"")),o.createElement(Qe.Row,{justify:"space-between"},o.createElement(te.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==a?void 0:a.color)||"#777777",lineHeight:21},(null==a?void 0:a.label)||""),o.createElement(te.Text,{weight:500,size:14,color:null==i?void 0:i.color,margin:"0",noWrap:!0,lineHeight:21},(null==i?void 0:i.label)||"")))))},Ge=({transaction:e,onClick:t})=>{const{t:n}=k.useTranslation(),{getSavedAddressLabel:a}=Le.useAddressBook(),{getExistingAccountMeta:i}=b.useSolanaAccounts(),l=((e,t,n,a)=>{const{err:i,detail:l,dapp:o}=e,{data:r,feePayer:s}=l,{imageUrl:c,name:u}=null!=o?o:{};if(i)return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:t("transactionsFailed")},bottomLeft:{label:u},image:Ze.createIcon({transactionType:r.type,transactionState:"error"})};const d=S.lamportsToSolana(s.amountLamports);switch(r.type){case"swap":{const{sendAsset:e,receiveAsset:n}=r,a=S.formatAddressShort(e.mint||""),i=S.formatAddressShort(n.mint||"");return{topLeft:{label:(null==o?void 0:o.name)?t("transactionsSwapOn",{dappName:o.name}):t("transactionsTokenSwap")},topRight:{label:`+${S.formatTokenAmount(r.receiveUiAmount)} ${n.symbol||i}`,color:"#21E56F"},bottomLeft:{label:`${e.symbol||a} → ${n.symbol||i}`},bottomRight:{label:`-${S.formatTokenAmount(r.sendUiAmount)} ${e.symbol||a}`},image:Ze.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl,secondaryImage:n.imageUrl})}}case"send":{const{asset:e}=r,i=S.formatAddressShort(e.mint||""),l=S.formatAddress(r.to,a(r.to),n(r.to));return{topLeft:{label:`${t("transactionsSent")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`-${S.formatTokenAmount(r.uiAmount)} ${e.symbol||i}`,color:"#FFFFFF"},bottomLeft:{label:`${t("transactionsTo")}: ${l}`},image:Ze.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"receive":{const{asset:e}=r,i=S.formatAddressShort(e.mint||""),l=S.formatAddress(r.from,a(r.from),n(r.from));return{topLeft:{label:`${t("transactionsReceived")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`+${S.formatTokenAmount(r.uiAmount)} ${e.symbol||i}`,color:"#21E56F"},bottomLeft:{label:`${t("transactionsFrom")}: ${l}`},image:Ze.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"stake":{const{uiAmount:e,stakeAccount:n,validatorName:a}=r;return{topLeft:{label:t("transactionsStaked")},topRight:{label:`-${S.formatTokenAmount(e)} SOL`},bottomLeft:{label:a||S.formatHashMedium(n,4)},image:Ze.createIcon({transactionType:r.type})}}case"withdrawStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsWithdrawStake")},topRight:{label:`+${S.formatTokenAmount(e)} SOL`,color:"#21E56F"},bottomLeft:{label:S.formatHashMedium(n,4)},image:Ze.createIcon({transactionType:r.type})}}case"deactivateStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsUnstaked")},topRight:{label:`${S.formatTokenAmount(e)} SOL`},bottomLeft:{label:S.formatHashMedium(n,4)},image:Ze.createIcon({transactionType:r.type})}}case"listItem":case"cancelListing":case"bidItem":case"cancelBid":case"buyItem":case"sellItem":{const e=`${S.formatTokenAmount(r.forUiAmount)} ${r.forAsset.symbol||""}`,n=r.item.name||t("richTransactionDetailUnknownNFT"),a={listItem:{topLeft:{label:t("transactionsListedInterpolated",{name:n})},topRight:{label:""}},bidItem:{topLeft:{label:t("transactionsBidOnInterpolated",{name:n})},topRight:{label:`-${e}`,color:"#777"}},cancelBid:{topLeft:{label:t("transactionsCancelBidOnInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#777"}},cancelListing:{topLeft:{label:t("transactionsUnlistedInterpolated",{name:n})},topRight:{label:""}},sellItem:{topLeft:{label:t("transactionsSoldInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#21E56F"}},buyItem:{topLeft:{label:t("transactionsBoughtInterpolated",{name:n})},topRight:{label:`-${e}`}}};return{topLeft:a[r.type].topLeft,topRight:a[r.type].topRight,bottomLeft:{label:u||""},image:Ze.createIcon({transactionType:r.type,primaryImage:r.item.imageUrl,secondaryImage:c})}}case"unknown":return{topLeft:{label:t("transactionsAppInteraction")},bottomLeft:{label:u},topRight:{label:`-${d} SOL`},image:Ze.createIcon({transactionType:r.type,primaryImage:c})};default:return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:`-${d} SOL`},image:Ze.createIcon({transactionType:"unknown"})}}})(e,n,a,i);return o.createElement(Ye,Object.assign({},l,{onClick:t}))};A=l("fMhDQ"),te=l("g7X40"),se=l("eopQk"),E=l("g9lcT"),L=l("dczY0"),re=l("lPkGw"),ie=l("8FNEt");const Xe=x.default(L.Column)`
  align-items: stretch;
  margin-top: -15px;
`,Je=x.default.div`
  margin-top: 5px;
  margin-bottom: 5px;
`,qe=x.default(te.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin-top: 105px;
`,et=x.default(se.LoadingContent)`
  flex: 1;
`,tt=(e,t)=>{const n=(e=>e.reduce(((e,t)=>{var n;const a=We.date(1e3*(null!==(n=null==t?void 0:t.blockTime)&&void 0!==n?n:0)).format("YYYY-MM-DD");return(e[a]=e[a]||[]).push(t),e}),{}))(e);return Object.keys(n).sort(((e,t)=>t.localeCompare(e))).map((e=>{const a=We.date(e),i=We.date().diff(a,t("richTransactionsDays"));return{title:i>1?a.format("MMM D, YYYY"):t(i>0?"richTransactionsYesterday":"richTransactionsToday"),data:n[e].sort(((e,t)=>t.blockTime-e.blockTime))}}))},nt=({publicKey:t})=>{const{t:n}=k.useTranslation(),{showTransactionItemModal:a}=E.useModals(),{transactionInfos:i,isLoadingInitial:l}=z.useRichTransactionHistory(t),{pending:r,confirmed:s}=i,c=o.useMemo((()=>{const e=r.map((e=>Object.assign(Object.assign({},e),{blockTime:e.blockTime||We.date().unix()})));return tt([...e,...s],n)}),[s,n]);return e(o).createElement(et,{isLoading:l},e(o).createElement(Xe,null,r.length+s.length!==0&&c?c.map((({title:t,data:n},i)=>((t,n,i)=>e(o).createElement(e(o).Fragment,{key:`${t}-${i}`},e(o).createElement(te.Text,{size:16,textAlign:"left",weight:500,margin:"15px 0 5px 0",color:"#777777"},t),n.map((t=>e(o).createElement(Je,{key:t.signature},"detail"in t?e(o).createElement(Ge,{transaction:t,onClick:()=>a(t)}):e(o).createElement(at,{transaction:t}))))))(t,n,i))):e(o).createElement(qe,null,n("transactionsNoActivity"))))},at=({transaction:t})=>{var n;const{t:a}=k.useTranslation(),i=null===(n=A.useFetchConnection())||void 0===n?void 0:n.data,l=null==i?void 0:i.cluster;return e(o).createElement(Ye,{image:e(o).createElement(ie.Circle,{diameter:44},e(o).createElement(re.Spinner,{diameter:28})),topLeft:{label:a("transactionsSending")},bottomLeft:{label:a("transactionsWaitingForConfirmation")},onClick:()=>l?window.open(I.generateTxSolscanUrl(t.signature,l)):null})};de=l("aADTv"),Qe=l("cweFb"),L=l("dczY0"),o=l("aZikt"),x=l("hHMPk"),o=l("aZikt");te=l("g7X40");const it=x.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,lt=x.default(te.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: 500;
`;var ot=l("CmvE4"),rt=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const st=e(o).memo((t=>{const{mint:n,name:a,symbol:i}=t,l=(()=>{var e,t;const{isRichTransactionsEnabled:n,isSplTokensBackendEnabled:a}=v.useFeatureFlags(),{t:i}=k.useTranslation(),l=i("assetDetailViewOnSolscan"),r=i("assetDetailStakeSOL"),s=i("assetDetailEditTokenMetadata"),c=i("assetDetailUnwrapAll"),u=i("assetDetailRecentActivity"),d=i("assetDetailActionButtonSend"),m=i("assetDetailActionButtonDeposit"),{feeCalculator:p}=q.useBlockchainState(),g=p.lamportsPerSignature,h=A.useFetchConnection(),f=h.data,y=null!==(e=null==f?void 0:f.cluster)&&void 0!==e?e:"mainnet-beta",{customMetaMap:E,customMetaMapQuery:x}=P.useCustomTokenMetaMap(),{cachedPricesQuery:T,cachedPrices:S}=ee.useCachedPrices(),{accountClient:C}=b.useSelectedSolanaAccount(),M=C.publicKey,F=M.toString(),B=C.closeTokenAccountAsync,L=w.useSPLTokenAccountsByStandard(F,y,a),D=L.data,R=null!==(t=null==D?void 0:D.infos)&&void 0!==t?t:new Map,H=w.useFungibles({publicKey:F,cluster:y,cachedPrices:S,isBackendEnabled:a}),$=H.data;return{owner:M,cluster:y,fungies:o.useMemo((()=>$),[$]),tokenInfos:R,isFetching:!h.isFetched||!x.isFetched||!T.isFetched||!L.isFetched||H.isFetching,lamportsPerSignature:g,closeTokenAccountAsync:B,isRichTransactionsEnabled:n,customMetaMap:E,viewOnSolScanText:l,stakeSolText:r,editTokenMetaText:s,unwrapAllText:c,recentActivityText:u,sendButtonText:d,depositButtonText:m}})(),{isFetching:s,owner:u,cluster:d,customMetaMap:m,tokenInfos:p,lamportsPerSignature:g,isRichTransactionsEnabled:h,closeTokenAccountAsync:f,fungies:y,viewOnSolScanText:x,stakeSolText:T,unwrapAllText:C,editTokenMetaText:M,recentActivityText:B,sendButtonText:L,depositButtonText:D}=l,R=r.useHistory(),{showValidatorListModal:O,hideValidatorListModal:U,showEditTokenModal:K,showSendModal:N,showDepositAssetModal:j}=E.useModals(),W=void 0===n,Z=o.useMemo((()=>y.find((e=>{switch(e.type){case"solana":return W?e:void 0;case"spl-token":return e.data.mintPubKey===n?e:void 0}}))),[n,y,W]),Q=o.useMemo((()=>{var e,t;switch(null==Z?void 0:Z.type){case"solana":return;case"spl-token":return{name:null===(e=m.get(Z.data.mintPubKey))||void 0===e?void 0:e.name,symbol:null===(t=m.get(Z.data.mintPubKey))||void 0===t?void 0:t.symbol}}}),[Z,m]),_=o.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Z?void 0:Z.data.name)&&void 0!==e?e:null==Q?void 0:Q.name)&&void 0!==t?t:a}),[Z,Q]),Y=o.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Z?void 0:Z.data.symbol)&&void 0!==e?e:null==Q?void 0:Q.symbol)&&void 0!==t?t:i}),[Z,Q]),G=o.useMemo((()=>{if(!Z)return u;switch(null==Z?void 0:Z.type){case"solana":return u;case"spl-token":return new H.PublicKey(null==Z?void 0:Z.data.pubkey)}}),[u,Z]),X=h&&"mainnet-beta"===d,{refreshTransactionHistory:J}=X?z.useRichTransactionHistory(G):V.useTransactionHistory(G),te=o.useMemo((()=>Z?X?e(o).createElement(nt,{publicKey:G}):e(o).createElement(Ie,{publicKey:G}):null),[Z,X,G]),ne=o.useMemo((()=>{const e=[{label:x,onClick:()=>window.open(I.generateAddressSolscanUrl(G.toString(),d),"_blank")}];if(W&&e.push({label:T,onClick:()=>O({onClose:U})}),"spl-token"===(null==Z?void 0:Z.type)&&Z.data.mintPubKey===$.WRAPPED_SOLANA.address){const t=y.find((e=>"solana"===e.type));t&&+t.data.amount>g&&e.unshift({label:C,onClick:()=>{rt(void 0,void 0,void 0,(function*(){yield f(new H.PublicKey(Z.data.pubkey)),R.push(c.Path.Notifications)}))}})}return"spl-token"!==(null==Z?void 0:Z.type)||p.has(Z.data.mintPubKey)||e.push({label:M,onClick:()=>{F.analytics.capture("selectEditCustomToken"),K({mint:Z.data.mintPubKey,name:_,symbol:Y})}}),e}),[d,x,W,T,y,g,C,f,R,Z,p,a,i,M]);return o.useEffect((()=>{J(G)}),[G]),e(o).createElement(ct,{isFetching:s,cluster:d,mint:"spl-token"===(null==Z?void 0:Z.type)?Z.data.mintPubKey:null!=n?n:void 0,name:_,symbol:Y,balance:Z?S.amountToUiAmount(Z.data.amount,Z.data.decimals):0,dollarValue:null==Z?void 0:Z.data.usd,isSolana:W,txPublicKey:G,TransactionsComponent:te,actionItems:ne,recentActivityText:B,sendButtonText:L,depositButtonText:D,shouldUseRichTxs:X,showSendModal:o.useCallback((()=>{Z&&N(Z)}),[Z,N]),showDepositAssetModal:o.useCallback((()=>{j({mint:"spl-token"===(null==Z?void 0:Z.type)?Z.data.mintPubKey:void 0,symbol:i})}),[j])})})),ct=e(o).memo((t=>{const{isFetching:n,cluster:a,mint:i,name:l,symbol:r,balance:s,dollarValue:c,isSolana:u,TransactionsComponent:d,actionItems:m,recentActivityText:p,sendButtonText:g,depositButtonText:h,shouldUseRichTxs:f,showSendModal:y,showDepositAssetModal:b}=t;return e(o).createElement(e(o).Fragment,null,e(o).createElement(ne.PageHeader,{items:m},n?e(o).createElement(e(o).Fragment,null," "):l),e(o).createElement(yt,{balance:s,symbol:r,mint:i,dollarValue:c,isFetching:n,isMainnet:"mainnet-beta"===a,sendButtonText:g,depositButtonText:h,showSendModal:y,showDepositAssetModal:b}),u&&!n&&e(o).createElement(Fe,null),n?e(o).createElement(e(o).Fragment,null,e(o).createElement(ot.SkeletonLoader,{height:"10px",backgroundColor:"#2D2D2D",borderRadius:"8px",width:"100px",margin:"0 0 15px 0"}),[1,2].map((t=>e(o).createElement(dt,{key:t})))):e(o).createElement(e(o).Fragment,null,!f&&e(o).createElement(te.Text,{size:16,color:"#777777",textAlign:"left",margin:"0 auto 12px 0",noWrap:!0},null===d?null:p),d))})),ut=x.default(ot.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,dt=()=>e(o).createElement(ot.SkeletonLoader,{align:"center",width:"100%",height:"64px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(o).createElement(ot.SkeletonLoader,{width:"54px",height:"100%",backgroundColor:"#434343",borderRadius:"50%",margin:"0 15px 0 0"}),e(o).createElement(L.Column,null,e(o).createElement(Qe.Row,{margin:"0 0 10px",justify:"space-between"},e(o).createElement(ut,{width:"120px"}),e(o).createElement(ut,{width:"60px"})),e(o).createElement(Qe.Row,{justify:"space-between"},e(o).createElement(ut,{width:"75px"})))),mt=x.default(L.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,pt=x.default((({children:t,className:n,maxFontSize:a})=>{const[i,l]=(()=>{const e=o.useRef(null),[t,n]=o.useState({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:i,fontSizeMin:l,fontSizePrev:r}=t;return o.useEffect((()=>{const t=Math.abs(a-r)<=5,o=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t)return void(o&&n({fontSize:r<a?r:a-(r-a),fontSizeMax:i,fontSizeMin:l,fontSizePrev:r}));let c,u=i,d=l;o?(c=s?r-a:l-a,u=Math.min(i,a)):(c=s?i-a:r-a,d=Math.max(l,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,i,l,r,e]),[`${a}%`,e]})();return e(o).createElement(it,{className:n,ref:l,fontSize:a},e(o).createElement(lt,{fontSize:i,noWrap:!0},t))}))`
  margin-bottom: 7px;
`,gt=x.default(te.Text).attrs({size:16,color:"#777777"})`
  margin-bottom: 20px;
`,ht=x.default(de.ButtonPair)`
  width: 296px;
`,ft=x.default(ot.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,yt=e(o).memo((t=>{const{mint:n,symbol:a,balance:i,dollarValue:l,isFetching:r,isMainnet:s,sendButtonText:c,depositButtonText:u,showSendModal:d,showDepositAssetModal:m}=t,p=n?S.formatAddressShort(n):void 0,g=`${S.formatTokenAmount(i)} ${null!=a?a:p}`;return e(o).createElement(e(o).Fragment,null,e(o).createElement(mt,null,r?e(o).createElement(bt,null):e(o).createElement(e(o).Fragment,null,e(o).createElement(pt,{maxFontSize:38},g),s&&e(o).createElement(gt,null,l?S.formatDollarAmount(l):"–")),e(o).createElement(ht,{primaryTheme:r?"default":"primary",primaryText:c,primaryDisabled:r,onPrimaryClicked:d,secondaryTheme:r?"default":"primary",secondaryText:u,secondaryDisabled:r,onSecondaryClicked:m,buttonPairStyle:de.ButtonPairStyle.Small})))})),bt=()=>e(o).createElement(ot.SkeletonLoader,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(o).createElement(L.Column,null,e(o).createElement(Qe.Row,{justify:"center",margin:"0 auto"},e(o).createElement(ft,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(o).createElement(Qe.Row,{justify:"center",margin:"0 auto"},e(o).createElement(ft,{width:"60px",height:"8px"}))));de=l("aADTv"),le=l("hJDxl");var Et=l("jiwMC");Qe=l("cweFb"),ot=l("CmvE4"),o=l("aZikt"),x=l("hHMPk"),L=l("dczY0"),le=l("hJDxl"),te=l("g7X40"),Qe=l("cweFb");const vt=({title:t,description:n})=>e(o).createElement(xt,null,e(o).createElement(kt,null,e(o).createElement(wt,null,e(o).createElement(le.FailureIcon,{width:32}))),e(o).createElement(Tt,null,t),e(o).createElement(St,null,n)),xt=x.default(L.Column).attrs({align:"center",justify:"center"})`
  height: 100%;
`,kt=x.default.div`
  width: 94px;
  height: 94px;
  position: relative;
  border-radius: 100%;
  background: rgba(235, 55, 66, 0.1);
`,wt=x.default(Qe.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,Tt=x.default(te.Text).attrs({size:28,weight:500,margin:"30px 0 10px 0"})``,St=x.default(te.Text).attrs({size:16,weight:400,margin:"0 30px",color:"#777777"})``;te=l("g7X40"),ee=l("cw7dG");const Ct=()=>{const t=(()=>{var t;const{t:n}=k.useTranslation(),a=n("homeManageTokenList"),i=n("homeSend"),l=n("homeDeposit"),r=n("assetDetailUnknownToken"),{showAssetVisibilityModal:s,showSendSelectionModal:u,showDepositSelectionModal:d}=E.useModals(),{pushDetailView:m}=M.useDetailViews(),{isSplTokensBackendEnabled:p}=v.useFeatureFlags(),g=A.useFetchConnection(),h=null==g?void 0:g.data,f=null!==(t=null==h?void 0:h.cluster)&&void 0!==t?t:"mainnet-beta",{accountClient:y}=b.useSelectedSolanaAccount(),x=y.publicKey.toString(),{hiddenMints:T,hiddenMintsMapQuery:S}=B.useHiddenMints(x),{customMetaMap:C,customMetaMapQuery:L}=P.useCustomTokenMetaMap(),{cachedPricesQuery:D,cachedPrices:H}=ee.useCachedPrices(),$=w.useFungibles({publicKey:x,cluster:f,hiddenMints:T,cachedPrices:H,sortByPrice:!0,isBackendEnabled:p}),{data:I,isFetching:z}=$,{totalBalance:O,totalBalanceChange:U}=o.useMemo((()=>{let e=0,t=0;for(const n of I)e+=n.data.usd,t+=n.data.usd24hChange;return{totalBalance:e,totalBalanceChange:t}}),[I]),K=!g.isFetched||!S.isFetched||!L.isFetched||!D.isFetched||z,N=g.isError||S.isError||L.isError||!!$.error,j=o.useCallback((t=>{const{mint:n,name:a,symbol:i}=t;F.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:c.Chain.Solana,isNativeOfType:n?void 0:"sol",address:n,symbol:i,name:a}}),m(e(o).createElement(R.AssetDetail,{mint:n,name:a,symbol:i}),{shouldShowBackButton:!0})}),[m]);return{data:I,isFetching:K,isError:N,isMainnet:"mainnet-beta"===f,totalBalance:O,totalBalanceChange:U,customMetaMap:C,manageTokenListButtonText:a,sendButtonText:i,depositButtonText:l,unknownTokenText:r,showAssetVisibilityModal:s,showSendSelectionModal:u,showDepositSelectionModal:d,onAssetRowClick:j}})();return t.isError?e(o).createElement(Mt,null):e(o).createElement(At,Object.assign({},t))},At=e(o).memo((t=>e(o).createElement(L.Column,{align:"center"},e(o).createElement(Ot,{balance:t.totalBalance,balanceChange:t.totalBalanceChange,isFetching:t.isFetching,isMainnet:t.isMainnet,sendButtonText:t.sendButtonText,depositButtonText:t.depositButtonText,showSendSelectionModal:t.showSendSelectionModal,showDepositSelectionModal:t.showDepositSelectionModal}),t.isFetching?[1,2,3].map((t=>e(o).createElement(Bt,{key:t}))):e(o).createElement(e(o).Fragment,null,e(o).createElement(Kt,{data:t.data,customMetaMap:t.customMetaMap,isMainnet:t.isMainnet,unknownTokenText:t.unknownTokenText,onClick:t.onAssetRowClick}),e(o).createElement(jt,{buttonText:t.manageTokenListButtonText,onClick:t.showAssetVisibilityModal}))))),Mt=()=>{const{t:t}=k.useTranslation();return e(o).createElement(vt,{title:t("homeErrorTitle"),description:t("homeErrorDescription")})},Ft=x.default.div`
  width: 44px;
  height: 44px;
  margin-right: 15px;
`,Pt=x.default(ot.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,Bt=()=>e(o).createElement(ot.SkeletonLoader,{align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(o).createElement(Ft,null,e(o).createElement(ot.SkeletonLoader,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(o).createElement(L.Column,null,e(o).createElement(Qe.Row,{margin:"0 0 10px",justify:"space-between"},e(o).createElement(Pt,{width:"120px"}),e(o).createElement(Pt,{width:"60px"})),e(o).createElement(Qe.Row,{justify:"space-between"},e(o).createElement(Pt,{width:"75px"}),e(o).createElement(Pt,{width:"35px"})))),Lt=x.default(L.Column).attrs({align:"center"})`
  position: relative;
  width: ${g.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,Dt=x.default(te.Text).attrs({weight:600,size:38})`
  margin-top: 33px;
  margin-bottom: 18px;
`,Rt=x.default(Qe.Row).attrs({justify:"center"})`
  margin-bottom: 22px;
  min-height: 25px;
`,Ht=x.default(te.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,$t=x.default(te.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,It=x.default(de.ButtonPair)`
  width: 296px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,zt=x.default(L.Column).attrs({align:"center",padding:"49px 0"})``,Ot=e(o).memo((t=>{const{balance:n,balanceChange:a,isFetching:i,isMainnet:l,sendButtonText:r,depositButtonText:s,showSendSelectionModal:c,showDepositSelectionModal:u}=t,d=!l||i?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":a>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":a<0?"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)":"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)",m=0===n?"$0.00":S.formatDollarAmount(n),p=0===a?"+$0.00":S.formatDollarAmount(a,!0),g=a>0?"#21E56F":a<0?"#EB3742":"#777777",h=S.formatPercentage(C.calculateDollarChangePercentage(n,a),"0.00%",!0);return e(o).createElement(Lt,{background:d},i?e(o).createElement(zt,null,e(o).createElement(ot.SkeletonLoader,{width:"150px",height:"10px",borderRadius:"6px",backgroundColor:"#4D4D4D",margin:"0 0 10px 0"}),e(o).createElement(ot.SkeletonLoader,{width:"75px",height:"10px",borderRadius:"6px",backgroundColor:"#484848"})):l?e(o).createElement(e(o).Fragment,null,e(o).createElement(Dt,null,m),e(o).createElement(Rt,null,e(o).createElement(Ht,{color:g},p),e(o).createElement($t,{color:g,backgroundColor:T.hexToRGB(g,.1)},h))):e(o).createElement(zt,null,e(o).createElement(te.Text,{size:36,weight:"bold",color:"#777"},"–")),e(o).createElement(It,{primaryTheme:"default",primaryText:r,primaryDisabled:i,onPrimaryClicked:c,secondaryText:s,secondaryDisabled:i,onSecondaryClicked:u,buttonPairStyle:de.ButtonPairStyle.Small}))})),Ut=x.default.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,Kt=e(o).memo((t=>{const n=o.useCallback((e=>null!=e?e:t.unknownTokenText),[t.unknownTokenText]);return e(o).createElement(e(o).Fragment,null,t.data.map(((a,i)=>{var l,r,s;const c=w.assetKeyExtractor(a,i),u=S.amountToUiAmount(a.data.amount,a.data.decimals);switch(a.type){case"solana":return e(o).createElement(Ut,{key:c},e(o).createElement(D.AssetRow,{balance:u,name:a.data.name,symbol:a.data.symbol,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>t.onClick({name:a.data.name,symbol:a.data.symbol})}));case"spl-token":{const i=t.customMetaMap.get(a.data.mintPubKey),d=null!==(r=null!==(l=a.data.symbol)&&void 0!==l?l:null==i?void 0:i.symbol)&&void 0!==r?r:null;return e(o).createElement(Ut,{key:c},e(o).createElement(D.AssetRow,{balance:u,mint:a.data.mintPubKey,name:n(null!==(s=a.data.name)&&void 0!==s?s:null==i?void 0:i.name),symbol:d,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>{var e;return t.onClick({mint:a.data.mintPubKey,name:n(null!==(e=a.data.name)&&void 0!==e?e:null==i?void 0:i.name),symbol:d})}}))}}})))})),Nt=x.default(Qe.Row).attrs({justify:"center"})`
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
`,jt=e(o).memo((t=>e(o).createElement(Nt,{onClick:t.onClick},e(o).createElement(Et.IconWrapper,null,e(o).createElement(le.TokenListSettingsIcon,null)),e(o).createElement(te.Text,{size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0},t.buttonText))));var Wt=l("9AO5f");le=l("hJDxl"),o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),b=l("82Ilk"),v=l("ixd3d"),ne=l("3rE52"),A=l("fMhDQ");const Zt=x.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,Qt=()=>{const{t:t}=k.useTranslation(),{accountClient:n}=b.useSelectedSolanaAccount(),{isRichTransactionsEnabled:a}=v.useFeatureFlags(),{data:i}=A.useFetchConnection(),l="mainnet-beta"===(null==i?void 0:i.cluster);return e(o).createElement(Zt,null,e(o).createElement(ne.PageHeader,null,t("recentActivityPrimaryText")),a&&l?e(o).createElement(nt,{publicKey:n.publicKey}):e(o).createElement(Ie,{publicKey:n.publicKey}))};o=l("aZikt"),k=l("7Qmuu");var Vt=l("69REY"),_t=l("9OxTN"),Yt=l("kOmUt"),Gt=(E=l("g9lcT"),l("6oQjh"));b=l("82Ilk"),v=l("ixd3d"),A=l("fMhDQ"),o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu");const Xt=(x=l("hHMPk")).default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 15px;
  > * {
    margin: 5px;
  }
`;o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),w=l("2zUeX"),o=l("aZikt"),M=l("6rMcH"),o=l("aZikt"),x=l("hHMPk"),Yt=l("kOmUt"),w=l("2zUeX");var Jt=l("jEn2x"),qt=(k=l("7Qmuu"),b=l("82Ilk"),A=l("fMhDQ"),re=l("lPkGw"),o=l("aZikt"),M=l("6rMcH"),o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),w=l("2zUeX"),T=l("99Anx"),l("7eQt4")),en=(Yt=l("kOmUt"),l("2aCEZ")),tn=(I=l("7Lj33"),S=l("cFuyE"),E=l("g9lcT"),A=l("fMhDQ"),l("4CRqq")),nn=l("ioKPb");ne=l("3rE52"),te=l("g7X40"),de=l("aADTv"),v=l("ixd3d"),Jt=l("jEn2x"),b=l("82Ilk"),o=l("aZikt"),x=l("hHMPk"),le=l("hJDxl"),te=l("g7X40");const an=x.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  left: 4px;
  top: 4px;
  padding: 4px 6px;
  margin: 8px;
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(15px);
  border-radius: 6px;
`,ln=x.default.div`
  padding-left: 6px;
  padding-right: 4px;
`,on=x.default(te.StyledText).attrs({textAlign:"left",weight:600,noWrap:!0})``,rn=e(o).memo((t=>{const{title:n,amount:a,symbol:i}=t;return e(o).createElement(an,null,e(o).createElement(le.MagicEdenCirleIcon,null),e(o).createElement(ln,null,e(o).createElement(on,{opacity:.5,size:12,lineHeight:16,textTransform:"capitalize"},n),e(o).createElement(on,{noWrap:!0,lineHeight:20,textTransform:"capitalize"},`${a} ${i}`)))}));L=l("dczY0");const sn=x.default.div`
  display: flex;
  flex-direction: column;
`,cn=x.default.div`
  position: relative;
`,un=x.default.div`
  > * {
    margin: 10px 0px;
  }
  margin-bottom: 20px;
`,dn=x.default.div`
  padding: 16px 0px;
  display: flex;
  gap: 10px;
`,mn=x.default.div`
  display: flex;
  flex-wrap: wrap;
`,pn=x.default.div`
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
`,gn=x.default(de.Button)`
  margin-bottom: 10px;
`,hn=e(o).memo((t=>{var n,a,i,l,r,s,c,u,d,m;const{collectible:p,collectionKey:g}=t,{uri:h,mintPubKey:f,amount:y,decimals:x,name:C,pubkey:M}=p,F=S.amountToUiAmount(y,x),{t:P}=k.useTranslation(),{isListOnMarketplaceEnabled:B}=v.useFeatureFlags(),D=tn.useListCollectibleStore((e=>e.setListCollectible)),R=tn.useListCollectibleStore((e=>e.setListPrice)),H=null!==(n=w.useFetchSPLTokenJSONMetadata(h).data)&&void 0!==n?n:null;let $,z,O,U;H&&($=null==H?void 0:H.external_url,z=null==H?void 0:H.description,O=null==H?void 0:H.attributes,U=null==H?void 0:H.image);const K=o.useMemo((()=>C&&C.length>0?C:(null==H?void 0:H.name)?null==H?void 0:H.name:p.mintPubKey?p.mintPubKey:void e(o).Fragment),[C,H]),N=w.useSelectBestMedia(H),j=F>1,{showSendModal:W,showCollectibleListingModal:Z,showEditCollectibleListingModal:Q}=E.useModals(),V=null===(a=A.useFetchConnection())||void 0===a?void 0:a.data,_=null!==(i=null==V?void 0:V.cluster)&&void 0!==i?i:"mainnet-beta",{accountClient:Y}=b.useSelectedSolanaAccount(),G=Y.publicKey.toString(),X=qt.parseURL($),J=Yt.useSubscribeListedSPLCollectible(Jt.getAPIEnvironment(),_,G,M),q="SemiFungible"!==p.standard&&"unknownTokens"!==g,ee=null===(r=null===(l=null==J?void 0:J.listings)||void 0===l?void 0:l.magic_eden)||void 0===r?void 0:r.url,ae=o.useCallback((()=>{ee&&window.open(ee)}),[ee]);return e(o).createElement(sn,null,e(o).createElement(ne.PageHeader,{items:[{label:P("collectibleDetailViewOnSolscan"),onClick:()=>_&&window.open(I.generateTokenSolscanUrl(f,_),"_blank")}]},K,j?e(o).createElement("label",{style:{opacity:.5}}," (",Math.floor(F),")"):null),e(o).createElement(cn,null,e(o).createElement(nn.CollectibleDisplay,{width:328,height:328,media:N,image:U,enableCameraControls:!0,enableMedia:!0}),(null===(c=null===(s=null==J?void 0:J.listings)||void 0===s?void 0:s.magic_eden)||void 0===c?void 0:c.listingPriceUiAmount)?e(o).createElement(rn,{title:P("collectiblesListed"),amount:null===(d=null===(u=J.listings)||void 0===u?void 0:u.magic_eden)||void 0===d?void 0:d.listingPriceUiAmount,symbol:"SOL"}):null),e(o).createElement(dn,null,J?null:e(o).createElement(de.Button,{theme:"primary",onClick:()=>{const e={type:"spl-token",data:Object.assign(Object.assign({},p),{usd:0,usd24hChange:0})};W(e),(()=>{const e=document.querySelector("audio"),t=document.querySelector("video"),n=null!=e?e:t;(null==n?void 0:n.paused)||null==n||n.pause()})()}},P("collectibleDetailSend")),B&&q&&!J?e(o).createElement(de.Button,{theme:"primary",onClick:()=>{D({asset:p,listings:null}),Z(p)}},P("collectibleDetailList")):null,B&&(null===(m=null==J?void 0:J.listings)||void 0===m?void 0:m.magic_eden)?e(o).createElement(L.Column,null,e(o).createElement(gn,{theme:"primary",disabled:!ee,onClick:ae},P("listStatusViewOnMagicEden")),e(o).createElement(de.Button,{theme:"primary",onClick:()=>{var e,t,n;D(J),R(en.lamportsToSolana(null!==(n=null===(t=null===(e=J.listings)||void 0===e?void 0:e.magic_eden)||void 0===t?void 0:t.listingPrice)&&void 0!==n?n:0)),Q(p)}},P("collectiblesEditListing"))):null),e(o).createElement(un,null,(z||$)&&e(o).createElement(te.Text,{weight:500,size:16,color:"#777",textAlign:"left"},P("collectibleDetailDescription")),z&&e(o).createElement(te.Text,{size:14,textAlign:"left",lineHeight:20},z),X&&e(o).createElement(te.Text,{href:X.href,color:"#8A81F8",hoverColor:T.hexToRGB("#8A81F8",.5),size:14,weight:500,rel:"noopener noreferrer",target:"_blank"},X.host)),e(o).createElement(un,null,O&&O.length&&e(o).createElement(e(o).Fragment,null,e(o).createElement(te.Text,{weight:500,size:16,color:"#777",textAlign:"left"},P("collectibleDetailProperties")),e(o).createElement(mn,null,O.map((t=>e(o).createElement(pn,{key:t.trait_type},e(o).createElement(te.Text,{lineHeight:15,weight:500,size:12,color:"#777",textTransform:"uppercase",textAlign:"left"},t.trait_type),e(o).createElement(te.Text,{lineHeight:17,color:"white",size:14,weight:500,textAlign:"left"},t.value))))))))}));nn=l("ioKPb");const fn=e(o).memo((t=>{const{collectible:n,media:a,image:i,collectionKey:l}=t,{pushDetailView:r}=M.useDetailViews(),s=o.useCallback((()=>{r(e(o).createElement(hn,{collectible:n,collectionKey:l}),{shouldShowBackButton:!0})}),[n]);return e(o).createElement(nn.CollectibleDisplay,{onClick:s,media:a,image:i,enableCameraControls:!1})}));ne=l("3rE52"),te=l("g7X40"),o=l("aZikt"),x=l("hHMPk"),te=l("g7X40");const yn=x.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  left: 4px;
  ${({position:e})=>{switch(e){case"bottom-left":return"\n          bottom: 4px;\n          padding: 6px 11px;\n        ";case"top-left":return"\n          top: 4px;\n          padding: 2px 6px;\n        "}}}
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(15px);
  border-radius: 6px;
`,bn=x.default(te.StyledText).attrs({lineHeight:17,weight:600,noWrap:!0})``,En=e(o).memo((t=>{const{name:n,count:a,position:i,textSize:l}=t;return e(o).createElement(yn,{position:i},e(o).createElement(bn,{maxWidth:"104px",size:"small"===l?12:14,noWrap:!0,textTransform:"capitalize"},n),a?e(o).createElement(bn,{opacity:.5,size:14,paddingLeft:4},a):null)})),vn=x.default(te.StyledText).attrs({as:"span",weight:500})``,xn=x.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,kn=x.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,wn=e(o).memo((t=>{var n;const{collectible:a,collectionKey:i}=t,{accountClient:l}=b.useSelectedSolanaAccount(),r=l.publicKey.toString(),{t:s}=k.useTranslation(),c=A.useFetchConnection().data,u=null!==(n=null==c?void 0:c.cluster)&&void 0!==n?n:"mainnet-beta",d=Yt.useSubscribeListedSPLCollectible(Jt.getAPIEnvironment(),u,r,a.pubkey),m=w.useFetchSPLTokenJSONMetadata(a.uri),{isFetched:p}=m,g=m.data||null;let h,f;return g&&(h=null==g?void 0:g.image,f=w.parseMediaFromImage(g)),e(o).createElement(xn,null,p?e(o).createElement(e(o).Fragment,null,e(o).createElement(fn,{key:a.mintPubKey,collectionKey:i,collectible:a,media:f,image:h}),d?e(o).createElement(En,{name:s("collectiblesListed"),textSize:"small",position:"top-left"}):null):e(o).createElement(kn,null,e(o).createElement(re.Spinner,null)))})),Tn=e(o).memo((t=>{const{name:n,collection:a}=t;return e(o).createElement(e(o).Fragment,null,e(o).createElement(ne.PageHeader,null,e(o).createElement(vn,{textTransform:"capitalize"},n)," ",e(o).createElement(vn,{opacity:.5},a.items.length)),e(o).createElement(Xt,null,a.items.map((t=>e(o).createElement(wn,{collectible:t,collectionKey:a.key})))))}));nn=l("ioKPb");const Sn=e(o).memo((t=>{const{name:n,collection:a,media:i,image:l}=t,{pushDetailView:r}=M.useDetailViews(),s=o.useCallback((()=>r(e(o).createElement(Tn,{name:n,collection:a}),{shouldShowBackButton:!0})),[n,a,r]);return e(o).createElement(nn.CollectibleDisplay,{onClick:s,media:i,image:l,enableCameraControls:!1})}));re=l("lPkGw");const Cn=x.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,An=x.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Mn=e(o).memo((t=>{var n,a;const{collectionKey:i,collection:l,nrOfListed:r}=t,{t:s}=k.useTranslation(),c=l.items[0],u=w.useFetchSPLTokenJSONMetadata(l.uri),{isFetched:d}=u,m=u.data||null;let p;const g=null!==(n=w.useBestCollectionName(m))&&void 0!==n?n:i,h=null!==(a=l.name)&&void 0!==a?a:g;m&&(p=m.image);const f=w.useSelectCollectionMedia(m),y=l.items.length;let b=y.toString();if(1==y){const[e]=l.items;"SemiFungible"===e.standard&&(b=e.amount)}return e(o).createElement(Cn,null,d?e(o).createElement(e(o).Fragment,null,1===y?e(o).createElement(fn,{key:c.pubkey,collectionKey:i,collectible:c,media:f,image:p}):e(o).createElement(Sn,{key:l.key,name:h,collection:l,media:f,image:p}),r>0?e(o).createElement(En,{name:1===y&&1===r?s("collectiblesListed"):s("collectiblesNrOfListed",{nrOfListed:r}),textSize:"small",position:"top-left"}):null,e(o).createElement(En,{name:h,count:b,position:"bottom-left"})):e(o).createElement(An,null,e(o).createElement(re.Spinner,null)))}));o=l("aZikt");const Fn=(x=l("hHMPk")).default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,Pn=e(o).memo((t=>{var n;const{collectionKey:a,collection:i}=t,l=i.items[0],r=null!==(n=i.name)&&void 0!==n?n:a,s=i.items.length;let c=s.toString();if(1==s){const[e]=i.items;"SemiFungible"===e.standard&&(c=e.amount)}return e(o).createElement(Fn,null,1===s?e(o).createElement(fn,{key:l.pubkey,collectionKey:a,collectible:l,media:null,image:void 0}):e(o).createElement(Sn,{key:i.key,name:r,collection:i,media:null,image:void 0}),e(o).createElement(En,{name:r,count:c,position:"bottom-left"}))}));te=l("g7X40"),T=l("99Anx"),le=l("hJDxl"),E=l("g9lcT");const Bn=x.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`,Ln=x.default.div`
  background-color: ${T.hexToRGB("#e5a221",.7)};
  align-items: center;
  border-radius: 6px;
  margin: 5px;
  padding: 8px 10px;
  display: flex;
  cursor: pointer;
`,Dn=x.default(te.StyledText).attrs({textAlign:"left",weight:500,size:14,noWrap:!0})`
  margin-left: 7px;
`,Rn=e(o).memo((t=>{const{collections:n,listedCollectibles:a,isError:i,listingsError:l,hasUnknownTokens:r}=t,{t:s}=k.useTranslation(),{showListingsErrorModal:c}=E.useModals();return i?e(o).createElement(Bn,null,s("homeErrorDescription")):n&&n.length?e(o).createElement(e(o).Fragment,null,l?e(o).createElement(Ln,{onClick:c},e(o).createElement(le.InfoIcon,{fill:"#fff"}),e(o).createElement(Dn,null,s("collectiblesUnableToLoadListingsFrom",{marketplace:"Magic Eden"}))):null,e(o).createElement(Xt,null,n.map(((t,i)=>{const l=(null!=a?a:[]).reduce(((e,n)=>e+ +(n.asset.collectionPubKey===t.key)),0);let s=e(o).createElement(Mn,{key:`${t.name}-${i}`,collectionKey:t.key,collection:t,nrOfListed:l});return i===n.length-1&&r&&0!==t.items.length&&(s=e(o).createElement(Pn,{collectionKey:t.key,collection:t})),s})))):e(o).createElement(Bn,null,s("collectiblesNoCollectibles"))}));se=l("eopQk"),ne=l("3rE52"),c=l("lwple"),Jt=l("jEn2x");const Hn=()=>{var t,n;const{t:a}=k.useTranslation(),{showDepositAssetModal:i}=E.useModals(),{isListOnMarketplaceEnabled:l,isRpcProxyEnabled:r}=v.useFeatureFlags(),{accountClient:s}=b.useSelectedSolanaAccount(),u=s.publicKey.toString(),d=A.useFetchConnection().data,m=null!==(t=null==d?void 0:d.cluster)&&void 0!==t?t:"mainnet-beta",p=e(Vt)(_t.getNFTBlocklist),[g]=Gt.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0),h=p.loading?null:null!==(n=null==p?void 0:p.value)&&void 0!==n?n:[],{data:f,isError:y}=Yt.useSPLTokenAccountsByCollectibleStandard(Jt.getAPIEnvironment(),m,u,g,h,r,l),x=!!(null==f?void 0:f.error),{collections:w,collectionsLoaded:T}=Yt.useSubscribeSPLTokenCollections(Jt.getAPIEnvironment(),m,u,g,h,r,l),S=Yt.useSubscribeListedSPLCollectibles(Jt.getAPIEnvironment(),m,u),C=o.useMemo((()=>w.filter((e=>e.uri))),[w]),M=o.useMemo((()=>w.filter((e=>!e.uri)).map((e=>{const{items:t}=e;return t})).flat(2)),[w]),F={key:"unknownTokens",name:"Unknown Tokens",uri:"",items:M};return 0===M.length||C.find((e=>"Unknown Tokens"===e.name))||C.push(F),e(o).createElement(se.FullHeightLoadingContent,{isLoading:!y&&!T},e(o).createElement(ne.PageHeader,{items:[{label:a("collectiblesReceiveCollectible"),onClick:()=>i({symbol:null,mint:void 0})}]},a("collectiblesPrimaryText")),e(o).createElement(Rn,{isError:y,collections:C,listedCollectibles:S,listingsError:!!x,hasUnknownTokens:0!==M.length}))};H=l("h6IZU"),o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),c=l("lwple"),S=l("cFuyE"),$=l("6oEu9");var $n=l("7h7pw"),In=(qt=l("7eQt4"),F=l("8C6BZ"),b=l("82Ilk"),M=l("6rMcH"),A=l("fMhDQ"),l("02ZG7")),zn=(E=l("g9lcT"),Le=l("aZo5h"),Gt=l("6oQjh"),l("d3kzB"));te=l("g7X40"),le=l("hJDxl"),o=l("aZikt"),x=l("hHMPk"),F=l("8C6BZ"),b=l("82Ilk"),le=l("hJDxl");const On=x.default.input`
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
`,Un=x.default.form`
  border: 1px solid #323232;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 15px;
  width: 230px;
  position: relative;
`,Kn=x.default.div`
  position: absolute;
  right: 18px;
  top: 18px;
  svg {
    fill: #666;
  }
  &:hover {
    cursor: pointer;
    svg {
      fill: white;
    }
  }
`,Nn=()=>{const t=o.useRef(null),{accountMeta:n,setSelectedAccountName:a}=b.useSelectedSolanaAccount(),i=n.name,[l,r]=o.useState(i),s=o.useCallback((()=>{var e;r(""),null===(e=t.current)||void 0===e||e.focus()}),[r,t.current]),c=o.useCallback((e=>r(e.currentTarget.value)),[r]),u=o.useCallback((()=>{l.length>0&&l!==i&&(F.analytics.capture("changeAccountName",{data:{name:l}}),a(l))}),[i,l,a]),d=o.useCallback((e=>{e.preventDefault(),u()}),[u]);return e(o).createElement(Un,{onSubmit:d},e(o).createElement(On,{ref:t,maxLength:15,value:l,onChange:c,onBlur:u}),e(o).createElement(Kn,{onClick:s},e(o).createElement(le.PencilIcon,{width:18})))};de=l("aADTv"),ne=l("3rE52");var jn=l("3xCjQ");const Wn=x.default.div`
  margin-top: 30px;
  margin-bottom: 33px;
  p {
    margin-top: 10px;
  }
`,Zn=x.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${zn.ContentRowContainer} {
    margin-bottom: 10px;
  }
`,Qn=x.default.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  > * {
    margin-top: 10px;
  }
`,Vn=()=>{const{t:t}=k.useTranslation(),{accountClient:n,accountMeta:a}=b.useSelectedSolanaAccount(),{accountMetas:i}=b.useSolanaAccounts(),{pushDetailView:l}=M.useDetailViews(),{showRemoveAccountModal:r,showResetSeedModal:s,showExportMnemonicModal:u,showExportPrivateKeyModal:d}=E.useModals(),m=1===i.length,p=a.type===c.AccountType.Ledger,g=a.type===c.AccountType.PrivateKey,h=n.publicKey.toString();return e(o).createElement(Zn,null,e(o).createElement(Wn,null,e(o).createElement(Nn,null),e(o).createElement(te.Text,{size:16,color:"#777777"},"(",S.formatHashMedium(h),")")),e(o).createElement(zn.ContentRow,{primaryContent:t("settingsDisplayLanguage"),secondaryContent:$n.languageDisplayValue(k.i18next.language),onClick:()=>{l(e(o).createElement(na,null),{shouldShowBackButton:!0})}}),e(o).createElement(zn.ContentRow,{primaryContent:t("settingsAddressBookPrimary"),secondaryContent:t("settingsAddressBookSecondary"),onClick:()=>{l(e(o).createElement(aa,null),{shouldShowBackButton:!0})}}),e(o).createElement(zn.ContentRow,{primaryContent:t("settingsTrustedAppsPrimary"),secondaryContent:t("settingsTrustedAppsSecondary"),onClick:()=>{l(e(o).createElement(Xn,null),{shouldShowBackButton:!0})}}),e(o).createElement(zn.ContentRow,{primaryContent:t("settingsChangeNetworkPrimary"),secondaryContent:t("settingsChangeNetworkSecondary"),onClick:()=>{l(e(o).createElement(Yn,null),{shouldShowBackButton:!0})}}),e(o).createElement(zn.ContentRow,{primaryContent:t("settingsSecurityPrimary"),secondaryContent:t("settingsSecuritySecondary"),onClick:()=>{l(e(o).createElement(ia,null),{shouldShowBackButton:!0})}}),e(o).createElement(Qn,null,!p&&e(o).createElement(e(o).Fragment,null,e(o).createElement(de.Button,{"data-testid":"settings-button-export-private-key",disabled:p,onClick:d,title:p?t("settingsErrorCannotExportLedgerPrivateKey"):""},t("settingsExportPrivateKey")),!g&&e(o).createElement(de.Button,{"data-testid":"settings-button-show-secret-recovery-phrase",onClick:u},t("settingsShowSecretRecoveryPhrase"))),e(o).createElement(de.Button,{disabled:m,theme:"warning",onClick:r,title:m?t("settingsErrorCannotRemoveAllWallets"):""},t("settingsRemoveWallet")),e(o).createElement(de.Button,{theme:"warning",onClick:s},t("settingsResetSecretRecoveryPhrase"))))},_n=x.default.div`
  > * {
    margin-top: 10px;
  }
  *:first-child {
    margin-top: 0px;
  }
`,Yn=()=>{var t;const{t:n}=k.useTranslation(),a=null===(t=A.useFetchConnection())||void 0===t?void 0:t.data,i=null==a?void 0:a.mainnetRpcUrl,l=null==a?void 0:a.cluster,{mutateAsync:r}=In.useStoreStorageValue(c.StorageKeys.Cluster),s=o.useMemo((()=>[{cluster:"mainnet-beta",primaryContent:n("settingsNetworkMainnetBeta"),secondaryContent:i},{cluster:"testnet",primaryContent:n("settingsNetworkTestnet"),secondaryContent:H.clusterApiUrl("testnet")},{cluster:"devnet",primaryContent:n("settingsNetworkDevnet"),secondaryContent:H.clusterApiUrl("devnet")},{cluster:"localhost",primaryContent:n("settingsNetworkLocalhost"),secondaryContent:$.DEFAULT_LOCALHOST_RPC_URL}]),[i]);return e(o).createElement(e(o).Fragment,null,e(o).createElement(ne.PageHeader,null,n("settingsChangeNetworkPrimary")),e(o).createElement(_n,null,s.map((t=>e(o).createElement(zn.ContentRow,{key:t.cluster,primaryContent:t.primaryContent,secondaryContent:t.secondaryContent,rightContent:l===t.cluster&&e(o).createElement(le.CheckmarkIcon,null),onClick:()=>{var e;(e=t.cluster)!==l&&r(e)}})))))},Gn=x.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,Xn=()=>{var t,n;const{t:a}=k.useTranslation(),{accountClient:i}=b.useSelectedSolanaAccount(),[l,r,s]=Gt.useStorage(c.StorageKeys.TrustedApplicationsByOwnerBrowser,{});if(r)return null;const u=i.publicKey.toString(),d=null!==(t=l[u])&&void 0!==t?t:{},m=null!==(n=Object.keys(d))&&void 0!==n?n:[],p=m.length>0;return e(o).createElement(e(o).Fragment,null,e(o).createElement(ne.PageHeader,null,a("settingsTrustedAppsPrimary")),p?e(o).createElement(e(o).Fragment,null,e(o).createElement(_n,null,m.map((t=>{var n;return e(o).createElement(zn.ContentRow,{key:t,primaryContent:null===(n=qt.parseURL(t))||void 0===n?void 0:n.host,secondaryContent:null,rightContent:e(o).createElement(de.Button,{fontSize:12,width:"70px",theme:"warning",paddingY:5,onClick:()=>(e=>{const t=Object.assign({},d);delete t[e],s(Object.assign(Object.assign({},l),{[u]:t}))})(t)},a("settingsTrustedAppsRevoke"))})})))):e(o).createElement(Gn,null,a("settingsNoTrustedApps")))},Jn=x.default(te.Text).attrs({size:16,weight:500,color:"white",textAlign:"left"})`
  margin-top: 30px;
  margin-bottom: 14px;
`,qn=x.default(_n)`
  padding-bottom: 20px;
`,ea=x.default(_n)`
  padding-left: 0px;
  padding-right: 0px;
`,ta=x.default(te.Text).attrs({size:16,weight:500,color:"#666666"})`
  font-style: italic;
`,na=()=>{const{t:t}=k.useTranslation(),[n,a]=o.useState(k.i18next.language);return e(o).createElement(e(o).Fragment,null,e(o).createElement(ne.PageHeader,null,t("settingsDisplayLanguage")),e(o).createElement(qn,null,$.SUPPORTED_LANGUAGES.map((t=>e(o).createElement(zn.ContentRow,{key:t.value,primaryContent:t.displayValue,secondaryContent:null,rightContent:$n.languageMatches(n,t.value)&&e(o).createElement(le.CheckmarkIcon,null),onClick:()=>{F.analytics.capture("displayLanguageChanged",{data:{targetLanguage:t.value}}),k.i18next.changeLanguage(t.value),a(t.value)}})))))},aa=()=>{const{t:t}=k.useTranslation(),{savedAddresses:n,recentAddresses:a}=Le.useAddressBook(),{showAddAddressModal:i,showEditAddressModal:l}=E.useModals();return o.useEffect((()=>{F.analytics.capture("addressBookOpen")}),[]),e(o).createElement(e(o).Fragment,null,e(o).createElement(ne.PageHeader,{icon:e(o).createElement(le.PlusIcon,null),onIconClick:()=>i(void 0)},t("settingsAddressBookPrimary")),e(o).createElement(ea,null,n.length>0&&n.map((t=>e(o).createElement(zn.ContentRow,{key:t.address,primaryContent:t.label,secondaryContent:null,rightContent:e(o).createElement(te.Text,{size:16,color:"#666666"},S.formatHashMedium(t.address,4)),onClick:()=>{l(t)}}))),a.length>0&&e(o).createElement(e(o).Fragment,null,e(o).createElement(Jn,null,t("settingsAddressBookRecentlyUsed")),a.map((n=>e(o).createElement(zn.ContentRow,{key:n,primaryContent:e(o).createElement(ta,null,t("settingsAddressBookNoLabel")),secondaryContent:null,rightContent:e(o).createElement(te.Text,{size:16,color:"#666666"},S.formatHashMedium(n,4)),onClick:()=>{i(n)}}))))),0===n.length&&0===a.length&&e(o).createElement(Gn,null,e(o).createElement(te.Text,{size:18,weight:500,color:"#666666"},t("settingsNoAddresses"))))},ia=()=>{const{t:t}=k.useTranslation(),{showChangePasswordModal:n,showChangeLockTimerModal:a}=E.useModals(),[i,l,r]=Gt.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0);return l?null:e(o).createElement(e(o).Fragment,null,e(o).createElement(ne.PageHeader,null,t("settingsSecurityPrimary")),e(o).createElement(_n,null,e(o).createElement(zn.ContentRow,{primaryContent:t("settingsChangePasswordPrimary"),secondaryContent:t("settingsChangePasswordSecondary"),onClick:n}),e(o).createElement(zn.ContentRow,{primaryContent:t("settingsAutoLockTimerPrimary"),secondaryContent:t("settingsAutoLockTimerSecondary"),onClick:a}),e(o).createElement(zn.ContentRow,{primaryContent:t("settingsSuspiciousCollectiblesPrimary"),secondaryContent:t("settingsSuspiciousCollectiblesSecondary"),rightContent:e(o).createElement(jn.ToggleSwitch,{checked:i,onChange:()=>r(!i)})})))};o=l("aZikt"),x=l("hHMPk"),Pe=l("d3pmY"),qt=l("7eQt4"),k=l("7Qmuu");var la,oa,ra,sa=l("bXcFZ"),ca=(T=l("99Anx"),_=l("4o0lv"),o=l("aZikt"),{});la=ca,oa=function(){var e=6e4,t=36e5,n="millisecond",a="second",i="minute",l="hour",o="day",r="week",s="month",c="quarter",u="year",d="date",m="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},y={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+f(a,2,"0")+":"+f(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(a,s),l=n-i<0,o=t.clone().add(a+(l?-1:1),s);return+(-(a+(n-i)/(l?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:s,y:u,w:r,d:o,D:d,h:l,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",E={};E[b]=h;var v=function(e){return e instanceof T},x=function e(t,n,a){var i;if(!t)return b;if("string"==typeof t){var l=t.toLowerCase();E[l]&&(i=l),n&&(E[l]=n,i=l);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var r=t.name;E[r]=t,i=r}return!a&&i&&(b=i),i||!a&&b},k=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},w=y;w.l=x,w.i=v,w.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function h(e){this.$L=x(e.locale,null,!0),this.parse(e)}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(p);if(a){var i=a[2]-1||0,l=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)):new Date(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return w},f.isValid=function(){return!(this.$d.toString()===m)},f.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return k(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<k(e)},f.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var n=this,c=!!w.u(t)||t,m=w.p(e),p=function(e,t){var a=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?a:a.endOf(o)},g=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,f=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(m){case u:return c?p(1,0):p(31,11);case s:return c?p(1,f):p(0,f+1);case r:var E=this.$locale().weekStart||0,v=(h<E?h+7:h)-E;return p(c?y-v:y+(6-v),f);case o:case d:return g(b+"Hours",0);case l:return g(b+"Minutes",1);case i:return g(b+"Seconds",2);case a:return g(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,t){var r,c=w.p(e),m="set"+(this.$u?"UTC":""),p=(r={},r[o]=m+"Date",r[d]=m+"Date",r[s]=m+"Month",r[u]=m+"FullYear",r[l]=m+"Hours",r[i]=m+"Minutes",r[a]=m+"Seconds",r[n]=m+"Milliseconds",r)[c],g=c===o?this.$D+(t-this.$W):t;if(c===s||c===u){var h=this.clone().set(d,1);h.$d[p](g),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](g);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[w.p(e)]()},f.add=function(n,c){var d,m=this;n=Number(n);var p=w.p(c),g=function(e){var t=k(m);return w.w(t.date(t.date()+Math.round(e*n)),m)};if(p===s)return this.set(s,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===o)return g(1);if(p===r)return g(7);var h=(d={},d[i]=e,d[l]=t,d[a]=1e3,d)[p]||1,f=this.$d.getTime()+n*h;return w.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var a=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),l=this.$H,o=this.$m,r=this.$M,s=n.weekdays,c=n.months,u=function(e,n,i,l){return e&&(e[n]||e(t,a))||i[n].slice(0,l)},d=function(e){return w.s(l%12||12,e,"0")},p=n.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:w.s(r+1,2,"0"),MMM:u(n.monthsShort,r,c,3),MMMM:u(c,r),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,s,2),ddd:u(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(l),HH:w.s(l,2,"0"),h:d(1),hh:d(2),a:p(l,o,!0),A:p(l,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return a.replace(g,(function(e,t){return t||h[e]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,d,m){var p,g=w.p(d),h=k(n),f=(h.utcOffset()-this.utcOffset())*e,y=this-h,b=w.m(this,h);return b=(p={},p[u]=b/12,p[s]=b,p[c]=b/3,p[r]=(y-f)/6048e5,p[o]=(y-f)/864e5,p[l]=y/t,p[i]=y/e,p[a]=y/1e3,p)[g]||y,m?b:w.a(b)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return E[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=x(e,t,!0);return a&&(n.$L=a),n},f.clone=function(){return w.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),S=T.prototype;return k.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",l],["$W",o],["$M",s],["$y",u],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,T,k),e.$i=!0),k},k.locale=x,k.isDayjs=v,k.unix=function(e){return k(1e3*e)},k.en=E[b],k.Ls=E,k.p={},k},"object"==typeof ca?ca=oa():"function"==typeof define&&define.amd?define(oa):(la="undefined"!=typeof globalThis?globalThis:la||self).dayjs=oa();var ua=new Uint8Array(16);function da(){if(!ra&&!(ra="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ra(ua)}var ma=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var pa=function(e){return"string"==typeof e&&ma.test(e)},ga=[],ha=0;ha<256;++ha)ga.push((ha+256).toString(16).substr(1));var fa=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(ga[e[t+0]]+ga[e[t+1]]+ga[e[t+2]]+ga[e[t+3]]+"-"+ga[e[t+4]]+ga[e[t+5]]+"-"+ga[e[t+6]]+ga[e[t+7]]+"-"+ga[e[t+8]]+ga[e[t+9]]+"-"+ga[e[t+10]]+ga[e[t+11]]+ga[e[t+12]]+ga[e[t+13]]+ga[e[t+14]]+ga[e[t+15]]).toLowerCase();if(!pa(n))throw TypeError("Stringified UUID is invalid");return n};var ya,ba=function(e,t,n){var a=(e=e||{}).random||(e.rng||da)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=a[i];return t}return fa(a)};!function(e){e.NetworkHealth="network-health",e.Cluster="cluster"}(ya||(ya={}));const Ea=o.createContext(null),va=({children:t})=>{const n=[],[a,i]=o.useReducer(((e,t)=>{switch(t.type){case"create":return e.concat(t.payload);case"delete":return e.filter((({id:e})=>e!==t.payload.id));case"reset":return n;default:throw new Error("There was an error dispatching a banner action.")}}),n),l=e=>i({type:"delete",payload:{id:e.id}});return e(o).createElement(Ea.Provider,{value:{banners:a,createBanner:t=>{const{type:n,variant:a,message:o,dismissable:r=!0,icon:s,autohide:c=!0,delay:u=5e3,onClick:d}=t;n&&a&&o||console.error("You must supply a type, variant and message when creating a Banner.");const m=ba();return i({type:"create",payload:{id:m,timestamp:e(ca)(new Date,"HH:mm:ss"),type:n,variant:a,message:o,dismissable:r,icon:s,autohide:c,delay:u,onClick:d}}),c&&setTimeout((()=>{l({id:m})}),u),m},deleteBanner:l,resetBanners:()=>i({type:"reset"})}},t)};E=l("g9lcT"),A=l("fMhDQ"),le=l("hJDxl");const xa=x.default.button`
  cursor: ${e=>e.onClick?"pointer":"default"};
  display: flex;
  align-items: center;
  vertical-align: middle;
  overflow: visible;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  width: 100%;
  padding: 10px 16px;
  svg {
    fill: #fff;
    margin-right: 8px;
  }
`,ka=x.default(Pe.motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{switch(e.variant){case sa.CTAVariant.Primary:return T.hexToRGB("#4E44CE",.7);case sa.CTAVariant.Success:return T.hexToRGB("#21E56F",.7);case sa.CTAVariant.Warning:return T.hexToRGB("#E5A221",.7);case sa.CTAVariant.Danger:return T.hexToRGB("#EB3742",.7);default:return T.hexToRGB("#E5A221",.7)}}};
  ${xa} {
    &:focus-visible {
      border-color: ${e=>{switch(e.variant){case sa.CTAVariant.Primary:return T.hexToRGB("#4E44CE",.7);case sa.CTAVariant.Success:return T.hexToRGB("#21E56F",.7);case sa.CTAVariant.Warning:return T.hexToRGB("#E5A221",.7);case sa.CTAVariant.Danger:return T.hexToRGB("#EB3742",.7);default:return T.hexToRGB("#E5A221",.7)}}};
    }
  }
`,wa=x.default.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;
  svg {
    margin-right: 10px;
  }
`,Ta=x.default.button`
  cursor: pointer;
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  overflow: visible;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  &:focus,
  &:focus-visible {
    border-color: ${T.hexToRGB("#FFFFFF",.3)};
  }
  svg {
    fill: #ffffff;
    margin: 0;
  }
`,Sa=()=>{const{banners:t,createBanner:n,deleteBanner:a}=(()=>{const e=o.useContext(Ea);if(!e)throw new Error("Missing banner context. Make sure you're wrapping your component in a <BannerProvider />");return e})(),i=t[t.length-1],{showNetworkHealthModal:l}=E.useModals(),{t:r,i18n:s}=k.useTranslation(),c=A.useFetchConnection(),u=null==c?void 0:c.data,d=null==u?void 0:u.cluster,m=_.useNetworkHealth(s.language).data;o.useEffect((()=>{if(!d)return;const e=t.find((e=>e.type===ya.Cluster));e&&a({id:e.id}),"mainnet-beta"!==d&&n({type:ya.Cluster,variant:sa.CTAVariant.Warning,message:r("connectionClusterInterpolated",{cluster:qt.capitalizeFirstLetter(d)}),dismissable:!1,autohide:!1})}),[d,r]),o.useEffect((()=>{if(!d)return;const i=t.find((e=>e.type===ya.NetworkHealth));if("mainnet-beta"===d){if(m){const{bannerVariant:t,bannerMessage:r,notificationMessageTitle:s,notificationMessage:c}=m;!!t&&!!r?r!==(null==i?void 0:i.message)&&n({type:ya.NetworkHealth,variant:t,message:r,dismissable:!1,icon:e(o).createElement(le.ExclamationMarkCircleIcon,{width:14,height:14,circleFill:"#FFFFFF",exclamationFill:"transparent"}),autohide:!1,onClick:c&&s?()=>l({variant:t,title:s,message:c}):void 0}):i&&a({id:i.id})}}else i&&a({id:i.id})}),[d,m]);const p=o.useCallback((()=>a({id:i.id})),[i]);return{banner:i,dismissBanner:p}},Ca=e(o).memo((t=>{const{banner:n,dismissBanner:a}=t;return e(o).createElement(Pe.AnimatePresence,null,n&&e(o).createElement(ka,{key:"banner",role:"banner","aria-live":(null==n?void 0:n.autohide)?"assertive":"polite","aria-atomic":"true",variant:n.variant,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeOut",duration:.2}},e(o).createElement(xa,{tabIndex:n.onClick?1:-1,onClick:n.onClick},n.icon&&n.icon,e(o).createElement(wa,null,n.message)),n.dismissable&&e(o).createElement(Ta,{onClick:a},e(o).createElement(le.CloseIcon,{width:14,fill:"#FFFFFF"}))))})),Aa=()=>{const t=Sa();return e(o).createElement(Ca,Object.assign({},t))};o=l("aZikt"),x=l("hHMPk"),Pe=l("d3pmY"),r=l("gDkTC"),M=l("6rMcH");var Ma,Fa=l("eatHE"),Pa=(o=l("aZikt"),x=l("hHMPk"),Pe=l("d3pmY"),/^\s+|\s+$/g),Ba=/^[-+]0x[0-9a-f]+$/i,La=/^0b[01]+$/i,Da=/^0o[0-7]+$/i,Ra=parseInt,Ha="object"==typeof n&&n&&n.Object===Object&&n,$a="object"==typeof self&&self&&self.Object===Object&&self,Ia=Ha||$a||Function("return this")(),za=Object.prototype.toString,Oa=Math.max,Ua=Math.min,Ka=function(){return Ia.Date.now()};function Na(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ja(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==za.call(e)}(e))return NaN;if(Na(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Na(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Pa,"");var n=La.test(e);return n||Da.test(e)?Ra(e.slice(2),n?2:8):Ba.test(e)?NaN:+e}Ma=function(e,t,n){var a,i,l,o,r,s,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=a,l=i;return a=i=void 0,c=t,o=e.apply(l,n)}function g(e){return c=e,r=setTimeout(f,t),u?p(e):o}function h(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=l}function f(){var e=Ka();if(h(e))return y(e);r=setTimeout(f,function(e){var n=t-(e-s);return d?Ua(n,l-(e-c)):n}(e))}function y(e){return r=void 0,m&&a?p(e):(a=i=void 0,o)}function b(){var e=Ka(),n=h(e);if(a=arguments,i=this,s=e,n){if(void 0===r)return g(s);if(d)return r=setTimeout(f,t),p(s)}return void 0===r&&(r=setTimeout(f,t)),o}return t=ja(t)||0,Na(n)&&(u=!!n.leading,l=(d="maxWait"in n)?Oa(ja(n.maxWait)||0,t):l,m="trailing"in n?!!n.trailing:m),b.cancel=function(){void 0!==r&&clearTimeout(r),c=0,a=s=i=r=void 0},b.flush=function(){return void 0===r?o:y(Ka())},b};const Wa=x.default(Pe.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8a81f8;
`,Za=({refs:t,activeRoute:n,onFinishedAnimating:a,isAnimating:i})=>{const[{x:l,width:r},s]=o.useState({x:0,width:0}),c=o.useCallback((()=>{t&&t[n]&&t[n].current&&s({x:t[n].current.offsetLeft,width:t[n].current.getBoundingClientRect().width})}),[n,t]);return o.useEffect((()=>{c()}),[n,t,c]),o.useEffect((()=>{const t=e(Ma)((()=>{c()}),500);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}})),e(o).createElement(Wa,{animate:{x:l,width:r},style:{opacity:i?1:0},onAnimationComplete:a,transition:{duration:.4,type:"spring"}})},Qa=x.default.div`
  position: relative;
  height: 60px;
  display: flex;
`,Va=x.default(Pe.motion.div)`
  flex: 1;
  overflow: auto;
  padding: 15px;
`,_a=x.default(Fa.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,Ya=({items:t})=>{const n=r.useLocation(),[a,i]=o.useState(!1),l=t.find((e=>r.matchPath(n.pathname,{path:`/${e.route}`,exact:!0}))),s=t.reduce(((e,t)=>(e[t.route]=o.createRef(),e)),{}),c=l&&l.route;return e(o).createElement(e(o).Fragment,null,e(o).createElement(Pe.AnimatePresence,{exitBeforeEnter:!0},e(o).createElement(r.Switch,{location:n,key:n.pathname},t.map((n=>e(o).createElement(r.Route,{key:n.route,path:`/${n.route}`,render:({history:a})=>{const i=a.entries;let l=0;if(i.length>1){const e=i[i.length-1].pathname,n=i[i.length-2].pathname;l=Ga(t,e,n)?10:-10}return e(o).createElement(Va,{initial:{x:l,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.15}},e(o).createElement(M.DetailViewsProvider,null,n.renderContent()))}}))),e(o).createElement(r.Route,{key:"redirection",render:()=>e(o).createElement(Pe.motion.div,{exit:{opacity:0},transition:{duration:.15}},e(o).createElement(r.Redirect,{to:t[0]?t[0].route:"/"}))}))),e(o).createElement(Qa,null,e(o).createElement(Za,{refs:s,activeRoute:c,onFinishedAnimating:()=>i(!1),isAnimating:a}),e(o).createElement(_a,{role:"tablist","aria-orientation":"horizontal"},t.map((t=>e(o).createElement(qa,{isActive:c===t.route,key:t.route,item:t,ref:s[t.route],isAnimating:a,startAnimating:()=>i(!0)}))))))},Ga=(e,t,n)=>e.findIndex((e=>e.route===Xa(t)))>e.findIndex((e=>e.route===Xa(n))),Xa=e=>"/"===e?e:e.replace(/^\/+/g,""),Ja=x.default(r.Link)`
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
`,qa=o.forwardRef((({isActive:t,item:n,isAnimating:a,startAnimating:i},l)=>e(o).createElement(Ja,{"data-testid":`bottom-tab-nav-button-${n.route}`,$isActive:t,$isAnimating:a,to:n.route,ref:l,onClick:i},n.renderButton())));o=l("aZikt");var ei=l("cdcq0"),ti=(b=l("82Ilk"),o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),ei=l("cdcq0"),F=l("8C6BZ"),E=l("g9lcT"),l("gBP3o")),ni=(le=l("hJDxl"),ie=l("8FNEt"),o=l("aZikt"),x=l("hHMPk"),le=l("hJDxl"),ue=l("gkUV0"),te=l("g7X40"),re=l("lPkGw"),l("a80wK"));const ai=x.default.div`
  display: flex;
  align-items: center;
  input {
    font-size: 34px;
    line-height: 41px;
    font-weight: 400;
    padding: 0;
    background: none;
  }
`,ii=x.default.div`
  width: 100%;
`,li=({assetButtonTitle:t,decimals:n,disabled:a,hasWarning:i,iconUrl:l,isLoading:r,value:s,onClick:c,onUserInput:u})=>e(o).createElement(ai,{hasWarning:i},r?e(o).createElement(ii,null,e(o).createElement(re.Spinner,{diameter:28,color:"#8A81F8"})):e(o).createElement(ni.NumericalInput,{name:"amount",border:"0",placeholder:"0",warning:i,value:s,decimalLimit:n,disabled:a,onUserInput:u}),e(o).createElement(ri,{assetButtonTitle:t,iconUrl:l,onClick:c})),oi=x.default.div`
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
  ${e=>e.isClickable?x.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,ri=({assetButtonTitle:t,iconUrl:n,onClick:a})=>e(o).createElement(oi,{isClickable:void 0!==a,onClick:a},e(o).createElement(ue.TokenImage,{width:30,iconUrl:n,alt:t}),e(o).createElement(te.Text,{weight:600,size:16,color:"white"},t),void 0!==a&&e(o).createElement(le.DownChevronIcon,{width:9}));te=l("g7X40");const si=()=>{const t=(()=>{const{t:e}=k.useTranslation(),t=ei.useSwapSellAssetProps(),{setMaxAssetAmount:n}=t,{showSwapSellAssetSelectModal:a}=E.useModals();return Object.assign(Object.assign({},t),{onSellAssetClicked:a,setMaxAssetAmount:n,t:e})})();return e(o).createElement(ci,Object.assign({},t))},ci=e(o).memo((({assetButtonTitle:t,debouncedSellAmount:n,decimals:a,formattedSellAmount:i,iconUrl:l,notEnoughAssets:r,onDebouncedSellAmount:s,setMaxAssetAmount:c,onSellAssetClicked:u,t:d})=>e(o).createElement(mi,null,e(o).createElement(pi,null,e(o).createElement(gi,null,d("swapFlowYouPay")),e(o).createElement(Ei,{onClick:c},e(o).createElement(hi,null,d("swapperMax")," ",i))),e(o).createElement(li,{assetButtonTitle:t,decimals:a,disabled:!1,hasWarning:r,iconUrl:l,isLoading:!1,onClick:u,onUserInput:s,value:n})))),ui=e(o).memo((({assetButtonTitle:t,buyAmount:n,decimals:a,iconUrl:i,isFetchingQuote:l,onBuyAssetClicked:r,onSwitchTokens:s,t:c})=>e(o).createElement(e(o).Fragment,null,e(o).createElement(fi,null,e(o).createElement(bi,null),e(o).createElement(yi,{onClick:s},e(o).createElement(le.VerticalDoubleArrowsIcon,{fill:"#FFFFFF",width:20}))),e(o).createElement(mi,null,e(o).createElement(pi,null,e(o).createElement(gi,null,c("swapFlowYouReceive"))),e(o).createElement(li,{assetButtonTitle:t,decimals:a,disabled:!0,hasWarning:!1,iconUrl:i,isLoading:l,onClick:r,onUserInput:()=>{},value:n}))))),di=()=>{const t=(()=>{const{t:e}=k.useTranslation(),{showSwapBuyAssetSelectModal:t}=E.useModals(),n=o.useCallback((()=>{t()}),[]),a=ei.useSwapBuyAssetProps(F.analytics),i=ti.useSwapperArgs();return ei.useInitialAssets(i),Object.assign(Object.assign({},a),{onBuyAssetClicked:n,t:e})})();return e(o).createElement(ui,Object.assign({},t))},mi=x.default.div`
  margin-bottom: 5px;
`,pi=x.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 14px;
`,gi=x.default(te.Text).attrs({size:16,color:"#777",weight:500,lineHeight:19,textAlign:"left"})``,hi=x.default(te.Text).attrs({size:14,color:"#777",lineHeight:17,hoverColor:"#8A81F8",weight:500,textAlign:"left"})``,fi=x.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,yi=x.default(ie.Circle).attrs({color:"#333333",diameter:40})`
  z-index: 0;
  cursor: pointer;
  &:hover:enabled {
    background: #444444;
  }
`,bi=x.default.div`
  position: absolute;
  height: 1px;
  width: calc(100% + 2 * 16px); // TODO: create a constant for screen (tab) padding
  top: 20px;
  left: -16px; // TODO: use tab /screen padding
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Ei=x.default.div`
  cursor: pointer;
`;var vi=l("76KFn");o=l("aZikt"),k=l("7Qmuu"),w=l("2zUeX"),ti=l("gBP3o"),se=l("eopQk");const xi=({errorBody:t,errorTitle:n,status:a})=>"loading"===a?e(o).createElement(se.FullHeightLoadingContent,{isLoading:!0}):"failure"===a?e(o).createElement(vt,{title:n,description:t}):null;o=l("aZikt"),k=l("7Qmuu"),ei=l("cdcq0"),E=l("g9lcT"),de=l("aADTv");const ki=()=>{const{showSwapReviewModal:t}=E.useModals(),{disabled:n,theme:a,title:i}=wi();return e(o).createElement(de.Button,{type:"submit",theme:a,disabled:n,onClick:t},i)},wi=()=>{const{t:e}=k.useTranslation(),{hasEnoughAssets:t,hasNoRoutes:n,canSwap:a}=ei.useSwapReviewButtonProps();return a?{disabled:!1,theme:"primary",title:e("swapFlowActionButtonText")}:t?n?{disabled:!0,theme:"default",title:e("swapNoQuotesFound")}:{disabled:!0,theme:"default",title:e("swapFlowActionButtonText")}:{disabled:!0,theme:"warning",title:e("sendFormErrorInsufficientBalance")}};o=l("aZikt"),x=l("hHMPk"),o=l("aZikt"),k=l("7Qmuu"),x=l("hHMPk"),T=l("99Anx"),ei=l("cdcq0"),te=l("g7X40");const Ti=x.default.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${T.hexToRGB("#222222",.75)};
`,Si=x.default.div`
  background-color: ${T.hexToRGB("#E5A221",.7)};
  padding: 12px 15px;
  position: absolute;
  /* TODO: change 15px to 16px and create a screen padding constant like on mobile */
  top: -15px;
  left: -15px;
  right: 15px;
  width: calc(100% + 2 * 15px);
`,Ci=x.default(te.Text).attrs({size:16,lineHeight:19,weight:500,color:"#fff",textAlign:"center"})``,Ai=()=>{const{t:t}=k.useTranslation();return ei.useResetSwapperOnMount(),e(o).createElement(Ti,null,e(o).createElement(Si,null,e(o).createElement(Ci,null,t("swapAvailableOnMainnet"))))};A=l("fMhDQ");const Mi=x.default.fieldset.attrs({disabled:!0})`
  pointer-events: none;
  user-select: none;
`,Fi=({children:t})=>{const{data:n}=A.useFetchConnection();return"mainnet-beta"!==(null==n?void 0:n.cluster)?e(o).createElement(e(o).Fragment,null,e(o).createElement(Ai,null),e(o).createElement(Mi,null,t)):e(o).createElement(e(o).Fragment,null,t)},Pi=()=>{const t=(()=>{const{t:e}=k.useTranslation(),{owner:t,cluster:n,hiddenMints:a,isBackendEnabled:i}=ti.useSwapperArgs(),{error:l,isFetching:r}=w.useFungibles({publicKey:t,cluster:n,hiddenMints:a,isBackendEnabled:i}),s=r,c=!!l;return o.useMemo((()=>({status:s?"loading":c?"failure":"success",errorTitle:e("errorAndOfflineSomethingWentWrong"),errorBody:e("errorAndOfflineUnableToFetchSwap")})),[c,s,e])})();return"success"!==t.status?e(o).createElement(xi,Object.assign({},t)):e(o).createElement(Bi,null)},Bi=()=>{const t=Li();return ei.useSubscribeSwapQuoteToQueries(t),e(o).createElement(Fi,null,e(o).createElement(si,null),e(o).createElement(di,null),e(o).createElement(vi.SwapCard,null),e(o).createElement(ki,null))},Li=()=>{const{accountClient:e}=b.useSelectedSolanaAccount();return e.publicKey.toString()};var Di=l("cqRHn"),Ri=(o=l("aZikt"),x=l("hHMPk"),k=l("7Qmuu"),l("2hEfq")),Hi=(E=l("g9lcT"),se=l("eopQk"),l("cgvjs"));const $i=x.default.div`
  height: 100%;
  padding-bottom: 12px;
`,Ii=()=>{const{isLoadingAssets:t,fromAsset:n,toAsset:a,fromAssetsList:i,toAssetsList:l,fromAmount:r,price:s,slippage:c,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,setFromAsset:g,setToAsset:h,setFromAmount:f,setSlippage:y,setIsRefreshing:b,error:v}=Ri.useSwapQuote(),{t:x}=k.useTranslation(),{showSwapReviewModal:w}=E.useModals(),T=o.useMemo((()=>e(Ma)(f,500)),[f]);o.useEffect((()=>(b(!0),()=>{b(!1)})),[]);return o.useEffect((()=>()=>{f(void 0)}),[]),e(o).createElement(se.FullHeightLoadingContent,{isLoading:t},e(o).createElement($i,null,e(o).createElement(Hi.Swapper,{initialFromAssetAmount:r,price:s,slippage:c,fromAsset:n,toAsset:a,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,onFromAssetSelect:g,onToAssetSelect:h,onFromAssetAmountChange:e=>{e?T(e):(T.cancel(),f(e))},onConvertClick:e=>{f(e),w()},onArrowClick:()=>{g(a),h(n)},onSlippageUpdate:y,fromAssetsList:i,toAssetsList:l,topInputLabel:x("swapFlowYouPay"),bottomInputLabel:x("swapFlowYouReceive"),convertButtonLabel:x("swapFlowActionButtonText"),buttonTheme:"primary",isBottomInputDisabled:!0,arrowStyle:Hi.SwapperArrowStyle.Double,errorMessage:null==v?void 0:v.message})))};var zi=l("3JoTt");const Oi=()=>{const{value:t}=y.useAsync((()=>Di.shouldRenderWhatsNewOverlay())),[n,a]=o.useState(!1);return o.useEffect((()=>{t&&a(!0)}),[t]),zi.useRootGroupEffect(),n?e(o).createElement(e(o).Fragment,null,e(o).createElement(Wt.AccountHeader,null),e(o).createElement(Di.WhatsNewOverlay,{onClose:()=>{Di.acknowledgeWhatsNewOverlay(),a(!1)}})):e(o).createElement(e(o).Fragment,null,e(o).createElement(Wt.AccountHeader,null),e(o).createElement(Aa,null),e(o).createElement(Ui,null),e(o).createElement("div",{id:g.MODAL_ID}))},Ui=()=>{const{accountClient:t}=b.useSelectedSolanaAccount(),{isSwapperEnabled:n}=v.useFeatureFlags(),a=r.useHistory(),{closeAllModals:i}=E.useModals(),{areCollectiblesEnabled:l,isSwapper2Enabled:s}=v.useFeatureFlags();o.useEffect((()=>{i(),a.push(c.Path.Wallet)}),[t.publicKey.toString()]);const u=[{route:c.Path.Wallet,renderButton:()=>e(o).createElement(le.WalletIcon,null),renderContent:()=>e(o).createElement(Ct,null)},l?{route:c.Path.Collectibles,renderButton:()=>e(o).createElement(le.CollectiblesIcon,{width:22}),renderContent:()=>e(o).createElement(Hn,null)}:null,n?{route:c.Path.Swap,renderButton:()=>e(o).createElement(le.DoubleArrowsIcon,{width:24,height:24}),renderContent:()=>s?e(o).createElement(Pi,null):e(o).createElement(Ii,null)}:null,{route:c.Path.Notifications,renderButton:()=>e(o).createElement(le.NotificationsIcon,null),renderContent:()=>e(o).createElement(Qt,null)},{route:c.Path.Settings,renderButton:()=>e(o).createElement(le.SettingsIcon,null),renderContent:()=>e(o).createElement(Vn,null)}].filter((e=>null!==e));return e(o).createElement(Ya,{items:u})};var Ki=l("jSC0s");o=l("aZikt"),v=l("ixd3d"),A=l("fMhDQ");const Ni=({children:t})=>{const{isRichTransactionsEnabled:n}=v.useFeatureFlags(),{data:a}=A.useFetchConnection(),i="mainnet-beta"===(null==a?void 0:a.cluster),l=n&&i?z.RichTransactionHistoryProvider:V.TransactionHistoryProvider;return e(o).createElement(l,null,t)};b=l("82Ilk");var ji=l("49Dkb"),Wi=(E=l("g9lcT"),q=l("j2x34"),l("5DQqc")),Zi=(Le=l("aZo5h"),v=l("ixd3d"),l("eeuNW")),Qi=(N=l("9ZliH"),K=l("h5G75"),l("jd2rl"));Ri=l("2hEfq"),zi=l("3JoTt");d.initSentry();const Vi=()=>{o.useEffect((()=>{u.setStorageValue(c.StorageKeys.PopupHasBeenSeen,!0)}),[]);const t=o.useCallback((t=>e(o).createElement(E.ModalsProvider,null,e(o).createElement(Zi.WalletMenuProvider,null,e(o).createElement(Ki.Unlock,{onUnlock:t})))),[]),n=o.useCallback((()=>{p.openTabAsync({url:"onboarding.html"}),window.close()}),[]);return zi.useCaptureOpen("popupOpen"),e(o).createElement(e(o).Fragment,null,e(o).createElement(m.ThemedGlobalStyle,{backgroundColor:"#222222"}),e(o).createElement(h.PopupAndNotificationErrorBoundary,null,e(o).createElement(f.Main,{withBorder:!0},e(o).createElement(r.MemoryRouter,null,e(o).createElement(va,null,e(o).createElement(K.QueryProvider,null,e(o).createElement(v.FeatureFlagsProvider,null,e(o).createElement(ji.BrowserProvider,null,e(o).createElement(Qi.ExtensionLockWrapper,{renderLocked:t,openOnboarding:n},e(o).createElement(N.TransactionsProvider,null,e(o).createElement(Wi.HardwareWalletProvider,null,e(o).createElement(b.SolanaAccountsProvider,null,e(o).createElement(Le.AddressBookProvider,null,e(o).createElement(q.BlockchainProvider,null,e(o).createElement(Ri.SwapQuoteProvider,null,e(o).createElement(Ni,null,e(o).createElement(E.ModalsProvider,null,e(o).createElement(Zi.WalletMenuProvider,null,e(o).createElement(Oi,null))))))))))))))),e(o).createElement("div",{id:g.MODAL_ID})))))};s.render(e(o).createElement(Vi,null),document.getElementById("root"));define=__define;})(window.define);