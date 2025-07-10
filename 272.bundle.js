"use strict";(self.webpackChunktest_hse=self.webpackChunktest_hse||[]).push([[272],{3272:(e,i,t)=>{t.r(i),t.d(i,{default:()=>X});var r,l,a,n=t(4848),d=t(3523),o=t(3443),s=t(6540),p=t(8353),c=t(3745),u=t(6777),g=t(8217);let x=d.Ay.div`
  display: flex;
  align-items: center;

  &::after {
    content: url(${"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTEuMTU4TDIuMjU5ODEgNS4yMjM0N0MxLjk3MTYxIDQuOTI1NTEgMS41MDQzNSA0LjkyNTUxIDEuMjE2MTUgNS4yMjM0OEMwLjkyNzk0OCA1LjUyMTQ0IDAuOTI3OTUxIDYuMDA0NTMgMS4yMTYxNSA2LjMwMjQ5TDcuNDc4MTcgMTIuNzc2NUM3Ljc2NjM3IDEzLjA3NDUgOC4yMzM2MyAxMy4wNzQ1IDguNTIxODMgMTIuNzc2NUwxNC43ODM4IDYuMzAyNDlDMTUuMDcyIDYuMDA0NTMgMTUuMDcyMSA1LjUyMTQ0IDE0Ljc4MzkgNS4yMjM0OEMxNC40OTU3IDQuOTI1NTEgMTQuMDI4NCA0LjkyNTUxIDEzLjc0MDIgNS4yMjM0N0w4IDExLjE1OFoiIGZpbGw9IiM5MDkwOTAiLz4KPC9zdmc+Cg=="});
    width: 16px;
    height: 16px;
    margin-left: calc(-16px);
    transform: translateX(-16px);
    pointer-events: none;
  }
`,h=d.Ay.select`
  flex-grow: 1;
  appearance: none;
  font-family: Inter, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.02em;
  padding: 14px 16px;
  border: none;
  border-radius: 3px;
  background-color: var(--black5);
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 16px;
  }

  ${e=>{let{$value:i,$defaultValue:t}=e;return i&&i===t?(0,d.AH)`
          color: var(--black27);
        `:(0,d.AH)`
          color: var(--black);
        `}}

  &::placeholder {
    color: var(--black27);
  }

  &:focus-visible {
    outline: var(--red) solid 2px;
    outline-offset: 1px;
  }
`,m=(0,o.PA)(e=>{let{id:i,children:t,defaultValue:r,...l}=e,{formStore:a}=(0,g.P)();return(0,n.jsx)(x,{children:(0,n.jsxs)(h,{id:i,value:a.getStringValue(i)?.length?a.getStringValue(i):r,$value:a.getStringValue(i)?.length?a.getStringValue(i):r,$defaultValue:r,onChange:e=>{a.setStringValue(i,e.target.value),!1===a.getValidity(i)&&a.setValidity(i,!0)},...l,children:[(0,n.jsx)("option",{value:r,disabled:!0,children:r}),t.map(e=>(0,n.jsx)("option",{value:e,children:e},(0,p.A)()))]})})});var f=t(7761);let v=(0,o.PA)(e=>{let{id:i,type:t,...r}=e,{formStore:l}=(0,g.P)();return(0,n.jsx)("input",{onChange:e=>{l.getValidity(i)&&l.setValidity(i,!1),l.setStringValue(i,e.target.value)},onBlur:()=>{l.getStringValue(i)&&(l.setStringValue(i,l.getStringValue(i).trim()),"number"===t?(0,f.isNumeric)(l.getStringValue(i))&&1900<+l.getStringValue(i)&&+l.getStringValue(i)<=new Date().getFullYear()?l.setValidity(i,!0):l.setValidity(i,!1):(0,f.isAlphanumeric)(l.getStringValue(i),"ru-RU",{ignore:' .,-+№!%?&"—:–'})?l.setValidity(i,!0):l.setValidity(i,!1))},type:t,value:l.getStringValue(i)??"",...r})}),y=(0,d.Ay)(v)`
  appearance: textfield;
  font-family: Inter, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.02em;
  padding: 14px 16px;
  border: none;
  border-radius: 3px;
  color: var(--black);
  background-color: var(--black5);

  @media screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 16px;
  }

  &::placeholder {
    color: var(--black27);
  }

  &:focus-visible {
    outline: var(--red) solid 2px;
    outline-offset: 1px;
  }
`;t(7642),t(8004),t(3853),t(5876),t(2475),t(5024),t(1698),t(4114);var b=t(4224);function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(null,arguments)}let w=function(e){return s.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:17,height:16,fill:"none"},e),r||(r=s.createElement("path",{fill:"currentColor",d:"M9.073 8.573h6.925a.5.5 0 0 0 .502-.506l-.003-.12c-.016-.283-.229-.517-.513-.517H9.073V.505A.505.505 0 0 0 8.568 0h-.133a.505.505 0 0 0-.505.505V7.43H1.005a.505.505 0 0 0-.505.505v.133c0 .279.226.505.505.505H7.93v6.925a.5.5 0 0 0 .505.502c.063-.001.098-.002.12-.004.284-.015.518-.228.518-.512z"})))};t(4603),t(7566),t(8721);let A=["image/jpeg"];async function M(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?Promise.allSettled(Array.from(e).map(e=>new Promise((t,r)=>{let l=new Image,a=URL.createObjectURL(e),n=function(){if(i){let i=A.includes(e.type),n=this.height<1500;n&&i?(l.removeEventListener("error",d),t({id:(0,p.A)(),file:e,src:a})):(l.removeEventListener("error",d),URL.revokeObjectURL(a),r(n?"Неверный тип файла":"Слишком большое разрешение изображения"))}else l.removeEventListener("error",d),t({id:(0,p.A)(),file:e,src:a})},d=function(e){l.removeEventListener("load",n),URL.revokeObjectURL(a),r(e.message)};l.addEventListener("load",n,{once:!0}),l.addEventListener("error",d,{once:!0}),l.src=a}))):[]}let k=(0,o.PA)(e=>{let{children:i,...t}=e;return(0,n.jsx)("button",{...t,children:i})}),D=(0,d.Ay)(k)`
  position: absolute;
  ${e=>{let{$positionX:i}=e;return i}}: 4px;
  ${e=>{let{$positionY:i}=e;return i}}: 4px;

  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  background-color: rgb(24 26 28 / 45%);
  backdrop-filter: blur(4px);
  ${e=>{let{$buttonType:i}=e;return"drag"===i&&(0,d.AH)`
      cursor: grab;
    `}}

  & > svg {
    display: block;
  }
`;function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(null,arguments)}let E=function(e){return s.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),l||(l=s.createElement("path",{fill:"#E7E7E7",fillRule:"evenodd",d:"M9.427 1.963a1.5 1.5 0 0 0-1.5 1.5v.5h-3.5a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h.5v12.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-12.5h.5a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-3.5v-.5a1.5 1.5 0 0 0-1.5-1.5zm5.5 2v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v.5zm-7 1h-3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11.5m-2 3h12v12.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})))};function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(null,arguments)}let N=function(e){return s.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none"},e),a||(a=s.createElement("path",{fill:"#E7E7E7",d:"M14.78 2.553a.395.395 0 0 1 .558 0l.109.109a.395.395 0 0 1 0 .558L9.799 8.867a.187.187 0 0 0 0 .265l5.648 5.648a.39.39 0 0 1 0 .555l-.096.09c-.18.162-.431.162-.582.011L9.132 9.799a.187.187 0 0 0-.264 0L3.22 15.447a.39.39 0 0 1-.554-.001l-.09-.095c-.163-.18-.163-.431-.012-.582l5.637-5.637a.19.19 0 0 0 0-.265L2.553 3.22a.395.395 0 0 1 0-.558l.109-.109a.395.395 0 0 1 .558 0L8.868 8.2A.2.2 0 0 0 9 8.255c.05 0 .097-.02.132-.055z"})))},T=d.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:has(input:focus-visible) label {
    outline: var(--red) solid 2px;
    outline-offset: 1px;
  }
