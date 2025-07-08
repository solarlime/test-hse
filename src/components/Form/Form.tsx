import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../../AppContext';
import CloseIcon from '../shared/CloseIcon';
import FormItem from './FormItem';
import { IInput, IDropdown } from '../../interfaces/form';

const FormContainer = styled.div<{ $isCompact?: boolean }>`
  ${({ $isCompact }) =>
    !$isCompact
      ? css`
          position: absolute;
          inset: 0;
          padding: 88px 0 0;
          background: var(--white-pure);
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

const fields: Array<IInput | IDropdown> = [
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
];

const Form = observer(() => {
  const { isCompact } = useContext(AppContext);

  return (
    <FormContainer $isCompact={isCompact}>
      {!isCompact && <CloseIcon />}
      <StyledFormWrapper>
        <StyledForm>
          <FormHeader>Анкета участника</FormHeader>
          {fields.map((field) => (
            <FormItem
              key={field.id}
              id={field.id}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              options={field.type === 'dropdown' ? field.options : undefined}
            >
              {field.label}
            </FormItem>
          ))}
        </StyledForm>
      </StyledFormWrapper>
    </FormContainer>
  );
});

export default Form;
