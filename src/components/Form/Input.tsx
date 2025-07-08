import styled from 'styled-components';

const Input = styled.input`
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

  @media screen and (max-width: 500px) {
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
`;

export default Input;
