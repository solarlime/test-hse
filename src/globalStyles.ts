import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
`;
