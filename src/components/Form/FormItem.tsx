import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { HTMLProps } from 'react';
import {
  TCommonFields,
  TInput,
  TDropdown,
  TFileInput,
} from '../../interfaces/form';
import Dropdown from './Dropdown';
import Input from './Input';
import FileInput from './FileInput';

const StyledFormItem = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

const StyledLabel = styled.label<{ $required?: boolean }>`
  color: var(--black47);
  font-size: 15px;
  line-height: 20px;

  @media screen and (max-width: 500px) {
    font-size: 13px;
    line-height: 16px;
  }

  ${({ $required }) =>
    $required &&
    css`
      &::after {
        content: '*';
        color: var(--red);
        margin-left: 8px;
      }
    `}
`;

const FormItem = observer(
  ({
    children,
    required,
    id,
    type,
    options,
    multiple,
    placeholder,
    ...props
  }: {
    children: string;
    required?: TCommonFields['required'];
    id: TCommonFields['id'];
    type: TInput['type'] | TDropdown['type'] | TFileInput['type'];
    multiple?: boolean;
    placeholder: TCommonFields['placeholder'];
    options?: TDropdown['options'];
  } & HTMLProps<HTMLInputElement> &
    HTMLProps<HTMLSelectElement>) => {
    return (
      <StyledFormItem>
        <StyledLabel htmlFor={id} $required={required}>
          {children}
        </StyledLabel>
        {type === 'dropdown' && (
          <Dropdown
            id={id}
            name={children}
            // @ts-ignore
            defaultValue={placeholder}
            required={required}
            {...props}
          >
            {options!}
          </Dropdown>
        )}
        {(type === 'text' || type === 'number') && (
          <Input
            type={type}
            id={id}
            name={children}
            placeholder={placeholder}
            required={required}
            {...props}
          />
        )}
        {type === 'file' && (
          <FileInput
            type={type}
            id={id}
            name={children}
            placeholder={placeholder}
            required={required}
            multiple={multiple}
            {...props}
          />
        )}
      </StyledFormItem>
    );
  },
);

export default FormItem;
