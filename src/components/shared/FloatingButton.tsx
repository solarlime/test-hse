import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const FloatingButton = observer(
  ({
    children,
    ...props
  }: {
    children: ReactNode;
    $positionX: 'left' | 'right';
    $positionY: 'top' | 'bottom';
    $buttonType?: 'drag';
  } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...props}>{children}</button>;
  },
);

const StyledFloatingButton = styled(FloatingButton)<{
  $positionX: 'left' | 'right';
  $positionY: 'top' | 'bottom';
  $buttonType?: 'drag';
}>`
  position: absolute;
  ${({ $positionX }) => $positionX}: 4px;
  ${({ $positionY }) => $positionY}: 4px;

  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  background-color: rgb(24 26 28 / 45%);
  backdrop-filter: blur(4px);
  ${({ $buttonType }) =>
    $buttonType === 'drag' &&
    css`
      cursor: grab;
    `}

  & > svg {
    display: block;
  }
`;

export default StyledFloatingButton;
