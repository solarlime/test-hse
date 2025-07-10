import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import { HTMLProps } from 'react';
import { TDropdown } from '../../interfaces/form';
import { useStore } from '../../store/StoreProvider';
import arrow from '../../assets/arrow.svg';

const StyledDropdownWrapper = styled.div`
  display: flex;
  align-items: center;

  &::after {
    content: url(${arrow});
    width: 16px;
    height: 16px;
    margin-left: calc(-16px);
    transform: translateX(-16px);
    pointer-events: none;
  }
`;

const StyledDropdown = styled.select<{
  $value?: string;
  $defaultValue: string;
}>`
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

  @media screen and (max-width: 500px) {
    font-size: 13px;
    line-height: 16px;
  }

  ${({ $value, $defaultValue }) =>
    $value && $value === $defaultValue
      ? css`
          color: var(--black27);
        `
      : css`
          color: var(--black);
        `}

  &::placeholder {
    color: var(--black27);
  }

  &:focus-visible {
    outline: var(--red) solid 2px;
    outline-offset: 1px;
  }
`;

const Dropdown = observer(
  ({
    id,
    children,
    defaultValue,
    ...props
  }: {
    id: TDropdown['id'];
    children: TDropdown['options'];
    defaultValue: TDropdown['placeholder'];
  } & HTMLProps<HTMLSelectElement>) => {
    const { formStore } = useStore();

    return (
      <StyledDropdownWrapper>
        <StyledDropdown
          id={id}
          value={
            formStore.getStringValue(id)?.length
              ? formStore.getStringValue(id)
              : defaultValue
          }
          $value={
            formStore.getStringValue(id)?.length
              ? formStore.getStringValue(id)
              : defaultValue
          }
          $defaultValue={defaultValue}
          onChange={(e) => {
            formStore.setStringValue(id, e.target.value);
            if (formStore.getValidity(id) === false) {
              formStore.setValidity(id, true);
            }
          }}
          {...props}
        >
          <option value={defaultValue} disabled>
            {defaultValue}
          </option>
          {children.map((option) => (
            <option key={uuidv4()} value={option}>
              {option}
            </option>
          ))}
        </StyledDropdown>
      </StyledDropdownWrapper>
    );
  },
);

export default Dropdown;