`,L=d.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &:not(:has(*)) {
    display: none;
  }
`,z=d.Ay.div`
  position: relative;
`,S=d.Ay.img`
  input[multiple] ~ div & {
    width: auto;
    height: 160px;
  }

  input:not([multiple]) ~ div & {
    width: 300px;
    height: 424px;
    object-fit: cover;
  }
`,O=d.Ay.label`
  input[multiple] ~ & {
    background-color: var(--white);
    color: var(--black);
    border-color: var(--black);
    box-sizing: border-box;
    cursor: pointer;

    ${b.i}
  }

  input:not([multiple]) ~ & {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 300px;
    max-height: 424px;
    aspect-ratio: 0.7075;
    background-color: var(--black5);
    color: var(--black47);
    font-size: 13px;
    line-height: 16px;
    cursor: pointer;
  }

  input:not([multiple]) ~ div:has(div) ~ & {
    display: none;
  }
`,F=d.Ay.input`
  position: absolute;
  left: -9999px;
`,U=(0,o.PA)(e=>{let{id:i,type:t,multiple:r=!1,placeholder:l}=e,{formStore:a}=(0,g.P)();return(0,n.jsxs)(T,{children:[(0,n.jsx)(F,{id:i,type:t,accept:"image/jpeg",multiple:r,onChange:async e=>{let t=await M(e.target.files,r),l=[],n=new Set;t.forEach(e=>{"fulfilled"===e.status?l.push(e.value):n.add(e.reason)}),a.setFileValue(i,l),n.size>0&&alert(`Часть фотографий не была загружена. ${Array.from(n).reduce((e,i)=>`
${i+e}`,"")}`)}}),(0,n.jsx)(L,{children:a.getFileValue(i)?.map(e=>(0,n.jsxs)(z,{children:[r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(D,{$positionX:"right",$positionY:"top",onClick:()=>a.removeFile(i,e.id),type:"button",children:(0,n.jsx)(N,{})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(D,{$positionX:"right",$positionY:"top",onClick:()=>a.removeFile(i,e.id),type:"button",children:(0,n.jsx)(E,{})})}),(0,n.jsx)(S,{id:e.id,src:e.src,alt:""})]},e.id))}),(!r||a.getRange(i)&&a.getFileValue(i)&&a.getRange(i).maxFiles>a.getFileValue(i).length)&&(0,n.jsxs)(O,{htmlFor:i,children:[r&&(0,n.jsx)(w,{}),l]})]})}),q=d.Ay.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`,C=d.Ay.label`
  color: var(--black47);
  font-size: 15px;
  line-height: 20px;

  @media screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 16px;
  }

  ${e=>{let{$required:i}=e;return i&&(0,d.AH)`
      &::after {
        content: '*';
        color: var(--red);
        margin-left: 8px;
      }
    `}}
