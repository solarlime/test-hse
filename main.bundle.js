(()=>{"use strict";var e={3745:(e,M,t)=>{t.d(M,{B:()=>u,Q:()=>a});var i=t(4848),r=t(6540);let u=(0,r.createContext)({}),a=e=>{let{children:M}=e,[t,a]=(0,r.useState)(document.documentElement.clientWidth<=500);return(0,r.useEffect)(()=>{let e=window.matchMedia("(max-width: 600px)"),M=e=>{a(e.matches)};return e.addEventListener("change",M),()=>{e.removeEventListener("change",M)}},[]),(0,i.jsx)(u.Provider,{value:{isCompact:t},children:M})}},4224:(e,M,t)=>{t.d(M,{A:()=>N,i:()=>a});var i=t(4848),r=t(3523),u=t(3443);let a=(0,r.AH)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  border-radius: 3px;
  border: 1px solid;
  width: auto;
  height: 48px;
  padding: 0 48px;
  font-size: 17px;
  line-height: 22px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 36px;
    padding: 0 24px;
    font-size: 15px;
    line-height: 20px;
  }
`,D=r.Ay.button`
  ${a}

  ${e=>{let{$type:M}=e;return"secondary"===M?(0,r.AH)`
          background-color: var(--white);
          color: var(--black);
          border-color: var(--black);
        `:(0,r.AH)`
          background-color: var(--black);
          color: var(--white);
          border-color: var(--black);
        `}}
`,N=(0,u.PA)(e=>{let{$type:M,children:t,...r}=e;return(0,i.jsx)(D,{$type:M,...r,children:t})})},4487:(e,M,t)=>{var i=t(4848),r=t(6540),u=t(5338),a=t(3745),D=t(3523);let N=(0,D.DU)`
  :root {
    --black: #151514;
    --black5: #F2F2F2;
    --black21: #CDCDCD;
    --black27: #BFBFBF;
    --black31: #B6B6B5;
    --black47: #909090;
    --white-pure: #FFF;
    --white: #FEFEFE;
    --white47: #838382;
    --red: #C64839;
    --max-width: 1152px;
  }

  body {
    position: relative;
    padding: 0;
    margin: 0;
    background: var(--white-pure);
    color: var(--black);
    font-family: Inter, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.02em;
    
    @media screen and (max-width: 600px) {
      font-size: 13px;
      line-height: 16px;
    }
  }
  
  button {
    padding: 0;
    margin: 0;
    color: var(--black);
    background-color: var(--white);
    border: 1px solid var(--black);
    cursor: pointer;

    &:disabled {
      color: var(--black31);
      background-color: var(--black21);
      border-color: var(--black21);
      cursor: default;
    }
  }

  button:focus-visible,
  label:has(input:focus-visible) {
      outline: var(--red) solid 2px;
      outline-offset: 1px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    appearance: none;
  }

  input[type='number'],
  input[type="number"]:hover,
  input[type="number"]:focus {
    appearance: textfield;
  }
  
  p {
    padding: 0;
    margin: 0;
    overflow-wrap: break-word;
    word-break: normal;
    hyphens: auto;
    text-wrap: pretty;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 100dvh;
    max-width: var(--max-width);
    margin: 0 auto;
  }
`;var n=t(8217);t(4114);var g=t(7813);let l=class{constructor(){(0,g.l_)(this)}_isFormOpened=!1;get isFormOpened(){return this._isFormOpened}setIsFormOpened(e){this._isFormOpened=e}_values={};createValue(e,M){M.isFile?this._values[e]={required:M.required,value:[],isValid:M.isValid,range:M.range}:this._values[e]={required:M.required,value:"",isValid:M.isValid,range:M.range}}getStringValue(e){if(e in this._values&&"string"==typeof this._values[e].value)return this._values[e].value}getFileValue(e){if(e in this._values&&Array.isArray(this._values[e].value))return this._values[e].value}getRange(e){if(e in this._values&&Array.isArray(this._values[e].value)&&this._values[e].range)return this._values[e].range}setStringValue(e,M){e in this._values&&("string"==typeof this._values[e].value?this._values[e]={...this._values[e],value:M}:console.error("Вы пытаетесь сохранить строку в поле, которое содержит иные данные!"))}_validateFiles=(e,M)=>{M.range?M.value.length>=M.range.minFiles&&M.value.length<=M.range.maxFiles?this.setValidity(e,!0):M.value.length>M.range.maxFiles?(M.value=M.value.slice(0,M.range.maxFiles),this.setValidity(e,!0)):this.setValidity(e,!1):0===M.value.length?this.setValidity(e,!1):this.setValidity(e,!0)};setFileValue(e,M){e in this._values&&(Array.isArray(this._values[e].value)?(this._values[e].value.push(...M),this._validateFiles(e,this._values[e])):console.error("Вы пытаетесь сохранить файлы в поле, которое содержит иные данные!"))}removeFile(e,M){e in this._values&&Array.isArray(this._values[e].value)&&(this._values[e].value=this._values[e].value.filter(e=>e.id!==M),this._validateFiles(e,this._values[e]))}getValidity(e){if(e in this._values)return this._values[e].isValid}setValidity(e,M){e in this._values&&(this._values[e].isValid=M)}get canSubmit(){return Object.values(this._values).every(e=>e.isValid)}get dataToSend(){return Object.fromEntries(Object.entries(this._values).map(e=>{let{0:M,1:t}=e;return[M,t.value]}))}};class j{formStore=new l}var s=t(3443);let o=D.Ay.fieldset`
  display: flex;
  padding: 0;
  margin: 0;
  border: 0;
  gap: 4px;
`,T=(0,s.PA)(e=>{let{children:M}=e;return(0,i.jsx)(o,{children:M})}),x=D.Ay.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 10px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0;
  cursor: pointer;

  & > span {
    width: auto;
  }

  & > input {
    position: absolute;
    left: -9999px;
  }

  &:has(input:checked) {
    box-shadow: 0 4px 4px rgb(0 0 0 / 12%);
    border-radius: 3px;
  }

  &:not(:has(input:checked)) {
    color: var(--black47);
  }
`,c={Root:T,Variant:(0,s.PA)(e=>{let{children:M,checked:t=!1}=e;return(0,i.jsxs)(x,{children:[(0,i.jsx)("input",{id:M,type:"radio",name:"language",value:M,defaultChecked:t}),(0,i.jsx)("span",{children:M})]})})};var O=t(6777);let d=D.Ay.h1`
  display: flex;
  width: auto;
  height: 16px;
  padding: 0;
  margin: 0;
`,I=(0,s.PA)(()=>(0,i.jsx)(d,{children:(0,i.jsx)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMTMyIDE3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTUuNTg2OSA4LjVDMTUuNTg2OSAxMi45MTg2IDEyLjA5OCAxNi41IDcuNzkzNDQgMTYuNUMzLjQ4ODkgMTYuNSAwIDEyLjkxODYgMCA4LjVDMCA0LjA4MTM3IDMuNDg4OSAwLjUgNy43OTM0NCAwLjVDMTIuMDk4IDAuNSAxNS41ODY5IDQuMDgxMzcgMTUuNTg2OSA4LjVaTTIzLjkxMDkgMi45NDc3OUgyMC42NTk0VjEzLjc2NjJIMjMuOTEwOVY5LjY4NTMySDI3LjE2MTZWMTMuNzY1M0gzMC40MTMxVjIuOTQ2ODVIMjcuMTYxNlY2LjY4NzIxSDIzLjkxMDlWMi45NDc3OVpNMzIuMDI3OSAxMi4xNzM2QzMzLjI2MjMgMTMuNTE3OSAzNC41MjcgMTMuOTk3NiAzNS44OTcxIDEzLjk5NzZDMzguODE3OCAxMy45OTc2IDM5LjkwMiAxMi4yODE3IDM5LjkwMiAxMC40ODk3QzM5LjkwMiA2LjMxNjU2IDM1LjUwNTggNy4wNTg4IDM1LjUwNTggNS44ODM4MkMzNS41MDU4IDUuNDA0OTkgMzUuNzYxNSA1LjI4MDgxIDM2LjIyNzkgNS4yODA4MUMzNi45ODAzIDUuMjgwODEgMzcuNDYyNCA1LjU1OTI3IDM4LjIxNDggNi4yMDgzN0wzOS44NTYxIDQuMjc2MTFDMzguNjM2NCAzLjIxMDI1IDM3Ljc2MyAyLjcxNTQzIDM2LjI0MjYgMi43MTU0M0MzMy43Mjg4IDIuNzE1NDMgMzIuNDMzOSA0LjI5MjEgMzIuNDMzOSA1Ljk5MkMzMi40MzM5IDEwLjIyNjIgMzYuODE1NCA5LjM2MDc3IDM2LjgxNTQgMTAuNDg5N0MzNi44MTU0IDEwLjk5OTUgMzYuNDA4NSAxMS4yOTMgMzUuODk3MSAxMS4yOTNDMzUuNDAwNCAxMS4yOTMgMzQuNDIxNiAxMS4wNjE2IDMzLjY2OTIgMTAuMjQyMkwzMi4wMjc5IDEyLjE3MzZaTTQ4LjE4MzkgMTAuODYwM0g0NC44ODQ3VjkuNjg1MzJINDcuOTg3OFY2LjkzNDYySDQ0Ljg4NDdWNS44NTI3OEg0OC4xODM5VjIuOTQ3NzlINDEuNjMzMVYxMy43NjYySDQ4LjE4MzlWMTAuODYwM1pNNjAuNjI2NCAzLjExODA2SDU5LjQ5VjkuNDI4NUM1OS40OSAxMS40MDIyIDU4LjA3NjkgMTIuNjczMSA1Ni4yOTk5IDEyLjY3MzFDNTQuNTIyOSAxMi42NzMxIDUzLjEwOTggMTEuNDAyMiA1My4xMDk4IDkuNDI4NVYzLjExODA2SDUxLjk3MzRWOS40Mjg1QzUxLjk3MzQgMTIuMDE1NSA1My43NjUgMTMuODEwNCA1Ni4yOTk5IDEzLjgxMDRDNTguODM0OCAxMy44MTA0IDYwLjYyNjQgMTIuMDE1NSA2MC42MjY0IDkuNDI4NVYzLjExODA2Wk02NC4yMzgxIDMuMTE4MDZINjMuMTAxN1YxMy41ODU2SDY0LjIzODFWNS4xNTE5M0w3MC40NzM2IDEzLjU4NTZINzEuNjFWMy4xMTgwNkg3MC40NzM2VjExLjU2NjhMNjQuMjM4MSAzLjExODA2Wk03NS41OTQ3IDMuMTE4MDZINzQuNDU4M1YxMy41ODU2SDc1LjU5NDdWMy4xMTgwNlpNNzcuMjg0NiAzLjExODA2TDgxLjU1MzQgMTMuNTg1Nkg4MS45MTczTDg2LjE4NjEgMy4xMTgwNkg4NC45MTg2TDgxLjcyODUgMTEuMTE4MUw3OC41NTMgMy4xMTgwNkg3Ny4yODQ2Wk05Mi43NDY5IDEyLjQ1MDFIODguODI4MlY4LjcxMTY3SDkyLjM4M1Y3LjU3NTI2SDg4LjgyODJWNC4yNTU0MUg5Mi43NDY5VjMuMTE4MDZIODcuNjkxOFYxMy41ODU2SDkyLjc0NjlWMTIuNDUwMVpNOTcuMjg5NyA5LjYwODE4Qzk4LjEyIDkuNjA4MTggOTguODYzMiAxMy42NzU5IDEwMS4yMjMgMTMuNjc1OUMxMDEuNDQxIDEzLjY3NTkgMTAxLjY2IDEzLjY0NTggMTAxLjg2NCAxMy41ODY1VjEyLjQyQzEwMS43NDcgMTIuNDY1MiAxMDEuNjE2IDEyLjQ4MDIgMTAxLjQ4NSAxMi40ODAyQzEwMC4wNTcgMTIuNDgwMiA5OS40MDIxIDkuNzg4ODEgOTguNTU3MSA5LjQ0NDVDMTAwLjA0MyA5LjIwNTU1IDEwMS4xNjQgNy45MzM2OCAxMDEuMTY0IDYuMzc4NjVDMTAxLjE2NCA0LjUyNDQ2IDk5LjY3ODkgMy4xMTkgOTcuOTAxIDMuMTE5SDk0Ljk3MjlWMTMuNTg2NUg5Ni4xMDkzVjkuNjA4MThIOTcuMjg5N1pNOTYuMTEwMiA4LjQ3MTc4VjQuMjU1NDFIOTcuODAwMUM5OC45ODA1IDQuMjU1NDEgMTAwLjA0NCA1LjEwNzcxIDEwMC4wNDQgNi4zNzg2NUMxMDAuMDQ0IDcuNjQ5NTggOTguOTgwNSA4LjQ3MTc4IDk3LjgwMDEgOC40NzE3OEg5Ni4xMTAyWk0xMDQuMzggNS43MDYwMkMxMDQuMzggNC42NTg5OCAxMDUuMjExIDMuOTg2MzYgMTA2LjQ2MyAzLjk4NjM2QzEwNy42MjkgMy45ODYzNiAxMDguMzE0IDQuNTA5NDEgMTA5LjI0NiA1LjQ2NzA3TDEwOS45NiA0LjUyNTRDMTA4Ljg4MiAzLjQ3ODM2IDEwNy45OTMgMi44OTUxMSAxMDYuNDc4IDIuODk1MTFDMTA0LjU3IDIuODk1MTEgMTAzLjI4OCA0LjAxNjQ2IDEwMy4yODggNS43MDY5NkMxMDMuMjg4IDkuODMzOTYgMTA4Ljk1NSA3LjkyMDUxIDEwOC45NTUgMTAuNjcyMkMxMDguOTU1IDExLjczNDIgMTA4LjA1MSAxMi43MDYgMTA2LjUyMiAxMi43MDZDMTA1LjM4NiAxMi43MDYgMTA0LjU3IDEyLjE1MjkgMTAzLjY1MiAxMS4yNDA0TDEwMi45NTIgMTIuMTIyOEMxMDQuMDMgMTMuMjI5MSAxMDUuMDY1IDEzLjgxMjMgMTA2LjUyMiAxMy44MTIzQzEwOC42OTMgMTMuODEyMyAxMTAuMTA1IDEyLjM2MTcgMTEwLjEwNSAxMC42NTcxQzExMC4xMDUgNi42MTc1OSAxMDQuMzggOC41MTY5MyAxMDQuMzggNS43MDYwMlpNMTEzLjM3NyAzLjExODA2SDExMi4yNDFWMTMuNTg1NkgxMTMuMzc3VjMuMTE4MDZaTTExOS41NzQgMTMuNTg2NVY0LjI1NTQxSDEyMy4wNTZWMy4xMTgwNkgxMTQuOTU2VjQuMjU0NDdIMTE4LjQzOFYxMy41ODU2SDExOS41NzRWMTMuNTg2NVpNMTI3LjM5NyAxMC4wMjY4VjEzLjU4NTZIMTI4LjUzM1YxMC4wMjY4TDEzMiAzLjExODA2SDEzMC43MThMMTI3Ljk2NSA4LjYyMTM2TDEyNS4yMTIgMy4xMTgwNkgxMjMuOTNMMTI3LjM5NyAxMC4wMjY4WiIgZmlsbD0iIzEwMkQ2OSIvPgo8cGF0aCBkPSJNOS4wOTkyIDcuOTMwNDdDOS42MDMxNSA3LjcxNzg1IDkuOTA5OTEgNy4zOTE4OSAxMC4xMTE3IDcuMTQ0NjFDMTAuNDk2OSA2LjY5MTI3IDEwLjY1NCA2LjEzNTgzIDEwLjY1NCA1LjYwOTQzQzEwLjY1NCA1LjE4NTEzIDEwLjUzOTggNC4zMzY1MSA5LjgxMzEzIDMuNzUyOTdDOS4zMTM3NSAzLjM1NzcgOC44NzE4NyAzLjE2NzU2IDcuODE3NDEgMy4xNjc1Nkg3LjI4MzMzQzcuMjY1OTggMy4xNjY2MyA3LjI1MDQ2IDMuMTY2NjMgNy4yMzAzOCAzLjE2NjYzSDUuMDI4MzJWMTMuODMzM0gxMS4zMTRWMTEuNzg1OEMxMS4zMTMxIDkuODI2MjcgMTAuNjk3OCA4LjUwOTMzIDkuMDk5MiA3LjkzMDQ3Wk05Ljg4OTgyIDEzLjI0NTFIOC43NTU5M1Y5LjY4MzlINy40NDc2NlYxMy4yNDg4SDYuNDQ1MjNWMy42OTc3MUw3LjQ3NTA1IDMuNjk4NjVDNy44NjAzMiAzLjY5ODY1IDguNDQ0NjEgMy43ODY2OSA4Ljg1ODE4IDQuMzEzMUM5LjA3MzY0IDQuNTgwMDQgOS4yMDUxIDQuOTM0MSA5LjI1MTY2IDUuMjkwMDNINy40NDc2NlY1LjgxNTVIOS4yNjYyN0M5LjI1MjU4IDYuMTU0NTcgOS4xODQxIDYuNTM0ODUgOC44NiA2LjkzODU1QzguNTc1MTYgNy4zMDM4NSA4LjEwNTkgNy42NDM4NSA3LjQ0NTgzIDcuNjQzODVDNy40NDIxOCA3LjY0Mzg1IDcuNDM4NTMgNy42NDM4NSA3LjQzMzk2IDcuNjQzODVWOC4xNzY4MUM5LjIwMTQ1IDguMTc2ODEgOS44ODg5MSA5LjM4MTM2IDkuODg4OTEgMTEuNTg3MlYxMy4yNDUxSDkuODg5ODJaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGQ9Ik05LjEwMDExIDcuOTMwNDdDOS42MDQwNyA3LjcxNzg1IDkuOTEwODIgNy4zOTE4OSAxMC4xMTI2IDcuMTQ0NjFDMTAuNDk3OSA2LjY5MTI3IDEwLjY1NDkgNi4xMzU4MyAxMC42NTQ5IDUuNjA5NDNDMTAuNjU0OSA1LjE4NTEzIDEwLjU0MDggNC4zMzY1MSA5LjgxNDA1IDMuNzUyOTdDOS4zMTQ2NiAzLjM1NzcgOC44NzI3OSAzLjE2NzU2IDcuODE4MzIgMy4xNjc1Nkg3LjI4NDI0QzcuMjY2ODkgMy4xNjY2MyA3LjI1MTM3IDMuMTY2NjMgNy4yMzEyOSAzLjE2NjYzSDUuMDI4MzJWMTMuODMzM0gxMS4zMTRWMTEuNzg1OEMxMS4zMTQgOS44MjYyNyAxMC42OTg3IDguNTA5MzMgOS4xMDAxMSA3LjkzMDQ3Wk05Ljg5MDczIDEzLjI0NTFIOC43NTY4NFY5LjY4MzlINy40NDg1N1YxMy4yNDg4SDYuNDQ2MTRWMy42OTc3MUw3LjQ3NTk2IDMuNjk4NjVDNy44NjEyMyAzLjY5ODY1IDguNDQ1NTIgMy43ODY2OSA4Ljg1OTA5IDQuMzEzMUM5LjA3NDU1IDQuNTgwMDQgOS4yMDYwMiA0LjkzNDEgOS4yNTI1OCA1LjI5MDAzSDcuNDQ4NTdWNS44MTU1SDkuMjY3MThDOS4yNTM0OSA2LjE1NDU3IDkuMTg1MDIgNi41MzQ4NSA4Ljg2MDkyIDYuOTM4NTVDOC41NzYwOCA3LjMwMzg1IDguMTA2ODEgNy42NDM4NSA3LjQ0Njc1IDcuNjQzODVDNy40NDMwOSA3LjY0Mzg1IDcuNDM5NDQgNy42NDM4NSA3LjQzNDg4IDcuNjQzODVWOC4xNzY4MUM5LjIwMjM2IDguMTc2ODEgOS44ODk4MiA5LjM4MTM2IDkuODg5ODIgMTEuNTg3MlYxMy4yNDUxSDkuODkwNzNaIiBmaWxsPSIjRkVGRUZFIi8+Cjwvc3ZnPgo=",alt:"Higher School of Economics's logo"})})),A=D.Ay.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,y=(0,s.PA)(()=>{let{isCompact:e}=(0,r.useContext)(a.B),{formStore:M}=(0,n.P)();return(0,i.jsxs)(A,{children:[e&&M.isFormOpened&&(0,i.jsx)(O.A,{}),(0,i.jsx)(I,{})]})}),z=D.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 48px;
  color: var(--black);
`,L=(0,s.PA)(()=>(0,i.jsxs)(z,{children:[(0,i.jsx)(y,{}),(0,i.jsxs)(c.Root,{children:[(0,i.jsx)(c.Variant,{checked:!0,children:"RU"}),(0,i.jsx)(c.Variant,{children:"EN"})]})]}));var h=t(4224);let p=D.Ay.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
`,E=(0,r.lazy)(()=>Promise.all([t.e(192),t.e(313),t.e(676),t.e(272)]).then(t.bind(t,3272))),k=(0,s.PA)(()=>{let{formStore:e}=(0,n.P)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L,{}),(0,i.jsx)(p,{children:e.isFormOpened?(0,i.jsx)(r.Suspense,{fallback:(0,i.jsx)("div",{children:"Загрузка анкеты..."}),children:(0,i.jsx)(E,{})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Какой-то очень большой текст, объясняющий, в каком мероприятии человек будет участвовать. Он должен быть достаточно длинным, чтобы заполнить пространство и дать понять, что здесь будет форма для заполнения. При этом он не должен отпугнуть потенциальных участников."}),(0,i.jsx)("p",{children:"К моменту прочтения этого текста у потенциального участника должно сформироваться понимание того, что от него требуется. Кроме того, должно быть ясно, что он получит в результате участия в мероприятии. В случае, если всё понятно, то можно нажать на кнопку ниже, чтобы начать заполнение анкеты участника."}),(0,i.jsx)(h.A,{$type:"primary",onClick:()=>e.setIsFormOpened(!0),type:"button",children:"Открыть анкету"})]})})]})});(0,u.createRoot)(document.getElementById("root")).render((0,i.jsxs)(r.StrictMode,{children:[(0,i.jsx)(N,{}),(0,i.jsx)(a.Q,{children:(0,i.jsx)(()=>(0,i.jsx)(n.t,{value:new j,children:(0,i.jsx)(k,{})}),{})})]}))},6777:(e,M,t)=>{t.d(M,{A:()=>c});var i,r,u,a=t(4848),D=t(3523),N=t(3443),n=t(6540);function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var M=1;M<arguments.length;M++){var t=arguments[M];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(null,arguments)}let l=function(e){return n.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:21,height:21,fill:"none"},e),i||(i=n.createElement("rect",{width:16,height:16,x:2.5,y:2.5,stroke:"#909090",strokeWidth:1.5,rx:2.25})),r||(r=n.createElement("path",{fill:"#838382",stroke:"#838382",strokeLinecap:"round",strokeLinejoin:"round",d:"m10.5 10.863-2.196 2.196a.224.224 0 0 1-.32-.001q-.028-.029-.037-.04c-.085-.094-.092-.236-.001-.326l2.191-2.192-2.196-2.196a.227.227 0 0 1 0-.32l.042-.043a.227.227 0 0 1 .32 0l2.197 2.196 2.196-2.196a.227.227 0 0 1 .32 0l.043.042a.227.227 0 0 1 0 .32L10.863 10.5l2.196 2.196a.224.224 0 0 1-.001.32q-.029.028-.04.037c-.094.085-.236.091-.326.001z"})))};function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var M=1;M<arguments.length;M++){var t=arguments[M];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(null,arguments)}let s=function(e){return n.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:72,height:72,fill:"none"},e),u||(u=n.createElement("path",{fill:"#909090",d:"M66 10.615 40.612 36 66 61.385 61.385 66 35.996 40.614l-25.38 25.38L6 61.38l25.38-25.38L6 10.621l4.615-4.615 25.381 25.378L61.384 6z"})))};var o=t(8217),T=t(3745);let x=D.Ay.button`
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 3px;
  background-color: transparent;

  @media screen and (min-width: 601px) {
    position: fixed;
    right: 64px;
    top: 64px;
  }
`,c=(0,N.PA)(()=>{let{formStore:e}=(0,o.P)(),{isCompact:M}=(0,n.useContext)(T.B);return(0,a.jsx)(x,{onClick:()=>e.setIsFormOpened(!1),children:M?(0,a.jsx)(l,{}):(0,a.jsx)(s,{})})})},8217:(e,M,t)=>{t.d(M,{P:()=>N,t:()=>D});var i=t(4848),r=t(6540),u=t(3443);let a=(0,r.createContext)(null),D=(0,u.PA)(e=>{let{children:M,value:t}=e;return(0,i.jsx)(a.Provider,{value:t,children:M})}),N=()=>{let e=(0,r.useContext)(a);if(!e)throw Error("Root component is not wrapped with StoreProvider");return e}}},M={};function t(i){var r=M[i];if(void 0!==r)return r.exports;var u=M[i]={exports:{}};return e[i].call(u.exports,u,u.exports,t),u.exports}t.m=e,(()=>{var e=[];t.O=(M,i,r,u)=>{if(i){u=u||0;for(var a=e.length;a>0&&e[a-1][2]>u;a--)e[a]=e[a-1];e[a]=[i,r,u];return}for(var D=1/0,a=0;a<e.length;a++){for(var[i,r,u]=e[a],N=!0,n=0;n<i.length;n++)(!1&u||D>=u)&&Object.keys(t.O).every(e=>t.O[e](i[n]))?i.splice(n--,1):(N=!1,u<D&&(D=u));if(N){e.splice(a--,1);var g=r();void 0!==g&&(M=g)}}return M}})(),t.n=e=>{var M=e&&e.__esModule?()=>e.default:()=>e;return t.d(M,{a:M}),M},t.d=(e,M)=>{for(var i in M)t.o(M,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:M[i]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((M,i)=>(t.f[i](e,M),M),[])),t.u=e=>""+(({313:"vendor.validator",676:"vendor.uuid"})[e]||e)+".bundle.js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,M)=>Object.prototype.hasOwnProperty.call(e,M),(()=>{var e={},M="test-hse:";t.l=(i,r,u,a)=>{if(e[i])return void e[i].push(r);if(void 0!==u)for(var D,N,n=document.getElementsByTagName("script"),g=0;g<n.length;g++){var l=n[g];if(l.getAttribute("src")==i||l.getAttribute("data-webpack")==M+u){D=l;break}}D||(N=!0,(D=document.createElement("script")).charset="utf-8",D.timeout=120,t.nc&&D.setAttribute("nonce",t.nc),D.setAttribute("data-webpack",M+u),D.src=i),e[i]=[r];var j=(M,t)=>{D.onerror=D.onload=null,clearTimeout(s);var r=e[i];if(delete e[i],D.parentNode&&D.parentNode.removeChild(D),r&&r.forEach(e=>e(t)),M)return M(t)},s=setTimeout(j.bind(null,void 0,{type:"timeout",target:D}),12e4);D.onerror=j.bind(null,D.onerror),D.onload=j.bind(null,D.onload),N&&document.head.appendChild(D)}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/test-hse/",(()=>{var e={792:0};t.f.j=(M,i)=>{var r=t.o(e,M)?e[M]:void 0;if(0!==r)if(r)i.push(r[2]);else{var u=new Promise((t,i)=>r=e[M]=[t,i]);i.push(r[2]=u);var a=t.p+t.u(M),D=Error();t.l(a,i=>{if(t.o(e,M)&&(0!==(r=e[M])&&(e[M]=void 0),r)){var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;D.message="Loading chunk "+M+` failed.
(`+u+": "+a+")",D.name="ChunkLoadError",D.type=u,D.request=a,r[1](D)}},"chunk-"+M,M)}},t.O.j=M=>0===e[M];var M=(M,i)=>{var r,u,[a,D,N]=i,n=0;if(a.some(M=>0!==e[M])){for(r in D)t.o(D,r)&&(t.m[r]=D[r]);if(N)var g=N(t)}for(M&&M(i);n<a.length;n++)u=a[n],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(g)},i=self.webpackChunktest_hse=self.webpackChunktest_hse||[];i.forEach(M.bind(null,0)),i.push=M.bind(null,i.push.bind(i))})(),t.nc=void 0;var i=t.O(void 0,[192,842,207,70,753,198,261,172,893,779,604],()=>t(4487));i=t.O(i)})();