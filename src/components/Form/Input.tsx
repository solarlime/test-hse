import styled from 'styled-components';
import { HTMLProps } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/StoreProvider';
import { TCommonFields, TInput } from '../../interfaces/form';
import { isAlphanumeric, isNumeric } from 'validator';

const Input = observer(
  ({
    id,
    type,
    ...props
  }: {
    id: TCommonFields['id'];
    type: TInput['type'];
  } & HTMLProps<HTMLInputElement>) => {
    const { formStore } = useStore();

    return (
      <input
        onChange={(event) => {
          if (formStore.getValidity(id)) formStore.setValidity(id, false);
          formStore.setStringValue(id, event.target.value);
        }}
        onBlur={() => {
          if (formStore.getStringValue(id)) {
            formStore.setStringValue(id, formStore.getStringValue(id)!.trim());
            switch (type) {
              case 'number': {
                if (
                  isNumeric(formStore.getStringValue(id)!) &&
                  1900 < +formStore.getStringValue(id)! &&
                  +formStore.getStringValue(id)! <= new Date().getFullYear()
                ) {
                  formStore.setValidity(id, true);
                } else {
                  formStore.setValidity(id, false);
                }
                break;
              }
              case 'text':
              default: {
                if (
                  isAlphanumeric(formStore.getStringValue(id)!, 'ru-RU', {
                    ignore: ' .,-+№!%?&"—:–',
                  })
                ) {
                  formStore.setValidity(id, true);
                } else {
                  formStore.setValidity(id, false);
                }
                break;
              }
            }
          }
        }}
        type={type}
        value={formStore.getStringValue(id) ?? ''}
        {...props}
      />
    );
  },
);

const StyledInput = styled(Input)`
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
`;

export default StyledInput;