`,$=(0,o.PA)(e=>{let{children:i,required:t,id:r,type:l,options:a,multiple:d,placeholder:o,...s}=e;return(0,n.jsxs)(q,{children:[(0,n.jsx)(C,{htmlFor:r,$required:t,children:i}),"dropdown"===l&&(0,n.jsx)(m,{id:r,name:i,defaultValue:o,required:t,...s,children:a}),("text"===l||"number"===l)&&(0,n.jsx)(y,{type:l,id:r,name:i,placeholder:o,required:t,...s}),"file"===l&&(0,n.jsx)(U,{type:l,id:r,name:i,placeholder:o,required:t,multiple:d,...s})]})}),P=d.Ay.div`
  ${e=>{let{$isCompact:i}=e;return i?(0,d.AH)`
          display: flex;
          flex-direction: column;
          width: 100%;
        `:(0,d.AH)`
          position: absolute;
          inset: 0;
          padding: 88px 0 80px;
          background: var(--white-pure);
          overflow-y: scroll;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            width: 0;
          }
        `}}
`,H=d.Ay.div`
  display: grid;
  grid-template-areas: 'form form form empty';
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 24px;
  max-width: var(--max-width);
  padding: 0 10px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    margin: 0;
  }
`,R=d.Ay.form`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media screen and (max-width: 600px) {
    gap: 24px;
  }
