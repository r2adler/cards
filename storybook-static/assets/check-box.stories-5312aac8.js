import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{c as B,T as O}from"./typography-313b96cd.js";import{_ as E}from"./extends-98964cd2.js";import{$ as T,a as A,b as K,d as V,e as L}from"./index-e3557324.js";import{$ as W,a as X}from"./index-fb99cbf7.js";import{$ as G}from"./index-0aad24db.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";const J=(e,a)=>n.jsxs("svg",{fill:"none",height:24,ref:a,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",...e,children:[n.jsx("path",{d:"M4 6H20V18H4z",fill:"#000"}),n.jsx("path",{d:"M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"#fff"})]}),v=o.forwardRef(J),Q=o.memo(v);try{v.displayName="ForwardRef",v.__docgenInfo={description:"",displayName:"ForwardRef",props:{}}}catch{}const U=(e,a)=>n.jsx("svg",{fill:"none",height:24,ref:a,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",...e,children:n.jsx("path",{d:"M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",fill:"#C3C1C7"})}),y=o.forwardRef(U),Y=o.memo(y);try{y.displayName="ForwardRef",y.__docgenInfo={description:"",displayName:"ForwardRef",props:{}}}catch{}const F="Checkbox",[Z,ge]=T(F),[ee,oe]=Z(F),te=o.forwardRef((e,a)=>{const{__scopeCheckbox:t,name:d,checked:l,defaultChecked:r,required:i,disabled:b,value:f="on",onCheckedChange:k,...j}=e,[s,_]=o.useState(null),H=A(a,c=>_(c)),C=o.useRef(!1),R=s?!!s.closest("form"):!0,[u=!1,g]=K({prop:l,defaultProp:r,onChange:k}),z=o.useRef(u);return o.useEffect(()=>{const c=s==null?void 0:s.form;if(c){const h=()=>g(z.current);return c.addEventListener("reset",h),()=>c.removeEventListener("reset",h)}},[s,g]),o.createElement(ee,{scope:t,state:u,disabled:b},o.createElement(V.button,E({type:"button",role:"checkbox","aria-checked":p(u)?"mixed":u,"aria-required":i,"data-state":M(u),"data-disabled":b?"":void 0,disabled:b,value:f},j,{ref:H,onKeyDown:L(e.onKeyDown,c=>{c.key==="Enter"&&c.preventDefault()}),onClick:L(e.onClick,c=>{g(h=>p(h)?!0:!h),R&&(C.current=c.isPropagationStopped(),C.current||c.stopPropagation())})})),R&&o.createElement(ce,{control:s,bubbles:!C.current,name:d,value:f,checked:u,required:i,disabled:b,style:{transform:"translateX(-100%)"}}))}),ae="CheckboxIndicator",re=o.forwardRef((e,a)=>{const{__scopeCheckbox:t,forceMount:d,...l}=e,r=oe(ae,t);return o.createElement(G,{present:d||p(r.state)||r.state===!0},o.createElement(V.span,E({"data-state":M(r.state),"data-disabled":r.disabled?"":void 0},l,{ref:a,style:{pointerEvents:"none",...e.style}})))}),ce=e=>{const{control:a,checked:t,bubbles:d=!0,...l}=e,r=o.useRef(null),i=W(t),b=X(a);return o.useEffect(()=>{const f=r.current,k=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(k,"checked").set;if(i!==t&&s){const _=new Event("click",{bubbles:d});f.indeterminate=p(t),s.call(f,p(t)?!1:t),f.dispatchEvent(_)}},[i,t,d]),o.createElement("input",E({type:"checkbox","aria-hidden":!0,defaultChecked:p(t)?!1:t},l,{tabIndex:-1,ref:r,style:{...e.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function p(e){return e==="indeterminate"}function M(e){return p(e)?"indeterminate":e?"checked":"unchecked"}const ne=te,se=re,de="_wrapper_8kojd_5",le="_root_8kojd_10",ie="_icon_8kojd_49",pe="_checkboxLabel_8kojd_55",be="_checkboxLabelDisabled_8kojd_59",m={wrapper:de,root:le,icon:ie,checkboxLabel:pe,checkboxLabelDisabled:be},w=({checked:e,disabled:a=!1,id:t,label:d="",onChange:l,required:r})=>{const i=B(m.checkboxLabel,a&&m.checkboxLabelDisabled);return n.jsxs("div",{className:m.wrapper,children:[n.jsxs(ne,{checked:e,className:m.root,disabled:a,id:t,onCheckedChange:l,required:r,children:[n.jsx(Y,{className:m.icon}),n.jsx(se,{children:n.jsx(Q,{className:m.icon})})]}),d&&n.jsx(O,{as:"label",className:i,htmlFor:t,variant:"body2",children:d})]})};try{w.displayName="CheckboxDemo",w.__docgenInfo={description:"",displayName:"CheckboxDemo",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const ve={component:w,tags:["autodocs"],title:"Components/CheckboxDemo"},x={args:{id:"1"}},$={args:{disabled:!1,id:"1",label:"Check-box"}};var N,D,q;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: '1'
  }
}`,...(q=(D=x.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var I,P,S;$.parameters={...$.parameters,docs:{...(I=$.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: false,
    id: '1',
    label: 'Check-box'
  }
}`,...(S=(P=$.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const ye=["Checkbox","CheckboxWithLabel"];export{x as Checkbox,$ as CheckboxWithLabel,ye as __namedExportsOrder,ve as default};
//# sourceMappingURL=check-box.stories-5312aac8.js.map
