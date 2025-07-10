import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../../AppContext';
import CloseIcon from '../shared/CloseIcon';
import FormItem from './FormItem';
import { TInput, TDropdown, TFileInput } from '../../interfaces/form';
import Button from '../shared/Button';
import { useStore } from '../../store/StoreProvider';

const FormContainer = styled.div<{ $isCompact?: boolean }>`
  ${({ $isCompact }) =>
    !$isCompact
      ? css`
          position: absolute;
          inset: 0;
          padding: 88px 0 80px;
          background: var(--white-pure);
          overflow-y: scroll;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            width: 0;
          }
        `
      : css`
          display: flex;
          flex-direction: column;
          width: 100%;
        `}
`;

const StyledFormWrapper = styled.div`
  display: grid;
  grid-template-areas: 'form form form empty';
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 24px;
  max-width: var(--max-width);
  padding: 0 10px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    margin: 0;
  }
`;

const StyledForm = styled.form`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const FormHeader = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 60px;
  line-height: 70px;

  @media screen and (max-width: 500px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const FormFields = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  border: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const fields: Array<TInput | TDropdown | TFileInput> = [
  {
    id: uuidv4(),
    label: 'Обложка',
    type: 'file',
    multiple: false,
    placeholder:
      'Выберите изображение с устройства (рекомендуемый размер: 1140x1600px)',
    required: true,
  },
  {
    id: uuidv4(),
    label: 'Номинация',
    type: 'dropdown',
    options: ['Номинация 1', 'Номинация 2', 'Номинация 3'],
    placeholder: 'Выберите номинацию',
    required: true,
  },
  {
    id: uuidv4(),
    label: 'Подноминация',
    type: 'dropdown',
    options: ['Подноминация 1', 'Подноминация 2', 'Подноминация 3'],
    placeholder: 'Выберите подноминацию',
    required: true,
  },
  {
    id: uuidv4(),
    label: 'Название проекта',
    type: 'text',
    placeholder: 'Введите название проекта',
    required: true,
  },
  {
    id: uuidv4(),
    label: 'Год реализации проекта',
    type: 'number',
    placeholder: 'Введите год',
    required: true,
  },
  {
    id: uuidv4(),
    label: 'В каких СМИ проект был опубликован?',
    type: 'text',
    placeholder: 'Введите названия СМИ',
    required: false,
  },
  {
    id: uuidv4(),
    label: '3-10 изображений проекта, jpeg, высота < 1500 рх',
    type: 'file',
    multiple: true,
    minFiles: 3,
    maxFiles: 10,
    placeholder: 'Добавить',
    required: true,
  },
  {
    id: uuidv4(),
    label: 'Фотограф съёмки',
    type: 'text',
    placeholder: 'Укажите фотографа съёмки',
    required: false,
  },
];

const Form = observer(() => {
  const { isCompact } = useContext(AppContext);
  const { formStore } = useStore();

  useEffect(() => {
    fields.forEach((field) => {
      const compoundId = field.label + '-' + field.id;

      if (
        !formStore.getStringValue(compoundId) &&
        !formStore.getFileValue(compoundId)
      )
        formStore.createValue(
          compoundId,
          field.type === 'file'
            ? {
                required: field.required,
                isFile: true,
                range: field.multiple
                  ? {
                      minFiles: field.minFiles,
                      maxFiles: field.maxFiles,
                    }
                  : undefined,
                isValid: !field.required,
              }
            : {
                required: field.required,
                isFile: false,
                range: undefined,
                isValid: !field.required,
              },
        );
    });
  }, []);

  return (
    <FormContainer $isCompact={isCompact}>
      {!isCompact && <CloseIcon />}
      <StyledFormWrapper>
        <StyledForm>
          <FormHeader>Анкета участника</FormHeader>
          <FormFields>
            {fields.map((field) => {
              const compoundId = field.label + '-' + field.id;
              return (
                <FormItem
                  key={field.id}
                  id={compoundId}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  options={
                    field.type === 'dropdown' ? field.options : undefined
                  }
                  multiple={field.type === 'file' ? field.multiple : undefined}
                >
                  {field.label}
                </FormItem>
              );
            })}
          </FormFields>
          <Button
            $type="primary"
            type="button"
            disabled={!formStore.canSubmit}
            onClick={() => alert(JSON.stringify(formStore.dataToSend))}
          >
            Отправить
          </Button>
        </StyledForm>
      </StyledFormWrapper>
    </FormContainer>
  );
});

export default Form;