`,Y=d.Ay.h1`
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 60px;
  line-height: 70px;

  @media screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 34px;
  }
`,Q=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Z=d.Ay.fieldset`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;
  margin: 0;
  border: 0;

  @media screen and (max-width: 600px) {
    width: 100%;
    gap: 32px;
  }
`,G=d.Ay.div`
  @media screen and (max-width: 600px) {
    padding: 10px 0;
    width: 100%;
    box-sizing: border-box;
  }
`,B=[[{id:(0,p.A)(),label:"Обложка",type:"file",multiple:!1,placeholder:"Выберите изображение с устройства (рекомендуемый размер: 1140x1600px)",required:!0}],[{id:(0,p.A)(),label:"Номинация",type:"dropdown",options:["Номинация 1","Номинация 2","Номинация 3"],placeholder:"Выберите номинацию",required:!0},{id:(0,p.A)(),label:"Подноминация",type:"dropdown",options:["Подноминация 1","Подноминация 2","Подноминация 3"],placeholder:"Выберите подноминацию",required:!0}],[{id:(0,p.A)(),label:"Название проекта",type:"text",placeholder:"Введите название проекта",required:!0},{id:(0,p.A)(),label:"Год реализации проекта",type:"number",placeholder:"Введите год",required:!0},{id:(0,p.A)(),label:"В каких СМИ проект был опубликован?",type:"text",placeholder:"Введите названия СМИ",required:!1},{id:(0,p.A)(),label:"3-10 изображений проекта, jpeg, высота < 1500 рх",type:"file",multiple:!0,minFiles:3,maxFiles:10,placeholder:"Добавить",required:!0},{id:(0,p.A)(),label:"Фотограф съёмки",type:"text",placeholder:"Укажите фотографа съёмки",required:!1}]],X=(0,o.PA)(()=>{let{isCompact:e}=(0,s.useContext)(c.B),{formStore:i}=(0,g.P)();return(0,s.useEffect)(()=>{B.flat(1).forEach(e=>{let t=e.label+"-"+e.id;i.getStringValue(t)||i.getFileValue(t)||i.createValue(t,"file"===e.type?{required:e.required,isFile:!0,range:e.multiple?{minFiles:e.minFiles,maxFiles:e.maxFiles}:void 0,isValid:!e.required}:{required:e.required,isFile:!1,range:void 0,isValid:!e.required})})},[]),(0,n.jsxs)(P,{$isCompact:e,children:[!e&&(0,n.jsx)(u.A,{}),(0,n.jsx)(H,{children:(0,n.jsxs)(R,{children:[(0,n.jsx)(Y,{children:"Анкета участника"}),(0,n.jsx)(Z,{children:B.map((e,i)=>(0,n.jsx)(Q,{children:e.map(e=>{let i=e.label+"-"+e.id;return(0,n.jsx)($,{id:i,type:e.type,required:e.required,placeholder:e.placeholder,options:"dropdown"===e.type?e.options:void 0,multiple:"file"===e.type?e.multiple:void 0,children:e.label},e.id)})},i))}),(0,n.jsx)(G,{children:(0,n.jsx)(b.A,{$type:"primary",type:"button",disabled:!i.canSubmit,onClick:()=>alert(JSON.stringify(i.dataToSend)),children:"Отправить"})})]})})]})})}}]);