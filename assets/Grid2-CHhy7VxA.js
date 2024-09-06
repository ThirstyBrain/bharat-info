import{_ as y,ar as te,as as ie,aD as le,e as oe,c as ce,j as W,d as ae,a8 as ue,av as fe,f as pe,g as de,s as ge,u as me}from"./index-WJ5Ol1-f.js";import{r as d}from"./vendor-bYnYCtLU.js";const be=(e,n)=>e.filter(r=>n.includes(r)),g=(e,n,r)=>{const t=e.keys[0];Array.isArray(n)?n.forEach((i,s)=>{r((l,u)=>{s<=e.keys.length-1&&(s===0?Object.assign(l,u):l[e.up(e.keys[s])]=u)},i)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:be(e.keys,Object.keys(n))).forEach(s=>{if(e.keys.indexOf(s)!==-1){const l=n[s];l!==void 0&&r((u,m)=>{t===s?Object.assign(u,m):u[e.up(s)]=m},l)}}):(typeof n=="number"||typeof n=="string")&&r((i,s)=>{Object.assign(i,s)},n)};function a(e){return e?`Level${e}`:""}function G(e){return e.unstable_level>0&&e.container}function L(e){return function(r){return`var(--Grid-${r}Spacing${a(e.unstable_level)})`}}function w(e){return function(r){return e.unstable_level===0?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${a(e.unstable_level-1)})`}}function k(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${a(e.unstable_level-1)})`}const $e=({theme:e,ownerState:n})=>{const r=L(n),t={};return g(e.breakpoints,n.gridSize,(i,s)=>{let l={};s===!0&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / ${k(n)}${G(n)?` + ${r("column")}`:""})`}),i(t,l)}),t},ye=({theme:e,ownerState:n})=>{const r={};return g(e.breakpoints,n.gridOffset,(t,i)=>{let s={};i==="auto"&&(s={marginLeft:"auto"}),typeof i=="number"&&(s={marginLeft:i===0?"0px":`calc(100% * ${i} / ${k(n)})`}),t(r,s)}),r},Ge=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=G(n)?{[`--Grid-columns${a(n.unstable_level)}`]:k(n)}:{"--Grid-columns":12};return g(e.breakpoints,n.columns,(t,i)=>{t(r,{[`--Grid-columns${a(n.unstable_level)}`]:i})}),r},xe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=w(n),t=G(n)?{[`--Grid-rowSpacing${a(n.unstable_level)}`]:r("row")}:{};return g(e.breakpoints,n.rowSpacing,(i,s)=>{var l;i(t,{[`--Grid-rowSpacing${a(n.unstable_level)}`]:typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s)})}),t},ve=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=w(n),t=G(n)?{[`--Grid-columnSpacing${a(n.unstable_level)}`]:r("column")}:{};return g(e.breakpoints,n.columnSpacing,(i,s)=>{var l;i(t,{[`--Grid-columnSpacing${a(n.unstable_level)}`]:typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s)})}),t},_e=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return g(e.breakpoints,n.direction,(t,i)=>{t(r,{flexDirection:i})}),r},Oe=({ownerState:e})=>{const n=L(e),r=w(e);return y({minWidth:0,boxSizing:"border-box"},e.container&&y({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||G(e))&&y({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},Se=e=>{const n=[];return Object.entries(e).forEach(([r,t])=>{t!==!1&&t!==void 0&&n.push(`grid-${r}-${String(t)}`)}),n},he=(e,n="xs")=>{function r(t){return t===void 0?!1:typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number"&&t>0}if(r(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach(([i,s])=>{r(s)&&t.push(`spacing-${i}-${String(s)}`)}),t}return[]},Ee=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,r])=>`direction-${n}-${r}`):[`direction-xs-${String(e)}`],Ce=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],je=te(),Pe=ie("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Ne(e){return fe({props:e,name:"MuiGrid",defaultTheme:je})}function we(e={}){const{createStyledComponent:n=Pe,useThemeProps:r=Ne,componentName:t="MuiGrid"}=e,i=d.createContext(void 0),s=(m,c)=>{const{container:x,direction:v,spacing:_,wrap:b,gridSize:O}=m,S={root:["root",x&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...Ee(v),...Se(O),...x?he(_,c.breakpoints.keys[0]):[]]};return pe(S,h=>de(t,h),{})},l=n(Ge,ve,xe,$e,_e,Oe,ye),u=d.forwardRef(function(c,x){var v,_,b,O,S,h,q,D;const C=le(),A=r(c),j=oe(A),E=d.useContext(i),{className:V,children:U,columns:K=12,container:F=!1,component:H="div",direction:I="row",wrap:J="wrap",spacing:P=0,rowSpacing:Q=P,columnSpacing:X=P,disableEqualOverflow:R,unstable_level:f=0}=j,Y=ce(j,Ce);let $=R;f&&R!==void 0&&($=c.disableEqualOverflow);const M={},T={},z={};Object.entries(Y).forEach(([o,p])=>{C.breakpoints.values[o]!==void 0?M[o]=p:C.breakpoints.values[o.replace("Offset","")]!==void 0?T[o.replace("Offset","")]=p:z[o]=p});const Z=(v=c.columns)!=null?v:f?void 0:K,ee=(_=c.spacing)!=null?_:f?void 0:P,ne=(b=(O=c.rowSpacing)!=null?O:c.spacing)!=null?b:f?void 0:Q,re=(S=(h=c.columnSpacing)!=null?h:c.spacing)!=null?S:f?void 0:X,B=y({},j,{level:f,columns:Z,container:F,direction:I,wrap:J,spacing:ee,rowSpacing:ne,columnSpacing:re,gridSize:M,gridOffset:T,disableEqualOverflow:(q=(D=$)!=null?D:E)!=null?q:!1,parentDisableEqualOverflow:E}),se=s(B,C);let N=W.jsx(l,y({ref:x,as:H,ownerState:B,className:ae(se.root,V)},z,{children:d.Children.map(U,o=>{if(d.isValidElement(o)&&ue(o,["Grid"])){var p;return d.cloneElement(o,{unstable_level:(p=o.props.unstable_level)!=null?p:f+1})}return o})}));return $!==void 0&&$!==(E??!1)&&(N=W.jsx(i.Provider,{value:$,children:N})),N});return u.muiName="Grid",u}const De=we({createStyledComponent:ge("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>me({props:e,name:"MuiGrid2"})});export{De as G};
