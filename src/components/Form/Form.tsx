import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import CloseIcon from '../shared/CloseIcon';

const FormContainer = styled.div<{ $isCompact?: boolean }>`
  ${({ $isCompact }) =>
    !$isCompact
      ? css`
          position: absolute;
          inset: 0;
          padding: 88px;
          background: var(--white-pure);
        `
      : css`
          position: static;
        `}
`;

const Form = observer(() => {
  const { isCompact } = useContext(AppContext);

  return (
    <FormContainer $isCompact={isCompact}>
      {!isCompact && <CloseIcon />}
      <form>Form</form>
    </FormContainer>
  );
});

export default Form;
