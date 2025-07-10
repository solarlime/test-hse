import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export const buttonStyle = css`
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
`;

const StyledButton = styled.button<{ $type: 'primary' | 'secondary' }>`
  ${buttonStyle}

  ${({ $type }) => {
    switch ($type) {
      case 'secondary':
        return css`
          background-color: var(--white);
          color: var(--black);
          border-color: var(--black);
        `;
      case 'primary':
      default: {
        return css`
          background-color: var(--black);
          color: var(--white);
          border-color: var(--black);
        `;
      }
    }
  }}
`;

const Button = observer(
  ({
    $type,
    children,
    ...props
  }: {
    $type: 'primary' | 'secondary';
    children: string | ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <StyledButton $type={$type} {...props}>
        {children}
      </StyledButton>
    );
  },
);

export default Button;
