import{_ as y,ae as te,af as ie,ay as le,al as oe,m as ce,j as W,o as ae,az as ue,am as fe,p as pe,f as de,h as ge,l as me}from"./index-CS1rO7vA.js";import{r as d}from"./vendor-bYnYCtLU.js";const be=(e,n)=>e.filter(r=>n.includes(r)),g=(e,n,r)=>{const t=e.keys[0];Array.isArray(n)?n.forEach((i,s)=>{r((l,u)=>{s<=e.keys.length-1&&(s===0?Object.assign(l,u):l[e.up(e.keys[s])]=u)},i)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:be(e.keys,Object.keys(n))).forEach(s=>{if(e.keys.indexOf(s)!==-1){const l=n[s];l!==void 0&&r((u,m)=>{t===s?Object.assign(u,m):u[e.up(s)]=m},l)}}):(typeof n=="number"||typeof n=="string")&&r((i,s)=>{Object.assign(i,s)},n)};function a(e){return e?`Level${e}`:""}function G(e){return e.unstable_level>0&&e.container}function L(e){return function(r){return`var(--Grid-${r}Spacing${a(e.unstable_level)})`}}function w(e){return function(r){return e.unstable_level===0?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${a(e.unstable_level-1)})`}}function k(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${a(e.unstable_level-1)})`}const $e=({theme:e,ownerState:n})=>{const r=L(n),t={};return g(e.breakpoints,n.gridSize,(i,s)=>{let l={};s===!0&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / ${k(n)}${G(n)?` + ${r("column")}`:""})`}),i(t,l)}),t},ye=({theme:e,ownerState:n})=>{const r={};return g(e.breakpoints,n.gridOffset,(t,i)=>{let s={};i==="auto"&&(s={marginLeft:"auto"}),typeof i=="number"&&(s={marginLeft:i===0?"0px":`calc(100% * ${i} / ${k(n)})`}),t(r,s)}),r},Ge=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=G(n)?{[`--Grid-columns${a(n.unstable_level)}`]:k(n)}:{"--Grid-columns":12};return g(e.breakpoints,n.columns,(t,i)=>{t(r,{[`--Grid-columns${a(n.unstable_level)}`]:i})}),r},xe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=w(n),t=G(n)?{[`--Grid-rowSpacing${a(n.unstable_level)}`]:r("row")}:{};return g(e.breakpoints,n.rowSpacing,(i,s)=>{var l;i(t,{[`--Grid-rowSpacing${a(n.unstable_level)}`]:typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s)})}),t},ve=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=w(n),t=G(n)?{[`--Grid-columnSpacing${a(n.unstable_level)}`]:r("column")}:{};return g(e.breakpoints,n.columnSpacing,(i,s)=>{var l;i(t,{[`--Grid-columnSpacing${a(n.unstable_level)}`]:typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s)})}),t},_e=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return g(e.breakpoints,n.direction,(t,i)=>{t(r,{flexDirection:i})}),r},he=({ownerState:e})=>{const n=L(e),r=w(e);return y({minWidth:0,boxSizing:"border-box"},e.container&&y({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||G(e))&&y({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},Oe=e=>{const n=[];return Object.entries(e).forEach(([r,t])=>{t!==!1&&t!==void 0&&n.push(`grid-${r}-${String(t)}`)}),n},Se=(e,n="xs")=>{function r(t){return t===void 0?!1:typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number"&&t>0}if(r(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach(([i,s])=>{r(s)&&t.push(`spacing-${i}-${String(s)}`)}),t}return[]},Ee=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,r])=>`direction-${n}-${r}`):[`direction-xs-${String(e)}`],Ce=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],je=te(),Pe=ie("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Ne(e){return fe({props:e,name:"MuiGrid",defaultTheme:je})}function we(e={}){const{createStyledComponent:n=Pe,useThemeProps:r=Ne,componentName:t="MuiGrid"}=e,i=d.createContext(void 0),s=(m,c)=>{const{container:x,direction:v,spacing:_,wrap:b,gridSize:h}=m,O={root:["root",x&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...Ee(v),...Oe(h),...x?Se(_,c.breakpoints.keys[0]):[]]};return pe(O,S=>de(t,S),{})},l=n(Ge,ve,xe,$e,_e,he,ye),u=d.forwardRef(function(c,x){var v,_,b,h,O,S,q,D;const C=le(),A=r(c),j=oe(A),E=d.useContext(i),{className:V,children:U,columns:K=12,container:F=!1,component:H="div",direction:I="row",wrap:J="wrap",spacing:P=0,rowSpacing:Q=P,columnSpacing:X=P,disableEqualOverflow:R,unstable_level:f=0}=j,Y=ce(j,Ce);let $=R;f&&R!==void 0&&($=c.disableEqualOverflow);const z={},M={},T={};Object.entries(Y).forEach(([o,p])=>{C.breakpoints.values[o]!==void 0?z[o]=p:C.breakpoints.values[o.replace("Offset","")]!==void 0?M[o.replace("Offset","")]=p:T[o]=p});const Z=(v=c.columns)!=null?v:f?void 0:K,ee=(_=c.spacing)!=null?_:f?void 0:P,ne=(b=(h=c.rowSpacing)!=null?h:c.spacing)!=null?b:f?void 0:Q,re=(O=(S=c.columnSpacing)!=null?S:c.spacing)!=null?O:f?void 0:X,B=y({},j,{level:f,columns:Z,container:F,direction:I,wrap:J,spacing:ee,rowSpacing:ne,columnSpacing:re,gridSize:z,gridOffset:M,disableEqualOverflow:(q=(D=$)!=null?D:E)!=null?q:!1,parentDisableEqualOverflow:E}),se=s(B,C);let N=W.jsx(l,y({ref:x,as:H,ownerState:B,className:ae(se.root,V)},T,{children:d.Children.map(U,o=>{if(d.isValidElement(o)&&ue(o,["Grid"])){var p;return d.cloneElement(o,{unstable_level:(p=o.props.unstable_level)!=null?p:f+1})}return o})}));return $!==void 0&&$!==(E??!1)&&(N=W.jsx(i.Provider,{value:$,children:N})),N});return u.muiName="Grid",u}const De=we({createStyledComponent:ge("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>me({props:e,name:"MuiGrid2"})});export{De as G};
