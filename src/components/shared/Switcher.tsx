import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import type { ReactNode } from 'react';

const StyledRoot = styled.fieldset`
  display: flex;
  padding: 0;
  margin: 0;
  border: 0;
  gap: 4px;
`;

const Root = observer(({ children }: { children: ReactNode }) => {
  return <StyledRoot>{children}</StyledRoot>;
});

const StyledVariant = styled.label`
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
`;

const Variant = observer(
  ({ children, checked = false }: { children: string; checked?: boolean }) => {
    return (
      <StyledVariant>
        <input
          id={children}
          type="radio"
          name="language"
          value={children}
          defaultChecked={checked}
        />
        <span>{children}</span>
      </StyledVariant>
    );
  },
);

export default {
  Root,
  Variant,
};
