import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import Close from '../../assets/close.svg?react';
import BigClose from '../../assets/close_big.svg?react';
import { useStore } from '../../store/StoreProvider';
import { AppContext } from '../../AppContext';

const StyledCloseIcon = styled.button`
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 3px;
  background-color: transparent;

  @media screen and (min-width: 501px) {
    position: absolute;
    right: 64px;
    top: 64px;
  }
`;

const CloseIcon = observer(() => {
  const { formStore } = useStore();
  const { isCompact } = useContext(AppContext);

  return (
    <StyledCloseIcon onClick={() => formStore.setIsFormOpened(false)}>
      {isCompact ? <Close /> : <BigClose />}
    </StyledCloseIcon>
  );
});

export default CloseIcon;
