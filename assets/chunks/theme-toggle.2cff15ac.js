import{a8 as B,u as x,r as d,d as T,q as I,A as ne,v as o,b as p,F as D,N as a,a as u,a1 as ie,C as h,O as C,I as M,B as v,X as O,G as F,Q as L,a4 as W,j as X,aR as R,H as oe,M as se}from"./framework.3d3e5663.js";import{c as le,e as re}from"./theme.48394480.js";import{b as ce,n as ue,o as G,d as de,U as $,c as E,i as A,C as K,I as U,h as ve,e as pe,u as fe,j as he,f as me,p as ge,k as ye,E as V,q as be,_ as we,r as Ce,t as ke,w as Se}from"../app.ea173609.js";const Ve=ce({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:ue},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:G},inactiveIcon:{type:G},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:de(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),Te={[$]:s=>E(s)||B(s)||A(s),[K]:s=>E(s)||B(s)||A(s),[U]:s=>E(s)||B(s)||A(s)},Ie=["onClick"],Ee=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],_e=["aria-hidden"],Pe=["aria-hidden"],Ne=["aria-hidden"],z="ElSwitch",Be=x({name:z}),De=x({...Be,props:Ve,emits:Te,setup(s,{expose:g,emit:c}){const t=s,P=oe(),{formItem:r}=ve(),y=pe(),n=fe("switch");(e=>{e.forEach(i=>{Ce({from:i[0],replacement:i[1],scope:z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},d(()=>{var S;return!!((S=P.vnode.props)!=null&&S[i[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:N}=he(t,{formItemContext:r}),b=me(d(()=>t.loading)),m=T(t.modelValue!==!1),w=T(),Q=T(),Y=d(()=>[n.b(),n.m(y.value),n.is("disabled",b.value),n.is("checked",l.value)]),J=d(()=>[n.e("label"),n.em("label","left"),n.is("active",!l.value)]),Z=d(()=>[n.e("label"),n.em("label","right"),n.is("active",l.value)]),ee=d(()=>({width:ge(t.width)}));I(()=>t.modelValue,()=>{m.value=!0}),I(()=>t.value,()=>{m.value=!1});const H=d(()=>m.value?t.modelValue:t.value),l=d(()=>H.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(H.value)||(c($,t.inactiveValue),c(K,t.inactiveValue),c(U,t.inactiveValue)),I(l,e=>{var i;w.value.checked=e,t.validateEvent&&((i=r==null?void 0:r.validate)==null||i.call(r,"change").catch(S=>ye()))});const k=()=>{const e=l.value?t.inactiveValue:t.activeValue;c($,e),c(K,e),c(U,e),X(()=>{w.value.checked=l.value})},j=()=>{if(b.value)return;const{beforeChange:e}=t;if(!e){k();return}const i=e();[R(i),E(i)].includes(!0)||ke(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),R(i)?i.then(q=>{q&&k()}).catch(q=>{}):i&&k()},ae=d(()=>n.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),te=()=>{var e,i;(i=(e=w.value)==null?void 0:e.focus)==null||i.call(e)};return ne(()=>{w.value.checked=l.value}),g({focus:te,checked:l}),(e,i)=>(o(),p("div",{class:u(a(Y)),style:L(a(ae)),onClick:W(j,["prevent"])},[D("input",{id:a(N),ref_key:"input",ref:w,class:u(a(n).e("input")),type:"checkbox",role:"switch","aria-checked":a(l),"aria-disabled":a(b),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(b),tabindex:e.tabindex,onChange:k,onKeydown:ie(j,["enter"])},null,42,Ee),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),p("span",{key:0,class:u(a(J))},[e.inactiveIcon?(o(),h(a(V),{key:0},{default:C(()=>[(o(),h(M(e.inactiveIcon)))]),_:1})):v("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),p("span",{key:1,"aria-hidden":a(l)},O(e.inactiveText),9,_e)):v("v-if",!0)],2)):v("v-if",!0),D("span",{ref_key:"core",ref:Q,class:u(a(n).e("core")),style:L(a(ee))},[e.inlinePrompt?(o(),p("div",{key:0,class:u(a(n).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),h(a(V),{key:0,class:u(a(n).is("icon"))},{default:C(()=>[(o(),h(M(a(l)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),p("span",{key:1,class:u(a(n).is("text")),"aria-hidden":!a(l)},O(a(l)?e.activeText:e.inactiveText),11,Pe)):v("v-if",!0)],2)):v("v-if",!0),D("div",{class:u(a(n).e("action"))},[e.loading?(o(),h(a(V),{key:0,class:u(a(n).is("loading"))},{default:C(()=>[F(a(be))]),_:1},8,["class"])):v("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),p("span",{key:1,class:u(a(Z))},[e.activeIcon?(o(),h(a(V),{key:0},{default:C(()=>[(o(),h(M(e.activeIcon)))]),_:1})):v("v-if",!0),!e.activeIcon&&e.activeText?(o(),p("span",{key:1,"aria-hidden":!a(l)},O(e.activeText),9,Ne)):v("v-if",!0)],2)):v("v-if",!0)],14,Ie))}});var Me=we(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Oe=Se(Me),_=le({storageKey:"el-theme-appearance"}),Ae=re(_),Fe=["onClick"],ze=x({__name:"theme-toggle",setup(s){const g=T(_.value);I(()=>g.value,()=>{console.log("change-------mode"),Ae()});let c;function t(r){if(console.log("change-------start"),!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)||!r){c(!0);return}const n=r.clientX,f=r.clientY,N=Math.hypot(Math.max(n,innerWidth-n),Math.max(f,innerHeight-f));document.startViewTransition(async()=>{c(!0),await X()}).ready.then(()=>{console.log("change-------transition");const m=[`circle(0px at ${n}px ${f}px)`,`circle(${N}px at ${n}px ${f}px)`];document.documentElement.animate({clipPath:_.value?[...m].reverse():m},{duration:500,easing:"ease-in",pseudoElement:_.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}function P(){return new Promise(r=>{c=r})}return(r,y)=>{const n=se("ClientOnly");return o(),p("div",{class:"custom-wrapper",onClick:W(t,["stop"])},[F(n,null,{default:C(()=>[F(a(Oe),{modelValue:g.value,"onUpdate:modelValue":y[0]||(y[0]=f=>g.value=f),"before-change":P,"active-text":"Dark","inactive-text":"Light"},null,8,["modelValue"])]),_:1})],8,Fe)}}});export{ze as default};