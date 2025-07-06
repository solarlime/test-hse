import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #151514;
    --black21: #CDCDCD;
    --black31: #B6B6B5;
    --black47: #909090;
    --white-pure: #FFF;
    --white: #FEFEFE;
    --white47: #838382;
  }

  body {
    padding: 0;
    margin: 0;
    background: var(--white-pure);
    color: var(--black);
    font-family: Inter, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.02em;
    
    @media screen and (max-width: 500px) {
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
      outline: var(--black) solid 2px;
      outline-offset: 1px;
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
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 100dvh;
    max-width: 1152px;
    margin: 0 auto;
  }
`;
